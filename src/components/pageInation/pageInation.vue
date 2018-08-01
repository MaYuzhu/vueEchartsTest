
<template>
  <nav>
    <ul class="page_ination">
      <li>
        <a :class="{'disabled': current == 1}" href="javascript:;" @click="setCurrent(current - 1)">上一页</a>
      </li>
      <li>
        <a :class="{'disabled': current == 1}" href="javascript:;" @click="setCurrent(1)"> 首页 </a>
      </li>
      <li v-for="p in grouplist" :class="{'active': current == p.val}">
        <a href="javascript:;"
           @click="setCurrent(p.val)"> {{ p.text }}
        </a>
      </li>
      <li :class="{'disabled': current == page}">
        <a :class="{'disabled': current == page}" href="javascript:;" @click="setCurrent(page)"> 尾页 </a>
      </li>
      <li :class="{'disabled': current == page}">
        <a :class="{'disabled': current == page}" href="javascript:;" @click="setCurrent(current + 1)">下一页</a>
      </li>
    </ul>
  </nav>
</template>

<script type="es6">
  export default{
    data(){
      return {
        current: this.currentPage
      }
    },
    props: {
      total: {// 数据总条数
        type: Number,
        default: 0
      },
      display: {// 每页显示条数
        type: Number,
        default: 10
      },
      currentPage: {// 当前页码
        type: Number,
        default: 1
      },
      pagegroup: {// 分页条数
        type: Number,
        default: 5,
        coerce: function (v) {
          v = v > 0 ? v : 5;
          return v % 2 === 1 ? v : v + 1;
        }
      }
    },
    computed: {
      page: function () { // 总页数
        return Math.ceil(this.total / this.display);
      },
      grouplist: function () { // 获取分页页码
        var len = this.page, temp = [], list = [], count = Math.floor(this.pagegroup / 2), center = this.current;
        if (len <= this.pagegroup) {
          while (len--) {
            temp.push({text: this.page - len, val: this.page - len});
          }
          ;
          return temp;
        }
        while (len--) {
          temp.push(this.page - len);
        }
        ;
        var idx = temp.indexOf(center);
        (idx < count) && ( center = center + count - idx);
        (this.current > this.page - count) && ( center = this.page - count);
        temp = temp.splice(center - count - 1, this.pagegroup);
        do {
          var t = temp.shift();
          list.push({
            text: t,
            val: t
          });
        } while (temp.length);
        if (this.page > this.pagegroup) {
          (this.current > count + 1) && list.unshift({text: '...', val: list[0].val - 1});
          (this.current < this.page - count) && list.push({text: '...', val: list[list.length - 1].val + 1});
        }
        return list;
      }
    },
    methods: {
      setCurrent: function (idx) {
        if (this.current != idx && idx > 0 && idx < this.page + 1) {
          this.current = idx;
          this.$emit('pagechange', this.current);
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .page_ination
    overflow hidden
    display table
    float right
    height 30px
    .disabled
      cursor not-allowed
    >:last-child
      border 1px solid #e0e0e0
      a
        width 50px
    >:first-child
      a
        width 50px
    li
      float left
      border 1px solid #e0e0e0
      border-right none
      &:hover
        a
          background rgba(30, 159, 255, 0.8)
          color #fff
      a
        display block
        width 30px
        height 30px
        text-align center
        line-height 30px
        font-size 12px
        text-decoration none


    .active
      background #1e9fff
      a
        color #fff

</style>
