<template>
	<div>
		<h2 class="topic-dry">给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回
			-1。</h2>
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
                // this.result = this.search([-1,0,3,5,9,12], 9) // 4
                // this.result = this.search( [-1,0,3,5,9,12], 2) // -1
                this.result = this.search([5], 5) // 0
            },
            /**
             * @param {number[]} nums
             * @param {number} target
             * @return {number}
             */
            search(nums, target) {
                let low = 0, high = nums.length - 1
                while (low <= high) {
                    let halfIndex = Math.floor((high + low) / 2)
                    let tempNum = nums[halfIndex]
                    // console.log(halfIndex, tempNum,  low, high)
                    if (tempNum === target) {
                       return  halfIndex
                    } else if (tempNum > target) {
                        // console.log('大了')
                        high = halfIndex - 1
                    } else {
                        // console.log('小了')
                        low = halfIndex + 1
                    }
                }
                return -1
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


