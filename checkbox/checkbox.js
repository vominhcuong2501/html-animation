const parent = function (el, match, last) {
  var result = [];
  for (var p = el && el.parentElement; p; p = p.parentElement) {
    result.push(p);
    if (p.matches(match)) {
      break;
    }
  }
  if (last == 1) {
    return result[result.length - 1];
  } else {
    return result;
  }
};

const alternativeSelections = function (item) {
  let parentEl = parent(item, ".checkbox-container", true);
  let value = item.getAttribute("data-value");
  if (item.classList.contains("active")) {
    item.classList.remove("active");
    parentEl.querySelector('input[type="checkbox"]').value = "off";
  } else {
    item.classList.add("active");
    parentEl.querySelector('input[type="checkbox"]').value = "on";
  }
  parentEl.setAttribute("data-value", value);
  parentEl.querySelector('input[type="hidden"]').value = value;
};

document.addEventListener("DOMContentLoaded", function (e) {
  document.querySelectorAll(".alt-selection").forEach(function (item) {
    item.addEventListener("click", function (e) {
      alternativeSelections(this);
    });
  });
  document.querySelectorAll('input[type="checkbox"]').forEach(function (item) {
    let parentEl = parent(item, ".checkbox-container", true);
    if (item.checked) {
      parentEl.setAttribute("data-value", 1);
      parentEl.querySelector('input[type="hidden"]').value = 1;
    } else {
      parentEl.setAttribute("data-value", 0);
      parentEl.querySelector('input[type="hidden"]').value = 0;
    }
    item.addEventListener("change", function (e) {
      let value = 0;
      let getValue = parseFloat(parentEl.getAttribute("data-value"));
      if (this.checked) {
        value = 1;
        if (parentEl.querySelector(".alt-selection") !== null) {
          parentEl.querySelector(".alt-selection").classList.remove("active");
        }
      }
      parentEl.setAttribute("data-value", value);
      parentEl.querySelector('input[type="hidden"]').value = value;
    });
  });
  document.querySelectorAll("#colors > div").forEach(function (item) {
    item.addEventListener("click", function (e) {
      let mainColor = item.getAttribute("data-main-color");
      let boxShadow = item.getAttribute("data-box-shadow-tint");
      let highlight = item.getAttribute("data-light-highlight");
      console.log(mainColor);
      document.documentElement.style.setProperty("--main-color", mainColor);
      document.documentElement.style.setProperty(
        "--box-shadow-tint",
        boxShadow
      );
      document.documentElement.style.setProperty(
        "--light-highlight",
        highlight
      );
    });
  });
});
