import { borderColor } from "./shared"

export const eventData = {
    eventName: "Go Fest 2025",
    sections: {
        featuredRaidBosses: [
            {
                name: "Zacian Espada Suprema",
                image: "https://img.pokemondb.net/sprites/home/shiny/2x/zacian-crowned.jpg",
                borderColor: borderColor.cyan,
                bigBox: true,
                footNote: "* Solo Domingo"
            },
            {
                name: "Zamazenta Escudo Supremo",
                image: "https://img.pokemondb.net/sprites/home/shiny/2x/zamazenta-crowned.jpg",
                borderColor: borderColor.magenta,
                bigBox: true,
                footNote: "* Solo Sábado"
            },
            {
                name: "Pikachu Elegante (Rojo)",
                image: "https://lh3.googleusercontent.com/j6j9i31NDdLTJ2O5W_a8m5ZGIRyVxahfQXTpFAqEs2rhS1XS5XA_mqCIR9wwsI2f5bS7XMLOBiNnJLSDVK0-6c7Kx2ISzJ49Lpk",
                borderColor: borderColor.red,
                bigBox: false,
                footNote: ""
            },
            {
                name: "Pikachu Elegante (Azul)",
                image: "https://lh3.googleusercontent.com/Xqr1nKb-cPWaeOT79KmV9ZrlaNBg9KZUyG9XCFhYLO3HhOSDZfA50p15anQfs5qwuD603XAvVcu9qPbv_fNIW4MJbxJ1WlbO78w",
                borderColor: borderColor.lightBlue,
                bigBox: false,
                footNote: ""
            },
            {
                name: "Pikachu Elegante (Amarillo)",
                image: "https://lh3.googleusercontent.com/en74QJPSz7O0f0HewRMTpjQsYkNkfTz8cTrtZCTeHj-20sanuNTUh07TQrqNvQHbG9FoL50qY_KuupuVzla-n-i7X8ZwO7wxr0c",
                borderColor: borderColor.yellow,
                bigBox: false,
                footNote: ""
            },
            {
                name: "Falinks Conductor",
                image: "https://lh3.googleusercontent.com/FT240_xEqWqCSIkc-GvUvYv-N22F0c9EWO73PWEpPL33IN_eG5E_eFSoVLjSeomYPbnRiHOkCm6bzuuWhiShk9svd2c2jT0HZRY",
                borderColor: borderColor.yellow,
                bigBox: false,
                footNote: ""
            },
        ],
        /* 
            eventHabitats: [
            {
                name: "",
                icon: "",
                borderColor: borderColor.black,
                size: "col-span-3",
                spawns: [
                    {
                        name: "",
                        image: "",
                        incenseBadge: false,
                        footNote: "",
                        sideNote: "*Sábado*",
                        spaceAfter: true,
                    },
                ]
            },
        */
        eventHabitats: [
            {
                name: "Encuentros por Incienso",
                icon: "incense",
                borderColor: borderColor.black,
                size: "col-span-3",
                spawns: [
                    {
                        name: "Unown D",
                        image: "https://img.pokemondb.net/sprites/home/shiny/unown-d.png",
                        footNote: "D"
                    },
                    {
                        name: "Unown S",
                        image: "https://img.pokemondb.net/sprites/home/shiny/unown-s.png",
                        spaceAfter: true,
                        sideNote: "*Sábado*",
                        footNote: "S"
                    },
                    {
                        name: "Unown E",
                        image: "https://img.pokemondb.net/sprites/home/shiny/unown-e.png",
                        footNote: "E"
                    },
                    {
                        name: "Unown H",
                        image: "https://img.pokemondb.net/sprites/home/shiny/unown-h.png",
                        footNote: "H"
                    },
                    {
                        name: "Unown I",
                        image: "https://img.pokemondb.net/sprites/home/shiny/unown-i.png",
                        footNote: "I"
                    },
                    {
                        name: "Unown L",
                        image: "https://img.pokemondb.net/sprites/home/shiny/unown-l.png",
                        spaceAfter: true,
                        sideNote: "*Domingo*",
                        footNote: "L"
                    },
                    {
                        name: "Unown O",
                        image: "https://img.pokemondb.net/sprites/home/shiny/unown-o.png",
                        footNote: "O"
                    },
                    {
                        name: "Unown R",
                        image: "https://img.pokemondb.net/sprites/home/shiny/unown-r.png",
                        footNote: "R"
                    },
                    {
                        name: "Unown W",
                        image: "https://img.pokemondb.net/sprites/home/shiny/unown-w.png",
                        footNote: "W"
                    },
                ]
            },
            {
                name: "Volcán Oscuro",
                icon: "https://storage.googleapis.com/nianticweb-axiom-cdn/pokemongo/uploads/6adbf6c051b742fa618d90dd424305db7abd0d0a.svg",
                borderColor: borderColor.darkRed,
                size: "col-span-6",
                spawns: [
                    {
                        name: "Flabébé (Flor Roja)",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/flabebe.jpg",
                    },
                    {
                        name: "Torkoal",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/torkoal.jpg",
                        incenseBadge: true,
                    },
                    {
                        name: "Carbink",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/carbink.jpg",
                    },
                    {
                        name: "Houndour",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/houndour.jpg",
                    },
                    {
                        name: "Numel",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/numel.jpg",
                    },
                    {
                        name: "Duskull",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/duskull.jpg",
                    },
                    {
                        name: "Gothita",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/gothita.jpg",
                    },
                    {
                        name: "Golett",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/golett.jpg",
                    },
                    {
                        name: "Fletchling",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/fletchling.jpg",
                    },
                    {
                        name: "Skrelp",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/skrelp.jpg",
                    },
                    {
                        name: "Fuecoco",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/fuecoco.jpg",
                    },
                ]
            },
            {
                name: "Dojo Reforzado",
                icon: "https://storage.googleapis.com/nianticweb-axiom-cdn/pokemongo/uploads/b1e95ef6c2157a9fdb6a955dbf1928ea7a11c8fa.svg",
                borderColor: borderColor.yellow,
                size: "col-span-6",
                spawns: [
                    {
                        name: "Flabébé (Flor Amarilla)",
                        image: "https://img.pokemondb.net/sprites/home/shiny/1x/flabebe-yellow.png",
                    },
                    {
                        name: "Skiddo",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/skiddo.jpg",
                        incenseBadge: true,
                    },
                    {
                        name: "Mienfoo",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/mienfoo.jpg",
                    },
                    {
                        name: "Machop",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/machop.jpg",
                    },
                    {
                        name: "Electabuzz",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/electabuzz.jpg",
                    },
                    {
                        name: "Teddiursa",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/teddiursa.jpg",
                    },
                    {
                        name: "Scraggy",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/scraggy.jpg",
                    },
                    {
                        name: "Chespin",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/chespin.jpg",
                    },
                    {
                        name: "Pancham",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/pancham.jpg",
                    },
                    {
                        name: "Dedenne",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/dedenne.jpg",
                    },
                    {
                        name: "Crabrawler",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/crabrawler.jpg",
                    },
                ]
            },
            {
                name: "Tundra Hipnóptica",
                icon: "https://storage.googleapis.com/nianticweb-axiom-cdn/pokemongo/uploads/11a83edd568adbe12f2dac24555152176ed75f41.svg",
                borderColor: borderColor.lightBlue,
                size: "col-span-6",
                spawns: [
                    {
                        name: "Flabébé (Flor Azul)",
                        image: "https://img.pokemondb.net/sprites/home/shiny/flabebe-blue.png",
                    },
                    {
                        name: "Pachirisu",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/pachirisu.jpg",
                        incenseBadge: true,
                    },
                    {
                        name: "Frigibax",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/frigibax.jpg",
                    },
                    {
                        name: "Sandshrew de Alola",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/sandshrew-alolan.jpg",
                    },
                    {
                        name: "Swinub",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/swinub.jpg",
                    },
                    {
                        name: "Spheal",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/spheal.jpg",
                    },
                    {
                        name: "Piplup",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/piplup.jpg",
                    },
                    {
                        name: "Snover",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/snover.jpg",
                    },
                    {
                        name: "Munna",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/munna.jpg",
                    },
                    {
                        name: "Elgyem",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/elgyem.jpg",
                    },
                    {
                        name: "Bergmite",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/bergmite.jpg",
                    },
                ]
            },
            {
                name: "Ciénaga Feérica",
                icon: "https://storage.googleapis.com/nianticweb-axiom-cdn/pokemongo/uploads/5bb066794e1e5cb1077efe4ce72691c725e53fa4.svg",
                borderColor: borderColor.purple,
                size: "col-span-6",
                spawns: [
                    {
                        name: "Flabébé (Flor Naranja)",
                        image: "https://img.pokemondb.net/sprites/home/shiny/flabebe-orange.png",
                    },
                    {
                        name: "Togetic",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/togetic.jpg",
                    },

                    {
                        name: "Clefairy",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/clefairy.jpg",
                    },
                    {
                        name: "Tentacool",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/tentacool.jpg",
                    },
                    {
                        name: "Mawile",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/mawile.jpg",
                    },
                    {
                        name: "Gulpin",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/gulpin.jpg",
                    },
                    {
                        name: "Venipede",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/venipede.jpg",
                    },
                    {
                        name: "Popplio",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/popplio.jpg",
                    },
                    {
                        name: "Mareanie",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/mareanie.jpg",
                    },
                    {
                        name: "Morelull",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/morelull.jpg",
                        incenseBadge: false,
                    },
                ]
            },
            {
                name: "Solo el Sábado",
                icon: "timed",
                borderColor: borderColor.magenta,
                annotation: "Solo Sábado",
                size: "col-span-6",
                spawns: [
                    {
                        name: "Goomy",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/goomy.jpg",
                        incenseBadge: false,
                    },
                    {
                        name: "Chansey",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/chansey.jpg",
                        incenseBadge: false,
                    },
                    {
                        name: "Skarmory",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/skarmory.jpg",
                        incenseBadge: false,
                    },
                    {
                        name: "Larvitar",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/larvitar.jpg",
                        incenseBadge: false,
                    },
                    {
                        name: "Shieldon",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/shieldon.jpg",
                        incenseBadge: false,
                    },
                    {
                        name: "Shelmet",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/shelmet.jpg",
                        incenseBadge: false,
                    },
                    {
                        name: "Vullaby",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/vullaby.jpg",
                        incenseBadge: false,
                    },
                    {
                        name: "Oranguru",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/oranguru.jpg",
                        incenseBadge: false,
                    },
                ]
            },
            {
                name: "Solo el Domingo",
                icon: "timed",
                borderColor: borderColor.cyan,
                annotation: "Solo Domingo",
                size: "col-span-6",
                spawns: [
                    {
                        name: "Jangmo-o",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/jangmo-o.jpg",
                    },
                    {
                        name: "Farfetch’d de Galar",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/farfetchd-galarian.jpg",
                    },
                    {
                        name: "Cubone",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/cubone.jpg",
                    },
                    {
                        name: "Ralts",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/ralts.jpg",
                    },
                    {
                        name: "Karrablast",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/karrablast.jpg",
                    },
                    {
                        name: "Pawniard",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/pawniard.jpg",
                    },
                    {
                        name: "Deino",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/deino.jpg",
                    },
                    {
                        name: "Passimian",
                        image: "https://img.pokemondb.net/sprites/home/shiny/2x/passimian.jpg",
                    },
                ]
            }
        ]
    }
}
