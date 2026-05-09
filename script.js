const toLeafletPoints = (coordinates) => coordinates.map(([lng, lat]) => [lat, lng]);

const izmirDemoAreas = [
  {
    id: "saat-kulesi-konak",
    name: "Saat Kulesi ve Konak Meydanı",
    type: "Turistik",
    level: "medium",
    score: 3.8,
    votes: 146,
    description:
      "İzmir'in simgesi Saat Kulesi ve Konak Meydanı, şehir gezisine başlamak için en merkezi noktalardan biri.",
    points: toLeafletPoints([
      [27.125204, 38.418645], [27.126227, 38.418505], [27.126575, 38.417844],
      [27.126515, 38.417011], [27.127724, 38.415989], [27.129009, 38.418452],
      [27.130702, 38.418275], [27.131608, 38.418417], [27.130898, 38.420477],
      [27.130686, 38.421294], [27.131064, 38.42146], [27.130853, 38.422123],
      [27.130414, 38.422715], [27.129235, 38.422135], [27.127528, 38.420501],
      [27.126213, 38.418867], [27.125366, 38.418926], [27.12514, 38.418855],
      [27.125215, 38.418642],
    ]),
  },
  {
    id: "tarihi-asansor",
    name: "Tarihi Asansör",
    type: "Manzara",
    level: "safe",
    score: 4.5,
    votes: 158,
    description:
      "Dario Moreno Sokağı'nın sonunda yer alan Tarihi Asansör, gün batımı ve körfez manzarasıyla öne çıkıyor.",
    points: toLeafletPoints([
      [27.115518, 38.408415], [27.115332, 38.409139], [27.11893, 38.409604],
      [27.119057, 38.40871], [27.119169, 38.4078], [27.116945, 38.407509],
      [27.115794, 38.407866], [27.115523, 38.408411],
    ]),
  },
  {
    id: "kemeralti",
    name: "Kemeraltı Çarşısı",
    type: "Çarşı",
    level: "medium",
    score: 3.7,
    votes: 192,
    description:
      "Kemeraltı, tarihi çarşı dokusu, hanları, camileri ve sokak lezzetleriyle İzmir'in en canlı gezi alanlarından biri.",
    points: toLeafletPoints([
      [27.1332, 38.418633], [27.132613, 38.418597], [27.131773, 38.418859],
      [27.131177, 38.420565], [27.1318, 38.420749], [27.131393, 38.421421],
      [27.131968, 38.422428], [27.137412, 38.422396], [27.136917, 38.420458],
      [27.136753, 38.419952], [27.136753, 38.419693], [27.136684, 38.418832],
      [27.135942, 38.418853], [27.135474, 38.41853], [27.134388, 38.418896],
      [27.133784, 38.418562], [27.133193, 38.418638],
    ]),
  },
  {
    id: "kordon",
    name: "Kordon Boyu",
    type: "Yürüyüş",
    level: "safe",
    score: 4.6,
    votes: 221,
    description:
      "Kordon Boyu, sahil yürüyüşü, gün batımı manzarası ve Gündoğdu çevresindeki sosyal yaşamıyla biliniyor.",
    points: toLeafletPoints([
      [27.134295, 38.429871], [27.138375, 38.434208], [27.14005, 38.435571],
      [27.140399, 38.435869], [27.140698, 38.436326], [27.142091, 38.439921],
      [27.142811, 38.441739], [27.143199, 38.442101], [27.14392, 38.442373],
      [27.14426, 38.44243], [27.14426, 38.442728], [27.143936, 38.442779],
      [27.142965, 38.442678], [27.142835, 38.44264], [27.142228, 38.441796],
      [27.141613, 38.440161], [27.1412, 38.439875], [27.141063, 38.439489],
      [27.14099, 38.439089], [27.140731, 38.439108], [27.140625, 38.439019],
      [27.140642, 38.438861], [27.140876, 38.438817], [27.140771, 38.438633],
      [27.140893, 38.438246], [27.140245, 38.436997], [27.139975, 38.436842],
      [27.139708, 38.436461], [27.139376, 38.436436], [27.138615, 38.435561],
      [27.138655, 38.435345], [27.138267, 38.435003], [27.138235, 38.434838],
      [27.135493, 38.431897], [27.133947, 38.430845], [27.133777, 38.430635],
      [27.133688, 38.43049], [27.134277, 38.429875],
    ]),
  },
  {
    id: "sasali",
    name: "Sasalı Doğal Yaşam Parkı",
    type: "Park",
    level: "safe",
    score: 4.4,
    votes: 174,
    description:
      "Gediz Deltası çevresindeki Sasalı Doğal Yaşam Parkı, geniş alanı ve çok sayıda canlı türüyle aileler için güçlü bir gezi noktası.",
    points: toLeafletPoints([
      [26.981749, 38.494882], [26.993621, 38.494122], [26.994166, 38.493287],
      [26.993763, 38.489782], [26.993052, 38.487723], [26.992365, 38.48661],
      [26.989545, 38.48776], [26.989664, 38.488076], [26.987033, 38.488947],
      [26.986939, 38.489133], [26.984451, 38.489708], [26.98419, 38.488669],
      [26.984688, 38.487019], [26.984332, 38.486777], [26.982768, 38.48661],
      [26.979712, 38.486944], [26.978254, 38.484057], [26.977638, 38.480125],
      [26.970079, 38.482425], [26.969985, 38.483594], [26.969407, 38.484501],
      [26.968578, 38.485094], [26.967369, 38.485614], [26.966777, 38.485799],
      [26.964573, 38.485873], [26.963768, 38.485836], [26.962481, 38.484258],
      [26.961984, 38.482885], [26.960698, 38.483297], [26.95719, 38.482244],
      [26.953654, 38.481718], [26.952338, 38.481672], [26.952338, 38.483091],
      [26.951315, 38.487232], [26.950994, 38.489497], [26.951725, 38.48968],
      [26.952397, 38.490801], [26.95342, 38.491419], [26.956869, 38.491785],
      [26.957278, 38.491442], [26.958243, 38.492036], [26.979947, 38.494932],
      [26.981905, 38.494863],
    ]),
  },
  {
    id: "agora",
    name: "Agora",
    type: "Tarihi",
    level: "medium",
    score: 3.9,
    votes: 118,
    description:
      "Agora, Roma döneminden kalan yapılarıyla İzmir'in antik kent yaşamını ve tarihini gösteren önemli bir açık alan.",
    points: toLeafletPoints([
      [27.136978, 38.419817], [27.136896, 38.419584], [27.136824, 38.418368],
      [27.138106, 38.418417], [27.138268, 38.41834], [27.139847, 38.418446],
      [27.139991, 38.419315], [27.140912, 38.420185], [27.140921, 38.420326],
      [27.138457, 38.420362], [27.138485, 38.41981], [27.137988, 38.419796],
      [27.136987, 38.41981],
    ]),
  },
  {
    id: "kulturpark",
    name: "Kültür Park",
    type: "Park",
    level: "safe",
    score: 4.2,
    votes: 151,
    description:
      "Kültürpark; fuar geçmişi, kültür merkezleri, yeşil alanları ve yürüyüş olanaklarıyla şehir içinde nefes alan bir bölge.",
    points: toLeafletPoints([
      [27.143237, 38.431665], [27.141975, 38.429942], [27.141416, 38.428092],
      [27.141344, 38.427641], [27.142768, 38.424307], [27.143471, 38.424025],
      [27.147275, 38.424562], [27.147095, 38.425536], [27.147672, 38.426087],
      [27.149258, 38.427386], [27.149709, 38.428446], [27.14915, 38.429787],
      [27.147816, 38.430691], [27.143255, 38.431665],
    ]),
  },
  {
    id: "yesildere",
    name: "Yeşildere Ormanı",
    type: "Doğa",
    level: "medium",
    score: 3.5,
    votes: 82,
    description:
      "Yeşildere çevresi, kent merkezine yakın yeşil dokusuyla öne çıkıyor; demo için orta güvenlik seviyesinde işaretlendi.",
    points: toLeafletPoints([
      [27.143622, 38.413433], [27.144044, 38.413397], [27.145028, 38.412892],
      [27.147923, 38.412432], [27.148907, 38.412414], [27.149938, 38.412084],
      [27.150337, 38.41168], [27.150595, 38.411707], [27.150688, 38.411468],
      [27.150841, 38.41111], [27.150958, 38.410798], [27.151274, 38.410743],
      [27.151497, 38.409687], [27.147372, 38.40876], [27.144864, 38.407777],
      [27.143985, 38.408181], [27.143833, 38.408521], [27.143399, 38.408622],
      [27.142895, 38.408392], [27.142356, 38.408897], [27.142485, 38.408962],
      [27.142181, 38.409145], [27.141759, 38.409577], [27.142146, 38.409944],
      [27.141583, 38.41111], [27.14354, 38.411422], [27.143786, 38.411588],
      [27.143341, 38.412589], [27.143974, 38.412727], [27.143645, 38.413452],
    ]),
  },
  {
    id: "kadifekale",
    name: "Kadifekale",
    type: "Tarihi",
    level: "medium",
    score: 3.4,
    votes: 97,
    description:
      "Kadifekale, Pagos Tepesi'ndeki tarihi kalıntıları ve İzmir manzarasıyla dikkat çeken bir ziyaret noktası.",
    points: toLeafletPoints([
      [27.143525, 38.413576], [27.144709, 38.414247], [27.145302, 38.414291],
      [27.145657, 38.414651], [27.148012, 38.414193], [27.148967, 38.4138],
      [27.149316, 38.413608], [27.148863, 38.413073], [27.148849, 38.412877],
      [27.148918, 38.412768], [27.148856, 38.412516], [27.147692, 38.412571],
      [27.145274, 38.412931], [27.143943, 38.41351], [27.143539, 38.413576],
    ]),
  },
  {
    id: "ataturk-muzesi",
    name: "Atatürk Müzesi",
    type: "Müze",
    level: "safe",
    score: 4.3,
    votes: 124,
    description:
      "I. Kordon üzerindeki Atatürk Müzesi, tarihi binası ve Atatürk'e ait eşyaların sergilendiği odalarıyla öne çıkıyor.",
    points: toLeafletPoints([
      [27.140067, 38.435495], [27.140456, 38.435789], [27.140712, 38.436159],
      [27.141225, 38.435951], [27.140964, 38.435543], [27.140681, 38.435304],
      [27.14054, 38.435065], [27.140085, 38.435491],
    ]),
  },
  {
    id: "kibris-sehitleri",
    name: "Kıbrıs Şehitleri Caddesi",
    type: "Kafe",
    level: "safe",
    score: 4.1,
    votes: 176,
    description:
      "Kıbrıs Şehitleri Caddesi, gündüz alışveriş ve akşam eğlence seçenekleriyle Alsancak'ın en hareketli akslarından biri.",
    points: toLeafletPoints([
      [27.14076, 38.436226], [27.141322, 38.436023], [27.140573, 38.434884],
      [27.140813, 38.43401], [27.143856, 38.43531], [27.143473, 38.435814],
      [27.143428, 38.436666], [27.143624, 38.436666], [27.143615, 38.437051],
      [27.144178, 38.437037], [27.145741, 38.437033], [27.145704, 38.437441],
      [27.145972, 38.437543], [27.145639, 38.438393], [27.145545, 38.438801],
      [27.147318, 38.438942], [27.147006, 38.439962], [27.145581, 38.440308],
      [27.144901, 38.440342], [27.144981, 38.441305], [27.14509, 38.441819],
      [27.144138, 38.441943], [27.143662, 38.441729], [27.142974, 38.440031],
      [27.142674, 38.439257], [27.142093, 38.439402], [27.140759, 38.436222],
    ]),
  },
  {
    id: "alsancak-sevgi-yolu",
    name: "Alsancak Sevgi Yolu",
    type: "Yürüyüş",
    level: "safe",
    score: 4.0,
    votes: 109,
    description:
      "Alsancak Sevgi Yolu, ağaçlı yürüyüş hattı, kitapçılar, küçük stantlar ve yakın kafelerle gündelik şehir yaşamını gösteriyor.",
    points: toLeafletPoints([
      [27.12775, 38.415961], [27.129056, 38.41843], [27.130617, 38.418217],
      [27.130481, 38.417902], [27.130097, 38.417939], [27.129996, 38.417355],
      [27.130635, 38.417337], [27.130617, 38.416864], [27.130327, 38.41679],
      [27.130026, 38.415632], [27.129151, 38.416299], [27.129027, 38.416248],
      [27.128613, 38.415308], [27.127756, 38.415966],
    ]),
  },
  {
    id: "teleferik",
    name: "Teleferik",
    type: "Manzara",
    level: "safe",
    score: 4.2,
    votes: 133,
    description:
      "Balçova Teleferik, kısa yolculukla körfez manzarasına çıkan ve zirvede yeme-içme alanları sunan bir gezi noktası.",
    points: toLeafletPoints([
      [27.034891, 38.386412], [27.038624, 38.387305], [27.041154, 38.38666],
      [27.045835, 38.386908], [27.048682, 38.386908], [27.051212, 38.385421],
      [27.054691, 38.382594], [27.053647, 38.379173], [27.052192, 38.378553],
      [27.055166, 38.377982], [27.055166, 38.377239], [27.054027, 38.375602],
      [27.055735, 38.373643], [27.043936, 38.370395], [27.041975, 38.370692],
      [27.041785, 38.372056], [27.040109, 38.372676], [27.040425, 38.373445],
      [27.039286, 38.374933], [27.039792, 38.37642], [27.036218, 38.382594],
      [27.033681, 38.382864], [27.034914, 38.386434],
    ]),
  },
  {
    id: "karsiyaka-carsisi",
    name: "Karşıyaka Çarşısı",
    type: "Çarşı",
    level: "safe",
    score: 4.0,
    votes: 121,
    description:
      "Karşıyaka Çarşısı, alışveriş, yerel hareketlilik ve sahile yakın simge noktalarıyla kuzey yakasının canlı alanlarından biri.",
    points: toLeafletPoints([
      [27.11475, 38.457539], [27.117477, 38.453815], [27.12089, 38.455723],
      [27.12074, 38.456471], [27.116618, 38.458001], [27.11475, 38.45753],
    ]),
  },
];

const izmirDemoMarkers = izmirDemoAreas.map((area) => {
  const [latSum, lngSum] = area.points.reduce(
    ([latTotal, lngTotal], [lat, lng]) => [latTotal + lat, lngTotal + lng],
    [0, 0],
  );

  return [latSum / area.points.length, lngSum / area.points.length, area.name];
});

const ankaraDemoAreas = [
  {
    id: "dikmen-vadisi",
    name: "Dikmen Vadisi",
    type: "Park",
    level: "safe",
    score: 4.2,
    votes: 136,
    description:
      "Dikmen Vadisi, yürüyüş yolları, yeşil alanları ve şehir içinde nefes aldıran park dokusuyla öne çıkıyor.",
    points: toLeafletPoints([
      [32.842932, 39.896833], [32.846362, 39.895766], [32.844704, 39.891203],
      [32.84656, 39.885538], [32.850959, 39.87667], [32.851417, 39.873974],
      [32.848267, 39.877031], [32.842583, 39.880479], [32.842012, 39.883958],
      [32.842158, 39.888011], [32.842272, 39.892539], [32.842947, 39.896829],
    ]),
  },
  {
    id: "anitkabir",
    name: "Anıtkabir",
    type: "Tarihi",
    level: "safe",
    score: 4.8,
    votes: 252,
    description:
      "Anıtkabir, Atatürk'ün kabri, müzesi ve anıtsal mimarisiyle Ankara gezisinin en önemli duraklarından biri.",
    points: toLeafletPoints([
      [32.835745, 39.921538], [32.840469, 39.924437], [32.84185, 39.92505],
      [32.839088, 39.93001], [32.837235, 39.931905], [32.837198, 39.93497],
      [32.829603, 39.932685], [32.832474, 39.926053], [32.835636, 39.921538],
    ]),
  },
  {
    id: "ankara-kalesi-muzeler",
    name: "Ankara Kalesi ve Müzeler",
    type: "Tarihi",
    level: "medium",
    score: 3.9,
    votes: 168,
    description:
      "Ankara Kalesi çevresi, tarihi evler, müzeler ve şehir manzarasıyla Altındağ'ın en yoğun kültür rotalarından biri.",
    points: toLeafletPoints([
      [32.861896, 39.935315], [32.870482, 39.937331], [32.871649, 39.940468],
      [32.870622, 39.941864], [32.868226, 39.941983], [32.863438, 39.942038],
      [32.863532, 39.939485], [32.860581, 39.938023], [32.861934, 39.935279],
    ]),
  },
  {
    id: "hisar-parki",
    name: "Hisar Parkı",
    type: "Park",
    level: "medium",
    score: 3.6,
    votes: 91,
    description:
      "Hisar Parkı, Ankara Kalesi çevresindeki geziyi tamamlayan küçük ama merkezi bir dinlenme alanı.",
    points: toLeafletPoints([
      [32.861225, 39.938608], [32.862153, 39.939593], [32.86195, 39.941425],
      [32.86228, 39.941991], [32.863386, 39.942108], [32.863437, 39.9397],
      [32.863031, 39.939174], [32.861213, 39.93856],
    ]),
  },
  {
    id: "ataturk-orman-ciftligi",
    name: "Atatürk Orman Çiftliği",
    type: "Doğa",
    level: "safe",
    score: 4.1,
    votes: 145,
    description:
      "Atatürk Orman Çiftliği, geniş yeşil alanları ve aile gezisine uygun duraklarıyla Ankara'nın klasik rotalarından biri.",
    points: toLeafletPoints([
      [32.802191, 39.939664], [32.803296, 39.940274], [32.805243, 39.93963],
      [32.81201, 39.941563], [32.814443, 39.939765], [32.816212, 39.937595],
      [32.817893, 39.931219], [32.806348, 39.926164], [32.803827, 39.927521],
      [32.800465, 39.934034], [32.802191, 39.939833],
    ]),
  },
  {
    id: "hamamonu",
    name: "Hamamönü",
    type: "Tarihi",
    level: "safe",
    score: 4.2,
    votes: 132,
    description:
      "Hamamönü, restore edilmiş Ankara evleri, kafeleri ve tarihi sokak dokusuyla yürüyerek gezilebilen canlı bir alan.",
    points: toLeafletPoints([
      [32.862828, 39.933657], [32.863343, 39.93332], [32.864094, 39.932851],
      [32.865188, 39.930679], [32.866604, 39.929848], [32.868493, 39.929758],
      [32.868375, 39.931609], [32.867452, 39.93332], [32.864963, 39.933591],
      [32.862839, 39.933665],
    ]),
  },
  {
    id: "genclik-parki",
    name: "Gençlik Parkı",
    type: "Park",
    level: "medium",
    score: 3.8,
    votes: 119,
    description:
      "Gençlik Parkı, Ulus çevresinde gölet, yeşil alan ve eğlence odaklı duraklarıyla bilinen merkezi bir park.",
    points: toLeafletPoints([
      [32.844322, 39.936845], [32.850389, 39.939774], [32.853884, 39.937362],
      [32.853934, 39.936136], [32.853435, 39.934413], [32.846519, 39.935696],
      [32.844322, 39.936787],
    ]),
  },
  {
    id: "kugulu-park",
    name: "Kuğulu Park",
    type: "Park",
    level: "safe",
    score: 4.4,
    votes: 156,
    description:
      "Kuğulu Park, Tunalı Hilmi çevresindeki konumu, kuğuları ve sakin park atmosferiyle Ankara'nın sevilen noktalarından biri.",
    points: toLeafletPoints([
      [32.859586, 39.90136], [32.85949, 39.901774], [32.859471, 39.902281],
      [32.860368, 39.902408], [32.8608, 39.902169], [32.860959, 39.901847],
      [32.860831, 39.901701], [32.859751, 39.901297], [32.859567, 39.901331],
    ]),
  },
  {
    id: "haci-bayram-augustus",
    name: "Hacı Bayram-ı Veli Camii ve Augustus Tapınağı",
    type: "Tarihi",
    level: "medium",
    score: 4.0,
    votes: 143,
    description:
      "Hacı Bayram-ı Veli Camii ve Augustus Tapınağı, Ulus'ta dini ve antik mirası aynı çevrede gösteren önemli bir gezi alanı.",
    points: toLeafletPoints([
      [32.856834, 39.943853], [32.857033, 39.943943], [32.857076, 39.944224],
      [32.858421, 39.945111], [32.859051, 39.944678], [32.859385, 39.944414],
      [32.858631, 39.943745], [32.857797, 39.943465], [32.857249, 39.94351],
      [32.856823, 39.943853],
    ]),
  },
  {
    id: "roma-hamami",
    name: "Roma Hamamı",
    type: "Tarihi",
    level: "medium",
    score: 3.7,
    votes: 86,
    description:
      "Roma Hamamı, Ulus çevresindeki Roma dönemi kalıntılarını görmek isteyenler için kısa ama değerli bir tarihi durak.",
    points: toLeafletPoints([
      [32.854837, 39.946226], [32.854085, 39.94598], [32.8528, 39.945901],
      [32.851489, 39.946669], [32.852285, 39.947315], [32.854451, 39.947758],
      [32.855325, 39.947251], [32.854843, 39.946216],
    ]),
  },
  {
    id: "kocatepe-camii",
    name: "Kocatepe Camii",
    type: "Dini",
    level: "safe",
    score: 4.3,
    votes: 162,
    description:
      "Kocatepe Camii, Ankara'nın en büyük ve en bilinen camilerinden biri; merkezi konumu ve mimarisiyle dikkat çekiyor.",
    points: toLeafletPoints([
      [32.858189, 39.915146], [32.858801, 39.916504], [32.859487, 39.917451],
      [32.860582, 39.91801], [32.860936, 39.917944], [32.861397, 39.916776],
      [32.861311, 39.915846], [32.860657, 39.915377], [32.859734, 39.915434],
      [32.858178, 39.915122],
    ]),
  },
  {
    id: "ulucanlar",
    name: "Ulucanlar Cezaevi Müzesi",
    type: "Müze",
    level: "medium",
    score: 3.9,
    votes: 112,
    description:
      "Ulucanlar Cezaevi Müzesi, yakın dönem siyasi ve toplumsal hafızayı anlatan etkileyici bir müze deneyimi sunuyor.",
    points: toLeafletPoints([
      [32.872114, 39.937137], [32.872415, 39.938741], [32.87352, 39.939523],
      [32.87411, 39.939301], [32.874271, 39.938708], [32.874131, 39.937425],
      [32.873316, 39.937047], [32.873273, 39.936734],
    ]),
  },
  {
    id: "segmenler-atakule-pembe-kosk",
    name: "Seğmenler Parkı, Atakule ve Pembe Köşk",
    type: "Park",
    level: "safe",
    score: 4.4,
    votes: 177,
    description:
      "Seğmenler Parkı, Atakule ve Pembe Köşk çevresi; yürüyüş, manzara ve şehir belleğini bir arada sunan Çankaya rotasıdır.",
    points: toLeafletPoints([
      [32.855827, 39.885569], [32.857316, 39.88651], [32.859772, 39.889538],
      [32.861434, 39.89061], [32.860968, 39.893687], [32.864169, 39.893722],
      [32.863105, 39.898449], [32.85823, 39.897666], [32.856003, 39.891347],
      [32.855095, 39.887266], [32.855605, 39.885616],
    ]),
  },
  {
    id: "kizilay",
    name: "Kızılay Meydanı",
    type: "Merkez",
    level: "medium",
    score: 3.6,
    votes: 174,
    description:
      "Kızılay Meydanı, ulaşım, alışveriş ve yeme-içme yoğunluğuyla Ankara'nın en merkezi ve hareketli bölgelerinden biridir.",
    points: toLeafletPoints([
      [32.845895, 39.918553], [32.850537, 39.917099], [32.854068, 39.91577],
      [32.857925, 39.913463], [32.859331, 39.9176], [32.862829, 39.918503],
      [32.863483, 39.922865], [32.859756, 39.926651], [32.856225, 39.924871],
      [32.853218, 39.923492], [32.851322, 39.922088], [32.851938, 39.920234],
      [32.845921, 39.918568],
    ]),
  },
  {
    id: "estergon-kalesi",
    name: "Estergon Kalesi",
    type: "Kültür",
    level: "safe",
    score: 4.0,
    votes: 95,
    description:
      "Estergon Kalesi, Keçiören'de Türk kültürünü ve panoramik şehir manzarasını bir arada sunan tematik bir yapıdır.",
    points: toLeafletPoints([
      [32.866779, 39.979369], [32.86756, 39.979647], [32.867351, 39.980139],
      [32.86749, 39.980663], [32.867323, 39.981604], [32.866793, 39.982715],
      [32.864616, 39.982491], [32.864909, 39.981689], [32.865816, 39.980353],
      [32.866876, 39.979337],
    ]),
  },
  {
    id: "meclis-parki",
    name: "Meclis Parkı",
    type: "Park",
    level: "safe",
    score: 4.0,
    votes: 101,
    description:
      "Meclis Parkı, TBMM çevresindeki merkezi konumu ve düzenli yeşil alanıyla kısa mola ve yürüyüş için uygun bir noktadır.",
    points: toLeafletPoints([
      [32.846815, 39.905419], [32.852707, 39.905163], [32.852692, 39.908598],
      [32.853294, 39.910394], [32.85499, 39.910454], [32.854088, 39.913073],
      [32.852821, 39.913501], [32.849793, 39.913896], [32.847946, 39.911277],
      [32.846786, 39.905363],
    ]),
  },
  {
    id: "aqua-vega-akvaryum",
    name: "Aqua Vega Akvaryum",
    type: "Eğlence",
    level: "safe",
    score: 4.1,
    votes: 122,
    description:
      "Aqua Vega Akvaryum, özellikle aileler ve çocuklar için deniz canlılarını yakından görmeye imkan veren popüler bir kapalı gezi noktasıdır.",
    points: toLeafletPoints([
      [32.934969, 39.886041], [32.935344, 39.888816], [32.934121, 39.888626],
      [32.93381, 39.886749], [32.934046, 39.886321], [32.93499, 39.886025],
    ]),
  },
  {
    id: "nata-vega",
    name: "Nata Vega Outlet AVM",
    type: "AVM",
    level: "safe",
    score: 4.0,
    votes: 115,
    description:
      "Nata Vega Outlet AVM, alışveriş, yeme-içme ve Aqua Vega Akvaryum bağlantısıyla Mamak çevresinde yoğun ziyaret edilen bir alan.",
    points: toLeafletPoints([
      [32.933948, 39.886316], [32.933229, 39.886419], [32.931779, 39.886251],
      [32.931304, 39.887186], [32.931803, 39.888729], [32.933668, 39.890347],
      [32.935362, 39.888897], [32.933887, 39.88857], [32.933741, 39.886896],
      [32.93396, 39.886279],
    ]),
  },
  {
    id: "elli-yil-parki",
    name: "50. Yıl Parkı",
    type: "Park",
    level: "medium",
    score: 3.8,
    votes: 88,
    description:
      "50. Yıl Parkı, şehir manzarası ve açık alanlarıyla özellikle gün batımı saatlerinde tercih edilen parklardan biridir.",
    points: toLeafletPoints([
      [32.873782, 39.922974], [32.876341, 39.926185], [32.877737, 39.925186],
      [32.878644, 39.925694], [32.879912, 39.924356], [32.878691, 39.922929],
      [32.877783, 39.922697], [32.876492, 39.92226], [32.87444, 39.922137],
      [32.873242, 39.922485],
    ]),
  },
  {
    id: "kurtulus-parki",
    name: "Kurtuluş Parkı",
    type: "Park",
    level: "safe",
    score: 4.0,
    votes: 104,
    description:
      "Kurtuluş Parkı, Kolej ve Kızılay çevresine yakınlığıyla günlük yürüyüş ve kısa mola için kullanılan merkezi bir yeşil alan.",
    points: toLeafletPoints([
      [32.860625, 39.926213], [32.863445, 39.928314], [32.867055, 39.927943],
      [32.862478, 39.924397], [32.86069, 39.926226],
    ]),
  },
  {
    id: "ankapark",
    name: "Ankapark",
    type: "Eğlence",
    level: "medium",
    score: 3.2,
    votes: 73,
    description:
      "Ankapark, büyük ölçekli eğlence parkı alanı olarak biliniyor; demo için çevresel güvenlik algısı orta seviyede gösterildi.",
    points: toLeafletPoints([
      [32.774685, 39.945384], [32.773739, 39.943857], [32.775781, 39.933546],
      [32.795704, 39.940802], [32.821504, 39.947141], [32.827481, 39.948324],
      [32.820109, 39.954433], [32.792268, 39.950806], [32.774918, 39.945419],
    ]),
  },
  {
    id: "millet-kutuphanesi",
    name: "T.C. Cumhurbaşkanlığı Millet Kütüphanesi",
    type: "Kütüphane",
    level: "safe",
    score: 4.6,
    votes: 148,
    description:
      "Millet Kütüphanesi, büyük koleksiyonu, modern çalışma alanları ve mimarisiyle Ankara'nın yeni simge kültür yapılarından biridir.",
    points: toLeafletPoints([
      [32.796763, 39.927765], [32.802211, 39.929683], [32.803573, 39.927249],
      [32.804765, 39.925931], [32.804781, 39.924518], [32.803155, 39.923652],
      [32.799888, 39.922904], [32.799269, 39.923117], [32.797814, 39.926276],
      [32.796761, 39.927736],
    ]),
  },
  {
    id: "harikalar-diyari",
    name: "Harikalar Diyarı",
    type: "Park",
    level: "safe",
    score: 4.1,
    votes: 130,
    description:
      "Harikalar Diyarı, geniş park alanları, tematik bölümleri ve aile odaklı etkinlik imkanlarıyla Sincan'ın önemli gezi noktasıdır.",
    points: toLeafletPoints([
      [32.586528, 39.983707], [32.591522, 39.985192], [32.593886, 39.985945],
      [32.601802, 39.982506], [32.602679, 39.977803], [32.60159, 39.973732],
      [32.599863, 39.973406], [32.581826, 39.977987], [32.585067, 39.983055],
      [32.586767, 39.983727],
    ]),
  },
];

const ankaraDemoMarkers = ankaraDemoAreas.map((area) => {
  const [latSum, lngSum] = area.points.reduce(
    ([latTotal, lngTotal], [lat, lng]) => [latTotal + lat, lngTotal + lng],
    [0, 0],
  );

  return [latSum / area.points.length, lngSum / area.points.length, area.name];
});

const istanbulDemoAreas = [
  {
    id: "topkapi-sarayi",
    name: "Topkapı Sarayı",
    type: "Tarihi",
    level: "safe",
    score: 4.6,
    votes: 238,
    description:
      "Topkapı Sarayı, Osmanlı saray yaşamını, avluları, kutsal emanetleri ve Harem bölümüyle anlatan Tarihi Yarımada'nın ana duraklarından biri.",
    points: toLeafletPoints([
      [28.981379, 41.010719], [28.983689, 41.013452], [28.987638, 41.012809],
      [28.985672, 41.006602], [28.981379, 41.010719],
    ]),
  },
  {
    id: "ayasofya",
    name: "Ayasofya Camii",
    type: "Dini",
    level: "safe",
    score: 4.7,
    votes: 265,
    description:
      "Ayasofya, Bizans ve Osmanlı mirasını aynı yapıda taşıyan, Tarihi Yarımada'nın en önemli simge eserlerinden biridir.",
    points: toLeafletPoints([
      [28.979667, 41.007328], [28.981269, 41.008485], [28.979658, 41.009686],
      [28.978921, 41.010464], [28.978508, 41.008292], [28.978351, 41.007995],
      [28.979667, 41.007291],
    ]),
  },
  {
    id: "suleymaniye",
    name: "Süleymaniye Camii",
    type: "Dini",
    level: "safe",
    score: 4.5,
    votes: 184,
    description:
      "Süleymaniye Camii, Mimar Sinan'ın klasik Osmanlı mimarisini ve Haliç manzarasını bir arada sunan en etkileyici yapılardan biri.",
    points: toLeafletPoints([
      [28.96308, 41.014954], [28.961792, 41.016023], [28.961267, 41.016355],
      [28.96294, 41.017537], [28.963681, 41.01731], [28.965537, 41.015812],
      [28.965462, 41.014987], [28.963445, 41.015173],
    ]),
  },
  {
    id: "yerebatan",
    name: "Yerebatan Sarnıcı",
    type: "Tarihi",
    level: "safe",
    score: 4.3,
    votes: 149,
    description:
      "Yerebatan Sarnıcı, Bizans döneminden kalan yer altı su yapısı, loş atmosferi ve Medusa başlarıyla öne çıkar.",
    points: toLeafletPoints([
      [28.977517, 41.007919], [28.977579, 41.008255], [28.977709, 41.008441],
      [28.977825, 41.008516], [28.97814, 41.008235], [28.97802, 41.008002],
      [28.977829, 41.007922],
    ]),
  },
  {
    id: "dolmabahce",
    name: "Dolmabahçe Sarayı",
    type: "Tarihi",
    level: "safe",
    score: 4.5,
    votes: 194,
    description:
      "Dolmabahçe Sarayı, Boğaz kıyısındaki konumu, görkemli salonları ve geç Osmanlı dönemi mimarisiyle dikkat çeker.",
    points: toLeafletPoints([
      [29.005248, 41.040033], [29.00433, 41.041323], [28.999325, 41.040289],
      [28.996568, 41.038636], [28.994324, 41.036089], [28.99373, 41.035428],
      [28.995271, 41.036409], [28.996727, 41.037518], [29.005083, 41.039845],
    ]),
  },
  {
    id: "galata-kulesi",
    name: "Galata Kulesi",
    type: "Tarihi",
    level: "medium",
    score: 4.1,
    votes: 172,
    description:
      "Galata Kulesi, panoramik İstanbul manzarası ve çevresindeki hareketli sokaklarıyla Beyoğlu'nun en bilinen simgelerinden biridir.",
    points: toLeafletPoints([
      [28.973834, 41.025632], [28.974214, 41.025345], [28.974594, 41.025632],
      [28.974214, 41.025919], [28.973834, 41.025632],
    ]),
  },
  {
    id: "gulhane",
    name: "Gülhane Parkı",
    type: "Park",
    level: "safe",
    score: 4.2,
    votes: 153,
    description:
      "Gülhane Parkı, Topkapı Sarayı çevresinde yer alan, yürüyüş ve dinlenme için sık tercih edilen tarihi bir şehir parkıdır.",
    points: toLeafletPoints([
      [28.979117, 41.010459], [28.98153, 41.01263], [28.983448, 41.01356],
      [28.986234, 41.014451], [28.985093, 41.015791], [28.981199, 41.01411],
      [28.979695, 41.013531], [28.978837, 41.01168], [28.979119, 41.010439],
    ]),
  },
  {
    id: "kapali-carsi",
    name: "Kapalı Çarşı",
    type: "Çarşı",
    level: "medium",
    score: 3.9,
    votes: 210,
    description:
      "Kapalı Çarşı, yüzlerce dükkanı, tarihi sokakları ve yoğun alışveriş atmosferiyle İstanbul'un en klasik gezi alanlarından biri.",
    points: toLeafletPoints([
      [28.966176, 41.011131], [28.966086, 41.01261], [28.9672, 41.018156],
      [28.972254, 41.017319], [28.976226, 41.016341], [28.976587, 41.014137],
      [28.978779, 41.010465], [28.977411, 41.007914], [28.967474, 41.008928],
      [28.966159, 41.011142],
    ]),
  },
  {
    id: "taksim",
    name: "Taksim Meydanı",
    type: "Merkez",
    level: "medium",
    score: 3.7,
    votes: 188,
    description:
      "Taksim Meydanı ve çevresi, ulaşım, kültür, alışveriş ve eğlence yoğunluğu nedeniyle İstanbul'un en hareketli merkezlerinden biri.",
    points: toLeafletPoints([
      [28.984854, 41.03624], [28.983287, 41.0359], [28.982975, 41.036601],
      [28.983758, 41.036856], [28.985409, 41.037966], [28.987485, 41.037266],
      [28.987081, 41.036651], [28.985781, 41.036771],
    ]),
  },
  {
    id: "gezi-parki",
    name: "Taksim Gezi Parkı",
    type: "Park",
    level: "safe",
    score: 4.0,
    votes: 121,
    description:
      "Taksim Gezi Parkı, Taksim'in yoğun kent dokusu içinde kısa yürüyüş ve dinlenme için kullanılan merkezi yeşil alan.",
    points: toLeafletPoints([
      [28.985761, 41.037967], [28.986579, 41.040452], [28.988683, 41.040112],
      [28.988099, 41.038874], [28.987493, 41.037301], [28.986007, 41.037578],
    ]),
  },
  {
    id: "kiz-kulesi",
    name: "Kız Kulesi",
    type: "Manzara",
    level: "safe",
    score: 4.4,
    votes: 160,
    description:
      "Kız Kulesi, Boğaz üzerindeki konumu ve Üsküdar sahilinden izlenen manzarasıyla İstanbul'un en romantik simgelerinden biri.",
    points: toLeafletPoints([
      [28.996734, 41.021084], [29.000018, 41.016448], [29.004123, 41.015509],
      [29.008811, 41.016774], [29.011513, 41.021084], [29.008811, 41.025393],
      [29.004123, 41.026659], [28.999435, 41.025393],
    ]),
  },
  {
    id: "rumeli-hisari",
    name: "Rumeli Hisarı",
    type: "Tarihi",
    level: "safe",
    score: 4.2,
    votes: 128,
    description:
      "Rumeli Hisarı, Boğaz kıyısındaki surları ve manzarasıyla İstanbul'un fetih tarihini hissettiren önemli yapılardan biridir.",
    points: toLeafletPoints([
      [29.056859, 41.090917], [29.046128, 41.090502], [29.046787, 41.083809],
      [29.047715, 41.079222], [29.054234, 41.08074], [29.056861, 41.083161],
    ]),
  },
  {
    id: "sultanahmet",
    name: "Sultanahmet Meydanı",
    type: "Turistik",
    level: "safe",
    score: 4.4,
    votes: 216,
    description:
      "Sultanahmet Meydanı, Ayasofya, Sultanahmet Camii ve çevredeki tarihi yapılarla şehrin en yoğun turistik alanlarından biridir.",
    points: toLeafletPoints([
      [28.974481, 41.008053], [28.974602, 41.007596], [28.973392, 41.006464],
      [28.975086, 41.004922], [28.976574, 41.006592], [28.977941, 41.007761],
    ]),
  },
  {
    id: "eyup-sultan",
    name: "Eyüp Sultan Camii",
    type: "Dini",
    level: "medium",
    score: 4.1,
    votes: 137,
    description:
      "Eyüp Sultan Camii, dini atmosferi ve çevresindeki tarihi dokuyla Haliç hattının en çok ziyaret edilen noktalarından biridir.",
    points: toLeafletPoints([
      [28.931339, 41.046819], [28.933559, 41.048664], [28.935973, 41.048519],
      [28.9371, 41.047264], [28.936038, 41.046051], [28.934858, 41.046285],
      [28.931328, 41.046811],
    ]),
  },
  {
    id: "eyup-mezarligi",
    name: "Eyüp Sultan Mezarlığı",
    type: "Tarihi",
    level: "medium",
    score: 3.8,
    votes: 91,
    description:
      "Eyüp Sultan Mezarlığı, tarihi mezar taşları ve Pierre Loti hattına uzanan dokusuyla sakin ama dikkat isteyen bir gezi alanıdır.",
    points: toLeafletPoints([
      [28.932886, 41.048266], [28.933906, 41.050622], [28.935954, 41.054135],
      [28.935178, 41.056537], [28.933708, 41.056137], [28.932728, 41.053796],
      [28.931523, 41.051302], [28.930318, 41.050039], [28.932626, 41.048314],
    ]),
  },
  {
    id: "fatih-camii",
    name: "Fatih Camii",
    type: "Dini",
    level: "medium",
    score: 4.0,
    votes: 105,
    description:
      "Fatih Camii, külliye yapısı ve tarihi çevresiyle Fatih ilçesinin önemli dini ve kültürel duraklarından biridir.",
    points: toLeafletPoints([
      [28.947675, 41.019734], [28.950301, 41.021263], [28.952555, 41.018847],
      [28.949941, 41.017418], [28.947687, 41.01977],
    ]),
  },
  {
    id: "ortakoy-camii",
    name: "Büyük Mecidiye Camii",
    type: "Dini",
    level: "safe",
    score: 4.3,
    votes: 144,
    description:
      "Büyük Mecidiye Camii, Ortaköy sahilindeki Boğaz manzarası ve zarif mimarisiyle fotoğraf duraklarının başında gelir.",
    points: toLeafletPoints([
      [29.026915, 41.047021], [29.027874, 41.047459], [29.02853, 41.048915],
      [29.02718, 41.050666], [29.021868, 41.049096], [29.023937, 41.046869],
      [29.026991, 41.047012],
    ]),
  },
  {
    id: "miniaturk",
    name: "Miniatürk",
    type: "Müze",
    level: "safe",
    score: 4.1,
    votes: 118,
    description:
      "Miniatürk, Türkiye'deki önemli yapıların maketlerini bir arada sunan, aileler ve öğrenciler için eğitici bir açık hava müzesi.",
    points: toLeafletPoints([
      [28.948324, 41.064344], [28.948969, 41.063547], [28.948467, 41.062413],
      [28.950276, 41.058942], [28.950473, 41.056362], [28.949685, 41.055092],
      [28.943093, 41.053674], [28.941983, 41.053349], [28.947303, 41.06086],
      [28.94789, 41.064293],
    ]),
  },
  {
    id: "emirgan-korusu",
    name: "Emirgan Korusu",
    type: "Park",
    level: "safe",
    score: 4.5,
    votes: 173,
    description:
      "Emirgan Korusu, özellikle lale dönemindeki renkli görünümü, köşkleri ve Boğaz'a yakın yeşil dokusuyla öne çıkar.",
    points: toLeafletPoints([
      [29.048648, 41.110509], [29.047584, 41.106159], [29.051202, 41.105257],
      [29.054076, 41.10676], [29.056923, 41.109206], [29.057349, 41.111331],
      [29.05655, 41.112714], [29.051681, 41.110629],
    ]),
  },
  {
    id: "belgrad-ormani",
    name: "Belgrad Ormanı",
    type: "Doğa",
    level: "safe",
    score: 4.3,
    votes: 155,
    description:
      "Belgrad Ormanı, yürüyüş parkurları ve geniş doğal alanlarıyla İstanbul'da doğa kaçamağı yapmak isteyenlerin tercih ettiği büyük orman alanı.",
    points: toLeafletPoints([
      [28.901265, 41.19491], [28.906598, 41.210962], [28.925174, 41.224945],
      [28.946514, 41.228968], [28.967854, 41.224945], [28.986431, 41.210962],
      [28.991764, 41.19491], [28.986411, 41.178861], [28.967835, 41.164888],
      [28.946514, 41.16087], [28.925193, 41.164888], [28.906617, 41.178861],
    ]),
  },
  {
    id: "camlica-tepesi",
    name: "Büyük Çamlıca Tepesi",
    type: "Manzara",
    level: "safe",
    score: 4.2,
    votes: 133,
    description:
      "Büyük Çamlıca Tepesi, Anadolu Yakası'ndan geniş İstanbul manzarası izlemek için tercih edilen popüler seyir noktasıdır.",
    points: toLeafletPoints([
      [29.064536, 41.025416], [29.067592, 41.024049], [29.069837, 41.025029],
      [29.070811, 41.026416], [29.070216, 41.02962], [29.070946, 41.032027],
      [29.066105, 41.032986], [29.065401, 41.031823], [29.064779, 41.02862],
    ]),
  },
  {
    id: "camlica-camii",
    name: "Büyük Çamlıca Camii",
    type: "Dini",
    level: "safe",
    score: 4.3,
    votes: 141,
    description:
      "Büyük Çamlıca Camii, büyük ölçeği, modern külliyesi ve Çamlıca'daki konumuyla İstanbul'un yeni simge yapılarından biri.",
    points: toLeafletPoints([
      [29.067734, 41.033218], [29.069339, 41.035559], [29.070602, 41.035689],
      [29.0724, 41.034623], [29.072572, 41.033783], [29.071394, 41.03233],
      [29.067819, 41.03317],
    ]),
  },
  {
    id: "ataturk-arboretumu",
    name: "Atatürk Arboretumu",
    type: "Doğa",
    level: "safe",
    score: 4.4,
    votes: 126,
    description:
      "Atatürk Arboretumu, farklı ağaç türleri, göletleri ve sakin doğa atmosferiyle fotoğraf ve yürüyüş için sevilen bir alan.",
    points: toLeafletPoints([
      [28.972858, 41.176298], [28.974348, 41.179997], [28.978319, 41.18245],
      [28.981704, 41.182956], [28.98509, 41.18245], [28.98906, 41.179997],
      [28.99055, 41.176298], [28.989505, 41.173159], [28.985874, 41.170426],
      [28.981704, 41.169639], [28.977534, 41.170426], [28.973903, 41.173159],
    ]),
  },
  {
    id: "anadolu-hisari",
    name: "Anadolu Hisarı",
    type: "Tarihi",
    level: "safe",
    score: 4.0,
    votes: 102,
    description:
      "Anadolu Hisarı, Boğaz'ın Anadolu yakasındaki tarihi savunma yapısı ve çevresindeki sakin mahalle dokusuyla bilinir.",
    points: toLeafletPoints([
      [29.066151, 41.081615], [29.06694, 41.085204], [29.065896, 41.088236],
      [29.066151, 41.091326], [29.070354, 41.091512], [29.073434, 41.081572],
      [29.071194, 41.082839],
    ]),
  },
  {
    id: "beylerbeyi",
    name: "Beylerbeyi Sarayı",
    type: "Tarihi",
    level: "safe",
    score: 4.2,
    votes: 119,
    description:
      "Beylerbeyi Sarayı, Boğaz kıyısındaki zarif mimarisi ve yazlık saray kimliğiyle Anadolu Yakası'nın önemli tarihi duraklarından biri.",
    points: toLeafletPoints([
      [29.038348, 41.04211], [29.043074, 41.037517], [29.045449, 41.038578],
      [29.042085, 41.043668], [29.03826, 41.042093],
    ]),
  },
  {
    id: "yildiz-parki",
    name: "Yıldız Parkı",
    type: "Park",
    level: "safe",
    score: 4.2,
    votes: 132,
    description:
      "Yıldız Parkı, Beşiktaş'ta koru dokusu, köşkleri ve Boğaz'a yakın konumuyla şehir içinde geniş bir yeşil kaçış alanı sunar.",
    points: toLeafletPoints([
      [29.013486, 41.043725], [29.01645, 41.044909], [29.021606, 41.047633],
      [29.020036, 41.049887], [29.014467, 41.053783], [29.0123, 41.054252],
      [29.011428, 41.048411], [29.013302, 41.045797],
    ]),
  },
  {
    id: "yedikule",
    name: "Yedikule Hisarı",
    type: "Tarihi",
    level: "medium",
    score: 3.7,
    votes: 84,
    description:
      "Yedikule Hisarı, sur hattı ve tarihsel atmosferiyle İstanbul'un daha sakin ama etkileyici tarihi yapılarından biridir.",
    points: toLeafletPoints([
      [28.919893, 40.992305], [28.925466, 40.990796], [28.932698, 40.996511],
      [28.921722, 41.000108], [28.920021, 40.99953], [28.920914, 40.99603],
    ]),
  },
  {
    id: "galata-mevlevihanesi",
    name: "Galata Mevlevihanesi",
    type: "Müze",
    level: "safe",
    score: 4.0,
    votes: 97,
    description:
      "Galata Mevlevihanesi, Mevlevi kültürünü ve Beyoğlu'nun tarihi dokusunu tanımak için kısa ama anlamlı bir müze durağıdır.",
    points: toLeafletPoints([
      [28.97491, 41.028498], [28.976245, 41.02786], [28.975446, 41.026916],
      [28.974564, 41.027293], [28.973801, 41.027797], [28.973849, 41.028426],
      [28.974862, 41.028489],
    ]),
  },
  {
    id: "istanbul-akvaryum",
    name: "İstanbul Akvaryum",
    type: "Eğlence",
    level: "safe",
    score: 4.1,
    votes: 111,
    description:
      "İstanbul Akvaryum, tematik gezi rotası ve deniz canlılarıyla özellikle aileler için popüler bir kapalı gezi noktasıdır.",
    points: toLeafletPoints([
      [28.802213, 40.962644], [28.803464, 40.964071], [28.797156, 40.967113],
      [28.795711, 40.966253], [28.802324, 40.96256],
    ]),
  },
  {
    id: "mihrimah-sultan",
    name: "Mihrimah Sultan Camii",
    type: "Dini",
    level: "safe",
    score: 4.0,
    votes: 89,
    description:
      "Mihrimah Sultan Camii, Üsküdar sahiline yakın konumu ve Mimar Sinan çizgisindeki mimarisiyle dikkat çeken tarihi camilerden biri.",
    points: toLeafletPoints([
      [28.935556, 41.029973], [28.933999, 41.028427], [28.937454, 41.028112],
      [28.935594, 41.029945],
    ]),
  },
  {
    id: "bakirkoy-botanik",
    name: "Bakırköy Botanik Parkı",
    type: "Park",
    level: "safe",
    score: 4.0,
    votes: 94,
    description:
      "Bakırköy Botanik Parkı, çocuk oyun alanları, tematik bahçeleri ve gölet çevresiyle aile gezileri için uygun bir park.",
    points: toLeafletPoints([
      [28.87646, 40.998238], [28.882743, 41.000522], [28.884274, 41.000349],
      [28.877851, 40.996909], [28.876812, 40.99679], [28.876425, 40.998171],
    ]),
  },
  {
    id: "karabayir",
    name: "Karabayır",
    type: "Geçiş",
    level: "risky",
    score: 2.6,
    votes: 76,
    description:
      "Karabayır, demo güvenlik haritasında kullanıcıların daha dikkatli rota seçmesi gereken yoğun yerleşim alanı olarak işaretlendi.",
    points: toLeafletPoints([
      [28.84274, 41.054031], [28.847828, 41.064762], [28.865169, 41.070947],
      [28.88251, 41.064762], [28.887598, 41.054031], [28.882504, 41.043302],
      [28.865169, 41.03712], [28.847834, 41.043302],
    ]),
  },
  {
    id: "gaziosmanpasa",
    name: "Gaziosmanpaşa",
    type: "Geçiş",
    level: "medium",
    score: 3.1,
    votes: 82,
    description:
      "Gaziosmanpaşa, demo haritasında kalabalık ve semt içi geçişleri nedeniyle orta dikkat seviyesinde gösterilen geniş bir alan.",
    points: toLeafletPoints([
      [28.89885, 41.058142], [28.902231, 41.065271], [28.913752, 41.06938],
      [28.925272, 41.065271], [28.928654, 41.058142], [28.92527, 41.051014],
      [28.913752, 41.046907], [28.902234, 41.051014],
    ]),
  },
  {
    id: "bagcilar",
    name: "Bağcılar",
    type: "Geçiş",
    level: "medium",
    score: 3.0,
    votes: 79,
    description:
      "Bağcılar, demo güvenlik katmanında yoğun yerleşim ve aktarma trafiği nedeniyle orta seviye dikkat alanı olarak yer alıyor.",
    points: toLeafletPoints([
      [28.839845, 41.033638], [28.843938, 41.042271], [28.857883, 41.047246],
      [28.871829, 41.042271], [28.875922, 41.033638], [28.871825, 41.025007],
      [28.857883, 41.020033], [28.843941, 41.025007],
    ]),
  },
];

const istanbulDemoMarkers = istanbulDemoAreas.map((area) => {
  const [latSum, lngSum] = area.points.reduce(
    ([latTotal, lngTotal], [lat, lng]) => [latTotal + lat, lngTotal + lng],
    [0, 0],
  );

  return [latSum / area.points.length, lngSum / area.points.length, area.name];
});


function getAreaCenter(area) {
  const [latSum, lngSum] = area.points.reduce(
    ([latTotal, lngTotal], [lat, lng]) => [latTotal + lat, lngTotal + lng],
    [0, 0],
  );

  return [latSum / area.points.length, lngSum / area.points.length];
}

function isPointInsideArea(point, areaPoints) {
  const [lat, lng] = point;
  let inside = false;

  for (let i = 0, j = areaPoints.length - 1; i < areaPoints.length; j = i++) {
    const [latI, lngI] = areaPoints[i];
    const [latJ, lngJ] = areaPoints[j];
    const intersects =
      lngI > lng !== lngJ > lng &&
      lat < ((latJ - latI) * (lng - lngI)) / (lngJ - lngI) + latI;

    if (intersects) inside = !inside;
  }

  return inside;
}

function distanceBetweenPoints(firstPoint, secondPoint) {
  const [firstLat, firstLng] = firstPoint;
  const [secondLat, secondLng] = secondPoint;
  return Math.hypot(firstLat - secondLat, firstLng - secondLng);
}

function findAreaForMapClick(latlng) {
  const clickedPoint = [latlng.lat, latlng.lng];
  const containingArea = currentCity.areas.find((area) => isPointInsideArea(clickedPoint, area.points));

  if (containingArea) return containingArea;

  return currentCity.areas
    .map((area) => ({
      area,
      distance: distanceBetweenPoints(clickedPoint, getAreaCenter(area)),
    }))
    .filter(({ distance }) => distance < 0.01)
    .sort((first, second) => first.distance - second.distance)[0]?.area;
}

async function loadCityRatings(cityKey) {
  try {
    const response = await fetch(`/api/ratings?city=${encodeURIComponent(cityKey)}`, {
      cache: "no-store",
    });

    if (!response.ok) return;

    const ratings = await response.json();
    const city = cityData[cityKey];

    city.areas.forEach((area) => {
      const base = baseScores.get(getAreaKey(cityKey, area.id));
      const serverRating = ratings[area.id];

      if (!base) return;

      if (serverRating?.votes > 0) {
        const totalVotes = base.votes + serverRating.votes;
        area.score = (base.score * base.votes + serverRating.scoreTotal) / totalVotes;
        area.votes = totalVotes;
        area.comments =
          Array.isArray(serverRating.comments) && serverRating.comments.length > 0
            ? serverRating.comments
            : getDemoCommentsForArea(area);
      } else {
        area.score = base.score;
        area.votes = base.votes;
        area.comments = getDemoCommentsForArea(area);
      }
    });
  } catch {
    // Static fallback: keep built-in demo scores if the API is unavailable.
  }
}

async function submitAreaRating(cityKey, areaId, rating, comment) {
  const response = await fetch("/api/rate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ city: cityKey, areaId, rating, comment }),
  });

  if (!response.ok) {
    throw new Error("Puan gönderilemedi");
  }

  return response.json();
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatForumTime(timestamp) {
  return new Date(timestamp).toLocaleString("tr-TR", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

async function fetchForum(cityKey) {
  const response = await fetch(`/api/forum?city=${encodeURIComponent(cityKey)}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Forum yuklenemedi");
  }

  return response.json();
}

async function createForumTopic(payload) {
  const response = await fetch("/api/forum/topic", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Konu olusturulamadi");
  }

  return response.json();
}

async function createForumReply(payload) {
  const response = await fetch("/api/forum/reply", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Yanit gonderilemedi");
  }

  return response.json();
}

const cityData = {
  izmir: {
    name: "\u0130zmir",
    center: [38.4237, 27.1428],
    zoom: 13,
    areas: izmirDemoAreas,
    markers: izmirDemoMarkers,
  },
  ankara: {
    name: "Ankara",
    center: [39.9208, 32.8541],
    zoom: 12,
    areas: ankaraDemoAreas,
    markers: ankaraDemoMarkers,
  },
  istanbul: {
    name: "\u0130stanbul",
    center: [41.0082, 28.9784],
    zoom: 12,
    areas: istanbulDemoAreas,
    markers: istanbulDemoMarkers,
  },
};

const levelMeta = {
  safe: { label: "Yeşil - güvenli", color: "#3fa66b", className: "is-safe" },
  medium: { label: "Sarı - dikkatli", color: "#e5b84c", className: "is-medium" },
  risky: { label: "Kırmızı - riskli", color: "#df675c", className: "is-risky" },
};

const homeScreen = document.querySelector("#home-screen");
const chatScreen = document.querySelector("#chat-screen");
const openChatButton = document.querySelector("#open-chat");
const chatBackButton = document.querySelector("#chat-back");
const chatCitySelect = document.querySelector("#chat-city");
const mapScreen = document.querySelector("#map-screen");
const searchForm = document.querySelector("#search-form");
const destinationSelect = document.querySelector("#destination");
const searchHelper = document.querySelector("#search-helper");
const cityTitle = document.querySelector("#city-title");
const areaName = document.querySelector("#area-name");
const areaDescription = document.querySelector("#area-description");
const areaImage = document.querySelector("#area-image");
const areaScore = document.querySelector("#area-score");
const areaVotes = document.querySelector("#area-votes");
const areaType = document.querySelector("#area-type");
const riskPill = document.querySelector("#risk-pill");
const ratingButtons = document.querySelectorAll("#rating-buttons button");
const commentInput = document.querySelector("#comment-input");
const commentSubmit = document.querySelector("#comment-submit");
const commentsList = document.querySelector("#comments-list");
const bottomPanel = document.querySelector(".bottom-panel");
const panelToggleButton = document.querySelector("#panel-toggle");
const emergencyButton = document.querySelector(".emergency-button");
const emergencyOverlay = document.querySelector("#emergency-overlay");
const emergencyClose = document.querySelector("#emergency-close");
const emergencyFeedback = document.querySelector("#emergency-feedback");
const emergencyOptions = document.querySelectorAll(".emergency-option");
const routeButton = document.querySelector("#route-button");
const routeOverlay = document.querySelector("#route-overlay");
const routeClose = document.querySelector("#route-close");
const routeMode = document.querySelector("#route-mode");
const routeGenerate = document.querySelector("#route-generate");
const routeFeedback = document.querySelector("#route-feedback");
const forumCityLabel = document.querySelector("#forum-city-label");
const forumList = document.querySelector("#forum-list");
const forumTopicForm = document.querySelector("#forum-topic-form");
const forumAuthorInput = document.querySelector("#forum-author");
const forumTitleInput = document.querySelector("#forum-title");
const forumMessageInput = document.querySelector("#forum-message");

let map;
let currentCity = cityData.izmir;
let currentCityKey = "izmir";
let selectedArea;
let selectedRating = null;
let forumTopics = [];
let regionLayer = L.layerGroup();
let markerLayer = L.layerGroup();
let routeLayer = L.layerGroup();
const polygonById = new Map();
const baseScores = new Map();
const areaImageById = {
  "saat-kulesi-konak": "images/izmir/İzmir_Saat_Kulesi_-_21082022_(2).jpg",
  "tarihi-asansor": "images/izmir/Izmir_Asansör_(October_2018).jpg",
  kemeralti: "images/izmir/Izmir_Kemeraltı_Çarşısı_5904.jpg",
  kordon: "images/izmir/TR_Izmir_asv2020-02_img16_Alsancak_seaside.jpg",
  sasali: "images/izmir/İzmir_Doğal_Yaşam_Parkı_2024_-2266_10.jpg",
  agora: "images/izmir/Agora_of_Smyrna.jpg",
  kulturpark: "images/izmir/Kültürpark,_May_2019_(1).jpg",
  yesildere: "images/izmir/yesildere.jpg",
  kadifekale: "images/izmir/Izmir_Kadifekale_view_from_wall_5681.jpg",
  "ataturk-muzesi": "images/izmir/Atatürk Müzesi İzmir.jpg",
  "kibris-sehitleri": "images/izmir/Kibris_Sehitleri_Caddesi.jpg",
  "alsancak-sevgi-yolu": "images/izmir/Alsancak_-_panoramio.jpg",
  teleferik: "images/izmir/Teleferik,_izmir.jpg",
  "karsiyaka-carsisi": "images/izmir/Karşıyaka_Bazaar_Street_2015.jpg",

  "dikmen-vadisi": "images/ankara/Dikmen_Vadisi,_Ankara_3.jpg",
  anitkabir: "images/ankara/Ataturk's_Mausoleum_(6225341313).jpg",
  "ankara-kalesi-muzeler": "images/ankara/Ankara_Castle.jpg",
  "hisar-parki": "images/ankara/Ankara_Castle.jpg",
  "ataturk-orman-ciftligi":
    "images/ankara/ataturk-orman-ciftlig.jpg",
  hamamonu: "images/ankara/Hamamonuevleri.jpg",
  "genclik-parki": "images/ankara/Ankara_asv2021-10_img57_Gençlik_Park.jpg",
  "kugulu-park": "images/ankara/Ankara_Kuğulu_Park.jpg",
  "haci-bayram-augustus": "images/ankara/Haci_Bayram_Mosque_02.jpg",
  "roma-hamami": "images/ankara/Ankara_Thermen05.jpg",
  "kocatepe-camii": "images/ankara/Kocatepe_Camii_Ankara.jpg",
  ulucanlar: "images/ankara/ulucanlarcezaevimuzesi.jpg",
  "segmenler-atakule-pembe-kosk": "images/ankara/Seğmenler_Parkı.jpg",
  kizilay: "images/ankara/kizilaymeydani.jpg",
  "estergon-kalesi": "images/ankara/Castillo_de_Estergon,_Ankara,_Turquía,_2024-10-03,_DD_54.jpg",
  "meclis-parki": "images/ankara/meclisparki.jpg",
  "aqua-vega-akvaryum": "images/ankara/avm-akvaryum-aa-ankara-1735524.jpg",
  "nata-vega": "images/ankara/nataVegaSlider2.jpg",
  "elli-yil-parki": "images/ankara/50._yıl_parkı_-_panoramio.jpg",
  "kurtulus-parki": "images/ankara/20240601_Kurtuluş_Parkı,_Ankara.jpg",
  ankapark: "images/ankara/ankapark.jpg",
  "millet-kutuphanesi": "images/ankara/T.C._Cumhurbaşkanlığı_Millet_Kütüphanesi_2025.jpg",
  "harikalar-diyari": "images/ankara/Harikalar_Diyari_05984_nevit.jpg",

  "topkapi-sarayi": "images/istanbul/960px-Topkapı_-_01.jpg",
  ayasofya: "images/istanbul/Hagia_Sophia_Mars_2013.jpg",
  suleymaniye:
    "images/istanbul/PXL_20241210_102315450_Suleymaniye_Mosque_Süleymaniye_Camii_Istanbul_Turkey_12.jpg",
  yerebatan: "images/istanbul/Basilica_Cistern_after_restoration_2022_(11).jpg",
  dolmabahce: "images/istanbul/Dolmabahçe_Sarayı_-_Selamlık.jpg",
  "galata-kulesi": "images/istanbul/Istanbul_Galata_Tower_IMG_8211_1920.jpg",
  gulhane: "images/istanbul/Gülhane_parkı_3.jpg",
  "kapali-carsi": "images/istanbul/Grand_Bazaar_(Istanbul).jpg",
  taksim: "images/istanbul/Istanbul_Taksim.png",
  "gezi-parki": "images/istanbul/gezipark.webp",
  "kiz-kulesi": "images/istanbul/Kız_Kulesi,_Maiden's_Tower_(52397064030).jpg",
  "rumeli-hisari": "images/istanbul/Twierdza_Rumeli_Istambuł_RB1.jpg",
  sultanahmet: "images/istanbul/Sultanahmet_Square_(Hippodrome),_Istanbul.jpg",
  "eyup-sultan": "images/istanbul/Eyup_sultan_camii_interior_Istanbul_2013_1.jpg",
  "eyup-mezarligi": "images/istanbul/DSC04831_Istanbul_-_Cimitero_di_Eyüp_-_Foto_G._Dall'Orto_30-5-2006.jpg",
  "fatih-camii": "images/istanbul/Fatih_camii_DSCF6684.jpg",
  "ortakoy-camii": "images/istanbul/Istanbul_asv2020-02_img61_Ortaköy_Mosque.jpg",
  miniaturk: "images/istanbul/Istanbul_Miniatürk_IMG_8341_1920.jpg",
  "emirgan-korusu": "images/istanbul/Emirgan_Korusu.jpg",
  "belgrad-ormani": "images/istanbul/Belgradormani2.jpg",
  "camlica-tepesi": "images/istanbul/Büyük_Çamlıca_Tepesi_ve_gün_batımı.jpg",
  "camlica-camii": "images/istanbul/Büyük_Çamlıca_Camii.jpg",
  "ataturk-arboretumu": "images/istanbul/Atatürk_Arboretumu,_2014_Sonbahar-7.jpg",
  "anadolu-hisari": "images/istanbul/Anadolu_Hisarı_in_2024_(cropped).jpg",
  beylerbeyi: "images/istanbul/Beylerbeyi_Palace_-_wide.jpg",
  "yildiz-parki": "images/istanbul/yildizparki.webp",
  yedikule: "images/istanbul/Yedikule_Hisarı_Hazine_Kulesi.jpg",
  "galata-mevlevihanesi": "images/istanbul/Galata_Mevlevihanesi_Müzesi_10.jpg",
  "istanbul-akvaryum": "images/istanbul/Istanbul_Aquarium_-_Tourism_in_Turkey_-_آکواریوم_استانبول_16.jpg",
  "mihrimah-sultan":
    "images/istanbul/Istanbul_Mihrimah_Sultan_Mosque_(Edirnekapı)_view_from_surroundings_in_2004_1187.jpg",
  "bakirkoy-botanik": "images/istanbul/Bakırköy Botanik Parkı.jpg",
  karabayir: "images/istanbul/Bakırköy Botanik Parkı.jpg",
  gaziosmanpasa: "images/istanbul/Bakırköy Botanik Parkı.jpg",
  bagcilar: "images/istanbul/Bakırköy Botanik Parkı.jpg",
};

const defaultCityImage = {
  izmir: "images/izmir/İzmir_Saat_Kulesi_-_21082022_(2).jpg",
  ankara: "images/ankara/Ataturk's_Mausoleum_(6225341313).jpg",
  istanbul: "images/istanbul/Hagia_Sophia_Mars_2013.jpg",
};

function getAreaKey(cityKey, areaId) {
  return `${cityKey}:${areaId}`;
}

function toBrowserPath(path) {
  return String(path)
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");
}

function syncPanelToggleLabel() {
  const isCollapsed = bottomPanel.classList.contains("is-collapsed");
  panelToggleButton.textContent = isCollapsed ? "Detay goster" : "Detay gizle";
  panelToggleButton.setAttribute("aria-expanded", String(!isCollapsed));
}

function getDemoCommentsForArea(area) {
  const now = Date.now();
  const score = Math.max(1, Math.min(5, Math.round(area.score)));

  return [
    {
      rating: score,
      text: `${area.name} bolgesinde gunduz saatlerinde guvenli hissettim.`,
      createdAt: now - 1000 * 60 * 60 * 6,
    },
    {
      rating: score,
      text: `${area.type} noktalarina ulasim kolay, ana guzergahlarda kalmak daha iyi.`,
      createdAt: now - 1000 * 60 * 60 * 2,
    },
  ];
}

function renderAreaComments(area) {
  if (!commentsList) return;
  const comments = Array.isArray(area.comments) ? area.comments : [];

  if (!comments.length) {
    commentsList.innerHTML = '<p class="forum-meta">Bu bolge icin henuz yorum yok.</p>';
    return;
  }

  commentsList.innerHTML = comments
    .slice(-12)
    .reverse()
    .map((item) => {
      const stamp = new Date(item.createdAt).toLocaleString("tr-TR", {
        day: "2-digit",
        month: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      });
      return `<div class="comment-item"><p>${escapeHtml(item.text)}</p><span>${item.rating}/5 · ${stamp}</span></div>`;
    })
    .join("");
}

function openEmergencyModal() {
  if (!emergencyOverlay) return;
  emergencyOverlay.classList.remove("is-hidden");
  if (emergencyFeedback) emergencyFeedback.textContent = "";
}

function closeEmergencyModal() {
  if (!emergencyOverlay) return;
  emergencyOverlay.classList.add("is-hidden");
}

function openRouteModal() {
  if (!selectedArea || !routeOverlay) return;
  routeOverlay.classList.remove("is-hidden");
  if (routeFeedback) routeFeedback.textContent = "";
}

function closeRouteModal() {
  if (!routeOverlay) return;
  routeOverlay.classList.add("is-hidden");
}

function distance(a, b) {
  return Math.hypot(a[0] - b[0], a[1] - b[1]);
}

function chooseWaypointByMode(mode, start, end) {
  const midpoint = [(start[0] + end[0]) / 2, (start[1] + end[1]) / 2];
  const candidates = currentCity.areas
    .filter((area) => area.id !== selectedArea.id)
    .map((area) => {
      const center = getAreaCenter(area);
      const nearPathPenalty = distance(center, midpoint) + distance(center, end);
      const votes = Number(area.votes || 0);
      const levelPenalty = area.level === "risky" ? 2 : area.level === "medium" ? 1 : 0;
      const brightBoost = ["Turistik", "Çarşı", "Kafe", "Tarihi", "Müze", "Dini"].includes(area.type) ? 1 : 0;
      const studentBoost = ["Çarşı", "Park", "Yürüyüş", "Kafe"].includes(area.type) ? 1 : 0;

      let score = nearPathPenalty;
      if (mode === "safe") score += levelPenalty * 2 - (area.score || 0) * 0.2;
      if (mode === "crowded") score -= votes * 0.008 + brightBoost * 0.3;
      if (mode === "calm") score += votes * 0.008 + brightBoost * 0.15;
      if (mode === "student") score -= studentBoost * 1.1 - levelPenalty * 0.8 + distance(start, center) * 0.3;

      return { area, center, score };
    })
    .sort((a, b) => a.score - b.score);

  return candidates[0]?.center || null;
}

function getModeMeta(mode) {
  if (mode === "safe") return { color: "#2f9b63", label: "En güvenli rota" };
  if (mode === "crowded") return { color: "#2f7fb8", label: "En kalabalık rota" };
  if (mode === "calm") return { color: "#6a5acd", label: "En sakin rota" };
  return { color: "#2f6965", label: "Öğrenci modu" };
}

async function fetchRoadRoute(points) {
  const coords = points.map(([lat, lng]) => `${lng},${lat}`).join(";");
  const url = `https://router.project-osrm.org/route/v1/driving/${coords}?overview=full&geometries=geojson`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("route fetch failed");
  const data = await response.json();
  const route = data?.routes?.[0];
  if (!route?.geometry?.coordinates?.length) throw new Error("empty route");

  const latLngs = route.geometry.coordinates.map(([lng, lat]) => [lat, lng]);
  return {
    points: latLngs,
    distanceKm: route.distance / 1000,
    durationMin: route.duration / 60,
  };
}

async function drawRoute(mode) {
  if (!map || !selectedArea) return;
  const start = [map.getCenter().lat, map.getCenter().lng];
  const end = getAreaCenter(selectedArea);
  const waypoint = chooseWaypointByMode(mode, start, end);
  const meta = getModeMeta(mode);

  routeLayer.clearLayers();

  const requestedPath = waypoint ? [start, waypoint, end] : [start, end];
  let drawnPoints = requestedPath;
  let distanceKm = null;
  let durationMin = null;

  try {
    const route = await fetchRoadRoute(requestedPath);
    drawnPoints = route.points;
    distanceKm = route.distanceKm;
    durationMin = route.durationMin;
  } catch {
    // fallback
  }

  L.polyline(drawnPoints, {
    color: meta.color,
    weight: 5,
    opacity: 0.92,
    lineJoin: "round",
  }).addTo(routeLayer);

  L.marker(start, {
    icon: L.divIcon({ className: "route-start-dot", iconSize: [12, 12], iconAnchor: [6, 6] }),
  }).addTo(routeLayer);

  L.marker(end, {
    icon: L.divIcon({ className: "route-end-dot", iconSize: [12, 12], iconAnchor: [6, 6] }),
  }).addTo(routeLayer);

  const length = drawnPoints.reduce((total, point, index) => {
    if (index === 0) return total;
    return total + distance(drawnPoints[index - 1], point);
  }, 0);
  const km = distanceKm ?? Number((length * 111).toFixed(1));
  const mins = durationMin ?? Math.max(6, Math.round(Number(km) * 11));

  if (routeFeedback) routeFeedback.textContent = `${meta.label} oluşturuldu • ~${Number(km).toFixed(1)} km • ~${Math.round(mins)} dk`;
}

function rememberBaseScores() {
  Object.entries(cityData).forEach(([cityKey, city]) => {
    city.areas.forEach((area) => {
      baseScores.set(getAreaKey(cityKey, area.id), {
        score: area.score,
        votes: area.votes,
      });
    });
  });
}

function afterPaint(callback) {
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(callback);
  });
}

function renderForum() {
  if (!forumList) return;

  if (!forumTopics.length) {
    forumList.innerHTML = '<p class="forum-meta">Bu sehir icin henuz konu yok.</p>';
    return;
  }

  forumList.innerHTML = forumTopics
    .map((topic) => {
      const messagesHtml = topic.messages
        .slice(-4)
        .map(
          (message) => `
            <div class="forum-message">
              <p>${escapeHtml(message.text)}</p>
              <span>${escapeHtml(message.author)} · ${formatForumTime(message.createdAt)}</span>
            </div>`,
        )
        .join("");

      return `
        <article class="forum-topic" data-topic-id="${escapeHtml(topic.id)}">
          <h4>${escapeHtml(topic.title)}</h4>
          <p class="forum-meta">${escapeHtml(topic.author)} · ${formatForumTime(topic.createdAt)}</p>
          <div class="forum-messages">${messagesHtml}</div>
          <form class="forum-reply-form">
            <input type="text" name="replyText" placeholder="Yanit yaz" maxlength="220" required />
            <button type="submit">Gonder</button>
          </form>
        </article>`;
    })
    .join("");
}

async function refreshForum(cityKey) {
  try {
    forumTopics = await fetchForum(cityKey);
    renderForum();
  } catch {
    forumList.innerHTML = '<p class="forum-meta">Forum su an yuklenemedi.</p>';
  }
}

function setForumCity(cityKey) {
  if (!cityData[cityKey]) return;
  currentCityKey = cityKey;
  if (forumCityLabel) forumCityLabel.textContent = cityData[cityKey].name;
  destinationSelect.value = cityKey;
  if (chatCitySelect) chatCitySelect.value = cityKey;
  refreshForum(cityKey);
}

async function openMap(cityKey) {
  currentCityKey = cityKey;
  currentCity = cityData[cityKey];
  homeScreen.classList.add("is-hidden");
  mapScreen.classList.remove("is-hidden");
  cityTitle.textContent = currentCity.name;
  await loadCityRatings(cityKey);

  afterPaint(() => {
    if (!map) {
      map = L.map("map", {
        zoomControl: false,
        attributionControl: true,
      });

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "&copy; OpenStreetMap",
      }).addTo(map);

      regionLayer.addTo(map);
      markerLayer.addTo(map);
      routeLayer.addTo(map);
      L.control.zoom({ position: "bottomleft" }).addTo(map);
      map.on("click", (event) => {
        const clickedArea = findAreaForMapClick(event.latlng);
        if (clickedArea) selectArea(clickedArea);
      });
    }

    map.invalidateSize();
    renderCity(currentCity);
    window.setTimeout(() => map.invalidateSize(), 250);
  });
}

function renderCity(city) {
  polygonById.clear();
  regionLayer.clearLayers();
  markerLayer.clearLayers();
  routeLayer.clearLayers();
  map.setView(city.center, city.zoom);

  city.areas.forEach((area) => {
    const meta = levelMeta[area.level];
    const polygon = L.polygon(area.points, {
      className: "area-shape",
      color: meta.color,
      fillColor: meta.color,
      fillOpacity: 0.34,
      interactive: true,
      opacity: 0.95,
      weight: 3,
    }).addTo(regionLayer);

    polygon.on("click", (event) => {
      if (event.originalEvent) L.DomEvent.stopPropagation(event.originalEvent);
      selectArea(area);
    });
    polygon.bindTooltip(area.name, { sticky: true });
    polygonById.set(area.id, polygon);

    const isMuseumArea = area.type === "Müze" || area.name.includes("Müzesi");

    if (isMuseumArea) {
      const museumIcon = L.divIcon({
        className: "museum-pin",
        html: "🏛️",
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });

      L.marker(getAreaCenter(area), { icon: museumIcon })
        .on("click", (event) => {
          if (event.originalEvent) L.DomEvent.stopPropagation(event.originalEvent);
          selectArea(area);
        })
        .bindTooltip(`${area.name} (Müze)`, { sticky: true })
        .addTo(markerLayer);
    } else {
      L.circleMarker(getAreaCenter(area), {
        className: "area-marker",
        radius: 7,
        color: "#ffffff",
        weight: 3,
        fillColor: "#315f5b",
        fillOpacity: 1,
      })
        .on("click", (event) => {
          if (event.originalEvent) L.DomEvent.stopPropagation(event.originalEvent);
          selectArea(area);
        })
        .bindTooltip(area.name, { sticky: true })
        .addTo(markerLayer);
    }
  });

  selectArea(city.areas[0]);
}

function selectArea(area) {
  if (bottomPanel.classList.contains("is-collapsed")) {
    bottomPanel.classList.remove("is-collapsed");
    syncPanelToggleLabel();
  }

  selectedArea = area;
  const meta = levelMeta[area.level];
  areaName.textContent = area.name;
  areaDescription.textContent = area.description;
  areaScore.textContent = area.score.toFixed(1);
  areaVotes.textContent = area.votes.toLocaleString("tr-TR");
  areaType.textContent = area.type;
  const imagePath = areaImageById[area.id] || defaultCityImage[currentCityKey];
  areaImage.setAttribute("src", toBrowserPath(imagePath));
  areaImage.alt = `${area.name} gorseli`;
  riskPill.textContent = meta.label;
  riskPill.className = `risk-pill ${meta.className}`;
  selectedRating = null;
  ratingButtons.forEach((button) => {
    button.classList.remove("is-active");
  });
  if (commentInput) commentInput.value = "";
  renderAreaComments(area);

  currentCity.areas.forEach((cityArea) => {
    const cityAreaPolygon = polygonById.get(cityArea.id);
    if (!cityAreaPolygon) return;

    cityAreaPolygon.setStyle({
      color: levelMeta[cityArea.level].color,
      fillColor: levelMeta[cityArea.level].color,
      fillOpacity: 0.34,
      weight: 3,
    });
  });

  const polygon = polygonById.get(area.id);
  if (polygon) {
    polygon.setStyle({ weight: 5, fillOpacity: 0.42 });
  }
}

searchForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const cityKey = destinationSelect.value;

  if (!cityKey) {
    searchHelper.textContent = "Devam etmek için İzmir, Ankara veya İstanbul seçmelisin.";
    searchHelper.classList.add("is-error");
    return;
  }

  searchHelper.classList.remove("is-error");
  searchHelper.textContent = "Demo şehirleri: İzmir, Ankara, İstanbul";
  await openMap(cityKey);
});

document.querySelectorAll("[data-city]").forEach((button) => {
  button.addEventListener("click", async () => {
    setForumCity(button.dataset.city);
    await openMap(button.dataset.city);
  });
});

destinationSelect.addEventListener("change", () => {
  if (!destinationSelect.value) return;
  setForumCity(destinationSelect.value);
});

openChatButton?.addEventListener("click", () => {
  homeScreen.classList.add("is-hidden");
  mapScreen.classList.add("is-hidden");
  chatScreen?.classList.remove("is-hidden");
  setForumCity(destinationSelect.value || "istanbul");
});

chatBackButton?.addEventListener("click", () => {
  chatScreen?.classList.add("is-hidden");
  homeScreen.classList.remove("is-hidden");
});

chatCitySelect?.addEventListener("change", () => {
  if (!chatCitySelect.value) return;
  setForumCity(chatCitySelect.value);
});

document.querySelector("#back-button").addEventListener("click", () => {
  mapScreen.classList.add("is-hidden");
  homeScreen.classList.remove("is-hidden");
});

document.querySelector("#locate-button").addEventListener("click", () => {
  map.setView(currentCity.center, currentCity.zoom);
});

ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedRating = Number(button.dataset.rating);
    ratingButtons.forEach((btn) => {
      btn.classList.toggle("is-active", Number(btn.dataset.rating) === selectedRating);
    });
  });
});

commentSubmit?.addEventListener("click", async () => {
  if (!selectedArea || !Number.isFinite(selectedRating)) return;
  const comment = commentInput?.value?.trim() || "";
  if (!comment) return;

  commentSubmit.disabled = true;

  try {
    const result = await submitAreaRating(currentCityKey, selectedArea.id, selectedRating, comment);
    const base = baseScores.get(getAreaKey(currentCityKey, selectedArea.id));
    const serverTotal = result.score * result.votes;
    const totalVotes = base.votes + result.votes;

    selectedArea.score = (base.score * base.votes + serverTotal) / totalVotes;
    selectedArea.votes = totalVotes;
    if (Array.isArray(result.comments) && result.comments.length > 0) {
      selectedArea.comments = result.comments;
    } else {
      const existing = Array.isArray(selectedArea.comments) ? selectedArea.comments : [];
      selectedArea.comments = [
        ...existing,
        {
          rating: selectedRating,
          text: comment,
          createdAt: Date.now(),
        },
      ].slice(-40);
    }
    commentInput.value = "";
    selectedRating = null;
    selectArea(selectedArea);
  } catch {
    // no-op for demo failure
  } finally {
    commentSubmit.disabled = false;
  }
});

forumTopicForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const author = forumAuthorInput.value.trim();
  const title = forumTitleInput.value.trim();
  const text = forumMessageInput.value.trim();
  if (!author || !title || !text) return;

  const submitButton = forumTopicForm.querySelector("button[type='submit']");
  submitButton.disabled = true;

  try {
    const created = await createForumTopic({
      city: currentCityKey,
      author,
      title,
      text,
    });
    forumTopics.unshift(created);
    renderForum();
    forumTitleInput.value = "";
    forumMessageInput.value = "";
  } finally {
    submitButton.disabled = false;
  }
});

forumList?.addEventListener("submit", async (event) => {
  const replyForm = event.target.closest(".forum-reply-form");
  if (!replyForm) return;
  event.preventDefault();

  const topicRoot = replyForm.closest(".forum-topic");
  const topicId = topicRoot?.dataset.topicId;
  const input = replyForm.querySelector("input[name='replyText']");
  const text = input.value.trim();
  const author = forumAuthorInput.value.trim() || "Misafir";
  if (!topicId || !text) return;

  const submitButton = replyForm.querySelector("button[type='submit']");
  submitButton.disabled = true;

  try {
    const result = await createForumReply({
      city: currentCityKey,
      topicId,
      author,
      text,
    });
    const topic = forumTopics.find((item) => item.id === result.topicId);
    if (topic) {
      topic.messages.push(result.message);
      renderForum();
    }
  } finally {
    submitButton.disabled = false;
    input.value = "";
  }
});

rememberBaseScores();
setForumCity(destinationSelect.value || "istanbul");

panelToggleButton.addEventListener("click", () => {
  bottomPanel.classList.toggle("is-collapsed");
  syncPanelToggleLabel();
});

syncPanelToggleLabel();

emergencyButton?.addEventListener("click", () => {
  openEmergencyModal();
});

emergencyClose?.addEventListener("click", () => {
  closeEmergencyModal();
});

emergencyOverlay?.addEventListener("click", (event) => {
  if (event.target === emergencyOverlay) {
    closeEmergencyModal();
  }
});

emergencyOptions.forEach((button) => {
  button.addEventListener("click", () => {
    const service = button.dataset.emergency;
    if (!emergencyFeedback) return;
    if (service === "polis") {
      emergencyFeedback.textContent = "Polise haber verildi.";
      return;
    }
    if (service === "ambulans") {
      emergencyFeedback.textContent = "Ambulansa haber verildi.";
    }
  });
});

routeButton?.addEventListener("click", () => {
  if (!bottomPanel.classList.contains("is-collapsed")) {
    bottomPanel.classList.add("is-collapsed");
    syncPanelToggleLabel();
  }
  openRouteModal();
});

routeClose?.addEventListener("click", () => {
  closeRouteModal();
});

routeOverlay?.addEventListener("click", (event) => {
  if (event.target === routeOverlay) closeRouteModal();
});

routeGenerate?.addEventListener("click", async () => {
  const mode = routeMode?.value || "safe";
  routeGenerate.disabled = true;
  await drawRoute(mode);
  routeGenerate.disabled = false;
  closeRouteModal();
});
