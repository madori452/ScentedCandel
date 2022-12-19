<template>
  <Loading :active="isLoading"/>
  <button @click="openModal(true)" class="btn btn-primary px-5 rounded-0 text-white mt-3" type="button">新增文章</button>
  <table class="table mt-4">
    <thead>
    <tr>
      <th>文章標題</th>
      <th>文章作者</th>
      <th>創建日期</th>
      <th>文章分類</th>
      <th>是否公開</th>
      <th>編輯</th>
    </tr>
    </thead>
    <tbody v-for="item in articles" :key="item.title">
      <tr>
        <td>{{ item.title }}</td>
        <td>{{ item.author }}</td>
        <td>{{ item.create_at }}</td>
        <td>{{ item.tag }}</td>
        <td>
        <li v-if="item.isPublic===true">是</li>
        <li v-else>否</li>
        </td>
        <td>
          <button  @click="openModal(false,item)" type="button"  class="btn btn-outline-primary btn-sm">檢視</button>
          <button @click="opendelModal(item)" type="button" class="btn btn-outline-danger btn-sm">刪除</button>
        </td>
      </tr>
    </tbody>
  </table>
  <Pagination :pages="pagination" @emit-pages="getArticles"></Pagination>
  <ArticleModal ref="articleModal" :article="tempArticle" @update="updateArticle" ></ArticleModal>
  <DelModal ref="delModal" :item="tempArticle" @del-item="delArticle"></DelModal>
</template>

<script>
import DelModal from '@/components/DelModal.vue'
import Pagination from '@/components/Pagination.vue'
import ArticleModal from '@/components/ArticleModal.vue'
export default {
  data () {
    return {
      articles: [],
      tempArticle: {},
      isLoading: false,
      isNew: false,
      pagination: {}
    }
  },
  components: {
    DelModal,
    Pagination,
    ArticleModal
  },

  inject: ['emitter'],
  methods: {
    getArticles (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/articles/?page=${page}`
      this.isLoading = true
      this.$http.get(api, this.articles).then((res) => {
        this.isLoading = false
        this.articles = res.data.articles
        this.pagination = res.data.pagination
      }).catch(err => {
        this.$swal({
          icon: 'error',
          title: err.data.message
        })
        this.isLoading = false
      })
    },
    delArticle () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/article/${this.tempArticle.id}`
      this.$http.delete(url).then((res) => {
        const delComponent = this.$refs.delModal
        delComponent.hideModal()
        this.getArticles()
      }).catch(err => {
        this.$swal({
          icon: 'error',
          title: err.data.message
        })
        this.isLoading = false
      })
    },
    opendelModal (item01) {
      this.tempArticle = { ...item01 }
      const delComponent = this.$refs.delModal
      delComponent.showModal()
    },
    getArticle (item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/article/${item.id}`
      this.isLoading = true
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.openModal(false, item)
          this.isLoading = false
        }
      }).catch(err => {
        this.$swal({
          icon: 'error',
          title: err.data.message
        })
        this.isLoading = false
      })
    },
    openModal (isNew, item01) {
      if (isNew) {
        this.tempArticle = {}
      } else {
        this.isNew = false
        this.tempArticle = { ...item01 }
      }
      this.isNew = isNew
      const articleComponent = this.$refs.articleModal
      articleComponent.showModal()
    },
    updateArticle (item) {
      this.tempArticle = item
      // 新增
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/article`
      let httpMethod = 'post'
      // 編輯
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/article/${item.id}`
        httpMethod = 'put'
      }
      const articleComponent = this.$refs.articleModal
      this.$http[httpMethod](api, { data: this.tempArticle }).then((res) => {
        articleComponent.hideModal()
        if (res.data.success) {
          this.getArticles()
          this.emitter.emit('push-message', {
            style: 'success',
            title: '更新成功'
          })
        } else {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: '更新失敗',
            // 後端傳送
            content: res.data.message.join('、')
          })
        }
      }).catch(err => {
        this.$swal({
          icon: 'error',
          title: err.data.message
        })
        this.isLoading = false
      })
    }

  },
  created () {
    this.getArticles()
  }
}
</script>

<style scoped lang="scss">
li{
  list-style: none;
}
</style>
