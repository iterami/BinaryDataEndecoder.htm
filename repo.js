'use strict';

function decode(){
    try{
        core_elements['binary-data'].value = globalThis.atob(core_elements['characters'].value);

    }catch(error){
        core_elements['binary-data'].value = '';
    }
}

function encode(){
    core_elements['characters'].value = globalThis.btoa(core_elements['binary-data'].value);
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
      'ui-elements': [
        'binary-data',
        'characters',
      ],
    });
}
