# upland

Upland is a web site and API using [Micro](https://github.com/zeit/micro) that displays landscape photos from [Reddit](https://www.reddit.com/r/EarthPorn/) and deployed on [Now](https://zeit.co/now).

### Background

This project is part of [52projects](https://donny.github.io/52projects/) and the new stuff that I learn through this project: [Micro](https://github.com/zeit/micro) and [Now](https://zeit.co/now).

### Project

Upland fetches the landscape photos from the trending page of Reddit [/r/EarthPorn](https://www.reddit.com/r/EarthPorn/). Upland displays the full resolution photos one by one on a page. The screenshot of Upland can be found below:

![Screenshot](https://raw.githubusercontent.com/donny/upland/master/screenshot1.png)

### Implementation

...

```shell
cd api
now deploy
now alias [deployed host] upland-api
cd ../site
now deploy
now alias [deployed host] upland-site
```

### Conclusion

...
