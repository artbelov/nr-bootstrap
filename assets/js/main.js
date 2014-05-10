/**
 * Non-responsive Bootstrap Homepage Scripts
 * http://www.artbelov.com/nr-bootstrap/
 * Copyright 2014 Artem Belov
 */

/* global jQuery:false */

(function ($, window, document, undefined) {

  'use strict';

  // Change Width of Container
  $(function () {

    // Set Default Values
    var step = 10, minval = 800, maxval = 1140;

    // Change Width Function
    var changeWidth = (function (width, qtyplus, qtyminus) {
      // Set Width and Input Value
      var setVal = (function (width) {
        $('.qty').val(width);
        $('.cover-container, .masthead, .mastfoot').css('width', width);
      });
      // If is correct number
      if (!isNaN(width)) {
        if (qtyplus && width < maxval) {
          setVal(width + step);
        } else if (qtyminus && width > minval) {
          setVal(width - step);
        } else if (width > maxval) {
          setVal(maxval);
        } else if (width < minval) {
          setVal(minval);
        } else {
          setVal(width);
        }
      }
    });

    // Plus-Minus Buttons and Width Input
    $('.qty, .qtyplus, .qtyminus').on('click blur', function () {
      changeWidth(parseInt($('.qty').val()), $(this).hasClass('qtyplus'), $(this).hasClass('qtyminus'));
    });

    // Disallow Characters in Width Input
    $('.qty').keydown(function (e) {
      // Allow keys: backspace, home, end, left, right, delete and Ctrl+A
      if ($.inArray(e.keyCode, [8, 35, 36, 37, 39, 46]) !== -1 || (e.ctrlKey === true && e.keyCode == 65)) { return; }
      // Ensure that it is a number and stop the keypress
      if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) { e.preventDefault(); }
    });

  });

})(jQuery, window, document);
