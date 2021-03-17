// Import models
const NewsModel = require('../Models/newsModel');

exports.admin = async (req, res) => {
    const news = await NewsModel.find();

    res.render('admin', { 
                            layout: 'admin', 
                            posts: news, 
                            l: 1, 
                            updatingPost: null
                        }
    );
}

exports.adminPost = async (req, res) => {
    const news = new NewsModel({
        image: req.body.image,
        description: req.body.description,
        body: req.body.body
    });

    const savedNews = await news.save();

    res.redirect('/admin');
}

exports.updateGet = async (req, res) => {
    const news = await NewsModel.find();

    const updatingPost = await NewsModel.findById(req.params.id);

    res.render('admin', { 
                            layout: 'admin', 
                            posts: news, 
                            l: 1, 
                            updatingPost: updatingPost
                        }
    );
}


exports.updatePost = async (req, res) => {

    const updatedPost = await NewsModel.findByIdAndUpdate(
        req.params.id,
        { $set: {
            image: req.body.image,
            description: req.body.description,
            body: req.body.body
        }},
        (err, result) => {
            if(err){
                console.log(err);
            }
            else{
                console.log(result);
            }
        });

    res.redirect('/admin');
}

exports.delete = async (req, res) => {

    try{
        const deleted = await NewsModel.findOneAndDelete({_id: req.params.id });
    }

    catch(e){
        console.log(e);
    }

    res.redirect('/admin');
}


