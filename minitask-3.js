
const moneys = [1000, 2000, 5000, 10000, 50000];
let change = 121000
let changeUse = []

let i = 1
while (change > 0) {
  if (change >= moneys[moneys.length - i]) {
    change -= moneys[moneys.length - i];
    changeUse.push(moneys[moneys.length - i]);
  } else {
    i++;
  }
}

console.log(`Silahkan ambil kembaliannya yaa: ${changeUse.join(', ')}`);
