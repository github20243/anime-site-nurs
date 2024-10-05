export interface Episode {
	episodeNumber: number;
	title: string;
	description: string;
	videoUrl?: string;
}

export interface Anime {
	id: string;
	title: string;
	image: string;
	episodes: Episode[];
}

export const animeList: Anime[] = [
	{
		id: "2",
		title: "The Seven Deadly Sins",
		image:
			"https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/e63beb56-0433-4bbf-ae70-5d85a5ed8945/600x900",
		episodes: [
			{
				episodeNumber: 1,
				title: "Episode 1",
				description: "Description of episode 1",
				videoUrl:
					"https://r220107.anilibria.one/nanatsu-no-taizai/1/1.1080.0307727e5e0df80f.mp4?hash1=8486c827820ef600a9d598a0fbb7fd7f&hash2=6cb71244e2f12ba3f024b8d7dfe33728",
			},
			{
				episodeNumber: 2,
				title: "Episode 2",
				description: "Description of episode 2",
				videoUrl:
					"https://r310102.anilibria.one/nanatsu-no-taizai/1/2.1080.a67b315e3c4fd028.mp4?hash1=c0e8a443ea27bbd330fef25646d92a3e&hash2=1d1418e3e2101a640b39e1453d2b01da",
			},
			{
				episodeNumber: 3,
				title: "Episode 3",
				description: "Description of episode 3",
				videoUrl:
					"https://r310102.anilibria.one/nanatsu-no-taizai/1/3.1080.daec96ba430e4995.mp4?hash1=5d2983d751b6a3cb92eb26ed6daf7b91&hash2=6ab7de1f8088e1bd08056306d7ac8a9f",
			},
			{
				episodeNumber: 4,
				title: "Episode 4",
				description: "Description of episode 4",
				videoUrl:
					"https://r310102.anilibria.one/nanatsu-no-taizai/1/4.1080.d85b2e7a012be916.mp4?hash1=ac1d38083a68f10416b95fd91ffaae9c&hash2=c62721307ca23de004fb32be0df98db3",
			},
			{
				episodeNumber: 5,
				title: "Episode 5",
				description: "Description of episode 5",
				videoUrl:
					"https://r310102.anilibria.one/nanatsu-no-taizai/1/5.1080.583739c8b19976e7.mp4?hash1=1e2c265aa4f8bfa4fec061277a28f918&hash2=dfb8d866b91051f0f990f7243c14e3cd",
			},
			{
				episodeNumber: 6,
				title: "Episode 6",
				description: "Description of episode 6",
				videoUrl:
					"https://r310102.anilibria.one/nanatsu-no-taizai/1/6.1080.18c0c8edfaed01ef.mp4?hash1=a3f76b33a8bc75812a3f8e453e4d17b8&hash2=67b92027e93a7e4617c55e59fd4aa3cf",
			},
			{
				episodeNumber: 7,
				title: "Episode 7",
				description: "Description of episode 7",
				videoUrl:
					"https://r310102.anilibria.one/nanatsu-no-taizai/1/7.1080.b487e8ecd8f24159.mp4?hash1=ef3f6efae32469b15a83984c2a495646&hash2=3772bea3d2ebc0f7c201df0b85973c75",
			},
			{
				episodeNumber: 8,
				title: "Episode 8",
				description: "Description of episode 8",
				videoUrl:
					"https://r310102.anilibria.one/nanatsu-no-taizai/1/8.1080.020b43f468876b23.mp4?hash1=2f7f68424775fdf124e7c4c0e0071eb5&hash2=002cc7d8f00ac6d8674bdaf87dccd5ea",
			},
			{
				episodeNumber: 9,
				title: "Episode 9",
				description: "Description of episode 9",
				videoUrl:
					"https://r310102.anilibria.one/nanatsu-no-taizai/1/9.1080.406fcb7ff94a9c0c.mp4?hash1=4b320b6724a84a0d4293f65d333d8ceb&hash2=6ff940b9e92b725d0a9e87a143f39786",
			},
			{
				episodeNumber: 10,
				title: "Episode 10",
				description: "Description of episode 10",
				videoUrl:
					"https://r310102.anilibria.one/nanatsu-no-taizai/1/10.1080.94cdb9d9dbe81fc9.mp4?hash1=22f24feb6e67fcba606aa3a443056560&hash2=82fd3644b8f91e028e23fa1ba6459271",
			},
			{
				episodeNumber: 11,
				title: "Episode 11",
				description: "Description of episode 11",
				videoUrl:
					"https://r310102.anilibria.one/nanatsu-no-taizai/1/11.1080.74c24b593a85a460.mp4?hash1=6dd246b30273930d166b700f924a93b3&hash2=3225652b64eef3e7144bbfae429865e2",
			},
			{
				episodeNumber: 12,
				title: "Episode 12",
				description: "Description of episode 12",
				videoUrl:
					"https://r310102.anilibria.one/nanatsu-no-taizai/1/12.1080.800bdf01e4f01eac.mp4?hash1=6c765e91e69d97e3c21526040f783f0b&hash2=71e44dc18931f3ff2142112a9faebba2",
			},
			{
				episodeNumber: 13,
				title: "Episode 13",
				description: "Description of episode 13",
				videoUrl:
					"https://r310102.anilibria.one/nanatsu-no-taizai/1/13.1080.f8eb22190dba0928.mp4?hash1=d57ece475ff2aa13f8b9c99089b5ef8d&hash2=1040e01692921d713c2f25bab7c7cd20",
			},
			{
				episodeNumber: 14,
				title: "Episode 14",
				description: "Description of episode 14",
				videoUrl:
					"https://r310102.anilibria.one/nanatsu-no-taizai/1/14.1080.2ca179eab4bfd535.mp4?hash1=b547194af63bfb282f2ba43b72b671b5&hash2=7eaa6e67c32237d9ca42ed8c737d15b4",
			},
			{
				episodeNumber: 15,
				title: "Episode 15",
				description: "Description of episode 15",
				videoUrl:
					"https://r310102.anilibria.one/nanatsu-no-taizai/1/15.1080.c4ed79d1c6ba3652.mp4?hash1=aeecd120d884bd576c72f53c6f769c07&hash2=badb4861cc83981e7c47f2969b6a98df",
			},
			{
				episodeNumber: 16,
				title: "Episode 16",
				description: "Description of episode 16",
				videoUrl:
					"https://r310102.anilibria.one/nanatsu-no-taizai/1/16.1080.b56cec062b4966d9.mp4?hash1=0081e0a83280c2cf0b3671fb0f1f63a9&hash2=d914e2378572a47e4b44a0239a1f9074",
			},
			{
				episodeNumber: 17,
				title: "Episode 17",
				description: "Description of episode 17",
				videoUrl:
					"https://r310102.anilibria.one/nanatsu-no-taizai/1/17.1080.8bf35ef6363e91a8.mp4?hash1=b195b0ae0713373fd88fcc6052b7c4b4&hash2=d5b9ccc467b7edcdefbead1caa215505",
			},
			{
				episodeNumber: 18,
				title: "Episode 18",
				description: "Description of episode 18",
				videoUrl:
					"https://r310102.anilibria.one/nanatsu-no-taizai/1/18.1080.3be859a280ea9110.mp4?hash1=6831b7c46ded19994d4d3ef7f7c719ec&hash2=8537782a7b0c9708a12df865a1963ac0",
			},
			{
				episodeNumber: 19,
				title: "Episode 19",
				description: "Description of episode 19",
				videoUrl:
					"https://r310102.anilibria.one/nanatsu-no-taizai/1/19.1080.57442a0ed929260d.mp4?hash1=4fc088f9482cafe405c76cf59704ec37&hash2=c2960373b4cc06cdd2ef6d5cad531cc7",
			},
			{
				episodeNumber: 20,
				title: "Episode 20",
				description: "Description of episode 20",
				videoUrl:
					"https://r310102.anilibria.one/nanatsu-no-taizai/1/20.1080.59b43dff24ef20df.mp4?hash1=0a089393735cdbf0db0252e6823375a9&hash2=d82cf580bd5cb905342ebdc315ac7498",
			},
			{
				episodeNumber: 21,
				title: "Episode 21",
				description: "Description of episode 21",
				videoUrl:
					"https://r310102.anilibria.one/nanatsu-no-taizai/1/21.1080.f7f2f32b2ca0fb91.mp4?hash1=a1f0a701d0152ac0ffac3e35dd3b208e&hash2=41d31103f623219e29f6b21d11d35fdf",
			},
			{
				episodeNumber: 22,
				title: "Episode 22",
				description: "Description of episode 22",
				videoUrl:
					"https://r310102.anilibria.one/nanatsu-no-taizai/1/22.1080.4566b05cb1b33741.mp4?hash1=d3198b1f4e6f713fbdaa650cc677bd92&hash2=3594b179f834bc1477027e584e9b06d3",
			},
			{
				episodeNumber: 23,
				title: "Episode 23",
				description: "Description of episode 23",
				videoUrl:
					"https://r310102.anilibria.one/nanatsu-no-taizai/1/23.1080.d9cfc1043b6e6232.mp4?hash1=2f6a4b473409c26e2cc6688d890dbe89&hash2=b952ea279eb53362c6e7d33049bdad58",
			},
			{
				episodeNumber: 24,
				title: "Episode 24",
				description: "Description of episode 24",
				videoUrl:
					"https://r310102.anilibria.one/nanatsu-no-taizai/1/24.1080.3d3b570e3af66ae3.mp4?hash1=114cdeb8a78ea4320b7d1c4dc37e677a&hash2=3c263dc8048715af2ab7155f21d6ee26",
			},
			// Добавьте остальные серии
		],
	},

	// Добавьте остальные аниме
];
