 
const  express  =  require ( 'express' ) ;
const  http  =  require ( 'http' ) ;
const  path  =  require ( 'ruta' ) ;

 aplicación  const =  express ( ) ;
const  port  =  proceso . env . PUERTO  ||  8080 ;
const  www  =  proceso . env . WWW  ||  './' ;

aplicación . use ( express . static ( __dirname  +  '/ dist / listas' ) ) ;

consola . log ( `servir $ { www } ` ) ;
aplicación . get ( '*' ,  ( req ,  res )  =>  {
  res . sendFile ( ruta . join ( __dirname ) ) ;
} ) ;

 servidor  const =  http . createServer ( aplicación ) ;

servidor . listen ( port ,  ( )  =>  console . log ( `escuchando en http: // localhost: $ { port } ` ) ) ;
