var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
  var res = JSON.parse(request.response);
  // console.log(res)
  // for (let x of res){
  //     console.log('Common Name:', x.name.common, 'Capital:', x.capital && x.capital[0] ? x.capital[0] : 'Capital not available', 'Area:', x.area)
  // }
};

function getFirstData(inputData, n) {
  if (n) {
    if (n < 0) {
      return [];
    } else if (n > 0) {
      return inputData.slice(0, n);
    }
  } else {
    return inputData[0];
  }
}
console.log(getFirstData([4, 5, 8, 9]));

let getFirstDataAnonymousFunction = function (inputData, n) {
  if (n) {
    if (n < 0) {
      return [];
    } else if (n > 0) {
      return inputData.slice(0, n);
    }
  } else {
    return inputData[0];
  }
};
console.log(getFirstDataAnonymousFunction([5, 8, 9, 6, 1, 4], 8));

let lastElement = (inputData, n) => {
  if (n) {
    return inputData.slice(-n);
  } else {
    return inputData.slice(-1);
  }
};
console.log(lastElement([5, 8, 9, 6, 1, 4], 3));

let patternPrint = () => {
  for (let i = 1; i <= 4; i++) {
    let j = 0;
    let tempArr = [];
    while (j !== i) {
      tempArr.push("*");
      j += 1;
    }
    console.log(tempArr.join(" "));
  }
  for (let i = 4; i >= 0; i--) {
    let j = 0;
    let tempArr = [];
    while (j !== i) {
      tempArr.push("*");
      j += 1;
    }
    if (tempArr.length !== 0) {
      console.log(tempArr.join(" "));
    }
  }
};

patternPrint();

let generateArray = (a, b) => {
  let tempArr = [];
  for (let i = a; i <= b; i++) {
    tempArr.push(i);
  }
  // return tempArr.join(" ")
  return tempArr;
};
console.log(generateArray(3, 8));

let res1 = (function (a, b) {
  console.log(a + b);
})(12, 13);

let uniqueNumbers = function (inputData) {
  let tempArr = [];
  for (let i of inputData) {
    if (!tempArr.includes(i)) {
      tempArr.push(i);
    } else {
      let index = tempArr.indexOf(i);
      tempArr.splice(index, 1);
    }
  }
  return tempArr;
};
console.log(uniqueNumbers([1, 1, 2, 3, 4, 5, 6, 7, 4, 3, 2, 5, 6]));

let arr1 = [1, 2];
let arr2 = [3, 4];
let res = [...arr1, ...arr2];
console.log(res);

let obj1 = { name: "Godwin", age: 27 };
let obj2 = { address: "Chennai", ...obj1 };
console.log(obj2);

let arr3 = [3, 4, 5, 4, 2, 3, 6, 4, 8, 1, 3, 5, 4, 6];
console.log(Math.max(...arr3));

let maxVal = 0;
arr3.forEach((item) => {
  item > maxVal ? (maxVal = item) : maxVal;
});
console.log(maxVal);

function restExample(...rest) {
  let val = 0;
  for (let x of rest) {
    val = val + x;
  }
  return val;
}
console.log(restExample(20, 30, 40, 54));

function restExample1(...rest) {
  let obj3 = {};
  let tempCheck = 0;
  let bigVal;
  for (let x of rest) {
    obj3[x] = (obj3[x] || 0) + 1;
    // obj3[x] = obj3[x] ? obj3[x] + 1 : 1
    if (obj3[x] > tempCheck) {
      tempCheck = obj3[x];
      bigVal = x;
    }
  }
  console.log(obj3);
  return `{${bigVal}: ${tempCheck}}`;
}
console.log(restExample1(3, "q", "q", "q", 2, 3, "q", 3, "q", 2, 4, 9, 3));

class bike {
  constructor(name, color, mileage, speed) {
    this.name = name;
    this.color = color;
    this.mileage = mileage;
    this.speed = speed;
  }
  printName(age) {
    return `My name is ${this.name} and my age is ${age}`;
  }
}
var bikeObj1 = new bike("Pulsar", "Blue", 50, 180);
console.log(bikeObj1);
console.log(bikeObj1.printName(2));

let obj4 = {
  name:"Godwin",
  age:27,
  location: "Chennai"
}
Object.keys(obj4).forEach((key)=>{console.log(`Key: ${key}`)})
Object.values(obj4).forEach((value)=>{console.log(`Value: ${value}`)})

var request1 = new XMLHttpRequest()
request.open('GET', 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json')
request.send()
request.onload = ()=>{
  var response1 = JSON.parse(request.response)
  console.log(response1)
  let asiaRegion = response1.filter((item)=>{
      return item.region === "Asia" && item.population<200000
  }).map((ele)=>ele.capital)
  console.log(asiaRegion)
  let totalPopulation = response1.reduce((acc,cv)=>acc+cv.population,0)
  console.log(totalPopulation)
}

