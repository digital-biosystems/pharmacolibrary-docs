<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;entrectinib&quot;}]"></div>

# entrectinib

- **generic name:** entrectinib
- **ATC codes:** `L01EX14`
- **DrugBank:** [DB11986](https://go.drugbank.com/drugs/DB11986) · **PubChem:** [CID 25141092](https://pubchem.ncbi.nlm.nih.gov/compound/25141092)
- **molar mass:** 560.65 g/mol (C31H34F2N6O2) — DrugBank
- **groups:** approved, investigational

## About

Entrectinib is a protein kinase inhibitor used to treat cancer, notably non-small-cell lung carcinoma. It is an approved medicine, authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q25323953](https://www.wikidata.org/wiki/Q25323953) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:41 | 0:29 | 0/0/0 | 0/1/0 | 0/0/0 | 5,221/2,992 | openai / gpt-6-luna | 1 | 1/0 | 0/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Mercier_2022_SAEs](drugs/drug_entrectinib/pd_Mercier_2022_SAEs.md) | serious adverse events ← entrectinib · categorical (graded) response model | — | Mercier F et al., Efficacy and safety exposure-response a…, Cancer chemotherapy and pha… (2022) | [10.1007/s00280-022-04402-w](https://doi.org/10.1007/s00280-022-04402-w) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Mercier_2022_TEAEs](drugs/drug_entrectinib/pd_Mercier_2022_TEAEs.md) | Grade ≥ 3 treatment-emergent adverse events ← entrectinib · categorical (graded) response model | — | Mercier F et al., Efficacy and safety exposure-response a…, Cancer chemotherapy and pha… (2022) | [10.1007/s00280-022-04402-w](https://doi.org/10.1007/s00280-022-04402-w) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Mercier_2022_tumor_size_data](drugs/drug_entrectinib/pd_Mercier_2022_tumor_size_data.md) | tumor size data ← entrectinib · disease-progression model | — | Mercier F et al., Efficacy and safety exposure-response a…, Cancer chemotherapy and pha… (2022) | [10.1007/s00280-022-04402-w](https://doi.org/10.1007/s00280-022-04402-w) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=entrectinib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ALK (inhibitor), JAK2 (inhibitor), NTRK1 (inhibitor), NTRK2 (inhibitor), NTRK3 (inhibitor), ROS1 (inhibitor), TNK2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Djebli_2021.pdf` | Djebli N et al., Physiologically-Based Pharmacokinetic M…, European journal of drug me… (2021) | popPK | 9 | [10.1007/s13318-021-00714-z](https://doi.org/10.1007/s13318-021-00714-z) | [34495458](https://pubmed.ncbi.nlm.nih.gov/34495458) | The paper models entrectinib and M5 using clinical data, but no numeric disposition parameter values are provided in the evidence. |

<sub>queue written 2026-10-06T23:41:30.670852+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Djebli_2021 | relevant | 9 | 1 | The paper models entrectinib and M5 using clinical data, but no numeric disposition parameter values are provided in the evidence. |
| popPK | González-Sales_2021 | relevant | 7 | 0 | The evidence indicates pharmacokinetic assessment, but includes only a sampling scheme and no numeric disposition parameters. |
| popPK | Mercier_2022 | irrelevant | 2 | 0 | This is an exposure-response analysis; disposition parameters come from a previously described model and their numeric values are not provided here. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
