export type FoodRestaurant = {
  id:string;
  name:string;
  area:string;
  icon:string;
  location:string;
  feature:string;
  dishes:string[];
  price:string;
  note?:string;
};

export type FoodCity = {
  id:string;
  name:string;
  dates:string;
  icon:string;
  summary:string;
  restaurants:FoodRestaurant[];
};

export const foodCities:FoodCity[] = [
  {id:"madrid",name:"馬德里",dates:"9/16–9/19",icon:"🏙️",summary:"老城百年餐館、La Latina 小酒館與馬德里家常菜。",restaurants:[
    {id:"botin",name:"Restaurante Botín",area:"主廣場／奧地利區",icon:"🔥",location:"Restaurante Botín Madrid",feature:"1725 年創立的老字號烤肉餐廳，歷史氣氛完整，適合安排一餐正式的卡斯提亞料理。",dishes:["柴火烤乳豬","烤羊肉","蒜香蛤蜊","Botín 蛋糕"],price:"約 €35–65／人",note:"熱門時段務必訂位。"},
    {id:"casa-lucio",name:"Casa Lucio",area:"La Latina",icon:"🍳",location:"Casa Lucio Madrid",feature:"傳統馬德里家常菜名店，空間像老式小酒館，最具代表性的是香脆馬鈴薯配半熟蛋。",dishes:["Huevos rotos 碎蛋薯條","馬德里燉菜","燉牛肚","米布丁"],price:"約 €40–65／人",note:"座位有限，建議先訂位。"},
    {id:"casa-lucas",name:"Casa Lucas",area:"La Latina／Cava Baja",icon:"🥘",location:"Casa Lucas Madrid",feature:"小巧熱鬧的創意 Tapas 酒館，適合兩人點數份小盤共享，排入老城散步最順路。",dishes:["牛里肌 Tapas","鴨胸洋蔥","炸丸子","每日小黑板料理"],price:"約 €16–30／人"},
    {id:"la-campana",name:"La Campana",area:"主廣場",icon:"🥖",location:"La Campana Madrid",feature:"主廣場旁經典魷魚三明治店，價格實在、出餐快，適合行程中快速補充體力。",dishes:["Bocadillo de calamares 魷魚堡","炸魷魚","啤酒"],price:"約 €5–12／人"},
    {id:"casa-toni",name:"Casa Toni",area:"市中心／Sol",icon:"🍢",location:"Casa Toni Madrid",feature:"樸實的傳統小酒館，以現烤內臟、家常小菜和在地氣氛見長。",dishes:["烤豬耳","烤甜腸","炸小魚","西班牙烘蛋"],price:"約 €10–22／人"},
    {id:"san-miguel",name:"Mercado de San Miguel",area:"主廣場旁",icon:"🍷",location:"Mercado de San Miguel Madrid",feature:"觀光氣氛較濃但選擇集中，可少量品嘗海鮮、火腿、Tapas 和甜點，適合多人各自選食。",dishes:["伊比利火腿","海鮮 Tapas","橄欖串","吉拿棒"],price:"約 €15–35／人",note:"單價較高，建議少量品嘗，不必在此吃完整正餐。"}
  ]},
  {id:"segovia",name:"塞哥維亞",dates:"9/17",icon:"🏰",summary:"柴火烤乳豬、卡斯提亞燉豆與古城甜點。",restaurants:[
    {id:"jose-maria",name:"Restaurante José María",area:"主廣場附近",icon:"🐖",location:"Restaurante José María Segovia",feature:"塞哥維亞烤乳豬代表名店，食材與烤製流程完整，適合想認真品嘗地方招牌的人。",dishes:["烤乳豬","Judiones 燉大白豆","卡斯提亞湯","Ponche Segoviano"],price:"約 €40–65／人",note:"烤乳豬建議訂位時一併預留。"},
    {id:"meson-candido",name:"Mesón de Cándido",area:"水道橋旁",icon:"🍖",location:"Mesón de Cándido Segovia",feature:"就在水道橋腳下的歷史餐館，以餐盤切乳豬儀式和傳統裝潢聞名。",dishes:["烤乳豬","烤羊肉","塞哥維亞香腸","杏仁甜點"],price:"約 €40–70／人"},
    {id:"casa-duque",name:"Casa Duque",area:"古城",icon:"🥣",location:"Casa Duque Segovia",feature:"老派卡斯提亞料理，除了乳豬也有燉豆、湯品和烤肉，選擇較完整。",dishes:["烤乳豬","Judiones 大白豆","卡斯提亞蒜湯","烤羊肉"],price:"約 €30–50／人"},
    {id:"narizotas",name:"Narizotas",area:"主廣場周邊",icon:"🍲",location:"Restaurante Narizotas Segovia",feature:"木樑與地方畫作營造傳統氣氛，提供烤乳豬與較彈性的套餐選擇。",dishes:["烤乳豬","牛尾","時令菇類","Ponche Segoviano"],price:"約 €25–45／人"}
  ]},
  {id:"toledo",name:"托雷多",dates:"9/19",icon:"⚔️",summary:"鹿肉、鷓鴣、曼徹格起司與古城 Tapas。",restaurants:[
    {id:"alfileritos",name:"Alfileritos 24",area:"古城／Zocodover",icon:"🦌",location:"Alfileritos 24 Toledo",feature:"在歷史建築裡呈現較現代的托雷多料理，適合想嘗地方風味又重視用餐舒適度的人。",dishes:["燉鹿肉","鷓鴣料理","曼徹格起司","藏紅花甜點"],price:"約 €25–45／人"},
    {id:"el-trebol",name:"Cervecería El Trébol",area:"Zocodover 附近",icon:"🍺",location:"Cervecería El Trébol Toledo",feature:"古城人氣平價酒館，地下仍可看到歷史遺構，適合快速吃 Tapas。",dishes:["Bomba Trébol 肉餡馬鈴薯","小漢堡","烤肉串","啤酒"],price:"約 €10–22／人"},
    {id:"la-orza",name:"La Orza",area:"猶太區",icon:"🍷",location:"Restaurante La Orza Toledo",feature:"位置靠近聖多美教堂，環境安靜，以卡斯提亞食材和細緻傳統菜見長。",dishes:["鹿肉","鷓鴣","烤乳羊","曼徹格起司"],price:"約 €30–55／人"},
    {id:"adolfo",name:"Restaurante Adolfo",area:"主教座堂附近",icon:"✨",location:"Restaurante Adolfo Toledo",feature:"托雷多經典精緻餐廳，重視在地食材、葡萄酒與季節套餐，適合安排正式午餐。",dishes:["季節品嘗套餐","鹿肉或獵味","在地蔬菜","La Mancha 葡萄酒"],price:"約 €55–95／人",note:"套餐與營業日請先確認。"}
  ]},
  {id:"cordoba",name:"哥多華",dates:"9/20",icon:"🕌",summary:"燉牛尾、Salmorejo 冷湯與猶太區庭院餐館。",restaurants:[
    {id:"bodegas-mezquita",name:"Bodegas Mezquita",area:"清真寺周邊",icon:"🥣",location:"Bodegas Mezquita Céspedes Córdoba",feature:"對旅客友善、地方菜選擇完整，分店靠近清真寺，適合第一次品嘗哥多華料理。",dishes:["Salmorejo 冷湯","燉牛尾","炸茄子淋蜂蜜","Flamenquín 火腿肉卷"],price:"約 €20–38／人"},
    {id:"casa-pepe",name:"Casa Pepe de la Judería",area:"猶太區",icon:"🌿",location:"Casa Pepe de la Judería Córdoba",feature:"傳統庭院與屋頂露台氣氛佳，菜色從冷湯、牛尾到烤肉都很完整。",dishes:["Salmorejo","燉牛尾","羊排","炸茄子"],price:"約 €28–50／人"},
    {id:"taberna-salinas",name:"Taberna Salinas",area:"市中心",icon:"🍲",location:"Taberna Salinas Córdoba",feature:"老字號家常酒館，份量實在、裝潢樸實，適合想避開精緻餐廳的人。",dishes:["燉牛尾","燉朝鮮薊","Flamenquín","家常燉菜"],price:"約 €18–32／人"},
    {id:"bar-santos",name:"Bar Santos",area:"清真寺外牆",icon:"🥔",location:"Bar Santos Córdoba",feature:"以超厚西班牙烘蛋聞名的小酒吧，常見客人坐在清真寺外牆旁吃，適合快速小吃。",dishes:["巨厚 Tortilla","Salmorejo","啤酒"],price:"約 €5–12／人"}
  ]},
  {id:"seville",name:"塞維亞",dates:"9/20–9/23",icon:"💃",summary:"Tapas 巡禮、伊比利火腿與安達魯西亞傳統菜。",restaurants:[
    {id:"rinconcillo",name:"El Rinconcillo",area:"老城／Setas 附近",icon:"🕰️",location:"El Rinconcillo Sevilla",feature:"自 1670 年營業的歷史酒館，樓下站食 Tapas 最有氣氛，樓上則是正式餐廳。",dishes:["菠菜鷹嘴豆","伊比利火腿","燉牛尾","炸魚"],price:"約 €15–35／人"},
    {id:"eslava",name:"Espacio Eslava",area:"San Lorenzo",icon:"🏆",location:"Espacio Eslava Sevilla",feature:"把塞維亞 Tapas 做得精緻但仍容易分享，適合多點幾道招牌小盤。",dishes:["慢煮蛋佐牛肝菌","蜂蜜肋排","炸鯷魚","季節 Tapas"],price:"約 €20–40／人",note:"非常熱門，建議訂位。"},
    {id:"la-brunilda",name:"La Brunilda Tapas",area:"Arenal",icon:"🍤",location:"La Brunilda Tapas Sevilla",feature:"現代 Tapas 人氣店，料理精緻、份量適合共享，從主教座堂步行可達。",dishes:["蝦仁燉飯","伊比利豬頰","鮪魚塔塔","每日 Tapas"],price:"約 €20–40／人"},
    {id:"bodeguita-romero",name:"Bodeguita Romero",area:"新廣場附近",icon:"🥪",location:"Bodeguita Romero Sevilla",feature:"家族經營的傳統小酒館，招牌 Pringá 三明治便宜又有代表性。",dishes:["Montadito de pringá","燉牛尾","菠菜鷹嘴豆","炸魚"],price:"約 €12–25／人"},
    {id:"casa-morales",name:"Casa Morales",area:"主教座堂周邊",icon:"🍷",location:"Casa Morales Sevilla",feature:"巨大酒甕和老式吧台保留傳統酒館氣氛，適合喝雪莉酒配冷熱 Tapas。",dishes:["伊比利火腿","醃漬魚","起司拼盤","燉肉 Tapas"],price:"約 €10–25／人"},
    {id:"maria-trifulca",name:"MaríaTrifulca",area:"特里亞納橋頭",icon:"🌉",location:"MaríaTrifulca Sevilla",feature:"位在瓜達幾維河畔，視野漂亮，適合安排夕陽晚餐或行程最後一晚。",dishes:["炭烤章魚","鮪魚料理","海鮮飯","創意 Tapas"],price:"約 €35–65／人",note:"景觀座位建議提前訂位。"}
  ]},
  {id:"ronda",name:"塞特尼爾・龍達",dates:"9/23–9/24",icon:"🌉",summary:"山城燉肉、在地起司、酒莊風味與懸崖景觀。",restaurants:[
    {id:"bardal",name:"Bardal",area:"龍達新橋附近",icon:"⭐",location:"Bardal Ronda",feature:"以龍達山區物產為核心的高端品嘗套餐，料理完整但用餐時間較長。",dishes:["季節品嘗套餐","山區野味","在地蔬菜","安達魯西亞酒款"],price:"約 €180–250／人",note:"需訂位並預留約 3 小時。"},
    {id:"casa-maria",name:"Casa María",area:"龍達／San Francisco",icon:"🏡",location:"Casa María Ronda",feature:"沒有傳統固定菜單，依當天食材搭配多道家常料理，主人式招待很有特色。",dishes:["當日套餐","安達魯西亞燉菜","烤肉","自製甜點"],price:"約 €35–60／人",note:"座位少，建議先預約並確認飲食禁忌。"},
    {id:"tropicana",name:"Tropicana",area:"龍達新城",icon:"🥩",location:"Tropicana Ronda",feature:"在地人氣餐廳，肉類、海鮮與創意小盤選擇多，價位比景觀餐廳實在。",dishes:["伊比利豬","章魚","牛尾","起司蛋糕"],price:"約 €25–45／人"},
    {id:"almocabar",name:"Restaurante Almocábar",area:"龍達舊城南門",icon:"🧀",location:"Restaurante Almocábar Ronda",feature:"靠近舊城門，主打安達魯西亞地方料理與龍達山區食材。",dishes:["羊肉","燉牛尾","在地起司","季節燉菜"],price:"約 €25–45／人"},
    {id:"frasquito",name:"Bar Frasquito",area:"塞特尼爾岩壁街區",icon:"🪨",location:"Bar Frasquito Setenil de las Bodegas",feature:"位在岩壁街區的休閒 Tapas 店，適合自駕途中簡單午餐。",dishes:["Chorizo 香腸","豬頰肉","炸茄子","家常 Tapas"],price:"約 €15–30／人"}
  ]},
  {id:"granada",name:"格拉納達",dates:"9/24–9/25",icon:"🌙",summary:"免費 Tapas 文化、阿爾拜辛景觀餐廳與摩爾風味。",restaurants:[
    {id:"diamantes",name:"Bar Los Diamantes",area:"市中心／Calle Navas",icon:"🐟",location:"Bar Los Diamantes Calle Navas Granada",feature:"以炸魚和海鮮 Tapas 聞名，空間擁擠熱鬧，適合站著快速吃幾輪。",dishes:["炸小魚","炸花枝","蒜香蝦","海鮮 Tapas"],price:"約 €12–25／人"},
    {id:"castaneda",name:"Bodegas Castañeda",area:"Plaza Nueva 附近",icon:"🍷",location:"Bodegas Castañeda Granada",feature:"傳統酒館氣氛濃厚，適合品嘗冷肉、起司、燉菜和當地葡萄酒。",dishes:["冷肉起司拼盤","燉牛尾","火腿","Vermut"],price:"約 €15–30／人"},
    {id:"morayma",name:"Mirador de Morayma",area:"阿爾拜辛",icon:"🌄",location:"Mirador de Morayma Granada",feature:"位於傳統 Carmen 花園住宅，能看阿爾罕布拉宮景色，菜色偏格拉納達地方料理。",dishes:["阿爾普哈拉拼盤","燉羊肉","鱈魚","在地葡萄酒"],price:"約 €30–55／人",note:"戶外景觀座位建議訂位。"},
    {id:"juan-ranas",name:"El Huerto de Juan Ranas",area:"聖尼古拉斯觀景台",icon:"🌅",location:"El Huerto de Juan Ranas Granada",feature:"景觀是最大特色，可正面欣賞阿爾罕布拉與雪山，適合日落前後用餐。",dishes:["烤肉","海鮮飯","安達魯西亞前菜","甜點"],price:"約 €35–65／人",note:"價格包含景觀條件，務必預約。"},
    {id:"casa-julio",name:"Bar Casa Julio",area:"市中心小巷",icon:"🍤",location:"Bar Casa Julio Granada",feature:"小型老派炸物酒吧，菜單不複雜，適合吃完一輪再續攤。",dishes:["炸茄子","炸小魚","可樂餅","啤酒附 Tapas"],price:"約 €10–20／人"}
  ]},
  {id:"malaga",name:"馬拉加",dates:"9/26–9/27",icon:"☀️",summary:"炭烤沙丁魚、炸魚、甜酒與中央市場小吃。",restaurants:[
    {id:"el-pimpi",name:"El Pimpi",area:"羅馬劇場旁",icon:"🍇",location:"El Pimpi Málaga",feature:"大型歷史酒窖與露台正對羅馬劇場，觀光氣氛濃但位置方便，適合喝一杯馬拉加甜酒。",dishes:["炸茄子淋甘蔗蜜","伊比利火腿","烤肉","Malaga 甜酒"],price:"約 €20–45／人"},
    {id:"uvedoble",name:"Uvedoble Taberna",area:"主教座堂附近",icon:"🐟",location:"Uvedoble Taberna Málaga",feature:"用現代手法呈現馬拉加 Tapas，份量適合共享，菜色更新快。",dishes:["炸魚 Taco","蒜香蝦","俄羅斯沙拉","每日 Tapas"],price:"約 €18–35／人"},
    {id:"meson-mariano",name:"Mesón Mariano",area:"老城",icon:"🌿",location:"Mesón Mariano Málaga",feature:"以朝鮮薊、燉菜和地方家常料理聞名，氣氛比海港觀光餐廳樸實。",dishes:["朝鮮薊","燉牛尾","羊肉","家常前菜"],price:"約 €20–40／人"},
    {id:"los-mellizos",name:"Los Mellizos Málaga",area:"市中心",icon:"🦐",location:"Los Mellizos Málaga",feature:"海鮮選擇多、用餐環境舒適，適合多人共享炸魚、貝類與海鮮飯。",dishes:["Fritura malagueña 炸魚拼盤","蒜香蝦","烤魚","海鮮飯"],price:"約 €30–60／人",note:"海鮮與魚類可能依重量計價。"},
    {id:"cortijo-pepe",name:"Cortijo de Pepe",area:"Plaza de la Merced",icon:"🔥",location:"Cortijo de Pepe Málaga",feature:"傳統炭烤與 Tapas 酒館，價格相對親切，靠近畢卡索相關景點。",dishes:["炭烤肉串","炸魚","燉牛尾","俄羅斯沙拉"],price:"約 €15–30／人"},
    {id:"atarazanas",name:"Mercado Central de Atarazanas",area:"中央市場",icon:"🦪",location:"Mercado Central de Atarazanas Málaga",feature:"白天最適合品嘗當日海鮮、炸魚和市場小吃，也可順便看彩色玻璃與新鮮食材。",dishes:["烤蝦","炸魚","貝類","醃漬橄欖"],price:"約 €10–25／人",note:"多數攤位下午較早收攤，星期日通常休息。"}
  ]},
  {id:"barcelona",name:"巴塞隆納",dates:"9/27–10/3",icon:"🦎",summary:"加泰隆尼亞家常菜、市場料理、海鮮與經典 Tapas。",restaurants:[
    {id:"can-culleretes",name:"Can Culleretes",area:"哥德區",icon:"🥄",location:"Can Culleretes Barcelona",feature:"巴塞隆納歷史悠久的加泰隆尼亞餐館，適合品嘗燉菜、烤肉與傳統甜點。",dishes:["加泰隆尼亞燉肉","烤羊肩","鱈魚","Crema Catalana"],price:"約 €25–45／人"},
    {id:"bar-canete",name:"Bar Cañete",area:"Raval／蘭布拉大道附近",icon:"🍤",location:"Bar Cañete Barcelona",feature:"熱鬧的吧台式 Tapas 餐廳，海鮮與肉類品質穩定，適合看廚房現場出餐。",dishes:["蒜香蝦","炸小魚","伊比利火腿","當日海鮮"],price:"約 €35–65／人",note:"熱門且座位緊密，建議訂位。"},
    {id:"cal-pep",name:"Cal Pep",area:"博恩區",icon:"🍳",location:"Cal Pep Barcelona",feature:"以吧台用餐和廚師搭配小盤聞名，海鮮、蛋料理與時令菜最有代表性。",dishes:["海鮮烘蛋","炸小魚","蛤蜊","每日時令 Tapas"],price:"約 €35–65／人"},
    {id:"cuines-santa",name:"Cuines Santa Caterina",area:"聖卡特琳娜市場",icon:"🥬",location:"Cuines Santa Caterina Barcelona",feature:"就在市場內，可看到開放式廚房，從加泰隆尼亞料理到亞洲風味都有。",dishes:["市場時蔬","烤魚","米飯料理","每日套餐"],price:"約 €20–42／人"},
    {id:"mar-salada",name:"La Mar Salada",area:"Barceloneta",icon:"🌊",location:"La Mar Salada Barcelona",feature:"靠近港邊，以新鮮魚類、海鮮飯和精緻甜點見長，適合安排海邊午餐。",dishes:["海鮮飯","烤魚","海鮮 Tapas","自製甜點"],price:"約 €35–65／人"},
    {id:"xampanyet",name:"El Xampanyet",area:"博恩區／畢卡索博物館旁",icon:"🥂",location:"El Xampanyet Barcelona",feature:"老牌 Cava 小酒館，空間熱鬧擁擠，適合吃冷盤、罐藏海鮮和小份 Tapas。",dishes:["鯷魚","醃漬海鮮","火腿起司","Cava 氣泡酒"],price:"約 €15–30／人"},
    {id:"tapeo",name:"Tapeo",area:"博恩區",icon:"🍢",location:"Tapeo Barcelona",feature:"現代 Tapas 選擇多，適合從聖母海洋教堂或畢卡索博物館行程銜接。",dishes:["燉豬頰","炸丸子","章魚","Crema Catalana"],price:"約 €25–48／人"},
    {id:"quatre-gats",name:"Els 4Gats",area:"哥德區",icon:"🎨",location:"Els 4Gats Barcelona",feature:"現代主義歷史場景與畢卡索故事是特色，餐點偏傳統加泰隆尼亞菜，適合重視空間氣氛的人。",dishes:["加泰隆尼亞前菜","鱈魚","燉肉","Crema Catalana"],price:"約 €35–65／人",note:"主要價值在歷史空間，建議先查看當期菜單。"}
  ]},
  {id:"montserrat",name:"蒙特塞拉特",dates:"9/29",icon:"⛰️",summary:"山上選擇有限，以修道院餐廳、套餐與快速補給為主。",restaurants:[
    {id:"abat-cisneros",name:"Restaurant Abat Cisneros",area:"修道院旁",icon:"🍽️",location:"Restaurant Abat Cisneros Montserrat",feature:"位在歷史旅館內，是山上較完整舒適的加泰隆尼亞餐廳，適合預留正式午餐。",dishes:["加泰隆尼亞燉菜","烤肉","鱈魚","Crema Catalana"],price:"約 €28–50／人",note:"建議訂位並確認午餐時段。"},
    {id:"buffet-montserrat",name:"Buffet de Montserrat",area:"修道院園區",icon:"🥗",location:"Buffet de Montserrat",feature:"自助式選擇，方便控制時間與份量，適合完成修道院參觀後快速用餐。",dishes:["沙拉","熱食主菜","加泰隆尼亞料理","甜點"],price:"約 €20–32／人"},
    {id:"cafeteria-montserrat",name:"Cafeteria Montserrat",area:"修道院園區",icon:"🥪",location:"Cafeteria Montserrat",feature:"以三明治、飲料與簡單熱食為主，適合想把時間留給步道的人。",dishes:["三明治","披薩","咖啡","簡單熱食"],price:"約 €8–18／人"}
  ]},
  {id:"tossa",name:"濱海托薩",dates:"10/1",icon:"🌊",summary:"漁村料理、Cim i Tomba 魚鍋與地中海海鮮。",restaurants:[
    {id:"can-sophia",name:"Can Sophia",area:"老城附近",icon:"✨",location:"Can Sophia Tossa de Mar",feature:"環境雅緻的地中海餐廳，以當季海鮮和精緻套餐為主，適合紀念日或正式午餐。",dishes:["時令海鮮","魚料理","米飯料理","品嘗套餐"],price:"約 €45–80／人"},
    {id:"can-simon",name:"La Cuina de Can Simón",area:"Vila Vella 城牆旁",icon:"🐟",location:"La Cuina de Can Simón Tossa de Mar",feature:"以創意方式呈現 Costa Brava 海鮮與地方風味，地點靠近老城。",dishes:["Cim i Tomba 漁夫魚鍋","當日鮮魚","海鮮前菜","季節套餐"],price:"約 €45–85／人",note:"建議先確認當日套餐與訂位。"},
    {id:"bahia",name:"Restaurant Bahia",area:"大海灘周邊",icon:"🦐",location:"Restaurant Bahia Tossa de Mar",feature:"海邊傳統餐廳，適合吃海鮮飯、烤魚和托薩地方魚鍋。",dishes:["Cim i Tomba","海鮮飯","烤魚","蒜香蝦"],price:"約 €25–50／人"},
    {id:"roca-tossa",name:"La Roca de Tossa",area:"市中心",icon:"🪨",location:"La Roca de Tossa Tossa de Mar",feature:"較休閒的地中海餐館，菜色兼顧海鮮、肉類和套餐，適合一日遊午餐。",dishes:["海鮮飯","烤章魚","伊比利豬","Crema Catalana"],price:"約 €22–45／人"},
    {id:"can-carlus",name:"Can Carlus",area:"老城入口",icon:"🍲",location:"Can Carlus Tossa de Mar",feature:"傳統加泰隆尼亞與漁村料理，位置接近古城散步路線。",dishes:["Cim i Tomba","海鮮湯","烤魚","米飯料理"],price:"約 €25–48／人"}
  ]}
];
