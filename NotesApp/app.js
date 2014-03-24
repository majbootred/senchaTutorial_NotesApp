Ext.application({
    name: "NotesApp",

    models: ["Note"],
    stores: ["Notes"],
    controllers: ["Notes"],
    views: ["NotesList", "NotesListContainer", "NoteEditor"],

    launch: function () {

        console.log("app.js launched");

        var notesListContainer = {
            xtype: "noteslistcontainer"
        };

        var noteEditor = {
            xtype: "noteeditor"
        };       

        Ext.Viewport.add(notesListContainer,noteEditor);
    }
});