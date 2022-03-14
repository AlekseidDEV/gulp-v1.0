// html
const {src,dest} = require("gulp");


//плагины

const fileInclude = require ("gulp-file-include")




const html = () => {
  return  src("./src/html/*.html")
        .pipe(fileInclude())
        .pipe(dest("./public"));
        
    
}








exports.html = html