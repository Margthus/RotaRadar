# RotaRadar Demo

RotaRadar, derste mobil uygulama fikrini web üzerinden göstermek için hazırlanmış güvenli rota ve şehir keşfi demosudur.

Bu sürüm Cloudflare Pages uyumludur. Klasik `server.js` kullanılmaz; frontend Vite ile statik olarak build edilir, API endpointleri Cloudflare Pages Functions altında çalışır.

## Çalıştırma

Node.js 18 veya üzeri gerekir.

```powershell
npm install
npm run dev
```

Production build kontrolü:

```powershell
npm run build
npm run preview
```

## Cloudflare Pages Deploy

Cloudflare Pages ayarları:

- Build command: `npm run build`
- Build output directory: `dist`
- Framework preset: `Vite` veya `None`

## Mimari

- Frontend: Vite tabanlı statik frontend
- Static output: `dist`
- Serverless API: `functions/api`
- Kullanılmayan eski yapı: `server.js`

API endpointleri:

- `GET /api/ratings`
- `POST /api/ratings`
- `GET /api/forum`
- `POST /api/forum`
- `GET /api/reports`
- `POST /api/reports`

## Veri Notu

Bu sürümde `data/*.json` dosyalarına yazma yapılmaz. Cloudflare Pages ortamında kalıcı dosya sistemi beklenmediği için API endpointleri şimdilik demo veri ve request-response mantığıyla çalışır.

Kalıcı veri gerektiğinde Supabase, Cloudflare KV veya D1 bağlanabilir. API kodu bu geçişe uygun şekilde `functions/api` altında ayrılmıştır.
