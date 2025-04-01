/*-----  11.Spex底座子系統-座墊點擊列  -----*/

/*--- Spex底座子系統-座墊點擊列-圖片箭頭部分   ---*/
document.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let tgimg_11 = event.target;
  let carseat11 = tgimg_11.closest(".Spex_cushion"); // 找到最近的 Spex_cushion
  let imgSpexcushion = event.target.dataset.imgSpexcushion;

  //確認我點擊到的位置是否是car-Spex_cushion的箭頭
  if (carseat11 && carseat11.className.trim() === "Spex_cushion") {
    let introdutionid = carseat11.querySelector(".Spexcushiongroup"); // 在 Spex_cushion 內部找 Spexcushiongroup
    let introdution = carseat11.querySelector(".subtitle"); // 在 Spex_cushion 內部找 subtitle

    if (introdutionid) {
      // 取得 `visibility` 的計算後樣式
      let visibilityValue = window.getComputedStyle(introdutionid).visibility;

      if (imgSpexcushion === "SpexcushionImg") {
        if (visibilityValue === "hidden") {
          let Price_Spexcushion = document.querySelectorAll(".pricing");

          Price_Spexcushion.forEach(function (openIntro) {
            let Spexcushion = Price_Spexcushion[10];
            //直接判斷是第幾個.Price
            let nowprice_Spexcushion = Price_Spexcushion[10].nextElementSibling;

            if (
              openIntro.getAttribute("data-price-Spexcushion") ===
                "Spexcushion" &&
              nowprice_Spexcushion.getAttribute("data-nowprice-Spexcushion") ===
                "nowSpexcushion"
            ) {
              if (introdution.getAttribute("data-collapse-status") === "0") {
                //把data-collapse-status改成1
                introdution.setAttribute("data-collapse-status", "1");

                //carSpexcushion勾選位置大小設置
                introdutionid.style.visibility = "visible";
                introdutionid.style.padding = "0px 1px 1px 3px";
                introdutionid.style.width = "calc(100% - 22px)";
                introdutionid.style.display = "flex";
                introdutionid.style.flexDirection = "row";
                introdutionid.style.border = "3px dashed black";
                introdutionid.style.borderTop = "none";
                introdutionid.style.margin = "0 0 0 7px";
                introdutionid.style.height = "auto";
                introdutionid.style.justifyContent = "space-between";

                //建議售價標題顯示
                openIntro.style.display = "block";

                //建議售價金額顯示
                nowprice_Spexcushion.style.display = "block";
                nowprice_Spexcushion.style.display = "flex";
                nowprice_Spexcushion.style.width = "95%";
                nowprice_Spexcushion.style.height = "90%";
                nowprice_Spexcushion.style.color = "#000000";
                nowprice_Spexcushion.style.borderRadius = "8px";
                nowprice_Spexcushion.style.padding = "1px";
                nowprice_Spexcushion.style.margin = "3px 3px 3px 2px";
                nowprice_Spexcushion.style.textAlign = "center";
                nowprice_Spexcushion.style.fontSize = "20px";
                nowprice_Spexcushion.style.fontWeight = "600";
                nowprice_Spexcushion.style.alignItems = "center";
                nowprice_Spexcushion.style.justifyContent = "center";

                if (window.matchMedia("(max-width: 650px)").matches) {
                  nowprice_Spexcushion.style.fontSize = "15px";
                  introdutionid.style.width = "calc(100% - 9px)";
                  Spexcushion.style.padding = "5px";
                  Spexcushion.style.margin = "3px 0px 3px 1px";
                }
              }
            }
          });
        } else {
          let Price_Spexcushion = document.querySelectorAll(".pricing");

          Price_Spexcushion.forEach(function (openIntro) {
            let nowprice_Spexcushion = Price_Spexcushion[10].nextElementSibling;

            //把data-collapse-status改成0
            introdution.setAttribute("data-collapse-status", "0");

            //建議售價標題隱藏
            introdutionid.style.visibility = "hidden";
            introdutionid.style.height = "0";
            introdutionid.style.padding = "0";
            introdutionid.style.border = "0px dashed black";
            introdutionid.style.margin = "0";

            if (
              openIntro.getAttribute("data-price-carSpexcushion") ===
              "carSpexcushion"
            ) {
              //建議售價金額隱藏
              openIntro.style.display = "none";
            }
            nowprice_Spexcushion.style.display = "none";
          });
        }
      }
    }
  }
});

/*---  Spex底座子系統-座墊系統點擊列 -subtitle部分  ---*/
let Spex_cushion = document.querySelector(".Spex_cushion");
Spex_cushion.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let showinfo = event.target.dataset.showinfo;
  let introdution = event.target;
  //確認我點擊到的位置是否是carbasetripod
  if (showinfo === "Spexcushion") {
    let introdutionid = event.target.nextElementSibling;
    let Price_Spex_cushion = document.querySelectorAll(".pricing");
    let Spex_cushionimg = Spex_cushion.querySelector(".target_img"); // 找到最近的 .target_img
    let img = Spex_cushionimg.querySelector("img");

    Price_Spex_cushion.forEach(function (openIntro) {
      let Spexcushion = Price_Spex_cushion[10];
      //直接判斷是第幾個.Price
      let nowprice_Spexcushion = Price_Spex_cushion[10].nextElementSibling;

      if (
        openIntro.getAttribute("data-price-Spexcushion") === "Spexcushion" &&
        nowprice_Spexcushion.getAttribute("data-nowprice-Spexcushion") ===
          "nowSpexcushion"
      ) {
        if (introdution.getAttribute("data-collapse-status") === "0") {
          //把data-collapse-status改成1
          introdution.setAttribute("data-collapse-status", "1");

          //carSpexcushion勾選位置大小設置
          introdutionid.style.visibility = "visible";
          introdutionid.style.padding = "0px 1px 1px 3px";
          introdutionid.style.width = "calc(100% - 22px)";
          introdutionid.style.display = "flex";
          introdutionid.style.flexDirection = "row";
          introdutionid.style.border = "3px dashed black";
          introdutionid.style.borderTop = "none";
          introdutionid.style.margin = "0 0 0 7px";
          introdutionid.style.height = "auto";
          introdutionid.style.justifyContent = "space-between";

          //建議售價標題顯示
          openIntro.style.display = "block";

          //建議售價金額顯示
          nowprice_Spexcushion.style.display = "block";
          nowprice_Spexcushion.style.display = "flex";
          nowprice_Spexcushion.style.width = "95%";
          nowprice_Spexcushion.style.height = "90%";
          nowprice_Spexcushion.style.color = "#000000";
          nowprice_Spexcushion.style.borderRadius = "8px";
          nowprice_Spexcushion.style.padding = "1px";
          nowprice_Spexcushion.style.margin = "3px 3px 3px 2px";
          nowprice_Spexcushion.style.textAlign = "center";
          nowprice_Spexcushion.style.fontSize = "20px";
          nowprice_Spexcushion.style.fontWeight = "600";
          nowprice_Spexcushion.style.alignItems = "center";
          nowprice_Spexcushion.style.justifyContent = "center";

          if (img) {
            img.setAttribute("src", "./img/black triangle after.png");
          }

          if (window.matchMedia("(max-width: 650px)").matches) {
            nowprice_Spexcushion.style.fontSize = "15px";
            introdutionid.style.width = "calc(100% - 9px)";
            Spexcushion.style.padding = "5px";
            Spexcushion.style.margin = "3px 0px 3px 1px";
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
          nowprice_Spexcushion.style.display = "none";

          if (img) {
            img.setAttribute("src", "./img/black triangle.png");
          }
        }
      }
    });
  }
});

let CushionwidthOptions = [
  { value: "option1", text: "寬", selected: true },
  { value: "option2", text: "14”" },
  { value: "option3", text: "15”" },
  { value: "option4", text: "16”" },
  { value: "option5", text: "17”" },
  { value: "option6", text: "18”" },
  { value: "option7", text: "19”" },
];

let CushionheightOptions = [
  { value: "optionA", text: "長", selected: true },
  { value: "optionB", text: "14”" },
  { value: "optionC", text: "16”" },
  { value: "optionD", text: "17”" },
  { value: "optionE", text: "18”" },
  { value: "optionF", text: "20”" },
];
function CushionSizeSelect(selectElement, options) {
  selectElement.innerHTML = ""; // 清空現有內容
  options.forEach((option) => {
    let opt = document.createElement("option");
    opt.value = option.value;
    opt.textContent = option.text;
    if (option.selected) {
      opt.selected = true;
    }
    selectElement.appendChild(opt);
  });
}

document
  .querySelectorAll('input[name="car_SpexCushion"]')
  .forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      document
        .querySelectorAll('input[name="car_SpexCushion"]')
        .forEach((otherCheckbox) => {
          if (otherCheckbox !== this) {
            otherCheckbox.checked = false;
          }
        });
      let CushionwidthSelect = document.querySelector(".Spexcushion_Width");
      let CushionheightSelect = document.querySelector(".Spexcushion_Heigh");
      if (this.dataset.item === "Vigour_Std 標準型座墊") {
        CushionSizeSelect(CushionwidthSelect, CushionwidthOptions);
        CushionSizeSelect(CushionheightSelect, CushionheightOptions);
      }
    });
  });

document.addEventListener("DOMContentLoaded", function () {
  let CushionwidthSelect = document.querySelector(".Spexcushion_Width");
  let CushionheightSelect = document.querySelector(".Spexcushion_Heigh");

  // 預設讓 heightSelect 無法選擇
  CushionheightSelect.disabled = true;

  CushionwidthSelect.addEventListener("change", function () {
    if (CushionwidthSelect.value) {
      CushionheightSelect.disabled = false; // 當有選擇時，解鎖 CushionheightSelect
    } else {
      CushionheightSelect.disabled = true; // 當未選擇時，鎖住 CushionheightSelect
    }
    if (CushionwidthSelect.value === "option1") {
      CushionSizeSelect(CushionwidthSelect, CushionwidthOptions);
      CushionSizeSelect(CushionheightSelect, CushionheightOptions);
      CushionheightSelect.disabled = true; // 當未選擇時，鎖住 CushionheightSelect
    }

    if (CushionwidthSelect.value === "option2") {
      let filteredHeightOptions = CushionheightOptions;
      filteredHeightOptions = CushionheightOptions.filter((option) =>
        ["optionA", "optionB", "optionC"].includes(option.value)
      );
      CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
    }
  });
});
