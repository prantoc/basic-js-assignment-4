//* Problem: 1  radianToDegree
//todo: ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান(radian)। তারপর সেটাকে ডিগ্রীতে(degree) কনভার্ট করে কত ডিগ্রী(degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।

function radianToDegree(radian) {
    //note: formula - 10rad × 180 / π = 572.958°
    let degree = radian * 180 / Math.PI;
    return degree.toFixed(2);
}
const getDegree = radianToDegree(25);
// console.log(getDegree);


//* Problem: 2  isJavaScriptFile
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


//* Problem 3: oilPrice

//todo: ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে।
//todo: প্রতি লিটার ডিজেলের এর দাম – 114 টাকা
//todo: প্রতি লিটার পেট্রোল এর দাম – 130 টাকা
//todo: প্রতি লিটার অকটেনের এর দাম – 135 টাকা
//todo: এখন সে যদি বিভিন্ন লিটারের ডিজেল, পেট্রোল, অকটেনের অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে হলো সেই সংখ্যা রিটার্ন করতে হবে। 

function oilPrice(diesel, petrol, octane) {
    const dslTtlVal = diesel * 114;
    const ptrlTtlVal = petrol * 130;
    const octnTtlVal = octane * 135;
    const getTotalPrice = dslTtlVal + ptrlTtlVal + octnTtlVal;
    return getTotalPrice;
}

const getTotalPrice = oilPrice(1, 1, 1);
console.log(getTotalPrice);