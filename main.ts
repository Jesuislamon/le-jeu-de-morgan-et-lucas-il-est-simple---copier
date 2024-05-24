scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    sprites.destroy(chien)
    tiles.setCurrentTilemap(tilemap`niveau10`)
    le_mec_normal = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(le_mec_normal)
    tiles.placeOnRandomTile(le_mec_normal, assets.tile`myTile1`)
    scene.cameraFollowSprite(le_mec_normal)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    info.changeLifeBy(1)
    tiles.setTileAt(location, assets.tile`myTile2`)
    scaling.scaleByPixels(myCorg, 10, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    scaling.scaleToPixels(flapy_happy_hapy_bird, 10, ScaleDirection.Uniformly, ScaleAnchor.Middle)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorDark4, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`niveau14`)
    tiles.setWallAt(tiles.getTileLocation(15, 6), true)
    tiles.setWallAt(tiles.getTileLocation(13, 6), true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass3, function (sprite, location) {
    info.changeLifeBy(-2)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`niveau7`)
    sprites.destroy(myCorg)
    sprites.destroy(mySprite2)
    chien = corgio.create(SpriteKind.Player)
    chien.horizontalMovement()
    chien.verticalMovement(true)
    scene.cameraFollowSprite(chien)
    tiles.placeOnRandomTile(chien, sprites.builtin.crowd9)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorDarkDiamond, function (sprite, location) {
    tiles.setWallAt(tiles.getTileLocation(15, 6), false)
    tiles.setWallAt(tiles.getTileLocation(16, 6), false)
    tiles.setWallAt(tiles.getTileLocation(13, 6), false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass1, function (sprite, location) {
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    game.showLongText("Bravo tu as terminé le niveau bonus", DialogLayout.Full)
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.gameOver(false)
})
info.onCountdownEnd(function () {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    info.changeLifeBy(-1)
    tiles.setTileAt(location, sprites.castle.tilePath5)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass3, function (sprite, location) {
    info.changeLifeBy(-2)
})
scene.onOverlapTile(SpriteKind.Player, sprites.vehicle.roadHorizontal, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.reset()
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath3, function (sprite, location) {
    info.changeLifeBy(-2)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    flapy_happy_hapy_bird.throwDart()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardWater, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`niveau16`)
    sprites.destroy(le_mec_normal)
    Cc = sprites.create(img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f 3 3 f f e e e e f f 3 3 f . 
        . f b b f b f e e f b f b b f . 
        . f b b e 1 f 4 4 f 1 e b b f . 
        f f b b f 4 4 4 4 4 4 f b b f f 
        f b b f f f e e e e f f f b b f 
        . f e e f b d d d d b f e e f . 
        . . e 4 c d d d d d d c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(Cc)
    tiles.placeOnRandomTile(Cc, sprites.castle.saplingOak)
    scene.cameraFollowSprite(Cc)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass2, function (sprite, location) {
    info.changeLifeBy(-2)
    tiles.setTileAt(location, sprites.castle.tileGrass2)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    info.changeLifeBy(1)
    tiles.setTileAt(location, sprites.castle.tileGrass2)
    myCorg.setVelocity(100, 100)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardSpike, function (sprite, location) {
    info.changeLifeBy(-9)
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile19, function (sprite, location) {
    tiles.setWallAt(location, true)
})
info.onLifeZero(function () {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    info.changeLifeBy(1)
    tiles.setTileAt(location, sprites.castle.tileGrass2)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    music.play(music.createSong(hex`0078000408010404001c00100500640000041e000004000000000000000000000000000a040004060014001800012405001c000f0a006400f4010a00000400000000000000000000000000000000020c0008000c00010d0c001000012506001c00010a006400f401640000040000000000000000000000000000000002060004000800011807001c00020a006400f4016400000400000000000000000000000000000000030600000004000124`), music.PlaybackMode.UntilDone)
    tiles.setCurrentTilemap(tilemap`niveau12`)
    sprites.destroy(le_mec_normal)
    flapy_happy_hapy_bird = darts.create(img`
        f f 
        `, SpriteKind.Player)
    flapy_happy_hapy_bird.controlWithArrowKeys(true)
    tiles.placeOnRandomTile(flapy_happy_hapy_bird, sprites.vehicle.roadIntersection2)
    scene.cameraFollowSprite(flapy_happy_hapy_bird)
})
scene.onOverlapTile(SpriteKind.Player, sprites.skillmap.islandTile4, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`niveau3`)
    tiles.placeOnRandomTile(myCorg, sprites.builtin.forestTiles6)
    tiles.setCurrentTilemap(tilemap`niveau3`)
    mySprite2 = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        .....7977777777.....
        .....7777777777.....
        ......66666666......
        ......99999999......
        .....9999999999.....
        .....9999999999.....
        .....9999999999.....
        .....7777777777.....
        .....7777777777.....
        .....7777777776.....
        .....7777777776.....
        ......76666666......
        ....................
        ....................
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(mySprite2, sprites.dungeon.collectibleBlueCrystal)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let Cc: Sprite = null
let mySprite2: Sprite = null
let flapy_happy_hapy_bird: Dart = null
let le_mec_normal: Sprite = null
let chien: Corgio = null
let myCorg: Sprite = null
game.showLongText("Bonne chance 🥳", DialogLayout.Full)
info.startCountdown(400)
tiles.setCurrentTilemap(tilemap`nivea5456`)
myCorg = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(myCorg, 100, 100)
tiles.placeOnRandomTile(myCorg, sprites.dungeon.stairSouth)
scene.cameraFollowSprite(myCorg)
info.setLife(3)
music.play(music.createSong(hex`0032000408010300001c00010a006400f401640000040000000000000000000000000005000004060000000400012407001c00020a006400f4016400000400000000000000000000000000000000030c0004000800011408000c00012708001c000e050046006603320000040a002d00000064001400013200020100020600040008000111`), music.PlaybackMode.UntilDone)
