const $ = function (selector) {
  const nodeList = document.querySelectorAll(selector);

  const text = function(content){
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].innerText = content;
    }
  }
  
  const html = function(content){
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].innerHTML = content;
    }
  }
// 1. A function `addClass` that takes in a className as a string and adds that class to every element in the nodelist. 
  const addClass = function(className){
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].classList.add(className);
    }
  }
// 2. A function `removeClass` that takes in a className as a string and removes that class from every element in the nodelist.
  const removeClass = function(className){
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].classList.remove(className);
    }
  }
  // 3. A function `toggleClass` that takes in a className as a string and adds that class if the class does not exist on each element or removes that class from every element in the nodelist on which it does currently exist.
  const toggleClass = function(className){
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].classList.toggle(className);
    }
  }
  // 4. A function `empty` that sets the innerHTML of every element in the nodelist to an empty string.  
  const empty = function(){
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].innerHTML = '';
    }
  }
  // 5. A function `append` takes in a string and adds that string on to the end of the `innerHTML` of every element in the nodelist. (Note that the `html` function _replaces_ the existing HTML, where this function adds to it.)
  const append = function(content){
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].innerHTML += content;
    }
  }
  // 6. A function `prepend` takes in a string and adds that string on to the beginning of the `innerHTML` of every element in the nodelist. (Note that the `html` function _replaces_ the existing HTML, where this function adds to it.)
  const prepend = function(content){
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].innerHTML = content + nodeList[i].innerHTML;
    }
  }
  // 7. A function `val` that optionally takes in a string and gets the value of the input on the first element in the nodelist if a string is not passed in. Otherwise, it sets the value on the first element in the nodelist to the string. (This function is used to get values from input HTML elements. i.e. to get user input from a form.)
  const val = function (content) {
      if(content === undefined){
        return nodeList[0].value; 
      } else {
        nodeList[0].value = content;
      }     
  }
  // 8. A function `on` that takes two strings, one that represents an `event` and one the represents a callback function. 
  const on = function (action, cb) {
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].addEventListener(action, cb);
    }
  }

  return {
    text: text,
    html: html,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass,
    empty: empty,
    append: append,
    prepend: prepend,
    on: on,
    val: val
  };
}
