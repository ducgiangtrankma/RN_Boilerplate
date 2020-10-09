const importURL =
  'http://123.25.15.73:8764/warehouse/v1/import-histories/2c9c808474a626930174b0fb67410001/tank-import-histories';
async function upLoadImport(accessToken, items) {
  //   console.log('Api data', items);
  //   console.log('Api toke', accessToken);
  try {
    let response = await fetch(importURL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + accessToken,
        'Content-Type': 'application/json',
      },
      body: items,
    });
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(`Error is : ${error}`);
  }
}

export {upLoadImport};
