function publicBusFare(p) {
    const a = 50;
    const b = 11;
    const c = 250;

    if (p >= 50) {
        return ((p % a) % b) * c;
    } else if (p >= 11) {
        return (p % b) * c;
    } else {
        return p * c;
    }
}
console.log(publicBusFare(10));