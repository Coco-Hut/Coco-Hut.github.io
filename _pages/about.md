---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am currently a third-year Ph.D candidate in the Data and Knowledge Research Group ([DKR](https://unswdb.github.io/index.html)), School of Computer Science and Engineering, University of New South Wales (UNSW). I am co-supervised by Dr. [Xiaoyang Wang](https://research.unsw.edu.au/people/dr-xiaoyang-wang), Prof. [Wenjie Zhang](https://www.unsw.edu.au/staff/wenjie-zhang), and Prof. [Xuemin Lin](https://itf.sjtu.edu.cn/enshow-275-42.html). My research interest includes Graph Mining, Hypergraph Learning, and Data-centric AI.

Prior to that, I obtained my bachelor degree in Data Science and Big Data Technology from Tongji University, China, in 2023. I was a research intern at Fintech Lab in Tongji University, supervised by Prof. [Dawei Cheng](http://cs1.tongji.edu.cn/~dawei/).

<!--
I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>).
-->

# 🔥 News
- *2026.8*: &nbsp;🎉🎉 one paper was accepted by EMNLP 2026
- *2026.5*: &nbsp;🎉🎉 two papers were accepted by ICML 2026 
- *2026.3*: &nbsp;🎉🎉 one paper was accepted by TKDE 2026 
- *2026.2*: &nbsp;🎉🎉 one paper was accepted by ICDE 2026 
- *2026.1*: &nbsp;🎉🎉 one paper was accepted by ICLR 2026 

# 📝 Selected Publications 

<!--
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2016</div><img src='images/500x300.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Deep Residual Learning for Image Recognition](https://openaccess.thecvf.com/content_cvpr_2016/papers/He_Deep_Residual_Learning_CVPR_2016_paper.pdf)

**Kaiming He**, Xiangyu Zhang, Shaoqing Ren, Jian Sun

[**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
</div>
</div>
-->

<!--
- [Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet](https://github.com), A, B, C, **CVPR 2020**
-->

`*: Corresponding author.`

<div class='paper-box'>
  <div class='paper-box-image'><div><div class="badge">EMNLP 2026</div><img src='/images/paper%20icon/EMNLP26-HiTec.png' alt="Overview of HiTeC"></div></div>
  <div class='paper-box-text' markdown="1">

[HiTeC: Hierarchical Contrastive Learning on Text-Attributed Hypergraph with Semantic-Aware Augmentation](https://arxiv.org/pdf/2508.03104)

Mengting Pan, **Fan Li<sup>\*</sup>**, Xiaoyang Wang, Wenjie Zhang, and Xuemin Lin

**Conference on Empirical Methods in Natural Language Processing (EMNLP)**, 2026

[[PDF](https://arxiv.org/pdf/2508.03104)]

  </div>
</div>

<div class='paper-box'>
  <div class='paper-box-image'><div><div class="badge">ICML 2026</div><img src='/images/paper%20icon/ICML26-AHCGDD.png' alt="Overview of Anchor-guided Hypergraph Condensation with Dual-level Discrimination"></div></div>
  <div class='paper-box-text' markdown="1">

[Anchor-guided Hypergraph Condensation with Dual-level Discrimination](https://arxiv.org/pdf/2605.10001)

**Fan Li**, Xiaoyang Wang, Chen Chen, and Wenjie Zhang

**International Conference on Machine Learning (ICML)**, 2026

[[PDF](https://arxiv.org/pdf/2605.10001)] [[Code](https://github.com/Coco-Hut/AHGCDD)]

  </div>
</div>

<div class='paper-box'>
  <div class='paper-box-image'><div><div class="badge">ICML 2026</div><img src='/images/paper%20icon/ICML26-RGVQ.png' alt="Overview of Graph is a Natural Regularization"></div></div>
  <div class='paper-box-text' markdown="1">

[Graph is a Natural Regularization: Revisiting Vector Quantization for Graph Representation Learning](https://arxiv.org/abs/2508.06588)

Zian Zhai, **Fan Li<sup>\*</sup>**, Xingyu Tan, Xiaoyang Wang, Wenjie Zhang

**International Conference on Machine Learning (ICML)**, 2026

[[PDF](https://arxiv.org/abs/2508.06588)]

  </div>
</div>

<div class='paper-box'>
  <div class='paper-box-image'><div><div class="badge">TKDE 2026</div><img src='/images/paper%20icon/TKDE26-FairHSSL.png' alt="Overview of Fairness-aware Hypergraph Self-Supervised Learning"></div></div>
  <div class='paper-box-text' markdown="1">

[Fairness-aware Hypergraph Self-Supervised Learning with Sampling-efficient Signals](https://ieeexplore.ieee.org/abstract/document/11454462)

**Fan Li**, Xiaoyang Wang, Dawei Cheng, Ying Zhang, Wenjie Zhang, and Xuemin Lin

**IEEE Transactions on Knowledge and Data Engineering (TKDE)**, 2026

[[PDF](https://ieeexplore.ieee.org/abstract/document/11454462)] [[Code](https://github.com/Coco-Hut/SE-HSSL)]

  </div>
</div>

<div class='paper-box'>
  <div class='paper-box-image'><div><div class="badge">ICDE 2026</div><img src='/images/paper%20icon/ICDE26-C2TC.png' alt="Overview of C²TC: A Training-Free Framework for Efficient Tabular Data Condensation"></div></div>
  <div class='paper-box-text' markdown="1">

[C²TC: A Training-Free Framework for Efficient Tabular Data Condensation](https://arxiv.org/pdf/2602.21717)

Sijia Xu, **Fan Li<sup>\*</sup>**, Xiaoyang Wang, Zhengyi Yang, Xuemin Lin

**IEEE International Conference on Data Engineering (ICDE)**, 2026

[[PDF](https://arxiv.org/pdf/2602.21717)] [[Code](https://github.com/Sssara-5/TF-TabularCondensation)]

  </div>
</div>

<div class='paper-box'>
  <div class='paper-box-image'><div><div class="badge">ICLR 2026</div><img src='/images/paper%20icon/ICLR26-DHGBench.png' alt="Overview of DHG-Bench"></div></div>
  <div class='paper-box-text' markdown="1">

[DHG-Bench: A Comprehensive Benchmark for Deep Hypergraph Learning](https://openreview.net/forum?id=lhsb1ChUDF)

**Fan Li**, Xiaoyang Wang, Wenjie Zhang, Ying Zhang, Xuemin Lin

**International Conference on Learning Representation (ICLR)**, 2026

[[PDF](https://openreview.net/forum?id=lhsb1ChUDF)] [[Code](https://github.com/Coco-Hut/DHG-Bench)]

  </div>
</div>

<div class='paper-box'>
  <div class='paper-box-image'><div><div class="badge">TKDE 2025</div><img src='/images/paper%20icon/TKDE25-TCGU.png' alt="Overview of TCGU"></div></div>
  <div class='paper-box-text' markdown="1">

[TCGU: Data-centric Graph Unlearning based on Transferable Condensation](https://ieeexplore.ieee.org/document/11271172)

**Fan Li**, Xiaoyang Wang, Dawei Cheng, Wenjie Zhang, Ying Zhang, and Xuemin Lin

**IEEE Transactions on Knowledge and Data Engineering (TKDE)**, 2025

[[PDF](https://ieeexplore.ieee.org/document/11271172)] [[Code](https://github.com/Coco-Hut/TCGU)]

  </div>
</div>

<!-- 
- Xijuan Liu, Yin Chen, **Fan Li**, Xiaoyang Wang, Haiyang Hu and Ying Zhang *Subgraph Similarity Computation via Masked Graph Distance Network.* **International Conference on Information and Knowledge Management (CIKM)**, 2025 [[pdf](https://dl.acm.org/doi/10.1145/3746252.3761209)] [[code]()]
-->

<div class='paper-box'>
  <div class='paper-box-image'><div><div class="badge">IJCAI 2025</div><img src='/images/paper%20icon/IJCAI25-PCAN.png' alt="Overview of PCAN"></div></div>
  <div class='paper-box-text' markdown="1">

[PCAN: A Pandemic-Compatible Attentive Neural Network for Retail Sales Forecasting](https://www.ijcai.org/proceedings/2025/1026)

**Fan Li**, Guoxuan Wang, Huiyu Chu, Dawei Cheng<sup>\*</sup>, and Xiaoyang Wang

**International Joint Conference on Artificial Intelligence (IJCAI)**, 2025

[[PDF](https://www.ijcai.org/proceedings/2025/1026)] [[Code](https://github.com/Coco-Hut/PCAN)]

  </div>
</div>

<div class='paper-box'>
  <div class='paper-box-image'><div><div class="badge">ICDE 2025</div><img src='/images/paper%20icon/ICDE25-VRDAG.png' alt="Overview of Efficient Dynamic Attributed Graph Generation"></div></div>
  <div class='paper-box-text' markdown="1">

[Efficient Dynamic Attributed Graph Generation](https://ieeexplore.ieee.org/document/11113087)

**Fan Li**, Xiaoyang Wang<sup>\*</sup>, Dawei Cheng, Ying Zhang, and Xuemin Lin

**IEEE International Conference on Data Engineering (ICDE)**, 2025

[[PDF](https://ieeexplore.ieee.org/document/11113087)] [[Code](https://github.com/Coco-Hut/VRDAG)]

  </div>
</div>

<div class='paper-box'>
  <div class='paper-box-image'><div><div class="badge">TKDE 2024</div><img src='/images/paper%20icon/TKDE26-AdaRisk.png' alt="Overview of AdaRisk"></div></div>
  <div class='paper-box-text' markdown="1">

[AdaRisk: Risk-adaptive Deep Reinforcement Learning for Vulnerable Nodes Detection](https://ieeexplore.ieee.org/document/10549866/footnotes#footnotes)

**Fan Li**, Zhiyu Xu, Dawei Cheng<sup>\*</sup>, and Xiaoyang Wang

**IEEE Transactions on Knowledge and Data Engineering (TKDE)**, 2024

[[PDF](https://ieeexplore.ieee.org/document/10549866/footnotes#footnotes)] [[Code](https://github.com/Coco-Hut/AdaRisk-TKDE)]

  </div>
</div>
 
<div class='paper-box'>
  <div class='paper-box-image'><div><div class="badge">IJCAI 2024</div><img src='/images/paper%20icon/IJCAI24-SEHSSL.png' alt="Overview of Hypergraph Self-supervised Learning"></div></div>
  <div class='paper-box-text' markdown="1">

[Hypergraph Self-supervised Learning with Sampling-efficient Signals](https://www.ijcai.org/proceedings/2024/486)

**Fan Li**, Xiaoyang Wang<sup>\*</sup>, Dawei Cheng, Wenjie Zhang, Ying Zhang, and Xuemin Lin

**International Joint Conference on Artificial Intelligence (IJCAI)**, 2024

[[PDF](https://www.ijcai.org/proceedings/2024/486)] [[Code](https://github.com/Coco-Hut/SE-HSSL)]

  </div>
</div>

# 📄 Preprints

<div class='paper-box'>
  <div class='paper-box-image'><div><div class="badge">arXiv 2026</div><img src='/images/paper%20icon/Arxiv-CoGBD.png' alt="Overview of Universal Graph Backdoor Defense"></div></div>
  <div class='paper-box-text' markdown="1">

[Universal Graph Backdoor Defense: A Feature-based Homophily Perspective](https://arxiv.org/pdf/2605.16815)

Mengting Pan, **Fan Li<sup>\*</sup>**, Chen Chen, Xiaoyang Wang

**arXiv preprint**, 2026

[[PDF](https://arxiv.org/pdf/2605.16815)]

  </div>
</div>

<div class='paper-box'>
  <div class='paper-box-image'><div><div class="badge">arXiv 2026</div><img src='/images/paper%20icon/Arxiv-SGRE.png' alt="Overview of Answer-then-Edit"></div></div>
  <div class='paper-box-text' markdown="1">

[Answer-then-Edit: Reasoning Skeleton Editing for Anti-Distillation with Preserved Utility](https://arxiv.org/pdf/2607.20440)

**Fan Li**, Mengting Pan, Sijia Xu, Xiaoyang Wang, Chen Chen, and Wenjie Zhang

**arXiv preprint**, 2026

[[PDF](https://arxiv.org/pdf/2607.20440)]

  </div>
</div>

# 🔬 Open Source Projects

- [DHG-Bench](https://github.com/Coco-Hut/DHG-Bench)  [![GitHub stars](https://img.shields.io/github/stars/Coco-Hut/DHG-Bench?style=social)](https://github.com/Coco-Hut/DHG-Bench) : The first benchmark toolkit for deep hypergraph learning, supporting evaluation of various Hypergraph neural networks (HNNs) in effectiveness, efficiency, robustness, and fairness across diverse datasets and tasks.

  *Role: Project Leader and Main Contributor*

# 🎖 Honors and Awards
- Chinese Government Award for Outstanding Self-financed Students Abroad 2026 (Only 650 worldwide)
- ICML 2026 Silver Reviewer Award
- IEEE ICDE 2025 Student Travel Grant (Only 10 recipients worldwide)
- University International Postgraduate Award (UIPA) granted by University of New South Wales - 2024

# 📖 Academic Services

**Program Committee Member:**

- ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD): 2025, 2026, 2027;
- International Conference on Learning Representations (ICLR): 2026;
- International Conference on Machine Learning (ICML): 2026.
- Conference on Neural Information Processing Systems (NeurIPS): 2026;
- International Conference on Database Systems for Advanced Applications (DASFAA): 2027.
- ACM The Web Conference (WWW): 2025;
- Annual AAAI Conference on Artificial Intelligence (AAAI): 2026, 2027;

**Journal Reviewer:**

- ACM Transactions on Knowledge Discovery from Data (TKDD).

# 🎓 Educations
- *2023.09 - now*, Ph.D Candidate, University of New South Wales, Sydney. 
- *2019.09 - 2023.06*, Undergraduate, Tongji University, Shanghai.

<!--
# 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/)

# 💻 Internships
- *2019.05 - 2020.02*, [Lorem](https://github.com/), China.
-->
