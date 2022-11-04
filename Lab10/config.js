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
            description:'In late October of 2012, Hurricane Sandy made landfall in New York City, causing unprecedented damage to the then underprepared metropolis.',
            location: {
                center: [-73.99252, 40.65727],
                zoom: 12.23,
                pitch: 60,
                bearing: 16.00,
                curve: 1,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
                onChapterEnter: [
                 {
                     layer: 'futurefloodplains-2050-100yr-6nepei',
                     opacity: 0,
                     duration: 600
                 }
                 ],
                onChapterEnter: [
                 {
                     layer: 'sandy-inundation-zone-4abxur',
                     opacity: 1,
                     duration: 300
                 }
            ],
        },

        {
            id: 'chapter2',
            alignment: 'left',
            hidden: false,
            title: 'Extensive damage with long-lasting effects',
            image: 'Sandy_damage.png',
            description: "The extent of the damage covered large swaths of the city's low-lying coastal areas, many remaining without power for months after the storm surge.",
            location: {
                center: [-73.93312, 40.59525],
                zoom: 12.43,
                pitch: 63.50,
                bearing: -18.40,
                speed: 2,
                curve: 1,
            },
            mapAnimation: 'easeTo',
            rotateAnimation: true,
            callback: '',
        },

        {
            id: 'chapter3',
            alignment: 'left',
            hidden: false,
            title: 'Effects on Public Housing',
            description: "1 of 5 New Yorkers lives the some 177,000 public housing units managed by the New York City Housing Authority around the city. Many NYCHA developments, which at the time had an estimated backlog of $17 billion, were significantly affected by the storm due to their locations.",
            location: {
                center: [-73.93105, 40.67213],
                zoom: 10.95,
                pitch: 42.00,
                bearing: 12.00,
                speed: 2,
                curve: 1,
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
            onChapterEnter: [
                 {
                     layer: 'pluto-hous-type-master-featu-7b5u7f',
                     opacity: 1,
                     duration: 600
                 }
            ],
        },
        {
            id: 'chapter5',
            alignment: 'left',
            hidden: false,
            title: 'The Red Hook Houses',
            image: 'Red_Hook_Houses.png',
            description: 'The neighborhood of Red Hook, in Brooklyn, is home to the Red Hook Houses, a NYCHA development almost completely inundated by Hurricane Sandy.',
            location: {
                center: [-74.00595, 40.67524],
                zoom: 15.95,
                pitch: 62.50,
                bearing: -93.60,
                speed: 2,
                curve: 1,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'pluto-hous-type-master-featu-7b5u7f',
                     opacity: 1,
                     duration: 600
                 }
            ],
            onChapterEnter: [
                 {
                     layer: 'sandy-inundation-zone-4abxur',
                     opacity: .5,
                     duration: 600
                 }
            ],
        
            onChapterExit: [
                 {
                     layer: 'sandy-inundation-zone-4abxur',
                     opacity: 0,
                     duration: 600
                 }
            ],
        },
        {
            id: 'chapter4',
            alignment: 'right',
            hidden: false,
            description: 'The Red Hook Houses are expected to be partially encompassed by 100-year flooding in the year 2050...',
            location: {
                center: [-74.00595, 40.67524],
                zoom: 15.95,
                pitch: 62.50,
                bearing: -93.60
                },
                mapAnimation: 'flyTo',
                speed: 2, // make the flying slow
                curve: 1,
                rotateAnimation: false,
                callback: '',
                
                onChapterEnter: [
                 {
                     layer: 'pluto-hous-type-master-featu-7b5u7f',
                     opacity: .5,
                     duration: 300
                 }
                ],
                onChapterEnter: [
                 {
                     layer: 'futurefloodplains-2050-100yr-6nepei',
                     opacity: 1,
                     duration: 600
                 }
                 ],
                onChapterExit: [
                 {
                     layer: 'futurefloodplains-2050-100yr-6nepei',
                     opacity: 0,
                     duration: 600
                 }
                 ]
        },
                {
            id: 'chapter4pt2',
            alignment: 'right',
            hidden: false,
            description: 'And completely inundated in the year 2100.',
            location: {
                center: [-74.00595, 40.67524],
                zoom: 15.95,
                pitch: 62.50,
                bearing: -93.60},
                // mapAnimation: 'flyTo',
                // speed: 2, // make the flying slow
                // curve: 1,
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [
                 {
                     layer: 'futurefloodplains-2100-100yr-cqwfrw',
                     opacity: 1,
                     duration: 600
                 }
                ],
                
            },
            {
            id: 'chapter5',
            alignment: 'center',
            hidden: false,
            title: 'Looking Forward',
            description: 'The flood resiliency of NYCHA housing developments such as the Red Hook Houses, thus, will be of increasing concern especially as the public housing maintenance backlog continues.',
            location: {
                center: [-74.00595, 40.67524],
                zoom: 15.95,
                pitch: 62.50,
                bearing: -93.60
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
]

    
};
