


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
// const prevSlider = document.querySelector(".prevslider")
// const nxtSlider = document.querySelector(".nxtslider")

let rolling = 0

// bgSlider.forEach(function(slider, index) {
    
//     slider.style.left = `${index * 100}%`

// })

// nxtSlider.addEventListener("click", function() {
//   console.log("hello")
//   rolling++  
//     slideCarousel()

// })

// prevSlider.addEventListener("click", function() {
//     rolling--  
//     slideCarousel()

//   })

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


//---------------all movies API-------------------
const apiKey = `api_key=24a513429e165e4f7eacd8b1c75a8e58`
const base_url = `https://api.themoviedb.org/3`
const api_url = base_url + `/discover/movie?sort_by=popularity.desc&` + apiKey



const imgUrl = `https://image.tmdb.org/t/p/w500`

const slideHeader = document.querySelector(".slider-container")

apiMovies(api_url)

function apiMovies(url) {
    
    fetch(url)
    .then(res => res.json())
    .then(data => {

       // console.log(data)
        let dataMovies = data.results
      //  console.log(dataMovies)

        showHeader(dataMovies)

        allMovies(dataMovies)

        displayGenreBtn()

        function displayGenreBtn ( ) {
    
 
            const genreReduce = genres.reduce(function(value, item) {
            
                if (!value.includes(item)) {
                     value.push(item)
                }

                return value
            
            }, [])



            let genreBtn = genreReduce.map(function(genre){


                return` <button class="category-btn" data-category=${genre.id}>${genre.name}</button>`
            
            })

            genreBtn = genreBtn.join('')
            genreContainer.innerHTML = genreBtn

            
            
            const categoryBtn = document.querySelectorAll(".category-btn")
            const btnGenre = document.querySelector(".genre-btn")



            categoryBtn.forEach(function(btn){
            
                btn.addEventListener("click", function(e){

                    const category = e.currentTarget.dataset.category

                 //   console.log(category)

                     categoryBtn.forEach(function(item) {
                          if (item !== btn) {
                            item.classList.remove("btn-click")
                          }
                          else {
                            item.classList.add("btn-click")
                          }


                     })



                    const genreUrl = api_url + `&with_genres=` + encodeURI(category)

                 //   console.log(genreUrl)

                    fetch(genreUrl)
                    .then(res => res.json())
                    .then(dataGenre =>{

                      //  console.log(dataGenre)
                        let genre = dataGenre.results

                        allMovies(genre)

                    })

                    /*---------------
                    const filterCategory = dataMovies.filter(function (genre) {
                 

                        if (genre.genre_ids === category) {
                            return genre
                        }   
            
                    })
                    -------------*/

                    
                 //   console.log(filterCategory)

            
                })
            
            })
        
        }
        
      
        
//----------------Header Slider------------------------------


function showHeader(head) {

    // let yearFilter = head.filter(function (trending) {
    //     return trending.year === 2023
    // })
    
    let displayHead = head.map(function(item) {
        
        return`<div class="bg-slider" style="background-image:url(${imgUrl + item.poster_path});">
        <div class="bg-gradient">
        <div class="banner-info">
            <h3>${item.title}</h3>
            <span class="info-desc">
                <p>
                   ${item.overview}
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


//---------X--------Header Slider-----------------X--------


    function allMovies(movie) {
    
        
    let displayMovies = movie.map(function(item) {
      
      return`<article class="movies-card" style="background-image: url(${imgUrl + item.poster_path});">
      <div class="card">
          <div class="card-title">
              <h2>${item.title}</h2>
          </div>
          <div class="card-desc">
              <p>${item.overview}
              </p>
          </div>
          
          <button class="card-btn" data-id=${item.id}>watch</button>
      </div>
    </article>`

  })

  displayMovies = displayMovies.join('')
  moivesContainer.innerHTML = displayMovies

  }
     const modalContainer = document.querySelector(".modal-container")
      const videoModal = document.querySelector(".video-modal")
    const cardBtn = document.querySelectorAll(".card-btn")

    cardBtn.forEach(function(btn) {
      btn.addEventListener("click", function(e) {
       // console.log(e.currentTarget.dataset.id)

        let modwatch = e.currentTarget.dataset.id

        const modUrl = api_url + `/find/{external_id}` + encodeURI(modwatch)

       //  console.log(modUrl)

        fetch(base_url + `/movie/`+modwatch+`/videos?`+ apiKey)
        .then(res => res.json())
        .then(datavideo => {

         //     console.log(datavideo)

            

          //---------show Modal
          modalContainer.classList.add("show-modal")

          if (datavideo.results.length > 0) {
             const embed = [];

            datavideo.results.forEach(function(video){

              let {name, key, site} = video

              if (site == 'Youtube') {

                embed.push(
                  `<iframe width="560" height="315" src="https://www.youtube.com/${key}" 
                  title="${name}" frameborder="0" allow="accelerometer; autoplay; 
                  clipboard-write; encrypted-media; 
                  gyroscope; picture-in-picture" allowfullscreen></iframe>`
                )

                embed.join('')
                videoModal.innerHTML = embed
              }

            })
   

          }
          
        })

      })

    })



    })
}

const modalContainer2 = document.querySelector(".modal-container")
const closeModal = document.querySelectorAll(".close-icon")

closeModal.forEach(function(closeBtn){
    closeBtn.addEventListener("click", function(){

        modalContainer2.classList.remove("show-modal")
        
    })

})

//------X---------all movies API-------------X------
//----X-------------My Movies Array----------------X------



//-----------------Movies function-----------------
const moivesContainer = document.querySelector(".movies-container")
const genreContainer = document.querySelector(".insidebox-btn")

window.addEventListener("DOMContentLoaded", function() {

 

    // showHeader(videoCollection)

})



//--------X---------Movies function----------X-------
