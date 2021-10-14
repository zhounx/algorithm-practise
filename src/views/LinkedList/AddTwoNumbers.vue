<template>
	<div>
		<h2 class="topic-dry">题干：给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

			请你将两个数相加，并以相同形式返回一个表示和的链表。
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
                // const l1 = util.getListFromArray([2, 4, 3]), l2 = util.getListFromArray([5, 6, 4])
                // const l1 = util.getListFromArray([0]), l2 = util.getListFromArray([0])
                const l1 = util.getListFromArray([9,9,9,9,9,9]), l2 = util.getListFromArray([9,9,9,9])
                console.log(l1, l2)
                this.result = util.logList(this.addTwoNumbers(l1, l2))
            },
            /**
             * @param {ListNode} l1
             * @param {ListNode} l2
             * @return {ListNode}
             */
            addTwoNumbers(l1, l2) {
                // 进位标志
                let carry = false
                const result = new ListNode()
                let node = null
                // 基线条件：当两条链表都到头, 均为null
                while (l1 || l2) {
                    const l1Val = l1 ? l1.val : 0, l2Val = l2 ? l2.val : 0
                    // 要加上进位的值
                    let curVal = l1Val + l2Val + (carry ? 1 : 0)
                    // console.log(l1Val, l2Val, carry, curVal)
                    if (curVal >= 10) {
                        curVal %= 10
                        carry = true
                    } else {
                        carry = false
                    }
                    const newNode = new ListNode(curVal)
                    // 当表头是空的，放第一个值
                    if (!result.next) {
                        node = newNode
                        result.next = node
                    } else {
                        node.next = newNode
                        // 更新指针
                        node = newNode
                    }
                    // 两条链表同时往前进
                    l1 = l1 && l1.next
                    l2 = l2 && l2.next
                }
                // 如果有进位标志，则最大的位数要加一个1
                if(carry){
                    node.next = new ListNode(1)
                }
                return result.next
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


