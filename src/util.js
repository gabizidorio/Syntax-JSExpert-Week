class Util {
    static #defaultFormat = Intl.NumberFormat("en", {
        currency: "GBP",
        style: "currency"
    })

    static formatCurrency(value) {
        return this.#defaultFormat.format(value)
    }
}

module.exports = Util