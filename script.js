const logoImages = document.querySelectorAll("#logo-container > img");
const seeMoreBtn = document.getElementById("see-more-btn");
const seeLessBtn = document.getElementById("see-less-btn");
const navbarWrapper = document.getElementById("navbar-wrapper");
const navbar = document.getElementById("navbar");
const aboutMenuBtn = document.getElementById("about-menu-toggle");
const dropdownMenu = document.getElementById("drop-down-menu");
const mobileNavBtn = document.getElementById("mobile-nav-btn");
const mobileNavMenu = document.getElementById("mobile-nav-menu");
const mobileAbtBtn = document.getElementById("mobile-about-btn");
const mobileAbtDropdown = document.getElementById("mobile-about-dropdown-menu");

const additionalLogoImages = [
  "https://assets-global.website-files.com/5e596dafce8eb6216f68e410/616091839ed0e5299124e203_loblaws.png",
  "https://assets-global.website-files.com/5e596dafce8eb6216f68e410/636588f25303aab26dba6499_savealot%20(2).png",
  "https://assets-global.website-files.com/5e596dafce8eb6216f68e410/616091788c2abd72362736a9_superstore.png",
  "https://assets-global.website-files.com/5e596dafce8eb6216f68e410/6160915a6317724e22976a7b_hyvee.png",
  "https://assets-global.website-files.com/5e596dafce8eb6216f68e410/61609161bdb50d4592ae0143_provigo.png",
  "https://assets-global.website-files.com/5e596dafce8eb6216f68e410/6160916c42acebf7a2165b1a_dominion.png",
  "https://assets-global.website-files.com/5e596dafce8eb6216f68e410/61e8848d60775e0d6e9055bb_Mt.PlymouthIGA.png",
  "https://assets-global.website-files.com/5e596dafce8eb6216f68e410/6160916cdd14348403a7c591_zehrs.png",
  "https://assets-global.website-files.com/5e596dafce8eb6216f68e410/63bf4c4275cba538a4c79f46_RensPets.png",
  "https://assets-global.website-files.com/5e596dafce8eb6216f68e410/6160917733eb280455acb2cd_nofrills.png",
];

logoImages.forEach((logo) => {
  logo.classList.add("h-32");
});

function addLogos() {
  const logoContainer = document.querySelector("#logo-container");

  additionalLogoImages.forEach((logo) => {
    const imgElement = document.createElement("img");
    imgElement.src = logo;
    imgElement.alt = "";
    imgElement.classList.add("h-32");
    logoContainer.append(imgElement);
  });

  seeMoreBtn.classList.add("hidden");
  seeLessBtn.classList.remove("hidden");
}

function removeAdditionalLogoImages() {
  const logoContainer = document.querySelector("#logo-container");
  const logoElements = document.querySelectorAll("#logo-container > img");

  logoElements.forEach((logoEle) => {
    if (additionalLogoImages.includes(logoEle.getAttribute("src"))) {
      logoContainer.removeChild(logoEle);
    }
  });

  seeLessBtn.classList.add("hidden");
  seeMoreBtn.classList.remove("hidden");
}

seeMoreBtn.addEventListener("click", addLogos);
seeLessBtn.addEventListener("click", removeAdditionalLogoImages);

aboutMenuBtn.addEventListener("mouseenter", () => {
  dropdownMenu.classList.replace("hidden", "flex");
});

aboutMenuBtn.addEventListener("mouseleave", () => {
  dropdownMenu.classList.replace("flex", "hidden");
});

mobileNavBtn.addEventListener("click", () => {
  if (mobileNavMenu.classList.contains("flex")) {
    mobileNavMenu.classList.replace("flex", "hidden");
  } else {
    mobileNavMenu.classList.replace("hidden", "flex");
  }
});

mobileAbtBtn.addEventListener("click", () => {
  if (mobileAbtDropdown.classList.contains("flex")) {
    mobileAbtDropdown.classList.replace("flex", "hidden");
  } else {
    mobileAbtDropdown.classList.replace("hidden", "flex");
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbarWrapper.classList.replace("bg-[#4230DD]", "bg-[#4230ddcc]");
    navbar.classList.replace("bg-[#4230DD]", "bg-[#4230ddcc]");
  } else {
    navbarWrapper.classList.replace("bg-[#4230ddcc]", "bg-[#4230DD]");
    navbar.classList.replace("bg-[#4230ddcc]", "bg-[#4230DD]");
  }
});
