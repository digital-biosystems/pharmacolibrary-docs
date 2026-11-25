<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;entrectinib&quot;}]"></div>

# entrectinib

- **generic name:** entrectinib
- **ATC codes:** `L01EX14`
- **DrugBank:** [DB11986](https://go.drugbank.com/drugs/DB11986) · **PubChem:** [CID 25141092](https://pubchem.ncbi.nlm.nih.gov/compound/25141092)
- **molar mass:** 560.65 g/mol (C31H34F2N6O2) — DrugBank
- **groups:** approved, investigational

## About

Entrectinib is a protein kinase inhibitor used to treat non-small cell lung cancer and certain solid tumors. It is given by mouth in capsule form. It is authorised in the European Union and used for cancer treatment.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q25323953](https://www.wikidata.org/wiki/Q25323953), [Wikipedia](https://en.wikipedia.org/wiki/Entrectinib?oldid=1370062758) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Mercier_2022_TEAEs_or_SAEs](drugs/drug_entrectinib/pd_Mercier_2022_TEAEs_or_SAEs.md) | treatment-emergent (TEAEs) or serious (SAEs) adverse events ← entrectinib · categorical (graded) response model | — | Mercier F et al., Efficacy and safety exposure-response a…, Cancer chemotherapy and pha… (2022) | [10.1007/s00280-022-04402-w](https://doi.org/10.1007/s00280-022-04402-w) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Mercier_2022_sum_of_target_lesion_diameters](drugs/drug_entrectinib/pd_Mercier_2022_sum_of_target_lesion_diameters.md) | tumor size data ← entrectinib · disease-progression model | — | Mercier F et al., Efficacy and safety exposure-response a…, Cancer chemotherapy and pha… (2022) | [10.1007/s00280-022-04402-w](https://doi.org/10.1007/s00280-022-04402-w) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 22:43 | 0:21 | 0/0/0 | 1/1/0 | 0/0/0 | 6,369/2,104 | einfracz / qwen3.8-27b | 1 | 1/0 | 0/1 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Djebli_2021 | relevant | 10 | 2 | This is a PBPK modeling study for entrectinib, but specific numeric parameter values (CL, V, Q, etc.) are not present in the text, only qualitative exposure changes (fold changes). |
| PGx | Djebli_2021 | not_relevant | 2 | 0 | The paper reports drug-drug interactions via CYP3A4 modulation, not genetic pharmacogenomic variants. |
| popPK | González-Sales_2021 | irrelevant | 0 | 0 | The evidence consists solely of a figure caption describing a sampling scheme and contains no quantitative pharmacokinetic parameter values. |
| PGx | González-Sales_2021 | not_relevant | 0 | 0 | The text only describes a blood sampling scheme for PK assessment and contains no data linking genetic variants to entrectinib PK or PD parameters. |
| popPK | Mercier_2022 | irrelevant | 2 | 0 | The study uses PK parameters from a "previously described population PK model" for exposure-response analysis, and does not report original quantitative PK parameter values (CL, V, etc.) in the provided evidence. |
| PGx | Mercier_2022 | not_relevant | 0 | 0 | The study reports exposure-response analyses for efficacy and safety but does not assess pharmacogenomic effects (gene variants) on PK or PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bentrectinib%5D&body=Drug%3A%20entrectinib%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_entrectinib/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
