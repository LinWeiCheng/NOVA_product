//觸及到時把車體顏色的位置顯現跟關閉
let triggerCARcolor = document.querySelector(".car-order");
let hiddenCARcolor = document.querySelector(".car_color");

// 點擊事件
// triggerCARcolor.addEventListener("click", () => {
//   hiddenDiv.classList.toggle('hidden');  // 切換隱藏類別
// });

//可選的觸摸事件（適用於觸控設備）
// triggerDiv.addEventListener("touchstart", () => {
//   hiddenDiv.style.display = none;
// });

//座寬尺寸黑格子
let SW_container = document.querySelector(".width_number");

let SWCount = 30;

// 生成 6 個新的 div，每個都有唯一的 class 名稱
for (let i = 0; i < 8; i++) {
  let divSW_Size = document.createElement("div");

  divSW_Size.textContent = `${SWCount} `;
  divSW_Size.classList.add(`generated_SWdiv`);
  SWCount += 2;

  SW_container.appendChild(divSW_Size);
}

//座寬的勾選格
let SWC_container = document.querySelector(".width_chkblock");
let SWCCount = 30;

for (let i = 0; i < 8; i++) {
  let divSW_Check = document.createElement("input");

  divSW_Check.type = "checkbox";
  divSW_Check.id = `SWC${SWCCount}`;
  divSW_Check.classList.add(`SWC_checkbox`);
  SWCCount += 2;

  SWC_container.appendChild(divSW_Check);
}
