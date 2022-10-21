const user = "SAM NJENGA";

const getUserData = () => {
  if (!user) return;

  const data = {
    name: "developedbyed",
    age: 28,
    avatar: "https://wahoo.jpged",
  };
  console.log(data);
};

console.log(getUserData());
