<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08C&quot;,&quot;href&quot;:&quot;atc/V08C.md&quot;},{&quot;label&quot;:&quot;gadoteridol&quot;}]"></div>

# gadoteridol

- **generic name:** gadoteridol
- **ATC codes:** `V08CA04`
- **DrugBank:** [DB00597](https://go.drugbank.com/drugs/DB00597) · **PubChem:** [CID 60714](https://pubchem.ncbi.nlm.nih.gov/compound/60714)
- **molar mass:** 558.68 g/mol (C17H29GdN4O7) — DrugBank
- **groups:** approved, investigational

## About

Gadoteridol is a gadolinium-based contrast agent used to improve the visibility of tissues during magnetic resonance imaging scans. It is an approved paramagnetic MRI contrast medium, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5516429](https://www.wikidata.org/wiki/Q5516429) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:44 | 5:12 | 0/0/0 | 1/0/0 | 0/0/0 | 150,724/6,055 | openai / gpt-6-luna | 9 | 0/6 | 9/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Yuh_1991_lesion_contrast_ratio](drugs/drug_gadoteridol/pd_Yuh_1991_lesion_contrast_ratio.md) | lesion contrast ratio ← gadoteridol · direct linear effect | — | Yuh WT et al., MR evaluation of CNS tumors: dose compa…, Radiology (1991) | [10.1148/radiology.180.2.2068317](https://doi.org/10.1148/radiology.180.2.2068317) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=gadoteridol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 32 matched, 26 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Belova_2017 | irrelevant | 0 | 0 | The paper models GDNF and uses Gd-DTPA as a tracer; it reports no gadoteridol pharmacokinetic parameters. |
| popPK | Eto_2025 | irrelevant | 0 | 0 | The quantitative pharmacokinetic parameters are for gadopiclenol; gadoteridol is mentioned only as a comparator. |
| popPK | Guidolin_2020 | irrelevant | 1 | 0 | This is an in-vitro collagen interaction study, with no numeric gadoteridol pharmacokinetic parameters reported. |
| popPK | Heverhagen_2004 | irrelevant | 0 | 0 | Gadoteridol is used as an imaging contrast agent, and no quantitative disposition parameters for it are reported. |
| popPK | Hofmann_2024 | irrelevant | 1 | 0 | The study models gadoquatrane, while gadoteridol is only a comparator and its numerical parameters are not provided. |
| popPK | Mansur_2025 | irrelevant | 0 | 0 | Gadoteridol (ProHance) is only an imaging contrast agent; no gadoteridol disposition parameters or numeric PK values are reported. |
| popPK | Mendes_2025 | irrelevant | 1 | 0 | Gadoteridol is used as a diagnostic contrast agent, and the model estimates myocardial perfusion rather than gadoteridol disposition. |
| popPK | Preda_2004 | irrelevant | 1 | 0 | Gadoteridol (ProHance) is only a comparator, and no quantitative gadoteridol disposition parameters are reported. |
| popPK | Sardanelli_2002 | irrelevant | 0 | 0 | This is an imaging study and reports no quantitative gadoteridol pharmacokinetic parameters. |
| popPK | Scala_2018 | irrelevant | 0 | 0 | This reports quantitative pharmacokinetics for gadoterate meglumine, not gadoteridol. |
| popPK | unknown_2017 | irrelevant | 0 | 0 | no_text gate: only 20 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
