# What is this?

It's a really simple ServiceWorker exercise. No build systems, (almost) no dependencies. It's designed to be an interactive introduction to the kinds of things you can do with ServiceWorker.

## 1. Get it running locally

Either clone it via git, or just [download the zip file](https://github.com/WebTorill/Exercise101).

If you already run a web server locally, put the files there. Or you can run a web server from the terminal for the current directory by installing [node.js](http://nodejs.org/) and running:

```sh
npm install
npm start
```

Visit the site in Chrome (`http://localhost:8080` if you used the script above). Open the dev tools and look at the console. Once you refresh the page, it'll be under the ServiceWorker's control.

**You can reset the SW & caches at any point** by navigating to `reset/`. That will unregister the ServiceWorker & clear all the caches.

## 2. Go offline

Disable your internet connection & shut down your local web server.

If you refresh the page, it still works, even through you're offline! Well, we're missing that final JavaScript-added paragraph, but we'll fix that shortly.

Take a look at the code in `index.html` and `sw.js`, hopefully the comments make it easy to follow.
