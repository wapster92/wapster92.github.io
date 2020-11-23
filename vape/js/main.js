$(function(){

	sliderCertificates();

	sliderReviews();

	sliderSim();

	filterBlocks();

	headerMenu();

	loginrMenu();

});

function filterBlocks() {
	$('.cub').on('click',function(){
		$('.home-item-row').removeClass('filt-block');
		return false;
	});
	$('.fl-line').on('click',function(){
		$('.home-item-row').removeClass('filt-block');
		$('.home-item-row').addClass('filt-block');
		return false;
	});
}

function sliderCertificates() {
	if ($('.slider-certificates').length > 0) {
	   $('.slider-certificates').owlCarousel({
	   	  nav:true,
	      slideSpeed : 300,
	      paginationSpeed : 400,
	      singleItem:true,
	      items : 1
		});
	}
}
function sliderReviews() {
	if ($('.reviews-slider').length > 0) {
	   $('.reviews-slider').owlCarousel({
	   	nav:true,
	      slideSpeed : 300,
	      paginationSpeed : 400,
	      singleItem:true,
	      items : 1
		});
	}
}
function sliderSim() {
	if ($('.sim-slider').length > 0) {
	   $('.sim-slider').owlCarousel({
	   	nav:true,
	      slideSpeed : 300,
	      paginationSpeed : 400,
	      responsive: {
	      	0: {
	      		items:1,
	      	},
	      	449: {
	      		items:1,
	      	},
	      	768: {
	      		items:2,
	      	},
	      	1200: {
	      		items:4,
	      	}
	      }
		});
	}
}

function headerMenu() {
	$('.hamburger-menu').on('click',function(){
		$('.bottom-menu').stop().slideToggle(300);
		return false;
	});
}

function loginrMenu() {
	$('li.nav-menu').on('click',function(){
		$('.nav-tabs li').stop().slideToggle(300);
		$(this).stop().slideToggle(300);
		return false;
	});
}
