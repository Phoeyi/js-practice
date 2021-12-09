// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

/*
你懂 JavaScript 嗎？#19 原型（Prototype）
https://cythilya.github.io/2018/10/26/prototype/#%E5%8E%9F%E5%9E%8B%E4%B8%B2%E9%8F%88prototype-chain
*/

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

ydkjs_1.setComments("");
