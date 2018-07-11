class SearchModelSingleton {
    searchvalue: any
    currentpage: any
    
    constructor() {
        this.searchvalue = m.prop('');
        this.currentpage = m.prop(0);
    }
    // pathvalue: m.prop(''),
    // searchresults: m.prop([]),

    // // Used for knowing which filters have been currently selected by the user
    // facetfilters: m.prop({}),

    // // Text filters for select filters
    // langfiltertext: m.prop(''),
    // ownerfiltertext: m.prop(''),
    // repofiltertext: m.prop(''),
    // sourcefiltertext: m.prop('')
}

declare var m: any;

export let SearchModel = new SearchModelSingleton();