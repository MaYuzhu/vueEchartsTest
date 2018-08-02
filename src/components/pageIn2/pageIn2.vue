<template>
  <div class="pageContainer">
    <ul class="pagesInner">
      <li class="page first-child" @click="prevOrNext(-1)">
        <span :class="{'disabled':currentPage===1}" aria-hidden="true">上一页</span>
      </li>
      <li class="page" v-for="(item, index) in pages" :key="index"
          :class="{dian: typeof item === 'string',actived: item === currentPage}"
          @click="select(item)">
        <span>{{item}}</span>
      </li>
      <li @click="prevOrNext(1)" class="page last-child">
        <span :class="{'disabled':currentPage===totalPages}" aria-hidden="true">下一页</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        currentPage:this.currentPage1
      }
    },
    props: {
      totalPages: {// 数据总条数
        type: Number,
        default: 0
      },
      display: {// 每页显示条数
        type: Number,
        default: 10
      },
      currentPage1: {// 当前页码
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
      pages() {
        const c = this.currentPage
        const t = this.totalPages
        if (c <= 5) {
          return [1, 2, 3, 4, 5, '...', t] //第一种情况
        } else if (c >= t - 4) {
          return [1, '...', t-4, t-3, t-2, t-1, t] //第二种情况
        } else {
          return [1, '...', c-1, c, c+1, '...', t] //第三种情况
        }
      }
    },
    methods: {
      select(item) {
        if (item === this.currentPage) return
        if (typeof item === 'string') return
        this.currentPage = item
        this.$emit('pagechangeOn', this.currentPage)
      },
      prevOrNext(n) {
        this.currentPage += n
        this.currentPage < 1
          ? this.currentPage = 1
          : this.currentPage > this.totalPages
          ? this.currentPage = this.totalPages
          : null
        this.$emit('pagechangeOn', this.currentPage)
      }
    },

  }
</script>

<style lang="stylus" scoped>
  .pageContainer
    overflow hidden
    .pagesInner
      .page
        float left
        border 1px solid #ddd
        border-right none
        font-size 16px
        cursor pointer
        color #333
        :hover
          background #2d8cf0
          color #fff
        span
          display inline-block
          width 30px
          height 30px
          text-align center
          line-height 30px
      >:first-child,>:last-child
        :hover
          background #f9f9f9
          color #333
        span
          width 80px
      >:last-child
        border-right 1px solid #ddd
      .actived
        background-color #2d8cf0
        color #fff
      .dian
        cursor auto
        :hover
          background #f9f9f9
          color #333


      .disabled
        color #bbb
        cursor not-allowed
        &:hover
          background #f9f9f9
          color #bbb
</style>
