<template>
    <div class="main-box">


<!--        <el-carousel height="200px" direction="vertical" :autoplay="true">-->
<!--            <el-carousel-item v-for="item in 3" :key="item">-->
<!--                <h3 class="medium">{{ item }}</h3>-->
<!--            </el-carousel-item>-->
<!--        </el-carousel>-->



        <div class="title1">
            <span>去哪儿玩</span>

        </div>



<!--        <div class="hotCity_box">-->
<!--            <div v-for="(item,key) in hotcityData" :key="key">{{item}}</div>-->
<!--        </div>-->

<!--        <div class="house_box">-->
<!--            <div v-for="(item,key) in houseData" :key="key">-->
<!--                <div>-->
<!--                    <img :src="item.img">-->
<!--                </div>-->
<!--                <div>{{item.name}}</div>-->
<!--            </div>-->
<!--        </div>-->

        <div class="title2">热门旅游地</div>

    </div>
</template>

<script>

    export default {
        name: "MainContent",
        data(){
            return {
                hotcityData:["成都","杭州","大理","西安","北京"],
                houseData:[
                    {
                        img:require('@/assets/images/house1.png'),
                        name:"「oneday·成都」半岛 独立阳台原木风套房",
                        price:128,
                        place:""
                    }
                ]
            }
        },


        mounted() {
            // this.initMap();
        },
        methods:{


        }
    }
</script>

<style scoped lang="scss">
    .main-box {
        width: 1100px;
        height: 1200px;
        background-color: rgba(255,165,0,0.5);
        margin: 0 auto;
    }
    .hotCity_box {
        width: 1100px;
        height: 50px;
        display: flex;
        >div {
            width: 100px;
            height: 50px;
            border: 1px solid #ccc;
        }
    }

    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

</style>