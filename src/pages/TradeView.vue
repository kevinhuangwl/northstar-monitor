<template>
    <div class="common font-setting">
        <el-row class="row-top">
            <el-col :span="8">
                <div class="grid-content ">权益: {{ balance }}</div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content ">可用: {{ available }}</div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content">使用率: {{ usageRate }}%</div>
            </el-col>
        </el-row>
d
        <div style="position: fixed; bottom: 50px">
            <div class="mkt-bar">
                <div class="price-board">
                    <table>
                        <tr><td class="col-title">新</td><td>{{ currentTick.lastPrice }}</td><td>{{ currentTick.vol }}</td></tr>
                        <tr><td class="col-title">卖</td><td>{{ currentTick.askPrice1 }}</td><td>{{ currentTick.askVol1 }}</td></tr>
                        <tr><td class="col-title">买</td><td>{{ currentTick.bidPrice1 }}</td><td>{{ currentTick.bidVol1 }}</td></tr>
                    </table>
                </div>
                <div class="select-contract ">
                    <el-select v-model="tradeContract.label" placeholder="选择合约" @focus="updateSelection" :filterable="true" :filter-method="findContract">
                        <el-option
                                v-for="item in filteredContracts"
                                :key="item.value"
                                :label="item.label"
                                :value="item"
                        >
                            <span style="float: left">{{ item.label }}</span>
                            <span style="float: right; color: #8492a6; font-size: 1em">{{ item.value }}</span>
                        </el-option>
                    </el-select>
                </div>
                <div class="select-price-type ">
                    <el-select v-model="priceType.label" >
                        <el-option
                                v-for="item in priceTypes"
                                :key="item.value"
                                :label="item.label"
                                :value="item">
                            <span style="float: left">{{ item.label }}</span>
                            <!--<span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>-->
                        </el-option>
                    </el-select>
                </div>
                <div class="select-volume ">
                    <el-input v-model="tradeVolume" type="number" max="500" min="1"
                            placeholder="手数"
                            clearable>
                    </el-input>
                </div>
            </div>
            <div class="btn-bar">
                <trade-button price="100" type="trade-red-back">多开</trade-button>
                <trade-button price="100" type="trade-normal-back">平仓</trade-button>
                <trade-button price="100" type="trade-green-back">空开</trade-button>
            </div>
        </div>

    </div>
</template>

<script>
    import '../assets/index.css'
    import TradeButton from "../components/TradeButton";
    // import TradeButton from '../components/TradeButton'

    export default {
        name: "trade-view",
        components:{
            TradeButton
        },
        data(){
            return {
                balance: 512261,
                available: 45211,
                volume: 1,
                currentTick: {
                    lastPrice: 100510,
                    vol: 1311992,
                    bidPrice1: 100510,
                    bidVol1: 131,
                    askPrice1: 100500,
                    askVol1: 150
                },
                contracts:[{
                    value: 'rb2010',
                    label: '螺纹钢2010'
                },{
                    value: 'rb2009',
                    label: '螺纹钢2009'
                },{
                    value: 'ni2008',
                    label: '沪镍2008'
                }],
                filteredContracts:[],
                priceTypes: [{
                    value: 'OPT_LimitPrice',
                    label: '限价'
                }, {
                    value: 'OPT_AnyPrice',
                    label: '市价'
                }, {
                    value: 'OPT_BestPrice',
                    label: '最优价'
                }],
                tradeContract:'',
                tradeVolume: 1,
                priceType:{
                    value: 'OPT_LimitPrice',
                    label: '限价'
                }
            }
        },
        computed: {
            usageRate () {
                return (this.available / this.balance * 100).toFixed(1)
            },
        },
        methods:{
            updateSelection(){
                console.log('s')
                if(!this.filteredContracts.length){
                    this.filteredContracts = this.contracts
                }
            },
            findContract(val){
                if(!val){
                    this.filteredContracts = this.contracts
                }
                let reg = new RegExp(val)
                this.filteredContracts = this.contracts.filter(item => reg.test(item.value) || reg.test(item.label) ? item : null)
            }
        }
    }
</script>

<style scoped>
    .row-top, .price-board{
        background-color: rgba(38,38,38,0.4);
    }

    .font-setting, .el-input{
        font-size: 0.8rem;
    }

    .btn-bar, .mkt-bar{
        height: 5rem;
    }
    .mkt-bar{
        bottom: 7rem;

    }
    table{
        margin: 0px;
        padding: 0px;
    }
    .price-board{
        padding: 10px;
        font-size: 0.9em;
        float: left;
        width: 55%;
        height: 79%;
    }
    tr{
        line-height: 1.8em;
    }

    .col-title{
        padding: 0px 20px;
    }

    td:last-child{
        width: 100%;
        text-align: right;
    }
    .el-input-number{
        width: 3em;
        height: 2em;
    }

    .select-contract>.el-select /deep/ .el-input__inner {
        font-size: 1rem;
        height: 2rem;
        padding: 0.5em;
    }

    .select-price-type>.el-select /deep/ .el-input__inner {
        font-size: 1rem;
        height: 2rem;
        padding: 0.5em;
    }

    .select-contract, .select-price-type, .select-volume{
        float: left;
        margin-left: 1%;
        margin-bottom: 1.2%;
    }
    .select-contract{
        width: 40.5%;
    }
    .select-price-type{
        width: 20%;
    }
    .select-volume{
        margin-left: 2%;
        width: 18.5%;
    }
    .el-input /deep/ .el-input__inner{
        height: 2rem;
        font-size: 1rem;
    }
    .el-select{
        width: 100%;
    }
    .el-select-dropdown__item{
        font-size: 0.8rem;
        height: 1.2rem;
        line-height: 1.2rem;
    }
    .el-scrollbar /deep/ .el-select-dropdown__wrap {
        margin: 0px;
    }
</style>
