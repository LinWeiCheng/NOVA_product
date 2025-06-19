document.addEventListener("DOMContentLoaded", () => {
  let showoutputQuotationBtn = document.getElementById("outputQuotation");
  let closeoutputQuotationBtn = document.getElementById(
    "closeoutputQuotationBtn"
  );
  let totalPricedisplay = document.getElementById("TotalPrice");
  let container = document.getElementById("myContainer");
  let QuotationDiv = document.getElementById("Quotation");
  let printButton = document.getElementById("printButton");
  //let printPDFButton = document.getElementById("printPDFButton");

  // 全局數據存儲
  let selectedItems = [];
  let novaLaterTrunksup = [];
  let basesize = [];
  let spexCushion = [];
  let spexSeatBase = [];
  let spexMedialThigh = [];
  let spexArmSupLatThigh = [];
  let spexArmSup = [];
  let spexLatThigh = [];
  let spexBackSupports = [];
  let spexHardware = [];
  let spexLaterTrunk = [];
  let spexHeadSupports = [];
  let spexHeadSupportsBracket = [];
  let spexHipBelts = [];
  let spexShoulderHarnesses = [];
  let spexShoulderStrapGuides = [];
  let spexupperlowerlimbstabilisers = [];

  let upperlowerlimbstabilisers = 1;

  //防呆，確認每個勾選的內容都是完整的
  function checkcheckboxselectionscorrect() {
    //region --- Spex Cushion ---
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
    let CushionwidthSelect = document.querySelector(".Spexcushion_Width");
    let CushionheightSelect = document.querySelector(".Spexcushion_Heigh");

    if (
      VigourStdCheckbox.checked ||
      VigourHighCheckbox.checked ||
      SpexStandardCheckbox.checked ||
      SpexHighCheckbox.checked ||
      Spex_SuperHighCheckbox.checked ||
      Spex_FlexCheckbox.checked ||
      Spex_Flex_HighCheckbox.checked ||
      Spex_Flex_SuperHighCheckbox.checked
    ) {
      if (CushionwidthSelect.value === "option1") {
        Swal.fire({
          icon: "warning",
          title: "提醒您",
          text: "Spex座墊的寬度及長度尚未選擇",
          confirmButtonText: "OK",
        });
        return true;
      } else if (CushionheightSelect.value === "optionA") {
        Swal.fire({
          icon: "warning",
          title: "提醒您",
          text: "Spex座墊的長度未做選擇",
          confirmButtonText: "OK",
        });
        return true;
      }
    }
    //endregion

    //region --- Spex SeatBase
    let SeatBaseFixedCheckbox = document.querySelector("#Spex_SeatBase_fixed");
    let SeatBaseQuickCheckbox = document.querySelector("#Spex_SeatBase_quick");
    let SeatbasewidthSelect = document.querySelector(".Spexseatbase_Width");
    let SeatbaseheightSelect = document.querySelector(".Spexseatbase_Heigh");

    if (SeatBaseFixedCheckbox.checked || SeatBaseQuickCheckbox.checked) {
      if (SeatbasewidthSelect.value === "option1") {
        Swal.fire({
          icon: "warning",
          title: "提醒您",
          text: "Spex硬座板的車寬及板長未做選擇",
          confirmButtonText: "OK",
        });
        return true;
      }
      if (SeatbaseheightSelect.value === "optionA") {
        Swal.fire({
          icon: "warning",
          title: "提醒您",
          text: "Spex硬座板的板長尚未選擇",
          confirmButtonText: "OK",
        });
        return true;
      }
    }
    //endregion

    //region --- Spex MedialThigh ---
    let MedialThigh_Standardcheckbox = document.getElementById(
      "Spex_MedialThigh_Standard"
    );
    let MedialThigh_Multiaxialcheckbox = document.getElementById(
      "Spex_MedialThigh_Multiaxial"
    );
    let SpexmedialthighSel = document.querySelector(".Spexmedialthigh_sel");

    if (
      MedialThigh_Standardcheckbox.checked ||
      MedialThigh_Multiaxialcheckbox.checked
    ) {
      if (SpexmedialthighSel.value === "option1") {
        Swal.fire({
          icon: "warning",
          title: "提醒您",
          text: "Spex分腿器的尺寸尚未選擇",
          confirmButtonText: "OK",
        });
        return true;
      }
    }
    //endregion

    //region --- Spex ArmSuppports LateralThighSupports ---
    let ArmSupportscheckbox = document.getElementById("Spex_ArmSupports");
    let LateralThighSupportscheckbox = document.getElementById(
      "Spex_LateralThighSupports"
    );
    let ArmSup_LatThighcheckbox = document.getElementById(
      "Spex_ArmSup_LatThigh"
    );
    let buckle = document.querySelector(".Spexarmsuplatthigh_bucklesel");
    let armsup = document.querySelector(".Spexarmsuplatthigh_armsupsel");
    let latthigh = document.querySelector(".Spexarmsuplatthigh_latthighsel");
    let armpad = document.querySelector(".Spexarmsuplatthigh_armpadsel");
    let lateralpad = document.querySelector(
      ".Spexarmsuplatthigh_lateralpadsel"
    );
    let armpadcount = document.getElementById("armpadcount");
    let armpadvalue = armpadcount.value.trim();
    let lateralpadcount = document.getElementById("lateralpadcount");
    let lateralpadvalue = lateralpadcount.value.trim();

    // region --- 扶手支撐 ---
    if (ArmSupportscheckbox.checked) {
      if (buckle.value === "option1") {
        Swal.fire({
          icon: "warning",
          title: "提醒您",
          text: "Spex扶手腿撐的扣具、扶手角度、扶手支撐襯墊尺寸及數量尚未選擇",
          confirmButtonText: "OK",
        });
        return true;
      } else if (armsup.value === "option1") {
        Swal.fire({
          icon: "warning",
          title: "提醒您",
          text: "Spex扶手腿撐的扶手角度尚未選擇",
          confirmButtonText: "OK",
        });
        return true;
      } else if (armpad.value === "option1") {
        Swal.fire({
          icon: "warning",
          title: "提醒您",
          text: "Spex扶手腿撐的扶手支撐襯墊尺寸尚未選擇",
          confirmButtonText: "OK",
        });
        return true;
      } else if (armpadvalue === "" || !/^[1-9]\d*$/.test(armpadvalue)) {
        Swal.fire({
          icon: "warning",
          title: "提醒您",
          text: "Spex扶手腿撐的扶手支撐襯墊數量請輸入數字",
          confirmButtonText: "OK",
        });
        return true;
      }
    }
    //endregion

    //region --- 臀側支撐 ---
    if (LateralThighSupportscheckbox.checked) {
      if (buckle.value === "option1") {
        Swal.fire({
          icon: "warning",
          title: "提醒您",
          text: "Spex扶手臀撐的扣具、腿墊調整、臀側支撐襯墊尺寸及數量尚未選擇",
          confirmButtonText: "OK",
        });
        return true;
      } else if (latthigh.value === "option1") {
        Swal.fire({
          icon: "warning",
          title: "提醒您",
          text: "Spex扶手臀撐的腿墊調整",
          confirmButtonText: "OK",
        });
        return true;
      } else if (lateralpad.value === "option1") {
        Swal.fire({
          icon: "warning",
          title: "提醒您",
          text: "Spex扶手臀撐的臀側支撐襯墊尺寸尚未選擇",
          confirmButtonText: "OK",
        });
        return true;
      } else if (
        lateralpadvalue === "" ||
        !/^[1-9]\d*$/.test(lateralpadvalue)
      ) {
        Swal.fire({
          icon: "warning",
          title: "提醒您",
          text: "Spex扶手腿撐的扶手支撐襯墊數量請輸入數字",
          confirmButtonText: "OK",
        });
        return true;
      }
    }
    //endregion

    //region --- 扶手臀撐 ---
    if (ArmSup_LatThighcheckbox.checked) {
      if (buckle.value === "option1") {
        Swal.fire({
          icon: "warning",
          title: "提醒您",
          text: "Spex扶手臀撐的扣具、扶手角度、腿墊調整、扶手支撐襯墊尺寸、臀側支撐襯墊尺寸及各自數量尚未選擇",
          confirmButtonText: "OK",
        });
        return true;
      } else if (armsup.value === "option1") {
        Swal.fire({
          icon: "warning",
          title: "提醒您",
          text: "Spex扶手腿撐的扶手角度尚未選擇",
          confirmButtonText: "OK",
        });
        return true;
      } else if (latthigh.value === "option1") {
        Swal.fire({
          icon: "warning",
          title: "提醒您",
          text: "Spex扶手臀撐的腿墊調整",
          confirmButtonText: "OK",
        });
        return true;
      } else if (armpad.value === "option1") {
        Swal.fire({
          icon: "warning",
          title: "提醒您",
          text: "Spex扶手腿撐的扶手支撐襯墊尺寸尚未選擇",
          confirmButtonText: "OK",
        });
        return true;
      } else if (lateralpad.value === "option1") {
        Swal.fire({
          icon: "warning",
          title: "提醒您",
          text: "Spex扶手臀撐的臀側支撐襯墊尺寸尚未選擇",
          confirmButtonText: "OK",
        });
        return true;
      } else if (armpadvalue === "" || !/^[1-9]\d*$/.test(armpadvalue)) {
        Swal.fire({
          icon: "warning",
          title: "提醒您",
          text: "Spex扶手腿撐的扶手支撐襯墊數量請輸入數字",
          confirmButtonText: "OK",
        });
        return true;
      } else if (
        lateralpadvalue === "" ||
        !/^[1-9]\d*$/.test(lateralpadvalue)
      ) {
        Swal.fire({
          icon: "warning",
          title: "提醒您",
          text: "Spex扶手腿撐的臀側支撐襯墊數量請輸入數字",
          confirmButtonText: "OK",
        });
        return true;
      }
    }
    //endregion

    //endregion
    return false;
  }

  // 顯示大 Div
  showoutputQuotationBtn.addEventListener("click", () => {
    if (checkcheckboxselectionscorrect()) {
      return;
    }
    updatecarbasesize(); // 更新項目內容
    QuotationDiv.classList.add("visible"); // 顯示大 Div
    updateTable(); // 顯示表格內容
    document.body.style.overflow = "hidden"; // 禁止背景滾動
    container.style.display = "none";
    document.body.style.backgroundColor = "#ffd76b";
    if (window.matchMedia("(min-width: 650px)").matches) {
      printButton.style.visibility = "visible";
    }

    totalPricedisplay.style.visibility = "hidden";
    //printPDFButton.style.visibility = "visible";

    // 創建浮水印圖片
    let watermark = document.createElement("img");
    watermark.src = "./img/New-Logo.png";
    // watermark.crossOrigin = "anonymous";
    watermark.alt = "Watermark Logo";
    watermark.classList.add("watermark"); // 加入 class 方便用 CSS 控制

    // 添加到 QuotationDiv
    QuotationDiv.appendChild(watermark);
  });

  // 隱藏大 Div
  closeoutputQuotationBtn.addEventListener("click", () => {
    clearcarbasesize();
    document.body.style.overflow = ""; // 恢復背景滾動
    QuotationDiv.classList.remove("visible"); // 隱藏大 Div
    container.style.display = "";
    printButton.style.visibility = "hidden";
    totalPricedisplay.style.visibility = "visible";
  });

  if (QuotationDiv) {
    QuotationDiv.addEventListener("wheel", (e) => {
      e.stopPropagation();
    });
  } else {
    console.error("QuotationDiv 元素未找到");
  }

  //清空資料
  function clearcarbasesize() {
    selectedItems.length = 0;
    novaLaterTrunksup = 0;
    basesize.length = 0;
    spexCushion.length = 0;
    spexSeatBase.length = 0;
    spexMedialThigh.length = 0;
    spexArmSupLatThigh.length = 0;
    spexArmSup.length = 0;
    spexLatThigh.length = 0;
    spexBackSupports.length = 0;
    spexHardware.length = 0;
    spexLaterTrunk.length = 0;
    spexHeadSupports.length = 0;
    spexHeadSupportsBracket.length = 0;
    spexHipBelts.length = 0;
    spexShoulderHarnesses.length = 0;
    spexShoulderStrapGuides.length = 0;
    spexupperlowerlimbstabilisers.length = 0;
  }

  // 更新大 Div 的內容
  function updatecarbasesize() {
    let prices = "";
    // 選擇所有被勾選的 checkbox
    let checkedCheckboxes = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    // 先存放已加入的 items，避免重複
    let addedItems = new Set();
    // 先存側支撐擋墊已加入的 items，避免重複
    let addlatertrunkpad = new Set();

    // 遍歷這些勾選的 checkbox 並處理
    checkedCheckboxes.forEach((checkbox) => {
      let group = checkbox.dataset.group;
      let item = checkbox.dataset.item;

      if (group) {
        basesize.push(item);
        if (checkbox.dataset.price) {
          prices = checkbox.dataset.price; // 如果有 price，更新其值
        }
      }
    });
    let items = basesize.join("");

    if (items) {
      selectedItems.push({ item: items, price: prices, note: "" });
    }

    checkedCheckboxes.forEach((checkbox) => {
      let group = checkbox.dataset.group;
      let novagroup = checkbox.dataset.novagroup;
      let spexgroup = checkbox.dataset.spexgroup;
      let item = checkbox.dataset.item;
      let price = checkbox.dataset.price;
      let notes = checkbox.dataset.note;
      // 如果這個 item 已經存過了，就跳過
      if (addedItems.has(item)) {
        return;
      }
      if (!group && !spexgroup && !novagroup) {
        selectedItems.push({ item: item, price: price, note: notes });
      }

      // 記錄這個 item 已經被加入
      addedItems.add(item);
    });

    checkedCheckboxes.forEach((checkbox) => {
      let spexgroup = checkbox.dataset.spexgroup;
      let novagroup = checkbox.dataset.novagroup;
      let novachoose = checkbox.dataset.novachoose;
      let spexchoose = checkbox.dataset.spexchoose;
      let item = checkbox.dataset.item;
      let notes = checkbox.dataset.note;

      if (novagroup === "Novalatertrunksupport") {
        novaLaterTrunksup = [];
        if (item) {
          novaLaterTrunksup.push(item);
        }
        let lattrusupSL = document.getElementById(
          "checkbox_latertrunksupportSL_Nova"
        );

        let lattrusupSR = document.getElementById(
          "checkbox_latertrunksupportSR_Nova"
        );

        let lattrusupML = document.getElementById(
          "checkbox_latertrunksupportML_Nova"
        );
        let lattrusupMR = document.getElementById(
          "checkbox_latertrunksupportMR_Nova"
        );
        let NovalatSLR1count = document.getElementById(
          "NovalateralhardwarecountLRs1"
        );
        let NovalatSLR2count = document.getElementById(
          "NovalateralhardwarecountLRs2"
        );
        let NovalatMLR1count = document.getElementById(
          "NovalateralhardwarecountMLRs1"
        );
        let NovalatMLR2count = document.getElementById(
          "NovalateralhardwarecountMLRs2"
        );

        let NovaltksupSLprices = document.querySelector(
          ".ltksupSL_Novacouprices"
        );
        let NovaltksupSRprices = document.querySelector(
          ".ltksupSR_Novacouprices"
        );
        let NovaltksupMLprices = document.querySelector(
          ".ltksupML_Novacouprices"
        );
        let NovaltksupMRprices = document.querySelector(
          ".ltksupMR_Novacouprices"
        );
        if (lattrusupSL.checked && novachoose === "NovalatertrunksupportSL") {
          // 組合字串：x 數量
          let spexString = ` * ${NovalatSLR1count.value}`;
          novaLaterTrunksup.push(spexString);
          let spexitem = novaLaterTrunksup.join("");
          let Novalatertrunksupportprice = formatPrice(
            NovaltksupSLprices.textContent
          );

          selectedItems.push({
            item: spexitem,
            price: Novalatertrunksupportprice,
            note: notes,
          });
          novaLaterTrunksup = [];
        }

        if (lattrusupSR.checked && novachoose === "NovalatertrunksupportSR") {
          // 組合字串：x 數量
          let spexString = ` * ${NovalatSLR2count.value}`;
          novaLaterTrunksup.push(spexString);
          let spexitem = novaLaterTrunksup.join("");
          let Novalatertrunksupportprice = formatPrice(
            NovaltksupSRprices.textContent
          );

          selectedItems.push({
            item: spexitem,
            price: Novalatertrunksupportprice,
            note: notes,
          });
          novaLaterTrunksup = [];
        }

        if (lattrusupML.checked && novachoose === "NovalatertrunksupportML") {
          // 組合字串：x 數量
          let spexString = ` * ${NovalatMLR1count.value}`;
          novaLaterTrunksup.push(spexString);
          let spexitem = novaLaterTrunksup.join("");
          let Novalatertrunksupportprice = formatPrice(
            NovaltksupMLprices.textContent
          );

          selectedItems.push({
            item: spexitem,
            price: Novalatertrunksupportprice,
            note: notes,
          });
          novaLaterTrunksup = [];
        }
        if (lattrusupMR.checked && novachoose === "NovalatertrunksupportMR") {
          // 組合字串：x 數量
          let spexString = ` * ${NovalatMLR2count.value}`;
          novaLaterTrunksup.push(spexString);
          let spexitem = novaLaterTrunksup.join("");
          let Novalatertrunksupportprice = formatPrice(
            NovaltksupMRprices.textContent
          );

          selectedItems.push({
            item: spexitem,
            price: Novalatertrunksupportprice,
            note: notes,
          });
          novaLaterTrunksup = [];
        }
      }

      //Spex座墊
      if (spexgroup === "SpexCushion") {
        if (item) {
          spexCushion.push(item);
        }
        let ProductcolorSelect = document.querySelector(
          ".Spexcushion_colorsel"
        );
        let productcolorselectedOption =
          ProductcolorSelect.options[ProductcolorSelect.selectedIndex];

        let CushionwidthSelect = document.querySelector(".Spexcushion_Width");
        let CushionheightSelect = document.querySelector(".Spexcushion_Heigh");
        let widthselectedOption =
          CushionwidthSelect.options[CushionwidthSelect.selectedIndex];
        let heightselectedOption =
          CushionheightSelect.options[CushionheightSelect.selectedIndex];
        // 組合字串：寬 x 高 - 顏色
        let spexString = ` - ${widthselectedOption.text}x ${heightselectedOption.text}- ${productcolorselectedOption.text}`;
        spexCushion.push(spexString);
        let spexitem = spexCushion.join("");
        let nowSpexcushionprice = document.querySelector(
          '[data-nowprice-Spexcushion="nowSpexcushion"]'
        );
        let Cushionprice = nowSpexcushionprice.textContent
          .replace("元", "")
          .trim();

        selectedItems.push({
          item: spexitem,
          price: Cushionprice,
          note: notes,
        });
      }

      //Spex硬座板
      if (spexgroup === "SpexSeatBase") {
        if (item) {
          spexSeatBase.push(item);
        }
        let SeatbasewidthSelect = document.querySelector(".Spexseatbase_Width");
        let SeatbaseheightSelect = document.querySelector(
          ".Spexseatbase_Heigh"
        );
        let widthselectedOption =
          SeatbasewidthSelect.options[SeatbasewidthSelect.selectedIndex];
        let heightselectedOption =
          SeatbaseheightSelect.options[SeatbaseheightSelect.selectedIndex];
        // 組合字串：車寬 x 板長
        let spexString = ` - ${widthselectedOption.text}x ${heightselectedOption.text}`;
        spexSeatBase.push(spexString);
        let spexitem = spexSeatBase.join("");
        let nowSpexseatbaseprice = document.querySelector(
          '[data-nowprice-Spexseatbase="nowSpexseatbase"]'
        );
        let SeatBaseprice = nowSpexseatbaseprice.textContent
          .replace("元", "")
          .trim();

        selectedItems.push({
          item: spexitem,
          price: SeatBaseprice,
          note: notes,
        });
      }

      //Spex分腿器
      if (spexgroup === "SpexMedialThigh") {
        if (item) {
          spexMedialThigh.push(item);
        }
        let MedialThighSizeSelect = document.querySelector(
          ".Spexmedialthigh_sel"
        );

        let selectedOption =
          MedialThighSizeSelect.options[MedialThighSizeSelect.selectedIndex];
        // 組合字串：- 尺寸
        let spexString = ` - ${selectedOption.text}`;
        spexMedialThigh.push(spexString);
        let spexitem = spexMedialThigh.join("");
        let nowSpexmedialthighprice = document.querySelector(
          '[data-nowprice-Spexmedialthigh="nowSpexmedialthigh"]'
        );
        let MedialThighprice = nowSpexmedialthighprice.textContent
          .replace("元", "")
          .trim();

        selectedItems.push({
          item: spexitem,
          price: MedialThighprice,
          note: notes,
        });
      }

      //Spex扶手臀撐
      if (spexgroup === "SpexArmSupLatThigh") {
        if (item) {
          spexArmSupLatThigh.push(item);
        }
        let buckle = document.querySelector(".Spexarmsuplatthigh_bucklesel");
        let armsup = document.querySelector(".Spexarmsuplatthigh_armsupsel");
        let latthigh = document.querySelector(
          ".Spexarmsuplatthigh_latthighsel"
        );
        let armpad = document.querySelector(".Spexarmsuplatthigh_armpadsel");
        let lateralpad = document.querySelector(
          ".Spexarmsuplatthigh_lateralpadsel"
        );

        let armsuplatthighcount = document.getElementById(
          "Spexarmsuplatthighcount"
        ).value;
        let armpadcount = document.getElementById("armpadcount").value;
        let lateralpadcount = document.getElementById("lateralpadcount").value;
        let SpexarmOrgprices = document.querySelector(".SpexarmOrgprices");
        let SpexlatOrgprices = document.querySelector(".SpexlatOrgprices");

        let buckleOption = buckle.options[buckle.selectedIndex];

        let armsupOption = armsup.options[armsup.selectedIndex];

        let latthighOption = latthigh.options[latthigh.selectedIndex];

        let armpadOption = armpad.options[armpad.selectedIndex];

        let lateralpadOption = lateralpad.options[lateralpad.selectedIndex];

        // 組合字串：(扣具) / 扶手角度 / 腿墊調整
        let spexString = `(${buckleOption.text}) / ${armsupOption.text} / ${latthighOption.text} * ${armsuplatthighcount}`;
        spexArmSupLatThigh.push(spexString);
        let spexitem = spexArmSupLatThigh.join("");

        let nowSpexarmlatOrgprices = document.querySelector(
          ".SpexarmlatOrgprices"
        );
        let SpexarmlatOrgprices = nowSpexarmlatOrgprices.textContent
          .replace("元", "")
          .trim();

        selectedItems.push({
          item: spexitem,
          price: SpexarmlatOrgprices,
          note: notes,
        });

        if (SpexarmOrgprices.textContent.replace("元", "").trim() !== "") {
          let nowSpexarmOrgprices = document.querySelector(".SpexarmOrgprices");
          let spexArmSup =
            "Spex 扶手墊" + ` / ${armpadOption.text} * ${armpadcount}`;

          let spexarmOrgprices = nowSpexarmOrgprices.textContent
            .replace("元", "")
            .trim();

          selectedItems.push({
            item: spexArmSup,
            price: spexarmOrgprices,
            note: notes,
          });
        }

        if (SpexlatOrgprices.textContent.replace("元", "").trim() !== "") {
          let nowSpexlatOrgprices = document.querySelector(".SpexlatOrgprices");
          let spexLatThigh =
            "Spex 腿撐墊" + ` / ${lateralpadOption.text} * ${lateralpadcount}`;

          let spexlatOrgprices = nowSpexlatOrgprices.textContent
            .replace("元", "")
            .trim();

          selectedItems.push({
            item: spexLatThigh,
            price: spexlatOrgprices,
            note: notes,
          });
        }
      }

      //Spex背靠
      if (spexgroup === "SpexBackSupports") {
        if (item) {
          spexBackSupports.push(item);
        }

        let ProductcolorSelect = document.querySelector(
          ".Spexbacksupports_colorsel"
        );
        let productcolorselectedOption =
          ProductcolorSelect.options[ProductcolorSelect.selectedIndex];

        let BackSupportswidthSelect = document.querySelector(
          ".Spexbacksupports_Width"
        );
        let BackSupportsheightSelect = document.querySelector(
          ".Spexbacksupports_Heigh"
        );
        let widthselectedOption =
          BackSupportswidthSelect.options[
            BackSupportswidthSelect.selectedIndex
          ];
        let heightselectedOption =
          BackSupportsheightSelect.options[
            BackSupportsheightSelect.selectedIndex
          ];

        // 組合字串：寬 x 高 - 顏色
        let spexString = ` - ${widthselectedOption.text}x ${heightselectedOption.text}- ${productcolorselectedOption.text}`;
        spexBackSupports.push(spexString);
        let spexitem = spexBackSupports.join("");
        let nowSpexBackSupports = document.querySelector(
          '[data-nowprice-Spexbacksupports="nowSpexbacksupports"]'
        );
        let BackSupportsprice = nowSpexBackSupports.textContent
          .replace("元", "")
          .trim();

        selectedItems.push({
          item: spexitem,
          price: BackSupportsprice,
          note: notes,
        });
      }

      //Spex扣具
      if (spexgroup === "SpexHardware") {
        if (item) {
          spexHardware.push(item);
        }
        let SpexHardwareDropMount = document.querySelector(
          "#Spex_Hardware_Drop_Mount"
        );
        let nowSpexHardware = document.querySelector(
          '[data-nowprice-Spexhardware="nowSpexhardware"]'
        );
        let Hardwareprice = nowSpexHardware.textContent
          .replace("元", "")
          .trim();

        if (SpexHardwareDropMount.checked) {
          let DropMountSelect = document.querySelector(".Spexdropmount_size");
          let dropmountSelectoptions =
            DropMountSelect.options[DropMountSelect.selectedIndex];

          // 組合字串： / 規格
          let spexString = ` / ${dropmountSelectoptions.text}`;
          spexHardware.push(spexString);
          let spexitem = spexHardware.join("");

          selectedItems.push({
            item: spexitem,
            price: Hardwareprice,
            note: notes,
          });
        } else {
          selectedItems.push({
            item: item,
            price: Hardwareprice,
            note: notes,
          });
        }
      }

      //軀幹側支撐
      if (spexgroup === "SpexLaterTrunkSupports") {
        if (item) {
          spexLaterTrunk.push(item);
        }
        //多軸可外撥側支撐
        let SpexLTACb = document.querySelector("#Spex_LaterTrunk_Axial");
        let ltacount = document.getElementById("latertrunkaxialcount");
        let ltacountquantity = parseInt(ltacount.value) || 0; // 轉成數字（預設為 0）
        let ltapadtype = document.querySelector(".latertrunkaxialpadtype");
        let ltaclothpadtype = document.querySelector(
          ".latertrunkaxialclothpadtype"
        );
        let ltapadWidth = document.querySelector(
          ".latertrunkaxialpadsize_Width"
        );
        let ltapadHeigh = document.querySelector(
          ".latertrunkaxialpadsize_Heigh"
        );
        let ltaprices = getFormattedPrice(".latertrunkaxialcountprices");

        let ltapadtypeSel = ltapadtype.options[ltapadtype.selectedIndex];
        let ltaclothpadtypeSel =
          ltaclothpadtype.options[ltaclothpadtype.selectedIndex];
        let ltapadsizeWidthSelectoptions =
          ltapadWidth.options[ltapadWidth.selectedIndex];
        let latertrunkaxialpadsizeHeighSelectoptions =
          ltapadHeigh.options[ltapadHeigh.selectedIndex];
        let ltapadcount = document.getElementById("latertrunkaxialpadcount");
        let ltapadcountquantity = parseInt(ltapadcount.value) || 0; // 轉成數字（預設為 0）
        let ltapadprices = getFormattedPrice(".latertrunkaxialpadcountprices");

        //Spex可外撥側支撐(Standard)
        let SpexLTSCb = document.querySelector("#Spex_LaterTrunk_Standard");
        let ltssize1 = document.getElementById("standardsize1");
        let ltssize2 = document.getElementById("standardsize2");
        let ltscount = document.getElementById("latertrunkstandardcount");
        let ltscountquantity = parseInt(ltscount.value) || 0; // 轉成數字（預設為 0）
        let ltspadtype = document.querySelector(".latertrunkstandardpadtype");
        let ltsclothpadtype = document.querySelector(
          ".latertrunkstandardclothpadtype"
        );

        let ltspadWidth = document.querySelector(
          ".latertrunkstandardpadsize_Width"
        );
        let ltspadHeigh = document.querySelector(
          ".latertrunkstandardpadsize_Heigh"
        );
        let ltsprices = getFormattedPrice(".latertrunkstandardcountprices");

        let ltspadtypeSel = ltspadtype.options[ltspadtype.selectedIndex];
        let ltsclothpadtypeSel =
          ltsclothpadtype.options[ltsclothpadtype.selectedIndex];
        let ltspadWidthSel = ltspadWidth.options[ltspadWidth.selectedIndex];
        let ltspadHeighSel = ltspadHeigh.options[ltspadHeigh.selectedIndex];
        let ltspadcount = document.getElementById("latertrunkstandardpadcount");
        let ltspadcountquantity = parseInt(ltspadcount.value) || 0; // 轉成數字（預設為 0）
        let ltspadprices = getFormattedPrice(
          ".latertrunkstandardpadcountprices"
        );

        //Spex可外撥側支撐(Offset)
        let SpexLTOCb = document.querySelector("#Spex_LaterTrunk_Offset");
        let ltosize1 = document.getElementById("offsetsize1");
        let ltosize2 = document.getElementById("offsetsize2");
        let ltocount = document.getElementById("latertrunkoffsetcount");
        let ltocountquantity = parseInt(ltocount.value) || 0; // 轉成數字（預設為 0）
        let ltopadtype = document.querySelector(".latertrunkoffsetpadtype");
        let ltoclothpadtype = document.querySelector(
          ".latertrunkoffsetclothpadtype"
        );
        let ltopadWidth = document.querySelector(
          ".latertrunkoffsetpadsize_Width"
        );
        let ltopadHeigh = document.querySelector(
          ".latertrunkoffsetpadsize_Heigh"
        );
        let ltoprices = getFormattedPrice(".latertrunkoffsetcountprices");

        let ltopadtypeSel = ltopadtype.options[ltopadtype.selectedIndex];
        let ltoclothpadtypeSel =
          ltoclothpadtype.options[ltoclothpadtype.selectedIndex];
        let ltopadWidthSel = ltopadWidth.options[ltopadWidth.selectedIndex];
        let ltopadHeighSel = ltopadHeigh.options[ltopadHeigh.selectedIndex];
        let ltopadcount = document.getElementById("latertrunkoffsetpadcount");
        let ltopadcountquantity = parseInt(ltopadcount.value) || 0; // 轉成數字（預設為 0）
        let ltopadprices = getFormattedPrice(".latertrunkoffsetpadcountprices");

        //Spex 雙曲面多軸可外撥側支撐扣具
        let SpexLTABCb = document.querySelector(
          "#Spex_LaterTrunk_AxialBiangular"
        );
        let ltabcount = document.getElementById(
          "latertrunk_axialbiangularcount"
        );
        let ltabcountquantity = parseInt(ltabcount.value) || 0; // 轉成數字（預設為 0）
        let ltab = document.querySelector(".latertrunkaxialbiangular");
        let ltabpadtype = document.querySelector(".latertrunk_axialpadtype");
        let ltabpadWidth = document.querySelector(
          ".latertrunk_axialbiangular_Width"
        );
        let ltabpadHeigh = document.querySelector(
          ".latertrunk_axialbiangular_Heigh"
        );

        let ltabprices = getFormattedPrice(
          ".latertrunkaxialbiangularcountprices"
        );

        let ltabSel = ltab.options[ltab.selectedIndex];
        let ltabpadtypeSel = ltabpadtype.options[ltabpadtype.selectedIndex];
        let ltabpadWidthSel = ltabpadWidth.options[ltabpadWidth.selectedIndex];
        let ltabpadHeighSel = ltabpadHeigh.options[ltabpadHeigh.selectedIndex];
        let ltabpadcount = document.getElementById(
          "latertrunkaxialbiangularpadcount"
        );
        let ltabpadcountquantity = parseInt(ltabpadcount.value) || 0; // 轉成數字（預設為 0）
        let ltabpadprices = getFormattedPrice(
          ".latertrunkaxialbiangularpadcountprices"
        );

        if (SpexLTACb.checked && spexchoose === "SpexAxial") {
          // 組合字串： * 數量
          let spexString = ` * ${ltacountquantity}`;
          spexLaterTrunk.push(spexString);
          let spexitem = spexLaterTrunk.join("");

          selectedItems.push({
            item: spexitem,
            price: ltaprices,
            note: notes,
          });
          spexLaterTrunk = [];
          if (ltapadprices !== "" && ltapadprices !== "0") {
            // 組合字串： Spex 側支撐擋墊 /
            let spexString = `Spex 側支撐擋墊 / ${ltapadtypeSel.text} ${ltapadsizeWidthSelectoptions.text} * ${latertrunkaxialpadsizeHeighSelectoptions.text} / ${ltaclothpadtypeSel.text} * ${ltapadcountquantity}`;
            selectedItems.push({
              item: spexString,
              price: ltapadprices,
              note: notes,
            });
          }
        }
        if (SpexLTSCb.checked && spexchoose === "SpexStandard") {
          if (ltssize1.checked) {
            let spexString = `/ 175mm / 60mm * ${ltscountquantity}`;
            spexLaterTrunk.push(spexString);
            let spexitem = spexLaterTrunk.join("");

            selectedItems.push({
              item: spexitem,
              price: ltsprices,
              note: notes,
            });
            spexLaterTrunk = [];
          } else if (ltssize2.checked) {
            let spexString = `/ 205mm / 85mm * ${ltscountquantity}`;
            spexLaterTrunk.push(spexString);
            let spexitem = spexLaterTrunk.join("");

            selectedItems.push({
              item: spexitem,
              price: ltsprices,
              note: notes,
            });
            spexLaterTrunk = [];
          }
          if (ltspadprices !== "" && ltspadprices !== "0") {
            // 組合字串： Spex 側支撐擋墊 /
            let spexString = `Spex 側支撐擋墊 / ${ltspadtypeSel.text} ${ltspadWidthSel.text} * ${ltspadHeighSel.text} / ${ltsclothpadtypeSel.text} * ${ltspadcountquantity}`;
            selectedItems.push({
              item: spexString,
              price: ltspadprices,
              note: notes,
            });
          }
        }
        if (SpexLTOCb.checked && spexchoose === "SpexOffset") {
          if (ltosize1.checked) {
            // 如果這個 item 已經存過了，就跳過
            let spexStrings = `/ 175mm / 60mm + 內縮20mm * ${ltocountquantity}`;
            spexLaterTrunk.push(spexStrings);
            let spexitems = spexLaterTrunk.join("");

            selectedItems.push({
              item: spexitems,
              price: ltoprices,
              note: notes,
            });
            spexLaterTrunk = [];
          } else if (ltosize2.checked) {
            let spexStrings = `/ 205mm / 85mm + 內縮20mm * ${ltocountquantity}`;
            spexLaterTrunk.push(spexStrings);
            let spexitems = spexLaterTrunk.join("");

            selectedItems.push({
              item: spexitems,
              price: ltoprices,
              note: notes,
            });
            spexLaterTrunk = [];
          }
          if (ltopadprices !== "" && ltopadprices !== "0") {
            // 組合字串： Spex 側支撐擋墊 /
            let spexString = `Spex 側支撐擋墊 / ${ltopadtypeSel.text} ${ltopadWidthSel.text} * ${ltopadHeighSel.text} / ${ltoclothpadtypeSel.text} * ${ltopadcountquantity}`;
            selectedItems.push({
              item: spexString,
              price: ltopadprices,
              note: notes,
            });
          }
        }
        if (SpexLTABCb.checked && spexchoose === "SpexAxialBiangular") {
          let spexString = ` * ${ltabcountquantity}`;
          spexLaterTrunk.push(spexString);
          let spexitem = spexLaterTrunk.join("");
          selectedItems.push({
            item: spexitem,
            price: ltabprices,
            note: notes,
          });
          spexLaterTrunk = [];
          if (ltabpadprices !== "" && ltabpadprices !== "0") {
            // 組合字串： Spex Biangular 擋墊 /
            let spexString = `Spex Biangular 擋墊 / ${ltabpadWidthSel.text} * ${ltabpadHeighSel.text} * ${ltabSel.text} / ${ltabpadtypeSel.text} * ${ltabpadcountquantity}`;
            selectedItems.push({
              item: spexString,
              price: ltabpadprices,
              note: notes,
            });
          }
        }
      }

      //軀幹側支撐配件
      if (spexgroup === "SpexLaterTrunkSupportsConnect") {
        if (item) {
          spexLaterTrunk.push(item);
        }
        //Spex 側支撐連接套件/左背管
        let SpexConnectLeft = document.getElementById(
          "Spex_LaterTrunk_ConnectLeft"
        );
        //Spex 側支撐連接套件/右背管
        let SpexConnectRight = document.getElementById(
          "Spex_LaterTrunk_ConnectRight"
        );
        //Spex 側支撐30mm延伸套件
        let SpexExtend30 = document.getElementById("Spex_LaterTrunk_Extend30");
        //Spex 側支撐115mm延伸套件
        let SpexExtend115 = document.getElementById(
          "Spex_LaterTrunk_Extend115"
        );
        //Spex 側支撐強化套件/補強片
        let SpexReinforce = document.getElementById(
          "Spex_LaterTrunk_Reinforce"
        );

        if (SpexConnectLeft.checked && spexchoose === "SpexConnectLeft") {
          selectedItems.push({
            item: spexLaterTrunk,
            price: formatPrice(
              SpexLaterTrunkConnectLeft_prices.SpexLaterTrunkConnectLeft_prices1
            ),
            note: notes,
          });
          spexLaterTrunk = [];
        } else if (
          SpexConnectRight.checked &&
          spexchoose === "SpexConnectRight"
        ) {
          selectedItems.push({
            item: spexLaterTrunk,
            price: formatPrice(
              SpexLaterTrunkConnectRight_prices.SpexLaterTrunkConnectRight_prices1
            ),
            note: notes,
          });
          spexLaterTrunk = [];
        } else if (SpexExtend30.checked && spexchoose === "SpexExtend30") {
          selectedItems.push({
            item: spexLaterTrunk,
            price: formatPrice(
              SpexLaterTrunkConnectExtend30_prices.SpexLaterTrunkConnectExtend30_prices1
            ),
            note: notes,
          });
          spexLaterTrunk = [];
        } else if (SpexExtend115.checked && spexchoose === "SpexExtend115") {
          selectedItems.push({
            item: spexLaterTrunk,
            price: formatPrice(
              SpexLaterTrunkConnectExtend115_prices.SpexLaterTrunkConnectExtend115_prices1
            ),
            note: notes,
          });
          spexLaterTrunk = [];
        } else if (SpexReinforce.checked && spexchoose === "SpexReinforce") {
          selectedItems.push({
            item: spexLaterTrunk,
            price: formatPrice(
              SpexLaterTrunkConnectReinforce_prices.SpexLaterTrunkConnectReinforce_prices1
            ),
            note: notes,
          });
          spexLaterTrunk = [];
        }
      }

      //頭靠
      if (spexgroup === "SpexHeadSupports") {
        if (item) {
          spexHeadSupports.push(item);
        }
        let headsupportsel = document.querySelector(".headsupportspad");
        let headsupportText =
          headsupportsel.options[headsupportsel.selectedIndex].text;
        let headsupportsprice = getFormattedPrice(".Spexheadsupportsprices");

        let spexString = ` ${headsupportText}`;
        spexHeadSupports.push(spexString);
        let spexitem = spexHeadSupports.join("");
        selectedItems.push({
          item: spexitem,
          price: headsupportsprice,
          note: notes,
        });
      }

      //頭靠支架
      if (spexgroup === "SpexHeadSupportsBracket") {
        if (item) {
          spexHeadSupportsBracket.push(item);
        }
        let headsupportsbracketprice = getFormattedPrice(
          ".Spexheadsupportsbracketprices"
        );

        selectedItems.push({
          item: item,
          price: headsupportsbracketprice,
          note: notes,
        });
      }

      //骨盆帶
      if (spexgroup === "SpexHipBelts") {
        if (item) {
          spexHipBelts.push(item);
        }
        let nowSpexHipBelts = document.querySelector(
          '[data-nowprice-Spexhipbelts="nowSpexhipbelts"]'
        );
        let HipBeltsprice = nowSpexHipBelts.textContent
          .replace("元", "")
          .trim();
        let hipbeltsType = document.querySelector(".hipbeltstype");
        let hipbeltsSize = document.querySelector(".hipbeltssize");
        let hipbeltstype = hipbeltsType.options[hipbeltsType.selectedIndex];
        let hipbeltssize = hipbeltsSize.options[hipbeltsSize.selectedIndex];

        // 組合字串： / 尺寸 / 款式
        let spexString = ` / ${hipbeltssize.text} / ${hipbeltstype.text}`;
        spexHipBelts.push(spexString);
        let spexitem = spexHipBelts.join("");

        selectedItems.push({
          item: spexitem,
          price: HipBeltsprice,
          note: notes,
        });
      }

      //肩胸綁帶
      if (spexgroup === "SpexShoulderHarnesses") {
        if (item) {
          spexShoulderHarnesses.push(item);
        }
        let shoulderharnessesSize = document.querySelector(
          ".shoulderharnessessize"
        );
        let shoulderSize =
          shoulderharnessesSize.options[shoulderharnessesSize.selectedIndex];
        let ShoulderHarnessesPrices = getFormattedPrice(
          ".SpexShoulderHarnessesprices"
        );

        // 組合字串： / 尺寸
        let spexString = ` / ${shoulderSize.text}`;
        spexShoulderHarnesses.push(spexString);
        let spexitem = spexShoulderHarnesses.join("");

        selectedItems.push({
          item: spexitem,
          price: ShoulderHarnessesPrices,
          note: notes,
        });
      }

      //肩胸綁帶
      if (spexgroup === "SpexShoulderStrapGuides") {
        if (item) {
          spexShoulderStrapGuides.push(item);
        }
        let ShoulderStrapGuidesPrices = getFormattedPrice(
          ".SpexShoulderStrapGuidesprices"
        );

        selectedItems.push({
          item: spexShoulderStrapGuides,
          price: ShoulderStrapGuidesPrices,
          note: notes,
        });
      }

      //上下肢綁帶
      if (spexgroup === "Spexupperlowerlimbstabilisers") {
        if (item) {
          spexupperlowerlimbstabilisers.push(item);
        }
        let Upperckb = document.getElementById("Upper_Limb_Stabilisers");
        let Lowerckb = document.getElementById("Lower_Limb_Stabilisers");

        let upperssel = document.querySelector(".upperlimbstabiliserssize");
        let uppertsel = document.querySelector(".upperlimbstabiliserstype");
        let lowerssel = document.querySelector(".lowerlimbstabiliserssize");

        let uppersizeOption = upperssel.options[upperssel.selectedIndex];
        let uppertypeOption = uppertsel.options[uppertsel.selectedIndex];
        let lowersizeOption = lowerssel.options[lowerssel.selectedIndex];

        let UpperLimbStabilisersPrices = getFormattedPrice(
          ".Spexupperlimbstabilisersprices"
        );
        let LowerLimbStabilisersPrices = getFormattedPrice(
          ".Spexupperlimbstabilisersprices"
        );

        if (Upperckb.checked && upperlowerlimbstabilisers === 1) {
          // 組合字串： / 尺寸 / 款式
          let spexString = ` / ${uppersizeOption.text} / ${uppertypeOption.text}`;
          spexupperlowerlimbstabilisers.push(spexString);
          let spexitem = spexupperlowerlimbstabilisers.join("");

          selectedItems.push({
            item: spexitem,
            price: UpperLimbStabilisersPrices,
            note: notes,
          });
          spexupperlowerlimbstabilisers = [];
        }

        if (
          (Lowerckb.checked && upperlowerlimbstabilisers === 2) ||
          (!Upperckb.checked && upperlowerlimbstabilisers === 1)
        ) {
          // 組合字串： / 尺寸
          let spexString = ` / ${lowersizeOption.text} / 一對`;
          spexupperlowerlimbstabilisers.push(spexString);
          let spexitem = spexupperlowerlimbstabilisers.join("");

          selectedItems.push({
            item: spexitem,
            price: LowerLimbStabilisersPrices,
            note: notes,
          });
          spexupperlowerlimbstabilisers = [];
        }

        upperlowerlimbstabilisers += 1;
      }

      // 記錄這個 item 已經被加入
      if (item !== undefined && item !== null && item !== "") {
        addedItems.add(item);
        addedItems.delete(undefined);
      }
    });
    LaterTrunkadd = 1;
    upperlowerlimbstabilisers = 1;
  }

  //  -------  創建Header 區塊  -------
  let quotationpage = document.getElementById("Quotation");

  // 創建 Header 區塊
  let quotationheader = document.createElement("div");
  quotationheader.classList.add("quotationheader");

  let companyTitle = document.createElement("h1");
  companyTitle.textContent = "光星骨科復健器材股份有限公司";

  let subTitle = document.createElement("h2");
  subTitle.textContent = "報價單";

  quotationheader.appendChild(companyTitle);
  quotationheader.appendChild(subTitle);

  quotationpage.appendChild(quotationheader);

  //  -------  創建客戶名稱及日期  -------
  //創建客戶名稱及日期
  let quotationSub = document.createElement("div");
  quotationSub.classList.add("quotationSub");

  // 包裝客戶名稱和輸入框
  let quotationClientContainer = document.createElement("div");
  quotationClientContainer.classList.add("quotation-client-container");

  // 創建客戶名稱標籤
  let quotationClientLabel = document.createElement("label");
  quotationClientLabel.textContent = "客戶名稱：";
  quotationClientLabel.setAttribute("for", "client-name"); // 為了無障礙設計，關聯標籤與輸入框

  // 創建客戶名稱輸入框
  let quotationClientInput = document.createElement("input");
  quotationClientInput.type = "text";
  quotationClientInput.id = "client-name"; // 設定 id 以便後續操作
  quotationClientInput.placeholder = "請輸入客戶名稱"; // 提示文字

  // 將標籤和輸入框加入到同一個容器
  quotationClientContainer.appendChild(quotationClientLabel);
  quotationClientContainer.appendChild(quotationClientInput);

  // 添加客戶名稱容器到 sub
  quotationSub.appendChild(quotationClientContainer);

  // 取得當下的日期
  let currentDate = new Date();

  // 計算民國年
  let rocYear = currentDate.getFullYear() - 1911;

  // 取得月份與日期
  let month = currentDate.getMonth() + 1; // 月份需加 1
  let day = currentDate.getDate();

  // 格式化日期
  let formattedDate = `${rocYear}年${month}月${day}日`;

  // 創建報價日期元素
  let quotationTime = document.createElement("div");
  quotationTime.classList.add("quotationTime");
  quotationTime.textContent = `報價日期：${formattedDate}`;

  // quotationSub.appendChild(quotationClient);
  quotationSub.appendChild(quotationTime);

  // 添加 sub 到主要容器
  quotationpage.appendChild(quotationSub);

  // 更新表格內容
  function updateTable() {
    // 獲取表格的 tbody，如果不存在，先創建表格
    let table = document.querySelector(".quotationtable");
    if (!table) {
      table = createTable();
    }
    let tbody = table.querySelector("tbody");
    tbody.innerHTML = ""; // 清空舊內容

    // 添加新行
    selectedItems.forEach((row, index) => {
      let tr = document.createElement("tr");
      tr.style.width = "100%";
      tr.style.borderBottom = "2px solid black";

      // 序號
      let serialCell = document.createElement("td");
      serialCell.textContent = index + 1;
      serialCell.style.borderBottom = "2px solid black";
      serialCell.style.fontWeight = "700";
      tr.appendChild(serialCell);

      // 項目內容
      let itemCell = document.createElement("td");
      itemCell.textContent = row.item;
      itemCell.style.borderBottom = "2px solid black";
      itemCell.style.fontSize = "11px";
      itemCell.style.fontWeight = "600";
      tr.appendChild(itemCell);

      // 價錢
      let priceCell = document.createElement("td");
      priceCell.textContent = row.price;
      priceCell.style.textAlign = "center"; // 價錢置中
      priceCell.style.borderBottom = "2px solid black";
      priceCell.style.fontSize = "12px";
      priceCell.style.fontWeight = "600";
      tr.appendChild(priceCell);

      // 備註
      let noteCell = document.createElement("td");
      noteCell.textContent = row.note;
      noteCell.style.borderBottom = "2px solid black";
      noteCell.style.fontSize = "10px";
      noteCell.style.fontWeight = "600";
      tr.appendChild(noteCell);

      tbody.appendChild(tr);
    });

    // 添加自訂的"報價業務"行，這一行的兩個格子各占 50%
    let trbusiness = document.createElement("tr");
    trbusiness.classList.add("business-row"); // 添加樣式類別

    let orgtd = document.createElement("td");
    orgtd.style.width = "100%";
    orgtd.colSpan = 4; // 4格合併
    orgtd.classList.add("orgtd");
    // 將td加入tr
    trbusiness.appendChild(orgtd);

    // 將tr加入到表格
    tbody.appendChild(trbusiness);

    // 找到目標 td
    let addbusinesstd = document.querySelector(" td.orgtd");

    // 創建嵌套表格
    let businessTable = document.createElement("table");
    businessTable.style.width = "100%";
    businessTable.style.border = "1";

    // 創建嵌套表格的行與列
    let businessTr = document.createElement("tr");

    let businessTd1 = document.createElement("td");
    businessTd1.style.width = "50%";
    businessTd1.textContent = "報價業務：";
    businessTd1.style.fontSize = "14px";
    businessTd1.style.border = "0px";
    businessTd1.style.fontWeight = "700";
    let inputBusiness = document.createElement("input");
    inputBusiness.type = "text";
    inputBusiness.placeholder = "業務名稱 電話"; // 默認顯示的提示文字
    inputBusiness.style.width = "50%";
    inputBusiness.style.fontWeight = "700";

    inputBusiness.style.textAlign = "left"; // 內容置中
    inputBusiness.style.fontSize = "12px";
    inputBusiness.style.backgroundColor = "inherit";
    inputBusiness.style.border = "0px";
    // 將這一行加入表格
    businessTd1.appendChild(inputBusiness);

    let businessTd2 = document.createElement("td");
    businessTd2.style.width = "50%";
    businessTd2.textContent = "總價格：";
    businessTd2.style.fontSize = "14px";
    businessTd2.style.border = "0px";
    businessTd2.style.fontWeight = "800";

    businessTd2.style.borderLeft = "2px solid black"; // 左邊框顏色繼承表格的邊框樣式
    let totalprice = document.getElementById("priceDisplay");
    if (totalprice) {
      businessTd2.textContent = "總價格：" + `${totalprice.textContent}` + "元";
    }

    // 將嵌套的單元格加入到行，行加入到表格
    businessTr.appendChild(businessTd1);
    businessTr.appendChild(businessTd2);
    businessTable.appendChild(businessTr);

    // 將嵌套表格加入到原 td
    addbusinesstd.appendChild(businessTable);

    // 添加自訂的"注意事項"行，這一行的兩個格子各占 50%
    let trnotice = document.createElement("tr");
    trnotice.classList.add("trnotice"); // 添加樣式類別

    //新增注意事項表格
    let noticetd = document.createElement("td");
    noticetd.style.width = "50%";
    noticetd.colSpan = 3; // 4格合併
    noticetd.classList.add("noticetd");
    noticetd.style.padding = "0px 0px 3px 0";
    noticetd.style.height = "100%";

    let noticetdDiv1 = document.createElement("div");
    noticetdDiv1.textContent = "注意事項";
    noticetdDiv1.style.textAlign = "center";
    noticetdDiv1.style.fontSize = "14px";
    noticetdDiv1.style.fontWeight = "900";
    noticetdDiv1.style.borderBottom = "2px solid black";

    let noticetdDiv2 = document.createElement("div");
    // 要插入的多行內容
    let lines = [
      "1.本報價有效期限為30天，適用於台灣本島地區之配送服務。",
      "2.訂單內含特製產品者，其交期將另行協商。",
      "3.單筆訂單金額達新台幣3,000元（含）以上，可享台灣本島免運費服務。",
      "4. 客製化產品及進口商品原則上不接受退貨，惟如商品規格與訂單不符或運送過程導致損壞，得申請換貨。",
      "5.貨品送達後，若有短缺、錯誤或其他異常，請於三日內提出反應，逾期恕不受理補貨或換貨申請。",
      "6. 產品顏色、規格、售價請依光星原廠系統公告為準，此資料僅供參考。",
    ];
    // 將每行內容插入到 div
    lines.forEach((line) => {
      let p = document.createElement("p"); // 每行使用 <p> 包裹
      p.textContent = line;
      p.style.padding = "5px 0 5px 5px";
      noticetdDiv2.appendChild(p);
    });
    noticetdDiv2.style.textAlign = "left";
    noticetdDiv2.style.fontSize = "10px";
    noticetdDiv2.style.fontWeight = "900";

    noticetd.appendChild(noticetdDiv1);
    noticetd.appendChild(noticetdDiv2);

    // 創建 sealtd 表格單元格
    let sealtd = document.createElement("td");
    sealtd.classList.add("sealtd");
    sealtd.style.padding = "0px";
    sealtd.style.border = "0px";
    sealtd.style.display = "flex";
    sealtd.style.flexDirection = "column";
    sealtd.style.alignItems = "center"; // 水平置中
    sealtd.style.justifyContent = "flex-start"; // 垂直靠上
    sealtd.style.height = "100%"; // 保證 td 本身高度正確

    // 創建 "公司簽章" 文字部分
    let sealtextdiv = document.createElement("div");
    sealtextdiv.classList.add("sealtextdiv");
    sealtextdiv.textContent = "公司簽章";
    sealtextdiv.style.borderBottom = "2px solid black";
    sealtextdiv.colSpan = 1; // 4格合併
    sealtextdiv.style.color = "red";
    sealtextdiv.style.fontWeight = "900";
    sealtextdiv.style.fontSize = "14px";
    sealtextdiv.style.width = "100%"; // 寬度拉滿
    sealtextdiv.style.textAlign = "center"; // 文字水平置中
    sealtextdiv.style.padding = "0px 0px 0 0px";
    sealtd.appendChild(sealtextdiv);

    // 創建 sealimgdiv 圖片容器，直接用 div 加背景圖
    let sealimgdiv = document.createElement("div");
    sealimgdiv.style.width = "100%";
    sealimgdiv.style.height = "auto"; // 測試高度
    sealimgdiv.style.backgroundSize = "contain";
    sealimgdiv.style.backgroundRepeat = "no-repeat";
    sealimgdiv.style.backgroundPosition = "center";

    // let sealimg = document.createElement("img");
    // sealimg.src = "./img/Companyseal.png";
    // sealimg.style.margin = "14px 0 14px 6px";
    // sealimg.style.padding = "5px 0";
    // sealimg.crossOrigin = "anonymous";
    // sealimgdiv.appendChild(sealimg);
    sealtd.appendChild(sealimgdiv);

    // 將td加入tr
    trnotice.appendChild(noticetd);
    trnotice.appendChild(sealtd);

    // 將tr加入到表格
    tbody.appendChild(trnotice);
  }

  // 創建表格結構（僅執行一次）
  function createTable() {
    let table = document.createElement("table");
    table.classList.add("quotationtable");

    // 添加表頭
    let thead = document.createElement("thead");
    let headerRow = document.createElement("tr");

    let columnWidths = ["5%", "65%", "15%", "15%"]; // 定義每個欄位的寬度

    ["序號", "項目內容", "價錢", "備註"].forEach((text, index) => {
      let th = document.createElement("th");
      th.textContent = text;
      th.style.width = columnWidths[index]; // 設定寬度
      headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // 添加空的表格主體
    let tbody = document.createElement("tbody");
    table.appendChild(tbody);

    // 將表格插入到容器中
    QuotationDiv.appendChild(table);

    return table;
  }
});

document.getElementById("printButton").addEventListener("click", function () {
  let printContent = document.getElementById("Quotation").outerHTML; // 取得 Quotation div 內容

  // 開新視窗
  let printWindow = window.open("", "", "width=794,height=1123");

  // 載入當前頁面的 CSS 樣式，確保列印時版面不會跑掉
  let styles = "";
  document
    .querySelectorAll("link[rel='stylesheet'], style")
    .forEach((style) => {
      styles += style.outerHTML;
    });

  // 將內容寫入新視窗
  printWindow.document.open();
  printWindow.document.write(`
    <html>
      <head>
        <title>列印</title>
        ${styles} <!-- 帶入 CSS -->
        <style>
          @media print {
            body {
              margin: 0;
              padding: 0;
              display: flex;
              justify-content: center; /* 水平置中 */
              align-items: flex-start; /* 從上方開始 */
              height: 100vh;
            }
            #Quotation {
              width: 210mm; /* A4寬度 */
              height: 297mm; /* A4高度 */
              max-width: 100%;
              max-height: 100%;
              margin: 0 auto;
              
              padding: 5mm; /* 預留邊距，避免內容太靠近邊緣 */
              box-sizing: border-box;
              page-break-before: always;
            }
          }
        </style>
      </head>
      <body>
        ${printContent}
        <script>
          window.onload = function () {
            window.print();
            window.onafterprint = function () { window.close(); };
          };
        </script>
      </body>
    </html>
  `);
  printWindow.document.close();
});
