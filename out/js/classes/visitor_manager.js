/**
 * 訪問者管理クラス定義用スクリプトファイル
 * @requires Cookie
 * @namespace wwf
 */
(function(global) {
	'use strict';

	var namespace = global.wwf || {};

	/**
	 * 訪問者管理クラス
	 * @param {object} options
	 * @constructor
	 */
	function VisitorManager(options) {
		var _options = options || {};
		this.cookie = new namespace.Cookie();
		this.key = _options.key || '_vtf';
	}

	/**
	 * 訪問済みか判定して返す
	 * @returns {boolean}
	 */
	VisitorManager.prototype.isVisited = function() {
		return this.cookie.read(this.key) === '1';
	};

	/**
	 * 訪問済み状態にする
	 */
	VisitorManager.prototype.visited = function() {
		this.cookie.write(this.key, '1', Infinity, 'https://www.wwf.or.jp/');
	};

	// export
	namespace.VisitorManager = VisitorManager;
	global.wwf = namespace;

})(window);

