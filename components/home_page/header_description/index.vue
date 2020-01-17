<template>
  <div class="_header">

    <el-col :span="12" :offset="6" class="_header_image">
      <div class="_header_text">

      </div>
      <div class="_header_des">
        <h1>Hệ thống tìm kiếm và soạn thảo</h1>

        <h1>văn bản pháp luật</h1>
        <p style="font-weight: 600; margin-top: 20px; max-width: 450px">Dữ liệu của hệ thống được lấy từ cổng thông tin quốc gia về văn bản pháp luật ...</p>
        <div class="_header_button_des">

          <el-button type="primary">Tìm kiếm?</el-button>
          <el-button type="primary">Soạn thảo?</el-button>
        </div>
      </div>
    </el-col>
  </div>
</template>
<script>
  export default {
    name:  "HeaderDescription"
  }
</script>
<style lang="scss">
  ._header{
    background-color: #fbfbfb;

    min-height: 500px;
    ._header_image{

      min-height: 500px;
      background-image: url("../../../assets/images/header_image.png");
      background-size: auto;
      background-repeat: no-repeat;
      background-position: right center;
      ._header_text{
      }
      ._header_des{
        position: relative;
        margin-top: 14%;
        max-width: 550px;
        font-family: 'Arial';
        color: #444343;

        h1{

          font-family: "Gelasio";
          /*text-align: center  ;*/
          font-size: 34px;
          font-weight: 800;
          color: #005461;
        }
        ._header_button_des{
          margin-top: 10px;
          button{
            margin: 0;
            height: 30px;
            padding: 0px 30px;
            line-height: 30px;
            background-color: #366ee0;
            border-radius: 2px;
            p{
              font-weight: bold;

            }
          }
          button:last-child{
            background: none;
            border: none;
            color: #366ee0;
            text-decoration: underline;
          }
        }
      }
    }
  }
</style>
