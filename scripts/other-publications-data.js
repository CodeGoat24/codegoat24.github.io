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
      &bull; <span class="paper-title">Nonlinear Learnable Triple-Domain Transform Tensor Nuclear Norm for Hyperspectral Image Super-Resolution</span>
      <br>
      <span class="paper-authors">Honghui Xu, Mengjie Qin, Quanyue Qian, <strong>Yibin Wang</strong>, Chuangjie Fang, Yan Li, Jianwei Zheng.</span> <br><span class="venue venue-tgrs">TGRS</span> (SCI Q1, Top, IF: 8.5), 2025
      <br>
      <a href="https://ieeexplore.ieee.org/document/10994802" target="_blank"> <img src="https://img.shields.io/badge/paper-B31B1B"> </a>
      <a href="https://github.com/xuhonghui96/GNLTN"><i class="fa fa-github icon-md icon-github"></i></a>
      ${citationBadge("hqOjcs7Dif8C")}
    `,
    `
      &bull; <span class="paper-title">Residual Graph Transformer for Autism Spectrum Disorder Prediction.</span>
      <br>
      <span class="paper-authors"><strong>Yibin Wang</strong>, Haixia Long, Tao Bo, Jianwei Zheng.</span> <br><span class="venue venue-cmpb">Computer Methods and Programs in Biomedicine</span> (SCI Q2, Top), 2024
      <br>
      <a href="https://www.sciencedirect.com/science/article/abs/pii/S0169260724000610" target="_blank"> <img src="https://img.shields.io/badge/paper-B31B1B"> </a>
      <a href="https://github.com/CodeGoat24/RGTNet"><i class="fa fa-github icon-md icon-github"></i></a>
      ${citationBadge("zYLM7Y9cAGgC")}
    `,
    `
      &bull; <span class="paper-title">DiCache: Let Diffusion Model Determine Its Own Cache</span>
      <br>
      <span class="paper-authors">Jiazi Bu, Pengyang Ling, Yujie Zhou, <strong>Yibin Wang</strong>, Yuhang Zang, Tong Wu, Dahua Lin, Jiaqi Wang.</span> <br><span class="venue venue-iclr">ICLR</span>, 2026
      <br>
      <a href="https://arxiv.org/pdf/2508.17356" target="_blank"> <img src="https://img.shields.io/badge/paper-B31B1B"> </a>
      <a href="https://github.com/Bujiazi/DiCache"><i class="fa fa-github icon-md icon-github"></i></a>
      ${citationBadge("KlAtU1dfN6UC")}
    `,
    `
      &bull; <span class="paper-title">Laboring on less labors: RPCA Paradigm for Pan-sharpening</span>
      <br>
      <span class="paper-authors">Honghui Xu, Chuangjie Fang, <strong>Yibin Wang</strong>, Jie Wu, Jianwei Zheng.</span> <br><span class="venue venue-iccv">ICCV</span> (CCF A), 2025
      <br>
      <a href="https://openaccess.thecvf.com/content/ICCV2025/html/Xu_Laboring_on_less_labors_RPCA_Paradigm_for_Pan-sharpening_ICCV_2025_paper.html" target="_blank"> <img src="https://img.shields.io/badge/paper-B31B1B"> </a>
      ${citationBadge("5nxA0vEk-isC")}
    `,
    `
      &bull; <span class="paper-title">InMind: Evaluating LLMs in Capturing and Applying Individual Human Reasoning Styles</span>
      <br>
      <span class="paper-authors">Zizhen Li, Chuanhao Li, <strong>Yibin Wang</strong>, Qi Chen, Diping Song, Yukang Feng, Jianwen Sun, Jiaxin Ai, Fanrui Zhang, Mingzhu Sun, Kaipeng Zhang.</span> <br><span class="venue venue-emnlp">EMNLP</span> (Main), 2025
      <br>
      <a href="https://arxiv.org/pdf/2508.16072" target="_blank"> <img src="https://img.shields.io/badge/paper-B31B1B"> </a>
      <a href="https://github.com/leroy9472/InMind"><i class="fa fa-github icon-md icon-github"></i></a>
      ${citationBadge("3fE2CSJIrl8C")}
    `,
    `
      &bull; <span class="paper-title">Dynamic Operator Optimization for Efficient Multi-Tenant LoRA Model Serving</span>
      <br>
      <span class="paper-authors">Changhai Zhou, Yuhua Zhou, Shiyang Zhang,  <strong>Yibin Wang</strong>, Zekai Liu.</span> <br><span class="venue venue-aaai">AAAI</span> (CCF A), 2025
      <br>
      <a href="https://ojs.aaai.org/index.php/AAAI/article/view/34453" target="_blank"> <img src="https://img.shields.io/badge/paper-B31B1B"> </a>
      ${citationBadge("_FxGoFyzp5QC")}
    `,
    `
      &bull; <span class="paper-title">CA-GAN: Object Placement via Coalescing Attention based Generative Adversarial Network.</span>
      <br>
      <span class="paper-authors"><strong>Yibin Wang</strong>, Yuchao Feng, Jie Wu, Honghui Xu, Jianwei Zheng.</span> <br><span class="venue venue-icme">ICME</span> (CCF B), 2023
      <br>
      <a href="https://ieeexplore.ieee.org/abstract/document/10219885" target="_blank"> <img src="https://img.shields.io/badge/paper-B31B1B"> </a>
      <a href="https://github.com/CodeGoat24/CA-GAN"><i class="fa fa-github icon-md icon-github"></i></a>
      ${citationBadge("u-x6o8ySG0sC")}
    `
  ];
})();
