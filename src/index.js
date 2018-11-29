(function (){
	
let repos = {};
let faves = {};

setArrs();

function setArrs(){
	fetchArrs('');
	fetchArrs('/repos');
	fetchArrs('/starred');
}

function fetchArrs(params){
	fetch('https://api.github.com/users/andreaweb'+params)
	.then(res => res.json())
	.then(data => {
			if(params === ''){
				let reps = document.querySelector('#repos');
				reps.innerHTML = data.public_repos;
				let follows = document.querySelector('#following');
				follows.innerHTML = data.following;
				let isFollowed = document.querySelector('#followers');
				isFollowed.innerHTML = data.followers;
				let pic = document.querySelector('#picture');
				pic.innerHTML = data.avatar_url;
			}else if(params === '/starred'){
				faves = data;
			}else{
				repos = data;
			}
		}
	)
	// .catch(error => error)
}

function checkButton(e){
	if(e.target.id === 'get-repos'){
		generateHTML(repos)
	}else if(e.target.id === 'get-stars'){
		generateHTML(faves)
	}
}

function generateHTML(arr){
	console.log("Arr in Generate html"+arr);
	let html = "";
	for(let i = 0; i < arr.length; i++){
		html = html + `<tr><td>${arr[i].name}</td></tr>`
	}
	let el = document.querySelector('#table');
	el.innerHTML = html;
	return html;
}

function scrollToAnchor(e){
	let hashval = e.target.getAttribute('href');
    let target = document.querySelector(hashval);
	target.scrollIntoView({behavior: 'smooth'});
	e.preventDefault();
}

function getFollowing(){
	while(!user.following){return 'A API do Github está instável ou outro erro ocorreu.'}
	return user.following
}

function getFollowers(){
	while(!user.followers){return 'A API do Github está instável ou outro erro ocorreu.'}
	return user.followers
}

let menu = document.getElementById('menu');
menu.addEventListener("click", scrollToAnchor);

const githubHTML = `
<aside class="card-aside">
	<img class="card-img" id="picture" src="https://avatars1.githubusercontent.com/u/13103893?s=460&v=4"/>
	<a class="card-link" href="#">VISITAR PERFIL</a>
</aside>
<div class="card-buttons">
	<ul class="card-github">
		<li>REPOSITÓRIOS: <span id="repos">API instável, sem internet ou outro erro!</span></li>
		<li>SEGUIDORES: <span id="followers">API instável, sem internet ou outro erro!</span></li>
		<li>SEGUINDO: <span id="following">API instável, sem internet ou outro erro!</span></li>
	</ul>
	<button class="button" id="get-repos">VER REPOSITÓRIOS</button>
	<button class="button" id="get-stars">VER FAVORITOS</button>
</div>
<section class="card-toggle">
	<h5>LISTA DOS REPOSITÓRIOS</h5>
	<table class="table striped" id="table">
	</table>
</section>
`;

let elem = document.querySelector('#js-content');
elem.innerHTML = githubHTML;

let github = document.querySelector('#get-repos'); 

document.addEventListener("click", checkButton); 
})();

