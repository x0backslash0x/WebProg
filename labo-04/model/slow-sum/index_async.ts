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

async function runMe() {
    console.log(await slowSum(1, 5));
    
    let r1: number = await slowSum(1, 5);
    let r2: number = await slowMult(r1, 2);
    console.log(r2);

    try {
        let d1: number = await slowDiv(6, 0);
        console.log(d1);
    } catch (error: any) {
        console.log(error);
    }
    try {
        let d2: number = await slowDiv(6, 2);
        console.log(d2);
    } catch (error: any) {
        console.log(error);
    }
}

runMe();