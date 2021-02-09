module.exports = reverse = (n) => +[...n.toString()]
        .filter(x => +x == x)
        .reverse()
        .reduce((acc, cur) => acc + cur)
