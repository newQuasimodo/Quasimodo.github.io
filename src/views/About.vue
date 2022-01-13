<template>
  <div class="about">
 <el-row :gutter="10">
  <el-col :xs="2"  :sm="2"  :md="2"  :lg="5"  :xl="5"><div class="grid-content bg-purple">1</div></el-col>
  <el-col :xs="21" :sm="21" :md="21" :lg="14" :xl="14"><div class="grid-content bg-purple-light">2</div></el-col>
  <el-col :xs="1"  :sm="1"  :md="1"  :lg="5"  :xl="5"><div class="grid-content bg-purple">3</div></el-col>
</el-row>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Aside from "@/components/Aside.vue";
import Main from "@/components/Main.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "About",
  components: { Header, Main, Footer, Aside },
  
}
</script>
<style>
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>