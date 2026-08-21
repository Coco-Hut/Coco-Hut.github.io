(() => {
  const initialisePublicationFilters = () => {
    const buttons = document.querySelectorAll('.publication-filter');
    const papers = document.querySelectorAll('#selected-publications .paper-box');

    if (!buttons.length || !papers.length) return;

    const filterPapers = (category, activeButton) => {
      buttons.forEach((button) => button.classList.toggle('is-active', button === activeButton));
      papers.forEach((paper) => {
        paper.hidden = paper.dataset.category !== category;
      });
    };

    buttons.forEach((button) => {
      button.addEventListener('click', () => filterPapers(button.dataset.filter, button));
    });

    filterPapers('hypergraph', document.querySelector('.publication-filter.is-active'));
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialisePublicationFilters);
  } else {
    initialisePublicationFilters();
  }
})();
