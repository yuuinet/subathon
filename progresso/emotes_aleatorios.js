const pics = [ 
    'https://cdn.7tv.app/emote/666e63d0ba453b48ddcb7a97/4x.webp', 
    'https://cdn.7tv.app/emote/64b365d54600c79f9abb66e2/4x.webp',
    'https://cdn.7tv.app/emote/666c891bd6785c7a6b91c664/4x.webp',
    'https://cdn.7tv.app/emote/669209654ecd9dd9f35f8019/4x.webp',
    'https://cdn.7tv.app/emote/669ada3c4d0b09090920cd99/4x.webp',
    'https://cdn.7tv.app/emote/669ae3e65d2223f15dda5d2b/4x.webp',
    'https://cdn.7tv.app/emote/663b0510b99fa9d4bad44f23/4x.webp',
    'https://cdn.7tv.app/emote/664d05683499f35f28c6e686/4x.webp',
    
]; 
const pic = document.getElementById('emote'); 

function showImage() { 
    var a = Math.floor(Math.random() * pics.length); 
    var img = pics[a]; 
    pic.src = img;
} 