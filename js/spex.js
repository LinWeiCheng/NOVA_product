/*-----  11.Spex底座子系統-座墊點擊列  -----*/
//region
/*--- Spex底座子系統-座墊點擊列-圖片箭頭部分   ---*/
//region
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
                nowprice_Spexcushion.style.fontSize = "17px";
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
              openIntro.getAttribute("data-price-Spexcushion") === "Spexcushion"
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
//endregion

/*---  Spex底座子系統-座墊點擊列 -subtitle部分  ---*/
//region
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
          nowprice_Spexcushion.style.fontSize = "17px";
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
//endregion

//region --- 座墊選擇在這裡處理 ---

//region ---Vigour_Std Selected---
let Vigour_StdwidthOptions = [
  { value: "option1", text: "寬", selected: true },
  { value: "option2", text: "14”" },
  { value: "option3", text: "15”" },
  { value: "option4", text: "16”" },
  { value: "option5", text: "17”" },
  { value: "option6", text: "18”" },
  { value: "option7", text: "19”" },
];

let Vigour_StdheightOptions = [
  { value: "optionA", text: "長", selected: true },
  { value: "optionB", text: "14”" },
  { value: "optionC", text: "16”" },
  { value: "optionD", text: "17”" },
  { value: "optionE", text: "18”" },
  { value: "optionF", text: "20”" },
];
//endregion

//region ---Vigour_High Selected---
let Vigour_HighwidthOptions = [
  { value: "option1", text: "寬", selected: true },
  { value: "option2", text: "14”" },
  { value: "option3", text: "15”" },
  { value: "option4", text: "16”" },
  { value: "option5", text: "17”" },
  { value: "option6", text: "18”" },
  { value: "option7", text: "19”" },
];

let Vigour_HighheightOptions = [
  { value: "optionA", text: "長", selected: true },
  { value: "optionB", text: "14”" },
  { value: "optionC", text: "16”" },
  { value: "optionD", text: "17”" },
  { value: "optionE", text: "18”" },
  { value: "optionF", text: "20”" },
];
//endregion

//region ---Spex_Standard Selected---
let Spex_StandardwidthOptions = [
  { value: "option1", text: "寬", selected: true },
  { value: "option2", text: "14”" },
  { value: "option3", text: "15”" },
  { value: "option4", text: "16”" },
  { value: "option5", text: "17”" },
  { value: "option6", text: "18”" },
  { value: "option7", text: "19”" },
  { value: "option8", text: "20”" },
];

let Spex_StandardheightOptions = [
  { value: "optionA", text: "長", selected: true },
  { value: "optionB", text: "14”" },
  { value: "optionC", text: "16”" },
  { value: "optionD", text: "17”" },
  { value: "optionE", text: "18”" },
  { value: "optionF", text: "20”" },
  { value: "optionG", text: "22”" },
];
//endregion

//region ---Spex_High Selected---
let Spex_HighwidthOptions = [
  { value: "option1", text: "寬", selected: true },
  { value: "option2", text: "10”" },
  { value: "option3", text: "11”" },
  { value: "option4", text: "12”" },
  { value: "option5", text: "13”" },
  { value: "option6", text: "14”" },
  { value: "option7", text: "15”" },
  { value: "option8", text: "16”" },
  { value: "option9", text: "17”" },
  { value: "option10", text: "18”" },
  { value: "option11", text: "19”" },
  { value: "option12", text: "20”" },
];

let Spex_HighheightOptions = [
  { value: "optionA", text: "長", selected: true },
  { value: "optionB", text: "10”" },
  { value: "optionC", text: "12”" },
  { value: "optionD", text: "14”" },
  { value: "optionE", text: "16”" },
  { value: "optionF", text: "17”" },
  { value: "optionG", text: "18”" },
  { value: "optionH", text: "20”" },
  { value: "optionI", text: "22”" },
];
//endregion

//region ---Spex_SuperHigh Selected---
let Spex_SuperHighwidthOptions = [
  { value: "option1", text: "寬", selected: true },
  { value: "option2", text: "10”" },
  { value: "option3", text: "11”" },
  { value: "option4", text: "12”" },
  { value: "option5", text: "13”" },
  { value: "option6", text: "14”" },
  { value: "option7", text: "15”" },
  { value: "option8", text: "16”" },
  { value: "option9", text: "17”" },
  { value: "option10", text: "18”" },
  { value: "option11", text: "19”" },
  { value: "option12", text: "20”" },
];

let Spex_SuperHighheightOptions = [
  { value: "optionA", text: "長", selected: true },
  { value: "optionB", text: "10”" },
  { value: "optionC", text: "12”" },
  { value: "optionD", text: "14”" },
  { value: "optionE", text: "16”" },
  { value: "optionF", text: "17”" },
  { value: "optionG", text: "18”" },
  { value: "optionH", text: "20”" },
  { value: "optionI", text: "22”" },
];
//endregion

//region --- Spex_Flex Selected---
let Spex_FlexwidthOptions = [
  { value: "option1", text: "寬", selected: true },
  { value: "option2", text: "12”" },
  { value: "option3", text: "13”" },
  { value: "option4", text: "14”" },
  { value: "option5", text: "15”" },
  { value: "option6", text: "16”" },
  { value: "option7", text: "17”" },
  { value: "option8", text: "18”" },
];

let Spex_FlexheightOptions = [
  { value: "optionA", text: "長", selected: true },
  { value: "optionB", text: "14”" },
  { value: "optionC", text: "16”" },
  { value: "optionD", text: "18”" },
  { value: "optionE", text: "20”" },
];
//endregion

//region --- Spex_Flex_High Selected---
let Spex_Flex_HighwidthOptions = [
  { value: "option1", text: "寬", selected: true },
  { value: "option2", text: "12”" },
  { value: "option3", text: "13”" },
  { value: "option4", text: "14”" },
  { value: "option5", text: "15”" },
  { value: "option6", text: "16”" },
  { value: "option7", text: "17”" },
  { value: "option8", text: "18”" },
];

let Spex_Flex_HighheightOptions = [
  { value: "optionA", text: "長", selected: true },
  { value: "optionB", text: "14”" },
  { value: "optionC", text: "16”" },
  { value: "optionD", text: "18”" },
  { value: "optionE", text: "20”" },
];
//endregion

//region --- Spex_Flex_SuperHigh Selected---
let Spex_Flex_SuperHighwidthOptions = [
  { value: "option1", text: "寬", selected: true },
  { value: "option2", text: "12”" },
  { value: "option3", text: "13”" },
  { value: "option4", text: "14”" },
  { value: "option5", text: "15”" },
  { value: "option6", text: "16”" },
  { value: "option7", text: "17”" },
  { value: "option8", text: "18”" },
];

let Spex_Flex_SuperHighheightOptions = [
  { value: "optionA", text: "長", selected: true },
  { value: "optionB", text: "14”" },
  { value: "optionC", text: "16”" },
  { value: "optionD", text: "18”" },
  { value: "optionE", text: "20”" },
];
//endregion

//region --- Color_Selected ---
let ColorSelectOptions = [
  { value: "optiona", text: "黑色", color: "#000000", selected: true },
  { value: "optionb", text: "紅色", color: "#dd3333" },
  { value: "optionc", text: "藍色", color: "#6eb1c9" },
  { value: "optiond", text: "紫色", color: "#8224e3" },
  { value: "optione", text: "灰色", color: "#999999" },
  { value: "optionf", text: "黃色", color: "#eeee22" },
  { value: "optiong", text: "橘色", color: "#dd9933" },
  { value: "optionh", text: "粉色", color: "#f925d6" },
  { value: "optioni", text: "綠色", color: "#81d742" }, // 改掉重複的optionh
];
//endregion

//region --- Spex座墊的"寬"、"長"的選項會進入這裡做篩選 ---
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
//endregion

//region --- 產品顏色選擇在這裡做 ---
function ProductColorSelect(selectElement, options) {
  selectElement.innerHTML = "";
  options.forEach((option) => {
    let opt = document.createElement("option");
    opt.value = option.value;
    opt.textContent = option.text;
    opt.style.backgroundColor = option.color; // 設定每個選項背景色
    opt.style.color = "white"; //  把字體設成白色
    if (option.selected) {
      opt.selected = true;
      selectElement.style.backgroundColor = option.color; // 初始選中時也改背景色
      selectElement.style.color = "white"; //初始選擇也改字體顏色
    }
    selectElement.appendChild(opt);
  });
}

let CushioncolorSelect = document.querySelector(".Spexcushion_colorsel");

CushioncolorSelect.addEventListener("change", function () {
  const selectedOption = this.options[this.selectedIndex];
  this.style.backgroundColor = selectedOption.style.backgroundColor;
  this.style.color = "white"; //更新字體顏色
});
//endregion

//確定勾選的是哪個Spex座墊並給予"寬"及"長"，且不會重複勾選選項
//region
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

      if (nowprice_SpexCushion.textContent !== "0元") {
        nowprice_SpexCushion.textContent = "0元";
      }
      let CushionwidthSelect = document.querySelector(".Spexcushion_Width");
      let CushionheightSelect = document.querySelector(".Spexcushion_Heigh");
      let CushioncolorSelect = document.querySelector(".Spexcushion_colorsel");

      //確認是選擇"Vigour_Std 標準型座墊"
      if (this.dataset.item === "Vigour_Std 標準型座墊") {
        //確認有勾選坐墊後開啟
        CushionwidthSelect.disabled = false;
        CushionSizeSelect(CushionwidthSelect, Vigour_StdwidthOptions);
        CushionSizeSelect(CushionheightSelect, Vigour_StdheightOptions);
        ProductColorSelect(CushioncolorSelect, ColorSelectOptions);
      }

      //確認是選擇"Vigour_High 加深型座墊"
      if (this.dataset.item === "Vigour_High 加深型座墊") {
        //確認有勾選坐墊後開啟
        CushionwidthSelect.disabled = false;
        CushionSizeSelect(CushionwidthSelect, Vigour_HighwidthOptions);
        CushionSizeSelect(CushionheightSelect, Vigour_HighheightOptions);
        ProductColorSelect(CushioncolorSelect, ColorSelectOptions);
      }

      //確認是選擇"Vigour_High 加深型座墊"
      if (this.dataset.item === "Spex_Standard 標準廓型座墊") {
        //確認有勾選坐墊後開啟
        CushionwidthSelect.disabled = false;
        CushionSizeSelect(CushionwidthSelect, Spex_StandardwidthOptions);
        CushionSizeSelect(CushionheightSelect, Spex_StandardheightOptions);
        ProductColorSelect(CushioncolorSelect, ColorSelectOptions);
      }

      //確認是選擇"Spex_High 加深廓型座墊"
      if (this.dataset.item === "Spex_High 加深廓型座墊") {
        //確認有勾選坐墊後開啟
        CushionwidthSelect.disabled = false;
        CushionSizeSelect(CushionwidthSelect, Spex_HighwidthOptions);
        CushionSizeSelect(CushionheightSelect, Spex_HighheightOptions);
        ProductColorSelect(CushioncolorSelect, ColorSelectOptions);
      }

      //確認是選擇"Spex_SuperHigh 超加深廓型座墊"
      if (this.dataset.item === "Spex_SuperHigh 超加深廓型座墊") {
        //確認有勾選坐墊後開啟
        CushionwidthSelect.disabled = false;
        CushionSizeSelect(CushionwidthSelect, Spex_SuperHighwidthOptions);
        CushionSizeSelect(CushionheightSelect, Spex_SuperHighheightOptions);
        ProductColorSelect(CushioncolorSelect, ColorSelectOptions);
      }

      //確認是選擇"Spex_Flex 標準型座墊"
      if (this.dataset.item === "Spex_Flex 標準型座墊") {
        //確認有勾選坐墊後開啟
        CushionwidthSelect.disabled = false;
        CushionSizeSelect(CushionwidthSelect, Spex_FlexwidthOptions);
        CushionSizeSelect(CushionheightSelect, Spex_FlexheightOptions);
        ProductColorSelect(CushioncolorSelect, ColorSelectOptions);
      }

      //確認是選擇"Spex_Flex 加深型座墊"
      if (this.dataset.item === "Spex_Flex 加深型座墊") {
        //確認有勾選坐墊後開啟
        CushionwidthSelect.disabled = false;
        CushionSizeSelect(CushionwidthSelect, Spex_FlexwidthOptions);
        CushionSizeSelect(CushionheightSelect, Spex_FlexheightOptions);
        ProductColorSelect(CushioncolorSelect, ColorSelectOptions);
      }

      //確認是選擇"Spex_Flex_SuperHigh 超加深型座墊"
      if (this.dataset.item === "Spex_Flex 超加深型座墊") {
        //確認有勾選坐墊後開啟
        CushionwidthSelect.disabled = false;
        CushionSizeSelect(CushionwidthSelect, Spex_Flex_SuperHighwidthOptions);
        CushionSizeSelect(
          CushionheightSelect,
          Spex_Flex_SuperHighheightOptions
        );
        ProductColorSelect(CushioncolorSelect, ColorSelectOptions);
      } else if (CushionheightSelect.disabled === false) {
        CushionheightSelect.disabled = true;
        CushioncolorSelect.disabled = true;
      }
    });
  });
//endregion

//region --- 因不同的座墊的"寬"，會有不同"長"的選擇 ---
document.addEventListener("DOMContentLoaded", function () {
  let CushionwidthSelect = document.querySelector(".Spexcushion_Width");
  let CushionheightSelect = document.querySelector(".Spexcushion_Heigh");
  let CushioncolorSelect = document.querySelector(".Spexcushion_colorsel");
  let Price = document.querySelectorAll(".pricing");
  let nowprice_SpexCushion = Price[10].nextElementSibling;

  //剛開啟時讓colorSelect無法選擇
  CushioncolorSelect.disabled = true;
  //剛開啟時讓widthSelect無法選擇
  CushionwidthSelect.disabled = true;
  // 預設讓 heightSelect 無法選擇
  CushionheightSelect.disabled = true;

  CushionwidthSelect.addEventListener("change", function () {
    if (CushionwidthSelect.value) {
      CushionheightSelect.disabled = false; // 當有選擇時，解鎖heightSelect
      CushioncolorSelect.disabled = false;
    } else {
      CushionheightSelect.disabled = true; // 當未選擇時，鎖住heightSelect
      CushioncolorSelect.disabled = true;
    }

    if (nowprice_SpexCushion.textContent) {
      nowprice_SpexCushion.textContent = "0元";
    }
    // 找到 checkbox
    let VigourStdCheckbox = document.querySelector("#Spex_Vigour_Std");
    let VigourHighCheckbox = document.querySelector("#Spex_Vigour_High");
    let SpexStandardCheckbox = document.querySelector("#Spex_Standard");
    let SpexHighCheckbox = document.querySelector("#Spex_High");
    let Spex_SuperHighCheckbox = document.querySelector("#Spex_SuperHigh");
    let Spex_FlexCheckbox = document.querySelector("#Spex_Flex");
    let Spex_Flex_HighCheckbox = document.querySelector("#Spex_Flex_High");
    let Spex_Flex_SuperHighCheckbox = document.querySelector(
      "#Spex_Flex_SuperHigh"
    );

    //region ---Vigour_std 標準型座墊---
    if (VigourStdCheckbox.checked) {
      //當選擇在"寬"時則將"長"的欄位鎖住，或是當選擇完其他後又不需要產品時，勾選"寬"可鎖住"長"
      if (CushionwidthSelect.value === "option1") {
        CushionSizeSelect(CushionwidthSelect, Vigour_StdwidthOptions);
        CushionSizeSelect(CushionheightSelect, Vigour_StdheightOptions);
        CushionheightSelect.disabled = true; // 當未選擇時，鎖住 Vigour_StdheightSelect
        CushioncolorSelect.disabled = true;
      }

      //當選擇是寬"14”"時，"長"只會有14”、16”
      if (CushionwidthSelect.value === "option2") {
        let filteredHeightOptions = Vigour_StdheightOptions;
        filteredHeightOptions = Vigour_StdheightOptions.filter((option) =>
          ["optionA", "optionB", "optionC"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"15”"時，"長"只會有14”、16”
      if (CushionwidthSelect.value === "option3") {
        let filteredHeightOptions = Vigour_StdheightOptions;
        filteredHeightOptions = Vigour_StdheightOptions.filter((option) =>
          ["optionA", "optionB", "optionC"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"16”"時，"長"只會有16”、18”
      if (CushionwidthSelect.value === "option4") {
        let filteredHeightOptions = Vigour_StdheightOptions;
        filteredHeightOptions = Vigour_StdheightOptions.filter((option) =>
          ["optionA", "optionC", "optionE"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"17”"時，"長"只會有17”、18”
      if (CushionwidthSelect.value === "option5") {
        let filteredHeightOptions = Vigour_StdheightOptions;
        filteredHeightOptions = Vigour_StdheightOptions.filter((option) =>
          ["optionA", "optionD", "optionE"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"18”"時，"長"只會有18”、20”
      if (CushionwidthSelect.value === "option6") {
        let filteredHeightOptions = Vigour_StdheightOptions;
        filteredHeightOptions = Vigour_StdheightOptions.filter((option) =>
          ["optionA", "optionE", "optionF"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"19”"時，"長"只會有18”、20”
      if (CushionwidthSelect.value === "option7") {
        let filteredHeightOptions = Vigour_StdheightOptions;
        filteredHeightOptions = Vigour_StdheightOptions.filter((option) =>
          ["optionA", "optionE", "optionF"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }
    }
    //endregion

    //region ---Vigour_High 加深型座墊---
    if (VigourHighCheckbox.checked) {
      //當選擇在"寬"時則將"長"的欄位鎖住，或是當選擇完其他後又不需要產品時，勾選"寬"可鎖住"長"
      if (CushionwidthSelect.value === "option1") {
        CushionSizeSelect(CushionwidthSelect, Vigour_HighwidthOptions);
        CushionSizeSelect(CushionheightSelect, Vigour_HighheightOptions);
        CushionheightSelect.disabled = true; // 當未選擇時，鎖住 Vigour_HighheightSelect
        CushioncolorSelect.disabled = true;
      }

      //當選擇是寬"14”"時，"長"只會有14”、16”
      if (CushionwidthSelect.value === "option2") {
        let filteredHeightOptions = Vigour_HighheightOptions;
        filteredHeightOptions = Vigour_HighheightOptions.filter((option) =>
          ["optionA", "optionB", "optionC"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"15”"時，"長"只會有14”、16”
      if (CushionwidthSelect.value === "option3") {
        let filteredHeightOptions = Vigour_HighheightOptions;
        filteredHeightOptions = Vigour_HighheightOptions.filter((option) =>
          ["optionA", "optionB", "optionC"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"16”"時，"長"只會有16”、18”
      if (CushionwidthSelect.value === "option4") {
        let filteredHeightOptions = Vigour_HighheightOptions;
        filteredHeightOptions = Vigour_HighheightOptions.filter((option) =>
          ["optionA", "optionC", "optionE"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"17”"時，"長"只會有17”、18”
      if (CushionwidthSelect.value === "option5") {
        let filteredHeightOptions = Vigour_HighheightOptions;
        filteredHeightOptions = Vigour_HighheightOptions.filter((option) =>
          ["optionA", "optionD", "optionE"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"18”"時，"長"只會有18”、20”
      if (CushionwidthSelect.value === "option6") {
        let filteredHeightOptions = Vigour_HighheightOptions;
        filteredHeightOptions = Vigour_HighheightOptions.filter((option) =>
          ["optionA", "optionE", "optionF"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"19”"時，"長"只會有18”、20”
      if (CushionwidthSelect.value === "option7") {
        let filteredHeightOptions = Vigour_HighheightOptions;
        filteredHeightOptions = Vigour_HighheightOptions.filter((option) =>
          ["optionA", "optionE", "optionF"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }
    }
    //endregion

    //region --- Spex_Standard 標準廓型座墊 ---
    if (SpexStandardCheckbox.checked) {
      //當選擇在"寬"時則將"長"的欄位鎖住，或是當選擇完其他後又不需要產品時，勾選"寬"可鎖住"長"
      if (CushionwidthSelect.value === "option1") {
        CushionSizeSelect(CushionwidthSelect, Spex_StandardwidthOptions);
        CushionSizeSelect(CushionheightSelect, Spex_StandardheightOptions);
        CushionheightSelect.disabled = true; // 當未選擇時，鎖住Spex_StandardheightSelect
        CushioncolorSelect.disabled = true;
      }

      //當選擇是寬"14”"時，"長"只會有14”、16”
      if (CushionwidthSelect.value === "option2") {
        let filteredHeightOptions = Spex_StandardheightOptions;
        filteredHeightOptions = Spex_StandardheightOptions.filter((option) =>
          ["optionA", "optionB", "optionC"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"15”"時，"長"只會有14”、16”
      if (CushionwidthSelect.value === "option3") {
        let filteredHeightOptions = Spex_StandardheightOptions;
        filteredHeightOptions = Spex_StandardheightOptions.filter((option) =>
          ["optionA", "optionB", "optionC"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"16”"時，"長"只會有16”、18”
      if (CushionwidthSelect.value === "option4") {
        let filteredHeightOptions = Spex_StandardheightOptions;
        filteredHeightOptions = Spex_StandardheightOptions.filter((option) =>
          ["optionA", "optionC", "optionE"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"17”"時，"長"只會有17”、18”
      if (CushionwidthSelect.value === "option5") {
        let filteredHeightOptions = Spex_StandardheightOptions;
        filteredHeightOptions = Spex_StandardheightOptions.filter((option) =>
          ["optionA", "optionD", "optionE"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"18”"時，"長"只會有18”、20”
      if (CushionwidthSelect.value === "option6") {
        let filteredHeightOptions = Spex_StandardheightOptions;
        filteredHeightOptions = Spex_StandardheightOptions.filter((option) =>
          ["optionA", "optionE", "optionF"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"19”"時，"長"只會有18”、20”
      if (CushionwidthSelect.value === "option7") {
        let filteredHeightOptions = Spex_StandardheightOptions;
        filteredHeightOptions = Spex_StandardheightOptions.filter((option) =>
          ["optionA", "optionE", "optionF"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"20”"時，"長"只會有20”、22”
      if (CushionwidthSelect.value === "option8") {
        let filteredHeightOptions = Spex_StandardheightOptions;
        filteredHeightOptions = Spex_StandardheightOptions.filter((option) =>
          ["optionA", "optionF", "optionG"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }
    }
    //endregion

    //region --- Spex_High 加深廓型座墊 ---
    if (SpexHighCheckbox.checked) {
      //當選擇在"寬"時則將"長"的欄位鎖住，或是當選擇完其他後又不需要產品時，勾選"寬"可鎖住"長"
      if (CushionwidthSelect.value === "option1") {
        CushionSizeSelect(CushionwidthSelect, Spex_HighwidthOptions);
        CushionSizeSelect(CushionheightSelect, Spex_HighheightOptions);
        CushionheightSelect.disabled = true; // 當未選擇時，鎖住Spex_HighheightSelect
        CushioncolorSelect.disabled = true;
      }

      //當選擇是寬"10”"時，"長"只會有10”、12”
      if (CushionwidthSelect.value === "option2") {
        let filteredHeightOptions = Spex_HighheightOptions;
        filteredHeightOptions = Spex_HighheightOptions.filter((option) =>
          ["optionA", "optionB", "optionC"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"11”"時，"長"只會有10”、12”
      if (CushionwidthSelect.value === "option3") {
        let filteredHeightOptions = Spex_HighheightOptions;
        filteredHeightOptions = Spex_HighheightOptions.filter((option) =>
          ["optionA", "optionB", "optionC"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"12”"時，"長"只會有12”、14”
      if (CushionwidthSelect.value === "option4") {
        let filteredHeightOptions = Spex_HighheightOptions;
        filteredHeightOptions = Spex_HighheightOptions.filter((option) =>
          ["optionA", "optionC", "optionD"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"13”"時，"長"只會有12”、14”
      if (CushionwidthSelect.value === "option5") {
        let filteredHeightOptions = Spex_HighheightOptions;
        filteredHeightOptions = Spex_HighheightOptions.filter((option) =>
          ["optionA", "optionC", "optionD"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"14”"時，"長"只會有14”、16”、18”
      if (CushionwidthSelect.value === "option6") {
        let filteredHeightOptions = Spex_HighheightOptions;
        filteredHeightOptions = Spex_HighheightOptions.filter((option) =>
          ["optionA", "optionD", "optionE", "optionG"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"15”"時，"長"只會有14”、16”
      if (CushionwidthSelect.value === "option7") {
        let filteredHeightOptions = Spex_HighheightOptions;
        filteredHeightOptions = Spex_HighheightOptions.filter((option) =>
          ["optionA", "optionD", "optionE"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"16”"時，"長"只會有16”、18”
      if (CushionwidthSelect.value === "option8") {
        let filteredHeightOptions = Spex_HighheightOptions;
        filteredHeightOptions = Spex_HighheightOptions.filter((option) =>
          ["optionA", "optionE", "optionG"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"17”"時，"長"只會有17”、18”
      if (CushionwidthSelect.value === "option9") {
        let filteredHeightOptions = Spex_HighheightOptions;
        filteredHeightOptions = Spex_HighheightOptions.filter((option) =>
          ["optionA", "optionF", "optionG"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"18”"時，"長"只會有18”、20”
      if (CushionwidthSelect.value === "option10") {
        let filteredHeightOptions = Spex_HighheightOptions;
        filteredHeightOptions = Spex_HighheightOptions.filter((option) =>
          ["optionA", "optionG", "optionH"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"19”"時，"長"只會有18”、20”
      if (CushionwidthSelect.value === "option11") {
        let filteredHeightOptions = Spex_HighheightOptions;
        filteredHeightOptions = Spex_HighheightOptions.filter((option) =>
          ["optionA", "optionG", "optionH"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"20”"時，"長"只會有18”、20”
      if (CushionwidthSelect.value === "option12") {
        let filteredHeightOptions = Spex_HighheightOptions;
        filteredHeightOptions = Spex_HighheightOptions.filter((option) =>
          ["optionA", "optionH", "optionI"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }
    }
    //endregion

    //region --- Spex_SuperHigh 加深廓型座墊 ---
    if (Spex_SuperHighCheckbox.checked) {
      //當選擇在"寬"時則將"長"的欄位鎖住，或是當選擇完其他後又不需要產品時，勾選"寬"可鎖住"長"
      if (CushionwidthSelect.value === "option1") {
        CushionSizeSelect(CushionwidthSelect, Spex_SuperHighwidthOptions);
        CushionSizeSelect(CushionheightSelect, Spex_SuperHighheightOptions);
        CushionheightSelect.disabled = true; // 當未選擇時，鎖住Spex_HighheightSelect
        CushioncolorSelect.disabled = true;
      }

      //當選擇是寬"10”"時，"長"只會有10”、12”
      if (CushionwidthSelect.value === "option2") {
        let filteredHeightOptions = Spex_SuperHighheightOptions;
        filteredHeightOptions = Spex_SuperHighheightOptions.filter((option) =>
          ["optionA", "optionB", "optionC"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"11”"時，"長"只會有10”、12”
      if (CushionwidthSelect.value === "option3") {
        let filteredHeightOptions = Spex_SuperHighheightOptions;
        filteredHeightOptions = Spex_SuperHighheightOptions.filter((option) =>
          ["optionA", "optionB", "optionC"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"12”"時，"長"只會有12”、14”
      if (CushionwidthSelect.value === "option4") {
        let filteredHeightOptions = Spex_SuperHighheightOptions;
        filteredHeightOptions = Spex_SuperHighheightOptions.filter((option) =>
          ["optionA", "optionC", "optionD"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"13”"時，"長"只會有12”、14”
      if (CushionwidthSelect.value === "option5") {
        let filteredHeightOptions = Spex_SuperHighheightOptions;
        filteredHeightOptions = Spex_SuperHighheightOptions.filter((option) =>
          ["optionA", "optionC", "optionD"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"14”"時，"長"只會有14”、16”、18”
      if (CushionwidthSelect.value === "option6") {
        let filteredHeightOptions = Spex_SuperHighheightOptions;
        filteredHeightOptions = Spex_SuperHighheightOptions.filter((option) =>
          ["optionA", "optionD", "optionE", "optionG"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"15”"時，"長"只會有14”、16”
      if (CushionwidthSelect.value === "option7") {
        let filteredHeightOptions = Spex_SuperHighheightOptions;
        filteredHeightOptions = Spex_SuperHighheightOptions.filter((option) =>
          ["optionA", "optionD", "optionE"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"16”"時，"長"只會有16”、18”、20”
      if (CushionwidthSelect.value === "option8") {
        let filteredHeightOptions = Spex_SuperHighheightOptions;
        filteredHeightOptions = Spex_SuperHighheightOptions.filter((option) =>
          ["optionA", "optionE", "optionG", "optionH"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"17”"時，"長"只會有17”、18”
      if (CushionwidthSelect.value === "option9") {
        let filteredHeightOptions = Spex_SuperHighheightOptions;
        filteredHeightOptions = Spex_SuperHighheightOptions.filter((option) =>
          ["optionA", "optionF", "optionG"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"18”"時，"長"只會有18”、20”
      if (CushionwidthSelect.value === "option10") {
        let filteredHeightOptions = Spex_SuperHighheightOptions;
        filteredHeightOptions = Spex_SuperHighheightOptions.filter((option) =>
          ["optionA", "optionG", "optionH"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"19”"時，"長"只會有18”、20”
      if (CushionwidthSelect.value === "option11") {
        let filteredHeightOptions = Spex_SuperHighheightOptions;
        filteredHeightOptions = Spex_SuperHighheightOptions.filter((option) =>
          ["optionA", "optionG", "optionH"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"20”"時，"長"只會有18”、20”
      if (CushionwidthSelect.value === "option12") {
        let filteredHeightOptions = Spex_SuperHighheightOptions;
        filteredHeightOptions = Spex_SuperHighheightOptions.filter((option) =>
          ["optionA", "optionH", "optionI"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }
    }
    //endregion

    //region --- Spex_Flex 加深型座墊 ---
    if (Spex_FlexCheckbox.checked) {
      //當選擇在"寬"時則將"長"的欄位鎖住，或是當選擇完其他後又不需要產品時，勾選"寬"可鎖住"長"
      if (CushionwidthSelect.value === "option1") {
        CushionSizeSelect(CushionwidthSelect, Spex_FlexwidthOptions);
        CushionSizeSelect(CushionheightSelect, Spex_FlexheightOptions);
        CushionheightSelect.disabled = true; // 當未選擇時，鎖住Spex_FlexheightSelect
        CushioncolorSelect.disabled = true;
      }

      //當選擇是寬"12”"時，"長"只會有14”
      if (CushionwidthSelect.value === "option2") {
        let filteredHeightOptions = Spex_FlexheightOptions;
        filteredHeightOptions = Spex_FlexheightOptions.filter((option) =>
          ["optionA", "optionB"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"13”"時，"長"只會有14”
      if (CushionwidthSelect.value === "option3") {
        let filteredHeightOptions = Spex_FlexheightOptions;
        filteredHeightOptions = Spex_FlexheightOptions.filter((option) =>
          ["optionA", "optionB"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"14”"時，"長"只會有14”、16”、18”
      if (CushionwidthSelect.value === "option4") {
        let filteredHeightOptions = Spex_FlexheightOptions;
        filteredHeightOptions = Spex_FlexheightOptions.filter((option) =>
          ["optionA", "optionB", "optionC", "optionD"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"15”"時，"長"只會有14”、16”、18”
      if (CushionwidthSelect.value === "option5") {
        let filteredHeightOptions = Spex_FlexheightOptions;
        filteredHeightOptions = Spex_FlexheightOptions.filter((option) =>
          ["optionA", "optionB", "optionC", "optionD"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"16”"時，"長"只會有16”、18”、20”
      if (CushionwidthSelect.value === "option6") {
        let filteredHeightOptions = Spex_FlexheightOptions;
        filteredHeightOptions = Spex_FlexheightOptions.filter((option) =>
          ["optionA", "optionC", "optionD", "optionE"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"17”"時，"長"只會有18”、20”
      if (CushionwidthSelect.value === "option7") {
        let filteredHeightOptions = Spex_FlexheightOptions;
        filteredHeightOptions = Spex_FlexheightOptions.filter((option) =>
          ["optionA", "optionD", "optionE"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"18”"時，"長"只會有18”、20”
      if (CushionwidthSelect.value === "option8") {
        let filteredHeightOptions = Spex_FlexheightOptions;
        filteredHeightOptions = Spex_FlexheightOptions.filter((option) =>
          ["optionA", "optionD", "optionE"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }
    }
    //endregion

    //region --- Spex_Flex 加深型座墊 ---
    if (Spex_Flex_HighCheckbox.checked) {
      //當選擇在"寬"時則將"長"的欄位鎖住，或是當選擇完其他後又不需要產品時，勾選"寬"可鎖住"長"
      if (CushionwidthSelect.value === "option1") {
        CushionSizeSelect(CushionwidthSelect, Spex_Flex_HighwidthOptions);
        CushionSizeSelect(CushionheightSelect, Spex_Flex_HighheightOptions);
        CushionheightSelect.disabled = true; // 當未選擇時，鎖住Spex_FlexheightSelect
        CushioncolorSelect.disabled = true;
      }

      //當選擇是寬"12”"時，"長"只會有14”
      if (CushionwidthSelect.value === "option2") {
        let filteredHeightOptions = Spex_Flex_HighheightOptions;
        filteredHeightOptions = Spex_Flex_HighheightOptions.filter((option) =>
          ["optionA", "optionB"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"13”"時，"長"只會有14”
      if (CushionwidthSelect.value === "option3") {
        let filteredHeightOptions = Spex_Flex_HighheightOptions;
        filteredHeightOptions = Spex_Flex_HighheightOptions.filter((option) =>
          ["optionA", "optionB"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"14”"時，"長"只會有14”、16”、18”
      if (CushionwidthSelect.value === "option4") {
        let filteredHeightOptions = Spex_Flex_HighheightOptions;
        filteredHeightOptions = Spex_Flex_HighheightOptions.filter((option) =>
          ["optionA", "optionB", "optionC", "optionD"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"15”"時，"長"只會有14”、16”、18”
      if (CushionwidthSelect.value === "option5") {
        let filteredHeightOptions = Spex_Flex_HighheightOptions;
        filteredHeightOptions = Spex_Flex_HighheightOptions.filter((option) =>
          ["optionA", "optionB", "optionC", "optionD"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"16”"時，"長"只會有16”、18”、20”
      if (CushionwidthSelect.value === "option6") {
        let filteredHeightOptions = Spex_Flex_HighheightOptions;
        filteredHeightOptions = Spex_Flex_HighheightOptions.filter((option) =>
          ["optionA", "optionC", "optionD", "optionE"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"17”"時，"長"只會有18”、20”
      if (CushionwidthSelect.value === "option7") {
        let filteredHeightOptions = Spex_Flex_HighheightOptions;
        filteredHeightOptions = Spex_Flex_HighheightOptions.filter((option) =>
          ["optionA", "optionD", "optionE"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"18”"時，"長"只會有18”、20”
      if (CushionwidthSelect.value === "option8") {
        let filteredHeightOptions = Spex_Flex_HighheightOptions;
        filteredHeightOptions = Spex_Flex_HighheightOptions.filter((option) =>
          ["optionA", "optionD", "optionE"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }
    }
    //endregion

    //region --- Spex_Flex 加深型座墊 ---
    if (Spex_Flex_SuperHighCheckbox.checked) {
      //當選擇在"寬"時則將"長"的欄位鎖住，或是當選擇完其他後又不需要產品時，勾選"寬"可鎖住"長"
      if (CushionwidthSelect.value === "option1") {
        CushionSizeSelect(CushionwidthSelect, Spex_Flex_SuperHighwidthOptions);
        CushionSizeSelect(
          CushionheightSelect,
          Spex_Flex_SuperHighheightOptions
        );
        CushionheightSelect.disabled = true; // 當未選擇時，鎖住Spex_Flex_SuperHighheightSelect
        CushioncolorSelect.disabled = true;
      }

      //當選擇是寬"12”"時，"長"只會有14”
      if (CushionwidthSelect.value === "option2") {
        let filteredHeightOptions = Spex_Flex_SuperHighheightOptions;
        filteredHeightOptions = Spex_Flex_SuperHighheightOptions.filter(
          (option) => ["optionA", "optionB"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"13”"時，"長"只會有14”
      if (CushionwidthSelect.value === "option3") {
        let filteredHeightOptions = Spex_Flex_SuperHighheightOptions;
        filteredHeightOptions = Spex_Flex_SuperHighheightOptions.filter(
          (option) => ["optionA", "optionB"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"14”"時，"長"只會有14”、16”、18”
      if (CushionwidthSelect.value === "option4") {
        let filteredHeightOptions = Spex_Flex_SuperHighheightOptions;
        filteredHeightOptions = Spex_Flex_SuperHighheightOptions.filter(
          (option) =>
            ["optionA", "optionB", "optionC", "optionD"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"15”"時，"長"只會有14”、16”、18”
      if (CushionwidthSelect.value === "option5") {
        let filteredHeightOptions = Spex_Flex_SuperHighheightOptions;
        filteredHeightOptions = Spex_Flex_SuperHighheightOptions.filter(
          (option) =>
            ["optionA", "optionB", "optionC", "optionD"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"16”"時，"長"只會有16”、18”、20”
      if (CushionwidthSelect.value === "option6") {
        let filteredHeightOptions = Spex_Flex_SuperHighheightOptions;
        filteredHeightOptions = Spex_Flex_SuperHighheightOptions.filter(
          (option) =>
            ["optionA", "optionC", "optionD", "optionE"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"17”"時，"長"只會有18”、20”
      if (CushionwidthSelect.value === "option7") {
        let filteredHeightOptions = Spex_Flex_SuperHighheightOptions;
        filteredHeightOptions = Spex_Flex_SuperHighheightOptions.filter(
          (option) => ["optionA", "optionD", "optionE"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }

      //當選擇是寬"18”"時，"長"只會有18”、20”
      if (CushionwidthSelect.value === "option8") {
        let filteredHeightOptions = Spex_Flex_SuperHighheightOptions;
        filteredHeightOptions = Spex_Flex_SuperHighheightOptions.filter(
          (option) => ["optionA", "optionD", "optionE"].includes(option.value)
        );
        CushionSizeSelect(CushionheightSelect, filteredHeightOptions);
      }
    }
    //endregion
  });
});
//endregion

//endregion

//endregion

/*-----  12.Spex底座子系統-硬座板點擊列 -----*/
//region
/*--- Spex底座子系統-硬座板點擊列-圖片箭頭部分 ---*/
//region
document.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let tgimg_12 = event.target;
  let carseat12 = tgimg_12.closest(".Spex_seatbase"); // 找到最近的 Spex_seatbase
  let imgSpexseatbase = event.target.dataset.imgSpexseatbase;

  //確認我點擊到的位置是否是car-Spex_seatbase的箭頭
  if (carseat12 && carseat12.className.trim() === "Spex_seatbase") {
    let introdutionid = carseat12.querySelector(".Spexseatbasegroup"); // 在 Spex_seatbase 內部找 Spexseatbasegroup
    let introdution = carseat12.querySelector(".subtitle"); // 在 Spex_seatbase 內部找 subtitle

    if (introdutionid) {
      // 取得 `visibility` 的計算後樣式
      let visibilityValue = window.getComputedStyle(introdutionid).visibility;

      if (imgSpexseatbase === "SpexseatbaseImg") {
        if (visibilityValue === "hidden") {
          let Price_Spexseatbase = document.querySelectorAll(".pricing");

          Price_Spexseatbase.forEach(function (openIntro) {
            let Spexseatbase = Price_Spexseatbase[11];
            //直接判斷是第幾個.Price
            let nowprice_Spexseatbase =
              Price_Spexseatbase[11].nextElementSibling;

            if (
              openIntro.getAttribute("data-price-Spexseatbase") ===
                "Spexseatbase" &&
              nowprice_Spexseatbase.getAttribute(
                "data-nowprice-Spexseatbase"
              ) === "nowSpexseatbase"
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
                //建議售價標題顯示
                openIntro.style.display = "block";

                //建議售價金額顯示
                nowprice_Spexseatbase.style.display = "block";
                nowprice_Spexseatbase.style.display = "flex";
                nowprice_Spexseatbase.style.width = "95%";
                nowprice_Spexseatbase.style.height = "90%";
                nowprice_Spexseatbase.style.color = "#000000";
                nowprice_Spexseatbase.style.borderRadius = "8px";
                nowprice_Spexseatbase.style.padding = "1px";
                nowprice_Spexseatbase.style.margin = "3px 3px 3px 2px";
                nowprice_Spexseatbase.style.textAlign = "center";
                nowprice_Spexseatbase.style.fontSize = "17px";
                nowprice_Spexseatbase.style.fontWeight = "600";
                nowprice_Spexseatbase.style.alignItems = "center";
                nowprice_Spexseatbase.style.justifyContent = "center";

                if (window.matchMedia("(max-width: 650px)").matches) {
                  nowprice_Spexseatbase.style.fontSize = "15px";
                  introdutionid.style.width = "calc(100% - 9px)";
                  Spexseatbase.style.padding = "5px";
                  Spexseatbase.style.margin = "3px 0px 3px 1px";
                }
              }
            }
          });
        } else {
          let Price_Spexseatbase = document.querySelectorAll(".pricing");

          Price_Spexseatbase.forEach(function (openIntro) {
            let nowprice_Spexseatbase =
              Price_Spexseatbase[11].nextElementSibling;

            //把data-collapse-status改成0
            introdution.setAttribute("data-collapse-status", "0");

            //建議售價標題隱藏
            introdutionid.style.visibility = "hidden";
            introdutionid.style.height = "0";
            introdutionid.style.padding = "0";
            introdutionid.style.border = "0px dashed black";
            introdutionid.style.margin = "0";

            if (
              openIntro.getAttribute("data-price-Spexseatbase") ===
              "Spexseatbase"
            ) {
              //建議售價金額隱藏
              openIntro.style.display = "none";
            }
            nowprice_Spexseatbase.style.display = "none";
          });
        }
      }
    }
  }
});
//endregion

/*---  Spex底座子系統-硬座板點擊列 -subtitle部分  ---*/
//region
let Spex_seatbase = document.querySelector(".Spex_seatbase");
Spex_seatbase.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let showinfo = event.target.dataset.showinfo;
  let introdution = event.target;
  //確認我點擊到的位置是否是Spex_seatbase
  if (showinfo === "Spexseatbase") {
    let introdutionid = event.target.nextElementSibling;
    let Price_Spex_seatbase = document.querySelectorAll(".pricing");
    let Spex_seatbaseimg = Spex_seatbase.querySelector(".target_img"); // 找到最近的 .target_img
    let img = Spex_seatbaseimg.querySelector("img");

    Price_Spex_seatbase.forEach(function (openIntro) {
      let Spexseatbase = Price_Spex_seatbase[11];
      //直接判斷是第幾個.Price
      let nowprice_Spexseatbase = Price_Spex_seatbase[11].nextElementSibling;

      if (
        openIntro.getAttribute("data-price-Spexseatbase") === "Spexseatbase" &&
        nowprice_Spexseatbase.getAttribute("data-nowprice-Spexseatbase") ===
          "nowSpexseatbase"
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

          //建議售價標題顯示
          openIntro.style.display = "block";

          //建議售價金額顯示
          nowprice_Spexseatbase.style.display = "block";
          nowprice_Spexseatbase.style.display = "flex";
          nowprice_Spexseatbase.style.width = "95%";
          nowprice_Spexseatbase.style.height = "90%";
          nowprice_Spexseatbase.style.color = "#000000";
          nowprice_Spexseatbase.style.borderRadius = "8px";
          nowprice_Spexseatbase.style.padding = "1px";
          nowprice_Spexseatbase.style.margin = "3px 3px 3px 2px";
          nowprice_Spexseatbase.style.textAlign = "center";
          nowprice_Spexseatbase.style.fontSize = "17px";
          nowprice_Spexseatbase.style.fontWeight = "600";
          nowprice_Spexseatbase.style.alignItems = "center";
          nowprice_Spexseatbase.style.justifyContent = "center";

          if (img) {
            img.setAttribute("src", "./img/black triangle after.png");
          }

          if (window.matchMedia("(max-width: 650px)").matches) {
            nowprice_Spexseatbase.style.fontSize = "15px";
            introdutionid.style.width = "calc(100% - 9px)";
            Spexseatbase.style.padding = "5px";
            Spexseatbase.style.margin = "3px 0px 3px 1px";
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
          nowprice_Spexseatbase.style.display = "none";

          if (img) {
            img.setAttribute("src", "./img/black triangle.png");
          }
        }
      }
    });
  }
});
//endregion

//region --- 選擇不同硬座板的車寬，板長會各自帶入 ---
//region --- SeatBase_Fixed Selected---
let SeatBaseFixedwidthOptions = [
  { value: "option1", text: "車寬", selected: true },
  { value: "option2", text: "10”" },
  { value: "option3", text: "12”" },
  { value: "option4", text: "14”" },
  { value: "option5", text: "15”" },
  { value: "option6", text: "16”" },
  { value: "option7", text: "17”" },
  { value: "option8", text: "18”" },
  { value: "option9", text: "20”" },
];

let SeatBaseFixedheightOptions = [
  { value: "optionA", text: "板長", selected: true },
  { value: "optionB", text: "12”" },
  { value: "optionC", text: "14”" },
  { value: "optionD", text: "16”" },
  { value: "optionE", text: "17”" },
  { value: "optionF", text: "18”" },
  { value: "optionG", text: "20”" },
  { value: "optionH", text: "22”" },
];
//endregion

//region --- SeatBase_Quick Selected---
let SeatBaseQuickwidthOptions = [
  { value: "option1", text: "車寬", selected: true },
  { value: "option2", text: "10”" },
  { value: "option3", text: "12”" },
  { value: "option4", text: "14”" },
  { value: "option5", text: "15”" },
  { value: "option6", text: "16”" },
  { value: "option7", text: "17”" },
  { value: "option8", text: "18”" },
  { value: "option9", text: "20”" },
];

let SeatBaseQuickheightOptions = [
  { value: "optionA", text: "板長", selected: true },
  { value: "optionB", text: "12”" },
  { value: "optionC", text: "14”" },
  { value: "optionD", text: "16”" },
  { value: "optionE", text: "17”" },
  { value: "optionF", text: "18”" },
  { value: "optionG", text: "20”" },
  { value: "optionH", text: "22”" },
];
//endregion

//Spex硬座板的"車寬"、"板長"的選項會進入這裡做篩選
//region
function SeatbaseSizeSelect(selectElement, options) {
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
//endregion

//確定勾選的是哪個Spex硬座板並給予"車寬"及"板長"，且不會重複勾選選項
//region
document
  .querySelectorAll('input[name="car_SpexSeatBase"]')
  .forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      document
        .querySelectorAll('input[name="car_SpexSeatBase"]')
        .forEach((otherCheckbox) => {
          if (otherCheckbox !== this) {
            otherCheckbox.checked = false;
          }
        });
      let nowprice_SpexSeatBase = Price[11].nextElementSibling;
      if (nowprice_SpexSeatBase.textContent) {
        nowprice_SpexSeatBase.textContent = "0元";
      }

      let SeatbasewidthSelect = document.querySelector(".Spexseatbase_Width");
      let SeatbaseheightSelect = document.querySelector(".Spexseatbase_Heigh");

      //確認是選擇"Spex_Seat Base 硬座板(固定扣具)"
      if (this.dataset.item === "Spex_Seat Base 硬座板(固定扣具)") {
        //確認有勾選坐墊後開啟
        SeatbasewidthSelect.disabled = false;
        SeatbaseSizeSelect(SeatbasewidthSelect, SeatBaseFixedwidthOptions);
        SeatbaseSizeSelect(SeatbaseheightSelect, SeatBaseFixedheightOptions);
      }

      //確認是選擇"Spex_Seat Base 硬座板(快拆扣具)"
      if (this.dataset.item === "Spex_Seat Base 硬座板(快拆扣具)") {
        //確認有勾選坐墊後開啟
        SeatbasewidthSelect.disabled = false;
        SeatbaseSizeSelect(SeatbasewidthSelect, SeatBaseQuickwidthOptions);
        SeatbaseSizeSelect(SeatbaseheightSelect, SeatBaseQuickheightOptions);
      } else if (SeatbaseheightSelect.disabled === false) {
        SeatbaseheightSelect.disabled = true;
      }
    });
  });
//endregion

//硬座板選擇特定"車寬"時，"板長"會自動跳出相對應的長度
//region
document.addEventListener("DOMContentLoaded", function () {
  let SeatbasewidthSelect = document.querySelector(".Spexseatbase_Width");
  let SeatbaseheightSelect = document.querySelector(".Spexseatbase_Heigh");
  let Price = document.querySelectorAll(".pricing");
  let nowprice_SpexSeatBase = Price[11].nextElementSibling;

  //剛開啟時讓widthSelect無法選擇
  SeatbasewidthSelect.disabled = true;
  // 預設讓 heightSelect 無法選擇
  SeatbaseheightSelect.disabled = true;

  SeatbasewidthSelect.addEventListener("change", function () {
    if (SeatbasewidthSelect.value) {
      SeatbaseheightSelect.disabled = false; // 當有選擇時，解鎖heightSelect
    } else {
      SeatbaseheightSelect.disabled = true; // 當未選擇時，鎖住heightSelect
    }

    // 找到 checkbox
    let SeatBaseFixedCheckbox = document.querySelector("#Spex_SeatBase_fixed");
    let SeatBaseQuickCheckbox = document.querySelector("#Spex_SeatBase_quick");

    if (nowprice_SpexSeatBase.textContent) {
      nowprice_SpexSeatBase.textContent = "0元";
    }

    //region ---Spex_SeatBase 硬座板(固定扣具)---
    if (SeatBaseFixedCheckbox.checked) {
      //當選擇在"座寬"時則將"板長"的欄位鎖住，或是當選擇完其他後又不需要產品時，勾選"寬"可鎖住"長"
      if (SeatbasewidthSelect.value === "option1") {
        SeatbaseSizeSelect(SeatbasewidthSelect, SeatBaseFixedwidthOptions);
        SeatbaseSizeSelect(SeatbaseheightSelect, SeatBaseFixedheightOptions);
        SeatbaseheightSelect.disabled = true; // 當未選擇時，鎖住SeatbaseheightSelect
      }

      //當選擇"車寬"是"10”"時，"板長"會有"12”"、"14”"
      if (SeatbasewidthSelect.value === "option2") {
        let filteredHeightOptions = SeatBaseFixedheightOptions;
        filteredHeightOptions = SeatBaseFixedheightOptions.filter((option) =>
          ["optionA", "optionB", "optionC"].includes(option.value)
        );
        SeatbaseSizeSelect(SeatbaseheightSelect, filteredHeightOptions);
      }

      //當選擇"車寬"是"12”"時，"板長"會有"12”"、"14”"、"16”"、"18”"
      if (SeatbasewidthSelect.value === "option3") {
        let filteredHeightOptions = SeatBaseFixedheightOptions;
        filteredHeightOptions = SeatBaseFixedheightOptions.filter((option) =>
          ["optionA", "optionB", "optionC", "optionD", "optionF"].includes(
            option.value
          )
        );
        SeatbaseSizeSelect(SeatbaseheightSelect, filteredHeightOptions);
      }

      //當選擇"車寬"是"14”"時，"板長"只會有"14”"、"16”"、"18”"
      if (SeatbasewidthSelect.value === "option4") {
        let filteredHeightOptions = SeatBaseFixedheightOptions;
        filteredHeightOptions = SeatBaseFixedheightOptions.filter((option) =>
          ["optionA", "optionC", "optionD", "optionF"].includes(option.value)
        );
        SeatbaseSizeSelect(SeatbaseheightSelect, filteredHeightOptions);
      }

      //當選擇"車寬"是"15”"時，"板長"只會有"17”"、"20”"
      if (SeatbasewidthSelect.value === "option5") {
        let filteredHeightOptions = SeatBaseFixedheightOptions;
        filteredHeightOptions = SeatBaseFixedheightOptions.filter((option) =>
          ["optionA", "optionE", "optionG"].includes(option.value)
        );
        SeatbaseSizeSelect(SeatbaseheightSelect, filteredHeightOptions);
      }

      //當選擇"車寬"是"16”"時，"板長"只會有"16”"、"18”"、"20”"、"22”"
      if (SeatbasewidthSelect.value === "option6") {
        let filteredHeightOptions = SeatBaseFixedheightOptions;
        filteredHeightOptions = SeatBaseFixedheightOptions.filter((option) =>
          ["optionA", "optionD", "optionF", "optionG", "optionH"].includes(
            option.value
          )
        );
        SeatbaseSizeSelect(SeatbaseheightSelect, filteredHeightOptions);
      }

      //當選擇"車寬"是"17”"時，"板長"只會有"17”"、"20”"、"22”"
      if (SeatbasewidthSelect.value === "option7") {
        let filteredHeightOptions = SeatBaseFixedheightOptions;
        filteredHeightOptions = SeatBaseFixedheightOptions.filter((option) =>
          ["optionA", "optionE", "optionG", "optionH"].includes(option.value)
        );
        SeatbaseSizeSelect(SeatbaseheightSelect, filteredHeightOptions);
      }

      //當選擇"車寬"是"18”"時，"板長"只會有"18”"、"20”"、"22”"
      if (SeatbasewidthSelect.value === "option8") {
        let filteredHeightOptions = SeatBaseFixedheightOptions;
        filteredHeightOptions = SeatBaseFixedheightOptions.filter((option) =>
          ["optionA", "optionF", "optionG", "optionH"].includes(option.value)
        );
        SeatbaseSizeSelect(SeatbaseheightSelect, filteredHeightOptions);
      }

      //當選擇"車寬"是"20”"時，"板長"只會有"20”"、"22”"
      if (SeatbasewidthSelect.value === "option9") {
        let filteredHeightOptions = SeatBaseFixedheightOptions;
        filteredHeightOptions = SeatBaseFixedheightOptions.filter((option) =>
          ["optionA", "optionG", "optionH"].includes(option.value)
        );
        SeatbaseSizeSelect(SeatbaseheightSelect, filteredHeightOptions);
      }
    }
    //endregion

    //region ---Spex_SeatBase 硬座板(快拆扣具)---
    if (SeatBaseQuickCheckbox.checked) {
      //當選擇在"車寬"時則將"板長"的欄位鎖住，或是當選擇完其他後又不需要產品時，勾選"車寬"可鎖住"板長"
      if (SeatbasewidthSelect.value === "option1") {
        SeatbaseSizeSelect(SeatbasewidthSelect, SeatBaseQuickwidthOptions);
        SeatbaseSizeSelect(SeatbaseheightSelect, SeatBaseQuickheightOptions);
        SeatbaseheightSelect.disabled = true; // 當未選擇時，鎖住SeatbaseheightSelect
      }

      //當選擇"車寬"是"10”"時，"板長"會有"12”"、"14”"
      if (SeatbasewidthSelect.value === "option2") {
        let filteredHeightOptions = SeatBaseQuickheightOptions;
        filteredHeightOptions = SeatBaseQuickheightOptions.filter((option) =>
          ["optionA", "optionB", "optionC"].includes(option.value)
        );
        SeatbaseSizeSelect(SeatbaseheightSelect, filteredHeightOptions);
      }

      //當選擇"車寬"是"12”"時，"板長"會有"12”"、"14”"、"16”"、"18”"
      if (SeatbasewidthSelect.value === "option3") {
        let filteredHeightOptions = SeatBaseQuickheightOptions;
        filteredHeightOptions = SeatBaseQuickheightOptions.filter((option) =>
          ["optionA", "optionB", "optionC", "optionD", "optionF"].includes(
            option.value
          )
        );
        SeatbaseSizeSelect(SeatbaseheightSelect, filteredHeightOptions);
      }

      //當選擇"車寬"是"14”"時，"板長"只會有"14”"、"16”"、"18”"
      if (SeatbasewidthSelect.value === "option4") {
        let filteredHeightOptions = SeatBaseQuickheightOptions;
        filteredHeightOptions = SeatBaseQuickheightOptions.filter((option) =>
          ["optionA", "optionC", "optionD", "optionF"].includes(option.value)
        );
        SeatbaseSizeSelect(SeatbaseheightSelect, filteredHeightOptions);
      }

      //當選擇"車寬"是"15”"時，"板長"只會有"17”"、"20”"
      if (SeatbasewidthSelect.value === "option5") {
        let filteredHeightOptions = SeatBaseQuickheightOptions;
        filteredHeightOptions = SeatBaseQuickheightOptions.filter((option) =>
          ["optionA", "optionE", "optionG"].includes(option.value)
        );
        SeatbaseSizeSelect(SeatbaseheightSelect, filteredHeightOptions);
      }

      //當選擇"車寬"是"16”"時，"板長"只會有"16”"、"18”"、"20”"、"22”"
      if (SeatbasewidthSelect.value === "option6") {
        let filteredHeightOptions = SeatBaseQuickheightOptions;
        filteredHeightOptions = SeatBaseQuickheightOptions.filter((option) =>
          ["optionA", "optionD", "optionF", "optionG", "optionH"].includes(
            option.value
          )
        );
        SeatbaseSizeSelect(SeatbaseheightSelect, filteredHeightOptions);
      }

      //當選擇"車寬"是"17”"時，"板長"只會有"17”"、"20”"、"22”"
      if (SeatbasewidthSelect.value === "option7") {
        let filteredHeightOptions = SeatBaseQuickheightOptions;
        filteredHeightOptions = SeatBaseQuickheightOptions.filter((option) =>
          ["optionA", "optionE", "optionG", "optionH"].includes(option.value)
        );
        SeatbaseSizeSelect(SeatbaseheightSelect, filteredHeightOptions);
      }

      //當選擇"車寬"是"18”"時，"板長"只會有"18”"、"20”"、"22”"
      if (SeatbasewidthSelect.value === "option8") {
        let filteredHeightOptions = SeatBaseQuickheightOptions;
        filteredHeightOptions = SeatBaseQuickheightOptions.filter((option) =>
          ["optionA", "optionF", "optionG", "optionH"].includes(option.value)
        );
        SeatbaseSizeSelect(SeatbaseheightSelect, filteredHeightOptions);
      }

      //當選擇"車寬"是"20”"時，"板長"只會有"20”"、"22”"
      if (SeatbasewidthSelect.value === "option9") {
        let filteredHeightOptions = SeatBaseQuickheightOptions;
        filteredHeightOptions = SeatBaseQuickheightOptions.filter((option) =>
          ["optionA", "optionG", "optionH"].includes(option.value)
        );
        SeatbaseSizeSelect(SeatbaseheightSelect, filteredHeightOptions);
      }
    }
    //endregion
  });
});
//endregion
//endregion

//endregion

/*-----  13.Spex底座子系統-分腿器點擊列 -----*/
//region
/*--- Spex底座子系統-硬座板點擊列-圖片箭頭部分 ---*/
//region
document.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let tgimg_13 = event.target;
  let carseat13 = tgimg_13.closest(".Spex_medialthigh"); // 找到最近的 Spex_medialthigh
  let imgSpexmedialthigh = event.target.dataset.imgSpexmedialthigh;

  //確認我點擊到的位置是否是Spex_medialthigh的箭頭
  if (carseat13 && carseat13.className.trim() === "Spex_medialthigh") {
    let introdutionid = carseat13.querySelector(".Spexmedialthighgroup"); // 在 Spex_medialthigh 內部找 Spexmedialthighgroup
    let introdution = carseat13.querySelector(".subtitle"); // 在 Spex_medialthigh 內部找 subtitle

    if (introdutionid) {
      // 取得 `visibility` 的計算後樣式
      let visibilityValue = window.getComputedStyle(introdutionid).visibility;

      if (imgSpexmedialthigh === "SpexmedialthighImg") {
        if (visibilityValue === "hidden") {
          let Price_Spexmedialthigh = document.querySelectorAll(".pricing");

          Price_Spexmedialthigh.forEach(function (openIntro) {
            let Spexmedialthigh = Price_Spexmedialthigh[12];
            //直接判斷是第幾個.Price
            let nowprice_Spexmedialthigh =
              Price_Spexmedialthigh[12].nextElementSibling;

            if (
              openIntro.getAttribute("data-price-Spexmedialthigh") ===
                "Spexmedialthigh" &&
              nowprice_Spexmedialthigh.getAttribute(
                "data-nowprice-Spexmedialthigh"
              ) === "nowSpexmedialthigh"
            ) {
              if (introdution.getAttribute("data-collapse-status") === "0") {
                //把data-collapse-status改成1
                introdution.setAttribute("data-collapse-status", "1");

                //carSpexcushion勾選位置大小設置
                introdutionid.style.visibility = "visible";
                introdutionid.style.padding = "0px 1px 2px 3px";
                introdutionid.style.width = "calc(100% - 22px)";
                introdutionid.style.display = "flex";
                introdutionid.style.flexDirection = "row";
                introdutionid.style.border = "3px dashed black";
                introdutionid.style.borderTop = "none";
                introdutionid.style.margin = "0 0 0 7px";
                introdutionid.style.height = "auto";
                //建議售價標題顯示
                openIntro.style.display = "block";

                //建議售價金額顯示
                nowprice_Spexmedialthigh.style.display = "block";
                nowprice_Spexmedialthigh.style.display = "flex";
                nowprice_Spexmedialthigh.style.width = "95%";
                nowprice_Spexmedialthigh.style.height = "90%";
                nowprice_Spexmedialthigh.style.color = "#000000";
                nowprice_Spexmedialthigh.style.borderRadius = "8px";
                nowprice_Spexmedialthigh.style.padding = "1px";
                nowprice_Spexmedialthigh.style.margin = "3px 3px 3px 2px";
                nowprice_Spexmedialthigh.style.textAlign = "center";
                nowprice_Spexmedialthigh.style.fontSize = "17px";
                nowprice_Spexmedialthigh.style.fontWeight = "600";
                nowprice_Spexmedialthigh.style.alignItems = "center";
                nowprice_Spexmedialthigh.style.justifyContent = "center";

                if (window.matchMedia("(max-width: 650px)").matches) {
                  nowprice_Spexmedialthigh.style.fontSize = "15px";
                  introdutionid.style.width = "calc(100% - 9px)";
                  Spexmedialthigh.style.padding = "5px";
                  Spexmedialthigh.style.margin = "3px 0px 3px 1px";
                }
              }
            }
          });
        } else {
          let Price_Spexmedialthigh = document.querySelectorAll(".pricing");

          Price_Spexmedialthigh.forEach(function (openIntro) {
            let nowprice_Spexmedialthigh =
              Price_Spexmedialthigh[12].nextElementSibling;

            //把data-collapse-status改成0
            introdution.setAttribute("data-collapse-status", "0");

            //建議售價標題隱藏
            introdutionid.style.visibility = "hidden";
            introdutionid.style.height = "0";
            introdutionid.style.padding = "0";
            introdutionid.style.border = "0px dashed black";
            introdutionid.style.margin = "0";

            if (
              openIntro.getAttribute("data-price-Spexmedialthigh") ===
              "Spexmedialthigh"
            ) {
              //建議售價金額隱藏
              openIntro.style.display = "none";
            }
            nowprice_Spexmedialthigh.style.display = "none";
          });
        }
      }
    }
  }
});
//endregion

/*---  Spex底座子系統-分腿器點擊列 -subtitle部分  ---*/
//region
let Spex_medialthigh = document.querySelector(".Spex_medialthigh");
Spex_medialthigh.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let showinfo = event.target.dataset.showinfo;
  let introdution = event.target;
  //確認我點擊到的位置是否是Spex_seatbase
  if (showinfo === "Spexmedialthigh") {
    let introdutionid = event.target.nextElementSibling;
    let Price_Spex_medialthigh = document.querySelectorAll(".pricing");
    let Spex_medialthighimg = Spex_medialthigh.querySelector(".target_img"); // 找到最近的 .target_img
    let img = Spex_medialthighimg.querySelector("img");

    Price_Spex_medialthigh.forEach(function (openIntro) {
      let Spexmedialthigh = Price_Spex_medialthigh[12];
      //直接判斷是第幾個.Price
      let nowprice_Spexmedialthigh =
        Price_Spex_medialthigh[12].nextElementSibling;

      if (
        openIntro.getAttribute("data-price-Spexmedialthigh") ===
          "Spexmedialthigh" &&
        nowprice_Spexmedialthigh.getAttribute(
          "data-nowprice-Spexmedialthigh"
        ) === "nowSpexmedialthigh"
      ) {
        if (introdution.getAttribute("data-collapse-status") === "0") {
          //把data-collapse-status改成1
          introdution.setAttribute("data-collapse-status", "1");

          //carSpexcushion勾選位置大小設置
          introdutionid.style.visibility = "visible";
          introdutionid.style.padding = "0px 1px 2px 3px";
          introdutionid.style.width = "calc(100% - 22px)";
          introdutionid.style.display = "flex";
          introdutionid.style.flexDirection = "row";
          introdutionid.style.border = "3px dashed black";
          introdutionid.style.borderTop = "none";
          introdutionid.style.margin = "0 0 0 7px";
          introdutionid.style.height = "auto";

          //建議售價標題顯示
          openIntro.style.display = "block";

          //建議售價金額顯示
          nowprice_Spexmedialthigh.style.display = "block";
          nowprice_Spexmedialthigh.style.display = "flex";
          nowprice_Spexmedialthigh.style.width = "95%";
          nowprice_Spexmedialthigh.style.height = "90%";
          nowprice_Spexmedialthigh.style.color = "#000000";
          nowprice_Spexmedialthigh.style.borderRadius = "8px";
          nowprice_Spexmedialthigh.style.padding = "1px";
          nowprice_Spexmedialthigh.style.margin = "3px 3px 3px 2px";
          nowprice_Spexmedialthigh.style.textAlign = "center";
          nowprice_Spexmedialthigh.style.fontSize = "17px";
          nowprice_Spexmedialthigh.style.fontWeight = "600";
          nowprice_Spexmedialthigh.style.alignItems = "center";
          nowprice_Spexmedialthigh.style.justifyContent = "center";

          if (img) {
            img.setAttribute("src", "./img/black triangle after.png");
          }

          if (window.matchMedia("(max-width: 650px)").matches) {
            nowprice_Spexmedialthigh.style.fontSize = "15px";
            introdutionid.style.width = "calc(100% - 9px)";
            Spexmedialthigh.style.padding = "5px";
            Spexmedialthigh.style.margin = "3px 0px 3px 1px";
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
          nowprice_Spexmedialthigh.style.display = "none";

          if (img) {
            img.setAttribute("src", "./img/black triangle.png");
          }
        }
      }
    });
  }
});
//endregion

//region ----- 分腿器選擇尺寸方式及不同尺寸會有不同規格 -----
//Spex分腿器的尺寸選項會進入這裡做篩選
//region
let Spex_medialthighOrgOptions = [
  { value: "option1", text: "尺寸", selected: true },
  { value: "option2", text: "size 1" },
  { value: "option3", text: "size 2" },
  { value: "option4", text: "size 3" },
];

function MedialThighSizeSelect(otherCheckbox) {
  let SpexmedialthighSel = document.querySelector(".Spexmedialthigh_sel");
  if (!otherCheckbox) {
    SpexmedialthighSel.disabled = true;
  } else {
    SpexmedialthighSel.disabled = false;
  }

  //清空第二排
  document.querySelectorAll(".value-row td").forEach((cell) => {
    cell.textContent = ""; // 清掉文字
    cell.style.backgroundColor = "#f0f0f0";
    cell.innerHTML = "&nbsp;";
  });
  let Spexmedialthighselect = document.querySelector(".Spexmedialthigh_sel");

  //下拉式選單重新排序
  Spexmedialthighselect.innerHTML = ""; // 清空現有內容
  Spex_medialthighOrgOptions.forEach((option) => {
    let opt = document.createElement("option");
    opt.value = option.value;
    opt.textContent = option.text;
    if (option.selected) {
      opt.selected = true;
    }
    Spexmedialthighselect.appendChild(opt);
  });
}
//endregion

//當我選擇不同分腿器的size時，會對應不同的內容尺寸
//region ---Medial Thigh_Standard Selected---
let SpexmedialthighstandardOptions = {
  option2: ["60mm", "145mm", "95mm", "40mm", "40mm", "65mm"],
  option3: ["60mm", "155mm", "100mm", "60mm", "50mm", "65mm"],
  option4: ["60mm", "185mm", "105mm", "60mm", "60mm", "75mm"],
};
//endregion

//region ---Medial Thigh_Multiaxial Selected---
let SpexmedialthighmultiaxialOptions = {
  option2: ["70-140mm", "145mm", "95mm", "50-120mm", "40mm", "65mm"],
  option3: ["70-140mm", "155mm", "100mm", "60-140mm", "50mm", "65mm"],
  option4: ["70-160mm", "185mm", "105mm", "60-140mm", "60mm", "75mm"],
};
//endregion

//確定勾選的是哪個Spex分腿器，且不會重複勾選選項
//region
document
  .querySelectorAll('input[name="car_SpexMedialThigh"]')
  .forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      document
        .querySelectorAll('input[name="car_SpexMedialThigh"]')
        .forEach((otherCheckbox) => {
          if (otherCheckbox !== this) {
            otherCheckbox.checked = false;
          }
          let nowprice_Spexmedialthigh = Price[12].nextElementSibling;
          if (nowprice_Spexmedialthigh.textContent) {
            nowprice_Spexmedialthigh.textContent = "0元";
          }

          MedialThighSizeSelect(otherCheckbox !== this);
        });
    });
  });
//endregion

//根據分腿器的選擇，動態改變分腿器第二行的表格資料。
//region
let Spexmedialthighselect = document.querySelector(".Spexmedialthigh_sel");
let Spexmedialthigh_secondRowCells = document.querySelectorAll(".value-row td");
let MedialThigh_Standardcheckbox = document.getElementById(
  "Spex_MedialThigh_Standard"
);
let MedialThigh_Multiaxialcheckbox = document.getElementById(
  "Spex_MedialThigh_Multiaxial"
);
let SpexmedialthighSel = document.querySelector(".Spexmedialthigh_sel");
SpexmedialthighSel.disabled = true;

Spexmedialthighselect.addEventListener("change", () => {
  let selected = Spexmedialthighselect.value;

  if (MedialThigh_Standardcheckbox.checked) {
    let data = SpexmedialthighstandardOptions[selected];
    // 如果有對應資料就填入
    if (data) {
      data.forEach((value, index) => {
        Spexmedialthigh_secondRowCells[index].textContent = value;
      });
    } else {
      // 若是選擇 "尺寸"，清空第二排
      Spexmedialthigh_secondRowCells.forEach(
        (cell) => (cell.innerHTML = "&nbsp;")
      );
    }
  }

  if (MedialThigh_Multiaxialcheckbox.checked) {
    let data = SpexmedialthighmultiaxialOptions[selected];
    // 如果有對應資料就填入
    if (data) {
      data.forEach((value, index) => {
        Spexmedialthigh_secondRowCells[index].textContent = value;
      });
    } else {
      // 若是選擇 "尺寸"，清空第二排
      Spexmedialthigh_secondRowCells.forEach(
        (cell) => (cell.innerHTML = "&nbsp;")
      );
    }
  }
});
//endregion

//endregion

//endregion

/*-----  14.Spex底座子系統-扶手臀撐點擊列 -----*/
//region
/*--- Spex底座子系統-扶手臀撐點擊列 - 圖片箭頭部分 ---*/
//region
document.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let tgimg_14 = event.target;
  let carseat14 = tgimg_14.closest(".Spex_armsup_latthigh"); // 找到最近的 Spex_armsup_latthigh
  let imgSpexarmsuplatthigh = event.target.dataset.imgSpexarmsuplatthigh;

  //確認我點擊到的位置是否是Spex_armsuplatthigh的箭頭
  if (carseat14 && carseat14.className.trim() === "Spex_armsup_latthigh") {
    let introdutionid = carseat14.querySelector(".Spexarmsuplatthighgroup"); // 在 Spex_armsuplatthigh 內部找 Spexarmsuplatthighgroup
    let introdution = carseat14.querySelector(".subtitle"); // 在 Spex_armsuplatthigh 內部找 subtitle

    if (introdutionid) {
      // 取得 `visibility` 的計算後樣式
      let visibilityValue = window.getComputedStyle(introdutionid).visibility;

      if (imgSpexarmsuplatthigh === "SpexarmsuplatthighImg") {
        if (visibilityValue === "hidden") {
          let Price_Spexarmsuplatthigh = document.querySelectorAll(".pricing");

          Price_Spexarmsuplatthigh.forEach(function (openIntro) {
            let Spexarmsuplatthigh = Price_Spexarmsuplatthigh[13];
            //直接判斷是第幾個.Price
            let nowprice_Spexarmsuplatthigh =
              Price_Spexarmsuplatthigh[13].nextElementSibling;

            if (
              openIntro.getAttribute("data-price-Spexarmsuplatthigh") ===
                "Spexarmsuplatthigh" &&
              nowprice_Spexarmsuplatthigh.getAttribute(
                "data-nowprice-Spexarmsuplatthigh"
              ) === "nowSpexarmsuplatthigh"
            ) {
              if (introdution.getAttribute("data-collapse-status") === "0") {
                //把data-collapse-status改成1
                introdution.setAttribute("data-collapse-status", "1");

                //carSpexarmsuplatthigh勾選位置大小設置
                introdutionid.style.visibility = "visible";
                introdutionid.style.padding = "0px 1px 2px 3px";
                introdutionid.style.width = "calc(100% - 22px)";
                introdutionid.style.display = "flex";
                introdutionid.style.flexDirection = "row";
                introdutionid.style.border = "3px dashed black";
                introdutionid.style.borderTop = "none";
                introdutionid.style.margin = "0 0 0 7px";
                introdutionid.style.height = "auto";
                //建議售價標題顯示
                openIntro.style.display = "block";

                //建議售價金額顯示
                nowprice_Spexarmsuplatthigh.style.display = "block";
                nowprice_Spexarmsuplatthigh.style.display = "flex";
                nowprice_Spexarmsuplatthigh.style.width = "95%";
                nowprice_Spexarmsuplatthigh.style.height = "90%";
                nowprice_Spexarmsuplatthigh.style.color = "#000000";
                nowprice_Spexarmsuplatthigh.style.borderRadius = "8px";
                nowprice_Spexarmsuplatthigh.style.padding = "1px";
                nowprice_Spexarmsuplatthigh.style.margin = "3px 3px 3px 2px";
                nowprice_Spexarmsuplatthigh.style.textAlign = "center";
                nowprice_Spexarmsuplatthigh.style.fontSize = "17px";
                nowprice_Spexarmsuplatthigh.style.fontWeight = "600";
                nowprice_Spexarmsuplatthigh.style.alignItems = "center";
                nowprice_Spexarmsuplatthigh.style.justifyContent = "center";

                if (window.matchMedia("(max-width: 650px)").matches) {
                  nowprice_Spexarmsuplatthigh.style.fontSize = "15px";
                  introdutionid.style.width = "calc(100% - 9px)";
                  Spexarmsuplatthigh.style.padding = "5px";
                  Spexarmsuplatthigh.style.margin = "3px 0px 3px 1px";
                }
              }
            }
          });
        } else {
          let Price_Spexarmsuplatthigh = document.querySelectorAll(".pricing");

          Price_Spexarmsuplatthigh.forEach(function (openIntro) {
            let nowprice_Spexarmsuplatthigh =
              Price_Spexarmsuplatthigh[13].nextElementSibling;

            //把data-collapse-status改成0
            introdution.setAttribute("data-collapse-status", "0");

            //建議售價標題隱藏
            introdutionid.style.visibility = "hidden";
            introdutionid.style.height = "0";
            introdutionid.style.padding = "0";
            introdutionid.style.border = "0px dashed black";
            introdutionid.style.margin = "0";

            if (
              openIntro.getAttribute("data-price-Spexarmsuplatthigh") ===
              "Spexarmsuplatthigh"
            ) {
              //建議售價金額隱藏
              openIntro.style.display = "none";
            }
            nowprice_Spexarmsuplatthigh.style.display = "none";
          });
        }
      }
    }
  }
});
//endregion

/*---  Spex底座子系統-分腿器點擊列 - subtitle部分  ---*/
//region
let Spex_armsuplatthigh = document.querySelector(".Spex_armsup_latthigh");
Spex_armsuplatthigh.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let showinfo = event.target.dataset.showinfo;
  let introdution = event.target;
  //確認我點擊到的位置是否是Spex_armsuplatthigh
  if (showinfo === "Spexarmsuplatthigh") {
    let introdutionid = event.target.nextElementSibling;
    let Price_Spex_armsuplatthigh = document.querySelectorAll(".pricing");
    let Spex_armsuplatthighimg =
      Spex_armsuplatthigh.querySelector(".target_img"); // 找到最近的 .target_img
    let img = Spex_armsuplatthighimg.querySelector("img");

    Price_Spex_armsuplatthigh.forEach(function (openIntro) {
      let Spexarmsuplatthigh = Price_Spex_armsuplatthigh[13];
      //直接判斷是第幾個.Price
      let nowprice_Spexarmsuplatthigh =
        Price_Spex_armsuplatthigh[13].nextElementSibling;

      if (
        openIntro.getAttribute("data-price-Spexarmsuplatthigh") ===
          "Spexarmsuplatthigh" &&
        nowprice_Spexarmsuplatthigh.getAttribute(
          "data-nowprice-Spexarmsuplatthigh"
        ) === "nowSpexarmsuplatthigh"
      ) {
        if (introdution.getAttribute("data-collapse-status") === "0") {
          //把data-collapse-status改成1
          introdution.setAttribute("data-collapse-status", "1");

          //carSpexarmsuplatthigh勾選位置大小設置
          introdutionid.style.visibility = "visible";
          introdutionid.style.padding = "0px 1px 2px 3px";
          introdutionid.style.width = "calc(100% - 22px)";
          introdutionid.style.display = "flex";
          introdutionid.style.flexDirection = "row";
          introdutionid.style.border = "3px dashed black";
          introdutionid.style.borderTop = "none";
          introdutionid.style.margin = "0 0 0 7px";
          introdutionid.style.height = "auto";

          //建議售價標題顯示
          openIntro.style.display = "block";

          //建議售價金額顯示
          nowprice_Spexarmsuplatthigh.style.display = "block";
          nowprice_Spexarmsuplatthigh.style.display = "flex";
          nowprice_Spexarmsuplatthigh.style.width = "95%";
          nowprice_Spexarmsuplatthigh.style.height = "90%";
          nowprice_Spexarmsuplatthigh.style.color = "#000000";
          nowprice_Spexarmsuplatthigh.style.borderRadius = "8px";
          nowprice_Spexarmsuplatthigh.style.padding = "1px";
          nowprice_Spexarmsuplatthigh.style.margin = "3px 3px 3px 2px";
          nowprice_Spexarmsuplatthigh.style.textAlign = "center";
          nowprice_Spexarmsuplatthigh.style.fontSize = "17px";
          nowprice_Spexarmsuplatthigh.style.fontWeight = "600";
          nowprice_Spexarmsuplatthigh.style.alignItems = "center";
          nowprice_Spexarmsuplatthigh.style.justifyContent = "center";

          if (img) {
            img.setAttribute("src", "./img/black triangle after.png");
          }

          if (window.matchMedia("(max-width: 650px)").matches) {
            nowprice_Spexarmsuplatthigh.style.fontSize = "15px";
            introdutionid.style.width = "calc(100% - 9px)";
            Spexarmsuplatthigh.style.padding = "5px";
            Spexarmsuplatthigh.style.margin = "3px 0px 3px 1px";
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
          nowprice_Spexarmsuplatthigh.style.display = "none";

          if (img) {
            img.setAttribute("src", "./img/black triangle.png");
          }
        }
      }
    });
  }
});
//endregion

//region --- 依不同產品選擇扶手、臀撐或是扶手腿撐 ---
//region --- Spex_Arm Supports 扶手角度 Selected---
let Spex_armsuplatthighbuckleOptions = [
  { value: "option1", text: "扣具", selected: true },
  { value: "option2", text: "快拆式" },
  { value: "option3", text: "下擺式" },
  { value: "option4", text: "固定式" },
];
//endregion

//region --- Spex_Arm Supports 扶手角度 Selected---
let Spex_armsupportsOptions = [
  { value: "option1", text: "扶手角度", selected: true },
  { value: "option2", text: "角度可調" },
  { value: "option3", text: "角度固定" },
];
//endregion

//region --- Spex_Lateral Thigh Supports 腿墊調整 Selected---
let Spex_lateralthighOptions = [
  { value: "option1", text: "腿墊調整", selected: true },
  { value: "option2", text: "多軸" },
  { value: "option3", text: "固定" },
];
//endregion

//region --- Spex_Arm Pad 扶手支撐襯墊 Selected---
let Spex_armpadOptions = [
  { value: "option1", text: "扶手襯墊尺寸", selected: true },
  { value: "option2", text: "40mm*250mm" },
  { value: "option3", text: "50mm*300mm" },
  { value: "option4", text: "60mm*350mm" },
  { value: "option5", text: "70mm*250mm" },
  { value: "option6", text: "80mm*300mm" },
  { value: "option6", text: "90mm*350mm" },
];
//endregion

//region --- Spex_Lateral Pad 臀側支撐襯墊 Selected---
let Spex_lateralpadOptions = [
  { value: "option1", text: "臀側支撐襯墊尺寸", selected: true },
  { value: "option2", text: "250mm*75mm*25mm" },
  { value: "option3", text: "300mm*80mm*25mm" },
  { value: "option4", text: "350mm*90mm*25mm" },
  { value: "option5", text: "400mm*100mm*25mm" },
  { value: "option6", text: "430mm*100mm*25mm" },
  { value: "option6", text: "450mm*100mm*25mm" },
];
//endregion

//Spex扶手腿撐的下拉式選單都在這邊加入選項
//region
function armsuplatthighSelect(selectElement, options, other) {
  selectElement.innerHTML = ""; // 清空現有內容
  let SpexarmOrgprices = document.querySelector(".SpexarmOrgprices");
  let SpexlatOrgprices = document.querySelector(".SpexlatOrgprices");
  if (
    SpexarmOrgprices.textContent.replace("元", "").trim() !== "0" ||
    SpexlatOrgprices.textContent.replace("元", "").trim() !== "0"
  ) {
    SpexarmOrgprices.textContent = "";
    SpexlatOrgprices.textContent = "";
  }

  options.forEach((option) => {
    if (other && option.value === "option4") return;

    let opt = document.createElement("option");
    opt.value = option.value;
    opt.textContent = option.text;
    if (option.selected) {
      opt.selected = true;
    }
    selectElement.appendChild(opt);
  });
}
//endregion

//region --- 宣告並隱藏下拉式選單 ---
let buckle = document.querySelector(".Spexarmsuplatthigh_bucklesel");
let armsup = document.querySelector(".Spexarmsuplatthigh_armsupsel");
let latthigh = document.querySelector(".Spexarmsuplatthigh_latthighsel");
let armpad = document.querySelector(".Spexarmsuplatthigh_armpadsel");
let lateralpad = document.querySelector(".Spexarmsuplatthigh_lateralpadsel");
let armpadcount = document.getElementById("armpadcount");
let lateralpadcount = document.getElementById("lateralpadcount");

buckle.disabled = true;
armsup.disabled = true;
latthigh.disabled = true;
armpad.disabled = true;
lateralpad.disabled = true;
armpadcount.disabled = true;
lateralpadcount.disabled = true;
//endregion

//確認勾是扶手臀撐、扶手支撐或是臀側支撐，再給出各自的下拉式選單選擇
//region
document
  .querySelectorAll('input[name="car_SpexArmSupLatThigh"]')
  .forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      document
        .querySelectorAll('input[name="car_SpexArmSupLatThigh"]')
        .forEach((otherCheckbox) => {
          if (otherCheckbox !== this) {
            otherCheckbox.checked = false;
          }
        });
      let nowprice_Spexarmsuplatthigh = Price[13].nextElementSibling;
      if (nowprice_Spexarmsuplatthigh.textContent) {
        nowprice_Spexarmsuplatthigh.textContent = "0元";
      }

      if (checkbox.id === "Spex_ArmSupports") {
        buckle.disabled = false;
        armsup.disabled = false;
        armpad.disabled = false;
        latthigh.disabled = true;
        lateralpad.disabled = true;
        armpadcount.disabled = false;
        lateralpadcount.disabled = true;
        armpadcount.value = "";
        lateralpadcount.value = "";
        armsuplatthighSelect(buckle, Spex_armsuplatthighbuckleOptions);
        armsuplatthighSelect(armsup, Spex_armsupportsOptions);
        armsuplatthighSelect(armpad, Spex_armpadOptions);
        armsuplatthighSelect(latthigh, Spex_lateralthighOptions);
        armsuplatthighSelect(lateralpad, Spex_lateralpadOptions);
      }

      if (checkbox.id === "Spex_LateralThighSupports") {
        buckle.disabled = false;
        latthigh.disabled = false;
        lateralpad.disabled = false;
        armsup.disabled = true;
        armpad.disabled = true;
        armpadcount.disabled = true;
        lateralpadcount.disabled = false;
        armpadcount.value = "";
        lateralpadcount.value = "";
        armsuplatthighSelect(buckle, Spex_armsuplatthighbuckleOptions, true);
        armsuplatthighSelect(latthigh, Spex_lateralthighOptions);
        armsuplatthighSelect(lateralpad, Spex_lateralpadOptions);
        armsuplatthighSelect(armsup, Spex_armsupportsOptions);
        armsuplatthighSelect(armpad, Spex_armpadOptions);
      }

      if (checkbox.id === "Spex_ArmSup_LatThigh") {
        buckle.disabled = false;
        armsup.disabled = false;
        latthigh.disabled = false;
        armpad.disabled = false;
        lateralpad.disabled = false;
        armpadcount.disabled = false;
        lateralpadcount.disabled = false;
        armpadcount.value = "";
        lateralpadcount.value = "";
        armsuplatthighSelect(buckle, Spex_armsuplatthighbuckleOptions);
        armsuplatthighSelect(armsup, Spex_armsupportsOptions);
        armsuplatthighSelect(armpad, Spex_armpadOptions);
        armsuplatthighSelect(latthigh, Spex_lateralthighOptions);
        armsuplatthighSelect(lateralpad, Spex_lateralpadOptions);
      }
    });
  });
//endregion
//endregion

//endregion

/*-----  15.Spex軀幹子系統-背靠點擊列 -----*/
//region
/*---  Spex軀幹子系統-背靠點擊列 - 圖片箭頭部分  ---*/
//region
document.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let tgimg_15 = event.target;
  let carseat15 = tgimg_15.closest(".Spex_backsupports"); // 找到最近的 Spex_backsupports
  let imgSpexbacksupports = event.target.dataset.imgSpexbacksupports;

  //確認我點擊到的位置是否是Spexbacksupports
  if (carseat15 && carseat15.className.trim() === "Spex_backsupports") {
    let introdutionid = carseat15.querySelector(".Spexbacksupportsgroup"); // 在 Spex_backsupports 內部找 Spexbacksupportsgroup
    let introdution = carseat15.querySelector(".subtitle"); // 在 Spex_backsupports 內部找 subtitle

    if (introdutionid) {
      // 取得 `visibility` 的計算後樣式
      let visibilityValue = window.getComputedStyle(introdutionid).visibility;

      if (imgSpexbacksupports === "SpexbacksupportsImg") {
        if (visibilityValue === "hidden") {
          let Price_Spexbacksupports = document.querySelectorAll(".pricing");

          Price_Spexbacksupports.forEach(function (openIntro) {
            let Spexbacksupports = Price_Spexbacksupports[14];
            //直接判斷是第幾個.Price
            let nowprice_Spexbacksupports =
              Price_Spexbacksupports[14].nextElementSibling;

            if (
              openIntro.getAttribute("data-price-Spexbacksupports") ===
                "Spexbacksupports" &&
              nowprice_Spexbacksupports.getAttribute(
                "data-nowprice-Spexbacksupports"
              ) === "nowSpexbacksupports"
            ) {
              if (introdution.getAttribute("data-collapse-status") === "0") {
                //把data-collapse-status改成1
                introdution.setAttribute("data-collapse-status", "1");

                //Spexbacksupports勾選位置大小設置
                introdutionid.style.visibility = "visible";
                introdutionid.style.padding = "0px 1px 1px 3px";
                introdutionid.style.width = "calc(100% - 22px)";
                introdutionid.style.display = "flex";
                introdutionid.style.flexDirection = "column";
                introdutionid.style.border = "3px dashed black";
                introdutionid.style.borderTop = "none";
                introdutionid.style.margin = "0 0 0 7px";
                introdutionid.style.height = "auto";
                //建議售價標題顯示
                openIntro.style.display = "block";

                //建議售價金額顯示
                nowprice_Spexbacksupports.style.display = "block";
                nowprice_Spexbacksupports.style.display = "flex";
                nowprice_Spexbacksupports.style.width = "95%";
                nowprice_Spexbacksupports.style.height = "90%";
                nowprice_Spexbacksupports.style.color = "#000000";
                nowprice_Spexbacksupports.style.borderRadius = "8px";
                nowprice_Spexbacksupports.style.padding = "1px";
                nowprice_Spexbacksupports.style.margin = "3px 3px 3px 2px";
                nowprice_Spexbacksupports.style.textAlign = "center";
                nowprice_Spexbacksupports.style.fontSize = "17px";
                nowprice_Spexbacksupports.style.fontWeight = "600";
                nowprice_Spexbacksupports.style.alignItems = "center";
                nowprice_Spexbacksupports.style.justifyContent = "center";

                if (window.matchMedia("(max-width: 650px)").matches) {
                  nowprice_Spexbacksupports.style.fontSize = "15px";
                  introdutionid.style.width = "calc(100% - 9px)";
                  Spexbacksupports.style.padding = "5px";
                  Spexbacksupports.style.margin = "3px 0px 3px 1px";
                }
              }
            }
          });
        } else {
          let Price_Spexbacksupports = document.querySelectorAll(".pricing");

          Price_Spexbacksupports.forEach(function (openIntro) {
            let nowprice_Spexbacksupports =
              Price_Spexbacksupports[14].nextElementSibling;

            //把data-collapse-status改成0
            introdution.setAttribute("data-collapse-status", "0");

            //建議售價標題隱藏
            introdutionid.style.visibility = "hidden";
            introdutionid.style.height = "0";
            introdutionid.style.padding = "0";
            introdutionid.style.border = "0px dashed black";
            introdutionid.style.margin = "0";

            if (
              openIntro.getAttribute("data-price-Spexbacksupports") ===
              "Spexbacksupports"
            ) {
              //建議售價金額隱藏
              openIntro.style.display = "none";
            }
            nowprice_Spexbacksupports.style.display = "none";
          });
        }
      }
    }
  }
});
// endregion

/*---  Spex軀幹子系統-背靠點擊列 - subtitle部分  ---*/
//region
let Spex_backsupports = document.querySelector(".Spex_backsupports");
Spex_backsupports.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let showinfo = event.target.dataset.showinfo;
  let introdution = event.target;
  //確認我點擊到的位置是否是Spex_backsupports
  if (showinfo === "Spexbacksupports") {
    let introdutionid = event.target.nextElementSibling;
    let Price_Spex_backsupports = document.querySelectorAll(".pricing");
    let Spex_backsupportsimg = Spex_backsupports.querySelector(".target_img"); // 找到最近的 .target_img
    let img = Spex_backsupportsimg.querySelector("img");

    Price_Spex_backsupports.forEach(function (openIntro) {
      let Spexbacksupports = Price_Spex_backsupports[14];
      //直接判斷是第幾個.Price
      let nowprice_Spexbacksupports =
        Price_Spex_backsupports[14].nextElementSibling;

      if (
        openIntro.getAttribute("data-price-Spexbacksupports") ===
          "Spexbacksupports" &&
        nowprice_Spexbacksupports.getAttribute(
          "data-nowprice-Spexbacksupports"
        ) === "nowSpexbacksupports"
      ) {
        if (introdution.getAttribute("data-collapse-status") === "0") {
          //把data-collapse-status改成1
          introdution.setAttribute("data-collapse-status", "1");

          //carSpexbacksupports勾選位置大小設置
          introdutionid.style.visibility = "visible";
          introdutionid.style.padding = "0px 1px 2px 3px";
          introdutionid.style.width = "calc(100% - 22px)";
          introdutionid.style.display = "flex";
          introdutionid.style.flexDirection = "column";
          introdutionid.style.border = "3px dashed black";
          introdutionid.style.borderTop = "none";
          introdutionid.style.margin = "0 0 0 7px";
          introdutionid.style.height = "auto";

          //建議售價標題顯示
          openIntro.style.display = "block";

          //建議售價金額顯示
          nowprice_Spexbacksupports.style.display = "block";
          nowprice_Spexbacksupports.style.display = "flex";
          nowprice_Spexbacksupports.style.width = "95%";
          nowprice_Spexbacksupports.style.height = "90%";
          nowprice_Spexbacksupports.style.color = "#000000";
          nowprice_Spexbacksupports.style.borderRadius = "8px";
          nowprice_Spexbacksupports.style.padding = "1px";
          nowprice_Spexbacksupports.style.margin = "3px 3px 3px 2px";
          nowprice_Spexbacksupports.style.textAlign = "center";
          nowprice_Spexbacksupports.style.fontSize = "17px";
          nowprice_Spexbacksupports.style.fontWeight = "600";
          nowprice_Spexbacksupports.style.alignItems = "center";
          nowprice_Spexbacksupports.style.justifyContent = "center";

          if (img) {
            img.setAttribute("src", "./img/black triangle after.png");
          }

          if (window.matchMedia("(max-width: 650px)").matches) {
            nowprice_Spexbacksupports.style.fontSize = "15px";
            introdutionid.style.width = "calc(100% - 9px)";
            Spexbacksupports.style.padding = "5px";
            Spexbacksupports.style.margin = "3px 0px 3px 1px";
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
          nowprice_Spexbacksupports.style.display = "none";

          if (img) {
            img.setAttribute("src", "./img/black triangle.png");
          }
        }
      }
    });
  }
});
//endregion

//region --- 主要做所有背靠的尺寸選擇 ---

//region ---Spex_Zygo_Active_Lo Selected---
let Spex_Zygo_Active_LowidthOptions = [
  { value: "option1", text: "車寬", selected: true },
  { value: "option2", text: "12”" },
  { value: "option3", text: "14”" },
  { value: "option4", text: "16”" },
  { value: "option5", text: "18”" },
  { value: "option6", text: "20”" },
];

let Spex_Zygo_Active_LoheightOptions = [
  { value: "optionA", text: "背高", selected: true },
  { value: "optionB", text: "7”" },
  { value: "optionC", text: "8”" },
  { value: "optionD", text: "9”" },
  { value: "optionE", text: "11”" },
];
//endregion

//region ---Spex_Zygo_Active_Mid Selected---
let Spex_Zygo_Active_MidwidthOptions = [
  { value: "option1", text: "車寬", selected: true },
  { value: "option2", text: "10”" },
  { value: "option3", text: "12”" },
  { value: "option4", text: "14”" },
  { value: "option5", text: "16”" },
  { value: "option6", text: "18”" },
  { value: "option7", text: "20”" },
];

let Spex_Zygo_Active_MidheightOptions = [
  { value: "optionA", text: "背高", selected: true },
  { value: "optionB", text: "9”" },
  { value: "optionC", text: "10”" },
  { value: "optionD", text: "11”" },
  { value: "optionE", text: "12”" },
  { value: "optionF", text: "13”" },
  { value: "optionG", text: "14”" },
  { value: "optionH", text: "15”" },
  { value: "optionI", text: "16”" },
  { value: "optionJ", text: "17”" },
  { value: "optionK", text: "18”" },
];
//endregion

//region ---Spex_Zygo_Deep_Lo Selected---
let Spex_Zygo_Deep_LowidthOptions = [
  { value: "option1", text: "車寬", selected: true },
  { value: "option2", text: "12”" },
  { value: "option3", text: "14”" },
  { value: "option4", text: "16”" },
  { value: "option5", text: "18”" },
  { value: "option6", text: "20”" },
];

let Spex_Zygo_Deep_LoheightOptions = [
  { value: "optionA", text: "背高", selected: true },
  { value: "optionB", text: "7”" },
  { value: "optionC", text: "8”" },
  { value: "optionD", text: "9”" },
  { value: "optionE", text: "11”" },
];
//endregion

//region ---Spex_Zygo_Deep_Mid Selected---
let Spex_Zygo_Deep_MidwidthOptions = [
  { value: "option1", text: "車寬", selected: true },
  { value: "option2", text: "10”" },
  { value: "option3", text: "12”" },
  { value: "option4", text: "14”" },
  { value: "option5", text: "16”" },
  { value: "option6", text: "18”" },
  { value: "option7", text: "20”" },
];

let Spex_Zygo_Deep_MidheightOptions = [
  { value: "optionA", text: "背高", selected: true },
  { value: "optionB", text: "9”" },
  { value: "optionC", text: "10”" },
  { value: "optionD", text: "11”" },
  { value: "optionE", text: "12”" },
  { value: "optionF", text: "13”" },
  { value: "optionG", text: "14”" },
  { value: "optionH", text: "15”" },
  { value: "optionI", text: "16”" },
  { value: "optionJ", text: "17”" },
  { value: "optionK", text: "18”" },
];
//endregion

//region ---Spex_Vigour Selected---
let Spex_VigourwidthOptions = [
  { value: "option1", text: "車寬", selected: true },
  { value: "option2", text: "12”" },
  { value: "option3", text: "13”" },
  { value: "option4", text: "14”" },
  { value: "option5", text: "15”" },
  { value: "option6", text: "16”" },
  { value: "option7", text: "17”" },
  { value: "option8", text: "18”" },
  { value: "option9", text: "19”" },
  { value: "option10", text: "20”" },
];

let Spex_VigourheightOptions = [
  { value: "optionA", text: "背高", selected: true },
  { value: "optionB", text: "14”" },
  { value: "optionC", text: "16”" },
  { value: "optionD", text: "18”" },
  { value: "optionE", text: "20”" },
  { value: "optionF", text: "23”" },
];
//endregion

//region ---Spex_Mantaray Selected---
let Spex_MantaraywidthOptions = [
  { value: "option1", text: "車寬", selected: true },
  { value: "option2", text: "12”" },
  { value: "option3", text: "13”" },
  { value: "option4", text: "14”" },
  { value: "option5", text: "15”" },
  { value: "option6", text: "16”" },
  { value: "option7", text: "17”" },
  { value: "option8", text: "18”" },
  { value: "option9", text: "19”" },
  { value: "option10", text: "20”" },
];

let Spex_MantarayheightOptions = [
  { value: "optionA", text: "背高", selected: true },
  { value: "optionB", text: "14”" },
  { value: "optionC", text: "16”" },
  { value: "optionD", text: "18”" },
  { value: "optionE", text: "20”" },
];
//endregion

//region ---Spex_Classic Selected---
let Spex_ClassicwidthOptions = [
  { value: "option1", text: "車寬", selected: true },
  { value: "option2", text: "13”" },
  { value: "option3", text: "14”" },
  { value: "option4", text: "15”" },
  { value: "option5", text: "16”" },
  { value: "option6", text: "17”" },
  { value: "option7", text: "18”" },
];

let Spex_ClassicheightOptions = [
  { value: "optionA", text: "背高", selected: true },
  { value: "optionB", text: "14”" },
  { value: "optionC", text: "16”" },
  { value: "optionD", text: "18”" },
  { value: "optionE", text: "20”" },
  { value: "optionF", text: "23”" },
];
//endregion

//region ---Spex_SuperShape Selected---
let Spex_SuperShapewidthOptions = [
  { value: "option1", text: "車寬", selected: true },
  { value: "option2", text: "12”" },
  { value: "option3", text: "13”" },
  { value: "option4", text: "14”" },
  { value: "option5", text: "15”" },
  { value: "option6", text: "16”" },
  { value: "option7", text: "17”" },
  { value: "option8", text: "18”" },
];

let Spex_SuperShapeheightOptions = [
  { value: "optionA", text: "背高", selected: true },
  { value: "optionB", text: "12”" },
  { value: "optionC", text: "14”" },
  { value: "optionD", text: "16”" },
  { value: "optionE", text: "18”" },
  { value: "optionF", text: "20”" },
  { value: "optionG", text: "23”" },
];
//endregion

//region ---Spex_Adapta2 Selected---
let Spex_Adapta2widthOptions = [
  { value: "option1", text: "車寬", selected: true },
  { value: "option2", text: "14”" },
  { value: "option3", text: "16”" },
  { value: "option4", text: "18”" },
  { value: "option5", text: "20”" },
];

let Spex_Adapta2heightOptions = [
  { value: "optionA", text: "背高", selected: true },
  { value: "optionB", text: "12”" },
  { value: "optionC", text: "13”" },
  { value: "optionD", text: "14”" },
  { value: "optionE", text: "15”" },
  { value: "optionF", text: "17”" },
];
//endregion

//region ---Spex_Adapta3 Selected---
let Spex_Adapta3widthOptions = [
  { value: "option1", text: "車寬", selected: true },
  { value: "option2", text: "14”" },
  { value: "option3", text: "16”" },
  { value: "option4", text: "18”" },
  { value: "option5", text: "20”" },
];

let Spex_Adapta3heightOptions = [
  { value: "optionA", text: "背高", selected: true },
  { value: "optionB", text: "16”" },
  { value: "optionC", text: "18”" },
  { value: "optionD", text: "20”" },
  { value: "optionE", text: "22”" },
];
//endregion

//region ---Spex_Adapta3_QuicklyLift Selected---
let Spex_Adapta3_QuicklyLiftwidthOptions = [
  { value: "option1", text: "車寬", selected: true },
  { value: "option2", text: "14”" },
  { value: "option3", text: "16”" },
  { value: "option4", text: "18”" },
  { value: "option5", text: "20”" },
];

let Spex_Adapta3_QuicklyLiftheightOptions = [
  { value: "optionA", text: "背高", selected: true },
  { value: "optionB", text: "16”" },
  { value: "optionC", text: "18”" },
  { value: "optionD", text: "20”" },
  { value: "optionE", text: "22”" },
];
//endregion

//region ---Spex_Adapta3_Foam Selected---
let Spex_Adapta3_FoamwidthOptions = [
  { value: "option1", text: "車寬", selected: true },
  { value: "option2", text: "14”" },
  { value: "option3", text: "16”" },
  { value: "option4", text: "18”" },
  { value: "option5", text: "20”" },
];

let Spex_Adapta3_FoamheightOptions = [
  { value: "optionA", text: "背高", selected: true },
  { value: "optionB", text: "16”" },
  { value: "optionC", text: "18”" },
  { value: "optionD", text: "20”" },
  { value: "optionE", text: "22”" },
];
//endregion

//region ---Spex_Adapta3_QuicklyLift_Foam Selected---
let Spex_Adapta3_QuicklyLift_FoamwidthOptions = [
  { value: "option1", text: "車寬", selected: true },
  { value: "option2", text: "14”" },
  { value: "option3", text: "16”" },
  { value: "option4", text: "18”" },
  { value: "option5", text: "20”" },
];

let Spex_Adapta3_QuicklyLift_FoamheightOptions = [
  { value: "optionA", text: "背高", selected: true },
  { value: "optionB", text: "16”" },
  { value: "optionC", text: "18”" },
  { value: "optionD", text: "20”" },
  { value: "optionE", text: "22”" },
];
//endregion

//region --- Spex背靠的"寬"、"長"的選項會進入這裡做篩選 ---
function BackSupportsSizeSelect(selectElement, options) {
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
//endregion

let BackSupportscolorSelect = document.querySelector(
  ".Spexbacksupports_colorsel"
);

BackSupportscolorSelect.addEventListener("change", function () {
  const selectedOption = this.options[this.selectedIndex];
  this.style.backgroundColor = selectedOption.style.backgroundColor;
  this.style.color = "white"; //更新字體顏色
});

//確定勾選的是哪個Spex背靠並給予"寬"及"長"，且不會重複勾選選項
//region
document
  .querySelectorAll('input[name="car_SpexBackSupports"]')
  .forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      document
        .querySelectorAll('input[name="car_SpexBackSupports"]')
        .forEach((otherCheckbox) => {
          if (otherCheckbox !== this) {
            otherCheckbox.checked = false;
          }
        });

      if (nowprice_SpexBackSupports.textContent !== "0元") {
        nowprice_SpexBackSupports.textContent = "0元";
      }
      let BackSupportswidthSelect = document.querySelector(
        ".Spexbacksupports_Width"
      );
      let BackSupportsheightSelect = document.querySelector(
        ".Spexbacksupports_Heigh"
      );
      let BackSupportscolorSelect = document.querySelector(
        ".Spexbacksupports_colorsel"
      );

      //確認是選擇"Spex_Zygo_Active_Lo 淺廓型低背靠"
      if (this.dataset.item === "Spex_Zygo_Active_Lo 淺廓型低背靠") {
        //確認有勾選坐墊後開啟
        BackSupportswidthSelect.disabled = false;
        BackSupportsSizeSelect(
          BackSupportswidthSelect,
          Spex_Zygo_Active_LowidthOptions
        );
        BackSupportsSizeSelect(
          BackSupportsheightSelect,
          Spex_Zygo_Active_LoheightOptions
        );
        ProductColorSelect(BackSupportscolorSelect, ColorSelectOptions);
      }

      //確認是選擇"Spex_Zygo_Active_Mid 淺廓型中背靠"
      else if (this.dataset.item === "Spex_Zygo_Active_Mid 淺廓型中背靠") {
        //確認有勾選坐墊後開啟
        BackSupportswidthSelect.disabled = false;
        BackSupportsSizeSelect(
          BackSupportswidthSelect,
          Spex_Zygo_Active_MidwidthOptions
        );
        BackSupportsSizeSelect(
          BackSupportsheightSelect,
          Spex_Zygo_Active_MidheightOptions
        );
        ProductColorSelect(BackSupportscolorSelect, ColorSelectOptions);
      }

      //確認是選擇"Spex_Zygo_Deep_Lo 深廓型低背靠"
      else if (this.dataset.item === "Spex_Zygo_Deep_Lo 深廓型低背靠") {
        //確認有勾選坐墊後開啟
        BackSupportswidthSelect.disabled = false;
        BackSupportsSizeSelect(
          BackSupportswidthSelect,
          Spex_Zygo_Deep_LowidthOptions
        );
        BackSupportsSizeSelect(
          BackSupportsheightSelect,
          Spex_Zygo_Deep_LoheightOptions
        );
        ProductColorSelect(BackSupportscolorSelect, ColorSelectOptions);
      }

      //確認是選擇"Spex_Zygo_Deep_Mid 深廓型中背靠"
      else if (this.dataset.item === "Spex_Zygo_Deep_Mid 深廓型中背靠") {
        //確認有勾選坐墊後開啟
        BackSupportswidthSelect.disabled = false;
        BackSupportsSizeSelect(
          BackSupportswidthSelect,
          Spex_Zygo_Deep_MidwidthOptions
        );
        BackSupportsSizeSelect(
          BackSupportsheightSelect,
          Spex_Zygo_Deep_MidheightOptions
        );
        ProductColorSelect(BackSupportscolorSelect, ColorSelectOptions);
      }

      //確認是選擇"Spex_Vigour 高背靠"
      else if (this.dataset.item === "Spex_Vigour 高背靠") {
        //確認有勾選坐墊後開啟
        BackSupportswidthSelect.disabled = false;
        BackSupportsSizeSelect(
          BackSupportswidthSelect,
          Spex_VigourwidthOptions
        );
        BackSupportsSizeSelect(
          BackSupportsheightSelect,
          Spex_VigourheightOptions
        );
        ProductColorSelect(BackSupportscolorSelect, ColorSelectOptions);
      }

      //確認是選擇"Spex_Mantaray 側邊包覆型背靠"
      else if (this.dataset.item === "Spex_Mantaray 側邊包覆型背靠") {
        //確認有勾選坐墊後開啟
        BackSupportswidthSelect.disabled = false;
        BackSupportsSizeSelect(
          BackSupportswidthSelect,
          Spex_MantaraywidthOptions
        );
        BackSupportsSizeSelect(
          BackSupportsheightSelect,
          Spex_MantarayheightOptions
        );
        ProductColorSelect(BackSupportscolorSelect, ColorSelectOptions);
      }

      //確認是選擇"Spex_Classic 調整型背靠"
      else if (this.dataset.item === "Spex_Classic 調整型背靠") {
        //確認有勾選坐墊後開啟
        BackSupportswidthSelect.disabled = false;
        BackSupportsSizeSelect(
          BackSupportswidthSelect,
          Spex_ClassicwidthOptions
        );
        BackSupportsSizeSelect(
          BackSupportsheightSelect,
          Spex_ClassicheightOptions
        );
        ProductColorSelect(BackSupportscolorSelect, ColorSelectOptions);
      }

      //確認是選擇"Spex_SuperShape 超高度調整型背靠"
      else if (this.dataset.item === "Spex_SuperShape 超高度調整型背靠") {
        //確認有勾選坐墊後開啟
        BackSupportswidthSelect.disabled = false;
        BackSupportsSizeSelect(
          BackSupportswidthSelect,
          Spex_SuperShapewidthOptions
        );
        BackSupportsSizeSelect(
          BackSupportsheightSelect,
          Spex_SuperShapeheightOptions
        );
        ProductColorSelect(BackSupportscolorSelect, ColorSelectOptions);
      }

      //確認是選擇"Spex_Adapta2 調整型背靠"
      else if (this.dataset.item === "Spex_Adapta2 調整型背靠") {
        //確認有勾選坐墊後開啟
        BackSupportswidthSelect.disabled = false;
        BackSupportsSizeSelect(
          BackSupportswidthSelect,
          Spex_Adapta2widthOptions
        );
        BackSupportsSizeSelect(
          BackSupportsheightSelect,
          Spex_Adapta2heightOptions
        );
        ProductColorSelect(BackSupportscolorSelect, ColorSelectOptions);
      }

      //確認是選擇"Spex_Adapta3 調整型背靠"
      else if (this.dataset.item === "Spex_Adapta3 調整型背靠") {
        //確認有勾選坐墊後開啟
        BackSupportswidthSelect.disabled = false;
        BackSupportsSizeSelect(
          BackSupportswidthSelect,
          Spex_Adapta3widthOptions
        );
        BackSupportsSizeSelect(
          BackSupportsheightSelect,
          Spex_Adapta3heightOptions
        );
        ProductColorSelect(BackSupportscolorSelect, ColorSelectOptions);
      }

      //確認是選擇"Spex_Adapta3 調整型背靠 / 快掀"
      else if (this.dataset.item === "Spex_Adapta3 調整型背靠 / 快掀") {
        //確認有勾選坐墊後開啟
        BackSupportswidthSelect.disabled = false;
        BackSupportsSizeSelect(
          BackSupportswidthSelect,
          Spex_Adapta3_QuicklyLiftwidthOptions
        );
        BackSupportsSizeSelect(
          BackSupportsheightSelect,
          Spex_Adapta3_QuicklyLiftheightOptions
        );
        ProductColorSelect(BackSupportscolorSelect, ColorSelectOptions);
      }

      //確認是選擇"Spex_Adapta3 調整型背靠 / 脊凸泡綿"
      else if (this.dataset.item === "Spex_Adapta3 調整型背靠 / 脊凸泡綿") {
        //確認有勾選坐墊後開啟
        BackSupportswidthSelect.disabled = false;
        BackSupportsSizeSelect(
          BackSupportswidthSelect,
          Spex_Adapta3_FoamwidthOptions
        );
        BackSupportsSizeSelect(
          BackSupportsheightSelect,
          Spex_Adapta3_FoamheightOptions
        );
        ProductColorSelect(BackSupportscolorSelect, ColorSelectOptions);
      }

      //確認是選擇"Spex_Adapta3 調整型背靠 / 脊凸泡綿 / 快掀"
      else if (
        this.dataset.item === "Spex_Adapta3 調整型背靠 / 脊凸泡綿 / 快掀"
      ) {
        //確認有勾選坐墊後開啟
        BackSupportswidthSelect.disabled = false;
        BackSupportsSizeSelect(
          BackSupportswidthSelect,
          Spex_Adapta3_QuicklyLift_FoamwidthOptions
        );
        BackSupportsSizeSelect(
          BackSupportsheightSelect,
          Spex_Adapta3_QuicklyLift_FoamheightOptions
        );
        ProductColorSelect(BackSupportscolorSelect, ColorSelectOptions);
      }
    });
  });
//endregion

//region --- 因不同的背靠的"寬"，會有不同"長"的選擇 ---
document.addEventListener("DOMContentLoaded", function () {
  let BackSupportswidthSelect = document.querySelector(
    ".Spexbacksupports_Width"
  );
  let BackSupportsheightSelect = document.querySelector(
    ".Spexbacksupports_Heigh"
  );
  let BackSupportscolorSelect = document.querySelector(
    ".Spexbacksupports_colorsel"
  );
  let Price = document.querySelectorAll(".pricing");
  let nowprice_SpexBackSupports = Price[14].nextElementSibling;

  //剛開啟時讓colorSelect無法選擇
  BackSupportscolorSelect.disabled = true;
  //剛開啟時讓widthSelect無法選擇
  BackSupportswidthSelect.disabled = true;
  // 預設讓 heightSelect 無法選擇
  BackSupportsheightSelect.disabled = true;

  BackSupportswidthSelect.addEventListener("change", function () {
    if (BackSupportswidthSelect.value) {
      BackSupportsheightSelect.disabled = false; // 當有選擇時，解鎖heightSelect
      BackSupportscolorSelect.disabled = false;
    } else {
      BackSupportsheightSelect.disabled = true; // 當未選擇時，鎖住heightSelect
      BackSupportscolorSelect.disabled = true;
    }

    if (nowprice_SpexBackSupports.textContent) {
      nowprice_SpexBackSupports.textContent = "0元";
    }
    // 找到 checkbox
    let SpexZygoActiveLoCheckbox = document.querySelector(
      "#Spex_Zygo_Active_Lo"
    );
    let SpexZygoActiveMidCheckbox = document.querySelector(
      "#Spex_Zygo_Active_Mid"
    );
    let SpexZygoDeepLoCheckbox = document.querySelector("#Spex_Zygo_Deep_Lo");
    let SpexZygoDeepMidCheckbox = document.querySelector("#Spex_Zygo_Deep_Mid");
    let SpexVigourCheckbox = document.querySelector("#Spex_Vigour");
    let SpexMantarayCheckbox = document.querySelector("#Spex_Mantaray");
    let SpexClassicCheckbox = document.querySelector("#Spex_Classic");
    let SpexSuperShapeCheckbox = document.querySelector("#Spex_SuperShape");
    let SpexAdapta2Checkbox = document.querySelector("#Spex_Adapta2");
    let SpexAdapta3Checkbox = document.querySelector("#Spex_Adapta3");
    let SpexAdapta3QuicklyLiftCheckbox = document.querySelector(
      "#Spex_Adapta3_QuicklyLift"
    );
    let SpexAdapta3FoamCheckbox = document.querySelector("#Spex_Adapta3_Foam");
    let SpexAdapta3QuicklyLiftFoamCheckbox = document.querySelector(
      "#Spex_Adapta3_QuicklyLift_Foam"
    );

    //region --- Spex_Zygo_Active_Lo 淺廓型低背靠 ---
    if (SpexZygoActiveLoCheckbox.checked) {
      //當選擇在"寬"時則將"長"的欄位鎖住，或是當選擇完其他後又不需要產品時，勾選"寬"可鎖住"長"
      if (BackSupportswidthSelect.value === "option1") {
        BackSupportsSizeSelect(
          BackSupportswidthSelect,
          Spex_Zygo_Active_LowidthOptions
        );
        BackSupportsSizeSelect(
          BackSupportsheightSelect,
          Spex_Zygo_Active_LoheightOptions
        );
        BackSupportsheightSelect.disabled = true; // 當未選擇時，鎖住 BackSupportsheightSelect
        BackSupportscolorSelect.disabled = true;
      }
      //當選擇是寬"12”"時，"長"只會有"7”"
      if (BackSupportswidthSelect.value === "option2") {
        let filteredHeightOptions = Spex_Zygo_Active_LoheightOptions;
        filteredHeightOptions = Spex_Zygo_Active_LoheightOptions.filter(
          (option) => ["optionA", "optionB"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"14”"時，"長"只會有"8”"
      if (BackSupportswidthSelect.value === "option3") {
        let filteredHeightOptions = Spex_Zygo_Active_LoheightOptions;
        filteredHeightOptions = Spex_Zygo_Active_LoheightOptions.filter(
          (option) => ["optionA", "optionC"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"16”"時，"長"只會有"9”"
      if (BackSupportswidthSelect.value === "option4") {
        let filteredHeightOptions = Spex_Zygo_Active_LoheightOptions;
        filteredHeightOptions = Spex_Zygo_Active_LoheightOptions.filter(
          (option) => ["optionA", "optionD"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"18”"時，"長"只會有"9”"
      if (BackSupportswidthSelect.value === "option5") {
        let filteredHeightOptions = Spex_Zygo_Active_LoheightOptions;
        filteredHeightOptions = Spex_Zygo_Active_LoheightOptions.filter(
          (option) => ["optionA", "optionD"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"20”"時，"長"只會有"11”"
      if (BackSupportswidthSelect.value === "option6") {
        let filteredHeightOptions = Spex_Zygo_Active_LoheightOptions;
        filteredHeightOptions = Spex_Zygo_Active_LoheightOptions.filter(
          (option) => ["optionA", "optionE"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
    }
    //endregion

    //region --- Spex_Zygo_Active_Mid 淺廓型中背靠 ---
    if (SpexZygoActiveMidCheckbox.checked) {
      //當選擇在"寬"時則將"長"的欄位鎖住，或是當選擇完其他後又不需要產品時，勾選"寬"可鎖住"長"
      if (BackSupportswidthSelect.value === "option1") {
        BackSupportsSizeSelect(
          BackSupportswidthSelect,
          Spex_Zygo_Active_MidwidthOptions
        );
        BackSupportsSizeSelect(
          BackSupportsheightSelect,
          Spex_Zygo_Active_MidheightOptions
        );
        BackSupportsheightSelect.disabled = true; // 當未選擇時，鎖住 BackSupportsheightSelect
        BackSupportscolorSelect.disabled = true;
      }
      //當選擇是寬"10”"時，"長"只會有"9”"、"11”"
      if (BackSupportswidthSelect.value === "option2") {
        let filteredHeightOptions = Spex_Zygo_Active_MidheightOptions;
        filteredHeightOptions = Spex_Zygo_Active_MidheightOptions.filter(
          (option) => ["optionA", "optionB", "optionD"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"12”"時，"長"只會有"10”"、"12”"、"13”"
      if (BackSupportswidthSelect.value === "option3") {
        let filteredHeightOptions = Spex_Zygo_Active_MidheightOptions;
        filteredHeightOptions = Spex_Zygo_Active_MidheightOptions.filter(
          (option) =>
            ["optionA", "optionC", "optionE", "optionF"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"14”"時，"長"只會有"13”"、"15”"、"16”"
      if (BackSupportswidthSelect.value === "option4") {
        let filteredHeightOptions = Spex_Zygo_Active_MidheightOptions;
        filteredHeightOptions = Spex_Zygo_Active_MidheightOptions.filter(
          (option) =>
            ["optionA", "optionF", "optionH", "optionI"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"16”"時，"長"只會有"14”"、"16”"、"17”"
      if (BackSupportswidthSelect.value === "option5") {
        let filteredHeightOptions = Spex_Zygo_Active_MidheightOptions;
        filteredHeightOptions = Spex_Zygo_Active_MidheightOptions.filter(
          (option) =>
            ["optionA", "optionG", "optionI", "optionJ"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"18”"時，"長"只會有"15”"、"17”"、"18”"
      if (BackSupportswidthSelect.value === "option6") {
        let filteredHeightOptions = Spex_Zygo_Active_MidheightOptions;
        filteredHeightOptions = Spex_Zygo_Active_MidheightOptions.filter(
          (option) =>
            ["optionA", "optionH", "optionJ", "optionK"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"20”"時，"長"只會有"15”"、"18”"
      if (BackSupportswidthSelect.value === "option7") {
        let filteredHeightOptions = Spex_Zygo_Active_MidheightOptions;
        filteredHeightOptions = Spex_Zygo_Active_MidheightOptions.filter(
          (option) => ["optionA", "optionH", "optionK"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
    }
    //endregion

    //region --- Spex_Zygo_Deep_Lo 深廓型低背靠 ---
    if (SpexZygoDeepLoCheckbox.checked) {
      //當選擇在"寬"時則將"長"的欄位鎖住，或是當選擇完其他後又不需要產品時，勾選"寬"可鎖住"長"
      if (BackSupportswidthSelect.value === "option1") {
        BackSupportsSizeSelect(
          BackSupportswidthSelect,
          Spex_Zygo_Deep_LowidthOptions
        );
        BackSupportsSizeSelect(
          BackSupportsheightSelect,
          Spex_Zygo_Deep_LoheightOptions
        );
        BackSupportsheightSelect.disabled = true; // 當未選擇時，鎖住 BackSupportsheightSelect
        BackSupportscolorSelect.disabled = true;
      }
      //當選擇是寬"12”"時，"長"只會有"7”"
      if (BackSupportswidthSelect.value === "option2") {
        let filteredHeightOptions = Spex_Zygo_Deep_LoheightOptions;
        filteredHeightOptions = Spex_Zygo_Deep_LoheightOptions.filter(
          (option) => ["optionA", "optionB"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"14”"時，"長"只會有"8”"
      if (BackSupportswidthSelect.value === "option3") {
        let filteredHeightOptions = Spex_Zygo_Deep_LoheightOptions;
        filteredHeightOptions = Spex_Zygo_Deep_LoheightOptions.filter(
          (option) => ["optionA", "optionC"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"16”"時，"長"只會有"9”"
      if (BackSupportswidthSelect.value === "option4") {
        let filteredHeightOptions = Spex_Zygo_Deep_LoheightOptions;
        filteredHeightOptions = Spex_Zygo_Deep_LoheightOptions.filter(
          (option) => ["optionA", "optionD"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"18”"時，"長"只會有"9”"
      if (BackSupportswidthSelect.value === "option5") {
        let filteredHeightOptions = Spex_Zygo_Deep_LoheightOptions;
        filteredHeightOptions = Spex_Zygo_Deep_LoheightOptions.filter(
          (option) => ["optionA", "optionD"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"20”"時，"長"只會有"11”"
      if (BackSupportswidthSelect.value === "option6") {
        let filteredHeightOptions = Spex_Zygo_Deep_LoheightOptions;
        filteredHeightOptions = Spex_Zygo_Deep_LoheightOptions.filter(
          (option) => ["optionA", "optionE"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
    }
    //endregion

    //region --- Spex_Zygo_Deep_Mid 深廓型中背靠 ---
    if (SpexZygoDeepMidCheckbox.checked) {
      //當選擇在"寬"時則將"長"的欄位鎖住，或是當選擇完其他後又不需要產品時，勾選"寬"可鎖住"長"
      if (BackSupportswidthSelect.value === "option1") {
        BackSupportsSizeSelect(
          BackSupportswidthSelect,
          Spex_Zygo_Deep_MidwidthOptions
        );
        BackSupportsSizeSelect(
          BackSupportsheightSelect,
          Spex_Zygo_Deep_MidheightOptions
        );
        BackSupportsheightSelect.disabled = true; // 當未選擇時，鎖住 BackSupportsheightSelect
        BackSupportscolorSelect.disabled = true;
      }
      //當選擇是寬"10”"時，"長"只會有"9”"、"11”"
      if (BackSupportswidthSelect.value === "option2") {
        let filteredHeightOptions = Spex_Zygo_Deep_MidheightOptions;
        filteredHeightOptions = Spex_Zygo_Deep_MidheightOptions.filter(
          (option) => ["optionA", "optionB", "optionD"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"12”"時，"長"只會有"10”"、"12”"、"13”"
      if (BackSupportswidthSelect.value === "option3") {
        let filteredHeightOptions = Spex_Zygo_Deep_MidheightOptions;
        filteredHeightOptions = Spex_Zygo_Deep_MidheightOptions.filter(
          (option) =>
            ["optionA", "optionC", "optionE", "optionF"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"14”"時，"長"只會有"13”"、"15”"、"16”"
      if (BackSupportswidthSelect.value === "option4") {
        let filteredHeightOptions = Spex_Zygo_Deep_MidheightOptions;
        filteredHeightOptions = Spex_Zygo_Deep_MidheightOptions.filter(
          (option) =>
            ["optionA", "optionF", "optionH", "optionI"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"16”"時，"長"只會有"14”"、"16”"、"17”"
      if (BackSupportswidthSelect.value === "option5") {
        let filteredHeightOptions = Spex_Zygo_Deep_MidheightOptions;
        filteredHeightOptions = Spex_Zygo_Deep_MidheightOptions.filter(
          (option) =>
            ["optionA", "optionG", "optionI", "optionJ"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"18”"時，"長"只會有"15”"、"17”"、"18”"
      if (BackSupportswidthSelect.value === "option6") {
        let filteredHeightOptions = Spex_Zygo_Deep_MidheightOptions;
        filteredHeightOptions = Spex_Zygo_Deep_MidheightOptions.filter(
          (option) =>
            ["optionA", "optionH", "optionJ", "optionK"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"20”"時，"長"只會有"15”"、"18”"
      if (BackSupportswidthSelect.value === "option7") {
        let filteredHeightOptions = Spex_Zygo_Deep_MidheightOptions;
        filteredHeightOptions = Spex_Zygo_Deep_MidheightOptions.filter(
          (option) => ["optionA", "optionH", "optionK"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
    }
    //endregion

    //region --- Spex_Vigour 高背靠 淺廓型低背靠 ---
    if (SpexVigourCheckbox.checked) {
      //當選擇在"寬"時則將"長"的欄位鎖住，或是當選擇完其他後又不需要產品時，勾選"寬"可鎖住"長"
      if (BackSupportswidthSelect.value === "option1") {
        BackSupportsSizeSelect(
          BackSupportswidthSelect,
          Spex_VigourwidthOptions
        );
        BackSupportsSizeSelect(
          BackSupportsheightSelect,
          Spex_VigourheightOptions
        );
        BackSupportsheightSelect.disabled = true; // 當未選擇時，鎖住 BackSupportsheightSelect
        BackSupportscolorSelect.disabled = true;
      }
      //當選擇是寬"12”"時，"長"只會有"14”"、"16”"、"18”"
      if (BackSupportswidthSelect.value === "option2") {
        let filteredHeightOptions = Spex_VigourheightOptions;
        filteredHeightOptions = Spex_VigourheightOptions.filter((option) =>
          ["optionA", "optionB", "optionC", "optionD"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"13”"時，"長"只會有"14”"、"16”"、"18”"
      if (BackSupportswidthSelect.value === "option3") {
        let filteredHeightOptions = Spex_VigourheightOptions;
        filteredHeightOptions = Spex_VigourheightOptions.filter((option) =>
          ["optionA", "optionB", "optionC", "optionD"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"14”"時，"長"只會有"16”"、"18”"、"20”"
      if (BackSupportswidthSelect.value === "option4") {
        let filteredHeightOptions = Spex_VigourheightOptions;
        filteredHeightOptions = Spex_VigourheightOptions.filter((option) =>
          ["optionA", "optionC", "optionD", "optionE"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"15”"時，"長"只會有"16”"、"18”"、"20”"
      if (BackSupportswidthSelect.value === "option5") {
        let filteredHeightOptions = Spex_VigourheightOptions;
        filteredHeightOptions = Spex_VigourheightOptions.filter((option) =>
          ["optionA", "optionC", "optionD", "optionE"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"16”"時，"長"只會有"18”"、"20”"、"23”"
      if (BackSupportswidthSelect.value === "option6") {
        let filteredHeightOptions = Spex_VigourheightOptions;
        filteredHeightOptions = Spex_VigourheightOptions.filter((option) =>
          ["optionA", "optionD", "optionE", "optionF"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"17”"時，"長"只會有"18”"、"20”"、"23”"
      if (BackSupportswidthSelect.value === "option7") {
        let filteredHeightOptions = Spex_VigourheightOptions;
        filteredHeightOptions = Spex_VigourheightOptions.filter((option) =>
          ["optionA", "optionD", "optionE", "optionF"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"18”"時，"長"只會有"18”"、"20”"、"23”"
      if (BackSupportswidthSelect.value === "option8") {
        let filteredHeightOptions = Spex_VigourheightOptions;
        filteredHeightOptions = Spex_VigourheightOptions.filter((option) =>
          ["optionA", "optionD", "optionE", "optionF"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"19”"時，"長"只會有"18”"、"20”"、"23”"
      if (BackSupportswidthSelect.value === "option9") {
        let filteredHeightOptions = Spex_VigourheightOptions;
        filteredHeightOptions = Spex_VigourheightOptions.filter((option) =>
          ["optionA", "optionD", "optionE", "optionF"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"20”"時，"長"只會有"18”"、"20”"、"23”"
      if (BackSupportswidthSelect.value === "option10") {
        let filteredHeightOptions = Spex_VigourheightOptions;
        filteredHeightOptions = Spex_VigourheightOptions.filter((option) =>
          ["optionA", "optionD", "optionE", "optionF"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
    }
    //endregion

    //region --- Spex_Mantaray 側邊包覆型背靠 ---
    if (SpexMantarayCheckbox.checked) {
      //當選擇在"寬"時則將"長"的欄位鎖住，或是當選擇完其他後又不需要產品時，勾選"寬"可鎖住"長"
      if (BackSupportswidthSelect.value === "option1") {
        BackSupportsSizeSelect(
          BackSupportswidthSelect,
          Spex_MantaraywidthOptions
        );
        BackSupportsSizeSelect(
          BackSupportsheightSelect,
          Spex_MantarayheightOptions
        );
        BackSupportsheightSelect.disabled = true; // 當未選擇時，鎖住 BackSupportsheightSelect
        BackSupportscolorSelect.disabled = true;
      }
      //當選擇是寬"12”"時，"長"只會有"14”"、"16”"
      if (BackSupportswidthSelect.value === "option2") {
        let filteredHeightOptions = Spex_MantarayheightOptions;
        filteredHeightOptions = Spex_MantarayheightOptions.filter((option) =>
          ["optionA", "optionB", "optionC"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"13”"時，"長"只會有"14”"、"16”"
      if (BackSupportswidthSelect.value === "option3") {
        let filteredHeightOptions = Spex_MantarayheightOptions;
        filteredHeightOptions = Spex_MantarayheightOptions.filter((option) =>
          ["optionA", "optionB", "optionC"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"14”"時，"長"只會有"16”"、"18”"
      if (BackSupportswidthSelect.value === "option4") {
        let filteredHeightOptions = Spex_MantarayheightOptions;
        filteredHeightOptions = Spex_MantarayheightOptions.filter((option) =>
          ["optionA", "optionC", "optionD"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"15”"時，"長"只會有"16”"、"18”"
      if (BackSupportswidthSelect.value === "option5") {
        let filteredHeightOptions = Spex_MantarayheightOptions;
        filteredHeightOptions = Spex_MantarayheightOptions.filter((option) =>
          ["optionA", "optionC", "optionD"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"16”"時，"長"只會有"18”"、"20”"
      if (BackSupportswidthSelect.value === "option6") {
        let filteredHeightOptions = Spex_MantarayheightOptions;
        filteredHeightOptions = Spex_MantarayheightOptions.filter((option) =>
          ["optionA", "optionD", "optionE"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"17”"時，"長"只會有"18”"、"20”"
      if (BackSupportswidthSelect.value === "option7") {
        let filteredHeightOptions = Spex_MantarayheightOptions;
        filteredHeightOptions = Spex_MantarayheightOptions.filter((option) =>
          ["optionA", "optionD", "optionE"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"18”"時，"長"只會有"18”"、"20”"
      if (BackSupportswidthSelect.value === "option8") {
        let filteredHeightOptions = Spex_MantarayheightOptions;
        filteredHeightOptions = Spex_MantarayheightOptions.filter((option) =>
          ["optionA", "optionD", "optionE"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"19”"時，"長"只會有"18”"、"20”"
      if (BackSupportswidthSelect.value === "option9") {
        let filteredHeightOptions = Spex_MantarayheightOptions;
        filteredHeightOptions = Spex_MantarayheightOptions.filter((option) =>
          ["optionA", "optionD", "optionE"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"20”"時，"長"只會有"18”"、"20”"
      if (BackSupportswidthSelect.value === "option10") {
        let filteredHeightOptions = Spex_MantarayheightOptions;
        filteredHeightOptions = Spex_MantarayheightOptions.filter((option) =>
          ["optionA", "optionD", "optionE"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
    }
    //endregion

    //region --- Spex_Classic 調整型背靠 ---
    if (SpexClassicCheckbox.checked) {
      //當選擇在"寬"時則將"長"的欄位鎖住，或是當選擇完其他後又不需要產品時，勾選"寬"可鎖住"長"
      if (BackSupportswidthSelect.value === "option1") {
        BackSupportsSizeSelect(
          BackSupportswidthSelect,
          Spex_ClassicwidthOptions
        );
        BackSupportsSizeSelect(
          BackSupportsheightSelect,
          Spex_ClassicheightOptions
        );
        BackSupportsheightSelect.disabled = true; // 當未選擇時，鎖住 BackSupportsheightSelect
        BackSupportscolorSelect.disabled = true;
      }
      //當選擇是寬"13”"時，"長"只會有"14”"、"16”"、"18”"
      if (BackSupportswidthSelect.value === "option2") {
        let filteredHeightOptions = Spex_ClassicheightOptions;
        filteredHeightOptions = Spex_ClassicheightOptions.filter((option) =>
          ["optionA", "optionB", "optionC", "optionD"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"14”"時，"長"只會有"16”"、"18”"、"20”"
      if (BackSupportswidthSelect.value === "option3") {
        let filteredHeightOptions = Spex_ClassicheightOptions;
        filteredHeightOptions = Spex_ClassicheightOptions.filter((option) =>
          ["optionA", "optionC", "optionD", "optionE"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"15”"時，"長"只會有"16”、"18”"、"20”"
      if (BackSupportswidthSelect.value === "option4") {
        let filteredHeightOptions = Spex_ClassicheightOptions;
        filteredHeightOptions = Spex_ClassicheightOptions.filter((option) =>
          ["optionA", "optionC", "optionD", "optionE"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"16”"時，"長"只會有"18”"、"20”"、"23”"
      if (BackSupportswidthSelect.value === "option5") {
        let filteredHeightOptions = Spex_ClassicheightOptions;
        filteredHeightOptions = Spex_ClassicheightOptions.filter((option) =>
          ["optionA", "optionD", "optionE", "optionF"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"17”"時，"長"只會有"18”"、"20”"、"23”"
      if (BackSupportswidthSelect.value === "option6") {
        let filteredHeightOptions = Spex_ClassicheightOptions;
        filteredHeightOptions = Spex_ClassicheightOptions.filter((option) =>
          ["optionA", "optionD", "optionE", "optionF"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"18”"時，"長"只會有"18”"、"20”"、"23”"
      if (BackSupportswidthSelect.value === "option7") {
        let filteredHeightOptions = Spex_ClassicheightOptions;
        filteredHeightOptions = Spex_ClassicheightOptions.filter((option) =>
          ["optionA", "optionD", "optionE", "optionF"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
    }
    //endregion

    //region --- Spex_SuperShape 超高度調整型背靠 ---
    if (SpexSuperShapeCheckbox.checked) {
      //當選擇在"寬"時則將"長"的欄位鎖住，或是當選擇完其他後又不需要產品時，勾選"寬"可鎖住"長"
      if (BackSupportswidthSelect.value === "option1") {
        BackSupportsSizeSelect(
          BackSupportswidthSelect,
          Spex_SuperShapewidthOptions
        );
        BackSupportsSizeSelect(
          BackSupportsheightSelect,
          Spex_SuperShapeheightOptions
        );
        BackSupportsheightSelect.disabled = true; // 當未選擇時，鎖住 BackSupportsheightSelect
        BackSupportscolorSelect.disabled = true;
      }
      //當選擇是寬"12”"時，"長"只會有"12”"、"14”"、"16”"、"18”"
      if (BackSupportswidthSelect.value === "option2") {
        let filteredHeightOptions = Spex_SuperShapeheightOptions;
        filteredHeightOptions = Spex_SuperShapeheightOptions.filter((option) =>
          ["optionA", "optionB", "optionC", "optionD", "optionE"].includes(
            option.value
          )
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"13”"時，"長"只會有"12”"、"14”"、"16”"、"18”"
      if (BackSupportswidthSelect.value === "option3") {
        let filteredHeightOptions = Spex_SuperShapeheightOptions;
        filteredHeightOptions = Spex_SuperShapeheightOptions.filter((option) =>
          ["optionA", "optionB", "optionC", "optionD", "optionE"].includes(
            option.value
          )
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"14”"時，"長"只會有"14”"、"16”"、"18”"、"20”"
      if (BackSupportswidthSelect.value === "option4") {
        let filteredHeightOptions = Spex_SuperShapeheightOptions;
        filteredHeightOptions = Spex_SuperShapeheightOptions.filter((option) =>
          ["optionA", "optionC", "optionD", "optionE", "optionF"].includes(
            option.value
          )
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"15”"時，"長"只會有"14”"、"16”"、"18”"、"20”"
      if (BackSupportswidthSelect.value === "option5") {
        let filteredHeightOptions = Spex_SuperShapeheightOptions;
        filteredHeightOptions = Spex_SuperShapeheightOptions.filter((option) =>
          ["optionA", "optionC", "optionD", "optionE", "optionF"].includes(
            option.value
          )
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"16”"時，"長"只會有"16”"、"18”"、"20”、"23”"
      if (BackSupportswidthSelect.value === "option6") {
        let filteredHeightOptions = Spex_SuperShapeheightOptions;
        filteredHeightOptions = Spex_SuperShapeheightOptions.filter((option) =>
          ["optionA", "optionD", "optionE", "optionF", "optionG"].includes(
            option.value
          )
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"17”"時，"長"只會有"16”"、"18”"、"20”、"23”"
      if (BackSupportswidthSelect.value === "option7") {
        let filteredHeightOptions = Spex_SuperShapeheightOptions;
        filteredHeightOptions = Spex_SuperShapeheightOptions.filter((option) =>
          ["optionA", "optionD", "optionE", "optionF", "optionG"].includes(
            option.value
          )
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"18”"時，"長"只會有"16”"、"18”"、"20”、"23”"
      if (BackSupportswidthSelect.value === "option8") {
        let filteredHeightOptions = Spex_SuperShapeheightOptions;
        filteredHeightOptions = Spex_SuperShapeheightOptions.filter((option) =>
          ["optionA", "optionD", "optionE", "optionF", "optionG"].includes(
            option.value
          )
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
    }
    //endregion

    //region --- Spex_Adapta2 調整型背靠 ---
    if (SpexAdapta2Checkbox.checked) {
      //當選擇在"寬"時則將"長"的欄位鎖住，或是當選擇完其他後又不需要產品時，勾選"寬"可鎖住"長"
      if (BackSupportswidthSelect.value === "option1") {
        BackSupportsSizeSelect(
          BackSupportswidthSelect,
          Spex_Adapta2widthOptions
        );
        BackSupportsSizeSelect(
          BackSupportsheightSelect,
          Spex_Adapta2heightOptions
        );
        BackSupportsheightSelect.disabled = true; // 當未選擇時，鎖住 BackSupportsheightSelect
        BackSupportscolorSelect.disabled = true;
      }
      //當選擇是寬"14”"時，"長"只會有"12”"、"14”"
      if (BackSupportswidthSelect.value === "option2") {
        let filteredHeightOptions = Spex_Adapta2heightOptions;
        filteredHeightOptions = Spex_Adapta2heightOptions.filter((option) =>
          ["optionA", "optionB", "optionD"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"16”"時，"長"只會有"13”"、"15”"
      if (BackSupportswidthSelect.value === "option3") {
        let filteredHeightOptions = Spex_Adapta2heightOptions;
        filteredHeightOptions = Spex_Adapta2heightOptions.filter((option) =>
          ["optionA", "optionC", "optionE"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"18”"時，"長"只會有"15”"、"17”"
      if (BackSupportswidthSelect.value === "option4") {
        let filteredHeightOptions = Spex_Adapta2heightOptions;
        filteredHeightOptions = Spex_Adapta2heightOptions.filter((option) =>
          ["optionA", "optionE", "optionF"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"20”"時，"長"只會有"15”"、"17”"
      if (BackSupportswidthSelect.value === "option5") {
        let filteredHeightOptions = Spex_Adapta2heightOptions;
        filteredHeightOptions = Spex_Adapta2heightOptions.filter((option) =>
          ["optionA", "optionE", "optionF"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
    }
    //endregion

    //region --- Spex_Adapta3 調整型背靠 ---
    if (SpexAdapta3Checkbox.checked) {
      //當選擇在"寬"時則將"長"的欄位鎖住，或是當選擇完其他後又不需要產品時，勾選"寬"可鎖住"長"
      if (BackSupportswidthSelect.value === "option1") {
        BackSupportsSizeSelect(
          BackSupportswidthSelect,
          Spex_Adapta3widthOptions
        );
        BackSupportsSizeSelect(
          BackSupportsheightSelect,
          Spex_Adapta3heightOptions
        );
        BackSupportsheightSelect.disabled = true; // 當未選擇時，鎖住 BackSupportsheightSelect
        BackSupportscolorSelect.disabled = true;
      }
      //當選擇是寬"14”"時，"長"只會有"16”"、"18”"
      if (BackSupportswidthSelect.value === "option2") {
        let filteredHeightOptions = Spex_Adapta3heightOptions;
        filteredHeightOptions = Spex_Adapta3heightOptions.filter((option) =>
          ["optionA", "optionB", "optionC"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"16”"時，"長"只會有"18”"、"20”"
      if (BackSupportswidthSelect.value === "option3") {
        let filteredHeightOptions = Spex_Adapta3heightOptions;
        filteredHeightOptions = Spex_Adapta3heightOptions.filter((option) =>
          ["optionA", "optionC", "optionD"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"18”"時，"長"只會有"20”"、"22”"
      if (BackSupportswidthSelect.value === "option4") {
        let filteredHeightOptions = Spex_Adapta3heightOptions;
        filteredHeightOptions = Spex_Adapta3heightOptions.filter((option) =>
          ["optionA", "optionD", "optionE"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"20”"時，"長"只會有"20”"、"22”"
      if (BackSupportswidthSelect.value === "option5") {
        let filteredHeightOptions = Spex_Adapta3heightOptions;
        filteredHeightOptions = Spex_Adapta3heightOptions.filter((option) =>
          ["optionA", "optionD", "optionE"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
    }
    //endregion

    //region --- Spex_Adapta3 調整型背靠 / 快掀 ---
    if (SpexAdapta3QuicklyLiftCheckbox.checked) {
      //當選擇在"寬"時則將"長"的欄位鎖住，或是當選擇完其他後又不需要產品時，勾選"寬"可鎖住"長"
      if (BackSupportswidthSelect.value === "option1") {
        BackSupportsSizeSelect(
          BackSupportswidthSelect,
          Spex_Adapta3_QuicklyLiftwidthOptions
        );
        BackSupportsSizeSelect(
          BackSupportsheightSelect,
          Spex_Adapta3_QuicklyLiftheightOptions
        );
        BackSupportsheightSelect.disabled = true; // 當未選擇時，鎖住 BackSupportsheightSelect
        BackSupportscolorSelect.disabled = true;
      }
      //當選擇是寬"14”"時，"長"只會有"16”"、"18”"
      if (BackSupportswidthSelect.value === "option2") {
        let filteredHeightOptions = Spex_Adapta3_QuicklyLiftheightOptions;
        filteredHeightOptions = Spex_Adapta3_QuicklyLiftheightOptions.filter(
          (option) => ["optionA", "optionB", "optionC"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"16”"時，"長"只會有"18”"、"20”"
      if (BackSupportswidthSelect.value === "option3") {
        let filteredHeightOptions = Spex_Adapta3_QuicklyLiftheightOptions;
        filteredHeightOptions = Spex_Adapta3_QuicklyLiftheightOptions.filter(
          (option) => ["optionA", "optionC", "optionD"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"18”"時，"長"只會有"20”"、"22”"
      if (BackSupportswidthSelect.value === "option4") {
        let filteredHeightOptions = Spex_Adapta3_QuicklyLiftheightOptions;
        filteredHeightOptions = Spex_Adapta3_QuicklyLiftheightOptions.filter(
          (option) => ["optionA", "optionD", "optionE"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"20”"時，"長"只會有"20”"、"22”"
      if (BackSupportswidthSelect.value === "option5") {
        let filteredHeightOptions = Spex_Adapta3_QuicklyLiftheightOptions;
        filteredHeightOptions = Spex_Adapta3_QuicklyLiftheightOptions.filter(
          (option) => ["optionA", "optionD", "optionE"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
    }
    //endregion

    //region --- Spex_Adapta3 調整型背靠 / 脊凸泡綿 ---
    if (SpexAdapta3FoamCheckbox.checked) {
      //當選擇在"寬"時則將"長"的欄位鎖住，或是當選擇完其他後又不需要產品時，勾選"寬"可鎖住"長"
      if (BackSupportswidthSelect.value === "option1") {
        BackSupportsSizeSelect(
          BackSupportswidthSelect,
          Spex_Adapta3_FoamwidthOptions
        );
        BackSupportsSizeSelect(
          BackSupportsheightSelect,
          Spex_Adapta3_FoamheightOptions
        );
        BackSupportsheightSelect.disabled = true; // 當未選擇時，鎖住 BackSupportsheightSelect
        BackSupportscolorSelect.disabled = true;
      }
      //當選擇是寬"14”"時，"長"只會有"16”"、"18”"
      if (BackSupportswidthSelect.value === "option2") {
        let filteredHeightOptions = Spex_Adapta3_FoamheightOptions;
        filteredHeightOptions = Spex_Adapta3_FoamheightOptions.filter(
          (option) => ["optionA", "optionB", "optionC"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"16”"時，"長"只會有"18”"、"20”"
      if (BackSupportswidthSelect.value === "option3") {
        let filteredHeightOptions = Spex_Adapta3_FoamheightOptions;
        filteredHeightOptions = Spex_Adapta3_FoamheightOptions.filter(
          (option) => ["optionA", "optionC", "optionD"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"18”"時，"長"只會有"20”"、"22”"
      if (BackSupportswidthSelect.value === "option4") {
        let filteredHeightOptions = Spex_Adapta3_FoamheightOptions;
        filteredHeightOptions = Spex_Adapta3_FoamheightOptions.filter(
          (option) => ["optionA", "optionD", "optionE"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"20”"時，"長"只會有"20”"、"22”"
      if (BackSupportswidthSelect.value === "option5") {
        let filteredHeightOptions = Spex_Adapta3_FoamheightOptions;
        filteredHeightOptions = Spex_Adapta3_FoamheightOptions.filter(
          (option) => ["optionA", "optionD", "optionE"].includes(option.value)
        );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
    }
    //endregion

    //region --- Spex_Adapta3 調整型背靠 / 脊凸泡綿 / 快掀 ---
    if (SpexAdapta3QuicklyLiftFoamCheckbox.checked) {
      //當選擇在"寬"時則將"長"的欄位鎖住，或是當選擇完其他後又不需要產品時，勾選"寬"可鎖住"長"
      if (BackSupportswidthSelect.value === "option1") {
        BackSupportsSizeSelect(
          BackSupportswidthSelect,
          Spex_Adapta3_QuicklyLift_FoamwidthOptions
        );
        BackSupportsSizeSelect(
          BackSupportsheightSelect,
          Spex_Adapta3_QuicklyLift_FoamheightOptions
        );
        BackSupportsheightSelect.disabled = true; // 當未選擇時，鎖住 BackSupportsheightSelect
        BackSupportscolorSelect.disabled = true;
      }
      //當選擇是寬"14”"時，"長"只會有"16”"、"18”"
      if (BackSupportswidthSelect.value === "option2") {
        let filteredHeightOptions = Spex_Adapta3_QuicklyLift_FoamheightOptions;
        filteredHeightOptions =
          Spex_Adapta3_QuicklyLift_FoamheightOptions.filter((option) =>
            ["optionA", "optionB", "optionC"].includes(option.value)
          );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"16”"時，"長"只會有"18”"、"20”"
      if (BackSupportswidthSelect.value === "option3") {
        let filteredHeightOptions = Spex_Adapta3_QuicklyLift_FoamheightOptions;
        filteredHeightOptions =
          Spex_Adapta3_QuicklyLift_FoamheightOptions.filter((option) =>
            ["optionA", "optionC", "optionD"].includes(option.value)
          );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"18”"時，"長"只會有"20”"、"22”"
      if (BackSupportswidthSelect.value === "option4") {
        let filteredHeightOptions = Spex_Adapta3_QuicklyLift_FoamheightOptions;
        filteredHeightOptions =
          Spex_Adapta3_QuicklyLift_FoamheightOptions.filter((option) =>
            ["optionA", "optionD", "optionE"].includes(option.value)
          );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
      //當選擇是寬"20”"時，"長"只會有"20”"、"22”"
      if (BackSupportswidthSelect.value === "option5") {
        let filteredHeightOptions = Spex_Adapta3_QuicklyLift_FoamheightOptions;
        filteredHeightOptions =
          Spex_Adapta3_QuicklyLift_FoamheightOptions.filter((option) =>
            ["optionA", "optionD", "optionE"].includes(option.value)
          );
        BackSupportsSizeSelect(BackSupportsheightSelect, filteredHeightOptions);
      }
    }
    //endregion
  });
});

//endregion

//endregion
//endregion

/*-----  16.Spex軀幹子系統-扣具 -----*/
//region
/*---  Spex軀幹子系統-扣具點擊列 - 圖片箭頭部分  ---*/
//region
document.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let tgimg_16 = event.target;
  let carseat16 = tgimg_16.closest(".Spex_hardware"); // 找到最近的 Spex_hardware
  let imgSpexhardware = event.target.dataset.imgSpexhardware;

  //確認我點擊到的位置是否是Spex_hardware
  if (carseat16 && carseat16.className.trim() === "Spex_hardware") {
    let introdutionid = carseat16.querySelector(".Spexhardwaregroup"); // 在 Spex_hardware 內部找 Spexhardwaregroup
    let introdution = carseat16.querySelector(".subtitle"); // 在 Spex_hardware 內部找 subtitle

    if (introdutionid) {
      // 取得 `visibility` 的計算後樣式
      let visibilityValue = window.getComputedStyle(introdutionid).visibility;

      if (imgSpexhardware === "SpexhardwareImg") {
        if (visibilityValue === "hidden") {
          let Price_Spexhardware = document.querySelectorAll(".pricing");

          Price_Spexhardware.forEach(function (openIntro) {
            let Spexhardware = Price_Spexhardware[15];
            //直接判斷是第幾個.Price
            let nowprice_Spexhardware =
              Price_Spexhardware[15].nextElementSibling;

            if (
              openIntro.getAttribute("data-price-Spexhardware") ===
                "Spexhardware" &&
              nowprice_Spexhardware.getAttribute(
                "data-nowprice-Spexhardware"
              ) === "nowSpexhardware"
            ) {
              if (introdution.getAttribute("data-collapse-status") === "0") {
                //把data-collapse-status改成1
                introdution.setAttribute("data-collapse-status", "1");

                //Spexbacksupports勾選位置大小設置
                introdutionid.style.visibility = "visible";
                introdutionid.style.padding = "0px 1px 1px 3px";
                introdutionid.style.width = "calc(100% - 22px)";
                introdutionid.style.display = "flex";
                introdutionid.style.flexDirection = "row";
                introdutionid.style.border = "3px dashed black";
                introdutionid.style.borderTop = "none";
                introdutionid.style.margin = "0 0 0 7px";
                introdutionid.style.height = "auto";
                //建議售價標題顯示
                openIntro.style.display = "block";

                //建議售價金額顯示
                nowprice_Spexhardware.style.display = "block";
                nowprice_Spexhardware.style.display = "flex";
                nowprice_Spexhardware.style.width = "95%";
                nowprice_Spexhardware.style.height = "90%";
                nowprice_Spexhardware.style.color = "#000000";
                nowprice_Spexhardware.style.borderRadius = "8px";
                nowprice_Spexhardware.style.padding = "1px";
                nowprice_Spexhardware.style.margin = "3px 3px 3px 2px";
                nowprice_Spexhardware.style.textAlign = "center";
                nowprice_Spexhardware.style.fontSize = "17px";
                nowprice_Spexhardware.style.fontWeight = "600";
                nowprice_Spexhardware.style.alignItems = "center";
                nowprice_Spexhardware.style.justifyContent = "center";

                if (window.matchMedia("(max-width: 650px)").matches) {
                  nowprice_Spexhardware.style.fontSize = "15px";
                  introdutionid.style.width = "calc(100% - 9px)";
                  Spexhardware.style.padding = "5px";
                  Spexhardware.style.margin = "3px 0px 3px 1px";
                }
              }
            }
          });
        } else {
          let Price_Spexhardware = document.querySelectorAll(".pricing");

          Price_Spexhardware.forEach(function (openIntro) {
            let nowprice_Spexhardware =
              Price_Spexhardware[15].nextElementSibling;

            //把data-collapse-status改成0
            introdution.setAttribute("data-collapse-status", "0");

            //建議售價標題隱藏
            introdutionid.style.visibility = "hidden";
            introdutionid.style.height = "0";
            introdutionid.style.padding = "0";
            introdutionid.style.border = "0px dashed black";
            introdutionid.style.margin = "0";

            if (
              openIntro.getAttribute("data-price-Spexhardware") ===
              "Spexhardware"
            ) {
              //建議售價金額隱藏
              openIntro.style.display = "none";
            }
            nowprice_Spexhardware.style.display = "none";
          });
        }
      }
    }
  }
});
// endregion

/*---  Spex軀幹子系統-扣具點擊列 - subtitle部分  ---*/
//region
let Spex_hardware = document.querySelector(".Spex_hardware");
Spex_hardware.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let showinfo = event.target.dataset.showinfo;
  let introdution = event.target;
  //確認我點擊到的位置是否是Spex_hardware
  if (showinfo === "Spexhardware") {
    let introdutionid = event.target.nextElementSibling;
    let Price_Spex_hardware = document.querySelectorAll(".pricing");
    let Spex_hardwareimg = Spex_hardware.querySelector(".target_img"); // 找到最近的 .target_img
    let img = Spex_hardware.querySelector("img");

    Price_Spex_hardware.forEach(function (openIntro) {
      let Spexhardware = Price_Spex_hardware[15];
      //直接判斷是第幾個.Price
      let nowprice_Spexhardware = Price_Spex_hardware[15].nextElementSibling;

      if (
        openIntro.getAttribute("data-price-Spexhardware") === "Spexhardware" &&
        nowprice_Spexhardware.getAttribute("data-nowprice-Spexhardware") ===
          "nowSpexhardware"
      ) {
        if (introdution.getAttribute("data-collapse-status") === "0") {
          //把data-collapse-status改成1
          introdution.setAttribute("data-collapse-status", "1");

          //carSpexbacksupports勾選位置大小設置
          introdutionid.style.visibility = "visible";
          introdutionid.style.padding = "0px 1px 2px 3px";
          introdutionid.style.width = "calc(100% - 22px)";
          introdutionid.style.display = "flex";
          introdutionid.style.flexDirection = "row";
          introdutionid.style.border = "3px dashed black";
          introdutionid.style.borderTop = "none";
          introdutionid.style.margin = "0 0 0 7px";
          introdutionid.style.height = "auto";

          //建議售價標題顯示
          openIntro.style.display = "block";

          //建議售價金額顯示
          nowprice_Spexhardware.style.display = "block";
          nowprice_Spexhardware.style.display = "flex";
          nowprice_Spexhardware.style.width = "95%";
          nowprice_Spexhardware.style.height = "90%";
          nowprice_Spexhardware.style.color = "#000000";
          nowprice_Spexhardware.style.borderRadius = "8px";
          nowprice_Spexhardware.style.padding = "1px";
          nowprice_Spexhardware.style.margin = "3px 3px 3px 2px";
          nowprice_Spexhardware.style.textAlign = "center";
          nowprice_Spexhardware.style.fontSize = "17px";
          nowprice_Spexhardware.style.fontWeight = "600";
          nowprice_Spexhardware.style.alignItems = "center";
          nowprice_Spexhardware.style.justifyContent = "center";

          if (img) {
            img.setAttribute("src", "./img/black triangle after.png");
          }

          if (window.matchMedia("(max-width: 650px)").matches) {
            nowprice_Spexhardware.style.fontSize = "15px";
            introdutionid.style.width = "calc(100% - 9px)";
            Spexhardware.style.padding = "5px";
            Spexhardware.style.margin = "3px 0px 3px 1px";
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
          nowprice_Spexhardware.style.display = "none";

          if (img) {
            img.setAttribute("src", "./img/black triangle.png");
          }
        }
      }
    });
  }
});
//endregion

//確定勾選的是哪個扣具，且不會重複勾選選項
//region
document
  .querySelectorAll('input[name="car_SpexHardware"]')
  .forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      document
        .querySelectorAll('input[name="car_SpexHardware"]')
        .forEach((otherCheckbox) => {
          if (otherCheckbox !== this) {
            otherCheckbox.checked = false;
          }
        });
      if (!Spex_HardwareDropMount.checked) {
        DropMountSelect.disabled = true; // 禁用
        DropMountSelectOptions(DropMountSelect, SpexHardwareDropMountOptions);
      }
    });
  });

//region --- Spex_DropMount的選項 ---
let SpexHardwareDropMountOptions = [
  { value: "option1", text: "尺寸選擇", selected: true },
  { value: "option2", text: "Paediatric" },
  { value: "option3", text: "Small" },
  { value: "option4", text: "Medium" },
  { value: "option5", text: "Large" },
];

function DropMountSelectOptions(selectElement, options) {
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

let Spex_HardwareDropMount = document.querySelector(
  "#Spex_Hardware_Drop_Mount"
);

Spex_HardwareDropMount.addEventListener("change", () => {
  let DropMountSelect = document.querySelector(".Spexdropmount_size");
  if (Spex_HardwareDropMount.checked) {
    DropMountSelect.disabled = false; // 啟用
    DropMountSelectOptions(DropMountSelect, SpexHardwareDropMountOptions);
  } else {
    DropMountSelect.disabled = true; // 禁用
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let DropMountSelect = document.querySelector(".Spexdropmount_size");
  DropMountSelect.disabled = true; // 禁用
});

//endregion

//endregion
