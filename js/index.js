// راجع انك تمنع المستخدم يسكرول
// راجع لما تختار عنصر وتنسقه وتطبعه
// راجع لو عملت ديف فيه اسكرول والبوردر راديوس
// راجع لما تضيف ايقون للتايتل
// ازاي تخلي ال input يقل مع الريسبونسيف
// راجع ال REG
let day = document.getElementById("one");
let month = document.getElementById("two");
let year = document.getElementById("three");
let inputs = document.querySelectorAll("input");
let img = document.querySelector("img");
let bool = true;
let numDay, numMonth, numYear;
// Event Img
img.addEventListener("click", function () {
  inputs.forEach((el) => {
    checkLength(el);
    checkLetterOrNumber(el.value, el);
    if (el.value) {
      if (year.length < 4) {
        year.style.borderColor = "red";
        year.parentElement.querySelector("label").style.color = "red";
        year.parentElement.querySelector("span").style.color = "red";
        year.parentElement.querySelector("span").innerHTML = "This Valid";
        bool = false;
      }
    }
    oninput(el);
  });
  if (bool) {
    if (day.value > 31) {
      day.style.borderColor = "red";
      day.parentElement.querySelector("span").style.color = "red";
      day.parentElement.querySelector("label").style.color = "red";
      day.parentElement.querySelector("span").innerHTML = "This Valid Day";
    } else {
      numDay = day.value;
    }
    if (month.value > 12) {
      month.style.borderColor = "red";
      month.parentElement.querySelector("span").style.color = "red";
      month.parentElement.querySelector("label").style.color = "red";
      month.parentElement.querySelector("span").innerHTML = "This Valid Month";
    } else {
      numMonth = month.value;
    }
    if (year.value > 2100 || year.value < 1500) {
      year.style.borderColor = "red";
      year.parentElement.querySelector("span").style.color = "red";
      year.parentElement.querySelector("label").style.color = "red";
      year.parentElement.querySelector("span").innerHTML = "This Valid Year";
    } else {
      numYear = year.value;
    }
  }
  if (numDay && numMonth && numYear) {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1;
    let currentDay = currentDate.getDate();
    let years = currentYear - numYear;
    let months = 0;
    let days = 0;
    if (numMonth < currentMonth) months = currentMonth - numMonth;
    else if (numMonth > currentMonth) {
      months = 12 - (numMonth - currentMonth);
    }
    if (!(currentMonth >= numMonth)) years--;
    if (numDay < currentDay) days = currentDay - numDay;
    else if (numDay > currentDay) {
      days = 31 - (numDay - currentDay);
    }
    let sYear = document.querySelector(".sYear");
    let sMonth = document.querySelector(".sMonth");
    let sDay = document.querySelector(".sDay");
    sYear.innerHTML = years;
    sMonth.innerHTML = months;
    sDay.innerHTML = days;
  }
});
// End Event Img
function checkLetterOrNumber(value, element) {
  for (let i = 0; i < value.length; i++) {
    if ((+value[i]).toString() == "NaN") {
      let spa = element.parentElement.querySelector("span");
      let inp = element.parentElement.querySelector("input");
      let lab = element.parentElement.querySelector("label");
      spa.style.color = "red";
      spa.innerHTML = "Valid";
      inp.style.borderColor = "red";
      lab.style.color = "red";
      bool = false;
    } else {
      bool = true;
    }
  }
}
function checkLength(element) {
  let inp = element;
  let spa = element.parentElement.querySelector("span");
  let lab = element.parentElement.querySelector("label");
  if (element.value.length == 0) {
    inp.style.borderColor = "red";
    spa.style.color = "red";
    lab.style.color = "red";
    spa.innerHTML = "This field is required";
    bool = false;
  } else {
    inp.style.borderColor = "";
    spa.style.color = "";
    lab.style.color = "";
    spa.innerHTML = "";
    bool = true;
  }
}
function oninput(element) {
  let inp = element;
  let spa = element.parentElement.querySelector("span");
  let lab = element.parentElement.querySelector("label");
  element.addEventListener("input", function () {
    inp.style.borderColor = "";
    spa.style.color = "";
    lab.style.color = "";
    spa.innerHTML = "";
  });
}
