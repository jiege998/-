<template>
    <div class="pagination">
        <button :disabled="pageNo == 1" @click="$emit('getPageNo',pageNo-1)" >上一页</button>
        <button v-if="startNumAndNum.start>1" @click="$emit('getPageNo',1)" :class="{'active':pageNo ===1}">1</button>
        <button v-if="startNumAndNum.start>2">...</button>

        <button v-for="(page, index) in startNumAndNum.end" :key="index" v-show="page>=startNumAndNum.start" @click="$emit('getPageNo',page)" :class="{'active':pageNo ===page}">{{page}}</button>

        <button v-if="startNumAndNum.end<totalPage-1">...</button>
        <button v-if="startNumAndNum.end<totalPage" @click="$emit('getPageNo',totalPage)" :class="{'active':pageNo ===totalPage}">{{totalPage}}</button>
        <button :disabled="pageNo == totalPage" @click="$emit('getPageNo',pageNo+1)">下一页</button>

        <button style="margin-left: 30px">共 {{total}} 条</button>
    </div>
</template>

<script>
    export default {
        name: "Pagination",
        props:['pageNo','pageSize','total','continues'],
        computed:{
            //计算总共有多少页
            totalPage(){
                return Math.ceil(this.total/this.pageSize)
            },
            startNumAndNum(){
                const {continues,pageNo,totalPage} = this
                //continues连续的页码
                let start = 0,end = 0
                if(continues > totalPage){
                    start = 1
                    end = totalPage
                }else{
                    start = pageNo-parseInt(continues/2)
                    end = pageNo+parseInt(continues/2)
                    if(start<=0){
                        start = 1
                        end = continues
                    }
                    if(end > totalPage){
                        start = totalPage-continues+1
                        end = totalPage
                    }
                }
                return {start,end}
            }
        }
    }
</script>

<style lang="less" scoped>
    .pagination {
        text-align:center;
        button {
            margin: 0 5px;
            background-color: #f4f4f5;
            color: #606266;
            outline: none;
            border-radius: 2px;
            padding: 0 4px;
            vertical-align: top;
            display: inline-block;
            font-size: 13px;
            min-width: 35.5px;
            height: 28px;
            line-height: 28px;
            cursor: pointer;
            box-sizing: border-box;
            text-align: center;
            border: 0;

            &[disabled] {
                color: #c0c4cc;
                cursor: not-allowed;
            }

            &.active {
                cursor: not-allowed;
                background-color: #409eff;
                color: #fff;
            }
        }
    }
</style>