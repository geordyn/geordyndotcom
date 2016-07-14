angular.module("app").controller("homeCtrl", function($scope) {

  // SENTENCES
  var sections = [
    {	sentence : ' a Full-Stack Web Developer from the US.' }
  , { sentence : ' currently learning ReactJS. ' }
  , {	sentence : ' is playing PokemonGo.' }
  , { sentence : ' helping others learn code at DevMountain. ' }
  , {	sentence : ' always going to make you laugh.' }
  , { sentence : ' eating avocados.' }
  , {	sentence : ' currently learning ReactJS. ' }
  , { sentence : ' enjoying coding front to back. ' }
  , {	sentence : ' all in, or nothing.' }
  , {	sentence : ' currently living in Dallas, Texas.'  }
  , {	sentence : ' listening to Vance Joy on Spotify.' }
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


  //ON LOAD
  $(document).ready(function () {
    console.log('on-load running');

  // TYPING
    var firstTimer = 1000
    var text       = $('.jstext')
    setTimeout(function () {
      writing(text)
    }, firstTimer)

  });



// END CTRL
});
