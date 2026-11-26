// Tells Bing (and the other IndexNow engines) which pages changed, so they recrawl
// them now instead of whenever they get round to it. ChatGPT search leans on Bing.
//
// Run after a deploy is live:  node scripts/indexnow.mjs            (every URL in the live sitemap)
//                              node scripts/indexnow.mjs /guides/x/  (just these paths)
//
// The key file public/<KEY>.txt must be live first, or the engines reject the ping.
const KEY = 'c530c57f04c2cc957800f97ae92c18e0';
const HOST = 'aureliusagent.com';
const BASE = `https://${HOST}`;

const paths = process.argv.slice(2);
let urlList;
if (paths.length) {
  urlList = paths.map((p) => new URL(p, BASE).href);
} else {
  const xml = await (await fetch(`${BASE}/sitemap-0.xml`)).text();
  urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}
if (!urlList.length) throw new Error('No URLs to submit');

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `${BASE}/${KEY}.txt`, urlList }),
});
// 200 or 202 means accepted. 403 means the key file is not live yet. 422 means a URL is off-host.
console.log(`IndexNow ${res.status} ${res.statusText}: ${urlList.length} URLs`);
if (res.status !== 200 && res.status !== 202) process.exit(1);
