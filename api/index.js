const fetch = require('node-fetch')

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://upland-site.now.sh');

  const request = await fetch('https://api.github.com/orgs/zeit/members')
  const data = await request.json()

  return data
}
