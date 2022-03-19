const { getGames } = require('./games');
const getSheetValues = require('./sheets-api');

jest.mock('./sheets-api');

test('It successfully loads games', async () => {
  getSheetValues.mockResolvedValueOnce([
    [
      ['09:00', '09:40', 'Field 1', 'Team C', 'Team D', 'FALSE', 'FALSE', '', ''],
    ],
    [
      ['09:00', '09:40', 'Field 1', 'Team A', 'Team B', 'TRUE', 'TRUE', '1', '3'],
      ['09:00', '09:40', 'Field 1', 'Team B', 'Team A', 'TRUE', 'FALSE', '0', '0'],
    ],
  ]);
  const games = await getGames();
  expect(getSheetValues).toHaveBeenCalled();
  expect(games).toEqual([
    {
      classifier: 'Flickor födda 2008',
      games: [
        {
          startTime: '09:00',
          endTime: '09:40',
          field: 'Field 1',
          homeTeam: 'Team C',
          awayTeam: 'Team D',
          status: 'pending',
          score: '0 - 0',
        }
      ],
    },
    {
      classifier: 'Pojkar födda 2008',
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
          field: 'Field 1',
          homeTeam: 'Team B',
          awayTeam: 'Team A',
          status: 'started',
          score: '0 - 0',
        }
      ],
    },
  ]);
});
