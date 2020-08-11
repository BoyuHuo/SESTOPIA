var splide=new Splide(".splide",{focus:"center",perPage:3,"ßßrewind":!0,direction:"ttb",height:"100vh",perMove:1,speed:"300",pagination:!1,trimSpace:!1,arrows:!0,classes:{arrow:"splide__arrow testme",prev:"splide__arrow--prev custom-prev",next:"splide__arrow--next custom-next"}});function getAllMembers(){request("/api/skills","GET",null).then(e=>{console.log(e),updateData(e)},e=>{alert(e.MSG)})}function getSkills(e){request("/api/skills/search?name="+e,"GET",null).then(e=>{updateData(e)},e=>{alert(res.MSG)})}function searchSkills(){let e=$("#skill-search").val();if(0==/^[a-zA-Z- ]*$/.test(e))return alert("No special characters allowed"),!1;getSkills($("#skill-search").val())}function updateData(e){$("#membersList").empty(),e.forEach(e=>$("#membersList").append('<li class="splide__slide memberInfo" ><div><h1 class="a" >'+e.knowledge_area+'</h1><h2 class="b" >'+e.student_name+'</h2><h3 class="c" >'+e.name+"</h3></div></li>")),splide.mount()}getAllMembers();


// //Slider initiation

// var splide = new Splide('.splide', {
//     focus: 'center',
//     perPage: 3,
//     ßßrewind: true,
//     direction: 'ttb',
//     height: '100vh',
//     perMove: 1,
//     speed: '300',
//     pagination: false,
//     trimSpace: false,
//     arrows: true,
//     classes: {
//         arrow: 'splide__arrow testme',
//         prev: 'splide__arrow--prev custom-prev',
//         next: 'splide__arrow--next custom-next',
//     },
// });

// getAllMembers();

// //Get all members data
// function getAllMembers() {
//     request('/api/skills', 'GET', null).then(res => {
//         console.log(res);
//         updateData(res);
//     }, err => {
//         alert(err.MSG);
//     });
// }

// //Get skills by search content
// function getSkills(keyworkds) {
//     request('/api/skills/search?name=' + keyworkds, 'GET', null).then(res => {
//         updateData(res);
//     }, err => {
//         alert(res.MSG);
//     });
// }


// //Search function
// function searchSkills() {
//     let token = $('#skill-search').val();
    
//     if (/^[a-zA-Z- ]*$/.test(token) == false) {
//         alert('No special characters allowed');
        
// return false;
//     }
//     getSkills($('#skill-search').val());


// }

// //Update list data, remount the component
// function updateData(data) {
//     $('#membersList').empty();
//     data.forEach(item =>
//         $('#membersList').append('<li class="splide__slide memberInfo" >' + '<div><h1 class="a" >' + item.knowledge_area+ '</h1>' + '<h2 class="b" >' + item.student_name+ '</h2>' + '<h3 class="c" >' + item.name+ '</h3></div>' + '</li>')
//     );
    
//     splide.mount();
// }


