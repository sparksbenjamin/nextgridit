import fs from "node:fs";
import { geoContains } from "d3-geo";
import { fileURLToPath } from "node:url";
const root = fileURLToPath(new URL("../", import.meta.url));
if (!process.argv[2])
  throw new Error(
    "Usage: node scripts/generate-globe.mjs /path/to/ne_110m_land.geojson",
  );
const land = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));
const points = [];
for (let i = 0; i < 11000; i++) {
  const y = 1 - (2 * (i + 0.5)) / 11000;
  const latitude = (Math.asin(y) * 180) / Math.PI;
  const longitude = ((i * 137.507764) % 360) - 180;
  if (geoContains(land, [longitude, latitude])) {
    const phi = (longitude * Math.PI) / 180,
      c = Math.sqrt(1 - y * y);
    points.push([
      +(c * Math.sin(phi)).toFixed(4),
      +y.toFixed(4),
      +(c * Math.cos(phi)).toFixed(4),
    ]);
  }
}
fs.writeFileSync(root + "/src/lib/globe-points.json", JSON.stringify(points));
const rotation = (55 * Math.PI) / 180,
  tilt = (18 * Math.PI) / 180;
let dots = "";
for (const [x, y, z] of points) {
  const a = x * Math.cos(rotation) + z * Math.sin(rotation),
    b = z * Math.cos(rotation) - x * Math.sin(rotation);
  const yy = y * Math.cos(tilt) - b * Math.sin(tilt),
    zz = y * Math.sin(tilt) + b * Math.cos(tilt);
  if (zz > 0)
    dots += `<circle cx="${(400 + a * 350).toFixed(1)}" cy="${(400 - yy * 350).toFixed(1)}" r="1.8" opacity="${(0.25 + zz * 0.65).toFixed(2)}"/>`;
}
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800"><defs><radialGradient id="o"><stop stop-color="#183e35"/><stop offset="1" stop-color="#0c211e"/></radialGradient></defs><circle cx="400" cy="400" r="350" fill="url(#o)" stroke="#487567" stroke-opacity=".5"/><g fill="#9cc5af">${dots}</g><ellipse cx="400" cy="400" rx="350" ry="110" fill="none" stroke="#6d9d88" stroke-opacity=".2" transform="rotate(-18 400 400)"/></svg>`;
fs.writeFileSync(root + "/public/images/network-globe.svg", svg);
console.log({ landPoints: points.length, posterBytes: svg.length });
