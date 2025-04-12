import { Game } from '@/models/game';
import { GameCategory } from '@/models/game-category';

export const GAMES: Game[] = [
    {
        id: 'game-1',
        title: 'Mystery Quest',
        status: 'LIVE',
        provider: {
            id: 'provider-1',
            name: 'QuestGames',
        },
        thumbnail: {
            square: '/images/thumbnails/mystery_quest_square.png',
            vertical: '/images/thumbnails/mystery_quest_vertical.png',
            horizontal: '/images/thumbnails/mystery_quest_horizontal.png',
        },
    },
    {
        id: 'game-2',
        title: 'Wild Spin',
        status: 'TEMP_UNAVAILABLE',
        provider: {
            id: 'provider-2',
            name: 'SpinMasters',
        },
        thumbnail: {
            square: '/images/thumbnails/wild_spin_square.png',
            vertical: '/images/thumbnails/wild_spin_vertical.png',
            horizontal: '/images/thumbnails/wild_spin_horizontal.png',
        },
    },
    {
        id: 'game-3',
        title: 'Fortune Falls',
        status: 'DOWN',
        provider: {
            id: 'provider-3',
            name: 'LuckyDev',
        },
        thumbnail: {
            square: '/images/thumbnails/fortune_falls_square.png',
            vertical: '/images/thumbnails/fortune_falls_vertical.png',
            horizontal: '/images/thumbnails/fortune_falls_horizontal.png',
        },
    },
    {
        id: 'game-4',
        title: 'Jungle Jam',
        status: 'LIVE',
        provider: {
            id: 'provider-4',
            name: 'GreenSpin',
        },
        thumbnail: {
            square: '/images/thumbnails/jungle_jam_square.png',
            vertical: '/images/thumbnails/jungle_jam_vertical.png',
            horizontal: '/images/thumbnails/jungle_jam_horizontal.png',
        },
    },
    {
        id: 'game-5',
        title: 'Ocean Riches',
        status: 'LIVE',
        provider: {
            id: 'provider-5',
            name: 'DeepBlue',
        },
        thumbnail: {
            square: '/images/thumbnails/ocean_riches_square.png',
            vertical: '/images/thumbnails/ocean_riches_vertical.png',
            horizontal: '/images/thumbnails/ocean_riches_horizontal.png',
        },
    },
    {
        id: 'game-6',
        title: 'Dragon’s Gold',
        status: 'TEMP_UNAVAILABLE',
        provider: {
            id: 'provider-6',
            name: 'FireForge',
        },
        thumbnail: {
            square: '/images/thumbnails/dragons_gold_square.png',
            vertical: '/images/thumbnails/dragons_gold_vertical.png',
            horizontal: '/images/thumbnails/dragons_gold_horizontal.png',
        },
    },
    {
        id: 'game-7',
        title: 'Haunted Reels',
        status: 'DOWN',
        provider: {
            id: 'provider-7',
            name: 'GhostSpinners',
        },
        thumbnail: {
            square: '/images/thumbnails/haunted_reels_square.png',
            vertical: '/images/thumbnails/haunted_reels_vertical.png',
            horizontal: '/images/thumbnails/haunted_reels_horizontal.png',
        },
    },
    {
        id: 'game-8',
        title: 'Mega Safari',
        status: 'LIVE',
        provider: {
            id: 'provider-8',
            name: 'SafariSoft',
        },
        thumbnail: {
            square: '/images/thumbnails/mega_safari_square.png',
            vertical: '/images/thumbnails/mega_safari_vertical.png',
            horizontal: '/images/thumbnails/mega_safari_horizontal.png',
        },
    },
    {
        id: 'game-9',
        title: 'Neon Nights',
        status: 'TEMP_UNAVAILABLE',
        provider: {
            id: 'provider-9',
            name: 'RetroPlay',
        },
        thumbnail: {
            square: '/images/thumbnails/neon_nights_square.png',
            vertical: '/images/thumbnails/neon_nights_vertical.png',
            horizontal: '/images/thumbnails/neon_nights_horizontal.png',
        },
    },
    {
        id: 'game-10',
        title: 'Frozen Fortunes',
        status: 'DOWN',
        provider: {
            id: 'provider-10',
            name: 'IcePeak',
        },
        thumbnail: {
            square: '/images/thumbnails/frozen_fortunes_square.png',
            vertical: '/images/thumbnails/frozen_fortunes_vertical.png',
            horizontal: '/images/thumbnails/frozen_fortunes_horizontal.png',
        },
    },
];

export const GAME_DIRECTORIES: GameCategory[] = [
    {
        id: 'promoted',
        type: 'default',
        name: 'Promoted Games',
        description: 'Newely releasted games in your region',
        limit: 3,
        layout: 'horizontal',
        gameIds: ['game-2', 'game-1', 'game-3', 'game-7', 'game-9'],
        enableSubpage: true,
    },
    {
        id: 'favourites',
        type: 'favourties',
        name: 'Favourites',
        description: 'Collection of your favourite games',
        limit: 4,
        layout: 'square',
        gameIds: [],
        enableSubpage: true,
    },
    {
        id: 'new-releases',
        type: 'default',
        name: 'New Releases',
        description: 'Newely releasted games in your region',
        limit: 4,
        layout: 'square',
        gameIds: ['game-2', 'game-1', 'game-3', 'game-7', 'game-9'],
        enableSubpage: true,
    },
    {
        id: 'all-games',
        type: 'default',
        name: 'All Available Games',
        description: 'All games available on our platform to play',
        limit: 10,
        layout: 'square',
        gameIds: [
            'game-1',
            'game-2',
            'game-3',
            'game-4',
            'game-5',
            'game-6',
            'game-7',
            'game-8',
            'game-9',
            'game-10',
        ],
        enableSubpage: false,
    },
];
