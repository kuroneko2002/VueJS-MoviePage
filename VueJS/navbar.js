import storage from "./storage.js";

export default {
    data() {
        return {
            storage,
        }
    },
    methods: {
        
    },
    template:`
    <div class="row">
        <nav class="navbar rounded-2">
            <div class="container-fluid">
                <a class="navbar-brand" @click = "$emit('loadHomePage')">Home</a>
                <div class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success">Search</button>
                </div>
            </div>
        </nav>
    </div>
    `
}