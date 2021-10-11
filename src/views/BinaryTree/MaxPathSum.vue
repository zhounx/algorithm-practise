<template>
	<div>
		<h2 class="topic-dry">路径 被定义为一条从树中任意节点出发，沿父节点-子节点连接，达到任意节点的序列。同一个节点在一条路径序列中 至多出现一次 。该路径 至少包含一个 节点，且不一定经过根节点。
			<br>
			路径和 是路径中各节点值的总和。
			<br>
			给你一个二叉树的根节点 root ，返回其 最大路径和 。</h2>
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
                // const root = util.getTreeFromLayerOrderArray([1, 2, 3])
                // const root = util.getTreeFromLayerOrderArray([-10,9,20,null,null,15,7])
                // const root = util.getTreeFromLayerOrderArray([1, -2, 3])
                const root = util.getTreeFromLayerOrderArray([5,4,8,11,null,13,4,7,2,null,null,null,1])
                console.log(root)
                this.result = this.maxPathSum(root)
            },
            /**
             * @param {TreeNode} root
             * @return {number[][]}
             * 比较难想
             */
            maxPathSum(root) {
                if (!root || root.val == null) {
                    return 0
                }
                let max = root.val
                const findMax = node => {
                    // console.log('node:', node)
                    if (node == null) {
                        return 0
                    }
                    const {val, left, right} = node
                    // 递归寻找左右分支的最大路径和
                    const leftVal = Math.max(findMax(left), 0), rightVal = Math.max(findMax(right), 0)

                    // 一整条路径包括自己本身加上左右
                    console.log(val, leftVal, rightVal)

                    const newVal = val + leftVal + rightVal

                    // 更新答案，由于可能本身节点为负数，加上后反而更小，故要取更大的
                    max = Math.max(newVal, max)

					// 由于节点只能出现一次，故出现分叉只能要大的一边的值
                    return val + Math.max(leftVal, rightVal)
                }
                findMax(root)
                return max
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


