import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import uuidv1 from 'uuid/v1';

Vue.use(Vuex)

import { API_ENDPOINT } from './config';
let temp = (`${API_ENDPOINT}/peek`);

export default new Vuex.Store({
    
    state: {
        events: [],
        basicToken: false
    },
    mutations: {
        submitBasicToken: function( state, token ) {
            state.basicToken = `basic ${token}`;
        },
    },
    actions: {
        createEvent: function( { commit, state }, calendarEvent ) { 
          calendarEvent.id = uuidv1();
          return axios({
            method: 'POST',
            url: `${API_ENDPOINT}/create/${calendarEvent.id}`,
            data: {'data': [calendarEvent]},
            headers: { authorization: state.basicToken }

          });
        },
        // checkBasicToken: function( { commit, state }, token ) {
        //   return axios({
        //     method: 'GET',
        //     url: `${API_ENDPOINT}/check`,
        //     headers: { authorization: `basic ${token}` }
        //   });
        // },
        getList: function( { commit, state } ) {
            return axios({
            method: 'GET',
            url: `${API_ENDPOINT}/peek`,
            headers: { authorization: state.basicToken }
          }).then( res => {
            commit( 'updateList', res.data );
          });
        }
    }
})
