//■1-1

// (function($) {
//   $(function() {
//     //ここにイベント名を書く
//     $('#button').on('click', function () {
//       alert('イベントが発生しました');
//     });
//   });
// })(jQuery);

//■1-2

// (function($) {
//   function logEvent (log) {
//     $('#log').append($('<li />').text(log + 'が発生しました'));
//   }

//   $(function () {
//     logEvent('$(function () { ... })`')
//   });
//   $(document).ready(function () {
//     logEvent('$(document).ready(function () { ... })`')
//   });
//   $().ready(function () {
//     logEvent('$().ready(function () { ... })`')
//   });
// })(jQuery);


//■1-3

// (function($) {
//   $(function() {
//     function log(text) {
//       $('#log').append($('<li />').text(text));
//     }

//     $('#button').on('click', function (event) {
//       $('#log').empty();
//       log('currentTarget = ' + event.currentTarget);
//       log('target = ' + event.target);
//       log('pageX = ' + event.pageX);
//       log('pageY = ' + event.pageY);
//       log('altKey = ' + event.altKey);
//     })
//   });
// })(jQuery);


//■1-4

// (function($) {
//   $(function() {
//     $('#button').one('click', function () {
//       alert('clickされました');
//     });
//   });
// })(jQuery);


//■1-5

// (function($) {
//   $(function() {
//     function logEvent (event) {
//       $('#log').prepend($('<li />').text(event.type + 'が発生しました'));
//     }

//     $(document).on('click', '#button:not(.active)', function (event) {
//       logEvent(event);
//       $(event.target).addClass('active');
//     });
//     $(document).on('click', '#button.active', function (event) {
//       logEvent(event);
//       $(event.target).removeClass('active');
//     });
//   });
// })(jQuery);


//■1-6

(function($) {
  $(function() {
    $('#button').on('click', function () {
      alert('clickされました');
    });

    $('#button').trigger('click');
  });
})(jQuery);