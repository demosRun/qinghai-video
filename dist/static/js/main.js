
// 获取屏幕宽高



var isHorizontal = false

// alert(`可视宽度:${ww}, 可视高度:${wh}`)
function getScale () {
  var designW = 1500
  var designH = 750
  var wh = window.innerHeight
  var ww = window.innerWidth
  setTimeout(() => {
    var horizontalBox = document.getElementById('horizontal-box')
    if (ww < wh) {
      console.log('竖屏')
      if ((ww / wh) < (designW / designH)) {
        wh = ww * (designW/ designH)
      } else {
        ww = wh * (designH / designW)
      }
      console.log(ww, wh)
      horizontalBox.style.height = ww + 'px'
      horizontalBox.style.width = wh + 'px'
      horizontalBox.classList.add('horizontal')
      horizontalBox.style.left = 'calc(50% - ' + wh / 2 + 'px)'
      horizontalBox.style.top = 'calc(50% - ' + ww / 2 + 'px)'
      isHorizontal = true
    }
    horizontalBox.style.display = 'block'
  }, 0)
}


getScale()

let timer = null
window.onresize = () => {
  // console.log(timer)
  window.clearTimeout(timer)
  // document.getElementById('horizontal-box').style.width = 1000 + 'px'
  // owo.query('.one')[0].style.width = 1000 + 'px'
  // owo.query('video')[0].style.width = window.innerHeight + 'px'
  // owo.query('video')[0].style.left = '100px'
  getScale()
  // document.getElementById('horizontal-box').style.width = 2000 + 'px'
  // owo.query('.one')[0].style.width = 2000 + 'px'
  // document.body.style.width = 2000 + 'px'
  // document.style.width = 2000 + 'px'
}

// 阻止微信拖动
document.body.addEventListener('touchmove', function (e) {
  e.preventDefault() // 阻止默认的处理方式(阻止下拉滑动的效果)
}, {passive: false})