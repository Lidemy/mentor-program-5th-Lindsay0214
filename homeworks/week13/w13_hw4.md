## Webpack 是做什麼用的？可以不用它嗎？

webpack 可以讓功能模組化，減少檔案大小、優化程式碼讓頁面更快被載入，還有編譯一些瀏覽器不支援的程式碼版本。
可以不用，實際上一個工具的用與否取決於 case 目的，如果今天只是一個小物件或靜態網站，不需要用 Webpack 這樣的打包工具來增加這些 case 的 loading，會有點殺雞焉用牛刀，也會造成很多不必要的麻煩，不過以複雜度高的大專案來說，還是要用低。

## gulp 跟 webpack 有什麼不一樣？

gulp 用來管理任務，以前手動做的事，透過 gulp 建立起自動化流程解決了。 Webpack 是打包資源，提供模組化開發方式。
gulp 沒有像 Webpack 的入口點載入各模組去做資料轉換。

## CSS Selector 權重的計算方式為何？

自己目前的寫樣式習慣是：一個 id、區塊或重點部分 class、其餘小東西 element
所以權重 ID > class > element

後來還發現有 inline style attribute，就是寫在 HTML 標籤內的 style，跟偽元素和屬性選擇器。

最後還有一個超厲害的 !important。

所以是 —— !important > inline style > ID > Class、偽元素 > 屬性選擇器 > Element > \*

計算方式是它們都有各自的權重值，單一的選擇器像是 HTML 標籤內的 style 權重值是 1000、ID 是 100、class 是 10、element 是 1，那如果是一個 ID 裡面有 element 的話，權重值就是 100 + 1 = 101。
