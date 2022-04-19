const genColors = document.getElementById("generateColors")
const colorContainer = document.getElementById("colorContainer")

let colorArray= []



const color1 = document.getElementById("color1")
const color2 = document.getElementById("color2")
const color3 = document.getElementById("color3")
const color4 = document.getElementById("color4")
const color5 = document.getElementById("color5")
const colorLabel1 = document.getElementById("colorLabel1")
const colorLabel2 = document.getElementById("colorLabel2")
const colorLabel3 = document.getElementById("colorLabel3")
const colorLabel4 = document.getElementById("colorLabel4")
const colorLabel5 = document.getElementById("colorLabel5")


fetch("https://www.thecolorapi.com/scheme?hex=F55A5A&mode=monochrome") 
.then(res => res.json())
.then(data => {
    console.log(data)
    color1.style.background = data.colors[0].hex.value
    color2.style.background = data.colors[1].hex.value
    color3.style.background = data.colors[2].hex.value
    color4.style.background = data.colors[3].hex.value
    color5.style.background = data.colors[4].hex.value
    
    colorLabel1.textContent = data.colors[0].hex.value
    colorLabel2.textContent = data.colors[1].hex.value
    colorLabel3.textContent = data.colors[2].hex.value
    colorLabel4.textContent = data.colors[3].hex.value
    colorLabel5.textContent = data.colors[4].hex.value
    
})

genColors.addEventListener("click", function(){
    const colorTheme = document.getElementById("colorTheme").value
    let colorWheel = document.getElementById("colorWheel").value
        const regexp = new RegExp("#")
        colorWheel = colorWheel.replace(regexp, ``)

        fetch(`https://www.thecolorapi.com/scheme?hex=${colorWheel}&mode=${colorTheme}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                color1.style.background = data.colors[0].hex.value
                color2.style.background = data.colors[1].hex.value
                color3.style.background = data.colors[2].hex.value
                color4.style.background = data.colors[3].hex.value
                color5.style.background = data.colors[4].hex.value
        
                colorLabel1.textContent = data.colors[0].hex.value
                colorLabel2.textContent = data.colors[1].hex.value
                colorLabel3.textContent = data.colors[2].hex.value
                colorLabel4.textContent = data.colors[3].hex.value
                colorLabel5.textContent = data.colors[4].hex.value
        
            })
    })