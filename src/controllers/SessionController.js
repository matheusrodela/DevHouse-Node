class SessionController{

    store(req, res){
        return res.json({message: 'minha API'})
    }
    //O método store foi criado e agora pode ser utilizado.

}

export default new SessionController();