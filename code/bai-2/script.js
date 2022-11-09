const customerForm = document.querySelector('#submit')
customerForm.addEventListener('submit', () => {
    const customerName = document.getElementById('customer-name').value
    const customerId = document.getElementById('customer-id').value
    const customerTel = document.getElementById('customer-tel').value
    const customerMail = document.getElementById('customer-mail').value
    const customerType = document.getElementById('customer-type').value
    const customerMessage = document.getElementById('customer-complain').value
    const receiptId = document.getElementById('receipt-id').value
    
    const message = `
    Ho va ten: ${customerName}
    Ma the: ${customerId}
    So dien thoai: ${customerTel}
    E-mail: ${customerMail}
    ${customerType}
    Ma so hoa don: ${receiptId}
    Noi dung gop y:
    ${customerMessage}`

    alert(message)
})