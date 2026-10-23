<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N04B&quot;,&quot;href&quot;:&quot;atc/N04B.md&quot;},{&quot;label&quot;:&quot;budipine&quot;}]"></div>

# budipine

- **generic name:** budipine
- **ATC codes:** `N04BX03`
- **DrugBank:** [DB13502](https://go.drugbank.com/drugs/DB13502) · **PubChem:** none
- **molar mass:** 293.454 g/mol (C21H27N) — DrugBank
- **groups:** experimental

## About

Budipine is a dopaminergic antiparkinson drug used to treat Parkinson's disease. It is not an approved medicine today and is considered experimental, so it is not widely used.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q28128](https://www.wikidata.org/wiki/Q28128) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=budipine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `MAOB` modulator | DrugBank actor |
| metabolism | platelet | `MAOB` modulator | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 12:55 | 0:39 | 0/0/0 | 0/0/0 | 0/0/0 | 6,039/602 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jackisch_1994.pdf` | Jackisch R et al., The antiparkinsonian drugs budipine and…, European journal of pharmac… (1994) | pd | 4 | [10.1016/0014-2999(94)00528-1](https://doi.org/10.1016/0014-2999(94)00528-1) | [7851484](https://www.ncbi.nlm.nih.gov/pubmed/7851484) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-10-06 12:55 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Jackisch_1994 | irrelevant | 0 | 0 | In-vitro mechanistic receptor study with no pharmacokinetic disposition parameters for budipine. |
| PGx | Lelas_1999 | not_relevant | 2 | 3 | Budipine is used as a CYP2D6 inhibitor in monkeys, not as the drug of interest; no gene variant/genotype effect on budipine PK/PD is reported. |
| PGx | Ramamoorthy_2001 | not_relevant | 2 | 5 | Budipine appears only as an inhibitor (Ki ratio 1.3) of CYP2D6 metabolism of other substrates; no PK/PD parameter of budipine itself is reported. |
| PGx | Tomkins_1997 | not_relevant | 2 | 3 | Budipine is used as a CYP2D1 inhibitor; no gene variant/genotype effect on budipine's own PK or PD parameters is reported. |
| PGx | Tomkins_1997_2 | not_relevant | 2 | 3 | Budipine is used as a CYP2D1 inhibitor to alter hydrocodone metabolism; no pharmacogenomic effect on budipine's own PK/PD parameters is reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbudipine%5D&body=Drug%3A%20budipine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_budipine/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
