<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M09A&quot;,&quot;href&quot;:&quot;atc/M09A.md&quot;},{&quot;label&quot;:&quot;risdiplam&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Risdiplam_Cleary2023_reference&quot;,&quot;label&quot;:&quot;Cleary_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_risdiplam/Risdiplam_Cleary2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# risdiplam

- **generic name:** risdiplam
- **ATC codes:** `M09AX10`
- **DrugBank:** [DB15305](https://go.drugbank.com/drugs/DB15305) · **PubChem:** not captured
- **molar mass:** 401.474 g/mol (C22H23N7O) — DrugBank
- **groups:** approved, investigational

## About

Risdiplam is a medicine used to treat spinal muscular atrophy. It is authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q48969152](https://www.wikidata.org/wiki/Q48969152) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| risdiplam | parent | 401.474 | C22H23N7O | DrugBank | — | Cleary_2023 |

## Start here

> **Cleary_2023_reference** — <span class="pk-badge pk-badge--green">Reproduces with caveats</span> SMA patients and healthy subjects. [Run it in the simulator](drugs/drug_risdiplam/Risdiplam_Cleary2023_reference.md?tab=Simulation) · [record](drugs/drug_risdiplam/Risdiplam_Cleary2023_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 2.64 | L/h | 2.64 L/h | SMA patients and healthy subjects | human | <span class="pk-badge pk-badge--green">Reproduces with caveats</span> | [Cleary_2023_reference](drugs/drug_risdiplam/Risdiplam_Cleary2023_reference.md) |
| V | V1/F | 98 | L | 98.0 L | SMA patients and healthy subjects | human | <span class="pk-badge pk-badge--green">Reproduces with caveats</span> | [Cleary_2023_reference](drugs/drug_risdiplam/Risdiplam_Cleary2023_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Reproduces with caveats" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces with caveats</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub> | [Cleary_2023_reference](drugs/drug_risdiplam/Risdiplam_Cleary2023_reference.md) | ▶ model + simulator | 2-compartment, oral | 5 (+2 cov.) | Cleary Y et al., Estimation of FMO3 Ontogeny by Mechanis…, Clinical pharmacokinetics (2023) | [10.1007/s40262-023-01241-7](https://doi.org/10.1007/s40262-023-01241-7) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:45 | 1:09 | 1/0/0 | 0/0/0 | 0/0/0 | 141,389/11,804 | einfracz / qwen3.8-27b | 9 | 0/2 | 9/0 | 0 |

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Crawford_2025 | irrelevant | 0 | 0 | This is a clinical efficacy and safety trial for apitegromab, not a pharmacokinetic study of risdiplam. |
| popPK | Pane_2026 | irrelevant | 0 | 0 | The study is a clinical trial of onasemnogene abeparvovec for spinal muscular atrophy and does not report pharmacokinetic parameters for risdiplam, which is only mentioned as a prior therapy in a small subset of patients. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 03:44 UTC</sub>
