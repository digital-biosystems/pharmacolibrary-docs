<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;alemtuzumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Alemtuzumab_Dong2022_reference&quot;,&quot;label&quot;:&quot;Dong_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_alemtuzumab/Alemtuzumab_Dong2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# alemtuzumab

- **generic name:** alemtuzumab
- **ATC codes:** `L01XC04`, `L04AA34`, `L04AG06`
- **DrugBank:** [DB00087](https://go.drugbank.com/drugs/DB00087) · **PubChem:** none
- **groups:** approved, investigational

## About

Alemtuzumab is a monoclonal antibody used to treat multiple sclerosis and certain leukemias, including chronic lymphocytic leukemia and T-cell prolymphocytic leukemia. It remains authorised in the European Union, though one EU product has been withdrawn, and it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q420164](https://www.wikidata.org/wiki/Q420164) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Start here

> **Dong_2022_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> paediatric and young adult patients undergoing allogeneic haematopoietic cell transplantation, n = &gt;=29. [Run it in the simulator](drugs/drug_alemtuzumab/Alemtuzumab_Dong2022_reference.md?tab=Simulation) · [record](drugs/drug_alemtuzumab/Alemtuzumab_Dong2022_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 0.08 ‡ | L/h | 0.08 L/h/70 kg | paediatric and young adult patients undergoing allogeneic haematopoietic cell transplantation | &gt;=29 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Dong_2022_reference](drugs/drug_alemtuzumab/Alemtuzumab_Dong2022_reference.md) |
| V | V | 17.4 ‡ | L | 17.4 L/70 kg | paediatric and young adult patients undergoing allogeneic haematopoietic cell transplantation | &gt;=29 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Dong_2022_reference](drugs/drug_alemtuzumab/Alemtuzumab_Dong2022_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Dong_2022_reference](drugs/drug_alemtuzumab/Alemtuzumab_Dong2022_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Dong M et al., Model-informed precision dosing for ale…, British journal of clinical… (2022) | [10.1111/bcp.14955](https://doi.org/10.1111/bcp.14955) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Admiraal_2019_reference](drugs/drug_alemtuzumab/Alemtuzumab_Admiraal2019_reference.md) | — | 1-compartment (no model) | 6 | Admiraal R et al., Population Pharmacokinetics of Alemtuzu…, Clinical pharmacokinetics (2019) | [10.1007/s40262-019-00782-0](https://doi.org/10.1007/s40262-019-00782-0) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Mould_2007_reference](drugs/drug_alemtuzumab/Alemtuzumab_Mould2007_reference.md) | — | 1-compartment (no model) | 4 | Mould DR et al., Population pharmacokinetics-pharmacodyn…, British journal of clinical… (2007) | [10.1111/j.1365-2125.2007.02914.x](https://doi.org/10.1111/j.1365-2125.2007.02914.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Dong_2022_ALC](drugs/drug_alemtuzumab/pd_Dong_2022_ALC.md) | absolute lymphocyte count ← alemtuzumab · direct Emax (saturable) effect | — | Dong M et al., Model-informed precision dosing for ale…, British journal of clinical… (2022) | [10.1111/bcp.14955](https://doi.org/10.1111/bcp.14955) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Mould_2007_WBC](drugs/drug_alemtuzumab/pd_Mould_2007_WBC.md) | white blood cell (WBC) count ← alemtuzumab · indirect response — drug stimulates the production of white blood cell (WBC) count | model (no simulator) | Mould DR et al., Population pharmacokinetics-pharmacodyn…, British journal of clinical… (2007) | [10.1111/j.1365-2125.2007.02914.x](https://doi.org/10.1111/j.1365-2125.2007.02914.x) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [van_2025_Tcells](drugs/drug_alemtuzumab/pd_van_2025_Tcells.md) | T cells ← alemtuzumab · indirect response — drug stimulates the loss of T cells | model (no simulator) | van Vugt LK et al., Alemtuzumab Exposure and T Lymphocyte D…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3714](https://doi.org/10.1002/cpt.3714) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=alemtuzumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CD52 (antibody), FCGR1A (binder), FCGR2A (binder), FCGR2B (binder), FCGR2C (binder), FCGR3A (binder), FCGR3B (binder).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:05 | 6:13 | 1/2/0 | 3/0/0 | 0/0/0 | 158,457/10,151 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 0/5 | 4/1 | 0 |

## Coverage

- **PubMed hits:** 27 matched, 14 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 1  ·  needs review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dong_2022.pdf` | Dong M et al., Model-informed precision dosing for ale…, British journal of clinical… (2022) | popPK | 10 | [10.1111/bcp.14955](https://doi.org/10.1111/bcp.14955) | [34182590](https://pubmed.ncbi.nlm.nih.gov/34182590) | The paper reports a population PK model for alemtuzumab with explicit numeric values for clearance (0.080 L/h/70 kg) and volume of distribution (17.4 L/70 kg) in the abstract. |
| `Mould_2007.pdf` | Mould DR et al., Population pharmacokinetics-pharmacodyn…, British journal of clinical… (2007) | popPK | 10 | [10.1111/j.1365-2125.2007.02914.x](https://doi.org/10.1111/j.1365-2125.2007.02914.x) | [17506867](https://pubmed.ncbi.nlm.nih.gov/17506867) | The paper reports a population PK model for alemtuzumab with explicit numeric values for V1, Q, V2, Vmax, and Km in the abstract. |
| `Zwart_2023.pdf` | Zwart TC et al., Population pharmacokinetics of subcutan…, British journal of clinical… (2023) | popPK | 10 | [10.1111/bcp.15608](https://doi.org/10.1111/bcp.15608) | [36408784](https://pubmed.ncbi.nlm.nih.gov/36408784) | The paper describes a population PK model for alemtuzumab in humans, but specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |

<sub>queue written 2026-10-07 22:00 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Elter_2008 | irrelevant | 2 | 0 | The paper is a review that describes the pharmacokinetic model qualitatively but does not provide specific numeric parameter values (CL, V, etc.) in the evidence. |
| popPK | He_2020 | irrelevant | 0 | 0 | The study is a retrospective observational cohort analysis of clinical disability outcomes (EDSS) in multiple sclerosis patients, not a pharmacokinetic study, and contains no PK parameters for alemtuzumab. |
| popPK | Keogh_2021 | irrelevant | 2 | 0 | This is a review article that discusses alemtuzumab pharmacokinetics qualitatively and cites other studies for specific values, but it does not report original quantitative PK parameters (CL, V, etc.) for alemtuzumab. |
| popPK | McCune_2015 | irrelevant | 1 | 0 | The paper is a review that mentions alemtuzumab only to state that pediatric PK data are limited and no quantitative disposition parameters (CL, V, etc.) are reported for it. |
| popPK | Pyatt_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of belatacept, not alemtuzumab, which is only mentioned as a comparator induction agent. |
| popPK | Zwart_2023 | relevant | 10 | 2 | The paper describes a population PK model for alemtuzumab in humans, but specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | van_2025 | relevant | 8 | 2 | The paper describes a population PK-PD model for alemtuzumab, but the specific numeric PK parameter values (CL, V, etc.) are explicitly stated to be in Table S1 (Supplementary Material) and are not present in the provided evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Balemtuzumab%5D&body=Drug%3A%20alemtuzumab%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_alemtuzumab/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 22:00 UTC</sub>
