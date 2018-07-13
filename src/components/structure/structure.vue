<!--结构分析-->
<template>
  <div>
    <p>结构分析</p>
    <table class="table table_a">
      <thead>
      <tr>
        <th></th>
        <th>变形</th>
        <th>应力应变</th>
        <th>震动</th>
        <th>温度场</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>站房屋盖</td>
        <td>
          <div class="red"></div>
        </td>
        <td>
          <div class="yellow"></div>
        </td>
        <td>
          <div class="green"></div>
        </td>
        <td>
          <div class="green"></div>
        </td>
      </tr>
      <tr>
        <td>站房轨道层</td>
        <td>
          <div class="green"></div>
        </td>
        <td>
          <div class="yellow"></div>
        </td>
        <td>
          <div class="green"></div>
        </td>
        <td>
          <div class="green"></div>
        </td>
      </tr>
      <tr>
        <td>无站台柱钢结<br>构雨棚</td>
        <td>
          <div class="red"></div>
        </td>
        <td>
          <div class="green"></div>
        </td>
        <td>
          <div class="green"></div>
        </td>
        <td>
          <div class="green"></div>
        </td>
      </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: "structure"
  }
</script>

<style lang="stylus" scoped>

</style>
