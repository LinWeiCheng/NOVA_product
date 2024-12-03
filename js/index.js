let left = document.querySelector(".leftcontent");
left.addEventListener("click", function (event) {
  let showinfo = event.target.dataset.showinfo;
  let introdution = event.target;

  if (showinfo === "carcolor") {
    let introdutionid = event.target.nextElementSibling;
    let Price_carcolor = document.querySelectorAll(".pricing");

    Price_carcolor.forEach(function (openIntro) {
      let nowprice_color = Price_carcolor[0].nextElementSibling;

      if (openIntro.getAttribute("data-price-carcolor") === "carcolor") {
        if (introdution.getAttribute("data-collapse-status") === "0") {
          //把data-collapse-status改成1
          introdution.setAttribute("data-collapse-status", "1");

          introdutionid.style.visibility = "visible";
          introdutionid.style.padding = "1px 1px 1px 6px";
          introdutionid.style.width = "calc(100% - 10px)";
          introdutionid.style.flexWrap = "wrap";
          introdutionid.style.border = "3px dashed black";
          introdutionid.style.borderTop = "none";
          introdutionid.style.display = "flex";
          introdutionid.style.margin = "3px 5px 5px 5px";
          introdutionid.style.height = "auto";

          //建議售價標題顯示
          openIntro.style.display = "block";

          //建議售價金額顯示
          nowprice_color.style.display = "block";
          nowprice_color.style.display = "flex";
          nowprice_color.style.width = "100%";
          nowprice_color.style.height = "90%";
          nowprice_color.style.backgroundColor = "#ffffffff";
          nowprice_color.style.color = "#000000";
          nowprice_color.style.borderRadius = "8px";
          nowprice_color.style.padding = "1px";
          nowprice_color.style.margin = "3px 3px 3px 4px";
          nowprice_color.style.textAlign = "center";
          nowprice_color.style.fontSize = "20px";
          nowprice_color.style.fontWeight = "500";
          nowprice_color.style.alignItems = "center";
          nowprice_color.style.justifyContent = "center";
          nowprice_color.style.border = "1px solid black";
        } else {
          //把data-collapse-status改成0
          introdution.setAttribute("data-collapse-status", "0");

          //建議售價標題隱藏
          introdutionid.style.visibility = "hidden";
          introdutionid.style.height = "0";
          
          //建議售價金額隱藏
          openIntro.style.display = "none";
          nowprice_color.style.display = "none";
        }
      }
    });
  }
});

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
