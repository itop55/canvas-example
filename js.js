//Canvas 1
const canvas1 = document.getElementById('canvas1')
const ctx1 = canvas1.getContext('2d')

ctx1.fillStyle = 'green'
ctx1.fillRect(100, 50, 150, 75)

ctx1.fillStyle = 'blue'
ctx1.fillRect(150, 100, 100, 50)

ctx1.clearRect(0, 0, 400, 200)

ctx1.strokeStyle = '#FFD700'
ctx1.lineWidth = 10
ctx1.rect(5, 10, 100, 100)
ctx1.stroke()
ctx1.fillStyle = '#800080'
ctx1.fill()

//Canvas 2
const canvas2 = document.getElementById('canvas2')
const ctx2 = canvas2.getContext('2d')

ctx2.beginPath()
ctx2.strokeStyle = '#4B0082'
ctx2.lineWidth = 3
ctx2.moveTo(100, 50)
ctx2.lineTo(150, 150)
ctx2.stroke()

ctx2.beginPath()
ctx2.strokeStyle = '#1E90FF'
ctx2.lineWidth = 20
ctx2.moveTo(200, 50)
ctx2.lineTo(300, 50)
ctx2.lineTo(300, 100)
ctx2.lineCap = 'round'
ctx2.stroke()

ctx2.clearRect(0, 0, 400, 200)

ctx2.lineWidth = 15

ctx2.beginPath()
ctx2.moveTo(150, 50)
ctx2.strokeStyle = '#FF6347'
ctx2.lineTo(50, 150)
ctx2.stroke()
ctx2.closePath()

ctx2.beginPath()
ctx2.moveTo(50, 150)
ctx2.strokeStyle = '#C71585'
ctx2.lineTo(250, 150)
ctx2.stroke()
ctx2.closePath()

ctx2.beginPath()
ctx2.moveTo(250, 150)
ctx2.strokeStyle = '#32CD32'
ctx2.lineTo(150, 50)
ctx2.lineCap = 'round'
ctx2.stroke()
ctx2.closePath()

//Canvas 3
const canvas3 = document.getElementById('canvas3')
const inputColor = document.getElementById('canvas3color')
const ctx3 = canvas3.getContext('2d')
let canvas3X, canvas3Y

ctx3.fillStyle = '#00CED1'

inputColor.oninput = function () {
    ctx3.fillStyle = this.value || '#00CED1'
    canvas3.style.borderColor = this.value || '#00CED1'
}

canvas3.onmousedown = function() {
    canvas3.onmousemove = function(e) {
        canvas3Y = e.offsetY
        canvas3X = e.offsetX
        ctx3.fillRect(canvas3X - 5, canvas3Y - 5, 10, 10)
    }

    canvas3.onmouseup = function(e) {
        canvas3.onmousemove = null
    }
}





















