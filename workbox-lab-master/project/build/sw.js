/*
Copyright 2016 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
importScripts('workbox-sw.dev.v2.0.0.js');

const workboxSW = new WorkboxSW();
workboxSW.precache([
  {
    "url": "style/main.css",
    "revision": "6cbee24d7357a4220ab7233a7f4b9286"
  },
  {
    "url": "index.html",
    "revision": "96df4acedcfc12eb3ccb026d4661f7fd"
  },
  {
    "url": "js/animation.js",
    "revision": "8db90fe08bebf6a8faac56fae7fa9232"
  },
  {
    "url": "images/home/business.jpg",
    "revision": "9c3ec8d2a8a188bab9ddc212a64a0c1e"
  },
  {
    "url": "images/icon/icon.svg",
    "revision": "0d077eac3b5028d3543f7e35908d6ecb"
  },
  {
    "url": "/",
    "revision": "884778272254d40900e66d5cc76818f6"
  }
]);
workboxSW.router.registerRoute(/(.*)articles(.*)\.(?:png|gif|jpg)/,
workboxSW.strategies.cacheFirst({
  cacheName: 'images-cache',
  cacheExpiration: {
    maxEntries: 50
  },
  cacheableResponse: {statuses: [0, 200]}
})
);