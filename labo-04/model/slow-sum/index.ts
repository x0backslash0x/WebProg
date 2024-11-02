const slowSum = (a: number, b: number) => {
  return new Promise<number>((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
};

const slowMult = (a: number, b: number) => {
  return new Promise<number>((resolve, reject) => {
    setTimeout(() => {
      resolve(a * b);
    }, 1500);
  });
};

const slowDiv = (a: number, b: number) => {
  return new Promise<number>((resolve, reject) => {
      setTimeout(() => {
          if (b == 0) {
            reject("You cannot divide by 0");
          } else {
            resolve(a / b); 
          }
      }, 2000);
  });
};

slowSum(1, 5).then(result => console.log(result));

slowSum(1, 5).then(result =>
    slowMult(result, 2).then(result => console.log(result))
);

slowDiv(6, 0)
    .then(result => console.log(result))
    .catch(error => console.log(error));

slowDiv(6, 3)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));