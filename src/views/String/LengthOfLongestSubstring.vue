<template>
	<div>
		<h2 class="topic-dry">
			给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
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
                this.result = this.lengthOfLongestSubstring('aabaab!bb')

            },
            /**
             * @param {string} str
             * @return {number}
             */
            lengthOfLongestSubstring(str) {
				let queue = []
				let maxL = 0
				// 主要思路：滑动窗口
				for(let i=0;i<str.length;i++){
				    const letter = str.charAt(i)
                    // 出现重复字符，滑动窗口，将队首元素弹出
					const index = queue.indexOf(letter)
                    if(index===-1){
                        queue.push(letter)
                    }else{
                        queue = queue.slice(index+1)
						queue.push(letter)
					}
					maxL = Math.max(queue.length, maxL)
				}
				return maxL
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


