let left = document.querySelector(".leftcontent");
//車體顏色點擊列
left.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let showinfo = event.target.dataset.showinfo;
  let introdution = event.target;
  //確認我點擊到的位置是否是carcolor
  if (showinfo === "carcolor") {
    let introdutionid = event.target.nextElementSibling;
    let Price_carcolor = document.querySelectorAll(".pricing");
    Price_carcolor.forEach(function (openIntro) {
      let nowprice_color = Price_carcolor[0].nextElementSibling;
      if (openIntro.getAttribute("data-price-carcolor") === "carcolor" &&
          nowprice_color.getAttribute("data-nowprice-carcolor") === "nowcarcolor") {
        if (introdution.getAttribute("data-collapse-status") === "0") {
          //把data-collapse-status改成1
          introdution.setAttribute("data-collapse-status", "1");

          //carcolor勾選位置大小設置
          introdutionid.style.visibility = "visible";
          introdutionid.style.padding = "1px 1px 1px 20px";
          introdutionid.style.width = "calc(100% - 10px)";
          introdutionid.style.flexWrap = "wrap";
          introdutionid.style.border = "3px dashed black";
          introdutionid.style.borderTop = "none";
          introdutionid.style.display = "flex";
          introdutionid.style.margin = "3px 0px 5px 8px";
          introdutionid.style.height = "auto";

          //建議售價標題顯示
          // openIntro.style.display = "block";
          
          // //建議售價金額顯示
          // nowprice_color.style.display = "block";
          // nowprice_color.style.display = "flex";
          // nowprice_color.style.width = "100%";
          // nowprice_color.style.height = "90%";
          // nowprice_color.style.color = "#000000";
          // nowprice_color.style.borderRadius = "8px";
          // nowprice_color.style.padding = "1px";
          // nowprice_color.style.margin = "3px 3px 3px 4px";
          // nowprice_color.style.textAlign = "center";
          // nowprice_color.style.fontSize = "21px";
          // nowprice_color.style.fontWeight = "600";
          // nowprice_color.style.alignItems = "center";
          // nowprice_color.style.justifyContent = "center";
          //nowprice_color.style.border = "2px solid black";
        } else {
          //把data-collapse-status改成0
          introdution.setAttribute("data-collapse-status", "0");

          // //建議售價標題隱藏
          // introdutionid.style.visibility = "hidden";
          // introdutionid.style.height = "0";
          
          // //建議售價金額隱藏
          // openIntro.style.display = "none";
          // nowprice_color.style.display = "none";
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
  divSW_Check.name = `car_basesize`;
  divSW_Check.classList.add(`SWC_checkbox`);
  SWCCount += 2;

  SWC_container.appendChild(divSW_Check);
}
left.addEventListener("click", function (event) {
  //showinfo為我設定的data名稱
  let showinfo = event.target.dataset.showinfo;
  let introdution = event.target;
  //確認我點擊到的位置是否是carbasesize
  if (showinfo === "carbasesize") {
    let introdutionid = event.target.nextElementSibling;
    let Price_carbasesize = document.querySelectorAll(".pricing");


    Price_carbasesize.forEach(function (openIntro) {
      //直接判斷是第幾個.Price
      let nowprice_basesize = Price_carbasesize[1].nextElementSibling;
         
      if (openIntro.getAttribute("data-price-carbasesize") === "carbasesize" &&
          nowprice_basesize.getAttribute("data-nowprice-carbasesize") === "nowcarbasesize") {
        if (introdution.getAttribute("data-collapse-status") === "0") {
          //把data-collapse-status改成1
          introdution.setAttribute("data-collapse-status", "1");

          //carbasesize勾選位置大小設置
          introdutionid.style.visibility = "visible";
          introdutionid.style.padding = "1px 1px 1px 6px";
          introdutionid.style.width = "calc(100% - 8px)";
          introdutionid.style.flexWrap = "wrap";
          introdutionid.style.border = "3px dashed black";
          introdutionid.style.borderTop = "none";
          introdutionid.style.display = "flex";
          introdutionid.style.margin = "3px 5px 5px 7px";
          introdutionid.style.height = "auto";

          //建議售價標題顯示
          openIntro.style.display = "block";
          
          //建議售價金額顯示
          nowprice_basesize.style.display = "block";
          nowprice_basesize.style.display = "flex";
          nowprice_basesize.style.width = "100%";
          nowprice_basesize.style.height = "90%";
          nowprice_basesize.style.color = "#000000";
          nowprice_basesize.style.borderRadius = "8px";
          nowprice_basesize.style.padding = "1px";
          nowprice_basesize.style.margin = "3px 3px 3px 4px";
          nowprice_basesize.style.textAlign = "center";
          nowprice_basesize.style.fontSize = "21px";
          nowprice_basesize.style.fontWeight = "600";
          nowprice_basesize.style.alignItems = "center";
          nowprice_basesize.style.justifyContent = "center";
          //nowprice_basesize.style.border = "2px solid black";
        } else {
          //把data-collapse-status改成0
          introdution.setAttribute("data-collapse-status", "0");

          //建議售價標題隱藏
          introdutionid.style.visibility = "hidden";
          introdutionid.style.height = "0";
          
          //建議售價金額隱藏
          openIntro.style.display = "none";
          nowprice_basesize.style.display = "none";
        }
      }
    });
  }
});

