<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05B&quot;,&quot;href&quot;:&quot;atc/N05B.md&quot;},{&quot;label&quot;:&quot;tofisopam&quot;}]"></div>

# tofisopam

- **generic name:** tofisopam
- **ATC codes:** `N05BA23`
- **DrugBank:** [DB08811](https://go.drugbank.com/drugs/DB08811) · **PubChem:** [CID 5502](https://pubchem.ncbi.nlm.nih.gov/compound/5502)
- **molar mass:** 382.4528 g/mol (C22H26N2O4) — DrugBank
- **groups:** investigational

## About

Tofisopam is a benzodiazepine-derivative anxiolytic used to treat anxiety, and has also been described as having antidepressant properties. It is not approved in the United States and is considered investigational there, though it has been used in some European countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q945537](https://www.wikidata.org/wiki/Q945537) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tofisopam).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: PDE10A (inhibitor), PDE2A (inhibitor), PDE3A (inhibitor), PDE4A (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:13 | 0:46 | 0/0/0 | 0/0/0 | 0/0/0 | 10,111/458 | ollama / glm-5.3-flash | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Drabant_2006.pdf` | Drabant S et al., Effect of tofisopam on the single-oral-…, European journal of clinica… (2006) | pgx | 7 | [10.1007/s00228-006-0160-9](https://doi.org/10.1007/s00228-006-0160-9) | [16791582](https://www.ncbi.nlm.nih.gov/pubmed/16791582) | metadata signals extractable PGX data (cyp3a4, PK/PD-context) |
| `Tóth_2008.pdf` | Tóth M et al., Tofisopam inhibits the pharmacokinetics…, European journal of clinica… (2008) | pgx | 7 | [10.1007/s00228-007-0397-y](https://doi.org/10.1007/s00228-007-0397-y) | [17989974](https://www.ncbi.nlm.nih.gov/pubmed/17989974) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-06 20:13 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Cameron_2007 | not_relevant | 2 | 5 | Identifies CYP enzymes metabolizing tofisopam enantiomers but reports no gene variant/genotype effect on PK/PD parameters. |
| PGx | Drabant_2006 | not_relevant | 0 | 0 | Study examines tofisopam's drug-drug interaction with alprazolam via CYP3A4 inhibition, not a gene variant/genotype effect on PK/PD parameters. |
| PGx | Niwa_2005 | not_relevant | 2 | 5 | In vitro CYP phenotyping of tofisopam metabolism; no gene variant/genotype effect on PK/PD parameters in humans. |
| popPK | Turan_2022 | irrelevant | 0 | 0 | Behavioral/pharmacology study in mice with no PK parameters for tofisopam. |
| PGx | Tóth_2005 | not_relevant | 0 | 5 | Reports tofisopam's inhibition of CYP3A4 enzyme activity (drug effect on enzyme), not a gene variant/genotype effect on tofisopam PK/PD. |
| PGx | Tóth_2008 | not_relevant | 2 | 5 | Reports tofisopam's inhibition of CYP3A4-mediated midazolam PK, a drug-drug interaction, not a gene variant/genotype effect on tofisopam's PK/PD. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btofisopam%5D&body=Drug%3A%20tofisopam%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tofisopam/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
