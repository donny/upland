const fetch = require('node-fetch')

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://upland-site.now.sh');

  const request = await fetch('https://www.reddit.com/r/earthporn.json')
  const json = await request.json()
  const data = json.data.children

  var results = []

  data.forEach(child => {
    if (child.data.thumbnail !== 'default') {
      results.push(child.data.url)
    }
  })

  return results
}
