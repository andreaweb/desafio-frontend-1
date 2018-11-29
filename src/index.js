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

// <ul>
// 	<li>Repositórios: </li>
// 	<li>Seguidores: </li>
// 	<li>Seguindo: </li>
// </ul>
// <button>Ver Repositórios</button>
// <button>Ver Favoritos</button>
// <h5>LISTA DOS REPOSITÓRIOS</h5>
// <table>
// 	<tr><td>repo.name or favo.name</td></tr>
// </table>