<script lang="ts">
import { defineComponent, h } from 'vue'
import { Space } from '@arco-design/web-vue'

export default defineComponent({
  props: {
    renderFunc: {
      type: [Object, Array]
    },
    modelValue: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue'],
  render() {
    if (Array.isArray(this.renderFunc)) {
      return h(Space, { size: 16 }, { default: () => this.renderFunc })
    } else {
      this.renderFunc!.props.modelValue = this.modelValue
      this.renderFunc!.props['onUpdate:modelValue'] = (val: any) =>
        this.$emit('update:modelValue', val)
      return this.renderFunc
    }
  }
})
</script>
