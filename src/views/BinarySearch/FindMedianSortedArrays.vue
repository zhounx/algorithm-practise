<template>
    <div>
        <h2 class="topic-dry">题干：给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。</h2>
        <el-button type="primary" @click="run">运行</el-button>
        <div class="result">结果：{{result || ''}}</div>
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
                let nums1 = [3], nums2 = [-2, -1]
                this.result = this.search(nums1, nums2)
            },
            // 使用sort自动排序，二分法做比较难，但可以把时间复杂度降到O(log(n+m))
            search(nums1, nums2){
                let newArr = [...nums1, ...nums2].sort((a,b)=>{
                    return a - b
                })
                let l = newArr.length
                if(l & 1){ // x & 1 = 1  (奇数) ，  x & 1 = 0  (偶数)
                    return newArr[Math.floor(l / 2)]
                }else{
                    let front = l / 2 - 1, next = l / 2
                    return (newArr[front] + newArr[next]) / 2
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


