document.addEventListener("DOMContentLoaded", () => {
  let showoutputQuotationBtn = document.getElementById("outputQuotation");
  let closeoutputQuotationBtn = document.getElementById(
    "closeoutputQuotationBtn"
  );
  let QuotationDiv = document.getElementById("Quotation");
  let checkboxes = document.querySelectorAll(".content-checkbox");

  // 顯示大 Div
  showoutputQuotationBtn.addEventListener("click", () => {
    updatecarbasesize(); // 更新座板大小
    QuotationDiv.classList.add("visible"); // 顯示大 Div
  });

  // 隱藏大 Div
  closeoutputQuotationBtn.addEventListener("click", () => {
    QuotationDiv.classList.remove("visible"); // 隱藏大 Div
  });

  // 更新大 Div 的內容
  function updatecarbasesize() {
    let basesize = [];
    let selectedItems = [];
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
    selectedItems.push({ item: items, price: prices });

    console.log(selectedItems);
    checkedCheckboxes.forEach((checkbox) => {
      let group = checkbox.dataset.group;
      let item = checkbox.dataset.item;
      let price = checkbox.dataset.price;
      if (!group) {
        selectedItems.push({ item: item, price: price });
      }
    });
  }
});



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

// 添加 Header 到主要容器
quotationpage.appendChild(quotationheader);

let quotationSub = document.createElement("div");
quotationSub.classList.add("quotationSub");

let quotationClient = document.createElement("div");
quotationClient.textContent = "客戶名稱：";

let quotationTime = document.createElement("div");
quotationTime.textContent = "報價日期：";

quotationSub.appendChild(quotationClient);
quotationSub.appendChild(quotationTime);

// 添加 sub 到主要容器
quotationpage.appendChild(quotationSub);


// 創建表格
let table = document.createElement("table");

// 創建表頭
let tableHead = document.createElement("thead");
let headerRow = document.createElement("tr");

["序號", "項目內容", "價錢", "備註"].forEach((text) => {
  const th = document.createElement("th");
  th.textContent = text;
  headerRow.appendChild(th);
});

tableHead.appendChild(headerRow);
table.appendChild(tableHead);
