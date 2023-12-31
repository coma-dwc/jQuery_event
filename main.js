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

// (function($) {
//   $(function() {
//     $('#button').on('click', function () {
//       alert('clickされました');
//     });

//     $('#button').trigger('click');
//   });
// })(jQuery);


//■2-1

// (function($) {
//   $(function() {
//     function logEvent (event) {
//       $('#log').prepend($('<li />').text(event.type + 'が発生しました'));
//     }

//     $('#button').on('click', function (event) {
//       logEvent(event);
//     });
//   });
// })(jQuery);


//■2-2～2-5

// (function($) {
//   $(function() {
//     function logEvent (event) {
//       $('#log').prepend($('<li />').text(event.type + 'が発生しました'));
//     }

//     $('#button').on('mouseenter', function (event) {
//       $('#button').addClass('active');
//       logEvent(event);
//     });
//     $('#button').on('mouseleave', function (event) {
//       $('#button').removeClass('active');
//       logEvent(event);
//     });
//   });
// })(jQuery);


//■2-6～2-7 mousedown mouseup

// (function($) {
//   $(function() {
//     function logEvent (event) {
//       $('#log').prepend($('<li />').text(event.type + 'が発生しました'));
//     }

//     $('#button').on('mouseup', function (event) {
//       logEvent(event);
//     });
//   });
// })(jQuery);


//■3-1

// (function($) {
//   $(function() {
//     function logEvent (event) {
//       $('#log').prepend($('<li />').text(event.type + 'が発生しました'));
//     }

//     $('form').on('submit', function (event) {
//       return false;
//     });

//     $('#input').on('keypress', function (event) {
//       if (event.which === 13) {
//         logEvent(event);
//       }
//     });
//   });
// })(jQuery);


//■3-2

// (function($) {
//   $(function() {
//     function logEvent (event, withKey) {
//       const key = withKey ? withKey + '+' : ''
//       $('#log').prepend($('<li />').text(key + event.key + 'が入力されました'));
//     }

//     $('form').on('submit', function (event) {
//       return false;
//     });

//     $('#input').on('keypress', function (event) {
//       if (event.which === 13 && event.shiftKey && event.altKey) {
//         logEvent(event, 'shift+alt');
//       } else if (event.which === 13 && event.shiftKey) {
//         logEvent(event, 'shift');
//       } else if (event.which === 13 && event.altKey) {
//         logEvent(event, 'alt');
//       } else if (event.which === 13) {
//         logEvent(event);
//       }
//     });
//   });
// })(jQuery);


//■3-3

// (function($) {
//   $(function() {
//     function move (distance) {
//       const currentPosition = $('.target').position();
//       const newStyle = {
//         top: currentPosition.top + distance.y,
//         left: currentPosition.left + distance.x,
//       }
//       $('.target').css(newStyle);
//     }

//     $('#input').on('keydown', function (event) {
//       switch (event.which) {
//         case 37: // ←
//           move({ x: -5, y: 0 });
//           break;
//         case 38: // ↑
//           move({ x: 0, y: -5 });
//           break;
//         case 39: // →
//           move({ x: 5, y: 0 });
//           break;
//         case 40: // ↓
//           move({ x: 0, y: 5 });
//           break;
//       }
//     })
//   });
// })(jQuery);


//■4-1～4-2 focus blur

// (function($) {
//   $(function() {
//     function logEvent (event) {
//       $('#log').prepend($('<li />').text(event.type + 'が発生しました'));
//     }

//     $('form').on('submit', function (event) {
//       return false;
//     });

//     $('#input').on('blur', function (event) {
//       logEvent(event);
//     });
//   });
// })(jQuery);


//■4-3 .val() change , 4-4 input

// (function($) {
//   $(function() {
//     function logEvent (event) {
//       const value = $(event.target).val();
//       $('#log').prepend($('<li />').text(event.type + 'が発生しました。現在の値：' + value));
//     }

//     $('form').on('submit', function (event) {
//       return false;
//     });

//     $('#input').on('input', function (event) {
//       logEvent(event);
//     });
//   });
// })(jQuery);


//■4-5 submit

// (function($) {
//   $(function() {
//     function logEvent (event) {
//       const formValue = $('#form').serialize();
//       $('#log').prepend($('<li />').text(event.type + 'が発生しました。フォームの値：' + formValue));
//     }

//     $('#form').on('submit', function (event) {
//       logEvent(event);
//       event.preventDefault();
//     });
//   });
// })(jQuery);


//■5-1 off

// (function($) {
//   $(function() {
//     function logEvent (event) {
//       $('#log').prepend($('<li />').text(event.type + 'が発生しました'));
//     }
//     function handleClick(event) {
//       logEvent(event);
//     }

//     $('#button').on('click', handleClick);
//     $('#button').off('click', handleClick);
//   });
// })(jQuery);


//■5-2  click  event.preventDefault() ,  5-3 submit ,  5-4  window  mousewheel

// (function($) {
//   $(function() {
//     $(window).on('mousewheel', function (event) {
//       event.preventDefault();
//     });
//   });
// })(jQuery);


//■6-1  load

// (function($) {
//   $(function() {
//     function log(text) {
//       $('#log').append($('<li />').text(text));
//     }

//     $('img').on('load', function (event) {
//       // console.log(this, $(this), $(this).eq(0))
//       // log('imgタグのサイズ：' + $(this).width() + 'x' + $(this).height());
//       // log('画像のサイズ：' + this.naturalWidth + 'x' + this.natuarlHeight);
//     });
//   });
// })(jQuery);


//■6-2  contextmenu

// (function($) {
//   $(function() {
//     $(document).on('contextmenu', function (event) {
//       alert('右クリックは禁止されています！');
//       event.preventDefault();
//     });
//   });
// })(jQuery);


//■6-3  resize

// (function($) {
//   $(function() {
//     function logEvent (event) {
//       const size = $(window).width() + 'x' + $(window).height();
//       $('#log').prepend($('<li />').text(event.type + 'が発生しました。現在のサイズ：' + size));
//     }

//     $(window).on('resize', function (event) {
//       logEvent(event);
//     });
//   });
// })(jQuery);


//■6-4  beforeunload

(function($) {
  $(function() {
    $('#reload').on('click', function () {
      location.reload();
    });

    $(window).on('beforeunload', function () {
      if ($('#input').val()) {
        return 'まだ保存されていない内容があります。';
      }
    });
  });
})(jQuery);