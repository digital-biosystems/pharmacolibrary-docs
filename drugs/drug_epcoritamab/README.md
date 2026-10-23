<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;epcoritamab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Epcoritamab_Li2025_reference&quot;,&quot;label&quot;:&quot;Li_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_epcoritamab/Epcoritamab_Li2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# epcoritamab

- **generic name:** epcoritamab
- **ATC codes:** `L01FX27`
- **DrugBank:** [DB16672](https://go.drugbank.com/drugs/DB16672) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Epcoritamab, a monoclonal antibody anticancer drug, is used to treat diffuse large B-cell lymphoma. It is approved and authorised in the European Union, with one authorised product there, and remains under investigation for further uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q119025940](https://www.wikidata.org/wiki/Q119025940) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Start here

> **Li_2025_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> adults with relapsed or refractory B-cell non-Hodgkin lymphoma, n = 327. [Run it in the simulator](drugs/drug_epcoritamab/Epcoritamab_Li2025_reference.md?tab=Simulation) · [record](drugs/drug_epcoritamab/Epcoritamab_Li2025_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 0.02208 | L/h | 0.53 L/day | adults with relapsed or refractory B-cell non-Hodgkin lymphoma | 327 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Li_2025_reference](drugs/drug_epcoritamab/Epcoritamab_Li2025_reference.md) |
| V | V/F | 25.6 | L | 25.6 L | adults with relapsed or refractory B-cell non-Hodgkin lymphoma | 327 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Li_2025_reference](drugs/drug_epcoritamab/Epcoritamab_Li2025_reference.md) |
| t½ | t1/2z | 528 | h | 22 days | adults with relapsed or refractory B-cell non-Hodgkin lymphoma | 327 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Li_2025_reference](drugs/drug_epcoritamab/Epcoritamab_Li2025_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: unreported model parameter default(s): ka</sub> | [Li_2025_reference](drugs/drug_epcoritamab/Epcoritamab_Li2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Li T et al., Population Pharmacokinetics of Epcorita…, Clinical pharmacokinetics (2025) | [10.1007/s40262-024-01464-2](https://doi.org/10.1007/s40262-024-01464-2) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Li_2022_B_cell](drugs/drug_epcoritamab/pd_Li_2022_B_cell.md) | blood B-cell count ← epcoritamab · model not identified | — | Li T et al., Semimechanistic Physiologically-Based P…, Clinical pharmacology and t… (2022) | [10.1002/cpt.2729](https://doi.org/10.1002/cpt.2729) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Li_2022_ORR](drugs/drug_epcoritamab/pd_Li_2022_ORR.md) | response rate ← epcoritamab · direct Emax (saturable) effect | — | Li T et al., Semimechanistic Physiologically-Based P…, Clinical pharmacology and t… (2022) | [10.1002/cpt.2729](https://doi.org/10.1002/cpt.2729) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Li_2022_T_cell](drugs/drug_epcoritamab/pd_Li_2022_T_cell.md) | blood T-cell count ← epcoritamab · model not identified | — | Li T et al., Semimechanistic Physiologically-Based P…, Clinical pharmacology and t… (2022) | [10.1002/cpt.2729](https://doi.org/10.1002/cpt.2729) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Li_2022_trimer_formation](drugs/drug_epcoritamab/pd_Li_2022_trimer_formation.md) | trimer formation ← epcoritamab · model not identified | — | Li T et al., Semimechanistic Physiologically-Based P…, Clinical pharmacology and t… (2022) | [10.1002/cpt.2729](https://doi.org/10.1002/cpt.2729) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Li_2022_tumor_size](drugs/drug_epcoritamab/pd_Li_2022_tumor_size.md) | tumor size ← epcoritamab · disease-progression model | — | Li T et al., Semimechanistic Physiologically-Based P…, Clinical pharmacology and t… (2022) | [10.1002/cpt.2729](https://doi.org/10.1002/cpt.2729) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Li_2022_CRS](drugs/drug_epcoritamab/pd_Li_2022_CRS.md) | CRS (any grade) ← epcoritamab · categorical (graded) response model | — | Li T et al., Semimechanistic Physiologically-Based P…, Clinical pharmacology and t… (2022) | [10.1002/cpt.2729](https://doi.org/10.1002/cpt.2729) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Li_2022_CRS_2](drugs/drug_epcoritamab/pd_Li_2022_CRS_2.md) | grade 2 CRS ← epcoritamab · categorical (graded) response model | — | Li T et al., Semimechanistic Physiologically-Based P…, Clinical pharmacology and t… (2022) | [10.1002/cpt.2729](https://doi.org/10.1002/cpt.2729) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:40 | 1:41 | 0/0/1 | 1/0/0 | 0/0/0 | 29,553/6,480 | openai / gpt-6-luna | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 2 matched, 2 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Li_2025.pdf` | Li T et al., Population Pharmacokinetics of Epcorita…, Clinical pharmacokinetics (2025) | popPK | 10 | [10.1007/s40262-024-01464-2](https://doi.org/10.1007/s40262-024-01464-2) | [39708278](https://pubmed.ncbi.nlm.nih.gov/39708278) | Human population-PK model reports numeric epcoritamab disposition parameters in the evidence. |

<sub>queue written 2026-10-07T12:39:22.795097+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Li_2022 | relevant | 9 | 1 | A human and monkey population PK/PD model was fitted, but its numeric PK parameter values are only referenced in supplementary tables not provided. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 12:39 UTC</sub>
