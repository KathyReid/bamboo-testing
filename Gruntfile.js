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
                    "temp/css/des-base-variables.css": "less/des-base-variables.less"
                }
            }
        },

        // Copy the Less components and fonts into the distribution folder
        // Also do a second copy to a temp folder to change some less syntax to sass
        // before doing the full sass conversion
        // This is done here because lessToSass does not pick up words in file paths
        // e.g. font-awesome/less/font-awesome.less will keep the same file path
        copy: {
            styles: {
                files: [
                    {   expand: true, src: "less/**", dest: "dist/" },
                    {   expand: true, src: "less/**", dest: "temp/" },
                ],
            },
            fonts: {
                files: [
                    {   expand: true, src: "fonts/**", dest: "dist/" },
                ],
            },
            images: {
                files: [
                    {   expand: true, src: "img/**", dest: "dist/" },
                ],
            },
        },

        // Replace any instances of the word 'less' with 'scss' (lessToSass only changes
        // syntax but not words such as those used in a file path
        replace: {
            control: {
                src: ['temp/less/*.less'],
                dest: 'temp/converted/',
                replacements: [{
                    from: 'less',
                    to: 'scss'
                }]
            },
            variables: {
                src: ['temp/less/variables/*.less'],
                dest: 'temp/converted/variables/',
                replacements: [{
                    from: 'less',
                    to: 'scss'
                }]
            }
        },

        // Convert the individual Less files to Sass
        lessToSass: {
            convert: {
                files: [{
                    expand: true,
                    cwd: "temp/converted/",
                    src: ['*.less'],
                    ext: ".scss",
                    dest: "dist/scss/"
                },
                {
                    expand: true,
                    cwd: "temp/converted/variables/",
                    src: ['*.less'],
                    ext: ".scss",
                    dest: "dist/scss/variables/"
                }],
            }
        },

         // Displays an alert message when a compilation error occurs
        notify: {
            less: {
                options: {
                    title: "LESS ERROR",
                    message: "There was a problem compiling your Less"
                }
            },
            packages: {
                options: {
                    title: "JSON ERROR",
                    message: "There was a problem compiling JSON files"
                }
            }
        },

        // Configures notify to only display a message upon errors
        notify_hooks: {
            options: {
                success: true // whether successful grunt executions should be notified automatically
            }
        },

        // Watches for changes to the Less and JavaScript folders
        watch: {
            default: {
                files: ["less/**/*.less", "Gruntfile.js", "bower.json", "package.json"],
                tasks: ["default"],
                options: {
                    nospawn: true,
                    reload: true
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-less-to-sass");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-notify");

    // Default tasks
    grunt.task.run("notify_hooks");

    // Load all tasks
        // Compiles and packages everything
        grunt.registerTask(
            "default",
                [
                    "less",
                    "copy",
                    "replace",
                    "lessToSass",
                    "watch"
                ]
        );
};