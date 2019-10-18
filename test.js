(function () {

    'use strict'

    const assert = require('assert')
    const wavConverter = require('.')

    describe('add wav header', function () {
        
        it('header ok with buffer data', function () {
            const len = 30
            const originBuf = Buffer.alloc(len)

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

        it('header ok with binary data', function () {
            const len = 30
            const originBuf = Buffer.alloc(len).toString('binary')

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

    describe('remove wav header', function () {

        it('remove header with buffer data ok', function () {
            const len = 100
            const originBuf = Buffer.alloc(len)

            const newBuf = wavConverter.decodeWav(originBuf)
            assert.equal(newBuf.byteLength, len - 44)
        })

        it('remove header with binary data ok', function () {
            const len = 100
            const originBuf = Buffer.alloc(len).toString('binary')

            const newBuf = wavConverter.decodeWav(originBuf)
            assert.equal(newBuf.byteLength, len - 44)
        })

    })

}())
