document.addEventListener("DOMContentLoaded", () => {
  let showoutputQuotationBtn = document.getElementById("outputQuotation");
  let closeoutputQuotationBtn = document.getElementById(
    "closeoutputQuotationBtn"
  );

  let QuotationDiv = document.getElementById("Quotation");
  let checkboxes = document.querySelectorAll(".content-checkbox");

  // 全局數據存儲
  let selectedItems = [];
  let basesize = [];

  // 顯示大 Div
  showoutputQuotationBtn.addEventListener("click", () => {
    updatecarbasesize(); // 更新座板大小
    QuotationDiv.classList.add("visible"); // 顯示大 Div
    updateTable(); // 顯示表格內容
  });

  // 隱藏大 Div
  closeoutputQuotationBtn.addEventListener("click", () => {
    clearcarbasesize();
    QuotationDiv.classList.remove("visible"); // 隱藏大 Div
  });

  //清空資料
  function clearcarbasesize() {
    selectedItems.length = 0;
    basesize.length = 0;
  }

  // 更新大 Div 的內容
  function updatecarbasesize() {
    let prices = "";
    // 選擇所有被勾選的 checkbox
    let checkedCheckboxes = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );

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

    selectedItems.push({ item: items, price: prices, note: "" });

    checkedCheckboxes.forEach((checkbox) => {
      let group = checkbox.dataset.group;
      let item = checkbox.dataset.item;
      let price = checkbox.dataset.price;
      let notes = checkbox.dataset.note;
      if (!group) {
        selectedItems.push({ item: item, price: price, note: notes });
      }
    });
    console.log(selectedItems);
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

      tr.appendChild(serialCell);

      // 項目內容
      let itemCell = document.createElement("td");
      itemCell.textContent = row.item;
      itemCell.style.borderBottom = "2px solid black";
      tr.appendChild(itemCell);

      // 價錢
      let priceCell = document.createElement("td");
      priceCell.textContent = row.price;
      priceCell.style.textAlign = "center"; // 價錢置中
      priceCell.style.borderBottom = "2px solid black";
      tr.appendChild(priceCell);

      // 備註
      let noteCell = document.createElement("td");
      noteCell.textContent = row.note;
      noteCell.style.borderBottom = "2px solid black";
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
    businessTd1.style.fontSize = "20px";
    businessTd1.style.border = "0px";
    businessTd1.style.fontWeight = "700";
    let inputBusiness = document.createElement("input");
    inputBusiness.type = "text";
    inputBusiness.placeholder = "臨危成 097585745"; // 默認顯示的提示文字
    inputBusiness.style.width = "50%";
    inputBusiness.style.fontWeight = "700";

    inputBusiness.style.textAlign = "left"; // 內容置中
    inputBusiness.style.fontSize = "18px";
    inputBusiness.style.backgroundColor = "inherit";
    inputBusiness.style.border = "0px";
    // 將這一行加入表格
    businessTd1.appendChild(inputBusiness);

    let businessTd2 = document.createElement("td");
    businessTd2.style.width = "50%";
    businessTd2.textContent = "總價格：";
    businessTd2.style.fontSize = "20px";
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
    noticetd.colSpan = 2; // 4格合併
    noticetd.classList.add("noticetd");
    noticetd.style.padding = "3px 0px 3px 0";
    noticetd.style.height = "100%";

    let noticetdDiv1 = document.createElement("div");
    noticetdDiv1.textContent = "注意事項";
    noticetdDiv1.style.textAlign = "center";
    noticetdDiv1.style.fontSize = "22px";
    noticetdDiv1.style.fontWeight = "900";
    noticetdDiv1.style.borderBottom = "1px solid black";
    noticetdDiv1.style.padding = "5px 0 5px 0";

    let noticetdDiv2 = document.createElement("div");
    // 要插入的多行內容
    let lines = ["1.", "2.", "3."];

    // 將每行內容插入到 div
    lines.forEach((line) => {
      let p = document.createElement("p"); // 每行使用 <p> 包裹
      p.textContent = line;
      p.style.padding = "5px 0 5px 5px";
      noticetdDiv2.appendChild(p);
    });
    noticetdDiv2.style.textAlign = "left";
    noticetdDiv2.style.fontSize = "18px";
    noticetdDiv2.style.fontWeight = "900";
    

    noticetd.appendChild(noticetdDiv1);
    noticetd.appendChild(noticetdDiv2);

    //新增公司章表格
    let sealtd = document.createElement("td");
    sealtd.style.width = "50%";
    sealtd.colSpan = 2; // 4格合併
    noticetd.classList.add("sealtd");

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

    let columnWidths = ["10%", "50%", "20%", "20%"]; // 定義每個欄位的寬度

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
