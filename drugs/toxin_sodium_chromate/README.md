<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Sodium chromate&quot;}]"></div>

# Sodium chromate

- **generic name:** Sodium chromate
- **DrugBank:** none · **PubChem:** [CID 24488](https://pubchem.ncbi.nlm.nih.gov/compound/24488)
- **groups:** not captured

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-09 00:07 | 5:56 | 0/0/0 | 0/0/0 | 0/0/0 | 156,061/3,992 | einfracz / qwen3.8-27b | 8 | 7/0 | 1/7 | 0 |

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Algvere_1979 | irrelevant | 1 | 0 | The paper studies the movement of micro-particles and RBCs in the rabbit eye, using sodium chromate only as a radioactive tracer (analytical reagent) for the cells rather than investigating the toxicokinetic parameters of the substance itself. |
| popPK | Bernard_1981 | irrelevant | 0 | 0 | The study focuses on the toxicokinetics of cadmium (Cd2+) and uses sodium chromate merely as a nephrotoxic agent to induce kidney damage for comparison. |
| popPK | Bosisio_2009 | relevant | 7 | 3 | The paper reports quantitative time-course uptake, retention, and distribution data for sodium chromate in Xenopus laevis, but the specific kinetic values are primarily located in Figures (Fig. 4) and Tables not fully transcribed in the evidence. |
| popPK | Fisher_1990 | irrelevant | 0 | 0 | Sodium chromate is used here solely as a radioactive tracer (51Cr) to label lymphocytes, and the reported kinetics refer to cell migration, not the toxicokinetics of the sodium chromate substance itself. |
| popPK | Fébel_2001 | relevant | 8 | 4 | The paper reports quantitative toxicokinetic data (absorption, excretion, retention, tissue distribution) for sodium chromate in rats, but many specific numeric values are in tables or figures that are not fully legible or present in the provided text. |
| PGx | Li_2023 | not_relevant | 0 | 0 | The study investigates the effect of sodium chromate exposure on gene expression in rats, not the effect of a genetic variant on the pharmacokinetics or pharmacodynamics of the compound. |
| popPK | Pietrzak_1989 | irrelevant | 0 | 0 | Sodium chromate was used as an agent to induce hepatic sinusoidal block to study peritoneal permeability to other substances, not as the subject of toxicokinetic parameter determination. |
| popPK | Roccatello_1985 | irrelevant | 0 | 0 | The paper uses 51Cr-labelled red blood cells as a marker to measure immune phagocytosis function, not to study the toxicokinetics of sodium chromate as a subject substance. |
| popPK | Shekoian_1975 | irrelevant | 0 | 0 | Sodium chromate is used here merely as a radioactive label for antigen tracking, not as the substance of toxicokinetic interest, and no kinetic parameters are reported. |
| popPK | Smit_1990 | irrelevant | 0 | 0 | The paper uses radiolabeled sodium chromate EDTA as a method to measure glomerular filtration rate (a physiological function) in critically ill patients, rather than reporting toxicokinetic parameters (half-life, clearance, etc.) for sodium chromate itself as a toxicant. |
| popPK | Sourek_1994 | irrelevant | 0 | 0 | Sodium chromate is used solely as an analytical reagent to label cells with chromium-51 for an in vitro assay of endotoxin activity, and no toxicokinetic parameters for sodium chromate itself are reported. |
| popPK | Tovar_1976 | irrelevant | 0 | 0 | Sodium chromate is used solely as a radioactive labeling agent (reagent) for endotoxin to track its clearance, not as the subject substance for toxicokinetic analysis. |
| popPK | Williams_1984 | irrelevant | 0 | 0 | The paper uses sodium chromate Cr51 solely as a radioactive label for erythrocytes to study their physical clearance from the rabbit eye, not to study the toxicokinetics of sodium chromate itself. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsodium_chromate%5D&body=Drug%3A%20sodium_chromate%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_sodium_chromate/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
