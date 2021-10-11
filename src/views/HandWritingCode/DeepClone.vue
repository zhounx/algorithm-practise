<template>
	<div>

		<el-button type="primary" @click="run">运行</el-button>
	</div>
</template>

<script>

    export default {
        name: '',
        data() {
            return {}
        },
        methods: {
            run() {
                // console.log(111)
                console.log(this.deepClone({
                    a: 1,
                    b: 'aaa',
                    c: [1, 3, 5],
                    d: {
                        e: function () {
                            console.log(123)
                        },
                        f: [],
                        g: {
                            h: 2.5555,
                            i: '',
                            j: new Date(),
                            k: [{
                                j: 1, k: 2
                            }, {
                                l: 3, m: 4
                            }],
                            l: /\d/g
                        },
						h: undefined,
						i: null
                    }
                }))
            },
            /**
             * @param {number[]} nums
             * @param {number} target
             * @return {number}
             */
            deepClone(target) {
				if(target === null){
				    return null
				}
                if(typeof target !== 'object'){
                    return target
                }
                if(target.constructor === Date){
                    return new Date(target)
                }
                if(target.constructor === RegExp){
                    return new RegExp(target)
                }
                let newObj = new target.constructor() // 保持继承链
				Object.keys(target).forEach(key=>{ // forin还会遍历原型链上的可枚举属性
				    const val = target[key]
					newObj[key] = typeof val === 'object'? this.deepClone(val) : val
				})
				return newObj
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


