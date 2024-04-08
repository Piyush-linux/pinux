<style>
.btn {
  background-color: #323232;
  padding: 1em;
  font-weight: bolder;
  letter-spacing: .3em;
  text-transform: uppercase;
}
.inp::placeholder {
  color: snowshite;
  opacity: 1; 
}
.inp{
	border: 2px dotted white;
	font-size: 1rem;
	padding: 1rem;
	margin-top: 1rem;
	margin-bottom: 1rem;
	font-weight: bolder;
}
	
</style>

<script setup>
import { ref } from 'vue'

let data = [{
	q:"List dir in current path",
	ans:"ls",
	passed:null
},{	
	q:"Display file 'sample.txt' !",
	ans:"cat sample.txt",
	passed:null
},{
	q:"Command to show current path !",
	ans:"pwd",
	passed:null
	}]

const inp = ref("")
let pass = ref("-")
let check = (index) => {
	let ans = data[index]
	// console.log(ans[0].ans)
	if(inp.value == ans.ans){ans.passed = 'pass'}else{ans.passed = 'fail'}
	// (inp.value == ans[0].ans)? pass.value = 'pass' : pass.value = 'fail' ;
	inp.value = ""; // clear input
}

</script>

---

# Misson

<div v-for="(itm,index) in data">
<div style="margin-top: 3rem;">
	
::: tip Q{{ index + 1 }} : {{ itm.q  }}
hint !
:::

<input class="inp" placeholder="user@home$" v-model="inp" />

<button class="btn" @click="check(index)">submit</button>

::: details Click to view answer

> {{ itm.ans }}

:::

<div v-if="itm.passed == 'fail'">
	Better Luck Next Time 😢
</div>
<div v-if="itm.passed == 'pass'">
	Yeah, my boi 🔥
</div>

</div>
</div>
