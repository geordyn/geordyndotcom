// SENTENCES
var sections = [
  {	sentence : ' a MEAN Stack web developer based in the United States.' }
, { sentence : ' "back at it again with the white vans." ' }
, { sentence : ' constantly learning new things.' }
, {	sentence : ' always going to make you laugh.' }
, { sentence : ' eating avocados.' }
, {	sentence : ' best friends with her cat, Baxter.' }
, {	sentence : ' super sarcastic.' }
, {	sentence : ' all in, or nothing.' }
, {	sentence : ' currently living in Provo, UT.'  }
, {	sentence : ' listening to Hozier on Spotify.' }
, {	sentence : ' so in love with avocados that she has a tattoo of one.' }
, { sentence : ' lovely.' }
, {	sentence : ' not sure if I\'m going too far with this.' }
, {	sentence : ' curious to know you.' }
, { sentence : ' making things she loves.' }
, {	sentence : ' missing San Diego, CA.' }
, { sentence : ' educating people.' }
, { sentence : ' educating herself.' }
, { sentence : ' a great friend.' }
];

var i = 0;
var j = 0;
var k = 0;
var forward = true;
var opening = false;
var interval = 60;
var beginning = 'Geordyn Ader is';
var lengthArray = sections.length;
var currentPart = ''
var lengthSentence = 0

// TYPING
function writing (text) {
  lengthSentence = sections[i].sentence.length
  var body = $('body')
  if (!opening) { // first part
    setTimeout(function () {
      if (k < beginning.length) {
        if (beginning[k] === '<') {
          currentPart += ' <br id="brName">'
          k = k + 4
        }
        currentPart += beginning[k]
        text.html(currentPart)
        k++
        writing(text)
      } else if (k === (beginning.length)) {
        currentPart += ' <br>'
        text.html(currentPart)
        opening = true
        writing(text)
      }
    }, interval)
  } else if (opening) { // sentences
    setTimeout(function () {
      interval = 80
      if (j === lengthSentence) {
        forward = false
      }
      if (j === lengthSentence - 2) {
        $('.afterTyping').one().addClass('onScreen')
      }
      if (j === lengthSentence - 1 && forward) {
        interval = 1000
      }
      if (j < lengthSentence && forward) {
        if (sections[i].sentence[j] === '&') {
          currentPart += '<strong>'
        } else if (sections[i].sentence[j] === '%') {
          currentPart += '</strong>'
        } else {
          currentPart += sections[i].sentence[j]
        }
        text.html(currentPart)
        j++
      } else if (j > 0 && !forward) {
        if (sections[i].sentence[j] === '&') {
          currentPart = currentPart.slice(0, - 8)
        } else if (sections[i].sentence[j] === '%') {
          currentPart = currentPart.slice(0, - 9)
        } else {
          currentPart = currentPart.slice(0, - 1)
        }
        text.html(currentPart)
        j--
      } else if (j === 0) {
        forward = true
        i++ // loops between sections
      }
      if (i === lengthArray) {
        i = 0
      }
      writing(text)
    }, interval)
  }
};

// BACKGROUND LOOP
function rand (min, max) {
  return min + Math.random() * (max - min)
}
function changebackground () {
  var body = $('body')
  var h = rand(1, 360)
  var s = rand(80, 90)
  var l = rand(50, 60)
  var h2
  if (h < 180) {
    h2 = h + 180
  } else {
    h2 = h - 180
  }
  body.css({ // looping background
    'background': 'hsl(' + h + ',' + s + '%,' + l + '%)'
  })
  $('.fixedBg').css({ // background on hover
    'background': 'hsl(' + h + ',' + s + '%,' + l + '%)',
    'color': 'hsl(' + h2 + ',' + s + '%,' + l + '%)'
  })
  $('.coloredHover').css({ // color links on hover
    'color': 'hsl(' + h + ',' + s + '%,' + l + '%)'
  })

}

// COLORS LOOP
function loopColors () {
  var selector = $('.loopCol')
  var h = rand(1, 360)
  var s = rand(0, 100)
  var l = rand(0, 80)
  selector.css({
    'color': 'hsl(' + h + ',' + s + '%,' + l + '%)'
  })
}

// NOOB STUFF
$(document).ready(function () {

// BACKGROUND
  changebackground()
  setTimeout(function () {
    $('body').removeClass('noTransition')
    $('fixedBg').removeClass('noTransition')
    changebackground()
  }, 2000)
  setInterval(function () {
    changebackground()
  }, 20000)

// TYPING
  var firstTimer = 1000
  var text       = $('.jstext')
  setTimeout(function () {
    writing(text)
  }, firstTimer)

// HOVER
  if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
    $('body').addClass('firefoxFix')
  }

})

// TWEENMAX
$(document).ready(function ($) {
  var bgFixed = $('.fixedBg')
  var elements = $('.fixedBg span')
  var triggerHover = $('.loopCol')
  tlHoverIn  = new TimelineMax()
  tlHoverOut = new TimelineMax()

  triggerHover.hover(

    function () {
      TweenMax.to($(this).next('.fixedBg'), 0.5, {autoAlpha: 1})
      TweenMax.staggerTo($(this).next('.fixedBg').find('span'), 0.8, { y: 0, ease: Expo.easeOut}, 0)
    },

    function () {
      TweenMax.to($(this).next('.fixedBg'), 0.5, {autoAlpha: 0})
      TweenMax.to($(this).next('.fixedBg').find('span').eq(0), 0.8, { y: 30, ease: Expo.easeOut})
      TweenMax.to($(this).next('.fixedBg').find('span').eq(1), 0.8, { y: 60, ease: Expo.easeOut})
      TweenMax.to($(this).next('.fixedBg').find('span').eq(2), 0.8, { y: 90, ease: Expo.easeOut})
      TweenMax.to($(this).next('.fixedBg').find('span').eq(3), 0.8, { y: 120, ease: Expo.easeOut})
    }
  )
})
