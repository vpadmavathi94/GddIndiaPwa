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
workboxSW.precache([]);
workboxSW.router.registerRoute(/(.*)articles(.*)\.(?:png|gif|jpg)/,
workboxSW.strategies.cacheFirst({
    //can add cacheFirst(for static resources, networkFirst, staleWhileRevalidate(UI<=chache<=in background=>server)
    //use regex for registerRoute: eg: new RedExp('\.png$')
  cacheName: 'images-cache',
  cacheExpiration: {
    maxEntries: 50 //fifo cache system with max of 50 entries
    //also possible for 3rd party tools
    //keep the website in route. example below:
    //workboxSW.router.registerRoute('https://fonts.googleapis.com/(*)',
    //lab link https://goo.gly/yS5HXz
  },
  cacheableResponse: {statuses: [0, 200]}
})
);