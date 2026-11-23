const PAL={'.':'#9fd3ea','~':'#3f7fc4','r':'#e0534a','y':'#f5c531','g':'#5aa846','w':'#f7f4ea','c':'#e9d2a6','k':'#3b3b46','b':'#8a5a35','p':'#d77fc0','o':'#f08a2c','n':'#2f7a3e'};
const LEVELS=[
 {name:'Tulip',jitter:.15,art:["........","..rrrr..",".rrrrrr.",".rryyrr.","..rrrr..","...gg...",".g.gg.g.",".gggggg."]},
 {name:'Toadstool',jitter:.3,art:["..........","...rrrr...","..rrwrrr..",".rrrrrwrr.",".rwrrrrrr.","..cccccc..","....cc....","....cc....",".g..cc..g.","gggggggggg"]},
 {name:'Lighthouse',jitter:.45,art:["............",".....yy.....","....kkkk....",".....ww.....",".....rr.....",".....ww.....","....rrrr....","....wwww....","....rrrr....","~~~.wwww.~~~","~~~~bbbb~~~~","~~~~~~~~~~~~"]},
 {name:'Cherries',jitter:.5,art:["..........","......nn..",".....n....","....n.n...","...n...n..","..rr...rr.",".rrrr.rrrr",".rwrr.rwrr",".rrrr.rrrr","..rr...rr."]},
 {name:'Pumpkin',jitter:.55,art:["..........","....nn....",".....n....","..oooooo..",".oooooooo.",".ookoooko.",".oooooooo.",".okkkkkko.","..oooooo..","gggggggggg"]},
 {name:'Sailboat',jitter:.6,art:["............","......k.....","......kw....",".....wkww...","....wwkwww..","...wwwkwwww.","..wwwwkwwwww","......k.....",".bbbbbbbbbb.","..bbbbbbbb..","~~~~~~~~~~~~","~~~~~~~~~~~~"]},
 {name:'Strawberry',jitter:.65,art:["............","....nnnn....",".....nn.....","...rrrrrr...","..rryrrryr..","..rrrrrrrr..","..ryrrryrr..","...rrrrrr...","...ryrrry...","....rrrr....",".....rr.....","............"]},
 {name:'Cactus',jitter:.7,art:["............",".....nn.....","....nnnn....","....nnnn.nn.",".nn.nnnn.nn.",".nn.nnnn.nn.",".nnnnnnnnnn.","....nnnn....","....nnnn....","...oooooo...","...oooooo...","cccccccccccc"]},
 {name:'Ladybug',jitter:.5,art:["............","...k....k...","....kkkk....","...wwkkww...","k..rrkkrr..k",".krrrkkrrrk.","..kkrkkrkk..",".krrrkkrrrk.","k.rkrkkrkr.k","..rrrkkrrr..","..k.rkkr.k..","............"]},
 {name:'Sunshine',jitter:.5,art:["..........","....yy....",".y.yyyy.y.","..yyyyyy..",".yykyykyy.","yyyyyyyyyy",".yyykkyyy.","..yyyyyy..",".y.yyyy.y.","....yy...."]},
 {name:'Goldfish',jitter:.52,art:["............","............","......oo....",".....oooo...","o...oooooo..","oo.oookoooo.","ooooooooooo.","oo.oooooooo.","o...oooooo..",".....oooo...","......oo....","~~~~~~~~~~~~"]},
 {name:'Heart',jitter:.54,art:["..........",".pp....pp.","pppp..pppp","pwwppppppp","pppppppppp",".pppppppp.","..pppppp..","...pppp...","....pp....",".........."]},
 {name:'Apple Tree',jitter:.56,art:["............",".....nn.....","....nnnn....","...nnnnnn...","..nnnrnnnn..",".nnnnnnnrnn.","..nrnnnnnn..",".nnnnnnnnnn.",".....bb.....",".....bb.....","....bbbb....","gggggggggggg"]},
 {name:'Cottage',jitter:.58,art:["............",".....rr.....","....rrrr....","...rrrrrr...","..rrrrrrrr..",".rrrrrrrrrr.","..cccccccc..","..cyycccbc..","..cyycccbc..","..ccccccbc..","..ccccccbc..","gggggggggggg"]},
 {name:'Ice Cream',jitter:.6,art:["............",".....pp.....","....pppp....","...pppppp...","...pwpppwp..","..pppppppp..","...cbcbcb...","....cbcb....","....bcbc....",".....cb.....",".....bc.....","............"]},
 {name:'Rocket',jitter:.62,art:["............",".....ww.....","....wrrw....","....wwww....","....wkkw....","....wwww....","...rwwwwr...","..rrwwwwrr..","..r.wwww.r..",".....oo.....","....oyyo....",".....yy....."]},
 {name:'Snowman',jitter:.64,art:["....kkkk....","....kkkk....","...kkkkkk...","....wwww....","....kwwk....","....wwow....","...wwwwww...","..wwwkwwww..","..wwwwwwww..","..wwwkwwww..","...wwwwww...","cccccccccccc"]},
 {name:'Tabby Cat',jitter:.66,art:["............","..o......o..","..oo....oo..","..oooooooo..",".oooooooooo.",".oogoooogoo.",".oooooooooo.",".ooooppoooo.","..oookkooo..","...oooooo...","............","............"]},
 {name:'Night Sky',jitter:.68,art:["kkkkkkkkkkkk","kkkyykkkkykk","kkyyykkkkkkk","kyyykkkkkkkk","kyyykkkykkkk","kyyykkkkkkkk","kyyyykkkkkkk","kkyyyyykkkkk","kkkyyyykkkyk","kkkkkkkkkkkk","kykkkkkkkkkk","kkkkkkkkkkkk"]},
 {name:'Cupcake',jitter:.7,art:["............",".....r......","....pppp....","...pwppwp...","..pppppppp..","..pppwpppp..","..cbcbcbcb..","..cbcbcbcb..","...cbcbcb...","...cbcbcb...","....cbcb....","............"]},
 {name:'Frog',jitter:.72,art:["............","..ww....ww..",".wkkw..wkkw.",".wkkwggwkkw.","..wwggggww..",".gggggggggg.","gggrrrrrrggg",".gggggggggg.","..gg....gg..",".ggg....ggg.","~~~~~~~~~~~~","~~~~~~~~~~~~"]},
 {name:'Umbrella',jitter:.74,art:["............",".....rr.....","...rryyrr...","..rryyyyrr..",".rryyrryyrr.","rrrrrrrrrrrr","r.r.rkkr.r.r",".....kk.....",".....kk.....",".....kk..k..","......kkkk..","............"]},
 {name:'Owl',jitter:.76,art:["............","..b......b..","..bbbbbbbb..",".bwwbbbbwwb.",".bwkwbbwkwb.",".bwwboobwwb.",".bbbbbbbbbb.",".bccccccccb.",".bccccccccb.","..bbbbbbbb..","...o....o...","kkkkkkkkkkkk"]},
 {name:'Castle',jitter:.78,art:["............",".k.k....k.k.",".kkk....kkk.",".kkk.kk.kkk.",".kkkkkkkkkk.",".kkykkkkykk.",".kkkkkkkkkk.",".kkkkbbkkkk.",".kkkbbbbkkk.",".kkkbbbbkkk.","~~~~~~~~~~~~","gggggggggggg"]},
 {name:'Rainbow',jitter:.8,art:["............","....rrrr....","..rroooorr..",".rooyyyyoor.",".royyggyyor.","rooyg..gyoor","royg....gyor","royg....gyor","wwww....wwww","wwwww..wwwww","............","............"]},
 {name:'Watermelon',jitter:.82,art:["............","............","nwrrrrrrrrwn",".nwrrkrrrwn.",".nwrkrrrkwn.","..nwrrrrwn..","..nnwrrwnn..","...nnwwnn...","....nnnn....","............","............","............"]},
 {name:'Penguin',jitter:.83,art:["............","....kkkk....","...kkkkkk...","...kwkkwk...","...kkookk...","..kkwwwwkk..",".kkwwwwwwkk.",".kkwwwwwwkk.","..kwwwwwwk..","...kwwwwk...","...oo..oo...","wwwwwwwwwwww"]},
 {name:'Sunflower',jitter:.84,art:["....yyyy....","...yybbyy...","..yybbbbyy..","..ybbbbbby..","..yybbbbyy..","...yybbyy...","....yyyy....",".....nn.....","..nn.nn.....","...nnnn.nn..",".....nnnn...","gggggggggggg"]},
 {name:'Octopus',jitter:.85,art:["~~~~~~~~~~~~","~~~~pppp~~~~","~~~pppppp~~~","~~pppppppp~~","~~pwkppkwp~~","~~pppppppp~~","~~pppppppp~~","~p~p~pp~p~p~","~p~p~pp~p~p~","p~p~p~~p~p~p","~~~~~~~~~~~~","cccccccccccc"]},
 {name:'Pizza Slice',jitter:.86,art:["............","bbbbbbbbbbbb",".yyyyyyyyyy.",".yryyyyyryy.","..yyyryyyy..","..yyyyyyyy..","...yryyyy...","...yyyyyy...","....yyry....","....yyyy....",".....yy.....","............"]},
 {name:'Turtle',jitter:.87,art:["............","............","....nnnn....","...ngnngn...","..nnnggnnn..",".gngnnnngng.","ggnnngnnnngg",".nnnnnnnnnn.","..g......g..","..g......g..","cccccccccccc","cccccccccccc"]},
 {name:'Guitar',jitter:.88,art:[".....bb.....",".....kk.....",".....kk.....",".....kk.....",".....kk.....","....oooo....","...oooooo...","....okko....","...ookkoo...","..oooooooo..","..oookkooo..","...oooooo..."]},
 {name:'Lollipop',jitter:.89,art:["............","...pppppp...","..ppwwwwpp..",".ppwppppwpp.",".pwppwwppwp.",".pwpwppwpwp.",".pwppwwppwp.",".ppwppppwpp.","..ppwwwwpp..","...pppppp...",".....ww.....",".....ww....."]},
 {name:'Crab',jitter:.9,art:["............",".r........r.","rr.r....r.rr",".rrr....rrr.","..r.k..k.r..","...rrrrrr...","..rrrrrrrr..",".rrrrrrrrrr.","..rrrrrrrr..",".r.r....r.r.","cccccccccccc","cccccccccccc"]},
 {name:'Cocoa Mug',jitter:.9,art:["............","...w..w.....","....w..w....","............","..cccccccc..","..cbbbbbbcc.","..cccccccc.c","..cccrcccc.c","..cccccccc.c","..ccccccccc.","...cccccc...","kkkkkkkkkkkk"]},
 {name:'Robot',jitter:.9,shoos:2,art:[".....r......",".....k......","..kkkkkkkk..","..kykkkkyk..","..kkkkkkkk..","..kkrrrrkk..","..kkkkkkkk..",".k.kwwwwk.k.",".k.kwwwwk.k.","...kk..kk...","...kk..kk...","gggggggggggg"]},
 {name:'Hot Air Balloon',jitter:.9,shoos:2,art:["....rrrr....","..rryyyyrr..",".rryyrryyrr.",".ryyrrrryyr.",".ryyrrrryyr.",".rryyrryyrr.","..rryyyyrr..","...rryyrr...","....k..k....","....k..k....","....bbbb....","....bbbb...."]},
 {name:'Butterfly',jitter:.9,shoos:2,art:["............",".pp......pp.","pyyp.kk.pyyp","pyyypkkpyyyp","pppppkkppppp",".ppppkkpppp.","..ppokkopp..",".poookkooop.",".poo.kk.oop.","..pp.kk.pp..","............","............"]},
 {name:'Lion',jitter:.9,shoos:2,art:["..oooooooo..",".oooooooooo.","oooyyyyyyooo","ooyyyyyyyyoo","ooykyyyykyoo","ooyyyyyyyyoo","ooyyybbyyyoo","ooyyykkyyyoo","oooyyyyyyooo",".oooyyyyooo.","..oooooooo..","............"]},
 {name:'Pineapple',jitter:.9,shoos:2,art:["....n..n....",".....nn.....","....nnnn....","...nnnnnn...","....yyyy....","...yoyyoy...","...yyoyyy...","...oyyoyy...","...yoyyoy...","...yyoyyy...","....yyyy....","............"]},
 {name:'Parrot',jitter:.9,shoos:2,art:["..............",".....rrr......","....rrrrr.....","...rrwkrr.....","..yyrwwrr.....","..yy.rrrrr....",".....rrrrrg...",".....rrrggg...","......rggbb...","......rgbbb...",".......gbb....","........b.....","kkkkkkkkkkkkkk",".......b......"]},
 {name:'Puppy',jitter:.9,shoos:2,art:["..............","..bb......bb..",".bbbcccccccbb.",".bbcccccccccb.",".bbckcccckccb.","..cccccccccc..","..cccckkcccc..","..cccccccccc..","...cccrrccc...","....cccccc....","...bccccccb...","..bbccccccbb..","..bbccccccbb..","gggggggggggggg"]},
 {name:'Treasure Chest',jitter:.92,shoos:2,art:["..............","..............","..bbbbbbbbbb..",".bbybbbbbbybb.",".bbbbbbbbbbbb.",".yyyyyyyyyyyy.",".bbbbbkkbbbbb.",".bbbbbyybbbbb.",".bbbbbbbbbbbb.",".bybbbbbbbbyb.",".bbbbbbbbbbbb.",".yyyyyyyyyyyy.","cccccccccccccc","cccccccccccccc"]},
 {name:'Volcano',jitter:.93,shoos:2,art:["......rr......",".....r..r.....","......rr......",".....orro.....",".....kook.....","....kkookk....","....kkkokk....","...kkkkkkkk...","...kkokkkkk...","..kkkkkkkkkk..","..kkkkkokkkk..",".kkkkkkkkkkkk.","kkkkkkkkkkkkkk","gggggggggggggg"]},
 {name:'Whale',jitter:.94,shoos:2,art:["..............","....w...w.....",".....w.w......","......w.......","..kkkkkkk.....",".kkkkkkkkk...k","kkwkkkkkkkk.kk","kkkkkkkkkkkkk.",".kwwwwwwkkk...","..kkkkkkk.....","~~~~~~~~~~~~~~","~~~~~~~~~~~~~~","~~~~~~~~~~~~~~","~~~~~~~~~~~~~~"]},
 {name:'Fox',jitter:.95,shoos:1,perch:4,art:["..............",".o..........o.",".oo........oo.",".ooo......ooo.",".oooooooooooo.",".oookooookooo.",".woooooooooow.","..wwooooooww..","...wwwwwwww...","....wwkkww....",".....wwww.....","......ww......","..............","gggggggggggggg"]},
 {name:'Ringed Planet',jitter:.96,shoos:1,perch:4,art:["kkkkkkkkkkkkkk","kkykkkkkkkkkyk","kkkkkooookkkkk","kkkkoooooookkk","kkkooyookoookk","kwwoooooooooww","wwkooooyoookww","kkkoooooooookk","kkkkoooooookkk","kkkkkooookkkkk","kkkkkkkkkkkkkk","kykkkkkkkkkkkk","kkkkkkkkkykkkk","kkkkkkkkkkkkkk"]},
 {name:'Burger',jitter:.97,shoos:1,perch:4,art:["..............","....oooooo....","..ooyoooyooo..",".oooooooooooo.",".oooooooooooo.",".nnnnnnnnnnnn.",".rrrrrrrrrrrr.",".yyyyyyyyyyyy.",".bbbbbbbbbbbb.",".bbbbbbbbbbbb.",".nnnnnnnnnnnn.",".oooooooooooo.","..oooooooooo..",".............."]},
 {name:'Koi Pond',jitter:.98,shoos:1,perch:4,art:["~~~~~~~~~~~~~~","~~~~~~ww~~~~~~","~~~~~wwrw~~~~~","~~~~wwrrww~~~~","~~~~wkwwkw~~~~","~~~~wwwrww~~~~","~~~~wrrwww~~~~","~~~~wwwwrw~~~~","~~~~~wrrw~~~~~","~~~~~~ww~~~~~~","~~~~~wwww~~~~~","~~~~wwwwww~~~~","~~~~~~~~~~~~~~","nnnnnnnnnnnnnn"]},
 {name:'Grand Garden',jitter:1,shoos:1,perch:4,art:["..............","..rr......pp..",".rrrr....pppp.",".rryr....ppyp.",".rrrr....pppp.","..rr......pp..","...n......n...","...n.yyyy.n...","....nyooyn....","....nyooyn....",".....yyyy.....","......nn......","......nn......","gggggggggggggg"]},
 {name:'Bunny',jitter:1,shoos:1,perch:4,art:["..............","...ww....ww...","...wp....pw...","...wp....pw...","...ww....ww...","...wwwwwwww...","..wwwwwwwwww..","..wwkwwwwkww..","..wwwwppwwww..","..wwwwkkwwww..","...wwwwwwww...","..wwwwwwwwww..",".wwwwwwwwwwww.","gggggggggggggg"]},
 {name:'Teacup',jitter:1,shoos:1,perch:4,art:["..............",".....w..w.....","......w..w....","..............",".pppppppppp...",".pwwwwwwwwpp..",".pwwpwwpwwp.p.",".pwwwwwwwwp.p.",".pwpwwpwwwpp..","..pwwwwwwp....","...pppppp.....",".cccccccccccc.","..cccccccccc..","bbbbbbbbbbbbbb"]},
 {name:'Snail',jitter:1,shoos:1,perch:4,art:["..............","..k...k.......","...k.k........","...yyy..bbbb..","...yky.bboobb.","...yyy.boobob.","...yyy.bobbob.","...yyy.boooob.","...yyy.bbbbbb.","...yyyyyyyyyy.","..yyyyyyyyyyy.","..............","gggggggggggggg","gggggggggggggg"]},
 {name:'Toadstool House',jitter:1,shoos:1,perch:4,art:["......rr......","....rrrrrr....","...rrwrrrwr...","..rrrrrrrrrr..",".rwrrrrrrrwrr.","rrrrrrwrrrrrrr","..cccccccccc..","..ccyycccccc..","..ccyyccbbcc..","..ccccccbbcc..","..ccccccbbcc..","..ccccccbbcc..","gggggggggggggg","gggggggggggggg"]},
 {name:'Bicycle',jitter:1,shoos:1,perch:4,art:["..............","..............","........kk....","...k.....k....","...kkkkkkk....","....k...kk....",".rrr.k.k.rrr..","r...r.k.r...r.","r.k.r...r.k.r.","r...r...r...r.",".rrr.....rrr..","..............","cccccccccccccc","cccccccccccccc"]},
 {name:'Cherry Blossom',jitter:1,shoos:1,perch:4,art:["..............","..pp....pp....",".pwwp..pwwp...",".pwyp..pwyp...","..pp.b..pp....","....b.b.......","...b...bpp....","..b....pwwp...",".bb....pwyp...","bb......pp....","b.............","..............","gggggggggggggg","gggggggggggggg"]},
 {name:'Anchor',jitter:1,shoos:1,perch:4,art:["..............","......kk......",".....k..k.....","......kk......","....kkkkkk....","......kk......","......kk......","......kk......","..k...kk...k..","..kk..kk..kk..","...kkkkkkkk...",".....kkkk.....","~~~~~~~~~~~~~~","~~~~~~~~~~~~~~"]},
 {name:'Moonlit Bat',jitter:1,shoos:1,perch:4,art:["kkkkkkkkkkkkkk","kkkkkkkkkkyyyk","kkkkkkkkkyyyyy","kkkkkkkkkkyyyk","kkkkkpkkpkkkkk","kpkkkppppkkkpk","kppkpyppypkppk","kppppppppppppk","kpkppppppppkpk","kkkkkppppkkkkk","kkkkkkppkkkkkk","kkkkkkkkkkkkkk","kkkkkkkkkkkkkk","nnnnnnnnnnnnnn"]},
 {name:'Dino',jitter:1,shoos:1,perch:4,art:["..............","........nnnn..",".......nnknnn.",".......nnnnnn.",".......nnnrr..","..n...nnnn....","..nn.nnnnnn...","...nnnnnnnn...","....nnnnnnn...",".....nn..nn...",".....nn..nn...","..............","cccccccccccccc","cccccccccccccc"]},
 {name:'Paper Lantern',jitter:1,shoos:1,perch:4,art:["......kk......",".....k..k.....","....kkkkkk....","...rrrrrrrr...","..rryyyyyyrr..","..ryyyooyyyr..","..ryyooooyyr..","..ryyyooyyyr..","..rryyyyyyrr..","...rrrrrrrr...","....kkkkkk....","......kk......","......y.......","kkkkkkkkkkkkkk"]},
 {name:'Teddy Bear',jitter:1,shoos:1,perch:4,maxLoad:7,art:["..............","..bb......bb..",".bccb....bccb.",".bbbbbbbbbbbb.","..bbbbbbbbbb..","..bbkbbbbkbb..","..bbbccccbbb..","..bbbckkcbbb..","...bbbccbbb...","..bbbbbbbbbb..",".bbbccccccbbb.",".bbbccccccbbb.","..bbb....bbb..","pppppppppppppp"]},
 {name:'Jellyfish',jitter:1,shoos:1,perch:4,maxLoad:7,art:["~~~~~~~~~~~~~~","~~~~pppppp~~~~","~~~pppppppp~~~","~~ppwppppwpp~~","~~pppppppppp~~","~~pppppppppp~~","~~p~p~pp~p~p~~","~~p~p~pp~p~p~~","~~~p~p~~p~p~~~","~~~p~p~~p~p~~~","~~p~~p~~p~~p~~","~~~~~~~~~~~~~~","cccccccccccccc","cccccccccccccc"]},
 {name:'Kite',jitter:1,shoos:1,perch:4,maxLoad:7,art:["..............","......rr......",".....rryy.....","....rrryyy....","...rrrryyyy...","..rrrrryyyyy..","..~~~~~ppppp..","...~~~~pppp...","....~~~ppp....",".....~~pp.....","......kp......",".......k......","......r.r.....","........k....."]},
 {name:'Cherry Pie',jitter:1,shoos:1,perch:4,maxLoad:7,art:["..............","..............","...oooooooo...","..oroooooroo..",".oooooroooooo.",".ooroooooooro.",".oooooooooooo.",".rrrrrrrrrrrr.",".cccccccccccc.","..cccccccccc..","...cccccccc...","..............","wwwwwwwwwwwwww","wwwwwwwwwwwwww"]},
 {name:'Clownfish',jitter:1,shoos:1,perch:4,maxLoad:7,art:["~~~~~~~~~~~~~~","~~~~~~~~~~~~~~","~~~~~oooo~~~~~","~~o~owoooo~~~~","~ooowwooowoo~~","~owowwoookwoo~","~ooowwooowoo~~","~~o~owoooo~~~~","~~~~~oooo~~~~~","~~~~~~~~~~~~~~","~~~~~~~~~~~~~~","~~n~~~~~~~n~~~","~nn~~n~~~nn~n~","cccccccccccccc"]},
 {name:'Tall Ship',jitter:1,shoos:1,perch:4,maxLoad:7,art:["......k.......","......kr......","....wwkww.....","...wwwkwww....","..wwwwkwwww...",".wwwwwkwwwww..","......k.......","bbbbbbbbbbbbbb",".bbybbybbybbb.","..bbbbbbbbbb..","~~~~~~~~~~~~~~","~~w~~~~~~w~~~~","~~~~~~~~~~~~~~","~~~~~~~~~~~~~~"]},
 {name:'Honey Jar',jitter:1,shoos:1,perch:4,maxLoad:7,art:["..............","....bbbbbb....","....cccccc....","...yyyyyyyy...","..yyyyyyyyyy..","..yyyccccyyy..","..yyckkkkcyy..","..yyyccccyyy..","..yyyyyyyyyy..","..oyyyyyyyyo..","..oooyyyyooo..","...oooooooo...","..............","bbbbbbbbbbbbbb"]},
 {name:'Dolphin',jitter:1,shoos:1,perch:4,maxLoad:7,art:["..............","..............","........kk....","......kkk.....","..kkkkkkkk....",".kkkkkkkkkk...","kkwkkkkkkkkk..","..wwwwwkkkkkk.","........kkk.kk","..........kkk.","~~~~~~~~~~~~~~","~~~w~~~~~w~~~~","~~~~~~~~~~~~~~","~~~~~~~~~~~~~~"]},
 {name:'Holiday Tree',jitter:1,shoos:1,perch:4,maxLoad:7,art:["......yy......","......yy......",".....nnnn.....","....nnrnnn....","....nnnnnn....","...nnynnnnn...","...nnnnnrnn...","..nnrnnnnnnn..","..nnnnnnynnn..",".nnnnnnnnnnnn.",".nnynnnnnnrnn.","......bb......","..rr..bb..pp..","wwwwwwwwwwwwww"]},
 {name:'Gift Box',jitter:1,shoos:1,perch:4,maxLoad:7,art:["..............","....rr..rr....",".....rrrr.....","......rr......",".ppppprrppppp.",".ppppprrppppp.",".rrrrrrrrrrrr.",".ppppprrppppp.",".ppppprrppppp.",".ppppprrppppp.",".ppppprrppppp.",".ppppprrppppp.","..............","cccccccccccccc"]},
 {name:'Deer',jitter:1,shoos:0,perch:4,maxLoad:7,art:["..............","..b.b....b.b..","...bb....bb...","....bbbbbb....","...cbbbbbbc...","....bkbbkb....","....bbbbbb....",".....bbbb.....",".....bkkb.....","......bb......","..............","..............","gggggggggggggg","gggggggggggggg"]},
 {name:'Mosaic Tile',jitter:1,shoos:0,perch:4,maxLoad:7,art:["rrrrrrrrrrrrrr","ryyyyyyyyyyyyr","ryggggggggggyr","rygppppppppgyr","rygpwwwwwwpgyr","rygpw~~~~wpgyr","rygpw~kk~wpgyr","rygpw~kk~wpgyr","rygpw~~~~wpgyr","rygpwwwwwwpgyr","rygppppppppgyr","ryggggggggggyr","ryyyyyyyyyyyyr","rrrrrrrrrrrrrr"]},
 {name:'Hummingbird',jitter:1,shoos:0,perch:4,maxLoad:7,art:["..............","...........p..","..ww......pp..","..www....pnp..","...www..nnk...","....wwwnnnkkk.",".....nnnnnn...","....nnnrrnn...","...nnnnnnn....","..nnn.........",".nn...........","..............","..........pp..","gggggggggggggg"]},
 {name:'Lighthouse at Night',jitter:1,shoos:0,perch:4,maxLoad:7,art:["kkkkkkkkkkkkkk","yyykkkrrkkkyyy","yyyyywwwwyyyyy","kkkkkkwwkkkkkk","kkkkkkrrkkkkkk","kkkkkkwwkkkkkk","kkkkkrrrrkkkkk","kkkkkwwwwkkkkk","kkkkkrrrrkkkkk","kkkkwwwwwwkkkk","~~~~bbbbbb~~~~","~~~bbbbbbbb~~~","~~~~~~~~~~~~~~","~~~~~~~~~~~~~~"]},
 {name:'Phoenix',jitter:1,shoos:0,perch:4,maxLoad:8,art:["......yy......",".....yrry.....","....yrrrry....","o...yrkkry...o","oo..yrrrry..oo","ooo.orrrro.ooo","ooooorrrrooooo",".oooyrrrryooo.","..oyyrrrryyo..","...yy.rr.yy...","......rr......",".....r..r.....","....r....r....","kkkkkkkkkkkkkk"]},
];
const LOAD=3,PERCH=5,LANES=4,TICK=260;
let S;
const $=id=>document.getElementById(id);

function build(li){
  saveLevel(li);
  const L=LEVELS[li],H=L.art.length,W=L.art[0].length;
  const cells=[];
  for(let r=0;r<H;r++)for(let c=0;c<W;c++)cells.push({r,c,col:L.art[r][c],filled:false,reserved:false});
  // order of need: bottom row first, left to right
  const order=[];for(let r=H-1;r>=0;r--)for(let c=0;c<W;c++)order.push(cells[r*W+c]);
  // bigger loads appear as levels go on: 1-4 early, up to 1-6 later
  const maxLoad=easy?3:L.maxLoad??Math.min(6,4+Math.floor(li/3));
  const open={},seq=[];
  for(const cell of order){
    let b=open[cell.col];
    if(!b){b={col:cell.col,load:0,cap:1+Math.floor(Math.random()*maxLoad),i:seq.length};open[cell.col]=b;seq.push(b)}
    b.load++; if(b.load===b.cap)delete open[cell.col];
  }
  // Shuffle, then keep only deals a solver can beat without any shoos.
  // If many shuffles fail, ease the shuffle; the unshuffled order is the last resort.
  const perchN=easy?PERCH:L.perch??PERCH;
  let lanes,jit=easy?0:L.jitter,tries=0;
  for(;;){
    const s=seq.map(b=>({...b}));
    for(let pass=0;pass<3+Math.floor(li/10);pass++)for(let i=0;i<s.length-1;i++)if(Math.random()<jit)[s[i],s[i+1]]=[s[i+1],s[i]];
    lanes=Array.from({length:LANES},()=>[]);
    s.forEach((b,i)=>lanes[i%LANES].push(b));
    if(jit<=0||solvable(lanes,L.art,perchN))break;
    if(++tries%10===0)jit=Math.max(0,jit-.15);
  }
  S={li,W,H,cells,lanes,perch:Array(perchN).fill(null),shoos:easy?3:L.shoos??3,shooMode:false,over:false};
  $('quilt').innerHTML='';
  renderAll();
}

// Depth-first search over which lane to send next, letting perched bees drop
// all the pollen they can between sends (what a patient player sees).
function solvable(lanes,art,perchN){
  const H=art.length,W=art[0].length,cols=art.join('');
  const L=lanes.map(l=>l.map(b=>[b.col,b.load]));
  const seen=new Set();let nodes=0;
  function settle(filled,perch){
    for(;;){
      let low=-1;
      for(let r=H-1;r>=0&&low<0;r--)for(let c=0;c<W;c++)if(!filled[r*W+c]){low=r;break}
      if(low<0)return;
      let moved=false;
      for(let i=0;i<perch.length;i++){const b=perch[i];if(!b)continue;
        let hit=-1;
        for(const r of [low,low-1]){if(r<0)continue;for(let c=0;c<W;c++){const k=r*W+c;if(!filled[k]&&cols[k]===b[0]){hit=k;break}}if(hit>=0)break}
        if(hit<0)continue;
        filled[hit]=1;b[1]--;moved=true;if(b[1]===0)perch[i]=null;
      }
      if(!moved)return;
    }
  }
  function dfs(idx,perch,filled){
    if(++nodes>40000)return false;
    if(filled.every(x=>x))return true;
    // one color left counts as a win (auto-finish)
    const left=new Set();filled.forEach((x,k)=>{if(!x)left.add(cols[k])});
    if(left.size===1)return true;
    const key=idx.join(',')+'|'+perch.map(b=>b?b[0]+b[1]:'-').sort().join('');
    if(seen.has(key))return false;seen.add(key);
    const slot=perch.indexOf(null);if(slot<0)return false;
    // try lanes whose front bee can drop right now first
    const order=[...idx.keys()].filter(i=>idx[i]<L[i].length);
    order.sort((a,b)=>(left.has(L[b][idx[b]][0])?1:0)-(left.has(L[a][idx[a]][0])?1:0));
    for(const i of order){
      const p=perch.map(b=>b&&[...b]),f=filled.slice(),n=idx.slice();
      p[slot]=[...L[i][n[i]]];n[i]++;settle(f,p);
      if(dfs(n,p,f))return true;
    }
    return false;
  }
  return dfs(L.map(()=>0),Array(perchN).fill(null),new Uint8Array(H*W));
}
function zoneRows(){
  let low=-1;for(let r=S.H-1;r>=0;r--)if(S.cells.slice(r*S.W,(r+1)*S.W).some(x=>!x.filled)){low=r;break}
  return low<0?[]:[low,low-1].filter(r=>r>=0);
}
function target(col){
  for(const r of zoneRows())for(let c=0;c<S.W;c++){const x=S.cells[r*S.W+c];if(!x.filled&&!x.reserved&&x.col===col)return x}
  return null;
}

function renderQuilt(){
  const q=$('quilt');q.style.gridTemplateColumns=`repeat(${S.W},1fr)`;
  if(q.children.length!==S.cells.length){q.innerHTML='';S.cells.forEach(x=>{const d=document.createElement('div');d.className='cell';d.style.setProperty('--c',PAL[x.col]);x.el=d;q.appendChild(d)})}
  const z=zoneRows();
  S.cells.forEach(x=>{
    const inZ=z.includes(x.r)&&!x.filled;
    x.el.classList.toggle('filled',x.filled);
    x.el.classList.toggle('zone',inZ);
    x.el.classList.toggle('ghost',inZ);
  });
}
function beeEl(b){const d=document.createElement('div');d.className='bee';d.style.setProperty('--c',PAL[b.col]);styleBee(d,PAL[b.col]);d.textContent=b.load;return d}
function renderPerch(){
  const p=$('perch');p.innerHTML='';p.style.gridTemplateColumns=`repeat(${S.perch.length},1fr)`;
  S.perch.forEach((b,i)=>{const s=document.createElement('div');s.className='slot';
    if(b){const e=beeEl(b);e.tabIndex=0;e.setAttribute('role','button');e.setAttribute('aria-label',`Perched bee, ${b.load} pollen`);
      e.onclick=()=>shoo(i);e.onkeydown=ev=>{if(ev.key==='Enter'||ev.key===' ')shoo(i)};b.el=e;s.appendChild(e)}
    p.appendChild(s)});
}
function renderLanes(){
  const l=$('lanes');l.innerHTML='';
  let nx=-1;if(easy){let lo=1e9;S.lanes.forEach((ln,i)=>{if(ln.length&&ln[0].i<lo){lo=ln[0].i;nx=i}})}
  S.lanes.forEach((lane,i)=>{const d=document.createElement('div');d.className='lane'+(i===nx?' next':'');d.onclick=()=>send(i);
    lane.slice(0,3).forEach((b,j)=>{const e=beeEl(b);if(j===0){e.classList.add('front');e.tabIndex=0;e.setAttribute('role','button');
      e.setAttribute('aria-label',`Send bee from lane ${i+1}`);e.onkeydown=ev=>{if(ev.key==='Enter'||ev.key===' ')send(i)}}d.appendChild(e)});
    if(lane.length>3){const m=document.createElement('div');m.className='more';m.textContent=`+${lane.length-3} more`;d.appendChild(m)}
    l.appendChild(d)});
}
function renderMeta(){
  const done=S.cells.filter(x=>x.filled).length;
  $('meta').textContent=`${easy?'Easy · ':''}Level ${S.li+1} of ${LEVELS.length} · ${LEVELS[S.li].name} · ${Math.round(done/S.cells.length*100)}%`;
  $('shoo').textContent=`Shoo mode: ${S.shooMode?'on':'off'} (${S.shoos} left)`;
  $('shoo').classList.toggle('primary',S.shooMode);
}
function renderAll(){renderQuilt();renderPerch();renderLanes();renderMeta()}

function send(i){
  if(S.over)return;const slot=S.perch.indexOf(null);if(slot<0)return;
  const b=S.lanes[i].shift();if(!b)return;S.perch[slot]=b;renderPerch();renderLanes();
}
function shoo(i){
  if(S.over||!S.shooMode||S.shoos<=0)return;const b=S.perch[i];if(!b)return;
  S.perch[i]=null;let k=0;S.lanes.forEach((l,j)=>{if(l.length<S.lanes[k].length)k=j});S.lanes[k].push(b);
  S.shoos--;S.shooMode=false;renderAll();
}

function fly(fromEl,toEl,col,done){
  const a=fromEl.getBoundingClientRect(),z=toEl.getBoundingClientRect();
  const d=document.createElement('div');d.className='fly';d.style.setProperty('--c',PAL[col]);
  d.style.left=(a.left+a.width/2-5)+'px';d.style.top=(a.top+a.height/2-5)+'px';document.body.appendChild(d);
  requestAnimationFrame(()=>{d.style.transform=`translate(${z.left+z.width/2-a.left-a.width/2}px,${z.top+z.height/2-a.top-a.height/2}px)`});
  setTimeout(()=>{d.remove();done()},360);
}
// A puff of pollen dust where a drop lands: a soft colored cloud plus a few specks.
const REDUCED=matchMedia('(prefers-reduced-motion: reduce)').matches;
function mist(cellEl,hex){
  if(REDUCED)return;
  const r=cellEl.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2;
  const puff=document.createElement('div');puff.className='puff';
  puff.style.cssText=`left:${cx}px;top:${cy}px;--c:${hex};--s:${Math.max(r.width,14)*2.6}px`;
  document.body.appendChild(puff);setTimeout(()=>puff.remove(),600);
  for(let i=0;i<7;i++){
    const d=document.createElement('div');d.className='speck';
    const a=Math.random()*Math.PI*2,dist=r.width*(.8+Math.random()*1.1);
    d.style.cssText=`left:${cx}px;top:${cy}px;--c:${hex};--dx:${Math.cos(a)*dist}px;--dy:${Math.sin(a)*dist-6}px;--z:${(2+Math.random()*3).toFixed(1)}px`;
    document.body.appendChild(d);setTimeout(()=>d.remove(),700);
  }
}
let inflight=0;
function tick(){
  if(!S||S.over||paused)return;let changed=false;
  S.perch.forEach((b,i)=>{
    if(!b||b.load<=0)return;const t=target(b.col);if(!t)return;
    t.reserved=true;b.load--;changed=true;inflight++;
    if(b.el){b.el.textContent=b.load}
    const from=b.el||$('perch');
    fly(from,t.el,b.col,()=>{t.filled=true;inflight--;mist(t.el,PAL[b.col]);renderQuilt();renderMeta();check()});
    if(b.load===0)S.perch[i]=null;
  });
  if(changed)renderPerch();
  check();
}
function check(){
  if(S.over)return;
  if(S.cells.every(x=>x.filled)){S.over=true;return show(true)}
  const left=S.cells.filter(x=>!x.filled);
  if(inflight===0&&new Set(left.map(x=>x.col)).size===1)return autoFinish(left);
  if(inflight===0&&S.perch.every(b=>b)&&S.perch.every(b=>!target(b.col))&&!(S.shoos>0)){S.over=true;show(false)}
  else if(inflight===0&&S.perch.every(b=>b)&&S.perch.every(b=>!target(b.col))&&!S.shooMode){
    $('meta').textContent='Jammed! Use Shoo mode to free a perch.';
  }
}
// Only one color left: no decisions remain, so stitch the rest bottom-up and win.
function autoFinish(left){
  S.over=true;const me=S;
  $('meta').textContent='Last color! Finishing the quilt…';
  left.sort((a,b)=>b.r-a.r||a.c-b.c).forEach((x,i)=>setTimeout(()=>{
    if(S!==me)return;x.filled=true;x.el.classList.add('filled');x.el.classList.remove('zone','ghost');
    if(i===left.length-1)setTimeout(()=>{if(S===me){renderMeta();show(true)}},300);
  },i*45));
}
function show(win){
  const c=$('card');c.className='card'+(win?'':' lose');const last=S.li===LEVELS.length-1;
  c.innerHTML=win?`<h2>${LEVELS[S.li].name} stitched!</h2><p class="hint">Every square is filled.</p><button class="primary" id="nx" type="button">${last?'Play again from level 1':'Next level'}</button>`
    :`<h2>The hive jammed</h2><p class="hint">All perches are full, none of those bees can drop pollen, and you are out of shoos.</p><button class="primary" id="nx" type="button">Try again</button>`;
  $('overlay').hidden=false;
  $('nx').onclick=()=>{$('overlay').hidden=true;build(win?(last?0:S.li+1):S.li)};
}
$('restart').onclick=()=>build(S.li);
$('shoo').onclick=()=>{if(S.shoos>0&&!S.over){S.shooMode=!S.shooMode;renderMeta()}};
// ---- bee artwork: switch to bee.png when it loads ----
// Each pollen color gets its own pre-tinted copy of bee.png, made once on a canvas:
// white areas take the color, dark areas stay dark, transparent stays transparent.
const BEE_IMG={};let beeSrc=null;
function tintedBee(hex){
  if(!beeSrc)return null;
  if(!BEE_IMG[hex]){
    const c=document.createElement('canvas');c.width=beeSrc.naturalWidth;c.height=beeSrc.naturalHeight;const g=c.getContext('2d');
    g.fillStyle=hex;g.fillRect(0,0,c.width,c.height);
    g.globalCompositeOperation='multiply';g.drawImage(beeSrc,0,0);
    g.globalCompositeOperation='destination-in';g.drawImage(beeSrc,0,0);
    BEE_IMG[hex]=`url(${c.toDataURL()})`;
  }
  return BEE_IMG[hex];
}
function styleBee(el,hex){const u=tintedBee(hex);if(u)el.style.setProperty('--img',u)}
{const im=new Image();im.onload=()=>{beeSrc=im;document.documentElement.classList.add('img-bee');
  document.querySelectorAll('.bee').forEach(el=>{const hex=el.style.getPropertyValue('--c').trim();if(hex)styleBee(el,hex)})};
 im.src='bee.png';}
// ---- progress (per-browser convenience; game works without it) ----
let easy=false;
const saveKey=()=>easy?'pq-level-easy':'pq-level';
function savedLevel(){try{return Math.min(+localStorage.getItem(saveKey())||0,LEVELS.length-1)}catch(e){return 0}}
// Remember the level the player is on right now (not just the furthest), so Play resumes it.
function saveLevel(i){try{localStorage.setItem(saveKey(),i)}catch(e){}}
function hashLevel(){const m=/^#level-(\d+)$/.exec(location.hash);return m?Math.min(Math.max(+m[1]-1,0),LEVELS.length-1):null}
function fromHash(){const h=hashLevel();if(h===null)return;$('overlay').hidden=true;build(h)}
addEventListener('hashchange',()=>{if(!paused)fromHash()});

// ---- start screen ----
let paused=true;
(function mini(){
  const art=LEVELS[2].art,n=art.length,m=$('mini');m.style.gridTemplateColumns=`repeat(${n},1fr)`;
  const cells=[];for(let r=0;r<n;r++)for(let c=0;c<n;c++){const i=document.createElement('i');i.style.setProperty('--c',PAL[art[r][c]]);m.appendChild(i);cells.push([r,c,i])}
  const order=cells.sort((a,b)=>b[0]-a[0]||a[1]-b[1]);let k=0;
  const t=setInterval(()=>{if($('start').hidden){clearInterval(t);return}
    if(k<order.length)order[k++][2].classList.add('on');else if(k++>order.length+20){k=0;order.forEach(x=>x[2].classList.remove('on'))}},70);
})();
{const s=savedLevel(),h=hashLevel();
 $('progress').textContent=h!==null?`Starting at level ${h+1}`:s>0?`Continue from level ${s+1} of ${LEVELS.length}`:`${LEVELS.length} quilts to stitch`;}
function begin(){
  $('start').hidden=true;paused=false;
  const h=hashLevel();build(h!==null?h:savedLevel());
}
function progressText(){const s=savedLevel(),h=hashLevel();
 return h!==null?`Starting at level ${h+1}`:s>0?`Continue from level ${s+1} of ${LEVELS.length}`:`${LEVELS.length} quilts to stitch`}
$('playEasy').onclick=()=>{easy=true;begin()};
$('menu').onclick=()=>{paused=true;$('overlay').hidden=true;easy=false;$('progress').textContent=progressText();
  $('tut').hidden=true;$('ask').hidden=true;$('startMain').hidden=false;$('start').hidden=false};
$('play').onclick=()=>{easy=false;$('startMain').hidden=true;$('ask').hidden=false;$('tutYes').focus()};
$('tutNo').onclick=begin;
$('tutYes').onclick=()=>{$('ask').hidden=true;$('tut').hidden=false;showStep(0)};
$('tutSkip').onclick=begin;

const bee=(col,n)=>`<div class="bee" style="--c:${PAL[col]};width:38px;height:38px;font-size:14px">${n}</div>`;
const sq=(col,f)=>`<div class="sq${f?' f':''}" style="--c:${PAL[col]}"></div>`;
const STEPS=[
 {t:'Stitch the picture',d:sq('r',1)+sq('r',1)+sq('y',1)+sq('r')+sq('g'),
  x:'Every level is a hidden picture. Fill each square with the right color of pollen to finish the quilt.'},
 {t:'Send a bee',d:bee('r',3)+'<span class="arrow">→</span><div class="slot" style="width:42px"></div>',
  x:'Bees wait in four hive lanes. Tap the bee at the front of a lane to fly it up to the perch.'},
 {t:'Drop the pollen',d:bee('r',3)+'<span class="arrow">→</span>'+sq('r',1)+sq('r')+sq('r'),
  x:'A perched bee drops pollen on dashed squares of its own color. Only the bottom two unfinished rows take pollen. The number on a bee is how much it carries.'},
 {t:'Mind the perch',d:'<div class="slot" style="width:34px">'+'</div>'.repeat(1)+bee('g',5)+bee('y',2)+bee('p',4),
  x:'A bee stays on its perch until its pollen is used. If every perch is full and no bee can drop anything, the hive jams. Shoo mode sends a perched bee back to a lane.'},
 {t:'Be patient',d:'<span class="arrow">✓</span>',
  x:'Every level can be won without shoos. Let the bees finish dropping before you send more. When only one color is left, the quilt finishes itself.'},
];
let step=0;
function showStep(i){
  step=i;const s=STEPS[i];
  $('tutTitle').textContent=s.t;$('tutDemo').innerHTML=s.d;
  $('tutDemo').querySelectorAll('.bee').forEach(el=>styleBee(el,el.style.getPropertyValue('--c').trim()));$('tutText').textContent=s.x;
  $('steps').innerHTML=STEPS.map((_,j)=>`<b class="${j===i?'on':''}"></b>`).join('');
  $('tutBack').disabled=i===0;$('tutBack').style.visibility=i===0?'hidden':'visible';
  $('tutNext').textContent=i===STEPS.length-1?'Start playing':'Next';
}
$('tutBack').onclick=()=>showStep(Math.max(0,step-1));
$('tutNext').onclick=()=>step===STEPS.length-1?begin():showStep(step+1);
$('play').focus();
setInterval(tick,TICK);
