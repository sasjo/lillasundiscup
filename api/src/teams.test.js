const {getTeams} = require('./teams');
const getSheetValues = require('./sheets-api');

jest.mock('./sheets-api');

test('It successfully loads teams', async () => {
  getSheetValues.mockResolvedValueOnce([
    [
      ['Team B'],
      ['Team A'],
    ],
    [
      ['Team C'],
      ['Team D'],
    ],
  ]);
  const teams = await getTeams();
  expect(getSheetValues).toHaveBeenCalled();
  expect(teams).toEqual([
    {
      classifier: 'Flickor födda 2008',
      teams: [
        { name: 'Team A' },
        { name: 'Team B' },
      ],
    },
    {
      classifier: 'Pojkar födda 2008',
      teams: [
        { name: 'Team C' },
        { name: 'Team D' },
      ],
    },
  ]);
});
