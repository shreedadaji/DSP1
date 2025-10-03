
document.addEventListener('DOMContentLoaded', () => {
  // Accordion
  const acc = document.getElementsByClassName('accordion-button');
  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function() {
      this.classList.toggle('active');
      const panel = this.nextElementSibling;
      panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
    });
  }
});

function openTab(evt, tabName) {
  const tabcontent = document.getElementsByClassName('tabcontent');
  for (let i = 0; i < tabcontent.length; i++) tabcontent[i].style.display = 'none';
  document.getElementById(tabName).style.display = 'block';
}

function filterPapers() {
  const input = document.getElementById('paperSearch');
  const filter = input.value.toLowerCase();
  const ul = document.getElementById('paperList');
  const li = ul.getElementsByTagName('li');
  for (let i = 0; i < li.length; i++) {
    const txtValue = li[i].textContent || li[i].innerText;
    li[i].style.display = txtValue.toLowerCase().includes(filter) ? '' : 'none';
  }
}
