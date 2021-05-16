function narcissistic(value) {
    let str = String(value);
    let arr = str.split('');
    let res = 0;
    for(let i = 0; i < arr.length; i++){
     res += Math.pow(arr[i], arr.length);
    }
    if (res == value){
      return true;
    }else{
      return false;
    }
  }
  