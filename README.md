# RotaRadar Demo

Derste mobil uygulama fikrini web üzerinden göstermek için hazırlanmış dinamik demo.

## Çalıştırma

Node.js 18 veya üzeri gerekir.

```powershell
npm start
```

Ardından tarayıcıda aç:

```text
http://127.0.0.1:5173
```

Farklı port kullanmak için:

```powershell
$env:PORT=5174; npm start
```

## Dinamik Puanlama

- Kullanıcılar bir güvenlik bölgesi seçip 1-5 arası puan verir.
- Puanlar backend tarafında `data/ratings.json` dosyasına yazılır.
- Aynı siteye giren diğer kullanıcılar güncel ortalama puan ve oy sayılarını görür.
- Demo sınıf kullanımı için 20-30 kişilik eş zamanlı denemede yeterlidir.

## Hosting Notu

Bu proje artık sadece statik hosting değil, Node.js çalıştırabilen bir hosting ister. Render, Railway, Fly.io, VPS veya Node destekli benzer servislerde `npm start` komutu ile yayınlanabilir.

Ücretsiz sunucusuz platformlarda dosya sistemi kalıcı olmayabilir. Puanların kalıcı kalması gerekiyorsa `data/ratings.json` yerine küçük bir veritabanı kullanmak gerekir.
