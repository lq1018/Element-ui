export default {
  name: 'ElCol',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    span: {
      type: Number,
      default: 24,
    },
    offset: {
      type: Number,
      default: 0,
    },
    push: {
      type: Number,
      default: 0,
    },
    pull: {
      type: Number,
      default: 0,
    },
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object],
  },
  computed: {
    gutter() {
      let parent = this.$parent;
      while (parent && parent.$options.name !== 'Row') {
        parent = parent.$parent;
      }
      return parent ? parent.gutter : 0;
    },
    style() {
      const style = {};
      if (this.gutter) {
        style.paddingLeft = `${this.gutter / 2}px`;
        style.paddingRight = style.paddingLeft;
      }
      return style;
    },
    classList() {
      const classList = [];
      ['span', 'offset', 'pull', 'push'].forEach((prop) => {
        if (this[prop]) {
          classList.push(prop === 'span' ? `el-col-${this[prop]}` : `el-col-${prop}-${this[prop]}`);
        }
      });
      ['xs', 'sm', 'md', 'lg', 'xl'].forEach((size) => {
        const props = this[size];
        if (typeof props === 'number') {
          classList.push(`el-col-${size}-${props}`);
        } else if (typeof props === 'object') {
          Object.keys(props).forEach((prop) => {
            classList.push(prop === 'span' ? `el-col-${size}-${props[prop]}` : `el-col-${size}-${prop}-${props[prop]}`);
          });
        }
      });
      return classList;
    },
  },
  render(h) {
    return h(this.tag,
      {
        class: ['el-col', this.classList],
        style: this.style,
      },
      this.$slots.default);
  },
};
