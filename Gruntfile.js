module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        // Compile the control Less file to make sure there are no errors
        // The resulting css isn't required so it is placed in a
        // temp folder
        less: {
            test: {
                options: {
                    compress: false
                },
                files: {
                    "temp/css/des-base-framework.css": "des-base-framework.less"
                }
            }
        },

        // Copy the Less components into the distribution folder
        copy: {
            main: {
                files: [
                    {   src: "less/des-colours-base.less", dest: "dist/less/des-colours-base.less" },
                    {   src: "less/des-fonts-base.less", dest: "dist/less/des-fonts-base.less" },
                ],
            },
        },

        // Convert the individual Less files to Sass
        lessToSass: {
            convert: {
                files: [{
                    expand: true,
                    cwd: "dist/less/",
                    src: ['*.less'],
                    ext: ".scss",
                    dest: "dist/scss"
                }],
            }
        }
    });

    grunt.loadNpmTasks("grunt-less-to-sass");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-copy");

    // Load all tasks
    // Compiles and packages everything
    grunt.registerTask(
        "default",
            [
                "less",
                "copy",
                "lessToSass"
            ]
    );
};