const randomise = (inp) => {
    if (inp.length < 1) return {};
    const item = inp[Math.floor(Math.random() * inp.length)];
    return item;
}

module.exports = { randomise };