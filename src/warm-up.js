'use strict';

let strings = ['Hello', 'B', 'World', 'it', 'cat', 'Javascript', 'Spring'];

strings.map((string) => {
    string.length < 2 ? console.log('') : console.log(string.slice(0,2).concat(string.slice(string.length-2,string.length)));
})