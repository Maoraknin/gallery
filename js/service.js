'use strict'

var gProjects



createProjs()

function createProjs() {
    var projects = []
    projects.push(createProj('chess', 'Chess', 'First work with Matrix', 'moving chess pieces on the board', "https://maoraknin.github.io/chess/", 1669298930000, ['Matrix', 'Chess']))
    projects.push(createProj('guess-me', 'GuessMe', 'First work JQuery and Bootstrap', 'a self lerning bot who guesses a person you thought about and learn from his mistakes', "https://maoraknin.github.io/GuessMe/", 1670162930000, ['Bootstrap', 'JQuery', 'LocalStorage']))
    projects.push(createProj('touch-nums', 'Touch-Nums', 'First free work with Vanilla JS and CSS', 'the user need to press all the squares at the best time', "https://maoraknin.github.io/touchnums/", 1668694130000, ['CSS', 'JS', 'LocalStorage']))
    projects.push(createProj('mine-sweeper', 'Mine-Sweeper', 'First independent project in the course', 'reveale all the empty cells without stepping on mines', "https://maoraknin.github.io/Mine-Sweeper/", 1669212530000, ['CSS', 'JS', 'LocalStorage']))
    projects.push(createProj('book-shop', 'Book-Shop', 'web librery', 'an app that act like a wep librery', "https://maoraknin.github.io/book-shop/", 1669212530000, ['CSS', 'JS', 'LocalStorage']))
    // projects.push(createProj('book-shop', 'Book-Shop', 'web librery', 'eat all the food and run away from the ghosts!', "https://maoraknin.github.io/Pac-man/", 1669212530000, ['CSS', 'JS']))
    
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





