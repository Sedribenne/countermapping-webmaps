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
    para1:'The Hudson Valley, which stretches from the northern boundary of New York City to Albany, contains numerous diverse communities with equally diverse development trajectories. With its proximity to New York, it has long attracted tourists. Since its connection to the Erie Canal, the Hudson Valley became a hub of industry and manufacturing. Areas of the Lower Hudson Valley in particular have seen the development of affluent suburban communities. Over the past few decades, the Hudson Valley, like much of the nation, has seen significant deindustrialization. Towns in decline have thus seen two types of revitalization, one from the influx of largely Latino immigrants, and the other through amenity development driven by luxury real estate investment targeting more affluent newcomers.',
    para2:'Another, often unmentioned, type of development has also played a significant role in transforming the Hudson Valley, that caused by the influx of Hasidic Communities into established suburban neighborhoods. Hasidic development in the Lower Hudson Valley represents a unique and separate development pattern that has led to significant inter-communal tensions ranging from zoning conflicts, to displacement, to the divestment from the local school district. The following content is an exploration into the story of Hasidic Development in Rockland County, its scale, and its impacts. The intention of the data is not to demonize any group, but rather to contextualize and shed light on a little-understood phenomenon riddled with controversy.',
    footer: 'Video source: <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    
    chapters: [    
            
        {                        
            id: 'interlude',
            alignment: 'center',
            title: '',
            location: {
            center: [-73.95988, 41.16000],
            zoom: 7.5,
            pitch: 0.00,
            bearing: 0.00
            },
            audio: 'Audio Files/Jennifer_intro.mp3',
            audioOn:'yes',
            description:"Jennifer Wilmoth, Principal at Kakiat Elementary STEAM School.",

            audio2:'Audio Files/Ashley_introreal.mp3',
            audioOn2:'yes',
            description2:"Ashley Leveille, Member of East Ramapo School District Board",

            audio3:'Audio Files/Nathan_intro.mp3',
            audioOn3:'yes',
            description3: "Nathan Powell, Resident of Rockland County native to Spring Valley",

            description4: 'The above people are all longtime residents of Rockland County familiar with the school system and were all interviewed as a part of this project.',
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            speed: 1, 
             onChapterEnter: [],
        }, 
        {            
            id: 'intro',
            alignment: 'center',
            title: '',
            description:"«My dad graduated from Ramapo in 1978. He's been here since he was in like four or five. My mom moved here, probably closer to the 90s, when my sisters were born. But yeah, so all the people in my household went through East Ramapo at some point. My niece is actually at Hempstead [Elementary School] now she's a fifth grader. So like the whole family has been through that system, almost entirely.»",
            description2:" Nathan Powell, a graduate urbanism student at Concordia University, spent his entire childhood in East Ramapo Schools. So did his sister, Ashley Leveille, who is now a member of the district’s school board.  Throughout his upbringing in East Ramapo Schools, Nathan noticed his educational environment changing around him.",
            description3: "«I started out in East Ramapo in kindergarten, and then I went to Hempstead. Hempstead at that point was a K-3 school. And then for grades four to six, you have to go to Colton. And by the time I got to third grade, Colton was sold to the Hasidim. So they made Hempstead from K-3 to K-6, which was like a big change. We used to have like maybe four to five classes per grade that turned into basically two main classes each grade [due to] space concerns.»",
            description4:"«As a result of Colton’s closing, a lot of people got sent to either Lime Kiln or at that time, Hillcrest, which got closed and sold to the Hasidim and replaced by Kakiat Elementary School.»", 
            description5:"«What they used to do is send the freshmen to a separate building called the Freshman Center to get them used to high school before they went to Ramapo High School and then Ramapo was 10-12, which allowed them to have more space to do more things. That freshman center program also was stopped because they had to reconfigure the school district after they sold another school to the Hasidim. So then the Freshman Center became Kakiat which is now the Kakiat STEAM Academy, which deals with the overflow from what used to be Hempstead and Colton. And then [now] Ramapo is just a high school from 9th grade to 12th grade.»",
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
             onChapterEnter: [],
         },          
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
            audio: 'off',
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
                                    },   
                                ],
                                },    
        {                                            
	    id: 'interlude2',
	    alignment: 'center',
	    hidden: false,
	    description: '«There are two reasons villages get formed in Rockland, One is to keep the Hasidim out and the other is to keep the Hasidim in.» -Paul Alder, Rockland County Council on Jewish Relations ',
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

 
        },
        {
            id: 'chapter60s',
            alignment: 'right',
            hidden: false,
            title: '1960s',
            description:'Around the 1960s, with white flight in full swing, droves of white newcomers flocked to Rockland County from the City to move into new suburban developments. While most of the newcomers were middle-class U.S. born people, a Jewish community from the Skver Hasidic dynasty, many Holocaust survivors, moved to Rockland county from Brooklyn after purchasing a 160-acre dairy farm. The Skverer Hasidim were some of the first of many groups of Hasidim to leave New York City due to fears of assimilation. The group formed New Square Specifically so that they could permit denser housing to be built.',
            description2: 'Dark green areas have a higher percentage white population. Blue areas have a higher population nonwhite.',
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
            
        },
        {
            id: 'chapter70s',
            alignment: 'right',
            hidden: false,
            title: '1970s',
            image: 'images/Skver.png',
            description: 'The years following, Hasidic communities grew in Rockland and neighboring Orange counties as more Hasidim moved into the region. Different Hasidic groups often settled in different areas, with the Vizhnitz Dynasty beginning to settle in the neighborhood of Monsey. Even in their early development these early municipalities were some of the poorest in the state, yet residents often did not experience the same conditions  other low-income areas.',
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
            
        },
        
            {
            id: 'chapter00s',
            alignment: 'right',
            hidden: false,
            title: '2000s',
            // image: 'images/source.png',
            description: "The 2000s onward mark a period of rapid suburban diversification across the United States. In this period, Rockland's almost exclusively white suburbs began to change with the influx of people of different races. Places like Spring Valley changed immensely, for example, with the influx of Hispanic and Latino people from Central America. Hasidic enclaves, however, did not see the same change in racial makeup as one would expect, remaining over 95% white in many areas.",
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
        
        },
        {
        id: 'interlude3',
        alignment: 'center',
        hidden: false,
        description: '«So when I started in East Ramapo [in the early 2000s], I would say like 50% of each classroom had Haitian children. Now, one or two, one or two. That is just how many of their Haitian families have just moved out of the district»',
        location: {
        center: [-73.95988, 41.16000],
        zoom: 10.30,
        pitch: 0.00,
        bearing: 0.00
        },
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
            description: "«You know, there's a, there's a strong feeling from the public school community that the Hasidic community is using all of the educational resources, saying that they have it all, and that's not true.» The 2010s saw what many viewed as a takeover of the school system in Rockland County by the Hasidim and other parties favorable to the privatization. As a result, austerity budgets became the norm and forced the East Ramapo School District to sell school buildings and take out loans, bringing it further into debt.»",
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
           
        },
        {
        id: 'interlude4',
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
            description: 'Rockland in the present day is far more racially diverse than ever in its history. Areas of Hasidic development are some of the only areas that appear as over 90% white. The Hasidic enclaves of Rockland remain areas of high exclusivity very different than other exclusive White suburbia.',
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
           
        },
        {
            id: 'interlude4',
            alignment: 'center',
            hidden: false,
            image:'images/poland-and-lithuania-yiddish.png',
            title: 'Origins of Hasidism in Central and Eastern Europe',
            description: 'Hasidism dates to the 17th century and follows a distinct, conservative doctrine that is a subset of Orthodox Judaism. Hasidism spread over the centuries throughout Europe and organized itself through different dynasties headed by a rebbe, or a sage who serves as the de facto advisor, spokesperson, and religious leader for the community. ',

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
        id: 'interlude5',
        alignment: 'center',
        hidden: false,
        description: "Jennifer Wilmoth formerly lived in Crown Heights, Brooklyn, where, to her, it felt as though the Jewish and non-Jewish communities had more interation.",
        audioOn: 'yes',
        audio: 'Audio Files/Jen_mid.mp3',
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
        },
        {
        id: 'interlude6',
        alignment: 'center',
        hidden: false,
        description: "Hasidic Rebbes, who lead Hasidic communities quickly realized that New York City was unfit for a pure religious life. They quickly looked to nearby rapidly suburbanizing rural areas for places to live an unbothered religious life. New Square being the first of these places in Rockland County. Hasidim quickly began to move north to Rockland and founded Yeshivas—religious schools children attend until they marry.",
        },
        {
            id: 'All Schools',
            alignment: 'right',
            hidden: false,
            title: 'All Schools in Rockland',
            description: 'Darker shades show areas of higher concentration.',

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
                    layer: 'jewish-schools',
                    opacity: 0
                },
                {
                    layer: 'secular-schools',
                    opacity: 0
                },
                {
                    layer: '2013_county_exec',
                    opacity: 0
                },
                {
                    layer: '2017_county_exec',
                    opacity: 0
                },
                                {
                    layer: 'rockland-towns-villages-0ka1by',
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

                ],
        },
        {
            id: 'Jewish Schools',
            alignment: 'right',
            hidden: false,
            title: 'Jewish Schools in Rockland',
            description: 'Jewish schools show to be highly concentrated in Ramapo, and may be the best indicator of where Hasidic enclaves are located.',
            description2: 'Darker shades show areas of higher concentration.',

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
                    opacity: 0
                },
                {
                    layer: 'jewish-schools',
                    opacity: 1
                },
                {
                    layer: 'secular-schools',
                    opacity: 0
                },
                {
                    layer: '2013_county_exec',
                    opacity: 0
                },
                {
                    layer: '2017_county_exec',
                    opacity: 0
                },
                                {
                    layer: 'rockland-towns-villages-0ka1by',
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

                ],
        },
        {
            id: 'Non-Jewish Schools',
            alignment: 'right',
            hidden: false,
            title: 'Non-Jewish Schools in Rockland',
            description: 'There is a high concentration of secular schools in Haverstraw and Clarkstown. However, when you compare this map to the map of all schools in Rockland County, the school density of these tracts pales in comparison to Hasidic enclaves within and near the Town of Ramapo. Furthermore, we note the blank census tracts in the Town of Ramapo where there are no secular schools at all, where Jewish schools and yeshivas are the only schools in the neighborhood.',
            description2: 'Darker shades show areas of higher concentration.',

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
                    opacity: 0
                },
                {
                    layer: 'jewish-schools',
                    opacity: 0
                },
                {
                    layer: 'secular-schools',
                    opacity: 1
                },
                                {
                    layer: '2013_county_exec',
                    opacity: 0
                },
                {
                    layer: '2017_county_exec',
                    opacity: 0
                },
                {
                    layer: 'rockland-towns-villages-0ka1by',
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

                ],
        },
        {
        id: 'interlude7',
        alignment: 'center',
        hidden: false,
        description: "« It's like there's no way that many Yeshivas are within the East Ramapo School District. East Ramapo is big, but you could drive through all the boundaries that fit into East Ramapo easily, so it's beyond me how all these Yeshivas are located in the district.» - Ashley Leveille",
        },
        {
            id: 'Election_2013',
            alignment: 'right',
            hidden: false,
            title: 'County Executive Race of 2013',
            description: 'In 2013, Republican Ed Day won the Rockland County Executive seat with 52% of the vote, edging out Democrat David Fried. This visualization represents the conservative share of each election district’s votes (Republican Ed Day + Conservative Party candidate Thomas Sullivan), with high concentrations of conservative votes in red, and low concentrations (and thus votes for the Democratic candidate) in blue.',

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
                    opacity: 0
                },
                {
                    layer: 'jewish-schools',
                    opacity: 0
                },
                {
                    layer: 'secular-schools',
                    opacity: 0
                },
                {
                    layer: '2013_county_exec',
                    opacity: 1
                },
                {
                    layer: '2017_county_exec',
                    opacity: 0
                },
                ],

        },
        
        {
            id: 'Election_2017',
            alignment: 'right',
            hidden: false,
            title: 'County Executive Race of 2017',
            description: 'In 2017, Day won again with 54% of the vote, slightly more than his first election. This visualization represents the conservative share of each election district’s votes (Republican Ed Day + Conservative Party candidate Thomas Sullivan), with high concentrations of conservative votes in red, and low concentrations (and thus votes for liberal candidates) in blue. While the vote distribution is largely similar, Day intensified his hold over Republican strongholds such as Pearl River in the southern section of the county.',
            location: {
                center: [-73.95988, 41.16000],
                zoom: 10.3,
                pitch: 0.00,
                bearing: 0.00,
              speed: 1, 
              curve: 1, 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'all-schools',
                    opacity: 0
                },
                {
                    layer: 'jewish-schools',
                    opacity: 0
                },
                {
                    layer: 'secular-schools',
                    opacity: 0
                },
                {
                    layer: '2013_county_exec',
                    opacity: 0
                },
                {
                    layer: '2017_county_exec',
                    opacity: 1
                },
                ],
        },       
        {
        id: 'interlude',
        alignment: 'left',
        hidden: false,
        description: "«I started in 1999 to 2000, it was an amazing board. I think at the time, people just looked at [the board as being] representative of who was in the district. The thing with that Board is that [they were] always in schools, right? So they, you know, they would come talk to kids. «How are you doing», «What are you learning?». Wherever the after school programs were, they were there as well. Over time, what happened is, the non-public community felt like the tax rate was too high with every budget vote. [They were] not really willing to pay, even though, as you as you heard, we, the transportation services are [in public power], the [special] education services are the public power. So what they decided to do is that they would vote-in constituents that they wanted.,.they would have members in it that were like a watchdog or [would] turn down this or vote or just guide the budget to where they wanted it to be, which at times was less than 2% increase. They wanted us to use our reserve funds all the time, they wanted to have like next to nothing of an increase, and everyone knows you can't maintain on that. You know, you have a boiler go bad in a school building, that's what your reserves are for. So, putting those constituents in and having a block vote made it very difficult for the community to get members like who I originally described.» -Jennifer Wilmoth",
        },
        {
        id: 'interlude',
        alignment: 'left',
        hidden: false,
        description: "«Leveille provides her own anecdote describing the influence of the Hasidic block vote in local school board politics.»",
        audioOn: 'yes',
        audio: "Audio Files/Loc_pwr_hsdic.mp3",
        description2: "«Even after a NAACP-led court decision pushed the school district to reform its voting system, Leveille still doubts the ability for the new voting system to address the district’s inequities.»",
        description3: "«Everybody had the chance to vote for me when I first ran. Now only if you live in Ward 2 could you vote for me now. What's happening is the demographics within the neighborhood are changing. It's literally like honestly a lose-lose. I think the NAACP thought that this was going to be a great idea, but I don't think that they thought for long term because like our neighborhood already is changing. What's happening is that in the three minority wards, the demographics are changing like crazy. So I don't know what would happen when my term’s up, if I would have a chance to get my seat again. Because everything is literally changing.» - Ashley Leveille",
        },
        {
            id: 'Future_chapter',
            alignment: 'center',
            hidden: false,
            title: 'Into the Future',
            description: "«If the block voting, the Hasidic vote, and the inability of our immigrants to vote continues where we cannot pass a school budget of 2% increase and we're on austerity every year, I think there's a strong possibility that East Ramapo will not exist in 10 years.»",
            description2: "«We cannot sustain a budget like that. We are 30 million in debt right now, I think might be bigger. It might be more than that. So, if the district cannot be sustained, I suspect it will be dismantled, [and] there is a possibility will be divided into fourths, right? Suffern may have to take a quarter of it and Pearl River might have to take a quarter of it and North Rockland might have to take a quarter of it and Clarkstown might have to take a quarter of it…»",
            description3: "«Our kids are already misunderstood. I don't know if they're gonna be welcomed in some of those districts that I called out, right. That would not be a good day.» - Jennifer Wilmoth",
            location: {
            center: [-73.95988, 41.16000],
            zoom: 7.5,
            pitch: 0.00,
            bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            audio: 'off',
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
                                    },   
                                ],
                                }, 
        {
        id: 'interlude',
        alignment: 'center',
        hidden: false,
        // description: "«»",
        description: "Ultimately, Leveille, Wilmoth, and Powell all cast doubt on the future of the East Ramapo School District. They also question their own futures in Ramapo, either with plans to move away or cease participation in the public schools.",
        audioOn: 'yes',
        audio: "Audio Files/Ashley outtro.mp3",
        audioOn2: 'yes',
        audio2: "Audio Files/Jennifer Wilmoth-outtro.mp3",
        audioOn3: 'yes',
        audio3: "Audio Files/Nathan_outtro.mp3",
        },   
    ]
};

