// Import models
const NewsModel = require('../Models/newsModel');


exports.main = async (req, res) => {
    const news = await NewsModel.find();

    const lastPost = news.slice(-1);
    const latestPosts = news.slice(1, 7);
    const posts = news.slice(7, 11);

    res.render('main', {
                        title: "Main",
                        lastPost: lastPost,
                        latestPosts: latestPosts,
                        posts: posts 
                    }
    );
}


exports.news = async (req, res) => {
    const news = await NewsModel.find();

    res.render('news', { title: 'News', posts: news.reverse() });
}


exports.readNews = async (req, res) => {
    const news = await NewsModel.findById(req.params.id);

    res.render('readNews', { title: 'News', post: news });
}