class Atbash {

    constructor( constant, cipher )
    {
        this.constant = constant.split('')
        this.cipher = cipher.split('')

        this.bind()
    }

    /**
     *
     * Maps each cipher character against it's constant pair.
     * These values are paired in a regular javascript object for quick and easy access
     * via the regular object[key] retrieval method.
     *
     */
    bind()
    {
        let map = {}

        this.cipher.forEach((val, index) => {
            map[val] = this.constant[index]
        })

        this.map = map
    }

    /**
     * 1. Splits the string into an array so it's easier to work with
     * 2. a) Maps the encrypted characters against the constant alphabetical values
     * 2. b) If the value is not in the constant (e.g, special characters and spaces), keeps default value
     * 3. Rejoins the string
     */
    decrypt( val )
    {
        if(typeof val !== 'string') throw new Error("IncorrectDataTypeException")

        return val.split('').map(v => {
            return (v in this.map) ? this.map[v] : v
        }).join('')
    }

}

module.exports = Atbash
