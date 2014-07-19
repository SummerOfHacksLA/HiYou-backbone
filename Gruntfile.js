'use strict';

module.exports = function(grunt){

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		compass: {
			compile: {
				options: {
					config: 'config.rb',
					force: true,
				},
			}
		},
		watch: {
			css: {
				files: ['public/styles/**/*.scss'],
				tasks: ['compass']
			},
			options: {
				livereload: true,
			}
		},
		clean: {
		    dist: ['public/.tmp', 'dist/*'],
		    server: 'public/.tmp'
		},
		connect: {
		    options: {
		        port: 9000,
		        hostname: 'localhost',
		        livereload: true,
		        open: true,
		    },
		    server: {
		        options: {
		            middleware: function(connect) {
		                return [
		                    connect.static('public')
		                ];
		            }
		        }
		    },
		},


	});

	grunt.registerTask('server', [
		'clean:server',
		'compass',
		'connect:server',
		'watch'
	]);

	grunt.registerTask('test', [
	]);

	grunt.registerTask('build', [
	]);

	grunt.registerTask('default', [
		'server'
	]);

};