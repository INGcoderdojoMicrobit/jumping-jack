namespace SpriteKind {
    export const podloga = SpriteKind.create()
    export const dziura = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.podloga, function (sprite, otherSprite) {
    if (ludzik.vy > 0) {
        czydziura = doczydzurapodemna()
        if (czydziura == 1) {
        	
        } else if (czydziura == 3) {
            ludzik.startEffect(effects.fire, 2000)
            info.changeLifeBy(-1)
            scene.cameraShake(10, 2000)
            music.bigCrash.play()
            pause(2000)
            doGenerujplansze()
        } else {
            ludzik.vy = 0
            ludzik.ay = 0
            ludzik.bottom = otherSprite.top
        }
    } else if (ludzik.vy < 0) {
        czydziura = doczydziuranademna()
        if (czydziura == 1) {
        	
        } else if (czydziura == 2) {
            sprite.startEffect(effects.confetti, 2000)
            music.powerUp.play()
            level += 1
            doGenerujplansze()
            info.changeScoreBy(1)
        } else {
            ludzik.vy = 0
            ludzik.top = otherSprite.bottom
        }
    }
})
function doGenerujplansze () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.dziura)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.podloga)) {
        value.destroy()
    }
    ludzik.y = 106
    ludzik.ay = 50
    ludzik.vy = 0
    for (let index = 0; index <= 6; index++) {
        doGenerujpodloge(index * 19)
        doGenerujdziure(randint(20, 30), -50, index * 19, randint(100, 200))
    }
    for (let index2 = 0; index2 <= 5; index2++) {
        if (poziomy[level][index2] == 1) {
            doGenerujPrzeszkadzajki((index2 + 1) * 19 - 2)
        }
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (ludzik.vy == 0) {
        ludzik.ay = 180
        ludzik.vy = -100
    }
})
function doczydziuranademna () {
    for (let value of sprites.allOfKind(SpriteKind.dziura)) {
        if (value.y + 19 > ludzik.bottom && value.y - 19 < ludzik.top) {
            if (value.left + 0 < ludzik.left && value.right - 0 > ludzik.right) {
                if (ludzik.top < 0) {
                    return 2
                } else {
                    return 1
                }
            }
        }
    }
    return 0
}
function doczydzurapodemna () {
    for (let value2 of sprites.allOfKind(SpriteKind.dziura)) {
        if (value2.y + 16 > ludzik.bottom && value2.y - 19 < ludzik.top) {
            if (value2.left + 0 < ludzik.left && value2.right - 0 > ludzik.right) {
                if (ludzik.bottom > scene.screenHeight()) {
                    return 3
                } else {
                    return 1
                }
            }
        }
    }
    return 0
}
info.onLifeZero(function () {
    game.over(false)
})
function doGenerujpodloge (y: number) {
    podloga2 = sprites.create(img`
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        `, SpriteKind.podloga)
    podloga2.y = y
}
function doGenerujPrzeszkadzajki (prz_y: number) {
    przeszkadzajka = sprites.create(img`
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e . b f b 
        f d d f d d f d d f . f d f 
        f b d d b b d d 2 f . f d f 
        . f 2 2 2 2 2 2 b b f f d f 
        . f b d d d d d d b b d b f 
        . f d d d d d b d d f f f . 
        . f d f f f d f f d f . . . 
        . f f . . f f . . f f . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    przeszkadzajka,
    [img`
        . . . . e e e . . . . e e e 
        . . . . c d d c . . c d d c 
        . . . . c b d d f f d d b c 
        . . . . c 3 b d b d d b 3 c 
        . . . . f b 3 d d d d 3 b f 
        . . . . e d d d d d d d d e 
        b f b . e d f d d d d f d e 
        f d f . f d d f d d f d d f 
        f d f . f 2 d d b b d d b f 
        f d f f b b 2 2 2 2 2 2 f . 
        f b d b b d d d d d d b f . 
        . f f f d d b d d d d d f . 
        . . . f d f f d f f f d f . 
        . . . f f . . f f . . f f . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . e e e . . . . e e e 
        . . . . c d d c . . c d d c 
        . . . . c b d d f f d d b c 
        . . . . c 3 b d b d d b 3 c 
        . . . . f b 3 d d d d 3 b f 
        . . . . e d d d d d d d d e 
        . b f b e d f d d d d f d e 
        . f d f f d d f d d f d d f 
        . f d f b 2 d d b b d d b f 
        . f b d b d 2 2 2 2 2 2 f . 
        . . f f f d d d d d d d f . 
        . . . . f d f f f d b d f . 
        . . . . f f . . f f f f . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . e e e . . . . e e e 
        . . . . c d d c . . c d d c 
        . . . . c b d d f f d d b c 
        . . . . c 3 b d b d d b 3 c 
        . . . . f b 3 d d d d 3 b f 
        . . . . e d d d d d d d d e 
        b f b . e d f d d d d f d e 
        f d f . f d d f d d f d d f 
        f d f f b 2 d d b b d d b f 
        f b d b b d 2 2 2 2 2 2 f . 
        . f f f f d d d d d d d f . 
        . . . . . f d f d b d f . . 
        . . . . . f f f f f f . . . 
        `],
    200,
    true
    )
    przeszkadzajka.setVelocity(randint(10, 20), 0)
    przeszkadzajka.x = randint(10, scene.screenWidth() - 10)
    przeszkadzajka.bottom = prz_y
    przeszkadzajka.z = scene.screenWidth() * 1
}
function doGenerujdziure (predkosc: number, x: number, y: number, lewoprawo: number) {
    dziura2 = sprites.create(img`
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
        `, SpriteKind.dziura)
    dziura2.y = y
    dziura2.x = x
    dziura2.setVelocity(predkosc, 0)
    dziura2.setBounceOnWall(false)
    dziura2.z = lewoprawo
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.startEffect(effects.fire, 2000)
    music.bigCrash.play()
    scene.cameraShake(10, 2000)
    pause(2000)
    info.changeLifeBy(-1)
    doGenerujplansze()
})
let dziura2: Sprite = null
let przeszkadzajka: Sprite = null
let podloga2: Sprite = null
let czydziura = 0
let level = 0
let poziomy: number[][] = []
let ludzik: Sprite = null
info.setScore(0)
ludzik = sprites.create(img`
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 5 5 5 e . . e 5 5 5 4 . . . 
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
    . e e 5 5 5 5 5 5 5 5 e e . . . 
    . . e 5 f 5 5 5 5 f 5 e . . . . 
    . . f 5 5 5 4 4 5 5 5 f . . f f 
    . . f 4 5 5 f f 5 5 6 f . f 5 f 
    . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
    . . . f 4 5 5 5 5 5 5 4 4 5 f . 
    . . . f 5 5 5 5 5 4 5 5 f f . . 
    . . . f 5 f f f 5 f f 5 f . . . 
    . . . f f . . f f . . f f . . . 
    `, SpriteKind.Player)
ludzik.z = 1000
ludzik.y = 106
ludzik.ay = 50
ludzik.vy = 0
controller.moveSprite(ludzik, 40, 0)
animation.runImageAnimation(
ludzik,
[img`
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 5 5 5 e . . e 5 5 5 4 . . . 
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
    . e e 5 5 5 5 5 5 5 5 e e . . . 
    . . e 5 f 5 5 5 5 f 5 e . . . . 
    . . f 5 5 5 4 4 5 5 5 f . . f f 
    . . f 4 5 5 f f 5 5 6 f . f 5 f 
    . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
    . . . f 4 5 5 5 5 5 5 4 4 5 f . 
    . . . f 5 5 5 5 5 4 5 5 f f . . 
    . . . f 5 f f f 5 f f 5 f . . . 
    . . . f f . . f f . . f f . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 5 5 5 e . . e 5 5 5 4 . . . 
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
    . e e 5 5 5 5 5 5 5 5 e e . . . 
    . . e 5 f 5 5 5 5 f 5 e . . . . 
    . . f 5 5 5 4 4 5 5 5 f . f f . 
    . . . 4 5 5 f f 5 5 6 f f 5 f . 
    . . . f 6 6 6 6 6 6 4 4 4 5 f . 
    . . . f 5 5 5 5 5 5 5 f f f . . 
    . . . f 5 4 5 f f f 5 f . . . . 
    . . . f f f f f . . f f . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 5 5 5 e . . e 5 5 5 4 . . . 
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
    . e e 5 5 5 5 5 5 5 5 e e . . . 
    . . e 5 f 5 5 5 5 f 5 e . . . . 
    . . f 5 5 5 4 4 5 5 5 f . f f . 
    . . . 4 5 5 f f 5 5 6 f f 5 f . 
    . . . f 6 6 6 6 6 6 4 f 5 5 f . 
    . . . f 5 5 5 5 5 5 5 4 5 f . . 
    . . . . f 5 4 5 f 5 f f f . . . 
    . . . . . f f f f f f f . . . . 
    `],
200,
true
)
for (let index = 0; index <= 6; index++) {
    doGenerujpodloge(index * 19)
    doGenerujdziure(randint(20, 30), -50, index * 19, randint(100, 200))
}
poziomy = [
[
0,
0,
0,
1,
0,
0
],
[
0,
1,
0,
1,
0,
0
],
[
0,
1,
0,
1,
1,
0
],
[
1,
1,
0,
1,
1,
0
],
[
1,
1,
1,
1,
1,
0
],
[
1,
1,
1,
1,
1,
1
]
]
for (let index2 = 0; index2 <= 5; index2++) {
    if (poziomy[level][index2] == 1) {
        doGenerujPrzeszkadzajki((index2 + 1) * 19 - 2)
    }
}
info.setLife(3)
game.onUpdate(function () {
    for (let value22 of sprites.allOfKind(SpriteKind.dziura)) {
        if (value22.x <= value22.z * -1) {
            value22.setVelocity(value22.vx * -1, 0)
        } else if (value22.x >= value22.z + scene.screenWidth()) {
            value22.setVelocity(value22.vx * -1, 0)
        }
    }
    if (ludzik.x <= -5) {
        ludzik.x = 165
    } else if (ludzik.x >= 165) {
        ludzik.x = -5
    }
    if (Math.floor(ludzik.vy) >= 0) {
        czydziura = doczydzurapodemna()
        if (czydziura == 1) {
            ludzik.ay = 180
        } else if (czydziura == 3) {
            ludzik.startEffect(effects.fire, 2000)
            scene.cameraShake(10, 2000)
            info.changeLifeBy(-1)
            music.bigCrash.play()
            pause(2000)
            doGenerujplansze()
        }
    }
    for (let value23 of sprites.allOfKind(SpriteKind.Enemy)) {
        if (value23.x <= value23.z * -1) {
            value23.setVelocity(Math.abs(value23.vx) * 1, 0)
            animation.runImageAnimation(
            przeszkadzajka,
            [img`
                . . . . e e e . . . . e e e 
                . . . . c d d c . . c d d c 
                . . . . c b d d f f d d b c 
                . . . . c 3 b d b d d b 3 c 
                . . . . f b 3 d d d d 3 b f 
                . . . . e d d d d d d d d e 
                b f b . e d f d d d d f d e 
                f d f . f d d f d d f d d f 
                f d f . f 2 d d b b d d b f 
                f d f f b b 2 2 2 2 2 2 f . 
                f b d b b d d d d d d b f . 
                . f f f d d b d d d d d f . 
                . . . f d f f d f f f d f . 
                . . . f f . . f f . . f f . 
                `,img`
                . . . . . . . . . . . . . . 
                . . . . e e e . . . . e e e 
                . . . . c d d c . . c d d c 
                . . . . c b d d f f d d b c 
                . . . . c 3 b d b d d b 3 c 
                . . . . f b 3 d d d d 3 b f 
                . . . . e d d d d d d d d e 
                . b f b e d f d d d d f d e 
                . f d f f d d f d d f d d f 
                . f d f b 2 d d b b d d b f 
                . f b d b d 2 2 2 2 2 2 f . 
                . . f f f d d d d d d d f . 
                . . . . f d f f f d b d f . 
                . . . . f f . . f f f f . . 
                `,img`
                . . . . . . . . . . . . . . 
                . . . . e e e . . . . e e e 
                . . . . c d d c . . c d d c 
                . . . . c b d d f f d d b c 
                . . . . c 3 b d b d d b 3 c 
                . . . . f b 3 d d d d 3 b f 
                . . . . e d d d d d d d d e 
                b f b . e d f d d d d f d e 
                f d f . f d d f d d f d d f 
                f d f f b 2 d d b b d d b f 
                f b d b b d 2 2 2 2 2 2 f . 
                . f f f f d d d d d d d f . 
                . . . . . f d f d b d f . . 
                . . . . . f f f f f f . . . 
                `],
            200,
            true
            )
        } else if (value23.x >= value23.z + scene.screenWidth()) {
            value23.setVelocity(Math.abs(value23.vx) * -1, 0)
            animation.runImageAnimation(
            przeszkadzajka,
            [img`
                e e e . . . . e e e . . . . 
                c d d c . . c d d c . . . . 
                c b d d f f d d b c . . . . 
                c 3 b d d b d b 3 c . . . . 
                f b 3 d d d d 3 b f . . . . 
                e d d d d d d d d e . . . . 
                e d f d d d d f d e . b f b 
                f d d f d d f d d f . f d f 
                f b d d b b d d 2 f . f d f 
                . f 2 2 2 2 2 2 b b f f d f 
                . f b d d d d d d b b d b f 
                . f d d d d d b d d f f f . 
                . f d f f f d f f d f . . . 
                . f f . . f f . . f f . . . 
                `,img`
                . . . . . . . . . . . . . . 
                e e e . . . . e e e . . . . 
                c d d c . . c d d c . . . . 
                c b d d f f d d b c . . . . 
                c 3 b d d b d b 3 c . . . . 
                f b 3 d d d d 3 b f . . . . 
                e d d d d d d d d e . . . . 
                e d f d d d d f d e b f b . 
                f d d f d d f d d f f d f . 
                f b d d b b d d 2 b f d f . 
                . f 2 2 2 2 2 2 d b d b f . 
                . f d d d d d d d f f f . . 
                . f d b d f f f d f . . . . 
                . . f f f f . . f f . . . . 
                `,img`
                . . . . . . . . . . . . . . 
                e e e . . . . e e e . . . . 
                c d d c . . c d d c . . . . 
                c b d d f f d d b c . . . . 
                c 3 b d d b d b 3 c . . . . 
                f b 3 d d d d 3 b f . . . . 
                e d d d d d d d d e . . . . 
                e d f d d d d f d e . b f b 
                f d d f d d f d d f . f d f 
                f b d d b b d d 2 b f f d f 
                . f 2 2 2 2 2 2 d b b d b f 
                . f d d d d d d d f f f f . 
                . . f d b d f d f . . . . . 
                . . . f f f f f f . . . . . 
                `],
            200,
            true
            )
        }
    }
})
