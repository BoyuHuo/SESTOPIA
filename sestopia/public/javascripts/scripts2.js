var secondarySlider=new Splide("#secondary-slider",{focus:"center","ßßrewind":!0,height:"auto",perMove:1,speed:"300",pagination:!1,trimSpace:!1,arrows:!0,classes:{arrow:"splide__arrow testme",prev:"splide__arrow--prev custom-prev",next:"splide__arrow--next custom-next"}}),primarySlider=new Splide("#primary-slider",{perPage:4,perMove:1,height:"30vh",focus:"center",trimSpace:!1,pagination:!1,arrows:!1});function getSkills(l){request("/api/skills/search?name="+l,"GET",null).then(l=>{updateData(l[0])},l=>{alert(res.MSG)})}function updateData(l){console.log(l),$("#studentName").append(l.student_name),$("#knowledgeArea").append(l.knowledge_area),$("#theSkill").append(l.name),testArray=[0,1,1,0];for(var e=0;e<testArray.length;e++)0==testArray[e]&&$("#responsibility"+e).css("opacity","0.33");[{skillPosition:"",name:l.name,skill:l.name},{skillPosition:"2 skill out of 12",name:"Classification of Skill",skill:l.classification},{skillPosition:"3 skill out of 12",name:"Prerequisites for Skill",skill:l.prerequisites},{skillPosition:"4 skill out of 12",name:"Software Engineering Knowledge Area(s)",skill:l.knowledge_area},{skillPosition:"5 skill out of 12",name:"Rationale for Skill",skill:l.rationale},{skillPosition:"6 skill out of 12",name:"Roles for Skill",skill:l.roles_for_skill},{skillPosition:"7 skill out of 12",name:"Related Activities",skill:l.related_activities},{skillPosition:"8 skill out of 12",name:"Real-World Example/Scenario",skill:l.real_world_scenario},{skillPosition:"9 skill out of 12",name:"Role of Academia or Industry in Cultivating the Skill",skill:l.role_of_academia},{skillPosition:"10 skill out of 12",name:"Tools",skill:l.tools},{skillPosition:"11 skill out of 12",name:"Skill Self-Assessment",skill:l.self_assessment},{skillPosition:"12 skill out of 12",name:"References",skill:l.reference}].forEach(l=>{l.name==l.skill?$("#secondSliderContent").append('<li class="splide__slide skillItem" ><h1 class="skillName">'+l.name+"</h1></li>"):$("#secondSliderContent").append('<li class="splide__slide skillItem" ><h1 class="skillName">'+l.name+'</h1><h2 class="skillPosition" >'+l.skillPosition+'</h2><p class="skillContent">'+l.skill+"</p></li>")}),secondarySlider.mount(),primarySlider.sync(secondarySlider).mount()}function getQueryVariable(l){for(var e=window.location.search.substring(1).split("&"),i=0;i<e.length;i++){var s=e[i].split("=");if(s[0]==l)return s[1]}return!1}getSkills(getQueryVariable("name"));

// //Slider initiation

// var secondarySlider = new Splide('#secondary-slider', {
//     focus: 'center',
//     ßßrewind: true,
//     height: 'auto',
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

// var primarySlider = new Splide('#primary-slider', {
//     // type       : 'fade',
//     perPage: 4,
//     perMove: 1,
//     height: '30vh',
//     focus: 'center',
//     trimSpace: false,
//     pagination: false,
//     arrows: false,
// });

// getSkills(getQueryVariable('name'));

// //Get skills by search content
// function getSkills(keyworkds) {
//     request('/api/skills/search?name=' + keyworkds, 'GET', null).then(res => {
//         updateData(res[0]);
//     }, err => {
//         alert(res.MSG);
//     });
// }

// //Update Content
// function updateData(data) {

//     console.log(data);

//     $('#studentName').append(data.student_name);
//     $('#knowledgeArea').append(data.knowledge_area);
//     $('#theSkill').append(data.name);
//     testArray = [0, 1, 1, 0];
//     for (var i = 0; i<testArray.length;i++) {
//         if (testArray[i] == 0) {
//             $('#responsibility'+ i).css('opacity', '0.33');

//         }
//     }
    

//     var skillData = [
//         { skillPosition: '', name: data.name, skill: data.name },
//         { skillPosition: '2 skill out of 12', name: 'Classification of Skill', skill: data.classification },
//         { skillPosition: '3 skill out of 12', name: 'Prerequisites for Skill', skill: data.prerequisites },
//         { skillPosition: '4 skill out of 12', name: 'Software Engineering Knowledge Area(s)', skill: data.knowledge_area },
//         { skillPosition: '5 skill out of 12', name: 'Rationale for Skill', skill: data.rationale },
//         { skillPosition: '6 skill out of 12', name: 'Roles for Skill', skill: data.roles_for_skill },
//         { skillPosition: '7 skill out of 12', name: 'Related Activities', skill: data.related_activities },
//         { skillPosition: '8 skill out of 12', name: 'Real-World Example/Scenario', skill: data.real_world_scenario },
//         { skillPosition: '9 skill out of 12', name: 'Role of Academia or Industry in Cultivating the Skill', skill: data.role_of_academia },
//         { skillPosition: '10 skill out of 12', name: 'Tools', skill: data.tools },
//         { skillPosition: '11 skill out of 12', name: 'Skill Self-Assessment', skill: data.self_assessment },
//         { skillPosition: '12 skill out of 12', name: 'References', skill: data.reference },
//     ];

//     skillData.forEach(item => {

//         if (item.name==item.skill) {
//             $('#secondSliderContent').append('<li class="splide__slide skillItem" >' + '<h1 class="skillName">' + item.name + '</h1></li>');


//         } else {

//             $('#secondSliderContent').append('<li class="splide__slide skillItem" >' + '<h1 class="skillName">' + item.name + '</h1>' + '<h2 class="skillPosition" >' + item.skillPosition + '</h2>' + '<p class="skillContent">' + item.skill + '</p>' + '</li>');

//         }


//     });

//     secondarySlider.mount();

//     primarySlider.sync(secondarySlider).mount();
// }

// function getQueryVariable(variable) {
//     var query = window.location.search.substring(1);
//     var vars = query.split('&');

//     for (var i = 0; i < vars.length; i++) {
//         var pair = vars[i].split('=');

//         if (pair[0] == variable) {
//  return pair[1]; 
// }
//     }
    
// return (false);
// }