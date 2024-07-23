## Project Overview

using an already made css and html files, things that were added:

- 2 new sections
- comment styling
- Built a navigation bar using JavaScript
- Added smooth scrolling by adding an Event Listener
- Added an active state to shown section
- Added a comment form

## Skills Needed

HTML, CSS, and Javascript

## Features Indetail

1. **Built a navigation bar using JavaScript** the nav bar is built using quarySelctor to get all of the section and using dataset-* to use .dataset to get the name of the section

2. **Added smooth scrolling by adding an Event Listener** removing the defult bahavior of clicking on a link then adding .scrollIntoView() to get a smooth scroll to each section

3. **Added an active state to shown section** in which using .getBoundingClientRect() to know where the user window is relitive to the section and add a class if the window was looking at the section

4. **Added a comment form** a comment form where javascrpt manipulated the html to add a new div that contaned the comment

## Functions and Methodes Used (no repeat)

- **navigation bar** .querySelector(), .creatElement(), .innerText, .appendChild(), .classList.add()
- **smooth scrolling** .querySelectorAll(), .addEventListener(), .preventDefault(), .getAttribute(), .scrollIntoView()
- **active state** .getBoundingClientRect(), .classList.remove(), *activeSection()*
- **comment form** .querySelector().value, alert()

## Challnges

this project needed a lot of research to debugg and built the javascript as it was the main challenge, it took roughly three days to complete, adding the active state was done last as I was tired and couldn't understand how to use getBoundingClientRect() correctly,would love to make a website with what I have learned making this project.