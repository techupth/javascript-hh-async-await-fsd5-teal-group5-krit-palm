// Exercise #4
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};
// Start coding here

//Declar Func
// async function getJohnData() {
//   const getData = await getJohnProfile();
//   console.log(getData);
// }

//Arrow Func
const getJohnData = async () => {
  const getData = await getJohnProfile();
  console.log(getData);
};

getJohnData();
