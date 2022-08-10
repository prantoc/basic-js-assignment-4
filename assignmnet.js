//* Problem: 1  radianToDegree
//todo: ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান(radian)। তারপর সেটাকে ডিগ্রীতে(degree) কনভার্ট করে কত ডিগ্রী(degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।

function radianToDegree(radian) {
    //note: formula - 10rad × 180 / π = 572.958°
    let degree = radian * 180 / Math.PI;
    return degree.toFixed(2);
}
const getDegree = radianToDegree(25);
// console.log(getDegree);


//*Problem: 2  isJavaScriptFile
//Todo: ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম(যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে । 

function isJavaScriptFile(String) {
    let checkFileExtsn = String.endsWith(".js");
    if (checkFileExtsn) {
        return true;
    } else {
        return false;
    }
}
const isJavascript = isJavaScriptFile('index.js');
// console.log(isJavascript);