<template>
    <div>
        <h2 class="topic-dry">题干：给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

            请你将两个数相加，并以相同形式返回一个表示和的链表。
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


