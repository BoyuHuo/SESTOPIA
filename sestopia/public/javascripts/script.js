var json = [
    { "name": "Dhruv" },
    { "name": "Uchechukwu" },
    { "name": "Micheal" },
    { "name": "Baiyu" },
    { "name": "Micheal" },
    { "name": "Shahryar" },
    { "name": "Ali" },
    { "name": "Mahsa" }
];

window.addEventListener('DOMContentLoaded', (event) => {
    new Splide('.splide', {
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


    }).mount();

});


// Need load common.js first
function getAllMembers() {
    request('/api/skills', 'GET', null).then(res => {
        console.log(res)
    }, err => {
        alert(res.MSG);
    })
}

getAllMembers();