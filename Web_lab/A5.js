// Function will implement Caesar Cipher to
// encrypt / decrypt the msg by shifting the letters
// of the message acording to the key
function encrypt(msg, key)
{
    var encMsg = "";

    for(var i = 0; i < msg.length; i++)
    {
        var code = msg.charCodeAt(i);

        // Encrypt only letters in 'A' ... 'Z' interval
        if (code >= 97 && code <= 97 + 26 - 1)
        {
            code -= 97;
            code = (code + key) % 26;
            code += 97;
        }

        encMsg += String.fromCharCode(code);
    }

    return encMsg;
}
let txt = prompt("Enter the text to encrypt" )
let shift = Number(prompt('Enter the shift value'))
alert('Cipher Text : '+encrypt(txt,shift));