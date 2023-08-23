function ReverseSentence(str)
{
    // write code here
    
    let words = str.split(' ');
    words.reverse();
    return words.join("")
}
let str = "student. a am I";
ReverseSentence(str)