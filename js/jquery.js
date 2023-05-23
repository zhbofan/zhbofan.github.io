$(function () { //shorthand for $(document).ready(function())
  console.log("ready!");

  //GETTERS AND SETTERS
  //$('#getText').text() //.text() changes the innerHTML of an element
  //$('#getText').text('Hello')
  //$('#getText').attr('type', 'text') // selects and sets the attribute of an element

  //MAP SOME TEXT TO AN ARRAY
  // $('.lead')
  // $('.lead').map(function(){return $(this).text();}) // changes multiple texts
  // $('.lead').map(function(){return $(this).text();}).get();

  //A BRIEF DIGRESSION ON THIS
  // $('.lead').map(function(){return $(this).text();}).get()
  // $('.lead').map(function(){return this.tagName;}).get()

  //SETTING UP THE BUTTONS
  // FINISH THE 'HIDE IT' BUTTON
  $('#hideParagraph').on('click', function(){
    return $('#leadParagraph').hide()
    //Code goes here.
  });

  //  TOGGLE BUTTON
  // Use .on('click') on the toggleParagraph button
  // In the function, use .toggle() on the leadParagraph

  $('#toggleParagraph').on('click', function(){
    return $('#leadParagraph').toggle()
  });


  // Get text and set text
  $('#getText').on('click', function(){
    $('#textOutput').text('selected text: ' + $('#secondParagraph').text())
    console.log("$('#secondParagraph').text()")
    console.log("$('#textOutput').text('selected text: ' + $('#secondParagraph').text())")
  });

  // Attributes
  $('#attrButton').on('click',function(){
    $('#attrOutput').text('The button class is: ' + $(this).attr('class'))
    console.log("$(this).attr('class'), where (this) refers to #attrButton.")
  });

  // Two events on one selector
  $("#twoEvents").on({
    "click": function () { console.log("clicked!"); },
    "mouseover": function () { console.log("hovered!"); }
  });

  // PARAGRAPH HOVER
  $("#hoverText").on({
    'mouseover': function()
    {
      $(this).css('background-color', 'yellow');
      console.log("$(this).css('background-color', 'yellow')")
    },
    'mouseout': function()
    {
      $(this).css('background-color', 'white');
      console.log("$(this).css('background-color', 'white')")
    }
  });

  // FILTER() -- remove comment below to activate.
  // $('li').filter(':nth-child(2n)').css("background-color", "red");
  // $('li').filter(function(index){return (index+1)%2 === 0}).css("background-color", "red");

  // Add css based on element content
  // $('li:contains(thing)').css("background-color", "red");

  //TRAVERSING THE DOM
  // $('#hideParagraph')
  // $('#hideParagraph').parentsUntil('body')
  // $('#hideParagraph').closest("div")
  // $('#hideParagraph').next()

  //WORKING WITH THE DOM
  // Selecting siblings and self, chaining
  // $('li').filter('#startItem').siblings().css("background-color", "red");
  /* $('li').filter('#startItem')
  .siblings()
  .addBack()
  .css("background-color", "red");
  */
  
  // $('li').even().css("background-color", "red");
  // $('li').odd().css("background-color", "red");

  // OTHER DOM ACTIONS
  $('#startItem').get(0).tagName;

  //Iterate over an object with each:
  // Iterate over a selection, notice how we can call
  // index and element whatever we want.
  // $('.even').each(function () {console.log(this.tagName)})
  // $('.even').each(function (i, el) {console.log(i, el.tagName)})

  // pass index as a parameter of the function
  // if we want to use it inside the function
  // $.each($('.even'),function(){console.log(this.tagName)})
  // $.each($('.even'),function(index){console.log(index, this.tagName)})


  // Iterate and add/remove a class and attributes
  // $("li").addClass("newClass");
  // $("li").attr('xml:lang', 'en');
  // $("li").removeAttr('xml:lang', 'en');
  // $("li").removeClass("newClass");

  //Tasks:
  // $('ol li').addClass('special');
  // $('ol li:first-child').text()
  // $('ol li:nth-child(3)').text()
  // $('tbody tr td:nth-child(4)').addClass('socialMedia');
  // $('ol li a').attr('target', '_blank');

});

