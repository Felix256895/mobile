export function hasClass(el, className) {
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
    return reg.test(el.className)
  }
  
  export function addClass(el, className) {  //添加class  (元素 ,class)
    if (hasClass(el, className)) {
      return
    }

    let newClass = el.className.split(' ')
    newClass.push(className)
    el.className = newClass.join(' ')
  }   

  export function removeClass(ele,cName) {  //删除class
    var arr1 = ele.className.split(' ');
    var arr2 = cName.split(" ");
    for(var i=0;i<arr2.length;i++)for(var j=arr1.length-1;j>=0;j--)(arr2[i]===arr1[j])&&arr1.splice(j,1)
    ele.className = arr1.join(" ")
   }
  //====================================================以上是添加class
  export function getData(el, name, val) {
    const prefix = 'data-'   // 获取data- 属性
    name= prefix + name
    if (val) {
      return el.setAttribute(name, val)
    }
    return el.getAttribute(name)
  }

  let elementStyle = document.createElement('div').style
  
  let vendor = (() => {
    let transformNames = {
      webkit: 'webkitTransform',
      Moz: 'MozTransform',
      O: 'OTransform',
      ms: 'msTransform',
      standard: 'transform'
    }
  
    for (let key in transformNames) {
      if (elementStyle[transformNames[key]] !== undefined) {
        return key
      }
    }
  
    return false
  })()
  
  export function prefixStyle(style) {
    if (vendor === false) {
      return false
    }
  
    if (vendor === 'standard') {
      return style
    }
  
    return vendor + style.charAt(0).toUpperCase() + style.substr(1)
  }


