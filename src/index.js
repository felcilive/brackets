module.exports = function check(str, config) {
  
        config = config.join().split(',');   //преобразовали в обычный массив
        str = str.split('');//Преобразуем строку в массив
        var a = [];//массив для ответа
        var n = 0;
        var sL = str.length;
        var cL = config.length;
        for (var i = 0; i < sL; i++) {
            for (var j = 0; j < cL; j++) {
                if (str[i] == config[j]) {
                    if ((j > 0 && j % 2 != 0 && a[n-1] == config[j - 1]) || (a[n-1] == config[j] &&  config[j]==config[j+1])){
                        a.pop();
                        n--;
                    }
                    else { a.push(str[i]); n++; }
                    break;
                }
                continue;


            }
        }
        if(a.length==0)
        return true;
        else return false;
      }
