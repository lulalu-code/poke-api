export interface PokemonMeta {
    name:string;
    url:string;
}

export interface Pokemon {
    id:number;
    name:string;
    base_experience:number;
    height:number;
    is_default:boolean;
    order:number;
    weight:number;
    abilities:any[];
    forms:any[];
    game_indices:any[];
    held_items:any[]
    location_area_encounters:string;
    moves:any[];
    species:any;
    sprites:Sprites;
    stats:any[];
    types:any[];
    past_types:any[];
}

export interface Sprites {
    back_default:string;
    back_female:string;
    back_shiny:string;
    back_shiny_female:string;
    front_default:string;
    front_female:string;
    front_shiny:string;
    front_shiny_female:string;
}