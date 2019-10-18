(function () {

    'use strict'

    const assert = require('assert')
    const wavConverter = require('.')

    describe('add wav header', function () {
        const len = 30
        const originBuf = Buffer.alloc(len)

        it('header ok', function () {
            const newBuf = wavConverter.encodeWav(originBuf, {
                numChannels: 2,
                sampleRate: 12000,
                byteRate: 8
            })
            assert.equal(newBuf.readUInt32LE(4), len)
            assert.equal(newBuf.readUInt8(22), 2)
            assert.equal(newBuf.readUInt32LE(24), 12000)
            assert.equal(newBuf.readUInt32LE(28), 8)
            assert.equal(newBuf.byteLength, len + 44)
        })

    })

}())
