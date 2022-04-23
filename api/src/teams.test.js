const {getTeams} = require('./teams');
const getSheetValues = require('./sheets-api');

jest.mock('./sheets-api');

test('It successfully loads teams', async () => {
  getSheetValues.mockResolvedValueOnce([
    ['Girls Class'],
    [
      ['Team B'],
      ['Team A'],
    ],
    ['Boys Class'],
    [
      ['Team C'],
      ['Team D'],
    ],
  ]);
  const teams = await getTeams();
  expect(getSheetValues).toHaveBeenCalled();
  expect(teams).toEqual([
    {
      classifier: 'Girls Class',
      teams: [
        { name: 'Team A' },
        { name: 'Team B' },
      ],
    },
    {
      classifier: 'Boys Class',
      teams: [
        { name: 'Team C' },
        { name: 'Team D' },
      ],
    },
  ]);
});
