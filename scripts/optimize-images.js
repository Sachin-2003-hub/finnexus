const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimize() {
  const publicDir = path.join(__dirname, '..', 'public');
  // optimize banner1.png -> banner1.opt.png (1200px wide)
  const bannerSrc = path.join(publicDir, 'banner1.png');
  const bannerOut = path.join(publicDir, 'banner1.opt.png');

  if (fs.existsSync(bannerSrc)) {
    await sharp(bannerSrc)
      .resize({ width: 1200 })
      .png({ quality: 80 })
      .toFile(bannerOut);
    console.log('Written', bannerOut);
  } else {
    console.log('banner1.png not found, skipping banner optimization');
  }

  // optimize avatars
  const avatars = ['sarah.jpg','michael.jpg','emily.jpg','aarav.jpg','neha.jpg','rajiv.jpg'];
  for (const a of avatars) {
    const src = path.join(publicDir, 'avatars', a);
    const out = path.join(publicDir, 'avatars', a.replace(/\.jpg$/, '.opt.jpg'));
    if (fs.existsSync(src)) {
      await sharp(src)
        .resize({ width: 128 })
        .jpeg({ quality: 70 })
        .toFile(out);
      console.log('Written', out);
    } else {
      console.log('Missing', src);
    }
  }
}

optimize().catch(err => {
  console.error(err);
  process.exit(1);
});
