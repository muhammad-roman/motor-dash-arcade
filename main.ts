namespace SpriteKind {
    export const Button = SpriteKind.create()
}
// Detecta si el jugador llega a la meta y pasa al siguiente nivel, si se llega al nivel final ganas la partida
scene.onOverlapTile(SpriteKind.Player, assets.tile`whitetile`, function (sprite, location) {
    level += 1
    if (level == 6) {
        game.gameOver(true)
    }
    startPlaying()
})
// Detecta si el jugador pulsa un boton y ejecuta la accion del boton
sprites.onOverlap(SpriteKind.Player, SpriteKind.Button, function (sprite32, otherSprite) {
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
// Hace que el jugador salte al pulsar el boton "A"
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
// Gira el personaje a la izquierda al moverse
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (spawn) {
        if (facing_right) {
            player1.image.flipX()
            facing_right = false
        }
    }
})
// Teletransporta al jugador a la posicion inicial y a los distintos niveles
function startPlaying () {
    music.stopAllSounds()
    if (level == 0) {
        music.play(music.createSong(assets.song`lvl_0_theme`), music.PlaybackMode.LoopingInBackground)
        scene.setBackgroundImage(assets.image`blank_image`)
        scene.setBackgroundColor(9)
        gravity = 500
        tiles.setCurrentTilemap(tilemap`tutorial`)
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
    if (level == 1) {
        music.play(music.createSong(assets.song`mario_theme`), music.PlaybackMode.LoopingInBackground)
        scene.setBackgroundColor(15)
        tiles.setCurrentTilemap(tilemap`level01`)
        player1.setPosition(88, 110)
    }
    if (level == 2) {
        music.play(music.createSong(assets.song`sonic_theme`), music.PlaybackMode.LoopingInBackground)
        scene.setBackgroundColor(9)
        tiles.setCurrentTilemap(tilemap`level02`)
        player1.setPosition(88, 110)
    }
    if (level == 3) {
        music.play(music.createSong(assets.song`pacman_theme`), music.PlaybackMode.LoopingInBackground)
        scene.setBackgroundColor(15)
        tiles.setCurrentTilemap(tilemap`level03`)
        player1.setPosition(88, 110)
    }
    if (level == 4) {
        music.play(music.createSong(assets.song`zelda_theme`), music.PlaybackMode.LoopingInBackground)
        scene.setBackgroundColor(15)
        tiles.setCurrentTilemap(tilemap`level04`)
        player1.setPosition(88, 110)
    }
    if (level == 5) {
        music.play(music.createSong(assets.song`pacman_theme`), music.PlaybackMode.LoopingInBackground)
        scene.setBackgroundColor(15)
        tiles.setCurrentTilemap(tilemap`level05`)
        player1.setPosition(88, 110)
    }
}
// Gira el personaje a la derecha al moverse
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (spawn) {
        if (!(facing_right)) {
            player1.image.flipX()
            facing_right = true
        }
    }
})
// Cambia el personaje del usuario en el menú
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
function show_intro () {
    music.stopAllSounds()
    scene.setBackgroundImage(assets.image`intro_image`)
    pause(1000)
    music.play(music.createSong(assets.song`intro_theme`), music.PlaybackMode.UntilDone)
    pause(2000)
}
// Muestra el menú y los distintos botones, además de el aspecto del jugador
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
let gravity = 0
let spawn = false
let player1: Sprite = null
let show_skin: Sprite = null
let skin: Sprite = null
let cursor: Sprite = null
let play_button: Sprite = null
let facing_right = false
let level = 0
let choose = 0
let skin_number = 0
function on_overlap_tile2(sprite2: Sprite, location2: tiles.Location) {
    game.gameOver(false)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        mine-3
    `, on_overlap_tile2)
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        sonicenemy3
    `, on_overlap_tile2)
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        mine-2
    `, on_overlap_tile2)
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        pacman ghost
    `, on_overlap_tile2)
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        mine-0
    `, on_overlap_tile2)
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        sonicenemy
    `, on_overlap_tile2)
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        enemysonic
    `, on_overlap_tile2)
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        enemigo_1
    `, on_overlap_tile2)
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        pacman ghost2
    `, on_overlap_tile2)
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        mine-1
    `, on_overlap_tile2)
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        mine-4
    `, on_overlap_tile2)
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        zelda_enemy
    `, on_overlap_tile2)
skin_number = 0
choose = 0
level = 0
facing_right = true
show_menu()
