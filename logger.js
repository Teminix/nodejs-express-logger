module.exports = function(req,res,next){
  Date.prototype.getWeekDay = function(){
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    return days[this.getDay()]
  }
  let date = new Date();
  let weekday = date.getWeekDay();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let method = req.method;
  let ip = req.ip;
  let path = req.path;
  console.log(`[${ip}]  <([${day}/${month}/${year}] [${hours}:${minutes}:${seconds}] [${weekday}])>  {${method} => "${path}"}`);
  next();
}
