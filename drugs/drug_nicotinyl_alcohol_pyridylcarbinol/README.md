<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C04A&quot;,&quot;href&quot;:&quot;atc/C04A.md&quot;},{&quot;label&quot;:&quot;nicotinyl alcohol (pyridylcarbinol)&quot;}]"></div>

# nicotinyl alcohol (pyridylcarbinol)

- **generic name:** nicotinyl alcohol (pyridylcarbinol)
- **ATC codes:** `C04AC02`, `C10AD05`
- **DrugBank:** [DB04145](https://go.drugbank.com/drugs/DB04145) · **PubChem:** [CID 7510](https://pubchem.ncbi.nlm.nih.gov/compound/7510)
- **molar mass:** 109.1259 g/mol (C6H7NO) — DrugBank
- **groups:** experimental

## About

Nicotinyl alcohol is a nicotinic acid derivative that acts as a vasodilator and has been classified for use as a peripheral vasodilator and lipid-modifying agent. It is currently regarded as experimental, with no authorisation by the European Medicines Agency, so it does not appear to be in routine clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q411732](https://www.wikidata.org/wiki/Q411732) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:07 | 0:08 | 0/0/0 | 0/0/0 | 0/0/0 | 4,425/60 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | FROMMEL_1949 | irrelevant | 0 | 0 | no_text gate: only 68 chars of text extracted (&lt; 400) |
| PD | FROMMEL_1949 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess the pharmacodynamic relationship. |
| popPK | Kaatzsch_1972 | irrelevant | 0 | 0 | no_text gate: only 76 chars of text extracted (&lt; 400) |
| PD | Kaatzsch_1972 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric parameters required to assess a pharmacodynamic relationship. |
| popPK | Schräpler_1977 | irrelevant | 0 | 0 | no_text gate: only 101 chars of text extracted (&lt; 400) |
| popPK | Schwartzkopff_1978 | irrelevant | 0 | 0 | The paper is a clinical efficacy study on hyperlipoproteinemia treatment and does not report any pharmacokinetic parameters for nicotinyl_alcohol_pyridylcarbinol. |
| PD | Schwartzkopff_1978 | not_relevant | 1 | 0 | The text is a qualitative clinical summary of combination therapy outcomes and dosing ranges, lacking any concentration-effect data, dose-response curves, or numeric PD parameters. |
| popPK | Zöllner_1977 | irrelevant | 0 | 0 | The paper is a clinical efficacy report on hypercholesterolemia treatment and does not contain any pharmacokinetic parameters or quantitative disposition data for nicotinyl_alcohol_pyridylcarbinol. |
| PD | Zöllner_1977 | not_relevant | 1 | 0 | The text reports clinical outcomes (mortality, angina attacks) over 12 years but provides no concentration-effect data, dose-response curve, or numeric PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
