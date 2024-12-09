/*----- 1.車體顏色點擊列  -----*/
let Car_color_checkboxes = document.querySelectorAll(
  'input[type="checkbox"][name="car_color"]'
);

let Price = document.querySelectorAll(".pricing");

Price.forEach(function (openIntro) {
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
    });
  });
});

/*----- 2.座板尺寸點擊列  -----*/
let Car_Basewidth_checkboxes = document.querySelectorAll(
  'input[type="checkbox"][name="car_basewidth"]'
);
let Car_Basedeep_checkboxes = document.querySelectorAll(
  'input[type="checkbox"][name="car_basedeep"]'
);

Price.forEach(function (openIntro) {
  let nowprice_size = Price[1].nextElementSibling;

  Car_Basewidth_checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      // 如果選中了當前checkbox，就取消其他checkbox的選中狀態
      if (event.target.checked) {
        Car_Basewidth_checkboxes.forEach((otherCheckbox) => {
          if (otherCheckbox !== event.target) {
            otherCheckbox.checked = false;
          }
        });
      }
    });
  });

  Car_Basedeep_checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      // 如果選中了當前checkbox，就取消其他checkbox的選中狀態
      if (event.target.checked) {
        Car_Basedeep_checkboxes.forEach((otherCheckbox) => {
          if (otherCheckbox !== event.target) {
            otherCheckbox.checked = false;
          }
        });
      }
    });
  });

  function checkBothLines() {
    //Array.some()：用來檢查某一行是否至少有一個 checkbox 被勾選。
    let Basewidth = Array.from(Car_Basewidth_checkboxes).some(
      (cb) => cb.checked
    );
    let Basedeep = Array.from(Car_Basedeep_checkboxes).some((cb) => cb.checked);

    if (Basewidth && Basedeep) {
      nowprice_size.textContent = "40,000元";
    } else {
      nowprice_size.textContent = ""; // 清空文字
    }
  }

  Car_Basewidth_checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", checkBothLines);
  });
  Car_Basedeep_checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", checkBothLines);
  });
});

/*----- 3.腳架點擊列  -----*/
let Car_tripod_checkboxes = document.querySelectorAll(
  'input[type="checkbox"][name="car_tripod"]'
);

Price.forEach(function (openIntro) {
  let nowprice_tripod = Price[2].nextElementSibling;

  Car_tripod_checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      // 如果選中了當前checkbox，就取消其他checkbox的選中狀態
      if (event.target.checked) {
        Car_tripod_checkboxes.forEach((otherCheckbox) => {
          if (otherCheckbox !== event.target) {
            otherCheckbox.checked = false;
          }
        });
        if (event.target.id === "checkbox_77degrees") {
          nowprice_tripod.textContent = "1,200元";
        } else if (event.target.id === "checkbox_80degrees") {
          nowprice_tripod.textContent = "1,800元";
        } else if (event.target.id === "checkbox_90degrees") {
          nowprice_tripod.textContent = "1,800元";
        }
      }
      if (!event.target.checked) {
        nowprice_tripod.textContent = "";
      }
    });
  });
});

/*----- 4.踏板樣式點擊列  -----*/

let Car_footpedal_name_checkboxes = document.querySelectorAll(
  'input[type="checkbox"][name="car_footpedal"]'
);

let Car_footpedal_class_checkboxes = document.querySelectorAll(
  'input[type="checkbox"][class="footpedal_twopiecechk"]'
);

let footpedal_twopieceDiv = document.querySelector(".footpedal_twopiece");
let footpedal_piecealuminumDiv = document.querySelector(
  ".footpedal_piecealuminum"
);
let footpedal_footpedal_PluginDiv = document.querySelector(".footpedal_Plugin");
let footpedal_plumbDiv = document.querySelector(".footpedal_plumb");

Price.forEach(function (openIntro) {
  let nowprice_footpedal = Price[3].nextElementSibling;

  Car_footpedal_class_checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      // 如果選中了當前checkbox，就取消其他checkbox的選中狀態
      if (event.target.checked) {
        Car_footpedal_class_checkboxes.forEach((otherCheckbox) => {
          if (otherCheckbox !== event.target) {
            otherCheckbox.checked = false;
          }
          
          let previousElement = event.target.previousElementSibling; // 找到上一個節點
          
            if (event.target.id === "checkbox_twopiece_fixed") {
              nowprice_footpedal.textContent = "900元";
            } else if (event.target.id === "checkbox_twopiece_adjustable") {
              nowprice_footpedal.textContent = "1,000元";
            }
            footpedal_piecealuminumDiv.style.display = "none";
            footpedal_piecealuminumDiv.style.height = "auto"; // 縮小黑邊
            footpedal_footpedal_PluginDiv.style.display = "none";
            footpedal_footpedal_PluginDiv.style.height = "auto"; // 縮小黑邊
            footpedal_plumbDiv.style.display = "none";
            footpedal_plumbDiv.style.height = "auto"; // 縮小黑邊
        });
      }
      if (!event.target.checked) {
        //一片式鋁踏板
        addfootpedal_piecealuminum(footpedal_piecealuminumDiv);
        //外掛式腳踏組
        addfootpedal_footpedal_Plugin(footpedal_footpedal_PluginDiv);
        //垂直調整腳踏組
        addfootpedal_plumb(footpedal_plumbDiv);
        nowprice_footpedal.textContent = "";
      }
    });
  });
});

//兩片式塑踏板
function addfootpedal_twopiece(footpedal_twopiece) {
  footpedal_twopiece.style.display = "flex";
  footpedal_twopiece.style.flexDirection = "row";
  footpedal_twopiece.style.alignItems = "center";
  footpedal_twopiece.style.fontSize = "18px";
  footpedal_twopiece.style.fontWeight = "600";
  footpedal_twopiece.style.height = "auto";
  footpedal_twopiece.style.margin = "2px 0 1px 0";
  footpedal_twopiece.style.padding = "2px";
}

//一片式鋁踏板
function addfootpedal_piecealuminum(footpedal_piecealuminumDiv) {
  footpedal_piecealuminumDiv.style.display = "flex";
  footpedal_piecealuminumDiv.style.flexDirection = "row";
  footpedal_piecealuminumDiv.style.alignItems = "center";
  footpedal_piecealuminumDiv.style.fontSize = "18px";
  footpedal_piecealuminumDiv.style.fontWeight = "600";
  footpedal_piecealuminumDiv.style.height = "auto";
  footpedal_piecealuminumDiv.style.margin = "0 0 1px 0";
  footpedal_piecealuminumDiv.style.padding = "2px";
}

//外掛式腳踏組
function addfootpedal_footpedal_Plugin(footpedal_footpedal_PluginDiv) {
  footpedal_footpedal_PluginDiv.style.display = "flex";
  footpedal_footpedal_PluginDiv.style.flexDirection = "row";
  footpedal_footpedal_PluginDiv.style.alignItems = "center";
  footpedal_footpedal_PluginDiv.style.fontSize = "18px";
  footpedal_footpedal_PluginDiv.style.fontWeight = "600";
  footpedal_footpedal_PluginDiv.style.height = "auto";
  footpedal_footpedal_PluginDiv.style.margin = "0 0 1px 0";
  footpedal_footpedal_PluginDiv.style.padding = "2px";
}

//垂直調整腳踏組
function addfootpedal_plumb(footpedal_plumb) {
  footpedal_plumb.style.display = "flex";
  footpedal_plumb.style.flexDirection = "row";
  footpedal_plumb.style.alignItems = "center";
  footpedal_plumb.style.fontSize = "18px";
  footpedal_plumb.style.fontWeight = "600";
  footpedal_plumb.style.height = "auto";
  footpedal_plumb.style.margin = "0 0 1px 0";
  footpedal_plumb.style.padding = "2px";
}

// Price.forEach(function (openIntro) {
//   let nowprice_footpedal = Price[3].nextElementSibling;

//   Car_footpedal_checkboxes.forEach((checkbox) => {
//     checkbox.addEventListener("change", (event) => {
//       // 如果選中了當前checkbox，就取消其他checkbox的選中狀態
//       if (event.target.checked) {
//         Car_footpedal_checkboxes.forEach((otherCheckbox) => {
//           if (otherCheckbox !== event.target) {
//             otherCheckbox.checked = false;
//           }
//         });
//       }
//     });
//   });
// });
