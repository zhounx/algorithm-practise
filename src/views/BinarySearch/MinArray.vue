<template>
	<div>
<!--		这个若干很坑爹，可以是0-->
		<h2 class="topic-dry">把一个数组最开始的<b>若干</b>个元素搬到数组的末尾，我们称之为数组的旋转。<br>
		输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。
			<br>例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。
</h2>
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
                // this.result = this.search([3,4,5,1,2])
                this.result = this.search([2,2,2,0,1])
            },
            /**
             * @param {number[]} numbers
             * @return {number}
             */

            // 难度较大，需要画图
            // 我们考虑数组中的最后一个元素x：在最小值右侧的元素，它们的值一定都小于等于x；
			// 而在最小值左侧的元素，它们的值一定都大于等于x。
			// 因此，我们可以根据这一条性质，通过二分查找的方法找出最小值。


            search(numbers) {
                let low = 0;
                let high = numbers.length - 1;
                while (low < high) {
                    const pivot = low + Math.floor((high - low) / 2);
                    if (numbers[pivot] < numbers[high]) {
                        high = pivot;
                    } else if (numbers[pivot] > numbers[high]) {
                        low = pivot + 1;
                    } else {
                        // 由于重复元素的存在，我们并不能确定 numbers[pivot] 究竟在最小值的左侧还是右侧，
						// 因此我们不能莽撞地忽略某一部分的元素。
						// 我们唯一可以知道的是，由于它们的值相同，所以无论numbers[high] 是不是最小值，
						// 都有一个它的「替代品」numbers[pivot]，因此我们可以忽略二分查找区间的右端点。
                        high -= 1;
                    }
                }
                return numbers[low];

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


