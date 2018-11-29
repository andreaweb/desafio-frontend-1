(function (){
	
let repos = {};
let faves = {};
let user = {};
console.log(faves, repos, user);
setArrs();

function setArrs(){
	faves = fetchArrs('/starred');
	repos = fetchArrs('/repos');
	user = fetchArrs('');
	console.log(faves, repos, user);
}

function fetchArrs(params){
	fetch('https://api.github.com/users/andreaweb'+params)
	.then(res => res.json())
	.then(data => data)
	// .catch(error => error)
}

function checkButton(e){
	if(e.target.id === '#get-repos'){
		generateHTML(repos)
	}else if(e.target.id === '#get-stars'){
		generateHTML(faves)
	}
}

function generateHTML(arr){
	console.log(arr);
	let html = "";
	for(let i = 0; i < arr.length; i++){
		html = html + `<tr><td>${arr[i].name}</td></tr>`
	}
	console.log(user.following);
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


document.addEventListener("click", scrollToAnchor);

const githubHTML = `
<aside class="card-aside">
	<img class="card-img" src=${
		'https://avatars1.githubusercontent.com/u/13103893?s=460&v=4' 
		|| user.avatar_url}/>
	<a class="card-link" href="#">VISITAR PERFIL</a>
</aside>
<div class="card-buttons">
	<ul class="card-github">
		<li>REPOSITÓRIOS: </li>
		<li>SEGUIDORES: 
		${'A API do Github está instável ou outro erro ocorreu.' || user.followers}
		</li>
		<li>SEGUINDO: 
		${'A API do Github está instável ou outro erro ocorreu.' || user.following}
		</li>
	</ul>
	<button class="button" id="#get-repos">VER REPOSITÓRIOS</button>
	<button class="button" id="#get-stars">VER FAVORITOS</button>
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

