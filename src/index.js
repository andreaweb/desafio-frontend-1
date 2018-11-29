// let reposArr = [];
// let favesArr = [];
// let user = {};

// fetch('https://api.github.com/users/andreaweb/repos')
// .then(res => res.json())
// .then(data => getRepos(data))

// //followers, following, number of repos(reposArr.length), faves

// function getRepos(data){
// 	reposArr.push(data);
// }

// fetch('https://api.github.com/users/andreaweb/starred')
// .then(res => res.json())
// .then(data => getFaves(data));

// function getFaves(data){
// 	favesArr.push(data);
// }

// fetch('https://api.github.com/users/andreaweb')
// .then(res => res.json())
// .then(data => getFollows(data));

// function getFollows(data){
// 	user = data;
// }

const some_html = `
<ul class="github">
	<li>REPOSITÓRIOS: </li>
	<li>SEGUIDORES: </li>
	<li>SEGUINDO: </li>
</ul>
<div>
	<button class="button" id="#get-repos">VER REPOSITÓRIOS</button>
	<button class="button" id="#get-stars">VER FAVORITOS</button>
</div>
<section class="toggle">
	<h5>LISTA DOS REPOSITÓRIOS</h5>
	<table class="table striped">
		<tr><td>repo.name or favo.name</td></tr>
		<tr><td>repo.name or favo.name</td></tr>
		<tr><td>repo.name or favo.name</td></tr>
		<tr><td>repo.name or favo.name</td></tr>
	</table>
</section>
`;

let elem = document.querySelector('#js-content');
elem.innerHTML = some_html;