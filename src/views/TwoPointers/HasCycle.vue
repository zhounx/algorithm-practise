<template>
	<div>
		<h2 class="topic-dry">给定一个链表，判断链表中是否有环。
			<br>
			如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是
			-1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。
			<br>
			如果链表中存在环，则返回 true 。 否则，返回 false 。
		</h2>
		<el-button type="primary" @click="run">运行</el-button>
		<div class="result">结果：{{result}}</div>
	</div>
</template>

<script>

    import util from '../../common/util'

    const ListNode = util.ListNode
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
                const head = util.getListFromArray([3, 2, 1, -4])
                console.log(head)
                this.result = this.hasCycle2(head)
            },
            /**
             * @param {ListNode} head
             * @return {boolean}
             * 方法1,遍历全部，创造哈希表，判断这个节点有没有在哈希表出现
             */
            hasCycle1(head) {
                const visited = []
                while (head !== null) {
                    if (visited.indexOf(head) > -1) {
                        return true
                    } else {
                        visited.push(head)
                        head = head.next
                    }
                }
                return false
            },
            // 方法2 快慢双指针，不用创造哈希表，可将复杂度由O(N)降为O(1)
            hasCycle2(head) {
                let fast = head, low = head
                while (fast !== null) {

                    fast = fast.next
					// 快指针先走一步，如果到尾了就说明无环
                    if (fast === null) {
                        return false
                    } else {
                        // 快指针走两步，满指针走一步，若有环则总会相遇
                        fast = fast.next
                        low = low.next
                        if (fast === low) {
                            return true
                        }
                    }

                }
                return false
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


