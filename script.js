document.getElementById('valuationForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const pe = parseFloat(document.getElementById('pe').value);
  const dividend = parseFloat(document.getElementById('dividend').value);
  const eps = parseFloat(document.getElementById('eps').value);
  const current = parseFloat(document.getElementById('current').value);
  const resultBox = document.getElementById('result-box');

  if (pe === 0) {
    resultBox.textContent = "P/E Ratio cannot be zero.";
    resultBox.className = 'overvalued';
    resultBox.style.display = 'block';
    return;
  }

  const valuation = (eps + dividend) / pe;
  const fairPrice = valuation * current;

  const roundedValuation = valuation.toFixed(2);
  const roundedPrice = fairPrice.toFixed(2);

  resultBox.className = '';
  resultBox.style.display = 'block';

  if (valuation < 1) {
    resultBox.classList.add('overvalued');
    resultBox.textContent = `Valuation: ${roundedValuation} → Overvalued\nFair Price: $${roundedPrice}`;
  } else if (valuation >= 1 && valuation <= 1.5) {
    resultBox.classList.add('fairvalue');
    resultBox.textContent = `Valuation: ${roundedValuation} → Fair Value\nFair Price: $${roundedPrice}`;
  } else if (valuation > 2) {
    resultBox.classList.add('undervalued');
    resultBox.textContent = `Valuation: ${roundedValuation} → Undervalued\nFair Price: $${roundedPrice}`;
  } else {
    resultBox.classList.add('neutral');
    resultBox.textContent = `Valuation: ${roundedValuation} → Neutral\nFair Price: $${roundedPrice}`;
  }
});
