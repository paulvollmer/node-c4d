# node-c4d [![Dependency Status](https://gemnasium.com/WrongEntertainment/node-c4d-cli.png)](https://gemnasium.com/WrongEntertainment/node-c4d)

Commandline Interface for MAXON CINEMA 4D


## Install

    npm install -g c4d


## Terminal usage

    c4d -r /path/to/file.c4d


## Programmatically usage

    var c4d = require('c4d-cli');
    c4d.render({
      filepath: '/path/to/file.c4d',
      frame: '0,20'
    });


## CINEMA 4D

Tested with CINEMA 4D R14
