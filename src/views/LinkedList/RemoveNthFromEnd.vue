<template>
    <div>
        <h2 class="topic-dry">给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

            进阶：你能尝试使用一趟扫描实现吗？
        </h2>
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


