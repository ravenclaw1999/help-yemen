function changeImage(){
	var img_list = ["https://geopoliticalfutures.com/wp-content/uploads/2017/12/yemen-current-divisions.jpg", "https://44s2n02i19u61od84f3rzjqx-wpengine.netdna-ssl.com/wp-content/uploads/2017/05/Yemen-800x500_c.jpg", "https://cdn.theatlantic.com/assets/media/img/mt/2018/09/RTX5N2VV/lead_720_405.jpg?mod=1538415068", "https://ichef.bbci.co.uk/news/660/cpsprodpb/10A22/production/_102003186_mediaitem102003185.jpg", "https://i0.wp.com/codcourier.org/wp-content/uploads/2018/12/26194491158_c05a1288f7_o.jpg?fit=1501%2C613&ssl=1", "https://static01.nyt.com/images/2018/05/04/opinion/04yemenWeb/04yemenWeb-articleLarge.jpg?quality=75&auto=webp&disable=upscale","http://inthesetimes.com/images/made/images/yemen_bombing_850_567.jpg", "https://www.gannett-cdn.com/presto/2018/08/16/USAT/3260fb87-5805-4807-8409-558c325d2d39-AP_Yemen.JPG?width=534&height=401&fit=bounds&auto=webp", "https://www.carnegiecouncil.org/publications/articles_papers_reports/yemen-an-economic-strategy-to-ease-humanitarian-crisis/_res/id=Picture/Yemeni_Civil_War.jpg", "https://cdn-images-1.medium.com/max/1200/1*lDiP8EvXg_M65_ce0hZ5cQ.jpeg", "https://cbsnews1.cbsistatic.com/hub/i/2018/11/21/64507e45-e5a1-47c9-9004-e976073d1787/181120-yemen-civil-war-children-malnutrition-04.png"];
	var img_curr = document.getElementById("images").src;
	for (var i=0; i < img_list.length; i=i+1){
		var img = img_list[i];
		if (img == img_curr){
			if (i == img_list.length - 1){
				document.getElementById("images").src = img_list[0];
			}
			else{
				document.getElementById("images").src = img_list[i + 1];
			}
		}
	}
		setTimeout(changeImage, 2000);
}













/*var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
*/
