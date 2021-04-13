｜前置作業｜
 1.透過課程連結進入 GitHub Classroom 裡課程教室 Lidemy 內自己專屬的倉庫
 2.進去自己的倉庫後，再右上角 code 的地方複製倉庫連結
 3.於本地端進行 git clone 剛複製的網址
   ex. git clone https://github.com/Lidemy/mentor-program-5th-Lindsay0214.git
 4.clone 下來之後，以後就可以直接在本機寫作業囉！

｜繳交作業流程｜
* 本地端之前 clone 下來的檔案開啟完成作業，完成後記得新開一個 branch 才能批改
	
	- 新開一個繳交作業分支：git branch week1

	- 切到此分支上：git checkout week1

 	  (1.、2.可濃縮成同時新開分支然後直接切過去的指令：git checkout -b week1)

	- git add .

	- git commit -m 'week1 作業繳交'

 	  (3.、4.可濃縮成指令：git commit -am)

	- 最後將作業推上遠端（我們專屬的倉庫）：git push origin week1

	- 推完後確定要 merge 到 master 就 PR 按下去，然後看有沒有要備註事項，也去 Files changed 看有沒有要更改的地方

	- 確定完成要繳交時，複製剛完成的網址至學習系統「繳交作業」即可


	> 常用指令
	> git status 可以看目前在的分支狀態
	> git diff 可以看修改了些什麼（按 Q 離開）
	> git branch 可以查看目前分支