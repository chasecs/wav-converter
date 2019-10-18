
var wavConverter = require('..');
var fs = require('fs')
var path = require('path')
var pcmData = fs.readFileSync(path.resolve(__dirname, './16k.pcm'))
var wavData = wavConverter.encodeWav(pcmData, {
    numChannels: 1,
    sampleRate: 16000,
    byteRate: 16
})

fs.writeFileSync(path.resolve(__dirname, './16k.wav'), wavData)