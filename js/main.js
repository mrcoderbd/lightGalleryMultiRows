$(document).ready(()=>{
    const __obj=[
        {header:'img1',
        imgs:[
            {bigImg:'1-1600.jpg',smallImg:'1-480.jpg'},
            {bigImg:'2-1600.jpg',smallImg:'2-480.jpg'}, 
            {bigImg:'1-1600.jpg',smallImg:'1-480.jpg'},                
        ]},
        {header:'img2',
        imgs:[
            {bigImg:'1-1600.jpg',smallImg:'1-480.jpg'},
            {bigImg:'1-1600.jpg',smallImg:'1-480.jpg'}, 
            {bigImg:'2-1600.jpg',smallImg:'2-480.jpg'},   
            {bigImg:'1-1600.jpg',smallImg:'1-480.jpg'}, 
            {bigImg:'1-1600.jpg',smallImg:'1-480.jpg'},              
        ]},
    ];

    __obj.forEach(e => {
        let img=''
        e.imgs.map(el=>{
            img +=`
            <a href="./img/${el.bigImg}">
                <img src="./img/${el.smallImg}" />
            </a>
        `})
            
        $('#gallery-container').append(`<h1>${e.header}`);

           $('#gallery-container').append(`
           <div class='gallery'>
               ${img}
               </div>`                
       );
     })
$('.gallery').lightGallery();
});