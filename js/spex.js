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
            let Spexcushion = Price_Spexcushion[11];
            //直接判斷是第幾個.Price
            let nowprice_Spexcushion = Price_Spexcushion[11].nextElementSibling;

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
            let nowprice_Spexcushion = Price_Spexcushion[11].nextElementSibling;

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
  //確認我點擊到的位置是否是 Spexcushion
  if (showinfo === "Spexcushion") {
    let introdutionid = event.target.nextElementSibling;
    let Price_Spex_cushion = document.querySelectorAll(".pricing");
    let Spex_cushionimg = Spex_cushion.querySelector(".target_img"); // 找到最近的 .target_img
    let img = Spex_cushionimg.querySelector("img");

    Price_Spex_cushion.forEach(function (openIntro) {
      let Spexcushion = Price_Spex_cushion[11];
      //直接判斷是第幾個.Price
      let nowprice_Spexcushion = Price_Spex_cushion[11].nextElementSibling;

      if (
        openIntro.getAttribute("data-price-Spexcushion") === "Spexcushion" &&
        nowprice_Spexcushion.getAttribute("data-nowprice-Spexcushion") ===
          "nowSpexcushion"
      ) {
        if (introdution.getAttribute("data-collapse-status") === "0") {
          //把data-collapse-status改成1
          introdution.setAttribute("data-collapse-status", "1");

          //Spexcushion勾選位置大小設置
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

let SpexCushioncheckbox = document.querySelectorAll(".SpexCushion");
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

      let anyChecked = Array.from(SpexCushioncheckbox).some((cb) => cb.checked);
      if (!anyChecked) {
        CushionwidthSelect.disabled = !anyChecked;
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
            let Spexseatbase = Price_Spexseatbase[12];
            //直接判斷是第幾個.Price
            let nowprice_Spexseatbase =
              Price_Spexseatbase[12].nextElementSibling;

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
              Price_Spexseatbase[12].nextElementSibling;

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
      let Spexseatbase = Price_Spex_seatbase[12];
      //直接判斷是第幾個.Price
      let nowprice_Spexseatbase = Price_Spex_seatbase[12].nextElementSibling;

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
      let nowprice_SpexSeatBase = Price[12].nextElementSibling;
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
      // 找到 checkbox
      let SeatBaseFixedCkb = document.querySelector("#Spex_SeatBase_fixed");
      let SeatBaseQuickCkb = document.querySelector("#Spex_SeatBase_quick");
      if (!SeatBaseFixedCkb.checked && !SeatBaseQuickCkb.checked) {
        //剛開啟時讓widthSelect無法選擇
        SeatbasewidthSelect.disabled = true;
        // 預設讓 heightSelect 無法選擇
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
  let nowprice_SpexSeatBase = Price[12].nextElementSibling;

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
            let Spexmedialthigh = Price_Spexmedialthigh[13];
            //直接判斷是第幾個.Price
            let nowprice_Spexmedialthigh =
              Price_Spexmedialthigh[13].nextElementSibling;

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
              Price_Spexmedialthigh[13].nextElementSibling;

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
      let Spexmedialthigh = Price_Spex_medialthigh[13];
      //直接判斷是第幾個.Price
      let nowprice_Spexmedialthigh =
        Price_Spex_medialthigh[13].nextElementSibling;

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
  if (
    MedialThigh_Standardcheckbox.checked ||
    MedialThigh_Multiaxialcheckbox.checked
  ) {
    SpexmedialthighSel.disabled = false;
  }
  if (
    !MedialThigh_Standardcheckbox.checked &&
    !MedialThigh_Multiaxialcheckbox.checked
  ) {
    SpexmedialthighSel.disabled = true;
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
          let nowprice_Spexmedialthigh = Price[13].nextElementSibling;
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
            let Spexarmsuplatthigh = Price_Spexarmsuplatthigh[14];
            //直接判斷是第幾個.Price
            let nowprice_Spexarmsuplatthigh =
              Price_Spexarmsuplatthigh[14].nextElementSibling;

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
              Price_Spexarmsuplatthigh[14].nextElementSibling;

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
      let Spexarmsuplatthigh = Price_Spex_armsuplatthigh[14];
      //直接判斷是第幾個.Price
      let nowprice_Spexarmsuplatthigh =
        Price_Spex_armsuplatthigh[14].nextElementSibling;

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
let armsuplatthighcount = document.getElementById("Spexarmsuplatthighcount");
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
armsuplatthighcount.disabled = true;
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
      let nowprice_Spexarmsuplatthigh = Price[14].nextElementSibling;
      if (nowprice_Spexarmsuplatthigh.textContent) {
        nowprice_Spexarmsuplatthigh.textContent = "0元";
      }

      if (checkbox.id === "Spex_ArmSupports") {
        armsuplatthighcount.disabled = false;
        buckle.disabled = false;
        armsup.disabled = false;
        armpad.disabled = false;
        latthigh.disabled = true;
        lateralpad.disabled = true;
        armpadcount.disabled = false;
        lateralpadcount.disabled = true;
        armsuplatthighcount.value = "";
        armpadcount.value = "";
        lateralpadcount.value = "";
        armsuplatthighSelect(buckle, Spex_armsuplatthighbuckleOptions);
        armsuplatthighSelect(armsup, Spex_armsupportsOptions);
        armsuplatthighSelect(armpad, Spex_armpadOptions);
        armsuplatthighSelect(latthigh, Spex_lateralthighOptions);
        armsuplatthighSelect(lateralpad, Spex_lateralpadOptions);
      }

      if (checkbox.id === "Spex_LateralThighSupports") {
        armsuplatthighcount.disabled = false;
        buckle.disabled = false;
        latthigh.disabled = false;
        lateralpad.disabled = false;
        armsup.disabled = true;
        armpad.disabled = true;
        armpadcount.disabled = true;
        lateralpadcount.disabled = false;
        armsuplatthighcount.value = "";
        armpadcount.value = "";
        lateralpadcount.value = "";
        armsuplatthighSelect(buckle, Spex_armsuplatthighbuckleOptions, true);
        armsuplatthighSelect(latthigh, Spex_lateralthighOptions);
        armsuplatthighSelect(lateralpad, Spex_lateralpadOptions);
        armsuplatthighSelect(armsup, Spex_armsupportsOptions);
        armsuplatthighSelect(armpad, Spex_armpadOptions);
      }

      if (checkbox.id === "Spex_ArmSup_LatThigh") {
        armsuplatthighcount.disabled = false;
        buckle.disabled = false;
        armsup.disabled = false;
        latthigh.disabled = false;
        armpad.disabled = false;
        lateralpad.disabled = false;
        armpadcount.disabled = false;
        lateralpadcount.disabled = false;
        armsuplatthighcount.value = "";
        armpadcount.value = "";
        lateralpadcount.value = "";
        armsuplatthighSelect(buckle, Spex_armsuplatthighbuckleOptions);
        armsuplatthighSelect(armsup, Spex_armsupportsOptions);
        armsuplatthighSelect(armpad, Spex_armpadOptions);
        armsuplatthighSelect(latthigh, Spex_lateralthighOptions);
        armsuplatthighSelect(lateralpad, Spex_lateralpadOptions);
      }

      if (!checkbox.checked) {
        buckle.disabled = true;
        armsup.disabled = true;
        latthigh.disabled = true;
        armpad.disabled = true;
        lateralpad.disabled = true;
        armpadcount.disabled = true;
        lateralpadcount.disabled = true;
        armsuplatthighcount.disabled = true;
        armsuplatthighcount.value = "";
        armpadcount.value = "";
        lateralpadcount.value = "";
      }
    });
  });
//endregion
//endregion

//region  測試
function moveCountInputIfNeeded() {
  let isMobile = window.matchMedia("(max-width: 650px)").matches;

  let countGroup = document.querySelector(".Spexarmsuplatthighcountgroup");
  let countLabel = document.querySelector(
    'label[for="Spexarmsuplatthighcount"]'
  );
  let countInput = document.querySelector("#Spexarmsuplatthighcount");
  let targetGroup = document.querySelector(
    ".Spexarmsuplatthigh_ArmSupLatThighgroup"
  );

  // 用於記錄是否已經移動過，避免重複操作
  if (isMobile) {
    if (countGroup && countLabel && countInput && targetGroup) {
      // 移除原本的 group，保留內部元素
      countGroup.remove();
      // 移動進新的容器中
      let wrapper = document.createElement("div");
      wrapper.className = "Spexarmsuplatthighcountgroup";
      wrapper.style.display = "flex";
      wrapper.style.flexDirection = "row";
      wrapper.style.width = "100%";
      wrapper.style.border = "none";
      wrapper.appendChild(countLabel);
      countLabel.style.fontSize = "12px";
      countLabel.style.width = "50%";
      wrapper.appendChild(countInput);
      countInput.style.fontSize = "14px";
      countInput.style.width = "40%";
      targetGroup.appendChild(wrapper);
    }
  } else {
    // 螢幕變大時還原
    let restoredParent = document.querySelector(
      ".Spexarmsuplatthigh_ArmSupLatThighgroup"
    );
    let existingGroup = document.querySelector(".Spexarmsuplatthighcountgroup");

    if (restoredParent && existingGroup) {
      let countLabel = existingGroup.querySelector(
        'label[for="Spexarmsuplatthighcount"]'
      );
      let countInput = existingGroup.querySelector("#Spexarmsuplatthighcount");
      countInput.style.width = "35%";
      countInput.style.fontSize = "16px";
      countLabel.style.width = "40%";
      // 移除在內部的舊 group
      existingGroup.remove();

      // 建立一個新的 div 放回原本位置
      let newGroup = document.createElement("div");
      newGroup.className = "Spexarmsuplatthighcountgroup";
      if (countLabel && countInput) {
        newGroup.appendChild(countLabel);
        newGroup.appendChild(countInput);
        // 將它插入在 .Spexarmsuplatthigh_ArmSupLatThighgroup 後面
        restoredParent.insertAdjacentElement("afterend", newGroup);
      }
    }
  }
}

// 初次執行
moveCountInputIfNeeded();

// 監聽螢幕尺寸變化
window.addEventListener("resize", moveCountInputIfNeeded);
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
            let Spexbacksupports = Price_Spexbacksupports[15];
            //直接判斷是第幾個.Price
            let nowprice_Spexbacksupports =
              Price_Spexbacksupports[15].nextElementSibling;

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
              Price_Spexbacksupports[15].nextElementSibling;

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
      let Spexbacksupports = Price_Spex_backsupports[15];
      //直接判斷是第幾個.Price
      let nowprice_Spexbacksupports =
        Price_Spex_backsupports[15].nextElementSibling;

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
            let Spexhardware = Price_Spexhardware[16];
            //直接判斷是第幾個.Price
            let nowprice_Spexhardware =
              Price_Spexhardware[16].nextElementSibling;

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
              Price_Spexhardware[16].nextElementSibling;

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
    let img = Spex_hardwareimg.querySelector("img");

    Price_Spex_hardware.forEach(function (openIntro) {
      let Spexhardware = Price_Spex_hardware[16];
      //直接判斷是第幾個.Price
      let nowprice_Spexhardware = Price_Spex_hardware[16].nextElementSibling;

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
    DropMountSelectOptions(DropMountSelect, SpexHardwareDropMountOptions);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let DropMountSelect = document.querySelector(".Spexdropmount_size");
  DropMountSelect.disabled = true; // 禁用
});
//endregion

//endregion

//endregion

/*-----  17.Spex軀幹子系統-軀幹側支撐 -----*/
//region

/*---  Spex軀幹子系統-軀幹側支撐點擊列 - 圖片箭頭部分  ---*/
//region
document.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let tgimg_17 = event.target;
  let carseat17 = tgimg_17.closest(".Spex_latertrunksupports"); // 找到最近的 Spex_latertrunksupports
  let imgSpexlatertrunksupports =
    event.target.dataset.imgSpexlatertrunksupports;

  //確認我點擊到的位置是否是Spex_latertrunksupports
  if (carseat17 && carseat17.className.trim() === "Spex_latertrunksupports") {
    let introdutionid = carseat17.querySelector(".Spexlatertrunksupportsgroup"); // 在 Spex_latertrunksupports 內部找 Spexlatertrunksupports
    let introdution = carseat17.querySelector(".subtitle"); // 在 Spex_latertrunksupports 內部找 subtitle

    if (introdutionid) {
      // 取得 `visibility` 的計算後樣式
      let visibilityValue = window.getComputedStyle(introdutionid).visibility;

      if (imgSpexlatertrunksupports === "SpexlatertrunksupportsImg") {
        if (visibilityValue === "hidden") {
          let Price_Spexlatertrunksupports =
            document.querySelectorAll(".pricing");

          Price_Spexlatertrunksupports.forEach(function (openIntro) {
            let Spexlatertrunksupports = Price_Spexlatertrunksupports[17];
            //直接判斷是第幾個.Price
            let nowprice_Spexlatertrunksupports =
              Price_Spexlatertrunksupports[17].nextElementSibling;

            if (
              openIntro.getAttribute("data-price-Spexlatertrunksupports") ===
                "Spexlatertrunksupports" &&
              nowprice_Spexlatertrunksupports.getAttribute(
                "data-nowprice-Spexlatertrunksupports"
              ) === "nowSpexlatertrunksupports"
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
                nowprice_Spexlatertrunksupports.style.display = "block";
                nowprice_Spexlatertrunksupports.style.display = "flex";
                nowprice_Spexlatertrunksupports.style.width = "95%";
                nowprice_Spexlatertrunksupports.style.height = "90%";
                nowprice_Spexlatertrunksupports.style.color = "#000000";
                nowprice_Spexlatertrunksupports.style.borderRadius = "8px";
                nowprice_Spexlatertrunksupports.style.padding = "1px";
                nowprice_Spexlatertrunksupports.style.margin =
                  "3px 3px 3px 2px";
                nowprice_Spexlatertrunksupports.style.textAlign = "center";
                nowprice_Spexlatertrunksupports.style.fontSize = "16px";
                nowprice_Spexlatertrunksupports.style.fontWeight = "600";
                nowprice_Spexlatertrunksupports.style.alignItems = "center";
                nowprice_Spexlatertrunksupports.style.justifyContent = "center";

                if (window.matchMedia("(max-width: 650px)").matches) {
                  nowprice_Spexlatertrunksupports.style.fontSize = "15px";
                  introdutionid.style.width = "calc(100% - 9px)";
                  Spexlatertrunksupports.style.padding = "5px";
                  Spexlatertrunksupports.style.margin = "3px 0px 3px 1px";
                }
              }
            }
          });
        } else {
          let Price_Spexlatertrunksupports =
            document.querySelectorAll(".pricing");

          Price_Spexlatertrunksupports.forEach(function (openIntro) {
            let nowprice_Spexlatertrunksupports =
              Price_Spexlatertrunksupports[17].nextElementSibling;

            //把data-collapse-status改成0
            introdution.setAttribute("data-collapse-status", "0");

            //建議售價標題隱藏
            introdutionid.style.visibility = "hidden";
            introdutionid.style.height = "0";
            introdutionid.style.padding = "0";
            introdutionid.style.border = "0px dashed black";
            introdutionid.style.margin = "0";

            if (
              openIntro.getAttribute("data-price-Spexlatertrunksupports") ===
              "Spexlatertrunksupports"
            ) {
              //建議售價金額隱藏
              openIntro.style.display = "none";
            }
            nowprice_Spexlatertrunksupports.style.display = "none";
          });
        }
      }
    }
  }
});
// endregion

/*---  Spex軀幹子系統-軀幹側支撐點擊列 - subtitle部分  ---*/
//region
let Spex_latertrunksupports = document.querySelector(
  ".Spex_latertrunksupports"
);
Spex_latertrunksupports.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let showinfo = event.target.dataset.showinfo;
  let introdution = event.target;
  //確認我點擊到的位置是否是Spex_latertrunksupports
  if (showinfo === "Spexlatertrunksupports") {
    let introdutionid = event.target.nextElementSibling;
    let Price_Spex_latertrunksupports = document.querySelectorAll(".pricing");
    let Spex_latertrunksupportsimg =
      Spex_latertrunksupports.querySelector(".target_img"); // 找到最近的 .target_img
    let img = Spex_latertrunksupportsimg.querySelector("img");

    Price_Spex_latertrunksupports.forEach(function (openIntro) {
      let Spexlatertrunksupports = Price_Spex_latertrunksupports[17];
      //直接判斷是第幾個.Price
      let nowprice_Spexlatertrunksupports =
        Price_Spex_latertrunksupports[17].nextElementSibling;

      if (
        openIntro.getAttribute("data-price-Spexlatertrunksupports") ===
          "Spexlatertrunksupports" &&
        nowprice_Spexlatertrunksupports.getAttribute(
          "data-nowprice-Spexlatertrunksupports"
        ) === "nowSpexlatertrunksupports"
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
          nowprice_Spexlatertrunksupports.style.display = "block";
          nowprice_Spexlatertrunksupports.style.display = "flex";
          nowprice_Spexlatertrunksupports.style.width = "95%";
          nowprice_Spexlatertrunksupports.style.height = "90%";
          nowprice_Spexlatertrunksupports.style.color = "#000000";
          nowprice_Spexlatertrunksupports.style.borderRadius = "8px";
          nowprice_Spexlatertrunksupports.style.padding = "1px";
          nowprice_Spexlatertrunksupports.style.margin = "3px 3px 3px 2px";
          nowprice_Spexlatertrunksupports.style.textAlign = "center";
          nowprice_Spexlatertrunksupports.style.fontSize = "16px";
          nowprice_Spexlatertrunksupports.style.fontWeight = "600";
          nowprice_Spexlatertrunksupports.style.alignItems = "center";
          nowprice_Spexlatertrunksupports.style.justifyContent = "center";

          if (img) {
            img.setAttribute("src", "./img/black triangle after.png");
          }

          if (window.matchMedia("(max-width: 650px)").matches) {
            nowprice_Spexlatertrunksupports.style.fontSize = "15px";
            introdutionid.style.width = "calc(100% - 9px)";
            Spexlatertrunksupports.style.padding = "5px";
            Spexlatertrunksupports.style.margin = "3px 0px 3px 1px";
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
          nowprice_Spexlatertrunksupports.style.display = "none";

          if (img) {
            img.setAttribute("src", "./img/black triangle.png");
          }
        }
      }
    });
  }
});
//endregion

//region --- 側支撐擋墊布套選項 ---

//region --- 側支撐擋墊的選項 ---
let SpexLaterTrunkPadTypeOptions = [
  { value: "option1", text: "請選擇", selected: true },
  { value: "option2", text: "狹長型" },
  { value: "option3", text: "狹長微彎型" },
  { value: "option4", text: "寬短型" },
];
//endregion

//region --- 側支撐表布的選項 ---
let SpexLaterTrunkPadClothTypeOptions = [
  { value: "option1", text: "請選擇", selected: true },
  { value: "option2", text: "STANDARD" },
  { value: "option3", text: "COMFY" },
];
//endregion

//region --- 雙曲面側支撐擋墊厚度的選項 ---
let SpexLaterTrunkAxialBiangularOptions = [
  { value: "option1", text: "請選擇", selected: true },
  { value: "option2", text: "12mm" },
  { value: "option3", text: "24mm" },
];
//endregion

//region --- 可外撥側支撐STANDARD狹長型擋墊墊寬的選項 ---
let SpexLaterTrunklStandardStraightPadSizeWidthOptions = [
  { value: "option1", text: "墊寬", selected: true },
  { value: "option2", text: "85mm" },
  { value: "option3", text: "95mm" },
  { value: "option4", text: "95mm" },
  { value: "option5", text: "115mm" },
  { value: "option6", text: "115mm" },
];
//endregion

//region --- 可外撥側支撐STANDARD狹長型擋墊墊高的選項 ---
let SpexLaterTrunklStandardStraightPadSizeHeighOptions = [
  { value: "option1", text: "墊高", selected: true },
  { value: "option2", text: "115mm" },
  { value: "option3", text: "145mm" },
  { value: "option4", text: "180mm" },
  { value: "option5", text: "210mm" },
  { value: "option6", text: "240mm" },
];
//endregion

//region --- 可外撥側支撐COMFY狹長型擋墊墊寬的選項 ---
let SpexLaterTrunklComfyStraightPadSizeWidthOptions = [
  { value: "option1", text: "墊寬", selected: true },
  { value: "option2", text: "85mm" },
  { value: "option3", text: "95mm" },
  { value: "option4", text: "95mm" },
  { value: "option5", text: "115mm" },
  { value: "option6", text: "115mm" },
];
//endregion

//region --- 可外撥側支撐COMFY狹長型擋墊墊高的選項 ---
let SpexLaterTrunklComfyStraightPadSizeHeighOptions = [
  { value: "option1", text: "墊高", selected: true },
  { value: "option2", text: "115mm" },
  { value: "option3", text: "145mm" },
  { value: "option4", text: "180mm" },
  { value: "option5", text: "210mm" },
  { value: "option6", text: "240mm" },
];
//endregion

//region --- 可外撥側支撐STANDARD狹長微彎型擋墊墊寬的選項 ---
let SpexLaterTrunklStandardCurvedPadSizeWidthOptions = [
  { value: "option1", text: "墊寬", selected: true },
  { value: "option2", text: "95mm" },
  { value: "option3", text: "95mm" },
  { value: "option4", text: "115mm" },
  { value: "option5", text: "115mm" },
];
//endregion

//region --- 可外撥側支撐STANDARD狹長微彎型擋墊墊高的選項 ---
let SpexLaterTrunklStandardCurvedPadSizeHeighOptions = [
  { value: "option1", text: "墊高", selected: true },
  { value: "option2", text: "145mm" },
  { value: "option3", text: "180mm" },
  { value: "option4", text: "210mm" },
  { value: "option5", text: "240mm" },
];
//endregion

//region --- 可外撥側支撐COMFY狹長微彎型擋墊墊寬的選項 ---
let SpexLaterTrunklComfyCurvedPadSizeWidthOptions = [
  { value: "option1", text: "墊寬", selected: true },
  { value: "option2", text: "95mm" },
  { value: "option3", text: "95mm" },
  { value: "option4", text: "115mm" },
  { value: "option5", text: "115mm" },
];
//endregion

//region --- 可外撥側支撐COMFY狹長微彎型擋墊墊高的選項 ---
let SpexLaterTrunklComfyCurvedPadSizeHeighOptions = [
  { value: "option1", text: "墊高", selected: true },
  { value: "option2", text: "145mm" },
  { value: "option3", text: "180mm" },
  { value: "option4", text: "210mm" },
  { value: "option5", text: "240mm" },
];
//endregion

//region --- 可外撥側支撐STANDARD寬短型擋墊墊寬的選項 ---
let SpexLaterTrunklStandardBroadPadSizeWidthOptions = [
  { value: "option1", text: "墊寬", selected: true },
  { value: "option2", text: "105mm" },
  { value: "option3", text: "125mm" },
  { value: "option4", text: "140mm" },
  { value: "option5", text: "160mm" },
  { value: "option6", text: "195mm" },
  { value: "option7", text: "230mm" },
];
//endregion

//region --- 可外撥側支撐STANDARD寬短型擋墊墊高的選項 ---
let SpexLaterTrunklStandardBroadPadSizeHeighOptions = [
  { value: "option1", text: "墊高", selected: true },
  { value: "option2", text: "130mm" },
  { value: "option3", text: "140mm" },
  { value: "option4", text: "150mm" },
  { value: "option5", text: "155mm" },
  { value: "option6", text: "165mm" },
  { value: "option7", text: "175mm" },
];
//endregion

//region --- 可外撥側支撐COMFY寬短型擋墊墊寬的選項 ---
let SpexLaterTrunklComfyBroadPadSizeWidthOptions = [
  { value: "option1", text: "墊寬", selected: true },
  { value: "option2", text: "105mm" },
  { value: "option3", text: "125mm" },
  { value: "option4", text: "140mm" },
  { value: "option5", text: "160mm" },
  { value: "option6", text: "195mm" },
  { value: "option7", text: "230mm" },
];
//endregion

//region --- 可外撥側支撐COMFY寬短型擋墊墊高的選項 ---
let SpexLaterTrunklComfyBroadPadSizeHeighOptions = [
  { value: "option1", text: "墊高", selected: true },
  { value: "option2", text: "130mm" },
  { value: "option3", text: "140mm" },
  { value: "option4", text: "150mm" },
  { value: "option5", text: "155mm" },
  { value: "option6", text: "165mm" },
  { value: "option7", text: "175mm" },
];
//endregion

//region --- 雙曲面側支撐12mm厚度STANDARD擋墊墊寬的選項 ---
let SpexLaterTrunkAxialBiangular12StandardPadSizeWidthOptions = [
  { value: "option1", text: "墊寬", selected: true },
  { value: "option2", text: "165mm" },
  { value: "option3", text: "215mm" },
  { value: "option4", text: "265mm" },
];
//endregion

//region --- 雙曲面側支撐12mm厚度STANDARD擋墊墊高的選項 ---
let SpexLaterTrunkAxialBiangular12StandardPadSizHeighOptions = [
  { value: "option1", text: "墊高", selected: true },
  { value: "option2", text: "175mm" },
  { value: "option3", text: "195mm" },
  { value: "option4", text: "195mm" },
];
//endregion

//region --- 雙曲面側支撐12mm厚度COMFY擋墊墊寬的選項 ---
let SpexLaterTrunkAxialBiangular12ComfyPadSizeWidthOptions = [
  { value: "option1", text: "墊寬", selected: true },
  { value: "option2", text: "165mm" },
  { value: "option3", text: "215mm" },
  { value: "option4", text: "265mm" },
];
//endregion

//region --- 雙曲面側支撐12mm厚度COMFY擋墊墊高的選項 ---
let SpexLaterTrunkAxialBiangular12ComfyPadSizHeighOptions = [
  { value: "option1", text: "墊高", selected: true },
  { value: "option2", text: "175mm" },
  { value: "option3", text: "195mm" },
  { value: "option4", text: "195mm" },
];
//endregion

//region --- 雙曲面側支撐24mm厚度STANDARD擋墊墊寬的選項 ---
let SpexLaterTrunkAxialBiangular24StandardPadSizeWidthOptions = [
  { value: "option1", text: "墊寬", selected: true },
  { value: "option2", text: "165mm" },
  { value: "option3", text: "215mm" },
  { value: "option4", text: "265mm" },
];
//endregion

//region --- 雙曲面側支撐24mm厚度STANDARD擋墊墊高的選項 ---
let SpexLaterTrunkAxialBiangular24StandardPadSizHeighOptions = [
  { value: "option1", text: "墊高", selected: true },
  { value: "option2", text: "175mm" },
  { value: "option3", text: "195mm" },
  { value: "option4", text: "195mm" },
];
//endregion

//region --- 雙曲面側支撐24mm厚度COMFY擋墊墊寬的選項 ---
let SpexLaterTrunkAxialBiangular24ComfyPadSizeWidthOptions = [
  { value: "option1", text: "墊寬", selected: true },
  { value: "option2", text: "165mm" },
  { value: "option3", text: "215mm" },
  { value: "option4", text: "265mm" },
];
//endregion

//region --- 雙曲面側支撐24mm厚度COMFY擋墊墊高的選項 ---
let SpexLaterTrunkAxialBiangular24ComfyPadSizHeighOptions = [
  { value: "option1", text: "墊高", selected: true },
  { value: "option2", text: "175mm" },
  { value: "option3", text: "195mm" },
  { value: "option4", text: "195mm" },
];
//endregion

//endregion

//region 關閉沒有勾選的checkbox選項

//region --- 多軸可外撥側支撐 ---
let Spex_LaterTrunk_Axial = document.getElementById("Spex_LaterTrunk_Axial");
let latertrunkaxialcount = document.getElementById("latertrunkaxialcount");
let latertrunkaxialpadtype = document.querySelector(".latertrunkaxialpadtype");
let latertrunkaxialclothpadtype = document.querySelector(
  ".latertrunkaxialclothpadtype"
);
let latertrunkaxialpadsize_Width = document.querySelector(
  ".latertrunkaxialpadsize_Width"
);
let latertrunkaxialpadsize_Heigh = document.querySelector(
  ".latertrunkaxialpadsize_Heigh"
);
let latertrunkaxialpadcount = document.getElementById(
  "latertrunkaxialpadcount"
);
//endregion

//region --- Spex可外撥側支撐(Standard) ---
let Spex_LaterTrunk_Standard = document.getElementById(
  "Spex_LaterTrunk_Standard"
);
let standardsize1 = document.getElementById("standardsize1");
let standardsize2 = document.getElementById("standardsize2");
let latertrunkstandardcount = document.getElementById(
  "latertrunkstandardcount"
);
let latertrunkstandardpadtype = document.querySelector(
  ".latertrunkstandardpadtype"
);
let latertrunkstandardclothpadtype = document.querySelector(
  ".latertrunkstandardclothpadtype"
);
let latertrunkstandardpadsize_Width = document.querySelector(
  ".latertrunkstandardpadsize_Width"
);
let latertrunkstandardpadsize_Heigh = document.querySelector(
  ".latertrunkstandardpadsize_Heigh"
);
//endregion

//region --- Spex可外撥側支撐(Offset) ---
let Spex_LaterTrunk_Offset = document.getElementById("Spex_LaterTrunk_Offset");
let offsetsize1 = document.getElementById("offsetsize1");
let offsetsize2 = document.getElementById("offsetsize2");
let latertrunkoffsetcount = document.getElementById("latertrunkoffsetcount");
let latertrunkoffsetpadtype = document.querySelector(
  ".latertrunkoffsetpadtype"
);
let latertrunkoffsetclothpadtype = document.querySelector(
  ".latertrunkoffsetclothpadtype"
);
let latertrunkoffsetpadsize_Width = document.querySelector(
  ".latertrunkoffsetpadsize_Width"
);
let latertrunkoffsetpadsize_Heigh = document.querySelector(
  ".latertrunkoffsetpadsize_Heigh"
);
let latertrunkoffsetpadcount = document.getElementById(
  "latertrunkoffsetpadcount"
);
//endregion

//region --- Spex 雙曲面多軸可外撥側支撐扣具 ---
let Spex_LaterTrunk_AxialBiangular = document.getElementById(
  "Spex_LaterTrunk_AxialBiangular"
);
let latertrunk_axialbiangularcount = document.getElementById(
  "latertrunk_axialbiangularcount"
);
let latertrunkaxialbiangular = document.querySelector(
  ".latertrunkaxialbiangular"
);
let latertrunk_axialpadtype = document.querySelector(
  ".latertrunk_axialpadtype"
);
let latertrunk_axialbiangular_Width = document.querySelector(
  ".latertrunk_axialbiangular_Width"
);
let latertrunk_axialbiangular_Heigh = document.querySelector(
  ".latertrunk_axialbiangular_Heigh"
);
let latertrunkaxialbiangularpadcount = document.getElementById(
  "latertrunkaxialbiangularpadcount"
);
//endregion

//region
document.addEventListener("DOMContentLoaded", function () {
  latertrunkaxialcount.disabled = true; // 禁用
  latertrunkaxialpadtype.disabled = true; // 禁用
  latertrunkaxialclothpadtype.disabled = true; // 禁用
  latertrunkaxialpadsize_Width.disabled = true; // 禁用
  latertrunkaxialpadsize_Heigh.disabled = true; // 禁用
  latertrunkaxialpadcount.disabled = true; // 禁用

  standardsize1.disabled = true; // 禁用
  standardsize2.disabled = true; // 禁用
  latertrunkstandardcount.disabled = true; // 禁用
  latertrunkstandardpadtype.disabled = true; // 禁用
  latertrunkstandardclothpadtype.disabled = true; // 禁用
  latertrunkstandardpadsize_Width.disabled = true; // 禁用
  latertrunkstandardpadsize_Heigh.disabled = true; // 禁用
  latertrunkstandardpadcount.disabled = true; // 禁用

  offsetsize1.disabled = true; // 禁用
  offsetsize2.disabled = true; // 禁用
  latertrunkoffsetcount.disabled = true; // 禁用
  latertrunkoffsetpadtype.disabled = true; // 禁用
  latertrunkoffsetclothpadtype.disabled = true; // 禁用
  latertrunkoffsetpadsize_Width.disabled = true; // 禁用
  latertrunkoffsetpadsize_Heigh.disabled = true; // 禁用
  latertrunkoffsetpadcount.disabled = true; // 禁用

  latertrunk_axialbiangularcount.disabled = true; // 禁用
  latertrunkaxialbiangular.disabled = true; // 禁用
  latertrunk_axialpadtype.disabled = true; // 禁用
  latertrunk_axialbiangular_Width.disabled = true; // 禁用
  latertrunk_axialbiangular_Heigh.disabled = true; // 禁用
  latertrunkaxialbiangularpadcount.disabled = true; // 禁用
});
//endregion
//endregion

//region --- 一開始只顯示哪些選擇
document
  .querySelectorAll('input[name="car_SpexLaterTrunkSupports"]')
  .forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      if (checkbox.id === "Spex_LaterTrunk_Axial") {
        latertrunkaxialcount.disabled = false;
        latertrunkaxialpadtype.disabled = false;
        latertrunkaxialclothpadtype.disabled = false;
      }
      if (checkbox.id === "Spex_LaterTrunk_Standard") {
        standardsize1.disabled = false;
        standardsize2.disabled = false;
      }
      if (checkbox.id === "Spex_LaterTrunk_Offset") {
        offsetsize1.disabled = false;
        offsetsize2.disabled = false;
      }
      if (checkbox.id === "Spex_LaterTrunk_AxialBiangular") {
        latertrunk_axialbiangularcount.disabled = false;
      }
    });
  });
//endregion

//region --- 多軸可外撥側支撐 ---
function LaterTrunkAxialSelectOptions(selectElement, options) {
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

//region --- 勾選多軸可外撥側支撐時，才可填入數量及選擇擋墊跟擋墊布套尺寸 ---
Spex_LaterTrunk_Axial.addEventListener("change", () => {
  if (Spex_LaterTrunk_Axial.checked) {
    latertrunkaxialcount.disabled = false;
    latertrunkaxialpadcount.textContent = "";

    LaterTrunkAxialSelectOptions(
      latertrunkaxialpadtype,
      SpexLaterTrunkPadTypeOptions
    );
    LaterTrunkAxialSelectOptions(
      latertrunkaxialclothpadtype,
      SpexLaterTrunkPadClothTypeOptions
    );

    latertrunkaxialcountprices.textContent = "";
    latertrunkaxialpadcountprices.textContent = "";
    if (
      (latertrunkaccessoryprices.textContent !== "" ||
        latertrunkaccessoryprices.textContent !== "0") &&
      [...allspexlatertrunkaxialprice].some((cb) => cb.checked)
    ) {
      nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
        latertrunkaccessoryprices.textContent
      )} 元`;
    } else {
      updateSpexLaterTrunkTotalPrice();
    }
  } else {
    latertrunkaxialcount.disabled = true; // 禁用
    latertrunkaxialpadtype.disabled = true;
    latertrunkaxialclothpadtype.disabled = true;
    latertrunkaxialpadsize_Width.disabled = true;
    latertrunkaxialpadsize_Heigh.disabled = true;
    latertrunkaxialpadcount.disabled = true;
    latertrunkaxialcount.value = "";
    LaterTrunkAxialSelectOptions(
      latertrunkaxialpadtype,
      SpexLaterTrunkPadTypeOptions
    );
    LaterTrunkAxialSelectOptions(
      latertrunkaxialclothpadtype,
      SpexLaterTrunkPadClothTypeOptions
    );
    LaterTrunkAxialSelectOptions(
      latertrunkaxialpadsize_Width,
      SpexLaterTrunklStandardStraightPadSizeWidthOptions
    );
    LaterTrunkAxialSelectOptions(
      latertrunkaxialpadsize_Heigh,
      SpexLaterTrunklStandardStraightPadSizeHeighOptions
    );
    latertrunkprices.value = "";
    latertrunkaxialpadcount.value = "";

    latertrunkaxialcountprices.textContent = "";
    latertrunkaxialpadcountprices.textContent = "";

    if (
      (latertrunkaccessoryprices.textContent !== "" ||
        latertrunkaccessoryprices.textContent !== "0") &&
      [...allspexlatertrunkaxialprice].some((cb) => cb.checked)
    ) {
      nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
        latertrunkaccessoryprices.textContent
      )} 元`;
    } else {
      updateSpexLaterTrunkTotalPrice();
    }
  }
});
//endregion

//region --- 監聽"擋墊種類"，選擇擋墊種類時會開啟擋墊布套尺寸跟數量 ---
latertrunkaxialpadtype.addEventListener("change", () => {
  if (Spex_LaterTrunk_Axial.checked) {
    latertrunkaxialpadtype.disabled = false;
    latertrunkaxialclothpadtype.disabled = false;
    latertrunkaxialpadcountprices.textContent = "";

    if (
      (latertrunkaccessoryprices.textContent !== "" ||
        latertrunkaccessoryprices.textContent !== "0") &&
      [...allspexlatertrunkaxialprice].some((cb) => cb.checked)
    ) {
      nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
        latertrunkaccessoryprices.textContent
      )} 元`;
    } else {
      updateSpexLaterTrunkTotalPrice();
    }
    if (
      latertrunkaxialpadtype.value === "option2" &&
      latertrunkaxialclothpadtype.value === "option2"
    ) {
      latertrunkaxialpadsize_Width.disabled = false;
      LaterTrunkAxialSelectOptions(
        latertrunkaxialpadsize_Width,
        SpexLaterTrunklStandardStraightPadSizeWidthOptions
      );
      LaterTrunkAxialSelectOptions(
        latertrunkaxialpadsize_Heigh,
        SpexLaterTrunklStandardStraightPadSizeHeighOptions
      );
      latertrunkaxialpadsize_Heigh.disabled = true;
      latertrunkaxialpadcount.value = "";
      latertrunkaxialpadcount.disabled = true;
    }
    if (
      latertrunkaxialpadtype.value === "option2" &&
      latertrunkaxialclothpadtype.value === "option3"
    ) {
      latertrunkaxialpadsize_Width.disabled = false;
      LaterTrunkAxialSelectOptions(
        latertrunkaxialpadsize_Width,
        SpexLaterTrunklComfyStraightPadSizeWidthOptions
      );
      LaterTrunkAxialSelectOptions(
        latertrunkaxialpadsize_Heigh,
        SpexLaterTrunklComfyStraightPadSizeHeighOptions
      );
      latertrunkaxialpadsize_Heigh.disabled = true;
      latertrunkaxialpadcount.value = "";
      latertrunkaxialpadcount.disabled = true;
    }
    if (
      latertrunkaxialpadtype.value === "option3" &&
      latertrunkaxialclothpadtype.value === "option2"
    ) {
      latertrunkaxialpadsize_Width.disabled = false;
      LaterTrunkAxialSelectOptions(
        latertrunkaxialpadsize_Width,
        SpexLaterTrunklStandardCurvedPadSizeWidthOptions
      );
      LaterTrunkAxialSelectOptions(
        latertrunkaxialpadsize_Heigh,
        SpexLaterTrunklStandardCurvedPadSizeHeighOptions
      );
      latertrunkaxialpadsize_Heigh.disabled = true;
      latertrunkaxialpadcount.value = "";
      latertrunkaxialpadcount.disabled = true;
    }
    if (
      latertrunkaxialpadtype.value === "option3" &&
      latertrunkaxialclothpadtype.value === "option3"
    ) {
      latertrunkaxialpadsize_Width.disabled = false;
      LaterTrunkAxialSelectOptions(
        latertrunkaxialpadsize_Width,
        SpexLaterTrunklComfyCurvedPadSizeWidthOptions
      );
      LaterTrunkAxialSelectOptions(
        latertrunkaxialpadsize_Heigh,
        SpexLaterTrunklComfyCurvedPadSizeHeighOptions
      );
      latertrunkaxialpadsize_Heigh.disabled = true;
      latertrunkaxialpadcount.value = "";
      latertrunkaxialpadcount.disabled = true;
    }
    if (
      latertrunkaxialpadtype.value === "option4" &&
      latertrunkaxialclothpadtype.value === "option2"
    ) {
      latertrunkaxialpadsize_Width.disabled = false;
      LaterTrunkAxialSelectOptions(
        latertrunkaxialpadsize_Width,
        SpexLaterTrunklStandardBroadPadSizeWidthOptions
      );
      LaterTrunkAxialSelectOptions(
        latertrunkaxialpadsize_Heigh,
        SpexLaterTrunklStandardBroadPadSizeHeighOptions
      );
      latertrunkaxialpadsize_Heigh.disabled = true;
      latertrunkaxialpadcount.value = "";
      latertrunkaxialpadcount.disabled = true;
    }
    if (
      latertrunkaxialpadtype.value === "option4" &&
      latertrunkaxialclothpadtype.value === "option3"
    ) {
      latertrunkaxialpadsize_Width.disabled = false;
      LaterTrunkAxialSelectOptions(
        latertrunkaxialpadsize_Width,
        SpexLaterTrunklComfyBroadPadSizeWidthOptions
      );
      LaterTrunkAxialSelectOptions(
        latertrunkaxialpadsize_Heigh,
        SpexLaterTrunklComfyBroadPadSizeHeighOptions
      );
      latertrunkaxialpadsize_Heigh.disabled = true;
      latertrunkaxialpadcount.value = "";
      latertrunkaxialpadcount.disabled = true;
    }
    if (latertrunkaxialpadcountprices.textContent !== "") {
      latertrunkaxialpadcountprices.textContent = "";
    }
  } else {
    latertrunkaxialpadsize_Width.disabled = true;
    latertrunkaxialpadsize_Heigh.disabled = true;
    latertrunkaxialpadtype.disabled = true;
    latertrunkaxialclothpadtype.disabled = true;
    latertrunkaxialpadcount.disabled = true;
    LaterTrunkAxialSelectOptions(
      latertrunkaxialpadsize_Width,
      SpexLaterTrunklStandardStraightPadSizeWidthOptions
    );
    latertrunkaxialpadcount.value = "";
    latertrunkaxialpadcountprices.textContent = "";

    if (
      (latertrunkaccessoryprices.textContent !== "" ||
        latertrunkaccessoryprices.textContent !== "0") &&
      [...allspexlatertrunkaxialprice].some((cb) => cb.checked)
    ) {
      nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
        latertrunkaccessoryprices.textContent
      )} 元`;
    } else {
      updateSpexLaterTrunkTotalPrice();
    }
  }
});
//endregion

//region --- 監聽"擋墊布套"，選擇擋墊種類時會開啟擋墊布套尺寸跟數量---
latertrunkaxialclothpadtype.addEventListener("change", () => {
  if (Spex_LaterTrunk_Axial.checked) {
    latertrunkaxialpadtype.disabled = false;
    latertrunkaxialclothpadtype.disabled = false;
    latertrunkaxialpadcountprices.textContent = "";

    if (
      (latertrunkaccessoryprices.textContent !== "" ||
        latertrunkaccessoryprices.textContent !== "0") &&
      [...allspexlatertrunkaxialprice].some((cb) => cb.checked)
    ) {
      nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
        latertrunkaccessoryprices.textContent
      )} 元`;
    } else {
      updateSpexLaterTrunkTotalPrice();
    }
    if (
      latertrunkaxialpadtype.value === "option2" &&
      latertrunkaxialclothpadtype.value === "option2"
    ) {
      latertrunkaxialpadsize_Width.disabled = false;
      LaterTrunkAxialSelectOptions(
        latertrunkaxialpadsize_Width,
        SpexLaterTrunklStandardStraightPadSizeWidthOptions
      );
      LaterTrunkAxialSelectOptions(
        latertrunkaxialpadsize_Heigh,
        SpexLaterTrunklStandardStraightPadSizeHeighOptions
      );
      latertrunkaxialpadsize_Heigh.disabled = true;
      latertrunkaxialpadcount.value = "";
      latertrunkaxialpadcount.disabled = true;
    }
    if (
      latertrunkaxialpadtype.value === "option2" &&
      latertrunkaxialclothpadtype.value === "option3"
    ) {
      latertrunkaxialpadsize_Width.disabled = false;
      LaterTrunkAxialSelectOptions(
        latertrunkaxialpadsize_Width,
        SpexLaterTrunklComfyStraightPadSizeWidthOptions
      );
      LaterTrunkAxialSelectOptions(
        latertrunkaxialpadsize_Heigh,
        SpexLaterTrunklComfyStraightPadSizeHeighOptions
      );
      latertrunkaxialpadsize_Heigh.disabled = true;
      latertrunkaxialpadcount.value = "";
      latertrunkaxialpadcount.disabled = true;
    }
    if (
      latertrunkaxialpadtype.value === "option3" &&
      latertrunkaxialclothpadtype.value === "option2"
    ) {
      latertrunkaxialpadsize_Width.disabled = false;
      LaterTrunkAxialSelectOptions(
        latertrunkaxialpadsize_Width,
        SpexLaterTrunklStandardCurvedPadSizeWidthOptions
      );
      LaterTrunkAxialSelectOptions(
        latertrunkaxialpadsize_Heigh,
        SpexLaterTrunklStandardCurvedPadSizeHeighOptions
      );
      latertrunkaxialpadsize_Heigh.disabled = true;
      latertrunkaxialpadcount.value = "";
      latertrunkaxialpadcount.disabled = true;
    }
    if (
      latertrunkaxialpadtype.value === "option3" &&
      latertrunkaxialclothpadtype.value === "option3"
    ) {
      latertrunkaxialpadsize_Width.disabled = false;
      LaterTrunkAxialSelectOptions(
        latertrunkaxialpadsize_Width,
        SpexLaterTrunklComfyCurvedPadSizeWidthOptions
      );
      LaterTrunkAxialSelectOptions(
        latertrunkaxialpadsize_Heigh,
        SpexLaterTrunklComfyCurvedPadSizeHeighOptions
      );
      latertrunkaxialpadsize_Heigh.disabled = true;
      latertrunkaxialpadcount.value = "";
      latertrunkaxialpadcount.disabled = true;
    }
    if (
      latertrunkaxialpadtype.value === "option4" &&
      latertrunkaxialclothpadtype.value === "option2"
    ) {
      latertrunkaxialpadsize_Width.disabled = false;
      LaterTrunkAxialSelectOptions(
        latertrunkaxialpadsize_Width,
        SpexLaterTrunklStandardBroadPadSizeWidthOptions
      );
      LaterTrunkAxialSelectOptions(
        latertrunkaxialpadsize_Heigh,
        SpexLaterTrunklStandardBroadPadSizeHeighOptions
      );
      latertrunkaxialpadsize_Heigh.disabled = true;
      latertrunkaxialpadcount.value = "";
      latertrunkaxialpadcount.disabled = true;
    }
    if (
      latertrunkaxialpadtype.value === "option4" &&
      latertrunkaxialclothpadtype.value === "option3"
    ) {
      latertrunkaxialpadsize_Width.disabled = false;
      LaterTrunkAxialSelectOptions(
        latertrunkaxialpadsize_Width,
        SpexLaterTrunklComfyBroadPadSizeWidthOptions
      );
      LaterTrunkAxialSelectOptions(
        latertrunkaxialpadsize_Heigh,
        SpexLaterTrunklComfyBroadPadSizeHeighOptions
      );
      latertrunkaxialpadsize_Heigh.disabled = true;
      latertrunkaxialpadcount.value = "";
      latertrunkaxialpadcount.disabled = true;
    }
    latertrunkaxialpadcountprices.textContent = "";

    if (
      (latertrunkaccessoryprices.textContent !== "" ||
        latertrunkaccessoryprices.textContent !== "0") &&
      [...allspexlatertrunkaxialprice].some((cb) => cb.checked)
    ) {
      nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
        latertrunkaccessoryprices.textContent
      )} 元`;
    } else {
      updateSpexLaterTrunkTotalPrice();
    }
  } else {
    latertrunkaxialpadsize_Width.disabled = true;
    latertrunkaxialpadsize_Heigh.disabled = true;
    latertrunkaxialpadtype.disabled = true;
    latertrunkaxialclothpadtype.disabled = true;
    latertrunkaxialpadcount.disabled = true;
    LaterTrunkAxialSelectOptions(
      latertrunkaxialpadsize_Width,
      SpexLaterTrunklStandardStraightPadSizeWidthOptions
    );
    latertrunkaxialpadcount.value = "";
    latertrunkaxialpadcountprices.textContent = "";

    if (
      (latertrunkaccessoryprices.textContent !== "" ||
        latertrunkaccessoryprices.textContent !== "0") &&
      [...allspexlatertrunkaxialprice].some((cb) => cb.checked)
    ) {
      nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
        latertrunkaccessoryprices.textContent
      )} 元`;
    } else {
      updateSpexLaterTrunkTotalPrice();
    }
  }
});
//endregion

//region --- 監聽"多軸可外撥側支撐"的"擋墊寬度"，選擇擋墊種類時會開啟擋墊布套尺寸跟數量 ---
latertrunkaxialpadsize_Width.addEventListener("change", function () {
  if (Spex_LaterTrunk_Axial.checked) {
    if (latertrunkaxialpadsize_Width.value === "option1") {
      LaterTrunkAxialSelectOptions(
        latertrunkaxialpadsize_Heigh,
        SpexLaterTrunklStandardStraightPadSizeHeighOptions
      );
      latertrunkaxialpadsize_Heigh.disabled = true;
      latertrunkaxialpadcount.value = "";
      latertrunkaxialpadcount.disabled = true;
      latertrunkaxialpadcountprices.textContent = "";

      if (
        (latertrunkaccessoryprices.textContent !== "" ||
          latertrunkaccessoryprices.textContent !== "0") &&
        [...allspexlatertrunkaxialprice].some((cb) => cb.checked)
      ) {
        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          latertrunkaccessoryprices.textContent
        )} 元`;
      } else {
        updateSpexLaterTrunkTotalPrice();
      }
      return;
    }
    //region --- 當擋墊是"狹長型"並且表布是"STANDARD"時 ---
    if (
      latertrunkaxialpadtype.value === "option2" &&
      latertrunkaxialclothpadtype.value === "option2"
    ) {
      latertrunkaxialpadsize_Heigh.disabled = false;
      latertrunkaxialpadcount.disabled = false;
      //當選擇"墊寬"是"85mm"時，"墊高"會有"115mm"
      if (latertrunkaxialpadsize_Width.value === "option2") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardStraightPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardStraightPadSizeHeighOptions.filter((option) =>
            ["option1", "option2"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkaxialpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkaxialpadcount.value = "";
      }
      //當選擇"墊寬"是"95mm"時，"墊高"會有"145mm"
      if (latertrunkaxialpadsize_Width.value === "option3") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardStraightPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardStraightPadSizeHeighOptions.filter((option) =>
            ["option1", "option3"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkaxialpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkaxialpadcount.value = "";
      }
      //當選擇"墊寬"是"95mm"時，"墊高"會有"180mm"
      if (latertrunkaxialpadsize_Width.value === "option4") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardStraightPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardStraightPadSizeHeighOptions.filter((option) =>
            ["option1", "option4"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkaxialpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkaxialpadcount.value = "";
      }
      //當選擇"墊寬"是"115mm"時，"墊高"會有"210mm"
      if (latertrunkaxialpadsize_Width.value === "option5") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardStraightPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardStraightPadSizeHeighOptions.filter((option) =>
            ["option1", "option5"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkaxialpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkaxialpadcount.value = "";
      }
      //當選擇"墊寬"是"115mm"時，"墊高"會有"240mm"
      if (latertrunkaxialpadsize_Width.value === "option6") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardStraightPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardStraightPadSizeHeighOptions.filter((option) =>
            ["option1", "option6"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkaxialpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkaxialpadcount.value = "";
      }
    }
    //endregion

    //region --- 當擋墊是"狹長型"並且表布是"COMFY"時 ---
    if (
      latertrunkaxialpadtype.value === "option2" &&
      latertrunkaxialclothpadtype.value === "option3"
    ) {
      latertrunkaxialpadsize_Heigh.disabled = false;
      latertrunkaxialpadcount.disabled = false;
      //當選擇"墊寬"是"85mm"時，"墊高"會有"115mm"
      if (latertrunkaxialpadsize_Width.value === "option2") {
        let filteredHeightOptions =
          SpexLaterTrunklComfyStraightPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklComfyStraightPadSizeHeighOptions.filter((option) =>
            ["option1", "option2"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkaxialpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkaxialpadcount.value = "";
      }
      //當選擇"墊寬"是"95mm"時，"墊高"會有"145mm"
      if (latertrunkaxialpadsize_Width.value === "option3") {
        let filteredHeightOptions =
          SpexLaterTrunklComfyStraightPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklComfyStraightPadSizeHeighOptions.filter((option) =>
            ["option1", "option3"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkaxialpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkaxialpadcount.value = "";
      }
      //當選擇"墊寬"是"95mm"時，"墊高"會有"180mm"
      if (latertrunkaxialpadsize_Width.value === "option4") {
        let filteredHeightOptions =
          SpexLaterTrunklComfyStraightPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklComfyStraightPadSizeHeighOptions.filter((option) =>
            ["option1", "option4"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkaxialpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkaxialpadcount.value = "";
      }
      //當選擇"墊寬"是"115mm"時，"墊高"會有"210mm"
      if (latertrunkaxialpadsize_Width.value === "option5") {
        let filteredHeightOptions =
          SpexLaterTrunklComfyStraightPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklComfyStraightPadSizeHeighOptions.filter((option) =>
            ["option1", "option5"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkaxialpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkaxialpadcount.value = "";
      }
      //當選擇"墊寬"是"115mm"時，"墊高"會有"240mm"
      if (latertrunkaxialpadsize_Width.value === "option6") {
        let filteredHeightOptions =
          SpexLaterTrunklComfyStraightPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklComfyStraightPadSizeHeighOptions.filter((option) =>
            ["option1", "option6"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkaxialpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkaxialpadcount.value = "";
      }
    }
    //endregion

    //region --- 當擋墊是"狹長微彎型"並且表布是"STANDARD"時 ---
    if (
      latertrunkaxialpadtype.value === "option3" &&
      latertrunkaxialclothpadtype.value === "option2"
    ) {
      latertrunkaxialpadsize_Heigh.disabled = false;
      latertrunkaxialpadcount.disabled = false;
      //當選擇"墊寬"是"95mm"時，"墊高"會有"145mm"
      if (latertrunkaxialpadsize_Width.value === "option2") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardCurvedPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardCurvedPadSizeHeighOptions.filter((option) =>
            ["option1", "option2"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkaxialpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkaxialpadcount.value = "";
      }
      //當選擇"墊寬"是"95mm"時，"墊高"會有"180mm"
      if (latertrunkaxialpadsize_Width.value === "option3") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardCurvedPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardCurvedPadSizeHeighOptions.filter((option) =>
            ["option1", "option3"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkaxialpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkaxialpadcount.value = "";
      }
      //當選擇"墊寬"是"115mm"時，"墊高"會有"210mm"
      if (latertrunkaxialpadsize_Width.value === "option4") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardCurvedPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardCurvedPadSizeHeighOptions.filter((option) =>
            ["option1", "option4"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkaxialpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkaxialpadcount.value = "";
      }
      //當選擇"墊寬"是"115mm"時，"墊高"會有"240mm"
      if (latertrunkaxialpadsize_Width.value === "option5") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardCurvedPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardCurvedPadSizeHeighOptions.filter((option) =>
            ["option1", "option5"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkaxialpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkaxialpadcount.value = "";
      }
    }
    //endregion

    //region --- 當擋墊是"狹長微彎型"並且表布是"COMFY"時 ---
    if (
      latertrunkaxialpadtype.value === "option3" &&
      latertrunkaxialclothpadtype.value === "option3"
    ) {
      latertrunkaxialpadsize_Heigh.disabled = false;
      latertrunkaxialpadcount.disabled = false;
      //當選擇"墊寬"是"85mm"時，"墊高"會有"115mm"
      if (latertrunkaxialpadsize_Width.value === "option2") {
        let filteredHeightOptions =
          SpexLaterTrunklComfyCurvedPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklComfyCurvedPadSizeHeighOptions.filter((option) =>
            ["option1", "option2"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkaxialpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkaxialpadcount.value = "";
      }
      //當選擇"墊寬"是"95mm"時，"墊高"會有"145mm"
      if (latertrunkaxialpadsize_Width.value === "option3") {
        let filteredHeightOptions =
          SpexLaterTrunklComfyCurvedPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklComfyCurvedPadSizeHeighOptions.filter((option) =>
            ["option1", "option3"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkaxialpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkaxialpadcount.value = "";
      }
      //當選擇"墊寬"是"95mm"時，"墊高"會有"180mm"
      if (latertrunkaxialpadsize_Width.value === "option4") {
        let filteredHeightOptions =
          SpexLaterTrunklComfyCurvedPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklComfyCurvedPadSizeHeighOptions.filter((option) =>
            ["option1", "option4"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkaxialpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkaxialpadcount.value = "";
      }
      //當選擇"墊寬"是"115mm"時，"墊高"會有"210mm"
      if (latertrunkaxialpadsize_Width.value === "option5") {
        let filteredHeightOptions =
          SpexLaterTrunklComfyCurvedPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklComfyCurvedPadSizeHeighOptions.filter((option) =>
            ["option1", "option5"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkaxialpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkaxialpadcount.value = "";
      }
      //當選擇"墊寬"是"115mm"時，"墊高"會有"240mm"
      if (latertrunkaxialpadsize_Width.value === "option6") {
        let filteredHeightOptions =
          SpexLaterTrunklComfyCurvedPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklComfyCurvedPadSizeHeighOptions.filter((option) =>
            ["option1", "option6"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkaxialpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkaxialpadcount.value = "";
      }
    }
    //endregion

    //region --- 當擋墊是"寬短型"並且表布是"STANDARD"時 ---
    if (
      latertrunkaxialpadtype.value === "option4" &&
      latertrunkaxialclothpadtype.value === "option2"
    ) {
      latertrunkaxialpadsize_Heigh.disabled = false;
      latertrunkaxialpadcount.disabled = false;
      //當選擇"墊寬"是"105mm"時，"墊高"會有"130mm"
      if (latertrunkaxialpadsize_Width.value === "option2") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions.filter((option) =>
            ["option1", "option2"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkaxialpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkaxialpadcount.value = "";
      }
      //當選擇"墊寬"是"125mm"時，"墊高"會有"140mm"
      if (latertrunkaxialpadsize_Width.value === "option3") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions.filter((option) =>
            ["option1", "option3"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkaxialpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkaxialpadcount.value = "";
      }
      //當選擇"墊寬"是"140mm"時，"墊高"會有"150mm"
      if (latertrunkaxialpadsize_Width.value === "option4") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions.filter((option) =>
            ["option1", "option4"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkaxialpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkaxialpadcount.value = "";
      }
      //當選擇"墊寬"是"160mm"時，"墊高"會有"155mm"
      if (latertrunkaxialpadsize_Width.value === "option5") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions.filter((option) =>
            ["option1", "option5"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkaxialpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkaxialpadcount.value = "";
      }
      //當選擇"墊寬"是"195mm"時，"墊高"會有"165mm"
      if (latertrunkaxialpadsize_Width.value === "option6") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions.filter((option) =>
            ["option1", "option6"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkaxialpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkaxialpadcount.value = "";
      }
      //當選擇"墊寬"是"230mm"時，"墊高"會有"175mm"
      if (latertrunkaxialpadsize_Width.value === "option7") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions.filter((option) =>
            ["option1", "option7"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkaxialpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkaxialpadcount.value = "";
      }
    }
    //endregion

    //region --- 當擋墊是"寬短型"並且表布是"COMFY"時 ---
    if (
      latertrunkaxialpadtype.value === "option4" &&
      latertrunkaxialclothpadtype.value === "option3"
    ) {
      latertrunkaxialpadsize_Heigh.disabled = false;
      latertrunkaxialpadcount.disabled = false;
      //當選擇"墊寬"是"105mm"時，"墊高"會有"130mm"
      if (latertrunkaxialpadsize_Width.value === "option2") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions.filter((option) =>
            ["option1", "option2"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkaxialpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkaxialpadcount.value = "";
      }
      //當選擇"墊寬"是"125mm"時，"墊高"會有"140mm"
      if (latertrunkaxialpadsize_Width.value === "option3") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions.filter((option) =>
            ["option1", "option3"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkaxialpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkaxialpadcount.value = "";
      }
      //當選擇"墊寬"是"140mm"時，"墊高"會有"150mm"
      if (latertrunkaxialpadsize_Width.value === "option4") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions.filter((option) =>
            ["option1", "option4"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkaxialpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkaxialpadcount.value = "";
      }
      //當選擇"墊寬"是"160mm"時，"墊高"會有"155mm"
      if (latertrunkaxialpadsize_Width.value === "option5") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions.filter((option) =>
            ["option1", "option5"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkaxialpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkaxialpadcount.value = "";
      }
      //當選擇"墊寬"是"195mm"時，"墊高"會有"165mm"
      if (latertrunkaxialpadsize_Width.value === "option6") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions.filter((option) =>
            ["option1", "option6"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkaxialpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkaxialpadcount.value = "";
      }
      //當選擇"墊寬"是"230mm"時，"墊高"會有"175mm"
      if (latertrunkaxialpadsize_Width.value === "option7") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions.filter((option) =>
            ["option1", "option7"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkaxialpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkaxialpadcount.value = "";
      }
    }
    //endregion
  }
});
//endregion

//endregion

//region --- Spex可外撥側支撐(Standard) ---
function LaterTrunkStandardSelectOptions(selectElement, options) {
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
//region --- 勾選可外撥側支撐(Standard)時，才可填入數量及選擇擋墊跟擋墊布套尺寸 ---
Spex_LaterTrunk_Standard.addEventListener("change", () => {
  if (Spex_LaterTrunk_Standard.checked) {
    latertrunkstandardpadtype.disabled = true;
    latertrunkstandardclothpadtype.disabled = true;
    latertrunkstandardpadsize_Width.disabled = true;
    latertrunkstandardpadsize_Heigh.disabled = true;
    latertrunkstandardpadcount.disabled = true;

    LaterTrunkStandardSelectOptions(
      latertrunkstandardpadtype,
      SpexLaterTrunkPadTypeOptions
    );
    LaterTrunkStandardSelectOptions(
      latertrunkstandardclothpadtype,
      SpexLaterTrunkPadClothTypeOptions
    );
  } else {
    standardsize1.disabled = true;
    standardsize2.disabled = true;
    latertrunkstandardcount.disabled = true;
    latertrunkstandardpadtype.disabled = true;
    latertrunkstandardclothpadtype.disabled = true;
    latertrunkstandardpadsize_Width.disabled = true;
    latertrunkstandardpadsize_Heigh.disabled = true;
    latertrunkstandardpadcount.disabled = true;

    standardsize1.checked = false;
    standardsize2.checked = false;
    latertrunkstandardcount.value = "";
    latertrunkstandardpadcount.value = "";

    LaterTrunkStandardSelectOptions(
      latertrunkstandardpadtype,
      SpexLaterTrunkPadTypeOptions
    );
    LaterTrunkStandardSelectOptions(
      latertrunkstandardclothpadtype,
      SpexLaterTrunkPadClothTypeOptions
    );
    LaterTrunkStandardSelectOptions(
      latertrunkstandardpadsize_Width,
      SpexLaterTrunklStandardStraightPadSizeWidthOptions
    );
    LaterTrunkStandardSelectOptions(
      latertrunkstandardpadsize_Heigh,
      SpexLaterTrunklStandardStraightPadSizeHeighOptions
    );
    latertrunkstandardpadcount.value = "";

    latertrunkstandardcountprices.textContent = "";
    latertrunkstandardpadcountprices.textContent = "";
  }
});
//endregion

//region --- 確定勾選的是哪個側支撐尺寸，且不會重複勾選選項 ---
document
  .querySelectorAll('input[name="latertrunk_standard"]')
  .forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      document
        .querySelectorAll('input[name="latertrunk_standard"]')
        .forEach((otherCheckbox) => {
          if (otherCheckbox !== this) {
            otherCheckbox.checked = false;
          }
          latertrunkstandardcount.disabled = false;
          if (!checkbox.checked) {
            checkbox.checked = false;
            latertrunkstandardcount.value = "";
            latertrunkstandardcount.disabled = true;
            latertrunkstandardpadtype.disabled = true;
            latertrunkstandardclothpadtype.disabled = true;
            latertrunkstandardpadsize_Width.disabled = true;
            latertrunkstandardpadsize_Heigh.disabled = true;
            latertrunkstandardpadcount.disabled = true;
            latertrunkstandardpadcount.value = "";

            LaterTrunkStandardSelectOptions(
              latertrunkstandardpadtype,
              SpexLaterTrunkPadTypeOptions
            );
            LaterTrunkStandardSelectOptions(
              latertrunkstandardclothpadtype,
              SpexLaterTrunkPadClothTypeOptions
            );
            LaterTrunkStandardSelectOptions(
              latertrunkstandardpadsize_Width,
              SpexLaterTrunklStandardStraightPadSizeWidthOptions
            );
            LaterTrunkStandardSelectOptions(
              latertrunkstandardpadsize_Heigh,
              SpexLaterTrunklStandardStraightPadSizeHeighOptions
            );
            latertrunkstandardpadcount.value = "";

            latertrunkstandardcountprices.textContent = "";
            latertrunkstandardpadcountprices.textContent = "";

            if (
              (latertrunkaccessoryprices.textContent !== "" ||
                latertrunkaccessoryprices.textContent !== "0") &&
              [...allspexlatertrunkaxialprice].some((cb) => cb.checked)
            ) {
              nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
                latertrunkaccessoryprices.textContent
              )} 元`;
            } else {
              updateSpexLaterTrunkTotalPrice();
            }
          } else {
            latertrunkstandardcount.value = "";
            latertrunkstandardpadtype.disabled = true;
            latertrunkstandardclothpadtype.disabled = true;
            latertrunkstandardpadsize_Width.disabled = true;
            latertrunkstandardpadsize_Heigh.disabled = true;
            latertrunkstandardpadcount.disabled = true;
            latertrunkstandardpadcount.value = "";

            LaterTrunkStandardSelectOptions(
              latertrunkstandardpadtype,
              SpexLaterTrunkPadTypeOptions
            );
            LaterTrunkStandardSelectOptions(
              latertrunkstandardclothpadtype,
              SpexLaterTrunkPadClothTypeOptions
            );
            LaterTrunkStandardSelectOptions(
              latertrunkstandardpadsize_Width,
              SpexLaterTrunklStandardStraightPadSizeWidthOptions
            );
            LaterTrunkStandardSelectOptions(
              latertrunkstandardpadsize_Heigh,
              SpexLaterTrunklStandardStraightPadSizeHeighOptions
            );
            latertrunkstandardpadcount.value = "";

            latertrunkstandardcountprices.textContent = "";
            latertrunkstandardpadcountprices.textContent = "";

            if (
              (latertrunkaccessoryprices.textContent !== "" ||
                latertrunkaccessoryprices.textContent !== "0") &&
              [...allspexlatertrunkaxialprice].some((cb) => cb.checked)
            ) {
              nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
                latertrunkaccessoryprices.textContent
              )} 元`;
            } else {
              updateSpexLaterTrunkTotalPrice();
            }
          }
        });
    });
  });
//endregion

//region --- 監聽側支撐數量位置是否有輸入數字 ---
latertrunkstandardcount.addEventListener("input", function () {
  if (this.value.trim() !== "") {
    latertrunkstandardpadtype.disabled = false;
    latertrunkstandardclothpadtype.disabled = false;
  } else {
    latertrunkstandardpadtype.disabled = true;
    latertrunkstandardclothpadtype.disabled = true;
  }
});
//endregion

//region --- 監聽"擋墊種類"，選擇擋墊種類時會開啟擋墊布套尺寸跟數量 ---
latertrunkstandardpadtype.addEventListener("change", () => {
  if (Spex_LaterTrunk_Standard.checked) {
    latertrunkstandardpadtype.disabled = false;
    latertrunkstandardclothpadtype.disabled = false;
    latertrunkstandardpadcountprices.textContent = "";

    if (
      (latertrunkaccessoryprices.textContent !== "" ||
        latertrunkaccessoryprices.textContent !== "0") &&
      [...allspexlatertrunkaxialprice].some((cb) => cb.checked)
    ) {
      nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
        latertrunkaccessoryprices.textContent
      )} 元`;
    } else {
      updateSpexLaterTrunkTotalPrice();
    }
    if (
      latertrunkstandardpadtype.value === "option2" &&
      latertrunkstandardclothpadtype.value === "option2"
    ) {
      latertrunkstandardpadsize_Width.disabled = false;
      LaterTrunkStandardSelectOptions(
        latertrunkstandardpadsize_Width,
        SpexLaterTrunklStandardStraightPadSizeWidthOptions
      );
      LaterTrunkStandardSelectOptions(
        latertrunkstandardpadsize_Heigh,
        SpexLaterTrunklStandardStraightPadSizeHeighOptions
      );
      latertrunkstandardpadsize_Heigh.disabled = true;
      latertrunkstandardpadcount.value = "";
      latertrunkstandardpadcount.disabled = true;
    }
    if (
      latertrunkstandardpadtype.value === "option2" &&
      latertrunkstandardclothpadtype.value === "option3"
    ) {
      latertrunkstandardpadsize_Width.disabled = false;
      LaterTrunkStandardSelectOptions(
        latertrunkstandardpadsize_Width,
        SpexLaterTrunklComfyStraightPadSizeWidthOptions
      );
      LaterTrunkStandardSelectOptions(
        latertrunkstandardpadsize_Heigh,
        SpexLaterTrunklComfyStraightPadSizeHeighOptions
      );
      latertrunkstandardpadsize_Heigh.disabled = true;
      latertrunkstandardpadcount.value = "";
      latertrunkstandardpadcount.disabled = true;
    }
    if (
      latertrunkstandardpadtype.value === "option3" &&
      latertrunkstandardclothpadtype.value === "option2"
    ) {
      latertrunkstandardpadsize_Width.disabled = false;
      LaterTrunkAxialSelectOptions(
        latertrunkstandardpadsize_Width,
        SpexLaterTrunklStandardCurvedPadSizeWidthOptions
      );
      LaterTrunkAxialSelectOptions(
        latertrunkstandardpadsize_Heigh,
        SpexLaterTrunklStandardCurvedPadSizeHeighOptions
      );
      latertrunkstandardpadsize_Heigh.disabled = true;
      latertrunkstandardpadcount.value = "";
      latertrunkstandardpadcount.disabled = true;
    }
    if (
      latertrunkstandardpadtype.value === "option3" &&
      latertrunkstandardclothpadtype.value === "option3"
    ) {
      latertrunkstandardpadsize_Width.disabled = false;
      LaterTrunkAxialSelectOptions(
        latertrunkstandardpadsize_Width,
        SpexLaterTrunklComfyCurvedPadSizeWidthOptions
      );
      LaterTrunkAxialSelectOptions(
        latertrunkstandardpadsize_Heigh,
        SpexLaterTrunklComfyCurvedPadSizeHeighOptions
      );
      latertrunkstandardpadsize_Heigh.disabled = true;
      latertrunkstandardpadcount.value = "";
      latertrunkstandardpadcount.disabled = true;
    }
    if (
      latertrunkstandardpadtype.value === "option4" &&
      latertrunkstandardclothpadtype.value === "option2"
    ) {
      latertrunkstandardpadsize_Width.disabled = false;
      LaterTrunkAxialSelectOptions(
        latertrunkstandardpadsize_Width,
        SpexLaterTrunklStandardBroadPadSizeWidthOptions
      );
      LaterTrunkAxialSelectOptions(
        latertrunkstandardpadsize_Heigh,
        SpexLaterTrunklStandardBroadPadSizeHeighOptions
      );
      latertrunkstandardpadsize_Heigh.disabled = true;
      latertrunkstandardpadcount.value = "";
      latertrunkstandardpadcount.disabled = true;
    }
    if (
      latertrunkstandardpadtype.value === "option4" &&
      latertrunkstandardclothpadtype.value === "option3"
    ) {
      latertrunkstandardpadsize_Width.disabled = false;
      LaterTrunkAxialSelectOptions(
        latertrunkstandardpadsize_Width,
        SpexLaterTrunklComfyBroadPadSizeWidthOptions
      );
      LaterTrunkAxialSelectOptions(
        latertrunkstandardpadsize_Heigh,
        SpexLaterTrunklComfyBroadPadSizeHeighOptions
      );
      latertrunkstandardpadsize_Heigh.disabled = true;
      latertrunkstandardpadcount.value = "";
      latertrunkstandardpadcount.disabled = true;
    }
  } else {
    standardsize1.disabled = true;
    standardsize2.disabled = true;
    latertrunkstandardcount.disabled = true;
    latertrunkstandardpadtype.disabled = true;
    latertrunkstandardclothpadtype.disabled = true;
    latertrunkstandardpadsize_Width.disabled = true;
    latertrunkstandardpadsize_Heigh.disabled = true;
    latertrunkstandardpadcount.disabled = true;
    standardsize1.checked = false;
    standardsize2.checked = false;
    latertrunkstandardcount.value = "";
    LaterTrunkStandardSelectOptions(
      latertrunkstandardpadsize_Width,
      SpexLaterTrunklStandardStraightPadSizeWidthOptions
    );
    latertrunkstandardpadcount.value = "";
    latertrunkstandardpadcountprices.textContent = "";

    if (
      (latertrunkaccessoryprices.textContent !== "" ||
        latertrunkaccessoryprices.textContent !== "0") &&
      [...allspexlatertrunkaxialprice].some((cb) => cb.checked)
    ) {
      nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
        latertrunkaccessoryprices.textContent
      )} 元`;
    } else {
      updateSpexLaterTrunkTotalPrice();
    }
  }
});
//endregion

//region --- 監聽"擋墊布套"，選擇擋墊種類時會開啟擋墊布套尺寸跟數量 ---
latertrunkstandardclothpadtype.addEventListener("change", () => {
  if (Spex_LaterTrunk_Standard.checked) {
    latertrunkstandardpadtype.disabled = false;
    latertrunkstandardclothpadtype.disabled = false;
    latertrunkstandardpadcountprices.textContent = "";

    if (
      (latertrunkaccessoryprices.textContent !== "" ||
        latertrunkaccessoryprices.textContent !== "0") &&
      [...allspexlatertrunkaxialprice].some((cb) => cb.checked)
    ) {
      nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
        latertrunkaccessoryprices.textContent
      )} 元`;
    } else {
      updateSpexLaterTrunkTotalPrice();
    }
    if (
      latertrunkstandardpadtype.value === "option2" &&
      latertrunkstandardclothpadtype.value === "option2"
    ) {
      latertrunkstandardpadsize_Width.disabled = false;
      LaterTrunkStandardSelectOptions(
        latertrunkstandardpadsize_Width,
        SpexLaterTrunklStandardStraightPadSizeWidthOptions
      );
      LaterTrunkStandardSelectOptions(
        latertrunkstandardpadsize_Heigh,
        SpexLaterTrunklStandardStraightPadSizeHeighOptions
      );
      latertrunkstandardpadsize_Heigh.disabled = true;
      latertrunkstandardpadcount.value = "";
      latertrunkstandardpadcount.disabled = true;
    }
    if (
      latertrunkstandardpadtype.value === "option2" &&
      latertrunkstandardclothpadtype.value === "option3"
    ) {
      latertrunkstandardpadsize_Width.disabled = false;
      LaterTrunkStandardSelectOptions(
        latertrunkstandardpadsize_Width,
        SpexLaterTrunklComfyStraightPadSizeWidthOptions
      );
      LaterTrunkStandardSelectOptions(
        latertrunkstandardpadsize_Heigh,
        SpexLaterTrunklComfyStraightPadSizeHeighOptions
      );
      latertrunkstandardpadsize_Heigh.disabled = true;
      latertrunkstandardpadcount.value = "";
      latertrunkstandardpadcount.disabled = true;
    }
    if (
      latertrunkstandardpadtype.value === "option3" &&
      latertrunkstandardclothpadtype.value === "option2"
    ) {
      latertrunkstandardpadsize_Width.disabled = false;
      LaterTrunkAxialSelectOptions(
        latertrunkstandardpadsize_Width,
        SpexLaterTrunklStandardCurvedPadSizeWidthOptions
      );
      LaterTrunkAxialSelectOptions(
        latertrunkstandardpadsize_Heigh,
        SpexLaterTrunklStandardCurvedPadSizeHeighOptions
      );
      latertrunkstandardpadsize_Heigh.disabled = true;
      latertrunkstandardpadcount.value = "";
      latertrunkstandardpadcount.disabled = true;
    }
    if (
      latertrunkstandardpadtype.value === "option3" &&
      latertrunkstandardclothpadtype.value === "option3"
    ) {
      latertrunkstandardpadsize_Width.disabled = false;
      LaterTrunkAxialSelectOptions(
        latertrunkstandardpadsize_Width,
        SpexLaterTrunklComfyCurvedPadSizeWidthOptions
      );
      LaterTrunkAxialSelectOptions(
        latertrunkstandardpadsize_Heigh,
        SpexLaterTrunklComfyCurvedPadSizeHeighOptions
      );
      latertrunkstandardpadsize_Heigh.disabled = true;
      latertrunkstandardpadcount.value = "";
      latertrunkstandardpadcount.disabled = true;
    }
    if (
      latertrunkstandardpadtype.value === "option4" &&
      latertrunkstandardclothpadtype.value === "option2"
    ) {
      latertrunkstandardpadsize_Width.disabled = false;
      LaterTrunkAxialSelectOptions(
        latertrunkstandardpadsize_Width,
        SpexLaterTrunklStandardBroadPadSizeWidthOptions
      );
      LaterTrunkAxialSelectOptions(
        latertrunkstandardpadsize_Heigh,
        SpexLaterTrunklStandardBroadPadSizeHeighOptions
      );
      latertrunkstandardpadsize_Heigh.disabled = true;
      latertrunkstandardpadcount.value = "";
      latertrunkstandardpadcount.disabled = true;
    }
    if (
      latertrunkstandardpadtype.value === "option4" &&
      latertrunkstandardclothpadtype.value === "option3"
    ) {
      latertrunkstandardpadsize_Width.disabled = false;
      LaterTrunkAxialSelectOptions(
        latertrunkstandardpadsize_Width,
        SpexLaterTrunklComfyBroadPadSizeWidthOptions
      );
      LaterTrunkAxialSelectOptions(
        latertrunkstandardpadsize_Heigh,
        SpexLaterTrunklComfyBroadPadSizeHeighOptions
      );
      latertrunkstandardpadsize_Heigh.disabled = true;
      latertrunkstandardpadcount.value = "";
      latertrunkstandardpadcount.disabled = true;
      if (latertrunkstandardpadcountprices.textContent !== "") {
        latertrunkstandardpadcountprices.textContent = "";
      }
    }
  } else {
    standardsize1.disabled = true;
    standardsize2.disabled = true;
    latertrunkstandardcount.disabled = true;
    latertrunkstandardpadtype.disabled = true;
    latertrunkstandardclothpadtype.disabled = true;
    latertrunkstandardpadsize_Width.disabled = true;
    latertrunkstandardpadsize_Heigh.disabled = true;
    latertrunkstandardpadcount.disabled = true;
    standardsize1.checked = false;
    standardsize2.checked = false;
    latertrunkstandardcount.value = "";
    LaterTrunkStandardSelectOptions(
      latertrunkstandardpadsize_Width,
      SpexLaterTrunklStandardStraightPadSizeWidthOptions
    );
    latertrunkstandardpadcount.value = "";
    latertrunkstandardpadcountprices.textContent = "";

    if (
      (latertrunkaccessoryprices.textContent !== "" ||
        latertrunkaccessoryprices.textContent !== "0") &&
      [...allspexlatertrunkaxialprice].some((cb) => cb.checked)
    ) {
      nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
        latertrunkaccessoryprices.textContent
      )} 元`;
    } else {
      updateSpexLaterTrunkTotalPrice();
    }
  }
});
//endregion

//region --- 監聽"Spex可外撥側支撐(Standard)"的"擋墊寬度"，選擇擋墊種類時會開啟擋墊布套尺寸跟數量 ---
latertrunkstandardpadsize_Width.addEventListener("change", function () {
  if (Spex_LaterTrunk_Standard.checked) {
    if (latertrunkstandardpadsize_Width.value === "option1") {
      LaterTrunkStandardSelectOptions(
        latertrunkstandardpadsize_Heigh,
        SpexLaterTrunklStandardStraightPadSizeHeighOptions
      );
      latertrunkstandardpadsize_Heigh.disabled = true;
      latertrunkstandardpadcount.value = "";
      latertrunkstandardpadcount.disabled = true;
      latertrunkstandardpadcountprices.textContent = "";

      if (
        (latertrunkaccessoryprices.textContent !== "" ||
          latertrunkaccessoryprices.textContent !== "0") &&
        [...allspexlatertrunkaxialprice].some((cb) => cb.checked)
      ) {
        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          latertrunkaccessoryprices.textContent
        )} 元`;
      } else {
        updateSpexLaterTrunkTotalPrice();
      }

      return;
    }
    //region --- 當擋墊是"狹長型"並且表布是""是"STANDARD"時 ---
    if (
      latertrunkstandardpadtype.value === "option2" &&
      latertrunkstandardclothpadtype.value === "option2"
    ) {
      latertrunkstandardpadsize_Heigh.disabled = false;
      latertrunkstandardpadcount.disabled = false;
      //當選擇"墊寬"是"85mm"時，"墊高"會有"115mm"
      if (latertrunkstandardpadsize_Width.value === "option2") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardStraightPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardStraightPadSizeHeighOptions.filter((option) =>
            ["option1", "option2"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkstandardpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkstandardpadcount.value = "";
      }
      //當選擇"墊寬"是"95mm"時，"墊高"會有"145mm"
      if (latertrunkstandardpadsize_Width.value === "option3") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardStraightPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardStraightPadSizeHeighOptions.filter((option) =>
            ["option1", "option3"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkstandardpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkstandardpadcount.value = "";
      }
      //當選擇"墊寬"是"95mm"時，"墊高"會有"180mm"
      if (latertrunkstandardpadsize_Width.value === "option4") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardStraightPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardStraightPadSizeHeighOptions.filter((option) =>
            ["option1", "option4"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkstandardpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkstandardpadcount.value = "";
      }
      //當選擇"墊寬"是"115mm"時，"墊高"會有"210mm"
      if (latertrunkstandardpadsize_Width.value === "option5") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardStraightPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardStraightPadSizeHeighOptions.filter((option) =>
            ["option1", "option5"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkstandardpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkstandardpadcount.value = "";
      }
      //當選擇"墊寬"是"115mm"時，"墊高"會有"240mm"
      if (latertrunkstandardpadsize_Width.value === "option6") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardStraightPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardStraightPadSizeHeighOptions.filter((option) =>
            ["option1", "option6"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkstandardpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkstandardpadcount.value = "";
      }
    }
    //endregion

    //region --- 當擋墊是"狹長型"並且表布是""是"COMFY"時 ---
    if (
      latertrunkstandardpadtype.value === "option2" &&
      latertrunkstandardclothpadtype.value === "option3"
    ) {
      latertrunkstandardpadsize_Heigh.disabled = false;
      latertrunkstandardpadcount.disabled = false;
      //當選擇"墊寬"是"85mm"時，"墊高"會有"115mm"
      if (latertrunkstandardpadsize_Width.value === "option2") {
        let filteredHeightOptions =
          SpexLaterTrunklComfyStraightPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklComfyStraightPadSizeHeighOptions.filter((option) =>
            ["option1", "option2"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkstandardpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkstandardpadcount.value = "";
      }
      //當選擇"墊寬"是"95mm"時，"墊高"會有"145mm"
      if (latertrunkstandardpadsize_Width.value === "option3") {
        let filteredHeightOptions =
          SpexLaterTrunklComfyStraightPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklComfyStraightPadSizeHeighOptions.filter((option) =>
            ["option1", "option3"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkstandardpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkstandardpadcount.value = "";
      }
      //當選擇"墊寬"是"95mm"時，"墊高"會有"180mm"
      if (latertrunkstandardpadsize_Width.value === "option4") {
        let filteredHeightOptions =
          SpexLaterTrunklComfyStraightPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklComfyStraightPadSizeHeighOptions.filter((option) =>
            ["option1", "option4"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkstandardpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkstandardpadcount.value = "";
      }
      //當選擇"墊寬"是"115mm"時，"墊高"會有"210mm"
      if (latertrunkstandardpadsize_Width.value === "option5") {
        let filteredHeightOptions =
          SpexLaterTrunklComfyStraightPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklComfyStraightPadSizeHeighOptions.filter((option) =>
            ["option1", "option5"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkstandardpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkstandardpadcount.value = "";
      }
      //當選擇"墊寬"是"115mm"時，"墊高"會有"240mm"
      if (latertrunkstandardpadsize_Width.value === "option6") {
        let filteredHeightOptions =
          SpexLaterTrunklComfyStraightPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklComfyStraightPadSizeHeighOptions.filter((option) =>
            ["option1", "option6"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkstandardpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkstandardpadcount.value = "";
      }
    }
    //endregion

    //region --- 當擋墊是"狹長微彎型"並且表布是""是"STANDARD"時 ---
    if (
      latertrunkstandardpadtype.value === "option3" &&
      latertrunkstandardclothpadtype.value === "option2"
    ) {
      latertrunkstandardpadsize_Heigh.disabled = false;
      latertrunkstandardpadcount.disabled = false;
      //當選擇"墊寬"是"95mm"時，"墊高"會有"145mm"
      if (latertrunkstandardpadsize_Width.value === "option2") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardCurvedPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardCurvedPadSizeHeighOptions.filter((option) =>
            ["option1", "option2"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkstandardpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkstandardpadcount.value = "";
      }
      //當選擇"墊寬"是"95mm"時，"墊高"會有"180mm"
      if (latertrunkstandardpadsize_Width.value === "option3") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardCurvedPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardCurvedPadSizeHeighOptions.filter((option) =>
            ["option1", "option3"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkstandardpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkstandardpadcount.value = "";
      }
      //當選擇"墊寬"是"115mm"時，"墊高"會有"210mm"
      if (latertrunkstandardpadsize_Width.value === "option4") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardCurvedPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardCurvedPadSizeHeighOptions.filter((option) =>
            ["option1", "option4"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkstandardpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkstandardpadcount.value = "";
      }
      //當選擇"墊寬"是"115mm"時，"墊高"會有"240mm"
      if (latertrunkstandardpadsize_Width.value === "option5") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardCurvedPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardCurvedPadSizeHeighOptions.filter((option) =>
            ["option1", "option5"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkstandardpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkstandardpadcount.value = "";
      }
    }
    //endregion

    //region --- 當擋墊是"狹長微彎型"並且表布是""是"COMFY"時 ---
    if (
      latertrunkstandardpadtype.value === "option3" &&
      latertrunkstandardclothpadtype.value === "option3"
    ) {
      latertrunkstandardpadsize_Heigh.disabled = false;
      latertrunkstandardpadcount.disabled = false;
      //當選擇"墊寬"是"85mm"時，"墊高"會有"115mm"
      if (latertrunkstandardpadsize_Width.value === "option2") {
        let filteredHeightOptions =
          SpexLaterTrunklComfyCurvedPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklComfyCurvedPadSizeHeighOptions.filter((option) =>
            ["option1", "option2"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkstandardpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkstandardpadcount.value = "";
      }
      //當選擇"墊寬"是"95mm"時，"墊高"會有"145mm"
      if (latertrunkstandardpadsize_Width.value === "option3") {
        let filteredHeightOptions =
          SpexLaterTrunklComfyCurvedPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklComfyCurvedPadSizeHeighOptions.filter((option) =>
            ["option1", "option3"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkstandardpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkstandardpadcount.value = "";
      }
      //當選擇"墊寬"是"95mm"時，"墊高"會有"180mm"
      if (latertrunkstandardpadsize_Width.value === "option4") {
        let filteredHeightOptions =
          SpexLaterTrunklComfyCurvedPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklComfyCurvedPadSizeHeighOptions.filter((option) =>
            ["option1", "option4"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkstandardpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkstandardpadcount.value = "";
      }
      //當選擇"墊寬"是"115mm"時，"墊高"會有"210mm"
      if (latertrunkstandardpadsize_Width.value === "option5") {
        let filteredHeightOptions =
          SpexLaterTrunklComfyCurvedPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklComfyCurvedPadSizeHeighOptions.filter((option) =>
            ["option1", "option5"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkstandardpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkstandardpadcount.value = "";
      }
      //當選擇"墊寬"是"115mm"時，"墊高"會有"240mm"
      if (latertrunkstandardpadsize_Width.value === "option6") {
        let filteredHeightOptions =
          SpexLaterTrunklComfyCurvedPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklComfyCurvedPadSizeHeighOptions.filter((option) =>
            ["option1", "option6"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkstandardpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkstandardpadcount.value = "";
      }
    }
    //endregion

    //region --- 當擋墊是"寬短型"並且表布是""是"STANDARD"時 ---
    if (
      latertrunkstandardpadtype.value === "option4" &&
      latertrunkstandardclothpadtype.value === "option2"
    ) {
      latertrunkstandardpadsize_Heigh.disabled = false;
      latertrunkstandardpadcount.disabled = false;
      //當選擇"墊寬"是"105mm"時，"墊高"會有"130mm"
      if (latertrunkstandardpadsize_Width.value === "option2") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions.filter((option) =>
            ["option1", "option2"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkstandardpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkstandardpadcount.value = "";
      }
      //當選擇"墊寬"是"125mm"時，"墊高"會有"140mm"
      if (latertrunkstandardpadsize_Width.value === "option3") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions.filter((option) =>
            ["option1", "option3"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkstandardpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkstandardpadcount.value = "";
      }
      //當選擇"墊寬"是"140mm"時，"墊高"會有"150mm"
      if (latertrunkstandardpadsize_Width.value === "option4") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions.filter((option) =>
            ["option1", "option4"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkstandardpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkstandardpadcount.value = "";
      }
      //當選擇"墊寬"是"160mm"時，"墊高"會有"155mm"
      if (latertrunkstandardpadsize_Width.value === "option5") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions.filter((option) =>
            ["option1", "option5"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkstandardpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkstandardpadcount.value = "";
      }
      //當選擇"墊寬"是"195mm"時，"墊高"會有"165mm"
      if (latertrunkstandardpadsize_Width.value === "option6") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions.filter((option) =>
            ["option1", "option6"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkstandardpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkstandardpadcount.value = "";
      }
      //當選擇"墊寬"是"230mm"時，"墊高"會有"175mm"
      if (latertrunkstandardpadsize_Width.value === "option7") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions.filter((option) =>
            ["option1", "option7"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkstandardpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkstandardpadcount.value = "";
      }
    }
    //endregion

    //region --- 當擋墊是"寬短型"並且表布是""是"COMFY"時 ---
    if (
      latertrunkstandardpadtype.value === "option4" &&
      latertrunkstandardclothpadtype.value === "option3"
    ) {
      latertrunkstandardpadsize_Heigh.disabled = false;
      latertrunkstandardpadcount.disabled = false;
      //當選擇"墊寬"是"105mm"時，"墊高"會有"130mm"
      if (latertrunkstandardpadsize_Width.value === "option2") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions.filter((option) =>
            ["option1", "option2"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkstandardpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkstandardpadcount.value = "";
      }
      //當選擇"墊寬"是"125mm"時，"墊高"會有"140mm"
      if (latertrunkstandardpadsize_Width.value === "option3") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions.filter((option) =>
            ["option1", "option3"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkstandardpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkstandardpadcount.value = "";
      }
      //當選擇"墊寬"是"140mm"時，"墊高"會有"150mm"
      if (latertrunkstandardpadsize_Width.value === "option4") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions.filter((option) =>
            ["option1", "option4"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkstandardpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkstandardpadcount.value = "";
      }
      //當選擇"墊寬"是"160mm"時，"墊高"會有"155mm"
      if (latertrunkstandardpadsize_Width.value === "option5") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions.filter((option) =>
            ["option1", "option5"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkstandardpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkstandardpadcount.value = "";
      }
      //當選擇"墊寬"是"195mm"時，"墊高"會有"165mm"
      if (latertrunkstandardpadsize_Width.value === "option6") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions.filter((option) =>
            ["option1", "option6"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkstandardpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkstandardpadcount.value = "";
      }
      //當選擇"墊寬"是"230mm"時，"墊高"會有"175mm"
      if (latertrunkstandardpadsize_Width.value === "option7") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions.filter((option) =>
            ["option1", "option7"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkstandardpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkstandardpadcount.value = "";
      }
    }
    //endregion
  }
});
//endregion

//endregion

//region --- Spex可外撥側支撐(Offset) ---
function LaterTrunkOffsetSelectOptions(selectElement, options) {
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

//region --- 勾選可外撥側支撐(Offset)時，才可填入數量及選擇擋墊跟擋墊布套尺寸 ---
Spex_LaterTrunk_Offset.addEventListener("change", () => {
  if (Spex_LaterTrunk_Offset.checked) {
    offsetsize1.disabled = false;
    offsetsize2.disabled = false;

    LaterTrunkOffsetSelectOptions(
      latertrunkoffsetpadtype,
      SpexLaterTrunkAxialBiangularOptions
    );
    LaterTrunkOffsetSelectOptions(
      latertrunkoffsetclothpadtype,
      SpexLaterTrunkPadClothTypeOptions
    );
    LaterTrunkOffsetSelectOptions(
      latertrunkoffsetpadsize_Width,
      SpexLaterTrunklStandardStraightPadSizeWidthOptions
    );
    LaterTrunkOffsetSelectOptions(
      latertrunkoffsetpadsize_Heigh,
      SpexLaterTrunklStandardStraightPadSizeHeighOptions
    );
  } else {
    offsetsize1.disabled = true; // 禁用
    offsetsize2.disabled = true; // 禁用
    latertrunkoffsetcount.disabled = true; // 禁用
    latertrunkoffsetpadtype.disabled = true; // 禁用
    latertrunkoffsetclothpadtype.disabled = true; // 禁用
    latertrunkoffsetpadsize_Width.disabled = true; // 禁用
    latertrunkoffsetpadsize_Heigh.disabled = true; // 禁用
    latertrunkoffsetpadcount.disabled = true; // 禁用

    offsetsize1.checked = false;
    offsetsize2.checked = false;
    latertrunkoffsetcount.value = "";
    LaterTrunkOffsetSelectOptions(
      latertrunkoffsetpadtype,
      SpexLaterTrunkPadTypeOptions
    );
    LaterTrunkOffsetSelectOptions(
      latertrunkoffsetclothpadtype,
      SpexLaterTrunkPadClothTypeOptions
    );
    LaterTrunkOffsetSelectOptions(
      latertrunkoffsetpadsize_Width,
      SpexLaterTrunklStandardStraightPadSizeWidthOptions
    );
    LaterTrunkOffsetSelectOptions(
      latertrunkoffsetpadsize_Heigh,
      SpexLaterTrunklStandardStraightPadSizeHeighOptions
    );
    latertrunkoffsetpadcount.value = "";

    latertrunkoffsetcountprices.textContent = "";
    latertrunkoffsetpadcountprices.textContent = "";
  }
});
//endregion

//region --- 確定勾選的是哪個側支撐尺寸，且不會重複勾選選項 ---
document
  .querySelectorAll('input[name="latertrunk_offset"]')
  .forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      document
        .querySelectorAll('input[name="latertrunk_offset"]')
        .forEach((otherCheckbox) => {
          if (otherCheckbox !== this) {
            otherCheckbox.checked = false;
          }
          latertrunkoffsetcount.disabled = false;
          if (!checkbox.checked) {
            checkbox.checked = false;
            latertrunkoffsetcount.value = "";
            latertrunkoffsetcount.disabled = true;
            latertrunkoffsetpadtype.disabled = true; // 禁用
            latertrunkoffsetclothpadtype.disabled = true; // 禁用
            latertrunkoffsetpadsize_Width.disabled = true; // 禁用
            latertrunkoffsetpadsize_Heigh.disabled = true; // 禁用
            latertrunkoffsetpadcount.disabled = true; // 禁用
            latertrunkoffsetcount.value = "";
            LaterTrunkOffsetSelectOptions(
              latertrunkoffsetpadtype,
              SpexLaterTrunkPadTypeOptions
            );
            LaterTrunkOffsetSelectOptions(
              latertrunkoffsetclothpadtype,
              SpexLaterTrunkPadClothTypeOptions
            );
            LaterTrunkOffsetSelectOptions(
              latertrunkoffsetpadsize_Width,
              SpexLaterTrunklStandardStraightPadSizeWidthOptions
            );
            LaterTrunkOffsetSelectOptions(
              latertrunkoffsetpadsize_Heigh,
              SpexLaterTrunklStandardStraightPadSizeHeighOptions
            );
            latertrunkoffsetpadcount.value = "";

            latertrunkoffsetcountprices.textContent = "";
            latertrunkoffsetpadcountprices.textContent = "";

            if (
              (latertrunkaccessoryprices.textContent !== "" ||
                latertrunkaccessoryprices.textContent !== "0") &&
              [...allspexlatertrunkaxialprice].some((cb) => cb.checked)
            ) {
              nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
                latertrunkaccessoryprices.textContent
              )} 元`;
            } else {
              updateSpexLaterTrunkTotalPrice();
            }
          } else {
            latertrunkoffsetcount.value = "";
            latertrunkoffsetpadtype.disabled = true; // 禁用
            latertrunkoffsetclothpadtype.disabled = true; // 禁用
            latertrunkoffsetpadsize_Width.disabled = true; // 禁用
            latertrunkoffsetpadsize_Heigh.disabled = true; // 禁用
            latertrunkoffsetpadcount.disabled = true; // 禁用
            latertrunkoffsetcount.value = "";
            LaterTrunkOffsetSelectOptions(
              latertrunkoffsetpadtype,
              SpexLaterTrunkPadTypeOptions
            );
            LaterTrunkOffsetSelectOptions(
              latertrunkoffsetclothpadtype,
              SpexLaterTrunkPadClothTypeOptions
            );
            LaterTrunkOffsetSelectOptions(
              latertrunkoffsetpadsize_Width,
              SpexLaterTrunklStandardStraightPadSizeWidthOptions
            );
            LaterTrunkOffsetSelectOptions(
              latertrunkoffsetpadsize_Heigh,
              SpexLaterTrunklStandardStraightPadSizeHeighOptions
            );
            latertrunkoffsetpadcount.value = "";

            latertrunkoffsetcountprices.textContent = "";
            latertrunkoffsetpadcountprices.textContent = "";

            if (
              (latertrunkaccessoryprices.textContent !== "" ||
                latertrunkaccessoryprices.textContent !== "0") &&
              [...allspexlatertrunkaxialprice].some((cb) => cb.checked)
            ) {
              nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
                latertrunkaccessoryprices.textContent
              )} 元`;
            } else {
              updateSpexLaterTrunkTotalPrice();
            }
          }
        });
    });
  });
//endregion

//region --- 監聽側支撐數量位置是否有輸入數字 ---
latertrunkoffsetcount.addEventListener("input", function () {
  if (this.value.trim() !== "") {
    latertrunkoffsetpadtype.disabled = false;
    latertrunkoffsetclothpadtype.disabled = false;
  } else {
    latertrunkoffsetpadtype.disabled = true;
    latertrunkoffsetclothpadtype.disabled = true;
  }
});
//endregion

//region --- 監聽"擋墊種類"，選擇擋墊種類時會開啟擋墊布套尺寸跟數量 ---
latertrunkoffsetpadtype.addEventListener("change", () => {
  if (Spex_LaterTrunk_Offset.checked) {
    latertrunkoffsetpadtype.disabled = false;
    latertrunkoffsetclothpadtype.disabled = false;
    latertrunkoffsetpadcountprices.textContent = "";

    if (
      (latertrunkaccessoryprices.textContent !== "" ||
        latertrunkaccessoryprices.textContent !== "0") &&
      [...allspexlatertrunkaxialprice].some((cb) => cb.checked)
    ) {
      nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
        latertrunkaccessoryprices.textContent
      )} 元`;
    } else {
      updateSpexLaterTrunkTotalPrice();
    }
    if (
      latertrunkoffsetpadtype.value === "option2" &&
      latertrunkoffsetclothpadtype.value === "option2"
    ) {
      latertrunkoffsetpadsize_Width.disabled = false;
      LaterTrunkStandardSelectOptions(
        latertrunkoffsetpadsize_Width,
        SpexLaterTrunklStandardStraightPadSizeWidthOptions
      );
      LaterTrunkStandardSelectOptions(
        latertrunkoffsetpadsize_Heigh,
        SpexLaterTrunklStandardStraightPadSizeHeighOptions
      );
      latertrunkoffsetpadsize_Heigh.disabled = true;
      latertrunkoffsetpadcount.value = "";
      latertrunkoffsetpadcount.disabled = true;
    }
    if (
      latertrunkoffsetpadtype.value === "option2" &&
      latertrunkoffsetclothpadtype.value === "option3"
    ) {
      latertrunkoffsetpadsize_Width.disabled = false;
      LaterTrunkStandardSelectOptions(
        latertrunkoffsetpadsize_Width,
        SpexLaterTrunklComfyStraightPadSizeWidthOptions
      );
      LaterTrunkStandardSelectOptions(
        latertrunkoffsetpadsize_Heigh,
        SpexLaterTrunklComfyStraightPadSizeHeighOptions
      );
      latertrunkoffsetpadsize_Heigh.disabled = true;
      latertrunkoffsetpadcount.value = "";
      latertrunkoffsetpadcount.disabled = true;
    }
    if (
      latertrunkoffsetpadtype.value === "option3" &&
      latertrunkoffsetclothpadtype.value === "option2"
    ) {
      latertrunkoffsetpadsize_Width.disabled = false;
      LaterTrunkAxialSelectOptions(
        latertrunkoffsetpadsize_Width,
        SpexLaterTrunklStandardCurvedPadSizeWidthOptions
      );
      LaterTrunkAxialSelectOptions(
        latertrunkoffsetpadsize_Heigh,
        SpexLaterTrunklStandardCurvedPadSizeHeighOptions
      );
      latertrunkoffsetpadsize_Heigh.disabled = true;
      latertrunkoffsetpadcount.value = "";
      latertrunkoffsetpadcount.disabled = true;
    }
    if (
      latertrunkoffsetpadtype.value === "option3" &&
      latertrunkoffsetclothpadtype.value === "option3"
    ) {
      latertrunkoffsetpadsize_Width.disabled = false;
      LaterTrunkAxialSelectOptions(
        latertrunkoffsetpadsize_Width,
        SpexLaterTrunklComfyCurvedPadSizeWidthOptions
      );
      LaterTrunkAxialSelectOptions(
        latertrunkoffsetpadsize_Heigh,
        SpexLaterTrunklComfyCurvedPadSizeHeighOptions
      );
      latertrunkoffsetpadsize_Heigh.disabled = true;
      latertrunkoffsetpadcount.value = "";
      latertrunkoffsetpadcount.disabled = true;
    }
    if (
      latertrunkoffsetpadtype.value === "option4" &&
      latertrunkoffsetclothpadtype.value === "option2"
    ) {
      latertrunkoffsetpadsize_Width.disabled = false;
      LaterTrunkAxialSelectOptions(
        latertrunkoffsetpadsize_Width,
        SpexLaterTrunklStandardBroadPadSizeWidthOptions
      );
      LaterTrunkAxialSelectOptions(
        latertrunkoffsetpadsize_Heigh,
        SpexLaterTrunklStandardBroadPadSizeHeighOptions
      );
      latertrunkoffsetpadsize_Heigh.disabled = true;
      latertrunkoffsetpadcount.value = "";
      latertrunkoffsetpadcount.disabled = true;
    }
    if (
      latertrunkoffsetpadtype.value === "option4" &&
      latertrunkoffsetclothpadtype.value === "option3"
    ) {
      latertrunkoffsetpadsize_Width.disabled = false;
      LaterTrunkAxialSelectOptions(
        latertrunkoffsetpadsize_Width,
        SpexLaterTrunklComfyBroadPadSizeWidthOptions
      );
      LaterTrunkAxialSelectOptions(
        latertrunkoffsetpadsize_Heigh,
        SpexLaterTrunklComfyBroadPadSizeHeighOptions
      );
      latertrunkoffsetpadsize_Heigh.disabled = true;
      latertrunkoffsetpadcount.value = "";
      latertrunkoffsetpadcount.disabled = true;
    }
  } else {
    offsetsize1.disabled = true; // 禁用
    offsetsize2.disabled = true; // 禁用
    latertrunkoffsetcount.disabled = true; // 禁用
    latertrunkoffsetpadtype.disabled = true; // 禁用
    latertrunkoffsetclothpadtype.disabled = true; // 禁用
    latertrunkoffsetpadsize_Width.disabled = true; // 禁用
    latertrunkoffsetpadsize_Heigh.disabled = true; // 禁用
    latertrunkoffsetpadcount.disabled = true; // 禁用

    offsetsize1.checked = false;
    offsetsize2.checked = false;
    latertrunkoffsetcount.value = "";
    LaterTrunkAxialSelectOptions(
      latertrunkoffsetpadsize_Width,
      SpexLaterTrunklStandardStraightPadSizeWidthOptions
    );
    latertrunkoffsetpadcount.value = "";
    latertrunkoffsetpadcountprices.textContent = "";

    if (
      (latertrunkaccessoryprices.textContent !== "" ||
        latertrunkaccessoryprices.textContent !== "0") &&
      [...allspexlatertrunkaxialprice].some((cb) => cb.checked)
    ) {
      nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
        latertrunkaccessoryprices.textContent
      )} 元`;
    } else {
      updateSpexLaterTrunkTotalPrice();
    }
  }
});
//endregion

//region --- 監聽"擋墊布套"，選擇擋墊種類時會開啟擋墊布套尺寸跟數量 ---
latertrunkoffsetclothpadtype.addEventListener("change", () => {
  if (Spex_LaterTrunk_Offset.checked) {
    latertrunkoffsetpadtype.disabled = false;
    latertrunkoffsetclothpadtype.disabled = false;
    latertrunkoffsetpadcountprices.textContent = "";

    if (
      (latertrunkaccessoryprices.textContent !== "" ||
        latertrunkaccessoryprices.textContent !== "0") &&
      [...allspexlatertrunkaxialprice].some((cb) => cb.checked)
    ) {
      nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
        latertrunkaccessoryprices.textContent
      )} 元`;
    } else {
      updateSpexLaterTrunkTotalPrice();
    }
    if (
      latertrunkoffsetpadtype.value === "option2" &&
      latertrunkoffsetclothpadtype.value === "option2"
    ) {
      latertrunkoffsetpadsize_Width.disabled = false;
      LaterTrunkStandardSelectOptions(
        latertrunkoffsetpadsize_Width,
        SpexLaterTrunklStandardStraightPadSizeWidthOptions
      );
      LaterTrunkStandardSelectOptions(
        latertrunkoffsetpadsize_Heigh,
        SpexLaterTrunklStandardStraightPadSizeHeighOptions
      );
      latertrunkoffsetpadsize_Heigh.disabled = true;
      latertrunkoffsetpadcount.value = "";
      latertrunkoffsetpadcount.disabled = true;
    }
    if (
      latertrunkoffsetpadtype.value === "option2" &&
      latertrunkoffsetclothpadtype.value === "option3"
    ) {
      latertrunkoffsetpadsize_Width.disabled = false;
      LaterTrunkStandardSelectOptions(
        latertrunkoffsetpadsize_Width,
        SpexLaterTrunklComfyStraightPadSizeWidthOptions
      );
      LaterTrunkStandardSelectOptions(
        latertrunkoffsetpadsize_Heigh,
        SpexLaterTrunklComfyStraightPadSizeHeighOptions
      );
      latertrunkoffsetpadsize_Heigh.disabled = true;
      latertrunkoffsetpadcount.value = "";
      latertrunkoffsetpadcount.disabled = true;
    }
    if (
      latertrunkoffsetpadtype.value === "option3" &&
      latertrunkoffsetclothpadtype.value === "option2"
    ) {
      latertrunkoffsetpadsize_Width.disabled = false;
      LaterTrunkAxialSelectOptions(
        latertrunkoffsetpadsize_Width,
        SpexLaterTrunklStandardCurvedPadSizeWidthOptions
      );
      LaterTrunkAxialSelectOptions(
        latertrunkoffsetpadsize_Heigh,
        SpexLaterTrunklStandardCurvedPadSizeHeighOptions
      );
      latertrunkoffsetpadsize_Heigh.disabled = true;
      latertrunkoffsetpadcount.value = "";
      latertrunkoffsetpadcount.disabled = true;
    }
    if (
      latertrunkoffsetpadtype.value === "option3" &&
      latertrunkoffsetclothpadtype.value === "option3"
    ) {
      latertrunkoffsetpadsize_Width.disabled = false;
      LaterTrunkAxialSelectOptions(
        latertrunkoffsetpadsize_Width,
        SpexLaterTrunklComfyCurvedPadSizeWidthOptions
      );
      LaterTrunkAxialSelectOptions(
        latertrunkoffsetpadsize_Heigh,
        SpexLaterTrunklComfyCurvedPadSizeHeighOptions
      );
      latertrunkoffsetpadsize_Heigh.disabled = true;
      latertrunkoffsetpadcount.value = "";
      latertrunkoffsetpadcount.disabled = true;
    }
    if (
      latertrunkoffsetpadtype.value === "option4" &&
      latertrunkoffsetclothpadtype.value === "option2"
    ) {
      latertrunkoffsetpadsize_Width.disabled = false;
      LaterTrunkAxialSelectOptions(
        latertrunkoffsetpadsize_Width,
        SpexLaterTrunklStandardBroadPadSizeWidthOptions
      );
      LaterTrunkAxialSelectOptions(
        latertrunkoffsetpadsize_Heigh,
        SpexLaterTrunklStandardBroadPadSizeHeighOptions
      );
      latertrunkoffsetpadsize_Heigh.disabled = true;
      latertrunkoffsetpadcount.value = "";
      latertrunkoffsetpadcount.disabled = true;
    }
    if (
      latertrunkoffsetpadtype.value === "option4" &&
      latertrunkoffsetclothpadtype.value === "option3"
    ) {
      latertrunkoffsetpadsize_Width.disabled = false;
      LaterTrunkAxialSelectOptions(
        latertrunkoffsetpadsize_Width,
        SpexLaterTrunklComfyBroadPadSizeWidthOptions
      );
      LaterTrunkAxialSelectOptions(
        latertrunkoffsetpadsize_Heigh,
        SpexLaterTrunklComfyBroadPadSizeHeighOptions
      );
      latertrunkoffsetpadsize_Heigh.disabled = true;
      latertrunkoffsetpadcount.value = "";
      latertrunkoffsetpadcount.disabled = true;
    }
  } else {
    offsetsize1.disabled = true; // 禁用
    offsetsize2.disabled = true; // 禁用
    latertrunkoffsetcount.disabled = true; // 禁用
    latertrunkoffsetpadtype.disabled = true; // 禁用
    latertrunkoffsetclothpadtype.disabled = true; // 禁用
    latertrunkoffsetpadsize_Width.disabled = true; // 禁用
    latertrunkoffsetpadsize_Heigh.disabled = true; // 禁用
    latertrunkoffsetpadcount.disabled = true; // 禁用

    offsetsize1.checked = false;
    offsetsize2.checked = false;
    latertrunkoffsetcount.value = "";
    LaterTrunkAxialSelectOptions(
      latertrunkoffsetpadsize_Width,
      SpexLaterTrunklStandardStraightPadSizeWidthOptions
    );
    latertrunkoffsetpadcount.value = "";
    latertrunkoffsetpadcountprices.textContent = "";

    if (
      (latertrunkaccessoryprices.textContent !== "" ||
        latertrunkaccessoryprices.textContent !== "0") &&
      [...allspexlatertrunkaxialprice].some((cb) => cb.checked)
    ) {
      nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
        latertrunkaccessoryprices.textContent
      )} 元`;
    } else {
      updateSpexLaterTrunkTotalPrice();
    }
  }
});
//endregion

//region --- 監聽"Spex可外撥側支撐(Offset)"的"擋墊寬度"，選擇擋墊種類時會開啟擋墊布套尺寸跟數量 ---
latertrunkoffsetpadsize_Width.addEventListener("change", function () {
  if (Spex_LaterTrunk_Offset.checked) {
    if (latertrunkoffsetpadsize_Width.value === "option1") {
      LaterTrunkStandardSelectOptions(
        latertrunkoffsetpadsize_Heigh,
        SpexLaterTrunklStandardStraightPadSizeHeighOptions
      );
      latertrunkoffsetpadsize_Heigh.disabled = true;
      latertrunkoffsetpadcount.value = "";
      latertrunkoffsetpadcount.disabled = true;
      latertrunkoffsetpadcountprices.textContent = "";

      if (
        (latertrunkaccessoryprices.textContent !== "" ||
          latertrunkaccessoryprices.textContent !== "0") &&
        [...allspexlatertrunkaxialprice].some((cb) => cb.checked)
      ) {
        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          latertrunkaccessoryprices.textContent
        )} 元`;
      } else {
        updateSpexLaterTrunkTotalPrice();
      }

      return;
    }
    //region --- 當擋墊是"狹長型"並且表布是""是"STANDARD"時 ---
    if (
      latertrunkoffsetpadtype.value === "option2" &&
      latertrunkoffsetclothpadtype.value === "option2"
    ) {
      latertrunkoffsetpadsize_Heigh.disabled = false;
      latertrunkoffsetpadcount.disabled = false;
      //當選擇"墊寬"是"85mm"時，"墊高"會有"115mm"
      if (latertrunkoffsetpadsize_Width.value === "option2") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardStraightPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardStraightPadSizeHeighOptions.filter((option) =>
            ["option1", "option2"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkoffsetpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkoffsetpadcount.value = "";
      }
      //當選擇"墊寬"是"95mm"時，"墊高"會有"145mm"
      if (latertrunkoffsetpadsize_Width.value === "option3") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardStraightPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardStraightPadSizeHeighOptions.filter((option) =>
            ["option1", "option3"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkoffsetpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkoffsetpadcount.value = "";
      }
      //當選擇"墊寬"是"95mm"時，"墊高"會有"180mm"
      if (latertrunkoffsetpadsize_Width.value === "option4") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardStraightPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardStraightPadSizeHeighOptions.filter((option) =>
            ["option1", "option4"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkoffsetpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkoffsetpadcount.value = "";
      }
      //當選擇"墊寬"是"115mm"時，"墊高"會有"210mm"
      if (latertrunkoffsetpadsize_Width.value === "option5") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardStraightPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardStraightPadSizeHeighOptions.filter((option) =>
            ["option1", "option5"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkoffsetpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkoffsetpadcount.value = "";
      }
      //當選擇"墊寬"是"115mm"時，"墊高"會有"240mm"
      if (latertrunkoffsetpadsize_Width.value === "option6") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardStraightPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardStraightPadSizeHeighOptions.filter((option) =>
            ["option1", "option6"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkoffsetpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkoffsetpadcount.value = "";
      }
    }
    //endregion

    //region --- 當擋墊是"狹長型"並且表布是"COMFY"時 ---
    if (
      latertrunkoffsetpadtype.value === "option2" &&
      latertrunkoffsetclothpadtype.value === "option3"
    ) {
      latertrunkoffsetpadsize_Heigh.disabled = false;
      latertrunkoffsetpadcount.disabled = false;
      //當選擇"墊寬"是"85mm"時，"墊高"會有"115mm"
      if (latertrunkoffsetpadsize_Width.value === "option2") {
        let filteredHeightOptions =
          SpexLaterTrunklComfyStraightPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklComfyStraightPadSizeHeighOptions.filter((option) =>
            ["option1", "option2"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkoffsetpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkoffsetpadcount.value = "";
      }
      //當選擇"墊寬"是"95mm"時，"墊高"會有"145mm"
      if (latertrunkoffsetpadsize_Width.value === "option3") {
        let filteredHeightOptions =
          SpexLaterTrunklComfyStraightPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklComfyStraightPadSizeHeighOptions.filter((option) =>
            ["option1", "option3"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkoffsetpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkoffsetpadcount.value = "";
      }
      //當選擇"墊寬"是"95mm"時，"墊高"會有"180mm"
      if (latertrunkoffsetpadsize_Width.value === "option4") {
        let filteredHeightOptions =
          SpexLaterTrunklComfyStraightPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklComfyStraightPadSizeHeighOptions.filter((option) =>
            ["option1", "option4"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkoffsetpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkoffsetpadcount.value = "";
      }
      //當選擇"墊寬"是"115mm"時，"墊高"會有"210mm"
      if (latertrunkoffsetpadsize_Width.value === "option5") {
        let filteredHeightOptions =
          SpexLaterTrunklComfyStraightPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklComfyStraightPadSizeHeighOptions.filter((option) =>
            ["option1", "option5"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkoffsetpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkoffsetpadcount.value = "";
      }
      //當選擇"墊寬"是"115mm"時，"墊高"會有"240mm"
      if (latertrunkoffsetpadsize_Width.value === "option6") {
        let filteredHeightOptions =
          SpexLaterTrunklComfyStraightPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklComfyStraightPadSizeHeighOptions.filter((option) =>
            ["option1", "option6"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkoffsetpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkoffsetpadcount.value = "";
      }
    }
    //endregion

    //region --- 當擋墊是"狹長微彎型"並且表布是"STANDARD"時 ---
    if (
      latertrunkoffsetpadtype.value === "option3" &&
      latertrunkoffsetclothpadtype.value === "option2"
    ) {
      latertrunkoffsetpadsize_Heigh.disabled = false;
      latertrunkoffsetpadcount.disabled = false;
      //當選擇"墊寬"是"95mm"時，"墊高"會有"145mm"
      if (latertrunkoffsetpadsize_Width.value === "option2") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardCurvedPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardCurvedPadSizeHeighOptions.filter((option) =>
            ["option1", "option2"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkoffsetpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkoffsetpadcount.value = "";
      }
      //當選擇"墊寬"是"95mm"時，"墊高"會有"180mm"
      if (latertrunkoffsetpadsize_Width.value === "option3") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardCurvedPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardCurvedPadSizeHeighOptions.filter((option) =>
            ["option1", "option3"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkoffsetpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkoffsetpadcount.value = "";
      }
      //當選擇"墊寬"是"115mm"時，"墊高"會有"210mm"
      if (latertrunkoffsetpadsize_Width.value === "option4") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardCurvedPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardCurvedPadSizeHeighOptions.filter((option) =>
            ["option1", "option4"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkoffsetpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkoffsetpadcount.value = "";
      }
      //當選擇"墊寬"是"115mm"時，"墊高"會有"240mm"
      if (latertrunkoffsetpadsize_Width.value === "option5") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardCurvedPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardCurvedPadSizeHeighOptions.filter((option) =>
            ["option1", "option5"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkoffsetpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkoffsetpadcount.value = "";
      }
    }
    //endregion

    //region --- 當擋墊是"狹長微彎型"並且表布是"COMFY"時 ---
    if (
      latertrunkoffsetpadtype.value === "option3" &&
      latertrunkoffsetclothpadtype.value === "option3"
    ) {
      latertrunkoffsetpadsize_Heigh.disabled = false;
      latertrunkoffsetpadcount.disabled = false;
      //當選擇"墊寬"是"85mm"時，"墊高"會有"115mm"
      if (latertrunkoffsetpadsize_Width.value === "option2") {
        let filteredHeightOptions =
          SpexLaterTrunklComfyCurvedPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklComfyCurvedPadSizeHeighOptions.filter((option) =>
            ["option1", "option2"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkoffsetpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkoffsetpadcount.value = "";
      }
      //當選擇"墊寬"是"95mm"時，"墊高"會有"145mm"
      if (latertrunkoffsetpadsize_Width.value === "option3") {
        let filteredHeightOptions =
          SpexLaterTrunklComfyCurvedPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklComfyCurvedPadSizeHeighOptions.filter((option) =>
            ["option1", "option3"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkoffsetpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkoffsetpadcount.value = "";
      }
      //當選擇"墊寬"是"95mm"時，"墊高"會有"180mm"
      if (latertrunkoffsetpadsize_Width.value === "option4") {
        let filteredHeightOptions =
          SpexLaterTrunklComfyCurvedPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklComfyCurvedPadSizeHeighOptions.filter((option) =>
            ["option1", "option4"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkoffsetpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkoffsetpadcount.value = "";
      }
      //當選擇"墊寬"是"115mm"時，"墊高"會有"210mm"
      if (latertrunkoffsetpadsize_Width.value === "option5") {
        let filteredHeightOptions =
          SpexLaterTrunklComfyCurvedPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklComfyCurvedPadSizeHeighOptions.filter((option) =>
            ["option1", "option5"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkoffsetpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkoffsetpadcount.value = "";
      }
      //當選擇"墊寬"是"115mm"時，"墊高"會有"240mm"
      if (latertrunkoffsetpadsize_Width.value === "option6") {
        let filteredHeightOptions =
          SpexLaterTrunklComfyCurvedPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklComfyCurvedPadSizeHeighOptions.filter((option) =>
            ["option1", "option6"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkoffsetpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkoffsetpadcount.value = "";
      }
    }
    //endregion

    //region --- 當擋墊是"寬短型"並且表布是"STANDARD"時 ---
    if (
      latertrunkoffsetpadtype.value === "option4" &&
      latertrunkoffsetclothpadtype.value === "option2"
    ) {
      latertrunkoffsetpadsize_Heigh.disabled = false;
      latertrunkoffsetpadcount.disabled = false;
      //當選擇"墊寬"是"105mm"時，"墊高"會有"130mm"
      if (latertrunkoffsetpadsize_Width.value === "option2") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions.filter((option) =>
            ["option1", "option2"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkoffsetpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkoffsetpadcount.value = "";
      }
      //當選擇"墊寬"是"125mm"時，"墊高"會有"140mm"
      if (latertrunkoffsetpadsize_Width.value === "option3") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions.filter((option) =>
            ["option1", "option3"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkoffsetpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkoffsetpadcount.value = "";
      }
      //當選擇"墊寬"是"140mm"時，"墊高"會有"150mm"
      if (latertrunkoffsetpadsize_Width.value === "option4") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions.filter((option) =>
            ["option1", "option4"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkoffsetpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkoffsetpadcount.value = "";
      }
      //當選擇"墊寬"是"160mm"時，"墊高"會有"155mm"
      if (latertrunkoffsetpadsize_Width.value === "option5") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions.filter((option) =>
            ["option1", "option5"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkoffsetpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkoffsetpadcount.value = "";
      }
      //當選擇"墊寬"是"195mm"時，"墊高"會有"165mm"
      if (latertrunkoffsetpadsize_Width.value === "option6") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions.filter((option) =>
            ["option1", "option6"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkoffsetpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkoffsetpadcount.value = "";
      }
      //當選擇"墊寬"是"230mm"時，"墊高"會有"175mm"
      if (latertrunkoffsetpadsize_Width.value === "option7") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions.filter((option) =>
            ["option1", "option7"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkoffsetpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkoffsetpadcount.value = "";
      }
    }
    //endregion

    //region --- 當擋墊是"寬短型"並且表布是"COMFY"時 ---
    if (
      latertrunkoffsetpadtype.value === "option4" &&
      latertrunkoffsetclothpadtype.value === "option3"
    ) {
      latertrunkoffsetpadsize_Heigh.disabled = false;
      latertrunkoffsetpadcount.disabled = false;
      //當選擇"墊寬"是"105mm"時，"墊高"會有"130mm"
      if (latertrunkoffsetpadsize_Width.value === "option2") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions.filter((option) =>
            ["option1", "option2"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkoffsetpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkoffsetpadcount.value = "";
      }
      //當選擇"墊寬"是"125mm"時，"墊高"會有"140mm"
      if (latertrunkoffsetpadsize_Width.value === "option3") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions.filter((option) =>
            ["option1", "option3"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkoffsetpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkoffsetpadcount.value = "";
      }
      //當選擇"墊寬"是"140mm"時，"墊高"會有"150mm"
      if (latertrunkoffsetpadsize_Width.value === "option4") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions.filter((option) =>
            ["option1", "option4"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkoffsetpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkoffsetpadcount.value = "";
      }
      //當選擇"墊寬"是"160mm"時，"墊高"會有"155mm"
      if (latertrunkoffsetpadsize_Width.value === "option5") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions.filter((option) =>
            ["option1", "option5"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkoffsetpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkoffsetpadcount.value = "";
      }
      //當選擇"墊寬"是"195mm"時，"墊高"會有"165mm"
      if (latertrunkoffsetpadsize_Width.value === "option6") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions.filter((option) =>
            ["option1", "option6"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkoffsetpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkoffsetpadcount.value = "";
      }
      //當選擇"墊寬"是"230mm"時，"墊高"會有"175mm"
      if (latertrunkoffsetpadsize_Width.value === "option7") {
        let filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunklStandardBroadPadSizeHeighOptions.filter((option) =>
            ["option1", "option7"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunkoffsetpadsize_Heigh,
          filteredHeightOptions
        );
        latertrunkoffsetpadcount.value = "";
      }
    }
    //endregion
  }
});
//endregion

//endregion

//region --- Spex 雙曲面多軸可外撥側支撐扣具 ---
function LaterTrunkAxialBiangularSelectOptions(selectElement, options) {
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

//region --- 勾選 雙曲面多軸可外撥側支撐扣具 時，才可填入數量及選擇擋墊跟擋墊布套尺寸 ---
Spex_LaterTrunk_AxialBiangular.addEventListener("change", () => {
  if (Spex_LaterTrunk_AxialBiangular.checked) {
    latertrunk_axialbiangularcount.disabled = false;

    LaterTrunkAxialBiangularSelectOptions(
      latertrunkaxialbiangular,
      SpexLaterTrunkAxialBiangularOptions
    );
    LaterTrunkAxialBiangularSelectOptions(
      latertrunk_axialpadtype,
      SpexLaterTrunkPadClothTypeOptions
    );

    latertrunkaxialbiangularcountprices.textContent = "";
    latertrunkaxialbiangularpadcountprices.textContent = "";

    if (
      (latertrunkaccessoryprices.textContent !== "" ||
        latertrunkaccessoryprices.textContent !== "0") &&
      [...allspexlatertrunkaxialprice].some((cb) => cb.checked)
    ) {
      nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
        latertrunkaccessoryprices.textContent
      )} 元`;
    } else {
      updateSpexLaterTrunkTotalPrice();
    }
  } else {
    latertrunk_axialbiangularcount.disabled = true; // 禁用
    latertrunkaxialbiangular.disabled = true; // 禁用
    latertrunk_axialpadtype.disabled = true; // 禁用
    latertrunk_axialbiangular_Width.disabled = true; // 禁用
    latertrunk_axialbiangular_Heigh.disabled = true; // 禁用
    latertrunkaxialbiangularpadcount.disabled = true; // 禁用

    latertrunk_axialbiangularcount.value = "";
    LaterTrunkAxialBiangularSelectOptions(
      latertrunkaxialbiangular,
      SpexLaterTrunkAxialBiangularOptions
    );
    LaterTrunkAxialBiangularSelectOptions(
      latertrunk_axialpadtype,
      SpexLaterTrunkPadClothTypeOptions
    );
    LaterTrunkAxialBiangularSelectOptions(
      latertrunk_axialbiangular_Width,
      SpexLaterTrunkAxialBiangular12StandardPadSizeWidthOptions
    );
    LaterTrunkAxialBiangularSelectOptions(
      latertrunk_axialbiangular_Heigh,
      SpexLaterTrunkAxialBiangular12StandardPadSizHeighOptions
    );
    latertrunkaxialbiangularpadcount.value = "";

    latertrunkaxialbiangularcountprices.textContent = "";
    latertrunkaxialbiangularpadcountprices.textContent = "";

    if (
      (latertrunkaccessoryprices.textContent !== "" ||
        latertrunkaccessoryprices.textContent !== "0") &&
      [...allspexlatertrunkaxialprice].some((cb) => cb.checked)
    ) {
      nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
        latertrunkaccessoryprices.textContent
      )} 元`;
    } else {
      updateSpexLaterTrunkTotalPrice();
    }
  }
});
//endregion

//region --- 監聽側支撐數量位置是否有輸入數字 ---
latertrunk_axialbiangularcount.addEventListener("input", function () {
  if (this.value.trim() !== "") {
    latertrunkaxialbiangular.disabled = false;
    latertrunk_axialpadtype.disabled = false;
  } else {
    latertrunkaxialbiangular.disabled = true;
    latertrunk_axialpadtype.disabled = true;
  }
});
//endregion

//region --- 監聽"擋墊厚度"，選擇擋墊種類時會開啟擋墊布套尺寸跟數量 ---
latertrunkaxialbiangular.addEventListener("change", () => {
  if (Spex_LaterTrunk_AxialBiangular.checked) {
    latertrunkaxialbiangular.disabled = false;
    latertrunk_axialpadtype.disabled = false;
    latertrunkaxialbiangularpadcountprices.textContent = "";

    if (
      (latertrunkaccessoryprices.textContent !== "" ||
        latertrunkaccessoryprices.textContent !== "0") &&
      [...allspexlatertrunkaxialprice].some((cb) => cb.checked)
    ) {
      nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
        latertrunkaccessoryprices.textContent
      )} 元`;
    } else {
      updateSpexLaterTrunkTotalPrice();
    }
    if (
      latertrunkaxialbiangular.value === "option2" &&
      latertrunk_axialpadtype.value === "option2"
    ) {
      latertrunk_axialbiangular_Width.disabled = false;
      LaterTrunkStandardSelectOptions(
        latertrunk_axialbiangular_Width,
        SpexLaterTrunkAxialBiangular12StandardPadSizeWidthOptions
      );
      LaterTrunkStandardSelectOptions(
        latertrunk_axialbiangular_Heigh,
        SpexLaterTrunkAxialBiangular12StandardPadSizHeighOptions
      );
      latertrunk_axialbiangular_Heigh.disabled = true;
      latertrunkaxialbiangularpadcount.value = "";
      latertrunkaxialbiangularpadcount.disabled = true;
    }
    if (
      latertrunkaxialbiangular.value === "option2" &&
      latertrunk_axialpadtype.value === "option3"
    ) {
      latertrunk_axialbiangular_Width.disabled = false;
      LaterTrunkStandardSelectOptions(
        latertrunk_axialbiangular_Width,
        SpexLaterTrunkAxialBiangular12ComfyPadSizeWidthOptions
      );
      LaterTrunkStandardSelectOptions(
        latertrunk_axialbiangular_Heigh,
        SpexLaterTrunkAxialBiangular12ComfyPadSizHeighOptions
      );
      latertrunk_axialbiangular_Heigh.disabled = true;
      latertrunkaxialbiangularpadcount.value = "";
      latertrunkaxialbiangularpadcount.disabled = true;
    }
    if (
      latertrunkaxialbiangular.value === "option3" &&
      latertrunk_axialpadtype.value === "option2"
    ) {
      latertrunk_axialbiangular_Width.disabled = false;
      LaterTrunkAxialSelectOptions(
        latertrunk_axialbiangular_Width,
        SpexLaterTrunkAxialBiangular24StandardPadSizeWidthOptions
      );
      LaterTrunkAxialSelectOptions(
        latertrunk_axialbiangular_Heigh,
        SpexLaterTrunkAxialBiangular24StandardPadSizHeighOptions
      );
      latertrunk_axialbiangular_Heigh.disabled = true;
      latertrunkaxialbiangularpadcount.value = "";
      latertrunkaxialbiangularpadcount.disabled = true;
    }
    if (
      latertrunkaxialbiangular.value === "option3" &&
      latertrunk_axialpadtype.value === "option3"
    ) {
      latertrunk_axialbiangular_Width.disabled = false;
      LaterTrunkAxialSelectOptions(
        latertrunk_axialbiangular_Width,
        SpexLaterTrunkAxialBiangular24ComfyPadSizeWidthOptions
      );
      LaterTrunkAxialSelectOptions(
        latertrunk_axialbiangular_Heigh,
        SpexLaterTrunkAxialBiangular24ComfyPadSizHeighOptions
      );
      latertrunk_axialbiangular_Heigh.disabled = true;
      latertrunkaxialbiangularpadcount.value = "";
      latertrunkaxialbiangularpadcount.disabled = true;
    }
  } else {
    latertrunk_axialbiangularcount.disabled = true; // 禁用
    latertrunkaxialbiangular.disabled = true; // 禁用
    latertrunk_axialpadtype.disabled = true; // 禁用
    latertrunk_axialbiangular_Width.disabled = true; // 禁用
    latertrunk_axialbiangular_Heigh.disabled = true; // 禁用
    latertrunkaxialbiangularpadcount.disabled = true; // 禁用

    latertrunk_axialbiangularcount.value = "";
    LaterTrunkAxialSelectOptions(
      latertrunk_axialbiangular_Width,
      SpexLaterTrunkAxialBiangular12StandardPadSizeWidthOptions
    );
    latertrunkaxialbiangularpadcount.value = "";
    latertrunkaxialbiangularpadcountprices.textContent = "";

    if (
      (latertrunkaccessoryprices.textContent !== "" ||
        latertrunkaccessoryprices.textContent !== "0") &&
      [...allspexlatertrunkaxialprice].some((cb) => cb.checked)
    ) {
      nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
        latertrunkaccessoryprices.textContent
      )} 元`;
    } else {
      updateSpexLaterTrunkTotalPrice();
    }
  }
});
//endregion

//region --- 監聽"擋墊布套"，選擇擋墊種類時會開啟擋墊布套尺寸跟數量 ---
latertrunk_axialpadtype.addEventListener("change", () => {
  if (Spex_LaterTrunk_AxialBiangular.checked) {
    latertrunkaxialbiangular.disabled = false;
    latertrunk_axialpadtype.disabled = false;
    latertrunkaxialbiangularpadcountprices.textContent = "";

    if (
      (latertrunkaccessoryprices.textContent !== "" ||
        latertrunkaccessoryprices.textContent !== "0") &&
      [...allspexlatertrunkaxialprice].some((cb) => cb.checked)
    ) {
      nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
        latertrunkaccessoryprices.textContent
      )} 元`;
    } else {
      updateSpexLaterTrunkTotalPrice();
    }
    if (
      latertrunkaxialbiangular.value === "option2" &&
      latertrunk_axialpadtype.value === "option2"
    ) {
      latertrunk_axialbiangular_Width.disabled = false;
      LaterTrunkStandardSelectOptions(
        latertrunk_axialbiangular_Width,
        SpexLaterTrunkAxialBiangular12StandardPadSizeWidthOptions
      );
      LaterTrunkStandardSelectOptions(
        latertrunk_axialbiangular_Heigh,
        SpexLaterTrunkAxialBiangular12StandardPadSizHeighOptions
      );
      latertrunk_axialbiangular_Heigh.disabled = true;
      latertrunkaxialbiangularpadcount.value = "";
      latertrunkaxialbiangularpadcount.disabled = true;
    }
    if (
      latertrunkaxialbiangular.value === "option2" &&
      latertrunk_axialpadtype.value === "option3"
    ) {
      latertrunk_axialbiangular_Width.disabled = false;
      LaterTrunkStandardSelectOptions(
        latertrunk_axialbiangular_Width,
        SpexLaterTrunkAxialBiangular12ComfyPadSizeWidthOptions
      );
      LaterTrunkStandardSelectOptions(
        latertrunk_axialbiangular_Heigh,
        SpexLaterTrunkAxialBiangular12ComfyPadSizHeighOptions
      );
      latertrunk_axialbiangular_Heigh.disabled = true;
      latertrunkaxialbiangularpadcount.value = "";
      latertrunkaxialbiangularpadcount.disabled = true;
    }
    if (
      latertrunkaxialbiangular.value === "option3" &&
      latertrunk_axialpadtype.value === "option2"
    ) {
      latertrunk_axialbiangular_Width.disabled = false;
      LaterTrunkAxialSelectOptions(
        latertrunk_axialbiangular_Width,
        SpexLaterTrunkAxialBiangular24StandardPadSizeWidthOptions
      );
      LaterTrunkAxialSelectOptions(
        latertrunk_axialbiangular_Heigh,
        SpexLaterTrunkAxialBiangular24StandardPadSizHeighOptions
      );
      latertrunk_axialbiangular_Heigh.disabled = true;
      latertrunkaxialbiangularpadcount.value = "";
      latertrunkaxialbiangularpadcount.disabled = true;
    }
    if (
      latertrunkaxialbiangular.value === "option3" &&
      latertrunk_axialpadtype.value === "option3"
    ) {
      latertrunk_axialbiangular_Width.disabled = false;
      LaterTrunkAxialSelectOptions(
        latertrunk_axialbiangular_Width,
        SpexLaterTrunkAxialBiangular24ComfyPadSizeWidthOptions
      );
      LaterTrunkAxialSelectOptions(
        latertrunk_axialbiangular_Heigh,
        SpexLaterTrunkAxialBiangular24ComfyPadSizHeighOptions
      );
      latertrunk_axialbiangular_Heigh.disabled = true;
      latertrunkaxialbiangularpadcount.value = "";
      latertrunkaxialbiangularpadcount.disabled = true;
    }
  } else {
    latertrunk_axialbiangularcount.disabled = true; // 禁用
    latertrunkaxialbiangular.disabled = true; // 禁用
    latertrunk_axialpadtype.disabled = true; // 禁用
    latertrunk_axialbiangular_Width.disabled = true; // 禁用
    latertrunk_axialbiangular_Heigh.disabled = true; // 禁用
    latertrunkaxialbiangularpadcount.disabled = true; // 禁用

    latertrunk_axialbiangularcount.value = "";
    LaterTrunkAxialSelectOptions(
      latertrunk_axialbiangular_Width,
      SpexLaterTrunkAxialBiangular12StandardPadSizeWidthOptions
    );
    latertrunkaxialbiangularpadcount.value = "";
  }
});
//endregion

//region --- 監聽"雙曲面多軸可外撥側支撐"的"擋墊寬度"，選擇擋墊種類時會開啟擋墊布套尺寸跟數量 ---
latertrunk_axialbiangular_Width.addEventListener("change", function () {
  if (Spex_LaterTrunk_AxialBiangular.checked) {
    if (latertrunk_axialbiangular_Width.value === "option1") {
      LaterTrunkStandardSelectOptions(
        latertrunk_axialbiangular_Heigh,
        SpexLaterTrunkAxialBiangular12StandardPadSizHeighOptions
      );
      latertrunk_axialbiangular_Heigh.disabled = true;
      latertrunkaxialbiangularpadcount.value = "";
      latertrunkaxialbiangularpadcount.disabled = true;
      latertrunkaxialbiangularpadcountprices.textContent = "";

      if (
        (latertrunkaccessoryprices.textContent !== "" ||
          latertrunkaccessoryprices.textContent !== "0") &&
        [...allspexlatertrunkaxialprice].some((cb) => cb.checked)
      ) {
        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          latertrunkaccessoryprices.textContent
        )} 元`;
      } else {
        updateSpexLaterTrunkTotalPrice();
      }
      return;
    }
    //region --- 當厚度是"12mm"並且表布是"STANDARD"時 ---
    if (
      latertrunkaxialbiangular.value === "option2" &&
      latertrunk_axialpadtype.value === "option2"
    ) {
      latertrunk_axialbiangular_Heigh.disabled = false;
      latertrunkaxialbiangularpadcount.disabled = false;
      //當選擇"墊寬"是"165mm"時，"墊高"會有"175mm"
      if (latertrunk_axialbiangular_Width.value === "option2") {
        let filteredHeightOptions =
          SpexLaterTrunkAxialBiangular12StandardPadSizHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunkAxialBiangular12StandardPadSizHeighOptions.filter(
            (option) => ["option1", "option2"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunk_axialbiangular_Heigh,
          filteredHeightOptions
        );
        latertrunkaxialbiangularpadcount.value = "";
      }
      //當選擇"墊寬"是"215mm"時，"墊高"會有"195mm"
      if (latertrunk_axialbiangular_Width.value === "option3") {
        let filteredHeightOptions =
          SpexLaterTrunkAxialBiangular12StandardPadSizHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunkAxialBiangular12StandardPadSizHeighOptions.filter(
            (option) => ["option1", "option3"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunk_axialbiangular_Heigh,
          filteredHeightOptions
        );
        latertrunkaxialbiangularpadcount.value = "";
      }
      //當選擇"墊寬"是"265mm"時，"墊高"會有"195mm"
      if (latertrunk_axialbiangular_Width.value === "option4") {
        let filteredHeightOptions =
          SpexLaterTrunkAxialBiangular12StandardPadSizHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunkAxialBiangular12StandardPadSizHeighOptions.filter(
            (option) => ["option1", "option4"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunk_axialbiangular_Heigh,
          filteredHeightOptions
        );
        latertrunkaxialbiangularpadcount.value = "";
      }
    }
    //endregion

    //region --- 當厚度是"12mm"並且表布是"COMFY"時 ---
    if (
      latertrunkaxialbiangular.value === "option2" &&
      latertrunk_axialpadtype.value === "option3"
    ) {
      latertrunk_axialbiangular_Heigh.disabled = false;
      latertrunkaxialbiangularpadcount.disabled = false;
      //當選擇"墊寬"是"165mm"時，"墊高"會有"175mm"
      if (latertrunk_axialbiangular_Width.value === "option2") {
        let filteredHeightOptions =
          SpexLaterTrunkAxialBiangular12ComfyPadSizHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunkAxialBiangular12ComfyPadSizHeighOptions.filter(
            (option) => ["option1", "option2"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunk_axialbiangular_Heigh,
          filteredHeightOptions
        );
        latertrunkaxialbiangularpadcount.value = "";
      }
      //當選擇"墊寬"是"215mm"時，"墊高"會有"195mm"
      if (latertrunk_axialbiangular_Width.value === "option3") {
        let filteredHeightOptions =
          SpexLaterTrunkAxialBiangular12ComfyPadSizHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunkAxialBiangular12ComfyPadSizHeighOptions.filter(
            (option) => ["option1", "option3"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunk_axialbiangular_Heigh,
          filteredHeightOptions
        );
        latertrunkaxialbiangularpadcount.value = "";
      }
      //當選擇"墊寬"是"265mm"時，"墊高"會有"195mm"
      if (latertrunk_axialbiangular_Width.value === "option4") {
        let filteredHeightOptions =
          SpexLaterTrunkAxialBiangular12ComfyPadSizHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunkAxialBiangular12ComfyPadSizHeighOptions.filter(
            (option) => ["option1", "option4"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunk_axialbiangular_Heigh,
          filteredHeightOptions
        );
        latertrunkaxialbiangularpadcount.value = "";
      }
    }
    //endregion

    //region --- 當厚度是"24mm"並且表布是"STANDARD"時 ---
    if (
      latertrunkaxialbiangular.value === "option3" &&
      latertrunk_axialpadtype.value === "option2"
    ) {
      latertrunk_axialbiangular_Heigh.disabled = false;
      latertrunkaxialbiangularpadcount.disabled = false;
      //當選擇"墊寬"是"165mm"時，"墊高"會有"175mm"
      if (latertrunk_axialbiangular_Width.value === "option2") {
        let filteredHeightOptions =
          SpexLaterTrunkAxialBiangular24StandardPadSizHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunkAxialBiangular24StandardPadSizHeighOptions.filter(
            (option) => ["option1", "option2"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunk_axialbiangular_Heigh,
          filteredHeightOptions
        );
        latertrunkaxialbiangularpadcount.value = "";
      }
      //當選擇"墊寬"是"215mm"時，"墊高"會有"195mm"
      if (latertrunk_axialbiangular_Width.value === "option3") {
        let filteredHeightOptions =
          SpexLaterTrunkAxialBiangular24StandardPadSizHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunkAxialBiangular24StandardPadSizHeighOptions.filter(
            (option) => ["option1", "option3"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunk_axialbiangular_Heigh,
          filteredHeightOptions
        );
        latertrunkaxialbiangularpadcount.value = "";
      }
      //當選擇"墊寬"是"265mm"時，"墊高"會有"195mm"
      if (latertrunk_axialbiangular_Width.value === "option4") {
        let filteredHeightOptions =
          SpexLaterTrunkAxialBiangular24StandardPadSizHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunkAxialBiangular24StandardPadSizHeighOptions.filter(
            (option) => ["option1", "option4"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunk_axialbiangular_Heigh,
          filteredHeightOptions
        );
        latertrunkaxialbiangularpadcount.value = "";
      }
    }
    //endregion

    //region --- 當厚度是"24mm"並且表布是"COMFY"時 ---
    if (
      latertrunkaxialbiangular.value === "option3" &&
      latertrunk_axialpadtype.value === "option3"
    ) {
      latertrunk_axialbiangular_Heigh.disabled = false;
      latertrunkaxialbiangularpadcount.disabled = false;
      //當選擇"墊寬"是"165mm"時，"墊高"會有"175mm"
      if (latertrunk_axialbiangular_Width.value === "option2") {
        let filteredHeightOptions =
          SpexLaterTrunkAxialBiangular24ComfyPadSizHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunkAxialBiangular24ComfyPadSizHeighOptions.filter(
            (option) => ["option1", "option2"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunk_axialbiangular_Heigh,
          filteredHeightOptions
        );
        latertrunkaxialbiangularpadcount.value = "";
      }
      //當選擇"墊寬"是"215mm"時，"墊高"會有"195mm"
      if (latertrunk_axialbiangular_Width.value === "option3") {
        let filteredHeightOptions =
          SpexLaterTrunkAxialBiangular24ComfyPadSizHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunkAxialBiangular24ComfyPadSizHeighOptions.filter(
            (option) => ["option1", "option3"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunk_axialbiangular_Heigh,
          filteredHeightOptions
        );
        latertrunkaxialbiangularpadcount.value = "";
      }
      //當選擇"墊寬"是"265mm"時，"墊高"會有"195mm"
      if (latertrunk_axialbiangular_Width.value === "option4") {
        let filteredHeightOptions =
          SpexLaterTrunkAxialBiangular24ComfyPadSizHeighOptions;
        filteredHeightOptions =
          SpexLaterTrunkAxialBiangular24ComfyPadSizHeighOptions.filter(
            (option) => ["option1", "option4"].includes(option.value)
          );
        LaterTrunkAxialSelectOptions(
          latertrunk_axialbiangular_Heigh,
          filteredHeightOptions
        );
        latertrunkaxialbiangularpadcount.value = "";
      }
    }
    //endregion
  }
});
//endregion

//endregion

//endregion

/*----- 18.Spex頭靠子系統-頭靠 -----*/
//region

/*---  Spex頭靠子系統-頭靠點擊列 - 圖片箭頭部分  ---*/
//region
document.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let tgimg_18 = event.target;
  let carseat18 = tgimg_18.closest(".Spex_headsupports"); // 找到最近的 Spex_headsupports
  let imgSpexheadsupports = event.target.dataset.imgSpexheadsupports;

  //確認我點擊到的位置是否是 Spex_headsupports
  if (carseat18 && carseat18.className.trim() === "Spex_headsupports") {
    let introdutionid = carseat18.querySelector(".Spexheadsupportsgroup"); // 在 Spex_headsupports 內部找 Spexheadsupports
    let introdution = carseat18.querySelector(".subtitle"); // 在 Spex_headsupports 內部找 subtitle

    if (introdutionid) {
      // 取得 `visibility` 的計算後樣式
      let visibilityValue = window.getComputedStyle(introdutionid).visibility;

      if (imgSpexheadsupports === "SpexheadsupportsImg") {
        if (visibilityValue === "hidden") {
          let Price_Spexheadsupports = document.querySelectorAll(".pricing");

          Price_Spexheadsupports.forEach(function (openIntro) {
            let Spexheadsupports = Price_Spexheadsupports[18];
            //直接判斷是第幾個.Price
            let nowprice_Spexheadsupports =
              Price_Spexheadsupports[18].nextElementSibling;

            if (
              openIntro.getAttribute("data-price-Spexheadsupports") ===
                "Spexheadsupports" &&
              nowprice_Spexheadsupports.getAttribute(
                "data-nowprice-Spexheadsupports"
              ) === "nowSpexheadsupports"
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
                nowprice_Spexheadsupports.style.display = "block";
                nowprice_Spexheadsupports.style.display = "flex";
                nowprice_Spexheadsupports.style.width = "95%";
                nowprice_Spexheadsupports.style.height = "90%";
                nowprice_Spexheadsupports.style.color = "#000000";
                nowprice_Spexheadsupports.style.borderRadius = "8px";
                nowprice_Spexheadsupports.style.padding = "1px";
                nowprice_Spexheadsupports.style.margin = "3px 3px 3px 2px";
                nowprice_Spexheadsupports.style.textAlign = "center";
                nowprice_Spexheadsupports.style.fontSize = "16px";
                nowprice_Spexheadsupports.style.fontWeight = "600";
                nowprice_Spexheadsupports.style.alignItems = "center";
                nowprice_Spexheadsupports.style.justifyContent = "center";

                if (window.matchMedia("(max-width: 650px)").matches) {
                  nowprice_Spexheadsupports.style.fontSize = "15px";
                  introdutionid.style.width = "calc(100% - 9px)";
                  Spexheadsupports.style.padding = "5px";
                  Spexheadsupports.style.margin = "3px 0px 3px 1px";
                }
              }
            }
          });
        } else {
          let Price_Spexheadsupports = document.querySelectorAll(".pricing");

          Price_Spexheadsupports.forEach(function (openIntro) {
            let nowprice_Spexheadsupports =
              Price_Spexheadsupports[18].nextElementSibling;

            //把data-collapse-status改成0
            introdution.setAttribute("data-collapse-status", "0");

            //建議售價標題隱藏
            introdutionid.style.visibility = "hidden";
            introdutionid.style.height = "0";
            introdutionid.style.padding = "0";
            introdutionid.style.border = "0px dashed black";
            introdutionid.style.margin = "0";

            if (
              openIntro.getAttribute("data-price-Spexheadsupports") ===
              "Spexheadsupports"
            ) {
              //建議售價金額隱藏
              openIntro.style.display = "none";
            }
            nowprice_Spexheadsupports.style.display = "none";
          });
        }
      }
    }
  }
});
// endregion

/*---  Spex頭靠子系統-頭靠點擊列 - subtitle部分  ---*/
//region
let Spex_headsupports = document.querySelector(".Spex_headsupports");
Spex_headsupports.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let showinfo = event.target.dataset.showinfo;
  let introdution = event.target;
  //確認我點擊到的位置是否是 Spex_headsupports
  if (showinfo === "Spexheadsupports") {
    let introdutionid = event.target.nextElementSibling;
    let Price_Spex_headsupports = document.querySelectorAll(".pricing");
    let Spex_headsupportsimg = Spex_headsupports.querySelector(".target_img"); // 找到最近的 .target_img
    let img = Spex_headsupportsimg.querySelector("img");

    Price_Spex_headsupports.forEach(function (openIntro) {
      let Spexheadsupports = Price_Spex_headsupports[18];
      //直接判斷是第幾個.Price
      let nowprice_Spexheadsupports =
        Price_Spex_headsupports[18].nextElementSibling;

      if (
        openIntro.getAttribute("data-price-Spexheadsupports") ===
          "Spexheadsupports" &&
        nowprice_Spexheadsupports.getAttribute(
          "data-nowprice-Spexheadsupports"
        ) === "nowSpexheadsupports"
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
          nowprice_Spexheadsupports.style.display = "block";
          nowprice_Spexheadsupports.style.display = "flex";
          nowprice_Spexheadsupports.style.width = "95%";
          nowprice_Spexheadsupports.style.height = "90%";
          nowprice_Spexheadsupports.style.color = "#000000";
          nowprice_Spexheadsupports.style.borderRadius = "8px";
          nowprice_Spexheadsupports.style.padding = "1px";
          nowprice_Spexheadsupports.style.margin = "3px 3px 3px 2px";
          nowprice_Spexheadsupports.style.textAlign = "center";
          nowprice_Spexheadsupports.style.fontSize = "16px";
          nowprice_Spexheadsupports.style.fontWeight = "600";
          nowprice_Spexheadsupports.style.alignItems = "center";
          nowprice_Spexheadsupports.style.justifyContent = "center";

          if (img) {
            img.setAttribute("src", "./img/black triangle after.png");
          }

          if (window.matchMedia("(max-width: 650px)").matches) {
            nowprice_Spexheadsupports.style.fontSize = "15px";
            introdutionid.style.width = "calc(100% - 9px)";
            Spexheadsupports.style.padding = "5px";
            Spexheadsupports.style.margin = "3px 0px 3px 1px";
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
          nowprice_Spexheadsupports.style.display = "none";

          if (img) {
            img.setAttribute("src", "./img/black triangle.png");
          }
        }
      }
    });
  }
});
//endregion

//region --- 頭靠尺寸 ---
//region --- Circle Pad 枕部淺廓型頭靠墊 ---
//Circle Pad尺寸
let SpexheadsupportsCirclePadSizeOptions = [
  { value: "option1", text: "請選擇", selected: true },
  { value: "option2", text: "150" },
  { value: "option3", text: "250" },
];
//Circle Pad尺寸數據
let SpexheadsupportsCirclePad150DataOptions = {
  option1: ["150", "145mm", "50mm", "175mm", "55mm", "145mm", "45mm", "25mm"],
};

let SpexheadsupportsCirclePad250DataOptions = {
  option1: ["250", "180mm", "60mm", "220mm", "70mm", "185mm", "60mm", "30mm"],
};
//endregion

//region --- Comfort Pad 枕部淺廓型頭靠墊 ---
//Comfort Pad尺寸
let SpexheadsupportsComfortPadSizeOptions = [
  { value: "option1", text: "請選擇", selected: true },
  { value: "option2", text: "250" },
  { value: "option3", text: "350" },
];
//Comfort Pad尺寸數據
let SpexheadsupportsComfortPad250DataOptions = {
  option1: ["250", "235mm", "60mm", "260mm", "90mm", "125mm", "45mm", "30mm"],
};
let SpexheadsupportsComfortPad350DataOptions = {
  option1: ["350", "310mm", "80mm", "340mm", "120mm", "165mm", "60mm", "50mm"],
};
//endregion

//region --- Contour Pad 枕部淺廓型頭靠墊 ---
//Contour Pad尺寸
let SpexheadsupportsContourPadSizeOptions = [
  { value: "option1", text: "請選擇", selected: true },
  { value: "option2", text: "250" },
  { value: "option3", text: "350" },
];
//Contour Pad尺寸數據
let SpexheadsupportsContourPad250DataOptions = {
  option1: ["250", "105mm", "140mm", "280mm", "140mm", "165mm", "35mm", "30mm"],
};
let SpexheadsupportsContourPad350DataOptions = {
  option1: ["350", "130mm", "170mm", "350mm", "170mm", "210mm", "50mm", "40mm"],
};
//endregion

//region --- Standard Lateral Pad 枕部淺廓型頭靠墊 ---
//Standard Lateral Pad尺寸
let SpexheadsupportsStandardLateralPadSizeOptions = [
  { value: "option1", text: "請選擇", selected: true },
  { value: "option2", text: "Paediatric" },
  { value: "option3", text: "Adult" },
];
//Standard Lateral Pad尺寸數據
let SpexheadsupportsStandardLateralPadPaediatricDataOptions = {
  option1: [
    "Paediatric",
    "135mm",
    "80mm",
    "220mm",
    "180mm",
    "150mm",
    "50mm",
    "40mm",
    "55mm",
    "30mm",
  ],
};
let SpexheadsupportsStandardLateralPadAdultDataOptions = {
  option1: [
    "Adult",
    "160mm",
    "100mm",
    "250mm",
    "145mm",
    "170mm",
    "60mm",
    "45mm",
    "60mm",
    "30mm",
  ],
};
//endregion

//region --- Extended Lateral Pad 枕部淺廓型頭靠墊 ---
//Extended Lateral Pad尺寸
let SpexheadsupportsExtendedLateralPadSizeOptions = [
  { value: "option1", text: "請選擇", selected: true },
  { value: "option2", text: "Paediatric" },
  { value: "option3", text: "Adult" },
];
//Extended Lateral Pad尺寸數據
let SpexheadsupportsExtendedLateralPadPaediatricDataOptions = {
  option1: [
    "Paediatric",
    "135mm",
    "120mm",
    "230mm",
    "160mm",
    "180mm",
    "50mm",
    "40mm",
    "50mm",
    "35mm",
  ],
};

let SpexheadsupportsExtendedLateralPadAdultDataOptions = {
  option1: [
    "Adult",
    "160mm",
    "140mm",
    "260mm",
    "180mm",
    "190mm",
    "60mm",
    "45mm",
    "60mm",
    "35mm",
  ],
};
//endregion

//region --- Adjustable Lateral Pad 枕部淺廓型頭靠墊 ---
//Adjustable Lateral Pad尺寸
let SpexheadsupportsAdjustableLateralPadSizeOptions = [
  { value: "option1", text: "請選擇", selected: true },
  { value: "option2", text: "150" },
  { value: "option3", text: "250" },
];
//Adjustable Lateral Pad尺寸數據
let SpexheadsupportsAdjustableLateralPad150DataOptions = {
  option1: [
    "150",
    "145mm",
    "205mm",
    "175mm",
    "55mm",
    "145mm",
    "45mm",
    "25mm",
    "55mm",
    "40mm",
    "155mm",
  ],
};

let SpexheadsupportsAdjustableLateralPad250DataOptions = {
  option1: [
    "250",
    "180mm",
    "215mm",
    "220mm",
    "70mm",
    "185m",
    "60mm",
    "30mm",
    "70mm",
    "40mm",
    "155mm",
  ],
};
//endregion

//region --- 清空用 ---
let SpexheadsupportsClearPadDataOptions = {
  option1: [
    "&nbsp;",
    "&nbsp;",
    "&nbsp;",
    "&nbsp;",
    "&nbsp;",
    "&nbsp;",
    "&nbsp;",
    "&nbsp;",
    "&nbsp;",
    "&nbsp;",
    "&nbsp;",
  ],
};
//endregion
//endregion

//region --- 宣告所有所需元素 ---
let CirclePadCheckbox = document.querySelector("#Spex_Head_Supports_Circle");
let ComfortPadCheckbox = document.querySelector("#Spex_Head_Supports_Comfort");
let ContourPadCheckbox = document.querySelector("#Spex_Head_Supports_Contour");
let StandardlateralPadCheckbox = document.querySelector(
  "#Spex_Head_Supports_Standardlateral"
);
let ExtendedLateralPadCheckbox = document.querySelector(
  "#Spex_Head_Supports_ExtendedLateral"
);
let AdjustableLateralPadCheckbox = document.querySelector(
  "#Spex_Head_Supports_AdjustableLateral"
);
let headsupportspadsel = document.querySelector(".headsupportspad");
let HeadSupportcheckboxes = document.querySelectorAll(
  'input[name="car_SpexHeadSupports"]'
);
let padValueRow = document.querySelector(".padvalue-row");
let padValueCells = padValueRow.querySelectorAll("td");
let headsupportsprices = document.querySelector(".Spexheadsupportsprices");
let bracketprices = document.querySelector(".Spexheadsupportsbracketprices");
//endregion

//region
//確定勾選的是哪個頭靠，且不會重複勾選選項
document
  .querySelectorAll('input[name="car_SpexHeadSupports"]')
  .forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      document
        .querySelectorAll('input[name="car_SpexHeadSupports"]')
        .forEach((otherCheckbox) => {
          if (otherCheckbox !== this) {
            otherCheckbox.checked = false;
          }
        });
      HeadSupportsPadSizeadSelectOptions(
        padValueCells,
        SpexheadsupportsClearPadDataOptions,
        2
      );
      HeadSupportsSelectOptions();
    });
  });

//如果沒有打勾的選項，就將下拉式選單不顯示
function updateHeadSupportsStatus() {
  let anyChecked = Array.from(HeadSupportcheckboxes).some((cb) => cb.checked);
  headsupportspadsel.disabled = !anyChecked;
}

// 監聽頭靠每個checkbox 的事件
HeadSupportcheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", updateHeadSupportsStatus);
});

// 初始檢查一次狀態
updateHeadSupportsStatus();

//將下拉式選單的options更新成勾選的checkbox
function HeadSupportsSelectOptions() {
  if (CirclePadCheckbox.checked) {
    recodeHeadSupportsSelectOptions(
      headsupportspadsel,
      SpexheadsupportsCirclePadSizeOptions
    );
    headsupportspadsel.disabled = false;
  }
  if (ComfortPadCheckbox.checked) {
    recodeHeadSupportsSelectOptions(
      headsupportspadsel,
      SpexheadsupportsComfortPadSizeOptions
    );
    headsupportspadsel.disabled = false;
  }
  if (ContourPadCheckbox.checked) {
    recodeHeadSupportsSelectOptions(
      headsupportspadsel,
      SpexheadsupportsContourPadSizeOptions
    );
    headsupportspadsel.disabled = false;
  }
  if (StandardlateralPadCheckbox.checked) {
    recodeHeadSupportsSelectOptions(
      headsupportspadsel,
      SpexheadsupportsStandardLateralPadSizeOptions
    );
    headsupportspadsel.disabled = false;
  }
  if (ExtendedLateralPadCheckbox.checked) {
    recodeHeadSupportsSelectOptions(
      headsupportspadsel,
      SpexheadsupportsExtendedLateralPadSizeOptions
    );
    headsupportspadsel.disabled = false;
  }
  if (AdjustableLateralPadCheckbox.checked) {
    recodeHeadSupportsSelectOptions(
      headsupportspadsel,
      SpexheadsupportsAdjustableLateralPadSizeOptions
    );
  }
}

//清空下拉式選單的內容並重新填入options
function recodeHeadSupportsSelectOptions(selectElement, options) {
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

//監聽下拉式選單
headsupportspadsel.addEventListener("change", () => {
  updateHeadSupportsPadValueRow();
});

// 更新表格欄位
function updateHeadSupportsPadValueRow() {
  let selectedText =
    headsupportspadsel.options[headsupportspadsel.selectedIndex].text;
  let padHeaderTd = document.querySelector(".padheader-row .padheadertd");
  padHeaderTd.textContent = selectedText;
  if (CirclePadCheckbox.checked) {
    if (selectedText === "150") {
      HeadSupportsPadSizeadSelectOptions(
        padValueCells,
        SpexheadsupportsCirclePad150DataOptions
      );
    } else if (selectedText === "250") {
      HeadSupportsPadSizeadSelectOptions(
        padValueCells,
        SpexheadsupportsCirclePad250DataOptions
      );
    } else if (selectedText === "請選擇") {
      HeadSupportsPadSizeadSelectOptions(
        padValueCells,
        SpexheadsupportsClearPadDataOptions,
        2
      );
    }
  }
  if (ComfortPadCheckbox.checked) {
    if (selectedText === "250") {
      HeadSupportsPadSizeadSelectOptions(
        padValueCells,
        SpexheadsupportsComfortPad250DataOptions
      );
    } else if (selectedText === "350") {
      HeadSupportsPadSizeadSelectOptions(
        padValueCells,
        SpexheadsupportsComfortPad350DataOptions
      );
    } else if (selectedText === "請選擇") {
      HeadSupportsPadSizeadSelectOptions(
        padValueCells,
        SpexheadsupportsClearPadDataOptions,
        2
      );
    }
  }
  if (ContourPadCheckbox.checked) {
    if (selectedText === "250") {
      HeadSupportsPadSizeadSelectOptions(
        padValueCells,
        SpexheadsupportsContourPad250DataOptions
      );
    } else if (selectedText === "350") {
      HeadSupportsPadSizeadSelectOptions(
        padValueCells,
        SpexheadsupportsContourPad350DataOptions
      );
    } else if (selectedText === "請選擇") {
      HeadSupportsPadSizeadSelectOptions(
        padValueCells,
        SpexheadsupportsClearPadDataOptions,
        2
      );
    }
  }
  if (StandardlateralPadCheckbox.checked) {
    if (selectedText === "Paediatric") {
      HeadSupportsPadSizeadSelectOptions(
        padValueCells,
        SpexheadsupportsStandardLateralPadPaediatricDataOptions
      );
    } else if (selectedText === "Adult") {
      HeadSupportsPadSizeadSelectOptions(
        padValueCells,
        SpexheadsupportsStandardLateralPadAdultDataOptions
      );
    } else if (selectedText === "請選擇") {
      HeadSupportsPadSizeadSelectOptions(
        padValueCells,
        SpexheadsupportsClearPadDataOptions,
        2
      );
    }
  }
  if (ExtendedLateralPadCheckbox.checked) {
    if (selectedText === "Paediatric") {
      HeadSupportsPadSizeadSelectOptions(
        padValueCells,
        SpexheadsupportsExtendedLateralPadPaediatricDataOptions
      );
    } else if (selectedText === "Adult") {
      HeadSupportsPadSizeadSelectOptions(
        padValueCells,
        SpexheadsupportsExtendedLateralPadAdultDataOptions
      );
    } else if (selectedText === "請選擇") {
      HeadSupportsPadSizeadSelectOptions(
        padValueCells,
        SpexheadsupportsClearPadDataOptions,
        2
      );
    }
  }
  if (AdjustableLateralPadCheckbox.checked) {
    if (selectedText === "150") {
      HeadSupportsPadSizeadSelectOptions(
        padValueCells,
        SpexheadsupportsAdjustableLateralPad150DataOptions
      );
    } else if (selectedText === "250") {
      HeadSupportsPadSizeadSelectOptions(
        padValueCells,
        SpexheadsupportsAdjustableLateralPad250DataOptions
      );
    } else if (selectedText === "請選擇") {
      HeadSupportsPadSizeadSelectOptions(
        padValueCells,
        SpexheadsupportsClearPadDataOptions,
        2
      );
    }
  }
}

//頭靠表格更新
function HeadSupportsPadSizeadSelectOptions(
  selectElement,
  options,
  selectoption1
) {
  let nowprice_SpexHeadSupports = Price[18].nextElementSibling;
  let data = options.option1 || [];
  let headerCells = document.querySelectorAll(".padheader-row td");
  if (selectoption1 === 2) {
    let padHeaderTd = document.querySelector(".padheader-row .padheadertd");
    padHeaderTd.textContent = "頭靠類型";

    recodeHeadSupportsSelectOptions(
      headsupportspadsel,
      SpexheadsupportsCirclePadSizeOptions
    );

    // 清空所有 value-row 的欄位並移除灰色樣式
    selectElement.forEach((cell, index) => {
      cell.innerHTML = "&nbsp;";
      cell.classList.remove("disabled-cell");

      if (headerCells[index]) {
        headerCells[index].classList.remove("disabled-cell");
      }
    });
    if (bracketprices.textContent !== "") {
      nowprice_SpexHeadSupports.textContent = `${formatPrice(
        bracketprices.textContent
      )} 元`;
    } else {
      nowprice_SpexHeadSupports.textContent = "0 元";
      headsupportsprices.textContent = "";
    }
    return; // 提前結束
  }

  // 將資料填入欄位
  selectElement.forEach((cell, index) => {
    let value = data[index] || "&nbsp;";
    cell.innerHTML = value;

    if (value === "&nbsp;") {
      cell.classList.add("disabled-cell");
      if (headerCells[index]) {
        headerCells[index].classList.add("disabled-cell");
      }
    } else {
      cell.classList.remove("disabled-cell");
      if (headerCells[index]) {
        headerCells[index].classList.remove("disabled-cell");
      }
    }
  });
}
// endregion

//確定勾選的是哪個頭靠支架，且不會重複勾選選項
//region
document
  .querySelectorAll('input[name="car_SpexHeadSupportsBracket"]')
  .forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      document
        .querySelectorAll('input[name="car_SpexHeadSupportsBracket"]')
        .forEach((otherCheckbox) => {
          if (otherCheckbox !== this) {
            otherCheckbox.checked = false;
          }
        });
    });
  });
// endregion

// endregion

/*----- 19.Spex綁帶子系統-骨盆帶 -----*/
//region
/*---  Spex綁帶子系統-骨盆帶 - 圖片箭頭部分  ---*/
//region
document.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let tgimg_19 = event.target;
  let carseat19 = tgimg_19.closest(".Spex_hipbelts"); // 找到最近的 Spex_hipbelts
  let imgSpexhipbelts = event.target.dataset.imgSpexhipbelts;

  //確認我點擊到的位置是否是 Spex_hipbelts
  if (carseat19 && carseat19.className.trim() === "Spex_hipbelts") {
    let introdutionid = carseat19.querySelector(".Spexhipbeltsgroup"); // 在 Spex_hipbelts 內部找 Spexhipbelts
    let introdution = carseat19.querySelector(".subtitle"); // 在 Spex_hipbelts 內部找 subtitle

    if (introdutionid) {
      // 取得 `visibility` 的計算後樣式
      let visibilityValue = window.getComputedStyle(introdutionid).visibility;

      if (imgSpexhipbelts === "SpexhipbeltsImg") {
        if (visibilityValue === "hidden") {
          let Price_Spexhipbelts = document.querySelectorAll(".pricing");

          Price_Spexhipbelts.forEach(function (openIntro) {
            let Spexhipbelts = Price_Spexhipbelts[19];
            //直接判斷是第幾個.Price
            let nowprice_Spexhipbelts =
              Price_Spexhipbelts[19].nextElementSibling;

            if (
              openIntro.getAttribute("data-price-Spexhipbelts") ===
                "Spexhipbelts" &&
              nowprice_Spexhipbelts.getAttribute(
                "data-nowprice-Spexhipbelts"
              ) === "nowSpexhipbelts"
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
                nowprice_Spexhipbelts.style.display = "block";
                nowprice_Spexhipbelts.style.display = "flex";
                nowprice_Spexhipbelts.style.width = "95%";
                nowprice_Spexhipbelts.style.height = "90%";
                nowprice_Spexhipbelts.style.color = "#000000";
                nowprice_Spexhipbelts.style.borderRadius = "8px";
                nowprice_Spexhipbelts.style.padding = "1px";
                nowprice_Spexhipbelts.style.margin = "3px 3px 3px 2px";
                nowprice_Spexhipbelts.style.textAlign = "center";
                nowprice_Spexhipbelts.style.fontSize = "16px";
                nowprice_Spexhipbelts.style.fontWeight = "600";
                nowprice_Spexhipbelts.style.alignItems = "center";
                nowprice_Spexhipbelts.style.justifyContent = "center";

                if (window.matchMedia("(max-width: 650px)").matches) {
                  nowprice_Spexhipbelts.style.fontSize = "15px";
                  introdutionid.style.width = "calc(100% - 9px)";
                  Spexhipbelts.style.padding = "5px";
                  Spexhipbelts.style.margin = "3px 0px 3px 1px";
                }
              }
            }
          });
        } else {
          let Price_Spexhipbelts = document.querySelectorAll(".pricing");

          Price_Spexhipbelts.forEach(function (openIntro) {
            let nowprice_Spexhipbelts =
              Price_Spexhipbelts[19].nextElementSibling;

            //把data-collapse-status改成0
            introdution.setAttribute("data-collapse-status", "0");

            //建議售價標題隱藏
            introdutionid.style.visibility = "hidden";
            introdutionid.style.height = "0";
            introdutionid.style.padding = "0";
            introdutionid.style.border = "0px dashed black";
            introdutionid.style.margin = "0";

            if (
              openIntro.getAttribute("data-price-Spexhipbelts") ===
              "Spexhipbelts"
            ) {
              //建議售價金額隱藏
              openIntro.style.display = "none";
            }
            nowprice_Spexhipbelts.style.display = "none";
          });
        }
      }
    }
  }
});
// endregion

/*---  Spex綁帶子系統-骨盆帶 - subtitle部分  ---*/
//region
let Spex_hipbelts = document.querySelector(".Spex_hipbelts");
Spex_hipbelts.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let showinfo = event.target.dataset.showinfo;
  let introdution = event.target;
  //確認我點擊到的位置是否是 Spex_hipbelts
  if (showinfo === "Spexhipbelts") {
    let introdutionid = event.target.nextElementSibling;
    let Price_Spex_hipbelts = document.querySelectorAll(".pricing");
    let Spex_hipbeltsimg = Spex_hipbelts.querySelector(".target_img"); // 找到最近的 .target_img
    let img = Spex_hipbeltsimg.querySelector("img");

    Price_Spex_hipbelts.forEach(function (openIntro) {
      let Spexhipbelts = Price_Spex_hipbelts[19];
      //直接判斷是第幾個.Price
      let nowprice_Spexhipbelts = Price_Spex_hipbelts[19].nextElementSibling;

      if (
        openIntro.getAttribute("data-price-Spexhipbelts") === "Spexhipbelts" &&
        nowprice_Spexhipbelts.getAttribute("data-nowprice-Spexhipbelts") ===
          "nowSpexhipbelts"
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
          nowprice_Spexhipbelts.style.display = "block";
          nowprice_Spexhipbelts.style.display = "flex";
          nowprice_Spexhipbelts.style.width = "95%";
          nowprice_Spexhipbelts.style.height = "90%";
          nowprice_Spexhipbelts.style.color = "#000000";
          nowprice_Spexhipbelts.style.borderRadius = "8px";
          nowprice_Spexhipbelts.style.padding = "1px";
          nowprice_Spexhipbelts.style.margin = "3px 3px 3px 2px";
          nowprice_Spexhipbelts.style.textAlign = "center";
          nowprice_Spexhipbelts.style.fontSize = "16px";
          nowprice_Spexhipbelts.style.fontWeight = "600";
          nowprice_Spexhipbelts.style.alignItems = "center";
          nowprice_Spexhipbelts.style.justifyContent = "center";

          if (img) {
            img.setAttribute("src", "./img/black triangle after.png");
          }

          if (window.matchMedia("(max-width: 650px)").matches) {
            nowprice_Spexhipbelts.style.fontSize = "15px";
            introdutionid.style.width = "calc(100% - 9px)";
            Spexhipbelts.style.padding = "5px";
            Spexhipbelts.style.margin = "3px 0px 3px 1px";
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
          nowprice_Spexhipbelts.style.display = "none";

          if (img) {
            img.setAttribute("src", "./img/black triangle.png");
          }
        }
      }
    });
  }
});
//endregion

//region --- 骨盆帶選項 ---
//骨盆帶款式
let SpexhipbeltstypeOptions = [
  { value: "option1", text: "請選擇", selected: true },
  { value: "option2", text: "上下開" },
  { value: "option3", text: "中開" },
  { value: "option4", text: "防脫式" },
  { value: "option5", text: "筆開式" },
];
//骨盆帶尺寸
let SpexhipbeltssizeOptions = [
  { value: "option1", text: "請選擇", selected: true },
  { value: "option2", text: "XSM" },
  { value: "option3", text: "SML" },
  { value: "option4", text: "MED" },
  { value: "option5", text: "LGE" },
];
//endregion

//region --- 骨盆帶選項 ---
//region --- 2點單拉襯墊型骨盆帶 選項 ---
//2點單拉襯墊型骨盆帶款式
let Spexhipbelts2PointCentrePulltypeOptions = [
  { value: "option1", text: "請選擇", selected: true },
  { value: "option2", text: "上下開" },
  { value: "option3", text: "中開" },
  { value: "option4", text: "防脫式" },
  { value: "option5", text: "筆開式" },
];
//2點單拉襯墊型骨盆帶尺寸
let Spexhipbelts2PointCentrePullsizeOptions = [
  { value: "option1", text: "請選擇", selected: true },
  { value: "option2", text: "XSM" },
  { value: "option3", text: "SML" },
  { value: "option4", text: "MED" },
  { value: "option5", text: "LGE" },
];
//endregion

//region --- 2點雙拉襯墊型骨盆帶 選項 ---
//2點雙拉襯墊型骨盆帶款式
let Spexhipbelts2PointDualPulltypeOptions = [
  { value: "option1", text: "請選擇", selected: true },
  { value: "option2", text: "上下開" },
];
//2點雙拉襯墊型骨盆帶尺寸
let Spexhipbelts2PointDualPullsizeOptions = [
  { value: "option1", text: "請選擇", selected: true },
  { value: "option2", text: "XSM" },
  { value: "option3", text: "SML" },
  { value: "option4", text: "MED" },
  { value: "option5", text: "LGE" },
];
//endregion

//region --- 4點單拉襯墊型骨盆帶 選項 ---
//4點單拉襯墊型骨盆帶款式
let Spexhipbelts4PointCentrePulltypeOptions = [
  { value: "option1", text: "請選擇", selected: true },
  { value: "option2", text: "上下開" },
  { value: "option3", text: "中開" },
  { value: "option4", text: "防脫式" },
  { value: "option5", text: "筆開式" },
];
//4點單拉襯墊型骨盆帶尺寸
let Spexhipbelts4PointCentrePullsizeOptions = [
  { value: "option1", text: "請選擇", selected: true },
  { value: "option2", text: "XSM" },
  { value: "option3", text: "SML" },
  { value: "option4", text: "MED" },
  { value: "option5", text: "LGE" },
];
//endregion

//region --- 4點雙拉襯墊型骨盆帶 選項 ---
//4點雙拉襯墊型骨盆帶款式
let Spexhipbelts4PointDualPulltypeOptions = [
  { value: "option1", text: "請選擇", selected: true },
  { value: "option2", text: "上下開" },
];
//4點雙拉襯墊型骨盆帶尺寸
let Spexhipbelts4PointDualPullsizeOptions = [
  { value: "option1", text: "請選擇", selected: true },
  { value: "option2", text: "XSM" },
  { value: "option3", text: "SML" },
  { value: "option4", text: "MED" },
  { value: "option5", text: "LGE" },
];
//endregion

//region --- 4點側拉襯墊型骨盆帶 選項 ---
//4點側拉襯墊型骨盆帶款式
let Spexhipbelts4PointSidePulltypeOptions = [
  { value: "option1", text: "請選擇", selected: true },
  { value: "option2", text: "上下開" },
  { value: "option3", text: "中開" },
  { value: "option4", text: "防脫式" },
  { value: "option5", text: "筆開式" },
];
//4點側拉襯墊型骨盆帶尺寸
let Spexhipbelts4PointSidePullsizeOptions = [
  { value: "option1", text: "請選擇", selected: true },
  { value: "option2", text: "XSM" },
  { value: "option3", text: "SML" },
  { value: "option4", text: "MED" },
  { value: "option5", text: "LGE" },
];
//endregion
//endregion

//region --- 宣告所有元素 ---
let HipBeltscheckboxes = document.querySelectorAll(
  'input[name="car_SpexHipBelts"]'
);
let Spex2PointCentrePullcheckbox = document.getElementById(
  "Spex_2_Point_Centre_Pull"
);
let Spex2PointDualCentrePullcheckbox = document.getElementById(
  "Spex_2_Point_Dual_Centre_Pull"
);
let Spex4PointCentrePullcheckbox = document.getElementById(
  "Spex_4_Point_Centre_Pull"
);
let Spex4PointDualCentrePullcheckbox = document.getElementById(
  "Spex_4_Point_Dual_Centre_Pull"
);
let Spex4PointSidePullcheckbox = document.getElementById(
  "Spex_4_Point_Side_Pull"
);

let hipbeltstypesel = document.querySelector(".hipbeltstype");
let hipbeltssizesel = document.querySelector(".hipbeltssize");

//endregion

//region 確定勾選的是哪個頭靠，且不會重複勾選選項
document
  .querySelectorAll('input[name="car_SpexHipBelts"]')
  .forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      document
        .querySelectorAll('input[name="car_SpexHipBelts"]')
        .forEach((otherCheckbox) => {
          if (otherCheckbox !== this) {
            otherCheckbox.checked = false;
          }
        });
      if (Spex2PointCentrePullcheckbox.checked) {
        renderSelectOptions(
          hipbeltstypesel,
          Spexhipbelts2PointCentrePulltypeOptions
        );
        renderSelectOptions(
          hipbeltssizesel,
          Spexhipbelts2PointCentrePullsizeOptions
        );
      } else if (Spex2PointDualCentrePullcheckbox.checked) {
        renderSelectOptions(
          hipbeltstypesel,
          Spexhipbelts2PointDualPulltypeOptions
        );
        renderSelectOptions(
          hipbeltssizesel,
          Spexhipbelts2PointDualPullsizeOptions
        );
      } else if (Spex4PointCentrePullcheckbox.checked) {
        renderSelectOptions(
          hipbeltstypesel,
          Spexhipbelts4PointCentrePulltypeOptions
        );
        renderSelectOptions(
          hipbeltssizesel,
          Spexhipbelts4PointCentrePullsizeOptions
        );
      } else if (Spex4PointDualCentrePullcheckbox.checked) {
        renderSelectOptions(
          hipbeltstypesel,
          Spexhipbelts4PointDualPulltypeOptions
        );
        renderSelectOptions(
          hipbeltssizesel,
          Spexhipbelts4PointDualPullsizeOptions
        );
      } else if (Spex4PointSidePullcheckbox.checked) {
        renderSelectOptions(
          hipbeltstypesel,
          Spexhipbelts4PointSidePulltypeOptions
        );
        renderSelectOptions(
          hipbeltssizesel,
          Spexhipbelts4PointSidePullsizeOptions
        );
      }
      let anyChecked = Array.from(HipBeltscheckboxes).some((cb) => cb.checked);
      if (!anyChecked) {
        renderSelectOptions(hipbeltstypesel, SpexhipbeltstypeOptions);
        renderSelectOptions(hipbeltssizesel, SpexhipbeltssizeOptions);
      }
    });
  });
//endregion

//region如果沒有打勾的選項，就將下拉式選單不顯示
function updateHipBeltsStatus() {
  let anyChecked = Array.from(HipBeltscheckboxes).some((cb) => cb.checked);
  hipbeltstypesel.disabled = !anyChecked;
  hipbeltssizesel.disabled = !anyChecked;
  if (!anyChecked) {
    let Price = document.querySelectorAll(".pricing");
    let nowprice_SpexHipBelts = Price[18].nextElementSibling;
    nowprice_SpexHipBelts.textContent = "0 元";
  }
}

// 監聽頭靠每個checkbox 的事件
HipBeltscheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", updateHipBeltsStatus);
});

updateHipBeltsStatus();
//endregion

//region 下拉式選單判斷哪些需要那些不需要
function renderSelectOptions(
  selectElement,
  options,
  preserveSelectedOption = null
) {
  selectElement.innerHTML = "";

  // 若目前選取項目不在選單中，加入它
  if (
    preserveSelectedOption &&
    !options.some((opt) => opt.value === preserveSelectedOption.value)
  ) {
    options = [
      ...options,
      {
        value: preserveSelectedOption.value,
        text: preserveSelectedOption.text,
      },
    ];
  }

  options.forEach((opt) => {
    let option = document.createElement("option");
    option.value = opt.value;
    option.textContent = opt.text;
    if (preserveSelectedOption && opt.value === preserveSelectedOption.value) {
      option.selected = true;
    } else if (opt.selected) {
      option.selected = true;
    }
    selectElement.appendChild(option);
  });
}

function updatehipbeltstypeSelectOptions(originalOptions) {
  let selectedType = hipbeltstypesel.value;
  let currentSize = hipbeltssizesel.options[hipbeltssizesel.selectedIndex];

  let filteredSizes = originalOptions;

  if (selectedType === "option4") {
    // 防脫式 → 移除 XSM
    filteredSizes = originalOptions.filter((opt) => opt.value !== "option2");
  }

  renderSelectOptions(hipbeltssizesel, filteredSizes, currentSize);
}

function updatehipbeltssizeSelectOptions(originalOptions) {
  let selectedSize = hipbeltssizesel.value;
  let currentType = hipbeltstypesel.options[hipbeltstypesel.selectedIndex];

  let filteredTypes = originalOptions;

  if (selectedSize === "option2") {
    // 選了 XSM → 不可選防脫式
    filteredTypes = originalOptions.filter((opt) => opt.value !== "option4");
  }

  renderSelectOptions(hipbeltstypesel, filteredTypes, currentType);
}

// 綁定事件
hipbeltstypesel.addEventListener("change", () => {
  let spexhipbeltstypeOption =
    hipbeltstypesel.options[hipbeltstypesel.selectedIndex];
  let spexhipbeltssizeOption =
    hipbeltssizesel.options[hipbeltssizesel.selectedIndex];
  if (Spex2PointCentrePullcheckbox.checked) {
    if (spexhipbeltstypeOption.value === "option4") {
      // 防脫式 → 移除 XSM
      updatehipbeltstypeSelectOptions(Spexhipbelts2PointCentrePullsizeOptions);
    } else if (spexhipbeltstypeOption.value === "option1") {
      // 回到請選擇 → 還原原始資料
      renderSelectOptions(
        hipbeltstypesel,
        Spexhipbelts2PointCentrePulltypeOptions
      );
      renderSelectOptions(
        hipbeltssizesel,
        Spexhipbelts2PointCentrePullsizeOptions
      );
    } else {
      // 非防脫式 → 恢復所有尺寸（包含 XSM）
      renderSelectOptions(
        hipbeltssizesel,
        Spexhipbelts2PointCentrePullsizeOptions,
        spexhipbeltssizeOption
      );
    }
  }
  if (Spex4PointCentrePullcheckbox.checked) {
    if (
      spexhipbeltstypeOption.value === "option4" &&
      spexhipbeltssizeOption.value !== "option2"
    ) {
      updatehipbeltstypeSelectOptions(Spexhipbelts4PointCentrePullsizeOptions);
    } else if (spexhipbeltstypeOption.value === "option1") {
      renderSelectOptions(
        hipbeltssizesel,
        Spexhipbelts4PointCentrePullsizeOptions
      );
      renderSelectOptions(
        hipbeltstypesel,
        Spexhipbelts4PointCentrePulltypeOptions
      );
    } else {
      // 非防脫式 → 恢復所有尺寸（包含 XSM）
      renderSelectOptions(
        hipbeltssizesel,
        Spexhipbelts2PointCentrePullsizeOptions,
        spexhipbeltssizeOption
      );
    }
  }
  if (Spex4PointSidePullcheckbox.checked) {
    if (
      spexhipbeltstypeOption.value === "option4" &&
      spexhipbeltssizeOption.value !== "option2"
    ) {
      updatehipbeltstypeSelectOptions(Spexhipbelts4PointSidePullsizeOptions);
    } else if (spexhipbeltstypeOption.value === "option1") {
      renderSelectOptions(
        hipbeltssizesel,
        Spexhipbelts4PointSidePullsizeOptions
      );
      renderSelectOptions(
        hipbeltstypesel,
        Spexhipbelts4PointSidePulltypeOptions
      );
    } else {
      // 非防脫式 → 恢復所有尺寸（包含 XSM）
      renderSelectOptions(
        hipbeltssizesel,
        Spexhipbelts2PointCentrePullsizeOptions,
        spexhipbeltssizeOption
      );
    }
  }
});

hipbeltssizesel.addEventListener("change", () => {
  let spexhipbeltstypeOption =
    hipbeltstypesel.options[hipbeltstypesel.selectedIndex];
  let spexhipbeltssizeOption =
    hipbeltssizesel.options[hipbeltssizesel.selectedIndex];
  if (Spex2PointCentrePullcheckbox.checked) {
    if (
      spexhipbeltssizeOption.value === "option2" &&
      spexhipbeltstypeOption.value !== "option4"
    ) {
      updatehipbeltssizeSelectOptions(Spexhipbelts2PointCentrePulltypeOptions);
    } else if (spexhipbeltssizeOption.value === "option1") {
      renderSelectOptions(
        hipbeltstypesel,
        Spexhipbelts2PointCentrePulltypeOptions
      );
      renderSelectOptions(
        hipbeltssizesel,
        Spexhipbelts2PointCentrePullsizeOptions
      );
    } else {
      // 非XSM → 恢復所有款式（包含 防脫式)
      renderSelectOptions(
        hipbeltstypesel,
        Spexhipbelts2PointCentrePulltypeOptions,
        spexhipbeltstypeOption
      );
    }
  }
  if (Spex4PointCentrePullcheckbox.checked) {
    if (
      spexhipbeltssizeOption.value === "option2" &&
      spexhipbeltstypeOption.value !== "option4"
    ) {
      updatehipbeltssizeSelectOptions(Spexhipbelts4PointCentrePulltypeOptions);
    } else if (spexhipbeltssizeOption.value === "option1") {
      renderSelectOptions(
        hipbeltstypesel,
        Spexhipbelts4PointCentrePulltypeOptions
      );
      renderSelectOptions(
        hipbeltssizesel,
        Spexhipbelts4PointSidePullsizeOptions
      );
    } else {
      // 非XSM → 恢復所有款式（包含 防脫式)
      renderSelectOptions(
        hipbeltstypesel,
        Spexhipbelts2PointCentrePulltypeOptions,
        spexhipbeltstypeOption
      );
    }
  }
  if (Spex4PointSidePullcheckbox.checked) {
    if (
      spexhipbeltssizeOption.value === "option2" &&
      spexhipbeltstypeOption.value !== "option4"
    ) {
      updatehipbeltssizeSelectOptions(Spexhipbelts4PointSidePulltypeOptions);
    } else if (spexhipbeltssizeOption.value === "option1") {
      renderSelectOptions(
        hipbeltstypesel,
        Spexhipbelts4PointSidePulltypeOptions
      );
      renderSelectOptions(
        hipbeltssizesel,
        Spexhipbelts4PointSidePullsizeOptions
      );
    } else {
      // 非XSM → 恢復所有款式（包含 防脫式)
      renderSelectOptions(
        hipbeltstypesel,
        Spexhipbelts2PointCentrePulltypeOptions,
        spexhipbeltstypeOption
      );
    }
  }
});

// 預設執行一次
renderSelectOptions(hipbeltstypesel, SpexhipbeltstypeOptions);
renderSelectOptions(hipbeltssizesel, SpexhipbeltssizeOptions);
// endregion

// endregion

/*----- 20.Spex綁帶子系統-肩胸綁帶 -----*/
//region
/*---  Spex綁帶子系統-肩胸綁帶 - 圖片箭頭部分  ---*/
//region
document.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let tgimg_20 = event.target;
  let carseat20 = tgimg_20.closest(".Spex_shoulderharnesses"); // 找到最近的 Spex_shoulderharnesses
  let imgSpexshoulderharnesses = event.target.dataset.imgSpexshoulderharnesses;

  //確認我點擊到的位置是否是 Spex_shoulderharnesses
  if (carseat20 && carseat20.className.trim() === "Spex_shoulderharnesses") {
    let introdutionid = carseat20.querySelector(".Spexshoulderharnessesgroup"); // 在 Spex_shoulderharnesses 內部找 Spexshoulderharnesses
    let introdution = carseat20.querySelector(".subtitle"); // 在 Spex_shoulderharnesses 內部找 subtitle

    if (introdutionid) {
      // 取得 `visibility` 的計算後樣式
      let visibilityValue = window.getComputedStyle(introdutionid).visibility;

      if (imgSpexshoulderharnesses === "SpexshoulderharnessesImg") {
        if (visibilityValue === "hidden") {
          let Price_Spexshoulderharnesses =
            document.querySelectorAll(".pricing");

          Price_Spexshoulderharnesses.forEach(function (openIntro) {
            let Spexshoulderharnesses = Price_Spexshoulderharnesses[20];
            //直接判斷是第幾個.Price
            let nowprice_Spexshoulderharnesses =
              Price_Spexshoulderharnesses[20].nextElementSibling;

            if (
              openIntro.getAttribute("data-price-Spexshoulderharnesses") ===
                "Spexshoulderharnesses" &&
              nowprice_Spexshoulderharnesses.getAttribute(
                "data-nowprice-Spexshoulderharnesses"
              ) === "nowSpexshoulderharnesses"
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
                nowprice_Spexshoulderharnesses.style.display = "block";
                nowprice_Spexshoulderharnesses.style.display = "flex";
                nowprice_Spexshoulderharnesses.style.width = "95%";
                nowprice_Spexshoulderharnesses.style.height = "90%";
                nowprice_Spexshoulderharnesses.style.color = "#000000";
                nowprice_Spexshoulderharnesses.style.borderRadius = "8px";
                nowprice_Spexshoulderharnesses.style.padding = "1px";
                nowprice_Spexshoulderharnesses.style.margin = "3px 3px 3px 2px";
                nowprice_Spexshoulderharnesses.style.textAlign = "center";
                nowprice_Spexshoulderharnesses.style.fontSize = "16px";
                nowprice_Spexshoulderharnesses.style.fontWeight = "600";
                nowprice_Spexshoulderharnesses.style.alignItems = "center";
                nowprice_Spexshoulderharnesses.style.justifyContent = "center";

                if (window.matchMedia("(max-width: 650px)").matches) {
                  nowprice_Spexshoulderharnesses.style.fontSize = "15px";
                  introdutionid.style.width = "calc(100% - 9px)";
                  Spexshoulderharnesses.style.padding = "5px";
                  Spexshoulderharnesses.style.margin = "3px 0px 3px 1px";
                }
              }
            }
          });
        } else {
          let Price_Spexshoulderharnesses =
            document.querySelectorAll(".pricing");

          Price_Spexshoulderharnesses.forEach(function (openIntro) {
            let nowprice_Spexshoulderharnesses =
              Price_Spexshoulderharnesses[20].nextElementSibling;

            //把data-collapse-status改成0
            introdution.setAttribute("data-collapse-status", "0");

            //建議售價標題隱藏
            introdutionid.style.visibility = "hidden";
            introdutionid.style.height = "0";
            introdutionid.style.padding = "0";
            introdutionid.style.border = "0px dashed black";
            introdutionid.style.margin = "0";

            if (
              openIntro.getAttribute("data-price-Spexshoulderharnesses") ===
              "Spexshoulderharnesses"
            ) {
              //建議售價金額隱藏
              openIntro.style.display = "none";
            }
            nowprice_Spexshoulderharnesses.style.display = "none";
          });
        }
      }
    }
  }
});
// endregion

/*---  Spex綁帶子系統-肩胸綁帶 - subtitle部分  ---*/
//region
let Spex_shoulderharnesses = document.querySelector(".Spex_shoulderharnesses");
Spex_shoulderharnesses.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let showinfo = event.target.dataset.showinfo;
  let introdution = event.target;
  //確認我點擊到的位置是否是 Spex_shoulderharnesses
  if (showinfo === "Spexshoulderharnesses") {
    let introdutionid = event.target.nextElementSibling;
    let Price_Spex_shoulderharnesses = document.querySelectorAll(".pricing");
    let Spex_shoulderharnessesimg =
      Spex_shoulderharnesses.querySelector(".target_img"); // 找到最近的 .target_img
    let img = Spex_shoulderharnessesimg.querySelector("img");

    Price_Spex_shoulderharnesses.forEach(function (openIntro) {
      let Spexshoulderharnesses = Price_Spex_shoulderharnesses[20];
      //直接判斷是第幾個.Price
      let nowprice_Spexshoulderharnesses =
        Price_Spex_shoulderharnesses[20].nextElementSibling;

      if (
        openIntro.getAttribute("data-price-Spexshoulderharnesses") ===
          "Spexshoulderharnesses" &&
        nowprice_Spexshoulderharnesses.getAttribute(
          "data-nowprice-Spexshoulderharnesses"
        ) === "nowSpexshoulderharnesses"
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
          nowprice_Spexshoulderharnesses.style.display = "block";
          nowprice_Spexshoulderharnesses.style.display = "flex";
          nowprice_Spexshoulderharnesses.style.width = "95%";
          nowprice_Spexshoulderharnesses.style.height = "90%";
          nowprice_Spexshoulderharnesses.style.color = "#000000";
          nowprice_Spexshoulderharnesses.style.borderRadius = "8px";
          nowprice_Spexshoulderharnesses.style.padding = "1px";
          nowprice_Spexshoulderharnesses.style.margin = "3px 3px 3px 2px";
          nowprice_Spexshoulderharnesses.style.textAlign = "center";
          nowprice_Spexshoulderharnesses.style.fontSize = "16px";
          nowprice_Spexshoulderharnesses.style.fontWeight = "600";
          nowprice_Spexshoulderharnesses.style.alignItems = "center";
          nowprice_Spexshoulderharnesses.style.justifyContent = "center";

          if (img) {
            img.setAttribute("src", "./img/black triangle after.png");
          }

          if (window.matchMedia("(max-width: 650px)").matches) {
            nowprice_Spexshoulderharnesses.style.fontSize = "15px";
            introdutionid.style.width = "calc(100% - 9px)";
            Spexshoulderharnesses.style.padding = "5px";
            Spexshoulderharnesses.style.margin = "3px 0px 3px 1px";
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
          nowprice_Spexshoulderharnesses.style.display = "none";

          if (img) {
            img.setAttribute("src", "./img/black triangle.png");
          }
        }
      }
    });
  }
});
//endregion

//region --- 肩胸綁帶選項 ---
//region --- 一字型綁帶 選項 ---
//一字型綁帶尺寸選項
let SpexShoulderHarnessesChestStrapSizeOptions = [
  { value: "option1", text: "請選擇", selected: true },
  { value: "option2", text: "SML" },
  { value: "option3", text: "MED" },
  { value: "option4", text: "LGE" },
];

//一字型綁帶寬度及長度選項
let SpexChestStrapData = {
  option2: { width: "&nbsp;", length: "35x7.5 cm" },
  option3: { width: "&nbsp;", length: "40x8 cm" },
  option4: { width: "&nbsp;", length: "55x10 cm" },
};
//endregion

//region --- H型綁帶 選項 ---
//H型綁帶尺寸選項
let SpexShoulderHarnessesHHarnessSizeOptions = [
  { value: "option1", text: "請選擇", selected: true },
  { value: "option2", text: "XSM" },
  { value: "option3", text: "SML" },
  { value: "option4", text: "MED" },
  { value: "option5", text: "LGE" },
  { value: "option6", text: "XLG" },
];

//H型綁帶寬度及長度選項
let SpexHHarnessData = {
  option2: { width: "8”-12”", length: "27cm" },
  option3: { width: "11”-15”", length: "30cm" },
  option4: { width: "14”-17”", length: "36cm" },
  option5: { width: "17”-20”", length: "42cm" },
  option6: { width: "20”+”", length: "48cm" },
};
//endregion

//region --- 直條型綁帶 選項 ---
//直條型綁帶尺寸選項
let SpexShoulderHarnessesRetractorHarnessSizeOptions = [
  { value: "option1", text: "請選擇", selected: true },
  { value: "option2", text: "SML" },
  { value: "option3", text: "MED" },
  { value: "option4", text: "LGE" },
  { value: "option5", text: "XLG" },
];

//直條型綁帶寬度及長度選項
let SpexRetractorHarnessData = {
  option2: { width: "11”-15”", length: "32cm" },
  option3: { width: "14”-17”", length: "38cm" },
  option4: { width: "17”-20””", length: "44cm" },
  option5: { width: "20”+", length: "50cm" },
};
//endregion

//region --- 夾克型綁帶 選項 ---
//夾克型綁帶尺寸選項
let SpexShoulderHarnessesVestHarnessSizeOptions = [
  { value: "option1", text: "請選擇", selected: true },
  { value: "option2", text: "XSML" },
  { value: "option3", text: "SML" },
  { value: "option4", text: "MED" },
  { value: "option5", text: "LGE" },
];

//夾克型綁帶寬度及長度選項
let SpexVestHarnessData = {
  option2: { width: "8”-12”", length: "24cm" },
  option3: { width: "11”-15”", length: "32cm" },
  option4: { width: "14”-17””", length: "40cm" },
  option5: { width: "17”-20”", length: "48cm" },
};
//endregion

//region --- X型綁帶 選項 ---
//X型綁帶尺寸選項
let SpexShoulderHarnessesCentrepointHarnessSizeOptions = [
  { value: "option1", text: "請選擇", selected: true },
  { value: "option2", text: "XSML" },
  { value: "option3", text: "SML" },
  { value: "option4", text: "MED" },
  { value: "option5", text: "LGE" },
  { value: "option6", text: "XLGE" },
];

//X型綁帶寬度及長度選項
let SpexCentrepointHarnessData = {
  option2: { width: "8”-12”", length: "26cm" },
  option3: { width: "11”-15”", length: "36cm" },
  option4: { width: "14”-17”", length: "40cm" },
  option5: { width: "17”-20”", length: "45cm" },
  option6: { width: "20”+", length: "50cm" },
};
//endregion
//endregion

//region --- 宣告所有元素 ---
let ShoulderHarnessescheckboxes = document.querySelectorAll(
  'input[name="car_SpexShoulderHarnesses"]'
);
let ShoulderStrapGuidescheckboxes = document.querySelectorAll(
  'input[name="car_SpexShoulderStrapGuides"]'
);
let ShoulderHarnessesAllcheckboxes = document.querySelectorAll(
  ".SpexShoulderHarnesses"
);

let SpexChestStrapcheckbox = document.getElementById("Chest_Strap");
let SpexHHarnesscheckbox = document.getElementById("H_Harness");
let SpexRetractorHarnesscheckbox = document.getElementById("Retractor_Harness");
let SpexVestHarnesscheckbox = document.getElementById("Vest_Harness");
let SpexCentrepointHarnesscheckbox = document.getElementById(
  "Centrepoint_Harness"
);
let Spex_Shoulder_Strap_Guidescheckbox = document.getElementById(
  "Spex_Shoulder_Strap_Guides"
);
let Adapta_Shoulder_Strap_Guidescheckbox = document.getElementById(
  "Adapta_Shoulder_Strap_Guides"
);

let SpexShoulderHarnessesprices = document.querySelector(
  ".SpexShoulderHarnessesprices"
);
let SpexShoulderStrapGuidesprices = document.querySelector(
  ".SpexShoulderStrapGuidesprices"
);

let shoulderharnessessizesel = document.querySelector(".shoulderharnessessize");
let shouldertable = document.querySelector(".shouldervalue1");
let tableheaderCell = document.querySelector(".shoulder-header-width");
//endregion

//region 確定勾選的是哪個肩胸綁帶，且不會重複勾選選項
document
  .querySelectorAll('input[name="car_SpexShoulderHarnesses"]')
  .forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      document
        .querySelectorAll('input[name="car_SpexShoulderHarnesses"]')
        .forEach((otherCheckbox) => {
          if (otherCheckbox !== this) {
            otherCheckbox.checked = false;
          }
        });
      if (SpexChestStrapcheckbox.checked) {
        recodeShoulderHarnessesSelectOptions(
          shoulderharnessessizesel,
          SpexShoulderHarnessesChestStrapSizeOptions
        );
        clearshoulderharnessestablevalue();
      }
      if (SpexHHarnesscheckbox.checked) {
        recodeShoulderHarnessesSelectOptions(
          shoulderharnessessizesel,
          SpexShoulderHarnessesHHarnessSizeOptions
        );
        clearshoulderharnessestablevalue();
      }
      if (SpexRetractorHarnesscheckbox.checked) {
        recodeShoulderHarnessesSelectOptions(
          shoulderharnessessizesel,
          SpexShoulderHarnessesRetractorHarnessSizeOptions
        );
        clearshoulderharnessestablevalue();
      }
      if (SpexVestHarnesscheckbox.checked) {
        recodeShoulderHarnessesSelectOptions(
          shoulderharnessessizesel,
          SpexShoulderHarnessesVestHarnessSizeOptions
        );
        clearshoulderharnessestablevalue();
      }
      if (SpexCentrepointHarnesscheckbox.checked) {
        recodeShoulderHarnessesSelectOptions(
          shoulderharnessessizesel,
          SpexShoulderHarnessesCentrepointHarnessSizeOptions
        );
        clearshoulderharnessestablevalue();
      }
    });
  });
//endregion

//region 如果沒有打勾的選項，就將下拉式選單不顯示
function updateShoulderHarnessesStatus() {
  let anyChecked = Array.from(ShoulderHarnessescheckboxes).some(
    (cb) => cb.checked
  );
  shoulderharnessessizesel.disabled = !anyChecked;
  if (!anyChecked) {
    recodeShoulderHarnessesSelectOptions(
      shoulderharnessessizesel,
      SpexShoulderHarnessesCentrepointHarnessSizeOptions
    );
    clearshoulderharnessestablevalue();
    SpexShoulderHarnessesprices.textContent = "";
  } else if (
    !Spex_Shoulder_Strap_Guidescheckbox.checked &&
    !Adapta_Shoulder_Strap_Guidescheckbox.checked
  ) {
    let nowprice_SpexShoulderHarnesses = Price[20].nextElementSibling;
    nowprice_SpexShoulderHarnesses.textContent = "0 元";
  }
}

// 監聽肩胸綁帶每個checkbox 的事件
ShoulderHarnessescheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", updateShoulderHarnessesStatus);
});

// 初始檢查一次狀態
updateShoulderHarnessesStatus();

//清空下拉式選單的內容並重新填入options
function recodeShoulderHarnessesSelectOptions(selectElement, options) {
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

//region --- 選擇到的尺寸來更換table內數值
shoulderharnessessizesel.addEventListener("change", () => {
  let shouldervalue1 = document.querySelector(".shouldervalue1");
  let shouldervalue2 = document.querySelector(".shouldervalue2");
  let headerWidthCell = document.querySelector(".shoulder-header-width");

  if (SpexChestStrapcheckbox.checked) {
    //根據你選取的選項值 shoulderharnessessizesel.value，去對應出一個數字索引（index）
    // let selectedData = SpexChestStrapData[shoulderharnessessizesel.value];
    let selectedValue = shoulderharnessessizesel.value;
    if (SpexChestStrapData[selectedValue]) {
      shouldervalue1.innerHTML = SpexChestStrapData[selectedValue].width;
      shouldervalue2.textContent = SpexChestStrapData[selectedValue].length;

      // 根據有無寬度內容控制樣式
      if (SpexChestStrapData[selectedValue].width === "&nbsp;") {
        shouldervalue1.innerHTML = "&nbsp;";
        shouldervalue1.classList.add("no-width");
        headerWidthCell.classList.add("no-width");
      } else {
        shouldervalue1.innerText = SpexChestStrapData[selectedValue].width;
        shouldervalue1.classList.remove("no-width");
        headerWidthCell.classList.remove("no-width");
      }
    } else {
      shouldervalue1.innerHTML = "&nbsp;";
      shouldervalue2.innerHTML = "&nbsp;";
      shouldervalue1.classList.remove("no-width");
    }
  }

  if (SpexHHarnesscheckbox.checked) {
    shouldervalue1.classList.remove("no-width");
    headerWidthCell.classList.remove("no-width");

    //根據你選取的選項值 shoulderharnessessizesel.value，去對應出一個數字索引（index）
    let selectedData = SpexHHarnessData[shoulderharnessessizesel.value];

    if (selectedData) {
      shouldervalue1.textContent = selectedData.width;
      shouldervalue2.textContent = selectedData.length;
    }
  }

  if (SpexRetractorHarnesscheckbox.checked) {
    //根據你選取的選項值 shoulderharnessessizesel.value，去對應出一個數字索引（index）
    let selectedData = SpexRetractorHarnessData[shoulderharnessessizesel.value];

    if (selectedData) {
      shouldervalue1.textContent = selectedData.width;
      shouldervalue2.textContent = selectedData.length;
    }
  }

  if (SpexVestHarnesscheckbox.checked) {
    //根據你選取的選項值 shoulderharnessessizesel.value，去對應出一個數字索引（index）
    let selectedData = SpexVestHarnessData[shoulderharnessessizesel.value];

    if (selectedData) {
      shouldervalue1.textContent = selectedData.width;
      shouldervalue2.textContent = selectedData.length;
    }
  }

  if (SpexCentrepointHarnesscheckbox.checked) {
    //根據你選取的選項值 shoulderharnessessizesel.value，去對應出一個數字索引（index）
    let selectedData =
      SpexCentrepointHarnessData[shoulderharnessessizesel.value];

    if (selectedData) {
      shouldervalue1.textContent = selectedData.width;
      shouldervalue2.textContent = selectedData.length;
    }
  }
});

//region 清空表格內容
function clearshoulderharnessestablevalue() {
  let shouldervalue1 = document.querySelector(".shouldervalue1");
  let shouldervalue2 = document.querySelector(".shouldervalue2");
  let headerWidthCell = document.querySelector(".shoulder-header-width");
  shouldervalue1.innerHTML = "&nbsp;";
  shouldervalue2.innerHTML = "&nbsp;";
  shouldervalue1.classList.remove("no-width");
  headerWidthCell.classList.remove("no-width");
  SpexShoulderHarnessesprices.textContent = "";
}
//endregion

//endregion

//region 確定勾選的是哪個肩帶導流器，且不會重複勾選選項
document
  .querySelectorAll('input[name="car_SpexShoulderStrapGuides"]')
  .forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      document
        .querySelectorAll('input[name="car_SpexShoulderStrapGuides"]')
        .forEach((otherCheckbox) => {
          if (otherCheckbox !== this) {
            otherCheckbox.checked = false;
          }
        });
    });
  });
//endregion

//region 全部肩胸綁帶checkbox都檢查
ShoulderHarnessesAllcheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    let anyChecked = Array.from(ShoulderHarnessesAllcheckboxes).some(
      (cb) => cb.checked
    );
    if (!anyChecked) {
      let nowprice_SpexShoulderHarnesses = Price[20].nextElementSibling;
      nowprice_SpexShoulderHarnesses.textContent = "0 元";
    }
  });
});
//endregion

//endregion

/*----- 21.pex綁帶子系統-上下肢綁帶 -----*/
//region

/*---  Spex綁帶子系統-肩胸綁帶 - 圖片箭頭部分  ---*/
//region
document.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let tgimg_21 = event.target;
  let carseat21 = tgimg_21.closest(".Spex_upperlowerlimbstabilisers"); // 找到最近的 Spex_upperlowerlimbstabilisers
  let imgSpexupperlowerlimbstabilisers =
    event.target.dataset.imgSpexupperlowerlimbstabilisers;

  //確認我點擊到的位置是否是 Spex_upperlowerlimbstabilisers
  if (
    carseat21 &&
    carseat21.className.trim() === "Spex_upperlowerlimbstabilisers"
  ) {
    let introdutionid = carseat21.querySelector(
      ".Spexupperlowerlimbstabilisersgroup"
    ); // 在 Spex_upperlowerlimbstabilisers 內部找 Spexupperlowerlimbstabilisers
    let introdution = carseat21.querySelector(".subtitle"); // 在 Spex_upperlowerlimbstabilisers 內部找 subtitle

    if (introdutionid) {
      // 取得 `visibility` 的計算後樣式
      let visibilityValue = window.getComputedStyle(introdutionid).visibility;

      if (
        imgSpexupperlowerlimbstabilisers === "SpexupperlowerlimbstabilisersImg"
      ) {
        if (visibilityValue === "hidden") {
          let Price_Spexupperlowerlimbstabilisers =
            document.querySelectorAll(".pricing");

          Price_Spexupperlowerlimbstabilisers.forEach(function (openIntro) {
            let Spexupperlowerlimbstabilisers =
              Price_Spexupperlowerlimbstabilisers[21];
            //直接判斷是第幾個.Price
            let nowprice_Spexupperlowerlimbstabilisers =
              Price_Spexupperlowerlimbstabilisers[21].nextElementSibling;

            if (
              openIntro.getAttribute(
                "data-price-Spexupperlowerlimbstabilisers"
              ) === "Spexupperlowerlimbstabilisers" &&
              nowprice_Spexupperlowerlimbstabilisers.getAttribute(
                "data-nowprice-Spexupperlowerlimbstabilisers"
              ) === "nowSpexupperlowerlimbstabilisers"
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
                nowprice_Spexupperlowerlimbstabilisers.style.display = "block";
                nowprice_Spexupperlowerlimbstabilisers.style.display = "flex";
                nowprice_Spexupperlowerlimbstabilisers.style.width = "95%";
                nowprice_Spexupperlowerlimbstabilisers.style.height = "90%";
                nowprice_Spexupperlowerlimbstabilisers.style.color = "#000000";
                nowprice_Spexupperlowerlimbstabilisers.style.borderRadius =
                  "8px";
                nowprice_Spexupperlowerlimbstabilisers.style.padding = "1px";
                nowprice_Spexupperlowerlimbstabilisers.style.margin =
                  "3px 3px 3px 2px";
                nowprice_Spexupperlowerlimbstabilisers.style.textAlign =
                  "center";
                nowprice_Spexupperlowerlimbstabilisers.style.fontSize = "16px";
                nowprice_Spexupperlowerlimbstabilisers.style.fontWeight = "600";
                nowprice_Spexupperlowerlimbstabilisers.style.alignItems =
                  "center";
                nowprice_Spexupperlowerlimbstabilisers.style.justifyContent =
                  "center";

                if (window.matchMedia("(max-width: 650px)").matches) {
                  nowprice_Spexupperlowerlimbstabilisers.style.fontSize =
                    "15px";
                  introdutionid.style.width = "calc(100% - 9px)";
                  Spexupperlowerlimbstabilisers.style.padding = "5px";
                  Spexupperlowerlimbstabilisers.style.margin =
                    "3px 0px 3px 1px";
                }
              }
            }
          });
        } else {
          let Price_Spexupperlowerlimbstabilisers =
            document.querySelectorAll(".pricing");

          Price_Spexupperlowerlimbstabilisers.forEach(function (openIntro) {
            let nowprice_Spexupperlowerlimbstabilisers =
              Price_Spexupperlowerlimbstabilisers[21].nextElementSibling;

            //把data-collapse-status改成0
            introdution.setAttribute("data-collapse-status", "0");

            //建議售價標題隱藏
            introdutionid.style.visibility = "hidden";
            introdutionid.style.height = "0";
            introdutionid.style.padding = "0";
            introdutionid.style.border = "0px dashed black";
            introdutionid.style.margin = "0";

            if (
              openIntro.getAttribute(
                "data-price-Spexupperlowerlimbstabilisers"
              ) === "Spexupperlowerlimbstabilisers"
            ) {
              //建議售價金額隱藏
              openIntro.style.display = "none";
            }
            nowprice_Spexupperlowerlimbstabilisers.style.display = "none";
          });
        }
      }
    }
  }
});
// endregion

/*---  Spex綁帶子系統-肩胸綁帶 - subtitle部分  ---*/
//region
let Spex_upperlowerlimbstabilisers = document.querySelector(
  ".Spex_upperlowerlimbstabilisers"
);
Spex_upperlowerlimbstabilisers.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let showinfo = event.target.dataset.showinfo;
  let introdution = event.target;
  //確認我點擊到的位置是否是 Spex_upperlowerlimbstabilisers
  if (showinfo === "Spexupperlowerlimbstabilisers") {
    let introdutionid = event.target.nextElementSibling;
    let Price_Spex_upperlowerlimbstabilisers =
      document.querySelectorAll(".pricing");
    let Spex_upperlowerlimbstabilisersimg =
      Spex_upperlowerlimbstabilisers.querySelector(".target_img"); // 找到最近的 .target_img
    let img = Spex_upperlowerlimbstabilisersimg.querySelector("img");

    Price_Spex_upperlowerlimbstabilisers.forEach(function (openIntro) {
      let Spexupperlowerlimbstabilisers =
        Price_Spex_upperlowerlimbstabilisers[21];
      //直接判斷是第幾個.Price
      let nowprice_Spexupperlowerlimbstabilisers =
        Price_Spex_upperlowerlimbstabilisers[21].nextElementSibling;

      if (
        openIntro.getAttribute("data-price-Spexupperlowerlimbstabilisers") ===
          "Spexupperlowerlimbstabilisers" &&
        nowprice_Spexupperlowerlimbstabilisers.getAttribute(
          "data-nowprice-Spexupperlowerlimbstabilisers"
        ) === "nowSpexupperlowerlimbstabilisers"
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
          nowprice_Spexupperlowerlimbstabilisers.style.display = "block";
          nowprice_Spexupperlowerlimbstabilisers.style.display = "flex";
          nowprice_Spexupperlowerlimbstabilisers.style.width = "95%";
          nowprice_Spexupperlowerlimbstabilisers.style.height = "90%";
          nowprice_Spexupperlowerlimbstabilisers.style.color = "#000000";
          nowprice_Spexupperlowerlimbstabilisers.style.borderRadius = "8px";
          nowprice_Spexupperlowerlimbstabilisers.style.padding = "1px";
          nowprice_Spexupperlowerlimbstabilisers.style.margin =
            "3px 3px 3px 2px";
          nowprice_Spexupperlowerlimbstabilisers.style.textAlign = "center";
          nowprice_Spexupperlowerlimbstabilisers.style.fontSize = "16px";
          nowprice_Spexupperlowerlimbstabilisers.style.fontWeight = "600";
          nowprice_Spexupperlowerlimbstabilisers.style.alignItems = "center";
          nowprice_Spexupperlowerlimbstabilisers.style.justifyContent =
            "center";

          if (img) {
            img.setAttribute("src", "./img/black triangle after.png");
          }

          if (window.matchMedia("(max-width: 650px)").matches) {
            nowprice_Spexupperlowerlimbstabilisers.style.fontSize = "15px";
            introdutionid.style.width = "calc(100% - 9px)";
            Spexupperlowerlimbstabilisers.style.padding = "5px";
            Spexupperlowerlimbstabilisers.style.margin = "3px 0px 3px 1px";
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
          nowprice_Spexupperlowerlimbstabilisers.style.display = "none";

          if (img) {
            img.setAttribute("src", "./img/black triangle.png");
          }
        }
      }
    });
  }
});
//endregion

//region --- 上下肢綁帶選項 ---

//region --- 前臂綁帶 選項 ---
//前臂綁帶尺寸選項
let SpexUpperLimbStabilisersSizeOptions = [
  { value: "option1", text: "請選擇", selected: true },
  { value: "option2", text: "SML" },
  { value: "option3", text: "MED" },
  { value: "option4", text: "LGE" },
];

//前臂綁帶寬度及長度選項
let SpexUpperLimbStabilisersTypeOptions = [
  { value: "option1", text: "請選擇", selected: true },
  { value: "option2", text: "一組四個" },
  { value: "option3", text: "單個" },
];
//endregion

//region --- 快速腳踝固定帶 選項 ---
//快速腳踝固定帶尺寸選項
let SpexLimbStabilisersSizeOptions = [
  { value: "option1", text: "請選擇", selected: true },
  { value: "option2", text: "SML" },
  { value: "option3", text: "MED" },
  { value: "option4", text: "LGE" },
];
//endregion

//endregion

//region --- 宣告所有元素 ---
let SpexUpperLimbStabiliserscheckbox = document.getElementById(
  "Upper_Limb_Stabilisers"
);
let SpexLowerLimbStabiliserscheckbox = document.getElementById(
  "Lower_Limb_Stabilisers"
);

let upperlimbstabiliserssizesel = document.querySelector(
  ".upperlimbstabiliserssize"
);
let upperlimbstabiliserstypesel = document.querySelector(
  ".upperlimbstabiliserstype"
);
let lowerlimbstabiliserssizesel = document.querySelector(
  ".lowerlimbstabiliserssize"
);

let Spexupperlimbstabilisersprices = document.querySelector(
  ".Spexupperlimbstabilisersprices"
);
let Spexlowerlimbstabilisersprices = document.querySelector(
  ".Spexlowerlimbstabilisersprices"
);

upperlimbstabiliserssizesel.disabled = true;
upperlimbstabiliserstypesel.disabled = true;
lowerlimbstabiliserssizesel.disabled = true;
//endregion

//region --- 如果前臂綁帶沒有勾就不能做選擇 ---
SpexUpperLimbStabiliserscheckbox.addEventListener("change", () => {
  if (SpexUpperLimbStabiliserscheckbox.checked) {
    upperlimbstabiliserssizesel.disabled = false;
    upperlimbstabiliserstypesel.disabled = false;
  } else {
    upperlimbstabiliserssizesel.disabled = true;
    upperlimbstabiliserstypesel.disabled = true;
    Spexupperlimbstabilisersprices.textContent = "";

    let nowprice_Spexupperlowerlimbstabilisers = Price[21].nextElementSibling;
    if (SpexLowerLimbStabiliserscheckbox.checked) {
      nowprice_Spexupperlowerlimbstabilisers.textContent = `${formatPrice(
        Spexlowerlimbstabilisersprices.textContent
      )} 元`;
    } else {
      nowprice_Spexupperlowerlimbstabilisers.textContent = "0 元";
    }

    recodeUpperLowerLimbStabilisersSelectOptions(
      upperlimbstabiliserssizesel,
      SpexUpperLimbStabilisersSizeOptions
    );
    recodeUpperLowerLimbStabilisersSelectOptions(
      upperlimbstabiliserstypesel,
      SpexUpperLimbStabilisersTypeOptions
    );
  }
});
//endregion

//region --- 如果快速腳踝固定帶沒有勾就不能做選擇 ---
SpexLowerLimbStabiliserscheckbox.addEventListener("change", () => {
  if (SpexLowerLimbStabiliserscheckbox.checked) {
    lowerlimbstabiliserssizesel.disabled = false;
  } else {
    lowerlimbstabiliserssizesel.disabled = true;

    let nowprice_Spexupperlowerlimbstabilisers = Price[21].nextElementSibling;
    if (SpexUpperLimbStabiliserscheckbox.checked) {
      nowprice_Spexupperlowerlimbstabilisers.textContent = `${formatPrice(
        Spexupperlimbstabilisersprices.textContent
      )} 元`;
    } else {
      nowprice_Spexupperlowerlimbstabilisers.textContent = "0 元";
    }

    Spexlowerlimbstabilisersprices.textContent = "";
    recodeUpperLowerLimbStabilisersSelectOptions(
      lowerlimbstabiliserssizesel,
      SpexLimbStabilisersSizeOptions
    );
  }
});
//endregion

//region 清空下拉式選單的內容並重新填入options
function recodeUpperLowerLimbStabilisersSelectOptions(selectElement, options) {
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

//endregion
