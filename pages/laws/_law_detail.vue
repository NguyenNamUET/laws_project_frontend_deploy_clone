<template>
  <el-container>
    <el-aside width="200px">
    </el-aside>

    <el-main style="margin-left: 120px; margin-right: 120px; box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)">
      <el-tabs>
        <el-tab-pane label="Nội dung">{{result.content}}</el-tab-pane>
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
      name: "law_detail",
      data() {
        return {
          slug: this.$route.params,
          result: {},
          laws: [
            {
              id: 1,
              name:
                "Quyết định 04/2020/QĐ-TTg sửa đổi Quy chế hoạt động ứng phó sự cố hóa chất độc kèm theo" +
                " Quyết định 26/2016/QĐ-TTg do Thủ tướng Chính phủ ban hành",
              content:
              "BỘ CÔNG THƯƠNG\n" +
                "--------\n" +
                "\n" +
                "CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM\n" +
                "Độc lập - Tự do - Hạnh phúc\n" +
                "---------------\n" +
                "\n" +
                "Số: 109/QĐ-BCT\n" +
                "\n" +
                "Hà Nội, ngày 10 tháng 01 năm 2020\n" +
                "\n" +
                " \n" +
                "\n" +
                "QUYẾT ĐỊNH\n" +
                "\n" +
                "VỀ VIỆC BAN HÀNH KẾ HOẠCH HÀNH ĐỘNG CỦA BỘ CÔNG THƯƠNG THỰC HIỆN NGHỊ QUYẾT SỐ 02/NQ-CP NGÀY 01 THÁNG 01 NĂM 2020 CỦA CHÍNH PHỦ VỀ TIẾP TỤC THỰC HIỆN NHỮNG NHIỆM VỤ, GIẢI PHÁP CHỦ YẾU CẢI THIỆN MÔI TRƯỜNG KINH DOANH, NÂNG CAO NĂNG LỰC CẠNH TRANH QUỐC GIA NĂM 2020\n" +
                "\n" +
                "BỘ TRƯỞNG BỘ CÔNG THƯƠNG\n" +
                "\n" +
                "Căn cứ Nghị định số 98/2017/NĐ-CP ngày 18 tháng 8 năm 2017 của Chính phủ quy định chức năng, nhiệm vụ, quyền hạn và cơ cấu tổ chức của Bộ Công Thương;\n" +
                "\n" +
                "Căn cứ Nghị quyết số 02/NQ-CP ngày 01 tháng 01 năm 2020 của Chính phủ về tiếp tục thực hiện những nhiệm vụ, giải pháp chủ yếu cải thiện môi trường kinh doanh, nâng cao năng lực cạnh tranh quốc gia năm 2020;\n" +
                "\n" +
                "Theo đề nghị của Vụ trưởng Vụ Kế hoạch,\n" +
                "\n" +
                "QUYẾT ĐỊNH:\n" +
                "\n" +
                "Điều 1. Ban hành kèm theo Quyết định này Kế hoạch hành động của Bộ Công Thương thực hiện Nghị quyết số 02/NQ-CP ngày 01 tháng 01 năm 2020 của Chính phủ về tiếp tục thực hiện những nhiệm vụ, giải pháp chủ yếu cải thiện môi trường kinh doanh, nâng cao năng lực cạnh tranh quốc gia năm 2020.\n" +
                "\n" +
                "Điều 2. Quyết định này có hiệu lực thi hành kể từ ngày ký.\n" +
                "\n" +
                "Điều 3. Chánh Văn phòng Bộ, Chánh Thanh tra Bộ, Thủ trưởng các cơ quan, đơn vị thuộc Bộ, Chủ tịch Hội đồng thành viên, Chủ tịch Hội đồng quản trị, Tổng giám đốc các Tổng công ty, doanh nghiệp thuộc Bộ, Giám đốc Sở Công Thương các tỉnh, thành phố trực thuộc Trung ương chịu trách nhiệm thi hành Quyết định này./.\n" +
                "\n" +
                " \n" +
                "\n" +
                " \n" +
                "\n" +
                "Nơi nhận:\n" +
                "- Như Điều 3;\n" +
                "- Thủ tướng Chính phủ (để b/c);\n" +
                "- Văn phòng Chính phủ;\n" +
                "- Bộ Kế hoạch và Đầu tư;\n" +
                "- Lãnh đạo Bộ;\n" +
                "- Website Bộ Công Thương;\n" +
                "- Lưu: VT, KH (2).\n" +
                "\n" +
                "BỘ TRƯỞNG\n" +
                "\n" +
                "\n" +
                "\n" +
                "\n" +
                "Trần Tuấn Anh"
            },
            {
              id: 2,
              name:
                "Quyết định 04/2020/QĐ-TTg sửa đổi Quy chế hoạt động ứng phó sự cố hóa chất độc kèm theo" +
                " Quyết định 26/2016/QĐ-TTg do Thủ tướng Chính phủ ban hành",
              content:
                "BỘ CÔNG THƯƠNG\n" +
                "--------\n" +
                "\n" +
                "CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM\n" +
                "Độc lập - Tự do - Hạnh phúc\n" +
                "---------------\n" +
                "\n" +
                "Số: 109/QĐ-BCT\n" +
                "\n" +
                "Hà Nội, ngày 10 tháng 01 năm 2020\n" +
                "\n" +
                " \n" +
                "\n" +
                "QUYẾT ĐỊNH\n" +
                "\n" +
                "VỀ VIỆC BAN HÀNH KẾ HOẠCH HÀNH ĐỘNG CỦA BỘ CÔNG THƯƠNG THỰC HIỆN NGHỊ QUYẾT SỐ 02/NQ-CP NGÀY 01 THÁNG 01 NĂM 2020 CỦA CHÍNH PHỦ VỀ TIẾP TỤC THỰC HIỆN NHỮNG NHIỆM VỤ, GIẢI PHÁP CHỦ YẾU CẢI THIỆN MÔI TRƯỜNG KINH DOANH, NÂNG CAO NĂNG LỰC CẠNH TRANH QUỐC GIA NĂM 2020\n" +
                "\n" +
                "BỘ TRƯỞNG BỘ CÔNG THƯƠNG\n" +
                "\n" +
                "Căn cứ Nghị định số 98/2017/NĐ-CP ngày 18 tháng 8 năm 2017 của Chính phủ quy định chức năng, nhiệm vụ, quyền hạn và cơ cấu tổ chức của Bộ Công Thương;\n" +
                "\n" +
                "Căn cứ Nghị quyết số 02/NQ-CP ngày 01 tháng 01 năm 2020 của Chính phủ về tiếp tục thực hiện những nhiệm vụ, giải pháp chủ yếu cải thiện môi trường kinh doanh, nâng cao năng lực cạnh tranh quốc gia năm 2020;\n" +
                "\n" +
                "Theo đề nghị của Vụ trưởng Vụ Kế hoạch,\n" +
                "\n" +
                "QUYẾT ĐỊNH:\n" +
                "\n" +
                "Điều 1. Ban hành kèm theo Quyết định này Kế hoạch hành động của Bộ Công Thương thực hiện Nghị quyết số 02/NQ-CP ngày 01 tháng 01 năm 2020 của Chính phủ về tiếp tục thực hiện những nhiệm vụ, giải pháp chủ yếu cải thiện môi trường kinh doanh, nâng cao năng lực cạnh tranh quốc gia năm 2020.\n" +
                "\n" +
                "Điều 2. Quyết định này có hiệu lực thi hành kể từ ngày ký.\n" +
                "\n" +
                "Điều 3. Chánh Văn phòng Bộ, Chánh Thanh tra Bộ, Thủ trưởng các cơ quan, đơn vị thuộc Bộ, Chủ tịch Hội đồng thành viên, Chủ tịch Hội đồng quản trị, Tổng giám đốc các Tổng công ty, doanh nghiệp thuộc Bộ, Giám đốc Sở Công Thương các tỉnh, thành phố trực thuộc Trung ương chịu trách nhiệm thi hành Quyết định này./.\n" +
                "\n" +
                " \n" +
                "\n" +
                " \n" +
                "\n" +
                "Nơi nhận:\n" +
                "- Như Điều 3;\n" +
                "- Thủ tướng Chính phủ (để b/c);\n" +
                "- Văn phòng Chính phủ;\n" +
                "- Bộ Kế hoạch và Đầu tư;\n" +
                "- Lãnh đạo Bộ;\n" +
                "- Website Bộ Công Thương;\n" +
                "- Lưu: VT, KH (2).\n" +
                "\n" +
                "BỘ TRƯỞNG\n" +
                "\n" +
                "\n" +
                "\n" +
                "\n" +
                "Trần Tuấn Anh"
            },
            {
              id: 3,
              name:
                "Quyết định 04/2020/QĐ-TTg sửa đổi Quy chế hoạt động ứng phó sự cố hóa chất độc kèm theo" +
                " Quyết định 26/2016/QĐ-TTg do Thủ tướng Chính phủ ban hành",
              content:
                "BỘ CÔNG THƯƠNG\n" +
                "--------\n" +
                "\n" +
                "CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM\n" +
                "Độc lập - Tự do - Hạnh phúc\n" +
                "---------------\n" +
                "\n" +
                "Số: 109/QĐ-BCT\n" +
                "\n" +
                "Hà Nội, ngày 10 tháng 01 năm 2020\n" +
                "\n" +
                " \n" +
                "\n" +
                "QUYẾT ĐỊNH\n" +
                "\n" +
                "VỀ VIỆC BAN HÀNH KẾ HOẠCH HÀNH ĐỘNG CỦA BỘ CÔNG THƯƠNG THỰC HIỆN NGHỊ QUYẾT SỐ 02/NQ-CP NGÀY 01 THÁNG 01 NĂM 2020 CỦA CHÍNH PHỦ VỀ TIẾP TỤC THỰC HIỆN NHỮNG NHIỆM VỤ, GIẢI PHÁP CHỦ YẾU CẢI THIỆN MÔI TRƯỜNG KINH DOANH, NÂNG CAO NĂNG LỰC CẠNH TRANH QUỐC GIA NĂM 2020\n" +
                "\n" +
                "BỘ TRƯỞNG BỘ CÔNG THƯƠNG\n" +
                "\n" +
                "Căn cứ Nghị định số 98/2017/NĐ-CP ngày 18 tháng 8 năm 2017 của Chính phủ quy định chức năng, nhiệm vụ, quyền hạn và cơ cấu tổ chức của Bộ Công Thương;\n" +
                "\n" +
                "Căn cứ Nghị quyết số 02/NQ-CP ngày 01 tháng 01 năm 2020 của Chính phủ về tiếp tục thực hiện những nhiệm vụ, giải pháp chủ yếu cải thiện môi trường kinh doanh, nâng cao năng lực cạnh tranh quốc gia năm 2020;\n" +
                "\n" +
                "Theo đề nghị của Vụ trưởng Vụ Kế hoạch,\n" +
                "\n" +
                "QUYẾT ĐỊNH:\n" +
                "\n" +
                "Điều 1. Ban hành kèm theo Quyết định này Kế hoạch hành động của Bộ Công Thương thực hiện Nghị quyết số 02/NQ-CP ngày 01 tháng 01 năm 2020 của Chính phủ về tiếp tục thực hiện những nhiệm vụ, giải pháp chủ yếu cải thiện môi trường kinh doanh, nâng cao năng lực cạnh tranh quốc gia năm 2020.\n" +
                "\n" +
                "Điều 2. Quyết định này có hiệu lực thi hành kể từ ngày ký.\n" +
                "\n" +
                "Điều 3. Chánh Văn phòng Bộ, Chánh Thanh tra Bộ, Thủ trưởng các cơ quan, đơn vị thuộc Bộ, Chủ tịch Hội đồng thành viên, Chủ tịch Hội đồng quản trị, Tổng giám đốc các Tổng công ty, doanh nghiệp thuộc Bộ, Giám đốc Sở Công Thương các tỉnh, thành phố trực thuộc Trung ương chịu trách nhiệm thi hành Quyết định này./.\n" +
                "\n" +
                " \n" +
                "\n" +
                " \n" +
                "\n" +
                "Nơi nhận:\n" +
                "- Như Điều 3;\n" +
                "- Thủ tướng Chính phủ (để b/c);\n" +
                "- Văn phòng Chính phủ;\n" +
                "- Bộ Kế hoạch và Đầu tư;\n" +
                "- Lãnh đạo Bộ;\n" +
                "- Website Bộ Công Thương;\n" +
                "- Lưu: VT, KH (2).\n" +
                "\n" +
                "BỘ TRƯỞNG\n" +
                "\n" +
                "\n" +
                "\n" +
                "\n" +
                "Trần Tuấn Anh"
            },
          ]
        }
      },
      methods: {
        getDetailLaw() {
          let law = [];
          for (law of this.laws) {
            console.log(law);
            if (law.id === this.slug.law_detail) {
              this.result = law;
              break;
            }
          }
        }
      },
      created() {
        this.getDetailLaw();
        console.log('result: ',this.result);
      },
    }
</script>

<style scoped>
  .el-col {
    border: 1px solid #7F828B;
  }
</style>
