var showNew = function(arg) {
	$.each(arg, function(key, val) {
		if (val > 0) {
			$('#headerAccordionPC li.group-' + key + ' small').show();
			$('#headerAccordionSP li.group-' + key + ' small').show();
		}
	});
};

var requestAjax = function() {
	var dfd = $.Deferred();

	var req = 'https://www.wwf.or.jp/ext/json/header_new.jsp';
	var d = {
		days: 7
	}

	$.ajax({
		type: 'get',
		scriptCharset: 'utf-8',
		url: req,
		timeout: 10000,
		dataType: 'json',
		data: d,
	}).done(function(data, status, req) {
		if (data != null) {
			dfd.resolve(data);
		} else {
			dfd.resolve({});
		}
	}).fail(function(req, status, e) {
		dfd.reject({});
	});
	return dfd.promise();
};

$(function() {
	var d = requestAjax();
	d.done(showNew);
});
