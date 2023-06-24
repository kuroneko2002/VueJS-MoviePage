import storage from "./storage.js";

export default {
    data() {
        return {
            storage,
        }
    },
    methods: {
        changeMode() {
            storage.Theme_mode[1] == "Dark" ? storage.Theme_mode[1] = "Light" : storage.Theme_mode[1] = "Dark";
            this.$emit('change_Mode');
        }
    },
    template: `
    <div class="row align-items-center">
        <div class="col-3">
            &copy Truong Ngoc Huy
        </div>
        <div class="col-6 text-center">
            Movie Home Page
        </div>
        <div class="col-3">
            <div class="container">
                <div class="row">
                    <span class="text-end" @click ="changeMode">{{storage.Theme_mode[1]}}</span>
                </div>
            </div>
        </div>
    </div>
    `
}