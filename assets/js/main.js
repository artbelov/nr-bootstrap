/**
 * Non-responsive Bootstrap "gh-pages" JS
 * Homepage: http://www.artbelov.com/non-responsive-bootstrap/
 * Copyright 2014 Artem Belov
 */

/* global jQuery:false */

(function ($, window, document, undefined) {

  'use strict';

  // Change Width of Container
  $(function () {

    // SetUp Default Values
    var step = 10,
        minval = 800,
        maxval = 1140;

    // Change Width Function
    var changeWidth = function (width, qtyplus, qtyminus) {
      // Set Values
      var setVal = function (px) {
        $('.qty').val(px);
        $('.cover-container, .masthead, .mastfoot').css('width', px);
      };
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
    };

    // Plus-Minus Buttons and Input
    $('.qty, .qtyplus, .qtyminus').on('click blur', function () {
      changeWidth(parseInt($('.qty').val()), $(this).hasClass('qtyplus'), $(this).hasClass('qtyminus'));
    });

    // Disallow Characters in Input
    $('.qty').keydown(function (e) {
      // Allow: (backspace, delete, tab, escape, enter, . ) and (Ctrl+A) and (home, end, left, right)
      if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 || (e.keyCode == 65 && e.ctrlKey === true) || (e.keyCode >= 35 && e.keyCode <= 39)) {
        return;
      }
      // Ensure that it is a number and stop the keypress
      if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
      }
    });

  });

})(jQuery, window, document);
