/**
 * Cookieクラス定義用スクリプトファイル
 * @namespace wwf
 */
(function(global) {
	'use strict';

	var namespace = global.wwf || {};

	/**
	 * Cookieクラス
	 * @constructor
	 */
	function Cookie() {}

	/**
	 * Cookieを読み込む
	 * @param {string} key Cookie名
	 * @returns {string|null}
	 */
	Cookie.prototype.read = function(key) {
		if (!key) return null;

		var _val = null;
		var _cookies = global.document.cookie.split(';');
		for (var _i = 0; _i < _cookies.length; _i++) {
			var _keyVal = _cookies[_i].replace(/^\s+|\s+$/g, '').split('=');
			if (_keyVal.length === 2 && _keyVal[0] === key) {
				_val = _keyVal[1];
				break;
			}
		}

		return _val;
	};

	/**
	 * Cookieを書き込む
	 * @param {string} key Cookie名
	 * @param {string} value Cookieの値
	 * @param {number|string|Date} maxAge 最大期間(秒)
	 * @param {string} path パス
	 * @param {string} domain ドメイン
	 * @param {boolean} secure セキュア属性
	 */
	Cookie.prototype.write = function(key, value, maxAge, path, domain, secure) {
		if (!key) return;
		var _expires = '';

		if (maxAge) {
			switch (maxAge.constructor) {
				case Number:
					_expires = maxAge === Infinity ? '; expires=Tue, 19 Jan 2038 03:14:07 GMT' : '; max-age=' + maxAge;
					break;
				case String:
					_expires = '; expires=' + maxAge;
					break;
				case Date:
					_expires = '; expires=' + maxAge.toGMTString();
					break;
			}
		}

		global.document.cookie =
			encodeURIComponent(key) + '=' + encodeURIComponent(value)
			+ _expires
			+ (domain ? '; domain=' + domain : '')
			+ (path ? '; path=' + path : '')
			+ (secure ? '; secure' : '');
	};

	// export
	namespace.Cookie = Cookie;
	global.wwf = namespace;

})(window);

