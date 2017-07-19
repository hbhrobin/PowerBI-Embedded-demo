const $ = require("jquery");
const pbi = require('powerbi-client');
const powerbi = new pbi.service.Service(pbi.factories.hpmFactory, pbi.factories.wpmpFactory, pbi.factories.routerFactory)

//
// console.log(pbi)

$(()=> {
  // Read embed application token from textbox
  var txtAccessToken = 'H4sIAAAAAAAEAB2Wta7FCpJF_-WlHskMZ6QOzMzszMzMbs2_z-3OK6mlqr32v_-x0neY0-Kf__0nwimGqWo4ItrdpihnrXE1hGJeSRCAeVKY-CWOd_448i7eG67tNx6vKwhzjYgNrgDVJO4b_3yHTaRTexcSYFSWnFOIAeiQks-nalFckf-96GtEOutINdOLDHwje2TxVU70U0vBB2v89Oey74G7lyqRVOTxn5fSXvU30kWRNZQkkJrCq5GlsoE_iVMSHAVjBEkY8S5JJOiwUJrWQ2I-gNiVt2mnp2PwDMsVNZT_fI0gVkkst8DtnvXpbLd-O8Um7vmW0OeQlO2i6TVCYQ0WyOCqdYxCkEPtyOSPzdAzjyFe4vsv1Y7zniNrq2xtITF_j3El5i8323JP6Hx5KjRt_ITri5NNMJlqEaaY3zROoTX6k84SaeBZLaNqU_IhU1rNUExCrzJC6unbVOuQnhPonSR6OwmhtCth3mY6ewoTEbCjBnqey3iGpta4CtYDeBCMnKPMT56Oy8NkPc9W3rcWauMdrjhGBJdknteEAskuOnA2smxFz2gZ1SsCNqoSZYP9ORsy6HY82a-K1DDzVLnl8Y2ybCYXM1HE7487j-Dt3A0RfDcE_JpmsHaQYEZ8asaEpIXdGw-ty4hBMNZGfveVWvgPtbvB-XyU39X0j_MyAYlxHJo0NN0eNXP9VejdbqMauHB3QR5VnVfiHIP1e4uMms6mhXECsWd1I8504YtfVTwv7-c_rwv8LR0eBqXmke6U_StRIeZtYoxbZ1nMZZxyo7-y2TPtz5SF3_eJGqzh6A0OtxTC0jqkk0UnNwSm1NPeOcgTFYFsSdZcnfaE7Gq30givc52oiuKbVrxQJztitNAftt11DXWbGes1zh7Ylo3oSE03zGwoLkbb8uY3J-3mDn2syS0R8bl3I6Hhw0-JChcgbBEKFdp_G6Yb3H0FjhC_7adkJaRXnw0fUAlQTO9shDTcZYyRkMVdChTquD3vTsZIWiJiHzxXzWx1uUoQEFjWjPkxqksUIN25jlFX4xsxRyNkowzD25bYRfwUc044Hg5ahr_rcbZEcuI91gk_QxiPP5Xym0oKlJitQA1FirC8dd0koEIn_lVoDuz5Ya_eQlIzVTPOalRp1a5dWXxIGWQz7_7Y22lA1i28Ws0VgvCLd9Vz49V7MyAHQLcTuRslqrwovcfTapnYthxgg-R3Q6ua-vAaKqCAnmYW0JsgdB0b1KyfzVeM4oxE41ATIc8NaWrNHaDm9Cl1JifNaclih9wupe8pONFaI45Fb9K1S6mPNmAPEkpM5E73ED8gpcwvRFG4gkVYZE_MtdAeUZCK0FcmlmuqQB98xZJtZrRwhXLux8VyzGHM4IaMzxjo6MygYxenKKoIGzRQrPlo8OIEpRBwYZmyEYIeWt33is6bMVZS9JTBdOhEfyBLTN2ZXH3wru1k0ZDpgPpmBqGP7ysvC5RDPUpRkLR8e1W0IfbXNIrVCFdN83mfXZbT5iJ7trEAqHTLI4Esaobm6rSaBP91OAD143iL6JOACup3-U1M3HRYMMQMRlRlhSqwctYmbryZF72KvDqOzWwX0bhMZuMoDrqLyrNhpA8XGCsstaeoyZTPVTd_87X_ts2uB-y70MqU-4SmLk91YPSklRZpz6kuUrbUnW9TwIwUJUytjUjFvZmlKw4DreUr2UB7V6ivyERb4G8MeRJtBScIHBhpFCW6tSOplh-NR1hKWeuk3gWf_jbR0BMD4uDxsBOspDcOIn5nt0s8WwpkWUYFhWTvKk_qmEVJDS-2P1bXixj4IDBeE_zsUbIIub4l0mbXDX1DSy9jQUOhupDNM3pRsJBiKNcUsBtIQX1-agtRdaUF9_K9Xa4Db9CMkZnLivISV3Whf5EEOXM6oOl1wvw-fxpaCmh5I56dyalvSI1YNAGYPzYLeXiltJ8k1BKkAaW-xbvBmM-NW-T4kkuFh1Q8ZjjC9hy8axpgV5U5YeWy2tT1_eIjPAE8iXYyly2zE2kTvJtoClG98SMnq2k1WxekCr-s6Z4O_vvGim6KFnnErmy8R8QtYjzZH9cscgKVxpxZLo0YJx-XQw10_bPtEi0NBCfOYLvJHoIOR3-4IBI8__zPP-z2Lsefmd6_OtDxOdB3l0liI6sr7V_eoP5W07lPPj1pk-U1oICbAwVvz6u2_IqCexlmK3ksyJEsZNIRhq2n698HaJizlyCqRQBRwwyX1-cISHTb8mAroBxzhPVSyAzdl2hrQbnbTRaMM5AdW2nrQGQj01e8rqzPAExinKgA4eY1Pc7jkXTa8QzqwlRpYfRfwrNnBF1nmRfl8exWHI5cljt3MJ0ew3tewBVjNheAvYVvVsFOLT2XvwSx8QPsmVvQh3ov4XAP12QRXg9PB5DCXPJXdVadSFIQal-HMK2llOpHm4bEFiR_ofIX7uksGWkTQTBAqDmDXZm_Kdtt_GDluJqk5aLuIjJAx8iBqP_1r_9gfpem3OTgj_LSM79haisf1SK7mmssKhHh_u-U29bT355b-TcmUVW6BEo7oNNToTge12xCCMWC6VNQuJV2YyWe-l4BQq0HNTEjJ58e0CHedD-tOWOD9ApG3HjU6n2yodMSe0i0JqDc0yBoFdiqaSsklDMeRQ33PFCTxsSsLQPvDvSei-SWLCGwzWYodM6t-T5ERgBwqa4FY-jlHX_Xgzh9ULrolwpojhbPjHTB85JEPRrr5JQl2cFKJuVLZnpdxCq-q_TPffkHyBmAO_2pbDMAtSqZP0PZC7slStaolPJx0Deu1fSuPHssFFuomXt0XrzOf8WprOu5EFIF-H3Xnw_C7efc3_dWdHI5Out3qe77YctbwYdTjm2gnT9o4jvyE0P0sQzW1kP_Yf6__wfPFnhoAgsAAA=='

  // Read embed URL from textbox
  var txtEmbedUrl = 'https://app.powerbi.com/reportEmbed?reportId=bd851208-5592-4e3e-ba72-5cfdfc39f41c&groupId=9166cf8d-d5fc-405e-bdc7-47e414da08fe';

  // Read report Id from textbox
  var txtEmbedReportId = 'bd851208-5592-4e3e-ba72-5cfdfc39f41c'

  // Get models. models contains enums that can be used.
  //var models = window['powerbi-client'].models;

  // We give All permissions to demonstrate switching between View and Edit mode and saving report.
  const models = pbi.models;
  var permissions = models.Permissions.All;


  // Embed configuration used to describe the what and how to embed.
  // This object is used when calling powerbi.embed.
  // This also includes settings and options such as filters.
  // You can find more information at https://github.com/Microsoft/PowerBI-JavaScript/wiki/Embed-Configuration-Details.
  var config = {
      type: 'report',
      accessToken: txtAccessToken,
      embedUrl: txtEmbedUrl,
      id: txtEmbedReportId,
      permissions: permissions,
      settings: {
          filterPaneEnabled: true,
          navContentPaneEnabled: true
      }
  };

  // Get a reference to the embedded report HTML element
  var reportContainer = $('#report')[0];

  // Embed the report and display it within the div container.
  var report = powerbi.embed(reportContainer, config);

  // Report.off removes a given event handler if it exists.
  report.off("loaded");

  // Report.on will add an event handler which prints to Log window.
  report.on("loaded", function() {
      Log.logText("Loaded");
  });

  report.on("error", function(event) {
      Log.log(event.detail);

      report.off("error");
  });

  report.off("saved");
  report.on("saved", function(event) {
      Log.log(event.detail);
      if(event.detail.saveAs) {
          Log.logText('In order to interact with the new report, create a new token and load the new report');
       }
   });

})
