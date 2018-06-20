const VueQiitaClick = {
  install (Vue, options) {
    Vue.directive('qiita-click', {
      bind: (el) => {
        el.addEventListener('click', click, false)
      }
    })

    const click = () => {
      console.log('qiita!!')
    }
  }
}

export default VueQiitaClick
