// The App Store listing every download button and the QR code point at.
// ct=site credits these installs to the site in App Store Connect Campaigns.
// If it changes, update here and rerun scripts/make-app-store-qr.mjs.
export const APP_STORE_URL = 'https://apps.apple.com/app/apple-store/id6761541267?pt=128646092&ct=site&mt=8';

// The same listing with another campaign token, for one account or link.
export const appStoreUrlFor = (ct: string) =>
  `https://apps.apple.com/app/apple-store/id6761541267?pt=128646092&ct=${ct}&mt=8`;

// Bio links: aureliusagent.com/go/<slug> counts the tap, then opens the App Store with
// that bio's campaign token. Tokens follow growth-engine/playbooks/aurelius-measurement.md.
export const GO_LINKS: Record<string, string> = {
  journal: "ig_bio", // @aurelius.journal Instagram
  "journal-tt": "tt_bio", // Aurelius TikTok
  "journal-yt": "yt_bio", // Aurelius YouTube channel links
  emperor: "ig_persona", // @retired.emperor Instagram
  "emperor-tt": "tt_persona", // @retired.emperor7 TikTok
  stoic: "stoic_ig", // Stoic Operator Instagram (Norway)
  "stoic-tt": "stoic_tt", // Stoic Operator TikTok (US)
};

// The plain listing, for structured data, where a tracking link does not belong.
export const APP_STORE_LISTING_URL = 'https://apps.apple.com/app/id6761541267';

// GoatCounter site that counts visits and App Store clicks (public/analytics.js).
// public/emperor and public/stoic hardcode the same address.
export const GOATCOUNTER_URL = "https://aureliusagent.goatcounter.com/count";

// The App Store id, for the Safari smart app banner.
export const APP_STORE_ID = '6761541267';

// Live App Store prices in USD. The visible FAQ and the JSON-LD both read these,
// so a price change is one edit here (plus public/llms.txt).
export const PRICING = {
  trialDays: 7,
  annual: '89.99',
  monthly: '14.99',
  currency: 'USD',
};

// Same addresses the app's About and Settings screens use.
export const SUPPORT_EMAIL = 'support.aurelius@gmail.com';
export const PRIVACY_URL = 'https://aurelius-api.sparboesystems.com/privacy';
export const TERMS_URL = 'https://aurelius-api.sparboesystems.com/terms';
