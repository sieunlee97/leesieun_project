/* 자바스크립트 시작 */
/* outer 세부 카테고리 영역 시작 */
$(document).ready(function(){
	$(".outer-section-title").click(function(){
		$(".category").stop().slideToggle("fast");
	});
});
/* outer 세부 카테고리 영역 끝 */ 
/*우->좌 슬라이드메뉴 햄버거버튼  영역 시작*/
$(document).ready(function(){
	$(".toggle-btn").click(function(){
		$(".side-bar").animate({width:'toggle'}, 500);
	});
});
/*우->좌 슬라이드 메뉴  햄버거버튼 영역 끝*/

/*우->좌 사이드메뉴 닫기버튼 영역 시작*/
$(document).ready(function(){
	$(".close-btn").click(function(){
		$(".side-bar").animate({width:'toggle'}, 500);
	});
});
/*우->좌 사이드메뉴 닫기버튼 영역 끝*/

/*이미지 슬라이드 시작*/
$(document).ready(function(){
	$(".carousel").carousel({
		interval:2000, //이미지가 좌우로 움직이는 대기시간 지점1초, 파이어폭스에서 작동X
		pause:false
	});
});
/*이미지 슬라이드 끝*/
/* 자바스크립트 끝 */