/* 자바스크립트 시작 */
/*우->좌 슬라이드 메뉴 시작*/
$(document).ready(function(){
	$(".toggle-btn").click(function(){
		$("#nav").animate({width:'toggle'}, 500);
	})
});
/*우->좌 슬라이드 메뉴 끝*/

/*이미지 슬라이드 시작*/
$(document).ready(function(){
	$(".carousel").carousel({
		interval:2000, //이미지가 좌우로 움직이는 대기시간 지점1초, 파이어폭스에서 작동X
		pause:false
	});
});
/*이미지 슬라이드 끝*/
/* 자바스크립트 끝 */