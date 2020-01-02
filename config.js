var config = {
  style: "mapbox://styles/shahadan/ck4wf02hx0k381cqlberttk3l",
  accessToken:
    "pk.eyJ1Ijoic2hhaGFkYW4iLCJhIjoiY2s0MHlheHEyMDJ5eDNtcGsxMnFqMjVlNSJ9.AmWFbv3mw6Bo7aiJRBvVKQ",
  showMarkers: true,
  theme: "dark",
  alignment: "left",
  title: "Pusat Kesihatan Awam & Swasta Di Sekitar Pulau Pinang",
  subtitle: "Jabatan Kesihatan Negeri Pulau Pinang ditubuhkan  bagi pengurusan",
  byline: "By a Shahadan Shaari",
  footer: "Source: DIY, etc.",
  chapters: [
    {
      id: "chap-1",
      title: "Negeri Pulau Pinang",
      // image: "./path/to/image/source.png",
      description:
        "<p>Penang is a Malaysian state located on the northwest coast of Peninsular Malaysia, by the Malacca Strait. It has two parts: Penang Island, where the capital city, George Town, is located, and Seberang Perai (formerly Province Wellesley) on the Malay Peninsula. The second smallest Malaysian state by land mass, Penang is bordered by Kedah to the north and the east, and Perak to the south.</p>",
      location: {
        center: [100.29724, 5.30966],
        zoom: 10.22,
        pitch: 50.50,
        bearing: 0.00
      },
      onChapterEnter: [
         {
             layer: 'map-9-bly1a3',
             opacity: 1
         }
      ],
      onChapterExit: [
         {
             layer: 'map-9-bly1a3',
             opacity: 0
         }
      ]
    },
    {
      id: "other-identifier",
      title: "Lokasi Hospital Pulau Pinang",
      image: "./path/to/image/source.png",
      description: "Located in Southeast Asia, the country of Malaysia is known for its many exotic islands that feature stunning beaches, tropical rainforests and diverse cultures. A great number of these islands present popular diving and snorkeling destinations because of their crystal clear waters and colorful coral reefs. However, the islands of Malaysia are not just about beaches and diving. There is much more to experience here such as colonial villages, beautiful temples, vibrant resorts and adventurous activities.",
      location: {
        center: [100.31531, 5.36727],
        zoom: 10.22,
        pitch: 6.00,
        bearing: 0.00
      },
      onChapterEnter: [
          {
            layer: 'hospital',
            opacity: 1
          }

      ],
      onChapterExit: [
          {
            layer: 'hospital',
            opacity: 0
          }

      ]
    },
    {
      id: "chap-3",
      title: "Pusat Kesihatan Awam Pulau Pinang",
      // image: "./path/to/image/source.png",
      description:
        "<p>Penang is a Malaysian state located on the northwest coast of Peninsular Malaysia, by the Malacca Strait. It has two parts: Penang Island, where the capital city, George Town, is located, and Seberang Perai (formerly Province Wellesley) on the Malay Peninsula. The second smallest Malaysian state by land mass, Penang is bordered by Kedah to the north and the east, and Perak to the south.</p>",
      location: {
        center: [100.31531, 5.36727],
        zoom: 10.22,
        pitch: 6.00,
        bearing: 0.00
      },
      onChapterEnter: [
         {
             layer: 'klinik',
             opacity: 1
         }
      ],
      onChapterExit: [
         {
             layer: 'klinik',
             opacity: 0
         }
      ]
    },
    {
      id: "chap-4",
      title: "Pusat Kesihatan Swasta",
      // image: "./path/to/image/source.png",
      description:
        "<p>Penang is a Malaysian state located on the northwest coast of Peninsular Malaysia, by the Malacca Strait. It has two parts: Penang Island, where the capital city, George Town, is located, and Seberang Perai (formerly Province Wellesley) on the Malay Peninsula. The second smallest Malaysian state by land mass, Penang is bordered by Kedah to the north and the east, and Perak to the south.</p>",
      location: {
        center: [100.31531, 5.36727],
        zoom: 10.22,
        pitch: 6.00,
        bearing: 0.00
      },
      onChapterEnter: [
         {
             layer: 'swasta',
             opacity: 1
         }
      ],
      onChapterExit: [
         {
             layer: 'swasta',
             opacity: 0
         }
      ]
    },
    {
      id: "chap-5",
      title: "Jumlah keseluruhan",
      // image: "./path/to/image/source.png",
      description:
        "<p>Penang is a Malaysian state located on the northwest coast of Peninsular Malaysia, by the Malacca Strait. It has two parts: Penang Island, where the capital city, George Town, is located, and Seberang Perai (formerly Province Wellesley) on the Malay Peninsula. The second smallest Malaysian state by land mass, Penang is bordered by Kedah to the north and the east, and Perak to the south.</p>",
      location: {
        center: [100.31531, 5.36727],
        zoom: 10.22,
        pitch: 6.00,
        bearing: 0.00
      },
      onChapterEnter: [
         {
             layer: 'hospital',
             opacity: 1
         },
         {
             layer: 'klinik',
             opacity: 1
         },
         {
             layer: 'swasta',
             opacity: 1
         }
      ],
      onChapterExit: [
         {
             layer: 'hospital',
             opacity: 0
         },
         {
             layer: 'klinik',
             opacity: 0
         },
         {
             layer: 'swasta',
             opacity: 0
         }
      ]
    }   
  ]
};
