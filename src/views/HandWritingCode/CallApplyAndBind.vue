<template>
	<div>
		<el-button type="primary" @click="run">运行</el-button>
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
				let testObj = {
                    abc: '德玛西亚'
				}
                function testFn(params1, params2, params3){
                    console.log('test:', params1, params2, params3, this.abc)
                }
				/****************** Call ********************/
				Function.prototype.call2 = function (obj = window) {
                    // 必须得是funtion调该方法
					if(typeof this !== 'function'){
					    throw new Error('this is not a function')
					}
					obj.fn = this
					const args = [...arguments].slice(1)
					const result = obj.fn(...args)
					delete obj.fn
					return result
                }


                testFn.call2(testObj,'call1', 2)

				console.log('测试新的call')

                /****************** Apply ********************/

                Function.prototype.apply2 = function (obj = window) {
                    // 必须得是funtion调该方法
                    if(typeof this !== 'function'){
                        throw new Error('this is not a function')
                    }
                    obj.fn = this
					const args = arguments[1]
					const result = args ? obj.fn(...args):obj.fn()
					delete obj.fn
					return result
                }

                testFn.apply2(testObj,['apply1', 3])
                /****************** Bind ********************/

                Function.prototype.bind2 = function (obj = window) {
                    // 必须得是funtion调该方法
                    if(typeof this !== 'function'){
                        throw new Error('this is not a function')
                    }
                    const args = [...arguments].slice(1)
					const self = this
					const Temp = function () {}
                    const newFn = function () {
                        // 如果this是返回方法的实例对象，则表明是由new创建，应该指向实例this
						return self.apply(this instanceof newFn ? this : obj, [...args, ...arguments])
                    }
                    // 新方法继承原来方法的原型链
                    Temp.prototype = this.prototype
					newFn.prototype = new Temp
                    return newFn
                }
                const testNewBind1 = testFn.bind2(testObj, 'bind1', 2)
				testNewBind1(666)

            },
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


