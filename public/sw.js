if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,a,i)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const r={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return n;case"module":return r;default:return e(s)}}))).then((e=>{const s=i(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-8778d57b"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/aba25bb8e4547c5e35f4fb8b89b3ddc642ddabb1.58fabb4f123b0e5331be.js",revision:"lOY7bx178O1vYuw-vXfah"},{url:"/_next/static/chunks/commons.9528123feb626448eb3f.js",revision:"lOY7bx178O1vYuw-vXfah"},{url:"/_next/static/chunks/eebb2e0d36248e4baad0b21fec361893a5837676.5f88c1b43ff307b4e60a.js",revision:"lOY7bx178O1vYuw-vXfah"},{url:"/_next/static/chunks/framework.37f4a736348214b3ca94.js",revision:"lOY7bx178O1vYuw-vXfah"},{url:"/_next/static/chunks/main-c88a1621930bd9f96a9e.js",revision:"lOY7bx178O1vYuw-vXfah"},{url:"/_next/static/chunks/pages/_app-761008dfd312a33f8bbc.js",revision:"lOY7bx178O1vYuw-vXfah"},{url:"/_next/static/chunks/pages/_error-b27b0bebfa66d37ab470.js",revision:"lOY7bx178O1vYuw-vXfah"},{url:"/_next/static/chunks/pages/about-1c517b7050b27afaf69f.js",revision:"lOY7bx178O1vYuw-vXfah"},{url:"/_next/static/chunks/pages/index-44931c93e5fff9b92695.js",revision:"lOY7bx178O1vYuw-vXfah"},{url:"/_next/static/chunks/pages/users-e9c7fe8712e42688c654.js",revision:"lOY7bx178O1vYuw-vXfah"},{url:"/_next/static/chunks/pages/users/%5Bid%5D-89c6518008a5c37bb2e9.js",revision:"lOY7bx178O1vYuw-vXfah"},{url:"/_next/static/chunks/polyfills-483e9e96b8aec87b069a.js",revision:"lOY7bx178O1vYuw-vXfah"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"lOY7bx178O1vYuw-vXfah"},{url:"/_next/static/lOY7bx178O1vYuw-vXfah/_buildManifest.js",revision:"lOY7bx178O1vYuw-vXfah"},{url:"/_next/static/lOY7bx178O1vYuw-vXfah/_ssgManifest.js",revision:"lOY7bx178O1vYuw-vXfah"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/icons/icon-144x144.png",revision:"f9648a5dd4df9ea551594acf50b921eb"},{url:"/icons/icon-192x192-maskable.png",revision:"3cdda789011bebb6ea3d50e3091e3374"},{url:"/icons/icon-192x192.png",revision:"3cdda789011bebb6ea3d50e3091e3374"},{url:"/icons/icon-256x256.png",revision:"2774d63e098212ce86333a9b64c64942"},{url:"/icons/icon-384x384.png",revision:"17dfc0003a7662030af0af9ab67e4e66"},{url:"/icons/icon-48x48.png",revision:"6bcdf27f1870042a5078b9e31e03dd10"},{url:"/icons/icon-512x512-maskable.png",revision:"11ebdd8f4ea3bc2f0ba4fb8a1097cb9d"},{url:"/icons/icon-512x512.png",revision:"11ebdd8f4ea3bc2f0ba4fb8a1097cb9d"},{url:"/icons/icon-72x72.png",revision:"25aeeff39aead4186b72f1e0321aa2b9"},{url:"/icons/icon-96x96.png",revision:"610cdf26b6430649c6a9f1952cbedbda"},{url:"/manifest.webmanifest",revision:"33868a5b6070f51aef84c6ab98964ab6"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));