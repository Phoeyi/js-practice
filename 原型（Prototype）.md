## NOTE : 你懂 JavaScript 嗎？ # 19 原型（Prototype）

https://cythilya.github.io/2018/10/26/prototype/#%E5%8E%9F%E5%9E%8B%E4%B8%B2%E9%8F%88prototype-chain

---

### JS 中實現物件導向概念 example :

**Step1** -> 建個模子(類別)

- 建構子 Book 產出實體 ydkjs_1 和 ydkjs_2。

```js
function Book(name, pNum) {
  this.name = name;
  this.pNum = pNum;
  this.comment = null;
  this.setComments = function(comment) {
    this.comment = comment;
  };
}

var ydkjs_1 = new Book("第一本", 200);
var ydkjs_2 = new Book("第二本", 100);

ydkjs_1.setComments("齁垮！");

console.log(ydkjs_1.comment); //齁垮！
console.log(ydkjs_1.setComments === ydkjs_2.setComments); //false
```

**Step2** -> 共用的屬性或方法，可以提出來放到 prototype

- 將 setComments 這個共用的方法放到 Book.prototype，暫且稱它為 Book 的原型。

```js
function Book(name, pNum) {
  this.name = name;
  this.pNum = pNum;
  this.comment = null;
}

Book.prototype.setComments = function(comment) {
  this.comment = comment;
};

var ydkjs_1 = new Book("第一本", 200);
var ydkjs_2 = new Book("第二本", 100);

ydkjs_1.setComments("齁垮！");
console.log(ydkjs_1.comment); //齁垮！

ydkjs_2.setComments("拍垮！");
console.log(ydkjs_2.comment); //拍垮！

console.log(ydkjs_1.setComments === ydkjs_2.setComments); //true -->確認是同一個函式
```

---

####勿修改原生原型
在這裡都是在設定自己建立的物件的原型！不要嘗試修改預設的原生原型（例如：String.prototype），也不要無條件地擴充原生原型，若要擴充也應撰寫符合規格的測試程式。另，不要使用原生原型當成變數的初始值，以避免無意間的修改。

在 JavaScript 中，除了沒有類別，其實也沒有建構子。嘎啦嘎啦。

- 只要函式前有 new，這個函式就是建構子。
- 只要函式前有 new 來做呼叫，就叫做建構子呼叫。

---

###原型串鏈（Prototype Chain） :
每個物件在建立之初都會有個 `.__proto__`（dunder proto）內部屬性，它可用來存取另一個相連物件內部屬性` [[Prototype]]` 的值，而`[[Prototype]]`存放其建構子原型的位置。
當查找物件的屬性或方法時，若在本身這個物件找不到的時候，就會往更上一層物件尋找，直到串鏈尾端 `Object.prototype`，若無法找到就回傳 undefined，而這個尋找的脈絡就是依循著 `.__proto__` 這個原型串鏈（prototype chain）來找。

```js
console.log(ydkjs_1.__proto__ === Book.prototype); // /true
```
