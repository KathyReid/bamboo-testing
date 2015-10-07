module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        less: {
            production: {
                options: {
                    compress: false
                },
                files: {
                    "temp/css/des-ui-framework-base.css": "des-ui-framework-base.less"
                }
            }
        },

        copy: {
            main: {
                files: [
                    {   src: "less/des-colours-base.less", dest: "dist/less/des-colours-base.less" },
                    {   src: "less/des-fonts-base.less", dest: "dist/less/des-fonts-base.less" },
                ],
            },
        },

        lessToSass: {
            convert: {
                files: [{
                    expand: true,
                    cwd: "less/",
                    src: ['*.less'],
                    ext: ".scss",
                    dest: "dist/scss"
                }]
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