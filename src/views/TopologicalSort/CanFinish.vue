<template>
	<div>
		<h2 class="topic-dry">你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。
			<br>
			在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则 必须 先学习课程  bi 。
			<br>
			例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
			<br>
			请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。</h2>
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
                // this.result = this.canFinish(2, [[1, 0]])
                this.result = this.canFinish(4, [[1, 0], [2, 0], [3, 1], [3, 2]])
                // this.result = this.canFinish(5, [[1, 4], [2, 4], [3, 1], [3, 2]])
                // this.result = this.canFinish(1, [])
            },
            /**
             * @param {number} numCourses
             * @param {number[][]} prerequisites
             * @return {boolean}
             */
            canFinish(numCourses, prerequisites) {
                const sortedOrder = []
                if (numCourses <= 0) {
                    return sortedOrder
                }
                const inDegree = Array(numCourses).fill(0)
                const graph = Array(numCourses)
                    .fill(0)
                    .map(() => Array())
                prerequisites.forEach(edge => {
                    let parent = edge[0]
                    let child = edge[1]
                    graph[parent].push(child)
                    inDegree[child]++
                })
                const sources = []
                for (let i = 0; i < inDegree.length; i++) {
                    if (inDegree[i] === 0) {
                        sources.push(i)
                    }
                }
                while (sources.length > 0) {
                    const vertex = sources.shift()
                    sortedOrder.push(vertex)

                    graph[vertex].forEach(child => {
                        inDegree[child] -= 1
                        if (inDegree[child] === 0) {
                            sources.push(child)
                        }
                    })
                }
                return sortedOrder.length === numCourses ? true : false
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


