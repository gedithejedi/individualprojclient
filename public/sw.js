if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise(async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()})),s.then(()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]})},s=(s,r)=>{Promise.all(s.map(e)).then(e=>r(1===e.length?e[0]:e))},r={require:Promise.resolve(s)};self.define=(s,i,c)=>{r[s]||(r[s]=Promise.resolve().then(()=>{let r={};const n={uri:location.origin+s.slice(1)};return Promise.all(i.map(s=>{switch(s){case"exports":return r;case"module":return n;default:return e(s)}})).then(e=>{const s=c(...e);return r.default||(r.default=s),r})}))}}define("./sw.js",["./workbox-36268c19"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"0a27a4163254fc8fce870c8cc3a3f94f"},{url:"css/login.css",revision:"5e1bfab73491e1c4b3d5010c82c7ab25"},{url:"css/signup.css",revision:"c73c678489916529c4b963a8d9378b92"},{url:"css/styles.css",revision:"96ff60f3971b31592c33b166d985db6d"},{url:"img/icon.png",revision:"b5af10d6a27eda384363ac9f47fd8574"},{url:"index.html",revision:"4beb8ef521f86e643a9e59bf49a149c9"},{url:"js/app.js",revision:"3189304c65b8da25aa35d118fedeeb67"},{url:"js/camera.js",revision:"8493b71533eccd6224286b324b69c12f"},{url:"js/jquery-3.4.1.min.js",revision:"220afd743d9e9643852e31a135a9f3ae"},{url:"js/login.js",revision:"c713b6a131e90ab9d239b615464cc27b"},{url:"js/signup.js",revision:"69aff84c412558da0ea7ccbffea1da86"},{url:"manifest.json",revision:"da8a0d3b105c121cc94344a91c393e79"},{url:"pages/login.html",revision:"91a7e261f07bc4b2f740b38a4f90bb0b"},{url:"pages/signup.html",revision:"42d827afd2bf50c65516aede64c68672"},{url:"php/imagepost.php",revision:"8d290b07ed3e2b99b158708a4d12b60f"}],{})}));
//# sourceMappingURL=sw.js.map