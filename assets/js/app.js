function startIntro() {
  $(".content div").typed({
    strings: [
      "Hello Everyone!",
      "How's it going?",
      "Welcome to the Computer Science Society Orientation!",
      "It's great to have you here with us today.",
      "Without wasting anymore time, let's get our first speaker on!",
      "Give it up for <strong class='underline'>Shifa!</strong>"
    ],
    showCursor: false,
    backDelay: 1000,
    startDelay: 1500,
    contentType: 'html'
  });
}

$('.js-start').on('click', function() {
  startIntro();
});

