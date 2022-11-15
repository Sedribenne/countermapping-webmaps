var config = {
    style:  'mapbox://styles/iamwfx/cjjx6bl926vgt2ss0l9dbpmxz',
    accessToken: 'pk.eyJ1Ijoic2VkcmliZW5uZSIsImEiOiJjbDlyNHNseDUwZDd4M3VxeHV6eGxzNHYwIn0.7l11nWXJKl6YqbifSZVLmQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Coastal Flooding in New York City',
    subtitle: 'Assessing Risks to Vulnerable Housing',
    byline: 'By Emile Bensedrine',
    para1:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo eros, ac eleifend nibh porta eget. Donec orci odio, varius nec urna sit amet, vehicula vulputate tellus. Fusce non iaculis felis. Integer ut neque id lectus ultrices suscipit. Vivamus quis condimentum ipsum. Ut at tempor velit. Maecenas commodo eu sem et interdum. Nam efficitur nisi sed enim interdum pharetra. Vestibulum turpis nisl, dignissim at dapibus at, laoreet at enim.',
    para2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo eros, ac eleifend nibh porta eget. Donec orci odio, varius nec urna sit amet, vehicula vulputate tellus. Fusce non iaculis felis. Integer ut neque id lectus ultrices suscipit. Vivamus quis condimentum ipsum. Ut at tempor velit. Maecenas commodo eu sem et interdum. Nam efficitur nisi sed enim interdum pharetra. Vestibulum turpis nisl, dignissim at dapibus at, laoreet at enim.',
    footer: 'Image source: https://www.theatlantic.com/photo/2012/11/hurricane-sandy-the-aftermath/100397/ Video source: Dr. Wenfei Xu <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Display Title',
            image: 'hedgehog-in-the-fog.3_f.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-122.418398, 37.759483],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Second Title',
            image: 'images/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
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
		    id: 'interlude',
		    alignment: 'center',
		    hidden: false,
		    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies tempor purus, eget tempus sem bibendum vel. Maecenas at justo non felis accumsan condimentum vitae et leo. Sed sodales nec risus maximus congue. Ut quis tincidunt leo. Pellentesque sapien nisl, congue tempus mauris in, pulvinar mattis turpis. Nullam sit amet justo egestas, laoreet mauris ut, pulvinar ipsum. Pellentesque vehicula imperdiet iaculis. Nam in tellus metus. Donec a est non orci efficitur ornare id mattis eros. Aliquam vel facilisis ligula. Nullam tincidunt, sapien vitae bibendum consequat, nibh eros eleifend ligula, et aliquam enim justo eget felis. Sed nec vehicula metus. Pellentesque rutrum dui quis egestas hendrerit. Nullam auctor et tortor sit amet congue.',
		    video: 'Images/902-1_902-2364-PD2_preview.mp4',
		    location: {
		      center: [-73.97615, 40.71901],
		      zoom: 14.84,
		      pitch: 48,
		      bearing: 142.44,
		    }
		},
        {
            id: 'third-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Third Title',
            description: 'Copy these sections to add to your story.',

            location: {
              center: [-73.97615, 40.71901],
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
