module Components.View exposing (view)

import Html exposing (Html, Attribute, div, span, ul, li, text, img, button)
import Html.Events exposing (onClick, onMouseOver, onMouseOut)
import Html.Attributes exposing (style, src)
import Components.Msg exposing (Msg(ListAll, Search))
import Components.Model exposing (Model)
--import Components.Styles as Styles

view : Model -> Html Msg
view model =
    div [  ]
        [
            viewCardList model model.cardList
        ]

viewCardList : Model -> List -> Html msg
viewToolTip model listCard =
    case flag of