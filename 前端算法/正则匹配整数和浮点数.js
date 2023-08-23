//s字符串
function isNumeric(s)
{
    var reg = /^[\+-]?\d*\.?\d+(e[\+-]?\d+)?$/i;
    return reg.test(s);
}

console.log(isNumeric(123));
