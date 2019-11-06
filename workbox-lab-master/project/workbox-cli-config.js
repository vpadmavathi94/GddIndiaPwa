// module.exports = {
//   "globDirectory": "build\\",
//   "globPatterns": [
//     "**/*.{jpg,svg,html,js,css}"
//   ],
//   "swSrc": "src/sw.js",
//   "swDest": "build/sw.js",
//   "globIgnores": [
//     "..\\workbox-cli-config.js"
//   ]
// };

module.exports = {
  "globDirectory": "build/",
  "globPatterns": [
    "**/*.css",
    "index.html",
    "js/animation.js",
    "images/home/*.jpg",
    "images/icon/*.svg"
  ],
  "swSrc": "src/sw.js",
  "swDest": "build/sw.js",
  "globIgnores": [
    "../workbox-cli-config.js"
  ],
  "templatedUrls": {
    "/": ["index.html"]
  }
};
