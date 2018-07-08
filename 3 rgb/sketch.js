var x,y,r,g,b,w=100,inc=0.0015,start=0,h=1,butt,can;

function setup() {
 can=createCanvas(1336,768);
 background(0,40,40);
 y=map(noise(start),0,1,0,height);
 x=width+50;
 butt=createButton('download');
 butt.mousePressed(download);
}

function draw() {
if(w>0){
  if(h==1){
  r=random(255);
  g=0;
  b=0;
  stroke(r,g,b);
  strokeWeight(w);
  point(x,y);
  start+=inc;
  y=map(noise(start),0,1,0,height);
  x--;
  w-=0.069;}
  if(h==2){
  r=0;
  g=random(255);
  b=0;
  stroke(r,g,b);
  strokeWeight(w);
  point(x,y);
  start+=inc;
  y=map(noise(start),0,1,0,height);
  x--;
  w-=0.069;
  }
  if(h==3){
  r=0;
  g=0;
  b=random(255);
  stroke(r,g,b);
  strokeWeight(w);
  point(x,y);
  start+=inc;
  y=map(noise(start),0,1,0,height);
  x--;
  w-=0.069;
  }
}
else{
  x=width+50;
  w=100;
  h++;
}}

function download(){
  save(can);
}