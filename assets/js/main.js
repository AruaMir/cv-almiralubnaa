const quotes = [
  "If you were the moon, I would be the tide. For I knew you’d push me away, yet I still returned to your shore.",
  "If you were a blade, I would be the hand. For I knew you’d cut me, yet I still chose to hold you tight.",
  "If you were winter, I would be the flower. For I knew I’d wither in your cold, yet I still tried to bloom for you.",
  "If you were silence, I would be the song. For I knew you’d drown me out, yet I still sang your name.",
  "If you were Wi-Fi, I would be my phone. For I knew you’d disappear when I need you most, yet I still searched for your signal.",
  "If you were Indomie, I would be hot water. For I knew people would say we’re unhealthy, yet I still couldn’t resist you.",
  "If you were TikTok, I would be my sleep schedule. For I knew you’d ruin me, yet I still scrolled endlessly toward you.",
  "If you were chili sauce, I would be my tongue. For I knew you’d burn me, yet I still dipped everything in you.",
  "If you were gravity, I would be my clumsy ass. For I knew I’d fall, yet I still tripped toward you.",
  "If you were a mosquito, I would be bare skin. For I knew you’d bite me, yet I still left myself uncovered.",
  "If you.were 3 a.m. thoughts, I would be my brain. For I knew you’d destroy my peace, yet I still entertained you.",
  "If you were a red flag, I would be colorblind. For I knew the danger, yet I still called you my favorite shade.",
  "If you were a cage, I would be the bird. For I knew you’d trap me, yet I still begged to be locked inside with you.",
  "If you were poison, I would be the glass. For I knew you’d kill me, yet I still longed to hold you till the end.",
  "If you were a nightmare, I would be my sleep. For I knew you’d haunt me, yet I still closed my eyes for you."
];
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
document.getElementById('random-quote').textContent = randomQuote;
