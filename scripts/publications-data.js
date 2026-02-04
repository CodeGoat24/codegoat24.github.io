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

  window.publicationData = {
    recentPublications: [
      {
        image: { src: "images/unifiedreward-think_teaser.png", alt: "UnifiedReward Think teaser" },
        title: "Unified Multimodal Chain-of-Thought Reward Model through Reinforcement Fine-Tuning",
        authors: "<strong>Yibin Wang</strong>, Zhimin Li, Yuhang Zang, Chunyu Wang, Qinglin Lu, Cheng Jin, Jiaqi Wang.",
        venue: '<span class="venue venue-neurips">NeurIPS</span>, 2025',
        links: [
          { href: "https://codegoat24.github.io/UnifiedReward/think", text: "project page", className: "project", icon: "fa fa-link" },
          { href: "https://arxiv.org/pdf/2505.03318", text: "arXiv", className: "arxiv", icon: "ai ai-arxiv" },
          { href: "https://github.com/CodeGoat24/UnifiedReward", text: "code", className: "code", icon: "fa fa-github" }
        ],
        extraHtml: `
          <p></p>
          <a href="https://huggingface.co/papers/2505.03318">
            <img src="https://img.shields.io/badge/%F0%9F%A4%97%201st paper of the day-yellow">
          </a>
          <br>
          <a href="https://arxiv.org/abs/2505.03318" target="_blank"><img src="http://img.shields.io/badge/cs.CV-arXiv%3A2505.03318-B31B1B.svg" /></a>
          <a href="https://github.com/CodeGoat24/UnifiedReward" target="_blank" rel="noopener noreferrer"><img alt="Code" src="https://img.shields.io/github/stars/CodeGoat24/UnifiedReward.svg?style=social&amp;label=Official"></a>
          ${citationBadge("UebtZRa9Y70C")}
          <br>
          <a href="https://huggingface.co/collections/CodeGoat24/unifiedreward-training-data-67c300d4fd5eff00fa7f1ede">
            <img src="https://img.shields.io/badge/%F0%9F%A4%97%20HuggingFace-Datasets-yellow">
          </a>
          <a href="https://huggingface.co/collections/CodeGoat24/unifiedreward-models-67c3008148c3a380d15ac63a">
            <img src="https://img.shields.io/badge/%F0%9F%A4%97%20HuggingFace-Checkpoints-yellow">
          </a>
        `
      },
      {
        image: { src: "images/dreamtext.png", alt: "DreamText teaser" },
        title: "DreamText: High Fidelity Scene Text Synthesis",
        authors: "<strong>Yibin Wang</strong>, Weizhong Zhang, Honghui Xu, Cheng Jin.",
        venue: '<span class="venue venue-cvpr">CVPR</span>, 2025',
        links: [
          { href: "https://codegoat24.github.io/DreamText/", text: "project page", className: "project", icon: "fa fa-link" },
          { href: "https://arxiv.org/pdf/2405.14701", text: "arXiv", className: "arxiv", icon: "ai ai-arxiv" },
          { href: "https://github.com/CodeGoat24/DreamText", text: "code", className: "code", icon: "fa fa-github" }
        ],
        extraHtml: `
          <p></p>
          <br>
          <a href="https://arxiv.org/abs/2405.14701" target="_blank"><img src="http://img.shields.io/badge/cs.CV-arXiv%3A2405.14701-B31B1B.svg" /></a>
          <a href="https://github.com/CodeGoat24/DreamText" target="_blank" rel="noopener noreferrer"><img alt="Code" src="https://img.shields.io/github/stars/CodeGoat24/DreamText.svg?style=social&amp;label=Official"></a>
          ${citationBadge("YsMSGLbcyi4C")}
        `
      },
      {
        image: { src: "images/face-diffuser_display.png", alt: "Face-diffuser teaser" },
        title: "High-fidelity Person-centric Subject-to-Image Synthesis",
        authors: "<strong>Yibin Wang</strong>, Weizhong Zhang, Jianwei Zheng, Cheng Jin.",
        venue: '<span class="venue venue-cvpr">CVPR</span>, 2024',
        links: [
          { href: "https://openaccess.thecvf.com/content/CVPR2024/html/Wang_High-fidelity_Person-centric_Subject-to-Image_Synthesis_CVPR_2024_paper.html", text: "paper", className: "project", icon: "fa fa-file-text-o" },
          { href: "https://arxiv.org/pdf/2311.10329", text: "arXiv", className: "arxiv", icon: "ai ai-arxiv" },
          { href: "https://github.com/CodeGoat24/Face-diffuser", text: "code", className: "code", icon: "fa fa-github" }
        ],
        extraHtml: `
          <p></p>
          <br>
          <a href="https://arxiv.org/abs/2311.10329" target="_blank"><img src="http://img.shields.io/badge/cs.CV-arXiv%3A2311.10329-B31B1B.svg" /></a>
          <a href="https://github.com/CodeGoat24/Face-diffuser" target="_blank" rel="noopener noreferrer"><img alt="Code" src="https://img.shields.io/github/stars/CodeGoat24/Face-diffuser.svg?style=social&amp;label=Official"></a>
          ${citationBadge("qjMakFHDy7sC")}
        `
      },
      {
        image: { src: "images/primecomposer_display.png", alt: "PrimeComposer teaser" },
        title: "PrimeComposer: Faster Progressively Combined Diffusion for Image Composition with Attention Steering",
        authors: "<strong>Yibin Wang</strong>, Weizhong Zhang, Jianwei Zheng, Cheng Jin.",
        venue: '<span class="venue venue-acmmm">ACM MM</span>, 2024',
        links: [
          { href: "https://dl.acm.org/doi/10.1145/3664647.3680848", text: "paper", className: "project", icon: "fa fa-file-text-o" },
          { href: "https://arxiv.org/pdf/2403.05053", text: "arXiv", className: "arxiv", icon: "ai ai-arxiv" },
          { href: "https://github.com/CodeGoat24/PrimeComposer", text: "code", className: "code", icon: "fa fa-github" }
        ],
        extraHtml: `
          <p></p>
          <br>
          <a href="https://arxiv.org/abs/2403.05053" target="_blank"><img src="http://img.shields.io/badge/cs.CV-arXiv%3A2403.05053-B31B1B.svg" /></a>
          <a href="https://github.com/CodeGoat24/PrimeComposer" target="_blank" rel="noopener noreferrer"><img alt="Code" src="https://img.shields.io/github/stars/CodeGoat24/PrimeComposer.svg?style=social&amp;label=Official"></a>
          ${citationBadge("Y0pCki6q_DkC")}
        `
      }
    ],
    selectedPreprints: [
      {
        image: { src: "images/unifiedreward_flex_teaser.png", alt: "UnifiedReward Flex teaser" },
        title: "Unified Personalized Reward Model for Vision Generation",
        authors: "<strong>Yibin Wang</strong>, Yuhang Zang, Feng Han, Yujie Zhou, Jiazi Bu, Cheng Jin, Jiaqi Wang.",
        links: [
          { href: "https://codegoat24.github.io/UnifiedReward/flex", text: "project page", className: "project", icon: "fa fa-link" },
          { href: "https://arxiv.org/abs/2602.02380", text: "arXiv", className: "arxiv", icon: "ai ai-arxiv" },
          { href: "https://github.com/CodeGoat24/UnifiedReward", text: "code", className: "code", icon: "fa fa-github" }
        ],
        extraHtml: `
          <p></p>
          <br>
          <a href="https://arxiv.org/abs/2602.02380" target="_blank"><img src="http://img.shields.io/badge/cs.CV-arXiv%3A2602.02380-B31B1B.svg" /></a>
          <a href="https://github.com/CodeGoat24/Pref-GRPO" target="_blank" rel="noopener noreferrer"><img alt="Code" src="https://img.shields.io/github/stars/CodeGoat24/UnifiedReward.svg?style=social&amp;label=UnifiedReward"></a>
          ${citationBadge("QIV2ME_5wuYC")}
          <br>
          <a href="https://huggingface.co/collections/CodeGoat24/unifiedreward-flex">
            <img src="https://img.shields.io/badge/%F0%9F%A4%97%20HuggingFace-Checkpoints-yellow">
          </a>
          <a href="https://huggingface.co/datasets/CodeGoat24/UnifiedReward-Flex-SFT-90K">
            <img src="https://img.shields.io/badge/%F0%9F%A4%97%20HuggingFace-Dataset-yellow">
          </a>
        `
      },
      {
        image: { src: "images/unireditbench_teaser.png", alt: "UniREditBench teaser" },
        title: "UniREditBench: A Unified Reasoning-based Image Editing Benchmark",
        authors: "Feng Han*,<strong>Yibin Wang</strong>*, Chenglin Li, Zheming Liang, Dianyi Wang, Yang Jiao, Zhipeng Wei, Chao Gong, Cheng Jin, Jingjing Chen, Jiaqi Wang.",
        links: [
          { href: "https://maplebb.github.io/UniREditBench/", text: "project page", className: "project", icon: "fa fa-link" },
          { href: "https://github.com/Maplebb/UniREditBench/blob/main/UniREditBench-Technical_Report.pdf", text: "arXiv", className: "arxiv", icon: "ai ai-arxiv" },
          { href: "https://github.com/Maplebb/UniREditBench", text: "code", className: "code", icon: "fa fa-github" }
        ],
        extraHtml: `
          <p></p>
          <br>
          <a href="https://arxiv.org/pdf/2511.01295" target="_blank"><img src="http://img.shields.io/badge/cs.CV-arXiv%3A2511.01295-B31B1B.svg" /></a>
          <a href="https://github.com/Maplebb/UniREditBench" target="_blank" rel="noopener noreferrer"><img alt="Code" src="https://img.shields.io/github/stars/Maplebb/UniREditBench.svg?style=social&amp;label=UniREditBench"></a>
          ${citationBadge("qxL8FJ1GzNcC")}
          <br>
          <a href="https://huggingface.co/datasets/maplebb/UniREditBench">
            <img src="https://img.shields.io/badge/%F0%9F%A4%97%20HuggingFace-UniREditBench-yellow">
          </a>
          <a href="https://huggingface.co/datasets/maplebb/UniREdit-Data-100K">
            <img src="https://img.shields.io/badge/%F0%9F%A4%97%20HuggingFace-UniREdit Data 100K-yellow">
          </a>
          <a href="https://huggingface.co/maplebb/UniREdit-Bagel">
            <img src="https://img.shields.io/badge/%F0%9F%A4%97%20HuggingFace-UniREdit Bagel-yellow">
          </a>
          <a href="https://huggingface.co/spaces/maplebb/UniREditBench_Leaderboard">
            <img src="https://img.shields.io/badge/%F0%9F%A4%97%20HuggingFace-Leaderboard-yellow">
          </a>
        `
      },
      {
        image: { src: "images/unigenbench++_teaser.jpg", alt: "UniGenBench++ teaser" },
        title: "UniGenBench++: A Unified Semantic Evaluation Benchmark for Text-to-Image Generation",
        authors: "<strong>Yibin Wang</strong>, Zhimin Li, Yuhang Zang, Jiazi Bu, Yujie Zhou, Yi Xin, Junjun He, Chunyu Wang, Qinglin Lu, Cheng Jin, Jiaqi Wang.",
        links: [
          { href: "https://codegoat24.github.io/UniGenBench", text: "project page", className: "project", icon: "fa fa-link" },
          { href: "https://arxiv.org/pdf/2510.18701", text: "arXiv", className: "arxiv", icon: "ai ai-arxiv" },
          { href: "https://github.com/CodeGoat24/UniGenBench", text: "code", className: "code", icon: "fa fa-github" }
        ],
        extraHtml: `
          <p></p>
          <br>
          <a href="https://arxiv.org/pdf/2510.18701" target="_blank"><img src="http://img.shields.io/badge/cs.CV-arXiv%3A2510.18701-B31B1B.svg" /></a>
          <a href="https://github.com/CodeGoat24/UniGenBench" target="_blank" rel="noopener noreferrer"><img alt="Code" src="https://img.shields.io/github/stars/CodeGoat24/UniGenBench.svg?style=social&amp;label=UniGenBench"></a>
          ${citationBadge("YOwf2qJgpHMC")}
          <br>
          <a href="https://huggingface.co/datasets/CodeGoat24/UniGenBench-Eval-Images">
            <img src="https://img.shields.io/badge/%F0%9F%A4%97%20HuggingFace-EvalImages-yellow">
          </a>
          <a href="https://huggingface.co/CodeGoat24/UniGenBench-EvalModel-qwen-72b-v1">
            <img src="https://img.shields.io/badge/%F0%9F%A4%97%20HuggingFace-EvalModel-yellow">
          </a>
        `
      },
      {
        image: { src: "images/prefgrpo_unigenbench_teaser.jpg", alt: "Pref-GRPO teaser" },
        title: "Pref-GRPO: Pairwise Preference Reward-based GRPO for Stable Text-to-Image Reinforcement Learning",
        authors: "<strong>Yibin Wang</strong>, Zhimin Li, Yuhang Zang, Yujie Zhou, Jiazi Bu, Chunyu Wang, Qinglin Lu, Cheng Jin, Jiaqi Wang.",
        links: [
          { href: "https://codegoat24.github.io/UnifiedReward/Pref-GRPO", text: "project page", className: "project", icon: "fa fa-link" },
          { href: "https://arxiv.org/pdf/2508.20751", text: "arXiv", className: "arxiv", icon: "ai ai-arxiv" },
          { href: "https://github.com/CodeGoat24/Pref-GRPO", text: "Pref-GRPO code", className: "code", icon: "fa fa-github" },
          { href: "https://github.com/CodeGoat24/UniGenBench", text: "UniGenBench code", className: "code", icon: "fa fa-github" }
        ],
        extraHtml: `
          <p></p>
          <a href="https://huggingface.co/papers/2508.20751">
            <img src="https://img.shields.io/badge/%F0%9F%A4%97%201st paper of the day-yellow">
          </a>
          <br>
          <a href="https://arxiv.org/abs/2508.20751" target="_blank"><img src="http://img.shields.io/badge/cs.CV-arXiv%3A2508.20751-B31B1B.svg" /></a>
          <a href="https://github.com/CodeGoat24/Pref-GRPO" target="_blank" rel="noopener noreferrer"><img alt="Code" src="https://img.shields.io/github/stars/CodeGoat24/Pref-GRPO.svg?style=social&amp;label=Pref-GRPO"></a>
          <a href="https://github.com/CodeGoat24/UniGenBench" target="_blank" rel="noopener noreferrer"><img alt="Code" src="https://img.shields.io/github/stars/CodeGoat24/UniGenBench.svg?style=social&amp;label=UniGenBench"></a>
          ${citationBadge("kNdYIx-mwKoC")}
          <br>
          <a href="https://huggingface.co/spaces/CodeGoat24/UniGenBench_Leaderboard">
            <img src="https://img.shields.io/badge/%F0%9F%A4%97%20UniGenBench-Leaderboard-yellow">
          </a>
          <a href="https://huggingface.co/CodeGoat24/FLUX.1-dev-PrefGRPO">
            <img src="https://img.shields.io/badge/%F0%9F%A4%97%20HuggingFace-Model-yellow">
          </a>
        `
      },
      {
        image: { src: "images/UnifiedReward.png", alt: "UnifiedReward teaser" },
        title: "Unified Reward Model for Multimodal Understanding and Generation",
        authors: "<strong>Yibin Wang</strong>, Yuhang Zang, Hao Li, Cheng Jin, Jiaqi Wang.",
        links: [
          { href: "https://codegoat24.github.io/UnifiedReward/", text: "project page", className: "project", icon: "fa fa-link" },
          { href: "https://arxiv.org/pdf/2503.05236", text: "arXiv", className: "arxiv", icon: "ai ai-arxiv" },
          { href: "https://github.com/CodeGoat24/UnifiedReward", text: "code", className: "code", icon: "fa fa-github" }
        ],
        extraHtml: `
          <p></p>
          <a href="https://huggingface.co/papers/2503.05236">
            <img src="https://img.shields.io/badge/%F0%9F%A4%97%202nd paper of the day-yellow">
          </a>
          <br>
          <a href="https://arxiv.org/abs/2503.05236" target="_blank"><img src="http://img.shields.io/badge/cs.CV-arXiv%3A2503.05236-B31B1B.svg" /></a>
          <a href="https://github.com/CodeGoat24/UnifiedReward" target="_blank" rel="noopener noreferrer"><img alt="Code" src="https://img.shields.io/github/stars/CodeGoat24/UnifiedReward.svg?style=social&amp;label=Official"></a>
          ${citationBadge("LkGwnXOMwfcC")}
          <br>
          <a href="https://huggingface.co/collections/CodeGoat24/unifiedreward-training-data-67c300d4fd5eff00fa7f1ede">
            <img src="https://img.shields.io/badge/%F0%9F%A4%97%20HuggingFace-Datasets-yellow">
          </a>
          <a href="https://huggingface.co/collections/CodeGoat24/unifiedreward-models-67c3008148c3a380d15ac63a">
            <img src="https://img.shields.io/badge/%F0%9F%A4%97%20HuggingFace-Checkpoints-yellow">
          </a>
        `
      },
      {
        image: { src: "images/LiFT_pipeline.png", alt: "LiFT pipeline" },
        title: "LiFT: Leveraging Human Feedback for Text-to-Video Model Alignment",
        authors: "<strong>Yibin Wang</strong>, Zhiyu Tan, Junyan Wang, Xiaomeng Yang, Cheng Jin, Hao Li.",
        links: [
          { href: "https://codegoat24.github.io/LiFT/", text: "project page", className: "project", icon: "fa fa-link" },
          { href: "https://arxiv.org/pdf/2412.04814", text: "arXiv", className: "arxiv", icon: "ai ai-arxiv" },
          { href: "https://github.com/CodeGoat24/LiFT", text: "code", className: "code", icon: "fa fa-github" }
        ],
        extraHtml: `
          <p></p>
          <a href="https://huggingface.co/papers/2412.04814">
            <img src="https://img.shields.io/badge/%F0%9F%A4%97%203rd paper of the day-yellow">
          </a>
          <br>
          <a href="https://arxiv.org/abs/2412.04814" target="_blank"><img src="http://img.shields.io/badge/cs.CV-arXiv%3A2412.04814-B31B1B.svg" /></a>
          <a href="https://github.com/CodeGoat24/LiFT" target="_blank" rel="noopener noreferrer"><img alt="Code" src="https://img.shields.io/github/stars/CodeGoat24/LiFT.svg?style=social&amp;label=Official"></a>
          ${citationBadge("ufrVoPGSRksC")}
          <br>
          <a href="https://huggingface.co/collections/Fudan-FUXI/lift-hra-6760f063b04baaf6350c9d2e">
            <img src="https://img.shields.io/badge/%F0%9F%A4%97%20HuggingFace-Datasets-yellow">
          </a>
          <a href="https://huggingface.co/collections/Fudan-FUXI/lift-critic-6756e628d83c390221e02857">
            <img src="https://img.shields.io/badge/%F0%9F%A4%97%20HuggingFace-Checkpoints-yellow">
          </a>
        `
      },
      {
        image: { src: "images/magicface_display.png", alt: "MagicFace teaser" },
        title: "MagicFace: Training-free Universal-Style Human Image Customized Synthesis",
        authors: "<strong>Yibin Wang</strong>, Weizhong Zhang, Cheng Jin.",
        links: [
          { href: "https://codegoat24.github.io/MagicFace/", text: "project page", className: "project", icon: "fa fa-link" },
          { href: "https://arxiv.org/pdf/2408.07433", text: "arXiv", className: "arxiv", icon: "ai ai-arxiv" },
          { href: "https://github.com/CodeGoat24/MagicFace", text: "code", className: "code", icon: "fa fa-github" }
        ],
        extraHtml: `
          <p></p>
          <br>
          <a href="https://arxiv.org/abs/2408.07433" target="_blank"><img src="http://img.shields.io/badge/cs.CV-arXiv%3A2408.07433-B31B1B.svg" /></a>
          <a href="https://github.com/CodeGoat24/MagicFace" target="_blank" rel="noopener noreferrer"><img alt="Code" src="https://img.shields.io/github/stars/CodeGoat24/MagicFace.svg?style=social&amp;label=Official"></a>
          ${citationBadge("WF5omc3nYNoC")}
        `
      }
    ]
  };
})();
