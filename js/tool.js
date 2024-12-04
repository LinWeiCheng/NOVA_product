let Car_color_checkboxes = document.querySelectorAll(
  'input[type="checkbox"][name="car_color"]'
);
let Price_carcolor = document.querySelectorAll(".pricing");
Price_carcolor.forEach(function (openIntro) {
  let nowprice_color = Price_carcolor[0].nextElementSibling;

  Car_color_checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      // 如果選中了當前checkbox，就取消其他checkbox的選中狀態
      if (event.target.checked) {
        Car_color_checkboxes.forEach((otherCheckbox) => {
          if (otherCheckbox !== event.target) {
            otherCheckbox.checked = false;
          }
        });
      }
      // let selectedCheckbox = event.target;
      // // 更新顯示的價格
      // if (selectedCheckbox.id === "checkbox_red") {
      //   nowprice_color.textContent = "40000元";
      // } else if (selectedCheckbox.id === "checkbox_org") {
      //   nowprice_color.textContent = "40000元";
      // } else if (selectedCheckbox.id === "checkbox_gold") {
      //   nowprice_color.textContent = "40000元";
      // } else if (selectedCheckbox.id === "checkbox_blue") {
      //   nowprice_color.textContent = "40000元";
      // } else if (selectedCheckbox.id === "checkbox_gray") {
      //   nowprice_color.textContent = "40000元";
      // } else {
      //   nowprice_color.textContent = "";
      // }
      // if (event.target.checked === false) {
      //   nowprice_color.textContent = "";
      // }
    });
  });
});

let Car_BaseSize_checkboxes = document.querySelectorAll(
  'input[type="checkbox"][name="car_basesize"]'
);
Price_carcolor.forEach(function (openIntro) {
  let nowprice_color = Price_carcolor[1].nextElementSibling;

  Car_BaseSize_checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      // 如果選中了當前checkbox，就取消其他checkbox的選中狀態
      if (event.target.checked) {
        Car_BaseSize_checkboxes.forEach((otherCheckbox) => {
          if (otherCheckbox !== event.target) {
            otherCheckbox.checked = false;
          }
        });
      }
      let selectedCheckbox = event.target;
      // 更新顯示的價格
      if (selectedCheckbox.id === "SWC30") {
        nowprice_color.textContent = "40000元";
      } else if (selectedCheckbox.id === "SWC32") {
        nowprice_color.textContent = "40000元";
      } else if (selectedCheckbox.id === "SWC34") {
        nowprice_color.textContent = "40000元";
      } else if (selectedCheckbox.id === "SWC36") {
        nowprice_color.textContent = "40000元";
      } else if (selectedCheckbox.id === "SWC38") {
        nowprice_color.textContent = "40000元";
      } else if (selectedCheckbox.id === "SWC40") {
        nowprice_color.textContent = "40000元";
      } else if (selectedCheckbox.id === "SWC42") {
        nowprice_color.textContent = "40000元";
      } else {
        nowprice_color.textContent = "";
      }
      if (event.target.checked === false) {
        nowprice_color.textContent = "";
      }
    });
  });
});
