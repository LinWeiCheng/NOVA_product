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
      let selectedCheckbox = event.target;
      console.log(nowprice_color);
      
      if (selectedCheckbox.id === "checkbox_red") {
        nowprice_color.textContent = "40000元";
      }
    });
  });
});
