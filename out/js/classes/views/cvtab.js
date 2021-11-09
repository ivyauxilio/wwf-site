/**
 * CvTabViewクラス定義用スクリプトファイル
 * @requires jQuery, Velocity, underscore
 * @namespace wwf
 */
(function(global) {
	'use strict';

	var namespace = global.wwf || {},
		$ = global.jQuery,
		_ = global._;

	/**
	 * CvTabViewクラス
	 * @param {string} id
	 * @param {int} state
	 * @param {object} options
	 * @constructor
	 */
	function CvTabView(id, state, options) {
		if (!_.isString(id)) throw new Error('invalid id argument.');

		this.options = _.defaults(options, {
			selector: {
				content: '#cvTab_content',
				header: '#cvTab_header',
				body: '#cvTab_body',
				overlay: '#cvTab_overlay'
			},
			class: {
				opened_body: 'popup-open',
				opened_header: 'open',
				current_tab: 'current',
				checked_support: 'checked'
			},
			anim: {
				first_open: 1500,
				open: 1000,
				close: 1000,
				open_easing: [280, 21],
				close_easing: 'easeOutQuint'
			}
		});

		this.$body = $(global.document.body);
		this.$el = $(global.document.getElementById(id));
		this.$elms = {
			content: this.$el.find(this.options.selector.content),
			header: this.$el.find(this.options.selector.header),
			body: this.$el.find(this.options.selector.body),
			overlay: this.$el.find(this.options.selector.overlay),
			tabs: this.$el.find('[data-click="tab"]'),
			tab_contents: this.$el.find('[data-tab_content]'),
			support_radios: this.$el.find('[data-click="support"]'),
			support_contents: this.$el.find('[data-support_content]')
		};

		this.classes = {
			opened_body: this.options.class.opened_body,
			opened_header: this.options.class.opened_header,
			current_tab: this.options.class.current_tab,
			checked_support: this.options.class.checked_support
		};

		this.heights = {
			header: 0,
			body: 0,
			margin: 200,
			overall: 0,
			overall_with_margin: 0,
			shadow: 10
		};

		// 状態(1:非表示、2:ヘッダーのみ表示、3:全体表示)
		this.state = state || 1;

		this.initializedEventFlg = false;

		this._init();
	}

	/**
	 * CvTabの初期化処理を行う
	 * @returns {CvTabView}
	 * @private
	 */
	CvTabView.prototype._init = function() {
		this.$elms.body.css({'padding-bottom': ''});

		this._calculateHeights()
			._fixedPosition();

		this.$elms.body.css({'padding-bottom': this.heights.margin + 'px'});
		this.$elms.content.css({'visibility': 'visible'});

		return this;
	};

	/**
	 * CvTabを開く
	 * @param {int} speed
	 * @param {int} delay
	 * @param {function} callback
	 * @returns {CvTabView}
	 */
	CvTabView.prototype.open = function(speed, delay, callback) {
		if (this.state === 3 || this.$elms.content.length === 0) return this;

		this.$elms.content.velocity({bottom: '-' + this.heights.margin + 'px'}, {
			duration: _.isUndefined(speed) ? this.options.anim.open : speed,
			easing: this.options.anim.open_easing,
			delay: delay || false,
			mobileHA: false,
			begin: _.bind(function() {
				this.$body.addClass(this.classes.opened_body);
				this.$elms.header.addClass(this.classes.opened_header);
			}, this),
			complete: _.bind(function() {
				this.state = 3;
				if (_.isFunction(callback)) callback();
			}, this)
		});

		return this;
	};

	/**
	 * CvTabを閉じる
	 * @param {int} speed
	 * @param {int} delay
	 * @param {function} callback
	 * @returns {CvTabView}
	 */
	CvTabView.prototype.close = function(speed, delay, callback) {
		if (this.state === 2 || this.$elms.content.length === 0) return this;

		this.$elms.content.velocity({bottom: '-' + (this.heights.body + this.heights.margin) + 'px'}, {
			duration: _.isUndefined(speed) ? this.options.anim.close : speed,
			easing: this.options.anim.close_easing,
			delay: delay || false,
			mobileHA: false,
			begin: _.bind(function() {
				this.$body.removeClass(this.classes.opened_body);
			}, this),
			complete: _.bind(function() {
				this.$elms.header.removeClass(this.classes.opened_header);
				this.state = 2;
				if (_.isFunction(callback)) callback();
			}, this)
		});

		return this;
	};

	/**
	 * CvTabを表示する(タブのみの状態)
	 * @param {int} speed
	 * @param {int} delay
	 * @param {function} callback
	 * @returns {CvTabView}
	 */
	CvTabView.prototype.show = function(speed, delay, callback) {
		this.close(speed || 0, delay, _.bind(function() {
			if (_.isFunction(callback)) callback();
		}, this));

		return this;
	};

	/**
	 * CvTabを非表示にする
	 * @param {int} speed
	 * @param {int} delay
	 * @param {function} callback
	 * @returns {CvTabView}
	 */
	CvTabView.prototype.hide = function(speed, delay, callback) {
		if (this.state === 1 || this.$elms.content.length === 0) return this;

		var _bottom = this.heights.overall_with_margin + this.heights.shadow;
		this.$elms.content.velocity({bottom: '-' + _bottom + 'px'}, {
			duration: speed || 0,
			easing: this.options.anim.close_easing,
			delay: delay || false,
			mobileHA: false,
			begin: _.bind(function() {
				this.$body.removeClass(this.classes.opened_body);
			}, this),
			complete: _.bind(function() {
				this.$elms.header.removeClass(this.classes.opened_header);
				this.state = 1;
				if (_.isFunction(callback)) callback();
			}, this)
		});

		return this;
	};

	/**
	 * イベントの初期化処理を行う
	 */
	CvTabView.prototype.initEvents = function() {
		if (this.initializedEventFlg) return;

		this._onResizeHandler()
			._onClickHeaderHandler()
			._onClickOverlayHandler()
			._onClickTabHandler()
			._onChangeSupportRadioHandler();

		this.initializedEventFlg = true;
	};

	/**
	 * 各要素の高さを計算してプロパティにセットする
	 * @returns {CvTabView}
	 * @private
	 */
	CvTabView.prototype._calculateHeights = function() {
		var _header = this.$elms.header.outerHeight(true);
		var _body = this.$elms.body.outerHeight(true);
		var _overall = _header + _body;

		this.heights.header = _header;
		this.heights.body = _body;
		this.heights.overall = _overall;
		this.heights.overall_with_margin = _overall + this.heights.margin;

		return this;
	};

	/**
	 * 位置調整を行う
	 * @returns {CvTabView}
	 * @private
	 */
	CvTabView.prototype._fixedPosition = function() {
		if (this.$elms.content.length === 0) return;

		var _height = 0;
		switch (this.state) {
			case 3:
				_height = this.heights.margin;
				break;
			case 2:
				_height = this.heights.body + this.heights.margin;
				break;
			case 1:
			default:
				_height = this.heights.overall_with_margin + this.heights.shadow;
				break;
		}

		this.$elms.content.css({'bottom': '-' + _height + 'px'});

		return this;
	};

	/**
	 * 選択された支援ラジオボタンに対応したコンテンツ要素への切り替えを行う
	 * @returns {CvTabView}
	 * @private
	 */
	CvTabView.prototype._switchSupportContent = function() {
		if (this.$elms.support_contents.length === 0) return this;

		// 開いているタブコンテンツからチェック済み支援ラジオボタン要素を抽出
		var _$supportRadios = this._getOpenedTabContent().find('[data-click="support"]');
		var _$checkedSupportRadio = _$supportRadios.filter(':checked');
		if (_$checkedSupportRadio.length === 0) {
			_$checkedSupportRadio = _$supportRadios.first();
		}

		// 支援コンテンツ要素を切り替え
		this.$elms.support_contents.removeClass(this.classes.checked_support)
			.each(_.bind(function(i, el) {
				var _$el = $(el);
				if (_$el.data('support_content') === _$checkedSupportRadio.data('target_content')) {
					_$el.addClass(this.classes.checked_support);

					return false;
				}
			}, this));

		return this;
	};

	/**
	 * 現在開いているタブコンテンツ要素を返す
	 * @returns {jQuery}
	 * @private
	 */
	CvTabView.prototype._getOpenedTabContent = function() {
		var _$el = $();

		if (this.$elms.tab_contents.length === 0) return _$el;

		this.$elms.tab_contents.each(function(i, el) {
			var __$el = $(el);
			if (__$el.is(':visible')) {
				_$el = __$el;

				return false;
			}
		});

		return _$el;
	};

	/**
	 * ヘッダーのクリックイベントハンドラー
	 * @private
	 * @requires {CvTabView}
	 */
	CvTabView.prototype._onClickHeaderHandler = function() {
		if (this.$elms.header.length === 0) return this;

		this.$elms.header.on('click', _.bind(function() {
			this.state === 2 ? this.open() : this.close();
		}, this));

		return this;
	};

	/**
	 * Overlay要素のクリックイベントハンドラー
	 * @private
	 * @requires {CvTabView}
	 */
	CvTabView.prototype._onClickOverlayHandler = function() {
		if (this.$elms.overlay.length === 0) return this;

		this.$elms.overlay.on('click', _.bind(function() {
			this.close();
		}, this));

		return this;
	};

	/**
	 * タブのクリックイベントハンドラー
	 * @private
	 * @requires {CvTabView}
	 */
	CvTabView.prototype._onClickTabHandler = function() {
		if (this.$elms.tabs.length === 0) return this;

		this.$elms.tabs.on('click', _.bind(function(event) {
			var _$this = $(event.currentTarget);

			// タブ切り替え
			this.$elms.tabs.removeClass(this.classes.current_tab);
			_$this.addClass(this.classes.current_tab);

			// タブコンテンツ切り替え
			this.$elms.tab_contents.hide().each(function(i, el) {
				var _$el = $(el);
				if (_$el.data('tab_content') === _$this.data('target_content')) {
					_$el.show();

					return false;
				}
			});

			// 支援コンテンツ要素を切り替え
			this._switchSupportContent();
		}, this));

		return this;
	};

	/**
	 * 支援ラジオボタンの変更イベントハンドラー
	 * @requires {CvTabView}
	 * @private
	 */
	CvTabView.prototype._onChangeSupportRadioHandler = function() {
		if (this.$elms.support_radios.length === 0) return this;

		this.$elms.support_radios.on('change', _.bind(function() {
			this._switchSupportContent();
		}, this));

		return this;
	};

	/**
	 * リサイズイベントハンドラー
	 * @private
	 */
	CvTabView.prototype._onResizeHandler = function() {
		$(global).on('resize', _.bind(function() {
			this.$elms.body.css({'padding-bottom': ''});

			this._calculateHeights()
				._fixedPosition();

			this.$elms.body.css({'padding-bottom': this.heights.margin + 'px'});
		}, this));

		return this;
	};

	// export
	namespace.CvTabView = CvTabView;
	global.wwf = namespace;

})(window);

