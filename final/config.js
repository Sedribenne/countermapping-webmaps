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
    authors: 'By Emile Bensedrine and Kellen Cooks, quotes from Jennifer Wilmoth, principal of Kakiat STEAM Academy in the East Ramapo School District, and has been living within the district for more than 20 years.',
    para1:'The Hudson Valley, which stretches from the northern boundary of New York City to Albany, contains numerous diverse communities with equally diverse development trajectories. With its proximity to New York, it has long attracted tourists. Since its connection to the Erie Canal, the Hudson Valley became a hub of industry and manufacturing. Areas of the Lower Hudson Valley in particular have seen the development of affluent suburban communities. Over the past few decades, the Hudson Valley like much of the nation has seen significant deindustrialization. Towns in decline have thus seen two types of revitalization, one from the influx of largely Latino immigrants, and the other through amenity development driven by luxury real estate investment targeting more affluent newcomers.',
    para2:'Another, often unmentioned, type of development has also played a significant role in transforming the Hudson Valley, that caused by the influx of Hasidic Communities into established suburban neighborhoods. Hasidic development in the Lower Hudson Valley represents a unique and separate development pattern that has led to significant inter-communal tensions ranging from zoning conflicts, to displacement, to the divestment from the local school district. The following content is an exploration into the story of Hasidic Development in Rockland County, its scale, and its impacts. The intention of the data is not to demonize any group, but rather to contextualize and shed light on a little-understood phenomenon riddled with controversy.',
    footer: 'Video source: <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    
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
                                layer: 'secular-schools',
                                opacity: 0
                                },    
                                {
                                layer: 'all-schools',
                                opacity: 0
                                },  
                                {
                                layer: 'jewish-schools',
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
                                    layer: 'New Square_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Spring Valley',
                                opacity: 0
                                },
                                    {
                                    layer: 'Spring Valley_Label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Pomona 1967',
                                opacity: 0
                                },
                                    {
                                    layer: 'Pomona_label',
                                    opacity: 0
                                    },                              
                                {
                                layer: 'Wesley Hills 83',
                                opacity: 0
                                },
                                    {
                                    layer: 'Wesley Hills_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'New Hempstead 84',
                                opacity: 0
                                },
                                    {
                                    layer: 'New Hempstead_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Chestnut Ridge 86',
                                opacity: 0
                                },
                                    {
                                    layer: 'Chestnut Ridge_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Airmont 91',
                                opacity: 0
                                },
                                    {
                                    layer: 'Airmont_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Montebello 86',
                                opacity: 0
                                },
                                    {
                                    layer: 'Montebello_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'kaser 91',
                                opacity: 0
                                },
                                    {
                                    layer: 'kaser_label',
                                    opacity: 0
                                    }                                                   
                ],
                onChapterExit: 
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
                                layer: 'secular-schools',
                                opacity: 0
                                },    
                                {
                                layer: 'all-schools',
                                opacity: 0
                                },  
                                {
                                layer: 'jewish-schools',
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
                                    layer: 'New Square_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Pomona 1967',
                                opacity: 0
                                },
                                    {
                                    layer: 'Pomona_label',
                                    opacity: 0
                                    },                              
                                {
                                layer: 'Wesley Hills 83',
                                opacity: 0
                                },
                                    {
                                    layer: 'Wesley Hills_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'New Hempstead 84',
                                opacity: 0
                                },
                                    {
                                    layer: 'New Hempstead_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Chestnut Ridge 86',
                                opacity: 0
                                },
                                    {
                                    layer: 'Chestnut Ridge_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Airmont 91',
                                opacity: 0
                                },
                                    {
                                    layer: 'Airmont_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Montebello 86',
                                opacity: 0
                                },
                                    {
                                    layer: 'Montebello_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'kaser 91',
                                opacity: 0
                                },
                                    {
                                    layer: 'kaser_label',
                                    opacity: 0
                                    }               
                ]
        },
        {
	    id: 'interlude',
	    alignment: 'center',
	    hidden: false,
	    description: '«There are two reasons villages get formed in Rockland, One is to keep the Hasidim out and the other is to keep the Hasidim in.» -Paul Alder, Rockland County Council on Jewish Relations ',
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
            description:'Around the 1960s, with white flight in full swing, droves of white newcomers flocked to Rockland County from the City to move into new suburban developments. While most of the newcomers were middle-class U.S. born people, a Jewish community from the Skver Hasidic dynasty, many Holocaust survivors, moved to Rockland county from Brooklyn after purchasing a 160-acre dairy farm. The Skverer Hasidim were some of the first of many groups of Hasidim to leave New York City due to fears of assimilation. The group formed New Square Specifically so that they could permit denser housing to be built.',
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
                    layer: 'rockland-towns-villages-0ka1by',
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
                                layer: 'secular-schools',
                                opacity: 0
                                },    
                                {
                                layer: 'all-schools',
                                opacity: 0
                                },  
                                {
                                layer: 'jewish-schools',
                                opacity: 0
                                },             
                            {
                            layer: '1960-race-637khu',
                            opacity: 1
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
                                opacity: 1
                                },
                                    {
                                    layer: 'New Square_label',
                                    opacity: 1
                                    },
                                {
                                layer: 'Pomona 1967',
                                opacity: 1
                                },
                                    {
                                    layer: 'Pomona_label',
                                    opacity: 1
                                    },                              
                                {
                                layer: 'Wesley Hills 83',
                                opacity: 0
                                },
                                    {
                                    layer: 'Wesley Hills_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'New Hempstead 84',
                                opacity: 0
                                },
                                    {
                                    layer: 'New Hempstead_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Chestnut Ridge 86',
                                opacity: 0
                                },
                                    {
                                    layer: 'Chestnut Ridge_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Airmont 91',
                                opacity: 0
                                },
                                    {
                                    layer: 'Airmont_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Montebello 86',
                                opacity: 0
                                },
                                    {
                                    layer: 'Montebello_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'kaser 91',
                                opacity: 0
                                },
                                    {
                                    layer: 'kaser_label',
                                    opacity: 0
                                    }                                                                                                                                    
            ],
            onChapterExit: [
                                {
                    layer: 'rockland-towns-villages-0ka1by',
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
                                layer: 'secular-schools',
                                opacity: 0
                                },    
                                {
                                layer: 'all-schools',
                                opacity: 0
                                },  
                                {
                                layer: 'jewish-schools',
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
                                // {
                                // layer: 'New Square 61',
                                // opacity: 1
                                // },
                                //     {
                                //     layer: 'New Square_label',
                                //     opacity: 1
                                //     },
                                {
                                layer: 'Spring Valley',
                                opacity: 0
                                },
                                    {
                                    layer: 'Spring Valley_Label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Pomona 1967',
                                opacity: 0
                                },
                                    {
                                    layer: 'Pomona_label',
                                    opacity: 0
                                    },                              
                                {
                                layer: 'Wesley Hills 83',
                                opacity: 0
                                },
                                    {
                                    layer: 'Wesley Hills_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'New Hempstead 84',
                                opacity: 0
                                },
                                    {
                                    layer: 'New Hempstead_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Chestnut Ridge 86',
                                opacity: 0
                                },
                                    {
                                    layer: 'Chestnut Ridge_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Airmont 91',
                                opacity: 0
                                },
                                    {
                                    layer: 'Airmont_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Montebello 86',
                                opacity: 0
                                },
                                    {
                                    layer: 'Montebello_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'kaser 91',
                                opacity: 0
                                },
                                    {
                                    layer: 'kaser_label',
                                    opacity: 0
                                    } 
            ]
        },
        {
            id: 'chapter70s',
            alignment: 'right',
            hidden: false,
            title: '1970s',
            image: 'images/Skver.png',
            description: 'The years following, Hasidic communities continued to grow in Rockland and neighboring Orange counties as more Hasidim moved into the region. Different Hasidic groups often settled in different areas, with the Vizhnitz Dynasty beggining to settle in the neighborhood of Monsey. Even in their early development these early municipalities were some of the poorest in the state, yet residents often did not experience the same conditions of other low-income areas.',
            location: {
                center: [-73.95988, 41.16000],
				zoom: 10.30,
				pitch: 0.00,
				bearing: 0.00
            },
            callback: '',
            onChapterEnter: [                
                    {
                    layer: 'rockland-towns-villages-0ka1by',
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
                                layer: 'secular-schools',
                                opacity: 0
                                },    
                                {
                                layer: 'all-schools',
                                opacity: 0
                                },  
                                {
                                layer: 'jewish-schools',
                                opacity: 0
                                },             
                            {
                            layer: '1960-race-637khu',
                            opacity: 0
                            },
                            {
                            layer: '1970-race-dm6sg6',
                            opacity: 1
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
                                // {
                                // layer: 'New Square 61',
                                // opacity: 1
                                // },
                                //     {
                                //     layer: 'New Square_label',
                                //     opacity: 1
                                //     },
                                {
                                layer: 'Pomona 1967',
                                opacity: 0
                                },
                                    {
                                    layer: 'Pomona_label',
                                    opacity: 0
                                    },                              
                                {
                                layer: 'Wesley Hills 83',
                                opacity: 0
                                },
                                    {
                                    layer: 'Wesley Hills_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'New Hempstead 84',
                                opacity: 0
                                },
                                    {
                                    layer: 'New Hempstead_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Chestnut Ridge 86',
                                opacity: 0
                                },
                                    {
                                    layer: 'Chestnut Ridge_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Airmont 91',
                                opacity: 0
                                },
                                    {
                                    layer: 'Airmont_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Montebello 86',
                                opacity: 0
                                },
                                    {
                                    layer: 'Montebello_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'kaser 91',
                                opacity: 0
                                },
                                    {
                                    layer: 'kaser_label',
                                    opacity: 0
                                    } 
                ],
            onChapterExit: [                
                    {
                    layer: 'rockland-towns-villages-0ka1by',
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
                                layer: 'secular-schools',
                                opacity: 0
                                },    
                                {
                                layer: 'all-schools',
                                opacity: 0
                                },  
                                {
                                layer: 'jewish-schools',
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
                                    layer: 'New Square_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Pomona 1967',
                                opacity: 0
                                },
                                    {
                                    layer: 'Pomona_label',
                                    opacity: 0
                                    },                              
                                {
                                layer: 'Wesley Hills 83',
                                opacity: 0
                                },
                                    {
                                    layer: 'Wesley Hills_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'New Hempstead 84',
                                opacity: 0
                                },
                                    {
                                    layer: 'New Hempstead_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Chestnut Ridge 86',
                                opacity: 0
                                },
                                    {
                                    layer: 'Chestnut Ridge_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Airmont 91',
                                opacity: 0
                                },
                                    {
                                    layer: 'Airmont_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Montebello 86',
                                opacity: 0
                                },
                                    {
                                    layer: 'Montebello_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'kaser 91',
                                opacity: 0
                                },
                                    {
                                    layer: 'kaser_label',
                                    opacity: 0
                                    } 
                ]
        },
        {
            id: 'chapter80s',
            alignment: 'right',
            hidden: false,
            title: '1980s',
            // image: 'images/',
            description: 'As time passed and Rockland continued to develop, sizeable Haitian and Dominican communities seeking a suburban lifestyle began to form in the Village of Spring Valley, New York (est. 1844), At the same time as small pockets of diversity developed, Hasidic enclaves grew rapidly, spawning their non-Jewish and more secular Jewish neighbors to carve out their own villages where they would have control over zoning. Nonetheless, Hasidic communities grew outside of New Square in both Spring Valley and its adjacent Monsey neighborhood, prompting zoning backlash that was just a precursor for what was to come.',
            location: {
                center: [-73.95988, 41.16000],
				zoom: 10.30,
				pitch: 0.00,
				bearing: 0.00
            },
            callback: '',
            onChapterEnter: [
                                {
                    layer: 'rockland-towns-villages-0ka1by',
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
                                layer: 'secular-schools',
                                opacity: 0
                                },    
                                {
                                layer: 'all-schools',
                                opacity: 0
                                },  
                                {
                                layer: 'jewish-schools',
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
                            opacity: 1
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
                                // {
                                // layer: 'New Square 61',
                                // opacity: 0
                                // },
                                //     {
                                //     layer: 'New Square_label',
                                //     opacity: 0
                                //     },
                                {
                                layer: 'Pomona 1967',
                                opacity: 0
                                },
                                    {
                                    layer: 'Pomona_label',
                                    opacity: 0
                                    },                              
                                {
                                layer: 'Wesley Hills 83',
                                opacity: 1
                                },
                                    {
                                    layer: 'Wesley Hills_label',
                                    opacity: 1
                                    },
                                {
                                layer: 'New Hempstead 84',
                                opacity: 1
                                },
                                    {
                                    layer: 'New Hempstead_label',
                                    opacity: 1
                                    },
                                {
                                layer: 'Chestnut Ridge 86',
                                opacity: 1
                                },
                                    {
                                    layer: 'Chestnut Ridge_label',
                                    opacity: 1
                                    },
                                {
                                layer: 'Airmont 91',
                                opacity: 0
                                },
                                    {
                                    layer: 'Airmont_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Montebello 86',
                                opacity: 1
                                },
                                    {
                                    layer: 'Montebello_label',
                                    opacity: 1
                                    },
                                {
                                layer: 'kaser 91',
                                opacity: 0
                                },
                                    {
                                    layer: 'kaser_label',
                                    opacity: 0
                                    } 
                    ],
            onChapterExit: [                    
                    {
                    layer: 'rockland-towns-villages-0ka1by',
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
                                layer: 'secular-schools',
                                opacity: 0
                                },    
                                {
                                layer: 'all-schools',
                                opacity: 0
                                },  
                                {
                                layer: 'jewish-schools',
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
                                    layer: 'New Square_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Pomona 1967',
                                opacity: 0
                                },
                                    {
                                    layer: 'Pomona_label',
                                    opacity: 0
                                    },                              
                                {
                                layer: 'Wesley Hills 83',
                                opacity: 0
                                },
                                    {
                                    layer: 'Wesley Hills_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'New Hempstead 84',
                                opacity: 0
                                },
                                    {
                                    layer: 'New Hempstead_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Chestnut Ridge 86',
                                opacity: 0
                                },
                                    {
                                    layer: 'Chestnut Ridge_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Airmont 91',
                                opacity: 0
                                },
                                    {
                                    layer: 'Airmont_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Montebello 86',
                                opacity: 0
                                },
                                    {
                                    layer: 'Montebello_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'kaser 91',
                                opacity: 0
                                },
                                    {
                                    layer: 'kaser_label',
                                    opacity: 0
                                    } 
                                ]
        },
        {
            id: 'chapter90s',
            alignment: 'right',
            hidden: false,
            title: '1990s',
            // image: 'images/source.png',
            description: 'Kaser, encompassing only a handful of blocks, is the most recent Hasidic village to form. A different Hasidic dynasty, the Vizhnitzer dynasty, founded Kaser for the same reason as New Square was founded, to build denser housing, although in a very different context. Kaser was built within the context of Monsey, which has an already developed suburban fabric. The last of the non-Hasidic villages to be founded was Airmont, founded to have "strong zoning" that would keep the "character of the neighborhood" and be unconducive to the Hasidic lifestyle.',
            location: {
                center: [-73.95988, 41.16000],
				zoom: 10.30,
				pitch: 0.00,
				bearing: 0.00
            },
            callback: '',
            onChapterEnter: [                
                    {
                    layer: 'rockland-towns-villages-0ka1by',
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
                                layer: 'secular-schools',
                                opacity: 0
                                },    
                                {
                                layer: 'all-schools',
                                opacity: 0
                                },  
                                {
                                layer: 'jewish-schools',
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
                            opacity: 1
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
                                    layer: 'New Square_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Pomona 1967',
                                opacity: 0
                                },
                                    {
                                    layer: 'Pomona_label',
                                    opacity: 0
                                    },                              
                                {
                                layer: 'Wesley Hills 83',
                                opacity: 0
                                },
                                    {
                                    layer: 'Wesley Hills_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'New Hempstead 84',
                                opacity: 0
                                },
                                    {
                                    layer: 'New Hempstead_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Chestnut Ridge 86',
                                opacity: 0
                                },
                                    {
                                    layer: 'Chestnut Ridge_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Airmont 91',
                                opacity: 1
                                },
                                    {
                                    layer: 'Airmont_label',
                                    opacity: 1
                                    },
                                {
                                layer: 'Montebello 86',
                                opacity: 0
                                },
                                    {
                                    layer: 'Montebello_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'kaser 91',
                                opacity: 1
                                },
                                    {
                                    layer: 'kaser_label',
                                    opacity: 1
                                    } 
                ],
            onChapterExit: [            	
                    {
                    layer: 'rockland-towns-villages-0ka1by',
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
                                layer: 'secular-schools',
                                opacity: 0
                                },    
                                {
                                layer: 'all-schools',
                                opacity: 0
                                },  
                                {
                                layer: 'jewish-schools',
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
                                    layer: 'New Square_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Pomona 1967',
                                opacity: 0
                                },
                                    {
                                    layer: 'Pomona_label',
                                    opacity: 0
                                    },                              
                                {
                                layer: 'Wesley Hills 83',
                                opacity: 0
                                },
                                    {
                                    layer: 'Wesley Hills_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'New Hempstead 84',
                                opacity: 0
                                },
                                    {
                                    layer: 'New Hempstead_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Chestnut Ridge 86',
                                opacity: 0
                                },
                                    {
                                    layer: 'Chestnut Ridge_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Airmont 91',
                                opacity: 0
                                },
                                    {
                                    layer: 'Airmont_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Montebello 86',
                                opacity: 0
                                },
                                    {
                                    layer: 'Montebello_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'kaser 91',
                                opacity: 0
                                },
                                    {
                                    layer: 'kaser_label',
                                    opacity: 0
                                    } 
                ]
        },
        
            {
            id: 'chapter00s',
            alignment: 'right',
            hidden: false,
            title: '2000s',
            // image: 'images/source.png',
            description: 'The 2000s onward mark a period of rapid suburban diversification across the United States. In this period, the almost exclusively white suburbs of Rockland begin to change with the influx of people of different races. Places like Spring Valley changed immensely, for example, with the influx of Hispanic and Latino people from Central America. Hasidic enclaves, however, did not see the same change in racial makeup as one would expect, remaining over 95% white in many areas.',
            location: {
                center: [-73.95988, 41.16000],
				zoom: 10.30,
				pitch: 0.00,
				bearing: 0.00
            },
            callback: '',
            onChapterEnter: [
                    {
                    layer: 'rockland-towns-villages-0ka1by',
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
                                layer: 'secular-schools',
                                opacity: 0
                                },    
                                {
                                layer: 'all-schools',
                                opacity: 0
                                },  
                                {
                                layer: 'jewish-schools',
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
                            opacity: 1
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
                                    layer: 'New Square_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Pomona 1967',
                                opacity: 0
                                },
                                    {
                                    layer: 'Pomona_label',
                                    opacity: 0
                                    },                              
                                {
                                layer: 'Wesley Hills 83',
                                opacity: 0
                                },
                                    {
                                    layer: 'Wesley Hills_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'New Hempstead 84',
                                opacity: 0
                                },
                                    {
                                    layer: 'New Hempstead_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Chestnut Ridge 86',
                                opacity: 0
                                },
                                    {
                                    layer: 'Chestnut Ridge_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Airmont 91',
                                opacity: 0
                                },
                                    {
                                    layer: 'Airmont_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Montebello 86',
                                opacity: 0
                                },
                                    {
                                    layer: 'Montebello_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'kaser 91',
                                opacity: 0
                                },
                                    {
                                    layer: 'kaser_label',
                                    opacity: 0
                                    } 
                ],
            onChapterExit: [            	
                    {
                    layer: 'rockland-towns-villages-0ka1by',
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
                                layer: 'secular-schools',
                                opacity: 0
                                },    
                                {
                                layer: 'all-schools',
                                opacity: 0
                                },  
                                {
                                layer: 'jewish-schools',
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
                                    layer: 'New Square_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Pomona 1967',
                                opacity: 0
                                },
                                    {
                                    layer: 'Pomona_label',
                                    opacity: 0
                                    },                              
                                {
                                layer: 'Wesley Hills 83',
                                opacity: 0
                                },
                                    {
                                    layer: 'Wesley Hills_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'New Hempstead 84',
                                opacity: 0
                                },
                                    {
                                    layer: 'New Hempstead_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Chestnut Ridge 86',
                                opacity: 0
                                },
                                    {
                                    layer: 'Chestnut Ridge_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Airmont 91',
                                opacity: 0
                                },
                                    {
                                    layer: 'Airmont_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Montebello 86',
                                opacity: 0
                                },
                                    {
                                    layer: 'Montebello_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'kaser 91',
                                opacity: 0
                                },
                                    {
                                    layer: 'kaser_label',
                                    opacity: 0
                                    }
                ]
        },
        {
        id: 'interlude',
        alignment: 'center',
        hidden: false,
        description: '«So when I started in East Ramapo [in the early 2000s], I would say like 50% of each classroom had Haitian children. Now, one or two, one or two. That is just how many of their Haitian families have just moved out of the district»',
        onChapterEnter: [                                                                                                                                 
                ],
            onChapterExit: [              
                ]
        },
        {
            id: 'chapter10s',
            alignment: 'right',
            hidden: false,
            title: '2010s',
            // image: 'images/source.png',
            description: "«You know, there's a, there's a strong feeling from the public school community that the Hasidic community is using all of the educational resources, saying that they have it all, and that's not true.» The 2010s saw what many viewed as a takeover of the school system in Rockland County by the Hasidim and other parties favorable to the privatization. As a result, austerity budgets became the norm and forced the East Ramapo School District to sell school buildings and take out loans, bringing it further into debt.",
            location: {
                center: [-73.95988, 41.16000],
				zoom: 10.30,
				pitch: 0.00,
				bearing: 0.00
				},
            callback: '',
            onChapterEnter: [
                    {
                    layer: 'rockland-towns-villages-0ka1by',
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
                                layer: 'secular-schools',
                                opacity: 0
                                },    
                                {
                                layer: 'all-schools',
                                opacity: 0
                                },  
                                {
                                layer: 'jewish-schools',
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
                            opacity: 1
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
                                    layer: 'New Square_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Pomona 1967',
                                opacity: 0
                                },
                                    {
                                    layer: 'Pomona_label',
                                    opacity: 0
                                    },                              
                                {
                                layer: 'Wesley Hills 83',
                                opacity: 0
                                },
                                    {
                                    layer: 'Wesley Hills_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'New Hempstead 84',
                                opacity: 0
                                },
                                    {
                                    layer: 'New Hempstead_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Chestnut Ridge 86',
                                opacity: 0
                                },
                                    {
                                    layer: 'Chestnut Ridge_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Airmont 91',
                                opacity: 0
                                },
                                    {
                                    layer: 'Airmont_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Montebello 86',
                                opacity: 0
                                },
                                    {
                                    layer: 'Montebello_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'kaser 91',
                                opacity: 0
                                },
                                    {
                                    layer: 'kaser_label',
                                    opacity: 0
                                    }                 
                                ],
            onChapterExit: [            	
                    {
                    layer: 'rockland-towns-villages-0ka1by',
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
                                layer: 'secular-schools',
                                opacity: 0
                                },    
                                {
                                layer: 'all-schools',
                                opacity: 0
                                },  
                                {
                                layer: 'jewish-schools',
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
                            opacity: 1
                            },              
                                {
                                layer: 'New Square 61',
                                opacity: 0
                                },
                                    {
                                    layer: 'New Square_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Pomona 1967',
                                opacity: 0
                                },
                                    {
                                    layer: 'Pomona_label',
                                    opacity: 0
                                    },                              
                                {
                                layer: 'Wesley Hills 83',
                                opacity: 0
                                },
                                    {
                                    layer: 'Wesley Hills_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'New Hempstead 84',
                                opacity: 0
                                },
                                    {
                                    layer: 'New Hempstead_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Chestnut Ridge 86',
                                opacity: 0
                                },
                                    {
                                    layer: 'Chestnut Ridge_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Airmont 91',
                                opacity: 0
                                },
                                    {
                                    layer: 'Airmont_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Montebello 86',
                                opacity: 0
                                },
                                    {
                                    layer: 'Montebello_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'kaser 91',
                                opacity: 0
                                },
                                    {
                                    layer: 'kaser_label',
                                    opacity: 0
                                    } 
                ]
        },
        {
        id: 'interlude',
        alignment: 'center',
        hidden: false,
        description: "«Spring Valley is right now probably about 80% Hispanic. But, when I moved up here, it was probably, definitely majority Black, but mostly people of Haitian descent. The Hispanics were really Dominican, but now it's more an immigrant population from El Salvador, Guatemala, and those Central American countries.»",
        onChapterEnter: [                                                                                                                                 
                ],
            onChapterExit: [              
                ]
        },

        {
            id: 'chapter20s',
            alignment: 'right',
            hidden: false,
            title: '2020s',
            // image: 'images/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-73.95988, 41.16000],
				zoom: 10.30,
				pitch: 0.00,
				bearing: 0.00
            },
            callback: '',
            onChapterEnter: [                
                    {
                    layer: 'rockland-towns-villages-0ka1by',
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
                                layer: 'secular-schools',
                                opacity: 0
                                },    
                                {
                                layer: 'all-schools',
                                opacity: 0
                                },  
                                {
                                layer: 'jewish-schools',
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
                            opacity: 1
                            },              
                                {
                                layer: 'New Square 61',
                                opacity: 0
                                },
                                    {
                                    layer: 'New Square_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Pomona 1967',
                                opacity: 0
                                },
                                    {
                                    layer: 'Pomona_label',
                                    opacity: 0
                                    },                              
                                {
                                layer: 'Wesley Hills 83',
                                opacity: 0
                                },
                                    {
                                    layer: 'Wesley Hills_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'New Hempstead 84',
                                opacity: 0
                                },
                                    {
                                    layer: 'New Hempstead_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Chestnut Ridge 86',
                                opacity: 0
                                },
                                    {
                                    layer: 'Chestnut Ridge_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Airmont 91',
                                opacity: 0
                                },
                                    {
                                    layer: 'Airmont_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Montebello 86',
                                opacity: 0
                                },
                                    {
                                    layer: 'Montebello_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'kaser 91',
                                opacity: 0
                                },
                                    {
                                    layer: 'kaser_label',
                                    opacity: 0
                                    } 
                ],
            onChapterExit: [            	
                    {
                    layer: 'rockland-towns-villages-0ka1by',
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
                                layer: 'secular-schools',
                                opacity: 0
                                },    
                                {
                                layer: 'all-schools',
                                opacity: 0
                                },  
                                {
                                layer: 'jewish-schools',
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
                                    layer: 'New Square_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Pomona 1967',
                                opacity: 0
                                },
                                    {
                                    layer: 'Pomona_label',
                                    opacity: 0
                                    },                              
                                {
                                layer: 'Wesley Hills 83',
                                opacity: 0
                                },
                                    {
                                    layer: 'Wesley Hills_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'New Hempstead 84',
                                opacity: 0
                                },
                                    {
                                    layer: 'New Hempstead_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Chestnut Ridge 86',
                                opacity: 0
                                },
                                    {
                                    layer: 'Chestnut Ridge_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Airmont 91',
                                opacity: 0
                                },
                                    {
                                    layer: 'Airmont_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'Montebello 86',
                                opacity: 0
                                },
                                    {
                                    layer: 'Montebello_label',
                                    opacity: 0
                                    },
                                {
                                layer: 'kaser 91',
                                opacity: 0
                                },
                                    {
                                    layer: 'kaser_label',
                                    opacity: 0
                                    } 
                ]
        },
        {
            id: 'Eastern_europe',
            alignment: 'left',
            hidden: false,
            image:'images/poland-and-lithuania-yiddish.png',
            title: 'Origins of Hasidism in Central and Eastern Europe',
            description: '',

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
        description: "Jennifer Wilmoth formerly lived in Crown Heights, Brooklyn, where, to her, it felt as though the Jewish and non-Jewish communities had more interation. «Crown Heights is also a community that's known for having Hasidics and ultra orthodox people, and I used to go to each other's stores and we would talk in the neighborhood. You know, that was something that I was used to in Brooklyn. Here, things are a little different.»"
        },
        {
        id: 'interlude',
        alignment: 'center',
        hidden: false,
        description: "Hasidic Rebbes, who lead Hasidic communities quickly realized that New York City was unfit for a pure religious life. They quickly looked to nearby rapidly suburbanizing rural areas for places to live an unbothered religious life. New Square being the first of these places in Rockland County. Hasidim quickly began to move north to Rockland and founded Yeshivas—religious schools children attend until they marry."
        },
        {
            id: 'All Schools',
            alignment: 'right',
            hidden: false,
            title: 'All Schools in Rockland',
            // description: 'Copy these sections to add to your story.',

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
                    layer: 'all-schools',
                    opacity: 1
                },
                {
                    layer: 'Pomona_label',
                    opacity: 0
                },
                ],
            onChapterExit: [
                {
                    layer: 'all-schools',
                    opacity: 0
                },
                ],
        },
        {
            id: 'Jewish Schools',
            alignment: 'right',
            hidden: false,
            title: 'Jewish Schools in Rockland',
            description: 'Jewish schools show to be highly concentrated in Ramapo, and may be the best indicator of where Hasidic enclaves are located.',

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
                    layer: 'jewish-schools',
                    opacity: 1
                },],
            onChapterExit: [
                {
                    layer: 'jewish-schools',
                    opacity: 0
                },],
        },
        {
            id: 'Secular Schools',
            alignment: 'right',
            hidden: false,
            title: 'Secular Schools in Rockland',
            // description: 'Copy these sections to add to your story.',

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
                    layer: 'secular-schools',
                    opacity: 1
                },],
            onChapterExit: [
                {
                    layer: 'secular-schools',
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
            // description: 'Copy these sections to add to your story.',

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
            // description: 'Copy these sections to add to your story.',

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
                },
                ],
            onChapterExit: [
            {
                    layer: '2017_county_exec',
                    opacity: 1
                },
            ]
        },
        {
        id: 'interlude',
        alignment: 'center',
        hidden: false,
        description: " I started in 1999-2000, it was an amazing board. I think at the time, people just looked at [the board as being] representative of who was in the district. The thing with that Board is that [they were] always in schools, right? So they, you know, they would come talk to kids. «How are you doing», «What are you learning?». Wherever the after school programs were, they were there as well. Over time, what happened is, the non-public community felt like the tax rate was too high with every budget vote. [They were] not really willing to pay, even though, as you as you heard, we, the transportation services are [in public power], the [special] education services are the public power. So what they decided to do is that they would vote-in constituents that they wanted.,.they would have members in it that were like a watchdog or [would] turn down this or vote or just guide the budget to where they wanted it to be, which at times was less than 2% increase. They wanted us to use our reserve funds all the time, they wanted to have like next to nothing of an increase, and everyone knows you can't maintain on that. You know, you have a boiler go bad in a school building, that's what your reserves are for. So, putting those constituents in and having a block vote made it very difficult for the community to get members like who I originally described."
        },


    ]
};

