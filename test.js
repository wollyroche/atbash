const Atbash = require('./solution.js')

let Basher = new Atbash('abcdefghijklmnopqrstuvwxyz', 'oephjizkxdawubnytvfglqsrcm')

describe('Check Atbash@decrypt function is working as intended', () => {
    test('Throws exception on non-string inputs', () => {
        expect(
            () => { Basher.decrypt(['not', 'a', 'string']) }
        )
        .toThrow()

        expect(
            () => { Basher.decrypt(100) }
        )
        .toThrow()

        expect(
            () => { Basher.decrypt(/\$/) }
        )
        .toThrow()

        expect(
            () => { Basher.decrypt({key:'value'}) }
        )
        .toThrow()

        expect(
            () => { Basher.decrypt(new Error()) }
        )
        .toThrow()
    })

    test('Output is a string', () => {
        expect(
            typeof Basher.decrypt('jdksfjsdkfl')
        )
        .toBe('string')
    })

    test('Handles special characters and spaces', () => {
        expect(
            Basher.decrypt('!&#$*($#*$()   #$#@($_)#@)')
        )
        .toBe('!&#$*($#*$()   #$#@($_)#@)')
    })

    test('Handles spaces at beginning and end', () => {
        expect(
            Basher.decrypt('     !&#$*($#*$()   #$#@($_)#@)     ')
        )
        .toBe('     !&#$*($#*$()   #$#@($_)#@)     ')
    })

    test('Decrypts custom phrase successfully', () => {
        expect(
            Basher.decrypt('flpk of sj ovj, cnl sxww ej')
        )
        .toBe('such as we are, you will be')
    })

    test('Decrypts given challenge text successfully', () => {
        expect(
            Basher.decrypt('knlfgnb, sj koqj o yvnewju')
        )
        .toBe('houston, we have a problem')
    })
})
