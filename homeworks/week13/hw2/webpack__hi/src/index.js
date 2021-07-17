import { getComments, addComments } from './api'
import { appendCommentToDOM } from './utils'
import { loadMoreButtonHTML, css, formTemplate } from './templates'
import $ from 'jQuery'

// load more btn
let siteKey = ''
let apiUrl = ''
let containerElement = null
let commentDOM = null
let lastId = null
let isEnd = false

function init(options){
    siteKey = options.siteKey
    apiUrl = options.apiUrl
    containerElement = $(options.containerSelector)
    containerElement.append(formTemplate)
    // add style in JS
    const styleElement = document.createElement('style')
    styleElement.type = 'text/css';
    styleElement.appendChild(document.createTextNode(css))
    document.head.appendChild(styleElement)

    commentDOM = $('.comments')
    getNewComments()

    // when click load more 
    $('.comments').on('click', '.load-more', () => {
      getComments()
    })

    // when submit comment (add comment)
    $('.add-comment-form').submit(e => {
      e.preventDefault();  // prevent button event
      const newCommentData = {  // comment DOM
        site_key: siteKey,
        nickname: $('input[name=nickname]').val(),
        content: $('textarea[name=content]').val()
      }
      // import addComments module
      addComments(apiUrl, siteKey, newCommentData, data => {
        if (!data.ok) {
            alert(data.message)
            return
          }
          $('input[name=nickname]').val('')
          $('textarea[name=content]').val('')
          appendCommentToDOM(commentDOM, newCommentData, true)
      })
    })
  }
  
  // get API
  function getCommentsAPI(siteKey, before, cb) {
      let url = `${apiUrl}/api_comments.php?site_key=${siteKey}`
      if (before) {
        url += '&before=' + before
      }
      $.ajax({
        url,
      }).done(function(data) {
    // console.log(data) -> // discussion
        cb(data)
      });
    }

  // load btn DOM 處理
  function getNewComments() {
    const commentDOM = $('.comments')
    $('.load-more').hide()
    if (isEnd) {
      return
    }
    getComments(apiUrl, siteKey, lastId, data => {
      if (!data.ok) {
        alert(data.message)
        return
      }
      const comments = data.discussions;
        for (let comment of comments) {
          appendCommentToDOM(commentDOM, comment)
        }
        let length = comments.length
        if (length === 0) {
          isEnd = true
          $('.load-more').hide()
        } else {
          lastId = comments[length - 1].id
          $('.comments').append(loadMoreButtonHTML)
        }
        
      })
    }