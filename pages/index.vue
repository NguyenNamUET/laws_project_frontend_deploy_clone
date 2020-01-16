<template>
  <div>
    <div class="header">
      <el-carousel height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="info" style="margin-top: 20px; margin-left: 100px; margin-right: 100px;">
      <el-row>
        <el-col :span="8">
          <h1>Tra cứu văn bản pháp luật</h1>
          <h3>Thông tin chi tiết ở đây</h3>
        </el-col>
        <el-col :span="8">
          <h1>Soạn thảo văn bản pháp luật</h1>
          <h3>Thông tin chi tiết ở đây</h3>
        </el-col>
        <el-col :span="8">
          <h1>Cập nhật tin tức pháp luật</h1>
          <h3>Thông tin chi tiết ở đây</h3>
        </el-col>
      </el-row>
    </div>

    <div class="main" style="margin-top: 20px;">
      <el-row :gutter="20">
        <el-col :span="8">
          <h3>Văn bản mới ban hành</h3>
          <nuxt-link v-for="law in laws" v-bind:to="'/laws/' + law.id"><div>{{law.name}}</div></nuxt-link>
        </el-col>
        <el-col :span="8">
          <h3>Văn bản được xem nhiều</h3>
          <div class="suggested_laws">
            <nuxt-link v-for="law in laws" to="/"><div>{{law.name}}</div></nuxt-link>
          </div>
        </el-col>
        <el-col :span="8">
          <h3>Văn bản mới hết hiệu lực</h3>
          <div class="suggested_laws">
            <nuxt-link v-for="law in laws" to="/"><div>{{law.name}}</div></nuxt-link>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import law_listing from "../components/law_listing";
  export default {
    components: {
      law_listing
    },
    data() {
      return {
        laws: [
          {
            id: 1,
            name:
              "Quyết định 04/2020/QĐ-TTg sửa đổi Quy chế hoạt động ứng phó sự cố hóa chất độc kèm theo" +
              " Quyết định 26/2016/QĐ-TTg do Thủ tướng Chính phủ ban hành"
          },
          {
            id: 2,
            name:
              "Quyết định 04/2020/QĐ-TTg sửa đổi Quy chế hoạt động ứng phó sự cố hóa chất độc kèm theo" +
              " Quyết định 26/2016/QĐ-TTg do Thủ tướng Chính phủ ban hành"
          },
          {
            id: 3,
            name:
              "Quyết định 04/2020/QĐ-TTg sửa đổi Quy chế hoạt động ứng phó sự cố hóa chất độc kèm theo" +
              " Quyết định 26/2016/QĐ-TTg do Thủ tướng Chính phủ ban hành"
          },
        ]
      }
    }
  }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .el-col {
    text-align: center;
    background-color: #EBEEF5;
  }
  .suggested_laws {
    text-align: left;
  }
</style>
