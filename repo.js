'use strict';

function decode(){
    try{
        core_elements.binary.value = globalThis.atob(core_elements.characters.value);

    }catch{
        core_elements.binary.value = '';
    }
}

function encode(){
    core_elements.characters.value = globalThis.btoa(core_elements.binary.value);
}

function repo_init(){
    core_repo_init({
      'events': {
        'binary': {
          'oninput': encode,
        },
        'type': {
          'onchange': encode,
        },
      },
      'title': 'BinaryDataEndecoder.htm',
      'ui-elements': [
        'binary',
        'characters',
      ],
    });
}
