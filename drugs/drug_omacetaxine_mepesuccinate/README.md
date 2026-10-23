<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;omacetaxine mepesuccinate&quot;}]"></div>

# omacetaxine mepesuccinate

- **generic name:** omacetaxine mepesuccinate
- **ATC codes:** `L01XX40`
- **DrugBank:** [DB04865](https://go.drugbank.com/drugs/DB04865) · **PubChem:** [CID 285033](https://pubchem.ncbi.nlm.nih.gov/compound/285033)
- **molar mass:** 545.6213 g/mol (C29H39NO9) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Omacetaxine mepesuccinate is an antineoplastic agent used in cancer treatment. It is approved but not authorised in the European Union, and its use appears limited, with some investigational and withdrawn status records.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7089373](https://www.wikidata.org/wiki/Q7089373) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Harisha_2025_positive_cells](drugs/drug_omacetaxine_mepesuccinate/pd_Harisha_2025_positive_cells.md) | Percentage of RABV-infected cells ← homoharringtonine · direct sigmoid Emax (Hill) effect | — | Harisha KR et al., Homoharringtonine Inhibits CVS-11 and C…, Viruses (2025) | [10.3390/v17070945](https://doi.org/10.3390/v17070945) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=omacetaxine_mepesuccinate).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: RPL3 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:31 | 0:11 | 0/0/0 | 1/0/0 | 0/0/0 | 31,021/691 | einfracz / qwen3.8-27b | 3 | 0/3 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Harisha_2025 | irrelevant | 0 | 0 | The paper describes an in vitro antiviral screening for rabies virus using homoharringtonine and does not involve omacetaxine mepesuccinate or pharmacokinetic parameters. |
| popPK | Ling_2019 | irrelevant | 0 | 0 | The paper is an in-vitro study on cephalotaxine and homoharringtonine, not a population-pharmacokinetic study of omacetaxine_mepesuccinate. |
| popPK | Yang_2020 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral screening study for coronaviruses and does not involve omacetaxine mepesuccinate or any pharmacokinetic modeling. |
| popPK | Zhou_1990 | irrelevant | 0 | 0 | The paper investigates the in vitro mechanism of action of homoharringtonine (HHT) on leukemic cells and contains no pharmacokinetic data for omacetaxine mepesuccinate. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
