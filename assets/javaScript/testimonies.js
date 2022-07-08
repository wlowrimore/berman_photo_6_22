$(document).ready(function () {
  var galleryQuote = $(".quote-cont").find("p").first();
  let quotes = [
    "“Sayre’s unbridled enthusiasm for the world of drumming is totally undeniable and the results speak for themselves…she is a real pleasure to work with!”   -Roger Taylor (Duran Duran)",

    "“My experience with Sayre was absolutely nothing short of an amazing, professional, and fun. She knew exactly what she was going for and how to get it. We had a short opportunity of time and she took full advantage of that, getting everything we needed.”   -Troy Luccketta (Tesla)",

    "“Sayre is a great photographer but in addition to that I was impressed with her attention to detail and concern for authenticity. We did our photo session on stage before our set and she worked efficiently and unobtrusively to get the job done. AND…she started taking ddrum lessons several years ago so that she could become even better at all of this. How’s that for dedication!”   -Ray Luzier (KoRn)",

    "“Sayre is without a doubt the most passionate photographer of drummers and drumming that I have ever worked with. Sayre kicks ass!”   -James Kottak (Scorpions)",

    "“Sayre knows drummers. Yes, she loves drums and even plays drums, but it’s the community spirit of drummers that has brought Sayre to this place. By focusing on the drummer, she is able to capture all of the spirit, energy, personality and charisma of the sweatiest person in any band! I have Sayre shoot me whenever I am in her area and we always have a fantastic time with laughs, sweat and…drums! I can’t recommend her enough!”   -Rich Redmond (Jason Aldean)",
    "“I was really pleased to have Sayre taking the shots and asking the questions for my Rhythm Magazine interview,asking all the right questions and being 100% thorough with it. With her photography she somehow manages to catch the best side of every drummer… and that’s not always easy!”   -Chris Hayden (Florence and the Machine)",
  ];

  // sets time of fadeIn/fadOut of testimonials
  let count = 0;

  setInterval(function () {
    let index = count++ % quotes.length;
    galleryQuote.fadeOut(2000, function () {
      $(this).html(quotes[index]);
      $(this).fadeIn(2000);
    });
  }, 8000);
});
