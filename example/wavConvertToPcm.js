
var wavConverter = require('..');
var fs = require('fs')
var path = require('path')
var wavData = fs.readFileSync(path.resolve(__dirname, './16k.wav'))
var pcmData = wavConverter.decodeWav(wavData)

fs.writeFileSync(path.resolve(__dirname, './16k-second.pcm'), pcmData)