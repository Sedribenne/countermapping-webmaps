var config = {
    style:  'mapbox://styles/sedribenne/clatxlbpt000m15mimnssxe9x',
    accessToken: 'pk.eyJ1Ijoic2VkcmliZW5uZSIsImEiOiJjbGFzeW5kOGwwNjEzM3dxazlucGNzdGhrIn0.x15FaKNAW1i0COlqNGaG1Q',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: true, //set true for enabling 3D maps.
    title: 'Hasidim on Hudson',
    subtitle: 'A Narrative of Hasidic development in Rockland County',
    byline: 'By Emile Bensedrine and Kellen Cooks',
    para1:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo eros, ac eleifend nibh porta eget. Donec orci odio, varius nec urna sit amet, vehicula vulputate tellus. Fusce non iaculis felis. Integer ut neque id lectus ultrices suscipit. Vivamus quis condimentum ipsum. Ut at tempor velit. Maecenas commodo eu sem et interdum. Nam efficitur nisi sed enim interdum pharetra. Vestibulum turpis nisl, dignissim at dapibus at, laoreet at enim.',
    para2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo eros, ac eleifend nibh porta eget. Donec orci odio, varius nec urna sit amet, vehicula vulputate tellus. Fusce non iaculis felis. Integer ut neque id lectus ultrices suscipit. Vivamus quis condimentum ipsum. Ut at tempor velit. Maecenas commodo eu sem et interdum. Nam efficitur nisi sed enim interdum pharetra. Vestibulum turpis nisl, dignissim at dapibus at, laoreet at enim.',
    footer: 'Image source: https://www.theatlantic.com/photo/2012/11/hurricane-sandy-the-aftermath/100397/ Video source: Dr. Wenfei Xu <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    




    chapters: [
        {
            id: 'chapter60s',
            alignment: 'left',
            hidden: false,
            title: '1960s',
            // image: 'hedgehog-in-the-fog.3_f.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-73.95988, 41.16896],
				zoom: 10.20,
				pitch: 0.00,
				bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: '1960-race-637khu',
                    opacity: 1
                }                                                                                                                  
            ],
            onChapterExit: [
                {
                    layer: '1960-race-637khu',
                    opacity: 0
                },
                {
                	layer: '1970-race-dm6sg6',
                    opacity: 1,
                },

            ]
        },
        {
            id: 'chapter70s',
            alignment: 'right',
            hidden: false,
            title: '1970s',
            image: 'images/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-73.95988, 41.16896],
				zoom: 10.20,
				pitch: 0.00,
				bearing: 0.00
            },
            callback: '',
            onChapterEnter: [],
            onChapterExit: [                
            	{
                    layer: '1970-race-dm6sg6',
                    opacity: 0
                },
                {
                	layer: '1980-race-09ndgz',
                    opacity: 1,
                },
                ]
        },
        {
            id: 'chapter80s',
            alignment: 'right',
            hidden: false,
            title: '1980s',
            image: 'images/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-73.95988, 41.16896],
				zoom: 10.20,
				pitch: 0.00,
				bearing: 0.00
            },
            callback: '',
            onChapterEnter: [],
            onChapterExit: [            	{
                    layer: '1980-race-09ndgz',
                    opacity: 0
                },
                {
                	layer: '1990-race-940279',
                    opacity: 1,
                },]
        },
        {
            id: 'chapter90s',
            alignment: 'right',
            hidden: false,
            title: '1990s',
            image: 'images/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-73.95988, 41.16896],
				zoom: 10.20,
				pitch: 0.00,
				bearing: 0.00
            },
            callback: '',
            onChapterEnter: [],
            onChapterExit: [            	{
                    layer: '1990-race-940279',
                    opacity: 0
                },
                {
                	layer: '2000-race-ar1826',
                    opacity: 1,
                },]
        },
            {
            id: 'chapter00s',
            alignment: 'right',
            hidden: false,
            title: '2000s',
            image: 'images/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-73.95988, 41.16896],
				zoom: 10.20,
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
                center: [-73.95988, 41.16896],
				zoom: 10.20,
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
                center: [-73.95988, 41.16896],
				zoom: 10.20,
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
  //       {
		//     id: 'interlude',
		//     alignment: 'center',
		//     hidden: false,
		//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies tempor purus, eget tempus sem bibendum vel. Maecenas at justo non felis accumsan condimentum vitae et leo. Sed sodales nec risus maximus congue. Ut quis tincidunt leo. Pellentesque sapien nisl, congue tempus mauris in, pulvinar mattis turpis. Nullam sit amet justo egestas, laoreet mauris ut, pulvinar ipsum. Pellentesque vehicula imperdiet iaculis. Nam in tellus metus. Donec a est non orci efficitur ornare id mattis eros. Aliquam vel facilisis ligula. Nullam tincidunt, sapien vitae bibendum consequat, nibh eros eleifend ligula, et aliquam enim justo eget felis. Sed nec vehicula metus. Pellentesque rutrum dui quis egestas hendrerit. Nullam auctor et tortor sit amet congue.',
		//     video: 'Images/902-1_902-2364-PD2_preview.mp4',
		//     location: {
  //               center: [-73.99420, 41.12572],
		// 		zoom: 10.20,
		// 		pitch: 0.00,
		// 		bearing: 0.00
		//     }
		// },
        {
            id: 'third-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Third Title',
            description: 'Copy these sections to add to your story.',

            location: {
              center: [-73.95988, 41.16896],
              zoom: 15.84,
              pitch: 56,
              bearing: 260.44,
              speed: .5, // make the flying slow
              curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'housing',
                    opacity: 0,
                    duration: 10
                }],
            onChapterExit: []
        }
    ]
};

