<template>
	<div>
		<h2 class="topic-dry">
			给定一个非空字符串 s 和一个包含非空单词的列表 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。
			<br>
			说明：
			<br>
			<br>·拆分时可以重复使用字典中的单词。
			<br>·你可以假设字典中没有重复的单词。
		</h2>
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
                // this.result = this.lengthOfLongestSubstring('abcabcbb')
                // this.result = this.lengthOfLongestSubstring('dvdf')
                this.result = this.wordBreak('leetcode' , ['leet', 'code'])
                // this.result = this.wordBreak('applepenapple' , ['apple', 'pen'])

            },
            /**
             * @param {string} s
             * @param {string[]} wordDict
             * @return {boolean}
             */
            wordBreak(s, wordDict) {
				const l = s.length
				let maxL = 0
				const arr = [true]
				for(let i=0;i<wordDict.length;i++){
				    const wordL = wordDict[i].length
					maxL = Math.max(maxL, wordL)
				}
				for(let i=0;i<l + 1;i++){
				    for(let j=i;j >=0 && j>= i- maxL;j--){
				        const subStr = s.substring(j, i)
				        if(arr[j] && wordDict.includes(subStr)){
				            arr[i] = true
						}
					}
				}
				// console.log(maxL, arr)
				return !!arr[l]
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


