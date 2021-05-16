function bouncingBall(initial, proportion) {
  var count = 0;

  while (initial > 1) {
    initial *= proportion;
    count++;
  }
  return console.log(`Therefore answer is ${count} bounces`);
}
bouncingBall(30, 0.3);
