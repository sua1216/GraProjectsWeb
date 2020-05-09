<template>
	<div id="app">

<!--		<el-carousel :interval="5000" arrow="always">-->
<!--			<el-carousel-item v-for="(img,index) in imgList" :key="index">-->
<!--				<img v-bind:src="img.url">-->
<!--			</el-carousel-item>-->
<!--		</el-carousel>-->


		<HeadNav></HeadNav>
		<MainContent></MainContent>

		<router-view />





	</div>
</template>
<script>
    export default {
		name: 'app',
		data: function () {
			return {

			}
		},
		components: {
			HeadNav:()=>import('./views/HeadNav.vue'),
			MainContent:()=>import('./views/MainContent.vue'),
			Footer:()=>import('./views/Footer.vue')

		},
		computed:{
			TopStyle(){
				return this.$store.state.TopStyle
			}
		},
		watch:{
			TopStyle(newData,oldData){
				console.log(newData)
			}
		},
		mounted(){
		    window.vl = this;
		}

	}
</script>

<style lang="scss">
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		width: 100%;
		/*height: 1023px;*/
		position: relative;

		margin: 0;
		padding: 0;
	}



</style>
