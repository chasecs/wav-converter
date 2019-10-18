# wav-converter

a package for encoding PCM to Wav audio and decoding Wav to PCM

# Installation

```
npm i --save wav-converter
```

# Usage

```js
var wavConverter = require('wav-converter')
var fs = require('fs')
var path = require('path')
var pcmData = fs.readFileSync(path.resolve(__dirname, './16k.pcm'))
var wavData = wavConverter.encodeWav(pcmData, {
    numChannels: 1,
    sampleRate: 16000,
    byteRate: 16
})

fs.writeFileSync(path.resolve(__dirname, './16k.wav'), wavData)

```