

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
    navToggle.style.transform = "rotate(180deg)"
})

myDate.textContent = new Date().getFullYear()

//---X------nav toggle----------------X----

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

//-----X--------fixed nav---------X--

/*------------------Header Slider-------------------------------
const prevHead = document.querySelector(".prevslide")
const nxtHead = document.querySelector(".nxtslide")
const bgBanner = document.querySelector(".bg-banner")

const slideCount = 0
const time = 100

nxtHead .addEventListener("click", function(e) {
    
  //  console.log(e.currentTarget.parentElement.parentElement.children[1])
    let slideElem = e.currentTarget.parentElement.parentElement.children[2]
    let slideItem = slideElem.getElementsByClassName("bg-banner")
    slideElem.append(slideItem[0])


})

prevHead .addEventListener("click", function(e) {
    
   // console.log(e.currentTarget.parentElement.parentElement.children[1])
    let slideElem = e.currentTarget.parentElement.parentElement.children[2]
    let slideItem = slideElem.getElementsByClassName("bg-banner")
    slideElem.prepend(slideItem[slideItem.length-1])

    
})


--------X----------Header Slider---------------------X----------*/

/*--------------------main slider btn--------------------------*/

const nextSlide = document.querySelectorAll(".next-slide")
const prevSlide = document.querySelectorAll(".prev-slide")


let counter = 0


function next(t){
    let elem = t.parentElement.parentElement.children[0]
    let item = elem.getElementsByClassName("trending-box")
  //  elem.append(item[0])

  let btn = t.parentElement.children[0]
    let btnNext = t.parentElement.children[1]

    
  counter++
     
    let container = t.parentElement.parentElement
    const roll = container.querySelector(".slider")

   // const containerRight = document.querySelector(".trending-container")

   // console.log(t.parentElement.parentElement)
      

   roll.scrollBy(300, 0)
    
 

    // if (counter > item.length) {
        
    //     btn.classList.add("show-btn")
    // console.log(btn)

    // }

    // if (counter === item.length) {
    //     btnNext.style.visibility = 'hidden'
    // }



}


function prev(t) {
    let elem = t.parentElement.parentElement.children[0]
    let item = elem.getElementsByClassName("trending-box")
  //  elem.prepend(item[item.length-1])

  let btn = t.parentElement.children[0]
  let btnNext = t.parentElement.children[1]

  counter--
    
    let container = t.parentElement.parentElement
    const rollLeft = container.querySelector(".slider", ".trending-container2")

   // const containerLeft = document.querySelector(".trending-container")
    rollLeft.scrollBy(-300, 0)

   
    if (counter >= 7) {
        
        btnNext.style.visibility = 'visible'
        console.log("hello")
    }

    if (counter >= rollLeft.length) {
        btn.classList.remove("show-btn")
    }
   
}

/*-------X-------------main slider btn-------------------X-------*/

//-----------Movies API----------------------
const apiKey = `api_key=24a513429e165e4f7eacd8b1c75a8e58`
const base_url = `https://api.themoviedb.org/3`
const api_url = base_url + `/discover/movie?sort_by=popularity.desc&` + apiKey

const imgUrl = `https://image.tmdb.org/t/p/w500`




apiMovies(api_url)

function apiMovies (url) {
    
    fetch(url)
    .then(res => res.json())
    .then(data => {

       const dataApi = data.results

  console.log(dataApi)
        displayMovies(dataApi)
        dispaplyTrending(dataApi)


//-------------------Trending Slider-------------------------------
    
function dispaplyTrending(trend) {

    let showFilter = trend.filter(function(listcount) {
        return listcount.vote_count >= 2000
    })

    let watchItem = showFilter.map(function(list){

        return `<article class="trending-box" style="background-image: url(${imgUrl + list.poster_path});">
        <div class="card-title">
           <h2>${list.title}</h2>
        </div>

        <div class="more-info">
            <div class="button-icon" data-id=${list.id}>
                <i class="fa-regular fa-circle-play"></i>
                <div class="name-icon">
                    <span>info</span>
                </div>
            </div>

            <div class="add-icon2" data-id=${list.id}>
                <i class="fa-solid fa-circle-plus"></i>
                <div class="add-list">
                    <span>add to list</span>
                </div>

            </div>

        </div>
    </article>`
    })
    watchItem = watchItem.join("")
    trendContainer.innerHTML = watchItem


}  

//-------------X------Trending Slider-----------------X--------------

//-----------------------All Movies------------------------------------

function displayMovies(trend) {
  
    const movieContainer2 = document.querySelector(".trending-container2")

let watchItem = trend.map(function(list){

    return `<article class="trending-box" style="background-image: url(${imgUrl + list.poster_path});">
    <div class="card-title">
       <h2>${list.title}</h2>
    </div>

    <div class="more-info">
        <div class="button-icon" data-id=${list.id}>
            <i class="fa-regular fa-circle-play"></i>
            <div class="name-icon">
                <span>info</span>
            </div>
        </div>

        <div class="add-icon2" data-id=${list.id}>
            <i class="fa-solid fa-circle-plus addIcon"></i>
            <div class="add-list">
                <span>add to list</span>
            </div>

        </div>

    </div>
</article>`
})
watchItem = watchItem.join("")
movieContainer2.innerHTML = watchItem


//------------------------add to my list button event-------------
const addList = document.querySelectorAll(".add-icon2")

  // addList.forEach(addThisList)
//-----X-------------------add to my list button event--------X-----



}

//-----X------------------All Movies---------------------------X---------

    //---------------modal mvoies2 button open---------------

    const buttonIcon = document.querySelectorAll(".button-icon")


    buttonIcon.forEach(function(info) {
        
        info.addEventListener("click", function(e) {
                
             //  console.log(e.currentTarget.dataset.id)
   
            let myInfo = e.currentTarget.dataset.id
               
            countItem = `${myInfo}`
   
            //---------------------Modal display function----------
            let filterId = dataApi.filter(function(item) {
        
                return item.id == countItem
        
            })
        
            showModal(filterId)
        
            const closeModal = document.querySelectorAll(".close-icon")
        
            closeModal.forEach(function(closeBtn){
                closeBtn.addEventListener("click", function(){
        
                    modalContainer.classList.remove("show-modal")
                    
                })
        
            })
        

        //---------------------Modal display function----------


               modalContainer.classList.add("show-modal")
       //---X------------modal mvoies button open-----------X---- 
   
           })

    })

    //------X---------modal mvoies2 button open----------X----

    //------------- add to list to local storage--------------
    const addListContainer = document.querySelector(".addlist-container2")
    const addList = document.querySelectorAll(".add-icon2")
    const movieContainer2 = document.querySelector(".trending-container2")
    let currentItem = 0

    addList.forEach(function (addBtn) {
        
        addBtn.addEventListener("click", function(e) {
        //    console.log(e.currentTarget.dataset.id)
            const listItem = e.currentTarget.dataset.id

            currentItem = `${listItem}`

            let listFilter = dataApi.filter(function(itemId) {
                
                return itemId.id == currentItem

            })

            let value = listFilter
            const id = new Date().getTime().toString()
            const element = document.createElement("article")
            let attrb = document.createAttribute("data-id")
            attrb.value = id
            element.classList.add("soon-box")
            let elements = element.querySelector(".soon-box")
            elements = value.map(function(add) {
                
                return`  <article class="soon-box">
                <div class="soon-inside" style="background-image: url(${imgUrl + add.poster_path});">
                  <div class="card-title">
                     <h2>${add.title}</h2>
                  </div>
      
                  <div class="soon-info ">
                      <div class="button-icon soon-icon" data-id=${add.id}>
                          <i class="fa-regular fa-circle-play"></i>
                          <div class="name-icon">
                              <span>info</span>
                          </div>
                      </div>
      
                      <div class="add-icon soon-icon" data-id=${add.id}>
                          <i class="fa-solid fa-circle-plus"></i>
                          <div class="remove-list">
                              <span>add to list</span>
                          </div>
      
                      </div>
      
                  </div>
                 </div>
              </article>`

            })
            elements = elements.join('')
            addListContainer.innerHTML += elements
            
            ToLocalList(id,value)


        
        })

  

    })
   
    //----X--------- add to list to local storage-------X-------
   

    })

window.addEventListener("DOMContentLoaded", function() {
    
    setupLocal()

} )

    //-----------------ADD TO LOCAL STORAGE------------------------
function ToLocalList(id, value) {

    const listMovies = {id, value}
    let item = getLocalStorage()

    item.push(listMovies)
    localStorage.setItem('list', JSON.stringify(item))

}

function getLocalStorage() {
   return localStorage.getItem('list')
   ? JSON.parse(localStorage.getItem('list')) : []

}
//------x-----------ADD TO LOCAL STORAGE-----------------x-------
//----------------Set up Item on local storage-------------------
function setupLocal() {
    let items = getLocalStorage()

    /*------------------
    const unique = items.filter(function(value, index){
        return items.indexOf(value) === index

    })
    -------*/

    /*----------------------
    const unique = []
    let len = items.length

    for(let i = 0; i < len; i++) {
        if (unique.indexOf(items[i]) === -1) {
            unique.push(items[i])
        }
    }
    ---------------*/


    if (items.length > 0) {
        items.forEach(function(item) {
            item = createList(item.id, item.value)

        })
    }

}
//-------X---------Set up Item on local storage------------X-------

//-------------View to local Storage----------------------------
    function createList(id, value) {
        
    

        const element = document.createElement("article")
        let attrb = document.createAttribute("data-id")
        attrb.value = id
        element.classList.add("soon-box")
        let elements = element.querySelector(".soon-box")
        elements = value.map(function(add) {
            
            return`  <article class="soon-box">
            <div class="soon-inside" style="background-image: url(${imgUrl + add.poster_path});">
              <div class="card-title">
                 <h2>${add.title}</h2>
              </div>
  
              <div class="soon-info ">
                      <div class="button-icon soon-icon" data-id=${add.id}>
                          <i class="fa-regular fa-circle-play"></i>
                          <div class="name-icon">
                              <span>info</span>
                          </div>
                      </div>
  
                  <div class="add-icon soon-icon" data-id=${add.id}>
                      <i class="fa-solid fa-circle-plus"></i>
                      <div class="remove-list">
                          <span>add to list</span>
                      </div>
  
                  </div>
  
              </div>
             </div>
          </article>`

        })

        elements = elements.join('')
        addListContainer.innerHTML += elements

        const addIcon = element.querySelectorAll(".addlist-icon")

         addIcon.forEach(function(playBtn) {
                   
                playBtn.addEventListener("click", function(e) {
                    
                    console.log(e.currentTarget.dataset.id)
                    let listPlay = e.currentTarget.dataset.e

                    displayModal(videoCollection)

                    modalContainer.classList.add("show-modal")

                })

         })


    }

//-----X--------View to local Storage------------------X----------

 //-----X-------------------add to my list button event--------X-----
//----------------------show modal function-----------------
function showModal(mod) {
    let modalInfo = mod.map(function(item) {

    
        return` <article class="box-modal">
        <div class="img-banner" style="background-image: url(${imgUrl + item.poster_path});">

            <div class="watch-button">
                <h1><i class="fa-solid fa-circle-play"></i></h1>
            </div>

        </div>

        <div class="close-icon">
            <i class="fa-solid fa-circle-xmark"></i>
        </div>

        <div class="modal-info">
            <div class="movies-title">
                <h2>${item.title}</h2>
            </div>
            <div class="category-info">
                
                <span class="year">Year 2022</span>
                <span class="rated">Rated 16+</span>
                <span class="category">${item.genre_ids}</span>

            </div>

            <div class="movies-info">
                <p>
                    ${item.overview}
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
    modalInfo = modalInfo.join("")
    modalContainer.innerHTML = modalInfo

    console.log(modalContainer)
    
}

//-------X---------------show modal function---------X--------


}

//---X-----------Movies API-----------X-----------------


//--------------trailer array--------

const trailerlist = [
    {
        id: 1,
        title: "black adam",
        img: "../images/blackadam.png",
        video: "https://www.youtube-nocookie.com/embed/X0tOpBuYasI",
        desc: `Nearly 5,000 years after he was bestowed with the almighty powers of the
        Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, 
        ready to unleash his unique form of justice on the modern world..`,
    },

    {
        id: 2,
        title: "Black Panther: Wakanda Forever",
        img: "../images/wakandaforever.png",
        video:"https://www.youtube.com/embed/YN6N3jIu4ds",
        desc: `Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers 
        in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, 
        the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.`,
    },
    
    {
        id: 3,
        title: "Avatar: The Way of Water",
        img: "../images/avatar2.png",
        video:"https://www.youtube.com/embed/6_-6g9pKK9g",
        desc: `Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their 
            kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, 
            and the tragedies they endure`,
    },
    
    {
        id: 4,
        title: "Puss in Boots: The Last Wish",
        img: "../images/pushboots.png",
        video: "https://www.youtube.com/embed/RqrXhwS33yc",
        desc: `Puss in Boots discovers that his passion for adventure has taken its toll: 
        He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to 
        find the mythical Last Wish and restore his nine lives.`,
    },
    
]


const videoCollection = [

    {
        id: 1,
        title: "Doctor Strange Multiverse of Madness",
        category: ['action','adventure'],
        year: 2022,
        img: "https://youtu.be/aWzlQ2N6qqg?t=70",
        video:"../video/video4.mp4",
        desc: `Doctor Strange, with the help of mystical allies both old and new, 
        traverses the mind-bending and dangerous alternate realities of the 
        Multiverse to confront a mysterious new adversary.`,
        
     },

     {
        id: 2,
        title: "spiderman no way home",
        category: ['action','adventure'],
        year: 2022,
        img: "./images/spiderman.png",
        video:"https://youtu.be/JfVOs4VSpmA",
        desc: `Doctor Strange, with the help of mystical allies both old and new, 
        traverses the mind-bending and dangerous alternate realities of the 
        Multiverse to confront a mysterious new adversary.`,
        
     },

     {
        id: 3,
        title: "Morbius",
        category: ['action','adventure','horror'],
        year: 2022,
        img: "../images/mobius.png",
        video:"https://youtu.be/oZ6iiRrz1SY?t=11",
        desc: `Dangerously ill with a rare blood disorder, and determined to save others suffering 
        his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical 
        success soon reveals itself to be a remedy potentially worse than the disease.`,
        
     },

     {
        id: 4,
        title: "Fantastic Beasts: The Secrets of Dumbledore",
        category: ['action','adventure'],
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
        category: ['action','fantasy'],
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
        category: ['suspense'],
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
        category: ['action','sci-fi'],
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
        category: ['action','adventure'],
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
        category: ['action','adventure'],
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
        category: ['action','adventure'],
        year: 2022,
        img: "../images/beyond.jpg",
        video:"../video/fantastic.mp4",
        desc: `In an effort to thwart Grindelwald's plans of raising pure-blood wizards to rule over 
        all non-magical beings, Albus Dumbledore enlists his former student Newt Scamander, who agrees to help, though he's unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among 
        the truest friends and family, in an increasingly divided wizarding world.`,
        
     },

     




 ];

const titleContainer = document.querySelector(".title-container")
const trailerMovies = document.querySelector(".trailer-list")

let currentItem = 0

window.addEventListener("DOMContentLoaded", function() {
    
displayTrailer(trailerlist)
// showHeader(videoCollection)

})

//-------------------Trending Slider-------------------------------

    // const slideHead = document.querySelector(".slider-container")

    // function showHeader(head) {

    //     let yearFilter = head.filter(function (trending) {
    //         return trending.year === 2022
    //     })
        
    //     let displayHeader = yearFilter.map(function(item) {
            
    //         return`<div class="bg-banner" style="background-image:url(${item.img});">
    //         <div class="bg-gradient">
    //         <div class="banner-info">
    //             <h3>${item.title}</h3>
    //             <span class="info-desc">
    //                 <p>
    //                    ${item.desc}
    //                 </p>
    //             </span>

    //            <button class="btn-banner">watch</button>
    //          </div>
    //         </div>   
    //     </div>`

    //     })
    //     displayHeader = displayHeader.join('')
    //     slideHead.innerHTML = displayHeader

    // }


//-------------X------Trending Slider-----------------X--------------

//-----------------------All Movies------------------------------------
const movieContainer2 = document.querySelector(".trending-container2")

function displayMovies(trend) {


    let watchItem = trend.map(function(list){

        return `<article class="trending-box" style="background-image: url(${imgUrl + list.poster_path});">
        <div class="card-title">
           <h2>${list.title}</h2>
        </div>

        <div class="more-info">
            <div class="button-icon2" data-id=${list.id}>
                <i class="fa-regular fa-circle-play"></i>
                <div class="name-icon">
                    <span>info</span>
                </div>
            </div>

            <div class="add-icon2" data-id=${list.id}>
                <i class="fa-solid fa-circle-plus addIcon"></i>
                <div class="add-list">
                    <span>add to list</span>
                </div>

            </div>

        </div>
    </article>`
    })
    watchItem = watchItem.join("")
    movieContainer2.innerHTML = watchItem

    const buttonIcon2 = document.querySelectorAll(".button-icon2")
    //------------------------add to my list button event-------------
    const addList = document.querySelectorAll(".add-icon2")
    
    addList.forEach(addToMyList)
    //-----X-------------------add to my list button event--------X-----


    //---------------modal mvoies2 button open---------------

    buttonIcon2.forEach(function(info) {
        
        info.addEventListener("click", function(e) {
            
         //   console.log(e.currentTarget.dataset.id)

         let myInfo = e.currentTarget.dataset.id
            
         countItem = `${myInfo}`-1

            displayModal(videoCollection)
            modalContainer.classList.add("show-modal")


    //---X------------modal mvoies button open-----------X---- 

        })
    })

}  


//------------------------add to my list button event-------------
    const addListContainer = document.querySelector(".addlist-container2")
    const addList = document.querySelectorAll(".add-icon2")
    const addRemove = document.querySelector(".addIcon")


//------------------------Modal Movies ----------------------------
const modalContainer = document.querySelector(".modal-container")
const modalContainer2 = document.querySelector(".modal-container2")
const listModal = document.querySelector(".listmodal-container")

//------------------------Modal Api----------------

function displayModal(modal) {

    let filterId = modal.filter(function(item) {
        
        return item.id == countItem

    })


    let modalInfo = modal.map(function(item) {

        item = modal[countItem]
        
        return` <article class="box-modal">
        <div class="img-banner" style="background-image: url(${item.img});">

            <div class="watch-button">
                <h1><i class="fa-solid fa-circle-play"></i></h1>
            </div>

        </div>

        <div class="close-icon">
            <i class="fa-solid fa-circle-xmark"></i>
        </div>

        <div class="modal-info">
            <div class="movies-title">
                <h2>${item.title}</h2>
            </div>
            <div class="category-info">
                
                <span class="year">Year 2022</span>
                <span class="rated">Rated 16+</span>
                <span class="category">${item.category}</span>

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
    modalInfo = modalInfo.join("")
    modalContainer.innerHTML = modalInfo

    const closeModal = document.querySelectorAll(".close-icon")

    closeModal.forEach(function(closeBtn){
        closeBtn.addEventListener("click", function(){

            modalContainer.classList.remove("show-modal")
            
        })

    })

}


//---------X---------------Modal Api---------X-------


function moviesModal(modal) {
    let modalMovies = modal.map(function(item) {

        item = modal[countItem]
        
        return` <article class="box-modal2">
        <div class="img-banner" style="background-image: url(${item.img});">

            <div class="watch-button">
                <h1><i class="fa-solid fa-circle-play"></i></h1>
            </div>

        </div>

        <div class="close-icon">
            <i class="fa-solid fa-circle-xmark"></i>
        </div>

        <div class="modal-info">
            <div class="movies-title">
                <h2>${item.title}</h2>
            </div>
            <div class="category-info">
                
                <span class="year">Year 2022</span>
                <span class="rated">Rated 16+</span>
                <span class="category">${item.category}</span>

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
    modalMovies = modalMovies.join("")
    modalContainer2.innerHTML = modalMovies

    const closeModal = document.querySelectorAll(".close-icon")

    closeModal.forEach(function(closeBtn){
        closeBtn.addEventListener("click", function(){

            modalContainer2.classList.remove("show-modal")
        })

    })

}

function addModal(modal) {
    let modalMovies = modal.map(function(item) {

        item = modal[countItem]
        
        return` <article class="box-modal">
        <div class="img-banner" style="background-image: url(${item.img});">

            <div class="watch-button">
                <h1><i class="fa-solid fa-circle-play"></i></h1>
            </div>

        </div>

        <div class="close-icon">
            <i class="fa-solid fa-circle-xmark"></i>
        </div>

        <div class="modal-info">
            <div class="movies-title">
                <h2>${item.title}</h2>
            </div>
            <div class="category-info">
                
                <span class="year">Year 2022</span>
                <span class="rated">Rated 16+</span>
                <span class="category">${item.category}</span>

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
    modalMovies = modalMovies.join("")
    listModal.innerHTML = modalMovies

    const closeModal = document.querySelectorAll(".close-icon")

    closeModal.forEach(function(closeBtn){
        closeBtn.addEventListener("click", function(){

            modalContainer.classList.remove("show-modal")
            
        })

    })

}



//-------------------titleHeader------------------------------

function displayTrailer(watch) {
    
    let trailer = watch.map(function(item){

        item = watch[currentItem]

        return`<article class="title-header">
                        <div class="video-background">
                        
                        <iframe width="560" height="315" src="${item.video}" 
                        title="YouTube video player" frameborder="0" allow="accelerometer; 
                        autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    
                        </div>

                        <div class="title-box">

                            <div class="box-title">
                            <h1>${item.title}</h1>
                            
                                <div class="title-info">
                                    <p>${item.desc}</p>
                                </div>
                                <div class="title-btn">
                                    <button class="title-watch">watch</button>
                                </div>

                            </div>

                            <div class="trailer-container">
                                <ul class="trailer-list">
                                        
                                
                                </ul>
                    
                            </div>

                        </div>

                </article>`

    })
    trailer = trailer.join("")
    titleContainer.innerHTML = trailer

    const listTrailer = document.querySelector(".trailer-list")

    
    let itemTrailer = trailerlist.map(function(item){

        return`<li class="trailer-link">
        <img src=${item.img} alt="" class="trailer-img" data-id=${item.id} >
        </li> `

    })
    
    itemTrailer = itemTrailer.join("")
    listTrailer.innerHTML = itemTrailer

    const trailerLink = document.querySelectorAll(".trailer-link")

    trailerLink.forEach(function(btn) {
        
        btn.addEventListener("click", function (e) {
           // console.log(e.target.dataset.id)

            const category = e.target.dataset.id

            currentItem = `${category}`-1

            displayTrailer(trailerlist)
        })
    })


    


}

//-----X--------------titleHeader--------------------------X----

const trendContainer = document.querySelector(".trending-container")


function dispaplyTrending(trend) {

    let showFilter = trend.filter(function(listcount) {
        return listcount.vote_count >= 2500
    })

    let watchItem = showFilter.map(function(list){

        return `<article class="trending-box" style="background-image: url(${imgUrl + list.poster_path});">
        <div class="card-title">
           <h2>${list.title}</h2>
        </div>

        <div class="more-info">
            <div class="button-icon" data-id=${list.id}>
                <i class="fa-regular fa-circle-play"></i>
                <div class="name-icon">
                    <span>info</span>
                </div>
            </div>

            <div class="add-icon" data-id=${list.id}>
                <i class="fa-solid fa-circle-plus"></i>
                <div class="add-list">
                    <span>add to list</span>
                </div>

            </div>

        </div>
    </article>`
    })

    watchItem = watchItem.join("")
    trendContainer.innerHTML = watchItem

    const buttonIcon = document.querySelectorAll(".button-icon")

    //---------------modal mvoies button open---------------

    buttonIcon.forEach(function(info) {
        
        info.addEventListener("click", function(e) {
            
         //   console.log(e.currentTarget.dataset.id)

         let myInfo = e.currentTarget.dataset.id
            
         countItem = `${myInfo}`

            displayModal(videoCollection)
            modalContainer.classList.add("show-modal")

            modalContainer2.classList.remove("show-modal")
    //---X------------modal mvoies button open-----------X---- 

        })
    })



}  


//----------------Countdown Timer-----------------------------

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const soonInfo = document.querySelector(".soon-desc h3")
  const deadline = document.querySelector(".deadline")
  const deadlineFormat =document.querySelectorAll(".deadlin-format h4")

  let tempDate = new Date()
  let tempYear = tempDate.getFullYear()
  let tempMonth = tempDate.getMonth()
  let tempDay = tempDate.getDate()

  const futureDate = new Date(tempYear, tempMonth, tempDay, +  25, 8, 30, 0)
  //const futureDate = new Date(2022, 8, 21, 13, 30, 60)

  const year = futureDate.getFullYear()
  const hour = futureDate.getHours()
  const min = futureDate.getMinutes()
  const month = months[futureDate.getMonth()]
  const date = futureDate.getDate()
  const weekday = weekdays[futureDate.getDay()]
  console.log(weekday)

  soonInfo.textContent = `Ant-Man and the Wasp: Quantumania showing on mytv on ${weekday} ${month}, ${date} ${year}
   at ${hour}:${min}am`

  const futureTime = futureDate.getTime()
  //console.log(futureTime)

  function getRemainingTime(){
    const currentTime = new Date().getTime()
   // console.log(currentTime)
    const t = futureTime - currentTime
   // console.log(t)

    //---------------miliseconds convertion--------------
     // 1s = 1000ms
     // 1min = 60s
     // 1hour = 60min
     // 1day = 21hrs

    //------------mili second convertion value---
    let oneDay = 24 * 60 * 60 *1000
    let oneHour = 60 * 60 * 1000
    let oneMin = 60 * 1000

    let days = t / oneDay
        days=Math.floor(days)

    let hours = Math.floor((t % oneDay) / oneHour)
    let mins = Math.floor((t % oneHour) / oneMin)
    let sec = Math.floor((t % oneMin) / 1000)
   // console.log(sec)

    //--------------creatae an array---
    const values = [days, hours, mins, sec]

    deadlineFormat.forEach(function (item, index) {
        
        item.innerHTML = values[index]
    })

    if (t < 0) {
        
        clearInterval(countDown)
        deadline.innerHTML = `<h1 class="expire"> Now showing on mytv </h1>`

    }

  }
  
  let countDown = setInterval(getRemainingTime, 1000)

  getRemainingTime()