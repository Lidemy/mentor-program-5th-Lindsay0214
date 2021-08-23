const URL = "http://localhost:3000/prizes"

const prizeTitle = document.querySelector('.prize__title')
const prizeImage = document.querySelector('.prize__img')

function sendRequest(requestUrl, prize) {
    return fetch(requestUrl, {
      method: 'GET'
    })
    .catch( err => {
      console.log(err)
    })
  }
  
  if (window.location.href === URL) {
    document.querySelector('.prize__btn')
    .addEventListener("click", event => {
      prizeTitle.classList.add('hide')
      prizeImage.classList.add('hide')
      prizeTitle.classList.remove('show')
      prizeImage.classList.remove('show')
      sendRequest(`${URL}/get-lucky`, null)
      .then( response => {
        return response.text()
      })
      .then( text =>{
        showLinPrize(text)
      }).catch( err => {
        console.log(err)
        return
      })
    })
  }
  
  function showLinPrize(responseData) {
    let json
    try {
      json = JSON.parse(responseData)
    } catch (err) {
      console.log(err)
      return
    }
    prizeTitle.innerText = json.title
    prizeImage.src = json.image
    setTimeout( () => {
      prizeTitle.classList.add('show')
      prizeImage.classList.add('show')
      prizeTitle.classList.remove('hide')
      prizeImage.classList.remove('hide')
    }, 1000)
  }
  
  if (window.location.href === URL) {
    sendRequest(`${URL}/prize-list`, null)
    .then( response => {
      return response.text()
    })
    .then( text => {
      console.log(text)
      showPrizes(text)
    }).catch( err => {
      console.log(err)
      return
    })
  }
  
  function showPrizes(responseData) {
    let json
    try {
      json = JSON.parse(responseData)
    } catch (err) {
      console.log(err)
    return
    }
    for (let i = 0; i < json.length; i++){
      appendPrize(json[i])
    }
  }
  
  function appendPrize(prize){
    const prizeItem = 
      `<tr class="prize__item">
        <td class="prize__title">
          ${prize.title}
        </td>
        <td class="prize__img">
          ${prize.image}
        </td>
        <td class="prize__shot">
          ${prize.shot}
        </td>
        <td class="prize__edit">
          <a href="/edit-prize/${prize.id}">
            edit
          </a>
        </td>
        <td class="prize__delete">
          <a href="/handle-delete-prize/${prize.id}">
            delete
          </a>
        </td>
      </tr>`
    document.querySelector('.prize__list').innerHTML += prizeItem
  }