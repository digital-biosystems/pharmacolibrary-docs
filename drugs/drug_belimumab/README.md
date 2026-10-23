<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;belimumab&quot;}]"></div>

# belimumab

- **generic name:** belimumab
- **ATC codes:** `L04AG04`
- **DrugBank:** [DB08879](https://go.drugbank.com/drugs/DB08879) · **PubChem:** none
- **groups:** approved, investigational

## About

Belimumab is a monoclonal antibody immunosuppressant used to treat systemic lupus erythematosus, including lupus nephritis. It is authorised in the European Union and is an approved medicine, used mainly for lupus.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1996249](https://www.wikidata.org/wiki/Q1996249) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 0.008958 | L/h | 215 mL/day | patients with systemic lupus erythematosus | ?subject_count? | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Struemper_2013_reference](drugs/drug_belimumab/Belimumab_Struemper2013_reference.md) |
| CL | CL | 0.009917 | L/h | 238 ml/day | adults and pediatric patients with systemic lupus erythematosus | &gt;= | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Zhou_2021_reference](drugs/drug_belimumab/Belimumab_Zhou2021_reference.md) |
| V | V1 | 2.597 | L | 2597 ml | adults and pediatric patients with systemic lupus erythematosus | &gt;= | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Zhou_2021_reference](drugs/drug_belimumab/Belimumab_Zhou2021_reference.md) |
| t½ | t1/2z | 465.6 | h | 19.4 days | patients with systemic lupus erythematosus | ?subject_count? | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Struemper_2013_reference](drugs/drug_belimumab/Belimumab_Struemper2013_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">0.001</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">0.01</text><text x="184" y="34.0" font-size="11" text-anchor="end">Struemper_2013 · CL</text><circle cx="523.3" cy="30.0" r="4" fill="#ef6c00"><title>Struemper_2013 · CL: 0.008958 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Zhou_2021 · CL</text><circle cx="538.7" cy="46.0" r="4" fill="#ef6c00"><title>Zhou_2021 · CL: 0.009917 L/h</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [Struemper_2013_reference](drugs/drug_belimumab/Belimumab_Struemper2013_reference.md) | — | 1-compartment (no model) | 3 | Struemper H et al., Population pharmacokinetics of belimuma…, Journal of clinical pharmac… (2013) | [10.1002/jcph.104](https://doi.org/10.1002/jcph.104) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [Zhou_2021_reference](drugs/drug_belimumab/Belimumab_Zhou2021_reference.md) | — | 2-compartment (no model) | 4 | Zhou X et al., Prediction of Belimumab Pharmacokinetic…, Drugs in R&D (2021) | [10.1007/s40268-021-00363-2](https://doi.org/10.1007/s40268-021-00363-2) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Brunner_2025_reference](drugs/drug_belimumab/Belimumab_Brunner2025_reference.md) | — | 1-compartment (no model) | 0 | Brunner HI et al., Pharmacokinetics, Pharmacodynamics, and…, Arthritis care & research (2026) | [10.1002/acr.25700](https://doi.org/10.1002/acr.25700) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Dimelow_2021_reference](drugs/drug_belimumab/Belimumab_Dimelow2021_reference.md) | — | 1-compartment (no model) | 0 | Dimelow R et al., Pharmacokinetics of Belimumab in Childr…, Clinical pharmacology in dr… (2021) | [10.1002/cpdd.889](https://doi.org/10.1002/cpdd.889) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Struemper_2018_reference](drugs/drug_belimumab/Belimumab_Struemper2018_reference.md) | — | 3-compartment (no model) | 5 | Struemper H et al., Population Pharmacokinetic and Pharmaco…, Clinical pharmacokinetics (2018) | [10.1007/s40262-017-0586-5](https://doi.org/10.1007/s40262-017-0586-5) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Vaskeikina_2026_FVC](drugs/drug_belimumab/pd_Vaskeikina_2026_FVC.md) | forced vital capacity ← belimumab · direct Emax (saturable) effect | — | Vaskeikina M et al., Systematic Review and Model-Based Meta-…, Pharmaceutics (2026) | [10.3390/pharmaceutics18020250](https://doi.org/10.3390/pharmaceutics18020250) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Wu_2025_SRI](drugs/drug_belimumab/pd_Wu_2025_SRI.md) | SLE Responder Index (SRI) response ← belimumab · direct Emax (saturable) effect | — | Wu J et al., Inter-regional pharmacokinetics and exp…, British journal of clinical… (2025) | [10.1111/bcp.16263](https://doi.org/10.1111/bcp.16263) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=belimumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: TNFSF13B (blocker).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:31 | 2:05 | 2/3/0 | 1/1/0 | 0/0/0 | 204,064/8,605 | einfracz / qwen3.8-27b | 10 | 0/10 | 10/0 | 0 |

## Coverage

- **PubMed hits:** 16 matched, 15 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 5  ·  extracted 0  ·  needs review 2  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Struemper_2013.pdf` | Struemper H et al., Population pharmacokinetics of belimuma…, Journal of clinical pharmac… (2013) | popPK | 10 | [10.1002/jcph.104](https://doi.org/10.1002/jcph.104) | [23681782](https://pubmed.ncbi.nlm.nih.gov/23681782) | The evidence explicitly provides numeric values for population clearance (215 mL/day), steady-state volume of distribution (5.29 L), and terminal half-life (19.4 days) from a two-compartment model. |

<sub>queue written 2026-10-06 23:30 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Balevic_2023 | irrelevant | 1 | 0 | The study is an exposure-response and pharmacodynamic (PD) analysis for efficacy extrapolation, not a pharmacokinetic (PK) study reporting quantitative disposition parameters like clearance or volume for belimumab. |
| popPK | Dimelow_2024 | relevant | 8 | 3 | The paper describes the structure of a population PK model for belimumab and cites some exposure metrics (Cavg) from previous studies, but the specific numeric model parameters (CL, V, Q) are not listed in the provided text or tables. |
| popPK | Halpern_2006 | irrelevant | 4 | 0 | The paper describes pharmacokinetics in cynomolgus monkeys but provides no numeric quantitative PK parameter values (CL, V, t1/2) in the evidence provided. |
| popPK | Kojima_2025 | irrelevant | 0 | 0 | This is a clinical outcome study focusing on disease activity scores (SELENA-SLEDAI) and timing of initiation, containing no pharmacokinetic parameters. |
| popPK | Kowalczyk-Quintas_2018 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of belimumab's binding to membrane-bound BAFF, reporting no pharmacokinetic disposition parameters such as clearance or volume. |
| popPK | Liu_2022 | irrelevant | 1 | 0 | The paper is a regulatory review that discusses population PK concepts and qualitative associations (e.g., proteinuria affecting clearance) but does not report specific numeric parameter values for belimumab. |
| popPK | Maeda_2023 | irrelevant | 0 | 0 | The paper is an immunophenotyping study analyzing T-cell changes following belimumab treatment in SLE patients and does not report any pharmacokinetic parameters such as clearance or volume. |
| popPK | Vaskeikina_2026 | irrelevant | 0 | 0 | The paper is a model-based meta-analysis of clinical efficacy endpoints (mRSS and FVC) in systemic sclerosis, not a pharmacokinetic study, and reports no PK parameters for belimumab. |
| popPK | Wu_2025 | relevant | 10 | 2 | The paper describes a population PK model for belimumab in humans, but the specific parameter estimates (CL, Vc, etc.) are located in the Supporting Information or Figure S1, which are not included in the provided evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbelimumab%5D&body=Drug%3A%20belimumab%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_belimumab/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-06 23:30 UTC</sub>
