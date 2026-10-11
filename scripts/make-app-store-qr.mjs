// Regenerates public/app-store-qr.svg, the QR code beside the desktop
// download button. Run once if the App Store URL ever changes:
//   node scripts/make-app-store-qr.mjs
import QRCode from 'qrcode';
import { writeFileSync } from 'fs';

const APP_STORE_URL = 'https://apps.apple.com/app/id6761541267';
const svg = await QRCode.toString(APP_STORE_URL, {
  type: 'svg',
  errorCorrectionLevel: 'M',
  margin: 2,
  color: { dark: '#0e1016', light: '#f0ead6' },
});
writeFileSync(new URL('../public/app-store-qr.svg', import.meta.url), svg);
console.log('wrote public/app-store-qr.svg for', APP_STORE_URL);
