<template>
  <el-container>
    <el-aside width="200px">
    </el-aside>

    <el-main style="margin-left: 120px; margin-right: 120px; box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)">
      <el-tabs>
        <el-tab-pane label="Nội dung">Chưa có j</el-tab-pane>
        <el-tab-pane label="Thuộc tính">
          <span>
            Quyết định 88/QĐ-BGDĐT năm 2020 sửa đổi Quy định chức năng, nhiệm vụ, quyền hạn và cơ cấu tổ chức của đơn vị giúp
            Bộ trưởng thực hiện chức năng quản lý nhà nước thuộc Bộ Giáo dục và Đào tạo kèm theo Quyết định 2077/QĐ-BGDĐT
          </span>
          <el-divider content-position="left"></el-divider>
          <div>
            <el-row>
              <el-col :span="4">Số hiệu</el-col>
              <el-col :span="10">06/HD-VKSTC</el-col>
            </el-row>
            <el-row>
              <el-col :span="4">Loại văn bản</el-col>
              <el-col :span="10">Hướng dẫn</el-col>
            </el-row>
            <el-row>
              <el-col :span="4">Nơi ban hành</el-col>
              <el-col :span="10">Bộ Giáo dục và Đào tạo</el-col>
            </el-row>
            <el-row>
              <el-col :span="4">Ngày ban hành</el-col>
              <el-col :span="10">01/01/2020</el-col>
            </el-row>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Văn bản liên quan">Chưa có j</el-tab-pane>
      </el-tabs>
    </el-main>

    <el-aside width="200px">
    </el-aside>
  </el-container>
</template>

<script>
    export default {
        name: "law_detail"
    }
</script>

<style scoped>
  .el-col {
    border: 1px solid #7F828B;
  }
</style>
