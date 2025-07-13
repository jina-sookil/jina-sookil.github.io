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
	alert("주소를 복사했습니다.")
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

const calendarContainer = document.querySelector('.calendar-container');
const monthYear = calendarContainer.querySelector('.month-year');
const calendarGrid = calendarContainer.querySelector('.calendar-grid');
const prevMonthBtn = calendarContainer.querySelector('.prev-month');
const nextMonthBtn = calendarContainer.querySelector('.next-month');

let currentDate = new Date();

function renderCalendar(date) {
  const year = date.getFullYear();
  const month = date.getMonth();

  // 월/년 표시 업데이트
  monthYear.textContent = `${year}년 ${month + 1}월`;

  // 기존 날짜 요소 제거
  while (calendarGrid.children.length > 7) {
    calendarGrid.removeChild(calendarGrid.lastChild);
  }

  // 해당 월의 첫 날과 마지막 날 계산
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startDay = firstDay.getDay(); // 0:일요일, 1:월요일, ...
  const numDays = lastDay.getDate();

  // 첫 날 이전의 빈 날짜 채우기
  for (let i = 0; i < startDay; i++) {
    const emptyCell = document.createElement('div');
    calendarGrid.appendChild(emptyCell);
  }

  // 날짜 채우기
  for (let i = 1; i <= numDays; i++) {
    const dayCell = document.createElement('div');
    dayCell.classList.add('day');
    dayCell.textContent = i;

    // 예식 날짜 강조 (예시)
    if (year === 2025 && month === 10 && i === 19) {
        dayCell.classList.add('wedding-day');
    }
    calendarGrid.appendChild(dayCell);
  }
}

// 이전/다음 달 버튼 클릭 이벤트
prevMonthBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});

nextMonthBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});

// 초기 캘린더 렌더링
renderCalendar(currentDate);

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
