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
    textarea.value = copyLocation;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("주소가 복사되었습니다.")
}

// 신부 계좌번호 복사
function brideAccountNumber(){
	var bride_account = '3333-01-7158366 카카오뱅크';
	var textarea = document.createElement("textarea");
	document.body.appendChild(textarea);
	textarea.value = bride_account;
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
	alert("신부의 계좌번호가 복사되었습니다.\n3333-01-7158366 카카오뱅크")
}

// 신랑 계좌번호 복사
function groomAccountNumber(){
	var groom_account = '00000000 카카오뱅크';
	var textarea = document.createElement("textarea");
	document.body.appendChild(textarea);
	textarea.value = groom_account;
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
	alert("신랑의 계좌번호가 복사되었습니다.\n00000000 카카오뱅크")
}

// 아버님 계좌번호 복사 
function groomsFatherAccountNumber(){
    var grooms_father_account = '00000000 국민은행';
	var textarea = document.createElement("textarea");
	document.body.appendChild(textarea);
	textarea.value = grooms_father_account;
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
	alert("계좌번호가 복사되었습니다.\n00000000 국민은행")
}


// 카카오톡 공유하기
function kakaoShare() {
    Kakao.init('YOUR APP KEY');
    // SDK 초기화 여부를 판단합니다.
    Kakao.isInitialized();
    //console.log(Kakao.isInitialized());
    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
        title: '진아🤍수길 결혼합니다.',
        description: '2025.10.19\n오후 3시 수원 메리빌리아 더 프레스티지',
        imageUrl: 'https://github.com/jaeyun95/jaeyun95.github.io/blob/main/assets/img/main.jpg?raw=true',
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
