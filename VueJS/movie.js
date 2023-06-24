export default class{
    constructor(obj){
        this.id = obj.id;
        this.title = obj.title;
        this.fullTitle = obj.fullTitle;
        this.year = obj.year;
        this.releaseState = obj.releaseState;
        this.image = obj.image;
        this.runtimeMins = obj.runtimeMins;
        this.runtimeStr = obj.runtimeStr;
        this.plot = obj.plot;
        this.contentRating = obj.contentRating;
        this.imDbRating = obj.imDbRating;
        this.imDbRatingCount = obj.imDbRatingCount;
        this.metacriticRating = obj.metacriticRating;
        this.genres = obj.genres;
        this.genreList = obj.genreList;
        this.directors = obj.directors;
        this.directorList = obj.directorList;
        this.stars = obj.stars;
        this.starList = obj.starList;
        this.rank = obj.rank;
        this.rankUpDown = obj.rankUpDown;
        this.crew = obj.crew;
    }
}