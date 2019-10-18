const wavConverter = require('..');
const fs = require('fs')
const path = require('path')
const pcmData = fs.readFileSync(path.resolve(__dirname, './16k.pcm'))
const wavData = wavConverter.encodeWav(pcmData, {
    numChannels: 1,
    sampleRate: 16000,
    byteRate: 16
})

fs.writeFileSync(path.resolve(__dirname, './16k-binary.wav'), wavData)