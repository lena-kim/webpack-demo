var _ = require('lodash');
// named import 규칙은 반드시 {}안에 동일한 이름을 사용
import {area, circumference} from './circle';
// default import 규칙 : {} 없이 이름을 바꿀 수 있다.
import recube from './cube';

import './style.css';
import './hello.scss';

function component() {

  let element = document.createElement('div');

  // Lodash, currently include via a script, is required for this line to work
  // _ :: lodash 라이브러리 (순서 중요 :: 그래서 사용합니다 npm을.. 의존성 관리해줘요
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;

}
console.log('webpack test lena');
console.log(area(10));
console.log(recube(5));
document.body.appendChild(component());
