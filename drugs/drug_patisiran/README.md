<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07X&quot;,&quot;href&quot;:&quot;atc/N07X.md&quot;},{&quot;label&quot;:&quot;patisiran&quot;}]"></div>

# patisiran

- **generic name:** patisiran
- **ATC codes:** `N07XX12`
- **DrugBank:** [DB14582](https://go.drugbank.com/drugs/DB14582) · **PubChem:** none
- **groups:** approved, investigational

## About

Patisiran is a medicine used to treat hereditary amyloidosis, a rare nerve-related condition. It is authorised in the European Union and is also being studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q40441442](https://www.wikidata.org/wiki/Q40441442) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=patisiran).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| distribution | blood | `ALB` target, `ORM1` target | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: TTR (other/unknown), Transthyretin mRNA (antisense oligonucleotide).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:08 | 0:13 | 0/0/0 | 0/0/0 | 0/0/0 | 28,004/563 | ollama / glm-5.3-flash | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Goel_2020.pdf` | Goel V et al., Population Pharmacokinetic-Pharmacodyna…, Nucleic acid therapeutics (2020) | popPK | 7 | [10.1089/nat.2019.0841](https://doi.org/10.1089/nat.2019.0841) | [32175804](https://pubmed.ncbi.nlm.nih.gov/32175804) | Population PK-PD model of patisiran (ALN-18328) with PD parameters (Hill, IC50) reported, but PK disposition parameters (CL, V) values appear not given in the evidence, likely in supplementary material. |

<sub>queue written 2026-10-07 05:08 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Goel_2020 | relevant | 7 | 4 | Population PK-PD model of patisiran (ALN-18328) with PD parameters (Hill, IC50) reported, but PK disposition parameters (CL, V) values appear not given in the evidence, likely in supplementary material. |
| popPK | Jeon_2022 | irrelevant | 3 | 0 | A minireview of siRNA PK/PD modeling with no original numeric patisiran parameters in the evidence. |
| popPK | Zhang_2020 | relevant | 4 | 4 | Reports patisiran (ALN-18328) PK concentration parameters (Cmax, Cp(30min), Cmin, accumulation ratio) in humans, but no CL/V/compartmental disposition parameters; some values (e.g., full Table 2) appear truncated or in supplementary tables. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpatisiran%5D&body=Drug%3A%20patisiran%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_patisiran/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
