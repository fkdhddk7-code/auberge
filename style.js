// نختار جميع العناصر اللي عندها الكلاس 'soar-box'
const soarBoxes = document.querySelectorAll('.soar-box');

soarBoxes.forEach(box => {
  // عند المرور بالفأرة فوق العنصر
  box.addEventListener('mouseenter', () => {
    box.style.transition = 'transform 0.3s ease, boxShadow 0.3s ease';
    box.style.transform = 'translateY(-30px) scale(1.1)';
    box.style.boxShadow = '0 15px 25px rgba(0,0,0,0.3)';
  });

  // عند خروج الفأرة من العنصر
  box.addEventListener('mouseleave', () => {
    box.style.transform = 'translateY(0) scale(1)';
    box.style.boxShadow = 'none';
  });

  // مثال على حدث click لكل عنصر
  box.addEventListener('click', () => {
    alert('لقد ضغطت على العنصر!');
  });
});