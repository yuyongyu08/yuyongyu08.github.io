function append(text){
    let li = document.createElement('li')
    li.innerText = text;
    document.getElementById('ul').appendChild(li)
}

export default (fileName,num) => {
    append(`delay${fileName}s.js start executing!`)

    setTimeout((name) => append(`delay${name}s.js setTimeout callback executed! `), num * 1000, fileName)
}