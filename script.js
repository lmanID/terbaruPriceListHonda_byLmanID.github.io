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
  'Satya S MT, Satya E MT, Satya E CVT, RS MT, RS CVT, RS MT 2 Tone, RS CVT 2 Tone';
let strPriceHondaBrio =
  '181.180.000, 194.080.000, 209.580.000, 251.680.000, 262.380.000, 254.180.000, 264.880.000';

// HONDA ALL New BR-V
let strTypeHondaAllNewBrv =
  'BR-V S MT, BR-V E MT, BR-V E CVT,  FMC PRESTIGE CVT, FMC PRESTIGE HS CVT';
let strPriceHondaAllNewBrv =
  '319.400.000, 333.600.000, 344.600.000, 367.600.000, 387.600.000';

// HONDA CRV
let strTypeHondaCrv = 'CBU 1.5 TURBO, CBU RS E:HEV';
let strPriceHondaCrv = '767.900.000, 828.850.000';

// HONDA ALL New HR-V
let strTypeHondaAllNewHrv =
  'S CVT, E CVT, 1.5 E CVT 2 Tone, 1.5 SE CVT, 1.5 SE CVT 2 Tone, 1.5T RS CVT, 1.5T RS CVT 2 Tone';
let strPriceHondaAllNewHrv =
  '396.520.000, 416.520.000, 419.020.000, 436.720.000, 439.220.000, 557.250.000, 559.750.000';

// HONDA WR-V
let strTypeHondaWrv =
  'E MT, E CVT, RS CVT, RS CVT 2 Tone, RS HS CVT, RS HS CVT 2 TONE';
let strPriceHondaWrv =
  '288.000.000, 299.010.000, 317.010.000, 319.510.000, 337.010.000, 339.510.000';

// HONDA City Hatch Back
let strTypeHondaCityHatchBack = 'RS MT, RS CVT, RS HS CVT';
let strPriceHondaCityHatchBack = '363.900.000, 374.910.000, 394.910.000';

// HONDA City
let strTypeHondaCity = 'E CVT';
let strPriceHondaCity = '395.030.000';

// HONDA Civic
let strTypeHondaCivic = 'ALL NEW CIVIC RS';
let strPriceHondaCivic = '636.760.000';

// HONDA Accord
let strTypeHondaAccord = 'ACCORD 1.5T CVT';
let strPriceHondaAccord = '840,470,000';

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
