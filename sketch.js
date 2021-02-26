var database;
var link;
var GetLink
function setup(){
   database = firebase.database();
   GetLink = new getLink();
}
function draw(){
   GetLink.display();
   console.log(link);
}
