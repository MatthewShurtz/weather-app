function gifTemp(num) {
    if (num < 282) {
        return 'cold'
    } else if (num >= 282 && num <= 298) {
        return 'perfect';
    } else {
        return 'hot';
    }
}

export default gifTemp;