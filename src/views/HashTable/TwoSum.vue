<template>
	<div>
		<h2 class="topic-dry">给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
			<br>
			你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
			<br>
			你可以按任意顺序返回答案。</h2>
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
                this.result = this.twoSum([2,7,11,15], 9) // 0
            },
            /**
             * @param {number[]} nums
             * @param {number} target
             * @return {number[]}
             */
            twoSum(nums, target) {
				const obj = {}
				// 制作数组元素值key的哈希表
				for(let i=0; i<nums.length; i++){
				    const num = nums[i]
				    if(obj[target - num] !== undefined){
				        return [i, obj[target - num]]
					}
				    obj[num] = i
				}
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


