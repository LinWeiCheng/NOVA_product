// region --- 格式化為帶逗號的數字 ---
function formatPrice(prices) {
  return new Intl.NumberFormat("en-US").format(prices);
}
//endregion

let color_car_switch = false;
let productImage = document.getElementById("ProductImage");
let Price = document.querySelectorAll(".pricing");

/*-----  1.車體顏色點擊列  -----*/
//region
let Car_color_checkboxes = document.querySelectorAll(
  'input[type="checkbox"][name="car_color"]'
);
let Car_checkbox_red = document.querySelectorAll(
  'input[type="checkbox"][id="checkbox_red"]'
);
let Car_checkbox_org = document.querySelectorAll(
  'input[type="checkbox"][id="checkbox_org"]'
);
let Car_checkbox_gold = document.querySelectorAll(
  'input[type="checkbox"][id="checkbox_gold"]'
);
let Car_checkbox_blue = document.querySelectorAll(
  'input[type="checkbox"][id="checkbox_blue"]'
);
let Car_checkbox_gray = document.querySelectorAll(
  'input[type="checkbox"][id="checkbox_gray"]'
);

Price.forEach(function (openIntro) {
  Car_color_checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      if (event.target.checked && color_car_switch === false) {
        color_car_switch = true;
        // 取消其他 checkbox 的勾選
        Car_color_checkboxes.forEach((otherCheckbox) => {
          if (otherCheckbox !== event.target) {
            otherCheckbox.checked = false;
          }
        });

        if (event.target.id === "checkbox_red") {
          productImage.src = "./img/Novarc_car_red.png";
        } else if (event.target.id === "checkbox_org") {
          productImage.src = "./img/Novarc_car_org.png";
        } else if (event.target.id === "checkbox_gold") {
          productImage.src = "./img/Novarc_car_gold.png";
        } else if (event.target.id === "checkbox_blue") {
          productImage.src = "./img/Novarc_car_blue.png";
        } else if (event.target.id === "checkbox_gray") {
          productImage.src = "./img/Novarc_car_gray.png";
        } else if (!event.target.checked) {
          productImage.src = "./img/Novarc_standrad.png";
        }
      } else if (color_car_switch === true) {
        Car_color_checkboxes.forEach((otherCheckbox) => {
          if (otherCheckbox !== event.target) {
            otherCheckbox.checked = false;
          }
          color_car_switch = false;
        });

        Car_color_checkboxes.forEach((checkbox) => {
          let nowprice_size = Price[1].nextElementSibling;
          if (checkbox.checked) {
            if (checkbox.id === "checkbox_red") {
              nowprice_size.textContent = "35,000元";
            } else if (checkbox.id === "checkbox_org") {
              nowprice_size.textContent = "35,000元";
            } else if (checkbox.id === "checkbox_gold") {
              nowprice_size.textContent = "35,000元";
            } else if (checkbox.id === "checkbox_blue") {
              nowprice_size.textContent = "35,000元";
            } else if (checkbox.id === "checkbox_gray") {
              nowprice_size.textContent = "36,500元";
            }
          } else {
            let isAnyChecked = Array.from(Car_color_checkboxes).some(
              (checkbox) => checkbox.checked
            );

            if (!isAnyChecked) {
              // 如果沒有任何 checkbox 被勾選，恢復默認圖片
              nowprice_size.textContent = "0元";
            }
          }
        });
      } else {
        // 檢查是否所有 checkbox 都未選中
        let isAnyChecked = Array.from(Car_color_checkboxes).some(
          (checkbox) => checkbox.checked
        );

        if (!isAnyChecked) {
          // 如果沒有任何 checkbox 被勾選，恢復默認圖片
          productImage.src = "./img/Novarc_standrad.png";
        }
      }
    });
  });
});
//endregion

/*-----  2.座板尺寸點擊列  -----*/
//region
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
      Car_color_checkboxes.forEach((checkbox) => {
        let nowprice_size = Price[1].nextElementSibling;
        if (checkbox.checked) {
          if (checkbox.id === "checkbox_red") {
            nowprice_size.textContent = "35,000元";
          } else if (checkbox.id === "checkbox_org") {
            nowprice_size.textContent = "35,000元";
          } else if (checkbox.id === "checkbox_gold") {
            nowprice_size.textContent = "35,000元";
          } else if (checkbox.id === "checkbox_blue") {
            nowprice_size.textContent = "35,000元";
          } else if (checkbox.id === "checkbox_gray") {
            nowprice_size.textContent = "36,500元";
          }
        }
      });
    } else {
      //nowprice_size.textContent = "0元"; // 清空文字
    }
  }

  Car_Basewidth_checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", checkBothLines);
  });
  Car_Basedeep_checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", checkBothLines);
  });
});
//endregion

/*-----  3.腳架點擊列  -----*/
//region
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
          nowprice_tripod.textContent = "1,400元";
          productImage.src = "./img/77pedal.png";
        } else if (event.target.id === "checkbox_80degrees") {
          nowprice_tripod.textContent = "1,800元";
        } else if (event.target.id === "checkbox_90degrees") {
          nowprice_tripod.textContent = "1,800元";
        }
      }
      if (!event.target.checked) {
        nowprice_tripod.textContent = "0元";
        productImage.src = "./img/Novarc_standrad.png";
      }
    });
  });
});
//endregion

/*-----  4.踏板樣式點擊列  -----*/
//region
let Car_footpedal_twopiece_class_checkboxes = document.querySelectorAll(
  'input[type="checkbox"][name="footpedal_twopiecechk"]'
);

let Car_footpedal_onepiece_aluminumpedal_class_checkboxes =
  document.querySelectorAll(
    'input[type="checkbox"][name="footpedal_onepiece_aluminumpedalchk"]'
  );

let Car_footpedal_Plugin_class_checkboxes = document.querySelectorAll(
  'input[type="checkbox"][name="footpedal_Pluginchk"]'
);

let Car_footpedal_vertical_class_checkboxes = document.querySelectorAll(
  'input[type="checkbox"][name="footpedal_verticalchk"]'
);

let footpedal_twopieceDiv = document.querySelector(".footpedal_twopiece");
let footpedal_piecealuminumDiv = document.querySelector(
  ".footpedal_piecealuminum"
);
let footpedal_footpedal_PluginDiv = document.querySelector(".footpedal_Plugin");
let footpedal_plumbDiv = document.querySelector(".footpedal_plumb");

let footpedal_Plugin9_Left = document.getElementById("checkbox_Plugin9_left");
let footpedal_Plugin9_Right = document.getElementById("checkbox_Plugin9_right");
let footpedal_Plugin11_Left = document.getElementById("checkbox_Plugin11_left");
let footpedal_Plugin11_Right = document.getElementById(
  "checkbox_Plugin11_right"
);
let footpedal_Plugin14_Left = document.getElementById("checkbox_Plugin14_left");
let footpedal_Plugin14_Right = document.getElementById(
  "checkbox_Plugin14_right"
);

let footpedal_vertical9_Left = document.getElementById(
  "checkbox_vertical9_left"
);
let footpedal_vertical9_Right = document.getElementById(
  "checkbox_vertical9_right"
);
let footpedal_vertical11_Left = document.getElementById(
  "checkbox_vertical11_left"
);
let footpedal_vertical11_Right = document.getElementById(
  "checkbox_vertical11_right"
);
let footpedal_vertical14_Left = document.getElementById(
  "checkbox_vertical14_left"
);
let footpedal_vertical14_Right = document.getElementById(
  "checkbox_vertical14_right"
);

Price.forEach(function (openIntro) {
  let nowprice_footpedal = Price[3].nextElementSibling;

  //兩片式塑踏板勾選
  Car_footpedal_twopiece_class_checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      if (event.target.name === "footpedal_twopiecechk") {
        // 如果選中了當前checkbox，就取消其他checkbox的選中狀態
        if (event.target.checked) {
          Car_footpedal_twopiece_class_checkboxes.forEach((otherCheckbox) => {
            if (otherCheckbox !== event.target) {
              otherCheckbox.checked = false;
            }
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
          nowprice_footpedal.textContent = "0元";
        }
      }
    });
  });

  //一片式鋁踏板勾選
  Car_footpedal_onepiece_aluminumpedal_class_checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      if (event.target.name === "footpedal_onepiece_aluminumpedalchk") {
        // 如果選中了當前checkbox，就取消其他checkbox的選中狀態
        if (event.target.checked) {
          Car_footpedal_onepiece_aluminumpedal_class_checkboxes.forEach(
            (otherCheckbox) => {
              if (otherCheckbox !== event.target) {
                otherCheckbox.checked = false;
              }
              if (event.target.id === "checkbox_onepiece32_aluminumpedal") {
                nowprice_footpedal.textContent = "1,300元";
              } else if (
                event.target.id === "checkbox_onepiece34_aluminumpedal"
              ) {
                nowprice_footpedal.textContent = "1,300元";
              } else if (
                event.target.id === "checkbox_onepiece36_aluminumpedal"
              ) {
                nowprice_footpedal.textContent = "1,300元";
              } else if (
                event.target.id === "checkbox_onepiece38_aluminumpedal"
              ) {
                nowprice_footpedal.textContent = "1,300元";
              } else if (
                event.target.id === "checkbox_onepiece40_aluminumpedal"
              ) {
                nowprice_footpedal.textContent = "1,400元";
              } else if (
                event.target.id === "checkbox_onepiece42_aluminumpedal"
              ) {
                nowprice_footpedal.textContent = "1,400元";
              } else if (
                event.target.id === "checkbox_onepiece44_aluminumpedal"
              ) {
                nowprice_footpedal.textContent = "1,400元";
              }
              footpedal_twopieceDiv.style.display = "none";
              footpedal_twopieceDiv.style.height = "auto"; // 縮小黑邊
              footpedal_footpedal_PluginDiv.style.display = "none";
              footpedal_footpedal_PluginDiv.style.height = "auto"; // 縮小黑邊
              footpedal_plumbDiv.style.display = "none";
              footpedal_plumbDiv.style.height = "auto"; // 縮小黑邊
              nowprice_footpedal.style.padding = "60px 0px 0px 0px";
              nowprice_footpedal.style.margin = "18px 3px 3px 4px";
            }
          );
        }
        if (!event.target.checked) {
          //兩片式塑踏板
          addfootpedal_twopiece(footpedal_twopieceDiv);
          //外掛式腳踏組
          addfootpedal_footpedal_Plugin(footpedal_footpedal_PluginDiv);
          //垂直調整腳踏組
          addfootpedal_plumb(footpedal_plumbDiv);
          nowprice_footpedal.textContent = "0元";
        }
      }
    });
  });

  //外掛式腳踏組勾選
  Car_footpedal_Plugin_class_checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      if (event.target.name === "footpedal_Pluginchk") {
        // 如果選中了當前checkbox，就取消其他checkbox的選中狀態
        if (event.target.checked) {
          Car_footpedal_Plugin_class_checkboxes.forEach((otherCheckbox) => {
            if (otherCheckbox !== event.target) {
              otherCheckbox.checked = false;
            }
            if (event.target.id === "checkbox_Plugin9_left") {
              nowprice_footpedal.textContent = "1,800元";
              footpedal_Plugin9_Right.checked = event.target.checked;
            } else if (event.target.id === "checkbox_Plugin9_right") {
              nowprice_footpedal.textContent = "1,800元";
              footpedal_Plugin9_Left.checked = event.target.checked;
            } else if (event.target.id === "checkbox_Plugin11_left") {
              nowprice_footpedal.textContent = "1,800元";
              footpedal_Plugin11_Right.checked = event.target.checked;
            } else if (event.target.id === "checkbox_Plugin11_right") {
              nowprice_footpedal.textContent = "1,800元";
              footpedal_Plugin11_Left.checked = event.target.checked;
            } else if (event.target.id === "checkbox_Plugin14_left") {
              nowprice_footpedal.textContent = "1,800元";
              footpedal_Plugin14_Right.checked = event.target.checked;
            } else if (event.target.id === "checkbox_Plugin14_right") {
              nowprice_footpedal.textContent = "1,800元";
              footpedal_Plugin14_Left.checked = event.target.checked;
            }
            footpedal_twopieceDiv.style.display = "none";
            footpedal_twopieceDiv.style.height = "auto"; // 縮小黑邊
            footpedal_piecealuminumDiv.style.display = "none";
            footpedal_piecealuminumDiv.style.height = "auto"; // 縮小黑邊
            footpedal_plumbDiv.style.display = "none";
            footpedal_plumbDiv.style.height = "auto"; // 縮小黑邊
            nowprice_footpedal.style.padding = "43px 0px 0px 0px";
            nowprice_footpedal.style.margin = "18px 3px 3px 4px";
          });
        }
        if (!event.target.checked) {
          //兩片式塑踏板
          addfootpedal_twopiece(footpedal_twopieceDiv);
          //一片式鋁踏板
          addfootpedal_piecealuminum(footpedal_piecealuminumDiv);
          //垂直調整腳踏組
          addfootpedal_plumb(footpedal_plumbDiv);
          nowprice_footpedal.textContent = "0元";
          Car_footpedal_Plugin_class_checkboxes.forEach((otherCheckbox) => {
            otherCheckbox.checked = false;
          });
        }
      }
    });
  });

  //垂直調整腳踏組勾選
  Car_footpedal_vertical_class_checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      if (event.target.name === "footpedal_verticalchk") {
        // 如果選中了當前checkbox，就取消其他checkbox的選中狀態
        if (event.target.checked) {
          Car_footpedal_vertical_class_checkboxes.forEach((otherCheckbox) => {
            if (otherCheckbox !== event.target) {
              otherCheckbox.checked = false;
            }
            if (event.target.id === "checkbox_vertical9_left") {
              nowprice_footpedal.textContent = "3,000元";
              footpedal_vertical9_Right.checked = event.target.checked;
            } else if (event.target.id === "checkbox_vertical9_right") {
              nowprice_footpedal.textContent = "3,000元";
              footpedal_vertical9_Left.checked = event.target.checked;
            } else if (event.target.id === "checkbox_vertical11_left") {
              nowprice_footpedal.textContent = "3,000元";
              footpedal_vertical11_Right.checked = event.target.checked;
            } else if (event.target.id === "checkbox_vertical11_right") {
              nowprice_footpedal.textContent = "3,000元";
              footpedal_vertical11_Left.checked = event.target.checked;
            } else if (event.target.id === "checkbox_vertical14_left") {
              nowprice_footpedal.textContent = "3,000元";
              footpedal_vertical14_Right.checked = event.target.checked;
            } else if (event.target.id === "checkbox_vertical14_right") {
              nowprice_footpedal.textContent = "3,000元";
              footpedal_vertical14_Left.checked = event.target.checked;
            }
            footpedal_twopieceDiv.style.display = "none";
            footpedal_twopieceDiv.style.height = "auto"; // 縮小黑邊
            footpedal_piecealuminumDiv.style.display = "none";
            footpedal_piecealuminumDiv.style.height = "auto"; // 縮小黑邊
            footpedal_footpedal_PluginDiv.style.display = "none";
            footpedal_footpedal_PluginDiv.style.height = "auto"; // 縮小黑邊
            nowprice_footpedal.style.padding = "43px 0px 0px 0px";
            nowprice_footpedal.style.margin = "18px 3px 3px 4px";
          });
        }
        if (!event.target.checked) {
          //兩片式塑踏板
          addfootpedal_twopiece(footpedal_twopieceDiv);
          //一片式鋁踏板
          addfootpedal_piecealuminum(footpedal_piecealuminumDiv);
          //外掛式腳踏組
          addfootpedal_footpedal_Plugin(footpedal_footpedal_PluginDiv);
          nowprice_footpedal.textContent = "0元";
          Car_footpedal_vertical_class_checkboxes.forEach((otherCheckbox) => {
            otherCheckbox.checked = false;
          });
        }
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
//endregion

/*-----  5.頭靠點擊列  -----*/
//region
let Car_head_supports_checkboxes = document.querySelectorAll(
  'input[type="checkbox"][name="car_head_supports"]'
);

Price.forEach(function (openIntro) {
  let nowprice_carheadsupports = Price[4].nextElementSibling;

  Car_head_supports_checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      // 如果選中了當前checkbox，就取消其他checkbox的選中狀態
      if (event.target.checked) {
        Car_head_supports_checkboxes.forEach((otherCheckbox) => {
          if (otherCheckbox !== event.target) {
            otherCheckbox.checked = false;
          }
        });
        if (event.target.id === "checkbox_headsupports_Nova") {
          nowprice_carheadsupports.textContent = "3,500元";
          productImage.src = "./img/Headrest.png";
        }
      }
      if (!event.target.checked) {
        nowprice_carheadsupports.textContent = "0元";
        productImage.src = "./img/Novarc_standrad.png";
      }
    });
  });
});
//endregion

/*-----  6.軀幹點擊列-背靠  -----*/
//#region
let Car_side_supports_checkboxes = document.querySelectorAll(
  'input[type="checkbox"][name="car_back_supports"]'
);

let back_supports_prices = {
  back_prices1: 3500,
  back_prices2: 3500,
  back_prices3: 3500,
  back_prices4: 3500,
  back_prices5: 3500,
  back_prices6: 3500,
  back_prices7: 3500,
  hardware_prices8: 2800, // 第 8 個 checkbox 的價格
};

// 更新價格的函式
function update_back_supportsPrice(event) {
  let nowprice_backsupports = Price[5].nextElementSibling;
  let totalPrice = 0; // 重置價格
  let target = event.target; // 取得觸發事件的 checkbox

  if (target.id !== "hardware_prices8") {
    // 如果勾選的是 1 到 7 的 checkbox
    if (target.checked) {
      // 取消其他 1 到 7 checkbox 的勾選，但不影響第 8 個
      Car_side_supports_checkboxes.forEach((checkbox, index) => {
        if (checkbox !== target && index < 7) {
          checkbox.checked = false;
        }
      });
    }
  }

  let basePriceAdded = false;

  // 計算總價
  Car_side_supports_checkboxes.forEach((checkbox, index) => {
    if (checkbox.checked) {
      if (index < 7) {
        // 如果是第 1 到第 7 個 checkbox
        totalPrice = back_supports_prices[`back_prices${index + 1}`]; // 設置基礎價格
        basePriceAdded = true;
        productImage.src = "./img/Back_support.png";
      } else if (index === 7 && basePriceAdded) {
        // 如果第 8 個被勾選，且有基礎價格
        totalPrice += back_supports_prices.hardware_prices8;
      } else if (index === 7 && !basePriceAdded) {
        // 如果只有第 8 個被勾選
        totalPrice = back_supports_prices.hardware_prices8;
      }
    }
    if (target.checked === false) {
      productImage.src = "./img/Novarc_standrad.png";
    }
  });

  // 更新價格到畫面
  nowprice_backsupports.textContent = `${formatPrice(totalPrice)} 元`;
}

// 更新價格的函式
function update_back_supports_hardwarePrice(event) {
  let nowprice_backsupports = Price[5].nextElementSibling;
  let totalPrice = 0; // 重置價格
  let basePriceAdded = false;

  // 計算總價
  Car_side_supports_checkboxes.forEach((checkbox, index) => {
    if (checkbox.checked) {
      if (index < 7) {
        // 如果是第 1 到第 7 個 checkbox
        totalPrice = back_supports_prices[`back_prices${index + 1}`]; // 設置基礎價格
        basePriceAdded = true;
        productImage.src = "./img/Back_support.png";
      } else if (index === 7 && basePriceAdded) {
        // 如果第 8 個被勾選，且有基礎價格
        totalPrice += back_supports_prices.hardware_prices8;
      } else if (index === 7 && !basePriceAdded) {
        // 如果只有第 8 個被勾選
        totalPrice = back_supports_prices.hardware_prices8;
      }
    }
    if (index < 7) {
      // productImage.src = "./img/Back_support.png";
    } else if (!checkbox.checked) {
      productImage.src = "./img/Novarc_standrad.png";
    }
  });

  // 更新價格到畫面
  nowprice_backsupports.textContent = `${formatPrice(totalPrice)} 元`;
}

//為每個 checkbox 添加事件監聽
Car_side_supports_checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", (event) => {
    if (event.target.id === "checkbox_backsupportsHardware_Nova") {
      // 第 8 個 checkbox 不影響第 1 到第 7 個的選中狀態
      update_back_supports_hardwarePrice(event);
    } else {
      // 第 1 到第 7 個 checkbox 互斥，但不影響第 8 個
      update_back_supportsPrice(event);
    }
  });
});
//#endregion

/*-----  7.軀幹點擊列-軀幹側支撐 -----*/
//#region
let Car_latertrunk_checkboxes = document.querySelectorAll(
  'input[type="checkbox"][name="car_latertrunk_support"]'
);

let latertrunksupportSL = document.getElementById(
  "checkbox_latertrunksupportSL_Nova"
);

let latertrunksupportSR = document.getElementById(
  "checkbox_latertrunksupportSR_Nova"
);

let latertrunksupportML = document.getElementById(
  "checkbox_latertrunksupportML_Nova"
);
let latertrunksupportMR = document.getElementById(
  "checkbox_latertrunksupportMR_Nova"
);

let latertrunk_supports_prices = {
  latertrunk_prices1: 7000,
  latertrunk_prices2: 7600,
};

function update_latertrunk_Price(event) {
  let nowprice_latertrunksupports = Price[6].nextElementSibling;

  Car_latertrunk_checkboxes.forEach((checkbox, index) => {
    if (checkbox !== event.target) {
      checkbox.checked = false;
    }
    if (event.target.id === "checkbox_latertrunksupportSL_Nova") {
      nowprice_latertrunksupports.textContent = `${formatPrice(
        latertrunk_supports_prices.latertrunk_prices1
      )} 元`;
      productImage.src = "./img/Side_support(middle).png";
      latertrunksupportSR.checked = true;
    } else if (event.target.id === "checkbox_latertrunksupportSR_Nova") {
      nowprice_latertrunksupports.textContent = `${formatPrice(
        latertrunk_supports_prices.latertrunk_prices1
      )} 元`;
      productImage.src = "./img/Side_support(middle).png";
      latertrunksupportSL.checked = true;
    } else if (event.target.id === "checkbox_latertrunksupportML_Nova") {
      nowprice_latertrunksupports.textContent = `${formatPrice(
        latertrunk_supports_prices.latertrunk_prices2
      )} 元`;
      productImage.src = "./img/Side_support(big).png";
      latertrunksupportMR.checked = true;
    } else if (event.target.id === "checkbox_latertrunksupportMR_Nova") {
      nowprice_latertrunksupports.textContent = `${formatPrice(
        latertrunk_supports_prices.latertrunk_prices2
      )} 元`;
      productImage.src = "./img/Side_support(big).png";
      latertrunksupportML.checked = true;
    }
  });
}

//為每個 checkbox 添加事件監聽
Car_latertrunk_checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", (event) => {
    if (event.target.checked) {
      update_latertrunk_Price(event);
    } else {
      let nowprice_latertrunksupports = Price[6].nextElementSibling;
      nowprice_latertrunksupports.textContent = "0元";
      Car_latertrunk_checkboxes.forEach((otherCheckbox) => {
        otherCheckbox.checked = false;
      });
      productImage.src = "./img/Novarc_standrad.png";
    }
  });
});
//#endregion

/*-----  8.底座子系統-座板  -----*/
//#region
let Car_seatbase_checkboxes = document.querySelectorAll(
  'input[type="checkbox"][name="car_ironseatbase"]'
);

let seat_base_prices = {
  seatbase_prices1: 1500,
  seatbase_prices2: 1500,
  seatbase_prices3: 1500,
  seatbase_prices4: 1500,
  seatbase_prices5: 1500,
  seatbase_prices6: 1500,
  seatbase_prices7: 1500,
  hardware_prices8: 2000, // 第 8 個 checkbox 的價格
};

// 更新價格的函式
function update_seatbasePrice(event) {
  let nowprice_seatbase = Price[7].nextElementSibling;
  let totalPrice = 0; // 重置價格
  let target = event.target; // 取得觸發事件的 checkbox

  if (target.id !== "hardware_prices8") {
    // 如果勾選的是 1 到 7 的 checkbox
    if (target.checked) {
      // 取消其他 1 到 7 checkbox 的勾選，但不影響第 8 個
      Car_seatbase_checkboxes.forEach((checkbox, index) => {
        if (checkbox !== target && index < 7) {
          checkbox.checked = false;
        }
      });
    }
  }

  let basePriceAdded = false;

  // 計算總價
  Car_seatbase_checkboxes.forEach((checkbox, index) => {
    if (checkbox.checked) {
      if (index < 7) {
        // 如果是第 1 到第 7 個 checkbox
        totalPrice = seat_base_prices[`seatbase_prices${index + 1}`]; // 設置基礎價格
        basePriceAdded = true;
        productImage.src = "./img/seatbase.png";
      } else if (index === 7 && basePriceAdded) {
        // 如果第 8 個被勾選，且有基礎價格
        totalPrice += seat_base_prices.hardware_prices8;
      } else if (index === 7 && !basePriceAdded) {
        // 如果只有第 8 個被勾選
        totalPrice = seat_base_prices.hardware_prices8;
      }
    }
    if (target.checked === false) {
      productImage.src = "./img/Novarc_standrad.png";
    }
  });

  // 更新價格到畫面
  nowprice_seatbase.textContent = `${formatPrice(totalPrice)} 元`;
}

// 更新價格的函式
function update_seatbase_hardwarePrice(event) {
  let nowprice_seatbase = Price[7].nextElementSibling;
  let totalPrice = 0; // 重置價格
  let basePriceAdded = false;

  // 計算總價
  Car_seatbase_checkboxes.forEach((checkbox, index) => {
    if (checkbox.checked) {
      if (index < 7) {
        // 如果是第 1 到第 7 個 checkbox
        totalPrice = seat_base_prices[`seatbase_prices${index + 1}`]; // 設置基礎價格
        basePriceAdded = true;
      } else if (index === 7 && basePriceAdded) {
        // 如果第 8 個被勾選，且有基礎價格
        totalPrice += seat_base_prices.hardware_prices8;
      } else if (index === 7 && !basePriceAdded) {
        // 如果只有第 8 個被勾選
        totalPrice = seat_base_prices.hardware_prices8;
      }
    }
    if (index < 7) {
      // productImage.src = "./img/Back_support.png";
    } else if (!checkbox.checked) {
      productImage.src = "./img/Novarc_standrad.png";
    }
  });

  // 更新價格到畫面
  nowprice_seatbase.textContent = `${formatPrice(totalPrice)} 元`;
}

//為每個 checkbox 添加事件監聽
Car_seatbase_checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", (event) => {
    if (event.target.id === "checkbox_seatbaseHardware_Nova") {
      // 第 8 個 checkbox 不影響第 1 到第 7 個的選中狀態
      update_seatbase_hardwarePrice(event);
    } else {
      // 第 1 到第 7 個 checkbox 互斥，但不影響第 8 個
      update_seatbasePrice(event);
    }
  });
});
//#endregion

/*-----  9.底座子系統-座墊  -----*/
//#region
let Car_cushion_checkboxes = document.querySelectorAll(
  'input[type="checkbox"][name="car_basecushion"]'
);

let seat_cushion_prices = {
  seatcushion_prices1: 1500,
  seatcushion_prices2: 1550,
  seatcushion_prices3: 10000, // 第 3 個 checkbox 的價格
};

function update_cushion_Price(event) {
  let nowprice_cushion = Price[8].nextElementSibling;

  Car_cushion_checkboxes.forEach((checkbox, index) => {
    if (checkbox !== event.target) {
      checkbox.checked = false;
    }
    if (event.target.id === "checkbox_cushion14_Nova") {
      nowprice_cushion.textContent = `${formatPrice(
        seat_cushion_prices.seatcushion_prices1
      )} 元`;
    } else if (event.target.id === "checkbox_cushion16_Nova") {
      nowprice_cushion.textContent = `${formatPrice(
        seat_cushion_prices.seatcushion_prices2
      )} 元`;
    } else if (event.target.id === "checkbox_cushionGelive_Nova") {
      nowprice_cushion.textContent = `${formatPrice(
        seat_cushion_prices.seatcushion_prices3
      )} 元`;
    }
  });
}

//為每個 checkbox 添加事件監聽
Car_cushion_checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", (event) => {
    if (event.target.checked) {
      update_cushion_Price(event);
    } else {
      let nowprice_cushion = Price[8].nextElementSibling;
      nowprice_cushion.textContent = "0元";
      Car_cushion_checkboxes.forEach((otherCheckbox) => {
        otherCheckbox.checked = false;
      });
    }
  });
});
//endregion

/*-----  10.綁帶子系統點擊列  -----*/
//region
let Car_bandage_checkboxes = document.querySelectorAll(
  'input[type="checkbox"][name="car_bandage"]'
);

let bandage_prices = {
  bandage_prices1: 500,
  bandage_prices2: 0,
  bandage_prices3: 1450,
  bandage_prices4: 1500,
  bandage_prices5: 0,
  bandage_prices6: 950,
  bandage_prices7: 1000,
  bandage_prices8: 1300,
  bandage_prices9: 750,
};
let bandagetotalPrice = 0; // 重置價格

function update_bandagePrice(event) {
  let nowprice_bandage = Price[9].nextElementSibling;

  // 計算總價
  Car_bandage_checkboxes.forEach((checkbox, index) => {
    if (checkbox.checked) {
      bandagetotalPrice += bandage_prices[`bandage_prices${index + 1}`]; // 設置基礎價格
    }
  });

  // 更新價格到畫面
  nowprice_bandage.textContent = `${formatPrice(bandagetotalPrice)} 元`;
  bandagetotalPrice = 0; // 重置價格
}

//為每個 checkbox 添加事件監聽
Car_bandage_checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", (event) => {
    update_bandagePrice(event);
  });
});
//endregion

/*-----  11.Spex底座子系統-座墊點擊列  -----*/
//region
let nowprice_SpexCushion = Price[10].nextElementSibling;

//Spex_Vigour_Std 標準型座墊
let Spex_Vigour_Std_prices = {
  Spex_Vigour_Std_prices1: 14600,
  Spex_Vigour_Std_prices2: 14600,
  Spex_Vigour_Std_prices3: 14600,
  Spex_Vigour_Std_prices4: 14600,
  Spex_Vigour_Std_prices5: 14600,
  Spex_Vigour_Std_prices6: 15800,
};

//Spex_Vigour_High 加深型座墊
let Spex_Vigour_High_prices = {
  Spex_Vigour_High_prices1: 16200,
  Spex_Vigour_High_prices2: 16200,
  Spex_Vigour_High_prices3: 16200,
  Spex_Vigour_High_prices4: 16200,
  Spex_Vigour_High_prices5: 16200,
  Spex_Vigour_High_prices6: 17200,
};

//Spex_Standard 標準廓型座墊
let Spex_Standard_prices = {
  Spex_Standard_prices1: 15800,
  Spex_Standard_prices2: 15800,
  Spex_Standard_prices3: 15800,
  Spex_Standard_prices4: 15800,
  Spex_Standard_prices5: 15800,
  Spex_Standard_prices6: 20800,
  Spex_Standard_prices7: 20800,
};

//Spex_High 加深廓型座墊
let Spex_High_prices = {
  Spex_High_prices1: 16400,
  Spex_High_prices2: 16400,
  Spex_High_prices3: 16400,
  Spex_High_prices4: 16400,
  Spex_High_prices5: 17100,
  Spex_High_prices6: 17100,
  Spex_High_prices7: 17100,
  Spex_High_prices8: 17100,
  Spex_High_prices9: 17100,
  Spex_High_prices10: 22300,
  Spex_High_prices11: 22300,
};

//Spex_SuperHigh 超加深廓型座墊
let Spex_SuperHigh_prices = {
  Spex_SuperHigh_prices1: 21600,
  Spex_SuperHigh_prices2: 21600,
  Spex_SuperHigh_prices3: 21600,
  Spex_SuperHigh_prices4: 21600,
  Spex_SuperHigh_prices5: 22300,
  Spex_SuperHigh_prices6: 22300,
  Spex_SuperHigh_prices7: 22300,
  Spex_SuperHigh_prices8: 22300,
  Spex_SuperHigh_prices9: 22300,
  Spex_SuperHigh_prices10: 25600,
  Spex_SuperHigh_prices11: 25600,
};

//Spex_Flex 標準型座墊
let Spex_Flex_prices = {
  Spex_Flex_prices1: 31200,
  Spex_Flex_prices2: 31200,
  Spex_Flex_prices3: 33300,
  Spex_Flex_prices4: 33300,
  Spex_Flex_prices5: 33300,
  Spex_Flex_prices6: 33300,
  Spex_Flex_prices7: 33300,
};

//Spex_Flex 加深型座墊
let Spex_Flex_High_prices = {
  Spex_Flex_High_prices1: 32600,
  Spex_Flex_High_prices2: 32600,
  Spex_Flex_High_prices3: 34400,
  Spex_Flex_High_prices4: 34400,
  Spex_Flex_High_prices5: 34400,
  Spex_Flex_High_prices6: 34400,
  Spex_Flex_High_prices7: 34400,
};

//Spex_Flex 超加深型座墊
let Spex_Flex_SuperHigh_prices = {
  Spex_Flex_SuperHigh_prices1: 33600,
  Spex_Flex_SuperHigh_prices2: 33600,
  Spex_Flex_SuperHigh_prices3: 35400,
  Spex_Flex_SuperHigh_prices4: 35400,
  Spex_Flex_SuperHigh_prices5: 35400,
  Spex_Flex_SuperHigh_prices6: 35400,
  Spex_Flex_SuperHigh_prices7: 35400,
};

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

document.addEventListener("DOMContentLoaded", function () {
  let CushionwidthSelect = document.querySelector(".Spexcushion_Width");
  let CushionheightSelect = document.querySelector(".Spexcushion_Heigh");

  // 監聽高度選單
  CushionheightSelect.addEventListener("change", function () {
    let widthselectedOption =
      CushionwidthSelect.options[CushionwidthSelect.selectedIndex];
    let heightselectedOption =
      CushionheightSelect.options[CushionheightSelect.selectedIndex];

    //region --- Spex_Vigour_Std ---
    if (
      VigourStdCheckbox.id === "Spex_Vigour_Std" &&
      VigourStdCheckbox.checked
    ) {
      if (
        widthselectedOption.text === "14”" &&
        (heightselectedOption.text === "14”" ||
          heightselectedOption.text === "16”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_Vigour_Std_prices.Spex_Vigour_Std_prices1
        )} 元`;
      }
      if (
        widthselectedOption.text === "15”" &&
        (heightselectedOption.text === "14”" ||
          heightselectedOption.text === "16”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_Vigour_Std_prices.Spex_Vigour_Std_prices2
        )} 元`;
      }
      if (
        widthselectedOption.text === "16”" &&
        (heightselectedOption.text === "16”" ||
          heightselectedOption.text === "18”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_Vigour_Std_prices.Spex_Vigour_Std_prices3
        )} 元`;
      }
      if (
        widthselectedOption.text === "17”" &&
        (heightselectedOption.text === "17”" ||
          heightselectedOption.text === "18”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_Vigour_Std_prices.Spex_Vigour_Std_prices4
        )} 元`;
      }
      if (
        widthselectedOption.text === "18”" &&
        (heightselectedOption.text === "18”" ||
          heightselectedOption.text === "20”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_Vigour_Std_prices.Spex_Vigour_Std_prices5
        )} 元`;
      }
      if (
        widthselectedOption.text.replaceAll("”", '"') === '19"' &&
        (heightselectedOption.text.replaceAll("”", '"') === '18"' ||
          heightselectedOption.text.replaceAll("”", '"') === '20"')
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_Vigour_Std_prices.Spex_Vigour_Std_prices6
        )} 元`;
      }
    }
    //endregion

    //region --- Spex_Vigour_High ---
    if (
      VigourHighCheckbox.id === "Spex_Vigour_High" &&
      VigourHighCheckbox.checked
    ) {
      if (
        widthselectedOption.text === "14”" &&
        (heightselectedOption.text === "14”" ||
          heightselectedOption.text === "16”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_Vigour_High_prices.Spex_Vigour_High_prices1
        )} 元`;
      }
      if (
        widthselectedOption.text === "15”" &&
        (heightselectedOption.text === "14”" ||
          heightselectedOption.text === "16”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_Vigour_High_prices.Spex_Vigour_High_prices2
        )} 元`;
      }
      if (
        widthselectedOption.text === "16”" &&
        (heightselectedOption.text === "16”" ||
          heightselectedOption.text === "18”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_Vigour_High_prices.Spex_Vigour_High_prices3
        )} 元`;
      }
      if (
        widthselectedOption.text === "17”" &&
        (heightselectedOption.text === "17”" ||
          heightselectedOption.text === "18”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_Vigour_High_prices.Spex_Vigour_High_prices4
        )} 元`;
      }
      if (
        widthselectedOption.text === "18”" &&
        (heightselectedOption.text === "18”" ||
          heightselectedOption.text === "20”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_Vigour_High_prices.Spex_Vigour_High_prices5
        )} 元`;
      }
      if (
        widthselectedOption.text.replaceAll("”", '"') === '19"' &&
        (heightselectedOption.text.replaceAll("”", '"') === '18"' ||
          heightselectedOption.text.replaceAll("”", '"') === '20"')
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_Vigour_High_prices.Spex_Vigour_High_prices6
        )} 元`;
      }
    }
    //endregion

    //region --- Spex_Standard ---
    if (
      SpexStandardCheckbox.id === "Spex_Standard" &&
      SpexStandardCheckbox.checked
    ) {
      if (
        widthselectedOption.text === "14”" &&
        (heightselectedOption.text === "14”" ||
          heightselectedOption.text === "16”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_Standard_prices.Spex_Standard_prices1
        )} 元`;
      }
      if (
        widthselectedOption.text === "15”" &&
        (heightselectedOption.text === "14”" ||
          heightselectedOption.text === "16”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_Standard_prices.Spex_Standard_prices2
        )} 元`;
      }
      if (
        widthselectedOption.text === "16”" &&
        (heightselectedOption.text === "16”" ||
          heightselectedOption.text === "18”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_Standard_prices.Spex_Standard_prices3
        )} 元`;
      }
      if (
        widthselectedOption.text === "17”" &&
        (heightselectedOption.text === "17”" ||
          heightselectedOption.text === "18”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_Standard_prices.Spex_Standard_prices4
        )} 元`;
      }
      if (
        widthselectedOption.text === "18”" &&
        (heightselectedOption.text === "18”" ||
          heightselectedOption.text === "20”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_Standard_prices.Spex_Standard_prices5
        )} 元`;
      }
      if (
        widthselectedOption.text === "19”" &&
        (heightselectedOption.text === "18”" ||
          heightselectedOption.text === "20”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_Standard_prices.Spex_Standard_prices6
        )} 元`;
      }
      if (
        widthselectedOption.text === "20”" &&
        (heightselectedOption.text === "20”" ||
          heightselectedOption.text === "22”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_Standard_prices.Spex_Standard_prices7
        )} 元`;
      }
    }
    //endregion

    //region --- Spex_High ---
    if (SpexHighCheckbox.id === "Spex_High" && SpexHighCheckbox.checked) {
      if (
        widthselectedOption.text === "10”" &&
        (heightselectedOption.text === "10”" ||
          heightselectedOption.text === "12”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_High_prices.Spex_High_prices1
        )} 元`;
      }
      if (
        widthselectedOption.text === "11”" &&
        (heightselectedOption.text === "10”" ||
          heightselectedOption.text === "12”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_High_prices.Spex_High_prices2
        )} 元`;
      }
      if (
        widthselectedOption.text === "12”" &&
        (heightselectedOption.text === "12”" ||
          heightselectedOption.text === "14”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_High_prices.Spex_High_prices3
        )} 元`;
      }
      if (
        widthselectedOption.text === "13”" &&
        (heightselectedOption.text === "12”" ||
          heightselectedOption.text === "14”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_High_prices.Spex_High_prices4
        )} 元`;
      }
      if (
        widthselectedOption.text === "14”" &&
        (heightselectedOption.text === "14”" ||
          heightselectedOption.text === "16”" ||
          heightselectedOption.text === "18”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_High_prices.Spex_High_prices5
        )} 元`;
      }
      if (
        widthselectedOption.text === "15”" &&
        (heightselectedOption.text === "14”" ||
          heightselectedOption.text === "16”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_High_prices.Spex_High_prices6
        )} 元`;
      }
      if (
        widthselectedOption.text === "16”" &&
        (heightselectedOption.text === "16”" ||
          heightselectedOption.text === "18”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_High_prices.Spex_High_prices7
        )} 元`;
      }
      if (
        widthselectedOption.text === "17”" &&
        (heightselectedOption.text === "17”" ||
          heightselectedOption.text === "18”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_High_prices.Spex_High_prices8
        )} 元`;
      }
      if (
        widthselectedOption.text === "18”" &&
        (heightselectedOption.text === "18”" ||
          heightselectedOption.text === "20”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_High_prices.Spex_High_prices9
        )} 元`;
      }
      if (
        widthselectedOption.text === "19”" &&
        (heightselectedOption.text === "18”" ||
          heightselectedOption.text === "20”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_High_prices.Spex_High_prices10
        )} 元`;
      }
      if (
        widthselectedOption.text === "20”" &&
        (heightselectedOption.text === "20”" ||
          heightselectedOption.text === "22”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_High_prices.Spex_High_prices11
        )} 元`;
      }
    }
    //endregion

    //region --- Spex_SuperHigh ---
    if (
      Spex_SuperHighCheckbox.id === "Spex_SuperHigh" &&
      Spex_SuperHighCheckbox.checked
    ) {
      if (
        widthselectedOption.text === "10”" &&
        (heightselectedOption.text === "10”" ||
          heightselectedOption.text === "12”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_SuperHigh_prices.Spex_SuperHigh_prices1
        )} 元`;
      }
      if (
        widthselectedOption.text === "11”" &&
        (heightselectedOption.text === "10”" ||
          heightselectedOption.text === "12”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_SuperHigh_prices.Spex_SuperHigh_prices2
        )} 元`;
      }
      if (
        widthselectedOption.text === "12”" &&
        (heightselectedOption.text === "12”" ||
          heightselectedOption.text === "14”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_SuperHigh_prices.Spex_SuperHigh_prices3
        )} 元`;
      }
      if (
        widthselectedOption.text === "13”" &&
        (heightselectedOption.text === "12”" ||
          heightselectedOption.text === "14”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_SuperHigh_prices.Spex_SuperHigh_prices4
        )} 元`;
      }
      if (
        widthselectedOption.text === "14”" &&
        (heightselectedOption.text === "14”" ||
          heightselectedOption.text === "16”" ||
          heightselectedOption.text === "18”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_SuperHigh_prices.Spex_SuperHigh_prices5
        )} 元`;
      }
      if (
        widthselectedOption.text === "15”" &&
        (heightselectedOption.text === "14”" ||
          heightselectedOption.text === "16”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_SuperHigh_prices.Spex_SuperHigh_prices6
        )} 元`;
      }
      if (
        widthselectedOption.text === "16”" &&
        (heightselectedOption.text === "16”" ||
          heightselectedOption.text === "18”" ||
          heightselectedOption.text === "20”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_SuperHigh_prices.Spex_SuperHigh_prices7
        )} 元`;
      }
      if (
        widthselectedOption.text === "17”" &&
        (heightselectedOption.text === "17”" ||
          heightselectedOption.text === "18”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_SuperHigh_prices.Spex_SuperHigh_prices8
        )} 元`;
      }
      if (
        widthselectedOption.text === "18”" &&
        (heightselectedOption.text === "18”" ||
          heightselectedOption.text === "20”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_SuperHigh_prices.Spex_SuperHigh_prices9
        )} 元`;
      }
      if (
        widthselectedOption.text === "19”" &&
        (heightselectedOption.text === "18”" ||
          heightselectedOption.text === "20”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_SuperHigh_prices.Spex_SuperHigh_prices10
        )} 元`;
      }
      if (
        widthselectedOption.text === "20”" &&
        (heightselectedOption.text === "20”" ||
          heightselectedOption.text === "22”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_SuperHigh_prices.Spex_SuperHigh_prices11
        )} 元`;
      }
    }
    //endregion

    //region --- Spex_Flex ---
    if (Spex_FlexCheckbox.id === "Spex_Flex" && Spex_FlexCheckbox.checked) {
      if (
        widthselectedOption.text === "12”" &&
        heightselectedOption.text === "14”"
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_Flex_prices.Spex_Flex_prices1
        )} 元`;
      }
      if (
        widthselectedOption.text === "13”" &&
        heightselectedOption.text === "14”"
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_Flex_prices.Spex_Flex_prices2
        )} 元`;
      }
      if (
        widthselectedOption.text === "14”" &&
        (heightselectedOption.text === "14”" ||
          heightselectedOption.text === "16”" ||
          heightselectedOption.text === "18”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_Flex_prices.Spex_Flex_prices3
        )} 元`;
      }
      if (
        widthselectedOption.text === "15”" &&
        (heightselectedOption.text === "14”" ||
          heightselectedOption.text === "16”" ||
          heightselectedOption.text === "18”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_Flex_prices.Spex_Flex_prices4
        )} 元`;
      }
      if (
        widthselectedOption.text === "16”" &&
        (heightselectedOption.text === "16”" ||
          heightselectedOption.text === "18”" ||
          heightselectedOption.text === "20”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_Flex_prices.Spex_Flex_prices5
        )} 元`;
      }
      if (
        widthselectedOption.text === "17”" &&
        (heightselectedOption.text === "18”" ||
          heightselectedOption.text === "20”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_Flex_prices.Spex_Flex_prices6
        )} 元`;
      }
      if (
        widthselectedOption.text === "18”" &&
        (heightselectedOption.text === "18”" ||
          heightselectedOption.text === "20”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_Flex_prices.Spex_Flex_prices7
        )} 元`;
      }
    }
    //endregion

    //region --- Spex_Flex_High ---
    if (
      Spex_Flex_HighCheckbox.id === "Spex_Flex_High" &&
      Spex_Flex_HighCheckbox.checked
    ) {
      if (
        widthselectedOption.text === "12”" &&
        heightselectedOption.text === "14”"
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_Flex_High_prices.Spex_Flex_High_prices1
        )} 元`;
      }
      if (
        widthselectedOption.text === "13”" &&
        heightselectedOption.text === "14”"
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_Flex_High_prices.Spex_Flex_High_prices2
        )} 元`;
      }
      if (
        widthselectedOption.text === "14”" &&
        (heightselectedOption.text === "14”" ||
          heightselectedOption.text === "16”" ||
          heightselectedOption.text === "18”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_Flex_High_prices.Spex_Flex_High_prices3
        )} 元`;
      }
      if (
        widthselectedOption.text === "15”" &&
        (heightselectedOption.text === "14”" ||
          heightselectedOption.text === "16”" ||
          heightselectedOption.text === "18”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_Flex_High_prices.Spex_Flex_High_prices4
        )} 元`;
      }
      if (
        widthselectedOption.text === "16”" &&
        (heightselectedOption.text === "16”" ||
          heightselectedOption.text === "18”" ||
          heightselectedOption.text === "20”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_Flex_High_prices.Spex_Flex_High_prices5
        )} 元`;
      }
      if (
        widthselectedOption.text === "17”" &&
        (heightselectedOption.text === "18”" ||
          heightselectedOption.text === "20”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_Flex_High_prices.Spex_Flex_High_prices6
        )} 元`;
      }
      if (
        widthselectedOption.text === "18”" &&
        (heightselectedOption.text === "18”" ||
          heightselectedOption.text === "20”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_Flex_High_prices.Spex_Flex_High_prices7
        )} 元`;
      }
    }
    //endregion

    //region --- Spex_Flex_SuperHigh ---
    if (
      Spex_Flex_SuperHighCheckbox.id === "Spex_Flex_SuperHigh" &&
      Spex_Flex_SuperHighCheckbox.checked
    ) {
      if (
        widthselectedOption.text === "12”" &&
        heightselectedOption.text === "14”"
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_Flex_SuperHigh_prices.Spex_Flex_SuperHigh_prices1
        )} 元`;
      }
      if (
        widthselectedOption.text === "13”" &&
        heightselectedOption.text === "14”"
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_Flex_SuperHigh_prices.Spex_Flex_SuperHigh_prices2
        )} 元`;
      }
      if (
        widthselectedOption.text === "14”" &&
        (heightselectedOption.text === "14”" ||
          heightselectedOption.text === "16”" ||
          heightselectedOption.text === "18”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_Flex_SuperHigh_prices.Spex_Flex_SuperHigh_prices3
        )} 元`;
      }
      if (
        widthselectedOption.text === "15”" &&
        (heightselectedOption.text === "14”" ||
          heightselectedOption.text === "16”" ||
          heightselectedOption.text === "18”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_Flex_SuperHigh_prices.Spex_Flex_SuperHigh_prices4
        )} 元`;
      }
      if (
        widthselectedOption.text === "16”" &&
        (heightselectedOption.text === "16”" ||
          heightselectedOption.text === "18”" ||
          heightselectedOption.text === "20”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_Flex_SuperHigh_prices.Spex_Flex_SuperHigh_prices5
        )} 元`;
      }
      if (
        widthselectedOption.text === "17”" &&
        (heightselectedOption.text === "18”" ||
          heightselectedOption.text === "20”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_Flex_SuperHigh_prices.Spex_Flex_SuperHigh_prices6
        )} 元`;
      }
      if (
        widthselectedOption.text === "18”" &&
        (heightselectedOption.text === "18”" ||
          heightselectedOption.text === "20”")
      ) {
        nowprice_SpexCushion.textContent = `${formatPrice(
          Spex_Flex_SuperHigh_prices.Spex_Flex_SuperHigh_prices7
        )} 元`;
      }
    }
    //endregion
  });
});
//endregion

/*-----  12.Spex底座子系統-硬座板點擊列  -----*/
//region
let nowprice_SpexSeatBase = Price[11].nextElementSibling;

//region --- Spex_Seat_Base 硬座板(固定扣具) ---
let Spex_Seat_Base_Fixed_prices = {
  Spex_Seat_Base_Fixed_prices1: 11800,
  Spex_Seat_Base_Fixed_prices2: 11800,
  Spex_Seat_Base_Fixed_prices3: 14200,
  Spex_Seat_Base_Fixed_prices4: 14200,
  Spex_Seat_Base_Fixed_prices5: 14200,
  Spex_Seat_Base_Fixed_prices6: 14200,
  Spex_Seat_Base_Fixed_prices7: 14200,
  Spex_Seat_Base_Fixed_prices8: 14200,
};
//endregion

//region --- Spex_Seat Base 硬座板(快拆扣具) ---
let Spex_Seat_Base_Quick_prices = {
  Spex_Seat_Base_Quick_prices1: 12800,
  Spex_Seat_Base_Quick_prices2: 12800,
  Spex_Seat_Base_Quick_prices3: 15400,
  Spex_Seat_Base_Quick_prices4: 15400,
  Spex_Seat_Base_Quick_prices5: 15400,
  Spex_Seat_Base_Quick_prices6: 15400,
  Spex_Seat_Base_Quick_prices7: 15400,
  Spex_Seat_Base_Quick_prices8: 15400,
};
//endregion

let SeatBasefixedCheckbox = document.querySelector("#Spex_SeatBase_fixed");
let SeatBasequickCheckbox = document.querySelector("#Spex_SeatBase_quick");

document.addEventListener("DOMContentLoaded", function () {
  let SeatBasewidthSelect = document.querySelector(".Spexseatbase_Width");
  let SeatBaseheightSelect = document.querySelector(".Spexseatbase_Heigh");

  // 監聽高度選單
  SeatBaseheightSelect.addEventListener("change", function () {
    let widthselectedOption =
      SeatBasewidthSelect.options[SeatBasewidthSelect.selectedIndex];
    let heightselectedOption =
      SeatBaseheightSelect.options[SeatBaseheightSelect.selectedIndex];

    //region Spex_Seat Base 硬座板(固定扣具)
    if (
      SeatBasefixedCheckbox.id === "Spex_SeatBase_fixed" &&
      SeatBasefixedCheckbox.checked
    ) {
      if (
        widthselectedOption.text === "10”" &&
        (heightselectedOption.text === "12”" ||
          heightselectedOption.text === "14”")
      ) {
        nowprice_SpexSeatBase.textContent = `${formatPrice(
          Spex_Seat_Base_Fixed_prices.Spex_Seat_Base_Fixed_prices1
        )} 元`;
      }
      if (
        widthselectedOption.text === "12”" &&
        (heightselectedOption.text === "12”" ||
          heightselectedOption.text === "14”" ||
          heightselectedOption.text === "16”" ||
          heightselectedOption.text === "18”")
      ) {
        nowprice_SpexSeatBase.textContent = `${formatPrice(
          Spex_Seat_Base_Fixed_prices.Spex_Seat_Base_Fixed_prices2
        )} 元`;
      }
      if (
        widthselectedOption.text === "14”" &&
        (heightselectedOption.text === "14”" ||
          heightselectedOption.text === "16”" ||
          heightselectedOption.text === "18”")
      ) {
        nowprice_SpexSeatBase.textContent = `${formatPrice(
          Spex_Seat_Base_Fixed_prices.Spex_Seat_Base_Fixed_prices3
        )} 元`;
      }
      if (
        widthselectedOption.text === "15”" &&
        (heightselectedOption.text === "17”" ||
          heightselectedOption.text === "20”")
      ) {
        nowprice_SpexSeatBase.textContent = `${formatPrice(
          Spex_Seat_Base_Fixed_prices.Spex_Seat_Base_Fixed_prices4
        )} 元`;
      }
      if (
        widthselectedOption.text === "16”" &&
        (heightselectedOption.text === "16”" ||
          heightselectedOption.text === "18”" ||
          heightselectedOption.text === "20”" ||
          heightselectedOption.text === "22”")
      ) {
        nowprice_SpexSeatBase.textContent = `${formatPrice(
          Spex_Seat_Base_Fixed_prices.Spex_Seat_Base_Fixed_prices5
        )} 元`;
      }
      if (
        widthselectedOption.text === "17”" &&
        (heightselectedOption.text === "17”" ||
          heightselectedOption.text === "20”" ||
          heightselectedOption.text === "22”")
      ) {
        nowprice_SpexSeatBase.textContent = `${formatPrice(
          Spex_Seat_Base_Fixed_prices.Spex_Seat_Base_Fixed_prices6
        )} 元`;
      }
      if (
        widthselectedOption.text === "18”" &&
        (heightselectedOption.text === "18”" ||
          heightselectedOption.text === "20”" ||
          heightselectedOption.text === "22”")
      ) {
        nowprice_SpexSeatBase.textContent = `${formatPrice(
          Spex_Seat_Base_Fixed_prices.Spex_Seat_Base_Fixed_prices7
        )} 元`;
      }
      if (
        widthselectedOption.text === "20”" &&
        (heightselectedOption.text === "20”" ||
          heightselectedOption.text === "22”")
      ) {
        nowprice_SpexSeatBase.textContent = `${formatPrice(
          Spex_Seat_Base_Fixed_prices.Spex_Seat_Base_Fixed_prices8
        )} 元`;
      }
    }
    //endregion

    //region Spex_Seat Base 硬座板(快拆扣具)
    if (
      SeatBasequickCheckbox.id === "Spex_SeatBase_quick" &&
      SeatBasequickCheckbox.checked
    ) {
      if (
        widthselectedOption.text === "10”" &&
        (heightselectedOption.text === "12”" ||
          heightselectedOption.text === "14”")
      ) {
        nowprice_SpexSeatBase.textContent = `${formatPrice(
          Spex_Seat_Base_Quick_prices.Spex_Seat_Base_Quick_prices1
        )} 元`;
      }
      if (
        widthselectedOption.text === "12”" &&
        (heightselectedOption.text === "12”" ||
          heightselectedOption.text === "14”" ||
          heightselectedOption.text === "16”" ||
          heightselectedOption.text === "18”")
      ) {
        nowprice_SpexSeatBase.textContent = `${formatPrice(
          Spex_Seat_Base_Quick_prices.Spex_Seat_Base_Quick_prices2
        )} 元`;
      }
      if (
        widthselectedOption.text === "14”" &&
        (heightselectedOption.text === "14”" ||
          heightselectedOption.text === "16”" ||
          heightselectedOption.text === "18”")
      ) {
        nowprice_SpexSeatBase.textContent = `${formatPrice(
          Spex_Seat_Base_Quick_prices.Spex_Seat_Base_Quick_prices3
        )} 元`;
      }
      if (
        widthselectedOption.text === "15”" &&
        (heightselectedOption.text === "17”" ||
          heightselectedOption.text === "20”")
      ) {
        nowprice_SpexSeatBase.textContent = `${formatPrice(
          Spex_Seat_Base_Quick_prices.Spex_Seat_Base_Quick_prices4
        )} 元`;
      }
      if (
        widthselectedOption.text === "16”" &&
        (heightselectedOption.text === "16”" ||
          heightselectedOption.text === "18”" ||
          heightselectedOption.text === "20”" ||
          heightselectedOption.text === "22”")
      ) {
        nowprice_SpexSeatBase.textContent = `${formatPrice(
          Spex_Seat_Base_Quick_prices.Spex_Seat_Base_Quick_prices5
        )} 元`;
      }
      if (
        widthselectedOption.text === "17”" &&
        (heightselectedOption.text === "17”" ||
          heightselectedOption.text === "20”" ||
          heightselectedOption.text === "22”")
      ) {
        nowprice_SpexSeatBase.textContent = `${formatPrice(
          Spex_Seat_Base_Quick_prices.Spex_Seat_Base_Quick_prices6
        )} 元`;
      }
      if (
        widthselectedOption.text === "18”" &&
        (heightselectedOption.text === "18”" ||
          heightselectedOption.text === "20”" ||
          heightselectedOption.text === "22”")
      ) {
        nowprice_SpexSeatBase.textContent = `${formatPrice(
          Spex_Seat_Base_Quick_prices.Spex_Seat_Base_Quick_prices7
        )} 元`;
      }
      if (
        widthselectedOption.text === "20”" &&
        (heightselectedOption.text === "20”" ||
          heightselectedOption.text === "22”")
      ) {
        nowprice_SpexSeatBase.textContent = `${formatPrice(
          Spex_Seat_Base_Quick_prices.Spex_Seat_Base_Quick_prices8
        )} 元`;
      }
    }
    //endregion
  });
});
//endregion

/*-----  13.Spex底座子系統-分腿器點擊列  -----*/
//region
let nowprice_SpexMedialThigh = Price[12].nextElementSibling;

//region --- Spex_MedialThigh_Standard 分腿器-標準型 ---
let Spex_MedialThigh_Standard_prices = {
  Spex_MedialThigh_Standard_prices1: 12500,
  Spex_MedialThigh_Standard_prices2: 12500,
  Spex_MedialThigh_Standard_prices3: 12500,
};
//endregion

//region --- Spex_MedialThigh_Multiaxial 分腿器-標準型 ---
let Spex_MedialThigh_Multiaxial_prices = {
  Spex_MedialThigh_Multiaxial_prices1: 18000,
  Spex_MedialThigh_Multiaxial_prices2: 18000,
  Spex_MedialThigh_Multiaxial_prices3: 18000,
};
//endregion

let medialthighstandardCheckbox = document.querySelector(
  "#Spex_MedialThigh_Standard"
);
let medialthighmultiaxialCheckbox = document.querySelector(
  "#Spex_MedialThigh_Multiaxial"
);

document.addEventListener("DOMContentLoaded", function () {
  let MedialThighSizeSelect = document.querySelector(".Spexmedialthigh_sel");

  // 監聽高度選單
  MedialThighSizeSelect.addEventListener("change", function () {
    let medialthighOption =
      MedialThighSizeSelect.options[MedialThighSizeSelect.selectedIndex];
    if (
      medialthighstandardCheckbox.id === "Spex_MedialThigh_Standard" &&
      medialthighstandardCheckbox.checked
    ) {
      if (medialthighOption.text === "size 1") {
        nowprice_SpexMedialThigh.textContent = `${formatPrice(
          Spex_MedialThigh_Standard_prices.Spex_MedialThigh_Standard_prices1
        )} 元`;
      }
      if (medialthighOption.text === "size 2") {
        nowprice_SpexMedialThigh.textContent = `${formatPrice(
          Spex_MedialThigh_Standard_prices.Spex_MedialThigh_Standard_prices2
        )} 元`;
      }
      if (medialthighOption.text === "size 3") {
        nowprice_SpexMedialThigh.textContent = `${formatPrice(
          Spex_MedialThigh_Standard_prices.Spex_MedialThigh_Standard_prices3
        )} 元`;
      }
    }

    if (
      medialthighmultiaxialCheckbox.id === "Spex_MedialThigh_Multiaxial" &&
      medialthighmultiaxialCheckbox.checked
    ) {
      if (medialthighOption.text === "size 1") {
        nowprice_SpexMedialThigh.textContent = `${formatPrice(
          Spex_MedialThigh_Multiaxial_prices.Spex_MedialThigh_Multiaxial_prices1
        )} 元`;
      }
      if (medialthighOption.text === "size 2") {
        nowprice_SpexMedialThigh.textContent = `${formatPrice(
          Spex_MedialThigh_Multiaxial_prices.Spex_MedialThigh_Multiaxial_prices2
        )} 元`;
      }
      if (medialthighOption.text === "size 3") {
        nowprice_SpexMedialThigh.textContent = `${formatPrice(
          Spex_MedialThigh_Multiaxial_prices.Spex_MedialThigh_Multiaxial_prices3
        )} 元`;
      }
    }
  });
});
//endregion

/*-----  14.Spex底座子系統-扶手臀撐點擊列  -----*/
//region
let nowprice_SpexArmSupLatThigh = Price[13].nextElementSibling;

//region --- 扶手支撐價格 ---
//Spex_Arm_Supports_Quick 扶手支撐快拆式
let Spex_Arm_Supports_Quickprices = {
  Spex_Arm_Supports_Quickprices1: 11200,
  Spex_Arm_Supports_Quickprices2: 9800,
};

//Spex_Arm_Supports_FlipDown 扶手支撐下擺式
let Spex_Arm_Supports_FlipDownprices = {
  Spex_Arm_Supports_FlipDownprices1: 12800,
  Spex_Arm_Supports_FlipDownprices2: 11200,
};

//Spex_Arm_Supports_Fixed 扶手支撐固定式
let Spex_Arm_Supports_Fixedprices = {
  Spex_Arm_Supports_Fixedprices1: 10000,
  Spex_Arm_Supports_Fixedprices2: 8400,
};
//endregion

//region --- 臀測支撐價格 ---
//Spex_Lateral_Thigh_Supports_Quick 臀測支撐快拆式
let Spex_Lateral_Thigh_Supports_Quickprices = {
  Spex_Lateral_Thigh_Supports_Quickprices1: 9100,
  Spex_Lateral_Thigh_Supports_Quickprices2: 7700,
};

//Spex_Lateral_Thigh_Supports_FlipDown 臀測支撐下擺式
let Spex_Lateral_Thigh_Supports_FlipDownprices = {
  Spex_Lateral_Thigh_Supports_FlipDownprices1: 10900,
  Spex_Lateral_Thigh_Supports_FlipDownprices2: 9100,
};
//endregion

//region --- 扶手臀撐價格 ---
//Spex_ArmSup_LatThigh_Quick 扶手臀撐快拆式
let Spex_ArmSup_LatThigh_Quickprices = {
  Spex_ArmSup_LatThigh_Quickprices1: 14200,
  Spex_ArmSup_LatThigh_Quickprices2: 13200,
  Spex_ArmSup_LatThigh_Quickprices3: 11300,
  Spex_ArmSup_LatThigh_Quickprices4: 10600,
};

//Spex_ArmSup_LatThigh_FlipDown 扶手臀撐下擺式
let Spex_ArmSup_LatThigh_FlipDownprices = {
  Spex_ArmSup_LatThigh_FlipDownprices1: 15900,
  Spex_ArmSup_LatThigh_FlipDownprices2: 14800,
  Spex_ArmSup_LatThigh_FlipDownprices3: 12700,
  Spex_ArmSup_LatThigh_FlipDownprices4: 12100,
};

//Spex_ArmSup_LatThigh_Fixed 扶手臀撐固定式
let Spex_ArmSup_LatThigh_Fixedprices = {
  Spex_ArmSup_LatThigh_Fixedprices1: 12700,
  Spex_ArmSup_LatThigh_Fixedprices2: 12100,
  Spex_ArmSup_LatThigh_Fixedprices3: 10600,
  Spex_ArmSup_LatThigh_Fixedprices4: 9000,
};
//endregion

//region --- 扶手襯墊價格 ---
//Spex_Arm_Supports_Pad 扶手襯墊
let Spex_Arm_Supports_Padprices = {
  Spex_Arm_Supports_Padprices1: 3300,
  Spex_Arm_Supports_Padprices2: 3300,
  Spex_Arm_Supports_Padprices3: 3300,
  Spex_Arm_Supports_Padprices4: 3300,
  Spex_Arm_Supports_Padprices5: 3300,
  Spex_Arm_Supports_Padprices6: 3300,
};
//endregion

//region --- 臀側支撐襯墊價格 ---
//Spex_Lateral_Thigh_Supports_Pad 臀側支撐襯墊
let Spex_Lateral_Thigh_Supports_Padprices = {
  Spex_Lateral_Thigh_Supports_Padprices1: 4000,
  Spex_Lateral_Thigh_Supports_Padprices2: 4000,
  Spex_Lateral_Thigh_Supports_Padprices3: 4000,
  Spex_Lateral_Thigh_Supports_Padprices4: 4000,
  Spex_Lateral_Thigh_Supports_Padprices5: 4000,
  Spex_Lateral_Thigh_Supports_Padprices6: 4600,
};
//endregion

let armsupportsCheckbox = document.querySelector("#Spex_ArmSupports");
let lateralthighsupportsCheckbox = document.querySelector(
  "#Spex_LateralThighSupports"
);
let armsup_latthighCheckbox = document.querySelector("#Spex_ArmSup_LatThigh");

document.addEventListener("DOMContentLoaded", function () {
  let buckle = document.querySelector(".Spexarmsuplatthigh_bucklesel");
  let armsup = document.querySelector(".Spexarmsuplatthigh_armsupsel");
  let latthigh = document.querySelector(".Spexarmsuplatthigh_latthighsel");
  let SpexarmlatOrgprices = document.querySelector(".SpexarmlatOrgprices");
  let SpexarmOrgprices = document.querySelector(".SpexarmOrgprices");
  let SpexlatOrgprices = document.querySelector(".SpexlatOrgprices");

  //region --- 計算扶手襯墊價錢 ---
  function ArmSupportsPad(Option, padprice) {
    let armpadcount = document.getElementById("armpadcount");
    let armpadquantity = parseInt(armpadcount.value) || 0; // 轉成數字（預設為 0）

    if (Option.value === "option2") {
      let armpadnewprice =
        padprice.Spex_Arm_Supports_Padprices1 * armpadquantity;
      return armpadnewprice;
    }
    if (Option.value === "option3") {
      let armpadnewprice =
        padprice.Spex_Arm_Supports_Padprices2 * armpadquantity;
      return armpadnewprice;
    }
    if (Option.value === "option4") {
      let armpadnewprice =
        padprice.Spex_Arm_Supports_Padprices3 * armpadquantity;
      return armpadnewprice;
    }
    if (Option.value === "option5") {
      let armpadnewprice =
        padprice.Spex_Arm_Supports_Padprices4 * armpadquantity;
      return armpadnewprice;
    }
    if (Option.value === "option6") {
      let armpadnewprice =
        padprice.Spex_Arm_Supports_Padprices5 * armpadquantity;
      return armpadnewprice;
    }
    if (Option.value === "option7") {
      let armpadnewprice =
        padprice.Spex_Arm_Supports_Padprices6 * armpadquantity;
      return armpadnewprice;
    }
    return 0; // 如果不是，就回傳 0
  }
  //endregion

  //region --- 計算臀側支撐襯墊價錢 ---
  function LateralThighPad(Option, padprice) {
    let lateralpadcount = document.getElementById("lateralpadcount");
    let lateralpadquantity = parseInt(lateralpadcount.value) || 0; // 轉成數字（預設為 0）

    if (Option.value === "option2") {
      let armpadnewprice =
        padprice.Spex_Lateral_Thigh_Supports_Padprices1 * lateralpadquantity;
      return armpadnewprice;
    }
    if (Option.value === "option3") {
      let armpadnewprice =
        padprice.Spex_Lateral_Thigh_Supports_Padprices2 * lateralpadquantity;
      return armpadnewprice;
    }
    if (Option.value === "option4") {
      let armpadnewprice =
        padprice.Spex_Lateral_Thigh_Supports_Padprices3 * lateralpadquantity;
      return armpadnewprice;
    }
    if (Option.value === "option5") {
      let armpadnewprice =
        padprice.Spex_Lateral_Thigh_Supports_Padprices4 * lateralpadquantity;
      return armpadnewprice;
    }
    if (Option.value === "option6") {
      let armpadnewprice =
        padprice.Spex_Lateral_Thigh_Supports_Padprices5 * lateralpadquantity;
      return armpadnewprice;
    }
    if (Option.value === "option7") {
      let armpadnewprice =
        padprice.Spex_Lateral_Thigh_Supports_Padprices6 * lateralpadquantity;
      return armpadnewprice;
    }
    return 0; // 如果不是，就回傳 0
  }
  //endregion

  //region --- 監聽扶手臀撐數量 ---
  let armsuplatthighInput = document.getElementById("Spexarmsuplatthighcount");
  armsuplatthighInput.addEventListener("change", function () {
    let armsuplatthighquantity = parseInt(armsuplatthighInput.value) || 0; // 轉成數字（預設為 0）
    let buckleOption = buckle.options[buckle.selectedIndex];
    let armsupOption = armsup.options[armsup.selectedIndex];
    let latthighOption = latthigh.options[latthigh.selectedIndex];
    let armpadOption = armpad.options[armpad.selectedIndex];
    let lateralpadOption = lateralpad.options[lateralpad.selectedIndex];
    let armvalue = parseInt(armpadInput.value);
    let lateralvalue = parseInt(lateralpadInput.value);

    //region --- 純計算數量價錢 ---

    //region --- 扶手支撐 ---
    if (
      armsupportsCheckbox.id === "Spex_ArmSupports" &&
      armsupportsCheckbox.checked
    ) {
      if (!isNaN(armsuplatthighquantity) && armsuplatthighquantity > 0) {
        if (
          buckleOption.text === "快拆式" &&
          armsupOption.text === "角度可調"
        ) {
          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            Spex_Arm_Supports_Quickprices.Spex_Arm_Supports_Quickprices1 *
              armsuplatthighquantity
          )} 元`;
        }
        if (
          buckleOption.text === "快拆式" &&
          armsupOption.text === "角度固定"
        ) {
          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            Spex_Arm_Supports_Quickprices.Spex_Arm_Supports_Quickprices2 *
              armsuplatthighquantity
          )} 元`;
        }

        if (
          buckleOption.text === "下擺式" &&
          armsupOption.text === "角度可調"
        ) {
          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            Spex_Arm_Supports_FlipDownprices.Spex_Arm_Supports_FlipDownprices1 *
              armsuplatthighquantity
          )} 元`;
        }
        if (
          buckleOption.text === "下擺式" &&
          armsupOption.text === "角度固定"
        ) {
          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            Spex_Arm_Supports_FlipDownprices.Spex_Arm_Supports_FlipDownprices2 *
              armsuplatthighquantity
          )} 元`;
        }

        if (
          buckleOption.text === "固定式" &&
          armsupOption.text === "角度可調"
        ) {
          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            Spex_Arm_Supports_Fixedprices.Spex_Arm_Supports_Fixedprices1 *
              armsuplatthighquantity
          )} 元`;
        }
        if (
          buckleOption.text === "固定式" &&
          armsupOption.text === "角度固定"
        ) {
          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            Spex_Arm_Supports_Fixedprices.Spex_Arm_Supports_Fixedprices2 *
              armsuplatthighquantity
          )} 元`;
        }
      }
    }
    //endregion

    //region --- 臀側支撐 ---
    if (
      lateralthighsupportsCheckbox.id === "Spex_LateralThighSupports" &&
      lateralthighsupportsCheckbox.checked
    ) {
      if (!isNaN(armsuplatthighquantity) && armsuplatthighquantity > 0) {
        if (buckleOption.text === "快拆式" && latthighOption.text === "多軸") {
          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            Spex_Lateral_Thigh_Supports_Quickprices.Spex_Lateral_Thigh_Supports_Quickprices1 *
              armsuplatthighquantity
          )} 元`;
        }
        if (buckleOption.text === "快拆式" && latthighOption.text === "固定") {
          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            Spex_Lateral_Thigh_Supports_Quickprices.Spex_Lateral_Thigh_Supports_Quickprices2 *
              armsuplatthighquantity
          )} 元`;
        }

        if (buckleOption.text === "下擺式" && latthighOption.text === "多軸") {
          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            Spex_Lateral_Thigh_Supports_FlipDownprices.Spex_Lateral_Thigh_Supports_FlipDownprices1 *
              armsuplatthighquantity
          )} 元`;
        }
        if (buckleOption.text === "下擺式" && latthighOption.text === "固定") {
          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            Spex_Lateral_Thigh_Supports_FlipDownprices.Spex_Lateral_Thigh_Supports_FlipDownprices2 *
              armsuplatthighquantity
          )} 元`;
        }
      }
    }
    //endregion

    //region --- 扶手臀撐 ---
    if (
      armsup_latthighCheckbox.id === "Spex_ArmSup_LatThigh" &&
      armsup_latthighCheckbox.checked
    ) {
      if (!isNaN(armsuplatthighquantity) && armsuplatthighquantity > 0) {
        if (
          buckleOption.text === "快拆式" &&
          armsupOption.text === "角度可調" &&
          latthighOption.text === "多軸"
        ) {
          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices1 *
              armsuplatthighquantity
          )} 元`;
        }
        if (
          buckleOption.text === "快拆式" &&
          armsupOption.text === "角度可調" &&
          latthighOption.text === "固定"
        ) {
          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices2 *
              armsuplatthighquantity
          )} 元`;
        }
        if (
          buckleOption.text === "快拆式" &&
          armsupOption.text === "角度固定" &&
          latthighOption.text === "多軸"
        ) {
          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices3 *
              armsuplatthighquantity
          )} 元`;
        }
        if (
          buckleOption.text === "快拆式" &&
          armsupOption.text === "角度固定" &&
          latthighOption.text === "固定"
        ) {
          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices4 *
              armsuplatthighquantity
          )} 元`;
        }

        if (
          buckleOption.text === "下擺式" &&
          armsupOption.text === "角度可調" &&
          latthighOption.text === "多軸"
        ) {
          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices1 *
              armsuplatthighquantity
          )} 元`;
        }
        if (
          buckleOption.text === "下擺式" &&
          armsupOption.text === "角度可調" &&
          latthighOption.text === "固定"
        ) {
          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices2 *
              armsuplatthighquantity
          )} 元`;
        }
        if (
          buckleOption.text === "下擺式" &&
          armsupOption.text === "角度固定" &&
          latthighOption.text === "多軸"
        ) {
          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices3 *
              armsuplatthighquantity
          )} 元`;
        }
        if (
          buckleOption.text === "下擺式" &&
          armsupOption.text === "角度固定" &&
          latthighOption.text === "固定"
        ) {
          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices4 *
              armsuplatthighquantity
          )} 元`;
        }

        if (
          buckleOption.text === "固定式" &&
          armsupOption.text === "角度可調" &&
          latthighOption.text === "多軸"
        ) {
          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices1 *
              armsuplatthighquantity
          )} 元`;
        }
        if (
          buckleOption.text === "固定式" &&
          armsupOption.text === "角度可調" &&
          latthighOption.text === "固定"
        ) {
          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices2 *
              armsuplatthighquantity
          )} 元`;
        }
        if (
          buckleOption.text === "固定式" &&
          armsupOption.text === "角度固定" &&
          latthighOption.text === "多軸"
        ) {
          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices3 *
              armsuplatthighquantity
          )} 元`;
        }
        if (
          buckleOption.text === "固定式" &&
          armsupOption.text === "角度固定" &&
          latthighOption.text === "固定"
        ) {
          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices4 *
              armsuplatthighquantity
          )} 元`;
        }
      }
    }
    //endregion

    //endregion

    //region --- 扶手支撐---
    if (
      armsupportsCheckbox.id === "Spex_ArmSupports" &&
      armsupportsCheckbox.checked &&
      !isNaN(armvalue) &&
      armvalue > 0
    ) {
      if (buckleOption.text === "快拆式" && armsupOption.text === "角度可調") {
        let armsupprice = ArmSupportsPad(
          armpadOption,
          Spex_Arm_Supports_Padprices
        );
        let armsupportprice =
          armsupprice +
          Spex_Arm_Supports_Quickprices.Spex_Arm_Supports_Quickprices1 *
            armsuplatthighquantity;

        SpexarmlatOrgprices.textContent = `${formatPrice(
          Spex_Arm_Supports_Quickprices.Spex_Arm_Supports_Quickprices1 *
            armsuplatthighquantity
        )} 元`;

        SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          armsupportprice
        )} 元`;
      }

      if (buckleOption.text === "快拆式" && armsupOption.text === "角度固定") {
        let armsupprice = ArmSupportsPad(
          armpadOption,
          Spex_Arm_Supports_Padprices
        );
        let armsupportprice =
          armsupprice +
          Spex_Arm_Supports_Quickprices.Spex_Arm_Supports_Quickprices2 *
            armsuplatthighquantity;

        SpexarmlatOrgprices.textContent = `${formatPrice(
          Spex_Arm_Supports_Quickprices.Spex_Arm_Supports_Quickprices2 *
            armsuplatthighquantity
        )} 元`;

        SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          armsupportprice
        )} 元`;
      }

      if (buckleOption.text === "下擺式" && armsupOption.text === "角度可調") {
        let armsupprice = ArmSupportsPad(
          armpadOption,
          Spex_Arm_Supports_Padprices
        );
        let armsupportprice =
          armsupprice +
          Spex_Arm_Supports_FlipDownprices.Spex_Arm_Supports_FlipDownprices1 *
            armsuplatthighquantity;

        SpexarmlatOrgprices.textContent = `${formatPrice(
          Spex_Arm_Supports_FlipDownprices.Spex_Arm_Supports_FlipDownprices1 *
            armsuplatthighquantity
        )} 元`;

        SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          armsupportprice
        )} 元`;
      }
      if (buckleOption.text === "下擺式" && armsupOption.text === "角度固定") {
        let armsupprice = ArmSupportsPad(
          armpadOption,
          Spex_Arm_Supports_Padprices
        );
        let armsupportprice =
          armsupprice +
          Spex_Arm_Supports_FlipDownprices.Spex_Arm_Supports_FlipDownprices2 *
            armsuplatthighquantity;

        SpexarmlatOrgprices.textContent = `${formatPrice(
          Spex_Arm_Supports_FlipDownprices.Spex_Arm_Supports_FlipDownprices2 *
            armsuplatthighquantity
        )} 元`;

        SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          armsupportprice
        )} 元`;
      }

      if (buckleOption.text === "固定式" && armsupOption.text === "角度可調") {
        let armsupprice = ArmSupportsPad(
          armpadOption,
          Spex_Arm_Supports_Padprices
        );
        let armsupportprice =
          armsupprice +
          Spex_Arm_Supports_Fixedprices.Spex_Arm_Supports_Fixedprices1 *
            armsuplatthighquantity;

        SpexarmlatOrgprices.textContent = `${formatPrice(
          Spex_Arm_Supports_Fixedprices.Spex_Arm_Supports_Fixedprices1 *
            armsuplatthighquantity
        )} 元`;

        SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          armsupportprice
        )} 元`;
      }
      if (buckleOption.text === "固定式" && armsupOption.text === "角度固定") {
        let armsupprice = ArmSupportsPad(
          armpadOption,
          Spex_Arm_Supports_Padprices
        );
        let armsupportprice =
          armsupprice +
          Spex_Arm_Supports_Fixedprices.Spex_Arm_Supports_Fixedprices2 *
            armsuplatthighquantity;

        SpexarmlatOrgprices.textContent = `${formatPrice(
          Spex_Arm_Supports_Fixedprices.Spex_Arm_Supports_Fixedprices2 *
            armsuplatthighquantity
        )} 元`;

        SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          armsupportprice
        )} 元`;
      }
      //endregion

      //region --- 臀側支撐 ---
      if (
        lateralthighsupportsCheckbox.id === "Spex_LateralThighSupports" &&
        lateralthighsupportsCheckbox.checked &&
        !isNaN(lateralvalue) &&
        lateralvalue > 0
      ) {
        if (buckleOption.text === "快拆式" && latthighOption.text === "多軸") {
          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );
          let lateralthighsupportsprice =
            latthighprice +
            Spex_Lateral_Thigh_Supports_Quickprices.Spex_Lateral_Thigh_Supports_Quickprices1 *
              armsuplatthighquantity;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_Lateral_Thigh_Supports_Quickprices.Spex_Lateral_Thigh_Supports_Quickprices1 *
              armsuplatthighquantity
          )} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            lateralthighsupportsprice
          )} 元`;
        }
        if (buckleOption.text === "快拆式" && latthighOption.text === "固定") {
          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );
          let lateralthighsupportsprice =
            latthighprice +
            Spex_Lateral_Thigh_Supports_Quickprices.Spex_Lateral_Thigh_Supports_Quickprices2 *
              armsuplatthighquantity;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_Lateral_Thigh_Supports_Quickprices.Spex_Lateral_Thigh_Supports_Quickprices2 *
              armsuplatthighquantity
          )} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            lateralthighsupportsprice
          )} 元`;
        }

        if (buckleOption.text === "下擺式" && latthighOption.text === "多軸") {
          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );
          let lateralthighsupportsprice =
            latthighprice +
            Spex_Lateral_Thigh_Supports_FlipDownprices.Spex_Lateral_Thigh_Supports_FlipDownprices1 *
              armsuplatthighquantity;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_Lateral_Thigh_Supports_FlipDownprices.Spex_Lateral_Thigh_Supports_FlipDownprices1 *
              armsuplatthighquantity
          )} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            lateralthighsupportsprice
          )} 元`;
        }
        if (buckleOption.text === "下擺式" && latthighOption.text === "固定") {
          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );
          let lateralthighsupportsprice =
            latthighprice +
            Spex_Lateral_Thigh_Supports_FlipDownprices.Spex_Lateral_Thigh_Supports_FlipDownprices2 *
              armsuplatthighquantity;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_Lateral_Thigh_Supports_FlipDownprices.Spex_Lateral_Thigh_Supports_FlipDownprices2 *
              armsuplatthighquantity
          )} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            lateralthighsupportsprice
          )} 元`;
        }
        //endregion

        //region --- 扶手臀撐 ---
      } else if (
        armsup_latthighCheckbox.id === "Spex_ArmSup_LatThigh" &&
        armsup_latthighCheckbox.checked &&
        !isNaN(armvalue) &&
        armvalue > 0 &&
        !isNaN(lateralvalue) &&
        lateralvalue > 0
      ) {
        if (
          buckleOption.text === "快拆式" &&
          armsupOption.text === "角度可調" &&
          latthighOption.text === "多軸"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );

          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );

          let armsup_latthighsprice =
            Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices1 *
              armsuplatthighquantity +
            armsupprice +
            latthighprice;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices1 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsup_latthighsprice
          )} 元`;
        }
        if (
          buckleOption.text === "快拆式" &&
          armsupOption.text === "角度可調" &&
          latthighOption.text === "固定"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );

          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );

          let armsup_latthighsprice =
            Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices2 *
              armsuplatthighquantity +
            armsupprice +
            latthighprice;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices2 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsup_latthighsprice
          )} 元`;
        }
        if (
          buckleOption.text === "快拆式" &&
          armsupOption.text === "角度固定" &&
          latthighOption.text === "多軸"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );

          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );

          let armsup_latthighsprice =
            Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices3 *
              armsuplatthighquantity +
            armsupprice +
            latthighprice;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices3 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsup_latthighsprice
          )} 元`;
        }
        if (
          buckleOption.text === "快拆式" &&
          armsupOption.text === "角度固定" &&
          latthighOption.text === "固定"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );

          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );

          let armsup_latthighsprice =
            Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices4 *
              armsuplatthighquantity +
            armsupprice +
            latthighprice;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices4 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsup_latthighsprice
          )} 元`;
        }

        if (
          buckleOption.text === "下擺式" &&
          armsupOption.text === "角度可調" &&
          latthighOption.text === "多軸"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );

          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );

          let armsup_latthighsprice =
            Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices1 *
              armsuplatthighquantity +
            armsupprice +
            latthighprice;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices1 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsup_latthighsprice
          )} 元`;
        }
        if (
          buckleOption.text === "下擺式" &&
          armsupOption.text === "角度可調" &&
          latthighOption.text === "固定"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );

          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );

          let armsup_latthighsprice =
            Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices2 *
              armsuplatthighquantity +
            armsupprice +
            latthighprice;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices2 *
              armsuplatthighquantity
          )} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsup_latthighsprice
          )} 元`;
        }
        if (
          buckleOption.text === "下擺式" &&
          armsupOption.text === "角度固定" &&
          latthighOption.text === "多軸"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );

          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );

          let armsup_latthighsprice =
            Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices3 *
              armsuplatthighquantity +
            armsupprice +
            latthighprice;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices3 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsup_latthighsprice
          )} 元`;
        }
        if (
          buckleOption.text === "下擺式" &&
          armsupOption.text === "角度固定" &&
          latthighOption.text === "固定"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );

          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );

          let armsup_latthighsprice =
            Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices4 *
              armsuplatthighquantity +
            armsupprice +
            latthighprice;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices4 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsup_latthighsprice
          )} 元`;
        }

        if (
          buckleOption.text === "固定式" &&
          armsupOption.text === "角度可調" &&
          latthighOption.text === "多軸"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );

          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );

          let armsup_latthighsprice =
            Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices1 *
              armsuplatthighquantity +
            armsupprice +
            latthighprice;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices1 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsup_latthighsprice
          )} 元`;
        }
        if (
          buckleOption.text === "固定式" &&
          armsupOption.text === "角度可調" &&
          latthighOption.text === "固定"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );

          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );

          let armsup_latthighsprice =
            Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices2 *
              armsuplatthighquantity +
            armsupprice +
            latthighprice;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices2 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsup_latthighsprice
          )} 元`;
        }
        if (
          buckleOption.text === "固定式" &&
          armsupOption.text === "角度固定" &&
          latthighOption.text === "多軸"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );

          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );

          let armsup_latthighsprice =
            Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices3 *
              armsuplatthighquantity +
            armsupprice +
            latthighprice;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices3 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsup_latthighsprice
          )} 元`;
        }
        if (
          buckleOption.text === "固定式" &&
          armsupOption.text === "角度固定" &&
          latthighOption.text === "固定"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );

          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );

          let armsup_latthighsprice =
            Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices4 *
              armsuplatthighquantity +
            armsupprice +
            latthighprice;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices4 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsup_latthighsprice
          )} 元`;
        }
      }
    }
    //endregion
  });
  //endregion

  //region --- 監聽扣具 ---
  buckle.addEventListener("change", function () {
    let armsuplatthighcount = document.getElementById(
      "Spexarmsuplatthighcount"
    );
    let armsuplatthighquantity = parseInt(armsuplatthighcount.value) || 0; // 轉成數字（預設為 0）

    let buckleOption = buckle.options[buckle.selectedIndex];
    let armsupOption = armsup.options[armsup.selectedIndex];
    let latthighOption = latthigh.options[latthigh.selectedIndex];
    let armpadOption = armpad.options[armpad.selectedIndex];
    let lateralpadOption = lateralpad.options[lateralpad.selectedIndex];
    let armvalue = parseInt(armpadInput.value);
    let lateralvalue = parseInt(lateralpadInput.value);

    //region --- 扶手支撐 ---
    if (
      armsupportsCheckbox.id === "Spex_ArmSupports" &&
      armsupportsCheckbox.checked
    ) {
      if (buckleOption.text === "快拆式" && armsupOption.text === "角度可調") {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_Arm_Supports_Quickprices.Spex_Arm_Supports_Quickprices1 *
            armsuplatthighquantity
        )} 元`;
      }
      if (buckleOption.text === "快拆式" && armsupOption.text === "角度固定") {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_Arm_Supports_Quickprices.Spex_Arm_Supports_Quickprices2 *
            armsuplatthighquantity
        )} 元`;
      }

      if (buckleOption.text === "下擺式" && armsupOption.text === "角度可調") {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_Arm_Supports_FlipDownprices.Spex_Arm_Supports_FlipDownprices1 *
            armsuplatthighquantity
        )} 元`;
      }
      if (buckleOption.text === "下擺式" && armsupOption.text === "角度固定") {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_Arm_Supports_FlipDownprices.Spex_Arm_Supports_FlipDownprices2 *
            armsuplatthighquantity
        )} 元`;
      }

      if (buckleOption.text === "固定式" && armsupOption.text === "角度可調") {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_Arm_Supports_Fixedprices.Spex_Arm_Supports_Fixedprices1 *
            armsuplatthighquantity
        )} 元`;
      }
      if (buckleOption.text === "固定式" && armsupOption.text === "角度固定") {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_Arm_Supports_Fixedprices.Spex_Arm_Supports_Fixedprices2 *
            armsuplatthighquantity
        )} 元`;
      }
      //endregion

      //region --- 臀側支撐 ---
    } else if (
      lateralthighsupportsCheckbox.id === "Spex_LateralThighSupports" &&
      lateralthighsupportsCheckbox.checked
    ) {
      if (buckleOption.text === "快拆式" && latthighOption.text === "多軸") {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_Lateral_Thigh_Supports_Quickprices.Spex_Lateral_Thigh_Supports_Quickprices1 *
            armsuplatthighquantity
        )} 元`;
      }
      if (buckleOption.text === "快拆式" && latthighOption.text === "固定") {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_Lateral_Thigh_Supports_Quickprices.Spex_Lateral_Thigh_Supports_Quickprices2 *
            armsuplatthighquantity
        )} 元`;
      }

      if (buckleOption.text === "下擺式" && latthighOption.text === "多軸") {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_Lateral_Thigh_Supports_FlipDownprices.Spex_Lateral_Thigh_Supports_FlipDownprices1 *
            armsuplatthighquantity
        )} 元`;
      }
      if (buckleOption.text === "下擺式" && latthighOption.text === "固定") {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_Lateral_Thigh_Supports_FlipDownprices.Spex_Lateral_Thigh_Supports_FlipDownprices2 *
            armsuplatthighquantity
        )} 元`;
      }
      //endregion

      //region --- 扶手臀撐 ---
    } else if (
      armsup_latthighCheckbox.id === "Spex_ArmSup_LatThigh" &&
      armsup_latthighCheckbox.checked
    ) {
      if (
        buckleOption.text === "快拆式" &&
        armsupOption.text === "角度可調" &&
        latthighOption.text === "多軸"
      ) {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices1 *
            armsuplatthighquantity
        )} 元`;
      }
      if (
        buckleOption.text === "快拆式" &&
        armsupOption.text === "角度可調" &&
        latthighOption.text === "固定"
      ) {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices2 *
            armsuplatthighquantity
        )} 元`;
      }
      if (
        buckleOption.text === "快拆式" &&
        armsupOption.text === "角度固定" &&
        latthighOption.text === "多軸"
      ) {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices3 *
            armsuplatthighquantity
        )} 元`;
      }
      if (
        buckleOption.text === "快拆式" &&
        armsupOption.text === "角度固定" &&
        latthighOption.text === "固定"
      ) {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices4 *
            armsuplatthighquantity
        )} 元`;
      }

      if (
        buckleOption.text === "下擺式" &&
        armsupOption.text === "角度可調" &&
        latthighOption.text === "多軸"
      ) {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices1 *
            armsuplatthighquantity
        )} 元`;
      }
      if (
        buckleOption.text === "下擺式" &&
        armsupOption.text === "角度可調" &&
        latthighOption.text === "固定"
      ) {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices2 *
            armsuplatthighquantity
        )} 元`;
      }
      if (
        buckleOption.text === "下擺式" &&
        armsupOption.text === "角度固定" &&
        latthighOption.text === "多軸"
      ) {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices3 *
            armsuplatthighquantity
        )} 元`;
      }
      if (
        buckleOption.text === "下擺式" &&
        armsupOption.text === "角度固定" &&
        latthighOption.text === "固定"
      ) {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices4 *
            armsuplatthighquantity
        )} 元`;
      }

      if (
        buckleOption.text === "固定式" &&
        armsupOption.text === "角度可調" &&
        latthighOption.text === "多軸"
      ) {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices1 *
            armsuplatthighquantity
        )} 元`;
      }
      if (
        buckleOption.text === "固定式" &&
        armsupOption.text === "角度可調" &&
        latthighOption.text === "固定"
      ) {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices2 *
            armsuplatthighquantity
        )} 元`;
      }
      if (
        buckleOption.text === "固定式" &&
        armsupOption.text === "角度固定" &&
        latthighOption.text === "多軸"
      ) {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices3 *
            armsuplatthighquantity
        )} 元`;
      }
      if (
        buckleOption.text === "固定式" &&
        armsupOption.text === "角度固定" &&
        latthighOption.text === "固定"
      ) {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices4 *
            armsuplatthighquantity
        )} 元`;
      }
    }
    //endregion
  });
  //endregion

  //region --- 監聽扶手角度 ---
  armsup.addEventListener("change", function () {
    let armsuplatthighcount = document.getElementById(
      "Spexarmsuplatthighcount"
    );
    let armsuplatthighquantity = parseInt(armsuplatthighcount.value) || 0; // 轉成數字（預設為 0）
    let buckleOption = buckle.options[buckle.selectedIndex];
    let armsupOption = armsup.options[armsup.selectedIndex];
    let armvalue = parseInt(armpadInput.value);
    let latthighOption = latthigh.options[latthigh.selectedIndex];

    //region --- 扶手支撐 ---
    // if (
    //   armsupportsCheckbox.id === "Spex_ArmSupports" &&
    //   armsupportsCheckbox.checked
    // ) {
    //   if (buckleOption.text === "快拆式" && armsupOption.text === "角度可調") {
    //     nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
    //       Spex_Arm_Supports_Quickprices.Spex_Arm_Supports_Quickprices1 *
    //         armsuplatthighquantity
    //     )} 元`;
    //   }
    //   if (buckleOption.text === "快拆式" && armsupOption.text === "角度固定") {
    //     nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
    //       Spex_Arm_Supports_Quickprices.Spex_Arm_Supports_Quickprices2 *
    //         armsuplatthighquantity
    //     )} 元`;
    //   }

    //   if (buckleOption.text === "下擺式" && armsupOption.text === "角度可調") {
    //     nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
    //       Spex_Arm_Supports_FlipDownprices.Spex_Arm_Supports_FlipDownprices1 *
    //         armsuplatthighquantity
    //     )} 元`;
    //   }
    //   if (buckleOption.text === "下擺式" && armsupOption.text === "角度固定") {
    //     nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
    //       Spex_Arm_Supports_FlipDownprices.Spex_Arm_Supports_FlipDownprices2 *
    //         armsuplatthighquantity
    //     )} 元`;
    //   }

    //   if (buckleOption.text === "固定式" && armsupOption.text === "角度可調") {
    //     nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
    //       Spex_Arm_Supports_Fixedprices.Spex_Arm_Supports_Fixedprices1 *
    //         armsuplatthighquantity
    //     )} 元`;
    //   }
    //   if (buckleOption.text === "固定式" && armsupOption.text === "角度固定") {
    //     nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
    //       Spex_Arm_Supports_Fixedprices.Spex_Arm_Supports_Fixedprices2 *
    //         armsuplatthighquantity
    //     )} 元`;
    //   }
    //endregion
    //region --- 扶手支撐---
    if (
      armsupportsCheckbox.id === "Spex_ArmSupports" &&
      armsupportsCheckbox.checked &&
      !isNaN(armvalue) &&
      armvalue > 0
    ) {
      if (buckleOption.text === "快拆式" && armsupOption.text === "角度可調") {
        let armsupprice = ArmSupportsPad(
          armpadOption,
          Spex_Arm_Supports_Padprices
        );
        let armsupportprice =
          armsupprice +
          Spex_Arm_Supports_Quickprices.Spex_Arm_Supports_Quickprices1 *
            armsuplatthighquantity;

        SpexarmlatOrgprices.textContent = `${formatPrice(
          Spex_Arm_Supports_Quickprices.Spex_Arm_Supports_Quickprices1 *
            armsuplatthighquantity
        )} 元`;

        SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          armsupportprice
        )} 元`;
      }

      if (buckleOption.text === "快拆式" && armsupOption.text === "角度固定") {
        let armsupprice = ArmSupportsPad(
          armpadOption,
          Spex_Arm_Supports_Padprices
        );
        let armsupportprice =
          armsupprice +
          Spex_Arm_Supports_Quickprices.Spex_Arm_Supports_Quickprices2 *
            armsuplatthighquantity;

        SpexarmlatOrgprices.textContent = `${formatPrice(
          Spex_Arm_Supports_Quickprices.Spex_Arm_Supports_Quickprices2 *
            armsuplatthighquantity
        )} 元`;

        SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          armsupportprice
        )} 元`;
      }

      if (buckleOption.text === "下擺式" && armsupOption.text === "角度可調") {
        let armsupprice = ArmSupportsPad(
          armpadOption,
          Spex_Arm_Supports_Padprices
        );
        let armsupportprice =
          armsupprice +
          Spex_Arm_Supports_FlipDownprices.Spex_Arm_Supports_FlipDownprices1 *
            armsuplatthighquantity;

        SpexarmlatOrgprices.textContent = `${formatPrice(
          Spex_Arm_Supports_FlipDownprices.Spex_Arm_Supports_FlipDownprices1 *
            armsuplatthighquantity
        )} 元`;

        SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          armsupportprice
        )} 元`;
      }
      if (buckleOption.text === "下擺式" && armsupOption.text === "角度固定") {
        let armsupprice = ArmSupportsPad(
          armpadOption,
          Spex_Arm_Supports_Padprices
        );
        let armsupportprice =
          armsupprice +
          Spex_Arm_Supports_FlipDownprices.Spex_Arm_Supports_FlipDownprices2 *
            armsuplatthighquantity;

        SpexarmlatOrgprices.textContent = `${formatPrice(
          Spex_Arm_Supports_FlipDownprices.Spex_Arm_Supports_FlipDownprices2 *
            armsuplatthighquantity
        )} 元`;

        SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          armsupportprice
        )} 元`;
      }

      if (buckleOption.text === "固定式" && armsupOption.text === "角度可調") {
        let armsupprice = ArmSupportsPad(
          armpadOption,
          Spex_Arm_Supports_Padprices
        );
        let armsupportprice =
          armsupprice +
          Spex_Arm_Supports_Fixedprices.Spex_Arm_Supports_Fixedprices1 *
            armsuplatthighquantity;

        SpexarmlatOrgprices.textContent = `${formatPrice(
          Spex_Arm_Supports_Fixedprices.Spex_Arm_Supports_Fixedprices1 *
            armsuplatthighquantity
        )} 元`;

        SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          armsupportprice
        )} 元`;
      }
      if (buckleOption.text === "固定式" && armsupOption.text === "角度固定") {
        let armsupprice = ArmSupportsPad(
          armpadOption,
          Spex_Arm_Supports_Padprices
        );
        let armsupportprice =
          armsupprice +
          Spex_Arm_Supports_Fixedprices.Spex_Arm_Supports_Fixedprices2 *
            armsuplatthighquantity;

        SpexarmlatOrgprices.textContent = `${formatPrice(
          Spex_Arm_Supports_Fixedprices.Spex_Arm_Supports_Fixedprices2 *
            armsuplatthighquantity
        )} 元`;

        SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          armsupportprice
        )} 元`;
      }
      //endregion

      //region --- 扶手臀撐 ---
    } else if (
      armsup_latthighCheckbox.id === "Spex_ArmSup_LatThigh" &&
      armsup_latthighCheckbox.checked
    ) {
      if (
        buckleOption.text === "快拆式" &&
        armsupOption.text === "角度可調" &&
        latthighOption.text === "多軸"
      ) {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices1 *
            armsuplatthighquantity
        )} 元`;
      }
      if (
        buckleOption.text === "快拆式" &&
        armsupOption.text === "角度可調" &&
        latthighOption.text === "固定"
      ) {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices2 *
            armsuplatthighquantity
        )} 元`;
      }
      if (
        buckleOption.text === "快拆式" &&
        armsupOption.text === "角度固定" &&
        latthighOption.text === "多軸"
      ) {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices3 *
            armsuplatthighquantity
        )} 元`;
      }
      if (
        buckleOption.text === "快拆式" &&
        armsupOption.text === "角度固定" &&
        latthighOption.text === "固定"
      ) {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices4 *
            armsuplatthighquantity
        )} 元`;
      }

      if (
        buckleOption.text === "下擺式" &&
        armsupOption.text === "角度可調" &&
        latthighOption.text === "多軸"
      ) {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices1 *
            armsuplatthighquantity
        )} 元`;
      }
      if (
        buckleOption.text === "下擺式" &&
        armsupOption.text === "角度可調" &&
        latthighOption.text === "固定"
      ) {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices2 *
            armsuplatthighquantity
        )} 元`;
      }
      if (
        buckleOption.text === "下擺式" &&
        armsupOption.text === "角度固定" &&
        latthighOption.text === "多軸"
      ) {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices3 *
            armsuplatthighquantity
        )} 元`;
      }
      if (
        buckleOption.text === "下擺式" &&
        armsupOption.text === "角度固定" &&
        latthighOption.text === "固定"
      ) {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices4 *
            armsuplatthighquantity
        )} 元`;
      }

      if (
        buckleOption.text === "固定式" &&
        armsupOption.text === "角度可調" &&
        latthighOption.text === "多軸"
      ) {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices1 *
            armsuplatthighquantity
        )} 元`;
      }
      if (
        buckleOption.text === "固定式" &&
        armsupOption.text === "角度可調" &&
        latthighOption.text === "固定"
      ) {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices2 *
            armsuplatthighquantity
        )} 元`;
      }
      if (
        buckleOption.text === "固定式" &&
        armsupOption.text === "角度固定" &&
        latthighOption.text === "多軸"
      ) {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices3 *
            armsuplatthighquantity
        )} 元`;
      }
      if (
        buckleOption.text === "固定式" &&
        armsupOption.text === "角度固定" &&
        latthighOption.text === "固定"
      ) {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices4 *
            armsuplatthighquantity
        )} 元`;
      }
    }
    //endregion
  });
  //endregion

  //region --- 監聽腿墊調整 ---
  latthigh.addEventListener("change", function () {
    let armsuplatthighcount = document.getElementById(
      "Spexarmsuplatthighcount"
    );
    let armsuplatthighquantity = parseInt(armsuplatthighcount.value) || 0; // 轉成數字（預設為 0）
    let buckleOption = buckle.options[buckle.selectedIndex];
    let armsupOption = armsup.options[armsup.selectedIndex];
    let latthighOption = latthigh.options[latthigh.selectedIndex];

    //region --- 臀側支撐 ---
    if (
      lateralthighsupportsCheckbox.id === "Spex_LateralThighSupports" &&
      lateralthighsupportsCheckbox.checked
    ) {
      if (buckleOption.text === "快拆式" && latthighOption.text === "多軸") {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_Lateral_Thigh_Supports_Quickprices.Spex_Lateral_Thigh_Supports_Quickprices1 *
            armsuplatthighquantity
        )} 元`;
      }
      if (buckleOption.text === "快拆式" && latthighOption.text === "固定") {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_Lateral_Thigh_Supports_Quickprices.Spex_Lateral_Thigh_Supports_Quickprices2 *
            armsuplatthighquantity
        )} 元`;
      }

      if (buckleOption.text === "下擺式" && latthighOption.text === "多軸") {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_Lateral_Thigh_Supports_FlipDownprices.Spex_Lateral_Thigh_Supports_FlipDownprices1 *
            armsuplatthighquantity
        )} 元`;
      }
      if (buckleOption.text === "下擺式" && latthighOption.text === "固定") {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_Lateral_Thigh_Supports_FlipDownprices.Spex_Lateral_Thigh_Supports_FlipDownprices2 *
            armsuplatthighquantity
        )} 元`;
      }
      //endregion

      //region --- 扶手臀撐 ---
    } else if (
      armsup_latthighCheckbox.id === "Spex_ArmSup_LatThigh" &&
      armsup_latthighCheckbox.checked
    ) {
      if (
        buckleOption.text === "快拆式" &&
        armsupOption.text === "角度可調" &&
        latthighOption.text === "多軸"
      ) {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices1 *
            armsuplatthighquantity
        )} 元`;
      }
      if (
        buckleOption.text === "快拆式" &&
        armsupOption.text === "角度可調" &&
        latthighOption.text === "固定"
      ) {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices2 *
            armsuplatthighquantity
        )} 元`;
      }
      if (
        buckleOption.text === "快拆式" &&
        armsupOption.text === "角度固定" &&
        latthighOption.text === "多軸"
      ) {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices3 *
            armsuplatthighquantity
        )} 元`;
      }
      if (
        buckleOption.text === "快拆式" &&
        armsupOption.text === "角度固定" &&
        latthighOption.text === "固定"
      ) {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices4 *
            armsuplatthighquantity
        )} 元`;
      }

      if (
        buckleOption.text === "下擺式" &&
        armsupOption.text === "角度可調" &&
        latthighOption.text === "多軸"
      ) {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices1 *
            armsuplatthighquantity
        )} 元`;
      }
      if (
        buckleOption.text === "下擺式" &&
        armsupOption.text === "角度可調" &&
        latthighOption.text === "固定"
      ) {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices2 *
            armsuplatthighquantity
        )} 元`;
      }
      if (
        buckleOption.text === "下擺式" &&
        armsupOption.text === "角度固定" &&
        latthighOption.text === "多軸"
      ) {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices3 *
            armsuplatthighquantity
        )} 元`;
      }
      if (
        buckleOption.text === "下擺式" &&
        armsupOption.text === "角度固定" &&
        latthighOption.text === "固定"
      ) {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices4 *
            armsuplatthighquantity
        )} 元`;
      }

      if (
        buckleOption.text === "固定式" &&
        armsupOption.text === "角度可調" &&
        latthighOption.text === "多軸"
      ) {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices1 *
            armsuplatthighquantity
        )} 元`;
      }
      if (
        buckleOption.text === "固定式" &&
        armsupOption.text === "角度可調" &&
        latthighOption.text === "固定"
      ) {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices2 *
            armsuplatthighquantity
        )} 元`;
      }
      if (
        buckleOption.text === "固定式" &&
        armsupOption.text === "角度固定" &&
        latthighOption.text === "多軸"
      ) {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices3 *
            armsuplatthighquantity
        )} 元`;
      }
      if (
        buckleOption.text === "固定式" &&
        armsupOption.text === "角度固定" &&
        latthighOption.text === "固定"
      ) {
        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices4 *
            armsuplatthighquantity
        )} 元`;
      }
    }
    //endregion
  });
  //endregion

  //region --- 扶手襯墊尺寸 ---
  let armpad = document.querySelector(".Spexarmsuplatthigh_armpadsel");

  armpad.addEventListener("change", function () {
    let armsuplatthighcount = document.getElementById(
      "Spexarmsuplatthighcount"
    );
    let armsuplatthighquantity = parseInt(armsuplatthighcount.value) || 0; // 轉成數字（預設為 0）
    let buckleOption = buckle.options[buckle.selectedIndex];
    let armsupOption = armsup.options[armsup.selectedIndex];
    let latthighOption = latthigh.options[latthigh.selectedIndex];
    let armpadOption = armpad.options[armpad.selectedIndex];
    let lateralpadOption = lateralpad.options[lateralpad.selectedIndex];
    let armvalue = parseInt(armpadInput.value);
    let lateralvalue = parseInt(lateralpadInput.value);

    //region --- 扶手支撐---
    if (
      armsupportsCheckbox.id === "Spex_ArmSupports" &&
      armsupportsCheckbox.checked &&
      !isNaN(armvalue) &&
      armvalue > 0
    ) {
      if (buckleOption.text === "快拆式" && armsupOption.text === "角度可調") {
        let armsupprice = ArmSupportsPad(
          armpadOption,
          Spex_Arm_Supports_Padprices
        );
        let armsupportprice =
          armsupprice +
          Spex_Arm_Supports_Quickprices.Spex_Arm_Supports_Quickprices1 *
            armsuplatthighquantity;

        SpexarmlatOrgprices.textContent = `${formatPrice(
          Spex_Arm_Supports_Quickprices.Spex_Arm_Supports_Quickprices1 *
            armsuplatthighquantity
        )} 元`;

        SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          armsupportprice
        )} 元`;
      }

      if (buckleOption.text === "快拆式" && armsupOption.text === "角度固定") {
        let armsupprice = ArmSupportsPad(
          armpadOption,
          Spex_Arm_Supports_Padprices
        );
        let armsupportprice =
          armsupprice +
          Spex_Arm_Supports_Quickprices.Spex_Arm_Supports_Quickprices2 *
            armsuplatthighquantity;

        SpexarmlatOrgprices.textContent = `${formatPrice(
          Spex_Arm_Supports_Quickprices.Spex_Arm_Supports_Quickprices2 *
            armsuplatthighquantity
        )} 元`;

        SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          armsupportprice
        )} 元`;
      }

      if (buckleOption.text === "下擺式" && armsupOption.text === "角度可調") {
        let armsupprice = ArmSupportsPad(
          armpadOption,
          Spex_Arm_Supports_Padprices
        );
        let armsupportprice =
          armsupprice +
          Spex_Arm_Supports_FlipDownprices.Spex_Arm_Supports_FlipDownprices1 *
            armsuplatthighquantity;

        SpexarmlatOrgprices.textContent = `${formatPrice(
          Spex_Arm_Supports_FlipDownprices.Spex_Arm_Supports_FlipDownprices1 *
            armsuplatthighquantity
        )} 元`;

        SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          armsupportprice
        )} 元`;
      }
      if (buckleOption.text === "下擺式" && armsupOption.text === "角度固定") {
        let armsupprice = ArmSupportsPad(
          armpadOption,
          Spex_Arm_Supports_Padprices
        );
        let armsupportprice =
          armsupprice +
          Spex_Arm_Supports_FlipDownprices.Spex_Arm_Supports_FlipDownprices2 *
            armsuplatthighquantity;

        SpexarmlatOrgprices.textContent = `${formatPrice(
          Spex_Arm_Supports_FlipDownprices.Spex_Arm_Supports_FlipDownprices2 *
            armsuplatthighquantity
        )} 元`;

        SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          armsupportprice
        )} 元`;
      }

      if (buckleOption.text === "固定式" && armsupOption.text === "角度可調") {
        let armsupprice = ArmSupportsPad(
          armpadOption,
          Spex_Arm_Supports_Padprices
        );
        let armsupportprice =
          armsupprice +
          Spex_Arm_Supports_Fixedprices.Spex_Arm_Supports_Fixedprices1 *
            armsuplatthighquantity;

        SpexarmlatOrgprices.textContent = `${formatPrice(
          Spex_Arm_Supports_Fixedprices.Spex_Arm_Supports_Fixedprices1 *
            armsuplatthighquantity
        )} 元`;

        SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          armsupportprice
        )} 元`;
      }
      if (buckleOption.text === "固定式" && armsupOption.text === "角度固定") {
        let armsupprice = ArmSupportsPad(
          armpadOption,
          Spex_Arm_Supports_Padprices
        );
        let armsupportprice =
          armsupprice +
          Spex_Arm_Supports_Fixedprices.Spex_Arm_Supports_Fixedprices2 *
            armsuplatthighquantity;

        SpexarmlatOrgprices.textContent = `${formatPrice(
          Spex_Arm_Supports_Fixedprices.Spex_Arm_Supports_Fixedprices2 *
            armsuplatthighquantity
        )} 元`;

        SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          armsupportprice
        )} 元`;
      }
    }
    //endregion

    //region --- 扶手臀撐 ---
    if (
      armsup_latthighCheckbox.id === "Spex_ArmSup_LatThigh" &&
      armsup_latthighCheckbox.checked &&
      !isNaN(armvalue) &&
      armvalue > 0 &&
      !isNaN(lateralvalue) &&
      lateralvalue > 0
    ) {
      if (
        buckleOption.text === "快拆式" &&
        armsupOption.text === "角度可調" &&
        latthighOption.text === "多軸"
      ) {
        let armsupprice = ArmSupportsPad(
          armpadOption,
          Spex_Arm_Supports_Padprices
        );

        let latthighprice = LateralThighPad(
          lateralpadOption,
          Spex_Lateral_Thigh_Supports_Padprices
        );

        let armsup_latthighsprice =
          Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices1 *
            armsuplatthighquantity +
          armsupprice +
          latthighprice;

        SpexarmlatOrgprices.textContent = `${formatPrice(
          Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices1 *
            armsuplatthighquantity
        )} 元`;

        SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

        SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          armsup_latthighsprice
        )} 元`;
      }
      if (
        buckleOption.text === "快拆式" &&
        armsupOption.text === "角度可調" &&
        latthighOption.text === "固定"
      ) {
        let armsupprice = ArmSupportsPad(
          armpadOption,
          Spex_Arm_Supports_Padprices
        );

        let latthighprice = LateralThighPad(
          lateralpadOption,
          Spex_Lateral_Thigh_Supports_Padprices
        );

        let armsup_latthighsprice =
          Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices2 *
            armsuplatthighquantity +
          armsupprice +
          latthighprice;

        SpexarmlatOrgprices.textContent = `${formatPrice(
          Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices2 *
            armsuplatthighquantity
        )} 元`;

        SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

        SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          armsup_latthighsprice
        )} 元`;
      }
      if (
        buckleOption.text === "快拆式" &&
        armsupOption.text === "角度固定" &&
        latthighOption.text === "多軸"
      ) {
        let armsupprice = ArmSupportsPad(
          armpadOption,
          Spex_Arm_Supports_Padprices
        );

        let latthighprice = LateralThighPad(
          lateralpadOption,
          Spex_Lateral_Thigh_Supports_Padprices
        );

        let armsup_latthighsprice =
          Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices3 *
            armsuplatthighquantity +
          armsupprice +
          latthighprice;

        SpexarmlatOrgprices.textContent = `${formatPrice(
          Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices3 *
            armsuplatthighquantity
        )} 元`;

        SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

        SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          armsup_latthighsprice
        )} 元`;
      }
      if (
        buckleOption.text === "快拆式" &&
        armsupOption.text === "角度固定" &&
        latthighOption.text === "固定"
      ) {
        let armsupprice = ArmSupportsPad(
          armpadOption,
          Spex_Arm_Supports_Padprices
        );

        let latthighprice = LateralThighPad(
          lateralpadOption,
          Spex_Lateral_Thigh_Supports_Padprices
        );

        let armsup_latthighsprice =
          Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices4 *
            armsuplatthighquantity +
          armsupprice +
          latthighprice;

        SpexarmlatOrgprices.textContent = `${formatPrice(
          Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices4 *
            armsuplatthighquantity
        )} 元`;

        SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

        SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          armsup_latthighsprice
        )} 元`;
      }

      if (
        buckleOption.text === "下擺式" &&
        armsupOption.text === "角度可調" &&
        latthighOption.text === "多軸"
      ) {
        let armsupprice = ArmSupportsPad(
          armpadOption,
          Spex_Arm_Supports_Padprices
        );

        let latthighprice = LateralThighPad(
          lateralpadOption,
          Spex_Lateral_Thigh_Supports_Padprices
        );

        let armsup_latthighsprice =
          Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices1 *
            armsuplatthighquantity +
          armsupprice +
          latthighprice;

        SpexarmlatOrgprices.textContent = `${formatPrice(
          Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices1 *
            armsuplatthighquantity
        )} 元`;

        SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

        SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          armsup_latthighsprice
        )} 元`;
      }
      if (
        buckleOption.text === "下擺式" &&
        armsupOption.text === "角度可調" &&
        latthighOption.text === "固定"
      ) {
        let armsupprice = ArmSupportsPad(
          armpadOption,
          Spex_Arm_Supports_Padprices
        );

        let latthighprice = LateralThighPad(
          lateralpadOption,
          Spex_Lateral_Thigh_Supports_Padprices
        );

        let armsup_latthighsprice =
          Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices2 *
            armsuplatthighquantity +
          armsupprice +
          latthighprice;

        SpexarmlatOrgprices.textContent = `${formatPrice(
          Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices2 *
            armsuplatthighquantity
        )} 元`;

        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          armsup_latthighsprice
        )} 元`;
      }
      if (
        buckleOption.text === "下擺式" &&
        armsupOption.text === "角度固定" &&
        latthighOption.text === "多軸"
      ) {
        let armsupprice = ArmSupportsPad(
          armpadOption,
          Spex_Arm_Supports_Padprices
        );

        let latthighprice = LateralThighPad(
          lateralpadOption,
          Spex_Lateral_Thigh_Supports_Padprices
        );

        let armsup_latthighsprice =
          Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices3 *
            armsuplatthighquantity +
          armsupprice +
          latthighprice;

        SpexarmlatOrgprices.textContent = `${formatPrice(
          Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices3 *
            armsuplatthighquantity
        )} 元`;

        SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

        SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          armsup_latthighsprice
        )} 元`;
      }
      if (
        buckleOption.text === "下擺式" &&
        armsupOption.text === "角度固定" &&
        latthighOption.text === "固定"
      ) {
        let armsupprice = ArmSupportsPad(
          armpadOption,
          Spex_Arm_Supports_Padprices
        );

        let latthighprice = LateralThighPad(
          lateralpadOption,
          Spex_Lateral_Thigh_Supports_Padprices
        );

        let armsup_latthighsprice =
          Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices4 *
            armsuplatthighquantity +
          armsupprice +
          latthighprice;

        SpexarmlatOrgprices.textContent = `${formatPrice(
          Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices4 *
            armsuplatthighquantity
        )} 元`;

        SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

        SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          armsup_latthighsprice
        )} 元`;
      }

      if (
        buckleOption.text === "固定式" &&
        armsupOption.text === "角度可調" &&
        latthighOption.text === "多軸"
      ) {
        let armsupprice = ArmSupportsPad(
          armpadOption,
          Spex_Arm_Supports_Padprices
        );

        let latthighprice = LateralThighPad(
          lateralpadOption,
          Spex_Lateral_Thigh_Supports_Padprices
        );

        let armsup_latthighsprice =
          Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices1 *
            armsuplatthighquantity +
          armsupprice +
          latthighprice;

        SpexarmlatOrgprices.textContent = `${formatPrice(
          Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices1 *
            armsuplatthighquantity
        )} 元`;

        SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

        SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          armsup_latthighsprice
        )} 元`;
      }
      if (
        buckleOption.text === "固定式" &&
        armsupOption.text === "角度可調" &&
        latthighOption.text === "固定"
      ) {
        let armsupprice = ArmSupportsPad(
          armpadOption,
          Spex_Arm_Supports_Padprices
        );

        let latthighprice = LateralThighPad(
          lateralpadOption,
          Spex_Lateral_Thigh_Supports_Padprices
        );

        let armsup_latthighsprice =
          Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices2 *
            armsuplatthighquantity +
          armsupprice +
          latthighprice;

        SpexarmlatOrgprices.textContent = `${formatPrice(
          Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices2 *
            armsuplatthighquantity
        )} 元`;

        SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

        SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          armsup_latthighsprice
        )} 元`;
      }
      if (
        buckleOption.text === "固定式" &&
        armsupOption.text === "角度固定" &&
        latthighOption.text === "多軸"
      ) {
        let armsupprice = ArmSupportsPad(
          armpadOption,
          Spex_Arm_Supports_Padprices
        );

        let latthighprice = LateralThighPad(
          lateralpadOption,
          Spex_Lateral_Thigh_Supports_Padprices
        );

        let armsup_latthighsprice =
          Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices3 *
            armsuplatthighquantity +
          armsupprice +
          latthighprice;

        SpexarmlatOrgprices.textContent = `${formatPrice(
          Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices3 *
            armsuplatthighquantity
        )} 元`;

        SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

        SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          armsup_latthighsprice
        )} 元`;
      }
      if (
        buckleOption.text === "固定式" &&
        armsupOption.text === "角度固定" &&
        latthighOption.text === "固定"
      ) {
        let armsupprice = ArmSupportsPad(
          armpadOption,
          Spex_Arm_Supports_Padprices
        );

        let latthighprice = LateralThighPad(
          lateralpadOption,
          Spex_Lateral_Thigh_Supports_Padprices
        );

        let armsup_latthighsprice =
          Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices4 *
            armsuplatthighquantity +
          armsupprice +
          latthighprice;

        SpexarmlatOrgprices.textContent = `${formatPrice(
          Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices4 *
            armsuplatthighquantity
        )} 元`;

        SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

        SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          armsup_latthighsprice
        )} 元`;
      }
    }

    //endregion
  });
  //endregion

  //region --- 臀側支撐襯墊尺寸 ---
  let lateralpad = document.querySelector(".Spexarmsuplatthigh_lateralpadsel");

  lateralpad.addEventListener("change", function () {
    let armsuplatthighcount = document.getElementById(
      "Spexarmsuplatthighcount"
    );
    let armsuplatthighquantity = parseInt(armsuplatthighcount.value) || 0; // 轉成數字（預設為 0）
    let buckleOption = buckle.options[buckle.selectedIndex];
    let armsupOption = armsup.options[armsup.selectedIndex];
    let latthighOption = latthigh.options[latthigh.selectedIndex];
    let armpadOption = armpad.options[armpad.selectedIndex];
    let lateralpadOption = lateralpad.options[lateralpad.selectedIndex];
    let armvalue = parseInt(armpadInput.value);
    let lateralvalue = parseInt(lateralpadInput.value);

    //region --- 臀側支撐 ---
    if (
      lateralthighsupportsCheckbox.id === "Spex_LateralThighSupports" &&
      lateralthighsupportsCheckbox.checked &&
      !isNaN(lateralvalue) &&
      lateralvalue > 0
    ) {
      if (buckleOption.text === "快拆式" && latthighOption.text === "多軸") {
        let latthighprice = LateralThighPad(
          lateralpadOption,
          Spex_Lateral_Thigh_Supports_Padprices
        );
        let lateralthighsupportsprice =
          latthighprice +
          Spex_Lateral_Thigh_Supports_Quickprices.Spex_Lateral_Thigh_Supports_Quickprices1 *
            armsuplatthighquantity;

        SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

        SpexarmlatOrgprices.textContent = `${formatPrice(
          Spex_Lateral_Thigh_Supports_Quickprices.Spex_Lateral_Thigh_Supports_Quickprices1 *
            armsuplatthighquantity
        )} 元`;

        SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          lateralthighsupportsprice
        )} 元`;
      }
      if (buckleOption.text === "快拆式" && latthighOption.text === "固定") {
        let latthighprice = LateralThighPad(
          lateralpadOption,
          Spex_Lateral_Thigh_Supports_Padprices
        );
        let lateralthighsupportsprice =
          latthighprice +
          Spex_Lateral_Thigh_Supports_Quickprices.Spex_Lateral_Thigh_Supports_Quickprices2 *
            armsuplatthighquantity;

        SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

        SpexarmlatOrgprices.textContent = `${formatPrice(
          Spex_Lateral_Thigh_Supports_Quickprices.Spex_Lateral_Thigh_Supports_Quickprices2 *
            armsuplatthighquantity
        )} 元`;

        SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          lateralthighsupportsprice
        )} 元`;
      }

      if (buckleOption.text === "下擺式" && latthighOption.text === "多軸") {
        let latthighprice = LateralThighPad(
          lateralpadOption,
          Spex_Lateral_Thigh_Supports_Padprices
        );
        let lateralthighsupportsprice =
          latthighprice +
          Spex_Lateral_Thigh_Supports_FlipDownprices.Spex_Lateral_Thigh_Supports_FlipDownprices1 *
            armsuplatthighquantity;

        SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

        SpexarmlatOrgprices.textContent = `${formatPrice(
          Spex_Lateral_Thigh_Supports_FlipDownprices.Spex_Lateral_Thigh_Supports_FlipDownprices1 *
            armsuplatthighquantity
        )} 元`;

        SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          lateralthighsupportsprice
        )} 元`;
      }
      if (buckleOption.text === "下擺式" && latthighOption.text === "固定") {
        let latthighprice = LateralThighPad(
          lateralpadOption,
          Spex_Lateral_Thigh_Supports_Padprices
        );
        let lateralthighsupportsprice =
          latthighprice +
          Spex_Lateral_Thigh_Supports_FlipDownprices.Spex_Lateral_Thigh_Supports_FlipDownprices2 *
            armsuplatthighquantity;

        SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

        SpexarmlatOrgprices.textContent = `${formatPrice(
          Spex_Lateral_Thigh_Supports_FlipDownprices.Spex_Lateral_Thigh_Supports_FlipDownprices2 *
            armsuplatthighquantity
        )} 元`;

        SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

        nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
          lateralthighsupportsprice
        )} 元`;
      }
      //endregion

      //region --- 扶手臀撐 ---
      if (
        armsup_latthighCheckbox.id === "Spex_ArmSup_LatThigh" &&
        armsup_latthighCheckbox.checked &&
        !isNaN(armvalue) &&
        armvalue > 0 &&
        !isNaN(lateralvalue) &&
        lateralvalue > 0
      ) {
        if (
          buckleOption.text === "快拆式" &&
          armsupOption.text === "角度可調" &&
          latthighOption.text === "多軸"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );

          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );

          let armsup_latthighsprice =
            Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices1 *
              armsuplatthighquantity +
            armsupprice +
            latthighprice;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices1 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsup_latthighsprice
          )} 元`;
        }
        if (
          buckleOption.text === "快拆式" &&
          armsupOption.text === "角度可調" &&
          latthighOption.text === "固定"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );

          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );

          let armsup_latthighsprice =
            Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices2 *
              armsuplatthighquantity +
            armsupprice +
            latthighprice;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices2 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsup_latthighsprice
          )} 元`;
        }
        if (
          buckleOption.text === "快拆式" &&
          armsupOption.text === "角度固定" &&
          latthighOption.text === "多軸"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );

          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );

          let armsup_latthighsprice =
            Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices3 *
              armsuplatthighquantity +
            armsupprice +
            latthighprice;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices3 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsup_latthighsprice
          )} 元`;
        }
        if (
          buckleOption.text === "快拆式" &&
          armsupOption.text === "角度固定" &&
          latthighOption.text === "固定"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );

          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );

          let armsup_latthighsprice =
            Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices4 *
              armsuplatthighquantity +
            armsupprice +
            latthighprice;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices4 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsup_latthighsprice
          )} 元`;
        }

        if (
          buckleOption.text === "下擺式" &&
          armsupOption.text === "角度可調" &&
          latthighOption.text === "多軸"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );

          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );

          let armsup_latthighsprice =
            Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices1 *
              armsuplatthighquantity +
            armsupprice +
            latthighprice;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices1 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsup_latthighsprice
          )} 元`;
        }
        if (
          buckleOption.text === "下擺式" &&
          armsupOption.text === "角度可調" &&
          latthighOption.text === "固定"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );

          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );

          let armsup_latthighsprice =
            Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices2 *
              armsuplatthighquantity +
            armsupprice +
            latthighprice;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices2 *
              armsuplatthighquantity
          )} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsup_latthighsprice
          )} 元`;
        }
        if (
          buckleOption.text === "下擺式" &&
          armsupOption.text === "角度固定" &&
          latthighOption.text === "多軸"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );

          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );

          let armsup_latthighsprice =
            Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices3 *
              armsuplatthighquantity +
            armsupprice +
            latthighprice;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices3 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsup_latthighsprice
          )} 元`;
        }
        if (
          buckleOption.text === "下擺式" &&
          armsupOption.text === "角度固定" &&
          latthighOption.text === "固定"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );

          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );

          let armsup_latthighsprice =
            Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices4 *
              armsuplatthighquantity +
            armsupprice +
            latthighprice;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices4 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsup_latthighsprice
          )} 元`;
        }

        if (
          buckleOption.text === "固定式" &&
          armsupOption.text === "角度可調" &&
          latthighOption.text === "多軸"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );

          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );

          let armsup_latthighsprice =
            Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices1 *
              armsuplatthighquantity +
            armsupprice +
            latthighprice;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices1 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsup_latthighsprice
          )} 元`;
        }
        if (
          buckleOption.text === "固定式" &&
          armsupOption.text === "角度可調" &&
          latthighOption.text === "固定"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );

          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );

          let armsup_latthighsprice =
            Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices2 *
              armsuplatthighquantity +
            armsupprice +
            latthighprice;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices2 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsup_latthighsprice
          )} 元`;
        }
        if (
          buckleOption.text === "固定式" &&
          armsupOption.text === "角度固定" &&
          latthighOption.text === "多軸"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );

          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );

          let armsup_latthighsprice =
            Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices3 *
              armsuplatthighquantity +
            armsupprice +
            latthighprice;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices3 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsup_latthighsprice
          )} 元`;
        }
        if (
          buckleOption.text === "固定式" &&
          armsupOption.text === "角度固定" &&
          latthighOption.text === "固定"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );

          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );

          let armsup_latthighsprice =
            Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices4 *
              armsuplatthighquantity +
            armsupprice +
            latthighprice;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices4 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsup_latthighsprice
          )} 元`;
        }
      }
    }
    //endregion
  });
  //endregion

  //region --- 監聽扶手襯墊數量 ---
  let armpadInput = document.getElementById("armpadcount");

  armpadInput.addEventListener("input", function () {
    let armsuplatthighcount = document.getElementById(
      "Spexarmsuplatthighcount"
    );
    let armsuplatthighquantity = parseInt(armsuplatthighcount.value) || 0; // 轉成數字（預設為 0）
    let buckleOption = buckle.options[buckle.selectedIndex];
    let armsupOption = armsup.options[armsup.selectedIndex];
    let latthighOption = latthigh.options[latthigh.selectedIndex];
    let armpadOption = armpad.options[armpad.selectedIndex];
    let lateralpadOption = lateralpad.options[lateralpad.selectedIndex];
    let armvalue = parseInt(armpadInput.value);

    if (!isNaN(armvalue)) {
      //region --- 扶手支撐---
      if (
        armsupportsCheckbox.id === "Spex_ArmSupports" &&
        armsupportsCheckbox.checked
      ) {
        if (
          buckleOption.text === "快拆式" &&
          armsupOption.text === "角度可調"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );
          let armsupportprice =
            armsupprice +
            Spex_Arm_Supports_Quickprices.Spex_Arm_Supports_Quickprices1 *
              armsuplatthighquantity;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_Arm_Supports_Quickprices.Spex_Arm_Supports_Quickprices1 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsupportprice
          )} 元`;
        }

        if (
          buckleOption.text === "快拆式" &&
          armsupOption.text === "角度固定"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );
          let armsupportprice =
            armsupprice +
            Spex_Arm_Supports_Quickprices.Spex_Arm_Supports_Quickprices2 *
              armsuplatthighquantity;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_Arm_Supports_Quickprices.Spex_Arm_Supports_Quickprices2 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsupportprice
          )} 元`;
        }

        if (
          buckleOption.text === "下擺式" &&
          armsupOption.text === "角度可調"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );
          let armsupportprice =
            armsupprice +
            Spex_Arm_Supports_FlipDownprices.Spex_Arm_Supports_FlipDownprices1 *
              armsuplatthighquantity;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_Arm_Supports_FlipDownprices.Spex_Arm_Supports_FlipDownprices1 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsupportprice
          )} 元`;
        }
        if (
          buckleOption.text === "下擺式" &&
          armsupOption.text === "角度固定"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );
          let armsupportprice =
            armsupprice +
            Spex_Arm_Supports_FlipDownprices.Spex_Arm_Supports_FlipDownprices2 *
              armsuplatthighquantity;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_Arm_Supports_FlipDownprices.Spex_Arm_Supports_FlipDownprices2 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsupportprice
          )} 元`;
        }

        if (
          buckleOption.text === "固定式" &&
          armsupOption.text === "角度可調"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );
          let armsupportprice =
            armsupprice +
            Spex_Arm_Supports_Fixedprices.Spex_Arm_Supports_Fixedprices1 *
              armsuplatthighquantity;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_Arm_Supports_Fixedprices.Spex_Arm_Supports_Fixedprices1 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsupportprice
          )} 元`;
        }
        if (
          buckleOption.text === "固定式" &&
          armsupOption.text === "角度固定"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );
          let armsupportprice =
            armsupprice +
            Spex_Arm_Supports_Fixedprices.Spex_Arm_Supports_Fixedprices2 *
              armsuplatthighquantity;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_Arm_Supports_Fixedprices.Spex_Arm_Supports_Fixedprices2 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsupportprice
          )} 元`;
        }
        //endregion

        //region --- 扶手臀撐 ---
      } else if (
        armsup_latthighCheckbox.id === "Spex_ArmSup_LatThigh" &&
        armsup_latthighCheckbox.checked
      ) {
        if (
          buckleOption.text === "快拆式" &&
          armsupOption.text === "角度可調" &&
          latthighOption.text === "多軸"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );

          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );

          let armsup_latthighsprice =
            Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices1 *
              armsuplatthighquantity +
            armsupprice +
            latthighprice;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices1 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsup_latthighsprice
          )} 元`;
        }
        if (
          buckleOption.text === "快拆式" &&
          armsupOption.text === "角度可調" &&
          latthighOption.text === "固定"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );

          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );

          let armsup_latthighsprice =
            Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices2 *
              armsuplatthighquantity +
            armsupprice +
            latthighprice;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices2 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsup_latthighsprice
          )} 元`;
        }
        if (
          buckleOption.text === "快拆式" &&
          armsupOption.text === "角度固定" &&
          latthighOption.text === "多軸"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );

          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );

          let armsup_latthighsprice =
            Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices3 *
              armsuplatthighquantity +
            armsupprice +
            latthighprice;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices3 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsup_latthighsprice
          )} 元`;
        }
        if (
          buckleOption.text === "快拆式" &&
          armsupOption.text === "角度固定" &&
          latthighOption.text === "固定"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );

          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );

          let armsup_latthighsprice =
            Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices4 *
              armsuplatthighquantity +
            armsupprice +
            latthighprice;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices4 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsup_latthighsprice
          )} 元`;
        }

        if (
          buckleOption.text === "下擺式" &&
          armsupOption.text === "角度可調" &&
          latthighOption.text === "多軸"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );

          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );

          let armsup_latthighsprice =
            Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices1 *
              armsuplatthighquantity +
            armsupprice +
            latthighprice;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices1 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsup_latthighsprice
          )} 元`;
        }
        if (
          buckleOption.text === "下擺式" &&
          armsupOption.text === "角度可調" &&
          latthighOption.text === "固定"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );

          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );

          let armsup_latthighsprice =
            Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices2 *
              armsuplatthighquantity +
            armsupprice +
            latthighprice;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices2 *
              armsuplatthighquantity
          )} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsup_latthighsprice
          )} 元`;
        }
        if (
          buckleOption.text === "下擺式" &&
          armsupOption.text === "角度固定" &&
          latthighOption.text === "多軸"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );

          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );

          let armsup_latthighsprice =
            Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices3 *
              armsuplatthighquantity +
            armsupprice +
            latthighprice;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices3 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsup_latthighsprice
          )} 元`;
        }
        if (
          buckleOption.text === "下擺式" &&
          armsupOption.text === "角度固定" &&
          latthighOption.text === "固定"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );

          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );

          let armsup_latthighsprice =
            Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices4 *
              armsuplatthighquantity +
            armsupprice +
            latthighprice;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices4 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsup_latthighsprice
          )} 元`;
        }

        if (
          buckleOption.text === "固定式" &&
          armsupOption.text === "角度可調" &&
          latthighOption.text === "多軸"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );

          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );

          let armsup_latthighsprice =
            Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices1 *
              armsuplatthighquantity +
            armsupprice +
            latthighprice;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices1 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsup_latthighsprice
          )} 元`;
        }
        if (
          buckleOption.text === "固定式" &&
          armsupOption.text === "角度可調" &&
          latthighOption.text === "固定"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );

          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );

          let armsup_latthighsprice =
            Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices2 *
              armsuplatthighquantity +
            armsupprice +
            latthighprice;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices2 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsup_latthighsprice
          )} 元`;
        }
        if (
          buckleOption.text === "固定式" &&
          armsupOption.text === "角度固定" &&
          latthighOption.text === "多軸"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );

          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );

          let armsup_latthighsprice =
            Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices3 *
              armsuplatthighquantity +
            armsupprice +
            latthighprice;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices3 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsup_latthighsprice
          )} 元`;
        }
        if (
          buckleOption.text === "固定式" &&
          armsupOption.text === "角度固定" &&
          latthighOption.text === "固定"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );

          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );

          let armsup_latthighsprice =
            Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices4 *
              armsuplatthighquantity +
            armsupprice +
            latthighprice;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices4 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsup_latthighsprice
          )} 元`;
        }
      }
      //endregion
    }
  });
  //endregion

  //region --- 監聽臀側支撐襯墊數量 ---
  let lateralpadInput = document.getElementById("lateralpadcount");

  lateralpadInput.addEventListener("input", function () {
    let armsuplatthighcount = document.getElementById(
      "Spexarmsuplatthighcount"
    );
    let armsuplatthighquantity = parseInt(armsuplatthighcount.value) || 0; // 轉成數字（預設為 0）
    let buckleOption = buckle.options[buckle.selectedIndex];
    let armsupOption = armsup.options[armsup.selectedIndex];
    let latthighOption = latthigh.options[latthigh.selectedIndex];
    let armpadOption = armpad.options[armpad.selectedIndex];
    let lateralpadOption = lateralpad.options[lateralpad.selectedIndex];
    let lateralvalue = parseInt(lateralpadInput.value);

    if (!isNaN(lateralvalue)) {
      //region --- 臀側支撐 ---
      if (
        lateralthighsupportsCheckbox.id === "Spex_LateralThighSupports" &&
        lateralthighsupportsCheckbox.checked
      ) {
        if (buckleOption.text === "快拆式" && latthighOption.text === "多軸") {
          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );
          let lateralthighsupportsprice =
            latthighprice +
            Spex_Lateral_Thigh_Supports_Quickprices.Spex_Lateral_Thigh_Supports_Quickprices1 *
              armsuplatthighquantity;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_Lateral_Thigh_Supports_Quickprices.Spex_Lateral_Thigh_Supports_Quickprices1 *
              armsuplatthighquantity
          )} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            lateralthighsupportsprice
          )} 元`;
        }
        if (buckleOption.text === "快拆式" && latthighOption.text === "固定") {
          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );
          let lateralthighsupportsprice =
            latthighprice +
            Spex_Lateral_Thigh_Supports_Quickprices.Spex_Lateral_Thigh_Supports_Quickprices2 *
              armsuplatthighquantity;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_Lateral_Thigh_Supports_Quickprices.Spex_Lateral_Thigh_Supports_Quickprices2 *
              armsuplatthighquantity
          )} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            lateralthighsupportsprice
          )} 元`;
        }

        if (buckleOption.text === "下擺式" && latthighOption.text === "多軸") {
          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );
          let lateralthighsupportsprice =
            latthighprice +
            Spex_Lateral_Thigh_Supports_FlipDownprices.Spex_Lateral_Thigh_Supports_FlipDownprices1 *
              armsuplatthighquantity;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_Lateral_Thigh_Supports_FlipDownprices.Spex_Lateral_Thigh_Supports_FlipDownprices1 *
              armsuplatthighquantity
          )} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            lateralthighsupportsprice
          )} 元`;
        }
        if (buckleOption.text === "下擺式" && latthighOption.text === "固定") {
          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );
          let lateralthighsupportsprice =
            latthighprice +
            Spex_Lateral_Thigh_Supports_FlipDownprices.Spex_Lateral_Thigh_Supports_FlipDownprices2 *
              armsuplatthighquantity;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_Lateral_Thigh_Supports_FlipDownprices.Spex_Lateral_Thigh_Supports_FlipDownprices2 *
              armsuplatthighquantity
          )} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            lateralthighsupportsprice
          )} 元`;
        }
        //endregion

        //region --- 扶手臀撐 ---
      } else if (
        armsup_latthighCheckbox.id === "Spex_ArmSup_LatThigh" &&
        armsup_latthighCheckbox.checked
      ) {
        if (
          buckleOption.text === "快拆式" &&
          armsupOption.text === "角度可調" &&
          latthighOption.text === "多軸"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );

          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );

          let armsup_latthighsprice =
            Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices1 *
              armsuplatthighquantity +
            armsupprice +
            latthighprice;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices1 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsup_latthighsprice
          )} 元`;
        }
        if (
          buckleOption.text === "快拆式" &&
          armsupOption.text === "角度可調" &&
          latthighOption.text === "固定"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );

          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );

          let armsup_latthighsprice =
            Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices2 *
              armsuplatthighquantity +
            armsupprice +
            latthighprice;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices2 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsup_latthighsprice
          )} 元`;
        }
        if (
          buckleOption.text === "快拆式" &&
          armsupOption.text === "角度固定" &&
          latthighOption.text === "多軸"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );

          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );

          let armsup_latthighsprice =
            Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices3 *
              armsuplatthighquantity +
            armsupprice +
            latthighprice;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices3 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsup_latthighsprice
          )} 元`;
        }
        if (
          buckleOption.text === "快拆式" &&
          armsupOption.text === "角度固定" &&
          latthighOption.text === "固定"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );

          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );

          let armsup_latthighsprice =
            Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices4 *
              armsuplatthighquantity +
            armsupprice +
            latthighprice;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_Quickprices.Spex_ArmSup_LatThigh_Quickprices4 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsup_latthighsprice
          )} 元`;
        }

        if (
          buckleOption.text === "下擺式" &&
          armsupOption.text === "角度可調" &&
          latthighOption.text === "多軸"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );

          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );

          let armsup_latthighsprice =
            Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices1 *
              armsuplatthighquantity +
            armsupprice +
            latthighprice;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices1 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsup_latthighsprice
          )} 元`;
        }
        if (
          buckleOption.text === "下擺式" &&
          armsupOption.text === "角度可調" &&
          latthighOption.text === "固定"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );

          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );

          let armsup_latthighsprice =
            Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices2 *
              armsuplatthighquantity +
            armsupprice +
            latthighprice;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices2 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsup_latthighsprice
          )} 元`;
        }
        if (
          buckleOption.text === "下擺式" &&
          armsupOption.text === "角度固定" &&
          latthighOption.text === "多軸"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );

          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );

          let armsup_latthighsprice =
            Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices3 *
              armsuplatthighquantity +
            armsupprice +
            latthighprice;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices3 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsup_latthighsprice
          )} 元`;
        }
        if (
          buckleOption.text === "下擺式" &&
          armsupOption.text === "角度固定" &&
          latthighOption.text === "固定"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );

          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );

          let armsup_latthighsprice =
            Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices4 *
              armsuplatthighquantity +
            armsupprice +
            latthighprice;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_FlipDownprices.Spex_ArmSup_LatThigh_FlipDownprices4 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsup_latthighsprice
          )} 元`;
        }

        if (
          buckleOption.text === "固定式" &&
          armsupOption.text === "角度可調" &&
          latthighOption.text === "多軸"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );

          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );

          let armsup_latthighsprice =
            Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices1 *
              armsuplatthighquantity +
            armsupprice +
            latthighprice;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices1 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsup_latthighsprice
          )} 元`;
        }
        if (
          buckleOption.text === "固定式" &&
          armsupOption.text === "角度可調" &&
          latthighOption.text === "固定"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );

          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );

          let armsup_latthighsprice =
            Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices2 *
              armsuplatthighquantity +
            armsupprice +
            latthighprice;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices2 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsup_latthighsprice
          )} 元`;
        }
        if (
          buckleOption.text === "固定式" &&
          armsupOption.text === "角度固定" &&
          latthighOption.text === "多軸"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );

          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );

          let armsup_latthighsprice =
            Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices3 *
              armsuplatthighquantity +
            armsupprice +
            latthighprice;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices3 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsup_latthighsprice
          )} 元`;
        }
        if (
          buckleOption.text === "固定式" &&
          armsupOption.text === "角度固定" &&
          latthighOption.text === "固定"
        ) {
          let armsupprice = ArmSupportsPad(
            armpadOption,
            Spex_Arm_Supports_Padprices
          );

          let latthighprice = LateralThighPad(
            lateralpadOption,
            Spex_Lateral_Thigh_Supports_Padprices
          );

          let armsup_latthighsprice =
            Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices4 *
              armsuplatthighquantity +
            armsupprice +
            latthighprice;

          SpexarmlatOrgprices.textContent = `${formatPrice(
            Spex_ArmSup_LatThigh_Fixedprices.Spex_ArmSup_LatThigh_Fixedprices4 *
              armsuplatthighquantity
          )} 元`;

          SpexarmOrgprices.textContent = `${formatPrice(armsupprice)} 元`;

          SpexlatOrgprices.textContent = `${formatPrice(latthighprice)} 元`;

          nowprice_SpexArmSupLatThigh.textContent = `${formatPrice(
            armsup_latthighsprice
          )} 元`;
        }
      }
      //endregion
    }
  });
  //endregion
});
//endregion

/*-----  15.Spex軀幹子系統-背靠點擊列 -----*/
//region
let nowprice_SpexBackSupports = Price[14].nextElementSibling;

//region --- Spex_Zygo_Active_Lo 淺廓型低背靠 ---
let Spex_Zygo_Active_Lo_prices = {
  Spex_Zygo_Active_Lo_prices1: 12400,
  Spex_Zygo_Active_Lo_prices2: 12400,
  Spex_Zygo_Active_Lo_prices3: 12400,
  Spex_Zygo_Active_Lo_prices4: 12400,
  Spex_Zygo_Active_Lo_prices5: 12400,
};
//endregion

//region --- Spex_Zygo_Active_Mid 淺廓型中背靠 ---
let Spex_Zygo_Active_Mid_prices = {
  Spex_Zygo_Active_Mid_prices1: 15100,
  Spex_Zygo_Active_Mid_prices2: 15100,
  Spex_Zygo_Active_Mid_prices3: 15100,
  Spex_Zygo_Active_Mid_prices4: 15100,
  Spex_Zygo_Active_Mid_prices5: 15100,
  Spex_Zygo_Active_Mid_prices6: 15100,
};
//endregion

//region --- Spex_Zygo_Deep_Lo 深廓型低背靠 ---
let Spex_Zygo_Deep_Lo_prices = {
  Spex_Zygo_Deep_Lo_prices1: 17500,
  Spex_Zygo_Deep_Lo_prices2: 17500,
  Spex_Zygo_Deep_Lo_prices3: 17500,
  Spex_Zygo_Deep_Lo_prices4: 17500,
  Spex_Zygo_Deep_Lo_prices5: 17500,
};
//endregion

//region --- Spex_Zygo_Deep_Mid 深廓型中背靠 ---
let Spex_Zygo_Deep_Mid_prices = {
  Spex_Zygo_Deep_Mid_prices1: 17500,
  Spex_Zygo_Deep_Mid_prices2: 17500,
  Spex_Zygo_Deep_Mid_prices3: 17500,
  Spex_Zygo_Deep_Mid_prices4: 17500,
  Spex_Zygo_Deep_Mid_prices5: 17500,
  Spex_Zygo_Deep_Mid_prices6: 17500,
};
//endregion

//region --- Spex_Vigour 高背靠 ---
let Spex_Vigour_prices = {
  Spex_Vigour_prices1: 17800,
  Spex_Vigour_prices2: 17800,
  Spex_Vigour_prices3: 17800,
  Spex_Vigour_prices4: 17800,
  Spex_Vigour_prices5: 17800,
  Spex_Vigour_prices6: 17800,
  Spex_Vigour_prices7: 17800,
  Spex_Vigour_prices8: 17800,
  Spex_Vigour_prices9: 17800,
};
//endregion

//region --- Spex_Mantaray 側邊包覆型背靠 ---
let Spex_Mantaray_prices = {
  Spex_Mantaray_prices1: 15200,
  Spex_Mantaray_prices2: 15200,
  Spex_Mantaray_prices3: 17800,
  Spex_Mantaray_prices4: 17800,
  Spex_Mantaray_prices5: 17800,
  Spex_Mantaray_prices6: 17800,
  Spex_Mantaray_prices7: 17800,
  Spex_Mantaray_prices8: 25200,
  Spex_Mantaray_prices9: 25200,
};
//endregion

//region --- Spex_Classic 調整型背靠 ---
let Spex_Classic_prices = {
  Spex_Classic_prices1: 27900,
  Spex_Classic_prices2: 27900,
  Spex_Classic_prices3: 27900,
  Spex_Classic_prices4: 27900,
  Spex_Classic_prices5: 27900,
  Spex_Classic_prices6: 27900,
};
//endregion

//region --- Spex_SuperShape 超高度調整型背靠 ---
let Spex_SuperShape_prices = {
  Spex_SuperShape_prices1: 40000,
  Spex_SuperShape_prices2: 40000,
  Spex_SuperShape_prices3: 42600,
  Spex_SuperShape_prices4: 42600,
  Spex_SuperShape_prices5: 42600,
  Spex_SuperShape_prices6: 42600,
  Spex_SuperShape_prices7: 42600,
};
//endregion

//region --- Spex_Adapta2 調整型背靠 ---
let Spex_Adapta2_prices = {
  Spex_Adapta2_prices1: 31200,
  Spex_Adapta2_prices2: 31200,
  Spex_Adapta2_prices3: 31200,
  Spex_Adapta2_prices4: 31200,
};
//endregion

//region --- Spex_Adapta3 調整型背靠 ---
let Spex_Adapta3_prices = {
  Spex_Adapta3_prices1: 38800,
  Spex_Adapta3_prices2: 38800,
  Spex_Adapta3_prices3: 38800,
  Spex_Adapta3_prices4: 38800,
};
//endregion

//region --- Spex_Adapta3_QuicklyLift 調整型背靠 / 快掀 ---
let Spex_Adapta3_QuicklyLift_prices = {
  Spex_Adapta3_QuicklyLift_prices1: 46200,
  Spex_Adapta3_QuicklyLift_prices2: 46200,
  Spex_Adapta3_QuicklyLift_prices3: 46200,
  Spex_Adapta3_QuicklyLift_prices4: 46200,
};
//endregion

//region --- Spex_Adapta3_Foam 調整型背靠 / 脊凸泡綿 ---
let Spex_Adapta3_Foam_prices = {
  Spex_Adapta3_Foam_prices1: 38800,
  Spex_Adapta3_Foam_prices2: 38800,
  Spex_Adapta3_Foam_prices3: 38800,
  Spex_Adapta3_Foam_prices4: 38800,
};
//endregion

//region --- Spex_Adapta3_QuicklyLift_Foam 調整型背靠 / 脊凸泡綿 / 快掀 ---
let Spex_Adapta3_QuicklyLift_Foam_prices = {
  Spex_Adapta3_QuicklyLift_Foam_prices1: 46200,
  Spex_Adapta3_QuicklyLift_Foam_prices2: 46200,
  Spex_Adapta3_QuicklyLift_Foam_prices3: 46200,
  Spex_Adapta3_QuicklyLift_Foam_prices4: 46200,
};
//endregion

let SpexZygoActiveLoCheckbox = document.querySelector("#Spex_Zygo_Active_Lo");
let SpexZygoActiveMidCheckbox = document.querySelector("#Spex_Zygo_Active_Mid");
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

document.addEventListener("DOMContentLoaded", function () {
  let BackSupportsWidthSelect = document.querySelector(
    ".Spexbacksupports_Width"
  );
  let BackSupportsHeighSelect = document.querySelector(
    ".Spexbacksupports_Heigh"
  );

  // 監聽高度選單
  BackSupportsHeighSelect.addEventListener("change", function () {
    let widthselectedOption =
      BackSupportsWidthSelect.options[BackSupportsWidthSelect.selectedIndex];
    let heightselectedOption =
      BackSupportsHeighSelect.options[BackSupportsHeighSelect.selectedIndex];

    //region --- Spex_Zygo_Active_Lo ---
    if (
      SpexZygoActiveLoCheckbox.id === "Spex_Zygo_Active_Lo" &&
      SpexZygoActiveLoCheckbox.checked
    ) {
      if (
        widthselectedOption.text === "12”" &&
        heightselectedOption.text === "7”"
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Zygo_Active_Lo_prices.Spex_Zygo_Active_Lo_prices1
        )} 元`;
      }
      if (
        widthselectedOption.text === "14”" &&
        heightselectedOption.text === "8”"
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Zygo_Active_Lo_prices.Spex_Zygo_Active_Lo_prices2
        )} 元`;
      }
      if (
        widthselectedOption.text === "16”" &&
        heightselectedOption.text === "9”"
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Zygo_Active_Lo_prices.Spex_Zygo_Active_Lo_prices3
        )} 元`;
      }
      if (
        widthselectedOption.text === "18”" &&
        heightselectedOption.text === "9”"
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Zygo_Active_Lo_prices.Spex_Zygo_Active_Lo_prices4
        )} 元`;
      }
      if (
        widthselectedOption.text === "20”" &&
        heightselectedOption.text === "11”"
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Zygo_Active_Lo_prices.Spex_Zygo_Active_Lo_prices5
        )} 元`;
      }
    }
    //endregion

    //region --- Spex_Zygo_Active_Mid ---
    if (
      SpexZygoActiveMidCheckbox.id === "Spex_Zygo_Active_Mid" &&
      SpexZygoActiveMidCheckbox.checked
    ) {
      if (
        widthselectedOption.text === "10”" &&
        (heightselectedOption.text === "9”" ||
          heightselectedOption.text === "11”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Zygo_Active_Mid_prices.Spex_Zygo_Active_Mid_prices1
        )} 元`;
      }
      if (
        widthselectedOption.text === "12”" &&
        (heightselectedOption.text === "10”" ||
          heightselectedOption.text === "12”" ||
          heightselectedOption.text === "13”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Zygo_Active_Mid_prices.Spex_Zygo_Active_Mid_prices2
        )} 元`;
      }
      if (
        widthselectedOption.text === "14”" &&
        (heightselectedOption.text === "13”" ||
          heightselectedOption.text === "15”" ||
          heightselectedOption.text === "16”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Zygo_Active_Mid_prices.Spex_Zygo_Active_Mid_prices3
        )} 元`;
      }
      if (
        widthselectedOption.text === "16”" &&
        (heightselectedOption.text === "14”" ||
          heightselectedOption.text === "16”" ||
          heightselectedOption.text === "17”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Zygo_Active_Mid_prices.Spex_Zygo_Active_Mid_prices4
        )} 元`;
      }
      if (
        widthselectedOption.text === "18”" &&
        (heightselectedOption.text === "15”" ||
          heightselectedOption.text === "17”" ||
          heightselectedOption.text === "18”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Zygo_Active_Mid_prices.Spex_Zygo_Active_Mid_prices5
        )} 元`;
      }
      if (
        widthselectedOption.text === "20”" &&
        (heightselectedOption.text === "15”" ||
          heightselectedOption.text === "18”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Zygo_Active_Mid_prices.Spex_Zygo_Active_Mid_prices6
        )} 元`;
      }
    }
    //endregion

    //region --- Spex_Zygo_Deep_Lo ---
    if (
      SpexZygoDeepLoCheckbox.id === "Spex_Zygo_Deep_Lo" &&
      SpexZygoDeepLoCheckbox.checked
    ) {
      if (
        widthselectedOption.text === "12”" &&
        heightselectedOption.text === "7”"
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Zygo_Deep_Lo_prices.Spex_Zygo_Deep_Lo_prices1
        )} 元`;
      }
      if (
        widthselectedOption.text === "14”" &&
        heightselectedOption.text === "8”"
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Zygo_Deep_Lo_prices.Spex_Zygo_Deep_Lo_prices2
        )} 元`;
      }
      if (
        widthselectedOption.text === "16”" &&
        heightselectedOption.text === "9”"
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Zygo_Deep_Lo_prices.Spex_Zygo_Deep_Lo_prices3
        )} 元`;
      }
      if (
        widthselectedOption.text === "18”" &&
        heightselectedOption.text === "9”"
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Zygo_Deep_Lo_prices.Spex_Zygo_Deep_Lo_prices4
        )} 元`;
      }
      if (
        widthselectedOption.text === "20”" &&
        heightselectedOption.text === "11”"
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Zygo_Deep_Lo_prices.Spex_Zygo_Deep_Lo_prices5
        )} 元`;
      }
    }
    //endregion

    //region --- Spex_Zygo_Deep_Mid ---
    if (
      SpexZygoDeepMidCheckbox.id === "Spex_Zygo_Deep_Mid" &&
      SpexZygoDeepMidCheckbox.checked
    ) {
      if (
        widthselectedOption.text === "10”" &&
        (heightselectedOption.text === "9”" ||
          heightselectedOption.text === "11”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Zygo_Deep_Mid_prices.Spex_Zygo_Deep_Mid_prices1
        )} 元`;
      }
      if (
        widthselectedOption.text === "12”" &&
        (heightselectedOption.text === "10”" ||
          heightselectedOption.text === "12”" ||
          heightselectedOption.text === "13”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Zygo_Deep_Mid_prices.Spex_Zygo_Deep_Mid_prices2
        )} 元`;
      }
      if (
        widthselectedOption.text === "14”" &&
        (heightselectedOption.text === "13”" ||
          heightselectedOption.text === "15”" ||
          heightselectedOption.text === "16”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Zygo_Deep_Mid_prices.Spex_Zygo_Deep_Mid_prices3
        )} 元`;
      }
      if (
        widthselectedOption.text === "16”" &&
        (heightselectedOption.text === "14”" ||
          heightselectedOption.text === "16”" ||
          heightselectedOption.text === "17”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Zygo_Deep_Mid_prices.Spex_Zygo_Deep_Mid_prices4
        )} 元`;
      }
      if (
        widthselectedOption.text === "18”" &&
        (heightselectedOption.text === "15”" ||
          heightselectedOption.text === "17”" ||
          heightselectedOption.text === "18”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Zygo_Deep_Mid_prices.Spex_Zygo_Deep_Mid_prices5
        )} 元`;
      }
      if (
        widthselectedOption.text === "20”" &&
        (heightselectedOption.text === "15”" ||
          heightselectedOption.text === "18”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Zygo_Deep_Mid_prices.Spex_Zygo_Deep_Mid_prices6
        )} 元`;
      }
    }
    //endregion

    //region --- Spex_Vigour ---
    if (SpexVigourCheckbox.id === "Spex_Vigour" && SpexVigourCheckbox.checked) {
      if (
        widthselectedOption.text === "12”" &&
        (heightselectedOption.text === "14”" ||
          heightselectedOption.text === "16”" ||
          heightselectedOption.text === "18”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Vigour_prices.Spex_Vigour_prices1
        )} 元`;
      }
      if (
        widthselectedOption.text === "13”" &&
        (heightselectedOption.text === "14”" ||
          heightselectedOption.text === "16”" ||
          heightselectedOption.text === "18”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Vigour_prices.Spex_Vigour_prices2
        )} 元`;
      }
      if (
        widthselectedOption.text === "14”" &&
        (heightselectedOption.text === "16”" ||
          heightselectedOption.text === "18”" ||
          heightselectedOption.text === "20”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Vigour_prices.Spex_Vigour_prices3
        )} 元`;
      }
      if (
        widthselectedOption.text === "15”" &&
        (heightselectedOption.text === "16”" ||
          heightselectedOption.text === "18”" ||
          heightselectedOption.text === "20”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Vigour_prices.Spex_Vigour_prices4
        )} 元`;
      }
      if (
        widthselectedOption.text === "16”" &&
        (heightselectedOption.text === "18”" ||
          heightselectedOption.text === "20”" ||
          heightselectedOption.text === "23”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Vigour_prices.Spex_Vigour_prices5
        )} 元`;
      }
      if (
        widthselectedOption.text === "17”" &&
        (heightselectedOption.text === "18”" ||
          heightselectedOption.text === "20”" ||
          heightselectedOption.text === "23”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Vigour_prices.Spex_Vigour_prices6
        )} 元`;
      }
      if (
        widthselectedOption.text === "18”" &&
        (heightselectedOption.text === "18”" ||
          heightselectedOption.text === "20”" ||
          heightselectedOption.text === "23”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Vigour_prices.Spex_Vigour_prices7
        )} 元`;
      }
      if (
        widthselectedOption.text === "19”" &&
        (heightselectedOption.text === "18”" ||
          heightselectedOption.text === "20”" ||
          heightselectedOption.text === "23”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Vigour_prices.Spex_Vigour_prices8
        )} 元`;
      }
      if (
        widthselectedOption.text === "20”" &&
        (heightselectedOption.text === "18”" ||
          heightselectedOption.text === "20”" ||
          heightselectedOption.text === "23”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Vigour_prices.Spex_Vigour_prices9
        )} 元`;
      }
    }
    //endregion

    //region --- Spex_Mantaray ---
    if (
      SpexMantarayCheckbox.id === "Spex_Mantaray" &&
      SpexMantarayCheckbox.checked
    ) {
      if (
        widthselectedOption.text === "12”" &&
        (heightselectedOption.text === "14”" ||
          heightselectedOption.text === "16”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Mantaray_prices.Spex_Mantaray_prices1
        )} 元`;
      }
      if (
        widthselectedOption.text === "13”" &&
        (heightselectedOption.text === "14”" ||
          heightselectedOption.text === "16”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Mantaray_prices.Spex_Mantaray_prices2
        )} 元`;
      }
      if (
        widthselectedOption.text === "14”" &&
        (heightselectedOption.text === "16”" ||
          heightselectedOption.text === "18”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Mantaray_prices.Spex_Mantaray_prices3
        )} 元`;
      }
      if (
        widthselectedOption.text === "15”" &&
        (heightselectedOption.text === "16”" ||
          heightselectedOption.text === "18”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Mantaray_prices.Spex_Mantaray_prices4
        )} 元`;
      }
      if (
        widthselectedOption.text === "16”" &&
        (heightselectedOption.text === "18”" ||
          heightselectedOption.text === "20”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Mantaray_prices.Spex_Mantaray_prices5
        )} 元`;
      }
      if (
        widthselectedOption.text === "17”" &&
        (heightselectedOption.text === "18”" ||
          heightselectedOption.text === "20”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Mantaray_prices.Spex_Mantaray_prices6
        )} 元`;
      }
      if (
        widthselectedOption.text === "18”" &&
        (heightselectedOption.text === "18”" ||
          heightselectedOption.text === "20”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Mantaray_prices.Spex_Mantaray_prices7
        )} 元`;
      }
      if (
        widthselectedOption.text === "19”" &&
        (heightselectedOption.text === "18”" ||
          heightselectedOption.text === "20”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Mantaray_prices.Spex_Mantaray_prices8
        )} 元`;
      }
      if (
        widthselectedOption.text === "20”" &&
        (heightselectedOption.text === "18”" ||
          heightselectedOption.text === "20”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Mantaray_prices.Spex_Mantaray_prices9
        )} 元`;
      }
    }
    //endregion

    //region --- Spex_Classic ---
    if (
      SpexClassicCheckbox.id === "Spex_Classic" &&
      SpexClassicCheckbox.checked
    ) {
      if (
        widthselectedOption.text === "13”" &&
        (heightselectedOption.text === "14”" ||
          heightselectedOption.text === "16”" ||
          heightselectedOption.text === "18”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Classic_prices.Spex_Classic_prices1
        )} 元`;
      }
      if (
        widthselectedOption.text === "14”" &&
        (heightselectedOption.text === "16”" ||
          heightselectedOption.text === "18”" ||
          heightselectedOption.text === "20”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Classic_prices.Spex_Classic_prices2
        )} 元`;
      }
      if (
        widthselectedOption.text === "15”" &&
        (heightselectedOption.text === "16”" ||
          heightselectedOption.text === "18”" ||
          heightselectedOption.text === "20”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Classic_prices.Spex_Classic_prices3
        )} 元`;
      }
      if (
        widthselectedOption.text === "16”" &&
        (heightselectedOption.text === "18”" ||
          heightselectedOption.text === "20”" ||
          heightselectedOption.text === "23”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Classic_prices.Spex_Classic_prices4
        )} 元`;
      }
      if (
        widthselectedOption.text === "17”" &&
        (heightselectedOption.text === "18”" ||
          heightselectedOption.text === "20”" ||
          heightselectedOption.text === "23”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Classic_prices.Spex_Classic_prices5
        )} 元`;
      }
      if (
        widthselectedOption.text === "18”" &&
        (heightselectedOption.text === "18”" ||
          heightselectedOption.text === "20”" ||
          heightselectedOption.text === "23”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Classic_prices.Spex_Classic_prices6
        )} 元`;
      }
    }
    //endregion

    //region --- Spex_SuperShape ---
    if (
      SpexSuperShapeCheckbox.id === "Spex_SuperShape" &&
      SpexSuperShapeCheckbox.checked
    ) {
      if (
        widthselectedOption.text === "12”" &&
        (heightselectedOption.text === "12”" ||
          heightselectedOption.text === "14”" ||
          heightselectedOption.text === "16”" ||
          heightselectedOption.text === "18”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_SuperShape_prices.Spex_SuperShape_prices1
        )} 元`;
      }
      if (
        widthselectedOption.text === "13”" &&
        (heightselectedOption.text === "12”" ||
          heightselectedOption.text === "14”" ||
          heightselectedOption.text === "16”" ||
          heightselectedOption.text === "18”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_SuperShape_prices.Spex_SuperShape_prices2
        )} 元`;
      }
      if (
        widthselectedOption.text === "14”" &&
        (heightselectedOption.text === "14”" ||
          heightselectedOption.text === "16”" ||
          heightselectedOption.text === "18”" ||
          heightselectedOption.text === "20”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_SuperShape_prices.Spex_SuperShape_prices3
        )} 元`;
      }
      if (
        widthselectedOption.text === "15”" &&
        (heightselectedOption.text === "14”" ||
          heightselectedOption.text === "16”" ||
          heightselectedOption.text === "18”" ||
          heightselectedOption.text === "20”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_SuperShape_prices.Spex_SuperShape_prices4
        )} 元`;
      }
      if (
        widthselectedOption.text === "16”" &&
        (heightselectedOption.text === "16”" ||
          heightselectedOption.text === "18”" ||
          heightselectedOption.text === "20”" ||
          heightselectedOption.text === "23”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_SuperShape_prices.Spex_SuperShape_prices5
        )} 元`;
      }
      if (
        widthselectedOption.text === "17”" &&
        (heightselectedOption.text === "16”" ||
          heightselectedOption.text === "18”" ||
          heightselectedOption.text === "20”" ||
          heightselectedOption.text === "23”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_SuperShape_prices.Spex_SuperShape_prices6
        )} 元`;
      }
      if (
        widthselectedOption.text === "18”" &&
        (heightselectedOption.text === "16”" ||
          heightselectedOption.text === "18”" ||
          heightselectedOption.text === "20”" ||
          heightselectedOption.text === "23”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_SuperShape_prices.Spex_SuperShape_prices7
        )} 元`;
      }
    }
    //endregion

    //region --- Spex_Adapta2 ---
    if (
      SpexAdapta2Checkbox.id === "Spex_Adapta2" &&
      SpexAdapta2Checkbox.checked
    ) {
      if (
        widthselectedOption.text === "14”" &&
        (heightselectedOption.text === "12”" ||
          heightselectedOption.text === "14”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Adapta2_prices.Spex_Adapta2_prices1
        )} 元`;
      }
      if (
        widthselectedOption.text === "16”" &&
        (heightselectedOption.text === "13”" ||
          heightselectedOption.text === "15”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Adapta2_prices.Spex_Adapta2_prices2
        )} 元`;
      }
      if (
        widthselectedOption.text === "18”" &&
        (heightselectedOption.text === "15”" ||
          heightselectedOption.text === "17”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Adapta2_prices.Spex_Adapta2_prices3
        )} 元`;
      }
      if (
        widthselectedOption.text === "20”" &&
        (heightselectedOption.text === "15”" ||
          heightselectedOption.text === "17”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Adapta2_prices.Spex_Adapta2_prices4
        )} 元`;
      }
    }
    //endregion

    //region --- Spex_Adapta3 ---
    if (
      SpexAdapta3Checkbox.id === "Spex_Adapta3" &&
      SpexAdapta3Checkbox.checked
    ) {
      if (
        widthselectedOption.text === "14”" &&
        (heightselectedOption.text === "16”" ||
          heightselectedOption.text === "18”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Adapta3_prices.Spex_Adapta3_prices1
        )} 元`;
      }
      if (
        widthselectedOption.text === "16”" &&
        (heightselectedOption.text === "18”" ||
          heightselectedOption.text === "20”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Adapta3_prices.Spex_Adapta3_prices2
        )} 元`;
      }
      if (
        widthselectedOption.text === "18”" &&
        (heightselectedOption.text === "20”" ||
          heightselectedOption.text === "22”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Adapta3_prices.Spex_Adapta3_prices3
        )} 元`;
      }
      if (
        widthselectedOption.text === "20”" &&
        (heightselectedOption.text === "20”" ||
          heightselectedOption.text === "22”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Adapta3_prices.Spex_Adapta3_prices4
        )} 元`;
      }
    }
    //endregion

    //region --- Spex_Adapta3_QuicklyLift ---
    if (
      SpexAdapta3QuicklyLiftCheckbox.id === "Spex_Adapta3_QuicklyLift" &&
      SpexAdapta3QuicklyLiftCheckbox.checked
    ) {
      if (
        widthselectedOption.text === "14”" &&
        (heightselectedOption.text === "16”" ||
          heightselectedOption.text === "18”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Adapta3_QuicklyLift_prices.Spex_Adapta3_QuicklyLift_prices1
        )} 元`;
      }
      if (
        widthselectedOption.text === "16”" &&
        (heightselectedOption.text === "18”" ||
          heightselectedOption.text === "20”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Adapta3_QuicklyLift_prices.Spex_Adapta3_QuicklyLift_prices2
        )} 元`;
      }
      if (
        widthselectedOption.text === "18”" &&
        (heightselectedOption.text === "20”" ||
          heightselectedOption.text === "22”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Adapta3_QuicklyLift_prices.Spex_Adapta3_QuicklyLift_prices3
        )} 元`;
      }
      if (
        widthselectedOption.text === "20”" &&
        (heightselectedOption.text === "20”" ||
          heightselectedOption.text === "22”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Adapta3_QuicklyLift_prices.Spex_Adapta3_QuicklyLift_prices4
        )} 元`;
      }
    }
    //endregion

    //region --- Spex_Adapta3_QuicklyLift_Foam ---
    if (
      SpexAdapta3QuicklyLiftFoamCheckbox.id ===
        "Spex_Adapta3_QuicklyLift_Foam" &&
      SpexAdapta3QuicklyLiftFoamCheckbox.checked
    ) {
      if (
        widthselectedOption.text === "14”" &&
        (heightselectedOption.text === "16”" ||
          heightselectedOption.text === "18”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Adapta3_QuicklyLift_Foam_prices.Spex_Adapta3_QuicklyLift_Foam_prices1
        )} 元`;
      }
      if (
        widthselectedOption.text === "16”" &&
        (heightselectedOption.text === "18”" ||
          heightselectedOption.text === "20”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Adapta3_QuicklyLift_Foam_prices.Spex_Adapta3_QuicklyLift_Foam_prices2
        )} 元`;
      }
      if (
        widthselectedOption.text === "18”" &&
        (heightselectedOption.text === "20”" ||
          heightselectedOption.text === "22”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Adapta3_QuicklyLift_Foam_prices.Spex_Adapta3_QuicklyLift_Foam_prices3
        )} 元`;
      }
      if (
        widthselectedOption.text === "20”" &&
        (heightselectedOption.text === "20”" ||
          heightselectedOption.text === "22”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Adapta3_QuicklyLift_Foam_prices.Spex_Adapta3_QuicklyLift_Foam_prices4
        )} 元`;
      }
    }
    //endregion

    //region --- Spex_Adapta3_Foam ---
    if (
      SpexAdapta3FoamCheckbox.id === "Spex_Adapta3_Foam" &&
      SpexAdapta3FoamCheckbox.checked
    ) {
      if (
        widthselectedOption.text === "14”" &&
        (heightselectedOption.text === "16”" ||
          heightselectedOption.text === "18”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Adapta3_Foam_prices.Spex_Adapta3_Foam_prices1
        )} 元`;
      }
      if (
        widthselectedOption.text === "16”" &&
        (heightselectedOption.text === "18”" ||
          heightselectedOption.text === "20”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Adapta3_Foam_prices.Spex_Adapta3_Foam_prices2
        )} 元`;
      }
      if (
        widthselectedOption.text === "18”" &&
        (heightselectedOption.text === "20”" ||
          heightselectedOption.text === "22”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Adapta3_Foam_prices.Spex_Adapta3_Foam_prices3
        )} 元`;
      }
      if (
        widthselectedOption.text === "20”" &&
        (heightselectedOption.text === "20”" ||
          heightselectedOption.text === "22”")
      ) {
        nowprice_SpexBackSupports.textContent = `${formatPrice(
          Spex_Adapta3_Foam_prices.Spex_Adapta3_Foam_prices4
        )} 元`;
      }
    }
    //endregion
  });
});
//endregion

/*-----  16.Spex軀幹子系統-扣具 -----*/
//region
let nowprice_SpexHardware = Price[15].nextElementSibling;
let SpexHardware_checkboxes = document.querySelectorAll(
  'input[type="checkbox"][name="car_SpexHardware"]'
);
let SpexHardwareDropMount = document.querySelector("#Spex_Hardware_Drop_Mount");

//region --- SpexHardware 扣具 ---
let SpexHardware_prices = {
  SpexHardware_prices1: 10000,
  SpexHardware_prices2: 10000,
  SpexHardware_prices3: 11200,
  SpexHardware_prices4: 10000,
  SpexHardware_prices5: 10000,
  SpexHardware_prices6: 10000,
  SpexHardware_prices7: 10000,
  SpexHardware_prices8: 10000,
  SpexHardware_prices9: 10000,
  SpexHardware_prices10: 10000,
};
//endregion

function update_SpexHardware_Price(event) {
  SpexHardware_checkboxes.forEach((checkbox) => {
    if (checkbox !== event.target) {
      checkbox.checked = false;
    }
    if (event.target.id === "Spex_Hardware_Adapta_ForwardDual") {
      nowprice_SpexHardware.textContent = `${formatPrice(
        SpexHardware_prices.SpexHardware_prices1
      )} 元`;
    } else if (event.target.id === "Spex_Hardware_Adapta_Dual") {
      nowprice_SpexHardware.textContent = `${formatPrice(
        SpexHardware_prices.SpexHardware_prices2
      )} 元`;
    } else if (event.target.id === "Spex_Hardware_ForwardExtendedDual") {
      nowprice_SpexHardware.textContent = `${formatPrice(
        SpexHardware_prices.SpexHardware_prices3
      )} 元`;
    } else if (event.target.id === "Spex_Hardware_Single") {
      nowprice_SpexHardware.textContent = `${formatPrice(
        SpexHardware_prices.SpexHardware_prices4
      )} 元`;
    } else if (event.target.id === "Spex_Hardware_Dual") {
      nowprice_SpexHardware.textContent = `${formatPrice(
        SpexHardware_prices.SpexHardware_prices5
      )} 元`;
    } else if (event.target.id === "Spex_Hardware_Quad") {
      nowprice_SpexHardware.textContent = `${formatPrice(
        SpexHardware_prices.SpexHardware_prices6
      )} 元`;
    }
  });
}

let DropMountSelect = document.querySelector(".Spexdropmount_size");

DropMountSelect.addEventListener("change", function () {
  let dropmountSelectoptions =
    DropMountSelect.options[DropMountSelect.selectedIndex];
  if (SpexHardwareDropMount.checked) {
    if (dropmountSelectoptions.text === "Paediatric") {
      nowprice_SpexHardware.textContent = `${formatPrice(
        SpexHardware_prices.SpexHardware_prices7
      )} 元`;
    } else if (dropmountSelectoptions.text === "Small") {
      nowprice_SpexHardware.textContent = `${formatPrice(
        SpexHardware_prices.SpexHardware_prices8
      )} 元`;
    } else if (dropmountSelectoptions.text === "Medium") {
      nowprice_SpexHardware.textContent = `${formatPrice(
        SpexHardware_prices.SpexHardware_prices9
      )} 元`;
    } else if (dropmountSelectoptions.text === "Large") {
      nowprice_SpexHardware.textContent = `${formatPrice(
        SpexHardware_prices.SpexHardware_prices10
      )} 元`;
    }
  }
});

//region
SpexHardware_checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", (event) => {
    if (event.target.checked) {
      update_SpexHardware_Price(event);
    } else {
      nowprice_SpexHardware.textContent = "0元";
    }
  });
});
//endregion
//endregion

/*----- 17.Spex軀幹子系統-軀幹側支撐 -----*/
//region

//region --- 軀幹側支撐宣告
let nowprice_SpexLaterTrunkSupports = Price[16].nextElementSibling;
let latertrunkprices = document.querySelector(".latertrunkprices");
let latertrunkclothpadprices = document.querySelector(
  ".latertrunkclothpadprices"
);

let latertrunkaxialcountInput = document.getElementById("latertrunkaxialcount");
let latertrunkaxialpadcountInput = document.querySelector(
  "#latertrunkaxialpadcount"
);

let SpexLaterTrunkAxialCheckbox = document.querySelector(
  "#Spex_LaterTrunk_Axial"
);

let SpexLaterTrunkStandardCheckbox = document.querySelector(
  "#Spex_LaterTrunk_Standard"
);
let latertrunkstandardcountInput = document.getElementById(
  "latertrunkstandardcount"
);
let latertrunkstandardpadcountInput = document.getElementById(
  "latertrunkstandardpadcount"
);

let SpexLaterTrunkOffsetCheckbox = document.querySelector(
  "#Spex_LaterTrunk_Offset"
);

let latertrunkoffsetcountInput = document.getElementById(
  "latertrunkoffsetcount"
);

let latertrunkoffsetpadcountInput = document.getElementById(
  "latertrunkoffsetpadcount"
);

let SpexLaterTrunkAxialBiangularCheckbox = document.querySelector(
  "#Spex_LaterTrunk_AxialBiangular"
);

let latertrunkaxialbiangularcountInput = document.getElementById(
  "latertrunk_axialbiangularcount"
);

let latertrunkaxialbiangularpadcountInput = document.getElementById(
  "latertrunkaxialbiangularpadcount"
);

let SpexLaterTrunkConnectLeftCheckbox = document.querySelector(
  "#Spex_LaterTrunk_ConnectLeft"
);
let SpexLaterTrunkConnectRightCheckbox = document.querySelector(
  "#Spex_LaterTrunk_ConnectRight"
);
let SpexLaterTrunkExtend30Checkbox = document.querySelector(
  "#Spex_LaterTrunk_Extend30"
);
let SpexLaterTrunkExtend115Checkbox = document.querySelector(
  "#Spex_LaterTrunk_Extend115"
);
let SpexLaterTrunkReinforceCheckbox = document.querySelector(
  "#Spex_LaterTrunk_Reinforce"
);
//endregion

//region --- 側支撐扣具價格 ---
//region --- 多軸可外撥側支撐 ---
let SpexLaterTrunkAxial_prices = {
  SpexLaterTrunkAxial_prices1: 10200,
};
//endregion

//region --- 可外撥側支撐(Standard) ---
let SpexLaterTrunkStandard_prices = {
  SpexLaterTrunkStandard_prices1: 7650,
  SpexLaterTrunkStandard_prices2: 7650,
};
//endregion

//region --- 可外撥側支撐(Offset) ---
let SpexLaterTrunkOffset_prices = {
  SpexLaterTrunkOffset_prices1: 7650,
  SpexLaterTrunkOffset_prices2: 7650,
};
//endregion

//region --- 雙曲面多軸可外撥側支撐 ---
let SpexLaterTrunkAxialBiangular_prices = {
  SpexLaterTrunkAxialBiangular_prices1: 7620,
};
//endregion

//region --- 側支撐連接套件/左背管 ---
let SpexLaterTrunkConnectLeft_prices = {
  SpexLaterTrunkConnectLeft_prices1: 3200,
};
//endregion

//region --- 側支撐連接套件/右背管 ---
let SpexLaterTrunkConnectRight_prices = {
  SpexLaterTrunkConnectRight_prices1: 3200,
};
//endregion

//region --- 側支撐30mm延伸套件 ---
let SpexLaterTrunkConnectExtend30_prices = {
  SpexLaterTrunkConnectExtend30_prices1: 1900,
};
//endregion

//region --- 側支撐115mm延伸套件 ---
let SpexLaterTrunkConnectExtend115_prices = {
  SpexLaterTrunkConnectExtend115_prices1: 3200,
};
//endregion

//region --- 側支撐強化套件/補強片 ---
let SpexLaterTrunkConnectReinforce_prices = {
  SpexLaterTrunkConnectReinforce_prices1: 1900,
};
//endregion

// 把所有價格集合起來成一個大物件（方便查）
let allSpexLaterTrunkAccessoryPrices = [3200, 3200, 1900, 3200, 1900];

//endregion

//region --- 側支撐擋墊布套價錢 ---

//region --- 可外撥側支撐STANDARD狹長型擋墊價錢 ---
let SpexLaterTrunklStandardStraight_prices = {
  SpexLaterTrunklStandardStraight_prices1: 2000,
  SpexLaterTrunklStandardStraight_prices2: 2000,
  SpexLaterTrunklStandardStraight_prices3: 2000,
  SpexLaterTrunklStandardStraight_prices4: 2000,
  SpexLaterTrunklStandardStraight_prices5: 2000,
};
//endregion

//region --- 可外撥側支撐COMFY狹長型擋墊價錢 ---
let SpexLaterTrunklComfyStraight_prices = {
  SpexLaterTrunklComfyStraight_prices1: 5200,
  SpexLaterTrunklComfyStraight_prices2: 5200,
  SpexLaterTrunklComfyStraight_prices3: 5200,
  SpexLaterTrunklComfyStraight_prices4: 5200,
  SpexLaterTrunklComfyStraight_prices5: 5200,
};
//endregion

//region --- 可外撥側支撐STANDARD狹長微彎型擋墊價錢 ---
let SpexLaterTrunklStandardCurved_prices = {
  SpexLaterTrunklStandardCurved_prices1: 2000,
  SpexLaterTrunklStandardCurved_prices2: 2000,
  SpexLaterTrunklStandardCurved_prices3: 2000,
  SpexLaterTrunklStandardCurved_prices4: 2000,
};
//endregion

//region --- 可外撥側支撐COMFY狹長微彎型擋墊價錢 ---
let SpexLaterTrunklComfyCurved_prices = {
  SpexLaterTrunklComfyCurved_prices1: 5200,
  SpexLaterTrunklComfyCurved_prices2: 5200,
  SpexLaterTrunklComfyCurved_prices3: 5200,
  SpexLaterTrunklComfyCurved_prices4: 5200,
};
//endregion

//region --- 可外撥側支撐STANDARD寬短型擋墊價錢 ---
let SpexLaterTrunklStandardBroad_prices = {
  SpexLaterTrunklStandardBroad_prices1: 2000,
  SpexLaterTrunklStandardBroad_prices2: 2000,
  SpexLaterTrunklStandardBroad_prices3: 2000,
  SpexLaterTrunklStandardBroad_prices4: 2000,
  SpexLaterTrunklStandardBroad_prices5: 2000,
  SpexLaterTrunklStandardBroad_prices6: 2000,
};
//endregion

//region --- 可外撥側支撐COMFY寬短型擋墊價錢 ---
let SpexLaterTrunklComfyBroad_prices = {
  SpexLaterTrunklComfyBroad_prices1: 5200,
  SpexLaterTrunklComfyBroad_prices2: 5200,
  SpexLaterTrunklComfyBroad_prices3: 5200,
  SpexLaterTrunklComfyBroad_prices4: 5200,
  SpexLaterTrunklComfyBroad_prices5: 5200,
  SpexLaterTrunklComfyBroad_prices6: 5200,
};
//endregion

//region --- 雙曲面側支撐12mm厚度STANDARD擋墊價錢 ---
let SpexLaterTrunkAxialBiangular12Standard_prices = {
  SpexLaterTrunkAxialBiangular12Standard_prices1: 5000,
  SpexLaterTrunkAxialBiangular12Standard_prices2: 5000,
  SpexLaterTrunkAxialBiangular12Standard_prices3: 5000,
};
//endregion

//region --- 雙曲面側支撐12mm厚度COMFY擋墊價錢 ---
let SpexLaterTrunkAxialBiangular12Comfy_prices = {
  SpexLaterTrunkAxialBiangular12Comfy_prices1: 6500,
  SpexLaterTrunkAxialBiangular12Comfy_prices2: 6500,
  SpexLaterTrunkAxialBiangular12Comfy_prices3: 6500,
};
//endregion

//region --- 雙曲面側支撐24mm厚度STANDARD擋墊價錢 ---
let SpexLaterTrunkAxialBiangular24Standard_prices = {
  SpexLaterTrunkAxialBiangular24Standard_prices1: 7000,
  SpexLaterTrunkAxialBiangular24Standard_prices2: 7000,
  SpexLaterTrunkAxialBiangular24Standard_prices3: 7000,
};
//endregion

//region --- 雙曲面側支撐24mm厚度COMFY擋墊價錢 ---
let SpexLaterTrunkAxialBiangular24Comfy_prices = {
  SpexLaterTrunkAxialBiangular24Comfy_prices1: 7600,
  SpexLaterTrunkAxialBiangular24Comfy_prices2: 7600,
  SpexLaterTrunkAxialBiangular24Comfy_prices3: 7600,
};
//endregion

//endregion

//region --- 多軸可外撥側支撐 ---
//region --- 監聽側支撐數量並給予價錢 ---
latertrunkaxialcountInput.addEventListener("input", () => {
  if (
    latertrunkaxialcountInput.value.trim() !== "" &&
    SpexLaterTrunkAxialCheckbox.checked
  ) {
    let latertrunkaxialcountquantity =
      parseInt(latertrunkaxialcountInput.value) || 0; // 轉成數字（預設為 0）

    nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
      SpexLaterTrunkAxial_prices.SpexLaterTrunkAxial_prices1 *
        latertrunkaxialcountquantity
    )} 元`;

    latertrunkprices.textContent =
      SpexLaterTrunkAxial_prices.SpexLaterTrunkAxial_prices1 *
      latertrunkaxialcountquantity;
  } else {
    nowprice_SpexLaterTrunkSupports.textContent = `0元`;
  }
});
//endregion

//region --- 監聽布套種類數量並給予價錢 ---
latertrunkaxialpadcountInput.addEventListener("input", () => {
  let latertrunkaxialpadtypeSelectoptions =
    latertrunkaxialpadtype.options[latertrunkaxialpadtype.selectedIndex];
  let latertrunkaxialclothpadtypeSelectoptions =
    latertrunkaxialclothpadtype.options[
      latertrunkaxialclothpadtype.selectedIndex
    ];
  let latertrunkaxialpadsizeWidthSelectoptions =
    latertrunkaxialpadsize_Width.options[
      latertrunkaxialpadsize_Width.selectedIndex
    ];
  let latertrunkaxialpadsizeHeighSelectoptions =
    latertrunkaxialpadsize_Heigh.options[
      latertrunkaxialpadsize_Heigh.selectedIndex
    ];
  let latertrunkaxialpadcountquantity =
    parseInt(latertrunkaxialpadcountInput.value) || 0; // 轉成數字（預設為 0）

  if (SpexLaterTrunkAxialCheckbox.checked) {
    //region --- STANDARD狹長型擋墊價錢 ---
    if (
      latertrunkaxialpadtypeSelectoptions.text === "狹長型" &&
      latertrunkaxialclothpadtypeSelectoptions.text === "STANDARD" &&
      latertrunkaxialcountInput.value.trim() !== ""
    ) {
      if (
        latertrunkaxialpadsizeWidthSelectoptions.text === "85mm" &&
        latertrunkaxialpadsizeHeighSelectoptions.text === "115mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklStandardStraight_prices.SpexLaterTrunklStandardStraight_prices1 *
          latertrunkaxialpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkaxialpadsizeWidthSelectoptions.text === "95mm" &&
        latertrunkaxialpadsizeHeighSelectoptions.text === "145mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklStandardStraight_prices.SpexLaterTrunklStandardStraight_prices2 *
          latertrunkaxialpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkaxialpadsizeWidthSelectoptions.text === "95mm" &&
        latertrunkaxialpadsizeHeighSelectoptions.text === "180mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklStandardStraight_prices.SpexLaterTrunklStandardStraight_prices3 *
          latertrunkaxialpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkaxialpadsizeWidthSelectoptions.text === "115mm" &&
        latertrunkaxialpadsizeHeighSelectoptions.text === "210mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklStandardStraight_prices.SpexLaterTrunklStandardStraight_prices4 *
          latertrunkaxialpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkaxialpadsizeWidthSelectoptions.text === "115mm" &&
        latertrunkaxialpadsizeHeighSelectoptions.text === "240mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklStandardStraight_prices.SpexLaterTrunklStandardStraight_prices5 *
          latertrunkaxialpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      }
    }
    //endregion

    //region --- COMFY狹長型擋墊價錢 ---
    if (
      latertrunkaxialpadtypeSelectoptions.text === "狹長型" &&
      latertrunkaxialclothpadtypeSelectoptions.text === "COMFY" &&
      latertrunkaxialcountInput.value.trim() !== ""
    ) {
      if (
        latertrunkaxialpadsizeWidthSelectoptions.text === "85mm" &&
        latertrunkaxialpadsizeHeighSelectoptions.text === "115mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklComfyStraight_prices.SpexLaterTrunklComfyStraight_prices1 *
          latertrunkaxialpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkaxialpadsizeWidthSelectoptions.text === "95mm" &&
        latertrunkaxialpadsizeHeighSelectoptions.text === "145mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklComfyStraight_prices.SpexLaterTrunklComfyStraight_prices2 *
          latertrunkaxialpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkaxialpadsizeWidthSelectoptions.text === "95mm" &&
        latertrunkaxialpadsizeHeighSelectoptions.text === "180mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklComfyStraight_prices.SpexLaterTrunklComfyStraight_prices3 *
          latertrunkaxialpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkaxialpadsizeWidthSelectoptions.text === "115mm" &&
        latertrunkaxialpadsizeHeighSelectoptions.text === "210mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklComfyStraight_prices.SpexLaterTrunklComfyStraight_prices4 *
          latertrunkaxialpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkaxialpadsizeWidthSelectoptions.text === "115mm" &&
        latertrunkaxialpadsizeHeighSelectoptions.text === "240mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklComfyStraight_prices.SpexLaterTrunklComfyStraight_prices5 *
          latertrunkaxialpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      }
    }
    //endregion

    //region --- STANDARD狹長微彎型擋墊價錢 ---
    if (
      latertrunkaxialpadtypeSelectoptions.text === "狹長微彎型" &&
      latertrunkaxialclothpadtypeSelectoptions.text === "STANDARD" &&
      latertrunkaxialcountInput.value.trim() !== ""
    ) {
      if (
        latertrunkaxialpadsizeWidthSelectoptions.text === "95mm" &&
        latertrunkaxialpadsizeHeighSelectoptions.text === "145mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklStandardCurved_prices.SpexLaterTrunklStandardCurved_prices1 *
          latertrunkaxialpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkaxialpadsizeWidthSelectoptions.text === "95mm" &&
        latertrunkaxialpadsizeHeighSelectoptions.text === "180mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklStandardCurved_prices.SpexLaterTrunklStandardCurved_prices2 *
          latertrunkaxialpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkaxialpadsizeWidthSelectoptions.text === "115mm" &&
        latertrunkaxialpadsizeHeighSelectoptions.text === "210mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklStandardCurved_prices.SpexLaterTrunklStandardCurved_prices3 *
          latertrunkaxialpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkaxialpadsizeWidthSelectoptions.text === "115mm" &&
        latertrunkaxialpadsizeHeighSelectoptions.text === "240mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklStandardCurved_prices.SpexLaterTrunklStandardCurved_prices4 *
          latertrunkaxialpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      }
    }
    //endregion

    //region --- COMFY狹長微彎型擋墊價錢 ---
    if (
      latertrunkaxialpadtypeSelectoptions.text === "狹長微彎型" &&
      latertrunkaxialclothpadtypeSelectoptions.text === "COMFY" &&
      latertrunkaxialcountInput.value.trim() !== ""
    ) {
      if (
        latertrunkaxialpadsizeWidthSelectoptions.text === "95mm" &&
        latertrunkaxialpadsizeHeighSelectoptions.text === "145mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklComfyCurved_prices.SpexLaterTrunklComfyCurved_prices1 *
          latertrunkaxialpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkaxialpadsizeWidthSelectoptions.text === "95mm" &&
        latertrunkaxialpadsizeHeighSelectoptions.text === "180mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklComfyCurved_prices.SpexLaterTrunklComfyCurved_prices2 *
          latertrunkaxialpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkaxialpadsizeWidthSelectoptions.text === "115mm" &&
        latertrunkaxialpadsizeHeighSelectoptions.text === "210mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklComfyCurved_prices.SpexLaterTrunklComfyCurved_prices3 *
          latertrunkaxialpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkaxialpadsizeWidthSelectoptions.text === "115mm" &&
        latertrunkaxialpadsizeHeighSelectoptions.text === "240mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklComfyCurved_prices.SpexLaterTrunklComfyCurved_prices4 *
          latertrunkaxialpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      }
    }
    //endregion

    //region --- STANDARD寬短型擋墊價錢 ---
    if (
      latertrunkaxialpadtypeSelectoptions.text === "寬短型" &&
      latertrunkaxialclothpadtypeSelectoptions.text === "STANDARD" &&
      latertrunkaxialcountInput.value.trim() !== ""
    ) {
      if (
        latertrunkaxialpadsizeWidthSelectoptions.text === "105mm" &&
        latertrunkaxialpadsizeHeighSelectoptions.text === "130mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklStandardBroad_prices.SpexLaterTrunklStandardBroad_prices1 *
          latertrunkaxialpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkaxialpadsizeWidthSelectoptions.text === "125mm" &&
        latertrunkaxialpadsizeHeighSelectoptions.text === "140mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklStandardBroad_prices.SpexLaterTrunklStandardBroad_prices2 *
          latertrunkaxialpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkaxialpadsizeWidthSelectoptions.text === "140mm" &&
        latertrunkaxialpadsizeHeighSelectoptions.text === "150mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklStandardBroad_prices.SpexLaterTrunklStandardBroad_prices3 *
          latertrunkaxialpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkaxialpadsizeWidthSelectoptions.text === "160mm" &&
        latertrunkaxialpadsizeHeighSelectoptions.text === "155mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklStandardBroad_prices.SpexLaterTrunklStandardBroad_prices4 *
          latertrunkaxialpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkaxialpadsizeWidthSelectoptions.text === "195mm" &&
        latertrunkaxialpadsizeHeighSelectoptions.text === "165mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklStandardBroad_prices.SpexLaterTrunklStandardBroad_prices5 *
          latertrunkaxialpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkaxialpadsizeWidthSelectoptions.text === "230mm" &&
        latertrunkaxialpadsizeHeighSelectoptions.text === "175mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklStandardBroad_prices.SpexLaterTrunklStandardBroad_prices6 *
          latertrunkaxialpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      }
    }
    //endregion

    //region --- COMFY寬短型擋墊價錢 ---
    if (
      latertrunkaxialpadtypeSelectoptions.text === "寬短型" &&
      latertrunkaxialclothpadtypeSelectoptions.text === "COMFY" &&
      latertrunkaxialcountInput.value.trim() !== ""
    ) {
      if (
        latertrunkaxialpadsizeWidthSelectoptions.text === "105mm" &&
        latertrunkaxialpadsizeHeighSelectoptions.text === "130mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklComfyBroad_prices.SpexLaterTrunklComfyBroad_prices1 *
          latertrunkaxialpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkaxialpadsizeWidthSelectoptions.text === "125mm" &&
        latertrunkaxialpadsizeHeighSelectoptions.text === "140mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklComfyBroad_prices.SpexLaterTrunklComfyBroad_prices2 *
          latertrunkaxialpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkaxialpadsizeWidthSelectoptions.text === "140mm" &&
        latertrunkaxialpadsizeHeighSelectoptions.text === "150mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklComfyBroad_prices.SpexLaterTrunklComfyBroad_prices3 *
          latertrunkaxialpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkaxialpadsizeWidthSelectoptions.text === "160mm" &&
        latertrunkaxialpadsizeHeighSelectoptions.text === "155mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklComfyBroad_prices.SpexLaterTrunklComfyBroad_prices4 *
          latertrunkaxialpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkaxialpadsizeWidthSelectoptions.text === "195mm" &&
        latertrunkaxialpadsizeHeighSelectoptions.text === "165mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklComfyBroad_prices.SpexLaterTrunklComfyBroad_prices5 *
          latertrunkaxialpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkaxialpadsizeWidthSelectoptions.text === "230mm" &&
        latertrunkaxialpadsizeHeighSelectoptions.text === "175mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklComfyBroad_prices.SpexLaterTrunklComfyBroad_prices6 *
          latertrunkaxialpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      }
    }
    //endregion
  }
});
//endregion

//region --- 監聽墊寬，每次重新選擇墊寬寬度時，把價錢重製 ---
let latertrunkaxialpadWidth = document.querySelector(
  ".latertrunkaxialpadsize_Width"
);
latertrunkaxialpadWidth.addEventListener("change", () => {
  latertrunkclothpadprices.textContent = `0元`;
  nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
    Number(latertrunkprices.textContent)
  )} 元`;
});
//endregion

//endregion

//region --- Spex可外撥側支撐(Standard) ---
//region --- 監聽側支撐數量並給予價錢 ---
latertrunkstandardcountInput.addEventListener("input", () => {
  let standardsize1 = document.querySelector("#standardsize1");
  let standardsize2 = document.querySelector("#standardsize2");
  if (
    latertrunkstandardcountInput.value.trim() !== "" &&
    SpexLaterTrunkStandardCheckbox.checked
  ) {
    let latertrunkstandardcountquantity =
      parseInt(latertrunkstandardcountInput.value) || 0; // 轉成數字（預設為 0）
    if (standardsize1.checked) {
      nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
        SpexLaterTrunkStandard_prices.SpexLaterTrunkStandard_prices1 *
          latertrunkstandardcountquantity
      )} 元`;

      latertrunkprices.textContent =
        SpexLaterTrunkStandard_prices.SpexLaterTrunkStandard_prices1 *
        latertrunkstandardcountquantity;
    } else if (standardsize2.checked) {
      nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
        SpexLaterTrunkStandard_prices.SpexLaterTrunkStandard_prices2 *
          latertrunkstandardcountquantity
      )} 元`;

      latertrunkprices.textContent =
        SpexLaterTrunkStandard_prices.SpexLaterTrunkStandard_prices2 *
        latertrunkstandardcountquantity;
    }
  } else {
    nowprice_SpexLaterTrunkSupports.textContent = `0元`;
  }
});
//endregion

//region --- 監聽墊寬，每次重新選擇墊寬寬度時，把價錢重製 ---
let standardpadWidth = document.querySelector(
  ".latertrunkstandardpadsize_Width"
);
standardpadWidth.addEventListener("change", () => {
  latertrunkclothpadprices.textContent = `0元`;
  nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
    Number(latertrunkprices.textContent)
  )} 元`;
});
//endregion

//region --- 監聽布套種類數量並給予價錢 ---
latertrunkstandardpadcountInput.addEventListener("input", () => {
  let latertrunkstandardpadtypeSelectoptions =
    latertrunkstandardpadtype.options[latertrunkstandardpadtype.selectedIndex];
  let latertrunkstandardclothpadtypeSelectoptions =
    latertrunkstandardclothpadtype.options[
      latertrunkstandardclothpadtype.selectedIndex
    ];
  let latertrunkstandardpadsizeWidthSelectoptions =
    latertrunkstandardpadsize_Width.options[
      latertrunkstandardpadsize_Width.selectedIndex
    ];
  let latertrunkstandardpadsizeHeighSelectoptions =
    latertrunkstandardpadsize_Heigh.options[
      latertrunkstandardpadsize_Heigh.selectedIndex
    ];
  let latertrunkstandardpadcountquantity =
    parseInt(latertrunkstandardpadcountInput.value) || 0; // 轉成數字（預設為 0）

  if (
    latertrunkstandardpadcountInput.value.trim() !== "" &&
    SpexLaterTrunkStandardCheckbox.checked
  ) {
    //region --- STANDARD狹長型擋墊價錢 ---
    if (
      latertrunkstandardpadtypeSelectoptions.text === "狹長型" &&
      latertrunkstandardclothpadtypeSelectoptions.text === "STANDARD" &&
      latertrunkstandardpadcountInput.value.trim() !== ""
    ) {
      if (
        latertrunkstandardpadsizeWidthSelectoptions.text === "85mm" &&
        latertrunkstandardpadsizeHeighSelectoptions.text === "115mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklStandardStraight_prices.SpexLaterTrunklStandardStraight_prices1 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkstandardpadsizeWidthSelectoptions.text === "95mm" &&
        latertrunkstandardpadsizeHeighSelectoptions.text === "145mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklStandardStraight_prices.SpexLaterTrunklStandardStraight_prices2 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkstandardpadsizeWidthSelectoptions.text === "95mm" &&
        latertrunkstandardpadsizeHeighSelectoptions.text === "180mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklStandardStraight_prices.SpexLaterTrunklStandardStraight_prices3 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkstandardpadsizeWidthSelectoptions.text === "115mm" &&
        latertrunkstandardpadsizeHeighSelectoptions.text === "210mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklStandardStraight_prices.SpexLaterTrunklStandardStraight_prices4 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkstandardpadsizeWidthSelectoptions.text === "115mm" &&
        latertrunkstandardpadsizeHeighSelectoptions.text === "240mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklStandardStraight_prices.SpexLaterTrunklStandardStraight_prices5 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      }
    }
    //endregion

    //region --- COMFY狹長型擋墊價錢 ---
    if (
      latertrunkstandardpadtypeSelectoptions.text === "狹長型" &&
      latertrunkstandardclothpadtypeSelectoptions.text === "COMFY" &&
      latertrunkstandardpadcountInput.value.trim() !== ""
    ) {
      if (
        latertrunkstandardpadsizeWidthSelectoptions.text === "85mm" &&
        latertrunkstandardpadsizeHeighSelectoptions.text === "115mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklComfyStraight_prices.SpexLaterTrunklComfyStraight_prices1 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkstandardpadsizeWidthSelectoptions.text === "95mm" &&
        latertrunkstandardpadsizeHeighSelectoptions.text === "145mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklComfyStraight_prices.SpexLaterTrunklComfyStraight_prices2 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkstandardpadsizeWidthSelectoptions.text === "95mm" &&
        latertrunkstandardpadsizeHeighSelectoptions.text === "180mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklComfyStraight_prices.SpexLaterTrunklComfyStraight_prices3 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkstandardpadsizeWidthSelectoptions.text === "115mm" &&
        latertrunkstandardpadsizeHeighSelectoptions.text === "210mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklComfyStraight_prices.SpexLaterTrunklComfyStraight_prices4 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkstandardpadsizeWidthSelectoptions.text === "115mm" &&
        latertrunkstandardpadsizeHeighSelectoptions.text === "240mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklComfyStraight_prices.SpexLaterTrunklComfyStraight_prices5 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      }
    }
    //endregion

    //region --- STANDARD狹長微彎型擋墊價錢 ---
    if (
      latertrunkstandardpadtypeSelectoptions.text === "狹長微彎型" &&
      latertrunkstandardclothpadtypeSelectoptions.text === "STANDARD" &&
      latertrunkstandardpadcountInput.value.trim() !== ""
    ) {
      if (
        latertrunkstandardpadsizeWidthSelectoptions.text === "95mm" &&
        latertrunkstandardpadsizeHeighSelectoptions.text === "145mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklStandardCurved_prices.SpexLaterTrunklStandardCurved_prices1 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkstandardpadsizeWidthSelectoptions.text === "95mm" &&
        latertrunkstandardpadsizeHeighSelectoptions.text === "180mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklStandardCurved_prices.SpexLaterTrunklStandardCurved_prices2 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkstandardpadsizeWidthSelectoptions.text === "115mm" &&
        latertrunkstandardpadsizeHeighSelectoptions.text === "210mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklStandardCurved_prices.SpexLaterTrunklStandardCurved_prices3 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkstandardpadsizeWidthSelectoptions.text === "115mm" &&
        latertrunkstandardpadsizeHeighSelectoptions.text === "240mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklStandardCurved_prices.SpexLaterTrunklStandardCurved_prices4 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      }
    }
    //endregion

    //region --- COMFY狹長微彎型擋墊價錢 ---
    if (
      latertrunkstandardpadtypeSelectoptions.text === "狹長微彎型" &&
      latertrunkstandardclothpadtypeSelectoptions.text === "COMFY" &&
      latertrunkstandardpadcountInput.value.trim() !== ""
    ) {
      if (
        latertrunkstandardpadsizeWidthSelectoptions.text === "95mm" &&
        latertrunkstandardpadsizeHeighSelectoptions.text === "145mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklComfyCurved_prices.SpexLaterTrunklComfyCurved_prices1 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkstandardpadsizeWidthSelectoptions.text === "95mm" &&
        latertrunkstandardpadsizeHeighSelectoptions.text === "180mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklComfyCurved_prices.SpexLaterTrunklComfyCurved_prices2 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkstandardpadsizeWidthSelectoptions.text === "115mm" &&
        latertrunkstandardpadsizeHeighSelectoptions.text === "210mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklComfyCurved_prices.SpexLaterTrunklComfyCurved_prices3 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkstandardpadsizeWidthSelectoptions.text === "115mm" &&
        latertrunkstandardpadsizeHeighSelectoptions.text === "240mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklComfyCurved_prices.SpexLaterTrunklComfyCurved_prices4 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      }
    }
    //endregion

    //region --- STANDARD寬短型擋墊價錢 ---
    if (
      latertrunkstandardpadtypeSelectoptions.text === "寬短型" &&
      latertrunkstandardclothpadtypeSelectoptions.text === "STANDARD" &&
      latertrunkstandardpadcountInput.value.trim() !== ""
    ) {
      if (
        latertrunkstandardpadsizeWidthSelectoptions.text === "105mm" &&
        latertrunkstandardpadsizeHeighSelectoptions.text === "130mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklStandardBroad_prices.SpexLaterTrunklStandardBroad_prices1 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkstandardpadsizeWidthSelectoptions.text === "125mm" &&
        latertrunkstandardpadsizeHeighSelectoptions.text === "140mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklStandardBroad_prices.SpexLaterTrunklStandardBroad_prices2 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      }
      if (
        latertrunkstandardpadsizeWidthSelectoptions.text === "140mm" &&
        latertrunkstandardpadsizeHeighSelectoptions.text === "150mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklStandardBroad_prices.SpexLaterTrunklStandardBroad_prices3 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkstandardpadsizeWidthSelectoptions.text === "160mm" &&
        latertrunkstandardpadsizeHeighSelectoptions.text === "155mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklStandardBroad_prices.SpexLaterTrunklStandardBroad_prices4 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkstandardpadsizeWidthSelectoptions.text === "195mm" &&
        latertrunkstandardpadsizeHeighSelectoptions.text === "230mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklStandardBroad_prices.SpexLaterTrunklStandardBroad_prices5 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkstandardpadsizeWidthSelectoptions.text === "230mm" &&
        latertrunkstandardpadsizeHeighSelectoptions.text === "175mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklStandardBroad_prices.SpexLaterTrunklStandardBroad_prices6 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      }
    }
    //endregion

    //region --- COMFY寬短型擋墊價錢 ---
    if (
      latertrunkstandardpadtypeSelectoptions.text === "寬短型" &&
      latertrunkstandardclothpadtypeSelectoptions.text === "COMFY" &&
      latertrunkstandardpadcountInput.value.trim() !== ""
    ) {
      if (
        latertrunkstandardpadsizeWidthSelectoptions.text === "105mm" &&
        latertrunkstandardpadsizeHeighSelectoptions.text === "130mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklComfyBroad_prices.SpexLaterTrunklComfyBroad_prices1 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkstandardpadsizeWidthSelectoptions.text === "125mm" &&
        latertrunkstandardpadsizeHeighSelectoptions.text === "140mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklComfyBroad_prices.SpexLaterTrunklComfyBroad_prices2 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      }
      if (
        latertrunkstandardpadsizeWidthSelectoptions.text === "140mm" &&
        latertrunkstandardpadsizeHeighSelectoptions.text === "150mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklComfyBroad_prices.SpexLaterTrunklComfyBroad_prices3 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkstandardpadsizeWidthSelectoptions.text === "160mm" &&
        latertrunkstandardpadsizeHeighSelectoptions.text === "155mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklComfyBroad_prices.SpexLaterTrunklComfyBroad_prices4 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkstandardpadsizeWidthSelectoptions.text === "195mm" &&
        latertrunkstandardpadsizeHeighSelectoptions.text === "165mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklComfyBroad_prices.SpexLaterTrunklComfyBroad_prices5 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkstandardpadsizeWidthSelectoptions.text === "230mm" &&
        latertrunkstandardpadsizeHeighSelectoptions.text === "175mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklComfyBroad_prices.SpexLaterTrunklComfyBroad_prices6 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      }
    }
    //endregion
  }
});
//endregion

//endregion

//region --- Spex可外撥側支撐(Offset) ---
//region --- 監聽側支撐數量並給予價錢 ---
latertrunkoffsetcountInput.addEventListener("input", () => {
  let offsetsize1 = document.querySelector("#offsetsize1");
  let offsetsize2 = document.querySelector("#offsetsize2");
  if (
    latertrunkoffsetcountInput.value.trim() !== "" &&
    SpexLaterTrunkOffsetCheckbox.checked
  ) {
    let latertrunkoffsetcountquantity =
      parseInt(latertrunkoffsetcountInput.value) || 0; // 轉成數字（預設為 0）
    if (offsetsize1.checked) {
      nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
        SpexLaterTrunkOffset_prices.SpexLaterTrunkOffset_prices1 *
          latertrunkoffsetcountquantity
      )} 元`;

      latertrunkprices.textContent =
        SpexLaterTrunkOffset_prices.SpexLaterTrunkOffset_prices1 *
        latertrunkoffsetcountquantity;
    } else if (offsetsize2.checked) {
      nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
        SpexLaterTrunkOffset_prices.SpexLaterTrunkOffset_prices2 *
          latertrunkoffsetcountquantity
      )} 元`;

      latertrunkprices.textContent =
        SpexLaterTrunkOffset_prices.SpexLaterTrunkOffset_prices2 *
        latertrunkoffsetcountquantity;
    }
  } else {
    nowprice_SpexLaterTrunkSupports.textContent = `0元`;
  }
});
//endregion

//region --- 監聽墊寬，每次重新選擇墊寬寬度時，把價錢重製 ---
let offsetpadWidth = document.querySelector(".latertrunkoffsetpadsize_Width");
offsetpadWidth.addEventListener("change", () => {
  latertrunkclothpadprices.textContent = `0元`;
  nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
    Number(latertrunkprices.textContent)
  )} 元`;
});
//endregion

//region --- 監聽布套種類數量並給予價錢 ---
latertrunkoffsetpadcountInput.addEventListener("input", () => {
  let latertrunkoffsetpadtypeSelectoptions =
    latertrunkoffsetpadtype.options[latertrunkoffsetpadtype.selectedIndex];
  let latertrunkoffsetclothpadtypeSelectoptions =
    latertrunkoffsetclothpadtype.options[
      latertrunkoffsetclothpadtype.selectedIndex
    ];
  let latertrunkoffsetpadsizeWidthSelectoptions =
    latertrunkoffsetpadsize_Width.options[
      latertrunkoffsetpadsize_Width.selectedIndex
    ];
  let latertrunkoffsetpadsizeHeighSelectoptions =
    latertrunkoffsetpadsize_Heigh.options[
      latertrunkoffsetpadsize_Heigh.selectedIndex
    ];
  let latertrunkoffsetpadcountquantity =
    parseInt(latertrunkoffsetpadcountInput.value) || 0; // 轉成數字（預設為 0）

  if (
    latertrunkoffsetpadcountInput.value.trim() !== "" &&
    SpexLaterTrunkOffsetCheckbox.checked
  ) {
    //region --- STANDARD狹長型擋墊價錢 ---
    if (
      latertrunkoffsetpadtypeSelectoptions.text === "狹長型" &&
      latertrunkoffsetclothpadtypeSelectoptions.text === "STANDARD" &&
      latertrunkoffsetpadcountInput.value.trim() !== ""
    ) {
      if (
        latertrunkoffsetpadsizeWidthSelectoptions.text === "85mm" &&
        latertrunkoffsetpadsizeHeighSelectoptions.text === "115mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklStandardStraight_prices.SpexLaterTrunklStandardStraight_prices1 *
          latertrunkoffsetpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkoffsetpadsizeWidthSelectoptions.text === "95mm" &&
        latertrunkoffsetpadsizeHeighSelectoptions.text === "145mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklStandardStraight_prices.SpexLaterTrunklStandardStraight_prices2 *
          latertrunkoffsetpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkoffsetpadsizeWidthSelectoptions.text === "95mm" &&
        latertrunkoffsetpadsizeHeighSelectoptions.text === "180mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklStandardStraight_prices.SpexLaterTrunklStandardStraight_prices3 *
          latertrunkoffsetpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkoffsetpadsizeWidthSelectoptions.text === "115mm" &&
        latertrunkoffsetpadsizeHeighSelectoptions.text === "210mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklStandardStraight_prices.SpexLaterTrunklStandardStraight_prices4 *
          latertrunkoffsetpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkoffsetpadsizeWidthSelectoptions.text === "115mm" &&
        latertrunkoffsetpadsizeHeighSelectoptions.text === "240mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklStandardStraight_prices.SpexLaterTrunklStandardStraight_prices5 *
          latertrunkoffsetpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      }
    }
    //endregion

    //region --- COMFY狹長型擋墊價錢 ---
    if (
      latertrunkoffsetpadtypeSelectoptions.text === "狹長型" &&
      latertrunkoffsetclothpadtypeSelectoptions.text === "COMFY" &&
      latertrunkoffsetpadcountInput.value.trim() !== ""
    ) {
      if (
        latertrunkoffsetpadsizeWidthSelectoptions.text === "85mm" &&
        latertrunkoffsetpadsizeHeighSelectoptions.text === "115mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklComfyStraight_prices.SpexLaterTrunklComfyStraight_prices1 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkoffsetpadsizeWidthSelectoptions.text === "95mm" &&
        latertrunkoffsetpadsizeHeighSelectoptions.text === "145mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklComfyStraight_prices.SpexLaterTrunklComfyStraight_prices2 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkoffsetpadsizeWidthSelectoptions.text === "95mm" &&
        latertrunkoffsetpadsizeHeighSelectoptions.text === "180mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklComfyStraight_prices.SpexLaterTrunklComfyStraight_prices3 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkoffsetpadsizeWidthSelectoptions.text === "115mm" &&
        latertrunkoffsetpadsizeHeighSelectoptions.text === "210mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklComfyStraight_prices.SpexLaterTrunklComfyStraight_prices4 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkoffsetpadsizeWidthSelectoptions.text === "115mm" &&
        latertrunkoffsetpadsizeHeighSelectoptions.text === "240mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklComfyStraight_prices.SpexLaterTrunklComfyStraight_prices5 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      }
    }
    //endregion

    //region --- STANDARD狹長微彎型擋墊價錢 ---
    if (
      latertrunkoffsetpadtypeSelectoptions.text === "狹長微彎型" &&
      latertrunkoffsetclothpadtypeSelectoptions.text === "STANDARD" &&
      latertrunkoffsetpadcountInput.value.trim() !== ""
    ) {
      if (
        latertrunkoffsetpadsizeWidthSelectoptions.text === "95mm" &&
        latertrunkoffsetpadsizeHeighSelectoptions.text === "145mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklStandardCurved_prices.SpexLaterTrunklStandardCurved_prices1 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkoffsetpadsizeWidthSelectoptions.text === "95mm" &&
        latertrunkoffsetpadsizeHeighSelectoptions.text === "180mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklStandardCurved_prices.SpexLaterTrunklStandardCurved_prices2 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkoffsetpadsizeWidthSelectoptions.text === "115mm" &&
        latertrunkoffsetpadsizeHeighSelectoptions.text === "210mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklStandardCurved_prices.SpexLaterTrunklStandardCurved_prices3 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkoffsetpadsizeWidthSelectoptions.text === "115mm" &&
        latertrunkoffsetpadsizeHeighSelectoptions.text === "240mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklStandardCurved_prices.SpexLaterTrunklStandardCurved_prices4 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      }
    }
    //endregion

    //region --- COMFY狹長微彎型擋墊價錢 ---
    if (
      latertrunkoffsetpadtypeSelectoptions.text === "狹長微彎型" &&
      latertrunkoffsetclothpadtypeSelectoptions.text === "COMFY" &&
      latertrunkoffsetpadcountInput.value.trim() !== ""
    ) {
      if (
        latertrunkoffsetpadsizeWidthSelectoptions.text === "95mm" &&
        latertrunkoffsetpadsizeHeighSelectoptions.text === "145mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklComfyCurved_prices.SpexLaterTrunklComfyCurved_prices1 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkoffsetpadsizeWidthSelectoptions.text === "95mm" &&
        latertrunkoffsetpadsizeHeighSelectoptions.text === "180mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklComfyCurved_prices.SpexLaterTrunklComfyCurved_prices2 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkoffsetpadsizeWidthSelectoptions.text === "115mm" &&
        latertrunkoffsetpadsizeHeighSelectoptions.text === "210mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklComfyCurved_prices.SpexLaterTrunklComfyCurved_prices3 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkoffsetpadsizeWidthSelectoptions.text === "115mm" &&
        latertrunkoffsetpadsizeHeighSelectoptions.text === "240mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklComfyCurved_prices.SpexLaterTrunklComfyCurved_prices4 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      }
    }
    //endregion

    //region --- STANDARD寬短型擋墊價錢 ---
    if (
      latertrunkoffsetpadtypeSelectoptions.text === "寬短型" &&
      latertrunkoffsetclothpadtypeSelectoptions.text === "STANDARD" &&
      latertrunkoffsetpadcountInput.value.trim() !== ""
    ) {
      if (
        latertrunkoffsetpadsizeWidthSelectoptions.text === "105mm" &&
        latertrunkoffsetpadsizeHeighSelectoptions.text === "130mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklStandardBroad_prices.SpexLaterTrunklStandardBroad_prices1 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkoffsetpadsizeWidthSelectoptions.text === "125mm" &&
        latertrunkoffsetpadsizeHeighSelectoptions.text === "140mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklStandardBroad_prices.SpexLaterTrunklStandardBroad_prices2 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      }
      if (
        latertrunkoffsetpadsizeWidthSelectoptions.text === "140mm" &&
        latertrunkoffsetpadsizeHeighSelectoptions.text === "150mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklStandardBroad_prices.SpexLaterTrunklStandardBroad_prices3 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkoffsetpadsizeWidthSelectoptions.text === "160mm" &&
        latertrunkoffsetpadsizeHeighSelectoptions.text === "155mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklStandardBroad_prices.SpexLaterTrunklStandardBroad_prices4 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkoffsetpadsizeWidthSelectoptions.text === "195mm" &&
        latertrunkoffsetpadsizeHeighSelectoptions.text === "230mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklStandardBroad_prices.SpexLaterTrunklStandardBroad_prices5 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkoffsetpadsizeWidthSelectoptions.text === "230mm" &&
        latertrunkoffsetpadsizeHeighSelectoptions.text === "175mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklStandardBroad_prices.SpexLaterTrunklStandardBroad_prices6 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      }
    }
    //endregion

    //region --- COMFY寬短型擋墊價錢 ---
    if (
      latertrunkoffsetpadtypeSelectoptions.text === "寬短型" &&
      latertrunkoffsetclothpadtypeSelectoptions.text === "COMFY" &&
      latertrunkoffsetpadcountInput.value.trim() !== ""
    ) {
      if (
        latertrunkoffsetpadsizeWidthSelectoptions.text === "105mm" &&
        latertrunkoffsetpadsizeHeighSelectoptions.text === "130mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklComfyBroad_prices.SpexLaterTrunklComfyBroad_prices1 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkoffsetpadsizeWidthSelectoptions.text === "125mm" &&
        latertrunkoffsetpadsizeHeighSelectoptions.text === "140mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklComfyBroad_prices.SpexLaterTrunklComfyBroad_prices2 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      }
      if (
        latertrunkoffsetpadsizeWidthSelectoptions.text === "140mm" &&
        latertrunkoffsetpadsizeHeighSelectoptions.text === "150mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklComfyBroad_prices.SpexLaterTrunklComfyBroad_prices3 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkoffsetpadsizeWidthSelectoptions.text === "160mm" &&
        latertrunkoffsetpadsizeHeighSelectoptions.text === "155mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklComfyBroad_prices.SpexLaterTrunklComfyBroad_prices4 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkoffsetpadsizeWidthSelectoptions.text === "195mm" &&
        latertrunkoffsetpadsizeHeighSelectoptions.text === "165mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklComfyBroad_prices.SpexLaterTrunklComfyBroad_prices5 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkoffsetpadsizeWidthSelectoptions.text === "230mm" &&
        latertrunkoffsetpadsizeHeighSelectoptions.text === "175mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunklComfyBroad_prices.SpexLaterTrunklComfyBroad_prices6 *
          latertrunkstandardpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      }
    }
    //endregion
  }
});
//endregion
//endregion

//region ---  Spex 側支撐配件 ---
//region ---計算側支撐連接套件總價 ---
function updateSpexLaterTrunkAccessoryTotalPrice() {
  let checkboxes = document.querySelectorAll(".SpexLaterTrunkSupportsAccessories");

  let basePrice =
    Number(latertrunkprices.textContent.replace(/[^0-9]/g, "")) +
    Number(latertrunkclothpadprices.textContent.replace(/[^0-9]/g, ""));

  let extra = 0;

   checkboxes.forEach((cb, index) => {
      if (cb.checked) {
        let price = allSpexLaterTrunkAccessoryPrices[index] || 0;
        extra += price;
      }
    });

  let total = basePrice + extra;
  nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(total)} 元`;
}
//endregion

//region --- Spex 側支撐連接套件/左背管 ---
SpexLaterTrunkConnectLeftCheckbox.addEventListener("change", function () {
  if (this.checked) {
    updateSpexLaterTrunkAccessoryTotalPrice();
  } else {
    let rawText = nowprice_SpexLaterTrunkSupports.textContent;
    let tempValue = Number(rawText.replace(/[^0-9.-]+/g, "")); // 清掉非數字的東西
    if (tempValue !== "0") {
      updateSpexLaterTrunkAccessoryTotalPrice();
    } else {
      nowprice_SpexLaterTrunkSupports.textContent = `0元`;
    }
  }
});
//endregion

//region --- Spex 側支撐連接套件/右背管 ---
SpexLaterTrunkConnectRightCheckbox.addEventListener("change", function () {
  if (this.checked) {
    updateSpexLaterTrunkAccessoryTotalPrice();
  } else {
    let rawText = nowprice_SpexLaterTrunkSupports.textContent;
    let tempValue = Number(rawText.replace(/[^0-9.-]+/g, "")); // 清掉非數字的東西
    if (tempValue !== "0") {
      updateSpexLaterTrunkAccessoryTotalPrice();
    } else {
      nowprice_SpexLaterTrunkSupports.textContent = `0元`;
    }
  }
});
//endregion

//region --- Spex 側支撐30mm延伸套件 ---
SpexLaterTrunkExtend30Checkbox.addEventListener("change", function () {
  if (this.checked) {
    updateSpexLaterTrunkAccessoryTotalPrice();
  } else {
    let rawText = nowprice_SpexLaterTrunkSupports.textContent;
    let tempValue = Number(rawText.replace(/[^0-9.-]+/g, "")); // 清掉非數字的東西
    if (tempValue !== "0") {
      updateSpexLaterTrunkAccessoryTotalPrice();
    } else {
      nowprice_SpexLaterTrunkSupports.textContent = `0元`;
    }
  }
});
//endregion

//region --- Spex 側支撐115mm延伸套件 ---
SpexLaterTrunkExtend115Checkbox.addEventListener("change", function () {
  if (this.checked) {
    updateSpexLaterTrunkAccessoryTotalPrice();
  } else {
    let rawText = nowprice_SpexLaterTrunkSupports.textContent;
    let tempValue = Number(rawText.replace(/[^0-9.-]+/g, "")); // 清掉非數字的東西
    if (tempValue !== "0") {
      updateSpexLaterTrunkAccessoryTotalPrice();
    } else {
      nowprice_SpexLaterTrunkSupports.textContent = `0元`;
    }
  }
});
//endregion

//region --- Spex 側支撐強化套件/補強片 ---
SpexLaterTrunkReinforceCheckbox.addEventListener("change", function () {
  if (this.checked) {
    updateSpexLaterTrunkAccessoryTotalPrice();
  } else {
    let rawText = nowprice_SpexLaterTrunkSupports.textContent;
    let tempValue = Number(rawText.replace(/[^0-9.-]+/g, "")); // 清掉非數字的東西
    if (tempValue !== "0") {
      updateSpexLaterTrunkAccessoryTotalPrice();
    } else {
      nowprice_SpexLaterTrunkSupports.textContent = `0元`;
    }
  }
});
//endregion
//endregion

//region --- Spex 雙曲面多軸可外撥側支撐扣具 ---
//region --- 監聽側支撐數量並給予價錢 ---
latertrunkaxialbiangularcountInput.addEventListener("input", () => {
  if (
    latertrunkaxialbiangularcountInput.value.trim() !== "" &&
    SpexLaterTrunkAxialBiangularCheckbox.checked
  ) {
    let latertrunkaxialbiangularcountquantity =
      parseInt(latertrunkaxialbiangularcountInput.value) || 0; // 轉成數字（預設為 0）

    nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
      SpexLaterTrunkAxialBiangular_prices.SpexLaterTrunkAxialBiangular_prices1 *
        latertrunkaxialbiangularcountquantity
    )} 元`;

    latertrunkprices.textContent =
      SpexLaterTrunkAxialBiangular_prices.SpexLaterTrunkAxialBiangular_prices1 *
      latertrunkaxialbiangularcountquantity;
  } else {
    nowprice_SpexLaterTrunkSupports.textContent = `0元`;
  }
});
//endregion

//region --- 監聽布套種類數量並給予價錢 ---
latertrunkaxialbiangularpadcountInput.addEventListener("input", () => {
  let latertrunkaxialbiangularSelectoptions =
    latertrunkaxialbiangular.options[latertrunkaxialbiangular.selectedIndex];
  let latertrunk_axialpadtypeSelectoptions =
    latertrunk_axialpadtype.options[latertrunk_axialpadtype.selectedIndex];
  let latertrunkaxialbiangularWidthSelectoptions =
    latertrunk_axialbiangular_Width.options[
      latertrunk_axialbiangular_Width.selectedIndex
    ];
  let latertrunkaxialbiangularHeighSelectoptions =
    latertrunk_axialbiangular_Heigh.options[
      latertrunk_axialbiangular_Heigh.selectedIndex
    ];
  let latertrunkaxialbiangularpadcountquantity =
    parseInt(latertrunkaxialbiangularpadcountInput.value) || 0; // 轉成數字（預設為 0）

  if (SpexLaterTrunkAxialBiangularCheckbox.checked) {
    //region --- 12mm厚度STANDARD擋墊價錢 ---
    if (
      latertrunkaxialbiangularSelectoptions.text === "12mm" &&
      latertrunk_axialpadtypeSelectoptions.text === "STANDARD" &&
      latertrunkaxialbiangularpadcountInput.value.trim() !== ""
    ) {
      if (
        latertrunkaxialbiangularWidthSelectoptions.text === "165mm" &&
        latertrunkaxialbiangularHeighSelectoptions.text === "175mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunkAxialBiangular12Standard_prices.SpexLaterTrunkAxialBiangular12Standard_prices1 *
          latertrunkaxialbiangularpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkaxialbiangularWidthSelectoptions.text === "215mm" &&
        latertrunkaxialbiangularHeighSelectoptions.text === "195mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunkAxialBiangular12Standard_prices.SpexLaterTrunkAxialBiangular12Standard_prices2 *
          latertrunkaxialbiangularpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkaxialbiangularWidthSelectoptions.text === "265mm" &&
        latertrunkaxialbiangularHeighSelectoptions.text === "195mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunkAxialBiangular12Standard_prices.SpexLaterTrunkAxialBiangular12Standard_prices3 *
          latertrunkaxialbiangularpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      }
    }
    //endregion

    //region --- 雙曲面側支撐24mm厚度STANDARD擋墊價錢 ---
    else if (
      latertrunkaxialbiangularSelectoptions.text === "24mm" &&
      latertrunk_axialpadtypeSelectoptions.text === "STANDARD" &&
      latertrunkaxialbiangularpadcountInput.value.trim() !== ""
    ) {
      if (
        latertrunkaxialbiangularWidthSelectoptions.text === "165mm" &&
        latertrunkaxialbiangularHeighSelectoptions.text === "175mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunkAxialBiangular24Standard_prices.SpexLaterTrunkAxialBiangular24Standard_prices1 *
          latertrunkaxialbiangularpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkaxialbiangularWidthSelectoptions.text === "215mm" &&
        latertrunkaxialbiangularHeighSelectoptions.text === "195mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunkAxialBiangular24Standard_prices.SpexLaterTrunkAxialBiangular24Standard_prices2 *
          latertrunkaxialbiangularpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkaxialbiangularWidthSelectoptions.text === "265mm" &&
        latertrunkaxialbiangularHeighSelectoptions.text === "195mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunkAxialBiangular24Standard_prices.SpexLaterTrunkAxialBiangular24Standard_prices3 *
          latertrunkaxialbiangularpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      }
    }
    //endregion

    //region --- 雙曲面側支撐12mm厚度COMFY擋墊價錢 ---
    else if (
      latertrunkaxialbiangularSelectoptions.text === "12mm" &&
      latertrunk_axialpadtypeSelectoptions.text === "COMFY" &&
      latertrunkaxialbiangularpadcountInput.value.trim() !== ""
    ) {
      if (
        latertrunkaxialbiangularWidthSelectoptions.text === "165mm" &&
        latertrunkaxialbiangularHeighSelectoptions.text === "175mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunkAxialBiangular12Comfy_prices.SpexLaterTrunkAxialBiangular12Comfy_prices1 *
          latertrunkaxialbiangularpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkaxialbiangularWidthSelectoptions.text === "215mm" &&
        latertrunkaxialbiangularHeighSelectoptions.text === "195mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunkAxialBiangular12Comfy_prices.SpexLaterTrunkAxialBiangular12Comfy_prices2 *
          latertrunkaxialbiangularpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkaxialbiangularWidthSelectoptions.text === "265mm" &&
        latertrunkaxialbiangularHeighSelectoptions.text === "195mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunkAxialBiangular12Comfy_prices.SpexLaterTrunkAxialBiangular12Comfy_prices3 *
          latertrunkaxialbiangularpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      }
    }
    //endregion

    //region --- 雙曲面側支撐24mm厚度COMFY擋墊價錢 ---
    else if (
      latertrunkaxialbiangularSelectoptions.text === "24mm" &&
      latertrunk_axialpadtypeSelectoptions.text === "COMFY" &&
      latertrunkaxialbiangularpadcountInput.value.trim() !== ""
    ) {
      if (
        latertrunkaxialbiangularWidthSelectoptions.text === "165mm" &&
        latertrunkaxialbiangularHeighSelectoptions.text === "175mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunkAxialBiangular24Comfy_prices.SpexLaterTrunkAxialBiangular24Comfy_prices1 *
          latertrunkaxialbiangularpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkaxialbiangularWidthSelectoptions.text === "215mm" &&
        latertrunkaxialbiangularHeighSelectoptions.text === "195mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunkAxialBiangular24Comfy_prices.SpexLaterTrunkAxialBiangular24Comfy_prices2 *
          latertrunkaxialbiangularpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      } else if (
        latertrunkaxialbiangularWidthSelectoptions.text === "265mm" &&
        latertrunkaxialbiangularHeighSelectoptions.text === "195mm"
      ) {
        latertrunkclothpadprices.textContent =
          SpexLaterTrunkAxialBiangular24Comfy_prices.SpexLaterTrunkAxialBiangular24Comfy_prices3 *
          latertrunkaxialbiangularpadcountquantity;

        nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
          Number(latertrunkprices.textContent) +
            Number(latertrunkclothpadprices.textContent)
        )} 元`;
      }
    }
    //endregion
  }
});
//endregion

//region --- 監聽墊寬，每次重新選擇墊寬寬度時，把價錢重製 ---
let latertrunkaxialbiangularWidth = document.querySelector(
  ".latertrunk_axialbiangular_Width"
);
latertrunkaxialbiangularWidth.addEventListener("change", () => {
  latertrunkclothpadprices.textContent = `0元`;
  nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(
    Number(latertrunkprices.textContent)
  )} 元`;
});
//endregion

//region --- 側支撐及配件互不干涉 ---
let SpexLaterTrunkSupportscheckboxes = document.querySelectorAll(
  ".SpexLaterTrunkSupports"
);
let SpexLaterTrunkSupportsAccessoriescheckboxes = document.querySelectorAll(
  ".SpexLaterTrunkSupportsAccessories"
);

//region ---計算側支撐總價 ---
function updateSpexLaterTrunkTotalPrice() {
  let basePrice =
    Number(latertrunkprices.textContent.replace(/[^0-9]/g, "")) +
    Number(latertrunkclothpadprices.textContent.replace(/[^0-9]/g, ""));

  let extra = 0;

  document
    .querySelectorAll(".SpexLaterTrunkSupports:checked")
    .forEach((cb, index) => {
      if (cb.checked) {
        let price = allSpexLaterTrunkAccessoryPrices[index] || 0;
        extra += price;
      }
    });

  let total = basePrice + extra;
  nowprice_SpexLaterTrunkSupports.textContent = `${formatPrice(total)} 元`;
}
//endregion

SpexLaterTrunkSupportscheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    let anyLaterTrunkSupportsChecked = Array.from(
      SpexLaterTrunkSupportscheckboxes
    ).some((cb) => cb.checked);
    let anyAccessoriesChecked = Array.from(
      SpexLaterTrunkSupportsAccessoriescheckboxes
    ).some((cb) => cb.checked);

    if (!anyLaterTrunkSupportsChecked) {
      if (anyAccessoriesChecked) {
        latertrunkprices.textContent = '0';
        latertrunkclothpadprices.textContent = '0';
        updateSpexLaterTrunkAccessoryTotalPrice();
      } else {
        nowprice_SpexLaterTrunkSupports.textContent = `0元`;
      }
    }
  });
});

//endregion
