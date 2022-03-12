namespace SpriteKind {
    export const podloga = SpriteKind.create()
    export const dziura = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.podloga, function (sprite, otherSprite) {
    if (ludzik.vy > 0) {
        ludzik.vy = 0
        ludzik.ay = 0
        ludzik.bottom = otherSprite.top
    } else if (ludzik.vy < 0) {
        if (doczydziuranademna() == 1) {
            music.baDing.play()
        } else {
            ludzik.vy = 0
            ludzik.top = otherSprite.bottom
        }
    }
})
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
                return 1
            }
        }
    }
    return 0
}
function doGenerujpodloge (y: number) {
    podloga2 = sprites.create(img`
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        `, SpriteKind.podloga)
    podloga2.y = y
}
function doGenerujdziure (predkosc: number, x: number, y: number, lewoprawo: number) {
    dziura2 = sprites.create(img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `, SpriteKind.dziura)
    dziura2.y = y
    dziura2.x = x
    dziura2.setVelocity(predkosc, 0)
    dziura2.setBounceOnWall(false)
    dziura2.z = lewoprawo
}
let dziura2: Sprite = null
let podloga2: Sprite = null
let ludzik: Sprite = null
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
    doGenerujdziure(randint(20, 80), -50, index * 19, randint(100, 200))
}
game.onUpdate(function () {
    for (let value2 of sprites.allOfKind(SpriteKind.dziura)) {
        if (value2.x <= value2.z * -1) {
            value2.setVelocity(value2.vx * -1, 0)
        } else if (value2.x >= value2.z + scene.screenWidth()) {
            value2.setVelocity(value2.vx * -1, 0)
        }
    }
    if (ludzik.x <= -5) {
        ludzik.x = 165
    } else if (ludzik.x >= 165) {
        ludzik.x = -5
    }
})
