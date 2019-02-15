<template>
	<div id="user">
		<h3>Utilisateur</h3>
		<p>Mon nom est {{nom}}</p>
		<app-info></app-info>
	</div>
</template>

<script>
import Info from './Info.vue'
import Vue from 'vue';


export default {

	data() {
		return {
			userName : 'xiaohan',
		}
	},
	components: { 				// LOCAL COMPONENTS
		'app-info': Info
	},

	props: ['nom']

}
</script>

<style scoped>
	p {
		font-style: italic;
		color:red;
	}
</style>
