<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01C&quot;,&quot;href&quot;:&quot;atc/J01C.md&quot;},{&quot;label&quot;:&quot;bacampicillin&quot;}]"></div>

# bacampicillin

- **generic name:** bacampicillin
- **ATC codes:** `J01CA06`
- **DrugBank:** [DB01602](https://go.drugbank.com/drugs/DB01602) · **PubChem:** [CID 441397](https://pubchem.ncbi.nlm.nih.gov/compound/441397)
- **molar mass:** 465.52 g/mol (C21H27N3O7S) — DrugBank
- **groups:** approved, withdrawn

## About

Bacampicillin is a penicillin antibiotic used to treat infections such as gonorrhea, listeriosis, urinary tract and upper respiratory tract infections. It has been withdrawn and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2878140](https://www.wikidata.org/wiki/Q2878140) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=bacampicillin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:00 | 2:11 | 0/0/0 | 0/0/0 | 0/0/0 | 54,456/1,111 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 29 matched, 29 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ehrnebo_1979.pdf` | Ehrnebo M et al., Pharmacokinetics of ampicillin and its…, Journal of pharmacokinetics… (1979) | popPK | 10 | [10.1007/BF01062386](https://doi.org/10.1007/BF01062386) | [529016](https://pubmed.ncbi.nlm.nih.gov/529016) | The study is a PK crossover trial in humans that explicitly reports quantitative parameters for bacampicillin, including bioavailability (86 +/- 11%), absorption rate (0.89 +/- 0.39 fraction/min), and lag time (7.0 +/- 0.9 min), noting that absorption was zero-order. |
| `Ripa_1988.pdf` | Ripa S et al., Pharmacokinetics of bacampicillin using…, Chemotherapy (1988) | popPK | 9 | [10.1159/000238552](https://doi.org/10.1159/000238552) | [3391055](https://pubmed.ncbi.nlm.nih.gov/3391055) | The study reports PK parameters (Cmax, t1/2, AUC, absorption duration) for bacampicillin in humans, but specific clearance (CL) or volume (V) values are not explicitly listed in the provided text, only derived metrics. |
| `Yamane_1986.pdf` | Yamane N et al., Blood levels and distribution of talamp…, The Tokai journal of experi… (1986) | popPK | 8 | not captured | [3564081](https://pubmed.ncbi.nlm.nih.gov/3564081) | The study reports PK parameters for bacampicillin in rabbits, but the specific numeric values are not present in the provided evidence text. |

<sub>queue written 2026-10-07T10:59:55.327107+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Carbon_1978 | relevant | 4 | 0 | The study reports PK comparisons for bacampicillin in rabbits but the provided evidence contains no numeric parameter values (CL, V, ka, etc.). |
| popPK | Padoin_1998 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cephalexin in rats, not bacampicillin. |
| popPK | Ripa_1988 | relevant | 9 | 4 | The study reports PK parameters (Cmax, t1/2, AUC, absorption duration) for bacampicillin in humans, but specific clearance (CL) or volume (V) values are not explicitly listed in the provided text, only derived metrics. |
| popPK | Yamane_1986 | relevant | 8 | 0 | The study reports PK parameters for bacampicillin in rabbits, but the specific numeric values are not present in the provided evidence text. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
