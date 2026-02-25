
const moneys = [1000, 2000, 5000, 10000, 50000];
let change = 121000
let changeUse = {}

let i = 1
while (change > 0) {
  let money = moneys[moneys.length - i]
  if (change >= money) {
    change -= money;
    changeUse[money] = (changeUse[money] || 0) + 1
  } else {
    i++;
  }
}

console.log(`Silahkan ambil kembaliannya yaa: ${Object.entries(changeUse).map(([money, count]) => `${count} lembar uang ${money}`).join(', ')}`);
