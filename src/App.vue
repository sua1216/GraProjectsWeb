<template>
	<div id="app">

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
		},
		components: {
            BaseMap,HeadNav
		}
	}
</script>

<style lang="scss">
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #fff;
		height: 1023px;
		position: relative;
	}
</style>
