'use strict';

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
