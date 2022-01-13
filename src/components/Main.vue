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
        如有疑问请加群：
        <img
          @click="openQQ"
          src="https://pub.idqqimg.com/wpa/images/group.png"
          alt=""
        />
        <br />
        本博客免费向大家开发，无任何收费资源，并由博主维护及承担服务器费用，无其他收入，存在少许广告，请谅解，感谢您的访问。
      </div>
      <div class="title">
        <h1>卡西博客-自由、开放的个人学习、交流的博客</h1>
        网站源码分享，站点建设教程，梦溪的博客。QQ群：123456
        <img
          @click="openQQ"
          src="https://pub.idqqimg.com/wpa/images/group.png"
          alt=""
        />
        <br />
      </div>
      <div class="caroousel">
        <el-carousel>
          <el-carousel-item v-for="(item, index) in picList" :key="index">
            <img :src="item" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <Card v-for="index in 4" :key="index"></Card>
      <div class="pages">
        <el-pagination layout="prev, pager, next" :total="50"> </el-pagination>
      </div>
    </div>
    <div class="right">
      <el-tabs v-model="activeName" @tab-click="handleClick" :stretch="true">
        <el-tab-pane name="first">
          <span slot="label"
            ><i class="el-icon-date" style="color: #6f6b64"></i>
          </span>
          <h1>热门文章</h1>
          <div class="item" v-for="index in 3" :key="index">
            <div class="img">
              <img src="../assets/images/6.jpg" alt="" />
            </div>
            <div class="art">
              <p>免费注册个体户营业执照 0成本20分钟快速办理出证</p>
              <i class="el-icon-view"></i>
              <span style="font-size: 12px; margin-left: 5px">12987</span>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane name="second">
          <span slot="label"
            ><i class="el-icon-thumb" style="color: #6f6b64"></i>
          </span>
          <h1>最新评论</h1>
          <div class="item" v-for="index in 3" :key="index">
            <div class="img1">
              <img src="../assets/images/6.jpg" alt="" />
            </div>
            <div class="art">
              <p>一棵开花的树</p>
              <p style="font-size: 12px; margin-left: 5px">666</p>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane name="third">
          <span slot="label"
            ><i class="el-icon-cherry" style="color: #6f6b64"></i>
          </span>
          <h1>随机文章</h1>
          <div class="item" v-for="index in 3" :key="index">
            <div class="img">
              <img src="../assets/images/6.jpg" alt="" />
            </div>
            <div class="art">
              <p>免费注册个体户营业执照 0成本20分钟快速办理出证</p>
              <i class="el-icon-view"></i>
              <span style="font-size: 12px; margin-left: 5px">12987</span>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
      <div class="message">
        <h1>博客信息</h1>
        <ul>
          <li>
            <div><i class="iconfont icon-shouye"></i>文章数目</div>
            <span>333</span>
          </li>
          <li>
            <div><i class="iconfont icon-liuyan"></i>评论数目</div>
            <span>333</span>
          </li>
          <li>
            <div><i class="iconfont icon-guidang"></i>运行天数</div>
            <span>333天</span>
          </li>
          <li>
            <div><i class="iconfont icon-lianjie"></i>最后活动</div>
            <span>5天前</span>
          </li>
          <li>
            <div><i class="iconfont icon-yule"></i>访客总数</div>
            <span>15222</span>
          </li>
          <li>
            <div><i class="iconfont icon-youxi"></i>响应耗时</div>
            <span>15ms</span>
          </li>
          <li>
            <div><i class="iconfont icon-youxi"></i>内存占用</div>
            <span>25MB</span>
          </li>
        </ul>
      </div>
      <!-- 标签页 -->
      <div class="tabs">
        <h1>标签页</h1>
        <div id="echarts" @click="goCd">
         1234
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Card from "@/comm/card/index.vue";
import { picList } from "@/api/api.js";
export default {
  name: "Main",
  components: {
    Card,
  },
  data() {
    return {
      isShow: true,
      picList: [],
      activeName: "first",
    };
  },
  created() {
    this.getPic();
  },
  methods: {
    onClose() {
      this.isShow = false;
    },
    async getPic() {
      const res = await picList();
      this.picList = res.data.data.picList;
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    openQQ() {
      window.open(
        "tencent://message/?Menu=yes&uin=740139373&Site=80fans&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a545b1714f9d45",
        "_blank"
      );
    },
    goCd() {
      // window.open(
      //   "http://www.huaxuejia.cn/ism/mol/examples/#",'name=_parent - URL','width=600,height=400'
      // );
      this.$router.push('/about')
    },
  },
};
</script>
<style lang="less" scoped>
.main {
  display: grid;

  grid-template-columns: 4fr 1.5fr;
  .tips {
    letter-spacing: 2px;
    padding: 15px;
    position: relative;
    background-color: #3f3607;
    color: wheat;
    text-align: left;
    img {
      cursor: pointer;
    }
    .closed {
      position: absolute;
      right: -5px;
      top: -5px;
    }
  }
  .title {
    color: #6f6b64;
    text-align: left;
    margin-top: 20px;
    margin-left: 10px;
    h1 {
      font-size: 20px;
    }
    img {
      cursor: pointer;
      z-index: 999;
    }
  }
  .pages {
    margin-top: 40px;
    /deep/.el-pagination .btn-prev,
    /deep/.el-pagination .btn-next,
    /deep/.el-pagination .el-pager .number {
      background-color: transparent !important;
    }
  }
  .right {
    /deep/.el-tabs__nav-wrap::after {
      background-color: transparent !important;
    }

    color: #6f6b64;
    text-align: left;
    padding: 0 5px 0 20px;
    h1 {
      font-size: 16px;

      margin-bottom: 10px;
    }
    .item {
      display: flex;
      margin-bottom: 10px;
      .img {
        margin-top: 8px;
        width: 80px;
        margin-right: 10px;
        img {
          width: 100%;
          border-radius: 50%;
        }
      }
      .art {
        font-size: 12px;
      }
      .img1 {
        margin-top: 8px;
        width: 54px;
        margin-right: 10px;
        img {
          width: 100%;
          border-radius: 50%;
        }
      }
    }
    .message {
      margin-top: 20px;
      ul > li {
        margin-left: 20px;
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        i {
          margin-right: 10px;
        }
        span {
          font-size: 12px;
          height: 18px;
          line-height: 18px;
          padding: 0 5px;
          color: #fff;
          display: inline-block;
          border-radius: 5px;
          background-color: #777;
          margin-top: 4px;
        }
      }
    }
  }
}
</style>
