var splide = new Splide('.splide', {
    focus: 'center',
    perPage: 3,
    ßßrewind: true,
    direction: 'ttb',
    height: '100vh',
    perMove: 1,
    speed: "300",
    pagination: false,
    trimSpace: false,
    arrows: true,
    classes: {
        arrow: 'splide__arrow testme',
        prev: 'splide__arrow--prev custom-prev',
        next: 'splide__arrow--next custom-next',
    },
});

getAllMembers();

//Get all members data
function getAllMembers() {
    request('/api/skills', 'GET', null).then(res => {
        console.log(res);
        updateData(res);
    }, err => {
        alert(res.MSG);
    })
}

//Get skills by search content
function getSkills(keyworkds) {
    request('/api/skills/search?name=' + keyworkds, 'GET', null).then(res => {
        updateData(res);
    }, err => {
        alert(res.MSG);
    })
}

//Serach function
function searchSkills() {
    getSkills($("#skill-search").val());
}

//Update list data, remount the component
function updateData(data) {
    $("#membersList").empty();
    data.forEach(item =>
        $("#membersList").append("<li class=\"splide__slide memberInfo\" >" + "<h1 class=\"a\" >" + item.student_name+ "</h1>" + "<h2 class=\"b\" >" + item.name+ "</h2>" + "<h3 class=\"c\" >" + item.knowledge_area+ "</h3>" + "</li>")
        // item.knowledge_area
    );
    
    splide.mount();
}




