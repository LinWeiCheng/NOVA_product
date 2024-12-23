let left = document.querySelector(".leftcontent");
/*----- 1.車體顏色點擊列  -----*/
left.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let showinfo = event.target.dataset.showinfo;
  let introdution = event.target;
  //確認我點擊到的位置是否是carcolor
  if (showinfo === "carcolor") {
    let introdutionid = event.target.nextElementSibling;
    let Price_carcolor = document.querySelectorAll(".pricing");
    Price_carcolor.forEach(function (openIntro) {
      let nowprice_color = Price_carcolor[0].nextElementSibling;
      if (
        openIntro.getAttribute("data-price-carcolor") === "carcolor" &&
        nowprice_color.getAttribute("data-nowprice-carcolor") === "nowcarcolor"
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
  }
});

/*----- 2.座板尺寸點擊列  -----*/
//座寬尺寸黑格子
let SW_container = document.querySelector(".width_number");
let SWCount = 30;

// 生成 6 個新的 div，每個都有唯一的 class 名稱
for (let i = 0; i < 7; i++) {
  let divSW_Size = document.createElement("div");

  divSW_Size.textContent = `${SWCount} `;
  divSW_Size.classList.add(`generated_SWdiv`);
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
  divSW_Check.id = `Ssize`;
  divSW_Check.name = `car_basewidth`;
  divSW_Check.classList.add(`SWC_checkbox`);
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
  divSd_Check.id = `Ssize`;
  divSd_Check.name = `car_basedeep`;
  divSd_Check.classList.add(`SdC_checkbox`);
  SdCCount += 2;

  SdC_container.appendChild(divSd_Check);
}

left.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let showinfo = event.target.dataset.showinfo;
  let introdution = event.target;
  //確認我點擊到的位置是否是carbasesize
  if (showinfo === "carbasesize") {
    let introdutionid = event.target.nextElementSibling;
    let Price_carbasesize = document.querySelectorAll(".pricing");

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

          //carbasesize勾選位置大小設置
          introdutionid.style.visibility = "visible";
          introdutionid.style.padding = "5px 1px 1px 3px";
          introdutionid.style.width = "calc(100% - 8px)";
          introdutionid.style.flexWrap = "wrap";
          introdutionid.style.border = "3px dashed black";
          introdutionid.style.borderTop = "none";
          introdutionid.style.display = "flex";
          introdutionid.style.margin = "0px 5px 5px 7px";
          introdutionid.style.height = "160px";

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
          nowprice_basesize.style.margin = "3px 3px 3px 4px";
          nowprice_basesize.style.textAlign = "center";
          nowprice_basesize.style.fontSize = "20px";
          nowprice_basesize.style.fontWeight = "600";
          nowprice_basesize.style.alignItems = "center";
          nowprice_basesize.style.justifyContent = "center";
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
          nowprice_basesize.style.display = "none";
        }
      }
    });
  }
});

/*----- 3.腳架點擊列  -----*/
left.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let showinfo = event.target.dataset.showinfo;
  let introdution = event.target;
  //確認我點擊到的位置是否是carbasetripod
  if (showinfo === "cartripod") {
    let introdutionid = event.target.nextElementSibling;
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
          introdutionid.style.width = "calc(100% - 8px)";
          introdutionid.style.flexWrap = "wrap";
          introdutionid.style.border = "3px dashed black";
          introdutionid.style.borderTop = "none";
          introdutionid.style.display = "flex";
          introdutionid.style.margin = "0px 5px 5px 7px";
          introdutionid.style.height = "auto";
          introdutionid.style.justifyContent ="space-between";

          //建議售價標題顯示
          openIntro.style.display = "block";

          //建議售價金額顯示
          nowprice_tripod.style.display = "block";
          nowprice_tripod.style.display = "flex";
          nowprice_tripod.style.width = "100%";
          nowprice_tripod.style.height = "90%";
          nowprice_tripod.style.color = "#000000";
          nowprice_tripod.style.borderRadius = "8px";
          nowprice_tripod.style.padding = "1px";
          nowprice_tripod.style.margin = "3px 3px 3px 4px";
          nowprice_tripod.style.textAlign = "center";
          nowprice_tripod.style.fontSize = "21px";
          nowprice_tripod.style.fontWeight = "600";
          nowprice_tripod.style.alignItems = "center";
          nowprice_tripod.style.justifyContent = "center";
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
        }
      }
    });
  }
});

/*----- 4.踏板樣式點擊列  -----*/
left.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let showinfo = event.target.dataset.showinfo;
  let introdution = event.target;
  //確認我點擊到的位置是否是carbasetripod
  if (showinfo === "carfootpedal") {
    let introdutionid = event.target.nextElementSibling;
    let Price_carfootpedal = document.querySelectorAll(".pricing");

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

          //cartripod勾選位置大小設置
          introdutionid.style.visibility = "visible";
          introdutionid.style.padding = "0px 1px 1px 3px";
          introdutionid.style.width = "calc(100% - 8px)";
          introdutionid.style.flexWrap = "wrap";
          introdutionid.style.border = "3px dashed black";
          introdutionid.style.borderTop = "none";
          introdutionid.style.display = "flex";
          introdutionid.style.margin = "0px 0px 5px 6px";
          introdutionid.style.height = "auto";
          introdutionid.style.justifyContent ="space-between";
          introdutionid.style.flexDirection = 'column';

          //建議售價標題顯示
          openIntro.style.display = "block";

          //建議售價金額顯示
          nowprice_carfootpedal.style.display = "block";
          nowprice_carfootpedal.style.display = "flex";
          nowprice_carfootpedal.style.width = "100%";
          nowprice_carfootpedal.style.height = "30%";
          nowprice_carfootpedal.style.color = "#000000";
          nowprice_carfootpedal.style.borderRadius = "8px";
          nowprice_carfootpedal.style.padding = "1px";
          nowprice_carfootpedal.style.margin = "3px 3px 3px 4px";
          nowprice_carfootpedal.style.textAlign = "center";
          nowprice_carfootpedal.style.fontSize = "21px";
          nowprice_carfootpedal.style.fontWeight = "600";
          nowprice_carfootpedal.style.alignItems = "center";
          nowprice_carfootpedal.style.justifyContent = "center";
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
        }
      }
    });
  }
});

/*----- 5.頭靠子系統點擊列  -----*/
left.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let showinfo = event.target.dataset.showinfo;
  let introdution = event.target;
  //確認我點擊到的位置是否是carbasetripod
  if (showinfo === "carheadsupports") {
    let introdutionid = event.target.nextElementSibling;
    let Price_headsupports = document.querySelectorAll(".pricing");

    Price_headsupports.forEach(function (openIntro) {
      //直接判斷是第幾個.Price
      let nowprice_carheadsupports = Price_headsupports[4].nextElementSibling;

      if (
        openIntro.getAttribute("data-price-carheadsupports") === "carheadsupports" &&
        nowprice_carheadsupports.getAttribute("data-nowprice-carheadsupports") ===
          "nowcarheadsupports"
      ) {
        if (introdution.getAttribute("data-collapse-status") === "0") {
          //把data-collapse-status改成1
          introdution.setAttribute("data-collapse-status", "1");

          //cartripod勾選位置大小設置
          introdutionid.style.visibility = "visible";
          introdutionid.style.padding = "0px 1px 1px 3px";
          introdutionid.style.width = "calc(100% - 8px)";
          introdutionid.style.display = "flex";
          introdutionid.style.flexDirection = "row";
          introdutionid.style.border = "3px dashed black";
          introdutionid.style.borderTop = "none";
          introdutionid.style.margin = "0px 5px 5px 7px";
          introdutionid.style.height = "auto";
          introdutionid.style.justifyContent ="space-between";

          //建議售價標題顯示
          openIntro.style.display = "block";

          //建議售價金額顯示
          nowprice_carheadsupports.style.display = "block";
          nowprice_carheadsupports.style.display = "flex";
          nowprice_carheadsupports.style.width = "100%";
          nowprice_carheadsupports.style.height = "90%";
          nowprice_carheadsupports.style.color = "#000000";
          nowprice_carheadsupports.style.borderRadius = "8px";
          nowprice_carheadsupports.style.padding = "1px";
          nowprice_carheadsupports.style.margin = "3px 3px 3px 4px";
          nowprice_carheadsupports.style.textAlign = "center";
          nowprice_carheadsupports.style.fontSize = "21px";
          nowprice_carheadsupports.style.fontWeight = "600";
          nowprice_carheadsupports.style.alignItems = "center";
          nowprice_carheadsupports.style.justifyContent = "center";
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
        }
      }
    });
  }
});

/*----- 6.軀幹子系統點擊列  -----*/
left.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let showinfo = event.target.dataset.showinfo;
  let introdution = event.target;
  //確認我點擊到的位置是否是carbasetripod
  if (showinfo === "carbacksupports") {
    let introdutionid = event.target.nextElementSibling;
    let Price_backsupports = document.querySelectorAll(".pricing");

    Price_backsupports.forEach(function (openIntro) {
      //直接判斷是第幾個.Price
      let nowprice_backsupports = Price_backsupports[5].nextElementSibling;

      if (
        openIntro.getAttribute("data-price-carbacksupports") === "carbacksupports" &&
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
          introdutionid.style.justifyContent ="space-between";
          introdutionid.style.margin="0px 5px 5px 7px";

          //建議售價標題顯示
          openIntro.style.display = "block";

          //建議售價金額顯示
          nowprice_backsupports.style.display = "block";
          nowprice_backsupports.style.display = "flex";
          nowprice_backsupports.style.width = "100%";
          nowprice_backsupports.style.height = "90%";
          nowprice_backsupports.style.color = "#000000";
          nowprice_backsupports.style.borderRadius = "8px";
          nowprice_backsupports.style.padding = "1px";
          nowprice_backsupports.style.margin = "3px 3px 3px 4px";
          nowprice_backsupports.style.textAlign = "center";
          nowprice_backsupports.style.fontSize = "21px";
          nowprice_backsupports.style.fontWeight = "600";
          nowprice_backsupports.style.alignItems = "center";
          nowprice_backsupports.style.justifyContent = "center";
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
        }
      }
    });
  }
});