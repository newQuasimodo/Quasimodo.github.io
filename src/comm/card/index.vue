<template>
  <div class="card" :artDetail="artDetail">
    <el-card :body-style="{ padding: '0px' }" shadow="hover">
      <img
        src="https://zk-cereshop.oss-cn-shenzhen.aliyuncs.com/test/2021-12-30/5909ce47fcc24f99975763a108e104f8t2.jpg"
        class="image"
      />
      <div style="padding: 14px">
        <h1>营业执照申请|网上营业执照免费申请|个体户网上免费注册</h1>
        <div class="content clearfix">
          <div class="content">
            如今办理有关的证件非常的便捷都可以做到足不出户就能搞定，对于申请营业执照来说同样是如此。只需要申请人提交好资料，那么，网上怎么申请营业执照
            ？我相信你一定...
          </div>
          <div class="bottom">
            <div class="one">
              <i class="iconfont icon-renyuan"></i>
              <span class="name">justOn</span>
            </div>
            <div class="two">
              <i class="iconfont icon-shijian"></i>
              <span>2021年 12月 06日</span>
            </div>
            <div class="three">
              <i class="iconfont icon-pinglun"></i>
              <span>暂无评论</span>
            </div>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  props: {
    /**
     *  card数据
     * */
    artDetail: {
      type: Object,
      default: () => {
        return {
          title: "", //文章title
          artist: " ", //作者
          time: "", //时间
          pic: "", //封面图片 URL
          content: "", //内容
          comment: [], // 评论
        };
      },
    },
  },
  watch: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  components: {},
  beforeDestroy() {},
};
</script>
<style lang="less" scoped>
.card {
  letter-spacing: 1px;
  cursor: pointer;
  margin-top: 20px;
  text-align: left;
  .el-card {
    border: 1px solid #171520;
    background-color: #262335;
    color: #6f6b64;
    transition: 0.3s;
  }
  img {
    width: 100%;
    transition: all 0.6s;
  }
  img:hover {
    transform: scale(1.05);
  }
  h1 {
    font-size: 20px;
  }
  .content {
    margin-top: 10px;
  }
  .bottom {
    display: flex;
    margin-top: 10px;
    font-size: 12px;
    div {
      margin-right: 20px;
      .iconfont {
        font-size: 12px;
      }
      span {
        margin-left: 5px;
      }
    }
  }
}
</style>
