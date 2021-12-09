##重新認識 JavaScript: Day 18 Callback Function 與 IIFE
https://ithelp.ithome.com.tw/articles/10192739

---

``` js
var funcA = function (callback) {
      var i = Math.random() + 1;

      window.setTimeout(function () {
        console.log('function A');

        // 如果 callback 是個函式就呼叫它
        if (typeof callback === 'function') {
          callback();
        }

      }, i * 1000);
    };

    var funcB = function () {
      
        console.log('function B');
      
    };
```