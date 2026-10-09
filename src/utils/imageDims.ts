import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

/**
 * Dimensions réelles des images servies depuis public/, lues une fois au
 * démarrage. Sert à poser width/height sur les <img> : le navigateur réserve
 * la place avant le chargement, et la page ne saute plus.
 *
 * Usage : <img src={withBase(p)} {...dims(p)} />
 */
const root = path.join(process.cwd(), 'public');
const table = new Map<string, { width: number; height: number }>();

async function walk(dir: string): Promise<void> {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full);
    } else if (/\.(png|jpe?g|webp|avif|gif|svg)$/i.test(entry.name)) {
      try {
        const { width, height } = await sharp(full).metadata();
        if (width && height) table.set('/' + path.relative(root, full).split(path.sep).join('/'), { width, height });
      } catch {
        /* image illisible : on ne pose pas de dimensions, rien de plus */
      }
    }
  }
}
await walk(root);

export function dims(publicPath?: string): { width?: number; height?: number } {
  if (!publicPath) return {};
  return table.get(publicPath.split('?')[0]) ?? {};
}
