module.exports = function(grunt){
    grunt.initConfig({
grunt.loadNpmtasks("grunt-contrib-less");

    grunt.instConfig({
        less: {
            style:{
                files:{
                    "css/style.css": "less/style.less"
                }
            }

        }

    });
};