<template>
	<div>
		<h2 class="topic-dry">给你两个单词 word1 和 word2，请你计算出将 word1 转换成 word2 所使用的最少操作数 。
			<br>
			你可以对一个单词进行如下三种操作：
			<br>
			<br>·插入一个字符
			<br>·删除一个字符
			<br>·替换一个字符</h2>
		<el-button type="primary" @click="run">运行</el-button>
		<div class="result">结果：{{result}}</div>
	</div>
</template>

<script>
    import util from '../../common/util'

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
                this.result = this.minDistance('horse', 'ros')


            },
            /**
             * @param {string} word1
             * @param {string} word2
             * @return {number}
             */
            minDistance(word1, word2) {

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


