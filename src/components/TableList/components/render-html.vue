<script lang="ts">
import { defineComponent, h } from 'vue'
import { Space } from '@arco-design/web-vue'

export default defineComponent({
  props: {
    renderFunc: {
      type: Object
    }
  },
  render() {
    if (Array.isArray(this.renderFunc)) {
      return h(Space, { size: 16 }, { default: () => this.renderFunc })
    } else {
      return this.renderFunc
    }
  }
})
</script>
