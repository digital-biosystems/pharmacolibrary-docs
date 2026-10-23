<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08A&quot;,&quot;href&quot;:&quot;atc/V08A.md&quot;},{&quot;label&quot;:&quot;diatrizoic acid&quot;}]"></div>

# diatrizoic acid

- **generic name:** diatrizoic acid
- **ATC codes:** `V08AA01`
- **DrugBank:** [DB00271](https://go.drugbank.com/drugs/DB00271) · **PubChem:** [CID 2140](https://pubchem.ncbi.nlm.nih.gov/compound/2140)
- **molar mass:** 613.9136 g/mol (C11H9I3N2O4) — DrugBank
- **groups:** approved, vet_approved

## About

Diatrizoic acid is an iodinated X-ray contrast agent used to make body structures visible during imaging examinations. It is an approved medicine, including for veterinary use, and appears on the WHO list of essential medicines, so it remains widely available.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q411511](https://www.wikidata.org/wiki/Q411511) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=diatrizoic_acid).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | mammary gland | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:04 | 0:14 | 0/0/0 | 0/0/0 | 0/0/0 | 5,970/300 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Baars_1984.pdf` | Baars HG et al., [Contrast medium elimination by hemodia…, Zeitschrift fur Urologie un… (1984) | popPK | 6 |  | [6495896](https://pubmed.ncbi.nlm.nih.gov/6495896) | Two-compartment PK analysis of diatrizoic acid during hemodialysis is reported, but only the elimination rate (80.7±4.7%) is given; full CL/V parameters are not in the evidence. |
| `Venaille_1994.pdf` | Venaille TJ et al., Effects of different density gradient s…, Scandinavian journal of cli… (1994) | pd | 4 | [10.3109/00365519409088438](https://doi.org/10.3109/00365519409088438) | [7527931](https://www.ncbi.nlm.nih.gov/pubmed/7527931) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07 22:04 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baars_1984 | relevant | 6 | 4 | Two-compartment PK analysis of diatrizoic acid during hemodialysis is reported, but only the elimination rate (80.7±4.7%) is given; full CL/V parameters are not in the evidence. |
| PGx | Gür_2026 | not_relevant | 0 | 0 | Paper studies immune responses in cystic fibrosis; no diatrizoic acid or pharmacogenomic PK/PD effects reported. |
| popPK | Sunderman_1990 | irrelevant | 0 | 0 | The study concerns cisplatin/platinum kinetics, not diatrizoic acid; no diatrizoic acid parameters are reported. |
| popPK | Venaille_1994 | irrelevant | 0 | 0 | Study of neutrophil separation techniques; diatrizoic acid (Hypaque) is only a reagent, no PK parameters reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdiatrizoic_acid%5D&body=Drug%3A%20diatrizoic_acid%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_diatrizoic_acid/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
