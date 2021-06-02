const controller = {
    index: (req, res, next) => res.render('index', {
        title: 'Página inicial',
        subtitle: 'Você por aqui!'
    })
}

module.exports = controller