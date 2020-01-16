<template>
  <div class="container">
    <div>
      <div class="search_field">
        <el-input
          placeholder="Từ khóa tìm kiếm"
          v-model="search_key"
          clearable
          prefix-icon="el-icon-search"
          style="width: 70% "
        >
        </el-input>
        <el-button type="primary" icon="el-icon-search">Tìm kiếm</el-button>
      </div>
      <el-divider content-position="left">Bộ lọc nâng cao</el-divider>
      <div class="filter">
          <el-select v-model="sort_by" clearable placeholder="Sắp xếp theo">
            <el-option
            v-for="item in sort_options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="doc_type" clearable placeholder="Loại văn bản">
            <el-option
              v-for="item in type_options"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
          <el-select v-model="search_range" clearable placeholder="Phạm vi tìm kiếm">
            <el-option
              v-for="item in range_options"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        <el-select v-model="key_option" clearable placeholder="Kết quả cần">
          <el-option
            v-for="item in key_options"
            :key="item.key"
            :label="item.label"
            :value="item.key">
          </el-option>
        </el-select>
      </div>
    </div>
    <el-divider content-position="left">Tìm thấy {{total}} kết quả</el-divider>

    <div class="search_result">
        <el-select style=" margin-bottom: 10px" v-model="per_page" placeholder="Số bản ghi hiển thị">
          <el-option
            v-for="item in per_page_options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      <div v-for="law in search_result">
        <el-row>
          <el-col style="background-color: #E4E7ED">
            <nuxt-link v-bind:to="'/laws/' + law.id"><div><i class="el-icon-check"></i>{{law.name}}</div></nuxt-link>
          </el-col>
        </el-row>
        <el-row
          :gutter="20"
          style="padding: 3px"
        >
          <el-col :span="8" style="width: 80%;">
            <div>
            {{law.description}}
            </div>
          </el-col>
          <el-col :span="4" style="width: 20%; float:right">
            <div>
              Ban hành: {{law.issued_date}}
              <br>
              Hiệu lực:
              <span v-if="law.is_over_due === 1">Hết hiệu lực</span>
              <span v-if="law.is_over_due === 0">Còn hiệu lực</span>
              <br>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-link type="primary"><i class="el-icon-document"></i>Toàn văn</el-link>
          <el-link type="info"><i class="el-icon-setting"></i>Thuộc tính</el-link>
          <el-link type="success"><i class="el-icon-data-analysis"></i>Lược đồ</el-link>
          <el-link type="danger"><i class="el-icon-download"></i>Tải về</el-link>
        </el-row>
        <el-row
          style="box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04); margin-top: 6px;"
        >
          <el-col>
            <span>Từ khóa liên quan: Quyết định, Bộ giáo dục và Đào tạo</span>
          </el-col>
        </el-row>
        <el-divider></el-divider>
      </div>
      <div style="float: right">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="100"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
    import law_listing from "../../components/law_listing";
    export default {
        name: "index",
      components: {law_listing},
      data() {
        return {
          search_key: null,
          sort_by: null,
          sort_options: [
            {
              value: '0',
              label: 'Ngày ban hành'
            },
            {
              value: '1',
              label: 'Ngày có hiệu lực'
            },
            {
              value: '2',
              label: 'Ngày hết hiệu lực'
            },
          ],
          doc_type: null,
          type_options: [
            'Chỉ thị','Điều ước quốc tế','Hiến pháp','Lệnh','Luật','Nghị định','Nghị quyết','Pháp lệnh','Quyết định',
            'Sắc lệnh','Thông tư', 'Thông tư liên tịch', 'Văn bản hợp nhất', 'Văn bản khác', 'Văn bản WTO'],
          search_range: null,
          range_options: ['Toàn quốc','Hà Nội', 'TP Hồ Chí Minh', 'Sài Gòn'],
          key_option: null,
          key_options: [
            {
              key: 0,
              label: 'Chính xác cụm từ trên'
            },
            {
              key: 1,
              label: 'Chứa cụm từ trên'
            },
          ],
          total: 100,
          search_result: [
            {
              id: 1,
              name: 'Quyết định 88/QĐ-BGDĐT năm 2020',
              description: 'Hiến pháp năm 1992 (sửa đổi, bổ sung năm 2001)',
              issued_date: '01/01/2020',
              is_over_due: 1,
            },
            {
              id: 2,
              name: 'Quyết định 88/QĐ-BGDĐT năm 2020',
              description: 'Hiến pháp năm 1992 (sửa đổi, bổ sung năm 2001)',
              issued_date: '01/01/2020',
              is_over_due: 1,
            },
            {
              id: 3,
              name: 'Quyết định 88/QĐ-BGDĐT năm 2020',
              description: 'Hiến pháp năm 1992 (sửa đổi, bổ sung năm 2001)',
              issued_date: '01/01/2020',
              is_over_due: 1,
            }
          ],
          per_page: null,
          per_page_options: [
            {
              value: 10,
              label: '10 bản ghi',
            },
            {
              value: 20,
              label: '20 bản ghi',
            },
            {
              value: 50,
              label: '50 bản ghi',
            },
          ]
        }
      }
    }
</script>

<style scoped>
  .container {
    clear: both;
    margin-left: 200px;
    margin-right: 200px;

  }
  .search_field {
    text-align: center;
  }
  .filter {
    text-align: center;
  }
  .el-link {
    margin-right: 10px;
  }
</style>
