/**
 * CvTabViewクラス用設定プリセット定義ファイル
 * @namespace wwf
 */
;(function(global) {
	'use strict';

	var namespace = global.wwf || {};

	namespace.cvTabViewPresets = {

		/**
		 * デフォルト設定
		 */
		'default': {
			// セレクター
			selector: {
				content: '#cvTab_content',
				header: '#cvTab_header',
				body: '#cvTab_body',
				overlay: '#cvTab_overlay'
			},
			// クラス名
			class: {
				opened_body: 'popup-open', // 開いた際にbodyに付与するクラス名
				opened_header: 'open', // 開いた際にCvTabのヘッダーに付与するクラス名
				current_tab: 'current', // アクティブなタブに付与するクラス名
				checked_support: 'checked' // チェックした支援コンテンツに付与するクラス名
			},
			// アニメーション
			anim: {
				first_open: 1300, // 初回に自動で開く時間(ms)
				open: 1000,  // 開く時間(ms)
				close: 700, // 閉じる時間(ms)
				open_easing: [280, 20], // 開く際のEasing(Velocity用)
				close_easing: 'easeOutQuint' // 閉じる際のEasing(Velocity用)
			}
		}

	};

	// export
	global.wwf = namespace;

}(window));
