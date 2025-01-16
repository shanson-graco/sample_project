const globals = require("../globals/globals");

exports.VillageDashboardPage = class VillageDashboardPage{

    constructor(page){
        this.page = page;
        this.baseUrl = globals.urls.VILLAGE_HOMEPAGE_URL;
    }

    async goto(){
        await this.page.goto(this.baseUrl); 
    }
}