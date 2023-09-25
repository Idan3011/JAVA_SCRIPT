const string = "The more you know, the more you know that you don't know";
const searchWord = "you";
let lastIndex = -1;
let currentIndex = 0;

while (currentIndex !== -1) {
  currentIndex = string.indexOf(searchWord, currentIndex + 1);
  if (currentIndex !== -1) {
    lastIndex = currentIndex;
  }
}

console.log(lastIndex);
