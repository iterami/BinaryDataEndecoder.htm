'use strict';

function decode(){
    try{
        document.getElementById('binary-data').value = atob(document.getElementById('characters').value);

    }catch(error){
        document.getElementById('binary-data').value = '';
    }
}

function encode(){
    document.getElementById('characters').value = btoa(document.getElementById('binary-data').value);
}

function repo_init(){
    core_repo_init({
      'events': {
        'binary-data': {
          'oninput': encode,
        },
        'type': {
          'onchange': encode,
        },
      },
      'title': 'BinaryDataEndecoder.htm',
    });
}
