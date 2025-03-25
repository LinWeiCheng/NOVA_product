let left = document.querySelector(".leftcontent");
/*-----  1.車體顏色點擊列  -----*/

/*--- 車體顏色點擊列-圖片箭頭部分   ---*/
let targetimg_1 = document.querySelector(".target_img");
targetimg_1.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let tgimg_1 = event.target;
  let carOrder = tgimg_1.closest(".car-order"); // 找到最近的 .car-order
  //確認我點擊到的位置是否是car-order的箭頭
  if (carOrder.className.trim() === "car-order") {
    let introdutionid = carOrder.querySelector(".car_color"); // 在 car-order 內部找 car_color
    let introdution = carOrder.querySelector(".subtitle"); // 在 car-order 內部找 subtitle

    if (introdutionid) {
      // 取得 `visibility` 的計算後樣式
      let visibilityValue = window.getComputedStyle(introdutionid).visibility;

      if (visibilityValue === "hidden") {
        let Price_carcolor = document.querySelectorAll(".pricing");
        Price_carcolor.forEach(function (openIntro) {
          let nowprice_color = Price_carcolor[0].nextElementSibling;
          if (
            openIntro.getAttribute("data-price-carcolor") === "carcolor" &&
            nowprice_color.getAttribute("data-nowprice-carcolor") ===
              "nowcarcolor"
          ) {
            if (introdution.getAttribute("data-collapse-status") === "0") {
              //把data-collapse-status改成1
              introdution.setAttribute("data-collapse-status", "1");

              //carcolor勾選位置大小設置
              introdutionid.style.visibility = "visible";
              introdutionid.style.padding = "1px 1px 1px 6px";
              introdutionid.style.width = "calc(100% - 10px)";
              introdutionid.style.flexWrap = "wrap";
              introdutionid.style.border = "3px dashed black";
              introdutionid.style.borderTop = "none";
              introdutionid.style.display = "flex";
              introdutionid.style.margin = "3px 0px 5px 8px";
              introdutionid.style.height = "auto";
            } else {
              //把data-collapse-status改成0
              introdution.setAttribute("data-collapse-status", "0");

              // //建議售價標題隱藏
              introdutionid.style.visibility = "hidden";
              introdutionid.style.height = "0";
              introdutionid.style.padding = "0";
              introdutionid.style.margin = "0";
              introdutionid.style.border = "0px dashed black";
            }
          }
        });
      } else {
        //把data-collapse-status改成0
        introdution.setAttribute("data-collapse-status", "0");

        // //建議售價標題隱藏
        introdutionid.style.visibility = "hidden";
        introdutionid.style.height = "0";
        introdutionid.style.padding = "0";
        introdutionid.style.margin = "0";
        introdutionid.style.border = "0px dashed black";
      }
    }
  }
});

/*---  車體顏色點擊列-subtitle部分  ---*/
let carorder = document.querySelector(".car-order");
carorder.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let showinfo = event.target.dataset.showinfo;
  let introdution = event.target;
  let introdutionid = event.target.nextElementSibling;
  let Price_carcolor = document.querySelectorAll(".pricing");
  let targetimg = document.querySelector(".target_img");
  let img = targetimg.querySelector("img");

  if (introdutionid) {
    let visibilityValue = window.getComputedStyle(introdutionid).visibility;
    if (visibilityValue === "hidden") {
      Price_carcolor.forEach(function (openIntro) {
        let nowprice_color = Price_carcolor[0].nextElementSibling;
        if (
          openIntro.getAttribute("data-price-carcolor") === "carcolor" &&
          nowprice_color.getAttribute("data-nowprice-carcolor") ===
            "nowcarcolor"
        ) {
          if (introdution.getAttribute("data-collapse-status") === "0") {
            //把data-collapse-status改成1
            introdution.setAttribute("data-collapse-status", "1");

            //carcolor勾選位置大小設置
            introdutionid.style.visibility = "visible";
            introdutionid.style.padding = "1px 1px 1px 6px";
            introdutionid.style.width = "calc(100% - 10px)";
            introdutionid.style.flexWrap = "wrap";
            introdutionid.style.border = "3px dashed black";
            introdutionid.style.borderTop = "none";
            introdutionid.style.display = "flex";
            introdutionid.style.margin = "3px 0px 5px 8px";
            introdutionid.style.height = "auto";
            if (img) {
              img.setAttribute("src", "./img/black triangle after.png");
            }
          }
        }
      });
    }
    //確認我點擊到的位置是否是carcolor
    else if (showinfo === "carcolor") {
      Price_carcolor.forEach(function () {
        //把data-collapse-status改成0
        introdution.setAttribute("data-collapse-status", "0");

        // //建議售價標題隱藏
        introdutionid.style.visibility = "hidden";
        introdutionid.style.height = "0";
        introdutionid.style.padding = "0";
        introdutionid.style.margin = "0";
        introdutionid.style.border = "0px dashed black";
        if (img) {
          img.setAttribute("src", "./img/black triangle.png");
        }
      });
    }
  }
});

/*-----  2.座板尺寸點擊列  -----*/

//座寬尺寸黑格子
let SW_container = document.querySelector(".width_number");
let SWCount = 30;

// 生成 6 個新的 div，每個都有唯一的 class 名稱
for (let i = 0; i < 7; i++) {
  let divSW_Size = document.createElement("div");

  divSW_Size.textContent = `${SWCount} `;
  divSW_Size.classList.add(`generated_SWdiv`);
  // 設置 data-size 屬性，根據需要修改屬性值
  SWCount += 2;
  SW_container.appendChild(divSW_Size);
}

//座寬的勾選格
let SWC_container = document.querySelector(".width_chkblock");
let SWCCount = 30;

// 生成 6 個新的 checkbox，每個都有唯一的 class 名稱
for (let i = 0; i < 7; i++) {
  let divSW_Check = document.createElement("input");

  divSW_Check.type = "checkbox";
  divSW_Check.classList.add(`content-checkbox`);
  divSW_Check.id = `SWC_checkbox`;
  divSW_Check.name = `car_basewidth`;
  // 設置 data-size 屬性，根據需要修改屬性值
  let formattedItem = ` - ${SWCCount} cm`;
  divSW_Check.setAttribute("data-item", formattedItem);
  divSW_Check.setAttribute("data-group", `Sbsize`);

  SWCCount += 2;

  SWC_container.appendChild(divSW_Check);
}

//座深尺寸黑格子
let Sd_container = document.querySelector(".deep_number");
let SdCount = 30;

// 生成 8 個新的 div，每個都有唯一的 class 名稱
for (let i = 0; i < 9; i++) {
  let divSd_Size = document.createElement("div");

  divSd_Size.textContent = `${SdCount} `;
  divSd_Size.classList.add(`generated_Sddiv`);
  SdCount += 2;
  Sd_container.appendChild(divSd_Size);
}

//座深的勾選格
let SdC_container = document.querySelector(".deep_chkblock");
let SdCCount = 30;
// 生成 8 個新的 checkbox，每個都有唯一的 class 名稱
for (let i = 0; i < 9; i++) {
  let divSd_Check = document.createElement("input");

  divSd_Check.type = "checkbox";
  divSd_Check.classList.add(`content-checkbox`);
  divSd_Check.id = `SdC_checkbox`;
  divSd_Check.name = `car_basedeep`;
  // 設置 data-size 屬性，根據需要修改屬性值
  let formattedItem = ` * ${SdCCount} cm`;
  divSd_Check.setAttribute("data-item", formattedItem);
  divSd_Check.setAttribute("data-group", `Sbsize`);
  SdCCount += 2;

  SdC_container.appendChild(divSd_Check);
}

/*--- 車體座板點擊列-圖片箭頭部分   ---*/
document.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let tgimg_2 = event.target;
  let carseat2 = tgimg_2.closest(".car-seat"); // 找到最近的 .car-seat
  let imgCarseat = event.target.dataset.imgCarseat;

  //確認我點擊到的位置是否是car-seat的箭頭
  if (carseat2 && carseat2.className.trim() === "car-seat") {
    let introdutionid = carseat2.querySelector(".basesize"); // 在 car-seat 內部找 basesize
    let introdution = carseat2.querySelector(".subtitle"); // 在 car-seat 內部找 subtitle

    if (introdutionid) {
      // 取得 `visibility` 的計算後樣式
      let visibilityValue = window.getComputedStyle(introdutionid).visibility;

      if (imgCarseat === "carseatImg") {
        if (visibilityValue === "hidden") {
          let Price_carbasesize = document.querySelectorAll(".pricing");

          Price_carbasesize.forEach(function (openIntro) {
            //直接判斷是第幾個.Price
            let nowprice_basesize = Price_carbasesize[1].nextElementSibling;

            if (
              openIntro.getAttribute("data-price-carbasesize") ===
                "carbasesize" &&
              nowprice_basesize.getAttribute("data-nowprice-carbasesize") ===
                "nowcarbasesize"
            ) {
              if (introdution.getAttribute("data-collapse-status") === "0") {
                //把data-collapse-status改成1
                introdution.setAttribute("data-collapse-status", "1");
                //carbasesize勾選位置大小設置
                introdutionid.style.visibility = "visible";
                introdutionid.style.padding = "7px 1px 0px 3px";
                introdutionid.style.width = "calc(100% - 8px)";
                introdutionid.style.flexWrap = "wrap";
                introdutionid.style.border = "3px dashed black";
                introdutionid.style.borderTop = "none";
                introdutionid.style.display = "flex";
                introdutionid.style.margin = "0px 5px 5px 7px";
                introdutionid.style.height = "auto";

                //建議售價標題顯示
                openIntro.style.display = "block";

                //建議售價金額顯示
                nowprice_basesize.style.display = "block";
                nowprice_basesize.style.display = "flex";
                nowprice_basesize.style.width = "100%";
                nowprice_basesize.style.height = "90%";
                nowprice_basesize.style.color = "#000000";
                nowprice_basesize.style.borderRadius = "8px";
                nowprice_basesize.style.padding = "1px";
                nowprice_basesize.style.margin = "3px 0px 3px 0px";
                nowprice_basesize.style.textAlign = "center";
                nowprice_basesize.style.fontSize = "20px";
                nowprice_basesize.style.fontWeight = "600";
                nowprice_basesize.style.alignItems = "center";
                nowprice_basesize.style.justifyContent = "center";

                if (window.matchMedia("(max-width: 650px)").matches) {
                  nowprice_basesize.style.fontSize = "13px";
                }
              }
            }
          });
        } else {
          let Price_carbasesize = document.querySelectorAll(".pricing");

          Price_carbasesize.forEach(function (openIntro) {
            let nowprice_basesize = Price_carbasesize[1].nextElementSibling;
            //把data-collapse-status改成0
            introdution.setAttribute("data-collapse-status", "0");

            //建議售價標題隱藏
            introdutionid.style.visibility = "hidden";
            introdutionid.style.height = "0";
            introdutionid.style.padding = "0";
            introdutionid.style.border = "0px dashed black";
            introdutionid.style.margin = "0";

            //建議售價金額隱藏
            openIntro.style.display = "none";
            nowprice_basesize.style.display = "none";
          });
        }
      }
    }
  }
});

/*---  車體座板點擊列-subtitle部分  ---*/
let carseat = document.querySelector(".car-seat");
carseat.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let showinfo = event.target.dataset.showinfo;
  let introdution = event.target;
  //確認我點擊到的位置是否是carbasesize
  if (showinfo === "carbasesize" || showinfo === "carbasesize2") {
    let introdutionid = event.target.nextElementSibling;
    let introdutionid1 = event.target.parentNode.nextElementSibling;

    let Price_carbasesize = document.querySelectorAll(".pricing");
    let carSeat = carseat.querySelector(".target_img"); // 找到最近的 .target_img
    let img = carSeat.querySelector("img");

    Price_carbasesize.forEach(function (openIntro) {
      //直接判斷是第幾個.Price
      let nowprice_basesize = Price_carbasesize[1].nextElementSibling;

      if (
        openIntro.getAttribute("data-price-carbasesize") === "carbasesize" &&
        nowprice_basesize.getAttribute("data-nowprice-carbasesize") ===
          "nowcarbasesize"
      ) {
        if (introdution.getAttribute("data-collapse-status") === "0") {
          //把data-collapse-status改成1
          introdution.setAttribute("data-collapse-status", "1");

          if (showinfo === "carbasesize") {
            //carbasesize勾選位置大小設置
            introdutionid.style.visibility = "visible";
            introdutionid.style.padding = "7px 1px 0px 3px";
            introdutionid.style.width = "calc(100% - 8px)";
            introdutionid.style.flexWrap = "wrap";
            introdutionid.style.border = "3px dashed black";
            introdutionid.style.borderTop = "none";
            introdutionid.style.display = "flex";
            introdutionid.style.margin = "0px 5px 5px 7px";
            introdutionid.style.height = "auto";
          } else if (showinfo === "carbasesize2") {
            introdutionid1.style.visibility = "visible";
            introdutionid1.style.padding = "7px 1px 0px 3px";
            introdutionid1.style.width = "calc(100% - 8px)";
            introdutionid1.style.flexWrap = "wrap";
            introdutionid1.style.border = "3px dashed black";
            introdutionid1.style.borderTop = "none";
            introdutionid1.style.display = "flex";
            introdutionid1.style.margin = "0px 5px 5px 7px";
            introdutionid1.style.height = "auto";
          }
          //建議售價標題顯示
          openIntro.style.display = "block";

          //建議售價金額顯示
          nowprice_basesize.style.display = "block";
          nowprice_basesize.style.display = "flex";
          nowprice_basesize.style.width = "100%";
          nowprice_basesize.style.height = "90%";
          nowprice_basesize.style.color = "#000000";
          nowprice_basesize.style.borderRadius = "8px";
          nowprice_basesize.style.padding = "1px";
          nowprice_basesize.style.margin = "3px 3px 3px 2px";
          nowprice_basesize.style.textAlign = "center";
          nowprice_basesize.style.fontSize = "20px";
          nowprice_basesize.style.fontWeight = "600";
          nowprice_basesize.style.alignItems = "center";
          nowprice_basesize.style.justifyContent = "center";

          if (img) {
            img.setAttribute("src", "./img/black triangle after.png");
          }

          if (window.matchMedia("(max-width: 650px)").matches) {
            nowprice_basesize.style.fontSize = "13px";
          }
        } else {
          //把data-collapse-status改成0
          introdution.setAttribute("data-collapse-status", "0");

          //建議售價標題隱藏
          if (showinfo === "carbasesize") {
            introdutionid.style.visibility = "hidden";
            introdutionid.style.height = "0";
            introdutionid.style.padding = "0";
            introdutionid.style.border = "0px dashed black";
            introdutionid.style.margin = "0";
          } else if (showinfo === "carbasesize2") {
            introdutionid1.style.visibility = "hidden";
            introdutionid1.style.height = "0";
            introdutionid1.style.padding = "0";
            introdutionid1.style.border = "0px dashed black";
            introdutionid1.style.margin = "0";
          }
          //建議售價金額隱藏
          openIntro.style.display = "none";
          nowprice_basesize.style.display = "none";

          if (img) {
            img.setAttribute("src", "./img/black triangle.png");
          }
        }
      }
    });
  }
});

/*-----  3.腳架點擊列  -----*/

/*--- 腳架點擊列-圖片箭頭部分   ---*/
document.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let tgimg_3 = event.target;
  let carseat3 = tgimg_3.closest(".car-tripod"); // 找到最近的 .car-tripod
  let imgCartripod = event.target.dataset.imgCartripod;

  //確認我點擊到的位置是否是car-tripod的箭頭
  if (carseat3 && carseat3.className.trim() === "car-tripod") {
    let introdutionid = carseat3.querySelector(".tripodgroup"); // 在 car-tripod 內部找 tripodgroup
    let introdution = carseat3.querySelector(".subtitle"); // 在 car-tripod 內部找 subtitle

    if (introdutionid) {
      // 取得 `visibility` 的計算後樣式
      let visibilityValue = window.getComputedStyle(introdutionid).visibility;

      if (imgCartripod === "cartripodImg") {
        if (visibilityValue === "hidden") {
          let Price_cartripod = document.querySelectorAll(".pricing");

          Price_cartripod.forEach(function (openIntro) {
            //直接判斷是第幾個.Price
            let nowprice_tripod = Price_cartripod[2].nextElementSibling;

            if (
              openIntro.getAttribute("data-price-cartripod") === "cartripod" &&
              nowprice_tripod.getAttribute("data-nowprice-cartripod") ===
                "nowcartripod"
            ) {
              if (introdution.getAttribute("data-collapse-status") === "0") {
                //把data-collapse-status改成1
                introdution.setAttribute("data-collapse-status", "1");

                //cartripod勾選位置大小設置
                introdutionid.style.visibility = "visible";
                introdutionid.style.padding = "0px 1px 1px 3px";
                introdutionid.style.width = "calc(100% - 6px)";
                introdutionid.style.flexWrap = "wrap";
                introdutionid.style.border = "3px dashed black";
                introdutionid.style.borderTop = "none";
                introdutionid.style.display = "flex";
                introdutionid.style.margin = "0px 5px 5px 7px";
                introdutionid.style.height = "auto";
                introdutionid.style.justifyContent = "space-between";

                //建議售價標題顯示
                openIntro.style.display = "block";

                //建議售價金額顯示
                nowprice_tripod.style.display = "block";
                nowprice_tripod.style.display = "flex";
                nowprice_tripod.style.width = "95%";
                nowprice_tripod.style.height = "90%";
                nowprice_tripod.style.color = "#000000";
                nowprice_tripod.style.borderRadius = "8px";
                nowprice_tripod.style.padding = "1px";
                nowprice_tripod.style.margin = "3px 3px 3px 2px";
                nowprice_tripod.style.textAlign = "center";
                nowprice_tripod.style.fontSize = "21px";
                nowprice_tripod.style.fontWeight = "600";
                nowprice_tripod.style.alignItems = "center";
                nowprice_tripod.style.justifyContent = "center";
                if (window.matchMedia("(max-width: 650px)").matches) {
                  nowprice_tripod.style.fontSize = "15px";
                }
              }
            }
          });
        } else {
          let Price_cartripod = document.querySelectorAll(".pricing");

          Price_cartripod.forEach(function (openIntro) {
            let nowprice_tripod = Price_cartripod[2].nextElementSibling;
            //把data-collapse-status改成0
            //把data-collapse-status改成0
            introdution.setAttribute("data-collapse-status", "0");

            //建議售價標題隱藏
            introdutionid.style.visibility = "hidden";
            introdutionid.style.height = "0";
            introdutionid.style.padding = "0";
            introdutionid.style.border = "0px dashed black";
            introdutionid.style.margin = "0";

            //建議售價金額隱藏
            openIntro.style.display = "none";
            nowprice_tripod.style.display = "none";
          });
        }
      }
    }
  }
});

/*---  腳架點擊列-subtitle部分  ---*/
let cartripod = document.querySelector(".car-tripod");
cartripod.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let showinfo = event.target.dataset.showinfo;
  let introdution = event.target;
  //確認我點擊到的位置是否是carbasetripod
  if (showinfo === "cartripod") {
    let introdutionid = event.target.nextElementSibling;
    let Price_cartripod = document.querySelectorAll(".pricing");
    let carTripod = cartripod.querySelector(".target_img"); // 找到最近的 .target_img
    let img = carTripod.querySelector("img");

    Price_cartripod.forEach(function (openIntro) {
      //直接判斷是第幾個.Price
      let nowprice_tripod = Price_cartripod[2].nextElementSibling;

      if (
        openIntro.getAttribute("data-price-cartripod") === "cartripod" &&
        nowprice_tripod.getAttribute("data-nowprice-cartripod") ===
          "nowcartripod"
      ) {
        if (introdution.getAttribute("data-collapse-status") === "0") {
          //把data-collapse-status改成1
          introdution.setAttribute("data-collapse-status", "1");

          //cartripod勾選位置大小設置
          introdutionid.style.visibility = "visible";
          introdutionid.style.padding = "0px 1px 1px 3px";
          introdutionid.style.width = "calc(100% - 6px)";
          introdutionid.style.flexWrap = "wrap";
          introdutionid.style.border = "3px dashed black";
          introdutionid.style.borderTop = "none";
          introdutionid.style.display = "flex";
          introdutionid.style.margin = "0px 5px 5px 7px";
          introdutionid.style.height = "auto";
          introdutionid.style.justifyContent = "space-between";

          //建議售價標題顯示
          openIntro.style.display = "block";

          //建議售價金額顯示
          nowprice_tripod.style.display = "block";
          nowprice_tripod.style.display = "flex";
          nowprice_tripod.style.width = "95%";
          nowprice_tripod.style.height = "90%";
          nowprice_tripod.style.color = "#000000";
          nowprice_tripod.style.borderRadius = "8px";
          nowprice_tripod.style.padding = "1px";
          nowprice_tripod.style.margin = "3px 3px 3px 2px";
          nowprice_tripod.style.textAlign = "center";
          nowprice_tripod.style.fontSize = "21px";
          nowprice_tripod.style.fontWeight = "600";
          nowprice_tripod.style.alignItems = "center";
          nowprice_tripod.style.justifyContent = "center";

          if (img) {
            img.setAttribute("src", "./img/black triangle after.png");
          }

          if (window.matchMedia("(max-width: 650px)").matches) {
            nowprice_tripod.style.fontSize = "15px";
          }
        } else {
          //把data-collapse-status改成0
          introdution.setAttribute("data-collapse-status", "0");

          //建議售價標題隱藏
          introdutionid.style.visibility = "hidden";
          introdutionid.style.height = "0";
          introdutionid.style.padding = "0";
          introdutionid.style.border = "0px dashed black";
          introdutionid.style.margin = "0";

          //建議售價金額隱藏
          openIntro.style.display = "none";
          nowprice_tripod.style.display = "none";

          if (img) {
            img.setAttribute("src", "./img/black triangle.png");
          }
        }
      }
    });
  }
});

/*-----  4.踏板樣式點擊列  -----*/

/*--- 踏板樣式點擊列-圖片箭頭部分   ---*/
document.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let tgimg_4 = event.target;
  let carseat4 = tgimg_4.closest(".car-footpedal"); // 找到最近的 car-footpedal
  let imgCarfootpedal = event.target.dataset.imgCarfootpedal;

  //確認我點擊到的位置是否是car-footpedal的箭頭
  if (carseat4 && carseat4.className.trim() === "car-footpedal") {
    let introdutionid = carseat4.querySelector(".footpedalgroup"); // 在 car-footpedal 內部找 footpedalgroup
    let introdution = carseat4.querySelector(".subtitle"); // 在 car-footpedal 內部找 subtitle

    if (introdutionid) {
      // 取得 `visibility` 的計算後樣式
      let visibilityValue = window.getComputedStyle(introdutionid).visibility;

      if (imgCarfootpedal === "carfootpedalImg") {
        if (visibilityValue === "hidden") {
          let Price_carfootpedal = document.querySelectorAll(".pricing");

          Price_carfootpedal.forEach(function (openIntro) {
            //直接判斷是第幾個.Price
            let nowprice_carfootpedal =
              Price_carfootpedal[3].nextElementSibling;

            if (
              openIntro.getAttribute("data-price-carfootpedal") ===
                "carfootpedal" &&
              nowprice_carfootpedal.getAttribute(
                "data-nowprice-carfootpedal"
              ) === "nowcarfootpedal"
            ) {
              if (introdution.getAttribute("data-collapse-status") === "0") {
                //把data-collapse-status改成1
                introdution.setAttribute("data-collapse-status", "1");

                //carfootpedal勾選位置大小設置
                introdutionid.style.visibility = "visible";
                introdutionid.style.padding = "0px 1px 1px 3px";
                introdutionid.style.width = "calc(100% - 6px)";
                introdutionid.style.flexWrap = "wrap";
                introdutionid.style.border = "3px dashed black";
                introdutionid.style.borderTop = "none";
                introdutionid.style.display = "flex";
                introdutionid.style.margin = "0px 0px 5px 6px";
                introdutionid.style.height = "auto";
                introdutionid.style.justifyContent = "space-between";
                introdutionid.style.flexDirection = "column";

                //建議售價標題顯示
                openIntro.style.display = "block";

                //建議售價金額顯示
                nowprice_carfootpedal.style.display = "block";
                nowprice_carfootpedal.style.display = "flex";
                nowprice_carfootpedal.style.width = "95%";
                nowprice_carfootpedal.style.height = "30%";
                nowprice_carfootpedal.style.color = "#000000";
                nowprice_carfootpedal.style.borderRadius = "8px";
                nowprice_carfootpedal.style.padding = "1px";
                nowprice_carfootpedal.style.margin = "3px 3px 3px 2px";
                nowprice_carfootpedal.style.textAlign = "center";
                nowprice_carfootpedal.style.fontSize = "21px";
                nowprice_carfootpedal.style.fontWeight = "600";
                nowprice_carfootpedal.style.alignItems = "center";
                nowprice_carfootpedal.style.justifyContent = "center";

                if (window.matchMedia("(max-width: 650px)").matches) {
                  nowprice_carfootpedal.style.fontSize = "15px";
                }
              }
            }
          });
        } else {
          let Price_carfootpedal = document.querySelectorAll(".pricing");

          Price_carfootpedal.forEach(function (openIntro) {
            let nowprice_carfootpedal =
              Price_carfootpedal[3].nextElementSibling;
            //把data-collapse-status改成0
            //把data-collapse-status改成0
            introdution.setAttribute("data-collapse-status", "0");

            //建議售價標題隱藏
            introdutionid.style.visibility = "hidden";
            introdutionid.style.height = "0";
            introdutionid.style.padding = "0";
            introdutionid.style.border = "0px dashed black";
            introdutionid.style.margin = "0";

            //建議售價金額隱藏
            openIntro.style.display = "none";
            nowprice_carfootpedal.style.display = "none";
          });
        }
      }
    }
  }
});

/*---  踏板樣式點擊列 -subtitle部分  ---*/
let carfootpedal = document.querySelector(".car-footpedal");
carfootpedal.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let showinfo = event.target.dataset.showinfo;
  let introdution = event.target;
  //確認我點擊到的位置是否是carfootpedal
  if (showinfo === "carfootpedal") {
    let introdutionid = event.target.nextElementSibling;
    let Price_carfootpedal = document.querySelectorAll(".pricing");
    let carFootpedal = carfootpedal.querySelector(".target_img"); // 找到最近的 .target_img
    let img = carFootpedal.querySelector("img");

    Price_carfootpedal.forEach(function (openIntro) {
      //直接判斷是第幾個.Price
      let nowprice_carfootpedal = Price_carfootpedal[3].nextElementSibling;

      if (
        openIntro.getAttribute("data-price-carfootpedal") === "carfootpedal" &&
        nowprice_carfootpedal.getAttribute("data-nowprice-carfootpedal") ===
          "nowcarfootpedal"
      ) {
        if (introdution.getAttribute("data-collapse-status") === "0") {
          //把data-collapse-status改成1
          introdution.setAttribute("data-collapse-status", "1");

          //carfootpedal勾選位置大小設置
          introdutionid.style.visibility = "visible";
          introdutionid.style.padding = "0px 1px 1px 3px";
          introdutionid.style.width = "calc(100% - 6px)";
          introdutionid.style.flexWrap = "wrap";
          introdutionid.style.border = "3px dashed black";
          introdutionid.style.borderTop = "none";
          introdutionid.style.display = "flex";
          introdutionid.style.margin = "0px 0px 5px 6px";
          introdutionid.style.height = "auto";
          introdutionid.style.justifyContent = "space-between";
          introdutionid.style.flexDirection = "column";

          //建議售價標題顯示
          openIntro.style.display = "block";

          //建議售價金額顯示
          nowprice_carfootpedal.style.display = "block";
          nowprice_carfootpedal.style.display = "flex";
          nowprice_carfootpedal.style.width = "95%";
          nowprice_carfootpedal.style.height = "30%";
          nowprice_carfootpedal.style.color = "#000000";
          nowprice_carfootpedal.style.borderRadius = "8px";
          nowprice_carfootpedal.style.padding = "1px";
          nowprice_carfootpedal.style.margin = "3px 3px 3px 2px";
          nowprice_carfootpedal.style.textAlign = "center";
          nowprice_carfootpedal.style.fontSize = "21px";
          nowprice_carfootpedal.style.fontWeight = "600";
          nowprice_carfootpedal.style.alignItems = "center";
          nowprice_carfootpedal.style.justifyContent = "center";

          if (img) {
            img.setAttribute("src", "./img/black triangle after.png");
          }

          if (window.matchMedia("(max-width: 650px)").matches) {
            nowprice_carfootpedal.style.fontSize = "15px";
          }
        } else {
          //把data-collapse-status改成0
          introdution.setAttribute("data-collapse-status", "0");

          //建議售價標題隱藏
          introdutionid.style.visibility = "hidden";
          introdutionid.style.height = "0";
          introdutionid.style.padding = "0";
          introdutionid.style.border = "0px dashed black";
          introdutionid.style.margin = "0";

          //建議售價金額隱藏
          openIntro.style.display = "none";
          nowprice_carfootpedal.style.display = "none";

          if (img) {
            img.setAttribute("src", "./img/black triangle.png");
          }
        }
      }
    });
  }
});

/*-----  5.頭靠子系統點擊列  -----*/

/*--- 頭靠子系統點擊列-圖片箭頭部分   ---*/
document.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let tgimg_5 = event.target;
  let carseat5 = tgimg_5.closest(".car-head_supports"); // 找到最近的 car-head_supports
  let imgCarheadsupports = event.target.dataset.imgCarheadsupports;

  //確認我點擊到的位置是否是car-head_supports的箭頭
  if (carseat5 && carseat5.className.trim() === "car-head_supports") {
    let introdutionid = carseat5.querySelector(".head_supportsgroup"); // 在 car-head_supports 內部找 head_supportsgroup
    let introdution = carseat5.querySelector(".subtitle"); // 在 car-head_supports 內部找 subtitle

    if (introdutionid) {
      // 取得 `visibility` 的計算後樣式
      let visibilityValue = window.getComputedStyle(introdutionid).visibility;

      if (imgCarheadsupports === "carheadsupportsImg") {
        if (visibilityValue === "hidden") {
          let Price_headsupports = document.querySelectorAll(".pricing");

          Price_headsupports.forEach(function (openIntro) {
            //直接判斷是第幾個.Price
            let nowprice_carheadsupports =
              Price_headsupports[4].nextElementSibling;

            if (
              openIntro.getAttribute("data-price-carheadsupports") ===
                "carheadsupports" &&
              nowprice_carheadsupports.getAttribute(
                "data-nowprice-carheadsupports"
              ) === "nowcarheadsupports"
            ) {
              if (introdution.getAttribute("data-collapse-status") === "0") {
                //把data-collapse-status改成1
                introdution.setAttribute("data-collapse-status", "1");

                //carheadsupports勾選位置大小設置
                introdutionid.style.visibility = "visible";
                introdutionid.style.padding = "0px 1px 1px 3px";
                introdutionid.style.width = "calc(100% - 8px)";
                introdutionid.style.display = "flex";
                introdutionid.style.flexDirection = "row";
                introdutionid.style.border = "3px dashed black";
                introdutionid.style.borderTop = "none";
                introdutionid.style.margin = "0px 5px 5px 7px";
                introdutionid.style.height = "auto";
                introdutionid.style.justifyContent = "space-between";

                //建議售價標題顯示
                openIntro.style.display = "block";

                //建議售價金額顯示
                nowprice_carheadsupports.style.display = "block";
                nowprice_carheadsupports.style.display = "flex";
                nowprice_carheadsupports.style.width = "95%";
                nowprice_carheadsupports.style.height = "90%";
                nowprice_carheadsupports.style.color = "#000000";
                nowprice_carheadsupports.style.borderRadius = "8px";
                nowprice_carheadsupports.style.padding = "1px";
                nowprice_carheadsupports.style.margin = "3px 3px 3px 2px";
                nowprice_carheadsupports.style.textAlign = "center";
                nowprice_carheadsupports.style.fontSize = "21px";
                nowprice_carheadsupports.style.fontWeight = "600";
                nowprice_carheadsupports.style.alignItems = "center";
                nowprice_carheadsupports.style.justifyContent = "center";

                if (window.matchMedia("(max-width: 650px)").matches) {
                  nowprice_carheadsupports.style.fontSize = "15px";
                }
              }
            }
          });
        } else {
          let Price_headsupports = document.querySelectorAll(".pricing");

          Price_headsupports.forEach(function (openIntro) {
            let nowprice_carheadsupports =
              Price_headsupports[4].nextElementSibling;

            //把data-collapse-status改成0
            introdution.setAttribute("data-collapse-status", "0");

            //建議售價標題隱藏
            introdutionid.style.visibility = "hidden";
            introdutionid.style.height = "0";
            introdutionid.style.padding = "0";
            introdutionid.style.border = "0px dashed black";
            introdutionid.style.margin = "0";

            //建議售價金額隱藏
            openIntro.style.display = "none";
            nowprice_carheadsupports.style.display = "none";
          });
        }
      }
    }
  }
});

/*---  頭靠子系統點擊列 -subtitle部分  ---*/
let carheadsupports = document.querySelector(".car-head_supports");
carheadsupports.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let showinfo = event.target.dataset.showinfo;
  let introdution = event.target;
  //確認我點擊到的位置是否是carbasetripod
  if (showinfo === "carheadsupports") {
    let introdutionid = event.target.nextElementSibling;
    let Price_headsupports = document.querySelectorAll(".pricing");
    let carHeadSupports = carheadsupports.querySelector(".target_img"); // 找到最近的 .target_img
    let img = carHeadSupports.querySelector("img");

    Price_headsupports.forEach(function (openIntro) {
      //直接判斷是第幾個.Price
      let nowprice_carheadsupports = Price_headsupports[4].nextElementSibling;

      if (
        openIntro.getAttribute("data-price-carheadsupports") ===
          "carheadsupports" &&
        nowprice_carheadsupports.getAttribute(
          "data-nowprice-carheadsupports"
        ) === "nowcarheadsupports"
      ) {
        if (introdution.getAttribute("data-collapse-status") === "0") {
          //把data-collapse-status改成1
          introdution.setAttribute("data-collapse-status", "1");

          //carheadsupports勾選位置大小設置
          introdutionid.style.visibility = "visible";
          introdutionid.style.padding = "0px 1px 1px 3px";
          introdutionid.style.width = "calc(100% - 8px)";
          introdutionid.style.display = "flex";
          introdutionid.style.flexDirection = "row";
          introdutionid.style.border = "3px dashed black";
          introdutionid.style.borderTop = "none";
          introdutionid.style.margin = "0px 5px 5px 7px";
          introdutionid.style.height = "auto";
          introdutionid.style.justifyContent = "space-between";

          //建議售價標題顯示
          openIntro.style.display = "block";

          //建議售價金額顯示
          nowprice_carheadsupports.style.display = "block";
          nowprice_carheadsupports.style.display = "flex";
          nowprice_carheadsupports.style.width = "95%";
          nowprice_carheadsupports.style.height = "90%";
          nowprice_carheadsupports.style.color = "#000000";
          nowprice_carheadsupports.style.borderRadius = "8px";
          nowprice_carheadsupports.style.padding = "1px";
          nowprice_carheadsupports.style.margin = "3px 3px 3px 2px";
          nowprice_carheadsupports.style.textAlign = "center";
          nowprice_carheadsupports.style.fontSize = "21px";
          nowprice_carheadsupports.style.fontWeight = "600";
          nowprice_carheadsupports.style.alignItems = "center";
          nowprice_carheadsupports.style.justifyContent = "center";

          if (img) {
            img.setAttribute("src", "./img/black triangle after.png");
          }

          if (window.matchMedia("(max-width: 650px)").matches) {
            nowprice_carheadsupports.style.fontSize = "15px";
          }
        } else {
          //把data-collapse-status改成0
          introdution.setAttribute("data-collapse-status", "0");

          //建議售價標題隱藏
          introdutionid.style.visibility = "hidden";
          introdutionid.style.height = "0";
          introdutionid.style.padding = "0";
          introdutionid.style.border = "0px dashed black";
          introdutionid.style.margin = "0";

          //建議售價金額隱藏
          openIntro.style.display = "none";
          nowprice_carheadsupports.style.display = "none";

          if (img) {
            img.setAttribute("src", "./img/black triangle.png");
          }
        }
      }
    });
  }
});

/*-----  6.軀幹子系統-背靠點擊列  -----*/

/*--- 軀幹子系統-背靠點擊列-圖片箭頭部分   ---*/
document.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let tgimg_6 = event.target;
  let carseat6 = tgimg_6.closest(".car-back_supports"); // 找到最近的 car-back_supports
  let imgCarbacksupports = event.target.dataset.imgCarbacksupports;

  //確認我點擊到的位置是否是car-back_supports的箭頭
  if (carseat6 && carseat6.className.trim() === "car-back_supports") {
    let introdutionid = carseat6.querySelector(".trunk_suppotrts_back"); // 在 car-back_supports 內部找 back_supportsgroup
    let introdution = carseat6.querySelector(".subtitle"); // 在 car-back_supports 內部找 subtitle

    if (introdutionid) {
      // 取得 `visibility` 的計算後樣式
      let visibilityValue = window.getComputedStyle(introdutionid).visibility;

      if (imgCarbacksupports === "carbacksupportsImg") {
        if (visibilityValue === "hidden") {
          let Price_backsupports = document.querySelectorAll(".pricing");

          Price_backsupports.forEach(function (openIntro) {
            //直接判斷是第幾個.Price
            let nowprice_backsupports =
              Price_backsupports[5].nextElementSibling;

            if (
              openIntro.getAttribute("data-price-carbacksupports") ===
                "carbacksupports" &&
              nowprice_backsupports.getAttribute(
                "data-nowprice-carbacksupports"
              ) === "nowcarbacksupports"
            ) {
              if (introdution.getAttribute("data-collapse-status") === "0") {
                //把data-collapse-status改成1
                introdution.setAttribute("data-collapse-status", "1");

                //carbacksupports勾選位置大小設置
                introdutionid.style.visibility = "visible";
                introdutionid.style.padding = "0px 1px 1px 3px";
                introdutionid.style.width = "calc(100% - 8px)";
                introdutionid.style.flexDirection = "column";
                introdutionid.style.border = "3px dashed black";
                introdutionid.style.borderTop = "none";
                introdutionid.style.display = "flex";
                introdutionid.style.height = "auto";
                introdutionid.style.justifyContent = "space-between";
                introdutionid.style.margin = "0px 5px 5px 7px";

                //建議售價標題顯示
                openIntro.style.display = "block";

                //建議售價金額顯示
                nowprice_backsupports.style.display = "block";
                nowprice_backsupports.style.display = "flex";
                nowprice_backsupports.style.width = "95%";
                nowprice_backsupports.style.height = "90%";
                nowprice_backsupports.style.color = "#000000";
                nowprice_backsupports.style.borderRadius = "8px";
                nowprice_backsupports.style.padding = "1px";
                nowprice_backsupports.style.margin = "3px 3px 3px 2px";
                nowprice_backsupports.style.textAlign = "center";
                nowprice_backsupports.style.fontSize = "21px";
                nowprice_backsupports.style.fontWeight = "600";
                nowprice_backsupports.style.alignItems = "center";
                nowprice_backsupports.style.justifyContent = "center";

                if (window.matchMedia("(max-width: 650px)").matches) {
                  nowprice_backsupports.style.margin = "3px 0px 76px 0px";
                  nowprice_backsupports.style.fontSize = "15px";
                }
              }
            }
          });
        } else {
          let Price_backsupports = document.querySelectorAll(".pricing");

          Price_backsupports.forEach(function (openIntro) {
            let nowprice_backsupports =
              Price_backsupports[5].nextElementSibling;

            //把data-collapse-status改成0
            introdution.setAttribute("data-collapse-status", "0");

            //建議售價標題隱藏
            introdutionid.style.visibility = "hidden";
            introdutionid.style.height = "0";
            introdutionid.style.padding = "0";
            introdutionid.style.border = "0px dashed black";
            introdutionid.style.margin = "0";

            //建議售價金額隱藏
            openIntro.style.display = "none";
            nowprice_backsupports.style.display = "none";
          });
        }
      }
    }
  }
});

/*---  軀幹子系統-背靠點擊列-subtitle部分  ---*/
let carbacksupports = document.querySelector(".car-back_supports");
carbacksupports.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let showinfo = event.target.dataset.showinfo;
  let introdution = event.target;
  //確認我點擊到的位置是否是carbasetripod
  if (showinfo === "carbacksupports") {
    let introdutionid = event.target.nextElementSibling;
    let Price_backsupports = document.querySelectorAll(".pricing");
    let carBackSupports = carbacksupports.querySelector(".target_img"); // 找到最近的 .target_img
    let img = carBackSupports.querySelector("img");

    Price_backsupports.forEach(function (openIntro) {
      //直接判斷是第幾個.Price
      let nowprice_backsupports = Price_backsupports[5].nextElementSibling;

      if (
        openIntro.getAttribute("data-price-carbacksupports") ===
          "carbacksupports" &&
        nowprice_backsupports.getAttribute("data-nowprice-carbacksupports") ===
          "nowcarbacksupports"
      ) {
        if (introdution.getAttribute("data-collapse-status") === "0") {
          //把data-collapse-status改成1
          introdution.setAttribute("data-collapse-status", "1");

          //carbacksupports勾選位置大小設置
          introdutionid.style.visibility = "visible";
          introdutionid.style.padding = "0px 1px 1px 3px";
          introdutionid.style.width = "calc(100% - 8px)";
          introdutionid.style.flexDirection = "column";
          introdutionid.style.border = "3px dashed black";
          introdutionid.style.borderTop = "none";
          introdutionid.style.display = "flex";
          introdutionid.style.height = "auto";
          introdutionid.style.justifyContent = "space-between";
          introdutionid.style.margin = "0px 5px 5px 7px";

          //建議售價標題顯示
          openIntro.style.display = "block";

          //建議售價金額顯示
          nowprice_backsupports.style.display = "block";
          nowprice_backsupports.style.display = "flex";
          nowprice_backsupports.style.width = "95%";
          nowprice_backsupports.style.height = "90%";
          nowprice_backsupports.style.color = "#000000";
          nowprice_backsupports.style.borderRadius = "8px";
          nowprice_backsupports.style.padding = "1px";
          nowprice_backsupports.style.margin = "3px 3px 3px 2px";
          nowprice_backsupports.style.textAlign = "center";
          nowprice_backsupports.style.fontSize = "21px";
          nowprice_backsupports.style.fontWeight = "600";
          nowprice_backsupports.style.alignItems = "center";
          nowprice_backsupports.style.justifyContent = "center";

          if (img) {
            img.setAttribute("src", "./img/black triangle after.png");
          }

          if (window.matchMedia("(max-width: 650px)").matches) {
            nowprice_backsupports.style.margin = "3px 0px 76px 0px";
            nowprice_backsupports.style.fontSize = "15px";
          }
        } else {
          //把data-collapse-status改成0
          introdution.setAttribute("data-collapse-status", "0");

          //建議售價標題隱藏
          introdutionid.style.visibility = "hidden";
          introdutionid.style.height = "0";
          introdutionid.style.padding = "0";
          introdutionid.style.border = "0px dashed black";
          introdutionid.style.margin = "0";

          //建議售價金額隱藏
          openIntro.style.display = "none";
          nowprice_backsupports.style.display = "none";

          if (img) {
            img.setAttribute("src", "./img/black triangle.png");
          }
        }
      }
    });
  }
});

/*-----  7.軀幹子系統-軀幹側支撐點擊列  -----*/

/*--- 軀幹子系統-軀幹側支撐點擊列-圖片箭頭部分   ---*/
document.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let tgimg_7 = event.target;
  let carseat7 = tgimg_7.closest(".car-latertrunk_supports"); // 找到最近的 car-latertrunk_supports
  let imgCarlatertrunksupports = event.target.dataset.imgCarlatertrunksupports;

  //確認我點擊到的位置是否是car-latertrunk_supports的箭頭
  if (carseat7 && carseat7.className.trim() === "car-latertrunk_supports") {
    let introdutionid = carseat7.querySelector(".trunk_suppotrts_LaterTrunk"); // 在 car-latertrunk_supports 內部找 trunk_suppotrts_LaterTrunk
    let introdution = carseat7.querySelector(".subtitle"); // 在 car-latertrunk_supports 內部找 subtitle

    if (introdutionid) {
      // 取得 `visibility` 的計算後樣式
      let visibilityValue = window.getComputedStyle(introdutionid).visibility;

      if (imgCarlatertrunksupports === "carlatertrunksupportsImg") {
        if (visibilityValue === "hidden") {
          let Price_carlatertrunksupports =
            document.querySelectorAll(".pricing");

          Price_carlatertrunksupports.forEach(function (openIntro) {
            //直接判斷是第幾個.Price
            let nowprice_carlatertrunksupports =
              Price_carlatertrunksupports[6].nextElementSibling;

            if (
              openIntro.getAttribute("data-price-carlatertrunksupports") ===
                "carlatertrunksupports" &&
              nowprice_carlatertrunksupports.getAttribute(
                "data-nowprice-carlatertrunksupports"
              ) === "nowcarlatertrunksupports"
            ) {
              if (introdution.getAttribute("data-collapse-status") === "0") {
                //把data-collapse-status改成1
                introdution.setAttribute("data-collapse-status", "1");

                //carcarlatertrunksupports勾選位置大小設置
                introdutionid.style.visibility = "visible";
                introdutionid.style.padding = "0px 1px 6px 3px";
                introdutionid.style.width = "calc(100% - 8px)";
                introdutionid.style.flexDirection = "column";
                introdutionid.style.border = "3px dashed black";
                introdutionid.style.borderTop = "none";
                introdutionid.style.display = "flex";
                introdutionid.style.height = "auto";
                introdutionid.style.justifyContent = "space-between";
                introdutionid.style.margin = "0px 5px 5px 7px";

                //建議售價標題顯示
                openIntro.style.display = "block";

                //建議售價金額顯示
                nowprice_carlatertrunksupports.style.display = "block";
                nowprice_carlatertrunksupports.style.display = "flex";
                nowprice_carlatertrunksupports.style.width = "95%";
                nowprice_carlatertrunksupports.style.height = "90%";
                nowprice_carlatertrunksupports.style.color = "#000000";
                nowprice_carlatertrunksupports.style.borderRadius = "8px";
                nowprice_carlatertrunksupports.style.padding = "1px";
                nowprice_carlatertrunksupports.style.margin = "3px 3px 3px 2px";
                nowprice_carlatertrunksupports.style.textAlign = "center";
                nowprice_carlatertrunksupports.style.fontSize = "21px";
                nowprice_carlatertrunksupports.style.fontWeight = "600";
                nowprice_carlatertrunksupports.style.alignItems = "center";
                nowprice_carlatertrunksupports.style.justifyContent = "center";

                if (window.matchMedia("(max-width: 650px)").matches) {
                  nowprice_carlatertrunksupports.style.fontSize = "15px";
                }
              }
            }
          });
        } else {
          let Price_carlatertrunksupports =
            document.querySelectorAll(".pricing");

          Price_carlatertrunksupports.forEach(function (openIntro) {
            let nowprice_carlatertrunksupports =
              Price_carlatertrunksupports[6].nextElementSibling;

            //把data-collapse-status改成0
            introdution.setAttribute("data-collapse-status", "0");

            //建議售價標題隱藏
            introdutionid.style.visibility = "hidden";
            introdutionid.style.height = "0";
            introdutionid.style.padding = "0";
            introdutionid.style.border = "0px dashed black";
            introdutionid.style.margin = "0";

            //建議售價金額隱藏
            openIntro.style.display = "none";
            nowprice_carlatertrunksupports.style.display = "none";
          });
        }
      }
    }
  }
});

/*---  軀幹子系統-軀幹側支撐點擊列-subtitle部分  ---*/
let carlatertrunksupports = document.querySelector(".car-latertrunk_supports");
carlatertrunksupports.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let showinfo = event.target.dataset.showinfo;
  let introdution = event.target;
  //確認我點擊到的位置是否是carbasetripod
  if (showinfo === "carlatertrunksupports") {
    let introdutionid = event.target.nextElementSibling;
    let Price_carlatertrunksupports = document.querySelectorAll(".pricing");
    let carLaterTrunksupports =
      carlatertrunksupports.querySelector(".target_img"); // 找到最近的 .target_img
    let img = carLaterTrunksupports.querySelector("img");

    Price_carlatertrunksupports.forEach(function (openIntro) {
      //直接判斷是第幾個.Price
      let nowprice_carlatertrunksupports =
        Price_carlatertrunksupports[6].nextElementSibling;

      if (
        openIntro.getAttribute("data-price-carlatertrunksupports") ===
          "carlatertrunksupports" &&
        nowprice_carlatertrunksupports.getAttribute(
          "data-nowprice-carlatertrunksupports"
        ) === "nowcarlatertrunksupports"
      ) {
        if (introdution.getAttribute("data-collapse-status") === "0") {
          //把data-collapse-status改成1
          introdution.setAttribute("data-collapse-status", "1");

          //carcarlatertrunksupports勾選位置大小設置
          introdutionid.style.visibility = "visible";
          introdutionid.style.padding = "0px 1px 6px 3px";
          introdutionid.style.width = "calc(100% - 8px)";
          introdutionid.style.flexDirection = "column";
          introdutionid.style.border = "3px dashed black";
          introdutionid.style.borderTop = "none";
          introdutionid.style.display = "flex";
          introdutionid.style.height = "auto";
          introdutionid.style.justifyContent = "space-between";
          introdutionid.style.margin = "0px 5px 5px 7px";

          //建議售價標題顯示
          openIntro.style.display = "block";

          //建議售價金額顯示
          nowprice_carlatertrunksupports.style.display = "block";
          nowprice_carlatertrunksupports.style.display = "flex";
          nowprice_carlatertrunksupports.style.width = "95%";
          nowprice_carlatertrunksupports.style.height = "90%";
          nowprice_carlatertrunksupports.style.color = "#000000";
          nowprice_carlatertrunksupports.style.borderRadius = "8px";
          nowprice_carlatertrunksupports.style.padding = "1px";
          nowprice_carlatertrunksupports.style.margin = "3px 3px 3px 2px";
          nowprice_carlatertrunksupports.style.textAlign = "center";
          nowprice_carlatertrunksupports.style.fontSize = "21px";
          nowprice_carlatertrunksupports.style.fontWeight = "600";
          nowprice_carlatertrunksupports.style.alignItems = "center";
          nowprice_carlatertrunksupports.style.justifyContent = "center";

          if (img) {
            img.setAttribute("src", "./img/black triangle after.png");
          }

          if (window.matchMedia("(max-width: 650px)").matches) {
            nowprice_carlatertrunksupports.style.fontSize = "15px";
          }
        } else {
          //把data-collapse-status改成0
          introdution.setAttribute("data-collapse-status", "0");

          //建議售價標題隱藏
          introdutionid.style.visibility = "hidden";
          introdutionid.style.height = "0";
          introdutionid.style.padding = "0";
          introdutionid.style.border = "0px dashed black";
          introdutionid.style.margin = "0";

          //建議售價金額隱藏
          openIntro.style.display = "none";
          nowprice_carlatertrunksupports.style.display = "none";

          if (img) {
            img.setAttribute("src", "./img/black triangle.png");
          }
        }
      }
    });
  }
});

/*----- 8.底座子系統-座板  -----*/

/*--- 底座子系統-座板-圖片箭頭部分   ---*/
document.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let tgimg_8 = event.target;
  let carseat8 = tgimg_8.closest(".car-seatbase"); // 找到最近的 car-seatbase
  let imgCarseatbase = event.target.dataset.imgCarseatbase;

  //確認我點擊到的位置是否是car-seatbase的箭頭
  if (carseat8 && carseat8.className.trim() === "car-seatbase") {
    let introdutionid = carseat8.querySelector(".seatbasegroup"); // 在 car-seatbase 內部找 seatbasegroup
    let introdution = carseat8.querySelector(".subtitle"); // 在 car-seatbase 內部找 subtitle

    if (introdutionid) {
      // 取得 `visibility` 的計算後樣式
      let visibilityValue = window.getComputedStyle(introdutionid).visibility;

      if (imgCarseatbase === "carseatbaseImg") {
        if (visibilityValue === "hidden") {
          let Price_seatbase = document.querySelectorAll(".pricing");

          Price_seatbase.forEach(function (openIntro) {
            //直接判斷是第幾個.Price
            let nowprice_seatbase = Price_seatbase[7].nextElementSibling;

            if (
              openIntro.getAttribute("data-price-carseatbase") ===
                "carseatbase" &&
              nowprice_seatbase.getAttribute("data-nowprice-carseatbase") ===
                "nowcarseatbase"
            ) {
              if (introdution.getAttribute("data-collapse-status") === "0") {
                //把data-collapse-status改成1
                introdution.setAttribute("data-collapse-status", "1");

                //carseatbase勾選位置大小設置
                introdutionid.style.visibility = "visible";
                introdutionid.style.padding = "0px 1px 1px 3px";
                introdutionid.style.width = "calc(100% - 8px)";
                introdutionid.style.flexDirection = "column";
                introdutionid.style.border = "3px dashed black";
                introdutionid.style.borderTop = "none";
                introdutionid.style.display = "flex";
                introdutionid.style.height = "auto";
                introdutionid.style.justifyContent = "space-between";
                introdutionid.style.margin = "0px 5px 5px 7px";

                //建議售價標題顯示
                openIntro.style.display = "block";

                //建議售價金額顯示
                nowprice_seatbase.style.display = "block";
                nowprice_seatbase.style.display = "flex";
                nowprice_seatbase.style.width = "95%";
                nowprice_seatbase.style.height = "90%";
                nowprice_seatbase.style.color = "#000000";
                nowprice_seatbase.style.borderRadius = "8px";
                nowprice_seatbase.style.padding = "1px";
                nowprice_seatbase.style.margin = "3px 3px 3px 2px";
                nowprice_seatbase.style.textAlign = "center";
                nowprice_seatbase.style.fontSize = "21px";
                nowprice_seatbase.style.fontWeight = "600";
                nowprice_seatbase.style.alignItems = "center";
                nowprice_seatbase.style.justifyContent = "center";

                if (window.matchMedia("(max-width: 650px)").matches) {
                  nowprice_seatbase.style.fontSize = "14px";
                }
              }
            }
          });
        } else {
          let Price_seatbase = document.querySelectorAll(".pricing");

          Price_seatbase.forEach(function (openIntro) {
            let nowprice_seatbase = Price_seatbase[7].nextElementSibling;

            //把data-collapse-status改成0
            introdution.setAttribute("data-collapse-status", "0");

            //建議售價標題隱藏
            introdutionid.style.visibility = "hidden";
            introdutionid.style.height = "0";
            introdutionid.style.padding = "0";
            introdutionid.style.border = "0px dashed black";
            introdutionid.style.margin = "0";

            //建議售價金額隱藏
            openIntro.style.display = "none";
            nowprice_seatbase.style.display = "none";
          });
        }
      }
    }
  }
});

/*---  底座子系統-座板-subtitle部分  ---*/
let carseatbase = document.querySelector(".car-seatbase");
carseatbase.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let showinfo = event.target.dataset.showinfo;
  let introdution = event.target;
  //確認我點擊到的位置是否是carbasetripod
  if (showinfo === "carseatbase") {
    let introdutionid = event.target.nextElementSibling;
    let Price_seatbase = document.querySelectorAll(".pricing");
    let carSeatBase = carseatbase.querySelector(".target_img"); // 找到最近的 .target_img
    let img = carSeatBase.querySelector("img");

    Price_seatbase.forEach(function (openIntro) {
      //直接判斷是第幾個.Price
      let nowprice_seatbase = Price_seatbase[7].nextElementSibling;

      if (
        openIntro.getAttribute("data-price-carseatbase") === "carseatbase" &&
        nowprice_seatbase.getAttribute("data-nowprice-carseatbase") ===
          "nowcarseatbase"
      ) {
        if (introdution.getAttribute("data-collapse-status") === "0") {
          //把data-collapse-status改成1
          introdution.setAttribute("data-collapse-status", "1");

          //carseatbase勾選位置大小設置
          introdutionid.style.visibility = "visible";
          introdutionid.style.padding = "0px 1px 1px 3px";
          introdutionid.style.width = "calc(100% - 8px)";
          introdutionid.style.flexDirection = "column";
          introdutionid.style.border = "3px dashed black";
          introdutionid.style.borderTop = "none";
          introdutionid.style.display = "flex";
          introdutionid.style.height = "auto";
          introdutionid.style.justifyContent = "space-between";
          introdutionid.style.margin = "0px 5px 5px 7px";

          //建議售價標題顯示
          openIntro.style.display = "block";

          //建議售價金額顯示
          nowprice_seatbase.style.display = "block";
          nowprice_seatbase.style.display = "flex";
          nowprice_seatbase.style.width = "95%";
          nowprice_seatbase.style.height = "90%";
          nowprice_seatbase.style.color = "#000000";
          nowprice_seatbase.style.borderRadius = "8px";
          nowprice_seatbase.style.padding = "1px";
          nowprice_seatbase.style.margin = "3px 3px 3px 2px";
          nowprice_seatbase.style.textAlign = "center";
          nowprice_seatbase.style.fontSize = "21px";
          nowprice_seatbase.style.fontWeight = "600";
          nowprice_seatbase.style.alignItems = "center";
          nowprice_seatbase.style.justifyContent = "center";

          if (img) {
            img.setAttribute("src", "./img/black triangle after.png");
          }

          if (window.matchMedia("(max-width: 650px)").matches) {
            nowprice_seatbase.style.fontSize = "14px";
          }
        } else {
          //把data-collapse-status改成0
          introdution.setAttribute("data-collapse-status", "0");

          //建議售價標題隱藏
          introdutionid.style.visibility = "hidden";
          introdutionid.style.height = "0";
          introdutionid.style.padding = "0";
          introdutionid.style.border = "0px dashed black";
          introdutionid.style.margin = "0";

          //建議售價金額隱藏
          openIntro.style.display = "none";
          nowprice_seatbase.style.display = "none";

          if (img) {
            img.setAttribute("src", "./img/black triangle.png");
          }
        }
      }
    });
  }
});

/*----- 9.底座子系統-座墊  -----*/

/*--- 底座子系統-座墊-圖片箭頭部分   ---*/
document.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let tgimg_9 = event.target;
  let carseat9 = tgimg_9.closest(".car-cushion"); // 找到最近的 car-cushion
  let imgCarcushion = event.target.dataset.imgCarcushion;

  //確認我點擊到的位置是否是car-cushion的箭頭
  if (carseat9 && carseat9.className.trim() === "car-cushion") {
    let introdutionid = carseat9.querySelector(".cushiongroup"); // 在 car-cushion 內部找 cushiongroup
    let introdution = carseat9.querySelector(".subtitle"); // 在 car-cushion 內部找 subtitle

    if (introdutionid) {
      // 取得 `visibility` 的計算後樣式
      let visibilityValue = window.getComputedStyle(introdutionid).visibility;

      if (imgCarcushion === "carcushionImg") {
        if (visibilityValue === "hidden") {
          let Price_cushion = document.querySelectorAll(".pricing");

          Price_cushion.forEach(function (openIntro) {
            //直接判斷是第幾個.Price
            let nowprice_cushion = Price_cushion[8].nextElementSibling;

            if (
              openIntro.getAttribute("data-price-carcushion") ===
                "carcushion" &&
              nowprice_cushion.getAttribute("data-nowprice-carcushion") ===
                "nowcarcushion"
            ) {
              if (introdution.getAttribute("data-collapse-status") === "0") {
                //把data-collapse-status改成1
                introdution.setAttribute("data-collapse-status", "1");

                //carcushion勾選位置大小設置
                introdutionid.style.visibility = "visible";
                introdutionid.style.padding = "0px 1px 2px 3px";
                introdutionid.style.width = "calc(100% - 8px)";
                introdutionid.style.flexDirection = "row";
                introdutionid.style.border = "3px dashed black";
                introdutionid.style.borderTop = "none";
                introdutionid.style.display = "flex";
                introdutionid.style.height = "100%";
                introdutionid.style.justifyContent = "space-between";
                introdutionid.style.margin = "0px 5px 5px 7px";

                //建議售價標題顯示
                openIntro.style.display = "block";

                //建議售價金額顯示
                nowprice_cushion.style.display = "block";
                nowprice_cushion.style.display = "flex";
                nowprice_cushion.style.width = "95%";
                nowprice_cushion.style.height = "90%";
                nowprice_cushion.style.color = "#000000";
                nowprice_cushion.style.borderRadius = "8px";
                nowprice_cushion.style.padding = "1px";
                nowprice_cushion.style.margin = "3px 3px 3px 2px";
                nowprice_cushion.style.textAlign = "center";
                nowprice_cushion.style.fontSize = "21px";
                nowprice_cushion.style.fontWeight = "600";
                nowprice_cushion.style.alignItems = "center";
                nowprice_cushion.style.justifyContent = "center";

                if (window.matchMedia("(max-width: 650px)").matches) {
                  nowprice_cushion.style.fontSize = "11px";
                }
              }
            }
          });
        } else {
          let Price_cushion = document.querySelectorAll(".pricing");

          Price_cushion.forEach(function (openIntro) {
            let nowprice_cushion = Price_cushion[8].nextElementSibling;

            //把data-collapse-status改成0
            introdution.setAttribute("data-collapse-status", "0");

            //建議售價標題隱藏
            introdutionid.style.visibility = "hidden";
            introdutionid.style.height = "0";
            introdutionid.style.padding = "0";
            introdutionid.style.border = "0px dashed black";
            introdutionid.style.margin = "0";

            //建議售價金額隱藏
            openIntro.style.display = "none";
            nowprice_cushion.style.display = "none";
          });
        }
      }
    }
  }
});

/*---  底座子系統-座墊-subtitle部分  ---*/
let carcushion = document.querySelector(".car-cushion");
carcushion.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let showinfo = event.target.dataset.showinfo;
  let introdution = event.target;
  //確認我點擊到的位置是否是carcushion
  if (showinfo === "carcushion") {
    let introdutionid = event.target.nextElementSibling;
    let Price_cushion = document.querySelectorAll(".pricing");
    let carCushion = carcushion.querySelector(".target_img"); // 找到最近的 .target_img
    let img = carCushion.querySelector("img");

    Price_cushion.forEach(function (openIntro) {
      //直接判斷是第幾個.Price
      let nowprice_cushion = Price_cushion[8].nextElementSibling;

      if (
        openIntro.getAttribute("data-price-carcushion") === "carcushion" &&
        nowprice_cushion.getAttribute("data-nowprice-carcushion") ===
          "nowcarcushion"
      ) {
        if (introdution.getAttribute("data-collapse-status") === "0") {
          //把data-collapse-status改成1
          introdution.setAttribute("data-collapse-status", "1");

          //carseatbase勾選位置大小設置
          introdutionid.style.visibility = "visible";
          introdutionid.style.padding = "0px 1px 2px 3px";
          introdutionid.style.width = "calc(100% - 8px)";
          introdutionid.style.flexDirection = "row";
          introdutionid.style.border = "3px dashed black";
          introdutionid.style.borderTop = "none";
          introdutionid.style.display = "flex";
          introdutionid.style.height = "100%";
          introdutionid.style.justifyContent = "space-between";
          introdutionid.style.margin = "0px 5px 5px 7px";

          //建議售價標題顯示
          openIntro.style.display = "block";

          //建議售價金額顯示
          nowprice_cushion.style.display = "block";
          nowprice_cushion.style.display = "flex";
          nowprice_cushion.style.width = "95%";
          nowprice_cushion.style.height = "90%";
          nowprice_cushion.style.color = "#000000";
          nowprice_cushion.style.borderRadius = "8px";
          nowprice_cushion.style.padding = "1px";
          nowprice_cushion.style.margin = "3px 3px 3px 2px";
          nowprice_cushion.style.textAlign = "center";
          nowprice_cushion.style.fontSize = "21px";
          nowprice_cushion.style.fontWeight = "600";
          nowprice_cushion.style.alignItems = "center";
          nowprice_cushion.style.justifyContent = "center";

          if (img) {
            img.setAttribute("src", "./img/black triangle after.png");
          }

          if (window.matchMedia("(max-width: 650px)").matches) {
            nowprice_cushion.style.fontSize = "11px";
          }
        } else {
          //把data-collapse-status改成0
          introdution.setAttribute("data-collapse-status", "0");

          //建議售價標題隱藏
          introdutionid.style.visibility = "hidden";
          introdutionid.style.height = "0";
          introdutionid.style.padding = "0";
          introdutionid.style.border = "0px dashed black";
          introdutionid.style.margin = "0";

          //建議售價金額隱藏
          openIntro.style.display = "none";
          nowprice_cushion.style.display = "none";

          if (img) {
            img.setAttribute("src", "./img/black triangle.png");
          }
        }
      }
    });
  }
});

/*----- 10.綁帶子系統  -----*/

/*--- 綁帶子系統-圖片箭頭部分   ---*/
document.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let tgimg_10 = event.target;
  let carseat10 = tgimg_10.closest(".car-bandage"); // 找到最近的 car-bandage
  let imgCarbandage = event.target.dataset.imgCarbandage;

  //確認我點擊到的位置是否是car-bandage的箭頭
  if (carseat10 && carseat10.className.trim() === "car-bandage") {
    let introdutionid = carseat10.querySelector(".bandagegroup"); // 在 car-bandage 內部找 bandagegroup
    let introdution = carseat10.querySelector(".subtitle"); // 在 car-bandage 內部找 subtitle

    if (introdutionid) {
      // 取得 `visibility` 的計算後樣式
      let visibilityValue = window.getComputedStyle(introdutionid).visibility;

      if (imgCarbandage === "carbandageImg") {
        if (visibilityValue === "hidden") {
          let Price_bandage = document.querySelectorAll(".pricing");

          Price_bandage.forEach(function (openIntro) {
            //直接判斷是第幾個.Price
            let nowprice_bandage = Price_bandage[9].nextElementSibling;

            if (
              openIntro.getAttribute("data-price-carbandage") ===
                "carbandage" &&
              nowprice_bandage.getAttribute("data-nowprice-carbandage") ===
                "nowcarbandage"
            ) {
              if (introdution.getAttribute("data-collapse-status") === "0") {
                //把data-collapse-status改成1
                introdution.setAttribute("data-collapse-status", "1");

                //carbandage勾選位置大小設置
                introdutionid.style.visibility = "visible";
                introdutionid.style.padding = "0px 1px 1px 3px";
                introdutionid.style.width = "calc(100% - 8px)";
                introdutionid.style.flexDirection = "column";
                introdutionid.style.border = "3px dashed black";
                introdutionid.style.borderTop = "none";
                introdutionid.style.display = "flex";
                introdutionid.style.height = "auto";
                introdutionid.style.justifyContent = "space-between";
                introdutionid.style.margin = "0px 5px 5px 7px";

                //建議售價標題顯示
                openIntro.style.display = "block";

                //建議售價金額顯示
                nowprice_bandage.style.display = "block";
                nowprice_bandage.style.display = "flex";
                nowprice_bandage.style.width = "95%";
                nowprice_bandage.style.height = "90%";
                nowprice_bandage.style.color = "#000000";
                nowprice_bandage.style.borderRadius = "8px";
                nowprice_bandage.style.padding = "1px";
                nowprice_bandage.style.margin = "3px 3px 3px 2px";
                nowprice_bandage.style.textAlign = "center";
                nowprice_bandage.style.fontSize = "21px";
                nowprice_bandage.style.fontWeight = "600";
                nowprice_bandage.style.alignItems = "center";
                nowprice_bandage.style.justifyContent = "center";

                if (window.matchMedia("(max-width: 650px)").matches) {
                  nowprice_bandage.style.fontSize = "15px";
                }
              }
            }
          });
        } else {
          let Price_bandage = document.querySelectorAll(".pricing");

          Price_bandage.forEach(function (openIntro) {
            let nowprice_bandage = Price_bandage[9].nextElementSibling;

            //把data-collapse-status改成0
            introdution.setAttribute("data-collapse-status", "0");

            //建議售價標題隱藏
            introdutionid.style.visibility = "hidden";
            introdutionid.style.height = "0";
            introdutionid.style.padding = "0";
            introdutionid.style.border = "0px dashed black";
            introdutionid.style.margin = "0";

            //建議售價金額隱藏
            openIntro.style.display = "none";
            nowprice_bandage.style.display = "none";
          });
        }
      }
    }
  }
});

/*---  綁帶子系統-subtitle部分  ---*/
let carbandage = document.querySelector(".car-bandage");
carbandage.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let showinfo = event.target.dataset.showinfo;
  let introdution = event.target;
  //確認我點擊到的位置是否是carbasetripod
  if (showinfo === "carbandage") {
    let introdutionid = event.target.nextElementSibling;
    let Price_bandage = document.querySelectorAll(".pricing");
    let carBandage = carbandage.querySelector(".target_img"); // 找到最近的 .target_img
    let img = carBandage.querySelector("img");

    Price_bandage.forEach(function (openIntro) {
      //直接判斷是第幾個.Price
      let nowprice_bandage = Price_bandage[9].nextElementSibling;

      if (
        openIntro.getAttribute("data-price-carbandage") === "carbandage" &&
        nowprice_bandage.getAttribute("data-nowprice-carbandage") ===
          "nowcarbandage"
      ) {
        if (introdution.getAttribute("data-collapse-status") === "0") {
          //把data-collapse-status改成1
          introdution.setAttribute("data-collapse-status", "1");

          //carbandage勾選位置大小設置
          introdutionid.style.visibility = "visible";
          introdutionid.style.padding = "0px 1px 1px 3px";
          introdutionid.style.width = "calc(100% - 8px)";
          introdutionid.style.flexDirection = "column";
          introdutionid.style.border = "3px dashed black";
          introdutionid.style.borderTop = "none";
          introdutionid.style.display = "flex";
          introdutionid.style.height = "auto";
          introdutionid.style.justifyContent = "space-between";
          introdutionid.style.margin = "0px 5px 5px 7px";

          //建議售價標題顯示
          openIntro.style.display = "block";

          //建議售價金額顯示
          nowprice_bandage.style.display = "block";
          nowprice_bandage.style.display = "flex";
          nowprice_bandage.style.width = "95%";
          nowprice_bandage.style.height = "90%";
          nowprice_bandage.style.color = "#000000";
          nowprice_bandage.style.borderRadius = "8px";
          nowprice_bandage.style.padding = "1px";
          nowprice_bandage.style.margin = "3px 3px 3px 2px";
          nowprice_bandage.style.textAlign = "center";
          nowprice_bandage.style.fontSize = "21px";
          nowprice_bandage.style.fontWeight = "600";
          nowprice_bandage.style.alignItems = "center";
          nowprice_bandage.style.justifyContent = "center";

          if (img) {
            img.setAttribute("src", "./img/black triangle after.png");
          }

          if (window.matchMedia("(max-width: 650px)").matches) {
            nowprice_bandage.style.fontSize = "15px";
          }
        } else {
          //把data-collapse-status改成0
          introdution.setAttribute("data-collapse-status", "0");

          //建議售價標題隱藏
          introdutionid.style.visibility = "hidden";
          introdutionid.style.height = "0";
          introdutionid.style.padding = "0";
          introdutionid.style.border = "0px dashed black";
          introdutionid.style.margin = "0";

          //建議售價金額隱藏
          openIntro.style.display = "none";
          nowprice_bandage.style.display = "none";

          if (img) {
            img.setAttribute("src", "./img/black triangle.png");
          }
        }
      }
    });
  }
});

/*----- n.其他  -----*/
let carother = document.querySelector(".car-other");
carother.style.visibility = "hidden";

/*-----  Last.總價格相加  -----*/
function formatPrice(price) {
  return new Intl.NumberFormat("en-US").format(price);
}

document.addEventListener("DOMContentLoaded", () => {
  let priceDisplay = document.getElementById("priceDisplay");

  // 監聽 body 的變化事件
  document.body.addEventListener("change", (event) => {
    if (event.target.type === "checkbox") {
      updateTotalPrice();
    }
  });

  // 更新總價函式
  function updateTotalPrice() {
    let alladdprice = 0;

    // 遍歷所有 checkbox 並計算總價
    document.querySelectorAll('[data-addPrice="add"]').forEach((addprice) => {
      let price = parseInt(addprice.textContent.replace(/[^0-9]/g, ""), 10); // 去掉所有非數字字符

      if (!isNaN(price)) {
        // 確保 price 是有效數字
        alladdprice += price; // 累加價格
      } else {
        console.error(`Invalid price text: ${textContent}`);
      }
    });

    // 更新總價到畫面
    priceDisplay.textContent = `${formatPrice(alladdprice)}`;
  }
});

let allcheckboxfalsebtn = document.getElementById("allcheckboxfalse");

allcheckboxfalsebtn.addEventListener("click", () => {
  allcheckboxfalsefct();
});

function allcheckboxfalsefct() {
  // 查询所有复选框
  let allcheckboxsearch = document.querySelectorAll('input[type="checkbox"]');

  // 遍历每个复选框并取消勾选
  allcheckboxsearch.forEach((checkbox) => {
    checkbox.checked = false; // 取消勾选
  });
  let productImage = document.getElementById("ProductImage");
  productImage.src = "./img/Novarc_standrad.png";
}

//確保箭頭圖片每次都有更新
document.addEventListener("DOMContentLoaded", () => {
  let targetImages = document.querySelectorAll(".target_img");

  targetImages.forEach((target) => {
    target.addEventListener("click", function () {
      let img = this.querySelector("img");

      if (img) {
        // 取得完整的圖片 URL
        let currentSrc = new URL(img.getAttribute("src"), document.baseURI)
          .href;

        // 取得完整的圖片網址，確保一致
        let blackTriangle = new URL(
          "./img/black triangle.png",
          document.baseURI
        ).href;
        let blackTriangleAfter = new URL(
          "./img/black triangle after.png",
          document.baseURI
        ).href;

        // 確保匹配完整網址
        if (currentSrc === blackTriangle) {
          img.setAttribute("src", blackTriangleAfter);
        } else {
          img.setAttribute("src", blackTriangle);
        }

        console.log("圖片已更換為：" + img.getAttribute("src"));
      }
    });
  });
});

//測試我每次都點了甚麼
document.addEventListener("click", function (event) {
  console.log("使用者點擊了:", event.target);
});

// document.addEventListener("DOMContentLoaded", function () {
//   取得所有 subtitle 和 subtitle_2
//   let subtitles = document.querySelectorAll(".subtitle, .subtitle_2");

//   subtitles.forEach((subtitle) => {
//     subtitle.addEventListener("click", function () {
//       // 找到最近的 .target_img 內的 img
//       let img = this.closest(".target").querySelector(".target_img img");

//       if (img) {
//         // 取得目前的圖片路徑
//         const currentSrc = img.getAttribute("src");

//         // 根據當前圖片路徑切換
//         if (currentSrc.includes("black triangle.png")) {
//           img.setAttribute("src", "./img/black triangle after.png");
//         } else {
//           img.setAttribute("src", "./img/black triangle.png");
//         }
//       }
//     });
//   });
// });

// document.getElementById("printPDFButton").addEventListener("click", function () {
//   // 使用 html2canvas 渲染 Quotation div 為圖片
//   html2canvas(document.getElementById('Quotation')).then(function(canvas) {
//     // 取得生成的 canvas 元素
//     let imgData = canvas.toDataURL('image/png'); // 將 canvas 轉換為圖片格式

//     // 顯示 imgData 轉換後的圖片
//     let imgElement = document.createElement("img");
//     imgElement.src = imgData;
//     document.body.appendChild(imgElement); // 將圖片加入頁面中查看

//     // 使用 jsPDF 創建 PDF 文件
//     let { jsPDF } = window.jspdf;
//     let pdf = new jsPDF();

//     // 調整圖片加入 PDF 的起始位置（5, 8）
//     pdf.addImage(imgData, 'PNG', 5, 8); // 這裡的15, 15是X和Y座標，表示圖片從 PDF 頁面的(15, 15)位置開始
//     console.log(imgData);

//     // 儲存 PDF 檔案
//     pdf.save("quotation.pdf");
//   }).catch(function(error) {
//     console.error('Error:', error);
//   });
// });
