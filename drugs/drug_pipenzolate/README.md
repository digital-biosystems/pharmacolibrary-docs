<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03A&quot;,&quot;href&quot;:&quot;atc/A03A.md&quot;},{&quot;label&quot;:&quot;pipenzolate&quot;}]"></div>

# pipenzolate

- **generic name:** pipenzolate
- **ATC codes:** `A03AB14`, `A03CA09`
- **DrugBank:** [DB13844](https://go.drugbank.com/drugs/DB13844) · **PubChem:** not captured
- **molar mass:** 354.469 g/mol (C22H28NO3) — DrugBank
- **groups:** investigational

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 13:03 | 0:12 | 0/0/0 | 0/0/0 | 0/0/0 | 5,295/290 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 13 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bock_1968 | irrelevant | 0 | 0 | no_text gate: only 90 chars of text extracted (&lt; 400) |
| popPK | Buch_1997 | irrelevant | 0 | 0 | no_text gate: only 59 chars of text extracted (&lt; 400) |
| popPK | Burgener_1976 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effect of pipenzolate on bile flow and iodine concentration, not its pharmacokinetic disposition parameters. |
| popPK | DAVIS_1959 | irrelevant | 0 | 0 | no_text gate: only 89 chars of text extracted (&lt; 400) |
| popPK | Duggan_1965 | irrelevant | 0 | 0 | no_text gate: only 118 chars of text extracted (&lt; 400) |
| popPK | Elzanfaly_2015 | irrelevant | 0 | 0 | The paper is an analytical chemistry study on HPLC method development and validation, not a pharmacokinetic study, and contains no PK parameters for pipenzolate. |
| PD | Elzanfaly_2015 | not_relevant | 0 | 0 | The paper describes analytical HPLC methods for drug quantification and contains no pharmacodynamic or exposure-response data. |
| popPK | Finkbeiner_1977 | irrelevant | 0 | 0 | The paper is a review of pharmacologic properties and clinical usage of parasympathetic depressants, containing no quantitative pharmacokinetic parameters for pipenzolate. |
| popPK | Garberoglio_1983 | irrelevant | 0 | 0 | Pipenzolate is used only as a choleretic agent to stimulate bile flow in a study of insulin's effects, not as the subject of pharmacokinetic analysis. |
| popPK | Kurtoglu_2000 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding pipenzolate pharmacokinetics. |
| popPK | Tahir_1992 | irrelevant | 0 | 0 | no_text gate: only 53 chars of text extracted (&lt; 400) |
| popPK | Terrar_1974 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology experiment on frog skeletal muscle investigating desensitization mechanisms, not a pharmacokinetic study of pipenzolate. |
| popPK | Vincent_1967 | irrelevant | 0 | 0 | no_text gate: only 53 chars of text extracted (&lt; 400) |
| popPK | unknown_1957 | irrelevant | 0 | 0 | no_text gate: only 25 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
