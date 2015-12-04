'use strict';

function decode(){
    try{
        document.getElementById('binary-data').value =
          atob(document.getElementById('characters').value);

    }catch(error){
        document.getElementById('binary-data').value = '';
    }
}

function encode(){
    document.getElementById('characters').value =
      btoa(document.getElementById('binary-data').value);
}

window.onload = function(e){
    document.getElementById('binary-data').oninput = encode;
    document.getElementById('characters').oninput = decode;
    document.getElementById('type').onchange = encode;
};
