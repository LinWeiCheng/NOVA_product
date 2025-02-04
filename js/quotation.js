document.addEventListener("DOMContentLoaded", () => {
  let showoutputQuotationBtn = document.getElementById("outputQuotation");
  let closeoutputQuotationBtn = document.getElementById(
    "closeoutputQuotationBtn"
  );
  let container = document.getElementById("myContainer");
  let QuotationDiv = document.getElementById("Quotation");
  let printButton = document.getElementById("printButton");

  // 全局數據存儲
  let selectedItems = [];
  let basesize = [];

  // 顯示大 Div
  showoutputQuotationBtn.addEventListener("click", () => {
    updatecarbasesize(); // 更新座板大小
    QuotationDiv.classList.add("visible"); // 顯示大 Div
    updateTable(); // 顯示表格內容
    document.body.style.overflow = "hidden"; // 禁止背景滾動
    container.style.display = "none";
    document.body.style.backgroundColor = "#ffd76b";
    printButton.style.visibility = "visible";

    // 創建浮水印圖片
    let watermark = document.createElement("img");
    watermark.src = "./img/New-Logo.png";
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
    basesize.length = 0;
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
      let item = checkbox.dataset.item;
      let price = checkbox.dataset.price;
      let notes = checkbox.dataset.note;
      // 如果這個 item 已經存過了，就跳過
      if (addedItems.has(item)) {
        return;
      }
      if (!group) {
        selectedItems.push({ item: item, price: price, note: notes });
      }

      // 記錄這個 item 已經被加入
      addedItems.add(item);
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
      "1.此報價有效為30天內有效。(含台灣本島區域內寄送)",
      "2.內含特製產品，交期另議。",
      "3.最低出貨每次為末端售價金額$3,000 (含)以上可免國內運費。",
      "4.客製貨產品及進口貨物訂購到貨，原則上無法退貨，僅在商品規格與訂購不符或出現損傷的情況下可進行退換。",
      "5.若貨物寄出後三天內未收到反應，對於缺貨或寄錯或的情況將不再提供補貨或換貨服務。",
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
    sealtd.style.display = "flex";
    sealtd.style.flexDirection = "column";
    sealtd.style.alignItems = "center"; // 水平置中
    sealtd.style.justifyContent = "flex-start"; // 垂直靠上
    sealtd.style.height = "100%"; // 保證 td 本身高度正確

    // 創建 "公司簽章" 文字部分
    let sealtextdiv = document.createElement("div");
    sealtextdiv.classList.add("sealtextdiv");
    sealtextdiv.textContent = "公司簽章";
    sealtextdiv.style.borderBottom = "3px solid black";
    sealtextdiv.colSpan = 1; // 4格合併
    sealtextdiv.style.color = "red";
    sealtextdiv.style.fontWeight = "900";
    sealtextdiv.style.fontSize = "14px";
    sealtextdiv.style.width = "100%"; // 寬度拉滿
    sealtextdiv.style.textAlign = "center"; // 文字水平置中
    sealtextdiv.style.padding = "1px 4px 0 4px";
    sealtd.appendChild(sealtextdiv);

    // 創建 sealimgdiv 圖片容器，直接用 div 加背景圖
    let sealimgdiv = document.createElement("div");
    sealimgdiv.style.width = "100%";
    sealimgdiv.style.height = "auto"; // 測試高度
    sealimgdiv.style.backgroundSize = "contain";
    sealimgdiv.style.backgroundRepeat = "no-repeat";
    sealimgdiv.style.backgroundPosition = "center";

    let sealimg = document.createElement("img");
    sealimg.src = "./img/Companyseal.png";
    sealimg.style.margin = "14px 0 14px 6px"
    sealimg.style.padding = "5px 0"
    sealimgdiv.appendChild(sealimg);
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

// document.addEventListener("DOMContentLoaded", function () {
//   document.getElementById("printButton").addEventListener("click", function () {
//     window.print();
//   });
// });

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
