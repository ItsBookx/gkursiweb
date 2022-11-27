function isEmpty(value) {
    if(value == null || typeof value == 'undefined' || value=='') return true;
    console.info('VARCHECK: '+value)
    return false
}
function sendForm() {
    console.info('SUBMIT-START')
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    if(isEmpty(name)==true || isEmpty(email)==true || isEmpty(message)==true) {
        document.getElementById('warn').innerHTML = '<b class="msg">Please fill out the form!</b>'
        console.warn('empty strings');
        console.info('SUBMIT-END-IF');
        return false;
    }
    else {
        para = "ENTRY - Name: " + name + ' email: ' + email + ' message: ' + message;
        console.info('SUBMIT-END-ELSE');
        console.info('Redirecting...')
        window.location.replace('msg?name='+name+'&email='+email+'&message='+message+'&src=contact.html');
        return true;
    }       
}
