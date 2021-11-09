// slick slider .certif__doc
$('.slick__slider__doc').slick({
  centerMode: true,
  infinite: true,
  centerPadding: '60px',
  slidesToShow: 3,
  speed: 500,
  variableWidth: false,
  initialSlide: 2,
  responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1
        }
      },
    ]
});

$('#doc_page').text('01 ');

$('.slick__slider__doc').on('afterChange', function(event, slick, currentSlide, nextSlide){
  var page = currentSlide - 1;

  if (page === -1) page = 4
  else if (page === 0) page = 5;
  $('#doc_page').text('0' + page + ' ');
});
// slick slider .certif__doc



// slick slider .certif__clin
$('.slick__slider__clin').slick({
  centerMode: true,
  infinite: true,
  centerPadding: '60px',
  slidesToShow: 3,
  speed: 500,
  variableWidth: false,
  initialSlide: 2,
  responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1
        }
      },
    ]
});

$('#clin_page').text('01 ');

$('.slick__slider__clin').on('afterChange', function(event, slick, currentSlide, nextSlide){
  var page = currentSlide - 1;

  if (page === -1) page = 4
  else if (page === 0) page = 5;
  $('#clin_page').text('0' + page + ' ');
});
// slick slider .certif__clin


// accordion
var acc = document.getElementsByClassName("accordion");
var i;
var acc__icon = document.getElementsByClassName("questions__accordion_icon");

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.remove("accordion");
    this.classList.add("accordion_active");

    var panel = this.nextElementSibling;
    var acc__icon = panel.nextElementSibling;
    acc__icon.classList.add("__active_icon");
    acc__icon.classList.remove(".questions__accordion_icon");

    if (panel.style.display === "block") {
      panel.style.display = "none";
      this.classList.add("accordion");
      this.classList.remove("accordion_active");

      acc__icon.classList.remove("__active_icon");
      acc__icon.classList.add(".questions__accordion_icon");
    } else {
      panel.style.display = "block";
    }
  });
} 

for (i = 0; i < acc__icon.length; i++) {
  acc__icon[i].addEventListener("click", function() {
    this.classList.add("__active_icon");
    this.classList.remove(".questions__accordion_icon");

    var panel = this.previousElementSibling;
    var acc = panel.previousElementSibling
    acc.classList.remove("accordion");
    acc.classList.add("accordion_active");

    if (panel.style.display === "block") {
      panel.style.display = "none";

      this.classList.remove("__active_icon");
      this.classList.add(".questions__accordion_icon");

      acc.classList.add("accordion");
      acc.classList.remove("accordion_active");
    } else {
      panel.style.display = "block";
    }
  });
}
// accordion


// adaptive menu
$('.btn__menu').on('click', function() {
  $('.menu__list').slideToggle();
});
// adaptive menu


// mask
$(function(){
  $(".phone").mask("+7 (999) 999-99 99");
});
// mask


// prices slider
var prices_prev = document.getElementById('prices__prev');
var prices_next = document.getElementById('prices__next');

var prices_prev_2p = document.getElementById('prices__prev__2p');
var prices_next_2p = document.getElementById('prices__next__2p');

var prices_prev_3p = document.getElementById('prices__prev__3p');
var prices_next_3p = document.getElementById('prices__next__3p');

var prices_prev_4p = document.getElementById('prices__prev__4p');
var prices_next_4p = document.getElementById('prices__next__4p');

var prices_prev_5p = document.getElementById('prices__prev__5p');
var prices_next_5p = document.getElementById('prices__next__5p');

var prices_prev_6p = document.getElementById('prices__prev__6p');
var prices_next_6p = document.getElementById('prices__next__6p');

var prices_prev_7p = document.getElementById('prices__prev__7p');
var prices_next_7p = document.getElementById('prices__next__7p');

var prices_prev_8p = document.getElementById('prices__prev__8p');
var prices_next_8p = document.getElementById('prices__next__8p');

let page = 1;
let page_2 = 1;
let page_3 = 1;
let page_4 = 1;
let page_5 = 1;
let page_6 = 1;
let page_7 = 1;
let page_8 = 1;

// first block
prices_next.onclick = function() {
  prices_next_page(page);
  if (prices_next_page(page)) {
    page++;
  }
}
prices_prev.onclick = function() {
  prices_prev_page(page);
  if (page != 1) page--;
}

// second block
prices_next_2p.onclick = function() {
  prices_next_page__oth(page_2, prices_next_2p);
  if (prices_next_page__oth(page_2, prices_next_2p)) {
    page_2++;
  }
}
prices_prev_2p.onclick = function() {
  prices_prev_page__oth(page_2, prices_next_2p);
  if (page_2 != 1) page_2--;
}

// third block
prices_next_3p.onclick = function() {
  prices_next_page__oth(page_3, prices_next_3p);
  if (prices_next_page__oth(page_3, prices_next_3p)) {
    page_3++;
  }
}
prices_prev_3p.onclick = function() {
  prices_prev_page__oth(page_3, prices_next_3p);
  if (page_3 != 1) page_3--;
}
// fourth block
prices_next_4p.onclick = function() {
  prices_next_page__oth(page_4, prices_next_4p);
  if (prices_next_page__oth(page_4, prices_next_4p)) {
    page_4++;
  }
}
prices_prev_4p.onclick = function() {
  prices_prev_page__oth(page_4, prices_next_4p);
  if (page_4 != 1) page_4--;
}
// fifth block
prices_next_5p.onclick = function() {
  prices_next_page__oth(page_5, prices_next_5p);
  if (prices_next_page__oth(page_5, prices_next_5p)) {
    page_5++;
  }
}
prices_prev_5p.onclick = function() {
  prices_prev_page__oth(page_5, prices_next_5p);
  if (page_5 != 1) page_5--;
}
// sixth block
prices_next_6p.onclick = function() {
  prices_next_page__oth(page_6, prices_next_6p);
  if (prices_next_page__oth(page_6, prices_next_6p)) {
    page_6++;
  }
}
prices_prev_6p.onclick = function() {
  prices_prev_page__oth(page_6, prices_next_6p);
  if (page_6 != 1) page_6--;
}
// seventh block
prices_next_7p.onclick = function() {
  prices_next_page__oth(page_7, prices_next_7p);
  if (prices_next_page__oth(page_7, prices_next_7p)) {
    page_7++;
  }
}
prices_prev_7p.onclick = function() {
  prices_prev_page__oth(page_7, prices_next_7p);
  if (page_7 != 1) page_7--;
}
// eigth block
prices_next_8p.onclick = function() {
  prices_next_page__oth(page_8, prices_next_8p);
  if (prices_next_page__oth(page_8, prices_next_8p)) {
    page_8++;
  }
}
prices_prev_8p.onclick = function() {
  prices_prev_page__oth(page_8, prices_next_8p);
  if (page_8 != 1) page_8--;
}

function getVariableName(v) {
    for (var key in window) {
        if (window[key] === v)
            return key;
    }
}


function prices_next_page__oth(page, button) {
  button = getVariableName(button);

  let curpage = document.getElementById('prices__par__' + String(page) + '__' + button[12] + 'p');
  let nextpage = document.getElementById('prices__par__' + String(page + 1) + '__' + button[12] + 'p');

  let curprice = document.getElementById('prices__price__' + String(page) + '__' + button[12] + 'p');
  let nextprice = document.getElementById('prices__price__' + String(page + 1) + '__' + button[12] + 'p');

  if (curpage.nextElementSibling.classList.contains('prices__block__par') == true) {
    curpage.classList.add('none');
    curprice.classList.add('none'); 

    nextpage.classList.remove('none');
    nextprice.classList.remove('none');
    return true;
  } 
}
function prices_prev_page__oth(page, button) {
  button = getVariableName(button);

  let curpage = document.getElementById('prices__par__' + String(page) + '__' + button[12] + 'p');
  let prevpage = document.getElementById('prices__par__' + String(page - 1) + '__' + button[12] + 'p');

  let curprice = document.getElementById('prices__price__' + String(page) + '__' + button[12] + 'p');
  let prevprice = document.getElementById('prices__price__' + String(page - 1) + '__' + button[12] + 'p');

  if (page != 1)  {
    curpage.classList.add('none');
    curprice.classList.add('none');

    prevpage.classList.remove('none');
    prevprice.classList.remove('none');
  }
}


function prices_next_page(page) {
  let curpage = document.getElementById('prices__par__' + String(page));
  let nextpage = document.getElementById('prices__par__' + String(page + 1));

  let curprice = document.getElementById('prices__price__' + String(page));
  let nextprice = document.getElementById('prices__price__' + String(page + 1));

  if (curpage.nextElementSibling.classList.contains('prices__block__par') == true) {
    curpage.classList.add('none');
    curprice.classList.add('none');

    nextpage.classList.remove('none');
    nextprice.classList.remove('none');
    return true;
  } 
}
function prices_prev_page(page) {
  let curpage = document.getElementById('prices__par__' + String(page));
  let prevpage = document.getElementById('prices__par__' + String(page - 1));

  let curprice = document.getElementById('prices__price__' + String(page));
  let prevprice = document.getElementById('prices__price__' + String(page - 1));

  if (page != 1)  {
    curpage.classList.add('none');
    curprice.classList.add('none');

    prevpage.classList.remove('none');
    prevprice.classList.remove('none');
  }
}
// prices slider