<template>
<div class="red">
  {{msg}}
</div>
</template>

<script>
import('../js/asyncMod').then(({default: a}) => {
  console.log('async', a)
})
export default {
  data: () => ({
    msg: 'hello world!!!' 
  })
}
</script>

<style>
@import url('../scss/in.scss');
.red{
  color: violet;
  background: greenyellow;
  transform: translateX(20px);
}
</style>


