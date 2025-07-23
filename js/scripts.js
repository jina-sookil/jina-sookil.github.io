/*!
* Start Bootstrap - Stylish Portfolio v6.0.6 (https://startbootstrap.com/theme/stylish-portfolio)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
*/

// 링크 복사
function copyLink(){
	var url = 'https://jina-sookil.github.io/';
	var textarea = document.createElement("textarea");
	document.body.appendChild(textarea);
	textarea.value = url;
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
	alert("주소가 복사되었습니다.")
}

//웨딩홀 주소 복사
function copyLocation(){
    var location = '경기 수원시 권선구 세화로 116 메리빌리아더프레스티지 웨딩홀';
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    textarea.value = location;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("주소가 복사되었습니다.")
}

// 신랑 계좌번호 복사
function groomAccountNumber(){
	var groom_account = '우리은행 1002-149-625800';
	var textarea = document.createElement("textarea");
	document.body.appendChild(textarea);
	textarea.value = groom_account;
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
	alert("신랑 채수길의 계좌번호가 복사되었습니다.")
}

//신랑 아버님 계좌번호 복사
function groomsFatherAccountNumber(){
    var grooms_father_account = '우리은행 276-08-002066';
	var textarea = document.createElement("textarea");
	document.body.appendChild(textarea);
	textarea.value = grooms_father_account;
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
	alert("신랑 혼주 채태석님의 계좌번호가 복사되었습니다.")
}
//신랑 어머님 계좌번호 복사
function groomsMotherAccountNumber(){
    var grooms_mother_account = '농협 170493-56-130873';
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    textarea.value = grooms_mother_account;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("신랑 혼주 김은자님의 계좌번호가 복사되었습니다.")
}
// 신부 계좌번호 복사
function brideAccountNumber(){
    var bride_account = '카카오뱅크 3333-01-7158366';
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    textarea.value = bride_account;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("신부 성진아의 계좌번호가 복사되었습니다.")
}
// 신부 아버님 계좌번호 복사
function bridesFartherAccountNumber(){
    var brides_farther_account = '농협 207082-51-010869';
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    textarea.value = brides_farther_account;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("신부 혼주 성영만님의 계좌번호가 복사되었습니다.")
}
// 신부 어머님 계좌번호 복사
function bridesMotherAccountNumber(){
    var brides_mother_account = '00000000000000';
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    textarea.value = brides_mother_account;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("신부 혼주 추원숙님의 계좌번호가 복사되었습니다.")
}


// 카카오톡 공유하기
function kakaoShare() {
    Kakao.init('50336706855be115a576af4c3035e42e');
    // SDK 초기화 여부를 판단합니다.
    Kakao.isInitialized();
    //console.log(Kakao.isInitialized());
    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
        title: '수길🤍진아 결혼합니다.',
        description: '2025.10.19 오후 3시\n수원 메리빌리아 더 프레스티지',
        imageUrl: 'https://github.com/jina-sookil/jina-sookil.github.io/blob/main/assets/img/main.jpg?raw=true',
        link: {
            mobileWebUrl: 'https://jina-sookil.github.io/#!',
            webUrl: 'https://jina-sookil.github.io/#!',
        },
        },
        buttons: [
        {
            title: '모바일 청첩장 보기',
            link: {
            mobileWebUrl: 'https://jina-sookil.github.io/#!',
            webUrl: 'https://jina-sookil.github.io/#!',
            },
        },
        ],
        // 카카오톡 미설치 시 카카오톡 설치 경로이동
        installTalk: true,
    })
}

const DDay = document.querySelector("#DDay");

function counter_day(){
  const christmas = new Date("2025-10-19");  //디데이 설정
  const today = new Date();  //밀리세컨드 단위의 시간 표시 1초=1000
  
  day_gap = christmas - today;  //크리스마스까지 남은 밀리세컨드 초 값
  
  const day = Math.floor(day_gap / (1000*60*60*24));
    //디데이까지 남은 밀리세컨드초 / 하루의 밀리세컨드초 = 남은 일수
    if(day == 0) {
        DDay.innerText = `오늘입니다.`;
    } else if(day < 0) {
        DDay.innerText = `${-day-1} 일 지났습니다.`;
    } else if(day >0) {
        DDay.innerText = `${day} 일 남았습니다.`;
    }
}
counter_day();
setInterval(counter_day, 1000);  //초마다 디데이 기능 실행

function toggleFoldable() {
    var content = document.querySelector('.foldable-content');
    var toggleIcon = document.getElementById('toggleIcon');

    // 펼치기/접기 상태 변경
    if (content.style.display === 'none') {
        content.style.display = 'block';
        toggleIcon.innerText = '▲';
        // 추가로 펼쳐진 상태에서 수행할 동작 추가 가능
    } else {
        content.style.display = 'none';
        toggleIcon.innerText = '▼';
        // 추가로 접힌 상태에서 수행할 동작 추가 가능
    }
}

function toggleFoldable2() {
    var content = document.querySelector('.foldable-content2');
    var toggleIcon = document.getElementById('toggleIcon2');

    // 펼치기/접기 상태 변경
    if (content.style.display === 'none') {
        content.style.display = 'block';
        toggleIcon.innerText = '▲';
        // 추가로 펼쳐진 상태에서 수행할 동작 추가 가능
    } else {
        content.style.display = 'none';
        toggleIcon.innerText = '▼';
        // 추가로 접힌 상태에서 수행할 동작 추가 가능
    }
}

function toggleFoldable3() {
    var content = document.querySelector('.foldable-content3');
    var toggleIcon = document.getElementById('toggleIcon3');

    // 펼치기/접기 상태 변경
    if (content.style.display === 'none') {
        content.style.display = 'block';
        toggleIcon.innerText = '▲';
        // 추가로 펼쳐진 상태에서 수행할 동작 추가 가능
    } else {
        content.style.display = 'none';
        toggleIcon.innerText = '▼';
        // 추가로 접힌 상태에서 수행할 동작 추가 가능
    }
}

//Add Gallery
// Gallery image hover
$( ".img-wrapper" ).hover(
  function() {
    $(this).find(".img-overlay").animate({opacity: 1}, 600);
  }, function() {
    $(this).find(".img-overlay").animate({opacity: 0}, 600);
  }
);

// Lightbox
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $prevButton = $('<div id="prevButton"><i class="fa fa-chevron-left"></i></div>');
var $nextButton = $('<div id="nextButton"><i class="fa fa-chevron-right"></i></div>');
var $exitButton = $('<div id="exitButton"><i class="fa fa-times"></i></div>');

// Add overlay
$overlay.append($image).prepend($prevButton).append($nextButton).append($exitButton);
$("#gallery").append($overlay);

// Hide overlay on default
$overlay.hide();

// When an image is clicked
$(".img-overlay").click(function(event) {
  // Prevents default behavior
  event.preventDefault();
  // Adds href attribute to variable
  var imageLocation = $(this).prev().attr("href");
  // Add the image src to $image
  $image.attr("src", imageLocation);
  // Fade in the overlay
  $overlay.fadeIn("slow");
});

// When the overlay is clicked
$overlay.click(function() {
  // Fade out the overlay
  $(this).fadeOut("slow");
});

// When next button is clicked
$nextButton.click(function(event) {
  // Hide the current image
  $("#overlay img").hide();
  // Overlay image location
  var $currentImgSrc = $("#overlay img").attr("src");
  // Image with matching location of the overlay image
  var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
  // Finds the next image
  var $nextImg = $($currentImg.closest(".image").next().find("img"));
  // All of the images in the gallery
  var $images = $("#image-gallery img");
  // If there is a next image
  if ($nextImg.length > 0) {
    // Fade in the next image
    $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
  } else {
    // Otherwise fade in the first image
    $("#overlay img").attr("src", $($images[0]).attr("src")).fadeIn(800);
  }
  // Prevents overlay from being hidden
  event.stopPropagation();
});

// When previous button is clicked
$prevButton.click(function(event) {
  // Hide the current image
  $("#overlay img").hide();
  // Overlay image location
  var $currentImgSrc = $("#overlay img").attr("src");
  // Image with matching location of the overlay image
  var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
  // Finds the next image
  var $nextImg = $($currentImg.closest(".image").prev().find("img"));
  // Fade in the next image
  $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
  // Prevents overlay from being hidden
  event.stopPropagation();
});

// When the exit button is clicked
$exitButton.click(function() {
  // Fade out the overlay
  $("#overlay").fadeOut("slow");
});


/*
 Add Gallery slide
 */
$(document).ready(function() {
    // main slider 실행
    var thumbSwiper = new Swiper('.gallery-thumb-swiper', {
        spaceBetween: 10,
        watchSlidesProgress: true,
        slideToClickedSlide: true,
        loop: true,
        breakpoints: {
            1024: {
                slidesPerView: 5, // 한 화면에 보일 섬네일 개수
                loopedSlides: 5 // 위 섬네일 개수와 동일한 수치 설정
            },
            768: {
                slidesPerView: 3.5,
                loopedSlides: 3.5
            },
            480: {
                slidesPerView: 2.5,
                loopedSlides: 2.5
            }
        }
    });
    // main slider 실행
    var mainSwiper = new Swiper('.gallery-main-swiper', {
        effect: 'fade',
        spaceBetween: 10,
        allowTouchMove: false,
        loop: true,
        navigation: {
            nextEl: '.swiper-gallery-next',
            prevEl: '.swiper-gallery-prev'
        },
        breakpoints: {
            1024: {
                loopedSlides: 5
            },
            768: {
                loopedSlides: 3.5
            },
            480: {
                loopedSlides: 2.5
            }
        }
    });
    mainSwiper.controller.control = thumbSwiper;
    thumbSwiper.controller.control = mainSwiper;
});
