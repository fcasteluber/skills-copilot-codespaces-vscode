function skillsMember() {
    var member = document.getElementById('member').value;
    var memberSkills = document.getElementById('memberSkills');
    memberSkills.innerHTML = "";
    for (var i = 0; i < members.length; i++) {
        if (members[i].name == member) {
            for (var j = 0; j < members[i].skills.length; j++) {
                memberSkills.innerHTML += "<li>" + members[i].skills[j] + "</li>";
            }
        }
    }
}