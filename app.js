const countryList = { // form maps
  AED: "AE",
  AFN: "AF",
  XCD: "AG",
  ALL: "AL",
  AMD: "AM",
  ANG: "AN",
  AOA: "AO",
  AQD: "AQ",
  ARS: "AR",
  AUD: "AU",
  AZN: "AZ",
  BAM: "BA",
  BBD: "BB",
  BDT: "BD",
  XOF: "BE",
  BGN: "BG",
  BHD: "BH",
  BIF: "BI",
  BMD: "BM",
  BND: "BN",
  BOB: "BO",
  BRL: "BR",
  BSD: "BS",
  NOK: "BV",
  BWP: "BW",
  BYR: "BY",
  BZD: "BZ",
  CAD: "CA",
  CDF: "CD",
  XAF: "CF",
  CHF: "CH",
  CLP: "CL",
  CNY: "CN",
  COP: "CO",
  CRC: "CR",
  CUP: "CU",
  CVE: "CV",
  CYP: "CY",
  CZK: "CZ",
  DJF: "DJ",
  DKK: "DK",
  DOP: "DO",
  DZD: "DZ",
  ECS: "EC",
  EEK: "EE",
  EGP: "EG",
  ETB: "ET",
  EUR: "FR",
  FJD: "FJ",
  FKP: "FK",
  GBP: "GB",
  GEL: "GE",
  GGP: "GG",
  GHS: "GH",
  GIP: "GI",
  GMD: "GM",
  GNF: "GN",
  GTQ: "GT",
  GYD: "GY",
  HKD: "HK",
  HNL: "HN",
  HRK: "HR",
  HTG: "HT",
  HUF: "HU",
  IDR: "ID",
  ILS: "IL",
  INR: "IN",
  IQD: "IQ",
  IRR: "IR",
  ISK: "IS",
  JMD: "JM",
  JOD: "JO",
  JPY: "JP",
  KES: "KE",
  KGS: "KG",
  KHR: "KH",
  KMF: "KM",
  KPW: "KP",
  KRW: "KR",
  KWD: "KW",
  KYD: "KY",
  KZT: "KZ",
  LAK: "LA",
  LBP: "LB",
  LKR: "LK",
  LRD: "LR",
  LSL: "LS",
  LTL: "LT",
  LVL: "LV",
  LYD: "LY",
  MAD: "MA",
  MDL: "MD",
  MGA: "MG",
  MKD: "MK",
  MMK: "MM",
  MNT: "MN",
  MOP: "MO",
  MRO: "MR",
  MTL: "MT",
  MUR: "MU",
  MVR: "MV",
  MWK: "MW",
  MXN: "MX",
  MYR: "MY",
  MZN: "MZ",
  NAD: "NA",
  XPF: "NC",
  NGN: "NG",
  NIO: "NI",
  NPR: "NP",
  NZD: "NZ",
  OMR: "OM",
  PAB: "PA",
  PEN: "PE",
  PGK: "PG",
  PHP: "PH",
  PKR: "PK",
  PLN: "PL",
  PYG: "PY",
  QAR: "QA",
  RON: "RO",
  RSD: "RS",
  RUB: "RU",
  RWF: "RW",
  SAR: "SA",
  SBD: "SB",
  SCR: "SC",
  SDG: "SD",
  SEK: "SE",
  SGD: "SG",
  SKK: "SK",
  SLL: "SL",
  SOS: "SO",
  SRD: "SR",
  STD: "ST",
  SVC: "SV",
  SYP: "SY",
  SZL: "SZ",
  THB: "TH",
  TJS: "TJ",
  TMT: "TM",
  TND: "TN",
  TOP: "TO",
  TRY: "TR",
  TTD: "TT",
  TWD: "TW",
  TZS: "TZ",
  UAH: "UA",
  UGX: "UG",
  USD: "US",
  UYU: "UY",
  UZS: "UZ",
  VEF: "VE",
  VND: "VN",
  VUV: "VU",
  YER: "YE",
  ZAR: "ZA",
  ZMK: "ZM",
  ZWD: "ZW",
};

// Top 20 Remittance Countries for Nepal Mode
const remittanceCountries = [
  { name: "Nepal", flag: "NP", code: "NPR" },
  { name: "Europe (Eurozone)", flag: "EU", code: "EUR" }, // Added Europe Euro
  { name: "India", flag: "IN", code: "INR" },
  { name: "Qatar", flag: "QA", code: "QAR" },
  { name: "Saudi Arabia", flag: "SA", code: "SAR" },
  { name: "United Arab Emirates", flag: "AE", code: "AED" },
  { name: "Kuwait", flag: "KW", code: "KWD" },
  { name: "Malaysia", flag: "MY", code: "MYR" },
  { name: "South Korea", flag: "KR", code: "KRW" },
  { name: "Japan", flag: "JP", code: "JPY" },
  { name: "United States", flag: "US", code: "USD" },
  { name: "United Kingdom", flag: "GB", code: "GBP" },
  { name: "Australia", flag: "AU", code: "AUD" },
  { name: "Canada", flag: "CA", code: "CAD" },
  { name: "Oman", flag: "OM", code: "OMR" },
  { name: "Bahrain", flag: "BH", code: "BHD" },
  { name: "Israel", flag: "IL", code: "ILS" },
  { name: "Germany", flag: "DE", code: "EUR" },
  { name: "Italy", flag: "IT", code: "EUR" },
  { name: "Spain", flag: "ES", code: "EUR" },
  { name: "Cyprus", flag: "CY", code: "EUR" },
  { name: "Portugal", flag: "PT", code: "EUR" },
  { name: "Maldives", flag: "MV", code: "MVR" },
  { name: "Singapore", flag: "SG", code: "SGD" },
  { name: "New Zealand", flag: "NZ", code: "NZD" },
  { name: "Poland", flag: "PL", code: "PLN" },
  { name: "Romania", flag: "RO", code: "RON" },
  { name: "France", flag: "FR", code: "EUR" },
  { name: "Netherlands", flag: "NL", code: "EUR" },
  { name: "Thailand", flag: "TH", code: "THB" },
  { name: "China", flag: "CN", code: "CNY" }
];

const BASE_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1";

const dropdown = document.querySelectorAll("select");   
const btn = document.querySelector("button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
const toggleSwitch = document.getElementById("toggle");

// Get country code for flag mapping
const getFlagCode = (selectElement) => {
  const isGlobal = toggleSwitch ? toggleSwitch.checked : false;
  const selectedCode = selectElement.value;

  if (isGlobal) {
    return countryList[selectedCode] || "US";
  } else {
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    if (selectedOption && selectedOption.dataset.flag) {
      return selectedOption.dataset.flag;
    }
    const found = remittanceCountries.find((item) => item.code === selectedCode);
    return found ? found.flag : "NP";
  }
};

// Populate dropdown list according to toggle mode
const populateDropdowns = () => {
  const isGlobal = toggleSwitch ? toggleSwitch.checked : false;

  for (let select of dropdown) {
    select.innerHTML = ""; // Clear existing static options from HTML

    if (isGlobal) {
      // Global Mode: All currencies from countryList
      for (let currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = `${currCode} (${countryList[currCode]})`;
        newOption.value = currCode;

        if (select.name === "from" && currCode === "USD") {
          newOption.selected = true;
        } else if (select.name === "to" && currCode === "NPR") {
          newOption.selected = true;
        }

        select.append(newOption);
      }
    } else {
      // Nepal Mode: Top Remittance Countries
      remittanceCountries.forEach((country) => {
        let newOption = document.createElement("option");
        newOption.innerText = `${country.code} - ${country.name}`;
        newOption.value = country.code;
        newOption.dataset.flag = country.flag;

        if (select.name === "from" && country.code === "QAR") {
          newOption.selected = true;
        } else if (select.name === "to" && country.code === "NPR") {
          newOption.selected = true;
        }

        select.append(newOption);
      });
    }

    updateFlag(select);
  }
};

// Event listener for dropdown changes
for (let select of dropdown) {
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  
  if (amtVal === "" || amtVal < 1 || isNaN(amount.value) || amount.value.trim() === "") {
    amtVal = 1;
    amount.value = "1";
  }

  const URL = `${BASE_URL}/currencies/${fromCurr.value.toLowerCase()}.json`;
  try {
    let response = await fetch(URL);
    let data = await response.json();

    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    let finalAmount = (amtVal * rate).toFixed(2);
    
    msg.innerText = `1 ${fromCurr.value} = ${rate} ${toCurr.value}`;
    
    // Show converted amount
    const convertedAmountInput = document.getElementById("convertedAmount");
    if (convertedAmountInput) {
      convertedAmountInput.value = `${finalAmount} ${toCurr.value}`;
    }
  } catch (error) {
    msg.innerText = "Error fetching exchange rate";
  }
};

const updateFlag = (element) => {
  let countryCode = getFlagCode(element);
  let newSrc = `https://flagcdn.com/48x36/${countryCode.toLowerCase()}.png`;

  let img = element.parentElement.querySelector("img");
  if (img) {
    img.src = newSrc;
  }
};

// Toggle switch listener ( Nepal Mode vs Global Mode )
if (toggleSwitch) {
  toggleSwitch.addEventListener("change", () => {
    populateDropdowns();
    updateExchangeRate();
  });
}

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

window.addEventListener("load", () => {
  populateDropdowns();
  updateExchangeRate();
});

// Date formatting logic
const dateDiv = document.getElementById("date");
function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

if (dateDiv) {
  dateDiv.innerText = formatDate(new Date());
}