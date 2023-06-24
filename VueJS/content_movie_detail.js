import storage from "./storage.js"

export default{
    data() {
        return {
            storage,
        }
    },
    methods: {

    },  
    template:`
    <div class="row mt-2 text-center">
        <img :src="storage.CurMovie.image" alt="...">
        <h1>{{storage.CurMovie.title}}</h1>
        <h2>{{storage.CurMovie.year}}</h2>
        <h3>Director: {{storage.CurMovie.directors}}</h3>
        <h3>Stars: {{storage.CurMovie.stars}}</h3>
        <p>Genres: {{storage.CurMovie.genres}}</p>
        <p>Plot: {{storage.CurMovie.plot}}</p>
    </div>
    `
}