function starter (that) {
    setting();
    word_select(1);
    let section_selector = document.getElementById("section_selector");
    section_selector.style.display = "none";
    that.style.display = "none";
    let quiz_area = document.getElementById("quiz_area");
    quiz_area.style.display = "block";
    let table_container = document.getElementById("table_container");
    table_container.style.display = "block";
}


const dictionary = [
[
["crust","地殻"],
["outer core","外核"],
["inner core","内核"],
["continental crust","大陸地殻"],
["oceanic crust","海洋地殻"],
["boundary","プレート境界"],
["plate margin","プレート境界"],
["destructive margin","狭まる境界"],
["constructive margin","広がる境界"],
["conservative margin","ずれる境界"],
["ocean trench","海溝"],
["hemisphere","半球"],
["equator","赤道"],
["Pleistocene","更新世の"],
["glacial period","氷河期"],
["Tropic of Cancer","北回帰線"],
["Tropic of Capricorn","南回帰線"],
["stratosphere","成層圏"],
["the earth’s axis","地軸"],
["inter-tropical convergence zone","赤道収束帯"],
["subtropical zone of high pressure","亜熱帯高圧帯"],
["Coriolis force","コリオリの力"],
["orthodrome","大圏航路"],
["equinox","春分・秋分"],
["eustatic","海水面変動の"],
["asthenosphere","アセノスフェア"],
["lithosphere","リソスフェア"],
["convergent boundary","狭まる境界"],
["divergent boundary","広がる境界"],
["subduct","(プレートが) 沈み込む"],
["slab","スラブ"],
["Juan de Fuca plate","ファンデフカプレート"],
["Cocos plate","ココスプレート"],
["Antarctic plate","南極プレート"],
["Indian plate","インドプレート"],
["Australian plate","オーストラリアプレート"],
["South American plate","南アメリカプレート"],
["Eurasian plate","ユーラシアプレート"],
["Nazca plate","ナスカプレート"],
["Caribbean plate","カリブプレート"],
["North American Plate","北アメリカプレート"],
["Pacific plate","太平洋プレート"],
["Philippines plate","フィリピン海プレート"],
["aurora","オーロラ"],
["meteor shower","流星群"],
["subduction","(プレートの) 沈み込み"],
["aerial","大気の"],
["meridian","子午線"],
["longitude","経度"],
["latitude","緯度"],
["Earth’s rotation","自転"],
["troposphere","対流圏"],
["mesosphere","中間圏"],
["thermosphere","熱圏"],
["inertia","慣性"],
["great circle","大圏航路"],
["topography","地形"],
["isostatic change","アイソスタシーの変化"],
["infrared ray","赤外線"],
["ultraviolet ray","紫外線"],
["mid-ocean ridge","中央海嶺"],
["Wadachi-Benioff Zone","和達―ベニオフ帯"],
["Antarctica","南極大陸"],
["Hadrey cell","ハドレー循環"],
["Ferrel cell","フェレル循環"],
["Polar cell","極循環"],
["ellipse","楕円"]
],
[
["sedimentary rock","堆積岩"],
["glacier","氷河"],
["shield volcano","楯状火山"],
["dome volcano","ドーム状火山"],
["ash","火山灰"],
["sulphur dioxide","二酸化硫黄"],
["pyroclastic flow","火砕流"],
["suffocate","窒息死させる"],
["mudflow","泥流"],
["lahar","泥流"],
["magma basin","マグマだまり"],
["caldera","カルデラ"],
["igneous rock","火成岩"],
["metamorphic rock","変成岩"],
["intrusive rock","深成岩"],
["extrusive rock","火山岩"],
["coarse texture","斑状組織"],
["dyke","岩脈"],
["sill","岩床"],
["rhyolite","流紋岩"],
["andesite","安山岩"],
["basalt","玄武岩"],
["granite","花崗岩"],
["diorite","閃緑岩"],
["gabbro","斑糲岩"],
["carboniferous","石炭紀"],
["chalk","チョーク (鉱物)"],
["deposit","堆積する"],
["erode","浸食する"],
["compact","凝縮する (続成作用)"],
["marble","大理石"],
["shale","頁岩"],
["weather","風化"],
["erosion","浸食"],
["sea bed","海底"],
["lithification","石化作用"],
["quaternary","第四紀"],
["tertiary","第三紀"],
["rock cycle","岩石のサイクル"],
["mechanical weathering","物理的風化"],
["chemical weathering","化学的風化"],
["biological weathering","生物的風化"],
["exfoliation","剥離作用"],
["peel off","はがれる"],
["dissolve","溶ける"],
["soluble","可溶性の"],
["calcium carbonate","炭酸カルシウム"],
["tor","岩山"],
["moorland","荒地"],
["acidic","酸性の"],
["tilt","傾く"],
["escarpment","崖・急斜面"],
["aquifer","帯水層"],
["permeable","浸透性の"],
["store","蓄える"],
["impermeable","不浸透性の"],
["spring line","湧水帯"],
["dry valley","かれ谷"],
["eat away","浸食する"],
["pavement","舗装"],
["swallow hole","ドリーネ"],
["cavern","洞窟"],
["gorge","峡谷"],
["solidify","凝結する"],
["stalactite","鍾乳石"],
["stalagmite","石筍"],
["salinity","塩分"],
["circulation","循環"],
["groundwater","地下水"],
["hydrological cycle","水循環"],
["evapotranspiration","蒸発散"],
["infiltration","染み込み"],
["percolation","浸透"],
["through flow","側方浸透流 (地下水面より上を流れる地下水)"],
["drainage basin","流域"],
["watershed","分水嶺"],
["tributary","支流"],
["source","水源"],
["confluence","合流"],
["mouth","河口"],
["course","流路"],
["upper course","上流"],
["middle course","中流"],
["lower course","下流"],
["gradient","傾斜"],
["profile","断面図"],
["transportation","運搬作用"],
["hydraulic","水圧"],
["fragment","破片"],
["round off","丸くする"],
["waterfall","滝"],
["plunge pool","滝つぼ"],
["spur","尾根"],
["interlock","組み合わさる"],
["meander","蛇行"],
["ox-bow lake","三日月湖"],
["flood plain","氾濫原"],
["levee","(自然) 堤防"],
["distributary","支流・分流"],
["arcuate delta","円弧状三角州"],
["cuspate delta","カスプ状三角州"],
["bird’s foot delta","鳥趾状三角州"],
["contour line","等高線"],
["discharge","流出"],
["bank","土手"],
["retreat","後退"],
["ice sheet","大陸氷河"],
["arête","氷河の浸食による痩せ尾根"],
["pyramidal peak","ホルン"],
["corrie","カール"],
["tarn","山中の小さな湖，特にカールにできた湖"],
["truncated spur","Ｕ字谷，断層，海岸線によって切られた山の支脈"],
["hanging valley","懸谷"],
["ribbon lake","Ｕ字谷の湖"],
["glacial trough","Ｕ字谷"],
["moraine","モレーン"],
["drumlin","ドラムリン"],
["destructive wave","浸食する波"],
["backwash","引き波"],
["swash","打ち上げ波"],
["headland","岬"],
["jut","突き出る"],
["cove","入り江"],
["longshore drift","沿岸流"],
["constructive wave","堆積させる波"],
["sand beach","砂浜"],
["shingle beach","礫浜"],
["spit","砂嘴"],
["bar","砂州"],
["lagoon","ラグーン"],
["tombolo","トンボロ"],
["wave-cut platform","海食台"],
["submerge","浸水させる"],
["breakwater","防波堤"],
["dune","砂丘"],
["marshland","湿地帯"],
["groyne","突堤"],
["heathland","ヒースランド"],
["iceberg","氷山"],
["downhill","下り坂の"],
["alluvium","沖積層"],
["dredge","浚渫する"],
["flash flood","鉄砲水"],
["graded bedding","級化層理"],
["tidal barrier","河口堰"],
["scree","ガレ場"],
["porous","多孔質の"],
["crater","クレーター・噴火口"],
["fold mountains","褶曲山地"],
["fault","断層"],
["geyser","間欠泉"],
["Mediterranean","地中海の"],
["barrage","堰"],
["effluent","排水"],
["tuff","凝灰岩"],
["gyre","環流"],
["basaltic magma","玄武岩質マグマ"],
["granitic magma","花崗岩質マグマ"],
["relief","起伏"],
["permafrost","永久凍土"],
["thermoharine","熱塩循環"],
["stratovolcano","成層火山"],
["pitch","勾配"],
["ravine","峡谷"],
["riverbank","川岸"],
["anticline","背斜"],
["syncline","向斜"],
["cirque","カール"],
["viscous","粘性の"],
["fluid","流動性の"],
["acid lava","酸性岩の溶岩 (花崗岩質など)"],
["basic lava","塩基性岩の溶岩 (玄武岩質など)"],
["tonalite","石英閃緑岩"],
["fjord","フィヨルド"],
["waterspout","水上竜巻"],
["phreatic eruption","水蒸気爆発"],
["earth flow","山崩れ"],
["rotational slide","回転滑り"],
["solifluction","土壌流"],
["plateau","高原"],
["felsic","珪長質の"],
["discordant coastline","ギザギザの海岸線"],
["concordant coastline","滑らかな海岸線"],
["angular","角ばった"],
["rounded","丸みを帯びた"],
["slip-off slope","蛇行の内側にある浅い川底"],
["rip-rap","消波ブロック"],
["revetment","擁壁"],
["steep scarp slope","急な傾斜"],
["gentle dip slope","なだらかな傾斜"],
["stalactite cave","鍾乳洞"],
["bedding plane","層理面"],
["eject","押し出す"],
["composite volcano","複式火山"],
["transform fault","トランスフォーム断層"],
["Sahel","サヘル"],
["inland sea","内海"],
["magma chamber","マグマだまり"],
["curvature","湾曲"],
["ash deposit","噴石"],
["quartz","石英"],
["latosol","ラトソル"],
["terra rossa","テラロッサ"],
["terra roxa","テラローシャ"],
["regur","レグール"],
["chernozem","チェルノーゼム"],
["prairie","プレーリー"],
["pampa","パンパ"],
["llano","リャノ"],
["oxisols","熱帯酸性化土壌"],
["entisols","砂漠土"],
["ultisols","赤土"],
["tectonic uplift","地殻隆起"],
["coastal abrasion","海岸浸食"],
["elevation","高度"],
["soil subsidence","地盤沈下"],
["drift","漂流する"],
["sediment","沈殿物"],
["tectonic","地殻変動の"],
["littoral","海岸の"],
["littoral drift","沿岸漂流・漂砂"],
["saline","塩分を含んだ"],
["calcium","カルシウム"],
["basin","盆地・流域"],
["perched water","宙水"],
["clay","粘土質の"],
["esker","氷河の下の融解水により堆積された堤防状の地形"],
["loam","ローム"],
["viscosity","粘性"],
["outwash plain","氷河堆積物の堆積平野"],
["fracture","破面"],
["layer","地層"],
["intrusion","貫入岩"],
["unconformity","不整合"],
["andesitic magma","安山岩質マグマ"],
["rhyolitic magma","流紋岩質マグマ"],
["felsic magma","珪長岩質マグマ"],
["conglomerate","礫岩の"],
["frost wedging","凍結破砕"],
["intrude","貫入する"],
["mountain range","山地"],
["hinterland","後背地"],
["seascape","海の景観"],
["parent rock","母岩"],
["heave","持ち上げる"],
["volcanic bomb","火山弾"],
["cinder","噴石"],
["central cone","中央火口丘"],
["vent","噴火口"],
["gritstone","砂岩"],
["mass movement","マス・ムーブメント"],
["turbidity current","乱泥流"],
["subside","低下する"],
["run-off","表面流"],
["boulder","256mm~ の砂礫"],
["cobble","64~256mm の砂礫"],
["gravel","2~64mm の砂礫"],
["pebble","4~64mm の砂礫"],
["granule","2~4mm の砂礫"],
["sand","0.063~2mm の砂礫"],
["coarse sand","0.63mm~2mm の砂礫"],
["medium sand","0.2mm~0.63mm の砂礫"],
["fine sand","0.063~0.2mm の砂礫"],
["silt","0.002mm~0.0063mm の砂礫"],
["clay","~0.002mm の砂礫"],
["peat bog","泥炭地"],
["low-lying","低平な"],
["offshore","沖合の"],
["earth embankment","ダムの堰堤"],
["upland area","高地"],
["lowland area","低地"],
["crack","ひび"],
["abrasion","(流された粒子が河床の石に衝突することによる) 浸食"],
["attrition","(水中の粒子が衝突しより細かくなる) 浸食"],
["hydraulic action","(水圧によって石が削れる) 浸食"],
["solution","(石灰岩などが水に溶けることによる) 浸食"],
["compress","圧縮する"],
["scrape","こする"],
["joint","節理"],
["wave-cut notch","波食窪"],
["jut out","突き出た"],
["arch","海食洞門"],
["stack","海食によって切り離された塔状の岩"],
["traction","(石が河床を転がることによる) 運搬"],
["saltation","(石が弾むことによる) 運搬"],
["suspension","(水流で巻き上げられることにより水中を漂う)運搬"],
["solution","(微小な粒子が水に溶けることによる) 運搬"],
["high water mark","満潮線"],
["low water mark","干潮線"],
["embryo dune","植生のない初期の砂丘"],
["foredune","僅かに植生を持つ砂丘"],
["yellow dune","腐食層を持つようになった砂丘"],
["grey dune","腐食層の発達によって灰色になった砂丘"],
["mature dune","樹木をも持つことができるようになった砂丘"],
["bumpy","凹凸の"],
["neck","環流丘陵"],
["estuary","エスチュアリー"],
["till","氷河堆積物"],
["upstream","上流へ"],
["blunt","鈍い"],
["taper","漸減する"],
["join","再結合する"],
["abrupt","険しい"],
["verge","縁"],
["wadi","ワジ"],
["tectonically active","地殻変動の盛んな"]
],
[
["vegetation","植生"],
["thaw","(氷・雪などが) 融ける"],
["habitat","生息地・居住地"],
["deplete","使いつくす"],
["precipitation","降水量"],
["fluctuate","上下する"],
["inland","内陸の"],
["condense","凝結する"],
["North Atlantic Drift","北大西洋海流"],
["altitude","高度"],
["current","海流"],
["warm current","暖流"],
["cold current","寒流"],
["depression","低気圧"],
["anticyclone","高気圧"],
["warm front","温暖前線"],
["cold front","寒冷前線"],
["deforestation","森林破壊"],
["descending air","下降気流"],
["eyewall","台風の目の壁雲"],
["monsoon","モンスーン"],
["aquatic","水生の"],
["evaporate","蒸発する"],
["ecosystem","生態系"],
["hedgerow","生垣を成す低木の列"],
["producer","生産者"],
["consumer","消費者"],
["decomposer","分解者"],
["food chain","食物連鎖"],
["food web","食物連鎖"],
["fungus","菌"],
["nutrient cycle","栄養の循環"],
["temperate","温暖な"],
["deciduous","落葉性の"],
["shrub","低木"],
["evergreen","常緑樹"],
["transpiration","蒸散"],
["photosynthesis","光合成"],
["biodiversity","生物の多様性"],
["hardwood","硬木"],
["endangered","絶滅寸前の"],
["rubber","ゴム"],
["prevailing wind","卓越風"],
["nourishment","栄養"],
["eutrophic","富栄養の"],
["condensation","凝結"],
["relief rainfall","地形性降雨"],
["frontal rainfall","前線性降雨"],
["convectional rainfall","対流性降雨"],
["isotherm","等温線"],
["cirrus","巻雲"],
["stratus","層雲"],
["nimbo-stratus","乱層雲"],
["alto-stratus","高層雲"],
["cirro-stratus","巻層雲"],
["cumulus","積雲"],
["cumulo-nimbus","積乱雲"],
["isobar","等圧線"],
["drizzle","霧雨"],
["swirl","渦"],
["flora","植物相"],
["fauna","動物相"],
["biome","バイオーム (生物群系)"],
["herbivore","草食動物"],
["carnivore","肉食動物"],
["woodland","森林地帯"],
["microclimate","小気候"],
["luxuriant","繁茂した"],
["buttress root","板根"],
["trunk","幹"],
["nomad","遊牧"],
["conifer","針葉樹"],
["podsol","ポドゾル"],
["humus","腐食"],
["downpour","どしゃ降り"],
["f ̈ohn","フェーン現象"],
["badland","(過耕作による) 荒れ野"],
["El Nino","エルニーニョ"],
["albedo","反射能"],
["westerly","偏西風"],
["incoming radiation from the sun","日射"],
["insolation","日射"],
["pore","気孔"],
["urban heat island effect(UHIE)","ヒートアイランド現象"],
["horse latitudes","亜熱帯高圧帯"],
["doldrums","赤道付近の無風帯"],
["specific heat","比熱"],
["hailstone","霰・雹"],
["undergrowth","下生え"],
["boreal forest","タイガ"],
["peat","泥炭"],
["epiphytes","着生植物"],
["selective logging","選択伐採"],
["hibernate","冬眠する"],
["energy flow","食物連鎖におけるエネルギーの流れ"],
["synoptic chart","天気図"],
["stationary front","停滞前線"],
["occluded front","閉塞前線"],
["heatwave","熱波"],
["equatorial","赤道直下の"],
["continental tropical air mass(CTAM)","熱帯大陸気団"],
["continental polar air mass(CPAM)","寒帯大陸気団"],
["North easterly trades","北東貿易風"],
["South easterly trades","南東貿易風"],
["subpolar low pressure zone","亜寒帯低圧帯"],
["polar high pressure zone","極高圧帯"],
["liana","つる植物"],
["emergent","突出木"],
["hedge","生垣"],
["dew point","露点"],
["foehn","フェーン現象"],
["rain shadow","雨影"],
["diurnal range","日較差"],
["annual range","年較差"],
["radiation cooling","放射冷却"],
["tropical storm","熱帯低気圧"],
["fertility","肥沃"],
["pellet","沈殿物"],
["aerolian","風成の"],
["remoteness","隔海度"],
["weed","藻・雑草"],
["orographic precipitation","地形性降雨"],
["oscillation","変動"],
["algae","藻"],
["aquaculture","養殖"],
["lichen","地衣類"],
["steppe","ステップ"],
["isohyet","等降水量線"],
["scrub","低木"],
["El Ni?o Southern Oscillation","エルニーニョ・南方振動"],
["respiration","呼吸"],
["sublimation","昇華"],
["chlorophyll","葉緑素"],
["plankton","プランクトン"],
["mangrove","マングローブ"],
["wind shear","乱気流"],
["icy","凍った"],
["pollen","花粉"],
["greenary","緑樹"],
["moss","コケ"],
["canopy","林冠"],
["sparsely","まばらに"],
["distinct dry","きわめて乾燥した"],
["savannah grassland","サバンナ草原"],
["fern","シダ"],
["symbiotic relationship","共生関係"],
["bark","木皮"],
["stem","茎・幹"],
["germinate","芽生える"],
["burrow","巣穴"],
["tundra","ツンドラ"],
["boggy","沼地の"],
["daylight","日光"],
["driftwood","漂木"],
["corrode","腐食する"],
["eye","台風の目"],
["microorganism","微生物"],
["brine soil zone","塩性土壌地帯"]
],
[
["graze animal","家畜"],
["goat","ヤギ"],
["terrace","段々畑にする"],
["vineyard","ブドウ園"],
["sapling","苗木"],
["graze","(家畜が) 育てられる"],
["rear","栽培・飼育する"],
["arable","耕作に適した"],
["waterlogged","水浸しになった"],
["well","井戸"],
["diversity","多様性"],
["salinization","塩類集積"],
["reservoir","貯水池"],
["ranch","牧場"],
["fell","伐採する"],
["log","伐採する"],
["saturate","水浸しにする"],
["devastate","荒れる"],
["aqueduct","送水路"],
["firewood","薪"],
["herbicide","除草剤"],
["pesticide","殺虫剤"],
["crop rotation","輪作"],
["subsidy","補助金"],
["breadbasket","穀倉地帯"],
["subsistence farming","自給的農業"],
["sugar cane","サトウキビ"],
["primary product","一次産品"],
["forestry","林業"],
["GM crop","遺伝子組み換え作物"],
["productivity","生産性"],
["cash crop","商品作物"],
["contour ploughing","等高線耕作"],
["afforestation","植林"],
["intensive farming","集約的農業"],
["extensive farming","粗放的農業"],
["pastoral farming","牧畜"],
["dairy farming","酪農"],
["fallow","休閑地"],
["charcoal","木炭"],
["perishable","生鮮食品"],
["replant failure","連作障害"],
["slash-and-barn farming","焼き畑"],
["geoponic","土壌栽培"],
["hydroponic","水耕栽培"],
["pest","害虫"],
["ditch","溝"],
["pasture land","牧草地"],
["granary","穀倉地帯"],
["high-yield variety","高収量品種"],
["gutter","側溝"],
["poultry","家禽"],
["plough","耕す"],
["grain","穀物"],
["labour intensive","労働集約型"],
["hacienda","アシエンダ"],
["estate","エステート"],
["raindrop","雨滴"],
["ranching","牧場"],
["nomadic population","遊牧民"],
["aeroponic","空中栽培"],
["tuber","芋"],
["barley","大麦"],
["capillarity","毛細管現象"],
["pasture","牧場"],
["vermin","害虫"],
["agro-pastoral","田園風景の"],
["rice paddy","水田"],
["chop","切り倒す"],
["extraction","採取"],
["olive","オリーブ"],
["drip irrigation","点滴灌漑"],
["compost","堆肥"],
["rotating crop","輪作"],
["hay","干草"],
["orchard","果樹園"],
["raw material","一次産品"],
["fuelwood","薪炭材"],
["artificial fertiliser","人工肥料"],
["agribusiness","アグリビジネス"],
["cereal","穀物"],
["spray","吹きかける"],
["drip system","点滴農法"],
["interbreed","交配させる"],
["pollination","授粉"],
["the Green Revolution","緑の革命"],
["manure","肥し"],
["mixed cropping","混合農業"],
["agroforestry","アグロフォレストリー"],
["staple crop","主要商品作物"],
["nitrogen-fixing plant","窒素固定植物"],
["cistern","貯水槽・貯水池"],
["hydro-electric power","水力発電"]
],
[
["geothermal energy","地熱エネルギー"],
["lead","鉛"],
["copper","銅"],
["oilrig","油田掘削装置"],
["oilfield","油田"],
["textile industry","繊維産業"],
["mechanize","機械化する"],
["coalfield","炭田"],
["thermal power stations","火力発電所"],
["synthetic rubber","合成ゴム"],
["fracking","水圧破砕法"],
["de-industrialisation","非工業化 (空洞化による)"],
["footloose industry","普遍原料を利用した立地条件に制約のない工業"],
["synthetic resin","合成樹脂"],
["natural resin","天然樹脂"],
["bauxite","ボーキサイト"],
["export-oriented industrialization","輸出志向型工業政策"],
["solar farm","太陽光発電所"],
["anvil","鉄床雲"],
["hydropower plant","水力発電所"],
["refining","精製"],
["smelt","製錬する"],
["borehole","掘削孔"],
["pulp","パルプ"],
["hydrogen-fuelled car","燃料電池車"],
["nickel","ニッケル"],
["hollow","抉る"],
["quarry","採石する"],
["dock","ドック"],
["warehouse","倉庫"],
["ferry","フェリー"],
["container","コンテナ"],
["intermediate technology","中間技術"],
["kerosene","灯油"],
["headquarter","本部"],
["heavy industry","重工業"],
["steel production","製鉄"],
["coal mining","石炭産出"],
["R&D","研究と開発"],
["powerhouse","発電所"],
["appliance","家電"],
["non-renewable energy","再生不可能エネルギー"],
["biofuel","バイオ燃料"]
],
[
["petrol station","ガソリンスタンド"],
["rank-size rule","ランクサイズルール"],
["migration","移動"],
["populate","住まわせる"],
["desalination","淡水化"],
["birth rate","出生率"],
["death rate","死亡率"],
["natural increase","自然増"],
["natural decrease","自然減"],
["demographic transition model","人口転換モデル"],
["life expectancy","平均寿命"],
["census","国勢調査"],
["pension","年金"],
["fertility rate","合計特殊出生率"],
["transmigration","移住"],
["international migration","国際的な移民"],
["internal migration","国内の移民"],
["source country","ソース国"],
["receiving country","受入国"],
["redevelopment","再開発"],
["outskirts","郊外"],
["segregation","隔離"],
["overspill","郊外移住者"],
["pedestrianize","歩行者専用にする"],
["resident","居住者"],
["property","所有地"],
["high order goods","買い回り品"],
["low order goods","最寄り品"],
["comparison goods","買い回り品"],
["convenience goods","最寄り品"],
["threshold population","店の維持に必要な人口"],
["sphere of influence","商圏"],
["commuter town","ベッドタウン"],
["manufacturing","製造業"],
["monoculture","モノカルチャー"],
["GNI per capita","一人当たりGNI"],
["literacy rate","識字率"],
["Human Development Index","人間開発指数"],
["exploit","開発する"],
["primary industry","第一次産業"],
["secondary industry","第二次産業"],
["tertiary industry","第三次産業"],
["quaternary industry","第四次産業 (ハイテク産業)"],
["gravel","砂利を敷く"],
["legislation","立法"],
["population density","人口密度"],
["entrepreneur","起業家"],
["procedure","手続き"],
["reclaim","埋め立てる・開墾する"],
["haphazard","無計画に"],
["infant mortality rate","幼児死亡率"],
["charitable activity","社会貢献活動"],
["modernize","近代化する"],
["(MEDCs)more economically developed countries","先進国"],
["(LEDCs)less economically developed countries","後進国"],
["positive relationship","正の相関"],
["negative relationship","負の相関"],
["urban sprawl","スプロール現象"],
["underpopulation","過疎"],
["overpopulation","過密"],
["peripheral area","周辺部"],
["fatality","死亡者数"],
["canalize","運河にする"],
["privatisation","民営化"],
["concrete","コンクリートで舗装する"],
["satellite town","衛星都市"],
["de-centralisation","分散化"],
["studentification","学生の流入"],
["brownfield site","使われなくなった工業用地"],
["honeypot","人気の観光地"],
["inner city","都市周辺部"],
["hamlet","集落"],
["downtown","都心"],
["gentrification","ジェントリフィケーション"],
["concentric","同心円の"],
["insulation","隔離"],
["desalinated seawater","脱塩海水"],
["garden city","田園都市"],
["megacity","100 万人以上の都市"],
["cleansing","浄化"],
["municipal","地方自治体の"],
["trekking","トレッキング"],
["radially","放射状に"],
["corridor","回廊"],
["concentric zone model","同心円モデル"],
["sector model","扇型モデル"],
["multiple nuclei model","多核心モデル"],
["tenement","安いアパート"],
["evict","立ち退かせる"],
["mobility","流動性"],
["diversification","多様化"],
["canyon effect","ビル風の渦流"],
["refurbishment","改修"],
["growth pole","成長の軸"],
["cut corner","近道する"],
["grant","助成金"],
["tax break","優遇税制措置"],
["obligatory","義務的な"],
["repayment","返済金"],
["fringe","周辺"],
["endemic","土地固有の"],
["replenish","新たに補給する"],
["a third of the world","発展途上国"],
["colonise","移住する"],
["footpath","歩道"],
["day tripper","日帰り観光客"],
["High Income Country","高所得国"],
["Low Income Country","低所得国"],
["sewage system","下水システム"],
["retail","小売り"],
["tram","路面電車"],
["conurbation","コナーベーション"],
["commuter settlement","ベッドタウン"],
["park-and-ride","パークアンドライド"],
["clearway","駐禁道路"],
["congestion charging","渋滞税"],
["car sharing","カーシェアリング"],
["carpool lane","カープール車線"],
["flexible working hours","フレックスタイム制"],
["motorway","高速道路"]
],
[
["sanitation","公衆衛生"],
["unemployment","失業"],
["carbon dioxide","二酸化炭素"],
["methane","メタン"],
["malnutrition","栄養失調"],
["uninhabitable","人の住めない"],
["greenhouse gas","温室効果ガス"],
["excessive","過剰な"],
["livelihood","生計"],
["subsistence","最低限の生活"],
["fund","資金"],
["deficit","需要過多，不足，赤字"],
["surplus","供給過多"],
["carbon neutral","炭素中立"],
["landfill","ごみ埋め立て地"],
["squatter","無断居住者"],
["shanty","小屋"],
["slum","スラム"],
["fume","煙"],
["pollutant","汚染物質"],
["counter-urbanisation","人口の郊外化"],
["informal sector","インフォーマルセクター"],
["radioactive","放射性のある"],
["CFC","フロンガス"],
["bustee","(インドの) スラム"],
["dystrophy","栄養失調"],
["disparity","格差"],
["eutrophication","富栄養化"],
["economical differential","経済格差"],
["acidification","海洋酸性化"],
["landowner","(大土地) 所有者"],
["peasant","小作人"],
["quarantine","検疫"],
["decontaminate","除染する"],
["asylum seeker","難民"],
["voluntary migration","自発的な移民"],
["forced migration","不自発的な移民"],
["pneumonia","肺炎"],
["ecological footprint","地球の環境容量"],
["chimney","煙突"],
["deindustrialization","産業の空洞化"],
["urban blight","都心の荒廃"],
["measles","麻疹"],
["wastewater treatment","下水処理"],
["soil degradation","土壌荒廃"],
["overgrazing","過放牧"],
["over-exploitation","乱開発"],
["Freon","フロンガス"],
["anthropogenic","人為起源の"],
["inhospitable","荒れ果てた"],
["secluded","隔絶された"],
["CSR","企業の社会的責任"],
["smallpox","天然痘"],
["apartheid","アパルトヘイト"],
["turbidity","濁り"],
["salt-tolerant","耐塩性のある"],
["depletion","枯渇"],
["bleach","(サンゴが) 白化する"],
["desertification","砂漠化"],
["degradation","地力低下"],
["trample","踏みつける"],
["encroach","侵犯する"],
["blubber","脂肪"],
["Antarctic Treaty","南極条約"],
["channel straightening","流路の直線化"],
["flood relief channel","遊水路"],
["river restoration","蛇行復元・堰の除去など自然の河川を復元すること"],
["rubbish","廃棄物"],
["purchasing power parity","購買力平価説"],
["cholera","コレラ"],
["hut","粗末な小屋"],
["uneven","不公平"],
["derelict","遺棄された"],
["vandalism","(公共物の) 破壊"],
["burglary","不法侵入"],
["joyriding","危険運転"],
["inequality","不平等"],
["irreversibly","不可逆的に "],
["aftermath","余波"],
["hygiene","衛生"],
["north-south divide","南北問題"],
["desalination plant","淡水化施設"],
["disposable","使い捨ての"],
["water stress","水需要のひっ迫"],
["over-cultivation","過耕作"],
["light pollution","光害"],
["vaccination","ワクチン"],
["typhoid","腸チフス"],
["sand dam","乾燥地で砂層の下に水を貯蓄するダム"],
["direct emission","(CO2 の) 直接的排出 (燃焼など)"],
["indirect emission","(CO2 の) 間接的排出 (製品の購入など)"],
["hybrid car","ハイブリッド車"]
],
[
["avalanche","雪崩"],
["rock slide","土石流"],
["unstick","はがれる"],
["jerk","急に動く"],
["epicentre","震央"],
["focus","震源"],
["magnitude","マグニチュード"],
["seismometer","地震計"],
["landslide","地すべり"],
["casualty","死傷者，惨事"],
["tremor","振動・地震"],
["rubble","瓦礫"],
["acid rain","酸性雨"],
["shelter","避難所"],
["off-limits","立ち入り禁止の"],
["debris","瓦礫"],
["wildfire","野火"],
["ignite","点火する"],
["sand bag","土嚢"],
["temporary accommodation","仮設住宅"],
["breach","決壊させる"],
["makeshift","仮設の"],
["saturated","水浸しの"],
["inundate","水浸しにする"],
["unprecedented","前例のない"],
["hypocentre","震源"],
["liquefaction","液状化"],
["engulf","(波・煙などが) 飲み込む"],
["storm surge","高潮"],
["shallow-focus earthquake","浅発地震 (0~70 km)"],
["deep-focus earthquake","深発地震 (70~700 km)"],
["return period","(洪水などの) 再発周期"],
["shockwave","衝撃波"],
["apocalypse","大災害"],
["strong spring tide","高潮"],
["seismic","地震の"],
["coincide","同時に起こる"],
["mudslide","土石流"],
["hurricane","ハリケーン"],
["tornado","トルネード"],
["local earthquake","直下型地震"],
["cyclone","サイクロン"],
["periodically","定期的に"],
["anchor","しっかり固定する"],
["nail","釘付けにする"],
["inundation","洪水"],
["evacuate","避難する"],
["stockpile","非常時の備蓄"],
["slide","地すべり・雪崩"],
["slump","急落"],
["rockfall","落石"],
["sea wall","防波堤"],
["gabion","蛇篭"],
["rock armour","護岸"],
["sewage overflow","下水の噴出"],
["hailstorm","雹嵐"],
["spiral","悪循環"]
],
[
["riot","暴動"],
["aid","国際的な援助"],
["donor","援助をする国"],
["recipient","援助を受ける国"],
["subsidized","補助金を与えられる"],
["quotas","(製造・輸出入などの) 規定数量"],
["Trans-national corporation","多国籍企業"],
["interdependence","相互依存"],
["tariff","関税"],
["dependency","属国"],
["enclave","少数民族集団，飛び地 (1 つの外国の領土に完全に取り込まれた自国の領土)"],
["exclave","飛び地 (1 つまたは複数の外国の領土に取り込まれた自国の領土)"],
["indicator","経済指標"],
["net export","純輸出"],
["medium","媒体"],
["FDI(Foreign-direct investment)","海外直接投資"],
["microfinance","小規模金融"],
["devolve","委ねる"],
["commonwealth","連邦・国家"]
],
[
["intersect","交差する"],
["overlap","重複する"],
["obliquity","傾き"],
["correlation","相関関係"],
["choropleth map","階級区分図"],
["radius","半径"],
["isoline","等値線"]
]
];

//let selected_sections = document.getElementById("section_selector");
let section_numbers = [];
let whether_selected = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let selected_word_number = 0;
let new_dictionary = [];
let miss_list = [];

let Japanese_word;
let words_entry;
let button;
let circle;
let miss_table;

let question;
let answer;

let current_status = 0;



//初期設定
function setting() {
    Japanese_word = document.getElementById("Japanese_word");
    words_entry = document.getElementById("words_entry");
    button = document.getElementById("decision");
    circle = document.getElementById("circle");
    miss_table = document.getElementById("miss_table");
    
    let selected_number = 0;
    for (let i = 1; i < dictionary.length + 1; i++) {
        let section = document.getElementById(`sec${("00"+i).slice(-2)}`);
        if (section.checked) {
            whether_selected[i] = 1;
            selected_number++;
        }
    }
    if (selected_number == 0) {
        return 1;
    }

    for (let i = 0; i < dictionary.length; i++) {
        section_numbers.push(dictionary[i].length);
        selected_word_number += section_numbers[i] * whether_selected[i];
    }
    
    for (let i = 0; i < dictionary.length; i++) {
        if (whether_selected[i] == 0) {
            continue;
        }else {
            new_dictionary = new_dictionary.concat(dictionary[i]);
        }
    }
    return 0;
}


//問題を提示する
function word_select(attribute = 0) {
    if (current_status == 1) {
    	return;
    }
    
    if ((selected_word_number == 0) && (attribute == 0)) {
        alert("走破！お疲れ様！");
        current_status = 1;
        button.innerHTML = "誤答を周回";
        button.setAttribute("onclick", "next_round()");
        return;
    }
    
    words_entry.removeAttribute("readonly");
    let chosen = Math.floor(Math.random()*selected_word_number);
    question = new_dictionary[chosen][1];
    answer= new_dictionary[chosen][0];
    Japanese_word.innerHTML = question;
    words_entry.style.color = "black";
    words_entry.value = "";
    
    selected_word_number --;
    new_dictionary.splice(chosen, 1);
    button.innerHTML = "決定（Enterキーで代用）";
    button.setAttribute("onclick", "check()");
    circle.style.visibility = "hidden";
    return;
}


//正誤判定
function check() {
    if (current_status == 1) {
    	return;
    }
    
    words_entry.setAttribute("readonly", true);
    if (words_entry.value == answer) {
        circle.style.visibility = "visible";
    }else {
        let new_missing = document.createElement("tr");
        new_missing.innerHTML = `<th>${question}</th><th>${words_entry.value}</th><th>${answer}</th>`;
        miss_table.appendChild(new_missing);
        miss_list.push([question, answer]);
        words_entry.style.color = "red";
        words_entry.value = answer;
    }
    
    button.innerHTML = "次へ（Enterキーで代用）";
    button.setAttribute("onclick", "word_select()");
}


function next_round() {
    new_dictionary = miss_list.slice();
    current_status = 0;
    miss_list = [];
    selected_word_number = new_dictionary.length;
    miss_table.innerHTML = "<tr><th>問題</th><th>あなたの解答</th><th>正答</th></tr>";
    word_select(1);
}


document.addEventListener('keydown', (event) => {
    let key = event.key;
        
    if (key == "Enter") {
        event.preventDefault();
        if (button.getAttribute("onclick") == "check()") {
            check();
        }else if (button.getAttribute("onclick") == "word_select()") {
        	word_select();
        }else {
        	return;
        }
    }
});
