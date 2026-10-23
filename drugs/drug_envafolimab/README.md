<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;envafolimab&quot;}]"></div>

# envafolimab

- **generic name:** envafolimab
- **ATC codes:** `L01FF15`
- **DrugBank:** [DB15769](https://go.drugbank.com/drugs/DB15769) · **PubChem:** not captured
- **groups:** investigational

## About

Envafolimab is an investigational anticancer monoclonal antibody that blocks the PD-1/PD-L1 pathway. It is not yet an approved medicine and remains under investigation, with no marketing authorisation in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q123499516](https://www.wikidata.org/wiki/Q123499516) and the WHO ATC classification; not checked by a person.</small>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 0.0478 | L/h | 0.0478 L/h | patients with advanced solid tumors | 182 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Cui_2024_reference](drugs/drug_envafolimab/Envafolimab_Cui2024_reference.md) |
| V | V | 15.5 | L | 15.5 L | patients with advanced solid tumors | 182 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Cui_2024_reference](drugs/drug_envafolimab/Envafolimab_Cui2024_reference.md) |
| ka | kabs | 0.0147 | 1/h | 0.0147 1/h | patients with advanced solid tumors | 182 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Cui_2024_reference](drugs/drug_envafolimab/Envafolimab_Cui2024_reference.md) |
| t½ | t1/2z | 816 | h | 34.0 days | patients with advanced solid tumors | 182 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Cui_2024_reference](drugs/drug_envafolimab/Envafolimab_Cui2024_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C2_reference failed (ratio None)</sub> | [Cui_2024_reference](drugs/drug_envafolimab/Envafolimab_Cui2024_reference.md) | — | 1-compartment (no model) | 4 (+1 cov.) | Cui C et al., Model-informed drug development of enva…, The oncologist (2024) | [10.1093/oncolo/oyae102](https://doi.org/10.1093/oncolo/oyae102) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Cui_2024_AECI](drugs/drug_envafolimab/pd_Cui_2024_AECI.md) | Incidence and severity of AECI ← envafolimab · categorical (graded) response model | — | Cui C et al., Model-informed drug development of enva…, The oncologist (2024) | [10.1093/oncolo/oyae102](https://doi.org/10.1093/oncolo/oyae102) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Cui_2024_DOR](drugs/drug_envafolimab/pd_Cui_2024_DOR.md) | DOR ← envafolimab · time-to-event model | — | Cui C et al., Model-informed drug development of enva…, The oncologist (2024) | [10.1093/oncolo/oyae102](https://doi.org/10.1093/oncolo/oyae102) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Cui_2024_Optimal_overall_response](drugs/drug_envafolimab/pd_Cui_2024_Optimal_overall_response.md) | Optimal overall response ← envafolimab · categorical (graded) response model | — | Cui C et al., Model-informed drug development of enva…, The oncologist (2024) | [10.1093/oncolo/oyae102](https://doi.org/10.1093/oncolo/oyae102) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:38 | 2:22 | 0/0/1 | 0/0/1 | 0/0/0 | 40,902/10,760 | openai / gpt-6-luna | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 2 matched, 2 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 12:37 UTC</sub>
