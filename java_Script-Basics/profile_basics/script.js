personal = {
    firstname: 'Umanga',
    lastname: 'Bhattarai',
    age: 21,
    sex: 'male',
    branch: 'Computer Science Engineering',
    projects: [
        { projectname: 'js exercise', description: 'basic program using js' },
        { projectname: 'html', description: 'basic div knowledge' },
        { projectname: 'css', description: 'styling using css (headache)' },
        { projectname: 'github', description: 'push your code to github using git commands in linux' }
    ],
    interests: [
        'football',
        'music',
        'not doing css',
        'travel'
    ]
};
var main_wrapper = document.createElement('div');
main_wrapper.style.height = "900px";
main_wrapper.style.width = "1100px";
main_wrapper.style.backgroundColor = "gray";
main_wrapper.style.marginLeft = "450px";


var body = document.getElementsByTagName('body')[0];
body.appendChild(main_wrapper);

var nameDiv = document.createElement('div');
nameDiv.style.fontSize = "40px";
nameDiv.style.textAlign = "center";
nameDiv.style.color = "ivory";
nameDiv.style.padding = "10px";
nameDiv.innerHTML = personal.firstname + ' ' + personal.lastname;
main_wrapper.appendChild(nameDiv);

var ageDiv = document.createElement('div');
ageDiv.style.color = "ivory";
ageDiv.style.fontSize = "20px";
ageDiv.style.textAlign = "center";
ageDiv.style.padding = "5px";
ageDiv.innerHTML = "Age: " + personal.age;
main_wrapper.appendChild(ageDiv);

var sexDiv = document.createElement('div');
sexDiv.style.color = "ivory";
sexDiv.style.fontSize = "20px";
sexDiv.style.textAlign = "center";
sexDiv.style.padding = "5px";
sexDiv.innerHTML = personal.sex;
main_wrapper.appendChild(sexDiv);

var branchDiv = document.createElement('div');
branchDiv.style.color = "ivory";
branchDiv.style.fontSize = "20px";
branchDiv.style.textAlign = "center";
branchDiv.style.padding = "5px";
branchDiv.innerHTML = personal.branch;
main_wrapper.appendChild(branchDiv);

var projectDiv = document.createElement('div');
projectDiv.style.color = "ivory";
projectDiv.style.fontSize = "30px";
projectDiv.style.textAlign = "center";
projectDiv.style.paddingTop = "5px";
projectDiv.innerHTML = "PROJECT";
main_wrapper.appendChild(projectDiv);

var projList = document.createElement('ul');
main_wrapper.appendChild(projList);


for (var i = 0; i < personal.projects.length; i++) {
    var listItems = document.createElement('li');
    listItems.style.color = "ivory";
    listItems.style.fontSize = "20px";
    listItems.style.paddingBottom = "5px";
    listItems.style.marginLeft = "450px";
    listItems.innerHTML = personal.projects[i].projectname + ' : ' + personal.projects[i].description;
    projList.appendChild(listItems);

}

var interestDiv = document.createElement('div');
interestDiv.style.color = "ivory";
interestDiv.style.fontSize = "25px";
interestDiv.style.textAlign = "center";
interestDiv.style.paddingTop = "5px";
interestDiv.innerHTML = "INTEREST :";
main_wrapper.appendChild(interestDiv);

var interestList = document.createElement('ul');
main_wrapper.appendChild(interestList);

for (var j = 0; j < personal.interests.length; j++) {
    var interestItems = document.createElement('li');
    interestItems.style.color = "ivory";
    interestItems.style.fontSize = "20px";
    interestItems.style.paddingBottom = "5px";
    interestItems.style.marginLeft = "450px";
    interestItems.innerHTML = personal.interests[j];
    interestList.appendChild(interestItems);

}