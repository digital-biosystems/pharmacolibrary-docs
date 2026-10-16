<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;lumateperone&quot;}]"></div>

# lumateperone

- **generic name:** lumateperone
- **ATC codes:** `N05AD10`
- **DrugBank:** [DB06077](https://go.drugbank.com/drugs/DB06077) · **PubChem:** [CID 21302490](https://pubchem.ncbi.nlm.nih.gov/compound/21302490)
- **molar mass:** 393.506 g/mol (C24H28FN3O) — DrugBank
- **groups:** approved, investigational

## About

Lumateperone is an antipsychotic drug used to treat schizophrenia. It is approved in the United States, but not authorised in the European Union.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 21:02 | 0:21 | 0/0/0 | 0/0/0 | 0/0/0 | 27,433/566 | einfracz / qwen3.8-27b | 3 | 0/3 | 3/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=lumateperone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | brain | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP1A2` substrate, `CYP2C8` substrate, `CYP3A4` substrate, `UGT1A1` substrate, `UGT1A4` substrate, `UGT2B15` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| — | brain | `SLC6A4` inhibitor | DrugBank actor |
| — | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: AKR1B10 (substrate), AKR1C1 (substrate), AKR1C4 (substrate), AKR1E2 (substrate), DRD1 (partial agonist), DRD2 (partial agonist), HTR2A (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_2025 | irrelevant | 0 | 0 | This is a clinical efficacy meta-analysis of lumateperone in schizophrenia, reporting no pharmacokinetic parameters. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | no_text gate: only 197 chars of text extracted (&lt; 400) |
| popPK | Furukawa_2026 | irrelevant | 0 | 0 | This is a dose-response meta-analysis of antipsychotic efficacy (clinical outcome), not a pharmacokinetic study, and does not report PK parameters like clearance or volume for lumateperone. |
| popPK | Hsu_2025 | irrelevant | 0 | 0 | The paper is a dose-response meta-analysis of clinical efficacy and safety, containing no pharmacokinetic disposition parameters (CL, V, etc.). |
| popPK | Lin_2025 | irrelevant | 0 | 0 | The paper is a meta-analysis of prolactin changes (a pharmacodynamic outcome) and contains no pharmacokinetic parameters (CL, V, etc.) for lumateperone. |
| popPK | Mishra_2026 | irrelevant | 2 | 1 | The study is a mechanistic Quantitative Systems Pharmacology (QSP) model focusing on efficacy prediction and dose-response optimization, not a population pharmacokinetic study reporting standard disposition parameters (CL, V, Q, ka) for lumateperone. |
| popPK | Tan_2024 | irrelevant | 0 | 0 | This is an in-vitro study screening FDA-approved drugs for ferroptosis inhibition in HT22 cells, not a pharmacokinetic study for lumateperone. |
| popPK | Terao_2026 | irrelevant | 0 | 0 | no_text gate: only 190 chars of text extracted (&lt; 400) |
| popPK | Tian_2025 | irrelevant | 0 | 0 | This is a meta-analysis of dosing and discontinuation rates in clinical trials, not a pharmacokinetic study reporting disposition parameters for lumateperone. |
| popPK | Wu_2022 | irrelevant | 0 | 0 | The paper is a meta-analysis of weight gain side effects and does not report any pharmacokinetic parameters for lumateperone. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
