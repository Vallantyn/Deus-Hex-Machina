var Levels =
    [
        {
            name: "00",
            size: 4,
            tiles:
            {
                42:
                {
                    type: "Emitter",
                    emitterColor: "#FF0000",
                    direction: 5
                }//,
                //31:
                // {
                // type: "Objectif",
                // color: "#FFFFFF"
                // }
            },
            shelf:
            [
                {
                    type: "Block",
                    count: 99
                },
                {
                    type: "Empty",
                    count: 99
                },
                {
                    type: "Mirror",
                    count: 1
                }
            ]
        },
        {
            name: "01",
            size: 8,
            tiles:
            {

                25:
                    {
                        type: "Emitter",
                        color: "#FFFFFF",
                        orientation: 5
                    }//,
                // 34:
                // {
                // type: "Objectif",
                // color: "#FFFFFF"
                // },
                // 80:
                // {
                // type: "Objectif",
                // color: "#FFFFFF"
                // },
                // 124:
                // {
                // type: "Objectif",
                // color: "#FFFFFF"
                // }
            },
            shelf:
            [
                {
                    type: "Block",
                    count: 99
                },
                {
                    type: "Empty",
                    count: 99
                },
                {
                    type: "Mirror",
                    count: 3
                }
            ]
        },
		{
		    name: "02",
		    size: 8,
		    tiles:
            {

                41:
                    {
                        type: "Emitter",
                        color: "#FFFFFF",
                        orientation: 3
                    }//,
                // 47:
                // {
                // type: "Objectif",
                // color: "#FFFFFF"
                // },
                // 52:
                // {
                // type: "Objectif",
                // color: "#0000FF"
                // },
                // 124:
                // {
                // type: "Objectif",
                // color: "#FFFFFF"
                // },
                // 124:
                // {
                // type: "Objectif",
                // color: "#FFFFFF"
                // }
            },
		    shelf:
            [
                {
                    type: "Block",
                    count: 99
                },
                {
                    type: "Empty",
                    count: 99
                },
                {
                    type: "Mirror",
                    count: 4
                },
				{
				    type: "Filter",
				    count: 1,
				    color: "#0000FF"
				}
            ]
		},
		{
		    name: "03",
		    size: 8,
		    tiles:
            {
                37:
                {
                    type: "Emitter",
                    color: "#FFFFFF",
                    orientation: 3
                }//,

                // 13:
                // {
                // type: "Objectif",
                // color: "#FFFFFF"
                // },

                // 13:
                // {
                // type: "Objectif",
                // color: "#FFFFFF"
                // },

                // 84:
                // {
                // type: "Objectif",
                // color: "#FF00FF"
                // },

                // 41:
                // {
                // type: "Objectif",
                // color: "#FF0000"
                // },

                // 12:
                // {
                // type: "Objectif",
                // color: "#0000FF"
                // },

            },
		    shelf:
            [
                {
                    type: "Block",
                    count: 99
                },
                {
                    type: "Empty",
                    count: 99
                },
                {
                    type: "Mirror",
                    count: 3
                },
                {
                    type: "Filter",
                    count: 1,
                    color: "#FF00FF"
                },
				{
				    type: "Spliter",
				    count: 1
				}
            ]
		}
    ];