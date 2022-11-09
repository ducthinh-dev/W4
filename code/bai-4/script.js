const form = document.getElementById('form')
const weight = document.getElementById('weight')
const height = document.getElementById('height')
const age = document.getElementById('age')
const footer = document.querySelector('.footer')

form.addEventListener('submit', e => {
    e.preventDefault()
    checkInputs()
})

function checkInputs() {
    const bmi = weight.value / (height.value) ** 2
    const info = {
        weight: weight.value,
        height: height.value,
        age: age.value,
        bmi: bmi.toFixed(2),
        bmiRank: checkBMI(bmi)
    }
    const advice = getAdvice(info.age, info.bmiRank)

    var flag = true
    if (info.height === '') {
        setErrorFor(height, 'Khong the de trong')
        flag = false
    } else {
        setSuccessFor(height)
    }
    if (info.weight === '') {
        setErrorFor(weight, 'Khong the de trong')
        flag = false
    } else {
        setSuccessFor(weight)
    }

    if (flag) {
        const result = `
        <h2>Ket qua</h2>
        <div class="result">
            <div class="bmi">BMI: ${info.bmi}</div>
            <div class="status">${info.bmiRank}</div>
            <div class="advice">${advice}</div>
        </div>`
        footer.className = 'footer visible'
        footer.innerHTML = result
    }
}

function setErrorFor(element, message) {
    const formControl = element.parentElement
    const error = formControl.querySelector('small')
    formControl.className = 'form-control error'
    error.innerText = message
}

function setSuccessFor(element, message) {
    const formControl = element.parentElement
    formControl.className = 'form-control'
}

function checkBMI(bmi) {
    if (bmi < 18.5) {
        return 'underweight'
    } else if (bmi < 25) {
        return 'healthy weight'
    } else if (bmi < 30) {
        return 'overweight'
    } else if (bmi < 35) {
        return 'obesity 1'
    } else if (bmi < 40) {
        return 'obesity 2'
    } else {
        return 'obesity 3'
    }
}

function getAdvice(age, obesityType) {
    switch (age) {
        case 'mid-age':
            if (obesityType === 'obesity 1') return 'Kham dinh ky'
            if (obesityType === 'obesity 2') return 'Tap the duc thuong xuyen'
        case 'elder':
            if (obesityType === 'obesity 2') return 'Tap the duc thuong xuyen'
            if (obesityType === 'obesity 3') return 'Han che an mo dong vat'
        default:
            return 'Khong co loi khuyen'
    }

}