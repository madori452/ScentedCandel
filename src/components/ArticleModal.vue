<template>
  <div class="modal fade" id="productModal" tabindex="-1" role="dialog"
       aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>文章細節</span>
          </h5>
          <button
            type="button"
            class="btn-close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-3">
                <label for="image" class="form-label">輸入圖片網址</label>
                <input
                  type="text"
                  class="form-control"
                  id="image"
                  v-model="tempArticle.image"
                  placeholder="請輸入圖片連結"
                />
                <input type="file" ref="fileInput" class="form-control" id="image" @change="uploadFile">
              </div>
              <img class="img-fluid" :src="tempArticle.image"/>
            </div>
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">文章標題</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  v-model="tempArticle.title"
                  placeholder="請輸入標題"
                />
              </div>
              <div class="row gx-2">
                <div class="mb-3 col-md-12">
                  <label for="category" class="form-label">文章描述</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="category"
                    style="height:80px"
                    v-model="tempArticle.description"
                    placeholder="請輸入文章描述"
                  >
                </textarea>
                </div>
              </div>
              <!-- 編輯器 -->
              <div class="row gx-2">
                <div class="mb-3 col-md-12">
                  <label for="category" class="form-label">文章內容</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="category"
                    style="height:80px"
                    v-model="tempArticle.content"
                    placeholder="請輸入文章描述"
                  >
                </textarea>
                </div>
              </div>
              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">分類</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model.number="tempArticle.tag"
                    placeholder="請輸入分類"
                  />
                </div>
                 <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">作者</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model.number="tempArticle.author"
                    placeholder="請輸入作者"
                  />
                </div>
              </div>
              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">日期</label>
                  <input
                    type="date"
                    class="form-control"
                    v-model="create_At"
                  />
                </div>
              </div>
              <div class="mb-3">
                  <div class="form-check">
                      <input type="checkbox" id="isPublic" class="form-check-input"
                        v-model="tempArticle.isPublic">
                      <label class="form-check-label" for="isPublic">公開</label>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary"
             @click="$emit('update', tempArticle)"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin'
export default {
  props: {
    article: {
      type: Object,
      default () { return {} }
    }
  },
  data () {
    return {
      tempArticle: {}
    }
  },
  emits: ['update'],
  mixins: [modalMixin],
  inject: ['emitter'],
  watch: {
    article () {
      this.tempArticle = this.article
    }
  },
  methods: {
    uploadFile () {
      const uploadFile = this.$refs.fileInput.files[0]
      const formData = new FormData()
      formData.append('file-to-upload', uploadFile)
      this.$http.post(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/upload`, formData)
        .then((res) => {
          if (res.data.success) {
            this.innertempArticle.imageUrl = res.data.imageUrl
          }
        }).catch(err => {
          this.$swal({
            icon: 'error',
            title: err.data.message
          })
        })
    }
  }
}
</script>
