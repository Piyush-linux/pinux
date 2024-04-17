<script setup>
import { ref } from "vue";
let { ans } = defineProps(['ans']);
let inp = ref('');
let check = ref('');
console.log("--- ans : ", ans);

let query = ()=>{
	console.log("--- Loading")
	if (inp.value == ans) {
		check.value = 'pass';
	}else{
		check.value = 'fail';
	}
}

</script>
<template>
    <div class="">
        <!--  CLI  -->
        <div class="cli" style="display: flex;align-items: center;">
            <input class="cli-inp" placeholder="$ whoami" v-model="inp" />
            <button class="cli-btn" @click="query()">submit</button>
        </div>
        <!-- Right or Wrong -->
        <div v-if="check == 'pass'">
        	<div class="check check-pass">
	            You got it 👍
        	</div>
        </div>
        <div v-if="check == 'fail'">
        	<div class="check check-fail">
            	I can't get it 😵‍💫
        	</div>
        </div>
    </div>
</template>