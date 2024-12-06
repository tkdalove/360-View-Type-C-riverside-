var APP_DATA = {
  "scenes": [
    {
      "id": "0-front-house",
      "name": "Front house",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.2645607755381487,
          "pitch": 0.02999747789798235,
          "rotation": 0,
          "target": "3-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bedroom-2",
      "name": "Bedroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6645157773429435,
          "pitch": 0.15303812762650182,
          "rotation": 0,
          "target": "5-outdoor"
        },
        {
          "yaw": -1.9773797081691011,
          "pitch": 0.5149656415365129,
          "rotation": 7.0685834705770345,
          "target": "3-living-room"
        },
        {
          "yaw": -1.9688214140558582,
          "pitch": 0.06348036502779664,
          "rotation": 4.71238898038469,
          "target": "4-master-bedroom"
        },
        {
          "yaw": -1.2417389483251462,
          "pitch": 0.202222538253519,
          "rotation": 0,
          "target": "7-bath-room-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kichen",
      "name": "kichen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.369316395338414,
          "pitch": 0.31293765638383775,
          "rotation": 0,
          "target": "5-outdoor"
        },
        {
          "yaw": -0.15371051675074554,
          "pitch": 0.1733687001452182,
          "rotation": 0,
          "target": "3-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-living-room",
      "name": "Living room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9514266482237614,
          "pitch": 0.21374278018848614,
          "rotation": 0,
          "target": "0-front-house"
        },
        {
          "yaw": 1.230200425065954,
          "pitch": 0.17240267729590997,
          "rotation": 4.71238898038469,
          "target": "8-bedroom-1"
        },
        {
          "yaw": 1.3640772572245545,
          "pitch": 0.11068382116661901,
          "rotation": 4.71238898038469,
          "target": "1-bedroom-2"
        },
        {
          "yaw": 1.3562369487572035,
          "pitch": 0.015915166064559116,
          "rotation": 5.497787143782138,
          "target": "4-master-bedroom"
        },
        {
          "yaw": -0.19095627931852022,
          "pitch": 0.0958688746222105,
          "rotation": 0,
          "target": "2-kichen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-master-bedroom",
      "name": "Master Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.0116067257980923,
          "pitch": 0.15683243632943444,
          "rotation": 11.780972450961727,
          "target": "9-master-bathroom"
        },
        {
          "yaw": 2.2893468438030338,
          "pitch": 0.13798022284559153,
          "rotation": 0.7853981633974483,
          "target": "3-living-room"
        },
        {
          "yaw": -1.6460154340964337,
          "pitch": 0.2399413154235681,
          "rotation": 0,
          "target": "5-outdoor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-outdoor",
      "name": "Outdoor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5565896132926547,
          "pitch": 0.0647866883597743,
          "rotation": 0,
          "target": "4-master-bedroom"
        },
        {
          "yaw": -0.1641465085893774,
          "pitch": 0.06382260228758341,
          "rotation": 0,
          "target": "1-bedroom-2"
        },
        {
          "yaw": 0.07709333756789327,
          "pitch": 0.057053811431856616,
          "rotation": 5.497787143782138,
          "target": "8-bedroom-1"
        },
        {
          "yaw": 0.34899472206250515,
          "pitch": 0.07263056637228615,
          "rotation": 0,
          "target": "2-kichen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bath-room-1_1",
      "name": "Bath room 1_1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.4098773519892145,
          "pitch": 0.6798355655359352,
          "rotation": 0,
          "target": "8-bedroom-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bath-room-2",
      "name": "Bath room 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.939353388938974,
          "pitch": 0.21601889663152818,
          "rotation": 0,
          "target": "1-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bedroom-1",
      "name": "Bedroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6482123468036765,
          "pitch": 0.2553680685438984,
          "rotation": 0,
          "target": "5-outdoor"
        },
        {
          "yaw": 1.2623412257410003,
          "pitch": 0.3099886756747967,
          "rotation": 0,
          "target": "6-bath-room-1_1"
        },
        {
          "yaw": 1.6605514614148458,
          "pitch": 0.2511381003877453,
          "rotation": 7.853981633974483,
          "target": "3-living-room"
        },
        {
          "yaw": 1.559262697940766,
          "pitch": 0.26183297938130323,
          "rotation": 4.71238898038469,
          "target": "1-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-master-bathroom",
      "name": "Master bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.5739556566110355,
          "pitch": 0.2222400368857631,
          "rotation": 0.7853981633974483,
          "target": "4-master-bedroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "The Riverside Type C",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
