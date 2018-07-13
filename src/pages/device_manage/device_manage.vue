<template>
    <div>
      <div class="container-fluid monitoring_data">
        <div class="container">

            <div class="col-md-3  siderbar">
              <div>
                <p class="p_head">设备管理</p>
              </div>
              <p>按监测区域</p>
              <div class="collapse in">
                <form action="">
                  <label for="d1"><input type="checkbox" id="d1">站房整体变形监测</label>
                  <label for="d2"><input type="checkbox" id="d22">承轨层监测</label>
                  <label for="d3"><input type="checkbox" id="d33">候车层与地下层</label>
                  <label for="d4"><input type="checkbox" id="d4">微环境监测</label>
                  <label for="d5"><input type="checkbox" id="d5">雨棚监测</label>
                </form>
              </div>
              <p class="btn1" role="button"  href="#d2" aria-expanded="false" aria-controls="d2">按监测设备</p>
              <div class="collapse in" id="d2">
                <form action="">
                  <label for="d6"><input type="checkbox" id="d6">GNSS强震仪</label>
                  <label for="d7"><input type="checkbox" id="d7">承轨层监测</label>
                  <label for="d8"><input type="checkbox" id="d8">北斗</label>
                  <label for="d9"><input type="checkbox" id="d9">静力水准仪</label>
                  <label for="d10"><input type="checkbox" id="d10">倾角计</label>
                  <label for="d11"><input type="checkbox" id="d11">表面应力应变计</label>
                  <label for="d12"><input type="checkbox" id="d12">加速度计</label>
                  <label for="d13"><input type="checkbox" id="d13">温度传感器</label>
                  <label for="d14"><input type="checkbox" id="d14">风力风压计</label>
                  <label for="d15"><input type="checkbox" id="d15">裂缝计</label>
                  <label for="d16"><input type="checkbox" id="d16">雨量计</label>
                  <label for="d17"><input type="checkbox" id="d17">噪声监测仪</label>
                  <label for="d18"><input type="checkbox" id="d18">测量机器人</label>
                  <label for="d19"><input type="checkbox" id="d19">摄像头</label>
                </form>
              </div>
              <p class="btn1" role="button"  href="#d3" aria-expanded="false" aria-controls="d3">按监测设备编号</p>
              <div class="collapse in" id="d3">
                <form action="">
                  <label for="d20"><input type="checkbox" id="d20">S0001</label>
                  <label for="d21"><input type="checkbox" id="d21">S0002</label>
                </form>
              </div>
            </div>
            <div class="col-md-9  device_manage_index">
              <div class="tu_01">
                <img src="../../../static/imgs/tt_2.jpg" alt="" class="img-responsive">
                <div class="click_1">
                  <button onClick="window.open('detailed_device.html')">
                    <div class="tanchuang_01"><h5>鼠标经过弹出：</h5><h5>数据报警</h5></div>
                  </button>

                </div>
                <div class="click_2">
                  <button onClick="window.open('detailed_device.html')">
                    <div class="tanchuang_02"><h5>鼠标经过弹出：</h5><h5>数据正常</h5></div>
                  </button>
                </div>
              </div>
              <div class="table_01">
                <p>设备状态</p>
                <table class="table table_a">
                  <thead>
                  <tr>
                    <th>序号</th>
                    <th>设备编号</th>
                    <th>监测区域</th>
                    <th>设备名称</th>
                    <th>设备类型</th>
                    <th>运行状态</th>
                    <th>最新数据</th>
                    <th>更新时间</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td>漳州开发区第一医院</td>
                    <td>3506N00030010E07</td>
                    <td>第一医院1-1</td>
                    <td>固定式测斜仪</td>
                    <td>正常</td>
                    <td>0.0069</td>
                    <td>2018-03-07 16:16:03</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>漳州开发区第一医院</td>
                    <td>3506N00030010E08</td>
                    <td>第一医院1-2</td>
                    <td>固定式测斜仪</td>
                    <td>正常</td>
                    <td>0.0058</td>
                    <td>2018-03-07 16:16:23</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>漳州开发区第一医院</td>
                    <td>3506N00030010E09</td>
                    <td>第一医院1-3</td>
                    <td>固定式测斜仪</td>
                    <td>正常</td>
                    <td>0.0078</td>
                    <td>2018-03-07 19:23:07</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>漳州开发区第一医院</td>
                    <td>3506N00030010E10</td>
                    <td>第一医院S1</td>
                    <td>渗压计</td>
                    <td>正常</td>
                    <td>水位高度-0.380</td>
                    <td>2018-03-07 16:16:23</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>汤洋工业区</td>
                    <td>3506N00010010A13</td>
                    <td>汤洋工业区L1</td>
                    <td>裂缝计</td>
                    <td>正常</td>
                    <td>0.09</td>
                    <td>2018-05-23</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>汤洋工业区</td>
                    <td>3506N00010010A13</td>
                    <td>汤洋工业区L1</td>
                    <td>裂缝计</td>
                    <td>正常</td>
                    <td>0.09</td>
                    <td>2018-05-23</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>汤洋工业区</td>
                    <td>3506N00010010A13</td>
                    <td>汤洋工业区L1</td>
                    <td>裂缝计</td>
                    <td>正常</td>
                    <td>0.09</td>
                    <td>2018-05-23</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>汤洋工业区</td>
                    <td>3506N00010010A13</td>
                    <td>汤洋工业区L1</td>
                    <td>裂缝计</td>
                    <td>正常</td>
                    <td>0.09</td>
                    <td>2018-05-23</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="table_02">
                <p><a name="device_warning">设备预警</a></p>
                <table class="table table_a">
                  <thead>
                  <tr>
                    <th>序号</th>
                    <th>监测区域</th>
                    <th>预警原因</th>
                    <th>预警处置</th>
                    <th>处置方案</th>
                    <th>预警时间</th>
                    <th>操作</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td>漳州开发区第一医院</td>
                    <td></td>
                    <td>未处置</td>
                    <td>_ _</td>
                    <td>2018-03-07 16:24:09</td>
                    <td>修改</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>漳州开发区第一医院</td>
                    <td></td>
                    <td>未处置</td>
                    <td>_ _</td>
                    <td>2018-03-07 14:23:37</td>
                    <td>修改</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>漳州开发区第一医院</td>
                    <td></td>
                    <td>未处置</td>
                    <td>_ _</td>
                    <td>2018-03-07 23:09:08</td>
                    <td>修改</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>漳州开发区第一医院</td>
                    <td></td>
                    <td>未处置</td>
                    <td>_ _</td>
                    <td>2018-03-07 13:17:28</td>
                    <td>修改</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>院桥水库</td>
                    <td></td>
                    <td>未处置</td>
                    <td>_ _</td>
                    <td>2018-03-07 02:35:08</td>
                    <td>修改</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>院桥水库</td>
                    <td></td>
                    <td>未处置</td>
                    <td>_ _</td>
                    <td>2018-03-07 20:10:07</td>
                    <td>修改</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>院桥水库</td>
                    <td></td>
                    <td>未处置</td>
                    <td>_ _</td>
                    <td>2018-03-07 09:34:22</td>
                    <td>修改</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>院桥水库</td>
                    <td></td>
                    <td>未处置</td>
                    <td>_ _</td>
                    <td>2018-03-07 23:09:10</td>
                    <td>修改</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="tu_02">
                <p>系统分布图</p>
              </div>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "device_manage",
    mounted(){
      $(".click_1"
      ).hover(function () {
        $(".tanchuang_01").css("display", "block");
      }, function () {
        $(".tanchuang_01").css("display", "none");
      });

      $(".click_2").hover(function () {
        $(".tanchuang_02").css("display", "block");
      }, function () {
        $(".tanchuang_02").css("display", "none");
      });
    },
  }
</script>

<style lang="stylus" scoped>

</style>
