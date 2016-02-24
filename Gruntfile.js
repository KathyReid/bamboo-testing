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
                    "temp/css/des-base-variables.css": "app/less/des-base-variables.less"
                }
            }
        },

        // Copy all less source code, fonts and libraries to the distribution folder
        copy: {
                    
            // Create a copy of the less files in the 'temp' folder. These are then
            // modified with the 'replace' task and then used to compile the sass versions 
            // of the source files
            styles: {
                files: [
                    {   expand: true, cwd: "app/less", src: ["**"], dest: "dist/less" },
                    {   expand: true, cwd: "app/less", src: ["**"], dest: "temp/less" },
                ],
            },
            fonts: {
                files: [
                    {   expand: true, cwd: "app/fonts", src: ["**"], dest: "dist/fonts/" },
                ],
            },
            images: {
                files: [
                    {   expand: true, cwd: "app/img", src: ["**"], dest: "dist/img/" },
                ],
            },
        },
        
        // Copies distribution files from the bower_components folder into the dist folder
        // Any changes to packages will require this list to be manually changed
        // accordingly as there is no fully automated way to copy across the
        // distribution files
        bowercopy: {
            options: {
                destPrefix: "app/fonts/",
            },
            fonts: {
                files: {
                    "open-sans": "open-sans-fontface",
                    "font-awesome": "font-awesome"
                }
            },
        },
        
        // Clean the distribution folder before beginning
        // to compile the project
        clean: {
            dist: ["dist"],
            temp: ["temp"]
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

        // Convert the individual Less files to Sass for distribution
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
    grunt.loadNpmTasks("grunt-text-replace");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-notify");
    grunt.loadNpmTasks("grunt-bowercopy");
    grunt.loadNpmTasks("grunt-contrib-clean");

    // Default tasks
    grunt.task.run("notify_hooks");
    
    // Default task for development
    grunt.registerTask(
        "default",
            [
                "clean:temp",
                "less",
                "copy",
                "replace",
                "lessToSass",
                "watch"
            ]
    );
    
    // Updates the font libraries from the 'bower_components' folder
    grunt.registerTask(
        "updateLibraries", 
            [
                "bowercopy"
            ]
    );
    
    // Performs all tasks to prepare for publishing
    grunt.registerTask(
        "publish", 
            [
                "clean:dist",
                "clean:temp",
                "bowercopy",
                "less",
                "copy",
                "replace",
                "lessToSass",
            ]
    );

    
};