<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;lazertinib&quot;}]"></div>

# lazertinib

- **generic name:** lazertinib
- **ATC codes:** `L01EB09`
- **DrugBank:** [DB16216](https://go.drugbank.com/drugs/DB16216) · **PubChem:** not captured
- **molar mass:** 554.655 g/mol (C30H34N8O3) — DrugBank
- **groups:** approved, investigational

## About

Lazertinib is a protein kinase inhibitor used to treat non-small-cell lung carcinoma. It is an authorised medicine in the European Union for this cancer indication.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q105337288](https://www.wikidata.org/wiki/Q105337288) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| lazertinib | parent | 554.655 | C30H34N8O3 | DrugBank | — | Ter_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:37 | 1:12 | 0/3/0 | 0/0/0 | 0/0/0 | 21,537/5,490 | openai / gpt-6-luna | 3 | 0/1 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by qwen3.8-27b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Ter_2025_gstm1_non_nullapproved_dose](drugs/drug_lazertinib/Lazertinib_Ter2025_gstm1_non_nullapproved_dose.md) | — | 1-compartment (no model) | 0 | Ter Heine R et al., Optimizing lazertinib therapy through G…, Cancer chemotherapy and pha… (2025) | [10.1007/s00280-025-04828-y](https://doi.org/10.1007/s00280-025-04828-y) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by qwen3.8-27b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Ter_2025_gstm1_nullalternative_dose](drugs/drug_lazertinib/Lazertinib_Ter2025_gstm1_nullalternative_dose.md) | — | 1-compartment (no model) | 1 (+1 cov.) | Ter Heine R et al., Optimizing lazertinib therapy through G…, Cancer chemotherapy and pha… (2025) | [10.1007/s00280-025-04828-y](https://doi.org/10.1007/s00280-025-04828-y) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by qwen3.8-27b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Ter_2025_gstm1_nullapproved_dose](drugs/drug_lazertinib/Lazertinib_Ter2025_gstm1_nullapproved_dose.md) | — | 1-compartment (no model) | 0 | Ter Heine R et al., Optimizing lazertinib therapy through G…, Cancer chemotherapy and pha… (2025) | [10.1007/s00280-025-04828-y](https://doi.org/10.1007/s00280-025-04828-y) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Huh_2023.pdf` | Huh KY et al., Effects of food and race on the pharmac…, Lung cancer (Amsterdam, Net… (2023) | popPK | 8 | [10.1016/j.lungcan.2022.11.021](https://doi.org/10.1016/j.lungcan.2022.11.021) | [36495784](https://pubmed.ncbi.nlm.nih.gov/36495784) | This is an original human lazertinib PK study, but numeric disposition parameter values are not shown in the evidence. |

<sub>queue written 2026-10-07T02:36:09.138992+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Huh_2023 | relevant | 8 | 1 | This is an original human lazertinib PK study, but numeric disposition parameter values are not shown in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 02:36 UTC</sub>
