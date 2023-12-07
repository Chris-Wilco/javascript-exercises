
const mainContainer = document.querySelector('#container');

const paragraph = document.createElement("p");
paragraph.textContent = 'Hey I’m red!';
paragraph.style.color = 'red';

const heading3 = document.createElement("h3");
heading3.innerText = "I’m a blue h3!";
heading3.style.color = 'blue';

mainContainer.appendChild(paragraph);
mainContainer.appendChild(heading3);

const addedDiv = document.createElement("div");
addedDiv.setAttribute('class', 'thisAddedDiv');
addedDiv.style.backgroundColor = 'pink';
addedDiv.style.border = '2px solid black';
addedDiv.style.padding = '5px';

const heading1 = document.createElement("h3");
heading1.innerText = "I’m in a div";

const paragraph2 = document.createElement("p");
paragraph2.innerText = "ME TOO!";

addedDiv.appendChild(heading1);
addedDiv.appendChild(paragraph2);
mainContainer.appendChild(addedDiv);


