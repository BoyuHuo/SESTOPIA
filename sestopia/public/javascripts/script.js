var json = [
    {"name": "Dhruv"},
    {"name": "Uchechukwu"},
    {"name": "Micheal"},
    {"name": "Baiyu"},
    {"name": "Micheal"},
    {"name": "Shahryar"},
    {"name": "Ali"},
    {"name": "Mahsa"}
];

    //const obj = JSON.parse(json);
    
    

    // $(function() {

    //         $(json).each(function(i, item){
    //         $("#skillsN").append("<h1 class=\"test33\" >"+ item.name + "</h1>");


    //     });

    //     $("#skillsN").append("<h1 class=\"test33\"> </h1>");
    // });



    
    // var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 100}});


    // new Splide( '#splide', {
    //     direction: 'ttb',
    //     height   : '10rem',
    // } ).mount();




    // var x = document.getElementsByClassName("members");





    // var defaultN = 0;

    // $(window).on('wheel', function(e) {
      
    //     var delta = e.originalEvent.deltaY;
        
    //     if (delta > 0){
    //         console.log("down");
    //         defaultN = defaultN - 360;
    //         console.log(defaultN);
    //         if(defaultN > -3960){
    //         console.log(" this: " + defaultN + "ia bigger than -3960");
    //         document.getElementById("skillsN").style.top =  defaultN + 'px' ;
    //         }
    //         // window.scrollBy(0, 500);
    //         // demo();
    //     } 
    //     else {
            
    //         defaultN = defaultN + 360;
    //         document.getElementById("skillsN").style.top =  defaultN + 'px' ;
    //         console.log("up");
    //         // window.scrollBy(0, -500);

    //     } 
      

    //   });

// var t = true;


// async function demo() {


//     await sleep(11000);

// }
// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }



window.addEventListener('DOMContentLoaded', (event) => {
    new Splide( '.splide' , {
        focus : 'center',
        perPage: 3,
	    ßßrewind : true,
        direction: 'ttb',
        height   : '100vh',
        perMove: 1,
        speed: "300",
        pagination: false,
        trimSpace: false,
        arrows: true,
        classes: {
            arrow : 'splide__arrow testme',
            prev  : 'splide__arrow--prev custom-prev',
		    next  : 'splide__arrow--next custom-next',
        },


    }).mount();

});
