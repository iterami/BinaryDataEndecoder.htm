'use strict';

function repo_init(){
    core_repo_init({
      'title': 'BinaryDataEndecoder.htm',
    });

    document.getElementById('binary-data').oninput = encode;
    document.getElementById('characters').oninput = decode;
    document.getElementById('type').onchange = encode;
}
