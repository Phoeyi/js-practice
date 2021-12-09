##hahow for business 六角學院 初階CSS課程
https://cathaybank.business.hahow.in/classroom/105/lessons/1884?playFrom=360

---

###圖文相關：

* **內嵌連結**
1. **圖片取代文字連結**
情境：

`h1`標籤內有`a`連結。
``` css
    <div class="header">
        <h1><a href="#">Hex School</a></h1>
    </div>
```
`a`連結設背景圖片，想同時讓搜尋引擎可以搜到`h1`標籤底下的`a`連結文字內容(被爬蟲)、同時只顯示背景圖片(不要顯示文字)。

``` css
.header h1 a{
	background-image: url(../images/logo.png);
	width: 220px;
	height: 50px;
	display: block;
	text-indent: 101%;
	overflow: hidden;
	white-space: nowrap;
}
```
`	text-indent: 101%;` (文字縮排)
`	overflow: hidden;` (超出div(?)部分的不顯示)
`	white-space: nowrap;` (強制文字顯示在一行之內)

上面三個樣式是重點。

---

###瀏覽器相關：

* **語法兼容性**：
1. **[Can I use](https://caniuse.com/)**
偵測所有瀏覽器不同版本關於CSS、HTML、JS的效果兼容性。 

2. **[StatCounter](https://gs.statcounter.com/)**
瀏覽器使用市佔率統計(不同載具/瀏覽器/同瀏覽器不同版本等不同變數皆可查到)。

---

###線上資源相關：

* **圖相關**：
1. **[ICONFINDER](https://www.iconfinder.com/)**
免費下載icon。 

2. **[unsplash](https://unsplash.com/)**
瀏覽器使用市佔率統計(不同載具/瀏覽器/同瀏覽器不同版本等不同變數皆可查到)。

3. **[Flickr](https://www.flickr.com/explore)**

###CSS樣式相關：

* **框架網站**：
1. **[Pure.css](https://purecss.io/)**
IE釋出的框架，解決一些樣式在不同網頁瀏覽器兼容性的問題。


* **CSS樣式**：
1. **漸層**

``` css
background: linear-gradient(direction, color-stop1, color-stop2, ...)
```
但須注意瀏覽器是否有支援`linear-gradient`樣式，加上所需的前綴詞。




