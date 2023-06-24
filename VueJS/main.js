import hder from './header.js'
import navbar from './navbar.js'
import content from './content.js'
import content_movie_detail from './content_movie_detail.js'
import foot from './footer.js'
import Movie from './movie.js'
import storage from './storage.js'

export default {
    data() {
        return {
            storage,
            ld_display: "display : none;",
            ct_display: "display : block;",
        }
    },
    methods: {
        showPage(){
            this.ld_display = "display : none";
            this.ct_display = "display : block";
        },

        showLoading(){
            this.ld_display = "display : block;";
            this.ct_display = "display : none;";
            setTimeout(this.showPage, 3000);
        },
        changeMode(){
            document.body.classList.toggle("dark-theme");
            storage.Theme_mode[0] == "text-bg-light" ? storage.Theme_mode[0] = "text-bg-secondary":storage.Theme_mode[0] = "text-bg-light";
        },
        async movieDetail(id){
            const mv = await fetch(`https://imdb-api.com/en/API/Title/${storage.key_API}/${id}`);
            const res = await mv.json();
            storage.CurMovie = new Movie(res);

            this.showLoading();

            storage.cur_content = "content_movie_detail";
        },
        async loadHPage(){
            const inTht = await fetch(`https://imdb-api.com/en/API/InTheaters/${storage.key_API}`);
            const newMv = await inTht.json()
            storage.NewMovies = newMv.items.map(obj => new Movie(obj));
            
            const mostPpl = await fetch(`https://imdb-api.com/en/API/MostPopularMovies/${storage.key_API}`);
            const pplMv = await mostPpl.json()
            storage.MostPopularMovies = pplMv.items.map(obj => new Movie(obj));

            const mostRate = await fetch(`https://imdb-api.com/en/API/Top250Movies/${storage.key_API}`);
            const rateMv = await mostRate.json();
            storage.MostRatingMovies = rateMv.items.map(obj => new Movie(obj));

            this.showLoading();

            storage.cur_content = "content";
            storage.CurMovie = null;
        }
    },
    components:{
        hder,
        navbar,
        content,
        content_movie_detail,
        foot,
    },
    template:`
    <div :class = " storage.Theme_mode[0] " class="container rounded-2"  id="header">
       <hder @change_Mode = "changeMode" />
    </div>

    <div :class = " storage.Theme_mode[0] " class="container mt-2" id="navbar" >
        <navbar @loadHomePage = "loadHPage"/>
    </div>

    <div id="loader" :style= "this.ld_display"></div>

    <div  class="container" id="content" :style="this.ct_display">
        <component :is = "storage.cur_content" @select = "movieDetail"></component>
    </div>

    <div :class = " storage.Theme_mode[0] " class="container rounded-2 mt-2" id="footer">
        <foot @change_Mode = "changeMode" />
    </div>
    `
}