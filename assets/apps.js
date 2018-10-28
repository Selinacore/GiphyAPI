// make an array of items, create new items to add to array
//function to display gif buttons 
var topics = ["blue cheese", "gouda", "swiss", "cheddar", "parmesean", "gorgonzola"];

function displayGifBtns() {

      for (var i = 0; i < topics.length; i++) {
          var gifBtn = $("<button>");
  
          // var rating = results[i].rating; //adds rating
          // var p = $("<p>").text("Rating: " + rating);
  
          // var cheeseImage = $("<img>");
          // cheeseImage.attr("src", results[i].images.fixed_height.url);
  
  
          gifBtn.addClass("topics");
          gifBtn.addClass("btn btn-primary");
          gifBtn.attr("data-cheese", topics[i]);
          gifBtn.text(topics[i]);
  
  
          $("#cheese-btn").append(gifBtn);
      }
  
  };





$( document ).ready(function() {


displayGifBtns ()

$("button").on("click", function() {
    var cheese = $(this).attr("data-cheese");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + cheese + "&api_key=o0lnIbBIyt7nT2Ayk3efUdmBSL15L8R6&limit=10";
  console.log(cheese)
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        var results = response.data;
      
  for (var i = 0; i < results.length; i++){
   var imageContainer = $("<div>");

      var cheeseImage = $("<img>");
      cheeseImage.attr("src", results[i].images.fixed_height.url);

      var rating = results[i].rating; //adds rating
      var p = $("<p>").text("Rating: " + rating);

      imageContainer.append(cheeseImage);
      $("#gifshere").append(imageContainer);
  }
  
  
    console.log(queryURL);
		console.log(response);
      })


      })
    })
