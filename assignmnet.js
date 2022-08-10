//* Problem: 1  radianToDegree

//todo: ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান(radian)। তারপর সেটাকে ডিগ্রীতে(degree) কনভার্ট করে কত ডিগ্রী(degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।

function radianToDegree(radian) {
    //10rad × 180 / π = 572.958°
    let degree = radian * 180 / Math.PI;
    return degree.toFixed(2);
}

const getDegree = radianToDegree(10);
console.log(getDegree);