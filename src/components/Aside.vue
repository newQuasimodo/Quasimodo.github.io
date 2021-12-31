<template>
  <div class="aside">
    <div class="home"><i class="el-icon-s-home"></i> <span>卡西</span></div>
    <div class="top">
      <el-avatar
        class="avatar"
        shape="circle"
        :size="66"
        src="http://oss-dev-01.oss-cn-shenzhen.aliyuncs.com/headimg/20211230/12bc5422-2946-4316-be05-d5f2f9f9b1f7.jpg"
      ></el-avatar>
      <div class="name">quasimodo <i class="el-icon-caret-bottom"></i></div>
      <div class="remark">Im my life I just smile !</div>
    </div>
    <div class="item">
      <span>导航</span>
      <ul>
        <li>
          <a href=""> <i class="iconfont icon-shouye"></i>首页</a>
        </li>
        <li>
          <a href=""> <i class="iconfont icon-liuyan"></i>留言</a>
        </li>
        <li>
          <a href=""> <i class="iconfont icon-guidang"></i>归档</a>
        </li>
        <li>
          <a href=""> <i class="iconfont icon-lianjie"></i>友链</a>
        </li>
        <li>
          <a href=""> <i class="iconfont icon-yule"></i>娱乐</a>
        </li>
        <li>
          <a href=""> <i class="iconfont icon-youxi"></i>游戏</a>
        </li>
      </ul>
    </div>
    <div class="item1">
      <span>组成</span>
      <el-menu
        default-active="1-2"
        @select="menuSelected"
        background-color="transparent"
        text-color="#ada59b"
        active-text-color="#409eff"
        unique-opened
        :collapse-transition="false"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="iconfont icon-fenlei"></i>
            <span style="font-size: 16px; margin-left: 15px">分类</span>
          </template>
          <el-menu-item
            style="padding-left: 0px !important; margin-left: 40px"
            index="1-1"
            >选项1</el-menu-item
          >
          <el-menu-item
            style="padding-left: 0px !important; margin-left: 40px"
            index="1-2"
            >选项2</el-menu-item
          >
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="iconfont icon-lianjie"></i>
            <span style="font-size: 16px; margin-left: 15px">友链</span>
          </template>
          <el-menu-item
            style="padding-left: 0px !important; margin-left: 40px"
            index="2-1"
            >选项1</el-menu-item
          >
          <el-menu-item
            style="padding-left: 0px !important; margin-left: 40px"
            index="2-2"
            >选项2</el-menu-item
          >
          <el-menu-item
            style="padding-left: 0px !important; margin-left: 40px"
            index="2-3"
            >选项3</el-menu-item
          >
        </el-submenu>
      </el-menu>
    </div>
    <div class="item2">
      <a class="management">
        <i class="iconfont icon-shezhi"></i>
        <h1>管理</h1>
      </a>
      <a class="article">
        <i class="iconfont icon-wenzhang"></i>
        <h1>文章</h1>
      </a>
      <a class="comments">
        <i class="iconfont icon-pinglun"></i>
        <h1>评论</h1>
      </a>
    </div>
  </div>
</template>
<script>
import "../assets/iconfont/iconfont.js";
import "../assets/iconfont/iconfont.css";
export default {
  name: "Aside",
  data() {
    return {};
  },
  methods: {
    menuSelected(e) {
      console.log(e);
    },
  },
};
</script>
<style lang="less" scoped>
.aside {
  min-height: 100vh;
  background-color: #262335;
  .home {
    font-size: 20px;
    font-weight: 700;
    padding: 30px 20px;
    text-align: left;
  }
  .top {
    color: grey;
    .avatar:hover {
      transform: rotate(666turn);
      transition-delay: 1s;
      transition-property: all;
      transition-duration: 59s;
      transition-timing-function: cubic-bezier(0.34, 0, 0.84, 1);
    }
  }
  .name {
    font-size: 14px;
    font-weight: 700;
  }
  .item {
    text-align: left;
    font-size: 16px;
    padding: 20px;
    padding-top: 40px;
    ul {
      li {
        margin-top: 20px;
        i {
          margin-right: 15px;
        }
      }
      a:hover {
        color: #409eff;
      }
    }
  }
  .item1 {
    text-align: left;
    font-size: 16px;
    padding: 20px;
  }
  .el-menu {
    border: none;
  }
  /deep/.el-submenu .el-menu-item {
    padding: 0px;
    min-width: 120px;
  }
  /deep/.el-submenu__title:hover {
    background-color: transparent !important;
    color: #409eff !important;
  }
  /deep/.el-menu-item:hover {
    background-color: transparent !important;
    color: #409eff !important;
  }
  .item2 {
    height: 45px;
    border-top: 1px solid gray;
    width: 15%;
    display: flex;
    justify-content: space-evenly;
    position: fixed;
    bottom: 10px;
    font-size: 12px;
    padding-top: 5px;
     color: #6f6b64;
     a:hover{
        color: #409eff;
        text-decoration:none;
        cursor: pointer;
     }
     h1{
       display: block;
       height: 15px;
       line-height: 15px;
     }
  }
}
</style>
