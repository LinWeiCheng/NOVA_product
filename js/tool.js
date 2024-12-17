/*----- 1.車體顏色點擊列  -----*/
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

let productImage = document.getElementById("ProductImage");

let Price = document.querySelectorAll(".pricing");

Price.forEach(function (openIntro) {
  Car_color_checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      if (event.target.checked) {
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

let Car_footpedal_twopiece_class_checkboxes = document.querySelectorAll(
  'input[type="checkbox"][class="footpedal_twopiecechk"]'
);

let Car_footpedal_onepiece_aluminumpedal_class_checkboxes =
  document.querySelectorAll(
    'input[type="checkbox"][class="footpedal_onepiece_aluminumpedalchk"]'
  );

let Car_footpedal_Plugin_class_checkboxes = document.querySelectorAll(
  'input[type="checkbox"][class="footpedal_Pluginchk"]'
);

let Car_footpedal_vertical_class_checkboxes = document.querySelectorAll(
  'input[type="checkbox"][class="footpedal_verticalchk"]'
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
      if (event.target.classList.contains("footpedal_twopiecechk")) {
        // 如果選中了當前checkbox，就取消其他checkbox的選中狀態
        if (event.target.checked) {
          Car_footpedal_twopiece_class_checkboxes.forEach((otherCheckbox) => {
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
      }
    });
  });

  //一片式鋁踏板勾選
  Car_footpedal_onepiece_aluminumpedal_class_checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      if (
        event.target.classList.contains("footpedal_onepiece_aluminumpedalchk")
      ) {
        // 如果選中了當前checkbox，就取消其他checkbox的選中狀態
        if (event.target.checked) {
          Car_footpedal_onepiece_aluminumpedal_class_checkboxes.forEach(
            (otherCheckbox) => {
              if (otherCheckbox !== event.target) {
                otherCheckbox.checked = false;
              }

              let previousElement = event.target.previousElementSibling; // 找到上一個節點

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
          nowprice_footpedal.textContent = "";
        }
      }
    });
  });

  //外掛式腳踏組勾選
  Car_footpedal_Plugin_class_checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      if (event.target.classList.contains("footpedal_Pluginchk")) {
        // 如果選中了當前checkbox，就取消其他checkbox的選中狀態
        if (event.target.checked) {
          Car_footpedal_Plugin_class_checkboxes.forEach((otherCheckbox) => {
            if (otherCheckbox !== event.target) {
              otherCheckbox.checked = false;
            }

            let previousElement = event.target.previousElementSibling; // 找到上一個節點
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
          });
        }
        if (!event.target.checked) {
          //兩片式塑踏板
          addfootpedal_twopiece(footpedal_twopieceDiv);
          //一片式鋁踏板
          addfootpedal_piecealuminum(footpedal_piecealuminumDiv);
          //垂直調整腳踏組
          addfootpedal_plumb(footpedal_plumbDiv);
          nowprice_footpedal.textContent = "";
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
      if (event.target.classList.contains("footpedal_verticalchk")) {
        // 如果選中了當前checkbox，就取消其他checkbox的選中狀態
        if (event.target.checked) {
          Car_footpedal_vertical_class_checkboxes.forEach((otherCheckbox) => {
            if (otherCheckbox !== event.target) {
              otherCheckbox.checked = false;
            }

            let previousElement = event.target.previousElementSibling; // 找到上一個節點

            if (event.target.id === "checkbox_vertical9_left") {
              nowprice_footpedal.textContent = "1,500元";
              footpedal_vertical9_Right.checked = event.target.checked;
            } else if (event.target.id === "checkbox_vertical9_right") {
              nowprice_footpedal.textContent = "1,500元";
              footpedal_vertical9_Left.checked = event.target.checked;
            } else if (event.target.id === "checkbox_vertical11_left") {
              nowprice_footpedal.textContent = "1,500元";
              footpedal_vertical11_Right.checked = event.target.checked;
            } else if (event.target.id === "checkbox_vertical11_right") {
              nowprice_footpedal.textContent = "1,500元";
              footpedal_vertical11_Left.checked = event.target.checked;
            } else if (event.target.id === "checkbox_vertical14_left") {
              nowprice_footpedal.textContent = "1,550元";
              footpedal_vertical14_Right.checked = event.target.checked;
            } else if (event.target.id === "checkbox_vertical14_right") {
              nowprice_footpedal.textContent = "1,550元";
              footpedal_vertical14_Left.checked = event.target.checked;
            }
            footpedal_twopieceDiv.style.display = "none";
            footpedal_twopieceDiv.style.height = "auto"; // 縮小黑邊
            footpedal_piecealuminumDiv.style.display = "none";
            footpedal_piecealuminumDiv.style.height = "auto"; // 縮小黑邊
            footpedal_footpedal_PluginDiv.style.display = "none";
            footpedal_footpedal_PluginDiv.style.height = "auto"; // 縮小黑邊
          });
        }
        if (!event.target.checked) {
          //兩片式塑踏板
          addfootpedal_twopiece(footpedal_twopieceDiv);
          //一片式鋁踏板
          addfootpedal_piecealuminum(footpedal_piecealuminumDiv);
          //外掛式腳踏組
          addfootpedal_footpedal_Plugin(footpedal_footpedal_PluginDiv);
          nowprice_footpedal.textContent = "";
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

/*----- 頭靠點擊列  -----*/
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
          nowprice_carheadsupports.textContent = "4,500元";
        }
      }
      if (!event.target.checked) {
        nowprice_carheadsupports.textContent = "";
      }
    });
  });
});

/*----- 軀幹點擊列  -----*/
let Car_side_supports_checkboxes = document.querySelectorAll(
  'input[type="checkbox"][name="car_back_supports"]'
);

Price.forEach(function (openIntro) {
  let nowprice_backsupports = Price[5].nextElementSibling;

  Car_side_supports_checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      // 如果選中了當前checkbox，就取消其他checkbox的選中狀態
      if (event.target.checked) {
        Car_side_supports_checkboxes.forEach((otherCheckbox) => {
          if (otherCheckbox !== event.target) {
            otherCheckbox.checked = false;
          }
        });
        if (event.target.id === "checkbox_backsupports30_Nova") {
          nowprice_backsupports.textContent = "3,500元";
        }else if(event.target.id === "checkbox_backsupports32_Nova") {
          nowprice_backsupports.textContent = "3,500元";
        }else if(event.target.id === "checkbox_backsupports34_Nova") {
          nowprice_backsupports.textContent = "3,500元";
        }else if(event.target.id === "checkbox_backsupports36_Nova") {
          nowprice_backsupports.textContent = "3,500元";
        }else if(event.target.id === "checkbox_backsupports38_Nova") {
          nowprice_backsupports.textContent = "3,500元";
        }else if(event.target.id === "checkbox_backsupports40_Nova") {
          nowprice_backsupports.textContent = "3,500元";
        }else if(event.target.id === "checkbox_backsupports42_Nova") {
          nowprice_backsupports.textContent = "3,500元";
        }else if
        (event.target.id === "checkbox_backsupportsHardware_Nova") {
          nowprice_backsupports.textContent = "3,400元";
        }
      }
      if (!event.target.checked) {
        nowprice_backsupports.textContent = "";
      }
    });
  });
});