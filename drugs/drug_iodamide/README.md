<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08A&quot;,&quot;href&quot;:&quot;atc/V08A.md&quot;},{&quot;label&quot;:&quot;iodamide&quot;}]"></div>

# iodamide

- **generic name:** iodamide
- **ATC codes:** `V08AA03`
- **DrugBank:** [DB08948](https://go.drugbank.com/drugs/DB08948) · **PubChem:** [CID 3723](https://pubchem.ncbi.nlm.nih.gov/compound/3723)
- **molar mass:** 627.9402 g/mol (C12H11I3N2O4) — DrugBank
- **groups:** approved, withdrawn

## About

Iodamide is an iodinated, water-soluble X-ray contrast agent formerly used to visualise body structures during imaging examinations. It has been withdrawn and is no longer in clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3801333](https://www.wikidata.org/wiki/Q3801333) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| iodamide | parent | 627.94 | C12H11I3N2O4 | DrugBank | [3723](https://pubchem.ncbi.nlm.nih.gov/compound/3723) | Difazio_1978 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:10 | 2:49 | 0/1/0 | 0/0/0 | 0/0/0 | 14,994/924 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Difazio_1978_reference](drugs/drug_iodamide/Iodamide_Difazio1978_reference.md) | — | 1-compartment (no model) | 2 | Difazio LT et al., Pharmacokinetics of iodamide in normal…, Journal of clinical pharmac… (1978) | [10.1002/j.1552-4604.1978.tb01558.x](https://doi.org/10.1002/j.1552-4604.1978.tb01558.x) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Difazio_1978.pdf` | Difazio LT et al., Pharmacokinetics of iodamide in normal…, Journal of clinical pharmac… (1978) | popPK | 8 | [10.1002/j.1552-4604.1978.tb01558.x](https://doi.org/10.1002/j.1552-4604.1978.tb01558.x) | [338644](https://pubmed.ncbi.nlm.nih.gov/338644) | Human PK study of iodamide with two-compartment model and half-lives reported in abstract, but full parameter values (CL, V) likely in tables not provided. |

<sub>queue written 2026-10-07T22:08:29.796063+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bourin_1986 | irrelevant | 1 | 0 | The subject drug is ioxaglate; iodamide is only mentioned as a comparator, and no numeric PK values appear in the evidence. |
| popPK | Owen_1981 | irrelevant | 0 | 0 | Clinical urography comparison with no PK disposition parameters or numeric values reported. |
| popPK | Owen_1983 | irrelevant | 0 | 0 | Clinical urography imaging comparison with no PK disposition parameters or numeric CL/V values reported. |
| popPK | Zurth_1984 | relevant | 4 | 3 | Renal clearance of iodamide measured in rabbits with comparative values, but no full PK parameters (CL/V, half-life) and numeric values not shown in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 22:08 UTC</sub>
