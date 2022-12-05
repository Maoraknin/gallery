'use strict'

var gProjects



createProjs()

function createProjs() {
    var projects = []
    projects.push(createProj('chess', 'Chess', 'First work with Matrix', 'moving chess pieces on the board', "https://maoraknin.github.io/chess/", 1669298930000, ['Matrix', 'Chess']))
    projects.push(createProj('guess-me', 'GuessMe', 'First work JQuery and Bootstrap', 'a self lerning bot who guesses a person you thought about and learn from his mistakes', "https://maoraknin.github.io/GuessMe/", 1670162930000, ['Bootstrap', 'JQuery', 'LocalStorage', 'GuessMe']))
    projects.push(createProj('touch-nums', 'Touch-Nums', 'First free work with Vanilla JS and CSS', 'the user need to press all the squares at the best time', "https://maoraknin.github.io/touchnums/", 1668694130000, ['CSS', 'JS', 'LocalStorage', 'Touch-Nums']))

    gProjects = projects
}

function getProjectById(projectId){
    return gProjects.find(project => project.id === projectId)
}

function createProj(id, name, title, desc, url, publishedAt, labels) {
    return {
        id,
        name,
        title,
        desc,
        url,
        publishedAt,
        labels,
    }
}

function getProjects() {
    return gProjects
}

function getDate(date) {
    date = new Date(date)
    console.log(date);
    var dd = String(date.getDate()).padStart(2, '0')
    var mm = String(date.getMonth() + 1).padStart(2, '0')
    var yyyy = date.getFullYear()

    return dd + '/' + mm + '/' + yyyy

}





