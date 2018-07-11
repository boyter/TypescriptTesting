import { SearchModel } from "./SearchModel"

declare var m: any;
declare var _: any;

var SearchPagesComponent = {
    controller: function() {
    },
    view: function(ctrl, args) {
        return m('div.search-pagination', 
            m('ul.pagination', [
                _.map(args.pages, function (res) {
                    return m('li', { class: res == SearchModel.currentpage() ? 'active' : '' },
                        m('a', { onclick: function() { 
                            args.search(res); 
                            window.scrollTo(0, 0);
                        } }, res + 1)
                    )
                })
            ])
        );
    }
}