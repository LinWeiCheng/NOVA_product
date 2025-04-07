/*-----  11.Spex底座子系統-座墊點擊列  -----*/
//region
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

      //確認是選擇"Vigour_Std 標準型座墊"
      if (this.dataset.item === "Vigour_Std 標準型座墊") {
        //確認有勾選坐墊後開啟
        CushionwidthSelect.disabled = false;
        CushionSizeSelect(CushionwidthSelect, Vigour_StdwidthOptions);
        CushionSizeSelect(CushionheightSelect, Vigour_StdheightOptions);
      }

      //確認是選擇"Vigour_High 加深型座墊"
      if (this.dataset.item === "Vigour_High 加深型座墊") {
        //確認有勾選坐墊後開啟
        CushionwidthSelect.disabled = false;
        CushionSizeSelect(CushionwidthSelect, Vigour_HighwidthOptions);
        CushionSizeSelect(CushionheightSelect, Vigour_HighheightOptions);
      }

      //確認是選擇"Vigour_High 加深型座墊"
      if (this.dataset.item === "Spex_Standard 標準廓型座墊") {
        //確認有勾選坐墊後開啟
        CushionwidthSelect.disabled = false;
        CushionSizeSelect(CushionwidthSelect, Spex_StandardwidthOptions);
        CushionSizeSelect(CushionheightSelect, Spex_StandardheightOptions);
      }

      //確認是選擇"Spex_High 加深廓型座墊"
      if (this.dataset.item === "Spex_High 加深廓型座墊") {
        //確認有勾選坐墊後開啟
        CushionwidthSelect.disabled = false;
        CushionSizeSelect(CushionwidthSelect, Spex_HighwidthOptions);
        CushionSizeSelect(CushionheightSelect, Spex_HighheightOptions);
      }

      //確認是選擇"Spex_SuperHigh 超加深廓型座墊"
      if (this.dataset.item === "Spex_SuperHigh 超加深廓型座墊") {
        //確認有勾選坐墊後開啟
        CushionwidthSelect.disabled = false;
        CushionSizeSelect(CushionwidthSelect, Spex_SuperHighwidthOptions);
        CushionSizeSelect(CushionheightSelect, Spex_SuperHighheightOptions);
      }

      //確認是選擇"Spex_Flex 標準型座墊"
      if (this.dataset.item === "Spex_Flex 標準型座墊") {
        //確認有勾選坐墊後開啟
        CushionwidthSelect.disabled = false;
        CushionSizeSelect(CushionwidthSelect, Spex_FlexwidthOptions);
        CushionSizeSelect(CushionheightSelect, Spex_FlexheightOptions);
      }

      //確認是選擇"Spex_Flex 加深型座墊"
      if (this.dataset.item === "Spex_Flex 加深型座墊") {
        //確認有勾選坐墊後開啟
        CushionwidthSelect.disabled = false;
        CushionSizeSelect(CushionwidthSelect, Spex_FlexwidthOptions);
        CushionSizeSelect(CushionheightSelect, Spex_FlexheightOptions);
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
      } else if (CushionheightSelect.disabled === false) {
        CushionheightSelect.disabled = true;
      }
    });
  });

document.addEventListener("DOMContentLoaded", function () {
  let CushionwidthSelect = document.querySelector(".Spexcushion_Width");
  let CushionheightSelect = document.querySelector(".Spexcushion_Heigh");

  //剛開啟時讓widthSelect無法選擇
  CushionwidthSelect.disabled = true;

  // 預設讓 heightSelect 無法選擇
  CushionheightSelect.disabled = true;

  CushionwidthSelect.addEventListener("change", function () {
    if (CushionwidthSelect.value) {
      CushionheightSelect.disabled = false; // 當有選擇時，解鎖heightSelect
    } else {
      CushionheightSelect.disabled = true; // 當未選擇時，鎖住heightSelect
    }

    // 找到 checkbox
    let VigourStdCheckbox = document.querySelector("#Spex_Vigour_std");
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
