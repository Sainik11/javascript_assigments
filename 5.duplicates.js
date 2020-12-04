function remove_dup(x) {
    const map = {};
    return x.filter(element => {
      if (map[element]) {
        return false
      } else {
        map[element] = true;
        return true;
      }
    });
  }
  
  let a = [1,1,2,3,2,4,5,5];
  const b = ['a','s','s','d','f','a'];
  const c = [1,1,1,3,3,0,0,8,6,7,6,8,8];
  let d = ['hk','djk','hk','HK'];
  const e = ['A','B','a','c','b','a','A']
  console.info('Array=[1,1,2,3,2,4,5,5]');
  console.log(remove_dup(a));
  console.info("Array=['a','s','s','d','f','a']");
  console.log(remove_dup(b));
  console.info('Array=[1,1,1,3,3,0,0,8,6,7,6,8,8]');
  console.log(remove_dup(c)); 
  console.info("Array=['hk','djk','hk','HK']");
  console.log(remove_dup(d));
  console.info("Array=['A','B','a','c','b','a','A']");
  console.log(remove_dup(e));
  