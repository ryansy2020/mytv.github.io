


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


const videoCollection = [

    {
        id: 1,
        title: "doctor Strange Multiverse of Madness",
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
        title: "morbius",
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
        title: "fantastic Beasts: The Secrets of Dumbledore",
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
        title: "thor Love & thunder",
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
        title: "spider Heads",
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
        title: "matrix 5",
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
        title: "jurasic World",
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
        title: "unchartered",
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
        title: "beyond Infinity",
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
        title: "black Phone",
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


//----X-------------My Movies Array----------------X------

const searchList = document.querySelector(".movies-container")

const search = document.getElementById("search-item")


search.addEventListener("input", function(e){
    e.preventDefault()
    
    const value = e.target.value.toLowerCase()

    const searchFilter = videoCollection.filter(function(list){

     return list.title.includes(value) || list.category.includes(value)

    

    })

    let displayList = searchFilter.map(function (item) {
        
        return`<article class="movies-card" style="background-image: url(${item.img});">
        <div class="card">
            <div class="card-title">
                <h2>${item.title}</h2>
            </div>
            <div class="card-desc">
                <p>${item.desc}
                </p>
            </div>
            
            <button class="card-btn">watch</button>
        </div>
    </article>`

    })
    displayList = displayList.join('')
    searchList.innerHTML = displayList


})







