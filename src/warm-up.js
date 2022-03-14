'use strict';


import GraphemeSplitter from "grapheme-splitter";

const splitter = new GraphemeSplitter();

const regexExp = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gi;

let strings = ['Hello', 'B', 'World', 'it', 'cat', "🔥🤯o", 'Javascript', 'Spring'];


strings.map(string => {
    if(regexExp.test(string)) {
        let graphemes = splitter.splitGraphemes(string);
        console.log(splitter.splitGraphemes(string).splice(0,2).concat(graphemes.slice(graphemes.length-2, graphemes.length)).join(''));
    } else {
        string.length < 2 ? console.log('') : console.log(string.slice(0,2).concat(string.slice(string.length-2,string.length)));
    }
})




