<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;secukinumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Secukinumab_RodrguezFernndez2022_reference&quot;,&quot;label&quot;:&quot;Rodr\u00edguez-Fern\u00e1ndez_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_secukinumab/Secukinumab_RodrguezFernndez2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# secukinumab

- **generic name:** secukinumab
- **ATC codes:** `L04AC10`
- **DrugBank:** [DB09029](https://go.drugbank.com/drugs/DB09029) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Secukinumab is a monoclonal antibody that blocks interleukin-17 and is used to treat psoriasis, psoriatic arthritis, and ankylosing spondylitis. It is an approved medicine authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7444755](https://www.wikidata.org/wiki/Q7444755) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Start here

> **Rodríguez-Fernández_2022_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> review reference. [Run it in the simulator](drugs/drug_secukinumab/Secukinumab_RodrguezFernndez2022_reference.md?tab=Simulation) · [record](drugs/drug_secukinumab/Secukinumab_RodrguezFernndez2022_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL | 0.007917 | L/h | 0.19 L/day | patients with moderate to severe psoriasis | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Bruin_2017_reference](drugs/drug_secukinumab/Secukinumab_Bruin2017_reference.md) |
| CL | CL/F | 0.0575 | L/h | 1.38 L/d | review reference | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Rodríguez-Fernández_2022_reference](drugs/drug_secukinumab/Secukinumab_RodrguezFernndez2022_reference.md) |
| V | V/F | 24.9 | L | 24.9 L | review reference | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Rodríguez-Fernández_2022_reference](drugs/drug_secukinumab/Secukinumab_RodrguezFernndez2022_reference.md) |
| ka | kabs | 0.0075 | 1/h | 0.18 1/day | patients with moderate to severe psoriasis | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Bruin_2017_reference](drugs/drug_secukinumab/Secukinumab_Bruin2017_reference.md) |
| ka | kabs | 0.03783 | 1/h | 0.908 day−1 | review reference | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Rodríguez-Fernández_2022_reference](drugs/drug_secukinumab/Secukinumab_RodrguezFernndez2022_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">0.001</text><line x1="365.0" y1="18" x2="365.0" y2="58" stroke="#ddd"/><text x="365.0" y="72" font-size="10" text-anchor="middle">0.01</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">0.1</text><text x="184" y="34.0" font-size="11" text-anchor="end">Bruin_2017 · CL</text><circle cx="347.2" cy="30.0" r="4" fill="#ef6c00"><title>Bruin_2017 · CL: 0.007917 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Rodríguez-Fernández_2022 · CL/F</text><circle cx="497.9" cy="46.0" r="4" fill="#2e7d32"><title>Rodríguez-Fernández_2022 · CL/F: 0.0575 L/h</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Rodríguez-Fernández_2022_reference](drugs/drug_secukinumab/Secukinumab_RodrguezFernndez2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Rodríguez-Fernández K et al., Impact of Pharmacokinetic and Pharmacod…, Pharmaceutics (2022) | [10.3390/pharmaceutics14030654](https://doi.org/10.3390/pharmaceutics14030654) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: model_quarantined: Vd, Tlag left at base-class defaults</sub> | [Bruin_2017_reference](drugs/drug_secukinumab/Secukinumab_Bruin2017_reference.md) | held back | 1-compartment, oral | 6 | Bruin G et al., Population Pharmacokinetic Modeling of…, Journal of clinical pharmac… (2017) | [10.1002/jcph.876](https://doi.org/10.1002/jcph.876) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Dumortier_2025_reference](drugs/drug_secukinumab/Secukinumab_Dumortier2025_reference.md) | — | 1-compartment (no model) | 0 | Dumortier T et al., Model-Informed Drug Development-Based B…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3716](https://doi.org/10.1002/cpt.3716) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Rodriguez-Fernandez_2024_PASI](drugs/drug_secukinumab/pd_Rodriguez_Fernandez_2024_PASI.md) | Psoriasis Area and Severity Index ← secukinumab · indirect response — drug inhibits the production of Psoriasis Area and Severity Index | model (no simulator) | Rodriguez-Fernandez K et al., Personalized Secukinumab Treatment in P…, Pharmaceutics (2024) | [10.3390/pharmaceutics16121576](https://doi.org/10.3390/pharmaceutics16121576) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:32 | 2:47 | 1/1/1 | 0/0/1 | 0/0/0 | 284,408/20,047 | einfracz / qwen3.8-27b | 8 | 0/8 | 8/0 | 0 |

## Coverage

- **PubMed hits:** 17 matched, 14 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 1  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhiwei_2025.pdf` | Zhiwei L et al., Physiologically Based Pharmacokinetic/P…, Journal of clinical pharmac… (2025) | popPK | 9 | [10.1002/jcph.70056](https://doi.org/10.1002/jcph.70056) | [40464650](https://pubmed.ncbi.nlm.nih.gov/40464650) | The study describes a PBPK model for secukinumab in humans but provides no specific numeric PK parameter values (CL, V, etc.) in the text. |
| `Liu_2026.pdf` | Liu Y et al., Model-Based Meta-Analysis of IL-17 A In…, Clinical reviews in allergy… (2026) | popPK | 5 | [10.1007/s12016-025-09123-5](https://doi.org/10.1007/s12016-025-09123-5) | [41543629](https://pubmed.ncbi.nlm.nih.gov/41543629) | The paper is a model-based meta-analysis that uses secukinumab PK parameters extracted from FDA/EMA documents to build an exposure-response model, but the specific numeric PK values are not presented in the provided evidence. |

<sub>queue written 2026-10-07T00:30:02.437212+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alavi_2026 | relevant | 8 | 2 | The study describes a population PK model for secukinumab and reports qualitative covariate effects (e.g., % change in concentration), but the specific quantitative parameter values (CL, V, ka, half-life) are not explicitly stated in the text. |
| popPK | Fromage_2024 | irrelevant | 4 | 0 | The paper describes a case report using a population PK model for secukinumab but provides no quantitative disposition parameter values (CL, V, etc.) in the evidence. |
| popPK | Liu_2023 | irrelevant | 2 | 0 | The paper focuses on exposure-response modeling for efficacy outcomes (PASI scores) to optimize dose regimens, not on characterizing the population pharmacokinetic parameters (CL, V, ka, half-life) of secukinumab itself. |
| popPK | Liu_2026 | relevant | 5 | 0 | The paper is a model-based meta-analysis that uses secukinumab PK parameters extracted from FDA/EMA documents to build an exposure-response model, but the specific numeric PK values are not presented in the provided evidence. |
| popPK | Marzo-Ortega_2017 | irrelevant | 0 | 0 | The paper reports long-term efficacy and safety outcomes for secukinumab in ankylosing spondylitis but does not contain pharmacokinetic disposition parameters. |
| popPK | McInnes_2017 | irrelevant | 0 | 0 | This is a clinical efficacy and safety study (FUTURE 2) reporting ACR/PASI outcomes and adverse events, with no population pharmacokinetic parameter estimation or quantitative disposition data for secukinumab. |
| popPK | Ramanathan_2025 | relevant | 4 | 0 | Secukinumab is one of 13 antibodies used to validate a diffusion dimensionality absorption model, but no specific quantitative PK parameters (e.g., CL, V, ka) are reported in the provided evidence. |
| popPK | Zhiwei_2025 | relevant | 9 | 0 | The study describes a PBPK model for secukinumab in humans but provides no specific numeric PK parameter values (CL, V, etc.) in the text. |
| popPK | van_2020 | irrelevant | 0 | 0 | The paper is a Phase 3 clinical efficacy study reporting radiographic progression and clinical responses, containing no pharmacokinetic parameters (CL, V, t1/2) for secukinumab. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 00:30 UTC</sub>
