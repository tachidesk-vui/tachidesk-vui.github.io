if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let r={};const d=e=>a(e,f),b={module:{uri:f},exports:r,require:d};s[f]=Promise.all(c.map((e=>b[e]||d(e)))).then((e=>(i(...e),r)))}}define(["./workbox-17c5f633"],(function(e){"use strict";e.setCacheNameDetails({prefix:"tachidesk-vui"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/axios.9d358765.js",revision:"1f7a512dc72ae3e19dea3f6b901cb016"},{url:"assets/bus.76065136.js",revision:"1dd3ba8650dfc544d939524daedc6726"},{url:"assets/categoriesSetringsPage.5c37bb11.js",revision:"2abc2c06a5bdaee062426a6accb7ef78"},{url:"assets/ChapterLayout.9cec6ac4.css",revision:"2192005b8b0a92dec384a2589414644f"},{url:"assets/ChapterLayout.b303a0ba.js",revision:"494fae9297556263fa95c9ea78f0de83"},{url:"assets/chapterPage.33ca7ef0.js",revision:"1d9dfd830f7393baa1bc79ef4427fe24"},{url:"assets/chapterPage.d03bb3d3.css",revision:"2cac42316c74045a3b2d3deecaa90672"},{url:"assets/ClosePopup.456db150.js",revision:"d7cbbc233ee580e0707bb77837f6c4d4"},{url:"assets/dom.b848fa26.js",revision:"b47a7c15385bc438e105c6edc86aaad8"},{url:"assets/downloadsPage.f28f36c5.js",revision:"b3313b362d51c4831c886473b77a756f"},{url:"assets/ErrorNotFound.d49f6152.js",revision:"5e83ed73b8477716e26b0c2bee6fc65e"},{url:"assets/extensionsPage.9105374c.js",revision:"184922d516eb6b1f68fea4362e03c533"},{url:"assets/fastclick.8a4a8267.js",revision:"40efabedb876d409f1732920a78f9ae0"},{url:"assets/Filters.2bbf2446.js",revision:"3cb9e59f23fa66bb0e6d943429ca5ae8"},{url:"assets/Filters.bf07c193.js",revision:"635d26c8ff2ac3988f2e08a514b51e3f"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.83be7b2f.woff2",revision:"393b5d8b3fd798486652801f3ee8c6ea"},{url:"assets/focus-manager.32f8d49a.js",revision:"35bd0ea6212d7e6f10bfeb9df3258bcc"},{url:"assets/format.2a3572e1.js",revision:"6a121eda7f531acef5ccee07df0fba1f"},{url:"assets/getenv.7492fdf7.js",revision:"099129c61c0037baa5e55e2f7d85ece3"},{url:"assets/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcel5euIg.35dca8a7.woff2",revision:"0ba49c096a77b67734434cebcaf2e14d"},{url:"assets/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcY.8e94758c.woff",revision:"0e4321a7c0dda51d72a669ac5892fc39"},{url:"assets/index.7ea39c0a.css",revision:"f084da319cf3a41f62dffff721293ac1"},{url:"assets/index.c2bd2839.js",revision:"adb0eb836b12b86b441a3b248eb41016"},{url:"assets/Intersection.1f34fdb3.js",revision:"785370f1dc666fad5b4e4f61147a2e57"},{url:"assets/isConfigurable.28d131ce.js",revision:"7e394df06c3cdfe6f3d6c5b966a268cf"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/LDItaoyNOAY6Uewc665JcIzCKsKc_M9flwmJ.1c135b15.woff",revision:"9f309e9eab67445742ec147a3e37364f"},{url:"assets/LDItaoyNOAY6Uewc665JcIzCKsKc_M9flwmPq_HTTw.c948f126.woff2",revision:"121a59d703f74d7fc4a1bf64580966ed"},{url:"assets/libraryPage.341e989a.css",revision:"97daa9207a2ee0cbcdafa79e02fb7d4e"},{url:"assets/libraryPage.fb4430c7.js",revision:"c7eeff18567b4e7386a883c6ec0f4e61"},{url:"assets/MainLayout.09e6ad8b.js",revision:"5209aed5d1f07af4bc6df637268cbe6f"},{url:"assets/MainLayout.4263900d.css",revision:"9d8658dcd704a71d4db22679f305aa81"},{url:"assets/mangaCard.7a1c5445.js",revision:"187918622e677be11b056a4ec2837524"},{url:"assets/mangaCard.e09200e1.css",revision:"1ef7f79e11f9ae2c7cbc86dc65a52d7a"},{url:"assets/mangaPage.4e4f4d3e.js",revision:"83d6b777d796d2a88b537658d2b52231"},{url:"assets/mangaPage.81d222e2.css",revision:"1ee25eababd5c0833786fd440d4e8e40"},{url:"assets/models.d7e94ac2.js",revision:"2f97365cff505c688e9e1774181fdbf8"},{url:"assets/option-sizes.42b27277.js",revision:"d825d6b17c8e3d9632ab0e21e9a3ed8b"},{url:"assets/position-engine.fca8e08b.js",revision:"ea8f22600ddc8f976a3ecb6b2567f0ba"},{url:"assets/QBadge.152e419d.js",revision:"553ced22f15756815a0d3b89c43e925f"},{url:"assets/QBtn.e8ad55df.js",revision:"1ad2c767b0b5e22390c755c195a7ec67"},{url:"assets/QCard.2afe773c.js",revision:"418cae6633977ab997294294a9821df1"},{url:"assets/QCardActions.d0040db3.js",revision:"0b73269122a092b5c0006511501d6c1c"},{url:"assets/QCardSection.4a997f26.js",revision:"8b07112e572cbc0de0338b89178bc47a"},{url:"assets/QCheckbox.0ea2cca8.js",revision:"21e2007af96c1bc2ecc443e106af7572"},{url:"assets/QDialog.bdf44055.js",revision:"f6fb0489a13906dcdeda4621b31ca446"},{url:"assets/QExpansionItem.faf0afca.js",revision:"1f4316995c321915614843709fd955e2"},{url:"assets/QIcon.7faa7f0a.js",revision:"c05a82136392b91c3cce43676d850b1e"},{url:"assets/QInfiniteScroll.5798f754.js",revision:"a5f42e7d20cff443243dbe7605629197"},{url:"assets/QInnerLoading.a6c3bac7.js",revision:"e08e97551ce7f9143bbb8b81ac9417f0"},{url:"assets/QInput.70db3598.js",revision:"e7daf4f84e47aa6c5f9bf7580f61257c"},{url:"assets/QIntersection.12303843.js",revision:"9f86824ec5d790de4fbc482780ed2f5c"},{url:"assets/QItem.013bb6b6.js",revision:"bf08063260e854be5d725da1899adadd"},{url:"assets/QItemLabel.ea7a2946.js",revision:"153603f5556f17ff145551c357ab8ad3"},{url:"assets/QLinearProgress.ed86e098.js",revision:"a0fbf82a3e79a963b7c4a1fd654a4c19"},{url:"assets/QList.9427f9fb.js",revision:"5db8e13b9f053d5f59e59539079a9907"},{url:"assets/QMenu.b031b94f.js",revision:"a49112d3e7a9f443e3a3af38ea6d0f4c"},{url:"assets/QPage.c574ddc8.js",revision:"2a9bf225aff8be3208985cef277234f9"},{url:"assets/QPageSticky.a4bbb94f.js",revision:"abffadecb16e34fbdb91d04e3b9c2b2d"},{url:"assets/QRadio.0404efe3.js",revision:"c77960b02abfcad0533c96e4c9b68a7a"},{url:"assets/QResizeObserver.e3dc31a9.js",revision:"b017bae111f7bbe5ef851c3ad839cec8"},{url:"assets/QScrollObserver.a1352121.js",revision:"a6321674886eaa76ab760455445b6411"},{url:"assets/QSelect.11d90b15.js",revision:"c8e9656f8b8cb6caa8be9dbeb901ae29"},{url:"assets/QSeparator.1c5855c3.js",revision:"e2a8576ad45d3c21e234694606d64ca9"},{url:"assets/QSpinner.b1186f68.js",revision:"2b3580a786b9d44bf0d44b9108fa2403"},{url:"assets/QSpinnerDots.8a60c591.js",revision:"3dcd77fa94511ac192adb2ee2730d6d9"},{url:"assets/QTab.950b7493.js",revision:"df448314d9b9b54fd87faa7c4cf9b2b8"},{url:"assets/QTabs.1c91eb27.js",revision:"d7cfd0b07faf5e510217618ab0eb25a0"},{url:"assets/QToggle.f84f21e4.js",revision:"cde7ebaa57ce879c1744b2d5ca730575"},{url:"assets/QTooltip.5c11f4e2.js",revision:"2ceb111580353822a29a8e267b54d630"},{url:"assets/readerSettings.47c6e278.js",revision:"287ba926e358850497c4963941656006"},{url:"assets/Ripple.28598b4a.js",revision:"c63c70866cf7ccdcf57cbb92dc33689b"},{url:"assets/rtl.b51694b1.js",revision:"528db8ee9db59534c84c8fe3314e1c7c"},{url:"assets/scroll.c22aa5f6.js",revision:"98de77c7398fa397d24e2b2a4a54ff1f"},{url:"assets/SearchBar.31d71a67.js",revision:"cb150507b0efd23485822de0324fa18f"},{url:"assets/selection.dcf37db9.js",revision:"a57c929476ecd1e0ced196fbfc154c4e"},{url:"assets/settingsPage.685a5be1.js",revision:"578184a0f1e5dcfe3d53bb81de33dc19"},{url:"assets/sourceConfigPage.ff213877.js",revision:"768fc69aa16f3225b32b975b9e234e25"},{url:"assets/SourceSearchPage.137c4425.js",revision:"eb9868a465b576577ab1cf2ce6ce8893"},{url:"assets/SourceSearchPage.782c8734.css",revision:"366cb16cf0ecb084588ecf321daec1ae"},{url:"assets/sourcesPage.82be238e.js",revision:"556a658b9a510be192399fc1df21c4da"},{url:"assets/SourceTopBar.1e36448a.js",revision:"8669ae7f761c3745eed2c64956e8a7d2"},{url:"assets/SSearchAll.f0a03ae3.js",revision:"0556a4b9edf98afce7315299a7e3d653"},{url:"assets/StoreDefaults.6993c29a.js",revision:"8de18f934c28795975b70fd468669775"},{url:"assets/StoreStuff.bf379ea5.js",revision:"e5535fe5a8382f72c92ed64b690b48a6"},{url:"assets/TopBar.0b84d600.js",revision:"c7721878e0200fb5a9ce33d9d08692cc"},{url:"assets/TopBar.62a51a3f.js",revision:"a5f7ca2e41571b485ef7aa82060b3f17"},{url:"assets/TopBar.d91326dc.js",revision:"8615f776d4752fb59ebb27aa6e90c102"},{url:"assets/TopBar.de0e82a0.js",revision:"c1e741c3568bec5479cafaf72f24497c"},{url:"assets/topbar.ec9dd0f0.js",revision:"4a241bab8cfc8504a4bcdc5b5bde8901"},{url:"assets/TouchPan.c95c8ff0.js",revision:"59c59cbea01cef02eed90082e2aff53c"},{url:"assets/uid.42677368.js",revision:"01add560b365ffb4147667d832fc2267"},{url:"assets/updatesPage.2d807880.js",revision:"b1b33a2957a2297a491fdd6af7f0850a"},{url:"assets/updatesPage.d3363f68.css",revision:"579a9ecbd0b16554e343048905cc0864"},{url:"assets/use-checkbox.bd7567cd.js",revision:"e7aafaee0070b07447a10f0f1e00276d"},{url:"assets/use-dark.da6555f7.js",revision:"006060b97842029020bed2a0b96ab7b9"},{url:"assets/use-form.7d4daf7b.js",revision:"4bda41be96e61b0e589d7369f3dd7a9d"},{url:"assets/use-key-composition.ef971570.js",revision:"7f14746c81159e62df198013b34b17d9"},{url:"assets/use-meta.371fe54e.js",revision:"2310bf46e7abefc9b5151ff5fcbe9df1"},{url:"assets/use-quasar.1d13786b.js",revision:"d20536893d039001aaf26241e4dcac36"},{url:"assets/use-transition.54d11fde.js",revision:"b1193b60e15846b370df895b7ec3f799"},{url:"assets/use-virtual-scroll.4061dd6f.js",revision:"32e8e5ee4dbd1b9dcd720e7248fd4276"},{url:"assets/useDlSock.776025c4.js",revision:"7ffded08005068c5f35680fd4da25edf"},{url:"assets/usefull.c307d8f6.js",revision:"a77d38f1453dba79baf3b9b4b90cc478"},{url:"favicon.ico",revision:"9f91d3281ccbbc7089d002f977ed674f"},{url:"icons/apple-icon-120x120.png",revision:"f3678980d0a40b0a51f150433483d9f2"},{url:"icons/apple-icon-152x152.png",revision:"b698f4bead3c0cc5cc71517940870fe3"},{url:"icons/apple-icon-167x167.png",revision:"7daf5f276e9cb8dff7ddd9491f650ee5"},{url:"icons/apple-icon-180x180.png",revision:"cd6315782dfce2c2e90aa5b74c92d8b9"},{url:"icons/apple-launch-1125x2436.png",revision:"15318c46597358602183cd6a0eb50d35"},{url:"icons/apple-launch-1170x2532.png",revision:"3c53feab4f1aab87c8a6cd619643e5ef"},{url:"icons/apple-launch-1242x2208.png",revision:"dfde6a8d1afa4b5ac3e536483e678e8a"},{url:"icons/apple-launch-1242x2688.png",revision:"bff9dd084f25c922a115c37b098c5344"},{url:"icons/apple-launch-1284x2778.png",revision:"9b92c668e244ce102739779b9301369f"},{url:"icons/apple-launch-1536x2048.png",revision:"a802fac130b7295e708502a97840aa23"},{url:"icons/apple-launch-1620x2160.png",revision:"c90899c8e780fea1ed1e572359d6606d"},{url:"icons/apple-launch-1668x2224.png",revision:"7f720f47d98721597db7175af7afa355"},{url:"icons/apple-launch-1668x2388.png",revision:"7808be24de1a1463dbe9ca81b89f0658"},{url:"icons/apple-launch-2048x2732.png",revision:"e8a1bff9f643c7ec3514aade49d5d7c6"},{url:"icons/apple-launch-750x1334.png",revision:"64c7cc39fca5d719d3b5cf7453345d8b"},{url:"icons/apple-launch-828x1792.png",revision:"4ac1858296d8fb5883b24f4996f40483"},{url:"icons/favicon-128x128.png",revision:"72038f93dbf96b94c38398db130cee45"},{url:"icons/favicon-16x16.png",revision:"51047803e6f4793adc8266435b051a9d"},{url:"icons/favicon-32x32.png",revision:"25b8a2418df1057e0fd72553509303ea"},{url:"icons/favicon-96x96.png",revision:"619d9246e71164d08b23a03cb5a47931"},{url:"icons/icon-128x128.png",revision:"72038f93dbf96b94c38398db130cee45"},{url:"icons/icon-192x192.png",revision:"38458814821ea3f8efbc15851dcd4862"},{url:"icons/icon-256x256.png",revision:"b23c3433a6fb6c87af28e4567fcb5788"},{url:"icons/icon-384x384.png",revision:"0df02c8763df7c7a8fc9b84d5f94cad1"},{url:"icons/icon-512x512.png",revision:"51dba6800dad0e8dee05e3fe26892b25"},{url:"icons/maskable_icon_x512.png",revision:"6e32deb7f81bd684dd8e35935c60becd"},{url:"icons/ms-icon-144x144.png",revision:"458c2013a1f1998b7fa1cb5294e7d9fa"},{url:"icons/safari-pinned-tab.svg",revision:"8c313467a0b241f3ed52497dec42cfc3"},{url:"icons/tachidesk-vui.png",revision:"72f3373c7788d944a2142bc1a35fc787"},{url:"icons/tachidesk-vui.svg",revision:"21bbd6a121735a4dc4e25478bfaf4268"},{url:"index.html",revision:"0d09e83e4c8a62d66f852aa1c7508c58"},{url:"manifest.json",revision:"5101f80692faa83b9d397d8b0dd0daab"},{url:"old-favicon.ico",revision:"f4facfeaed834544d622544acfbb7722"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
