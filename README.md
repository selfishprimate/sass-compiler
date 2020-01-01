# A Gulp powered SASS Compiler for Visual Studio.

## How to use the compiler?

###1. You must have Node.js installed on your local computer. If not, you can download it by using the following link: https://nodejs.org/en/ Be sure to install the LTS version of Node.js, otherwise you might have some problems with running Gulp.


###2. You must have Gulp installed globally on your local computer. To install Gulp, open your terminal window and copy and paste "npm install gulp-cli -g" command and hit the enter.

For Unix based systems like MacOs there can be some security issues when trying to install Gulp globally. So, use the "sudo" flag in the beginning of the command: 
		
	$ sudo npm install gulp-cli -g



###3. When your terminal window is open target the folder that the gulpfile.js, package.json and package-lock.json files are in. In this case the path must look like this: 

	$ cd C:\Projects\2018\trunk\main\Turna\Source\Apps\Presentation\Web



###4. When you're in the folder try to run the command below (for MacOs users "sudo" flag can be helpful if some security issues occurs):

	$ npm install

This command will install all the dependencies that Gulp needs and will generate node_modules folder inside the root folder.



###5. Now, if everything went good so far you can run the following command to compile all the SCSS files into CSS.

	$ gulp sass			
	
This command will only start the compiler, not the watcher. It will compile all the SCSS files into CSS files with the same name as the SCSS files.

To run both the compiler and the watcher use the command below:

	$ gulp watch

