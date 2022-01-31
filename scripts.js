const toggleCartBox = () => {
  const cartBox = document.querySelector(".cart-box");
  const btnCart = document.querySelector(".btn--my-cart");
  cartBox.classList.toggle("hide");
  btnCart.classList.toggle("hide");
};

const toggleCartBoxMobile = () => {
  const cartBox = document.querySelector(".main-mobile .cart-box");
  // const btnCart = document.querySelector(".main-mobile .btn--my-cart");
  cartBox.classList.toggle("hide");
  // btnCart.classList.toggle("hide");
};

const allBtnAddCart = document.querySelectorAll(".btn-add-to-cart");
allBtnAddCart.forEach((button) => {
  button.addEventListener("click", (event) => {
    const thisButton = event.target;
    thisButton.innerText = thisButton.classList.contains("btn--added-cart")
      ? "add to cart"
      : "remove from cart";
    thisButton.classList.toggle("btn--added-cart");
  });
});

const openNav = () => {
  document.getElementById("menu-sidebar").style.transform = "translateX(0px)";
  document.getElementById("menu-sidebar-mobile").style.transform =
    "translateX(0px)";
};

const closeNav = () => {
  document.getElementById("menu-sidebar").style.transform =
    "translateX(-300px)";
  document.getElementById("menu-sidebar-mobile").style.transform =
    "translateX(-100%)";
};

const togglePropertieSidebar = () => {
  const propertieSidebar = document.querySelector(".mobile-propertie");
  const navigateIcon = document.querySelector(".nav-sidebar-arrow");
  propertieSidebar.classList.toggle("visible");
  navigateIcon.classList.toggle("visible");
};

// Trigger change style menu item
window.addEventListener("load", (event) => {
  const pathName = window.location.pathname;
  if (pathName.includes("index")) {
    document.getElementById("index").classList.add("active");
    document.getElementById("index-mobile").classList.add("active");
  }

  if (pathName.includes("dashboard")) {
    document.getElementById("dashboard").classList.add("active");
    document.getElementById("dashboard-mobile").classList.add("active");
  }
});

// Generate propertie items
// const properties = [
//   {
//     code: "#00001",
//     name: "Bitexco Tower 1",
//     address: "1 Hai Trieu, Ben Nghe, 1, HCMC",
//     price: "100,000",
//     image: "./images/propertie-thumnail.png",
//   },
//   {
//     code: "#00002",
//     name: "Bitexco Tower 2",
//     address: "2 Hai Trieu, Ben Nghe, 1, HCMC",
//     price: "200,000",
//     image: "./images/propertie-thumnail.png",
//   },
//   {
//     code: "#00003",
//     name: "Bitexco Tower 3",
//     address: "3 Hai Trieu, Ben Nghe, 1, HCMC",
//     price: "300,000",
//     image: "./images/propertie-thumnail.png",
//   },
// ];
const propertieWrapper = document.getElementById("properties-wrapper");

fetch("https://ngkuka001.github.io/metapolis-demo/propertiesData.json")
  .then((response) => response.json())
  .then((properties) =>
    properties.map((propertie) => {
      propertieWrapper.insertAdjacentHTML(
        "beforeend",
        `<div class="propertie ${propertie.type}">
      <div class="propertie__logo-right">
        <img src="images/${propertie.type}.png" />
      </div>
      <div>
        <p class="text-sm text-white">${propertie.code}</p>
        <div class="propertie__content">
          <div class="propertie__content--left">
            <img src=${propertie.image} />
          </div>
          <div class="propertie__content--right">
            <div class="propertie-header">
              <div class="propertie-header__name">
                <img src="images/propertie-icon.png" />
                <p>${propertie.name}</p>
              </div>
              <div class="propertie-header__address">
                ${propertie.address}
              </div>
            </div>
            <div>
              <div class="balance-box mb-sm">${propertie.price}</div>
              <button class="btn btn--full btn-add-to-cart text-sm">
                ADD TO CART
              </button>
            </div>
            <div class="text-white">
              <p class="text-sm">Owner</p>
              <p class="font-bold">Metapolis</p>
            </div>
          </div>
        </div>
      </div>
      </div>`
      );
    })
  );

// properties.map((propertie) => {
//   propertieWrapper.insertAdjacentHTML(
//     "beforeend",
//     `<div class="propertie">
//     <div class="propertie__logo-right">
//       <img src="images/corner-icon.png" />
//     </div>
//     <div>
//       <p class="text-sm text-white">${propertie.code}</p>
//       <div class="propertie__content">
//         <div class="propertie__content--left">
//           <img src=${propertie.image} />
//         </div>
//         <div class="propertie__content--right">
//           <div class="propertie-header">
//             <div class="propertie-header__name">
//               <img src="images/propertie-icon.png" />
//               <p>${propertie.name}</p>
//             </div>
//             <div class="propertie-header__address">
//               ${propertie.address}
//             </div>
//           </div>
//           <div>
//             <div class="balance-box mb-sm">$${propertie.price}</div>
//             <button class="btn btn--full btn-add-to-cart text-sm">
//               ADD TO CART
//             </button>
//           </div>
//           <div class="text-white">
//             <p class="text-sm">Owner</p>
//             <p class="font-bold">Metapolis</p>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>`
//   );
// });
