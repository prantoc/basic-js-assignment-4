//* Problem: 1  radianToDegree
//todo: ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান(radian)। তারপর সেটাকে ডিগ্রীতে(degree) কনভার্ট করে কত ডিগ্রী(degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।

function radianToDegree(radian) {
    if (typeof (radian) === 'number') { //check the input type is number or not
        let degree = radian * (180 / Math.PI);
        return degree.toFixed(2); //return the value with 2 decimal 
    } else {
        return 'Please provide a valid input'; // show erroe message
    }

}
const getDegree = radianToDegree(10);
// console.log(getDegree);

//* Problem: 2  isJavaScriptFile
//Todo: ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম(যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে । 

function isJavaScriptFile(fileName) {
    if (typeof (fileName) === 'string') { //check the input type is string or not
        let checkFileExtsn = fileName.endsWith(".js"); // checkFileExtsn = check file extension
        if (checkFileExtsn) { // check the file name is 
            return true;
        } else {
            return false;
        }
    } else {
        return 'Please provide a valid input'; // show erroe message
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
    if (typeof (diesel) === 'number' && typeof (petrol) === 'number' && typeof (octane) === 'number') { //check the input type is number or not
        const dslTtlVal = diesel * 114; //dslTtlVal = diesel total value
        const ptrlTtlVal = petrol * 130; //ptrlTtlVal = petrol total value
        const octnTtlVal = octane * 135; //octnTtlVal = octane total value
        const getTotalPrice = dslTtlVal + ptrlTtlVal + octnTtlVal;
        return getTotalPrice;
    } else {
        return 'Please provide a valid input'; // show erroe message
    }
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
    const bC = 50; //bC = bus capacity
    const mBC = 11; //mBC = micro bus capacity
    const pBF = 250; //pBF = public bus fare
    if (typeof (p) === 'number') { //check the input type is number or not
        if (p >= 50) {
            return ((p % bC) % mBC) * pBF;
        } else if (p >= 11) {
            return (p % mBC) * pBF;
        } else {
            return p * pBF;
        }
    } else {
        return 'Please provide a valid input'; // show erroe message
    }
}

const totalBusFare = publicBusFare(129);
console.log(totalBusFare);
//* Problem 5: isBestFriend
//todo: তোমাকে একটি ফাংশন লিখতে হবে isBestFriend যেটি প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে । তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা । যদি বেস্ট ফ্রেন্ড হয় তাহলে true রিটার্ন করবে, না হলে false রিটার্ন করবে ।


function isBestFriend(p1, p2) {
    //p1 = person1 & p2 = person2
    if (typeof (p1) === 'object' && typeof (p2) === 'object') { //check the input type is object or not
        //check best friend or not
        if (p1.name === p2.friend && p1.friend === p2.name) {
            return true;
        } else {
            return false;
        }
    } else {
        return 'Please provide a valid input'; // show erroe message
    }
}

let bestFrndCheck = isBestFriend({ name: 'abul', friend: 'babul' }, { name: 'babul', friend: 'abul' });
console.log(bestFrndCheck);