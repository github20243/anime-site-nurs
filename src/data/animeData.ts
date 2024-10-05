// interface AnimeDetails {
// 	id: number;
// 	title: string;
// 	image: string;
// 	description: string;
// 	episodes: number;
// 	rating: number;
// 	reviews: string[];
// }

// type AnimeData = {
// 	[key: number]: AnimeDetails; // Индексируем по числовым ключам
// };

// export const animeData: AnimeData = {
// 	1: {
// 		id: 1,
// 		title: "Naruto",
// 		image: "https://fr.web.img4.acsta.net/pictures/19/08/05/16/55/2130716.jpg",
// 		description:
// 			"Naruto is a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.",
// 		episodes: 220,
// 		rating: 8.3,
// 		reviews: [
// 			"Amazing anime with great character development!",
// 			"Naruto's journey is inspiring and action-packed.",
// 		],
// 	},
// 	2: {
// 		id: 2,
// 		title: "Seven Deadly Sins",
// 		image:
// 			"https://fantv.ru/assets/cached/2023/03/resize/753__q100_175b615c-bac0-4000-8f17-16be46c3df00.jpeg",
// 		description:
// 			"The Seven Deadly Sins is a group of knights who were disbanded after being accused of plotting to overthrow the kingdom.",
// 		episodes: 48,
// 		rating: 7.7,
// 		reviews: [
// 			"Great storyline with lots of action.",
// 			"The characters are well-developed and engaging.",
// 		],
// 	},
// 	3: {
// 		id: 3,
// 		title: "Jujutsu Kaisen",
// 		image:
// 			"https://pic.rutube.ru/video/9d/c8/9dc8b07c4bfc1c1de91b383988fd183c.jpg",
// 		description:
// 			"Jujutsu Kaisen follows Yuji Itadori, a high school student with extraordinary physical abilities, who gets involved in the world of cursed spirits after consuming a powerful cursed object. He joins a secret organization of jujutsu sorcerers to fight against curses and uncover the mysteries surrounding his new powers.",
// 		episodes: 24,
// 		rating: 8.5,
// 		reviews: [
// 			"An exciting and intense series with excellent animation.",
// 			"The story and character development are top-notch, making it a must-watch for fans of the genre.",
// 		],
// 	},
// 	4: {
// 		id: 4,
// 		title: "Solo Leveling",
// 		image:
// 			"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/4305090653ee4239dd0d797f1a4a6bdf.jpg", // Замените на актуальное изображение
// 		description:
// 			"Solo Leveling follows Sung Jin-Woo, a weak hunter who becomes the strongest after an unexpected event. As he levels up, he uncovers the mysteries of the dungeon world and his own powers.",
// 		episodes: 12,
// 		rating: 9.0,
// 		reviews: [
// 			"Incredible action and world-building!",
// 			"The main character's growth is incredibly satisfying.",
// 		],
// 	},
// 	5: {
// 		id: 5,
// 		title: "Attack on Titan",
// 		image:
// 			"https://www.safeshellvpn.com/o/pic/20240403/33c7010d-0ffc-4bce-bed2-8a4e958a7b78.png", // Замените на актуальное изображение
// 		description:
// 			"Attack on Titan is set in a world where humanity is on the brink of extinction due to giant humanoid creatures known as Titans. The story follows Eren Yeager and his friends as they fight against these Titans and uncover dark secrets about their world.",
// 		episodes: 25,
// 		rating: 9.1,
// 		reviews: [
// 			"A gripping story with intense action and deep mysteries.",
// 			"The plot twists and character development are phenomenal.",
// 		],
// 	},
// 	6: {
// 		id: 6,
// 		title: "Demon Slayer",
// 		image:
// 			"https://m.media-amazon.com/images/M/MV5BNmQ5Zjg2ZTYtMGZmNC00M2Y3LTgwZGQtYmQ3NWI5MDdhZWNjXkEyXkFqcGc@._V1_.jpg", // Замените на актуальное изображение
// 		description:
// 			"Demon Slayer follows Tanjiro Kamado, a young boy who becomes a demon slayer after his family is slaughtered by demons. He embarks on a journey to find a cure for his sister, who has been turned into a demon.",
// 		episodes: 26,
// 		rating: 8.9,
// 		reviews: [
// 			"Stunning animation and a compelling story.",
// 			"The characters are relatable and the action scenes are breathtaking.",
// 		],
// 	},
// 	7: {
// 		id: 7,
// 		title: "One Punch Man",
// 		image:
// 			"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/d8eed44e3d48097ab5fd36b6815fc18e.jpe", // Замените на актуальное изображение
// 		description:
// 			"One Punch Man follows Saitama, a hero who can defeat any opponent with a single punch, as he searches for a worthy adversary and grapples with the monotony of his own invincibility.",
// 		episodes: 12,
// 		rating: 8.7,
// 		reviews: [
// 			"A hilarious take on the superhero genre with amazing action scenes.",
// 			"The concept of an overpowered hero is well-executed and entertaining.",
// 		],
// 	},
// 	8: {
// 		id: 8,
// 		title: "My Hero Academia",
// 		image:
// 			"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/9ca680632ac63f44c7220f61ace9a81b.jpg", // Замените на актуальное изображение
// 		description:
// 			"My Hero Academia is set in a world where the majority of people have superpowers known as 'Quirks'. It follows Izuku Midoriya, a boy born without a Quirk who dreams of becoming the greatest hero.",
// 		episodes: 25,
// 		rating: 8.9,
// 		reviews: [
// 			"An engaging story with unique superpowers and great character development.",
// 			"The mix of action and personal growth makes it a standout series.",
// 		],
// 	},
// 	9: {
// 		id: 9,
// 		title: "Tokyo Ghoul",
// 		image:
// 			"https://m.media-amazon.com/images/M/MV5BOTM5ZjA2YWMtYjY3Ny00ZDU1LTk1NjYtMzhjMGY5ZmZkMzgwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg", // Замените на актуальное изображение
// 		description:
// 			"Tokyo Ghoul follows Ken Kaneki, a college student who becomes a half-ghoul after a near-fatal encounter. He must navigate the dark world of ghouls while trying to maintain his humanity.",
// 		episodes: 12,
// 		rating: 8.4,
// 		reviews: [
// 			"A dark and intense story with a unique take on supernatural beings.",
// 			"The psychological and emotional depth of the characters is compelling.",
// 		],
// 	},
// 	10: {
// 		id: 10,
// 		title: "Sword Art Online",
// 		image:
// 			"https://p325k7wa.twic.pics/high/sword-art-online/sao-last-recollection/00-page-setup/saolr_header_mobile_2.jpg?twic=v1/resize=760/step=10/quality=80", // Замените на актуальное изображение
// 		description:
// 			"Sword Art Online follows players trapped in a virtual reality MMORPG where death in the game means death in real life. Kirito must navigate the game's challenges to escape and survive.",
// 		episodes: 25,
// 		rating: 8.3,
// 		reviews: [
// 			"An exciting adventure with a unique concept of virtual reality.",
// 			"The blend of romance and action makes it a memorable watch.",
// 		],
// 	},
// 	11: {
// 		id: 11,
// 		title: "Fullmetal Alchemist: Brotherhood",
// 		image:
// 			"https://m.media-amazon.com/images/M/MV5BYzJhMWE0YWQtOWZkYy00MjFiLThkZWQtYjYzYjVmYmI1MGNhXkEyXkFqcGc@._V1_.jpg", // Замените на актуальное изображение
// 		description:
// 			"Fullmetal Alchemist: Brotherhood follows two brothers who use alchemy in their quest to find the Philosopher's Stone and restore their bodies after a failed experiment.",
// 		episodes: 64,
// 		rating: 9.2,
// 		reviews: [
// 			"A masterful story with deep themes and well-developed characters.",
// 			"The blend of action, fantasy, and philosophy is exceptional.",
// 		],
// 	},
// 	12: {
// 		id: 12,
// 		title: "Steins;Gate",
// 		image:
// 			"https://media.myshows.me/shows/760/1/ba/1ba31529a26258159a5f2b6de7351a65.jpg",
// 		description:
// 			"Steins;Gate revolves around a group of friends who accidentally discover a way to send messages to the past, leading to unexpected consequences and a race against time.",
// 		episodes: 24,
// 		rating: 8.8,
// 		reviews: [
// 			"A brilliant sci-fi thriller with a complex and engaging narrative.",
// 			"The time travel elements are well-crafted and intriguing.",
// 		],
// 	},
// 	13: {
// 		id: 13,
// 		title: "Death Note",
// 		image:
// 			"https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
// 		description:
// 			"Death Note follows a high school student who discovers a notebook that allows him to kill anyone whose name he writes in it. He uses it to create a utopia but faces a detective who seeks to stop him.",
// 		episodes: 37,
// 		rating: 8.7,
// 		reviews: [
// 			"A psychological thriller with a gripping cat-and-mouse game.",
// 			"The exploration of morality and justice is thought-provoking.",
// 		],
// 	},
// 	14: {
// 		id: 14,
// 		title: "Black Clover",
// 		image:
// 			"https://m.media-amazon.com/images/M/MV5BNTAzYTlkMWEtOTNjZC00ZDU0LWI5ODUtYTRmYzY0MTAzYWZlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg", // Замените на актуальное изображение
// 		description:
// 			"Black Clover follows Asta, a boy born without magic in a world where magic is everything, and his journey to become the Wizard King alongside his adoptive brother Yuno.",
// 		episodes: 51,
// 		rating: 7.9,
// 		reviews: [
// 			"An action-packed series with exciting magic battles and strong character development.",
// 			"The rivalry between the main characters is well-developed and engaging.",
// 		],
// 	},
// 	15: {
// 		id: 15,
// 		title: "Violet Evergarden",
// 		image:
// 			"https://resizing.flixster.com/vSxHBCXepARjD_KeyUYoasEUnPg=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzA0NjI2NzY1LTE0ZWQtNGI5YS05Nzc2LWY3M2EwMjlmYzI0MS5qcGc=", // Замените на актуальное изображение
// 		description:
// 			"Violet Evergarden follows a former soldier who becomes an Auto Memory Doll, helping others to write letters that convey their emotions. She seeks to understand the meaning of the words 'I love you' she received from her mentor.",
// 		episodes: 13,
// 		rating: 8.8,
// 		reviews: [
// 			"A beautifully animated series with an emotional and touching story.",
// 			"The exploration of trauma and healing is portrayed with depth and sensitivity.",
// 		],
// 	},
// 	16: {
// 		id: 16,
// 		title: "Hell’s Paradise",
// 		image:
// 			"https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/05/hells-paradise-main-cast-gabimaru-sagiri-1.jpg", // Замените на актуальное изображение
// 		description:
// 			"Hell’s Paradise follows a disgraced shinobi, who is sent to a mysterious island to find an elixir of immortality in exchange for his freedom. He faces numerous challenges and encounters supernatural beings on his journey.",
// 		episodes: 12,
// 		rating: 8.5,
// 		reviews: [
// 			"A gripping story with dark and atmospheric elements.",
// 			"The action sequences and world-building are impressive.",
// 		],
// 	},
// 	17: {
// 		id: 17,
// 		title: "Magic Muscles",
// 		image:
// 			"https://m.media-amazon.com/images/M/MV5BM2M1Yzc5OTMtNWQxYS00NTg5LThiYjQtODRhZGMwODVkNjAyXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg", // Замените на актуальное изображение
// 		description:
// 			"Magic Muscles follows a young man who discovers he has incredible magical strength and uses it to protect his loved ones and fight against evil forces.",
// 		episodes: 12,
// 		rating: 7.8,
// 		reviews: [
// 			"An entertaining series with a blend of action and comedy.",
// 			"The main character's journey and growth are well-portrayed.",
// 		],
// 	},
// 	18: {
// 		id:	18,
// 		title: "Tokyo Revengers",
// 		image:
// 			"https://m.media-amazon.com/images/M/MV5BMTdmYmVlODktNWM0Yi00NDNlLWJhMjQtMzg1MzVhYzU1N2IwXkEyXkFqcGdeQXVyMTcxNDcyNDA4._V1_FMjpg_UX1000_.jpg",
// 		description:
// 			"Tokyo Revengers follows Takemichi Hanagaki, who discovers he can travel back in time to prevent his ex-girlfriend's murder by joining a gang and changing the course of events.",
// 		episodes: 24,
// 		rating: 8.1,
// 		reviews: [
// 			"A compelling story with time travel and gang conflicts.",
// 			"The character development and plot twists keep you engaged.",
// 		],
// 	},
// 	19: {
// 		id: 19,
// 		title: "Baki the Grappler",
// 		image:
// 			"https://m.media-amazon.com/images/M/MV5BMDViZTQ0NTQtNzAzZS00ZDgzLWI1NDItMTJlMWMzMmY0ZGIzXkEyXkFqcGdeQXVyMTEwNDU1MzEy._V1_.jpg", // Замените на актуальное изображение
// 		description:
// 			"Baki the Grappler focuses on Baki Hanma, a young martial artist who aims to surpass his father, who is known as the strongest fighter in the world. The series features intense martial arts battles.",
// 		episodes: 24,
// 		rating: 7.6,
// 		reviews: [
// 			"High-octane martial arts action with over-the-top characters.",
// 			"The fight scenes are dynamic and well-choreographed.",
// 		],
// 	},
// 	20: {
// 		id: 20,
// 		title: "Bleach",
// 		image: "https://images.justwatch.com/poster/260844361/s718/season-1.jpg", // Замените на актуальное изображение
// 		description:
// 			"Bleach follows Ichigo Kurosaki, a teenager who gains the abilities of a Soul Reaper and must protect the living world from evil spirits while battling powerful enemies.",
// 		episodes: 366,
// 		rating: 8.4,
// 		reviews: [
// 			"An action-packed series with a unique take on spirits and soul reapers.",
// 			"The story and character arcs are engaging and well-developed.",
// 		],
// 	},
// 	21: {
// 		id: 21,
// 		title: "The Rising of the Shield Hero",
// 		image: "https://pbs.twimg.com/media/FLLnKZbUUAAs70X.png", // Замените на актуальное изображение
// 		description:
// 			"The Rising of the Shield Hero follows Naofumi Iwatani, who is summoned to a fantasy world as the Shield Hero. He must defend the world from waves of monsters and deal with betrayal and adversity.",
// 		episodes: 25,
// 		rating: 8.2,
// 		reviews: [
// 			"A refreshing take on the isekai genre with a strong protagonist.",
// 			"The character development and world-building are excellent.",
// 		],
// 	},
// 	22: {
// 		id: 22,
// 		title: "Kaiju No. 8",
// 		image:
// 			"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/e66d5a8f5167c8bc7a7fd5baa52961c5.jpg", // Замените на актуальное изображение
// 		description:
// 			"Kaiju No. 8 follows Kafka Hibino, who is transformed into a Kaiju and becomes a threat to humanity. He decides to join a special unit to protect his loved ones and fight against other Kaiju.",
// 		episodes: 12,
// 		rating: 8.3,
// 		reviews: [
// 			"An action-packed series with exciting Kaiju battles.",
// 			"The main character's struggle and growth are compelling.",
// 		],
// 	},
// 	23: {
// 		id: 23,
// 		title: "Gurren Lagann",
// 		image:
// 			"https://m.media-amazon.com/images/I/81Uv5d+PPbL._AC_UF1000,1000_QL80_.jpg", // Замените на актуальное изображение
// 		description:
// 			"Gurren Lagann follows Simon and Kamina as they lead a rebellion against oppressive forces in a futuristic world. The series features epic battles and a powerful story of friendship and perseverance.",
// 		episodes: 27,
// 		rating: 8.7,
// 		reviews: [
// 			"A high-energy series with memorable characters and epic moments.",
// 			"The story of overcoming odds and fighting for freedom is inspiring.",
// 		],
// 	},
// 	24: {
// 		id: 24,
// 		title: "Monster",
// 		image:
// 			"https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/ad58dfdc-0007-4e0f-bee8-06f2466cb6e3/600x900",
// 		description:
// 			"Monster follows Dr. Kenzo Tenma, a neurosurgeon whose life spirals out of control after saving the life of a young boy who turns out to be a dangerous psychopath.",
// 		episodes: 74,
// 		rating: 8.8,
// 		reviews: [
// 			"A psychological thriller with a deep and complex storyline.",
// 			"The characters are intricately developed, and the suspense is gripping.",
// 		],
// 	},
// 	25: {
// 		id: 25,
// 		title: "Dragon Ball",
// 		image:
// 			"https://deadline.com/wp-content/uploads/2024/07/Dragon-Ball-Series_c42772.jpg?w=1024", // Замените на актуальное изображение
// 		description:
// 			"Dragon Ball follows the adventures of Goku as he trains and explores the world in search of the Dragon Balls, mystical orbs that grant wishes when gathered together.",
// 		episodes: 153,
// 		rating: 8.4,
// 		reviews: [
// 			"A classic series with action, adventure, and memorable characters.",
// 			"The quest for the Dragon Balls is entertaining and exciting.",
// 		],
// 	},
// 	26: {
// 		id: 26,
// 		title: "Dungeon Musume",
// 		image: "https://pbs.twimg.com/media/EXAHo9qWkAI0BOB.jpg:large", // Замените на актуальное изображение
// 		description:
// 			"Dungeon Musume follows the adventures of a dungeon master who must navigate through various challenges and manage his dungeon's inhabitants.",
// 		episodes: 12,
// 		rating: 7.5,
// 		reviews: [
// 			"An enjoyable series with a mix of fantasy and adventure.",
// 			"The dungeon management aspect adds a unique twist to the story.",
// 		],
// 	},
// 	27: {
// 		id: 27,
// 		title: "Fullmetal Alchemist",
// 		image:
// 			"https://m.media-amazon.com/images/M/MV5BOWZmYWRmYTUtMDFhMS00OTJiLTkwYTgtY2VkNjgxMmI3YzJkXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_.jpg", // Замените на актуальное изображение
// 		description:
// 			"Fullmetal Alchemist follows two brothers who use alchemy in their quest to find the Philosopher's Stone and restore their bodies after a failed experiment.",
// 		episodes: 51,
// 		rating: 8.9,
// 		reviews: [
// 			"A well-crafted story with deep themes and rich world-building.",
// 			"The characters' journey and growth are compelling and emotional.",
// 		],
// 	},
// 	28: {
// 		id: 28,
// 		title: "Sword Art Online",
// 		image:
// 			"https://p325k7wa.twic.pics/high/sword-art-online/sao-last-recollection/00-page-setup/saolr_header_mobile_2.jpg?twic=v1/resize=760/step=10/quality=80", // Замените на актуальное изображение
// 		description:
// 			"Sword Art Online follows players trapped in a virtual reality MMORPG where death in the game means death in real life. Kirito must navigate the game's challenges to escape and survive.",
// 		episodes: 25,
// 		rating: 8.3,
// 		reviews: [
// 			"An exciting adventure with a unique concept of virtual reality.",
// 			"The blend of romance and action makes it a memorable watch.",
// 		],
// 	},
// 	29: {
// 		id: 29,
// 		title: "Hunter x Hunter",
// 		image:
// 			"https://dw9to29mmj727.cloudfront.net/promo/2016/6231-SeriesHeaders_HxH_2000x800.jpg", // Замените на актуальное изображение
// 		description:
// 			"Hunter x Hunter follows Gon Freecss, a young boy who becomes a Hunter to find his father, who is also a legendary Hunter. Along the way, he faces various challenges and adversaries.",
// 		episodes: 148,
// 		rating: 9.0,
// 		reviews: [
// 			"A fantastic series with intricate plotlines and deep character development.",
// 			"The world-building and adventure are top-notch.",
// 		],
// 	},
// 	30: {
// 		id: 30,
// 		title: "Steins;Gate",
// 		image:
// 			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD5ESZd8k4HBzlOQyEsKxTrckSPO2_YCeILQ&s", // Замените на актуальное изображение
// 		description:
// 			"Steins;Gate revolves around a group of friends who accidentally discover a way to send messages to the past, leading to unexpected consequences and a race against time.",
// 		episodes: 24,
// 		rating: 8.8,
// 		reviews: [
// 			"A brilliant sci-fi thriller with a complex and engaging narrative.",
// 			"The time travel elements are well-crafted and intriguing.",
// 		],
// 	},
// 	31: {
// 		id: 31,
// 		title: "Code Geass",
// 		image:
// 			"https://m.media-amazon.com/images/S/pv-target-images/f8ab74240b5f0764f8c1970eb56094179ee6f0f534c439c2ac432dd359543842.jpg", // Замените на актуальное изображение
// 		description:
// 			"Code Geass follows Lelouch vi Britannia, who gains the power of Geass and leads a rebellion against the Holy Britannian Empire to create a better world.",
// 		episodes: 50,
// 		rating: 8.7,
// 		reviews: [
// 			"A captivating story with intense political and strategic elements.",
// 			"The character development and plot twists are exceptional.",
// 		],
// 	},
// 	32: {
// 		id: 32,
// 		title: "Boruto",
// 		image:
// 			"https://static1.srcdn.com/wordpress/wp-content/uploads/2024/04/boruto-during-the-final-battle.jpg", // Замените на актуальное изображение
// 		description:
// 			"Boruto follows the adventures of Boruto Uzumaki, the son of Naruto, as he navigates his role as a ninja and deals with new challenges in a changing world.",
// 		episodes: 220,
// 		rating: 7.4,
// 		reviews: [
// 			"A continuation of the Naruto series with new characters and challenges.",
// 			"The focus on family and legacy adds depth to the story.",
// 		],
// 	},
// 	33: {
// 		id: 33,
// 		title: "Akame ga Kill!",
// 		image:
// 			"https://m.media-amazon.com/images/S/pv-target-images/d8743d6b30714a97efa9eb3a79f5b801e76b5204cdb990a76a6a1ad69bee5657.jpg", // Замените на актуальное изображение
// 		description:
// 			"Akame ga Kill! follows Tatsumi, who joins a group of assassins to fight against a corrupt empire. The series is known for its dark themes and intense action.",
// 		episodes: 24,
// 		rating: 7.9,
// 		reviews: [
// 			"An action-packed series with strong character development.",
// 			"The dark themes and plot twists are gripping.",
// 		],
// 	},
// 	34: {
// 		id: 34,
// 		title: "This Beautiful World",
// 		image:
// 			"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/cb406f496c9aadafa86f6ac11f1a6543.jpe", // Замените на актуальное изображение
// 		description:
// 			"This Beautiful World follows a group of individuals as they navigate their lives and relationships in a beautifully illustrated world, exploring themes of love and personal growth.",
// 		episodes: 13,
// 		rating: 8.0,
// 		reviews: [
// 			"A visually stunning series with heartfelt storytelling.",
// 			"The exploration of personal growth and relationships is moving.",
// 		],
// 	},
// 	35: {
// 		id: 35,
// 		title: "Маг целитель",
// 		image: "https://static.hdrezka.ac/i/2021/1/16/uccee1b86027ayi94g64x.png",
// 		description:
// 			"Маг целитель следует за молодым магом, который использует свои целительские способности, чтобы помогать людям в мире, полном магических и физических угроз. Главный герой сталкивается с различными трудностями, одновременно исследуя свои силы и развивая свои личные навыки.",
// 		episodes: 12,
// 		rating: 7.5,
// 		reviews: [
// 			"Интересный сюжет с уникальным подходом к магии и целительству.",
// 			"Хорошо проработанные персонажи и увлекательные приключения.",
// 		],
// 	},
// 	36: {
// 		id: 36,
// 		title: "Dororo",
// 		image: "https://s0.rbk.ru/v6_top_pics/media/img/0/82/347002394145820.jpeg", // Замените на актуальное изображение
// 		description:
// 			"Dororo follows a young man named Hyakkimaru, who seeks to reclaim his stolen body parts from demons with the help of a young thief named Dororo.",
// 		episodes: 24,
// 		rating: 8.1,
// 		reviews: [
// 			"A dark and engaging tale with emotional depth.",
// 			"The combination of action and character development is well-executed.",
// 		],
// 	},
// 	37: {
// 		id: 37,
// 		title: "Chainsaw Man",
// 		image:
// 			"https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974740581/chainsaw-man-vol-12-9781974740581_hr.jpg", // Замените на актуальное изображение
// 		description:
// 			"Chainsaw Man follows Denji, a young man with the ability to transform parts of his body into chainsaws. He becomes a Devil Hunter to pay off his deceased father's debt and fight against supernatural threats.",
// 		episodes: 12,
// 		rating: 8.4,
// 		reviews: [
// 			"A thrilling and action-packed series with a unique protagonist.",
// 			"The dark humor and intense action sequences are captivating.",
// 		],
// 	},
// 	38: {
// 		id: 38,
// 		title: "Hellsing",
// 		image: "https://static.hdrezka.ac/i/2016/10/5/i214387514633uc86l18t.jpg", // Замените на актуальное изображение
// 		description:
// 			"Hellsing follows the Hellsing Organization, which combats supernatural threats, primarily vampires, using its powerful agent, Alucard. The series blends action with horror elements.",
// 		episodes: 13,
// 		rating: 8.2,
// 		reviews: [
// 			"A stylish and dark series with intense action and horror elements.",
// 			"Alucard's character is particularly intriguing and well-developed.",
// 		],
// 	},
// 	39: {
// 		id: 39,
// 		title: "Cowboy Bebop",
// 		image:
// 			" https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/62e9b64b-b59f-4dea-b27e-4d3fe0fd76b4/600x900",
// 		description:
// 			"Cowboy Bebop follows a group of bounty hunters traveling through space in their spaceship, the Bebop. The series blends action, drama, and jazz music in a futuristic setting.",
// 		episodes: 26,
// 		rating: 8.9,
// 		reviews: [
// 			"A genre-defining classic with a stylish mix of action and music.",
// 			"The characters and their stories are compelling and well-developed.",
// 		],
// 	},
// 	40: {
// 		id: 40,
// 		title: "Parasyte",
// 		image:
// 			"https://m.media-amazon.com/images/M/MV5BMjAyNTE4ODY0OV5BMl5BanBnXkFtZTgwMTIyNzYwNzE@._V1_.jpg", // Замените на актуальное изображение
// 		description:
// 			"Parasyte follows Shinichi Izumi, a high school student who becomes infected by a parasitic alien that takes over his right hand. He must coexist with the parasite and fight against other hostile parasites.",
// 		episodes: 24,
// 		rating: 8.3,
// 		reviews: [
// 			"An intriguing series with a unique premise and solid action.",
// 			"The relationship between Shinichi and the parasite is fascinating.",
// 		],
// 	},
// 	41: {
// 		id: 41,
// 		title: "Neon Genesis Evangelion",
// 		image:
// 			"https://m.media-amazon.com/images/S/pv-target-images/526c5dcf1dab6d883aacafb6b283acdf9192223b594b836c2abfbe68cd62eda5._UR1920,1080_.jpg", // Замените на актуальное изображение
// 		description:
// 			"Neon Genesis Evangelion follows a group of teenagers piloting giant mechs to protect Earth from mysterious beings known as Angels. The series delves into complex psychological and philosophical themes.",
// 		episodes: 26,
// 		rating: 8.7,
// 		reviews: [
// 			"A groundbreaking series with deep psychological and existential themes.",
// 			"The mecha battles and character development are exceptional.",
// 		],
// 	},
// 	42: {
// 		id: 42,
// 		title: "Dr. Stone",
// 		image:
// 			"https://m.media-amazon.com/images/S/pv-target-images/b44853ca6948c251198292e3f4048a166304a7063d8488357e78fdaf55f1e19d.jpg", // Замените на актуальное изображение
// 		description:
// 			"Dr. Stone follows Senku Ishigami, a scientific genius who awakens in a world where humanity has been petrified. He aims to rebuild civilization using the power of science.",
// 		episodes: 24,
// 		rating: 8.5,
// 		reviews: [
// 			"A unique series that blends science with adventure.",
// 			"The main character's ingenuity and scientific knowledge are impressive.",
// 		],
// 	},
// 	43: {
// 		id: 43,
// 		title: "JoJo’s Bizarre Adventure",
// 		image:
// 			"https://m.media-amazon.com/images/M/MV5BZDc3NGQ3ZWQtYjNkOC00MjhiLTg2N2YtNmZlOGNiZTFkOWNhXkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_FMjpg_UX1000_.jpg", // Замените на актуальное изображение
// 		description:
// 			"JoJo’s Bizarre Adventure follows the adventures of the Joestar family across generations as they battle supernatural enemies using unique abilities known as Stands.",
// 		episodes: 39,
// 		rating: 8.6,
// 		reviews: [
// 			"An eccentric and imaginative series with unique art and storytelling.",
// 			"The battles and characters are creatively designed.",
// 		],
// 	},
// 	44: {
// 		id: 44,
// 		title: "Re:Zero",
// 		image:
// 			"https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000029072/0fac29aa9050a8d5d2fb8ab689b3c128c70a49d405bd99311c29324d4e956a25", // Замените на актуальное изображение
// 		description:
// 			"Re:Zero follows Subaru Natsuki, who is transported to a fantasy world where he discovers he has the ability to return from death. He uses this power to protect his friends and unravel the mysteries of the world.",
// 		episodes: 25,
// 		rating: 8.2,
// 		reviews: [
// 			"A compelling series with a unique twist on the isekai genre.",
// 			"Subaru's struggles and growth are well-depicted.",
// 		],
// 	},
// };
