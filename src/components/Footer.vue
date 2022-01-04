<template>
 <div class=" footer">
   <div>© 2021 Copyright  </div>
   <div><a href="">汉ICP备111111号-2 </a> </div>
   <div><a href="https://juejin.cn/user/3193419847964990">技术论坛</a>  </div>
   <div><a href="">影视导航</a></div>
</div>
</template>
<script>
export default {
    name: "Footer",
}
</script>
<style  lang='less' scoped>
.footer{
    padding-top: 15px;
    display: flex;
    justify-content: flex-start;
    div{
        margin: 0 20px;
    }
    a:hover{
         color: #409eff;
    }
}
</style>