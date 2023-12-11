namespace SpriteKind {
    export const Button = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`whitetile`, function (sprite, location) {
    game.gameOver(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (choose != 0) {
        if (skin_number != 2) {
            if (player1.vy == 0) {
                player1.vy = -190
            }
        }
        if (skin_number == 2) {
            if (player1.vy == 0) {
                player1.vy = -225
            }
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`blacktile`, function (sprite4, location3) {
    game.gameOver(true)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (spawn) {
        if (facing_right) {
            player1.image.flipX()
            facing_right = false
        }
    }
})
function startPlaying () {
    music.stopAllSounds()
    if (level == 0) {
        music.play(music.createSong(assets.song`lvl_0_theme`), music.PlaybackMode.LoopingInBackground)
        scene.setBackgroundImage(img`
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            `)
        scene.setBackgroundColor(9)
        gravity = 500
        tiles.setCurrentTilemap(tilemap`level-1`)
        if (skin_number == 0) {
            player1 = sprites.create(assets.image`scooter`, SpriteKind.Player)
            controller.moveSprite(player1, 100, 0)
        }
        if (skin_number == 1) {
            player1 = sprites.create(assets.image`rocket`, SpriteKind.Player)
            controller.moveSprite(player1, 150, 0)
        }
        if (skin_number == 2) {
            player1 = sprites.create(assets.image`helicopter`, SpriteKind.Player)
            controller.moveSprite(player1, 90, 0)
        }
        player1.ay = gravity
        player1.setPosition(88, 110)
        scene.cameraFollowSprite(player1)
        spawn = true
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (spawn) {
        if (!(facing_right)) {
            player1.image.flipX()
            facing_right = true
        }
    }
})
function change_skin () {
    pause(500)
    skin_number += 1
    if (skin_number >= 3) {
        skin_number = 0
    }
    if (skin_number == 0) {
        show_skin = sprites.create(assets.image`scooter`, SpriteKind.Button)
    }
    if (skin_number == 1) {
        show_skin = sprites.create(assets.image`rocket`, SpriteKind.Button)
    }
    if (skin_number == 2) {
        show_skin = sprites.create(assets.image`helicopter`, SpriteKind.Button)
    }
    show_skin.setPosition(105, 88)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Button, function (sprite3, otherSprite) {
    if (otherSprite == play_button && controller.A.isPressed()) {
        sprites.destroy(cursor)
        sprites.destroy(play_button)
        sprites.destroy(skin)
        sprites.destroy(show_skin)
        show_intro()
        choose = 1
        startPlaying()
    }
    if (otherSprite == skin && controller.A.isPressed()) {
        sprites.destroy(show_skin)
        change_skin()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`mine-1`, function (sprite2, location2) {
    game.gameOver(false)
})
function show_intro () {
    music.stopAllSounds()
    scene.setBackgroundImage(assets.image`intro_image`)
    pause(1000)
    music.play(music.createSong(assets.song`intro_theme`), music.PlaybackMode.UntilDone)
    pause(2000)
}
function show_menu () {
    if (choose == 0) {
        music.setVolume(15)
        music.play(music.createSong(assets.song`menu_music`), music.PlaybackMode.LoopingInBackground)
        scene.setBackgroundImage(assets.image`menu_background`)
        play_button = sprites.create(assets.image`play_button`, SpriteKind.Button)
        skin = sprites.create(assets.image`skin_button`, SpriteKind.Button)
        cursor = sprites.create(assets.image`cursor_icon`, SpriteKind.Player)
        skin.setPosition(80, 90)
        controller.moveSprite(cursor)
    }
}
let skin: Sprite = null
let cursor: Sprite = null
let play_button: Sprite = null
let show_skin: Sprite = null
let gravity = 0
let spawn = false
let player1: Sprite = null
let facing_right = false
let level = 0
let choose = 0
let skin_number = 0
skin_number = 0
choose = 0
level = 0
facing_right = true
show_menu()
