<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;revumenib&quot;}]"></div>

# revumenib

- **generic name:** revumenib
- **ATC codes:** `L01XX87`
- **DrugBank:** [DB18515](https://go.drugbank.com/drugs/DB18515) · **PubChem:** not captured
- **molar mass:** 630.82 g/mol (C32H47FN6O4S) — DrugBank
- **groups:** approved, investigational

## About

It is an approved drug, mainly used in specialist cancer care, and is also being studied for other uses.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:37 | 3:09 | 0/0/0 | 0/0/0 | 0/0/0 | 16,873/497 | einfracz / qwen3.8-27b | 3 | 3/0 | 2/1 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=revumenib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | `CYP2C8` substrate, `CYP3A4` inhibitor/substrate, `SLC22A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A2` substrate, `SLC22A6` substrate, `SLC22A8` substrate, `SLC47A1` inhibitor/substrate | DrugBank actor |
| excretion | liver | `SLC47A1` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: MEN1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Arellano_2025 | not_relevant | 0 | 0 | The paper reports clinical efficacy (CR, ORR) and safety for revumenib in AML patients, but does not report pharmacokinetic or pharmacodynamic parameters or any pharmacogenomic effects on these parameters. |
| PGx | Hou_2026 | not_relevant | 0 | 0 | The paper investigates the mechanism of NPM1c and MEN1 in AML but does not contain any data, text, or tables regarding the pharmacokinetics or pharmacodynamics of the drug revumenib. |
| PGx | Issa_2026 | not_relevant | 0 | 0 | The paper reports the efficacy and safety of a drug combination but contains no pharmacogenomic analysis linking gene variants to changes in PK/PD parameters of revumenib. |
| PGx | Ma_2026 | not_relevant | 0 | 0 | The text is a general review of menin inhibitors in AML and discusses PK properties qualitatively without reporting specific pharmacogenomic effects on PK or PD parameters. |
| PGx | Ray_2025 | not_relevant | 0 | 0 | The paper reviews clinical outcomes (efficacy/safety) of targeted therapies in KMT2A-rearranged B-ALL and does not report pharmacogenomic associations affecting the PK or PD of revumenib. |
| PGx | Shimamoto_2026 | not_relevant | 0 | 0 | The study evaluates drug sensitivity in leukemia models based on protein phosphorylation biomarkers (p-MEF2C S222) and does not report pharmacogenomic effects of genetic variants on PK or PD parameters. |
| PGx | Simio_2026 | not_relevant | 1 | 2 | The paper is a general review of the mechanism and clinical efficacy of menin inhibitors (like revumenib) in AML; it discusses CYP3A4 metabolism generally as a potential drug interaction but does not report a specific pharmacogenomic variant's effect on revumenib's PK or PD parameters. |
| popPK | unknown_2025 | irrelevant | 0 | 0 | no_text gate: only 39 chars of text extracted (&lt; 400) |
| popPK | unknown_2025_2 | irrelevant | 0 | 0 | no_text gate: only 61 chars of text extracted (&lt; 400) |
| popPK | unknown_2026 | irrelevant | 0 | 0 | no_text gate: only 48 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
