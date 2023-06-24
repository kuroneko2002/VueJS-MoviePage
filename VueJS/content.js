import storage from "./storage.js"

export default{
    data() {
        return {
            storage,
        }
    },
    methods: {
        Sum(a, b)
        {
            return a * 3 + b;
        }
    },  
    template:`
    <div class="row mt-2">
        <div id="NewMovies" class="carousel slide" data-bs-ride="false">
            <div class="carousel-indicators">
            
                <button type="button" data-bs-target="#NewMovies" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="0"></button>
                
                <button v-for="n in 4" type="button" data-bs-target="#NewMovies" :data-bs-slide-to="n"
                    :aria-label="n"></button>
                
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="text-center">
                        <img :src="storage.NewMovies[0].image" style="width: 350px ; height: 500px" alt="..." @click = "$emit('select', storage.NewMovies[0].id)">
                    </div>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>{{storage.NewMovies[0].fullTitle}}</h5>
                        <p>Length: {{storage.NewMovies[0].runtimeStr}}</p>
                        <p>Genres: {{storage.NewMovies[0].genres}}</p>
                        <p>imDb Rating: {{storage.NewMovies[0].imDbRating}}</p>
                    </div>
                </div>
                <div v-for = "n in 4" class="carousel-item">
                    <div class="text-center">
                        <img :src="storage.NewMovies[n].image" style="width: 350px ; height: 500px" alt="..." @click = "$emit('select', storage.NewMovies[n].id)">
                    </div>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>{{storage.NewMovies[n].fullTitle}}</h5>
                        <p>Length: {{storage.NewMovies[n].runtimeStr}}</p>
                        <p>Genres: {{storage.NewMovies[n].genres}}</p>
                        <p>imDb Rating: {{storage.NewMovies[n].imDbRating}}</p>
                    </div>
                </div>
                
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#NewMovies" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#NewMovies" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>

    <div class="row mt-2">
        Most Popular
    </div>

    <div class="row mt-2">
        <div id="MPopularMovies" class="carousel slide carousel-multi-item" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#MPopularMovies" data-bs-slide-to="0" class="active"
                    aria-current="true" :aria-label="0"></button>
                <button v-for = "n in 4" type="button" data-bs-target="#MPopularMovies" :data-bs-slide-to="n"
                    :aria-label="n"></button>
                
            </div>
            <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">

                    <div class="row">
                        <div class="col-md-4 text-end">
                            <img :src="storage.MostPopularMovies[0].image" style="width: 250px ; height: 300px" alt="..." @click = "$emit('select', storage.MostPopularMovies[0].id)">
                        </div>

                        <div class="col-md-4 clearfix d-none d-md-block text-center">
                            <img :src="storage.MostPopularMovies[1].image" style="width: 250px ; height: 300px" alt="..." @click = "$emit('select', storage.MostPopularMovies[1].id)">

                        </div>

                        <div class="col-md-4 clearfix d-none d-md-block text-start">
                            <img :src="storage.MostPopularMovies[2].image" style="width: 250px ; height: 300px" alt="..." @click = "$emit('select', storage.MostPopularMovies[2].id)">
                        </div>
                    </div>
                </div>

                <div v-for = "i in 4" class="carousel-item">

                    <div class="row">
                        <div class="col-md-4 text-end">
                            <img :src="storage.MostPopularMovies[Sum(i,0)].image" style="width: 250px ; height: 300px" alt="..." @click = "$emit('select', storage.MostPopularMovies[Sum(i,0)].id)">
                        </div>

                        <div class="col-md-4 clearfix d-none d-md-block text-center">
                            <img :src="storage.MostPopularMovies[Sum(i,1)].image" style="width: 250px ; height: 300px" alt="..." @click = "$emit('select', storage.MostPopularMovies[Sum(i,1)].id)">

                        </div>

                        <div class="col-md-4 clearfix d-none d-md-block text-start">
                            <img :src="storage.MostPopularMovies[Sum(i,2)].image" style="width: 250px ; height: 300px" alt="..." @click = "$emit('select', storage.MostPopularMovies[Sum(i,2)].id)">
                        </div>
                    </div>
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#MPopularMovies"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#MPopularMovies"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
    <div class="row mt-2">
        Top Rating
    </div>

    <div class="row mt-2">
        <div id="MostRatingMovies" class="carousel slide carousel-multi-item" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#MostRatingMovies" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="0"></button>
                <button v-for = "n in 4" type="button" data-bs-target="#MostRatingMovies" :data-bs-slide-to="n"
                    :aria-label="n"></button>
            </div>
            <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">

                    <div class="row">
                        <div class="col-md-4 text-end">
                            <img :src="storage.MostRatingMovies[0].image" style="width: 250px ; height: 300px" alt="..." @click = "$emit('select', storage.MostRatingMovies[0].id)">
                        </div>

                        <div class="col-md-4 clearfix d-none d-md-block text-center">
                            <img :src="storage.MostRatingMovies[1].image" style="width: 250px ; height: 300px" alt="..." @click = "$emit('select', storage.MostRatingMovies[1].id)">

                        </div>

                        <div class="col-md-4 clearfix d-none d-md-block text-start">
                            <img :src="storage.MostRatingMovies[2].image" style="width: 250px ; height: 300px" alt="..." @click = "$emit('select', storage.MostRatingMovies[2].id)">
                        </div>
                    </div>
                </div>

                <div v-for = "i in 4" class="carousel-item">

                    <div class="row">
                        <div class="col-md-4 text-end">
                            <img :src="storage.MostRatingMovies[Sum(i,0)].image" style="width: 250px ; height: 300px" alt="..." @click = "$emit('select', storage.MostRatingMovies[Sum(i,0)].id)">
                        </div>

                        <div class="col-md-4 clearfix d-none d-md-block text-center">
                            <img :src="storage.MostRatingMovies[Sum(i,1)].image" style="width: 250px ; height: 300px" alt="..." @click = "$emit('select', storage.MostRatingMovies[Sum(i,1)].id)">

                        </div>

                        <div class="col-md-4 clearfix d-none d-md-block text-start">
                            <img :src="storage.MostRatingMovies[Sum(i,2)].image" style="width: 250px ; height: 300px" alt="..." @click = "$emit('select', storage.MostRatingMovies[Sum(i,2)].id)">
                        </div>
                    </div>
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#MostRatingMovies"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#MostRatingMovies"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
    `
}