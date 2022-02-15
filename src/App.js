import QnA from "./QnA";



    const App = () =>{
      return (
     <div>
       
       <QnA 
         title="Q: What is Java Script?"
         text="JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area."/>

   <QnA
     title="Q:What do you know about JavaScript 'Object'?"
     text=" An object is a collection of related data and/or functionality. These usually consist of several variables and functions (which are called properties and methods when they are inside objects). Let's work through an example to understand what they look like.

     To begin with, make a local copy of our oojs.html file. This contains very little — a <script> element for us to write our source code into. We'll use this as a basis for exploring basic object syntax. While working with this example you should have your developer tools JavaScript console open and ready to type in some commands.
     
     As with many things in JavaScript, creating an object often begins with defining and initializing a variable. Try entering the following line below the JavaScript code that's already in your file, then saving and refreshing."/>
   <QnA
     title="Q:What is an array?"
     text=" Arrays are generally described as list-like objects; they are basically single objects that contain multiple values stored in a list. Array objects can be stored in variables and dealt with in much the same way as any other type of value, the difference being that we can access each value inside the list individually, and do super useful and efficient things with the list, like loop through it and do the same thing to every value. Maybe we've got a series of product items and their prices stored in an array, and we want to loop through them all and print them out on an invoice, while totaling all the prices together and printing out the total price at the bottom.

     If we didn't have arrays, we'd have to store every item in a separate variable, then call the code that does the printing and adding separately for each item. This would be much longer to write out, less efficient, and more error-prone. If we had 10 items to add to the invoice it would already be annoying, but what about 100 items, or 1000? We'll return to this example later on in the article."/>

      </div>
   
      )
    }

    export default App;