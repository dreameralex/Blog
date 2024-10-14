import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { response } from 'express';
Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        movies: []
    },
    getters: {
        fetchMovies: state => state.movies,
    },
    mutations: {
        MOVIES: (state, payload) => {
            state.movies = payload;
        }
    },
    actions: {
        fetchMovies: (context, apyload) => {
            axios({
                method: 'get',
                url: '/movies',
            })
                .then((response) => {
                    context.commit("MOVIES", response.data.movies);
                });
                .catch(()=>{
                });
        }
    }
})