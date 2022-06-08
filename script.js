const input = document.querySelector(".input");

const btns = document.querySelectorAll(".btn");
const warning = document.querySelector(".warning");

const people = document.querySelector(".tip-input");

const peopleEl = document.querySelector(".tip-people-input");

const amountEl = document.querySelector(".tip-amount-all");

const total = document.querySelector(".total");

const btnReset = document.querySelector(".btn-reset");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (Number(input.value) && Number(people.value)) {
      peopleEl.classList.remove("input-warning");
      warning.classList.remove("warning");
      warning.classList.add("hidden");
      if (btn.classList.contains("tip-input-optional") && Number(btn.value)) {
        let result =
          (Number(input.value) / 100) *
          Number(btn.value) *
          Number(people.value);
        let totalResult =
          (Number(input.value) / 100) *
            Number(btn.value) *
            Number(people.value) +
          Number(input.value);
        amountEl.textContent = `$${result.toFixed(2)}`;
        total.textContent = `$${totalResult.toFixed(2)}`;
        btnReset.classList.add("active");
        btnReset.addEventListener("click", () => {
          amountEl.textContent = "$0.00";
          total.textContent = "$0.00";
          input.value = "";
          people.value = "";
          btn.value = "";
        });
      } else {
        let index = btn.textContent.split("%")[0];
        console.log(index);
        let btnResult =
          (Number(input.value) / 100) * Number(index) * Number(people.value);
        let btntotalResult =
          (Number(input.value) / 100) *
            Number(Number(index)) *
            Number(people.value) +
          Number(input.value);

        amountEl.textContent = `$${btnResult.toFixed(2)}`;
        total.textContent = `$${btntotalResult.toFixed(2)}`;
        btnReset.classList.add("active");
        btnReset.addEventListener("click", () => {
          amountEl.textContent = "$0.00";
          total.textContent = "$0.00";
          input.value = "";
          people.value = "";
          btn.value = "";
        });
      }
    }
  });
});
