Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    items:{ html:'Defect tracking'},
    launch: function() {
        //Write app code here
        console.log("Some console logging");
    }
});

