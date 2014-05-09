/*!
 * Non-responsive Bootstrap v3.1.1
 * Homepage: http://www.artbelov.com/non-responsive-bootstrap/
 * Based on Bootstrap (http://getbootstrap.com)
 * Copyright 2014 Artem Belov
 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */

/* global jQuery:false */

(function ($, window, document, undefined) {

  'use strict';

  // Change Width of Container
  $(function () {

    // Set Uo Values
    var step = 10,
      minval = 800,
      maxval = 1140;

    // Change Width Function
    function changeWidth(width) {
      // Set value
      $('.qty').val(width);
      // Inject CSS
      $('.cover-container, .masthead, .mastfoot').css('width', width);
    }

    // This button will increment the value
    $('.qtyplus, .qtyminus').click(function (e) {
      // Get current value
      var curVal = parseInt($('.qty').val());
      // Stop acting like a button
      e.preventDefault();
      // If is correct number
      if (!isNaN(curVal) && curVal >= minval && curVal <= maxval) {
        if ($(this).hasClass('qtyplus') && curVal < maxval) {
          // Increment
          changeWidth(curVal + step);
        } else if ($(this).hasClass('qtyminus') && curVal > minval) {
          // Decrement
          changeWidth(curVal - step);
        }
      } else if (!isNaN(curVal) && curVal > maxval) {
        // Otherwise put a maxval there
        changeWidth(maxval);
      } else if (!isNaN(curVal) && curVal < minval) {
        // Otherwise put a minval there
        changeWidth(minval);
      }
    });

    // Disallow Characters in input
    $('.qty').keydown(function (e) {
      // Allow: backspace, delete, tab, escape, enter and .
      if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
        // Allow: Ctrl+A
        (e.keyCode == 65 && e.ctrlKey === true) ||
        // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
        // Let it happen, don't do anything
        return;
      }
      // Ensure that it is a number and stop the keypress
      if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
      }
    });

    // On Blur Event
    $('.qty').blur(function () {
      // Get its current value
      var curVal = parseInt($(this).val());
      // Check current value
      if (!isNaN(curVal) && curVal > minval && curVal < maxval) {
        changeWidth(curVal);
      } else if (!isNaN(curVal) && curVal < minval) {
        changeWidth(minval);
      } else if (!isNaN(curVal) && curVal > maxval) {
        changeWidth(maxval);
      }
    });

  });

})(jQuery, window, document);
