
PROJECTNAME=primengtest


ng new $PROJECTNAME --createApplication=false  --interactive=false  --strict



cd $PROJECTNAME

ng g library fullcalendar
ng g application test --style=scss --routing=true 

