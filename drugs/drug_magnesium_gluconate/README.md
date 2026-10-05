<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A12C&quot;,&quot;href&quot;:&quot;atc/A12C.md&quot;},{&quot;label&quot;:&quot;magnesium gluconate&quot;}]"></div>

# magnesium gluconate

- **generic name:** magnesium gluconate
- **ATC codes:** `A12CC03`
- **DrugBank:** [DB13749](https://go.drugbank.com/drugs/DB13749) · **PubChem:** [CID 71587201](https://pubchem.ncbi.nlm.nih.gov/compound/71587201)
- **molar mass:** 450.629 g/mol (C12H26MgO16) — DrugBank
- **groups:** approved, withdrawn

## About

Magnesium gluconate is a magnesium mineral supplement that was used to treat or prevent low magnesium levels. It is no longer marketed, having been withdrawn, though it was once an approved product.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6731392](https://www.wikidata.org/wiki/Q6731392) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 09:53 | 0:21 | 0/0/0 | 0/0/0 | 0/0/0 | 6,274/191 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=magnesium_gluconate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ABL1 (inducer), ABL1 (substrate), ADCY1 (substrate), ATP1A1 (inducer), ATP5F1D (substrate), CKB (inducer), CKB (substrate), GUCY1A2 (substrate), PFKFB1 (inducer).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 3 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ally_1992 | irrelevant | 0 | 0 | The study is a clinical efficacy trial comparing tocolysis treatments and does not report any pharmacokinetic parameters for magnesium gluconate. |
| PD | Ally_1992 | not_relevant | 1 | 0 | The text provides only a qualitative conclusion about dose potentiation and tolerance without reporting any numeric concentration-effect data, dose-response curves, or specific PD parameters. |
| popPK | JESKE_1963 | irrelevant | 0 | 0 | no_text gate: only 134 chars of text extracted (&lt; 400) |
| PD | JESKE_1963 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess the pharmacodynamic relationship. |
| popPK | Steinlechner_2006 | irrelevant | 0 | 0 | The study evaluates the co-analgesic effect of magnesium gluconate on remifentanil requirements and does not report pharmacokinetic parameters for magnesium. |
| PD | Steinlechner_2006 | not_relevant | 2 | 1 | The study reports a qualitative co-analgesic effect (reduced remifentanil consumption) but does not provide numeric PD parameters (e.g., EC50, Emax) or a concentration-effect curve for magnesium. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
