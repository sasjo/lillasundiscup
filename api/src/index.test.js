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
      ['Girls Class'],
      [
        ['Team A'],
      ],
      ['Boys Class'],
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
        classifier: 'Girls Class',
        teams: [
          { name: 'Team A' },
        ],
      },
      {
        classifier: 'Boys Class',
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
        ['2022-05-14'],
      ],
      [
        ['09:00', '09:40', 'Field 1', 'Team C', 'Team D', 'FALSE', 'FALSE'],
      ],
      [
        ['2022-05-15'],
      ],
      [],
    ]);
    const response = await supertest(cupService)
      .get('/api/v1/games')
      .expect(200)
      .expect('Content-Type', /json/);
    expect(response.body).toMatchObject([
      {
        date: '2022-05-14',
        games: [
          expect.objectContaining({
            homeTeam: 'Team C',
            awayTeam: 'Team D',
          })
        ],
      },
      {
        date: '2022-05-15',
        games: [],
      },
    ]);
    expect(getSheetValues).toHaveBeenCalled();
  });
});
