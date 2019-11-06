
// 获取屏幕宽高



var isHorizontal = false

// alert(`可视宽度:${ww}, 可视高度:${wh}`)
function getScale () {
  var designW = 1500
  var designH = 750
  var wh = window.innerHeight
  var ww = window.innerWidth
  console.log('重新计算位置!')
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
      document.getElementsByClassName('loading-text-wrap')[0].classList.add('horizontal')
      
      
      isHorizontal = true
    } else {
      // 清除竖屏设置
      document.getElementsByClassName('loading-text-wrap')[0].classList.remove('horizontal')
      horizontalBox.classList.remove('horizontal')
      horizontalBox.style.left = 'calc(50% - ' + ww / 2 + 'px)'
      horizontalBox.style.top = 'calc(50% - ' + wh / 2 + 'px)'
    }
    // horizontalBox.style.display = 'block'
    document.body.style.display = 'block'
  }, 0)
}


getScale()

let timer = null
window.onresize = () => {
  // console.log(timer)
  window.clearTimeout(timer)
  // document.getElementById('horizontal-box').style.width = 1000 + 'px'
  // owo.query('.one')[0].style.width = 1000 + 'px'
  // owo.query('video')[0].style.width = (window.innerHeight) + 'px'
  // owo.query('video')[0].style.height = (window.innerWidth) + 'px'
  // document.body.style.width = '1000px'
  // document.body.style.height = '1000px'
  // document.style.width = '1000px'
  // document.style.height = '1000px'
  // owo.query('video')[0].style.left = '200px'
  getScale()
}

window.orientation = getScale

// 阻止微信拖动
document.body.addEventListener('touchmove', function (e) {
  e.preventDefault() // 阻止默认的处理方式(阻止下拉滑动的效果)
}, {passive: false})