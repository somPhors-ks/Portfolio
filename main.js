// Show Dropdown
const dropdown1 = document.getElementById("dropdown1");
let show1 = false;
function onDropdown1() {
  if (!show1) {
    dropdown1.classList.remove("hide");
    show1 = true;
  } else {
    dropdown1.classList.add("hide");
    show1 = false;
  }
}

const dropdown2 = document.getElementById("dropdown2");
let show2 = false;
function onDropdown2() {
  if (!show2) {
    dropdown2.classList.remove("hide");
    show2 = true;
  } else {
    dropdown2.classList.add("hide");
    show2 = false;
  }
}

const dropdown3 = document.getElementById("dropdown3");
let show3 = false;
function onDropdown3() {
  if (!show3) {
    dropdown3.classList.remove("hide");
    show3 = true;
  } else {
    dropdown3.classList.add("hide");
    show3 = false;
  }
}

const dropdown4 = document.getElementById("dropdown4");
let show4 = false;
function onDropdown4() {
  if (!show4) {
    dropdown4.classList.remove("hide");
    show4 = true;
  } else {
    dropdown4.classList.add("hide");
    show4 = false;
  }
}

const dropdown5 = document.getElementById("dropdown5");
let show5 = false;
function onDropdown5() {
  if (!show5) {
    dropdown5.classList.remove("hide");
    show5 = true;
  } else {
    dropdown5.classList.add("hide");
    show5 = false;
  }
}

// Show Recent Project
let projectShow1 = document.getElementById("projectShow1");
let projectShow2 = document.getElementById("projectShow2");
let projectShow3 = document.getElementById("projectShow3");
let inDevelopment = document.getElementById("inDevelopment");

projectShow1.addEventListener("click", () => {
  inDevelopment.classList.remove("hide");
});
projectShow2.addEventListener("click", () => {
  inDevelopment.classList.remove("hide");
});
projectShow3.addEventListener("click", () => {
  inDevelopment.classList.remove("hide");
});
function myCV() {
  inDevelopment.classList.remove("hide");
}
function closeDailog() {
  inDevelopment.classList.add("hide");
}

// Show Certificate
let certificate = document.getElementById("certificate");
let CertiCard = document.getElementById("CertiCard");
let Certi_1 = document.getElementById("Certi_1");
let Certi_2 = document.getElementById("Certi_2");
let Certi_3 = document.getElementById("Certi_3");

Certi_1.addEventListener("click", () => {
  certificate.classList.remove("hide");
  const img = document.createElement("img");
  img.src = "image/AWS.jpg";
  img.alt = "AWS Certificate";
  CertiCard.appendChild(img);
});

Certi_2.addEventListener("click", () => {
  certificate.classList.remove("hide");
  const img = document.createElement("img");
  img.src = "image/Setect_first_year_back.jpg";
  img.alt = "Setect Certificate";
  CertiCard.appendChild(img);
});

Certi_3.addEventListener("click", () => {
  certificate.classList.remove("hide");
  const img = document.createElement("img");
  img.src = "image/Ratory.jpg";
  img.alt = "Ratory Certificate";
  CertiCard.appendChild(img);
});

function closeCerti() {
  certificate.classList.add("hide");
  const img = CertiCard.querySelector("img");
  if (img) {
    img.remove();
  }
}

// Create the observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.1 },
);

document
  .querySelectorAll(".reveal-up, .reveal-left, .reveal-right")
  .forEach((el) => {
    observer.observe(el);
  });
