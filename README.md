# upland

Upland is a web site and API using [Micro](https://github.com/zeit/micro) that displays landscape photos from [Reddit](https://www.reddit.com/r/EarthPorn/) and deployed on [Now](https://zeit.co/now).

### Background

This project is part of [52projects](https://donny.github.io/52projects/) and the new stuff that I learn through this project: [Micro](https://github.com/zeit/micro) and [Now](https://zeit.co/now).

### Project

Upland fetches the landscape photos from the trending page of Reddit [/r/EarthPorn](https://www.reddit.com/r/EarthPorn/). Upland displays the full resolution photos one by one on the page. The screenshot of Upland can be found below:

![Screenshot](https://raw.githubusercontent.com/donny/upland/master/screenshot1.png)

### Implementation

[Now](https://zeit.co/now) from [Zeit](https://zeit.co) provides realtime global deployments. It allows us to take a directory that contains a `package.json` file or static files; and deploys it with ease and speed. In practical terms, Now provides a simpler hosting platform (compared to [Heroku](https://www.heroku.com)) for JavaScript powered websites and applications.

Upland consists of 2 packages: [`api`](https://github.com/donny/upland/blob/master/api) (back-end) that fetches a JSON data structure from Reddit and parses it; and [`site`](https://github.com/donny/upland/blob/master/site) (front-end) that fetches the processed JSON, gets the image URLs, and display them. We use [Bulma](http://bulma.io) as the CSS framework for the site.

The main `index.js` of `api` is very simple and it is shown below:

```javascript
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
```

And the main component of `index.html` of `site` is shown below:

```html
<table id="results"></table>

<script type="text/javascript">
    fetch('https://upland-api.now.sh')
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            data.forEach(image => {
                var table = document.getElementById('results')
                var row = table.insertRow(0)
                var cell = row.insertCell(0)
                cell.innerHTML = `<img src=${JSON.stringify(image)}/>`
            })
        })
        .catch(function(e) {
            console.error(e);
        });
</script>
```

Upland is deployed on Now and each deployment results in a unique hostname. Thus, we need to use [aliases](https://zeit.co/docs/features/aliases) to get more stable hostnames. The deployment steps are shown below:

```shell
cd api
now deploy
now alias [deployed host] upland-api
cd ../site
now deploy
now alias [deployed host] upland-site
```

And the screenshot below shows the aliases:

![Screenshot](https://raw.githubusercontent.com/donny/upland/master/screenshot2.png)

### Conclusion

...
