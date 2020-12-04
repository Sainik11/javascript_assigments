let number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

// document.write("<br>")


for (let i = 1; i <= number; i++) {
    document.write("<br/>")
    document.write(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
