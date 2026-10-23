<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;molindone&quot;}]"></div>

# molindone

- **generic name:** molindone
- **ATC codes:** `N05AE02`
- **DrugBank:** [DB01618](https://go.drugbank.com/drugs/DB01618) · **PubChem:** [CID 23897](https://pubchem.ncbi.nlm.nih.gov/compound/23897)
- **molar mass:** 276.374 g/mol (C16H24N2O2) — DrugBank
- **groups:** approved

## About

Molindone is an antipsychotic used to treat schizophrenia and schizophreniform disorder. It is an approved medication, but it is not authorised in the European Union and appears to be used only in a limited number of countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q593166](https://www.wikidata.org/wiki/Q593166) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=molindone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CHRM1 (other/unknown), DRD2 (target), HTR1A (target), HTR2A (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 16:05 | 0:37 | 0/0/0 | 0/0/0 | 0/0/0 | 7,347/354 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zeng_1997.pdf` | Zeng XP et al., Muscarinic m4 receptor activation by so…, European journal of pharmac… (1997) | pd | 4 | [10.1016/s0014-2999(96)00956-9](https://doi.org/10.1016/s0014-2999(96)00956-9) | [9085047](https://www.ncbi.nlm.nih.gov/pubmed/9085047) | metadata signals extractable PD data (EC50) |
| `Schoretsanitis_2019.pdf` | Schoretsanitis G et al., Clinically Significant Drug-Drug Intera…, CNS drugs (2019) | pgx | 8 | [10.1007/s40263-019-00683-7](https://doi.org/10.1007/s40263-019-00683-7) | [31776871](https://www.ncbi.nlm.nih.gov/pubmed/31776871) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-10-06 16:05 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chang_1988 | irrelevant | 0 | 0 | Rat neurochemical dose-response study of HVA elevation; no PK parameters for molindone are reported. |
| popPK | Oliver_1982 | irrelevant | 0 | 0 | In vitro guinea pig hippocampal slice study of neuroleptic excitability with no PK parameters for molindone. |
| popPK | Schaefer_1984 | irrelevant | 0 | 0 | Behavioral pharmacology study in rats with no PK parameters for molindone. |
| PGx | Schoretsanitis_2019 | not_relevant | 0 | 0 | Molindone is only mentioned as lacking DDI data; no pharmacogenomic effect on its PK/PD parameters is reported. |
| popPK | Severson_1984 | irrelevant | 0 | 0 | Receptor binding study in mice with no PK parameters for molindone. |
| popPK | Zeng_1997 | irrelevant | 0 | 0 | In vitro pharmacology study of muscarinic receptor effects; molindone only mentioned as a comparator with no PK parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmolindone%5D&body=Drug%3A%20molindone%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_molindone/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
