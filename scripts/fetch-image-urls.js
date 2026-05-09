const fs = require("fs");

const places = [
  ["izmir", "Saat Kulesi ve Konak Meydanı", "İzmir Saat Kulesi"],
  ["izmir", "Tarihi Asansör", "İzmir Tarihi Asansör"],
  ["izmir", "Kemeraltı Çarşısı", "Kemeraltı"],
  ["izmir", "Kordon Boyu", "İzmir Kordon"],
  ["izmir", "Sasalı Doğal Yaşam Parkı", "İzmir Doğal Yaşam Parkı"],
  ["izmir", "Agora", "İzmir Agorası"],
  ["izmir", "Kültür Park", "Kültürpark İzmir"],
  ["izmir", "Yeşildere Ormanı", "İzmir Yeşildere"],
  ["izmir", "Kadifekale", "Kadifekale"],
  ["izmir", "Atatürk Müzesi", "Atatürk Müzesi İzmir"],
  ["izmir", "Kıbrıs Şehitleri Caddesi", "Kıbrıs Şehitleri Caddesi İzmir"],
  ["izmir", "Alsancak Sevgi Yolu", "Alsancak İzmir"],
  ["izmir", "Teleferik", "Balçova Teleferik"],
  ["izmir", "Karşıyaka Çarşısı", "Karşıyaka İzmir"],

  ["ankara", "Dikmen Vadisi", "Dikmen Vadisi"],
  ["ankara", "Anıtkabir", "Anıtkabir"],
  ["ankara", "Ankara Kalesi ve Müzeler", "Ankara Kalesi"],
  ["ankara", "Hisar Parkı", "Ankara Kalesi Hisar Parkı"],
  ["ankara", "Atatürk Orman Çiftliği", "Atatürk Orman Çiftliği"],
  ["ankara", "Hamamönü", "Hamamönü"],
  ["ankara", "Gençlik Parkı", "Gençlik Parkı Ankara"],
  ["ankara", "Kuğulu Park", "Kuğulu Park"],
  ["ankara", "Hacı Bayram-ı Veli Camii ve Augustus Tapınağı", "Hacı Bayram Camii"],
  ["ankara", "Roma Hamamı", "Ankara Roma Hamamı"],
  ["ankara", "Kocatepe Camii", "Kocatepe Camii"],
  ["ankara", "Ulucanlar Cezaevi Müzesi", "Ulucanlar Cezaevi Müzesi"],
  ["ankara", "Seğmenler Parkı, Atakule ve Pembe Köşk", "Seğmenler Parkı"],
  ["ankara", "Kızılay Meydanı", "Kızılay Meydanı"],
  ["ankara", "Estergon Kalesi", "Estergon Kalesi Ankara"],
  ["ankara", "Meclis Parkı", "Türkiye Büyük Millet Meclisi"],
  ["ankara", "Aqua Vega Akvaryum", "Aqua Vega Akvaryum"],
  ["ankara", "Nata Vega Outlet AVM", "Nata Vega Outlet"],
  ["ankara", "50. Yıl Parkı", "50. Yıl Parkı Ankara"],
  ["ankara", "Kurtuluş Parkı", "Kurtuluş Parkı Ankara"],
  ["ankara", "Ankapark", "Ankapark"],
  ["ankara", "T.C. Cumhurbaşkanlığı Millet Kütüphanesi", "Cumhurbaşkanlığı Millet Kütüphanesi"],
  ["ankara", "Harikalar Diyarı", "Harikalar Diyarı Ankara"],

  ["istanbul", "Topkapı Sarayı", "Topkapı Sarayı"],
  ["istanbul", "Ayasofya Camii", "Ayasofya"],
  ["istanbul", "Süleymaniye Camii", "Süleymaniye Camii"],
  ["istanbul", "Yerebatan Sarnıcı", "Yerebatan Sarnıcı"],
  ["istanbul", "Dolmabahçe Sarayı", "Dolmabahçe Sarayı"],
  ["istanbul", "Galata Kulesi", "Galata Kulesi"],
  ["istanbul", "Gülhane Parkı", "Gülhane Parkı"],
  ["istanbul", "Kapalı Çarşı", "Kapalıçarşı"],
  ["istanbul", "Taksim Meydanı", "Taksim Meydanı"],
  ["istanbul", "Taksim Gezi Parkı", "Gezi Parkı"],
  ["istanbul", "Kız Kulesi", "Kız Kulesi"],
  ["istanbul", "Rumeli Hisarı", "Rumeli Hisarı"],
  ["istanbul", "Sultanahmet Meydanı", "Sultanahmet Meydanı"],
  ["istanbul", "Eyüp Sultan Camii", "Eyüp Sultan Camii"],
  ["istanbul", "Eyüp Sultan Mezarlığı", "Eyüp Mezarlığı"],
  ["istanbul", "Fatih Camii", "Fatih Camii İstanbul"],
  ["istanbul", "Büyük Mecidiye Camii", "Ortaköy Camii"],
  ["istanbul", "Miniatürk", "Miniatürk"],
  ["istanbul", "Emirgan Korusu", "Emirgan Korusu"],
  ["istanbul", "Belgrad Ormanı", "Belgrad Ormanı"],
  ["istanbul", "Büyük Çamlıca Tepesi", "Çamlıca Tepesi"],
  ["istanbul", "Büyük Çamlıca Camii", "Çamlıca Camii"],
  ["istanbul", "Atatürk Arboretumu", "Atatürk Arboretumu"],
  ["istanbul", "Anadolu Hisarı", "Anadolu Hisarı"],
  ["istanbul", "Beylerbeyi Sarayı", "Beylerbeyi Sarayı"],
  ["istanbul", "Yıldız Parkı", "Yıldız Parkı"],
  ["istanbul", "Yedikule Hisarı", "Yedikule Hisarı"],
  ["istanbul", "Galata Mevlevihanesi", "Galata Mevlevihanesi"],
  ["istanbul", "İstanbul Akvaryum", "İstanbul Akvaryum"],
  ["istanbul", "Mihrimah Sultan Camii", "Mihrimah Sultan Camii"],
  ["istanbul", "Bakırköy Botanik Parkı", "Bakırköy Botanik Parkı"],
  ["istanbul", "Karabayır", "Karabayır İstanbul"],
  ["istanbul", "Gaziosmanpaşa", "Gaziosmanpaşa İstanbul"],
  ["istanbul", "Bağcılar", "Bağcılar İstanbul"],
];

async function searchWikipedia(wiki, query) {
  const params = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrsearch: query,
    gsrlimit: "1",
    prop: "pageimages|info",
    piprop: "original|thumbnail",
    pithumbsize: "1000",
    inprop: "url",
    format: "json",
    origin: "*",
  });
  const url = `https://${wiki}.wikipedia.org/w/api.php?${params}`;
  const response = await fetch(url, {
    headers: { "User-Agent": "RotaRadarDemo/1.0" },
  });
  if (!response.ok) return null;
  const data = await response.json();
  const page = Object.values(data.query?.pages || {})[0];
  const image = page?.original?.source || page?.thumbnail?.source;
  if (!image) return null;
  return { image, page: page.fullurl, matchedTitle: page.title, wiki };
}

async function searchCommons(query) {
  const params = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrsearch: query,
    gsrnamespace: "6",
    gsrlimit: "1",
    prop: "imageinfo|info",
    iiprop: "url",
    iiurlwidth: "1000",
    inprop: "url",
    format: "json",
    origin: "*",
  });
  const url = `https://commons.wikimedia.org/w/api.php?${params}`;
  const response = await fetch(url, {
    headers: { "User-Agent": "RotaRadarDemo/1.0" },
  });
  if (!response.ok) return null;
  const data = await response.json();
  const page = Object.values(data.query?.pages || {})[0];
  const imageInfo = page?.imageinfo?.[0];
  const image = imageInfo?.thumburl || imageInfo?.url;
  if (!image) return null;
  return {
    image,
    page: page.fullurl || `https://commons.wikimedia.org/wiki/${encodeURIComponent(page.title)}`,
    matchedTitle: page.title,
    wiki: "commons",
  };
}

async function findImage(query) {
  return (
    (await searchWikipedia("tr", query)) ||
    (await searchWikipedia("en", query)) ||
    (await searchCommons(query))
  );
}

(async () => {
  const rows = [];
  for (const [city, place, query] of places) {
    const result = await findImage(query);
    rows.push({
      city,
      place,
      query,
      searchUrl: `https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=${encodeURIComponent(query)}`,
      ...(result || {}),
    });
    console.log(`${city} - ${place}: ${result ? "OK" : "Bulunamadı"}`);
  }

  let md = "# RotaRadar Görsel Linkleri\n\n";
  md += "Görseller hızlı demo için Wikipedia/Wikimedia üzerinden bulundu. Lisans ve kaynak bilgisi için kaynak sayfayı kontrol et.\n\n";

  for (const city of ["izmir", "ankara", "istanbul"]) {
    md += `## ${city[0].toUpperCase()}${city.slice(1)}\n\n`;
    md += "| Yer | Görsel URL | Kaynak / arama sayfası |\n|---|---|---|\n";
    for (const row of rows.filter((item) => item.city === city)) {
      md += `| ${row.place} | ${row.image || "Arama linkinden seç"} | ${row.page || row.searchUrl} |\n`;
    }
    md += "\n";
  }

  fs.writeFileSync("image-urls.md", md, "utf8");

  const csvRows = rows.map((row) =>
    [row.city, row.place, row.image || "", row.page || row.searchUrl]
      .map((value) => `"${String(value).replaceAll('"', '""')}"`)
      .join(","),
  );
  fs.writeFileSync("image-urls.csv", ["city,place,image,page", ...csvRows].join("\n"), "utf8");
})();
