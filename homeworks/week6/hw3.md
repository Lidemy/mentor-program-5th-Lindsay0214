## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。

1. <sup>文字</sup> 上標字 文字文字
   <sub>文字</sub> 下標字 文字文字
2. <cite>引用文字</cite> 分不出這個跟 <dfn> 的差別
3. <dd>註解</dd> 有點像我們會在課本字行中間做筆記的感覺

本來很開心找到一個想試試 (<blink> 文字閃爍)
結果...沒了 Q_Q
![](https://i.imgur.com/79CQmJG.png)

其實感覺蠻多標籤都可以透過 CSS 實現，但為什麼還要設這麼多標籤，是因為有些環境只允許單純的文本檔嗎，用起來比較方便？還是只是剛好我找的都比較無用 XD

## 請問什麼是盒模型（box modal）

網頁中，「佈局」是影響整體的設計與走向，因此有個「盒模型」的概念，讓大家使用時更加了解網頁上的空間是如何分配與運用的，而盒模型包含了四個元素，由最外層至最內層分別是 margin (外距)、border (邊框)、padding(內距)、content(內容)。
一般我們使用 CSS 語法時，我們想顯示的東西就是 content，而 margin 會是我們希望不同 content 之間的間隔，padding 則是我們希望 content 與 border 之間的間隔，margin 與 padding 只會有設定的間隔不會有任何圖像、色彩顯示，而 border 可以自由運用，讓邊框可見或不顯示。

## 請問 display: inline, block 跟 inline-block 的差別是什麼？

display 是佈局中很重要的一個屬性值，每個 html 元素都有一個預設的 display 屬性值，一般常分為區塊元素 (block) 與行內元素 (inline)，區塊元素 (block) 會把整個容器撐到最大，即使可以設定它的內距、外距、寬高，它依舊會佔滿整行，因此下一個元素一定會換行，常見的區塊元素有：div、header、footer、section、p。行內元素 (inline) 不會把容器撐開，也無法設定寬高，容器完全靠它裡面的內容物撐開，常見的行內元素有：a、span。而 inline-block 行內區塊，是界於 inline 與 block 之間的屬性值，它不但可以設定容器的內距、外距、寬高，同時也能水平排列，也就是不把容器撐滿！

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

position 在 CSS 中就是對位置的控制，static 是 position 屬性的預設值，它會隨者瀏覽器預設自動排版在頁面上，而 fixed 會把元素固定在你希望它固定的位置，absolute 也是，但與 fixed 不同的是 absolute 的上層元素要設定 relative 的屬性值，absolute 才會根據這個排版做定位，簡單來說，若希望每個頁面都會出現且要定位的元素，可以使用 position: fixed; 實現，而只希望單一頁面出現且要定位的元素，即可使用 relative 與 absolute 來實現。
