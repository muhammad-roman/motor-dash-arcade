@namespace
class SpriteKind:
    Button = SpriteKind.create()
# Detecta si el jugador llega a la meta y pasa al siguiente nivel, si se llega al nivel final ganas la partida

def on_overlap_tile(sprite, location):
    global level
    level += 1
    if level == 6:
        game.game_over(True)
    startPlaying()
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        whitetile
    """),
    on_overlap_tile)

# Detecta si el jugador pulsa un boton y ejecuta la accion del boton

def on_on_overlap(sprite32, otherSprite):
    global choose
    if otherSprite == play_button and controller.A.is_pressed():
        sprites.destroy(cursor)
        sprites.destroy(play_button)
        sprites.destroy(skin)
        sprites.destroy(show_skin)
        show_intro()
        choose = 1
        startPlaying()
    if otherSprite == skin and controller.A.is_pressed():
        sprites.destroy(show_skin)
        change_skin()
sprites.on_overlap(SpriteKind.player, SpriteKind.Button, on_on_overlap)

# Hace que el jugador salte al pulsar el boton "A"

def on_a_pressed():
    if choose != 0:
        if skin_number != 2:
            if player1.vy == 0:
                player1.vy = -190
        if skin_number == 2:
            if player1.vy == 0:
                player1.vy = -225
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

# Gira el personaje a la izquierda al moverse

def on_left_pressed():
    global facing_right
    if spawn:
        if facing_right:
            player1.image.flip_x()
            facing_right = False
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

# Teletransporta al jugador a la posicion inicial y a los distintos niveles
def startPlaying():
    global gravity, player1, spawn
    music.stop_all_sounds()
    if level == 0:
        music.play(music.create_song(assets.song("""
                lvl_0_theme
            """)),
            music.PlaybackMode.LOOPING_IN_BACKGROUND)
        scene.set_background_image(assets.image("""
            blank_image
        """))
        scene.set_background_color(9)
        gravity = 500
        tiles.set_current_tilemap(tilemap("""
            tutorial
        """))
        if skin_number == 0:
            player1 = sprites.create(assets.image("""
                scooter
            """), SpriteKind.player)
            controller.move_sprite(player1, 100, 0)
        if skin_number == 1:
            player1 = sprites.create(assets.image("""
                rocket
            """), SpriteKind.player)
            controller.move_sprite(player1, 150, 0)
        if skin_number == 2:
            player1 = sprites.create(assets.image("""
                helicopter
            """), SpriteKind.player)
            controller.move_sprite(player1, 90, 0)
        player1.ay = gravity
        player1.set_position(88, 110)
        scene.camera_follow_sprite(player1)
        spawn = True
    if level == 1:
        music.play(music.create_song(assets.song("""
                mario_theme
            """)),
            music.PlaybackMode.LOOPING_IN_BACKGROUND)
        scene.set_background_color(15)
        tiles.set_current_tilemap(tilemap("""
            level01
        """))
        player1.set_position(88, 110)
    if level == 2:
        music.play(music.create_song(assets.song("""
                sonic_theme
            """)),
            music.PlaybackMode.LOOPING_IN_BACKGROUND)
        scene.set_background_color(9)
        tiles.set_current_tilemap(tilemap("""
            level02
        """))
        player1.set_position(88, 110)
    if level == 3:
        music.play(music.create_song(assets.song("""
                pacman_theme
            """)),
            music.PlaybackMode.LOOPING_IN_BACKGROUND)
        scene.set_background_color(15)
        tiles.set_current_tilemap(tilemap("""
            level03
        """))
        player1.set_position(88, 110)
    if level == 4:
        music.play(music.create_song(assets.song("""
                zelda_theme
            """)),
            music.PlaybackMode.LOOPING_IN_BACKGROUND)
        scene.set_background_color(15)
        tiles.set_current_tilemap(tilemap("""
            level04
        """))
        player1.set_position(88, 110)
    if level == 5:
        music.play(music.create_song(assets.song("""
                pacman_theme
            """)),
            music.PlaybackMode.LOOPING_IN_BACKGROUND)
        scene.set_background_color(15)
        tiles.set_current_tilemap(tilemap("""
            level05
        """))
        player1.set_position(88, 110)
# Gira el personaje a la derecha al moverse

def on_right_pressed():
    global facing_right
    if spawn:
        if not (facing_right):
            player1.image.flip_x()
            facing_right = True
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

# Cambia el personaje del usuario en el menú
def change_skin():
    global skin_number, show_skin
    pause(500)
    skin_number += 1
    if skin_number >= 3:
        skin_number = 0
    if skin_number == 0:
        show_skin = sprites.create(assets.image("""
            scooter
        """), SpriteKind.Button)
    if skin_number == 1:
        show_skin = sprites.create(assets.image("""
            rocket
        """), SpriteKind.Button)
    if skin_number == 2:
        show_skin = sprites.create(assets.image("""
            helicopter
        """), SpriteKind.Button)
    show_skin.set_position(105, 88)
def show_intro():
    music.stop_all_sounds()
    scene.set_background_image(assets.image("""
        intro_image
    """))
    pause(1000)
    music.play(music.create_song(assets.song("""
            intro_theme
        """)),
        music.PlaybackMode.UNTIL_DONE)
    pause(2000)
# Muestra el menú y los distintos botones, además de el aspecto del jugador
def show_menu():
    global play_button, skin, cursor
    if choose == 0:
        music.set_volume(15)
        music.play(music.create_song(assets.song("""
                menu_music
            """)),
            music.PlaybackMode.LOOPING_IN_BACKGROUND)
        scene.set_background_image(assets.image("""
            menu_background
        """))
        play_button = sprites.create(assets.image("""
            play_button
        """), SpriteKind.Button)
        skin = sprites.create(assets.image("""
            skin_button
        """), SpriteKind.Button)
        cursor = sprites.create(assets.image("""
            cursor_icon
        """), SpriteKind.player)
        skin.set_position(80, 90)
        controller.move_sprite(cursor)
gravity = 0
spawn = False
player1: Sprite = None
show_skin: Sprite = None
skin: Sprite = None
cursor: Sprite = None
play_button: Sprite = None
facing_right = False
level = 0
choose = 0
skin_number = 0
def on_overlap_tile2(sprite2: Sprite, location2: tiles.Location):
    game.game_over(False)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        mine-3
    """),
    on_overlap_tile2)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        sonicenemy3
    """),
    on_overlap_tile2)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        mine-2
    """),
    on_overlap_tile2)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        pacman ghost
    """),
    on_overlap_tile2)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        mine-0
    """),
    on_overlap_tile2)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        sonicenemy
    """),
    on_overlap_tile2)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        enemysonic
    """),
    on_overlap_tile2)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        enemigo_1
    """),
    on_overlap_tile2)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        pacman ghost2
    """),
    on_overlap_tile2)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        mine-1
    """),
    on_overlap_tile2)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        mine-4
    """),
    on_overlap_tile2)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        zelda_enemy
    """),
        on_overlap_tile2)
skin_number = 0
choose = 0
level = 0
facing_right = True
show_menu()