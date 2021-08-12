/* Hello javascript */
/* + One way to look at it; the DOM is the living instance of the webpage.
     The instantiated version, maybe.
   + We prefer to use QuerySelector in the presence of alternatives. It uses
     CSS selectors as input arguments. Otherwise, we may have to learn other
     means of set builder notation. Recall jquery is pretty hard for newbs.
   + The downside of "Document.Write": it only appends to the bottom.
*/ 

let matchingElement = document.querySelector("h1");

console.log(matchingElement);

matchingElement.classList("page-header");

console.log()
