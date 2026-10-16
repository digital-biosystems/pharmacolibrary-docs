<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N04A&quot;,&quot;href&quot;:&quot;atc/N04A.md&quot;},{&quot;label&quot;:&quot;trihexyphenidyl&quot;}]"></div>

# trihexyphenidyl

- **generic name:** trihexyphenidyl
- **ATC codes:** `N04AA01`
- **DrugBank:** [DB00376](https://go.drugbank.com/drugs/DB00376) · **PubChem:** [CID 5572](https://pubchem.ncbi.nlm.nih.gov/compound/5572)
- **molar mass:** 301.4662 g/mol (C20H31NO) — DrugBank
- **groups:** approved, investigational

## About

Trihexyphenidyl is an anticholinergic (muscarinic antagonist) medicine used to treat Parkinson's disease and drug-induced movement disorders such as neuroleptic-related extrapyramidal symptoms and lingual-facial-buccal dyskinesia. It is an approved drug, though it is not authorised centrally in the European Union, and it is also being studied for investigational uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2991856](https://www.wikidata.org/wiki/Q2991856) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:31 | 7:06 | 0/0/0 | 1/0/0 | 0/0/0 | 165,540/2,185 | einfracz / qwen3.8-27b | 7 | 4/2 | 7/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 1.00).">rat</span> | [Sipos_1999_AA](drugs/drug_trihexyphenidyl/pd_Sipos_1999_AA.md) | ambulatory activity ← trihexyphenidyl · stimulation effect | — | Sipos ML et al., Dose-response curves and time-course ef…, Psychopharmacology (1999) | [10.1007/s002130051164](https://doi.org/10.1007/s002130051164) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 1.00).">rat</span> | [Sipos_1999_FMA](drugs/drug_trihexyphenidyl/pd_Sipos_1999_FMA.md) | fine motor activity ← trihexyphenidyl · stimulation effect | — | Sipos ML et al., Dose-response curves and time-course ef…, Psychopharmacology (1999) | [10.1007/s002130051164](https://doi.org/10.1007/s002130051164) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=trihexyphenidyl).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| distribution | blood | `ALB` binder | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ADRB3 (target), CHRM1 (target), CHRM2 (target), CHRM3 (target), CHRM4 (target), CHRM5 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 47 matched, 42 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_7 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hey_1994.pdf` | Hey C et al., Muscarinic inhibition of endogenous nor…, Naunyn-Schmiedeberg's archi… (1994) | pd | 4 | [10.1007/BF00173015](https://doi.org/10.1007/BF00173015) | [7870185](https://www.ncbi.nlm.nih.gov/pubmed/7870185) | metadata signals extractable PD data (EC50) |
| `Hudkins_1991.pdf` | Hudkins RL et al., M1 muscarinic antagonists interact with…, Life sciences (1991) | pd | 4 | [10.1016/0024-3205(91)90135-x](https://doi.org/10.1016/0024-3205(91)90135-x) | [1658507](https://www.ncbi.nlm.nih.gov/pubmed/1658507) | metadata signals extractable PD data (IC50) |
| `Loenders_1994.pdf` | Loenders B et al., Effects of enantiomers of M3 antagonist…, Archives internationales de… (1994) | pd | 4 | not captured | [7710307](https://www.ncbi.nlm.nih.gov/pubmed/7710307) | metadata signals extractable PD data (IC50) |
| `Marino_1997.pdf` | Marino F et al., Muscarinic modulation of endogenous nor…, Journal of autonomic pharma… (1997) | pd | 4 | [10.1046/j.1365-2680.1997.00057.x](https://doi.org/10.1046/j.1365-2680.1997.00057.x) | [9610431](https://www.ncbi.nlm.nih.gov/pubmed/9610431) | metadata signals extractable PD data (EC50) |
| `Monsma_1988.pdf` | Monsma FJ et al., Inhibition of phosphoinositide turnover…, Biochemical pharmacology (1988) | pd | 4 | [10.1016/0006-2952(88)90371-1](https://doi.org/10.1016/0006-2952(88)90371-1) | [2839194](https://www.ncbi.nlm.nih.gov/pubmed/2839194) | metadata signals extractable PD data (EC50) |
| `Syvälahti_1988.pdf` | Syvälahti EK et al., Effects of antiparkinsonian drugs on mu…, Pharmacology & toxicology (1988) | pd | 4 | [10.1111/j.1600-0773.1988.tb01852.x](https://doi.org/10.1111/j.1600-0773.1988.tb01852.x) | [3353357](https://www.ncbi.nlm.nih.gov/pubmed/3353357) | metadata signals extractable PD data (IC50) |
| `Zhang_1990.pdf` | Zhang GQ et al., [Effects of trihexyphenidyl on basilar…, Zhongguo yao li xue bao = A… (1990) | pd | 4 | not captured | [2104482](https://www.ncbi.nlm.nih.gov/pubmed/2104482) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T07:31:04.272569+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_2025 | irrelevant | 0 | 0 | The study models the pharmacokinetics of quetiapine, and trihexyphenidyl is listed only as a concomitant medication without specific PK parameter reporting. |
| popPK | Grimm_1994 | irrelevant | 0 | 0 | This is a pharmacodynamic study characterizing muscarinic receptors in rabbit vas deferens, using trihexyphenidyl only as an antagonist to determine affinity constants (pKB), not as the subject of a pharmacokinetic study. |
| popPK | Hey_1994 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization of muscarinic receptors using trihexyphenidyl as an antagonist, not a pharmacokinetic study. |
| popPK | Luo_2024 | irrelevant | 0 | 0 | The study is a machine learning and in vivo zebrafish neuropharmacology paper focused on drug classification, containing no pharmacokinetic parameters for trihexyphenidyl. |
| popPK | Marino_1997 | irrelevant | 0 | 0 | The study is a pharmacological/mechanistic investigation of muscarinic receptors in guinea-pig colon, not a pharmacokinetic study reporting disposition parameters for trihexyphenidyl. |
| popPK | Methaneethorn_2018 | irrelevant | 0 | 0 | The paper is a review of valproic acid pharmacokinetics, not trihexyphenidyl. |
| popPK | Methaneethorn_2020 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of valproic acid, not trihexyphenidyl. |
| popPK | Monsma_1988 | irrelevant | 0 | 0 | The study is an in vitro mechanistic analysis of muscarinic receptor occupancy and phosphoinositide turnover, not a pharmacokinetic study. |
| popPK | Onali_1994 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological receptor binding/functional assay (measuring pA2 values) and does not report population-pharmacokinetic disposition parameters for trihexyphenidyl. |
| popPK | Shimosato_2001 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in mice examining conditioned place preference and locomotor activity, with no pharmacokinetic parameters (CL, V, etc.) reported for trihexyphenidyl. |
| PGx | Takei_2024 | not_relevant | 0 | 0 | The paper reports a case of drug-drug interaction involving trihexyphenidyl but does not report pharmacogenomic effects of gene variants on its PK/PD. |
| PGx | Vargas-Toscano_2020 | not_relevant | 0 | 0 | The paper reports a drug screening and repurposing study on glioblastoma stem cells; it contains no information on gene variants, genotypes, or pharmacogenomic effects on trihexyphenidyl PK/PD. |
| popPK | Yukawa_2002 | irrelevant | 0 | 0 | The study reports population PK parameters for haloperidol, not trihexyphenidyl, which is mentioned only as a concomitant medication. |
| popPK | Zhai_2025 | irrelevant | 0 | 0 | The paper is a mechanistic study on levodopa-induced dyskinesia in mice using electrophysiology and imaging, reporting no quantitative pharmacokinetic parameters for trihexyphenidyl. |
| popPK | Zheng_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of quetiapine, and trihexyphenidyl is only listed as a co-administered medication without any PK data reported for it. |
| popPK | unknown_2021 | irrelevant | 0 | 0 | no_text gate: only 24 chars of text extracted (&lt; 400) |
| PGx | van_2006 | not_relevant | 1 | 2 | The paper reports an association between CYP2D6 polymorphisms and metoclopramide-induced adverse reactions; trihexyphenidyl is only mentioned as the antidote used for treatment. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
