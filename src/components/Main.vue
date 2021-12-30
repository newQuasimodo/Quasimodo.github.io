<template>
  <div class="main">
    <div class="left">
<div class="tips" v-if="isShow">
      <div class="closed" @click="onClose">
        <i class="el-icon-error"></i>
      </div>
      <i class="el-icon-bell"></i>
      在这里，你可以找到学习资料，包括但是不限于
      电子词典资料，书籍。其次，这也是一个技术交流的论坛，在这里，请随意讨论资料的获取以及自行制作的细节和步骤，在这里，你可以是过客，你也可以是参与者，你可以是学生，你也可以是老师——如果你愿意的话。）
      如有疑问请加群：<img
        src="https://pub.idqqimg.com/wpa/images/group.png"
        alt=""
      />
      <br />
      本博客免费向大家开发，无任何收费资源，并由博主维护及承担服务器费用，无其他收入，存在少许广告，请谅解，感谢您的访问。
    </div>
    <div class="title">
      <h1>卡西博客-自由、开放的个人学习、交流的博客</h1>
      网站源码分享，站点建设教程，梦溪的博客。QQ群：123456
      <img src="https://pub.idqqimg.com/wpa/images/group.png" alt="" />
      <br />
    </div>
    <div class="caroousel">
         <el-carousel >
    <el-carousel-item v-for="(  item , index ) in picList" :key="index">
     <img :src="item" alt="">
    </el-carousel-item>
  </el-carousel>
    </div>
    </div>

    <div class="right">

    </div>
    
  </div>
</template>
<script>
import { picList } from "@/api/api.js";
export default {
  name: "Main",
  data() {
    return {
      isShow: true,
      picList:[],
    };
  },
  created(){
this.getPic()
  },
  methods: {
    onClose() {
      this.isShow = false;
    },
   async getPic(){
const res=await picList()
this.picList=res.data.data.picList
    }
  },
};
</script>
<style lang="less" scoped>
.main {
   display: grid;
  grid-template-columns: 4fr 1fr;
  .tips {
    letter-spacing: 2px;
    padding: 15px;
    position: relative;
    background-color: #3f3607;
    text-align: left;
    .closed {
      position: absolute;
      right: -5px;
      top: -5px;
    }
  }
  .title {
    letter-spacing: 2px;
    text-align: left;
    margin-top: 20px;
    margin-left: 10px;
    h1 {
      font-size: 20px;
    }
  }
}
</style>
