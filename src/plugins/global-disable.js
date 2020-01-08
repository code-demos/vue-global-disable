export default {
    install(Vue) {
        Vue.mixin({
            inject: {
                isDisabled: {
                    from: 'isDisabled',
                    default: false
                }
            },
            created() {
                const { $props, $route, $methods = {} } = this;
                if ($props && $route && !$methods.disabled) {
                    const desc = Object.getOwnPropertyDescriptor($props, 'disabled') || {};
                    const originGetter = desc.get;
                    let parent = this;
                    while (parent) {
                        // 如果组件有 doNotDisableMe，则它以及它的子组件都不会被处理，即不会影响页面原来的 disabled 逻辑
                        // $_doNotDisableMeShadow 只是为了优化向上遍历的性能，$_ 是为了避免和 Vue 自身的属性冲突
                        const {
                            $attrs: { doNotDisableMe } = {},
                            $_doNotDisableMeShadow: doNotDisableMeShadow } = parent;
                        if (doNotDisableMe !== undefined || doNotDisableMeShadow !== undefined) {
                            this.$_doNotDisableMeShadow = doNotDisableMe;
                            return;
                        }
                        parent = parent.$parent;
                    }
                    Object.defineProperty($props, 'disabled', {
                        ...desc,
                        get() {
                            if ($route.query.disOpt !== undefined) {
                                return true;
                            } else {
                                return originGetter && originGetter.call(this);
                            }
                        }
                    });
                }
            },
            watch: {
                isDisabled() {
                    // eslint-disable-next-line
                    debugger
                    // eslint-disable-next-line
                    console.log(this.isDisabled)
                    this.$forceUpdate()
                }
            }
        })
    }
}