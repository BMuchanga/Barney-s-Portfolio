var forwardButton= document.getElementById('btn1');
var image= document.getElementsByTagName('img')[0];
var imageNumber= 1;

 
 forwardButton.addEventListener('click', function() {

   if(imageNumber < 4){
   imageNumber ++;
   image.setAttribute('src', 'images/image' + imageNumber + '.png');
   }
   else if(imageNumber == 4){
    imageNumber = 1;
    image.setAttribute('src', 'images/image' + imageNumber + '.png');
   }
});