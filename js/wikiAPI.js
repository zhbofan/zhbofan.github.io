function wikiAPI(){
    //CONFIGURE YOUR HTML PAGE
    
    //DEFINE THE VARIABLES
        //Create an XHR object.
        //Define base URL for API and insert searchTerm variable.
    
    var searchTerm = document.getElementById('searchTerm').value;
    var connect = new XMLHttpRequest(); // connect is a XMLHttpRequest object
    var url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=20&gsrsearch=" + searchTerm;

    //OPEN THE API CALL
        //Use the XHR.open to GET a file from the API.
    connect.open('GET', url);

    //DEFINE THE ACTIONS THAT WILL HAPPEN WHEN THE RESPONSE IS RETURNED, PARSE AND DISPLAY THE DATA
        //Load and parse the response as a JSON data object.
        //Console.log the data object to see what you got as a response.
        //Locate the branch of the object that is of interest.
        //Loop through the branch and output the Wiki pages to the HTML page.
    
    connect.onload = function () {
        var wikiObject = JSON.parse(this.response);
        //console.log(wikiObject);
        //console.log(wikiObject.query.pages);
        var pages = wikiObject.query.pages;
        for (i in pages) {
            var newDiv = document.createElement("div");
            newDiv.setAttribute('class', 'row h4');
            document.getElementById("wiki").appendChild(newDiv);
            newDiv.innerText = pages[i].title;
        };
    };

    //SEND THE API REQUEST TO THE SERVER
    connect.send();

    //SUPER CHALLENGE
        //Display links to the Wiki HTML pages as results.
        //Use the pageid properly in the JSON file.
        //The base URL for loading Wikipedia pages by pageid is the following:
            //https://en.wikipedia.org/?curid=
            //Add the page id to the end of the URL
}