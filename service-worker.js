/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "00770c5e069963dec4cf7ef041f16757"
  },
  {
    "url": "assets/css/0.styles.bc333d6e.css",
    "revision": "357b5686b1e1f38a4eb48ad9f947bad2"
  },
  {
    "url": "assets/js/10.b7e1801f.js",
    "revision": "89d6746b1a0418ae5772d0fc97edcbb4"
  },
  {
    "url": "assets/js/11.61897d23.js",
    "revision": "a6c3928711fc70488d723066a31f3216"
  },
  {
    "url": "assets/js/12.348700e7.js",
    "revision": "40894c1b59b514d3cfc9115a0176050a"
  },
  {
    "url": "assets/js/13.e33badb6.js",
    "revision": "e2504cf5e69e9de7ac0b7b2be1cdcf93"
  },
  {
    "url": "assets/js/14.30f449b0.js",
    "revision": "1c5d47b83ffdc65ce23b7cf2a6b80a0e"
  },
  {
    "url": "assets/js/15.096ecada.js",
    "revision": "b61a3e9a91100e6122c04f38872f1b83"
  },
  {
    "url": "assets/js/16.e6c6f114.js",
    "revision": "54069cb940fcc211e84674664c19db02"
  },
  {
    "url": "assets/js/17.fef0707a.js",
    "revision": "e0168982ea912e576e57169e59ded40e"
  },
  {
    "url": "assets/js/18.c94d7b0c.js",
    "revision": "65be32e6e1ff649a9554135979786c4e"
  },
  {
    "url": "assets/js/19.b8b5a9a9.js",
    "revision": "a76b0bc9e98790e4d174b79326ea8414"
  },
  {
    "url": "assets/js/2.aedaa2a8.js",
    "revision": "2987e55e3eaf013a722c65cc7cc69815"
  },
  {
    "url": "assets/js/20.65a9e083.js",
    "revision": "085e8d53edc1ecf8b37274b0681d63b2"
  },
  {
    "url": "assets/js/21.6ed8a422.js",
    "revision": "3e5bdfeec7a8f861f789a64686bfad2a"
  },
  {
    "url": "assets/js/22.bb5437cf.js",
    "revision": "eb929a46d32e27a0320c124d90160ffa"
  },
  {
    "url": "assets/js/23.bf6c3912.js",
    "revision": "170fe03f675992f4b8cebbe8b21cd35b"
  },
  {
    "url": "assets/js/24.365f2851.js",
    "revision": "4e4d753d176b24f5acb1ae1c008884d4"
  },
  {
    "url": "assets/js/25.748ca866.js",
    "revision": "a7cde264a81ad9dc4460b5039511626b"
  },
  {
    "url": "assets/js/26.4e15d822.js",
    "revision": "363c3c0d36eb8faa335c276b458069b2"
  },
  {
    "url": "assets/js/27.5a186c5a.js",
    "revision": "1c08dd076050a5fe34c7b9b2409fec75"
  },
  {
    "url": "assets/js/28.2208d12d.js",
    "revision": "fd44b5ef0dff47a493c11f824908ceb8"
  },
  {
    "url": "assets/js/29.7c9ab80b.js",
    "revision": "e5082afca2d12bd56202a2af9e4b4985"
  },
  {
    "url": "assets/js/3.02418124.js",
    "revision": "2b3a90d495836d3d2a4e7e24a642efee"
  },
  {
    "url": "assets/js/30.992b6221.js",
    "revision": "6cb63741187fc6cefefa327a52234af6"
  },
  {
    "url": "assets/js/31.32167a00.js",
    "revision": "2b56b1ebe950c20a6e08c09bafd5a72b"
  },
  {
    "url": "assets/js/32.62dd3b35.js",
    "revision": "7ba8c650606de6a5658139c31062d7c2"
  },
  {
    "url": "assets/js/33.d9660dc6.js",
    "revision": "2d94a2480711a379ed01d3c5aa8f4eca"
  },
  {
    "url": "assets/js/34.83953af8.js",
    "revision": "8a2688357283fd229e234fa63481789d"
  },
  {
    "url": "assets/js/35.8adad967.js",
    "revision": "e950e44c2bd8ff2e592db609b432d006"
  },
  {
    "url": "assets/js/36.5acbc040.js",
    "revision": "64d9868417fec28f3c9b2510886a7093"
  },
  {
    "url": "assets/js/37.2339544f.js",
    "revision": "8ab8e734c0b2e1fbf0eb8496946c8c90"
  },
  {
    "url": "assets/js/38.3313a2ab.js",
    "revision": "e3fe23bc035e476c00682504aa9ec1f6"
  },
  {
    "url": "assets/js/39.7697085c.js",
    "revision": "f75d7dda6535b2e1b86356c4e1059c61"
  },
  {
    "url": "assets/js/4.34efe34a.js",
    "revision": "51ffae19fdb84efdd8efbf55570afd7a"
  },
  {
    "url": "assets/js/40.1cf3a3b7.js",
    "revision": "dfc4dd457f6ea10b49d71b1d30717833"
  },
  {
    "url": "assets/js/41.58fd6900.js",
    "revision": "866996b846ec3004a839919f3f61558e"
  },
  {
    "url": "assets/js/5.632342af.js",
    "revision": "fad659505b46e7d7db73eed864149646"
  },
  {
    "url": "assets/js/6.9cbd111e.js",
    "revision": "a18badf6f7a7ca066ca24958bc6b8776"
  },
  {
    "url": "assets/js/7.6245e7c0.js",
    "revision": "e84851e0b66940cd35e9ae64c75cb912"
  },
  {
    "url": "assets/js/8.b80c8ce9.js",
    "revision": "5fe7ca2af83dc9b052144ab1d024325f"
  },
  {
    "url": "assets/js/9.f41d28de.js",
    "revision": "b33aae3dac51624bf456567a3536c2f5"
  },
  {
    "url": "assets/js/app.fc8548ed.js",
    "revision": "7d54ce7ab91b0ad70bc54aabff9ea719"
  },
  {
    "url": "index.html",
    "revision": "6aa26f899a64c176b972dc87d1a54b2d"
  },
  {
    "url": "post/100-days-of-code/index.html",
    "revision": "856fb8a2351fba1f92e5af7301b442d8"
  },
  {
    "url": "post/2-0-apps/index.html",
    "revision": "59a1fbec715a0d264001fe24f33b3851"
  },
  {
    "url": "post/2011/index.html",
    "revision": "764cdfaccd8191aa53e492176fe8b11b"
  },
  {
    "url": "post/addio-facebook/index.html",
    "revision": "af5217b0fc71155239b79adbc3abd70c"
  },
  {
    "url": "post/addio-nexus/index.html",
    "revision": "b41c50afb636bcec857b28e2320d0c22"
  },
  {
    "url": "post/android-switch/index.html",
    "revision": "723694b40e230f9b6c0fe3b40a4878a0"
  },
  {
    "url": "post/beatles-spotify/index.html",
    "revision": "34f24b96fcd555009ed46dd94ec6c444"
  },
  {
    "url": "post/chrome-over-firefox/index.html",
    "revision": "f55726ce08324f743b32d6868b226d83"
  },
  {
    "url": "post/cinestesia/index.html",
    "revision": "fd7ce3e5dd61b05c606db68d8e1483d1"
  },
  {
    "url": "post/codemotion-2011-talk/index.html",
    "revision": "491f95f965b2dce69ca5e3f5d3df111e"
  },
  {
    "url": "post/codemotion-2013/index.html",
    "revision": "5cecc2583fbdda8e06bc20872706baff"
  },
  {
    "url": "post/dvd-soprammobili/index.html",
    "revision": "d4e59addb316b108620cc52af4764e72"
  },
  {
    "url": "post/estate-autunno-eventi/index.html",
    "revision": "0346f459f800309aaa4ab67bd0ee61b5"
  },
  {
    "url": "post/fuochi-fine-estate/index.html",
    "revision": "1c28c5ca3fc47fc4d384d8accf1901bb"
  },
  {
    "url": "post/google-plus-chiude/index.html",
    "revision": "0b1dc6310b32d8a301d114e67c7705b1"
  },
  {
    "url": "post/halloween-2016/index.html",
    "revision": "185f4c50186304a96774687284a06d37"
  },
  {
    "url": "post/hdd-vs-cloud/index.html",
    "revision": "c9cb97148be1a71502af51370f9ef50e"
  },
  {
    "url": "post/heroquest/index.html",
    "revision": "dd5c4d049d4de552913a4c2af105db92"
  },
  {
    "url": "post/javaday-codemotion/index.html",
    "revision": "3ee9b1ce92ffa59a296095ce89391270"
  },
  {
    "url": "post/macbook-air/readme..html",
    "revision": "ead25c86b741250b29819bb965a003d0"
  },
  {
    "url": "post/machinarium/index.html",
    "revision": "59b36992ad70fe273b05cb9405838664"
  },
  {
    "url": "post/meno-niubbo/index.html",
    "revision": "8cc94867fa78296ea460093f8f288947"
  },
  {
    "url": "post/milano-anniversario/index.html",
    "revision": "83256c2345689218f7bdfe153711eda7"
  },
  {
    "url": "post/nuovamente-niubbo/index.html",
    "revision": "a9ddb72db7ad09789486f5fc1709c51b"
  },
  {
    "url": "post/powered-by-ghost/index.html",
    "revision": "7d7d054ea77eb35fcfa57f171bcb6d3f"
  },
  {
    "url": "post/raspberry-mania/index.html",
    "revision": "03e70696456808e48b1ad156dad86507"
  },
  {
    "url": "post/setup-fotografico/index.html",
    "revision": "612156d9e3f8a235124eedc81f1e3698"
  },
  {
    "url": "post/sperimentando-il-chromecast/index.html",
    "revision": "8c81636e5dca88d56657a3eb0fc1c0e0"
  },
  {
    "url": "post/splinder-chiude/index.html",
    "revision": "a76fa86456114ff3e4e71031f43a47a8"
  },
  {
    "url": "post/start/index.html",
    "revision": "692a9f24d243503aa5ee9ab976438dff"
  },
  {
    "url": "post/tempo-di-2-0/index.html",
    "revision": "97f29a7173522a918e5610252770a1d3"
  },
  {
    "url": "post/the-vanishing-of-ethan-carter/index.html",
    "revision": "362236110b7f1241fead0e970181a836"
  },
  {
    "url": "post/ubuntu-11/index.html",
    "revision": "a84e178c260f8497b64700dafb1f7f02"
  },
  {
    "url": "post/welcome-back/index.html",
    "revision": "6fdc6230d7edf4ef237d04048ad68164"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
