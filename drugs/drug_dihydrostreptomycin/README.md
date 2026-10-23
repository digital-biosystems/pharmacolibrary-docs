<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01A&quot;,&quot;href&quot;:&quot;atc/S01A.md&quot;},{&quot;label&quot;:&quot;dihydrostreptomycin&quot;}]"></div>

# dihydrostreptomycin

- **generic name:** dihydrostreptomycin
- **ATC codes:** `S01AA15`
- **DrugBank:** [DB11512](https://go.drugbank.com/drugs/DB11512) · **PubChem:** none
- **molar mass:** 583.596 g/mol (C21H41N7O12) — DrugBank
- **groups:** approved, vet_approved, withdrawn

## About

Dihydrostreptomycin is an antibiotic related to streptomycin that was used to treat bacterial infections, including in eye preparations. It has been withdrawn from human use, largely because of toxicity to hearing, but remains approved for veterinary purposes.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3707637](https://www.wikidata.org/wiki/Q3707637) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span> | [Peterson_2018_FM_1_43_uptake](drugs/drug_dihydrostreptomycin/pd_Peterson_2018_FM_1_43_uptake.md) | percent fluorescence reduction ← dihydrostreptomycin · inhibition effect | — | Peterson HP et al., Teaching Dose-response Relationships Th…, Journal of undergraduate ne… (2018) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:27 | 0:14 | 0/0/0 | 1/0/0 | 0/0/0 | 15,792/679 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kimitsuki_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of dihydrostreptomycin's effect on cochlear hair cell channels and does not report pharmacokinetic disposition parameters. |
| popPK | Kimitsuki_1994 | irrelevant | 0 | 0 | The study investigates the mechanism of ototoxicity (channel blocking) in chick hair cells in vitro and does not report any pharmacokinetic disposition parameters (clearance, volume, half-life). |
| popPK | Peterson_2018 | irrelevant | 0 | 0 | This is an in vitro/educational study on mechanotransduction channel block in zebrafish, not a pharmacokinetic study. |
| popPK | Ricci_2002 | irrelevant | 0 | 0 | Dihydrostreptomycin is used solely as an in-vitro channel blocker (pharmacological tool) in turtle auditory hair cells, with no pharmacokinetic disposition parameters reported. |
| popPK | Soback_1986 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of mecillinam, and dihydrostreptomycin is only included for MIC comparisons. |
| popPK | Ziv_1985 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of apramycin, using dihydrostreptomycin only as an in-vitro comparator for MIC testing. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdihydrostreptomycin%5D&body=Drug%3A%20dihydrostreptomycin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_dihydrostreptomycin/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
