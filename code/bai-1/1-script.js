const submitButton = document.querySelector('#submit')
submitButton.addEventListener('click', () => {
    const numberA = document.getElementById('numberA').value
    const numberB = document.getElementById('numberB').value

    const result = - (numberB / numberA)

    document.getElementById('result').innerText = `Nghiem x = ${result}`
})