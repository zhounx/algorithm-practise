<template>
	<div>
		<h2 class="topic-dry">给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。</h2>
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
                // const root = util.getTreeFromLayerOrderArray([3, 9, 20, null, null, 15, 7])
                const root = util.getTreeFromLayerOrderArray([0,2,4,1,null,3,-1,5,1,null,6,null,8])
                console.log(root)
                this.result = this.levelOrder(root)
            },
            /**
             * @param {TreeNode} root
             * @return {number[][]}
             */
            levelOrder(root) {
                if (!root || root.val === null) {
                    return []
                }
                // 建立一个队列，用来缓存处理数据
                const result = [], queue = []
                queue.push(root)
                while (queue.length) {
                    // 获取队列中元素个数，用来确定每一层有几个元素
                    const levelLength = queue.length
                    // 用于存放这一层的值
                    const thisLevelArr = []
                    // 将这一层的所有节点都插入临时数组
                    for (let i = 0; i < levelLength; i++) {
                        // 从队列弹出队首数据
                        const node = queue.shift()
                        const {val, left, right} = node
                        if (val != null) {
                            thisLevelArr.push(val)
                            if (left !== null) {
                                queue.push(left)
                            }
                            if (right !== null) {
                                queue.push(right)
                            }
                        }
                    }
                    result.push(thisLevelArr)
                }

                return result
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


