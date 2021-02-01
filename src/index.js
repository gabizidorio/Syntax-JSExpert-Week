// const EntityBase = require('./entityBase')

const assert = require('assert')
const Employee = require('./employee')

const GENDER = {
    male: 'male',
    female: 'female'
}

{
    const employee = new Employee ({
        name: 'Gabriela',
        gender: GENDER.female
    })

    assert.throws(() => employee.birthYear, {message: 'you must define age first!'}) // Mensagem para caso dê erro
}

{
    const employee = new Employee({
        name: 'Lucas',
        age: 20,
        gender: GENDER.male
    })

    assert.deepStrictEqual(employee.name, "Mr. Lucas")
    assert.deepStrictEqual(employee.age, undefined)
    assert.deepStrictEqual(employee.gender, undefined)
    assert.deepStrictEqual(employee.grossPay, "£5,000.40")
    
}