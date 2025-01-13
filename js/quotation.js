document.addEventListener("DOMContentLoaded", () => {
  let showoutputQuotationBtn = document.getElementById("outputQuotation");
  let closeoutputQuotationBtn = document.getElementById(
    "closeoutputQuotationBtn"
  );
  let QuotationDiv = document.getElementById("Quotation");
  let checkboxes = document.querySelectorAll(".content-checkbox");
  
 
  // 顯示大 Div
  showoutputQuotationBtn.addEventListener("click", () => {
    updateLargeDiv(); // 更新內容
    QuotationDiv.classList.add("visible"); // 顯示大 Div
  });

  // 隱藏大 Div
  closeoutputQuotationBtn.addEventListener("click", () => {
    QuotationDiv.classList.remove("visible"); // 隱藏大 Div
  });

  // 更新大 Div 的內容
  function updateLargeDiv() {
    let basesize = [];

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            let group = checkbox.dataset.group; 
            let size = checkbox.dataset.size;
            if (group) {
                basesize.push({size});
            }
        }
    });
    let sizes = basesize.map(item => item.size).join('*')+ ' cm';
    console.log(sizes);
    }
});

