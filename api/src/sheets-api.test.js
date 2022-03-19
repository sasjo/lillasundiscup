const getSheetValues = require('./sheets-api');

test('It can fetch sheet ranges', async () => {
  const values = await getSheetValues(['Flickor!M3:M']);
  expect(values).not.toHaveLength(0);
});

test('It throws exception for invalid range', async () => {
  await expect(() => getSheetValues(['Invalid!A:D']))
    .rejects.toThrow();
});
