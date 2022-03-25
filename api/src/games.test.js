const { getGames } = require('./games');
const getSheetValues = require('./sheets-api');

jest.mock('./sheets-api');

test('It successfully loads games', async () => {
  getSheetValues.mockResolvedValueOnce([
    [
      ['lördag 14 maj']
    ],
    [
      ['09:00', '09:40', 'Field 1', 'Team C', 'Team D', 'TRUE', 'TRUE', '', ''],
    ],
    [
      ['söndag 15 maj']
    ],
    [
      ['09:00', '09:40', 'Field 1', 'Team A', 'Team B', 'TRUE', 'TRUE', '1', '3'],
      ['09:00', '09:40', 'Field 2', 'Team AA', 'Team BB', 'TRUE', 'TRUE', '0', '0'],
      ['09:40', '10:20', 'Field 1', 'Team C', 'Team D', 'TRUE', 'FALSE', '1', '3'],
      ['09:40', '10:20', 'Field 2', 'Team E', 'Team F', 'TRUE', 'FALSE', '0', '0'],
      ['10:20', '11:00', 'Field 1', 'Team G', 'Team H', 'FALSE', 'FALSE', '0', '0'],
      ['10:20', '11:00', 'Field 2', 'Team I', 'Team J', 'FALSE', 'FALSE', '0', '0'],
    ],
  ]);
  const games = await getGames();
  expect(getSheetValues).toHaveBeenCalled();
  expect(games).toEqual([
    {
      date: 'lördag 14 maj',
      games: [
        {
          startTime: '09:00',
          endTime: '09:40',
          field: 'Field 1',
          homeTeam: 'Team C',
          awayTeam: 'Team D',
          status: 'ended',
          score: '0 - 0',
        }
      ],
    },
    {
      date: 'söndag 15 maj',
      games: [
        {
          startTime: '09:00',
          endTime: '09:40',
          field: 'Field 1',
          homeTeam: 'Team A',
          awayTeam: 'Team B',
          status: 'ended',
          score: '1 - 3',
        },
        {
          startTime: '09:00',
          endTime: '09:40',
          field: 'Field 2',
          homeTeam: 'Team AA',
          awayTeam: 'Team BB',
          status: 'ended',
          score: '0 - 0',
        },
        {
          startTime: '09:40',
          endTime: '10:20',
          field: 'Field 1',
          homeTeam: 'Team C',
          awayTeam: 'Team D',
          status: 'started',
          score: '1 - 3',
        },
        {
          startTime: '09:40',
          endTime: '10:20',
          field: 'Field 2',
          homeTeam: 'Team E',
          awayTeam: 'Team F',
          status: 'started',
          score: '0 - 0',
        },
        {
          startTime: '10:20',
          endTime: '11:00',
          field: 'Field 1',
          homeTeam: 'Team G',
          awayTeam: 'Team H',
          status: 'next',
          score: '0 - 0',
        },
        {
          startTime: '10:20',
          endTime: '11:00',
          field: 'Field 2',
          homeTeam: 'Team I',
          awayTeam: 'Team J',
          status: 'next',
          score: '0 - 0',
        }
      ],
    },
  ]);
});
