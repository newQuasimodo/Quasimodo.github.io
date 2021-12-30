<template>
  <div class="header">
    <div class="item">
      <i class="iconfont icon-all"></i>
      <i class="iconfont icon-xiangxia1" style="font-size: 12px"></i>
       <el-input
    placeholder="输入关键词搜索"
    suffix-icon="el-icon-search"
    style="width: 200px;margin-left:20px"
    v-model="input">
  </el-input>
    </div>
    <div class="player">
      <aPlayer :songInfo="songInfo"></aPlayer>
    </div>
    <div class="tools">
         <i class="iconfont icon-xiazai"></i>
         <i class="iconfont icon-dizhi"></i>
         <i class="iconfont icon-liuyan"></i>
         <i class="iconfont icon-yuechi"></i>
    </div>
  </div>
</template>
<script>
import { music } from "@/api/api.js";
import aPlayer from "@/comm/audio/aPlayer.vue";
export default {
  name: "Header",
  components: {
    aPlayer,
  },
  data() {
    return {
      songInfo: {
        title: "我爱祖国.map3", //歌曲名称
        artist: "李健", //演唱者
        lrc: "", //LRC 歌词或者歌词文件的 URL
        pic: "https://static.hi-five.cn//artwork/KPM/KPM/KPM_KPM_0420/KPM_420_min.jpg", //封面图片 URL
        src: "https://music.163.com/song/media/outer/url?id=1466598056.mp3", //音频文件的 URL
      },
      input:""
    };
  },
  created() {
    this.getMusic();
  },
  methods: {
    async getMusic() {
      const res = await music();
        this.songInfo = res.data.data;
    },
  },
};
</script>
<style lang="less" scoped>
.header {
    display: grid;
  height: 60px;
  line-height: 60px;
  width: 100%;
  grid-template-columns: 5fr 3fr 2fr; // 列宽这样是分成6份各占 1 2 3 份 效果如下图
  // background-color:#3b95d1;
  .item{
      text-align: left;
      padding-left: 30px;
      padding-top: 15px;
       /deep/.el-input__inner{
          border-radius:30px;
      }
  }
  .player {
  }
  .tools{
      padding-top: 15px;
       display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
</style>
