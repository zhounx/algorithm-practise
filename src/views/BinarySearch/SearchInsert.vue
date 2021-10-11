<template>
	<div>
		<h2 class="topic-dry">给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。<br>
			如果目标值不存在于数组中，返回它将会被按顺序插入的位置。</h2>
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
                // this.result = this.searchInsert([1,3,5,6], 5)
                this.result = this.searchInsert([1,3,5,6], 2)
                // this.result = this.searchInsert([1,3,5,6], 7)
                // this.result = this.searchInsert([1,3,5,6], 0)
            },
            /**
             * @param {number[]} nums
			 * @param {number} target
             * @return {number}
             */
            searchInsert(nums, target){
				let left = 0, right = nums.length - 1
				while(left <= right){
				    let mid = left + Math.floor((right - left)/2)
					let midNum = nums[mid]
					if(midNum === target){
					    return mid
					}else if(midNum > target){
					    right = mid - 1
					}else if(midNum < target){
					    left = mid + 1
					}
				}
				return left
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


