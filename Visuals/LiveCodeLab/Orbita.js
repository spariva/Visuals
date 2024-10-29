// Caja, con plano y 3 líneas, rotando y cambiando de color, con bola orbitando.
simpleGradient indigo, color(20, 200, 130), color(180, 10, 230, 150) 
rotate frame / 100

pushMatrix
line
rect
move 0.5, 0, 0
line
move 1, 1, 1
scale 0.6
ball
popMatrix

move -1, 0, 0
line
resetMatrix

scale 0.3
rotate frame / 180
fill
box
