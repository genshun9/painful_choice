module Components.Model exposing (..)

type alias Model =
    { cardList: List Card
    , searchType: String
    }


type alias Card =
    { packId: PackId
    , cardName: CardName
    , cardNameRuby: CardNameRuby
    , level: Level
    , attribute: Attribue
    , monsterType: MonsterType
    , attack: Attack
    , defence: Defence
    , flavorText: FlavorText
    , flavorTextRuby: FlavorTextRuby
    , otherType: OtherType
    , scale: Scale
    }

type alias PackId = String
type alias CardName = String
type alias CardNameRuby = String
type alias Level = Int
type alias Attribue = String
type alias MonsterType = String
type alias Attack = Int
type alias Defence = Int
type alias FlavorText = String
type alias FlavorTextRuby = String
type alias OtherType = String
type alias Scale = Int
