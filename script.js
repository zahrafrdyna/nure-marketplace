//const nama=prompt("masukan nama kamu:");
//alert("nama kamu adalah: "+ nama);

const cartValue = document.querySelector("#cart-cont");

const btnBuys = document.querySelectorAll(".btn-beli");
const qtyValues = document.querySelectorAll(".qty-value");
const qtyPluses = document.querySelectorAll(".btn-plus");
const qtyMinuses = document.querySelectorAll(".btn-min");

qtyPluses.forEach((btn, i) => {
  btn.addEventListener("click", function () {
    let jumlahBarang = parseInt(qtyValues[i].value);
    jumlahBarang = jumlahBarang + 1;

    qtyValues[i].value = jumlahBarang;
  });
});
qtyMinuses.forEach((btn, i) => {
  btn.addEventListener("click", function () {
    let jumlahBarang = parseInt(qtyValues[i].value);
    jumlahBarang = jumlahBarang - 1;

    qtyValues[i].value = jumlahBarang;
  });
});
btnBuys.forEach((btn, i) => {
  btn.addEventListener("click", function () {
    let jumlahBeli = parseInt(cartValue.textContent);
    jumlahBeli = jumlahBeli + parseInt(qtyValues[i].value);

    cartValue.textContent = jumlahBeli;
  });
});