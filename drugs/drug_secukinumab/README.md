<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;secukinumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;pd_Rodriguez_Fernandez_2024_PASI&quot;,&quot;label&quot;:&quot;Rodriguez-Fernandez_2024 \u00b7 PASI&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_secukinumab/pd_Rodriguez_Fernandez_2024_PASI.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# secukinumab

- **generic name:** secukinumab
- **ATC codes:** `L04AC10`
- **DrugBank:** [DB09029](https://go.drugbank.com/drugs/DB09029) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Secukinumab is a monoclonal antibody that blocks interleukin-17 and is used to treat psoriasis, psoriatic arthritis, and ankylosing spondylitis. It is an approved medicine authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7444755](https://www.wikidata.org/wiki/Q7444755) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 00:24 | 4:20 | 0/3/1 | 0/0/1 | 0/0/0 | 224,725/28,806 | einfracz / qwen3.8-27b | 8 | 0/8 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: model_quarantined: Vd, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Bruin_2017_reference](drugs/drug_secukinumab/Secukinumab_Bruin2017_reference.md) | held back | 1-compartment, oral | 5 | Bruin G et al., Population Pharmacokinetic Modeling of…, Journal of clinical pharmac… (2017) | [10.1002/jcph.876](https://doi.org/10.1002/jcph.876) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Dumortier_2025_reference](drugs/drug_secukinumab/Secukinumab_Dumortier2025_reference.md) | — | 1-compartment (no model) | 0 | Dumortier T et al., Model-Informed Drug Development-Based B…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3716](https://doi.org/10.1002/cpt.3716) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Rodriguez-Fernandez_2024_reference](drugs/drug_secukinumab/Secukinumab_RodriguezFernandez2024_reference.md) | — | 1-compartment (no model) | 0 | Rodriguez-Fernandez K et al., Personalized Secukinumab Treatment in P…, Pharmaceutics (2024) | [10.3390/pharmaceutics16121576](https://doi.org/10.3390/pharmaceutics16121576) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Rodríguez-Fernández_2022_reference](drugs/drug_secukinumab/Secukinumab_RodrguezFernndez2022_reference.md) | — | 3-compartment (no model) | 6 | Rodríguez-Fernández K et al., Impact of Pharmacokinetic and Pharmacod…, Pharmaceutics (2022) | [10.3390/pharmaceutics14030654](https://doi.org/10.3390/pharmaceutics14030654) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Rodriguez-Fernandez_2024_PASI](drugs/drug_secukinumab/pd_Rodriguez_Fernandez_2024_PASI.md) | Psoriasis Area and Severity Index ← secukinumab · indirect response — drug inhibits the production of Psoriasis Area and Severity Index | ▶ model + simulator | Rodriguez-Fernandez K et al., Personalized Secukinumab Treatment in P…, Pharmaceutics (2024) | [10.3390/pharmaceutics16121576](https://doi.org/10.3390/pharmaceutics16121576) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=secukinumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: IL17A (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 17 matched, 14 returned
- **screened:** 4  ·  **relevant:** 3
- **records:** 4  ·  extracted 0  ·  needs_review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhiwei_2025.pdf` | Zhiwei L et al., Physiologically Based Pharmacokinetic/P…, Journal of clinical pharmac… (2025) | popPK | 7 | [10.1002/jcph.70056](https://doi.org/10.1002/jcph.70056) | [40464650](https://pubmed.ncbi.nlm.nih.gov/40464650) | The paper describes a PBPK model for secukinumab in humans, but the evidence provided contains no numeric PK parameter values (e.g., CL, V, ka), only qualitative dose recommendations. |

<sub>queue written 2026-10-15T00:20:28.277089+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alavi_2026 | relevant | 9 | 2 | The paper describes a population PK study for secukinumab in humans, but specific quantitative parameter values (CL, V, etc.) are not present in the text, which refers to "Supporting information" and figures for detailed model results. |
| popPK | Dumortier_2025 | relevant | 10 | 4 | The paper is a popPK study for secukinumab, but the specific parameter estimates (CL, V, Q) are in Supplementary Table S3 and Methods, while the main text only reports derived steady-state exposure metrics. |
| popPK | Fromage_2024 | irrelevant | 2 | 0 | The paper describes a case report using a population PK model for simulation and dose adjustment, but does not report original quantitative disposition parameter estimates (e.g., CL, V, theta values) for secukinumab in the provided evidence. |
| popPK | Liu_2023 | irrelevant | 0 | 0 | The study is a model-based meta-analysis for dose optimization using exposure-response (efficacy) modeling, and does not report quantitative pharmacokinetic parameters (e.g., clearance, volume, half-life) for secukinumab. |
| popPK | Liu_2026 | irrelevant | 2 | 0 | This is a model-based meta-analysis for exposure-response relationships in psoriasis, not a primary pharmacokinetic study reporting new quantitative disposition parameters (CL, V, etc.) for secukinumab. |
| popPK | Marzo-Ortega_2017 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety study (Phase III MEASURE 2) reporting clinical response rates and adverse events, with no pharmacokinetic parameters or model reported. |
| popPK | McInnes_2017 | irrelevant | 0 | 0 | The paper reports long-term clinical efficacy and safety outcomes (ACR response rates, adverse events) for secukinumab in psoriatic arthritis, but contains no pharmacokinetic parameters or disposition data. |
| popPK | Ramanathan_2025 | irrelevant | 4 | 2 | The study uses secukinumab as one of 13 comparator drugs to validate a theoretical diffusion model but does not report specific, distinct population PK parameters (CL, V) for secukinumab in the provided evidence, nor is it a primary PK study of secukinumab. |
| popPK | Zhiwei_2025 | relevant | 7 | 0 | The paper describes a PBPK model for secukinumab in humans, but the evidence provided contains no numeric PK parameter values (e.g., CL, V, ka), only qualitative dose recommendations. |
| popPK | van_2020 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting radiographic progression and safety outcomes for secukinumab, containing no pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 00:20 UTC</sub>
