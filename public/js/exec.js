/**
 * 共通JavaScript実行用スクリプトファイル
 * @requires VisitorManager, ModalView, CvTabView
 * @namespace wwf
 */
$(window).on('load', function() {
	'use strict';

	var namespace = this.wwf || {};
	var visitorManager = new namespace.VisitorManager();
	var preset = namespace.cvTabViewPresets.default;

	// ポップアップCvTabView
	var popupCvTabView = new namespace.CvTabView('popupCvTab', 1, preset);
	popupCvTabView.initEvents();

	// フッター固定CvTabView
	var footerCvTabView = new namespace.CvTabView('footerCvTab', 3, preset);
	footerCvTabView.initEvents();

	if (!visitorManager.isVisited()) { // 初回訪問時
		popupCvTabView.open(preset.anim.first_open, 1500, function() {
			popupCvTabView.close(preset.anim.close, 1000);
		});
	} else { // 2回目以降の訪問時
		popupCvTabView.show(preset.anim.open, 1500);
	}

	//ヘッダーのメニューの現在のページへのリンクにnowクラスを付ける
	$("#headerAccordionPC li a").each(function(){
		if(location.pathname === $(this).attr("href")){
			$(this).addClass("now")
		}
	});
	$("#headerAccordionSP li a").each(function(){
		if(location.pathname === $(this).attr("href")){
			$(this).addClass("now")
		}
	});

	// export
	namespace.popupCvTabView = popupCvTabView;
	namespace.footerCvTabView = footerCvTabView;
	namespace.visitorManager = visitorManager;
	this.wwf = namespace;
});

