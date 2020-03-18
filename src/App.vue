<template>
	<div id="app">
		<HeadNav></HeadNav>
		<MainContent></MainContent>
		<Footer></Footer>
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
		height: 1023px;
		position: relative;

	}
</style>
