
getAllMembers();

//Get all members data
function getAllMembers() {
    request('/api/skills', 'GET', null).then(res => {
        updateData(res);
    }, err => {
        alert(res.MSG);
    });
}