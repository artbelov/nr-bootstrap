/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 * ======================================================================== */

/* global jQuery:false */

(function ($) {

  'use strict';

  var DOCS = {
    common: {
      init: function () {

        // Variables
        var minval = 760;
        var maxval = 1140;

        // This button will increment the value
        $('.qtyplus').click(function (e) {
          // Stop acting like a button
          e.preventDefault();
          // Get the field name
          var fieldName = $(this).data('field');
          // Get its current value
          var currentVal = parseInt($('input[name=' + fieldName + ']').val());
          // If is not undefined
          if (!isNaN(currentVal)) {
            // Increment
            $('input[name=' + fieldName + ']').val(currentVal + 10);
          } else {
            // Otherwise put a minval there
            $('input[name=' + fieldName + ']').val(minval);
          }
          // Change Container Width
          changeWidth();
        });

        // This button will decrement the value till minval
        $('.qtyminus').click(function (e) {
          // Stop acting like a button
          e.preventDefault();
          // Get the field name
          var fieldName = $(this).data('field');
          // Get its current value
          var currentVal = parseInt($('input[name=' + fieldName + ']').val());
          // If it isn't undefined or its greater than 0
          if (!isNaN(currentVal) && currentVal > minval) {
            // Decrement one
            $('input[name=' + fieldName + ']').val(currentVal - 10);
          } else {
            // Otherwise put a minval
            $('input[name=' + fieldName + ']').val(minval);
          }
          // Change Container Width
          changeWidth();
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
          var currentVal = parseInt($(this).val());
          // Check value
          if (!isNaN(currentVal) && currentVal < minval) {
            $(this).val(minval);
          } else if (!isNaN(currentVal) && currentVal > maxval) {
            $(this).val(maxval);
          }
          // Change Container Width
          changeWidth();
        });

        // Change Width Function
        function changeWidth() {
          // Get value
          var currentVal = parseInt($('.qty').val());
          // Inject CSS
          $('.masthead, .mastfoot, .cover-container').css('width', currentVal);
        }

      }
    }
  };

  // The routing fires all common scripts, followed by the page specific scripts.
  var UTIL = {
    fire: function (func, funcname, args) {
      var namespace = DOCS;
      funcname = (funcname === undefined) ? 'init' : funcname;
      if (func !== '' && namespace[func] && typeof namespace[func][funcname] === 'function') {
        namespace[func][funcname](args);
      }
    },
    loadEvents: function () {
      UTIL.fire('common');
      $.each(document.body.className.replace(/-/g, '_').split(/\s+/), function (classnm) {
        UTIL.fire(classnm);
      });
    }
  };

  $(document).ready(UTIL.loadEvents);

})(jQuery);
