// Extract from an object

const user = {
  age: 27,
  tweets: 20,
  todo: ["I had my first JS Event", "I have just finished doing my coding"],
};

const { age, tweets } = user;
console.log(tweets);

const {
  todo: [sam1, sam2],
} = user;

console.log(sam1);
console.log(sam2);
