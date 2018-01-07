module Components.Main exposing (..)

import Html exposing (Html)
import Components.Msg exposing (Msg(..))
import Components.Model exposing (Model)
import Components.Update exposing (init, update)
import Components.View exposing (view)

main : Program Never Model Msg
main =
    Html.program
        { init = init
        , update = update
        , subscriptions = always Sub.none
        , view = view
        }
