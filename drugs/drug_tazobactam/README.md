<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01C&quot;,&quot;href&quot;:&quot;atc/J01C.md&quot;},{&quot;label&quot;:&quot;tazobactam&quot;}]"></div>

# tazobactam

- **generic name:** tazobactam
- **ATC codes:** `J01CG02`
- **DrugBank:** [DB01606](https://go.drugbank.com/drugs/DB01606) · **PubChem:** [CID 123630](https://pubchem.ncbi.nlm.nih.gov/compound/123630)
- **molar mass:** 300.291 g/mol (C10H12N4O5S) — DrugBank
- **groups:** approved, investigational

## About

Tazobactam is a beta-lactamase inhibitor used in combination with penicillin antibiotics to treat bacterial infections. It is an approved medicine and is widely used, mainly in combination products rather than alone.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423376](https://www.wikidata.org/wiki/Q423376) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Abodakpi_2019_MIC](drugs/drug_tazobactam/pd_Abodakpi_2019_MIC.md) | piperacillin MIC ← tazobactam · direct sigmoid Emax (Hill) effect | — | Abodakpi H et al., Optimal Piperacillin-Tazobactam Dosing…, Antimicrobial agents and ch… (2019) | [10.1128/AAC.01906-18](https://doi.org/10.1128/AAC.01906-18) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tazobactam).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | `SLC22A6` inhibitor/substrate, `SLC22A8` inhibitor/substrate | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:48 | 1:14 | 0/0/0 | 0/1/0 | 0/0/0 | 170,656/2,097 | einfracz / qwen3.8-27b | 10 | 0/10 | 10/0 | 0 |

## Coverage

- **PubMed hits:** 252 matched, 20 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hemmersbach-Miller_2023.pdf` | Hemmersbach-Miller M et al., Population Pharmacokinetics of Piperaci…, Clinical pharmacokinetics (2023) | popPK | 10 | [10.1007/s40262-022-01198-z](https://doi.org/10.1007/s40262-022-01198-z) | [36633812](https://pubmed.ncbi.nlm.nih.gov/36633812) | The study is a population PK analysis of tazobactam in humans, but the specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided text, which focuses on covariate impacts and simulation conclusions. |

<sub>queue written 2026-10-07 10:47 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abodakpi_2019 | irrelevant | 2 | 0 | The study focuses on in-vitro pharmacodynamics and efficacy using a hollow-fiber infection model rather than reporting quantitative population pharmacokinetic parameters for tazobactam. |
| popPK | Assefa_2024 | irrelevant | 1 | 0 | The paper is a systematic review of PK/PD targets (efficacy indices like fT&gt;CT) and does not report pharmacokinetic disposition parameters (clearance, volume, half-life) for tazobactam. |
| popPK | Benítez-Cano_2026 | relevant | 7 | 2 | The study is a population PK trial for tazobactam (as part of ceftolozane/tazobactam) in humans, but the specific numeric PK parameters (CL, V, Q) are likely in the supplementary material or tables not provided, with only AUC and penetration ratios visible in the text. |
| popPK | Cho_2015 | irrelevant | 2 | 0 | This is a general drug monograph/review focusing on ceftolozane, and while it mentions that a two-compartment model describes tazobactam's PK, it does not report specific quantitative parameter values (CL, V, etc.) in the provided text. |
| popPK | Cojutti_2025 | irrelevant | 1 | 0 | The study performs population PK modeling exclusively for ceftolozane, explicitly stating that only ceftolozane concentrations were modeled, while tazobactam concentrations were measured but not used for parameter estimation. |
| popPK | Dheyriat_2022 | irrelevant | 0 | 0 | The study is a PK/PD simulation evaluating dosage regimens, not a primary study reporting quantitative disposition parameters for tazobactam. |
| popPK | Dohmann_2025 | irrelevant | 1 | 1 | The study models the pharmacokinetics of piperacillin (the companion drug) and explicitly states that only piperacillin concentrations were measured and modeled, not tazobactam. |
| popPK | El-Haffaf_2021 | irrelevant | 1 | 1 | This is a review article summarizing range of parameters from other studies rather than an original study reporting a specific PK model or single set of numeric values for tazobactam. |
| popPK | Gatti_2021 | irrelevant | 1 | 0 | The paper is a narrative review focusing on clinical issues and therapeutic drug monitoring, and it does not report original quantitative pharmacokinetic parameter values for tazobactam. |
| popPK | Hemmersbach-Miller_2023 | relevant | 10 | 2 | The study is a population PK analysis of tazobactam in humans, but the specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided text, which focuses on covariate impacts and simulation conclusions. |
| popPK | Laporte-Amargos_2026 | irrelevant | 1 | 0 | The study characterizes the population pharmacokinetics of piperacillin only, and the full text explicitly states that tazobactam concentrations were not measured. |
| popPK | Lodise_2006 | irrelevant | 2 | 0 | The paper is a review discussing pharmacodynamic concepts and mentions the application of PK modeling to piperacillin-tazobactam, but it does not report original quantitative PK parameter values (CL, V, etc.) for tazobactam in the provided text. |
| popPK | Lombardi_2024 | irrelevant | 0 | 0 | The paper is a clinical review discussing antibiotics in liver transplantation where tazobactam is only a component of combination therapies (ceftolozane/tazobactam, piperacillin-tazobactam) and no specific quantitative PK parameters for tazobactam itself are reported. |
| popPK | Lombardi_2026 | irrelevant | 0 | 0 | The paper is a clinical review of antibiotic combinations (including tazobactam) and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for tazobactam itself. |
| popPK | Principe_2022 | irrelevant | 0 | 0 | The paper is a review of new beta-lactam/beta-lactamase inhibitor combinations and does not report quantitative population pharmacokinetic parameters for tazobactam as the subject drug, mentioning it only as part of comparator regimens like piperacillin-tazobactam or in the context of new inhibitors like enmetazobactam. |
| popPK | Rando_2024 | irrelevant | 1 | 1 | The paper is a systematic review without original extracted numeric parameter values in the provided evidence. |
| popPK | Roberts_2025 | irrelevant | 4 | 0 | The study reports a population PK model for piperacillin and meropenem, and while tazobactam concentrations were measured and mentioned, the text focuses on piperacillin parameters and does not provide specific quantitative disposition parameter values (CL, V, Q) for tazobactam itself in the main text. |
| popPK | Shen_2023 | irrelevant | 0 | 0 | The paper is a review article discussing general principles of PK/PD modeling and referencing other drugs' data, without providing original quantitative PK parameter values for tazobactam. |
| popPK | Sun_2025 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for piperacillin, not tazobactam, despite the combination product being used. |
| popPK | Tseng_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters exclusively for piperacillin, not tazobactam. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btazobactam%5D&body=Drug%3A%20tazobactam%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tazobactam/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
