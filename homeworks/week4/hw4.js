const request = require('request');

const CLIENT_ID = '1hq0ejhijx89ngqykc5opyc46k11c7';
const API_ENDPOINT = 'https://api.twitch.tv/kraken';


request({
  method: 'GET',
  url: `${API_ENDPOINT}/games/top`,
  headers: {
    'Client-ID': CLIENT_ID,
    'Accept': 'application/vnd.twitchtv.v5+json'
  }
}, function(err, res, body) {
  if (err) {
    return console.log(err)
  }

  const data = JSON.parse(body)
  const games = data.top
  for(let game of games) {
    console.log(game.viewers + ' ' + game.game.name)
  }
})
