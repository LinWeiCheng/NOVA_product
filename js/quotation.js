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
    let groupedSelections = {};

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        let group = checkbox.dataset.group;
        let size = checkbox.dataset.size;

        if (group === "Sbsize") {
          basesize.push({ size });
        }
      }
    });

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        if (checkbox.id === "checkbox_red") {
          selectedItems.push({
            item:
              "車體顏色(櫻桃紅)" +
              "-" +
              basesize.map((b) => b.size).join("*") +
              " cm",
            price: "40,000",
          });
        }
      }
    });

    let elementsWithAddPrice = document.querySelectorAll(
      '[data-addPrice="add"]'
    );

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        let group = checkbox.dataset.group;
        let item = checkbox.dataset.item;
        let size = checkbox.dataset.size;
        let price = checkbox.dataset.price;

        if (!group) {
          // 遍歷這些元素，並輸出它們
          elementsWithAddPrice.forEach((element) => {
            if (size) {
              let items = `${item} - ${size}`;
              selectedItems.push({ items, price });
            } else {
              let items = `${item}`;
              selectedItems.push({ items, price });
            }
            // let nowprice_tripod = Price[2].nextElementSibling;
            // price = nowprice_tripod.textContent.replace("元", ""); // 去掉"元"
          });
        }
      }
    });
    
    // 選擇所有被勾選的 checkbox
    let checkedCheckboxes = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );

    // 遍歷這些勾選的 checkbox 並處理
    checkedCheckboxes.forEach((checkbox) => {
      let group = checkbox.dataset.group;
      if (!group) {
      console.log(checkbox); // 或者進行其他操作
      }
    });
    console.log(selectedItems);
  }
});
