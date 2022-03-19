const supertest = require('supertest');
const {cupService} = require('./index');
const getSheetValues = require('./sheets-api');

jest.mock('./sheets-api');

describe('/api/v1', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('It can get teams', async () => {
    getSheetValues.mockResolvedValueOnce([
      [
        ['Team A'],
      ],
      [
        ['Team B'],
      ],
    ]);
    const response = await supertest(cupService)
      .get('/api/v1/teams')
      .expect(200)
      .expect('Content-Type', /json/);
    expect(response.body).toEqual([
      {
        classifier: 'Flickor födda 2008',
        teams: [
          { name: 'Team A' },
        ],
      },
      {
        classifier: 'Pojkar födda 2008',
        teams: [
          { name: 'Team B' },
        ],
      },
    ]);
    expect(getSheetValues).toHaveBeenCalled();
  });

  test('It can get games', async () => {
    getSheetValues.mockResolvedValueOnce([
      [
        ['09:00', '09:40', 'Field 1', 'Team C', 'Team D', 'FALSE', 'FALSE', '', ''],
      ],
      [],
    ]);
    const response = await supertest(cupService)
      .get('/api/v1/games')
      .expect(200)
      .expect('Content-Type', /json/);
    expect(response.body).toMatchObject([
      {
        classifier: 'Flickor födda 2008',
        games: [
          expect.objectContaining({
            homeTeam: 'Team C',
            awayTeam: 'Team D',
          })
        ],
      },
      {
        classifier: 'Pojkar födda 2008',
        games: [],
      },
    ]);
    expect(getSheetValues).toHaveBeenCalled();
  });
});