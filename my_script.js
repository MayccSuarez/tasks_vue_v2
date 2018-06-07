
new Vue({
    el: "#appVue",

    data: {
        tasks: [
           
        ],

        newTask: ""

    },

    methods: {

        addTask: function(){
            this.tasks.push({ item: this.newTask, completed: false });
            this.newTask = ""
        }

    }

});