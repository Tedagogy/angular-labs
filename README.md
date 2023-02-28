<h1>Running Angular labs</h1>
You may notice that Angular projects contain many different files, 
and that the entire project may be tricky to navigate. Angular is notorious
for this, although the enforcement of separation of concerns
can be beneficial in the long run. All of the files you should be modifying fall
within the src/app folder.
<h2>The instructions for any particular Angular lab will be provided by the landing
page at localhost:4200 once you run a lab via ng serve.</h2>

- you should change directories into your current lab in the terminal to run
the lab project. this can be done with the command 'cd labfolder/labname' such
as cd/L1/components. after you've done this, run the command 'ng serve' in your
terminal to run the app, then head over to localhost:4200 in your browser to
open up the project. To stop the project, run ctrl+c in your terminal. You can
use the command 'cd ..' to move upwards a directory to return to directory
you started in.
- Angular features live-reloading whenever you save a change in the project, so 
stopping the app is only necessary when you wish to move on to the next lab.
- app.component.html is the root html template for the entire project. You will
be modifying it for the first handful of labs.
- the 'components' folder will contain all of the components you should be
modifying.
- the 'components' folder contains 4 files: an html file (for defining the
component template), a .ts file (for writing component code), a .css file (for
styling the component), and a spec.ts file (for component testing). You will
only need to modify the html file and the .ts file (NOT the spec.ts file) when
solving labs.
- the 'app-routing.module.ts' will contain route information when you are
working on routing-related labs.
- the 'services' folder will contain route information when you are working
on service-related labs.

<h2>Angular CLI</h2>
It's worth noting that the projects were generated with the help of the
Angular CLI. When making your own projects, you should NEVER try to manually
copy/paste Angular folders or files, as it relies on a bit of additional 
configuration you'd be likely to get wrong. Instead, rely on the Angular CLI
commands in the terminal:
- ng new {project-name}
- ng generate component {component-name}
- ng generate service {service-name}
- ng serve

ng generate commands can be shortened, for instance
- ng g c components/navbar

will generate a component named "navbar" in the 'components' folder. If
a component is generated in a folder that does not exist, the folder will
be generated.

Practicing Angular independently or writing an Angular project should
be done from scratch in a project you generate yourself.