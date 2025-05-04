
export interface Song {
  id: string;
  title: string;
  artist: string;
  genre: 'pop' | 'rnb' | 'kpop';
  image: string;
  description: string;
  lyrics: string;
  audio: string;
  featured?: boolean;
  recommended?: boolean;
}

export const songs: Song[] = [
  {
    id: '1',
    title: 'Midnight City',
    artist: 'Luna Rose',
    genre: 'pop',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    description: 'An upbeat pop anthem with catchy hooks and vibrant synthesizers.',
    lyrics: `Verse 1:
Neon lights flash in the darkness
City dreams come alive at night
I've been waiting for this moment
To feel the rhythm take flight

Chorus:
In the midnight city
Where the stars align
In the midnight city
This feeling's so divine`,
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    featured: true,
    recommended: true
  },
  {
    id: '2',
    title: 'Ocean Blue',
    artist: 'Alex Wave',
    genre: 'rnb',
    image: 'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    description: 'A smooth R&B track with soulful vocals and mellow beats.',
    lyrics: `Verse 1:
Waves crashing on the shore
Your love keeps coming back for more
I'm diving deep into the blue
My heart's an ocean, lost in you

Chorus:
Ocean blue, I'm drowning in you
Ocean blue, your love is so true`,
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    featured: true
  },
  {
    id: '3',
    title: 'Starlight Dreams',
    artist: 'Cosmic Boys',
    genre: 'kpop',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    description: 'An energetic K-pop dance track with an infectious chorus.',
    lyrics: `Verse 1:
별빛이 내리는 밤 (In the night where starlight falls)
너를 향한 내 맘 (My heart heads toward you)
꿈처럼 찾아온 순간 (The moment that came like a dream)

Chorus:
Starlight dreams, shining bright
Starlight dreams, through the night`,
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    recommended: true
  },
  {
    id: '4',
    title: 'Electric Soul',
    artist: 'Neon Pulse',
    genre: 'pop',
    image: 'https://images.unsplash.com/photo-1516223725307-6f76b9ec8742?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    description: 'A pulsating electro-pop song with futuristic synths.',
    lyrics: `Verse 1:
Circuits firing in my veins
Your touch is like electric rain
Every moment amplified
This feeling cannot be denied

Chorus:
Electric soul, you light me up
Electric soul, I can't get enough`,
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    featured: true
  },
  {
    id: '5',
    title: 'Velvet Mood',
    artist: 'Smooth Harmony',
    genre: 'rnb',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    description: 'A sultry R&B ballad with jazz influences and rich vocals.',
    lyrics: `Verse 1:
In the silence of the night
Shadows dance in soft moonlight
Your presence fills the room
Like a velvet-covered tune

Chorus:
Velvet mood, surrounding me
Velvet mood, sets my soul free`,
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    recommended: true
  },
  {
    id: '6',
    title: 'Crystal Snow',
    artist: 'Winter Glow',
    genre: 'kpop',
    image: 'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    description: 'A dreamy K-pop winter ballad with delicate harmonies.',
    lyrics: `Verse 1:
하얀 눈이 내리는 밤 (On the night when white snow falls)
너의 미소가 떠올라 (Your smile comes to mind)
크리스탈처럼 빛나는 순간 (A moment shining like crystal)

Chorus:
Crystal snow, falling down
Crystal snow, covering the town`,
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
    featured: true
  },
  {
    id: '7',
    title: 'Summer Nights',
    artist: 'Tropical Wave',
    genre: 'pop',
    image: 'https://images.unsplash.com/photo-1518911710364-17ec553bde5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    description: 'A breezy summer pop track with tropical beats and carefree vibes.',
    lyrics: `Verse 1:
Sun-kissed beaches, golden sand
Summer breeze across the land
Palm trees swaying, side to side
Perfect night for an oceanside ride

Chorus:
Summer nights, under the stars
Summer nights, never felt so right`,
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3'
  },
  {
    id: '8',
    title: 'Midnight Groove',
    artist: 'Soul Rhythm',
    genre: 'rnb',
    image: 'https://images.unsplash.com/photo-1516223725307-6f76b9ec8742?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    description: 'A slow-burning R&B jam with hypnotic beats and smoky vocals.',
    lyrics: `Verse 1:
Clock strikes twelve, darkness falls
Your silhouette against the walls
This rhythm flowing through my mind
Let's leave the world far behind

Chorus:
Midnight groove, holding you close
Midnight groove, time moves slow`,
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3'
  },
  {
    id: '9',
    title: 'Neon Hearts',
    artist: 'Seoul Lights',
    genre: 'kpop',
    image: 'https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    description: 'A high-energy K-pop dance track with electronic influences.',
    lyrics: `Verse 1:
네온 불빛 아래서 (Under the neon lights)
내 마음이 빛나고 있어 (My heart is shining)
이 감정을 따라가 (Following this feeling)

Chorus:
Neon hearts, beating fast
Neon hearts, meant to last`,
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
    recommended: true
  }
];

export const getFeaturedSongs = (): Song[] => {
  return songs.filter(song => song.featured);
};

export const getRecommendedSongs = (): Song[] => {
  return songs.filter(song => song.recommended);
};

export const getSongsByGenre = (genre: 'pop' | 'rnb' | 'kpop'): Song[] => {
  return songs.filter(song => song.genre === genre);
};

export const getSongById = (id: string): Song | undefined => {
  return songs.find(song => song.id === id);
};
