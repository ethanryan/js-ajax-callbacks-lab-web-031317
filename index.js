//got this from a classmate:

function handlebarsSetup() {
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup();
  searchRepositories();
});


function showUserInput() {
  document.getElementById("display").innerHTML =
  document.getElementById("searchTerms").value;
}

// function searchRepositories() {
//
//  	const searchTerms = $('#searchTerms').val()
//
//  	$.get(`https://api.github.com/search/repositories?q=${searchTerms}`, data => {
//    		const template = Handlebars.compile($('#results-template').html())
//    		$('#results').html(template(data))
//  	}).fail(displayError)
//  }

// function searchRepositories() {
//   $('#searchLinkID').on('click', function() {
//
//     const githubAPI = "https://api.gitub.com/search/repositories?q="
//     //const input = $("searchTerms").val() //jQuery way to write vanilla JS line below:
//      const input = document.getElementById("searchTerms").value
//
//     $.get(githubAPI + input)
//
//     .done(function(response){ //if search is successful
//       console.log("Done")
//     }
//     var html = "" //reset html before each search
//     response.items.forEach(function(repo) {
//       html+=(
//         `
//         <ul>
//           <li>
//             Repo Name: ${repo.name} <br>
//             Repo Description: ${repo.name} <br>
//             Repo Link: ${repo.name} <br>
//             Repo Owner: ${repo.name} <br>
//             Owner Page: ${repo.name} <br>
//           </li>
//         </ul>
//         `
//       )
//     })
//     $('#searchTerms.').val('')
//     $('#results').html(html)
//   )

    // const uri = rootURL + "/users/" + input + "/repos"
    // const xhr = new XMLHttpRequest()
    // xhr.addEventListener("load", displayRepositories)
    // xhr.open("GET", uri)
    // xhr.send()
    // return false;

//   })
// }





function searchRepositories() {

 	const searchTerms = $('#searchTerms').val()

 	$.get(`https://api.github.com/search/repositories?q=${searchTerms}`, data => {
   		const template = Handlebars.compile($('#results-template').html())
   		$('#results').html(template(data))
 	}).fail(displayError)
 }

 function showCommits(el) {
 	const owner = el.dataset.owner
 	const repo = el.dataset.repository

 	$.get(`https://api.github.com/repos/${owner}/${repo}/commits`, data => {
 		const template = Handlebars.compile($('#commits-template').html())
 		$('#details').html(template(data))
 	}).fail(displayError)

 }


 function displayError() {
 	$('#errors').html("I'm sorry, there's been an error. Please try again.")
 }
