<template>
	<div>
		<h2 class="topic-dry">给你一个非负整数 x ，计算并返回 x 的 算术平方根 。<br>

			由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。<br>

			注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。</h2>
		<el-button type="primary" @click="run">运行</el-button>
		<div class="result">结果：{{result}}</div>
	</div>
</template>

<script>

    export default {
        name: '',
        data() {
            return {
                result: ''
            }
        },
        methods: {
            run() {
                console.log('运行')
                // this.result = this.sqrt(9)
                this.result = this.sqrt(8)
            },
            /**
             * @param {number[]} x
             * @return {number}
             */
            sqrt(x) {
                let left = 0, right = x
                while(left <= right){
                    let mid = Math.floor((left + right) / 2)
					let midSquare = mid * mid
					if(midSquare === x){
					    return mid
					}else if(midSquare > x){
						right = mid - 1
					}else if(midSquare < x){
						left = mid + 1
					}
				}
				return Math.floor(Math.floor((left + right) / 2))
            }
        },
        mounted() {

        },
        components: {
            // BaseCharts
        }
    }
</script>
<style lang="scss" scoped>

</style>


