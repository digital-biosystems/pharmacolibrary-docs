<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08A&quot;,&quot;href&quot;:&quot;atc/V08A.md&quot;},{&quot;label&quot;:&quot;diatrizoic acid&quot;}]"></div>

# diatrizoic acid

- **generic name:** diatrizoic acid
- **ATC codes:** `V08AA01`
- **DrugBank:** [DB00271](https://go.drugbank.com/drugs/DB00271) · **PubChem:** [CID 2140](https://pubchem.ncbi.nlm.nih.gov/compound/2140)
- **molar mass:** 613.9136 g/mol (C11H9I3N2O4) — DrugBank
- **groups:** approved, vet_approved

## About

Diatrizoic acid is a high-osmolar iodinated X-ray contrast agent used for imaging various body systems and CT scans. It is administered via intravenous injection, oral intake, rectally, or into the bladder. It is authorized for medical use in the United States and listed as a WHO essential medicine.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q411511](https://www.wikidata.org/wiki/Q411511), [Wikipedia](https://en.wikipedia.org/wiki/Diatrizoate?oldid=1365018851) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 20:01 | 0:02 | 0/0/0 | 0/0/0 | 0/0/0 | 3,770/135 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Venaille_1994.pdf` | Venaille TJ et al., Effects of different density gradient s…, Scandinavian journal of cli… (1994) | pd | 4 | [10.3109/00365519409088438](https://doi.org/10.3109/00365519409088438) | [7527931](https://www.ncbi.nlm.nih.gov/pubmed/7527931) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-11-23 20:01 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baars_1984 | relevant | 8 | 3 | The study describes a two-compartment PK model for diatrizoic acid in humans and reports qualitative kinetic findings and a percentage elimination, but specific numeric parameter values (CL, V, Q) are not explicitly provided in the extracted text. |
| PGx | Baars_1984 | not_relevant | 0 | 0 | The study examines PK parameters (elimination rate) but does not investigate any gene variant, genotype, or phenotype associated with the drug. |
| popPK | Gür_2026 | irrelevant | 0 | 0 | The paper investigates immunological markers in pediatric cystic fibrosis and contains no pharmacokinetic data for diatrizoic acid. |
| PGx | Gür_2026 | not_relevant | 0 | 0 | The paper investigates immune markers in cystic fibrosis patients and does not mention diatrizoic acid or any pharmacokinetic/pharmacodynamic parameters related to it. |
| popPK | Sunderman_1990 | irrelevant | 0 | 0 | The paper studies cisplatin pharmacokinetics in patients, not diatrizoic acid. |
| PGx | Sunderman_1990 | not_relevant | 0 | 0 | The paper studies cisplatin pharmacokinetics and does not mention diatrizoic acid or any gene variants. |
| popPK | Venaille_1994 | irrelevant | 0 | 0 | The paper investigates neutrophil separation techniques and is unrelated to the pharmacokinetics of diatrizoic acid. |
| PGx | Venaille_1994 | not_relevant | 0 | 0 | The paper investigates the effects of different blood separation techniques on neutrophil function and does not mention diatrizoic acid or pharmacogenomics. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdiatrizoic_acid%5D&body=Drug%3A%20diatrizoic_acid%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_diatrizoic_acid/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
