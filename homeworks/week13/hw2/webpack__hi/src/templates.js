export const loadMoreButtonHTML = '<button class="load-more btn btn-secondary">載入更多</button>'

export const css = "body{	background-color: #224;	color: white;	font-family: 'Serif TC', sans-serif, serif;}container{	margin: 0 auto;	padding: 50px 300px;}.comments{	border-top: 1px solid #d3d3d3;	width: 700px;	margin-top: 30px;padding-top: 30px;}.form-group{	margin: 30px 0;}.btn{	margin-top: 10px;	background-color: #224;	border: 1px solid white;}btn:hover{	background-color: white;	color: #224;}.card-body{	border: 1px solid #d3d3d3;	margin: 12px 0;	border-radius:6px;}label{	padding-bottom: 8px;	padding-left: 5px;}span{	font-size: 10px;	display: block;	padding-bottom: 10px;}card-title,.card-text{	font-size: 20px;	padding-left: 10px;}"

export const formTemplate = `
      <div>
        <form class="add-comment-form">
          <div class="form-group">
          <label for="form-nickname">暱稱</label>
          <input name="nickname" type="text" class="form-control" id="form-nickname" >
          </div>
          <div class="form-group">
          <label for="content-textarea">留言內容</label>
          <textarea name='content' class="form-control" id="content-textarea" rows="3"></textarea>
          </div>
          <button type="submit" class="btn btn-secondary">送出</button>
        </form>
        <div class="comments">
        </div>
      </div>
  `