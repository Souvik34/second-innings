import React from 'react'
import pic1 from "./images/domains/1.jpg"
import pic2 from "./images/domains/2.jpg"
import pic3 from "./images/domains/3.jpg"
import pic4 from "./images/domains/4.jpg"
import pic5 from "./images/domains/5.jpg"
import pic6 from "./images/domains/6.jpg"


function Gallery() {
  return (
   <>
   <div class="wrapper">
		<div class="content">

			<header class="hero-section">
				<img data-speed=".6" class="hero" src={pic1} height="700px" width="250px" alt='home'/>
				<div class="container">
					<div data-speed=".75" class="main-header">
						<h1 class="main-title">Photo Gallery</h1>
					</div>
				</div>
			</header>
		
			<div class="portfolio">
				<div class="container">
					<main class="gallery">
	
						<div data-speed=".9" class="gallery__left">
		
							<img class="gallery__item" src={pic1} alt="Alt"/>
							<img class="gallery__item" src={pic2} alt="Alt"/>
		
							<div class="text-block gallery__item">
								<h2 class="text-block__h">Creative floating scroll with amazing parallax effect</h2>
								<p class="text-block__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor amount scrolling.</p>
							</div>
		
							<img class="gallery__item" src={pic6} alt="Alt"/>
		
						</div>

						<div data-speed="1.1" class="gallery__right">
		
							<div class="text-block gallery__item">
								<h2 class="text-block__h">Creative floating scroll with amazing parallax effect</h2>
								<p class="text-block__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor amount scrolling.</p>
							</div>
		
							<img class="gallery__item" src={pic4} alt="Alt"/>
							<img class="gallery__item" src={pic5} alt="Alt"/>
							<img class="gallery__item" src={pic3} alt="Alt"/>
		
						</div>

					</main>
				</div>
			</div>

		</div>
	</div>
   </>
  )
}

export default Gallery
