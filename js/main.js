function getRandomInt(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
}
getRandomInt(0, 100);

function checkStr(str, maxLen) {
  return maxLen >= String(str).length;
}
checkStr('Привет', 2);
