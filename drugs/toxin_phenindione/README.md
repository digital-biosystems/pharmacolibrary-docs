<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Phenindione&quot;}]"></div>

# Phenindione

- **generic name:** Phenindione
- **T3DB:** [T3D3107](http://www.t3db.ca/toxins/T3D3107) · **DrugBank:** [DB00498](https://go.drugbank.com/drugs/DB00498) · **PubChem:** [CID 4760](https://pubchem.ncbi.nlm.nih.gov/compound/4760)
- **groups:** approved, investigational

## About

Phenindione is only found in individuals that have used or taken this drug. It is an indandione that has been used as an anticoagulant. Phenindione has actions similar to warfarin, but it is now rarely employed because of its higher incidence of severe adverse effects. (From Martindale, The Extra Pharmacopoeia, 30th ed, p234). …

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** ingestion, dermal. Absorbed slowly from the gastrointestinal tract.
- **Sources and uses:** Phenindione is an anticoagulant drug derived from coumarin. For the treatment of pulmonary embolism, cardiomyopathy, atrial fibrillation and flutter, cerebral embolism, mural thrombosis, and thrombophili. …
- **Mechanism of toxicity:** Phenindione inhibits vitamin K reductase, resulting in depletion of the reduced form of vitamin K (vitamin KH2). As vitamin K is a cofactor for the carboxylation of glutamate residues on the N-terminal regions of vitamin K-dependent proteins, this limits the gamma-carboxylation and subsequent activation of the vitamin K-dependent coagulant proteins. …
- **Health effects:** Phenindione is an anticoagulant and may cause internal bleeding, leading to shock, loss of consciousness, and eventually death.
- **Acute toxicity:** Oral, mouse: LD50 = 175 mg/kg; Oral, rat: LD50 = 163 mg/kg.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D3107">T3DB T3D3107</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 83-12-5 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:8066">ChEBI 8066</a></small></p>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=phenindione).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: VKORC1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-12 16:40 | 2:15 | 0/0/0 | 0/0/0 | 0/0/0 | 16,863/896 | einfracz / qwen3.8-flash-next | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_2011 | irrelevant | 0 | 0 | Phenindione is used solely as an inhibitor/comparator substance for NQO1 activity in a study focused on aristolochic acid, with no kinetic parameters reported for phenindione itself. |
| PGx | Espana_2017 | not_relevant | 3 | 0 | The study investigates the mechanism of ABC transporter involvement in drug transport in cell models, but does not report the effect of specific human gene variants (genotypes) on pharmacokinetic or pharmacodynamic parameters of phenindione. |
| popPK | Serlin_1979 | irrelevant | 1 | 0 | The paper reports pharmacodynamic interaction outcomes (prothrombin time) for phenindione but contains no quantitative toxicokinetic parameters (such as clearance, half-life, or volume of distribution) for phenindione itself, only for warfarin. |
| popPK | de_1979 | irrelevant | 0 | 0 | no_text gate: only 397 chars of text extracted (&lt; 400) |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bphenindione%5D&body=Drug%3A%20phenindione%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_phenindione/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
