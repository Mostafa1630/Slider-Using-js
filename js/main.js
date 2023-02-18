// Get Slider Images
let images = document.querySelectorAll('.slider-containers img'),
sliderImages = [...images];
// console.log(sliders);

//Get Silder Count
let silderCount = sliderImages.length;

//Set Current Slide
let currentSlide = 1;

//Slide Number Element
let slideNumberElement = document.getElementById('slider-number');

// Previous and next button
let previousBtn = document.getElementById('preve');
let nextBtn = document.getElementById('next');

// Handel Click Next And Previous
nextBtn.onclick = next;
previousBtn.onclick = preve;

// Create Main Ul Element
var penagtionElement = document.createElement('ul');
penagtionElement.setAttribute('id' , 'penagtion-ul');

// Create List Item
for (var i = 1; i <= silderCount; i++) {

  var penagtionItem = document.createElement('li');
  penagtionItem.setAttribute('data-index' , i);
  penagtionItem.appendChild(document.createTextNode(i));

  penagtionElement.appendChild(penagtionItem);

}
document.getElementById('indectors').appendChild(penagtionElement);



// Get The New Element

var penagtionCreatedUl = document.getElementById('penagtion-ul');

var penagtionBullets = [...document.querySelectorAll('#penagtion-ul li')];

//Loop For All Bullets Item

for (let i = 0; i < penagtionBullets.length; i++) {
  
  penagtionBullets[i].onclick = () => {
    currentSlide=i+1;
    theChecker();
  }
}





theChecker();



//function Slider next
function next(){
  if(!nextBtn.classList.contains('disabled')){
    currentSlide++;
    theChecker();
  }
  
}
//function Slider preve
function preve(){
  if(!previousBtn.classList.contains('disabled')){
    currentSlide--;
    theChecker();
  }
}

// Create Function Checker
function theChecker(){
  slideNumberElement.textContent = `Slide # ${currentSlide} of ${silderCount}`;

  removeAllActive();

  // Set Active Class ON Current Slide
  sliderImages[currentSlide - 1].classList.add('active');

  // set Active Class ON penagtionItem
  penagtionCreatedUl.children[currentSlide - 1].classList.add('active');
  // dataset.currentSlide.classList.add('active');


  // If currentSlide Equle 1
  if(currentSlide == 1){
    // Add Class Disbled on Previous
    previousBtn.classList.add('disabled');
  }else{
    // remove Class Disbled on Previous
    previousBtn.classList.remove('disabled');
  }


  // If currentSlide Equle last
  if(currentSlide == silderCount){
    // Add Class Disbled on Previous
    nextBtn.classList.add('disabled');
  }else{
    // remove Class Disbled on next
    nextBtn.classList.remove('disabled');
  }


}


// Remove All Activ From All Images
function removeAllActive(){
  sliderImages.forEach((img) => {
    img.classList.remove('active');
  });


  // Remove All Active From Bullets
  penagtionBullets.forEach((bullet) => {
    bullet.classList.remove('active');
  });
}















