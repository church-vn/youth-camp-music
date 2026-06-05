const btn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {

    if(window.scrollY > 400){
        btn.style.display = 'block';
    }else{
        btn.style.display = 'none';
    }

});

btn.addEventListener('click', () => {

    document
        .getElementById('back_to_top_id')
        .scrollIntoView({
            behavior: 'smooth'
        });

});

document.querySelectorAll('.list_songs li').forEach(li => {

    li.addEventListener('click', () => {

        const link = li.querySelector('a');

        if(link){
            link.click();
        }

    });

});