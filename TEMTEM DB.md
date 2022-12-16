****************TEMTEM DB*****************

TemTem[t_temtem]
    Number: n
    Name: Mimit
    types: [t_types]
    portraitWikiUrl: https://assets.reedpopcdn.com/M001_JIYqU93.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/M001_JIYqU93.jpg
    lumaPortraitWikiUrl:
    wikiUrl: https://temtem.wiki.gg/wiki/Mimit
    stats: {
      hp: 55
      sta: 55
      spd: 55
      atk: 55
      def: 65
      spatk: 55
      spdef: 65
      total: 405
    }
    traits: [t_traits]
    details: {
      height: {
        cm: 42
        inches: 16
      }
      weight: {
        kg: 42
        lbs: 92
      }
    }
    techniques: [t_techniques]
    evolution:{
        ...
    } 
    area: {
        [t_area]
        frequency: 10%-50%
        level: 1-10
        pansuns: 69-73
    }
    gender_ratio: [male:50, female:50]
    catch_rate: n
    hatchMins:n
    tvYields: [hp:1, atk:1]
    Description:



Types[t_types]:
    Name: [Neutral, Fire, Water, Nature, Electric, Earth, Mental, Wind, Digital, Melee, Crystal, Toxic]
    Offense: [Neutral:2, Fire:4, Water:1...]
    Defense: [Neutral:1, Fire:0.5...]


Traits[t_traits] https://gamewith.net/temtem/article/show/15388
    Name: [Air specialist, Amphibian, Avenger]
    Description: Damage done with Wind techniques is increased by 15%.


Effects [t_effects]
    Class: [Unknown, condition, targeting, damage, buff] \\"synergyeffects": \[[^\]]*\s
    effect:[condition[poison, Asleep, Burned], targeting[OtherTeamorAlly], damage, buff[SPD, ATK, SPE, STA, HP, DEF, SPA]]
    target: [all_allies, self, rival, all_rivals]
    amount: [n]


Techniques [t_techniques]
    Name:
    Source: [Levelling, TechniqueCourses, Breeding]
    Levels: [Levelling=n, TechniqueCourses=0, Breeding=0]
    WikiURL: https://temtem.wiki.gg/wiki/Reset
    Type: t_types
    Class: [Physical, Status, Special]
    Class Icon:
    Damage:[Physical:n, Status:0, Special:n]
    StaminaCost: n
    Hold: n {0,1,2,3}
    priority:[very_low, low, normal, high, very_high, ultra]
    priorityIcon:
    Sinergy: t_types
    SinergyEffects: [t_effects]
    targets:[Self, Single Rival Target, Single Ally Target, All Team, All Rival Team] //Revisar
    description:
    effects: [t_effects]


Area[t_area]
  Name:Area1
  Location: [t_location]
  PictureArea: https://static.wikia.nocookie.net/temtem_gamepedia_en/images/7/7c/Aguamarina_Caves_area1.png/revision/latest/scale-to-width-down/1000?cb=20200814040522

Location[t_location]
  Name:Aguamarina Caves
  Island:[Deniz, Cipanku, Tucma, Omninesia, Kisiwa, Arbury]
  PictureLocation:

