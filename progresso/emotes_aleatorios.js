const pics = [ 
    'https://cdn.7tv.app/emote/666e63d0ba453b48ddcb7a97/4x.webp', 
    'https://cdn.7tv.app/emote/64b365d54600c79f9abb66e2/4x.webp',
    'https://cdn.7tv.app/emote/666c891bd6785c7a6b91c664/4x.webp',
    'https://cdn.7tv.app/emote/669209654ecd9dd9f35f8019/4x.webp',
    'https://cdn.discordapp.com/attachments/1258617773454524539/1275980570886672455/meiaNatalThon.gif?ex=66c7dd02&is=66c68b82&hm=5b35810fc9bf0ef7c6c431cd649294f9e4608e8a756503728eb3f039e624f44c&',
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
