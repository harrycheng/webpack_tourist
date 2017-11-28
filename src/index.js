import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import printMe from './print.js';
import { cube } from './math.js';

function component() {
    var element = document.createElement('div');
  
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    
    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);
  
    var btn = document.createElement('button');
    btn.onclick = printMe;
    btn.innerHTML = 'click me';
    element.appendChild(btn);

    var pre = document.createElement('pre');
    pre.innerHTML = "5 cube = " +  cube(5);
    element.appendChild(pre);
    
    return element;
  }
  
  document.body.appendChild(component());


if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}