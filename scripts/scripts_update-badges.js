const { SVG } = require('@svgdotjs/svg.js');
const fs = require('fs');

const badges = [
  { file: 'quantum-commits.svg', text: 'Quantum Commits: ∞' },
  { file: 'dimensional-repos.svg', text: 'Dimensional Repos: ∞²' },
  { file: 'reality-impact.svg', text: 'Reality Impact: ∞ⁿ' }
];

badges.forEach(badge => {
  const draw = SVG().size(200, 40);
  draw.rect(200, 40).fill('#0D1117').radius(5);
  draw.text(badge.text).fill('#00ff87').font({ family: 'Arial', size: 16 }).move(10, 25);
  draw.circle(10).fill('#60efff').move(180, 20)
    .animate({ duration: 2000, delay: 0, when: 'now' })
    .attr({ r: 8 })
    .loop(true, true);
  fs.writeFileSync(`assets/images/${badge.file}`, draw.svg());
});

console.log('Badges updated successfully');