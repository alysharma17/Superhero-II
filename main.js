var c=new fabric.Canvas("mycanvas");
var hero_x=10;
var hero_y=10;
var hero_object="";
hero_image_width='50';
hero_image_height='50';
hero_image_object="";
function hero() {
fabric.image.fromURL("", function(img){
hero_object=img;
hero_object.scaleToWidth(150);
hero_object.scaleToHeight(150);
hero_object.set({
    top:hero_y, left:hero_x
});
c.add(hero_object);
})


function add_image(get_image) {
    fabric.image.fromURL(get_image, function(img) {
hero_image_object=img;
hero_image_object.scaleToWidth(hero_image_width);
hero_image_object.scaleToHeight(hero_image_height);
heero_image_object.set({
    top:hero_y, left:hero_x
})
c.add(hero_image_object);
     
    window.addEventListener('keydown', key_down);
    function key_down(e) {
        var keypress=e.keyCode;
        if (keypress=='70') {
    add_image('https://drive.google.com/file/d/1RjtrVFlLkNwDUGwQHSjY2WAJOEFjMjsE/view?usp=sharing');
        }
        if (keypress=='66') {
            add_image("https://drive.google.com/file/d/1nI4k5m6r52xSbRUack7TbIa_U8YvzUt9/view?usp=sharing");
        }
        if (keypress=='76') {
    add_image("https://drive.google.com/file/d/1Q15-IsRGM2YI-9yHj1kOU_EsHYGYmyKu/view?usp=sharing");
 
        }
        if (keypress=='82') {
            add_image("https://drive.google.com/file/d/1JGZlMGfmfzmBiKHvoeeaYsOvJZ96LA88/view?usp=sharing");
        }
        if (keypress=='72') {
            add_image("https://drive.google.com/file/d/1hNsjZZWyHXhN0f4yOLjqRNlcB0YpiyNi/view?usp=sharing");
        }
        if (keypress=='89') {
            add_image("yellow_wall.png");
        console.log("y");
        }
        if (keypress=='68') {
            add_image("dark_green.png");
            console.log("d");
        }
        if (keypress=='85') {
            add_image("unique.png");
            console.log("u");
        }
        if (keypress=='67') {
            add_image("cloud.jpg");
            console.log("c");
        }
        if (keypress=='38') {
            up();
            console.log("You just pressed the up arrow key");
        }
        if (e.shiftKey==true && keypress=='80') {
            hero_image_width=hero_image_width+10;
           hero_image_height=hero_image_height+10;
            document.getElementById("current_width").innerHTML=hero_image_width;
            document.getElementById("current_height").innerHTML=hero_image_height;
        }
        if (e.shiftKey==true && keypress=='77') {
            hero_image_height=hero_image_height-10;
            hero_image_width=hero_image_width-10;
            document.getElementById("current_width").innerHTML=hero_image_width;
            document.getElementById("current_height").innerHTML=hero_image_height;
        }