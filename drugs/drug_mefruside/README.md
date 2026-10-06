<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03B&quot;,&quot;href&quot;:&quot;atc/C03B.md&quot;},{&quot;label&quot;:&quot;mefruside&quot;}]"></div>

# mefruside

- **generic name:** mefruside
- **ATC codes:** `C03BA05`, `C03BB05`
- **DrugBank:** [DB13405](https://go.drugbank.com/drugs/DB13405) · **PubChem:** not captured
- **molar mass:** 382.87 g/mol (C13H19ClN2O5S2) — DrugBank
- **groups:** experimental

## About

Mefruside is a sulfonamide diuretic that has been used to treat arterial hypertension. It is no longer in practical use and is regarded as an experimental drug, with no marketing authorisation recorded in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6807947](https://www.wikidata.org/wiki/Q6807947) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 07:37 | 0:51 | 0/0/0 | 0/0/0 | 0/0/0 | 1,586/112 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 1/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fleuren_1980 | irrelevant | 0 | 0 | no_text gate: only 63 chars of text extracted (&lt; 400) |
| popPK | Kirsten_1990 | irrelevant | 0 | 0 | The study is a clinical efficacy trial comparing blood pressure outcomes, not a pharmacokinetic study, and reports no disposition parameters for mefruside. |
| PD | Kirsten_1990 | not_relevant | 0 | 0 | The paper is a clinical efficacy trial comparing two drug combinations, reporting only mean blood pressure changes without any pharmacokinetic data, concentration-effect modeling, or numeric PD parameters. |
| popPK | MBuyamba-Kabangu_1987 | irrelevant | 0 | 0 | The study is a clinical trial assessing blood pressure efficacy where mefruside is used only as an add-on antihypertensive agent, with no pharmacokinetic parameters reported. |
| PD | MBuyamba-Kabangu_1987 | not_relevant | 0 | 0 | The paper reports clinical efficacy and safety outcomes of mefruside as an add-on therapy but does not provide any pharmacokinetic data, concentration-effect analysis, or numeric pharmacodynamic parameters for mefruside. |
| popPK | Notghi_1987 | irrelevant | 0 | 0 | The study focuses on the clinical effects of mefruside on blood pressure, renal function, and platelet function, and does not report any pharmacokinetic parameters. |
| PD | Notghi_1987 | not_relevant | 1 | 0 | The paper reports qualitative clinical outcomes (blood pressure control) and lack of change in renal/platelet function, but provides no numeric concentration-effect or dose-response parameters for mefruside. |
| popPK | Ogawa_1985 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of enalapril in renovascular hypertension, and mefruside is only mentioned as an adjunctive agent in one case without any pharmacokinetic parameters reported. |
| PD | Ogawa_1985 | not_relevant | 0 | 0 | The paper studies enalapril maleate, not mefruside, and mefruside is only mentioned as an adjunctive therapy in one case without any pharmacodynamic or exposure-response analysis. |
| popPK | Santos_1970 | irrelevant | 0 | 0 | no_text gate: only 35 chars of text extracted (&lt; 400) |
| popPK | Werning_1970 | irrelevant | 0 | 0 | no_text gate: only 179 chars of text extracted (&lt; 400) |
| popPK | el_1997 | irrelevant | 0 | 0 | The paper describes analytical methods for drug quantification in tablets, not a pharmacokinetic study with disposition parameters. |
| PD | el_1997 | not_relevant | 0 | 0 | The paper describes analytical methods (spectroscopy, GLC, HPLC) for quantifying drug concentrations in tablets, not pharmacodynamic or exposure-response relationships. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
