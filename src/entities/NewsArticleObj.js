
class NewsArticleObj {
    constructor(id, title, body, img, vid) {

        this.id = id;
        this.date = new Date().toDateString().slice(4, Date().length);
        this.title = title;
        this.body = body;
        this.img = img;
        this.vid = vid;
    }

}


export default NewsArticleObj