var cl = console.log;
// CRUD >> Creat, read, update, delete
const stdForm = document.getElementById("stdForm");
const fnameControl = document.getElementById("fname");
const lnameControl = document.getElementById("lname");
const emailControl = document.getElementById("email");
const contactControl = document.getElementById('contact');
let stdArray = [
    {
        fname: "qwer",
        lname: "qwer",
        email: "qwer",
        contact: "123456"
    },
    {
        fname: "rtyui",
        lname: "ertyu",
        email: "ertu",
        contact: "34567"
    }
];
const onStdSubmit = (eve) => {
    eve.preventDefault();
    // cl(`Submitted`)
    let obj = {
        fname: fnameControl.value,
        lname: lnameControl.value,
        email: emailControl.value,
        contact: contactControl.value
    }
    stdArray.push(obj);
    cl(stdArray);
    stdForm.reset();
}

stdForm.addEventListener("submit", onStdSubmit)