const btn_menu_toggle = document.querySelector('.btn_menu_toggle');
const box_icon_close = document.querySelector('.box_icon_close');

btn_menu_toggle.addEventListener('click', function () {
  const nav_menu_list = document.querySelector('.nav_menu_list');
  nav_menu_list.classList.add('active');
});

box_icon_close.addEventListener('click', () => {
  const nav_menu_list = document.querySelector('.nav_menu_list');
  nav_menu_list.classList.remove('active');
});

const btn_menu = document.querySelector('.btn_menu');
console.log('Ini tinggi Button Bawah : ' + btn_menu.offsetHeight);

const fix_btn_menu = () => {
  if (window.scrollY > btn_menu.offsetHeight + 41) {
    btn_menu.classList.add('active');
  } else {
    btn_menu.classList.remove('active');
  }
};

// ================================Kontainer LIST=============================
const container_list = document.querySelector('.container-list');
let containerHeight = container_list.offsetHeight;
let tinggiLayar = window.innerHeight;

console.log('Ini Tinggi Layar : ' + tinggiLayar);

console.log('Ini Tinggi Kontainer : ' + containerHeight);

console.log('================');

const cetakTinggiKontainer = () => {
  if (tinggiLayar < containerHeight) {
    console.log;
  }
};

// ================================AKHIR Kontainer LIST=============================

window.addEventListener('scroll', fix_btn_menu);

// HONDA BRIO
let strTypeHondaBrio =
  'S MT, E MT, E CVT, RS MT, RS CVT, RS URBANITE MT, RS URBANITE CVT';
let strPriceHondaBrio =
  '164.400.000, 179.100.000, 190.400.000, 223.100.000, 223.100.000, 233.900.000, 243.900.000';

// HONDA ALL New BR-V
let strTypeHondaAllNewBrv =
  'BR-V S MT, BR-V E MT, BR-V E CVT, BR-V PRESS, BR-V PRESS Sensing';
let strPriceHondaAllNewBrv =
  '287.800.000, 302.000.000, 312.000.000, 335.000.000, 355.000.000';

// HONDA CRV
let strTypeHondaCrv = 'CR-V 2.0, CR-V 1.5, CRV 1.5 PRES, CRV BLACK EDITION';
let strPriceHondaCrv = '525.300.000, 606.300.000, 669.600.000, 684.600.000';

// HONDA ALL New HR-V
let strTypeHondaAllNewHrv =
  '1.5 S CVT, 1.5 E CVT, 1.5 SE CVT, 1.5 TURBO RS, 1.5 E CVT Two Tone, 1.5 SE CVT  Two Tone, 1.5 TURB RS Two Tone';
let strPriceHondaAllNewHrv =
  '375.900.000, 395.900.000, 416.100.000, 529.900.000, 398.400.000, 418.600.000, 532.400.000';

// HONDA WR-V
let strTypeHondaWrv = 'E CVT, E RS CVT, E RS CVT SENSING';
let strPriceHondaWrv = '279.400.000, 297.400.000, 317.400.000';

// HONDA City Hatch Back
let strTypeHondaCityHatchBack = 'RS MT, RS CVT, RS HS CVT';
let strPriceHondaCityHatchBack = '343.600.000, 353.600.000, 373.600.000';

// HONDA City
let strTypeHondaCity = 'ALL NEW CITY';
let strPriceHondaCity = '373.900.000';

// HONDA Civic
let strTypeHondaCivic = 'ALL NEW CIVIC RS';
let strPriceHondaCivic = '601.400.000';

// HONDA Accord
let strTypeHondaAccord = 'ACCORD 1.5 TURBO';
let strPriceHondaAccord = '787.300.000';

let hondaData = new Map();
// Memasukkan data tipe dan harga ke dalam objek map
hondaData.set('Honda Brio', {
  types: strTypeHondaBrio.split(', '),
  prices: strPriceHondaBrio.split(', '),
});
hondaData.set('All New BRV', {
  types: strTypeHondaAllNewBrv.split(', '),
  prices: strPriceHondaAllNewBrv.split(', '),
});
hondaData.set('Honda CR-V', {
  types: strTypeHondaCrv.split(', '),
  prices: strPriceHondaCrv.split(', '),
});
hondaData.set('All New HR-V', {
  types: strTypeHondaAllNewHrv.split(', '),
  prices: strPriceHondaAllNewHrv.split(', '),
});
hondaData.set('Honda WR-V', {
  types: strTypeHondaWrv.split(', '),
  prices: strPriceHondaWrv.split(', '),
});
hondaData.set('Honda City Hatchback', {
  types: strTypeHondaCityHatchBack.split(', '),
  prices: strPriceHondaCityHatchBack.split(', '),
});
hondaData.set('Honda City', {
  types: [strTypeHondaCity],
  prices: [strPriceHondaCity],
});
hondaData.set('Honda Civic', {
  types: [strTypeHondaCivic],
  prices: [strPriceHondaCivic],
});
hondaData.set('Honda Accord', {
  types: [strTypeHondaAccord],
  prices: [strPriceHondaAccord],
});

// let types = strTypeHondaBrio.split(', ');
// let prices = strPriceHondaBrio.split(', ');

// // Mendapatkan elemen <ul> dengan class "type" dan "price"
// let typeList = document.querySelector('ul.type');
// let priceList = document.querySelector('ul.price');

// // Membuat list tipe Honda Brio
// types.forEach((type) => {
//   let listItem = document.createElement('li');
//   listItem.textContent = type;
//   typeList.appendChild(listItem);
// });

// // Membuat list harga Honda Brio
// prices.forEach((price) => {
//   let listItem = document.createElement('li');
//   listItem.textContent = price;
//   priceList.appendChild(listItem);
// });

// Mendapatkan data tipe dan harga Honda Brio dari objek hondaData
let hondaBrioData = hondaData.get('Honda Brio');
// Mendapatkan data tipe dan harga Honda 'All New BRV' dari objek hondaData
let hondaBrvData = hondaData.get('All New BRV');
// HONDA CRV
let hondaCrvData = hondaData.get('Honda CR-V');
// HONDA ALL New HR-V
let hondaHrvData = hondaData.get('All New HR-V');
// HONDA WR-V
let hondaWrvData = hondaData.get('Honda WR-V');
// HONDA City Hatch Back
let hondaCityHatcData = hondaData.get('Honda City Hatchback');
// HONDA City
let hondaCityData = hondaData.get('Honda City');
// HONDA Civic
let hondaCivicData = hondaData.get('Honda Civic');
// HONDA Accord
let hondaAccordData = hondaData.get('Honda Accord');

// Mendapatkan elemen <ul> dengan class "type" dan "price"
let typeListBrio = document.querySelector('ul.typeListBrio');
let priceListBrio = document.querySelector('ul.priceListBrio');

// ========================== ALL New HONDA BRIO ========================== CREAT DATA
// Membuat list tipe Honda Brio
hondaBrioData.types.forEach((type) => {
  let listItem = document.createElement('li');
  listItem.textContent = type;
  listItem.setAttribute('translate', 'no');
  typeListBrio.appendChild(listItem);
});

// Membuat list harga Honda Brio
hondaBrioData.prices.forEach((price) => {
  let listItem = document.createElement('li');
  listItem.textContent = price;
  priceListBrio.appendChild(listItem);
});
// ========================== END All New HONDA BRIO ==========================

let typeListBrv = document.querySelector('ul.typeListBrv');
let priceListBrv = document.querySelector('ul.priceListBrv');

// ========================== All New HONDA BR-V ========================== CREAT DATA
// Membuat list tipe Honda All New BRV
hondaBrvData.types.forEach((type) => {
  let listItem = document.createElement('li');
  listItem.textContent = type;
  listItem.setAttribute('translate', 'no');
  typeListBrv.appendChild(listItem);
});

// Membuat list harga Honda All New BRV
hondaBrvData.prices.forEach((price) => {
  let listItem = document.createElement('li');
  listItem.textContent = price;
  priceListBrv.appendChild(listItem);
});

// ========================== END All New HONDA BR-V ==========================

let typeListCrv = document.querySelector('ul.typeListCrv');
let priceListCrv = document.querySelector('ul.priceListCrv');

// ========================== All New HONDA CR-V ========================== CREAT DATA
// Membuat list tipe Honda All New CRV
hondaCrvData.types.forEach((type) => {
  let listItem = document.createElement('li');
  listItem.textContent = type;
  listItem.setAttribute('translate', 'no');
  typeListCrv.appendChild(listItem);
});

// Membuat list harga Honda All New CRV
hondaCrvData.prices.forEach((price) => {
  let listItem = document.createElement('li');
  listItem.textContent = price;
  priceListCrv.appendChild(listItem);
});

// ========================== END All New HONDA CR-V ==========================

let typeListHrv = document.querySelector('ul.typeListHrv');
let priceListHrv = document.querySelector('ul.priceListHrv');

// ========================== All New HONDA HR-V ========================== CREAT DATA
// Membuat list tipe Honda All New HR-V
hondaHrvData.types.forEach((type) => {
  let listItem = document.createElement('li');
  listItem.textContent = type;
  listItem.setAttribute('translate', 'no');
  typeListHrv.appendChild(listItem);
});

// Membuat list harga Honda All New HR-V
hondaHrvData.prices.forEach((price) => {
  let listItem = document.createElement('li');
  listItem.textContent = price;
  priceListHrv.appendChild(listItem);
});

// ========================== END All New HONDA WR-V ==========================

let typeListWrv = document.querySelector('ul.typeListWrv');
let priceListWrv = document.querySelector('ul.priceListWrv');

// ========================== All New HONDA WR-V ========================== CREAT DATA
// Membuat list tipe Honda All New WR-V
hondaWrvData.types.forEach((type) => {
  let listItem = document.createElement('li');
  listItem.textContent = type;
  listItem.setAttribute('translate', 'no');
  typeListWrv.appendChild(listItem);
});

// Membuat list harga Honda All New WR-V
hondaWrvData.prices.forEach((price) => {
  let listItem = document.createElement('li');
  listItem.textContent = price;
  priceListWrv.appendChild(listItem);
});

// ========================== END All New HONDA WR-V ==========================

let typeListCityHatc = document.querySelector('ul.typeListCityHatc');
let priceListCityHatc = document.querySelector('ul.priceListCityHatc');

// ========================== All New HONDA CITY HATCHBACK ========================== CREAT DATA
// Membuat list tipe Honda All New WR-V
hondaCityHatcData.types.forEach((type) => {
  let listItem = document.createElement('li');
  listItem.textContent = type;
  listItem.setAttribute('translate', 'no');
  typeListCityHatc.appendChild(listItem);
});

// Membuat list harga Honda All New WR-V
hondaCityHatcData.prices.forEach((price) => {
  let listItem = document.createElement('li');
  listItem.textContent = price;
  priceListCityHatc.appendChild(listItem);
});

// ========================== END All HONDA CITY HATCHBACK ==========================

let typeListCity = document.querySelector('ul.typeListCity');
let priceListCity = document.querySelector('ul.priceListCity');

// ========================== All New HONDA CITY ========================== CREAT DATA
// Membuat list tipe Honda All New WR-V
hondaCityData.types.forEach((type) => {
  let listItem = document.createElement('li');
  listItem.textContent = type;
  listItem.setAttribute('translate', 'no');
  typeListCity.appendChild(listItem);
});

// Membuat list harga Honda All New WR-V
hondaCityData.prices.forEach((price) => {
  let listItem = document.createElement('li');
  listItem.textContent = price;
  priceListCity.appendChild(listItem);
});

// ========================== END All HONDA CITY ==========================

let typeListCivic = document.querySelector('ul.typeListCivic');
let priceListCivic = document.querySelector('ul.priceListCivic');

// ========================== All New HONDA CIVIC ========================== CREAT DATA
// Membuat list tipe Honda All New WR-V
hondaCivicData.types.forEach((type) => {
  let listItem = document.createElement('li');
  listItem.textContent = type;
  listItem.setAttribute('translate', 'no');
  typeListCivic.appendChild(listItem);
});

// Membuat list harga Honda All New WR-V
hondaCivicData.prices.forEach((price) => {
  let listItem = document.createElement('li');
  listItem.textContent = price;
  priceListCivic.appendChild(listItem);
});

// ========================== END All HONDA CIVIC ==========================

let typeListAccord = document.querySelector('ul.typeListAccord');
let priceListAccord = document.querySelector('ul.priceListAccord');

// ========================== All New HONDA ACCORD ========================== CREAT DATA
// Membuat list tipe Honda All New WR-V
hondaAccordData.types.forEach((type) => {
  let listItem = document.createElement('li');
  listItem.textContent = type;
  listItem.setAttribute('translate', 'no');
  typeListAccord.appendChild(listItem);
});

// Membuat list harga Honda All New WR-V
hondaAccordData.prices.forEach((price) => {
  let listItem = document.createElement('li');
  listItem.textContent = price;
  priceListAccord.appendChild(listItem);
});

// ========================== END All HONDA CITY ACCORD ==========================

// ====================== Animation KETIKA HALAMAN BARU DI MUAT ======================

// document.addEventListener('DOMContentLoaded', function () {
//   const sectionList = document.querySelectorAll('.sectionList');

//   sectionList.forEach((section, index) => {
//     if (index % 2 === 0) {
//       section.classList.add('even');
//     } else {
//       section.classList.add('odd');
//     }
//   });

//   // Triggering the animation
//   setTimeout(() => {
//     sectionList.forEach((section, index) => {
//       section.style.opacity = '1';
//       section.style.transform = 'translateX(0)';
//     });
//   }, 1000);
// });
document.addEventListener('DOMContentLoaded', function () {
  const sectionList = document.querySelectorAll('.sectionList');

  sectionList.forEach((section, index) => {
    if (index % 2 === 0) {
      section.classList.add('even');
    } else {
      section.classList.add('odd');
    }
  });

  // Triggering the animation
  setTimeout(() => {
    sectionList.forEach((section, index) => {
      section.style.opacity = '1';
      section.style.transform = 'translateX(0)';
    });
  }, 100);
});

// ====================== AKHIR ====>>> Animation KETIKA HALAMAN BARU DI MUAT ======================

// ================================ Button ALL NEW TYPE // KETIKA DI KLIK UNTUK MENAMPILKAN LIST =========================
const accordions = Array.from(document.getElementsByClassName('accordion'));
const panels = Array.from(document.getElementsByClassName('panel'));
const icons = document.getElementsByClassName('icon');

accordions.forEach((accordion, index) => {
  accordion.addEventListener('click', () => {
    const panel = panels[index];
    if (panel.classList.contains('active')) {
      window.requestAnimationFrame(() => {
        panel.style.maxHeight = null; // Menghapus max-height untuk menghindari delay
      });
    } else {
      window.requestAnimationFrame(() => {
        panel.style.maxHeight = panel.scrollHeight * 2 + 'px'; // Mengatur max-height untuk menampilkan panel
      });
    }

    panel.classList.toggle('active');
    accordion.classList.toggle('active');

    const icon = icons[index];
    icon.classList.toggle('active');
    cetakTinggiKontainer();
  });
});
// ==============================  ======= AKHIR ====>> Button ALL NEW TYPE // KETIKA DI KLIK UNTUK MENAMPILKAN LIST =========================
