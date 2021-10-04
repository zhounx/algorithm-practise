<template>
    <div class="sidebar">

        <el-row class="menu_page">
            <el-col>
                <el-menu
                        mode="vertical"
                        class="el-menu-vertical-demo"
                        :collapse="collapse"
                        :default-active="$route.path"
                        background-color="#324057"
                        text-color="#fff">
                    <div class="wrapper" ref="wrapper">
                        <Menu :items='items'/>
                    </div>
                </el-menu>
            </el-col>
        </el-row>

    </div>
</template>

<script>
    import bus from '../common/bus'
    import Menu from './Menu'
    import Bscroll from 'better-scroll'
    // @ is an alias to /src
    export default {
        name: 'LeftMenu',
        data() {
            return {
                collapse: false,
                items: []
            }
        },
        components: {
            Menu
        },
        methods: {
            initScroll() {
                this.scroll = new Bscroll(this.$refs.wrapper, {})
            },
            initItems(){
                console.log(111111111, this.$router)
                const menu = this.$router.options.routes[1].children
                console.log(menu)
                menu.forEach((item, index)=>{
                    const { isRoot, name, icon, path } = item
                    if(isRoot){
                        const obj = {
                            icon: `el-icon-${icon}`,
                            name,
                            children: [],
                            path
                        }
                        this.items.push(obj)
                    }else{
                        const obj = { path, name }
                        this.items[this.items.length-1].children.push(obj)
                    }

                })
            }
        },
        mounted() {

            this.$nextTick(() => {
                this.initScroll()
                this.initItems()
            })
        },
        created() {
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                this.collapse = msg
            })
        }
    }
</script>
<style scoped>
    .menu_page {
        position: fixed;
        top: 60px;
        left: 0;
        min-height: 100%;
        background-color: #324057;
        z-index: 99;
    }

    .sidebar {
        position: relative;
        overflow: hidden;
    }

    .wrapper {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: calc(100vh - 60px);
        min-height: 500px;
        overflow: auto;
    }

    .sidebar::-webkit-scrollbar {
        width: 0;
    }

    .sidebar-el-menu:not(.el-menu--collapse) {
        /*width: 250px;*/
    }

    .el-menu {
        border: none;
        z-index: 9999;
    }

    .fa-margin {
        margin-right: 5px;
    }

    .el-menu-vertical-demo:not(.el-menu--collapse) {
        min-width: 250px;
        min-height: 400px;
    }

    .el-menu-vertical-demo {
        width: 49px;
    }

    .el-submenu .el-menu-item {
        min-width: 250px;
    }

    .hiddenDropdown,
    .hiddenDropname {
        display: none;
    }

    a {
        text-decoration: none;
    }
</style>

