

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
    
 

    if (counter > item.length) {
        
        btn.classList.add("show-btn")
    console.log(btn)

    }

    if (counter === 7) {
        btnNext.style.visibility = 'hidden'
    }



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

   
    if (counter <= 7) {
        
        btnNext.style.visibility = 'visible'
        console.log("hello")
    }

    if (counter <= 0) {
        btn.classList.remove("show-btn")
    }
   
}

/*-------X-------------main slider btn-------------------X-------*/





//--------------trailer array--------

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


const videoCollection = [

    {
        id: 1,
        title: "Doctor Strange Multiverse of Madness",
        category: ['action','adventure'],
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
        category: ['action','adventure'],
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
        category: ['action','adventure','horror'],
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
    showTrends(videoCollection)
    showModal(videoCollection)
    showAllMoives(videoCollection)
    setupLocal()

})


//-------------------titleHeader------------------------------

function displayTrailer(watch) {
    
    let trailer = watch.map(function(item){

        item = watch[currentItem]

        return`<article class="title-header">
            <div class="video-background">
                <video controls muted autoplay loop class="video-container">
                            <source src=${item.video} type="video/mp4" /> 
                        </video>
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

//----------Trending mOvies Function
const trendContainer = document.querySelector(".trending-container")

function showTrends(trends) {

    const trendsFilter = trends.filter(function (list) {
        
        return list.year == 2022
    })
    
    let displayTrend = trendsFilter.map(function(item) {
        
        return` <article class="trending-box" style="background-image: url(${item.img});">
        <div class="card-title">
           <h2>${item.title}</h2>
        </div>

        <div class="more-info">
            <div class="button-icon" data-id=${item.id}>
                <i class="fa-regular fa-circle-play"></i>
                <div class="name-icon">
                    <span>info</span>
                </div>
            </div>

            <div class="add-icon" data-id=${item.id}>
                <i class="fa-solid fa-circle-plus"></i>
                <div class="add-list">
                    <span>add to list</span>
                </div>

            </div>

        </div>
    </article>`

    })
    displayTrend = displayTrend.join('')
    trendContainer.innerHTML = displayTrend


    // ---- slider button click ---
const btnInfo = document.querySelectorAll(".button-icon")
    
btnInfo.forEach(clickTrend)

    // ---add to lsit Btn--
    const addList = document.querySelectorAll(".add-icon")

    addList.forEach(listBtn)

}

//----------click trend function callback-

function clickTrend(btn) {
    
    btn.addEventListener("click", function(e) {
       // console.log(e.currentTarget.dataset.id)

        const idCategory = e.currentTarget.dataset.id

        currentItem = `${idCategory}`
       // console.log(currentItem)
        showModal(videoCollection)
        modalContainer.classList.add("show-modal")

    })

}

//---X-------Trending mOvies Function ----XXX

//-------All Movies funtion   
const moviesContainer = document.querySelector(".trending-container2")

function showAllMoives(all){

    let displayMovies = all.map(function(item) {

        return` <article class="trending-box" style="background-image: url(${item.img});">
        <div class="card-title">
           <h2>${item.title}</h2>
        </div>

        <div class="more-info">
            <div class="button-icon" data-id=${item.id}>
                <i class="fa-regular fa-circle-play"></i>
                <div class="name-icon">
                    <span>info</span>
                </div>
            </div>

            <div class="add-icon" data-id=${item.id}>
                <i class="fa-solid fa-circle-plus"></i>
                <div class="add-list">
                    <span>add to list</span>
                </div>

            </div>

        </div>
    </article>`
        
    })
    displayMovies = displayMovies.join('')
    moviesContainer.innerHTML = displayMovies

    const btnInfo = document.querySelectorAll(".button-icon")

    btnInfo.forEach(clickTrend)

        // ---add to lsit Btn--
    const addList = document.querySelectorAll(".add-icon")

    addList.forEach(listBtn)

}

//---X----All Movies funtion ----XXX    

// ----- show modal-----------------
const modalContainer  = document.querySelector(".modal-container")

function showModal(moda) {
    
    const modFilter = moda.filter(function (elem) {
        return elem.id == currentItem
    })

    let displayModal = modFilter.map(function (item) {
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
                <h2>${item.title}e</h2>
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
    displayModal = displayModal.join('')
    modalContainer.innerHTML = displayModal  
    
    const closeMod = document.querySelector(".close-icon")

    closeMod.addEventListener( "click", function(){
        modalContainer.classList.remove("show-modal")

    })

}

// -X---- show modal----------------XXX-


//----------Addlst function --btn--

function listBtn(mylist) {
    
    mylist.addEventListener("click", function(e) {
        console.log(e.currentTarget.dataset.id)

        const idList = e.currentTarget.dataset.id

        currentItem = `${idList}`

        const listFilter = videoCollection.filter(function(list){
            return list.id == currentItem
    
        })
    
        let value = listFilter
        const id = new Date().getTime().toString()
        const elem = document.createElement("article")
        let attb = document.createAttribute("data-id")
        attb.value = id
        elem.setAttributeNode(attb)
        elem.classList.add("soon-box")
        let elements = elem.querySelector(".soonbox")
        elements = value.map(function(item) {
            
            return`  <article class="soon-box">
            <div class="soon-inside" style="background-image: url(${item.img});">
              <div class="card-title">
                 <h2>${item.title}</h2>
              </div>
    
              <div class="soon-info ">
                  <div class="button-icon soon-icon" data-id=${item.id}>
                      <i class="fa-regular fa-circle-play"></i>
                      <div class="name-icon">
                          <span>info</span>
                      </div>
                  </div>
    
                  <div class="add-icon soon-icon" data-id=${item.id}>
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
        listContainer.innerHTML += elements

        const btnInfo = document.querySelectorAll(".button-icon")

        btnInfo.forEach(clickTrend)
    
        toLocalList(id, value)


    })
}

const listContainer = document.querySelector(".addlist-container2")

function creatlist(id, value) {

    const elem = document.createElement("article")
        let attb = document.createAttribute("data-id")
        attb.value = id
        elem.setAttributeNode(attb)
        elem.classList.add("soon-box")
        let elements = elem.querySelector(".soonbox")
        elements = value.map(function(item) {
            
            return`  <article class="soon-box">
            <div class="soon-inside" style="background-image: url(${item.img});">
              <div class="card-title">
                 <h2>${item.title}</h2>
              </div>
    
              <div class="soon-info ">
                  <div class="button-icon soon-icon" data-id=${item.id}>
                      <i class="fa-regular fa-circle-play"></i>
                      <div class="name-icon">
                          <span>info</span>
                      </div>
                  </div>
    
                  <div class="add-icon soon-icon" data-id=${item.id}>
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
        listContainer.innerHTML += elements

        const btnInfo = document.querySelectorAll(".button-icon")

        btnInfo.forEach(clickTrend)

}

//--------to LOCAL Storage Funtion -----

function toLocalList(id, value) {
    const listMovies = {id, value}
    let item = getLocalStorage()

    item.push(listMovies)
    localStorage.setItem('list', JSON.stringify(item))
    
}

function getLocalStorage() {
    return localStorage.getItem('list')
    ? JSON.parse(localStorage.getItem('list')) : []

}

function setupLocal() {
    let items = getLocalStorage()

    if (items.length > 0) {
        
        items.forEach(function(item) {
            item = creatlist(item.id, item.value)
        })
    }

}

//--X------to LOCAL Storage Funtion -----XXX

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

  soonInfo.textContent = `Thor Love & Thurder showing on mytv on ${weekday} ${month}, ${date} ${year}
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