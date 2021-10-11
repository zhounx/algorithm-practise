<template>
	<div>
		<h2 class="topic-dry">给定一个包含非负整数的数组，你的任务是统计其中可以组成三角形三条边的三元组个数。</h2>
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
                this.result = this.search([2, 2, 3, 4]) // 3
            },
            /**
             * @param {number[]} nums
             * @return {number}
             */
            search(nums) {
                // 设三角形三条边依次为a,b,c
                // 首先要升序排序数组， 因为 a+b>c a+c>b b+c>a时才能成为三角形，而排序的话只要保证 一定有b+c>a和a+c>b, 所以只需要判断a+b>c即可
                nums.sort((a, b) => a - b)
				const l = nums.length
				let count = 0 // 三角形个数
				for(let i=0;i<l;i++){
					const a = nums[i]
					for(let j=i+1;j<l;j++){ //i+1即为a边下一条边的索引
						const b = nums[j]
                        let k = j // ***防止k - j 出现负数
					    // 找出满足a+b>c的***最大的***第三条边c，使用二分查找
						let left = j + 1, right = l - 1
						while(left <= right){
							let mid = Math.floor((left + right) / 2)
							let c = nums[mid]
							if(a + b > c){ // 可以组成三角形
							    k = mid
								left = mid + 1
							}else{
								right = mid - 1
							}
						}
                        count += k - j // 把j到k之间的数字加上
					}
				}
				return count
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


