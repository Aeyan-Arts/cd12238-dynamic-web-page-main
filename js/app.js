/** TODO: Build the navigation bar using JavaScript **/
for (let i = 1; i<6 ; i++){
    let getSection= document.querySelector(`#section${i}`)
    let listName = getSection.dataset.nav
    const unordered = document.getElementById("navbar__list")
    creatList = document.createElement("li")
    let text = `<a href=#section${i} class="menu__link">${listName}</a>`
    creatList.innerHTML = text
    unordered.appendChild(creatList)
    creatList.classList.add("navbar__menu")
}

/** TODO: Add smooth scrolling **/
let allLink = document.querySelectorAll("a");
allLink.forEach(item => {
    item.addEventListener('click', function(event){
        event.preventDefault();
        sectionLink = item.getAttribute("href");
        targetedSection= document.querySelector(sectionLink)
        targetedSection.scrollIntoView({behavior: "smooth",block: "center"})
    })
});
/*    let x = document.querySelectorAll("a")
    x.addEventListener('click', function(){
        scroll(50, 60)
        scroll(smooth)
    })
/** TODO: Add an active state **/
function checkActiveSection(){
allSections=document.querySelectorAll('section')
allSections.forEach(section =>{
    const activeSection = section.getBoundingClientRect()
    let clientsHeight = window.innerHeight;
    console.log("inforloob")
    if (activeSection == clientsHeight/2){
        section.classList.add("active")
        console.log("yes")
    }else{
        section.classList.remove("active")
        console.log("no")
    }
    console.log("fun")
})
}
window.addEventListener('scroll', checkActiveSection())
/** TODO: Add a comment form **/
