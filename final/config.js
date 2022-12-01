var config = {
    style:  'mapbox://styles/sedribenne/clatxlbpt000m15mimnssxe9x',
    accessToken: 'pk.eyJ1Ijoic2VkcmliZW5uZSIsImEiOiJjbGFzeW5kOGwwNjEzM3dxazlucGNzdGhrIn0.x15FaKNAW1i0COlqNGaG1Q',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: true, //set true for enabling 3D maps.
    title: 'Hasidim on Hudson',
    subtitle: 'A Narrative of Hasidic development in Rockland County',
    authors: 'By Emile Bensedrine and Kellen Cooks',
    para1:'The Hudson Valley, which stretches from the northern boundary of New York City to Albany, contains numerous diverse communities with equally diverse development trajectories. With its proximity to New York, it has long attracted tourists. Since its connection to the Erie Canal, the Hudson Valley became a hub of industry and manufacturing. Areas of the Lower Hudson Valley in particular have seen the development of affluent suburban communities. Over the past few decades, the Hudson Valley like much of the nation has seen significant deindustrialization. Towns in decline have thus seen two types of revitalization, one from the influx of largely Latino immigrants, and the other through amenity development driven by luxury real estate investment targeting more affluent newcomers.',
    para2:'Another, often unmentioned, type of development has also played a significant role in transforming the Hudson Valley, that caused by the influx of Hasidic Communities into established suburban neighborhoods. Hasidic development in the Lower Hudson Valley represents a unique and separate development pattern that has led to significant inter-communal tensions ranging from zoning conflicts, to displacement, to the divestment from the local school district. The following content is an exploration into the story of Hasidic Development in Rockland County, its scale, and its impacts. The intention of the data is not to demonize any group, but rather to contextualize and shed light on a little-understood phenomenon riddled with controversy.',
    footer: 'Image source: https://www.theatlantic.com/photo/2012/11/hurricane-sandy-the-aftermath/100397/ Video source: Dr. Wenfei Xu <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    
    chapters: [        
    	{
            id: 'first_chapter',
            alignment: 'right',
            hidden: false,
            title: 'Geography',
            description:'Rockland county lies at the southern end on the west bank of the Hudson River Valley. Throughout the mid-to-late 20th century, the county became increasingly suburbanized with the influx of white city residents moving to the area.',
            location: {
			center: [-73.95988, 41.16000],
			zoom: 7.5,
			pitch: 0.00,
			bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            speed: 1, 
                onChapterEnter: 
                [                
                    {
                    layer: 'rockland-towns-villages-0ka1by',
                    opacity: 1
                    }, 
                                    {
                    layer: '2017_county_exec',
                    opacity: 0
                    },
                    {
                    layer: '2013_county_exec',
                    opacity: 0
                    },
                    {
                    layer: 'secular-schools-0xehn8',
                    opacity: 0
                    },    
                    {
                    layer: 'all-schools-b8rve0',
                    opacity: 0
                    },  
                    {
                    layer: 'jewish-schools-4p0sa8',
                    opacity: 0
                    },             
                    {
                    layer: '1960-race-637khu',
                    opacity: 0
                    },
                    {
                    layer: '1970-race-dm6sg6',
                    opacity: 0
                    },
                    {
                    layer: '1980-race-09ndgz',
                    opacity: 0
                    },
                    {
                    layer: '1990-race-940279',
                    opacity: 0
                    },
                    {
                    layer: '2000-race-ar1826',
                    opacity: 0
                    }, 
                    {
                    layer: '2010-race-36y0ds',
                    opacity: 0
                    },
                    {
                    layer: '2020-race-5w5o94',
                    opacity: 0
                    },              
                    {
                    layer: 'New Square 61',
                    opacity: 0
                    },
                    {
                    layer: 'Pomona 1967',
                    opacity: 0
                    },
                    {
                    layer: 'map-labels-60s',
                    opacity: 0
                    },                              
                    {
                    layer: 'Wesley Hills 83',
                    opacity: 0
                    },
                    {
                    layer: 'New Hempstead 84',
                    opacity: 0
                    },
                    {
                    layer: 'Chestnut Ridge 86',
                    opacity: 0
                    },
                    {
                    layer: 'Airmont 91',
                    opacity: 0
                    },
                    {
                    layer: 'Montebello 86',
                    opacity: 0
                    },
                    {
                    layer: 'kaser 91',
                    opacity: 0
                    },                                                  
                ],
                onChapterExit: 
                [                
                ]

        },
        {
	    id: 'interlude',
	    alignment: 'center',
	    hidden: false,
	    description: '"There are two reasons villages get formed in Rockland, One is to keep the Hasidim out and the other is to keep the Hasidim in."',
		onChapterEnter: 
                [                                                                                                                                 
                ],

            onChapterExit: 
                [ 
                    {
                    layer: 'rockland-towns-villages-0ka1by',
                    opacity: 0
                    },               
                ]
        },
        {
            id: 'chapter60s',
            alignment: 'right',
            hidden: false,
            title: '1960s',
            description:'Around the 1960s, a Jewish community of Skver Hasidic dynasty, many Holocaust survivors, moved to Rockland county from Brooklyn after purchasing a 160-acre dairy farm. The Skverer Hasidim were some of the first of many groups of Hasidim to leave New York City due to fears of assimilation. The group formed New Square Specifically so that they could permit denser housing to be built.',
            location: {
                center: [-73.95988, 41.16000],
				zoom: 10.3,
				pitch: 0.00,
				bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            speed: .1, // make the flying slow
            onChapterEnter: [
                                {
                    layer: '1970-race-dm6sg6',
                    opacity: 0
                },
                {
                    layer: '1980-race-09ndgz',
                    opacity: 0
                },
                {
                    layer: '1990-race-940279',
                    opacity: 0
                },
                {
                    layer: '2000-race-ar1826',
                    opacity: 0
                }, 
                {
                    layer: '2010-race-36y0ds',
                    opacity: 0
                },
                {
                    layer: '2020-race-5w5o94',
                    opacity: 0
                },              
                {
                    layer: 'Wesley Hills 83',
                    opacity: 0
                },
                {
                    layer: 'New Hempstead 84',
                    opacity: 0
                },
                {
                    layer: 'Chestnut Ridge 86',
                    opacity: 0
                },
                {
                    layer: 'Airmont 91',
                    opacity: 0
                },
                {
                    layer: 'Montebello 86',
                    opacity: 0
                },
                {
                    layer: 'kaser 91',
                    opacity: 0
                },                 
                {
                    layer: '2017_county_exec',
                    opacity: 0
                },
                {
                    layer: '2013_county_exec',
                    opacity: 0
                },
                {
                    layer: '1960-race-637khu',
                    opacity: 1
                },
                {
                    layer: 'New Square 61',
                    opacity: 1
                },
                {
                    layer: 'Pomona 1967',
                    opacity: 1
                },

                // {
                //     layer: 'secular-schools',
                //     opacity: 0
                // },    
                // {
                //     layer: 'all-schools',
                //     opacity: 0
                // },  
                // {
                //     layer: 'jewish-schools',
                //     opacity: 0
                // },             
                                                                                                                                              
            ],
            onChapterExit: [
                {
                    layer: 'New Square 61',
                    opacity: 0
                },
                {
                    layer: 'Pomona 1967',
                    opacity: 0
                },
                {
                    layer: 'map-labels-60s',
                    opacity: 0
                },                
                {
                    layer: '1960-race-637khu',
                    opacity: 0
                },

            ]
        },
        {
            id: 'chapter70s',
            alignment: 'right',
            hidden: false,
            title: '1970s',
            image: 'images/source.png',
            description: 'The years following, Hasidic communities continued to grow in Rockland and neighboring Orange counties as more Hasidim moved into the region. Different Hasidic groups often settled in different areas, with the Vizhnitz Dynasty beggining to settle in the neighborhood of Monsey.',
            location: {
                center: [-73.95988, 41.16000],
				zoom: 10.30,
				pitch: 0.00,
				bearing: 0.00
            },
            callback: '',
            onChapterEnter: [                
                {
                    layer: '1970-race-dm6sg6',
                    opacity: 1,
                },
                ],
            onChapterExit: [                
            	{
                    layer: '1970-race-dm6sg6',
                    opacity: 0
                },
                ]
        },
        {
            id: 'chapter80s',
            alignment: 'right',
            hidden: false,
            title: '1980s',
            image: 'images/source.png',
            description: '.',
            location: {
                center: [-73.95988, 41.16000],
				zoom: 10.30,
				pitch: 0.00,
				bearing: 0.00
            },
            callback: '',
            onChapterEnter: [
                    {
                    layer: '1980-race-09ndgz',
                    opacity: 1,
                    },               
                    {
                    layer: 'Wesley Hills 83',
                    opacity: 1
                    },
                    {
                    layer: 'New Hempstead 84',
                    opacity: 1
                    },
                    {
                    layer: 'Chestnut Ridge 86',
                    opacity: 1
                    },
                    {
                    layer: 'Montebello 86',
                    opacity: 1
                    }
                    ],
            onChapterExit: [            	{
                    layer: '1980-race-09ndgz',
                    opacity: 0
                },
                {
                    layer: 'Wesley Hills 83',
                    opacity: 0
                },
                {
                    layer: 'New Hempstead 84',
                    opacity: 0
                },
                {
                    layer: 'Chestnut Ridge 86',
                    opacity: 0
                },
                {
                    layer: 'Montebello 86',
                    opacity: 0
                },
                ]
        },
        {
            id: 'chapter90s',
            alignment: 'right',
            hidden: false,
            title: '1990s',
            image: 'images/source.png',
            description: 'The last of the anti-orthodox reactionary villages to be founded was Airmont, founded to have "strong zoning" that would keep the "character of the neighborhood" applying zoning that was unconducive to the Hasidic lifestyle.',
            location: {
                center: [-73.95988, 41.16000],
				zoom: 10.30,
				pitch: 0.00,
				bearing: 0.00
            },
            callback: '',
            onChapterEnter: [                
                {
                    layer: 'Airmont 91',
                    opacity: 1
                },
                {
                    layer: 'kaser 91',
                    opacity: 1
                },
                {
                    layer: '1990-race-940279',
                    opacity: 1
                },
                ],
            onChapterExit: [            	
                {
                    layer: '1990-race-940279',
                    opacity: 0
                },
                {
                	layer: '2000-race-ar1826',
                    opacity: 1,
                },
                {
                    layer: 'Airmont 91',
                    opacity: 0
                },
                {
                    layer: 'kaser 91',
                    opacity: 0
                },
                ]
        },
            {
            id: 'chapter00s',
            alignment: 'right',
            hidden: false,
            title: '2000s',
            image: 'images/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-73.95988, 41.16000],
				zoom: 10.30,
				pitch: 0.00,
				bearing: 0.00
            },
            callback: '',
            onChapterEnter: [],
            onChapterExit: [            	{
                    layer: '2000-race-ar1826',
                    opacity: 0
                },
                {
                	layer: '2010-race-36y0ds',
                    opacity: 1,
                },]
        },
        {
            id: 'chapter10s',
            alignment: 'right',
            hidden: false,
            title: '2010s',
            image: 'images/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-73.95988, 41.16000],
				zoom: 10.30,
				pitch: 0.00,
				bearing: 0.00
				},
            callback: '',
            onChapterEnter: [],
            onChapterExit: [            	{
                    layer: '2010-race-36y0ds',
                    opacity: 0
                },
                {
                	layer: '2020-race-5w5o94',
                    opacity: 1,
                },]
        },
        {
            id: 'chapter10s',
            alignment: 'right',
            hidden: false,
            title: '2020s',
            image: 'images/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-73.95988, 41.16000],
				zoom: 10.30,
				pitch: 0.00,
				bearing: 0.00
            },
            callback: '',
            onChapterEnter: [],
            onChapterExit: [            	{
                    layer: '2020-race-5w5o94',
                    opacity: 0
                },]
        },
        {
            id: 'Eastern_europe',
            alignment: 'left',
            hidden: false,
            title: 'Origins of Hasidism in Central and Eastern Europe',
            description: 'Text about what started Hasidism and how it spread, what are the dynastic structures, etc.',

            location: {
              	center: [22.87423, 47.76870],
				zoom: 6.44,
				pitch: 56.00,
				bearing: 11.20,
              speed: 1, // make the flying slow
              curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Williamsburg',
            alignment: 'left',
            hidden: false,
            title: 'Migration to Brooklyn',
            description: 'During and after the Second World War, the majority of European Jews who survived migrated to the United States or Mandatory Palestine (now the State of Israel). Many Hasidic dynasties took the journey to the United States, settling mainly in Booklyn.',

            location: {
				center: [-73.96303, 40.64629],
				zoom: 11.76,
				pitch: 44.13,
				bearing: -16.84,
              speed: 1, // make the flying slow
              curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
        id: 'interlude',
        alignment: 'center',
        hidden: false,
        description: "Hasidic Rebbes, who lead Hasidic communities quickly realized that New York City was unfit for a pure religious life. They quickly looked to nearby rapidly suburbanizing rural areas for places to live an unbothered religious life. New Square being the first of these places in Rockland County. Hasidim quickly began to move north to Rockland and founded Yeshivas—religious schools children attend until they marry."
        },
        {
            id: 'All Schools',
            alignment: 'left',
            hidden: false,
            title: 'All Schools in Rockland',
            description: 'Copy these sections to add to your story.',

            location: {
                center: [-73.95988, 41.16000],
                zoom: 10.3,
                pitch: 0.00,
                bearing: 0.00,
              speed: 1, // make the flying slow
              curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'all-schools-b8rve0',
                    opacity: 1
                },],
            onChapterExit: [
                {
                    layer: 'all-schools-b8rve0',
                    opacity: 0
                },],
        },
        {
            id: 'Jewish Schools',
            alignment: 'left',
            hidden: false,
            title: 'Jewish Schools in Rockland',
            description: 'Copy these sections to add to your story.',

            location: {
                center: [-73.95988, 41.16000],
                zoom: 10.3,
                pitch: 0.00,
                bearing: 0.00,
              speed: 1, // make the flying slow
              curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'jewish-schools-4p0sa8',
                    opacity: 1
                },],
            onChapterExit: [
                {
                    layer: 'jewish-schools-4p0sa8',
                    opacity: 0
                },],
        },
        {
            id: 'Secular Schools',
            alignment: 'left',
            hidden: false,
            title: 'Secular Schools in Rockland',
            description: 'Copy these sections to add to your story.',

            location: {
                center: [-73.95988, 41.16000],
                zoom: 10.3,
                pitch: 0.00,
                bearing: 0.00,
              speed: 1, // make the flying slow
              curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'secular-schools-0xehn8',
                    opacity: 1
                },],
            onChapterExit: [
                {
                    layer: 'secular-schools-0xehn8',
                    opacity: 0
                },],
        },
        {
        id: 'interlude',
        alignment: 'center',
        hidden: false,
        description: 'Text introducing elections section',
        },
        {
            id: 'Election_2013',
            alignment: 'left',
            hidden: false,
            title: 'County Executive Race of 2013',
            description: 'Copy these sections to add to your story.',

            location: {
                center: [-73.95988, 41.16000],
                zoom: 10.3,
                pitch: 0.00,
                bearing: 0.00,
              speed: 1, // make the flying slow
              curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: '2013_county_exec',
                    opacity: 1
                },],
            onChapterExit: [
                {
                    layer: '2013_county_exec',
                    opacity: 0
                },],
        },
        {
            id: 'Election_2017',
            alignment: 'left',
            hidden: false,
            title: 'County Executive Race of 2017',
            description: 'Copy these sections to add to your story.',

            location: {
                center: [-73.95988, 41.16000],
                zoom: 10.3,
                pitch: 0.00,
                bearing: 0.00,
              speed: 1, // make the flying slow
              curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            {
                    layer: '2017_county_exec',
                    opacity: 1
                },],
            onChapterExit: []
        },
    ]
};

