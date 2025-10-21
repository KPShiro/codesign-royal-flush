import { LobbySectionEntity } from '@src/features/lobby/api/lobby/get-lobby-sections';
import { JackpotEntity } from '@src/features/lobby/api/jackpots/get-jackpots';
import { GameEntity } from '@src/features/lobby/api/games/get-available-games';

export const GAMES: GameEntity[] = [
    {
        id: 'game-1',
        title: 'Mystery Quest',
        status: 'TEMP_UNAVAILABLE',
        supportedCoinsTypes: ['GC', 'SC'],
        provider: {
            id: 'provider-1',
            name: 'Quest Games',
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
        status: 'LIVE',
        label: 'Exclusive',
        supportedCoinsTypes: ['GC', 'SC'],
        provider: {
            id: 'provider-2',
            name: 'Spin Masters',
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
        status: 'LIVE',
        label: 'Exclusive',
        supportedCoinsTypes: ['GC', 'SC'],
        provider: {
            id: 'provider-3',
            name: 'Lucky Dev',
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
        status: 'DOWN',
        supportedCoinsTypes: ['GC', 'SC'],
        provider: {
            id: 'provider-4',
            name: 'Green Spin',
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
        supportedCoinsTypes: ['GC', 'SC'],
        provider: {
            id: 'provider-5',
            name: 'Deep Blue',
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
        status: 'LIVE',
        supportedCoinsTypes: ['GC', 'SC'],
        provider: {
            id: 'provider-6',
            name: 'Fire Forge',
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
        status: 'LIVE',
        supportedCoinsTypes: ['GC', 'SC'],
        provider: {
            id: 'provider-7',
            name: 'Ghost Spinners',
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
        supportedCoinsTypes: ['GC', 'SC'],
        provider: {
            id: 'provider-8',
            name: 'Safari Soft',
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
        status: 'LIVE',
        supportedCoinsTypes: ['GC', 'SC'],
        provider: {
            id: 'provider-9',
            name: 'Retro Play',
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
        status: 'LIVE',
        supportedCoinsTypes: ['GC', 'SC'],
        provider: {
            id: 'provider-10',
            name: 'Ice Peak',
        },
        thumbnail: {
            square: '/images/thumbnails/frozen_fortunes_square.png',
            vertical: '/images/thumbnails/frozen_fortunes_vertical.png',
            horizontal: '/images/thumbnails/frozen_fortunes_horizontal.png',
        },
    },
];

export const FAVOURITE_GAMES: GameEntity['id'][] = [GAMES[0].id, GAMES[2].id];

export const JACKPOTS: JackpotEntity[] = [
    {
        id: 'jackpot-0',
        type: 'GRAND',
        coinType: 'GC',
        gamesIds: [GAMES[1].id],
        value: 7_521_902,
    },
    {
        id: 'jackpot-1',
        type: 'MAJOR',
        coinType: 'GC',
        gamesIds: [GAMES[1].id],
        value: 42_000,
    },
    {
        id: 'jackpot-2',
        type: 'MINOR',
        coinType: 'GC',
        gamesIds: [GAMES[1].id],
        value: 2_137,
    },
    {
        id: 'jackpot-3',
        type: 'MAJOR',
        coinType: 'GC',
        gamesIds: [GAMES[6].id],
        value: 500_000,
    },
];

export const LOBBY_SECTIONS: LobbySectionEntity[] = [
    {
        id: 'promoted',
        type: 'GAMES_DIRECTORY',
        variant: 'DEFAULT',
        name: 'Promoted Games',
        gameIds: [GAMES[1].id],
        isVisible: true,
    },
    {
        id: 'new-releases',
        type: 'GAMES_DIRECTORY',
        variant: 'PROMOTED',
        name: 'New Releases',
        gameIds: [GAMES[2].id, GAMES[0].id, GAMES[6].id],
        isVisible: true,
    },
    {
        id: 'all-games',
        type: 'GAMES_DIRECTORY',
        variant: 'DEFAULT',
        name: 'All Games',
        gameIds: [...GAMES.sort((a, b) => a.title.localeCompare(b.title)).map((game) => game.id)],
        isVisible: true,
    },
];
