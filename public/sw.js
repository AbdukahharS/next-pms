if (!self.define) {
  let e,
    s = {}
  const t = (t, c) => (
    (t = new URL(t + '.js', c).href),
    s[t] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;(e.src = t), (e.onload = s), document.head.appendChild(e)
        } else (e = t), importScripts(t), s()
      }).then(() => {
        let e = s[t]
        if (!e) throw new Error(`Module ${t} didn’t register its module`)
        return e
      })
  )
  self.define = (c, n) => {
    const i =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href
    if (s[i]) return
    let a = {}
    const r = (e) => t(e, i),
      o = { module: { uri: i }, exports: a, require: r }
    s[i] = Promise.all(c.map((e) => o[e] || r(e))).then((e) => (n(...e), a))
  }
}
define(['./workbox-4754cb34'], function (e) {
  'use strict'
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/app-build-manifest.json',
          revision: 'feca440da999b0b34a06a6d717d4fc33',
        },
        {
          url: '/_next/static/O7305DOycHdt6NPzsLYBM/_buildManifest.js',
          revision: '2ec694eb52ae4f523f265a46bae4d768',
        },
        {
          url: '/_next/static/O7305DOycHdt6NPzsLYBM/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/_next/static/chunks/15-db30da7732c7a90e.js',
          revision: 'O7305DOycHdt6NPzsLYBM',
        },
        {
          url: '/_next/static/chunks/183-c642c6ad02b6d811.js',
          revision: 'O7305DOycHdt6NPzsLYBM',
        },
        {
          url: '/_next/static/chunks/23-e4a93c30ae6a0b95.js',
          revision: 'O7305DOycHdt6NPzsLYBM',
        },
        {
          url: '/_next/static/chunks/340-fdb9069dd4cb762c.js',
          revision: 'O7305DOycHdt6NPzsLYBM',
        },
        {
          url: '/_next/static/chunks/53-71641e00b3966aee.js',
          revision: 'O7305DOycHdt6NPzsLYBM',
        },
        {
          url: '/_next/static/chunks/582-3ebb4680a62bd8ac.js',
          revision: 'O7305DOycHdt6NPzsLYBM',
        },
        {
          url: '/_next/static/chunks/688-7230cb5006e8d657.js',
          revision: 'O7305DOycHdt6NPzsLYBM',
        },
        {
          url: '/_next/static/chunks/819-507e71598255ce99.js',
          revision: 'O7305DOycHdt6NPzsLYBM',
        },
        {
          url: '/_next/static/chunks/868-2be6b95740c0cfca.js',
          revision: 'O7305DOycHdt6NPzsLYBM',
        },
        {
          url: '/_next/static/chunks/986-bcca5652ca342600.js',
          revision: 'O7305DOycHdt6NPzsLYBM',
        },
        {
          url: '/_next/static/chunks/app/(routes)/customers/page-394c017548f442b6.js',
          revision: 'O7305DOycHdt6NPzsLYBM',
        },
        {
          url: '/_next/static/chunks/app/(routes)/history/page-421d2af6c50dc78b.js',
          revision: 'O7305DOycHdt6NPzsLYBM',
        },
        {
          url: '/_next/static/chunks/app/(routes)/intake/page-dddce3e3913c5630.js',
          revision: 'O7305DOycHdt6NPzsLYBM',
        },
        {
          url: '/_next/static/chunks/app/(routes)/layout-c3a22e0b1a43e2e1.js',
          revision: 'O7305DOycHdt6NPzsLYBM',
        },
        {
          url: '/_next/static/chunks/app/(routes)/sale/page-867a11af8e964761.js',
          revision: 'O7305DOycHdt6NPzsLYBM',
        },
        {
          url: '/_next/static/chunks/app/(routes)/suppliers/page-120358271c85759f.js',
          revision: 'O7305DOycHdt6NPzsLYBM',
        },
        {
          url: '/_next/static/chunks/app/_not-found/page-30cb459c7e8cfeeb.js',
          revision: 'O7305DOycHdt6NPzsLYBM',
        },
        {
          url: '/_next/static/chunks/app/layout-914a2b3856a48d86.js',
          revision: 'O7305DOycHdt6NPzsLYBM',
        },
        {
          url: '/_next/static/chunks/app/login/page-a843568061d27e22.js',
          revision: 'O7305DOycHdt6NPzsLYBM',
        },
        {
          url: '/_next/static/chunks/app/page-2eff44f8b4fac3e3.js',
          revision: 'O7305DOycHdt6NPzsLYBM',
        },
        {
          url: '/_next/static/chunks/fd9d1056-7905c8f4dd0dc04e.js',
          revision: 'O7305DOycHdt6NPzsLYBM',
        },
        {
          url: '/_next/static/chunks/framework-f66176bb897dc684.js',
          revision: 'O7305DOycHdt6NPzsLYBM',
        },
        {
          url: '/_next/static/chunks/main-5c9c5cde2c6f8054.js',
          revision: 'O7305DOycHdt6NPzsLYBM',
        },
        {
          url: '/_next/static/chunks/main-app-0c70f0107abab67d.js',
          revision: 'O7305DOycHdt6NPzsLYBM',
        },
        {
          url: '/_next/static/chunks/pages/_app-6a626577ffa902a4.js',
          revision: 'O7305DOycHdt6NPzsLYBM',
        },
        {
          url: '/_next/static/chunks/pages/_error-1be831200e60c5c0.js',
          revision: 'O7305DOycHdt6NPzsLYBM',
        },
        {
          url: '/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js',
          revision: '79330112775102f91e1010318bae2bd3',
        },
        {
          url: '/_next/static/chunks/webpack-834b2c8783afa1b3.js',
          revision: 'O7305DOycHdt6NPzsLYBM',
        },
        {
          url: '/_next/static/css/f244558c919b7bec.css',
          revision: 'f244558c919b7bec',
        },
        {
          url: '/_next/static/media/0610ebff456d6cfc-s.woff2',
          revision: '8786f06e95694337521729d147b3f669',
        },
        {
          url: '/_next/static/media/21ed5661b47f7f6d-s.p.woff2',
          revision: '91c3bc1f55db641843550a62e39f0031',
        },
        {
          url: '/_next/static/media/8a9e72331fecd08b-s.woff2',
          revision: 'f8a4d4cec8704b696ec245377c0e188e',
        },
        {
          url: '/_next/static/media/bde16c1724335d95-s.woff2',
          revision: 'c56527d8c69315a82039a810338fd378',
        },
        {
          url: '/_next/static/media/e3b8d441242e07fb-s.woff2',
          revision: '8699475078b0c1b86dbe7ad907bb4e81',
        },
        {
          url: '/icons/icon-128x128.png',
          revision: 'c058b0ec90c8ec628ad3064aa3c45963',
        },
        {
          url: '/icons/icon-192x192.png',
          revision: 'b7f2be0d6e46781c1b4023483382c60e',
        },
        {
          url: '/icons/icon-512x512.png',
          revision: 'cde9001ed8dca21f4280a8d8681d4adf',
        },
        {
          url: '/icons/icon.svg',
          revision: '0120fce4cc76729a0bf7ecbf89934d59',
        },
        { url: '/manifest.json', revision: '5ca7fc634149e0d850054ca15308bb00' },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: t,
              state: c,
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        const s = e.pathname
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        return !e.pathname.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      'GET'
    )
})
