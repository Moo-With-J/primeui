if(!xtag.tags['p-dropdown']) {

    xtag.register('p-dropdown', {

        accessors: {
            name: {
                attribute: {}
            },
            effect: {
                attribute: {}
            },
            effectspeed: {
                attribute: {}
            },
            filter: {
                attribute: {
                    boolean: true
                }
            },
            filtermatchmode: {
                attribute: {}
            },
            casesensitivefilter: {
                attribute: {
                    boolean: true
                }
            },
            filterfunction: {
                attribute: {}
            },
            scrollheight: {
                attribute: {}
            },
            appendto: {
                attribute: {}
            },
            onchange: {
                attribute: {}
            }
        },

        lifecycle: {
            created: function() {
                var element = $(this),
                $this = this;
        
                element.children('option').wrapAll('<select></select>');
                this.xtag.select = element.children('select');
                
                if(this.name) {
                    this.xtag.select.attr('name', this.name);
                }
                
                this.xtag.select.puidropdown({
                    effect: this.effect,
                    effectSpeed: this.effectspeed,
                    filter: this.filter,
                    filterMatchMode: this.filtermatchmode||'startsWith',
                    caseSensitiveFilter: this.casesensitivefilter,
                    filterfunction: this.filterfunction,
                    scrollHeight: this.scrollheight ? parseInt(this.scrollheight) : 200,
                    appendTo: this.appendto||'body',
                    change: this.onchange ? function(event) {PUI.executeFunctionByName($this.onchange, event);} : null
                });
            }
        },

        methods: {
            
        }
        
    });
    
}