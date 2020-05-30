<template>
    <div id="app">
        <div v-if="isLogin" style="height: 100%">
            <el-menu
                    :default-active="activePage"
                    mode="horizontal"
                    @select="handleSelect"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                <el-menu-item index="1">交易与账户</el-menu-item>
                <el-menu-item index="2">策略管理</el-menu-item>
            </el-menu>
            <trade-view v-if="activePage==='1'"></trade-view>
            <strategy-view v-if="activePage==='2'"></strategy-view>
        </div>

        <login-view v-if="!isLogin" @login="onLogin"></login-view>
    </div>
</template>

<script>
    import TradeView from './pages/TradeView'
    import StrategyView from './pages/StrategyView'
    import LoginView from './pages/LoginView'

    export default {
        name: 'App',
        components: {
            TradeView,
            StrategyView,
            LoginView
        },
        data() {
            return {
                activePage: '1',
                isLogin: false
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath)
                this.activePage = keyPath[0]
            },
            onLogin(){
                this.isLogin = true
            }
        }
    }
</script>

<style>

    #app {
        font-family: STZhongsong, "Microsoft YaHei UI", Avenir, Helvetica, Arial, sans-serif;;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin: 0px auto;
        width: 100%;
        height: 100%;
        font-size: 1em;
    }

    #app .el-menu-item {
        font-size: 1rem;
        height: 1.5rem;
        line-height: 1.5rem;
    }

    .el-menu.el-menu--horizontal {
        border: none !important;
    }
</style>
