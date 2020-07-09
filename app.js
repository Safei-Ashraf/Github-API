console.log('script attached')

// //Define Main Dom Elements on Page:
let inputField = document.querySelector('input');
let getBtn = document.querySelector('button.btn-get');
let displayDiv = document.querySelector('div.data-display')
let warning = document.createElement('p');
    warning.textContent =`Please Add A Valid "User Name" In Order To Get A "USER" Data!`;
let warningImage = document.createElement('span');
warningImage.className = `gif-2`;

getBtn.addEventListener('click', ()=>{
    getData();
})


//Main Functions:
function getData()
{

    if (inputField.value == '') {
        displayDiv.prepend(warning);

    } else 
    {
        console.log(inputField.value);
        fetch(`https://api.github.com/users/${inputField.value}/repos`)
        .then(res => res.json())
        .then(repos => 
                {   //Empty Display div:    
                    displayDiv.innerHTML = '';

                    console.log(repos);
                    //Loop on repos:
                    repos.forEach(  repo => 
                    {
                    //Create Main Div:
                    let mainDiv = document.createElement('div');
                    //Create Repo Name Text:
                    //Append Name to main:
                    if(repo.message){
                        console.log(repo.message);
                    }
                    mainDiv.textContent = repo.name;   
                    //Create Anchor to the repo:
                    let theUrl = document.createElement('a');
                    theUrl.textContent = `Visit Repo`;
                    theUrl.href = `https://github.com/${inputField.value}/${repo.name}`;
                    theUrl.target = `_blank`;
                    mainDiv.appendChild(theUrl);
                    //Add Stars info:
                    let starsSpan = document.createElement('span');
                    starsSpan.textContent = `Stars ${repo.stargazers_count}`;
                    mainDiv.appendChild(starsSpan);
                    mainDiv.className = `repo-box`;
                    


                    //Append to Display:
                    displayDiv.appendChild(mainDiv);
                    }); 
                }
            ).catch((error) => {
                displayDiv.appendChild(warning);
                displayDiv.appendChild(warningImage);
            });
    }
}
