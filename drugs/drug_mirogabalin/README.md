# mirogabalin

- **generic name:** mirogabalin
- **ATC codes:** `N02BF03`
- **DrugBank:** [DB11825](https://go.drugbank.com/drugs/DB11825)
- **groups:** investigational

## About

**Description.** Mirogabalin has been used in trials studying the treatment of Post-herpetic Neuralgia, Pain Associated With Fibromyalgia, and Diabetic peripheral neuropathic pain.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-28 12:51 | 2:14 | 0/0/0 | 0/2/0 | 0/0/0 | 10,222/1,028 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 2/5 | 7/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Kitano_2019](drugs/drug_mirogabalin/pd_Kitano_2019_pain_score.md) | Kitano Y et al., [Pharmacological, pharmacodynamics, and…, Nihon yakurigaku zasshi. Fo… (2019) | [10.1254/fpj.154.352](https://doi.org/10.1254/fpj.154.352) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Kitano_2019](drugs/drug_mirogabalin/pd_Kitano_2019_rotarod_latency.md) | Kitano Y et al., [Pharmacological, pharmacodynamics, and…, Nihon yakurigaku zasshi. Fo… (2019) | [10.1254/fpj.154.352](https://doi.org/10.1254/fpj.154.352) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Kitano_2019](drugs/drug_mirogabalin/pd_Kitano_2019_spontaneous_activity.md) | Kitano Y et al., [Pharmacological, pharmacodynamics, and…, Nihon yakurigaku zasshi. Fo… (2019) | [10.1254/fpj.154.352](https://doi.org/10.1254/fpj.154.352) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Kitano_2019](drugs/drug_mirogabalin/pd_Kitano_2019_von_Frey_threshold.md) | Kitano Y et al., [Pharmacological, pharmacodynamics, and…, Nihon yakurigaku zasshi. Fo… (2019) | [10.1254/fpj.154.352](https://doi.org/10.1254/fpj.154.352) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Wu_2022](drugs/drug_mirogabalin/pd_Wu_2022_peak_transient_INa.md) | Wu CL et al., The Evidence for Effective Inhibition o…, International journal of mo… (2022) | [10.3390/ijms23073845](https://doi.org/10.3390/ijms23073845) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Wu_2022](drugs/drug_mirogabalin/pd_Wu_2022_persistent_INa.md) | Wu CL et al., The Evidence for Effective Inhibition o…, International journal of mo… (2022) | [10.3390/ijms23073845](https://doi.org/10.3390/ijms23073845) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Wu_2022](drugs/drug_mirogabalin/pd_Wu_2022_resurgent_INa.md) | Wu CL et al., The Evidence for Effective Inhibition o…, International journal of mo… (2022) | [10.3390/ijms23073845](https://doi.org/10.3390/ijms23073845) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Wu_2022](drugs/drug_mirogabalin/pd_Wu_2022_sustained_late_INa.md) | Wu CL et al., The Evidence for Effective Inhibition o…, International journal of mo… (2022) | [10.3390/ijms23073845](https://doi.org/10.3390/ijms23073845) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Wu_2022](drugs/drug_mirogabalin/pd_Wu_2022_window_INa.md) | Wu CL et al., The Evidence for Effective Inhibition o…, International journal of mo… (2022) | [10.3390/ijms23073845](https://doi.org/10.3390/ijms23073845) |

## Coverage

- **PubMed hits:** 17 matched, 17 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yin_2016.pdf` | Yin OQ et al., Population pharmacokinetic modeling and…, Journal of clinical pharmac… (2016) | popPK | 10 | [10.1002/jcph.584](https://doi.org/10.1002/jcph.584) | [26138993](https://pubmed.ncbi.nlm.nih.gov/26138993) | The paper is a population PK study for mirogabalin, but the specific numeric parameter values (CL, V, Q, etc.) are not present in the provided text, which only reports relative changes and simulation outcomes. |
| `Hutmacher_2016.pdf` | Hutmacher MM et al., Exposure-response modeling of average d…, Journal of clinical pharmac… (2016) | pd | 5 | [10.1002/jcph.567](https://doi.org/10.1002/jcph.567) | [26073181](https://www.ncbi.nlm.nih.gov/pubmed/26073181) | metadata signals extractable PD data (Exposure-response) |
| `Ahmad_2021.pdf` | Ahmad KA et al., Microglial IL-10 and β-endorphin expres…, Brain, behavior, and immuni… (2021) | pd | 4 | [10.1016/j.bbi.2021.04.007](https://doi.org/10.1016/j.bbi.2021.04.007) | [33862171](https://www.ncbi.nlm.nih.gov/pubmed/33862171) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-08-28T12:50:34.647256+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmad_2021 | irrelevant | 0 | 0 | The study is a mechanistic pharmacological investigation of antineuropathic pain mechanisms in rats, reporting ED50 and EC50 values rather than pharmacokinetic disposition parameters (CL, V, ka, etc.) for mirogabalin. |
| popPK | Calandre_2016 | irrelevant | 1 | 0 | The paper is a review of clinical pharmacology and therapeutic use without original quantitative PK parameter values for mirogabalin. |
| PD | Calandre_2016 | not_relevant | 1 | 0 | The text is a review summary that qualitatively discusses clinical pharmacology and efficacy but does not provide specific numeric PD parameters or exposure-response data for mirogabalin. |
| popPK | Hong_2024 | irrelevant | 0 | 0 | The paper is a pharmacodynamic model-based meta-analysis focusing on efficacy and placebo effects, not a pharmacokinetic study reporting disposition parameters like clearance or volume for mirogabalin. |
| popPK | Hutmacher_2016 | irrelevant | 0 | 0 | The paper focuses on exposure-response modeling for efficacy and safety, not on reporting quantitative pharmacokinetic disposition parameters (CL, V, ka) for mirogabalin. |
| PD | Jansen_2018 | not_relevant | 0 | 0 | The study focuses on pharmacokinetics and safety/tolerability (adverse events) without reporting quantitative pharmacodynamic parameters or exposure-response modeling. |
| popPK | Jansen_2018_2 | irrelevant | 2 | 0 | The study is a drug-drug interaction trial reporting only relative changes (ratios) in peak concentration, not absolute quantitative disposition parameters (CL, V, t1/2) for mirogabalin. |
| PD | Jansen_2018_2 | not_relevant | 2 | 1 | The paper reports qualitative PD interactions and PK ratios but does not provide numeric PD parameters (e.g., Emax, EC50) or concentration-effect curves for mirogabalin. |
| popPK | Kitano_2019 | irrelevant | 4 | 2 | The paper is a review that summarizes PK properties (half-life, clearance, protein binding) but does not present original quantitative population-PK model parameters (CL, V, Q, ka) or a compartmental model for mirogabalin. |
| PGx | Sloan_2022 | not_relevant | 0 | 0 | The paper is a general review of treatments for painful diabetic neuropathy and mentions mirogabalin only as an emerging therapy without reporting any pharmacogenomic data or specific PK/PD parameter changes. |
| popPK | Tang_2023 | relevant | 4 | 6 | The paper is a review that reports specific quantitative PK parameters (CL, T1/2, renal clearance) for mirogabalin in the text, but it lacks a compartmental or population-PK model structure. |
| PD | Tang_2023 | not_relevant | 2 | 0 | The paper is a narrative review summarizing clinical trials and does not present original pharmacodynamic modeling or extractable numeric PD parameters (e.g., Emax, EC50) for mirogabalin. |
| popPK | Wu_2022 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study investigating the mechanism of action (Na+ channel inhibition) of mirogabalin, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Yin_2016 | relevant | 10 | 2 | The paper is a population PK study for mirogabalin, but the specific numeric parameter values (CL, V, Q, etc.) are not present in the provided text, which only reports relative changes and simulation outcomes. |
| popPK | Zajączkowska_2021 | irrelevant | 3 | 2 | The paper is a narrative review that summarizes PK properties (half-life, Tmax, protein binding) but does not report original quantitative compartmental parameters (CL, V, Q, ka) or population PK model estimates. |
| PD | Zajączkowska_2021 | not_relevant | 2 | 1 | The text is a review article discussing mechanism of action and general PK/PD properties without providing specific numeric PD parameters or extractable concentration-effect curves. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_mirogabalin`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
