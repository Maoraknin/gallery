console.log('Starting up');

function onInit() {
    renderProjItem()
    renderProjModal()
}

function renderProjItem() {
    var projects = getProjects()
    console.log('projects:', projects)
    var strHTMLs = projects.map(project => `<div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal" onClick="renderModal('${project.id}')">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
             <img class="img-fluid" src="img/portfolio/${project.id}.jpg" alt="">
          </a>
          <div class="portfolio-caption">
           <h4>${project.name}</h4>
           <p class="text-muted">${project.title}</p>
          </div>
        </div>`

    )

    console.log($('.item-container'));
    $('.item-container').html(strHTMLs.join(''))
}


function renderModal(projectId) {
    const project = getProjectById(projectId)
const strHtml = `
<h2>${project.name}</h2>
<p class="item-intro text-muted">${project.title}</p>
<img class="img-fluid d-block mx-auto" src="img/portfolio/${project.id}.jpg" alt="">
<p>${project.desc}</p>
<ul class="list-inline">
  <li><strong>Date: </strong>${getDate(project.publishedAt)}</li>
  <li><strong>Technology: </strong>${project.labels.join(' ,')}</li>
</ul>
<button onclick="goToUrl('${project.url}')" class="btn btn-primary" data-dismiss="modal" type="button">
  Visit My Site!</button>`
  console.log(strHtml);

    $('.modal-body').html(strHtml)


    // )
    // console.log($('.portfolio-modals'));
    // $('.portfolio-modals').html(strHTMLs.join(''))

}



// function renderModal(id) {
//     const projs = getProj()
//     const proj = projs.find(proj => proj.id === id)
  
//     const strHTML = `<h2>${proj.name}</h2>
//     <a href="${proj.url}">Link to the project!</a>
//     <img class="img-fluid d-block mx-auto" src="pic/${proj.id}.jpeg" alt="">
//       <p>${proj.desc}</p>
     
//       <button class="btn btn-primary" data-dismiss="modal" type="button">
//         <i class="fa fa-times"></i>
//         Close Project</button>`
  
//     document.querySelector('.modal-body').innerHTML = strHTML
//     console.log(strHTML)
  
  
//   }
  






function goToUrl(url) {
    console.log('here');
    window.open(url)
}


