var config = {
    style: 'mapbox://styles/sedribenne/cl9bwby3n000314po3nbe0n1z',
    accessToken: 'pk.eyJ1Ijoic2VkcmliZW5uZSIsImEiOiJjbDlyNHNseDUwZDd4M3VxeHV6eGxzNHYwIn0.7l11nWXJKl6YqbifSZVLmQ',
    showMarkers: false,
    //markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Flooding in the Future of New York',
    subtitle: "An exploration into the projected impacts of flooding on New York City's public housing",
    byline: 'By Emile Bensedrine, under the guidance of Dr. Wenfei Xu',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        { id: 'chapter1',
            alignment: 'center',
            description:'Scroll to begin animation',
            location: {
                center: [-73.99252, 40.65727],
                zoom: 12.23,
                pitch: 60,
                bearing: 16.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
                        onChapterEnter: [
                 {
                     layer: 'sandy-inundation-zone-4abxur',
                     opacity: 1,
                     duration: 300
                 }
            ]
            ,
            onChapterEnter: [
                 {
                     layer: 'pluto-hous-type-master-featu-7b5u7f',
                     opacity: 0,
                     duration: 300
                 }
            ],
            onChapterEnter: [
                 {
                     layer: 'futurefloodplains-2050-100yr-6nepei',
                     opacity: 0,
                     duration: 300
                 }
            ],
            onChapterEnter: [
                 {
                     layer: 'futurefloodplains-2100-100yr-cqwfrw',
                     opacity: 0,
                     duration: 300
                 }
            ]

        },{
            id: 'chapter2',
            alignment: 'left',
            hidden: false,
            title: 'Display Title',
            image: 'images/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-73.99252, 40.65727],
                zoom: 11.23,
                pitch: 60,
                bearing: 16.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'sandy-inundation-zone-4abxur',
                     opacity: 0,
                     duration: 300
                 }
            ],
            onChapterEnter: [
                 {
                     layer: 'pluto-hous-type-master-featu-7b5u7f',
                     opacity: 0,
                     duration: 300
                 }
            ],
            onChapterEnter: [
                 {
                     layer: 'futurefloodplains-2050-100yr-6nepei',
                     opacity: 0,
                     duration: 300
                 }
            ],
            onChapterEnter: [
                 {
                     layer: 'futurefloodplains-2100-100yr-cqwfrw',
                     opacity: 0,
                     duration: 300
                 }
            ],
   
        },{
            id: 'chapter3',
            alignment: 'left',
            hidden: false,
            title: 'Display Title',
            image: 'images/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-73.99252, 40.65727],
                zoom: 11.23,
                pitch: 60,
                bearing: 16.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'sandy-inundation-zone-4abxur',
                     opacity: 1,
                     duration: 5000
                 }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter4',
            alignment: 'right',
            hidden: false,
            title: 'Red Hook',
            image: 'images/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
               center: [-74.00842, 40.67456],
                zoom: 14.20,
                pitch: 41.50,
                bearing: 16.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter5',
            alignment: 'left',
            hidden: false,
            title: 'The Red Hook Houses',
            image: 'Red_Hook_Houses.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-74.00595, 40.67524],
                zoom: 15.95,
                pitch: 62.50,
                bearing: -93.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
]

    
};
