// Create a new footer bar element
var footerBar = document.createElement("footer");
footerBar.classList.add("footer", "mt-auto", "py-3", "bg-light",);

// Create a row
var footerRow = document.createElement("div");
footerRow.classList.add("row");
footerBar.appendChild(footerRow);

// Create three columns that hold the content texts
const myContactInfo = [
    "Bofan Zhang",
    "zhbofan@uchicago.edu",
    "Beijing, 100025"
]

for (i in myContactInfo){
    var newCol = document.createElement("div");
    newCol.classList.add("col-md-4");
    footerRow.appendChild(newCol);
    var newSpan = document.createElement("span");
    newSpan.classList.add("text-muted");
    newSpan.innerHTML = myContactInfo[i];
    newCol.appendChild(newSpan);
}

// Append the footer to the #footer-placeholder div
document.getElementById("footer-placeholder").appendChild(footerBar);