background white
//simpleGradient indigo, color(20, 200, 130), color(180, 10, 230, 150) 
//animationStyle paintOver
noStroke
stackN = 10
numStacks = 40
scale 0.5
spread = 18
thinness = 0.08
colorSpeed = 4
movmentSpeed = 0.002
noiseMov = (x, y, j, z) -> spread * (  ( noise  (x * abs (sin (time+y) * movmentSpeed)) / (j + z) ) - 0.5  )
move 1, 1, 0
rotate 3, 0.6, frame / 100
numStacks times with j
	move 0
		xm = noiseMov 200, 100, j, 20
		ym = noiseMov 209, 200, j, 2
		zm = (noiseMov 100, 300, j, 40) / 4
		move xm, ym, zm
		stackN times with i
			move 0, 0, i * thinness
				fill 255, (frame/100*3*j*colorSpeed+i*255/stackN)%255, (frame/50*1*j*colorSpeed+i*255/stackN)%255
				rect
