const froyoFlavor = prompt("Please enter froyo flavor separtated by commas");
const froyoArr = [];
const flavors = froyoFlavor.split(",");

for (let i = 0; i < flavors.length; i++) {
  const flavor = flavors[i].trim();
  const froyoEntry = { flavor: flavor };
  froyoArr.push(froyoEntry);
}
console.log(froyoArr);

const flavorCounts = {};

for (let i = 0; i < flavors.length; i++) {
  const flavor = flavors[i].trim().toLowerCase();

  if (flavorCounts[flavor]) {
    flavorCounts[flavor]++;
  } else {
    flavorCounts[flavor] = 1;
  }
}

console.log(flavorCounts);
