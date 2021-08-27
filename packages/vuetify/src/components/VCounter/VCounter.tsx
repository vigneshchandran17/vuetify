// Styles
import './VCounter.sass'

// Utilities
import { computed, defineComponent } from 'vue'

export const VCounter = defineComponent({
  name: 'VCounter',

  functional: true,

  props: {
    max: [Number, String],
    value: {
      type: [Number, String],
      default: 0,
    },
  },

  setup (props, { slots }) {
    const counter = computed(() => {
      return props.max ? `${props.value} / ${props.max}` : String(props.value)
    })

    return () => {
      return (
        <div class="v-counter">
          { slots.default
            ? slots.default({
              counter: counter.value,
              max: props.max,
              value: props.value,
            })
            : counter.value
          }
        </div>
      )
    }
  },
})
