//graphic cards 
var rtx3090,rtx3080ti,rtx3080,rtx3070ti,rtx3070,rtx3060ti,rtx3060,rtx2080ti,rtx2080,rtx2070,rtx2060;
//processer amd
var ryzen9,ryzen7,ryzen5;
//processer intel
var intelcorei9,intelcorei7,intelcorei5;
//ram and storage
var gb8,gb16,gb32,gb64,tb1ssd,tb1hdd;

function preload(){
  ryzen5=loadImage("5 5600x.png")
  intelcorei5=loadImage("i5 12600k.png")
  ryzen7=loadImage("ryzen 7 800x.png")
  intelcorei7=loadImage("i7 12700k.png")
  ryzen9=loadImage("ryzen 9 5950x.png")
intelcorei9=loadImage("i9 12900k.png")
rtx3090=loadImage("rtx 3090.png")
rtx3080ti=loadImage("3080tt.png")
rtx3080=loadImage("rtx 3080.png")
rtx3070ti=loadImage("rtx 3070ti.png")
rtx3070=loadImage("rtx 3070.png")
rtx3060ti=loadImage("rtx 3060ti.png")
rtx3060=loadImage("rtx 3060.png")
rtx2080ti=loadImage("rtx 2080ti.png")
rtx2080=loadImage("rtx 2080.png")
rtx2070=loadImage("rtx2070.png")
rtx2060=loadImage("rtx 2060.png")
gb8=loadImage("ram.png")
gb16=loadImage("ram.png")
gb32=loadImage("ram.png")
gb64=loadImage("ram.png")
tb1hdd=loadImage("1hdd.png")
tb1ssd=loadImage("ssd.png")
}
function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  ryzen5s = createSprite(100,100,100,40)
ryzen5s.addImage(ryzen5)
ryzen5s.scale=0.1
intelcorei5s= createSprite(120,100,100,40)
intelcorei5s.addImage(intelcorei5)
intelcorei5s.scale=0.1
ryzen7s= createSprite(120,100,100,40)
.addImage(intelcorei5)
.scale=0.1
intelcorei7s= createSprite(120,100,100,40)
.addImage(intelcorei5)
.scale=0.1
ryzen9s= createSprite(120,100,100,40)
.addImage(intelcorei5)
.scale=0.1
intelcorei9s= createSprite(120,100,100,40)
.addImage(intelcorei5)
.scale=0.1
rtx3090s= createSprite(120,100,100,40)
.addImage(intelcorei5)
.scale=0.1
rtx3080tis
rtx3080s
rtx3070tis
rtx3070s
rtx3060tis
rtx3060s
rtx2080tis
rtx2080s
rtx2070s
rtx2060s
gb8s
gb16s
gb32s
gb64s
tb1hdds
tb1ssds
}
function draw(){

 drawSprites() 
}