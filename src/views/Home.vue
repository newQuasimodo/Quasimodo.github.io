<template>
  <div class="home">
    <!-- <div class="bg">
      <vue-particles
        class="login-bg"
        color="#39AFFD"
        :particleOpacity="0.7"
        :particlesNumber="100"
        shapeType="circle"
        :particleSize="4"
        linesColor="#8DD1FE"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
    </div> -->
    <el-container id="container" style="width:100%;clear:both;">
      <el-aside  width="15%">
        <Aside />
      </el-aside>
      <el-container>
        <el-header  height="80px">
          <Header />
        </el-header>
        <el-main >
          <Main />
        </el-main>
        <el-footer width="85%">
          <Footer />
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Aside from "@/components/Aside.vue";
import Main from "@/components/Main.vue";
import Footer from "@/components/Footer.vue";
import { list } from "@/api/api.js";
export default {
  name: "Home",
  components: { Header, Main, Footer, Aside },
  data() {
    return {};
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      const res = await list();
      console.log(res);
    },
  },
};
</script>
<style lang="less" scoped>
.home {
  text-align: center;
  margin: 0 auto;
  width: 1300px;
  //  height: 100%;
  // .bg {
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   bottom: 0;
  //   right: 0;
  // }
  .el-aside{
    position: fixed;
    top: 0;
    
  }
  .el-header{
    overflow: hidden;
    position: fixed;
    top: 0;
    margin-left: 15%;
    z-index: 99;
    background-color: #131516;
  }
  .el-main{
     margin-left: 21%;
     margin-top: 70px;
  }
  .el-footer{
     margin-left: 21%;
  }
}
</style>
