(() => {
  const citationBadge = (paperId) => `
    <a href="https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=FQeuWTYAAAAJ&citation_for_view=FQeuWTYAAAAJ:${paperId}" target="_blank">
      <svg width="88" height="20" role="img">
        <g clip-path="url(#r)">
          <rect width="51" height="20" fill="#555"/>
          <rect x="51" width="37" height="20" fill="#007ec6"/>
          <rect width="88" height="20" fill="url(#s)"/>
        </g>
        <g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110">
          <text x="265" y="140" transform="scale(.1)" fill="#fff" textLength="410">Citations</text>
          <text class='show_paper_citations' data='FQeuWTYAAAAJ:${paperId}' x="685" y="140" transform="scale(.1)" fill="#fff"></text>
        </g>
      </svg>
    </a>
  `;

  window.otherPublicationsData = [
    `
      &bull; <span class="paper-title">PLSNet: Position-aware GCN-based autism spectrum disorder diagnosis via FC learning and ROIs sifting.</span>
      <br>
      <span class="paper-authors"><strong>Yibin Wang</strong>, Haixia Long, Qianwei Zhou, Tao Bo, Jianwei Zheng.</span> <br><span class="venue venue-cbm">Computers in Biology and Medicine</span> (SCI Q1, Top), 2023
      <br>
      <a href="https://www.sciencedirect.com/science/article/abs/pii/S0010482523006492" target="_blank"> <img src="https://img.shields.io/badge/paper-B31B1B"> </a>
      <a href="https://github.com/CodeGoat24/PLSNet"><i class="fa fa-github icon-md icon-github"></i></a>
      ${citationBadge("u5HHmVD_uO8C")}
    `,
    `
      &bull; <span class="paper-title">Residual Graph Transformer for Autism Spectrum Disorder Prediction.</span>
      <br>
      <span class="paper-authors"><strong>Yibin Wang</strong>, Haixia Long, Tao Bo, Jianwei Zheng.</span> <br><span class="venue venue-cmpb">Computer Methods and Programs in Biomedicine</span> (SCI Q2, Top), 2024
      <br>
      <a href="https://www.sciencedirect.com/science/article/abs/pii/S0169260724000610" target="_blank"> <img src="https://img.shields.io/badge/paper-B31B1B"> </a>
      <a href="https://github.com/CodeGoat24/RGTNet"><i class="fa fa-github icon-md icon-github"></i></a>
      ${citationBadge("zYLM7Y9cAGgC")}
    `
  ];
})();
