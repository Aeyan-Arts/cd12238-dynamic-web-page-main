/**Building the navigation bar using JavaScript **/

/**a for loop to get the section manually */
for (let i = 1; i<6 ; i++){
    /**using quarySelector to get get the section one by one
     *then using .dataset to get its name*/
    let getSection= document.querySelector(`#section${i}`);
    let listName = getSection.dataset.nav;
    /**declaring the parent "unordered" which we will append the child to*/
    const unordered = document.getElementById("navbar__list");
    /** creating a new li element with the valruble creatList*/
    creatList = document.createElement("li");
    /**using .innerHTML and Template literals to fill the li*/
    let text = `<a href=#section${i} class="menu__link">${listName}</a>`;
    creatList.innerHTML = text;
    /**appendin the child -creatList- to the parent -unordered-*/
    unordered.appendChild(creatList);
    /**adding styling */
    creatList.classList.add("navbar__menu");

}


/**Adding smooth scrolling **/

/**adding a varuble that has all the links */
let allLink = document.querySelectorAll("a");
/**using forEach loop to add an event listener to every item */
allLink.forEach(item => {
    item.addEventListener('click', function(event){
        /** using .preventDefault() to remove jumping */
        event.preventDefault();
        /**getting the href attribute to the clicked section*/
        const sectionLink = item.getAttribute("href");
        /**declaring the place of which we will scroll into
         * then using .scrollIntoView for a smooth excpirnce*/
        targetedSection= document.querySelector(sectionLink);
        targetedSection.scrollIntoView({behavior: "smooth",block: "center"});
    })
});


/**Adding an active state **/

/**making a function to easliy call it */
function activeSection(){
    /**getting all of the section */
    const allSection = document.querySelectorAll("section")
    /**making a forEach loop to go through every section*/
    allSection.forEach(section => {
        /**declaring varibul -clientPostion- that holds the length from the top of the section*/
        const clientPostion= section.getBoundingClientRect().top;
        /**an if else statment that uses the clint position to know where it's
        , and if true add the class "active" else remove it*/
        if (clientPostion <= 300 && clientPostion>=-35){
            section.classList.add("active");
            
        }else{
            section.classList.remove("active");
        }
    });
}
/**adding the function to the event listner ,
so whenever scroll happen the function is called */
window.addEventListener("scroll", activeSection);


/**Adding a comment form **/

/**declaring the submit button and adding an event listener to it*/
const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", function(event){
    /**prevents default state which will send you to the top of the page*/
    event.preventDefault();
    /**declration of needed text by getting the input value by using .value */
    let commentText = document.querySelector("#commentContent").value;
    let emailText = document.querySelector("#email").value;
    let nameText = document.querySelector("#name").value;
    /**getting the form so we can reset it later */
    let myForm = document.querySelector("form")
    /**in this if else statment it will check the validity of inputted values */
    if (emailText.includes("@") && commentText != "" && emailText != "" && nameText != ""){
        /**first: we will creat a div element to hold our comment,
        this div is called "newComment"*/
        const newComment = document.createElement("div");
        /**adding class for styling */
        newComment.classList.add("comment_container");
        /**secound we declare the parent we will append the child into */
        const commentSection = document.getElementById('comments');
        /**third using the .innerHTML and Template literals
         * we're going to write how the comment should display */
        commentHTML=`<span class="bold">${nameText}</span><br><span class="faded">${emailText}</span><br><p>commented:<br>${commentText}</p>`;
        newComment.innerHTML= commentHTML;
        /**lastly we append the child -newComment- to the parent -commentSection- 
         then we reset the form*/
        commentSection.appendChild(newComment);
        myForm.reset()
    }else{
        /**using if else statment to give diffrent alerts according to what's wrong */
        if(commentText == "" && emailText == "" && nameText == ""){
            alert("wow! you got nothing!");
        }else if(nameText == ""){
            alert("uhm, got no name?");
        }else if(commentText == ""){
            alert("you're the silent type?");
        }else{
            alert("valid E-mail needed...");
        }
    }
})