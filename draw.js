var svg = document.getElementById("vimage");
var xmlns = "http://www.w3.org/2000/svg";
var fillStyle = '#cc99ff'

var rid;

var animateCircle = function(){
    var r = 1;
    var changeX = 1;
    window.cancelAnimationFrame(rid);    
    clearSVG();

    var drawCircle = function(){
        var c = document.createElementNS( xmlns, "circle" );    
        c.setAttribute( "cx", 250);
        c.setAttribute( "cy", 250);
        c.setAttribute( "fill", fillStyle );
        c.setAttribute( "r", r );
        svg.appendChild( c );
        rid = window.requestAnimationFrame( updateCircle );
    }   
    
    var updateCircle = function( ){
        var c = svg.lastChild;
        c.setAttribute( "r", r );
        if( r == 250 ){
            changeX *= -1;
        }
        if( r == 0 ){
            changeX *= -1;
        }
        r += changeX;
        rid = window.requestAnimationFrame( updateCircle );
    }
    drawCircle();
}

var animateShape = function(){
    var changeX = 1;
    var changeY = 1;
    var width = svg.getBoundingClientRect().width;
    var height = svg.getBoundingClientRect().height;
    var x = Math.random() * (width - 100);
    var y = Math.random() * (height - 50);
    window.cancelAnimationFrame(rid);
    clearSVG();
    var drawShape = function(){        
        //ctx.fillRect( x, y, 100, 50 );
        var i = document.createElementNS( xmlns, "image" );
        i.setAttribute( "height", "50px" );
        i.setAttribute( "width", "100px" );
        i.setAttribute( "href", "pic.png" );
        i.setAttribute( "x", x );
        i.setAttribute( "y", y );
        svg.appendChild( i );
        rid = requestAnimationFrame( updateShape );
    }

    var updateShape = function(){
        var i = svg.lastChild;
        i.setAttribute( "x", x );
        i.setAttribute( "y", y );
        if( x <= 0 || x + 100 >= width ){
            changeX *= -1;
        }
        if( y <= 0 || y + 50 >= height ){
            changeY *= -1;
        }
        x += changeX;
        y += changeY;
        
        rid = requestAnimationFrame( updateShape );
    }
    drawShape();
}

var clearSVG = function(){
    while( svg.lastChild ){
        svg.removeChild( svg.lastChild );
    }
}

var cir = document.getElementById('cir-but');
cir.addEventListener('click', animateCircle);

var stop = document.getElementById('stop-but');
stop.addEventListener('click', function(){
    window.cancelAnimationFrame(rid);
});

var dvd = document.getElementById('dvd-but');
dvd.addEventListener('click', animateShape);

rid = window.requestAnimationFrame( animateCircle );