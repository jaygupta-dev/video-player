let videoplay = document.querySelector('#videoplay');
let videolist = document.querySelectorAll('.videolist');
let playpause = document.querySelector('#playpause');


defaults = 0;
videolist[defaults].style.border = '4px solid red';

function changeSongs(x)
 {
    for(let y of videolist)
    {
        y.style.border = '4px solid whitesmoke';
    }
    defaults += x;
    if(defaults < 0)
    {
        defaults = videolist.length;
    }
    else if(defaults > videolist.length-1)
    {
        defaults = 0;
    }
       
    let src = videolist[defaults].src;
    videolist[defaults].style.border = '4px solid red';
    videoplay.src = src;
    if(videoplay.paused)
    {
        videoplay.pause();
        playpause.style.color='white';
        playpause.innerHTML = "<i class='fa-solid fa-play fs-1'>";
    }
    else
    {
        videoplay.play();
        playpause.innerHTML = "<i class='fa-solid fa-pause fs-1'>";
        playpause.style.color = 'tomato';
    }
}

playpause.addEventListener('click',()=>
{
    if(videoplay.paused)
    {
        videoplay.play();
        playpause.style.color='tomato';
        playpause.innerHTML = "<i class='fa-solid fa-pause fs-1'>";
    }
    else
    {
        videoplay.pause();
        playpause.innerHTML = "<i class='fa-solid fa-play fs-1'>";
        playpause.style.color = 'white';
    }
});