exports.index = function (req, res) {
    res.send('Главня страница')
},
exports.about = function (res, req) {
    res.send('О сайте')
}