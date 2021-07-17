// XSS
export function escapeOutput(toOutput){
  return toOutput.replace(/\&/g, '&amp;')
      .replace(/\</g, '&lt;')
      .replace(/\>/g, '&gt;')
      .replace(/\"/g, '&quot;')
      .replace(/\'/g, '&#x27')
      .replace(/\//g, '&#x2F');
}

// 長留言	
export function appendCommentToDOM(container, comment, isPrepend) {
  const html = `
      <div class="card-body">
  <span> 第 ${comment.id} 則留言</span>
        <h5 class="card-title">${escape(comment.nickname)}</h5>
        <p class="card-text">${escape(comment.content)}</p>
      </div>
  `
  if (isPrepend) {
    container.prepend(html)
  } else {
    container.append(html)
  }
}