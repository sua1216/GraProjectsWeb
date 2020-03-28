<template>
    <div class="main-box">主体区域
     <div id="map"></div>
    </div>
</template>

<script>
    import mapboxgl,{Map} from 'mapbox-gl'
    let map,map2;

    export default {
        name: "MainContent",
        data(){
            return {
                token: 'pk.eyJ1IjoibG1zMTk5NyIsImEiOiJjazRsNmJ6ZzkwMm04M2tsZWxxbm5nZ3JkIn0.AlTKsmXdFAGWYu9mbThYqA'
            }
        },


        mounted() {
            // this.initMap();
        },
        methods:{
            initMap(){
                mapboxgl.accessToken = this.token;
                var map = new mapboxgl.Map({
                    container: 'map', // container id
                    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
                    center: [-74.50, 40], // starting position [lng, lat]
                    zoom: 9 // starting zoom
                });
            },
        }
    }
</script>

<style scoped lang="scss">
    .main-box {
        width: 30%;
        height: 3600px;
        background-color: orange;
        margin: 0 auto;
    }
    #map {
        width: 100%;
        height: 300px;
    }

</style>