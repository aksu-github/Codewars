/*
Instruction:

The arguments are passed as strings.
The numbers may be way very large
Answer should be returned as a string
The returned "number" should not start with zeros e.g. 0123 is invalid

*/

//  Codewars

function multiply(a, b)
{
a = a.split('');
    b = b.split('');
    let c = Array.from({ length: a.length + b.length - 1 }, (v) => 0);
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            c[i + j] += a[i] * b[j];
        }
    }
    for (let i = c.length - 1; i > 0; i--) {
    	c[i-1]+=(c[i]/10|0);
    	c[i]=c[i]%10;
    }
    while(c[0]==0) c.shift();
    return c.join('') || '0';
}