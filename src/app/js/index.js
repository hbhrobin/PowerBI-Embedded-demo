const $ = require("jquery");
const pbi = require('powerbi-client');
const powerbi = new pbi.service.Service(pbi.factories.hpmFactory, pbi.factories.wpmpFactory, pbi.factories.routerFactory)

const Log = function () {
    return {
        log: function (content) {
            console.log(content);
        },
        logText: function (content) {
            console.log(content);
        }
    };
}();

$(() => {
    //should specify a real token
    var txtAccessToken = 'xxxxxxxx'

    //should specify a real report id
    var txtEmbedReportId = 'yyyyyyy'

    var txtEmbedUrl = 'https://embedded.powerbi.cn/appTokenReportEmbed?reportId=' + txtEmbedReportId

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
        tokenType: models.TokenType.Embed,
        accessToken: txtAccessToken,
        embedUrl: txtEmbedUrl,
        id: txtEmbedReportId,
        viewMode: models.ViewMode.Edit,
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
    report.on("loaded", function () {
        Log.logText("Loaded");
    });

    report.on("error", function (event) {
        Log.log(event.detail);

        report.off("error");
    });

    report.off("saved");
    report.on("saved", function (event) {
        Log.log(event.detail);
        if (event.detail.saveAs) {
            Log.logText('In order to interact with the new report, create a new token and load the new report');
        }
    });

})
