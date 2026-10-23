<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;ceftazidime&quot;}]"></div>

# ceftazidime

- **generic name:** ceftazidime
- **ATC codes:** `J01DD02`
- **DrugBank:** [DB00438](https://go.drugbank.com/drugs/DB00438) · **PubChem:** [CID 5481173](https://pubchem.ncbi.nlm.nih.gov/compound/5481173)
- **molar mass:** 546.576 g/mol (C22H22N6O7S2) — DrugBank
- **groups:** approved, investigational

## About

Ceftazidime is a third-generation cephalosporin antibiotic used to treat bacterial infections, including sepsis, urinary tract infections, pneumonia, meningitis, and Pseudomonas infections. It is an approved medicine and is included on the WHO list of essential medicines, so it is widely used around the world.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q808845](https://www.wikidata.org/wiki/Q808845) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Aubry_2025_B](drugs/drug_ceftazidime/pd_Aubry_2025_B.md) | total bacterial population ← ceftazidime/avibactam · direct Emax (saturable) effect | — | Aubry R et al., PKPD modeling of the inoculum effect of…, Antimicrobial agents and ch… (2025) | [10.1128/aac.01797-24](https://doi.org/10.1128/aac.01797-24) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ceftazidime).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| distribution | blood | `ALB` binder | DrugBank actor |
| excretion | kidney | `SLC22A6` inhibitor | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:37 | 1:29 | 0/0/0 | 1/0/0 | 0/0/0 | 107,584/2,191 | einfracz / qwen3.8-27b | 5 | 0/5 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 247 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Al_2023.pdf` | Al Jalali V et al., Plasma and intraperitoneal pharmacokine…, Clinical microbiology and i… (2023) | popPK | 10 | [10.1016/j.cmi.2023.06.002](https://doi.org/10.1016/j.cmi.2023.06.002) | [37301439](https://pubmed.ncbi.nlm.nih.gov/37301439) | The study reports population PK modeling of ceftazidime but the specific numeric parameter values are not present in the provided evidence. |
| `Tian_2026.pdf` | Tian S et al., PK/PD study of ceftazidime/avibactam in…, European journal of clinica… (2026) | popPK | 9 | [10.1007/s10096-025-05343-x](https://doi.org/10.1007/s10096-025-05343-x) | [41239168](https://pubmed.ncbi.nlm.nih.gov/41239168) | Study reports quantitative PK parameters (clearance) for ceftazidime in humans, though volume of distribution and compartmental model details are not explicitly provided in the text. |
| `Sy_2019.pdf` | Sy SKB et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacokinetics (2019) | popPK | 8 | [10.1007/s40262-018-0705-y](https://doi.org/10.1007/s40262-018-0705-y) | [30097887](https://pubmed.ncbi.nlm.nih.gov/30097887) | The paper describes population PK models for ceftazidime but the provided text is an abstract/overview that lacks specific numeric parameter values (CL, V, Q). |

<sub>queue written 2026-10-07T10:36:46.482783+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Al_2023 | relevant | 10 | 0 | The study reports population PK modeling of ceftazidime but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Aubry_2025 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic investigation of the inoculum effect, and the pharmacokinetic data for ceftazidime is cited from a previous external study (Sy et al., 2018) rather than reported as original quantitative disposition parameters in this paper. |
| popPK | Benítez-Cano_2026 | relevant | 10 | 4 | The study develops a population PK model for ceftazidime in humans, but specific parameter estimates (CL, V, Q) are not listed in the provided text, likely residing in the supplementary material. |
| popPK | Cojutti_2024 | irrelevant | 0 | 0 | The study focuses on the PK/PD of the combination antibiotic ceftazidime/avibactam, not ceftazidime monotherapy, and no specific numeric PK parameters for ceftazidime are provided in the evidence. |
| popPK | Han_2025 | irrelevant | 3 | 0 | This is a Monte Carlo simulation study using pre-existing PK parameters to evaluate dosing regimens, and no original quantitative PK parameter values (CL, V, etc.) for ceftazidime are provided in the evidence. |
| popPK | Karakonstantis_2024 | irrelevant | 0 | 0 | This is a systematic review of cefiderocol antimicrobial susceptibility, not a pharmacokinetic study of ceftazidime. |
| popPK | Lombardi_2024 | irrelevant | 0 | 0 | The paper is a review of new antibiotics in liver transplantation and discusses ceftazidime only as part of the ceftazidime/avibactam combination without reporting specific quantitative pharmacokinetic parameters (CL, V, ka) for ceftazidime alone. |
| popPK | Nichols_2018 | irrelevant | 0 | 0 | The paper is a review focused on the PK/PD targets of the beta-lactamase inhibitor avibactam, not on the quantitative pharmacokinetic parameters of the subject drug ceftazidime. |
| popPK | Nichols_2022 | irrelevant | 2 | 0 | This is a review of translational biology and PK/PD that reports qualitative efficacy and simulation percentages rather than original quantitative PK parameters (CL, V, Q) for ceftazidime. |
| popPK | Qian_2026 | irrelevant | 1 | 0 | The study reports exposure-response relationships and trough concentrations (Cmin) for ceftazidime-avibactam but does not provide quantitative pharmacokinetic disposition parameters such as clearance, volume of distribution, or a compartmental model. |
| popPK | Sy_2019 | relevant | 8 | 0 | The paper describes population PK models for ceftazidime but the provided text is an abstract/overview that lacks specific numeric parameter values (CL, V, Q). |
| popPK | Zhanel_2019 | irrelevant | 0 | 0 | The paper is a review of cefiderocol, and ceftazidime is only mentioned as a structural or clinical comparator without any quantitative PK parameters being reported for it. |
| popPK | de_2018 | irrelevant | 2 | 0 | This is a review article discussing clinical applications of population PK models generally, without providing specific quantitative PK parameters for ceftazidime or any other specific antibiotic. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
