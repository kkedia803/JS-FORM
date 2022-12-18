function validateForm() {
    let x = document.forms["myForm"]["myName"].value;
    if (x == null) {
        alert("Name must be filled out");
        return false;
    }
    else{
        alert("hello");
    }
}