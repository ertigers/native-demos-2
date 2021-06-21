const throttle = (fn,delay)=>{
  let canUse = true
  return ()=>{
    if(canUse){
      fn.apply(this)
      canUse = false
      setTimeout(()=>{
        canUse = true
      },delay)
    }
  }
}

// 测试案例
const throttled = throttle(()=>console.log('hi'),2000)
throttled()
throttled()