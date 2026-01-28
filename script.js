document.querySelectorAll('.movie-card').forEach((element)=>{
    element.addEventListener('mouseover',()=>{
        element.style.transform = 'rotateY(350deg)';
    });
});
document.querySelectorAll('.movie-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.3s ease';
        card.style.boxShadow = '0 0 15px rgba(229, 9, 20, 0.7)'; // Красное свечение как у Netflix
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = 'none';
    });
});

document.querySelectorAll('.movie-card button').forEach(btn => {
    btn.addEventListener('click', () => {
       window.location = 
    });
});