<template>
    <div class="headnav-box">
        <div class="logo">
            <div>艾</div>
            <div>阮</div>
            <div>家</div>
        </div>

        <div class="welcome-box">
<!--            <div class="welcome">你回来啦</div>-->

            <div class="welcomeImg">
                <img :src="require('@/assets/images/welcome.png')">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomePage"
    }
</script>

<style scoped lang="scss">
    .headnav-box {
        width: 1300px;
        height: 500px;
        /*background: url('~@/assets/images/headerImg.png') no-repeat;*/
        background-size:100% 100%;
        display: flex;
        margin: 0 auto;
        .logo {
            width: 500px;
            height: 500px;
            >div {
                font-family:"楷体";
                font-size: 120px;
                font-weight: bold;
            }
        }

        .welcome-box {
            width: 1100px;
            height: 500px;
            .welcome {
                font-family:"楷体";
                font-size: 120px;
                font-weight: bold;
            }
            .welcomeImg {
                width: 1000px;
                height: 500px;
                object-fit: contain;
                >img {
                    width: 100%;height: 100%;
                }
            }
        }
    }
</style>