var secondarySlider = new Splide('#secondary-slider', {
    focus: 'center',
    ßßrewind: true,
    height: 'auto',
    perMove: 1,
    speed: '300',
    pagination: false,
    trimSpace: false,
    arrows: true,
    classes: {
        arrow: 'splide__arrow testme',
        prev: 'splide__arrow--prev custom-prev',
        next: 'splide__arrow--next custom-next',
    },
});

var primarySlider = new Splide('#primary-slider', {
    // type       : 'fade',
    perPage: 4,
    perMove: 1,
    height: '30vh',
    focus: 'center',
    trimSpace: false,
    pagination: false,
    arrows: false,
});

getSkills(getQueryVariable('name'));

//Get skills by search content
function getSkills(keyworkds) {
    request('/api/skills/search?name=' + keyworkds, 'GET', null).then(res => {
        updateData(res[0]);
    }, err => {
        alert(res.MSG);
    });
}

//Update Content
function updateData(data) {

    console.log(data);

    $('#studentName').append(data.student_name);
    $('#knowledgeArea').append(data.knowledge_area);
    $('#theSkill').append(data.name);
    testArray = [0, 1, 1, 0];
    for (var i = 0; i < testArray.length; i++) {
        if (testArray[i] == 0) {
            $('#responsibility' + i).css('opacity', '0.33');

        }
    }


    var skillData = [
        { skillPosition: '1 skill out of 12', name: data.name, skill: data.name, introduction: data.introduction },
        { skillPosition: '2 skill out of 12', name: 'Classification of Skill', skill: data.classification },
        { skillPosition: '3 skill out of 12', name: 'Prerequisites for Skill', skill: data.prerequisites },
        { skillPosition: '4 skill out of 12', name: 'Software Engineering Knowledge Area(s)', skill: data.knowledge_area },
        { skillPosition: '5 skill out of 12', name: 'Rationale for Skill', skill: data.rationale },
        { skillPosition: '6 skill out of 12', name: 'Roles for Skill', skill: data.roles_for_skill },
        { skillPosition: '7 skill out of 12', name: 'Related Activities', skill: data.related_activities },
        { skillPosition: '8 skill out of 12', name: 'Real-World Example/Scenario', skill: data.real_world_scenario },
        { skillPosition: '9 skill out of 12', name: 'Role of Academia or Industry in Cultivating the Skill', skill: data.role_of_academia },
        { skillPosition: '10 skill out of 12', name: 'Tools', skill: data.tools },
        { skillPosition: '11 skill out of 12', name: 'Skill Self-Assessment', skill: data.self_assessment },
        { skillPosition: '12 skill out of 12', name: 'References', skill: data.reference },
    ];

    skillData.forEach(item => {

        if (item.name == item.skill) {
            $('#secondSliderContent').append('<li class="splide__slide skillItem" >' + '<h1 class="skillName">' + item.name + '</h1> ' + '<h2 class="skillPosition" >' + item.skillPosition + '</h2>' + '<div class="skillContent">' + item.introduction + '</div>' + '</li>');


        } else {

            $('#secondSliderContent').append('<li class="splide__slide skillItem" >' + '<h1 class="skillName">' + item.name + '</h1>' + '<h2 class="skillPosition" >' + item.skillPosition + '</h2>' + '<div class="skillContent">' + item.skill + '</div>' + '</li>');

        }


    });

    secondarySlider.mount();

    primarySlider.sync(secondarySlider).mount();
}

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');

        if (pair[0] == variable) {
            return pair[1];
        }
    }

    return (false);
}