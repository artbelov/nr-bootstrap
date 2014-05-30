/**
 * Non-responsive Bootstrap Homepage Scripts
 * http://www.artbelov.com/nr-bootstrap/
 * Copyright 2014 Artem Belov
 */

// Set Default Values
var step = 10,
  minVal = 800,
  maxVal = 1200,
  scrollBar = 20,
  viewPort = screen.width,
  qtyEl = document.getElementById('qty'),
  qtyPlusEl = document.getElementById('qtyplus'),
  qtyMinusEl = document.getElementById('qtyminus'),
  coverContainerEl = document.getElementById('cover-container'),
  mastFootEl = document.getElementById('mastfoot');


// Set Maximum Container Width
if (viewPort < maxVal) {
  maxVal = Math.floor(viewPort / 100) * 100 - scrollBar;
}

// Change Container Width Function
var changeWidth = (function (width, btn, icon) {
  // Set Container Width and Input Value
  var setVal = (function (width) {
    qtyEl.value = width;
    coverContainerEl.setAttribute('style', 'width:' + width + 'px');
    mastFootEl.setAttribute('style', 'width:' + width + 'px');
  });
  // If is Number
  if (!isNaN(width)) {
    if ((btn == 'qtyplus' || icon == 'qtyplus') && width < maxVal) {
      setVal(width + step);
    } else if ((btn == 'qtyminus' || icon == 'qtyminus') && width > minVal) {
      setVal(width - step);
    } else if (width > maxVal) {
      setVal(maxVal);
    } else if (width < minVal) {
      setVal(minVal);
    } else {
      setVal(width);
    }
  }
});

// Plus Button
qtyMinusEl.onclick = function (e) {
  changeWidth(parseInt(qtyEl.value), e.target.id, e.target.parentElement.id);
};

// Minus Button
qtyPlusEl.onclick = function (e) {
  changeWidth(parseInt(qtyEl.value), e.target.id, e.target.parentElement.id);
};

// Width Input
qtyEl.onblur = function () {
  changeWidth(qtyEl.value);
};

// Disallow Characters in Width Input
qtyEl.onkeydown = function (e) {
  // Allow keys: backspace, end, home, left, right, delete and Ctrl+A
  var allowKeys = [8, 35, 36, 37, 39, 46];
  if (allowKeys.indexOf(e.keyCode) !== -1 || (e.ctrlKey === true && e.keyCode == 65)) {
    return;
  }
  // Ensure that it is a number and stop the keypress
  if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
    e.preventDefault();
  }
};
