<template>
  <el-container style="margin-top: 10px;">
    <el-aside width="200px">
    </el-aside>

    <el-main style="margin-left: 120px; margin-right: 120px; box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)">
      <el-tabs>
        <el-tab-pane label="Nội dung">{{result.content}}</el-tab-pane>
        <el-tab-pane label="Thuộc tính">
          <span>
            <b>{{result.title}}</b>
            <br>
            {{result.description}}
          </span>
          <el-divider content-position="left"></el-divider>
          <div>
<!--            <el-row>-->
<!--              <el-col :span="5">Số hiệu</el-col>-->
<!--              <el-col :span="10">{{}}</el-col>-->
<!--            </el-row>-->
            <el-row>
              <el-col :span="5">Loại văn bản</el-col>
              <el-col :span="10">{{result.type}}</el-col>
            </el-row>
            <el-row>
              <el-col :span="5">Nơi ban hành</el-col>
              <el-col :span="10">{{result.organization}}</el-col>
            </el-row>
            <el-row>
              <el-col :span="5">Ngày ban hành</el-col>
              <el-col :span="10">{{result.issued_date}}</el-col>
            </el-row>
            <el-row>
              <el-col :span="5">Ngày có hiệu lực</el-col>
              <el-col :span="10">{{result.effective_date}}</el-col>
            </el-row>
<!--            <el-row>-->
<!--              <el-col :span="5">Lần cập nhật cuối</el-col>-->
<!--              <el-col :span="10">{{result.last_update_time}}</el-col>-->
<!--            </el-row>-->
            <el-row>
              <el-col :span="5">Người ký</el-col>
              <el-col :span="10">{{result.signer}}</el-col>
            </el-row>

          </div>
        </el-tab-pane>
        <el-tab-pane label="Văn bản liên quan"></el-tab-pane>
      </el-tabs>
    </el-main>

    <el-aside width="200px">
    </el-aside>
  </el-container>
</template>

<script>
    import {GetDocumentDetail} from "../../services/document_detail/detail_api";
    export default {
      name: "law_detail",
      data() {
        return {
          result: {},
        }
      },
      async mounted() {
        let detail = await GetDocumentDetail(this.$route.params.law_detail);
        this.result = detail;
      },
    }
</script>

<style scoped>
  .el-col {
    border: 1px solid #7F828B;
  }
</style>
