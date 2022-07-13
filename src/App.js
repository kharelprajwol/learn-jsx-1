
// JSX allow us to write html and javascript together in react.
//  Together is a sense that html tags can be inside javascript code and javascript code can be inside html tags. 
// JSX allow us to place html tags in DOM to create UI. (rendering)
// JSX eventually converts html tags into react elements.
// When writing jsx in multiline, they must be wrapped inside a parent element to avoid automatic semicolon insertion.

import './App.css';

function App() {
  const name = 'Prajwol Kharel';
  function printAge(age) {
    return age;
  }
  function getGreetings(status) {
    if (status) {
      // JSX does not need to be inside parenthesis if its in same line of return statement.
       return <h3>Welcome Viewer!</h3>;
    }
    else {
      // JSX does not need to be inside parenthesis if its in same line of return statement.
      return <h3>Viewer!</h3>;
    }
  }
  const url = "https://www.reactjs.org";

  return (
    // Embedding Expressions in JSX:
    // We can put any JavaScript expression inside JSX but must be put inside curly braces.
    // <h1>My name is {name}</h1> // embedding JavaScript varible inside JSX.
    // <h2>I am {printAge(21)} years old</h2> // calling JavaScript function inside JSX.
    // The above JSX must be wrapped inside parent element.
    // Notes before wrapping inside parent element:
    //  -- When those jsx are wrapped inside parent element, they become pure JSX and we cannot use comment of JavaScript there.
    //  -- Comment for JavaSript: {//} or {/*comment here*/}
    // This is how they look by after that:

    <div>
      {/*Embedding Expressions in JSX:*/}
      {/*We can put any JavaScript expression inside JSX but must be put inside curly braces.*/}
      <h1>My name is {name}</h1> {/*embedding JavaScript varible inside JSX.*/}
      <h2>I am {printAge(21)} years old</h2> {/*calling JavaScript function inside JSX.*/}

      {/*JSX inself is a expression too:*/}
      {/*After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects.*/}
      {/*This means that you can use JSX inside of if statements and for loops, assign it to variables, accept it as arguments, 
         and return it from functions*/}
      {getGreetings(true)} {/*calling function that returns JSX (look above for this function) */}

      {/*Specifying Attributes in JSX: just like in html*/}
      <a href ="https://www.reactjs.org"></a>
      {/*We can also use curly braces to embed JavaScript in an attribute.*/}
      {/*Note:
        * Don’t put quotes around curly braces when embedding a JavaScript expression in an attribute. 
        * We should either use quotes (for string values) or curly braces (for expressions), but not both in the same attribute.
        * Use camelCase for property name.
      */}
      <a href ={url}>Click Here!</a> {/*Here quotes are not put around curly braces */}
    </div>

  );
}

export default App;

