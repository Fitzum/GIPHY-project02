   function searchGiphy() {
      var searchInput = document.getElementById("searchInput").value;
      var apiKey = "WcmMHI22CPgaIuFbTFRtuGH5wprtHwzD"; // Replace with your Giphy API key
      var url = "https://api.giphy.com/v1/gifs/search?q=" + searchInput + "&api_key=" + apiKey;
    
      
      fetch(url)
        .then(response => response.json())
        .then(data => {
          displayImages(data);
          })
        .catch(error => console.log(error));
    }
    
    function displayImages(data) {
      var imageGrid = document.getElementById("imageGrid");
      imageGrid.innerHTML = ""; // Clear previous search results
      
      data.data.forEach(gif => {
        var imgElement = document.createElement("img");
        imgElement.src = gif.images.fixed_height.url;
        
        var gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.appendChild(imgElement);

        
        
        imageGrid.appendChild(gridItem);
      });
    }
