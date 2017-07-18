let searchbar = document.querySelector(".searchbar");
let container = document.querySelector(".container")


// 2. Create our Ajax Request
fetch("https://crossorigin.me/http://www.recipepuppy.com/api/?q=" + (recipe.search.value))
  .then(
    function(response) {
      // We process the response accordingly.
      if (response.status !== 200) {
        console.log(response.status);
        return;
      }
      response.json().then(function(object) {
        // console.log(object.name);
        //
        // console.log(object.results);


        // function() {
        //   data.forEach(function(element) {
        //     if (element.thumbnail === ) {
        //       console.log(element.title);
        //     }
        //   });
        // }


        searchbar.innerHTML += `
        <img src="${object.thumbnail}">
        <div> ${object.title}</div>
        <div><a href ="${object.html_url}"></a></div>
`

        container.innerHTML += `
        <img src="${object.thumbnail}">
        <div> <span>Title </span> ${object.title}</div>
        <div> <span>  </span> <a href ="${object.href}"></a></div>
`

      });
    }
  )

  .catch(function(err) {
    console.log("Fetch Error :-S", err);

  });
