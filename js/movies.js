


//---------nav toggle--------------------

const nav = document.querySelector(".nav")
const navList = document.querySelector(".nav-list")
const navToggle = document.querySelector(".nav-toggle")
const myDate = document.querySelector("#date")

navToggle.addEventListener("click", function(){

    if (nav.classList.contains("show-nav")) {
        nav.classList.remove("show-nav")
        navToggle.style.transform = "rotate(180deg)"
    }
    else{
        nav.classList.add("show-nav")
        navToggle.style.transform = "rotate(90deg)"
    }

    
})

navList.addEventListener("click", function() {
    
    nav.classList.remove("show-nav")

})

myDate.textContent = new Date().getFullYear()

//-------------fixed nav-----------

window.addEventListener("scroll", function(){
    const navHeight = nav.getBoundingClientRect().height
    const scrollHeight = window.pageYOffset

    if (scrollHeight > navHeight) {
        nav.classList.add("fixed-nav")
    }
    else {
        nav.classList.remove("fixed-nav")
    }

})

//-----X--------fixed nav--------X---


//------------------Header Slider-------------------------------
const bgSlider = document.querySelectorAll(".bg-slider")
const prevSlider = document.querySelector(".prevslider")
const nxtSlider = document.querySelector(".nxtslider")

let count = 0

bgSlider.forEach(function(slider, index) {
    
    slider.style.left = `${index * 100}%`

})

nxtSlider.addEventListener("click", function() {

  count++  
    slideCarousel()

})

prevSlider.addEventListener("click", function() {
    count--  
    slideCarousel()

  })

  function slideCarousel() {

    bgSlider.forEach(function(sliding) {
        sliding.style.transform = `translateX(-${count * 100}%)`
    })


  }

//--------X----------Header Slider---------------------X----------

//-----------------My Movies Array----------------------

const trailerlist = [
    {
        id: 1,
        title: "doctor strange",
        img: "../images/doctorstrange.png",
        video: "../video/video.mp4",
        desc: `Doctor Strange, with the help of mystical allies both old and new, 
        traverses the mind-bending and dangerous alternate realities of the 
        Multiverse to confront a mysterious new adversary.`,
    },

    {
        id: 2,
        title: "spiderman noway home",
        img: "../images/spiderman.png",
        video: "../video/spiderman2022.mp4",
        desc: `Doctor Strange, with the help of mystical allies both old and new, 
        traverses the mind-bending and dangerous alternate realities of the 
        Multiverse to confront a mysterious new adversary.`,
    },
    
    {
        id: 3,
        title: "morbius",
        img: "../images/mobius.png",
        video: "../video/morbius.mp4",
        desc: `Doctor Strange, with the help of mystical allies both old and new, 
        traverses the mind-bending and dangerous alternate realities of the 
        Multiverse to confront a mysterious new adversary.`,
    },
    
    {
        id: 4,
        title: "uncharter",
        img: "../images/uncharrter.png",
        video: "../video/video2.mp4",
        desc: `Doctor Strange, with the help of mystical allies both old and new, 
        traverses the mind-bending and dangerous alternate realities of the 
        Multiverse to confront a mysterious new adversary.`,
    },
    
]


const genres =  [

    {
      "id": "all",
      "name": "all"
    },
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]

const videoCollection = [

    {
        id: 1,
        title: "Doctor Strange Multiverse of Madness",
        category: 'adventure',
        year: 2022,
        img: "./images/doctorstrange.png",
        video:"../video/video4.mp4",
        desc: `Doctor Strange, with the help of mystical allies both old and new, 
        traverses the mind-bending and dangerous alternate realities of the 
        Multiverse to confront a mysterious new adversary.`,
        
     },

     {
        id: 2,
        title: "spiderman no way home",
        category: 'adventure',
        year: 2022,
        img: "./images/spiderman.png",
        video:"../video/spiderman2022.mp4",
        desc: `Doctor Strange, with the help of mystical allies both old and new, 
        traverses the mind-bending and dangerous alternate realities of the 
        Multiverse to confront a mysterious new adversary.`,
        
     },

     {
        id: 3,
        title: "Morbius",
        category: 'action',
        year: 2022,
        img: "../images/mobius.png",
        video:"../video/morbius.mp4",
        desc: `Dangerously ill with a rare blood disorder, and determined to save others suffering 
        his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical 
        success soon reveals itself to be a remedy potentially worse than the disease.`,
        
     },

     {
        id: 4,
        title: "Fantastic Beasts: The Secrets of Dumbledore",
        category: 'adventure',
        year: 2022,
        img: "../images/fantastic.png",
        video:"../video/fantastic.mp4",
        desc: `In an effort to thwart Grindelwald's plans of raising pure-blood wizards to rule over 
        all non-magical beings, Albus Dumbledore enlists his former student Newt Scamander, who agrees to help, though he's unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among 
        the truest friends and family, in an increasingly divided wizarding world.`,
        
     },

     {
        id: 5,
        title: "Thor Love & thunder",
        category: 'action',
        year: 2022,
        img: "../images/thorlove.jpg",
        video:"../video/fantastic.mp4",
        desc: `In an effort to thwart Grindelwald's plans of raising pure-blood wizards to rule over 
        all non-magical beings, Albus Dumbledore enlists his former student Newt Scamander, who agrees to help, though he's unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among 
        the truest friends and family, in an increasingly divided wizarding world.`,
        
     },

     {
        id: 6,
        title: "Spider Heads",
        category: 'suspense',
        year: 2021,
        img: "../images/fantastic.png",
        video:"../video/fantastic.mp4",
        desc: `In an effort to thwart Grindelwald's plans of raising pure-blood wizards to rule over 
        all non-magical beings, Albus Dumbledore enlists his former student Newt Scamander, who agrees to help, though he's unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among 
        the truest friends and family, in an increasingly divided wizarding world.`,
        
     },

     {
        id: 7,
        title: "Matrix 5",
        category: 'sci-fi',
        year: 2021,
        img: "../images/fantastic.png",
        video:"../video/fantastic.mp4",
        desc: `In an effort to thwart Grindelwald's plans of raising pure-blood wizards to rule over 
        all non-magical beings, Albus Dumbledore enlists his former student Newt Scamander, who agrees to help, though he's unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among 
        the truest friends and family, in an increasingly divided wizarding world.`,
        
     },

     {
        id: 8,
        title: "Jurasic World",
        category: 'adventure',
        year: 2021,
        img: "../images/fantastic.png",
        video:"../video/fantastic.mp4",
        desc: `In an effort to thwart Grindelwald's plans of raising pure-blood wizards to rule over 
        all non-magical beings, Albus Dumbledore enlists his former student Newt Scamander, who agrees to help, though he's unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among 
        the truest friends and family, in an increasingly divided wizarding world.`,
        
     },

     {
        id: 9,
        title: "Unchartered",
        category: 'adventure',
        year: 2021,
        img: "../images/uncharrter.png",
        video:"../video/fantastic.mp4",
        desc: `In an effort to thwart Grindelwald's plans of raising pure-blood wizards to rule over 
        all non-magical beings, Albus Dumbledore enlists his former student Newt Scamander, who agrees to help, though he's unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among 
        the truest friends and family, in an increasingly divided wizarding world.`,
        
     },

     {
        id: 10,
        title: "Beyond Infinity",
        category: 'animation',
        year: 2022,
        img: "../images/beyond.jpg",
        video:"../video/fantastic.mp4",
        desc: `In an effort to thwart Grindelwald's plans of raising pure-blood wizards to rule over 
        all non-magical beings, Albus Dumbledore enlists his former student Newt Scamander, who agrees to help, though he's unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among 
        the truest friends and family, in an increasingly divided wizarding world.`,
        
     },

     {
        id: 11,
        title: "Black Phone",
        category: 'thriller',
        year: 2022,
        img: "../images/beyond.jpg",
        video:"../video/fantastic.mp4",
        desc: `In an effort to thwart Grindelwald's plans of raising pure-blood wizards to rule over 
        all non-magical beings, Albus Dumbledore enlists his former student Newt Scamander, who agrees to help, though he's unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among 
        the truest friends and family, in an increasingly divided wizarding world.`,
        
     },

     {
        id: 12,
        title: "rise of guru",
        category: 'animation',
        year: 2022,
        img: "../images/beyond.jpg",
        video:"../video/fantastic.mp4",
        desc: `In an effort to thwart Grindelwald's plans of raising pure-blood wizards to rule over 
        all non-magical beings, Albus Dumbledore enlists his former student Newt Scamander, who agrees to help, though he's unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among 
        the truest friends and family, in an increasingly divided wizarding world.`,
        
     },

     {
        id: 13,
        title: "ligthyear",
        category: 'animation',
        year: 2022,
        img: "../images/beyond.jpg",
        video:"../video/fantastic.mp4",
        desc: `In an effort to thwart Grindelwald's plans of raising pure-blood wizards to rule over 
        all non-magical beings, Albus Dumbledore enlists his former student Newt Scamander, who agrees to help, though he's unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among 
        the truest friends and family, in an increasingly divided wizarding world.`,
        
     },
     
     {
        id: 14,
        title: "prey",
        category: 'action',
        year: 2022,
        img: "../images/beyond.jpg",
        video:"../video/fantastic.mp4",
        desc: `In an effort to thwart Grindelwald's plans of raising pure-blood wizards to rule over 
        all non-magical beings, Albus Dumbledore enlists his former student Newt Scamander, who agrees to help, though he's unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among 
        the truest friends and family, in an increasingly divided wizarding world.`,
        
     },

     {
        id: 15,
        title: "bullettrain",
        category: 'comedy',
        year: 2022,
        img: "../images/beyond.jpg",
        video:"../video/fantastic.mp4",
        desc: `In an effort to thwart Grindelwald's plans of raising pure-blood wizards to rule over 
        all non-magical beings, Albus Dumbledore enlists his former student Newt Scamander, who agrees to help, though he's unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among 
        the truest friends and family, in an increasingly divided wizarding world.`,
        
     },

     {
        id: 16,
        title: "green lantern",
        category: 'animation',
        year: 2022,
        img: "../images/beyond.jpg",
        video:"../video/fantastic.mp4",
        desc: `In an effort to thwart Grindelwald's plans of raising pure-blood wizards to rule over 
        all non-magical beings, Albus Dumbledore enlists his former student Newt Scamander, who agrees to help, though he's unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among 
        the truest friends and family, in an increasingly divided wizarding world.`,
        
     },

     {
        id: 17,
        title: "dragonball super hero",
        category: 'animation',
        year: 2022,
        img: "../images/beyond.jpg",
        video:"../video/fantastic.mp4",
        desc: `In an effort to thwart Grindelwald's plans of raising pure-blood wizards to rule over 
        all non-magical beings, Albus Dumbledore enlists his former student Newt Scamander, who agrees to help, though he's unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among 
        the truest friends and family, in an increasingly divided wizarding world.`,
        
     },

 ];


    const slideHeader = document.querySelector(".slider-container")




//---------X--------Header Slider-----------------X--------

//-----------------Movies function-----------------
const moivesContainer = document.querySelector(".movies-container")
const genreContainer = document.querySelector(".insidebox-btn")

window.addEventListener("DOMContentLoaded", function() {

 
    showmovies(videoCollection)
    showHeader(videoCollection)
    btnInsert()
  

})

function showHeader(head) {

  let yearFilter = head.filter(function (trending) {
      return trending.year === 2022
  })
  
  let displayHead = yearFilter.map(function(item) {
      
      return`<div class="bg-slider" style="background-image:url(${item.img});">
      <div class="bg-gradient">
      <div class="banner-info">
          <h3>${item.title}</h3>
          <span class="info-desc">
              <p>
                 ${item.desc}
              </p>
          </span>

         <button class="btn-banner">watch</button>
       </div>
      </div>   
  </div>`

  })
  displayHead = displayHead.join('')
  slideHeader.innerHTML = displayHead

}


function showmovies(mov) {
  
  let displayMovie = mov.map(function(item) {
    
    return`<article class="movies-card" style="background-image: url(${item.img});">
    <div class="card">
        <div class="card-title">
            <h3>${item.title}</h2>
        </div>
        <div class="card-desc">
            <p>
            ${item.desc}
            </p>
        </div>
        
        <button class="card-btn" data-id=${item.id}>watch</button>
    </div>
</article>`

  })
  displayMovie = displayMovie.join('')
  moivesContainer.innerHTML = displayMovie

  const cardBtn = document.querySelectorAll(".card-btn")
  cardBtn.forEach(watch)

}

const modalContainer = document.querySelector(".modal-container")
let currentItem = 0;
//-----------show modal category------
function watch(btn) {
  
  btn.addEventListener("click", function (e) {
   

    const itemId = e.currentTarget.dataset.id
    currentItem = `${itemId}`

    console.log(currentItem)

    showModal(videoCollection)
    modalContainer.classList.add("show-modal")

    })

}


function showModal(mod) {

  let filterMod = mod.filter(function(list) {
    return list.id == currentItem
  })

  let modDisplay = filterMod.map(function(item) {

    return` <article class="box-modal">

        <div class="img-banner" style="background-image: url(${item.img});">

            <video controls  loop class="video-modal">
            <source src="./video/morbius.mp4" type="video/mp4" /> 
            </video>


        </div>

        <div class="close-icon">
            <i class="fa-solid fa-circle-xmark"></i>
        </div>

        <div class="modal-info">
            <div class="movies-title">
                <h3>${item.title}e</h3>
            </div>
            <div class="category-info">
                
                <span class="year">${item.year} </span>
                <span class="rated">/ Rated 16+ /</span>
                <span class="category"> ${item.category}</span>

            </div>

            <div class="movies-info">
                <p>
                    ${item.desc}
                </p>
            </div>

            <div class="social-icon">
                <div class="sad-btn">
                    <i class="fa-solid fa-face-sad-tear"></i>
                </div>

                <div class="like-btn">
                    <i class="fa-solid fa-thumbs-up"></i>
                </div>
                <div class="hearth-btn">
                    <i class="fa-solid fa-heart"></i>
                </div>

            </div>
        </div>
    </article>`
    
  })
  modDisplay = modDisplay.join('')
  modalContainer.innerHTML = modDisplay

  const closMod = document.querySelector(".close-icon")

  closMod.addEventListener("click", function() {

    modalContainer.classList.remove("show-modal")

  })

}

// -----------BTN function-------------------
function btnInsert(){

  //---- isnsert category btn dynamicall function---------
let btnReduce = videoCollection.reduce(function(value, item) {
  if (!value.includes(item.category)) {
    value.push(item.category)
  }
  return value

},['all'])

const boxBtn = document.querySelector(".insidebox-btn")

let newBtn = btnReduce.map(function(category) {
return`<button class="category-btn" data-category=${category}>${category}</button>`

})

.join('')
boxBtn.innerHTML = newBtn

//--X--- isnsert category btn dynamicall function---------XXX

//----category btn function------------
const btnCategory = document.querySelectorAll(".category-btn")

btnCategory.forEach(function (btn) {

  btn.addEventListener("click", function(e) {
  console.log(e.currentTarget.dataset.category)

  const category = e.currentTarget.dataset.category

  let filterCategory = videoCollection.filter(function(genres){
    if (genres.category == category) {
      return genres
    }

  })

  if (category == 'all') {
    showmovies(videoCollection)
  }else{
    showmovies(filterCategory)
  }

  })

})

//--X--category btn function------------XXX


}
// --X---------BTN function-------------------XXX

//--------X---------Movies function----------X-------

