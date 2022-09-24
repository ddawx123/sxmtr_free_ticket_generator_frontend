document.onreadystatechange = function () {
	if (document.readyState == 'complete') initPageData();
}

function initPageData() {
	var d = new Date();
	var year = d.getFullYear();
	var month = d.getMonth()+1;
	var day = d.getDay();
	var days = d.getDate();
	if (month < 10) month = "0" + month;
	if (days < 10) days = "0" + days;
	document.querySelectorAll('.option-value')[0].innerHTML = year + "-" + month + "-" + days + " 14:00-18:00";
	document.querySelectorAll('.option-value')[2].innerHTML =  year + "-" + month + "-" + days + " 18:00-22:00";
	var params = window.location.search.substring(1).split("&");
	for (var i = 0; i < params.length; i++) {
		var pair = params[i].split("=");
		if (pair[0] == 'stationName') document.querySelector('.option-value.c3.overwrite').innerHTML = decodeURIComponent(pair[1]);
	}
}
function showRedeemForm() {
	document.querySelector('.modal').style.display = '';
	document.querySelector('.van-dialog.exchange-now-confirm-dialog').style.display = '';
}
function hideRedeemForm() {
	document.querySelector('.modal').style.display = 'none';
	document.querySelector('.van-dialog.exchange-now-confirm-dialog').style.display = 'none';
}
function doRedeem() {
	document.querySelector('.modal').style.display = 'none';
	document.querySelector('.van-dialog.exchange-now-confirm-dialog').style.display = 'none';
	document.querySelector('.list-item.body').querySelectorAll('.list-item__option')[5].innerHTML = '<div class="list-item__option__wrap"><div class="option-label">兑换状态：</div><div class="option-value option-value__reservation-status" style="color: rgb(186, 6, 53);">已兑换</div></div>';
}