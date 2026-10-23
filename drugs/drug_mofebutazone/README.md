<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;mofebutazone&quot;}]"></div>

# mofebutazone

- **generic name:** mofebutazone
- **ATC codes:** `M01AA02`, `M02AA02`
- **DrugBank:** [DB13629](https://go.drugbank.com/drugs/DB13629) · **PubChem:** none
- **molar mass:** 232.283 g/mol (C13H16N2O2) — DrugBank
- **groups:** experimental

## About

Mofebutazone is a non-steroidal anti-inflammatory drug of the butylpyrazolidine group, used for inflammatory and rheumatic conditions and as a topical preparation for joint and muscle pain. It is not an established marketed medicine today; databases classify it as experimental, and no EU authorisation is recorded.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6890329](https://www.wikidata.org/wiki/Q6890329) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| mofebutazone | parent | 232.283 | C13H16N2O2 | DrugBank | — | Kassem_1984 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| ka | kabs | 10.1 | 1/h | 10.1 h-1 | adults | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Kassem_1984_reference](drugs/drug_mofebutazone/Mofebutazone_Kassem1984_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Kassem_1984_reference](drugs/drug_mofebutazone/Mofebutazone_Kassem1984_reference.md) | — | 1-compartment (no model) | 3 | Kassem MA et al., Pharmacokinetics of [4-14C] mofebutazon…, European journal of drug me… (1984) | [10.1007/BF03189645](https://doi.org/10.1007/BF03189645) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:20 | 0:14 | 1/0/0 | 0/0/0 | 0/0/0 | 7,796/778 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kassem_1984.pdf` | Kassem MA et al., Pharmacokinetics of [4-14C] mofebutazon…, European journal of drug me… (1984) | popPK | 10 | [10.1007/BF03189645](https://doi.org/10.1007/BF03189645) | [6519123](https://pubmed.ncbi.nlm.nih.gov/6519123) | The abstract provides specific quantitative parameters including ka, kel, renal clearance, and compartment model details for mofebutazone in humans. |

<sub>queue written 2026-10-07 02:20 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Nielsen-Kudsk_1980 | irrelevant | 0 | 0 | The paper describes an HPLC method for multiple drugs including mofebutazone, but the provided evidence only reports quantitative pharmacokinetic parameters for naproxen as a case study, not for mofebutazone. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmofebutazone%5D&body=Drug%3A%20mofebutazone%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_mofebutazone/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 02:20 UTC</sub>
