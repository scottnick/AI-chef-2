
import { RecipeCandidate } from '../types';

export const seedRecipes: RecipeCandidate[] = [
  // 麵類 (10)
  { id: 'm1', title: '紅燒牛肉麵', category: '麵類', intro: '經典台式風味，肉質軟嫩，湯頭濃郁。', estimated_minutes: 120, calories_est: 650, match_reason: '符合您的重口味偏好', heroIngredients: ['牛肉', '麵條'], equipmentHint: '瓦斯爐' },
  { id: 'm2', title: '番茄肉醬義大利麵', category: '麵類', intro: '酸甜開胃，大人小孩都喜歡的經典選擇。', estimated_minutes: 30, calories_est: 550, match_reason: '快速簡單的平日晚餐', heroIngredients: ['豬絞肉', '番茄', '義大利麵'], equipmentHint: '瓦斯爐' },
  { id: 'm3', title: '日式豚骨拉麵', category: '麵類', intro: '濃郁白湯搭配Q彈麵條，職人等級的饗宴。', estimated_minutes: 180, calories_est: 700, match_reason: '周末犒賞自己的好選擇', heroIngredients: ['豬肉', '拉麵'], equipmentHint: '瓦斯爐' },
  { id: 'm4', title: '台式炒泡麵', category: '麵類', intro: '清空冰箱食材的最佳方式，簡單又美味。', estimated_minutes: 15, calories_est: 450, match_reason: '15分鐘搞定', heroIngredients: ['泡麵', '蛋', '青菜'], equipmentHint: '瓦斯爐' },
  { id: 'm5', title: '炸醬麵', category: '麵類', intro: '鹹香四溢的豆瓣醬，搭配爽口小黃瓜絲。', estimated_minutes: 40, calories_est: 500, match_reason: '經典家常味', heroIngredients: ['豬肉', '豆瓣醬', '拉麵'], equipmentHint: '瓦斯爐' },
  { id: 'm6', title: '海鮮烏龍麵', category: '麵類', intro: '清甜的海鮮湯頭，烏龍麵滑順入味。', estimated_minutes: 25, calories_est: 400, match_reason: '低卡健康首選', heroIngredients: ['蝦子', '蛤蜊', '烏龍麵'], equipmentHint: '瓦斯爐' },
  { id: 'm7', title: '麻醬涼麵', category: '麵類', intro: '夏天必備，濃郁芝麻香氣讓人胃口大開。', estimated_minutes: 20, calories_est: 480, match_reason: '夏日清爽首選', heroIngredients: ['油麵', '芝麻醬'], equipmentHint: '瓦斯爐' },
  { id: 'm8', title: '泰式酸辣粉', category: '麵類', intro: '正宗泰式香料，酸辣帶勁，非常開胃。', estimated_minutes: 25, calories_est: 420, match_reason: '想吃點辣的時候', heroIngredients: ['河粉', '蝦子'], equipmentHint: '瓦斯爐' },
  { id: 'm9', title: '鍋燒意麵', category: '麵類', intro: '南部經典美味，豐富配料與炸意麵的完美融合。', estimated_minutes: 15, calories_est: 520, match_reason: '暖心湯麵', heroIngredients: ['意麵', '蛋', '蝦子'], equipmentHint: '瓦斯爐' },
  { id: 'm10', title: '奶油培根義大利麵', category: '麵類', intro: '濃郁奶香與培根鹹香，滑順不膩口。', estimated_minutes: 20, calories_est: 680, match_reason: '西式浪漫晚餐', heroIngredients: ['培根', '鮮奶油', '義大利麵'], equipmentHint: '瓦斯爐' },

  // 飯類 (10)
  { id: 'r1', title: '滷肉飯', category: '飯類', intro: '台灣靈魂美食，膠質滿滿的滷肉淋在熱騰騰白飯上。', estimated_minutes: 90, calories_est: 580, match_reason: '經典不敗美味', heroIngredients: ['豬五花', '米飯'], equipmentHint: '瓦斯爐' },
  { id: 'r2', title: '黃金炒飯', category: '飯類', intro: '粒粒分明，每一口都能吃到蛋香與蔥香。', estimated_minutes: 15, calories_est: 500, match_reason: '快速清空剩菜', heroIngredients: ['隔夜飯', '蛋', '蔥'], equipmentHint: '瓦斯爐' },
  { id: 'r3', title: '日式咖哩飯', category: '飯類', intro: '濃郁滑順的咖哩，搭配燉煮軟爛的蔬菜。', estimated_minutes: 45, calories_est: 620, match_reason: '大人小孩都愛的味道', heroIngredients: ['雞肉', '馬鈴薯', '咖哩塊'], equipmentHint: '瓦斯爐' },
  { id: 'r4', title: '韓式石鍋拌飯', category: '飯類', intro: '豐富的蔬菜與肉類，拌入韓式辣醬最對味。', estimated_minutes: 30, calories_est: 540, match_reason: '營養均衡的一餐', heroIngredients: ['牛肉', '各式蔬菜', '米飯'], equipmentHint: '電磁爐' },
  { id: 'r5', title: '滑蛋蝦仁飯', category: '飯類', intro: '鮮甜嫩滑的口感，簡單調味就能突顯鮮美。', estimated_minutes: 20, calories_est: 420, match_reason: '清淡健康首選', heroIngredients: ['蝦仁', '蛋', '米飯'], equipmentHint: '瓦斯爐' },
  { id: 'r6', title: '雞肉親子丼', category: '飯類', intro: '半熟蛋液包裹著嫩雞肉，鹹甜滋味令人滿足。', estimated_minutes: 25, calories_est: 480, match_reason: '道地日式風味', heroIngredients: ['雞腿肉', '蛋', '米飯'], equipmentHint: '瓦斯爐' },
  { id: 'r7', title: '西班牙海鮮燉飯', category: '飯類', intro: '滿滿的海鮮與番紅花香氣，視覺與味覺的饗宴。', estimated_minutes: 60, calories_est: 600, match_reason: '異國料理挑戰', heroIngredients: ['海鮮', '米'], equipmentHint: '瓦斯爐' },
  { id: 'r8', title: '香菇雞肉炊飯', category: '飯類', intro: '一鍋到底，米飯吸收了雞肉與香菇的精華。', estimated_minutes: 40, calories_est: 450, match_reason: '電鍋懶人料理', heroIngredients: ['雞肉', '香菇', '米'], equipmentHint: '電鍋' },
  { id: 'r9', title: '麻婆豆腐飯', category: '飯類', intro: '辛辣鹹香，超級下飯，讓你停不下來。', estimated_minutes: 20, calories_est: 520, match_reason: '重口味首選', heroIngredients: ['豆腐', '豬絞肉'], equipmentHint: '瓦斯爐' },
  { id: 'r10', title: '什錦燴飯', category: '飯類', intro: '豐富的配料淋上滑順芡汁，口感層次豐富。', estimated_minutes: 25, calories_est: 490, match_reason: '營養滿分', heroIngredients: ['各式蔬菜', '肉片', '米飯'], equipmentHint: '瓦斯爐' },

  // 湯品 (10)
  { id: 's1', title: '玉米濃湯', category: '湯品', intro: '西式餐廳經典款，濃郁奶香與甜美玉米。', estimated_minutes: 25, calories_est: 280, match_reason: '溫暖心靈的湯品', heroIngredients: ['玉米', '火腿', '鮮奶油'], equipmentHint: '瓦斯爐' },
  { id: 's2', title: '味噌湯', category: '湯品', intro: '日式家庭必備，簡單健康且發酵香氣十足。', estimated_minutes: 10, calories_est: 80, match_reason: '快速配湯', heroIngredients: ['豆腐', '海帶芽', '味噌'], equipmentHint: '瓦斯爐' },
  { id: 's3', title: '酸辣湯', category: '湯品', intro: '料多味美，酸度與辣度完美平衡。', estimated_minutes: 30, calories_est: 220, match_reason: '水餃的最佳拍檔', heroIngredients: ['豆腐', '豬血', '木耳'], equipmentHint: '瓦ers爐' },
  { id: 's4', title: '羅宋湯', category: '湯品', intro: '大量蔬菜燉煮，口感豐富且富含營養。', estimated_minutes: 90, calories_est: 350, match_reason: '健康低碳料理', heroIngredients: ['牛肉', '甜菜根', '番茄'], equipmentHint: '電鍋' },
  { id: 's5', title: '香菇雞湯', category: '湯品', intro: '滋補養生，湯清味鮮，暖胃首選。', estimated_minutes: 60, calories_est: 320, match_reason: '冬日進補', heroIngredients: ['雞肉', '香菇'], equipmentHint: '電鍋' },
  { id: 's6', title: '蛤蜊冬瓜湯', category: '湯品', intro: '清熱退火，蛤蜊的鮮與冬瓜的清。', estimated_minutes: 20, calories_est: 120, match_reason: '清淡降火', heroIngredients: ['蛤蜊', '冬瓜'], equipmentHint: '瓦斯爐' },
  { id: 's7', title: '法式洋蔥湯', category: '湯品', intro: '耐心拌炒洋蔥至焦糖化，濃郁香氣。', estimated_minutes: 50, calories_est: 310, match_reason: '進階主廚挑戰', heroIngredients: ['洋蔥', '起司'], equipmentHint: '瓦斯爐' },
  { id: 's8', title: '泰式冬蔭功', category: '湯品', intro: '世界三大名湯，酸辣鮮美，充滿異國風情。', estimated_minutes: 30, calories_est: 380, match_reason: '辛辣鮮美', heroIngredients: ['蝦子', '香茅'], equipmentHint: '瓦斯爐' },
  { id: 's9', title: '南瓜濃湯', category: '湯品', intro: '天然甜味與綿密口感，適合全家人。', estimated_minutes: 35, calories_est: 240, match_reason: '營養價值高', heroIngredients: ['南瓜', '洋蔥'], equipmentHint: '電磁爐' },
  { id: 's10', title: '排骨玉米湯', category: '湯品', intro: '經典家常湯，玉米的清甜與排骨的肉香。', estimated_minutes: 50, calories_est: 300, match_reason: '家常經典', heroIngredients: ['排骨', '玉米'], equipmentHint: '電鍋' },

  // 火鍋 (10)
  { id: 'h1', title: '川味麻辣火鍋', category: '火鍋', intro: '又麻又辣，香料層次豐富，嗜辣者天堂。', estimated_minutes: 60, calories_est: 850, match_reason: '極致辣度體驗', heroIngredients: ['肉片', '鴨血', '豆腐'], equipmentHint: '電磁爐' },
  { id: 'h2', title: '昆布清湯火鍋', category: '火鍋', intro: '最能吃出食材原味的涮涮鍋底。', estimated_minutes: 15, calories_est: 300, match_reason: '健康低負擔', heroIngredients: ['海鮮', '蔬菜', '昆布'], equipmentHint: '電磁爐' },
  { id: 'h3', title: '韓式泡菜鍋', category: '火鍋', intro: '酸爽帶勁，發酵泡菜與豬肉的最佳組合。', estimated_minutes: 25, calories_est: 450, match_reason: '韓流美味', heroIngredients: ['泡菜', '豬肉', '豆腐'], equipmentHint: '瓦斯爐' },
  { id: 'h4', title: '泰式冬蔭火鍋', category: '火鍋', intro: '酸辣湯頭底座，涮肉片別有一番風味。', estimated_minutes: 30, calories_est: 520, match_reason: '異國風味火鍋', heroIngredients: ['海鮮', '肉片'], equipmentHint: '電磁爐' },
  { id: 'h5', title: '石頭火鍋', category: '火鍋', intro: '先炒後煮，爆香的麻油香氣令人食指大動。', estimated_minutes: 40, calories_est: 700, match_reason: '傳統懷舊風', heroIngredients: ['牛肉', '洋蔥'], equipmentHint: '瓦斯爐' },
  { id: 'h6', title: '起司牛奶鍋', category: '火鍋', intro: '濃郁奶香，深受年輕族群與小朋友喜愛。', estimated_minutes: 25, calories_est: 780, match_reason: '甜蜜暖心鍋', heroIngredients: ['牛奶', '起司'], equipmentHint: '電磁爐' },
  { id: 'h7', title: '酸菜白肉鍋', category: '火鍋', intro: '道地東北風味，自然發酵的酸爽解除肉類的膩感。', estimated_minutes: 40, calories_est: 550, match_reason: '解膩開胃', heroIngredients: ['酸菜', '五花肉'], equipmentHint: '瓦斯爐' },
  { id: 'h8', title: '沙茶火鍋', category: '火鍋', intro: '濃郁沙茶香，搭配大骨湯頭最是經典。', estimated_minutes: 20, calories_est: 750, match_reason: '傳統經典', heroIngredients: ['牛肉', '沙茶醬'], equipmentHint: '電磁爐' },
  { id: 'h9', title: '番茄鮮蔬鍋', category: '火鍋', intro: '天然番茄湯底，酸甜適中，充滿茄紅素。', estimated_minutes: 20, calories_est: 350, match_reason: '女性族群最愛', heroIngredients: ['番茄', '各式蔬菜'], equipmentHint: '電磁爐' },
  { id: 'h10', title: '羊肉爐', category: '火鍋', intro: '中藥材燉煮，去腥除羶，溫暖補冬。', estimated_minutes: 90, calories_est: 680, match_reason: '補氣養生', heroIngredients: ['羊肉', '中藥包'], equipmentHint: '瓦斯爐' },

  // 甜點 (10)
  { id: 'd1', title: '熔岩巧克力蛋糕', category: '甜點', intro: '爆漿的幸福感，外酥內軟。', estimated_minutes: 25, calories_est: 450, match_reason: '巧克力控必學', heroIngredients: ['巧克力', '蛋'], equipmentHint: '烤箱' },
  { id: 'd2', title: '芒果奶酪', category: '甜點', intro: '免烤箱，簡單易做的夏日清爽甜點。', estimated_minutes: 15, calories_est: 220, match_reason: '簡單午茶', heroIngredients: ['牛奶', '芒果'], equipmentHint: '冰箱' },
  { id: 'd3', title: '草莓鬆餅', category: '甜點', intro: '假日早午餐的首選，滿滿的少女心。', estimated_minutes: 20, calories_est: 380, match_reason: '早午餐小確幸', heroIngredients: ['鬆餅粉', '草莓'], equipmentHint: '瓦斯爐' },
  { id: 'd4', title: '巴斯克乳酪蛋糕', category: '甜點', intro: '近年最紅的甜點，焦香外皮與半熟內心。', estimated_minutes: 45, calories_est: 520, match_reason: '名店甜點自己做', heroIngredients: ['乳酪', '鮮奶油'], equipmentHint: '烤箱' },
  { id: 'd5', title: '提拉米蘇', category: '甜點', intro: '經典義式甜點，帶我走的甜蜜含義。', estimated_minutes: 40, calories_est: 480, match_reason: '經典浪漫甜點', heroIngredients: ['馬斯卡彭', '咖啡'], equipmentHint: '冰箱' },
  { id: 'd6', title: '焦糖布丁', category: '甜點', intro: '滑順綿密，入口即化的童年滋味。', estimated_minutes: 30, calories_est: 260, match_reason: '童年回憶', heroIngredients: ['蛋', '糖', '牛奶'], equipmentHint: '烤箱' },
  { id: 'd7', title: '紅豆湯', category: '甜點', intro: '暖心甜湯，紅豆鬆軟不破的秘訣。', estimated_minutes: 60, calories_est: 300, match_reason: '養生甜品', heroIngredients: ['紅豆'], equipmentHint: '電鍋' },
  { id: 'd8', title: '氣炸酥皮蘋果派', category: '甜點', intro: '利用氣炸鍋快速做出的精緻午茶。', estimated_minutes: 20, calories_est: 350, match_reason: '氣炸鍋魔法', heroIngredients: ['酥皮', '蘋果'], equipmentHint: '氣炸鍋' },
  { id: 'd9', title: '手工餅乾', category: '甜點', intro: '親子共賞的趣味，烘焙入門首選。', estimated_minutes: 40, calories_est: 150, match_reason: '親子共享', heroIngredients: ['奶油', '麵粉'], equipmentHint: '烤箱' },
  { id: 'd10', title: '芝麻湯圓', category: '甜點', intro: '冬至必備，Ｑ彈外皮與流沙內餡。', estimated_minutes: 15, calories_est: 280, match_reason: '應景佳節', heroIngredients: ['湯圓'], equipmentHint: '瓦斯爐' }
];
