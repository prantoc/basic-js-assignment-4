//* Problem: 1  radianToDegree
//todo: ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান(radian)। তারপর সেটাকে ডিগ্রীতে(degree) কনভার্ট করে কত ডিগ্রী(degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।

function radianToDegree(radian) {
    //note: formula - 10rad × 180 / π = 572.958°
    let degree = radian * (180 / Math.PI);
    return degree.toFixed(2);
}
const getDegree = radianToDegree(10);
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
// console.log(getTotalPrice);

//* Problem 4: publicBusFare
//todo: একটি বড় সংখ্যাক মানুষজন পিকনিকে যাবে। বাসের সংখ্যা মানুষের সংখার উপর নির্ভর করবে। ধরো আমাদের বাস ও মাইক্রো আছে ।প্রতিটি বাসের ক্যাপাসিটি ৫০ জন এবং প্রতিটি মাইক্রবাসের ক্যাপাসিটি ১১ জন এবং পাবলিক বাসের প্রতিটি টিকেটের মূল্য ২৫০ টাকা করে। এখন তোমাকে একটি ফাংশন লিখতে হবে যার নাম হবে publicBusFare যেটি প্যরামিটার হিসেবে একটা সংখ্যা(কতজন যাবে)  নিবে । মোট কতটাকা পাবলিক বাস ফেয়ারে যাবে সেটি তোমাকে রিটার্ন করবে ।

//todo: উদাহরণ১ঃ
//todo: যদি ১১৭ জন মানুষ পিকনিকে যায় তাহলে আমাদের বাস লাগবে ২ টি ও মাইক্রোবাস লাগবে ১ টি । বাকি মানুষ পাবলিক বাসে যাবে। এই কয়জন মানুষগুলোর জন্য পাবলিক বাসের ভাড়া মোট কত হবে সেটি রিটার্ন করতে হবে।

//todo: উদাহরণ২ঃ
//todo: যদি ২৩৫ জন মানুষ পিকনিকে যায় তাহলে আমাদের বাস লাগবে ৪ টি ও মাইক্রোবাস লাগবে ৩ টি এবং বাকি মানুষ পাবলিক বাসে যাবে। এই কয়জন মানুষগুলোর জন্য পাবলিক বাসের ভাড়া মোট কত হবে সেটি রিটার্ন করতে হবে।

function publicBusFare(p) {
    const bc = 50;
    const mc = 11;
    const pbfpp = 250;

    if (p >= 50) {
        /**
         * let plfmb = p % bc; //note: plfmb = person left for microbus
         * let plfpt = plfmb % mc; //plfpt = person left for public transport
         * let tpbf = plfpt * pbfpp;
         *  **/
        let tpbf = ((p % bc) % mc) * pbfpp;
        return tpbf;
    } else if (p >= 11) {
        /**
         * let plfpt = p % mc; //plfpt = person left for public transport
         * let tpbf = plfpt * pbfpp;
        **/
        let tpbf = (p % mc) * pbfpp;
        return tpbf;
    } else {
        let tpbf = p * pbfpp;
        return tpbf;
    }
}

const totalBusFare = publicBusFare(49);
console.log(totalBusFare);