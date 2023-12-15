// Exercise #5
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};
// Start coding here

const getJohnData = async () => {
  try {
    const getData = await getJohnProfile();
    console.log(getData);
  } catch (error) {
    console.log(error);
  }
};

getJohnData();
