import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        baseMap:null,
        //控制案件详情的显示、隐藏
        clickYishouliMarker:false,
        //控制专员（网格长、专职网格长、专业网格长、党员）的详情的显示与隐藏
        clickZhuanyuanMarker:false,
        //专员详情的内容
        ZhuanyuanMsg: {
            name: "周春荣",
            job: "专职网格员",
            position: "成都市武侯区西部智谷D区",
            phone: "15283555555",
            ssxs: "楚雄市",
            ssxz: "龙门镇",
            sssq: "江陵社区",
            sscxz: "吴新村（编号）",
            ssjcwg: "WJ0123001"
        },
        showPage:false,  //控制五大系统导航页面
        //控制顶部的显示
        TopStyle:true,
        //现在改为记录相对page的x和y值，让弹窗靠近扎点显示
        XQposition:[0,0],
        num:1,//记录2,3级考试排名的变量

    },
    mutations: {
        initMap(state,map){
            state.baseMap = map;
        },
        show(state) {//控制案件详情的显示
            state.clickYishouliMarker = true;
        },
        hide(state) {//控制案件详情的隐藏
            state.clickYishouliMarker = false;
        },
        ZhuanyuanXQShow(state) {//专员详情显示
            state.clickZhuanyuanMarker=true;
        },
        ZhuanyuanXQHide(state) {//专员详情隐藏
            state.clickZhuanyuanMarker=false;
        },
        ZhuanyuanMsgChange(state,msg){//点击各种专员
            state.ZhuanyuanMsg.job=msg;
        },
        ChangeTopStyle(state,msg){//改变顶部的显示隐藏
            state.TopStyle = msg;
        },
        changeNum(state,num){
            state.num = num
        },
        changXQposition(state,position){//改变网格员详情弹窗位置
            state.XQposition = position
        }
    },
    actions: {

    },
    getters:{
        getMap(state){
            return state.baseMap
        }
    }
})
