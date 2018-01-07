module Components.Update exposing (init, update)

import Components.Msg exposing (Msg(..))
import Components.Model exposing(Model)

init : (Model, Cmd Msg)
init =
    (Model  [
    { packId = "1"
    , cardName = "test"
    , cardNameRuby = "テスト"
    , level = 2
    , attribute = "炎"
    , monsterType = "獣族"
    , attack = 1500
    , defence = 200
    , flavorText = "これがテキストじゃ"
    , flavorTextRuby = "これがてきすとじゃ"
    , otherType = ""
    , scale = 0
    }]  "", Cmd.none)


update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
    case msg of
        Search prop ->
            ({model | searchType = prop}) ! []