const mainContainer = document.querySelector('.projects-container');
const videoFigura = document.querySelector('.video-figura');
const hero = document.querySelector('.hero');
const projects = document.querySelector('.projects');
const project1 = document.querySelector('.project-1');
const project2 = document.querySelector('.project-2');
const project3 = document.querySelector('.project-3');
const arrowProj = document.querySelector('#arrow-proj');
const infoProj1 = document.querySelector('.body-section-info.bmashup');
const imgProj1 = document.querySelector('.body-section-imgs.imashup');
const infoProj2 = document.querySelector('.body-section-info.bnovozco');
const imgProj2 = document.querySelector('.body-section-imgs.inovozco');
const infoProj3 = document.querySelector('.body-section-info.bfigura');
const imgProj3 = document.querySelector('.body-section-imgs.ifigura');

window.onload = () => {
    
    mainContainer.style.height = ''+window.innerHeight+'px'
    hero.style.height = ''+window.innerHeight+'px'
    project1.style.height = ''+window.innerHeight+'px'
    project2.style.height = ''+window.innerHeight+'px'
    project3.style.height = ''+window.innerHeight+'px'

    if ((window.innerWidth <= 1000 ) && (window.innerWidth > 750) ){
        project1.style.height = ''+window.innerWidth * 1.25+'px'
        project2.style.height = ''+window.innerWidth * 1.25+'px'
        project3.style.height = ''+window.innerWidth * 1.25+'px'
    }
    else if (window.innerWidth <= 750 ) {
        project1.style.height = ''+window.innerHeight+'px'
        project2.style.height = ''+window.innerHeight+'px'
        project3.style.height = ''+window.innerHeight+'px'
    }

    setTimeout(() => {
        arrowProj.style.opacity = '1'
    }, 1000);

    if (navigator.userAgent.match(/(iPod|iPhone|iPad)/i)) {

        if (window.innerWidth > 500){
            project1.style.backgroundAttachment = 'local'
            project2.style.backgroundAttachment = 'local'
        }
    }

}
window.onresize = () => {
    
    mainContainer.style.height = ''+window.innerHeight+'px'
    hero.style.height = ''+window.innerHeight+'px'
    project1.style.height = ''+window.innerHeight+'px'
    project2.style.height = ''+window.innerHeight+'px'
    project3.style.height = ''+window.innerHeight+'px'

    if ((window.innerWidth <= 1000 ) && (window.innerWidth > 750) ){
        project1.style.height = ''+window.innerWidth * 1.25+'px'
        project2.style.height = ''+window.innerWidth * 1.25+'px'
        project3.style.height = ''+window.innerWidth * 1.25+'px'
    }
    else if (window.innerWidth <= 750 ) {
        project1.style.height = ''+window.innerHeight+'px'
        project2.style.height = ''+window.innerHeight+'px'
        project3.style.height = ''+window.innerHeight+'px'
    }
}



mainContainer.addEventListener('scroll', function() {

    let vh = 100 * ($('.projects-container').scrollTop() / window.innerHeight);
    let vw = 100 * ($('.projects-container').scrollTop() / window.innerWidth);

    console.log(vh)

    let showing1 = false
    let showing2 = false
    let showing3 = false


    if (!showing1) {
        if (window.innerWidth > 1000){
            if(vh >= 55) {
                infoProj1.style.opacity = '1';
                imgProj1.style.opacity = '1';
    
                infoProj1.classList.add('animate__animated', 'animate__fadeInLeft');
                imgProj1.classList.add('animate__animated', 'animate__flipInX');
    
                showing1 = true
            }
        }
        else if ((window.innerWidth <= 1000 ) && (window.innerWidth > 750)){
            if(vh >= 55) {
                infoProj1.style.opacity = '1';
                imgProj1.style.opacity = '1';
    
                infoProj1.classList.add('animate__animated', 'animate__fadeInLeft');
                imgProj1.classList.add('animate__animated', 'animate__flipInX');
    
                showing1 = true
            }
        }
        else if (window.innerWidth <= 750 ) {
            if(vh >= 55) {
                infoProj1.style.opacity = '1';
                imgProj1.style.opacity = '1';
    
                infoProj1.classList.add('animate__animated', 'animate__fadeInLeft');
                imgProj1.classList.add('animate__animated', 'animate__flipInX');
    
                showing1 = true
            }
        }
    }

    if (!showing2) {
        if (window.innerWidth > 1000){
            if(vh >= 155) {
                infoProj2.style.opacity = '1';
                imgProj2.style.opacity = '1';
    
                infoProj2.classList.add('animate__animated', 'animate__fadeInLeft');
                imgProj2.classList.add('animate__animated', 'animate__flipInX');
    
                showing2 = true
            }
        }
        else if ((window.innerWidth <= 1000 ) && (window.innerWidth > 750)){
            if(vw >= 165) {
                infoProj2.style.opacity = '1';
                imgProj2.style.opacity = '1';
    
                infoProj2.classList.add('animate__animated', 'animate__fadeInLeft');
                imgProj2.classList.add('animate__animated', 'animate__flipInX');
    
                showing2 = true
            }
        }
        else if (window.innerWidth <= 750 ) {
            if(vh >= 150) {
                infoProj2.style.opacity = '1';
                imgProj2.style.opacity = '1';
    
                infoProj2.classList.add('animate__animated', 'animate__fadeInLeft');
                imgProj2.classList.add('animate__animated', 'animate__flipInX');
    
                showing2 = true
            }
        }
    }

    if (!showing3) {
        if (window.innerWidth > 1000){
            if(vh >= 255) {
                infoProj3.style.opacity = '1';
                imgProj3.style.opacity = '1';
    
                infoProj3.classList.add('animate__animated', 'animate__fadeInLeft');
                imgProj3.classList.add('animate__animated', 'animate__flipInX');
    
                showing3 = true
            }
        }
        else if ((window.innerWidth <= 1000 ) && (window.innerWidth > 750)){
            if(vw >= 290) {
                infoProj3.style.opacity = '1';
                imgProj3.style.opacity = '1';
    
                infoProj3.classList.add('animate__animated', 'animate__fadeInLeft');
                imgProj3.classList.add('animate__animated', 'animate__flipInX');
    
                showing3 = true
            }
        }
        else if (window.innerWidth <= 750 ) {
            if(vh >= 250) {
                infoProj3.style.opacity = '1';
                imgProj3.style.opacity = '1';
    
                infoProj3.classList.add('animate__animated', 'animate__fadeInLeft');
                imgProj3.classList.add('animate__animated', 'animate__flipInX');
    
                showing3 = true
            }
        }
    }


    if (vh > 200){
        videoFigura.classList.add ('show')
    }
    else {
        videoFigura.classList.remove('show')
    }

});