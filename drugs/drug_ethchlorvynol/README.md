<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;ethchlorvynol&quot;}]"></div>

# ethchlorvynol

- **generic name:** ethchlorvynol
- **ATC codes:** `N05CM08`
- **DrugBank:** [DB00189](https://go.drugbank.com/drugs/DB00189) · **PubChem:** [CID 5281077](https://pubchem.ncbi.nlm.nih.gov/compound/5281077)
- **molar mass:** 144.6 g/mol (C7H9ClO) — DrugBank
- **groups:** approved, illicit, withdrawn

## About

Ethchlorvynol is a hypnotic and sedative used to treat insomnia. It is given orally in capsule form and is well absorbed. Production was discontinued in the United States as benzodiazepines replaced it in clinical practice.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q3085140](https://www.wikidata.org/wiki/Q3085140), [Wikipedia](https://en.wikipedia.org/wiki/Ethchlorvynol?oldid=1373297741) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Rizk_1980_silver_acetylide](drugs/drug_ethchlorvynol/pd_Rizk_1980_silver_acetylide.md) | silver acetylide biomarker turnover ← endogenous kinetics | — | Rizk MS et al., Colorimetric determination of acetyleni…, Journal - Association of Of… (1980) | — |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Rizk_1980_silver_dithizonate_absorbance](drugs/drug_ethchlorvynol/pd_Rizk_1980_silver_dithizonate_absorbance.md) | silver dithizonate absorbance biomarker turnover ← endogenous kinetics | — | Rizk MS et al., Colorimetric determination of acetyleni…, Journal - Association of Of… (1980) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 21:57 | 0:03 | 0/0/0 | 2/0/0 | 0/0/0 | 3,418/148 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Crome_1980 | irrelevant | 1 | 0 | The paper reports a clinical intervention (haemoperfusion) for intoxication but does not provide a compartmental PK model or quantitative disposition parameters (CL, V, Q, ka) for ethchlorvynol, mentioning only a qualitative fall in plasma concentration. |
| PGx | Crome_1980 | not_relevant | 0 | 0 | The paper describes a clinical treatment for drug overdose using haemoperfusion and does not investigate any genetic variants or their effects on pharmacokinetics or pharmacodynamics. |
| popPK | Fekety_1983 | irrelevant | 0 | 0 | The paper describes an analytical method (NMR) for quantifying ethchlorvynol in capsules, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Fekety_1983 | not_relevant | 0 | 0 | The paper describes a chromatographic/NMR analytical method for quantifying ethchlorvynol in capsules, with no mention of gene variants or pharmacogenomics. |
| popPK | Peters_1977 | irrelevant | 0 | 0 | Developmental toxicity study in rats with no pharmacokinetic parameters reported. |
| popPK | Rizk_1980 | irrelevant | 0 | 0 | This paper describes a colorimetric analytical method for quantifying ethchlorvynol in pharmaceutical dosage forms and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Rizk_1980 | not_relevant | 0 | 0 | The paper describes a colorimetric analytical method for detecting ethchlorvynol and does not contain any pharmacogenomic or PK/PD data. |
| popPK | Walash_1985 | irrelevant | 0 | 0 | The paper describes analytical methods for determining drug concentration in dosage forms and does not report pharmacokinetic parameters. |
| PGx | Walash_1985 | not_relevant | 0 | 0 | The paper describes analytical methods for determining the concentration of ethchlorvynol in dosage forms and does not discuss pharmacogenomics or pharmacokinetic/pharmacodynamic parameters. |
| popPK | Winek_1981 | relevant | 4 | 2 | The study reports quantitative ethchlorvynol levels in rabbits (a PK study), but the evidence provided is an abstract that mentions the measurement without listing specific compartmental parameters (CL, V, ka) or numeric values for the time-course data. |
| PGx | Winek_1981 | not_relevant | 0 | 0 | The paper describes bone marrow-to-blood concentration ratios in rabbits and storage stability, with no mention of genetic variants or pharmacogenomic effects. |
| popPK | el-Brashy_1988 | irrelevant | 0 | 0 | The paper describes a titrimetric analytical method for quantifying ethchlorvynol in bulk and dosage forms, containing no pharmacokinetic data or disposition parameters. |
| PGx | el-Brashy_1988 | not_relevant | 0 | 0 | The paper describes a chemical assay method for determining ethchlorvynol concentrations and contains no pharmacogenomic or clinical data. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bethchlorvynol%5D&body=Drug%3A%20ethchlorvynol%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ethchlorvynol/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
