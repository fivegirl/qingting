/*
 * @Author: your name
 * @Date: 2019-11-14 15:33:22
 * @LastEditTime: 2019-11-15 11:25:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsonservere:\三阶段\第三阶段\workspace\qingting\src\store\index.js
 */
import Vue from 'vue';
import VueX from 'vueX';
import axios from 'axios';

Vue.use(VueX)

let store = new VueX.Store({
    state:{
        currMusicindex:0,
        books:[],
        playstate:true,
        currbooks:[],
        currMusichref:''
    },
    mutations:{
        getDetail(state,books){
            state.books = books; 
        },
        currmusic(state,index1,play){
            state.currMusicindex = index1.index;
            state.playstate = play;
            state.currMusichref = index1.currMusichref;
            console.log(index1.index)
            console.log(state.currMusichref);
        },
        currmusichplay(state,currmusichplaystate){
            state.playstate = currmusichplaystate;
        },
        getmulu(state,mulu){
            state.currbooks = mulu;
        }
    },
    actions:{
        getDetail(context){
            axios.get('/currbooks')
            .then((res)=>{
                context.commit('getDetail',res.data);
            }) 
            .catch((err)=>{
                console.log(err);
            })
        },
        getmulu(context){
            axios('./mulu')
            .then(res=>{
                // this.mulus = res.data;
                context.commit('getmulu',res.data);
            })
            .catch(err=>{
                console.log(err);
            });
        }
    }
})

export default  store;