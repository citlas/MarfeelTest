var request = new XMLHttpRequest();
var request2 = new XMLHttpRequest();
var user = "citlas"




function searchThis(){
    document.getElementById('avatar').innerHTML = "";
    document.getElementById('nameInfo').innerHTML = "";
    document.getElementById('repos').innerHTML = "";
    document.getElementById('error').innerHTML = "";
  
    getSearchedElement();
}


function getSearchedElement(){
    //Get the searched element
    var searching = document.getElementById("searchedText").value;
    //console.log(searching)
    callApi(searching);
    return searching; 
}

function callApi(searching){
    //Call the api for user searched
    request.open('GET', `https://api.github.com/users/${searching}`, true);
    request.onload = function(){
    var data = JSON.parse(this.response);

    //console.log(data)

    showResults(data,searching);  
    }
    request.send();  
}

function showResults(data,searching){

    //Show results if success
    if(request.status >= 200 && request.status < 400){
        showUserInfo(data);
        
        showRepos(searching);
        
        request2.send();
         
            
        } else {

          showError()
    }
}


function showUserInfo(data){
    const app = document.getElementById('info');
    app.setAttribute('class','show');
    
    //avatar image
    const avatarDiv = document.getElementById('avatar');    
    const avatar1 = document.createElement('img');
    avatar1.src = data.avatar_url;
    avatar1.setAttribute('class','avatar');
    avatarDiv.appendChild(avatar1);
    
    //username
    const nameInfo = document.getElementById('nameInfo');
    const username = document.createElement('h6');
    username.textContent = '@'+data.login;
    username.setAttribute('class','username');
    nameInfo.appendChild(username);

    //fullname
    const fullname = document.createElement('h1');
    fullname.textContent = data.name;
    fullname.setAttribute('class','fullname');
    nameInfo.appendChild(fullname);

    //bio
    const bio = document.createElement('h5');
    bio.textContent = data.bio;
    bio.setAttribute('class','bio');
    nameInfo.appendChild(bio);
    
    return username.textContent;
}

function showRepos(searching){

    //calling to get their repos
    request2.open('GET', `https://api.github.com/users/${searching}/repos`, true);
    request2.onload = function(){
        
        var data = JSON.parse(this.response);
        console.log(data)

        const repos = document.getElementById('repos');
        
        repos.setAttribute('class','showAnswer');

        const headerRepos = document.createElement('h2');
        headerRepos.textContent = 'Repositories';
        headerRepos.setAttribute('class','headerRepos');
        repos.appendChild(headerRepos);
    
        
        //getting all repos
        //console.log(data[0])
        for(var i=0;i<data.length;i++){                

            //Create div
            const eachRepo = document.createElement('div');
            eachRepo.setAttribute('class','eachRepo');
            repos.appendChild(eachRepo);

            //repo Name
            const repoName = document.createElement('p');
            repoName.textContent = data[i].name;
            repoName.setAttribute('class','repo-name');
            eachRepo.appendChild(repoName);

            //Create div for stars and forked counters
            const repoCounts = document.createElement('div');
            repoCounts.setAttribute('class','repoCounts');
            eachRepo.appendChild(repoCounts);

            const stars = document.createElement('img');
            stars.src = 'img/star.svg';
            stars.setAttribute('class','stars');
            repoCounts.appendChild(stars);

            const starsCount = document.createElement('p');
            starsCount.textContent = data[i].stargazers_count;
            starsCount.setAttribute('class','starsCount');
            repoCounts.appendChild(starsCount);

            const forks = document.createElement('img');
            forks.src = 'img/repo-forked.svg';
            forks.setAttribute('class','forks');
            repoCounts.appendChild(forks);

            const forksCount = document.createElement('p');
            forksCount.textContent = data[i].forks_count;
            forksCount.setAttribute('class','forksCount');
            repoCounts.appendChild(forksCount);

        }
        

    }

}

function showError(){
    //error
    const errorDiv = document.getElementById('error');
    const error = document.createElement('p');
    error.textContent = "Does not exist";
    error.setAttribute('class','error');
    errorDiv.appendChild(error);
    return error.textContent;
}



