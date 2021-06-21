const debounce = (fn,delay)=>{
  let timerId = null
  return ()=>{
    const context = this
    if(timerId){window.clearTimeout(timerId)}  
    timerId = setTimeout(()=>{
      fn.apply(context)
      timerId = null
    },delay)
  }
}

// 测试案例
const debounced = debounce(()=>console.log('hi'),2000)
debounced()
debounced()