<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D08A&quot;,&quot;href&quot;:&quot;atc/D08A.md&quot;},{&quot;label&quot;:&quot;hexamidine&quot;}]"></div>

# hexamidine

- **generic name:** hexamidine
- **ATC codes:** `D08AC04`, `R01AX07`, `R02AA18`, `S01AX08`, `S03AA05`
- **DrugBank:** [DB03808](https://go.drugbank.com/drugs/DB03808) · **PubChem:** [CID 65130](https://pubchem.ncbi.nlm.nih.gov/compound/65130)
- **molar mass:** 354.446 g/mol (C20H26N4O2) — DrugBank
- **groups:** approved, investigational

## About

Hexamidine is an anti-infective agent used as an antiseptic and disinfectant, for example on the skin, in nasal and throat preparations, and for eye infections. It is an approved drug, though not authorised by the European Medicines Agency, and appears to be used only in limited settings.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q250360](https://www.wikidata.org/wiki/Q250360) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:48 | 0:12 | 0/0/0 | 0/0/0 | 0/0/0 | 4,116/154 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Lobanov_1971 | irrelevant | 0 | 0 | no_text gate: only 112 chars of text extracted (&lt; 400) |
| PD | Lobanov_1971 | not_relevant | 0 | 0 | The paper describes an analytical method (interferometry) for quantifying hexamidine and other compounds in dosage forms, containing no pharmacodynamic or exposure-response data. |
| popPK | Taravaud_2017 | irrelevant | 0 | 0 | The study is an in-vitro antimicrobial efficacy evaluation (IC50) and does not report any pharmacokinetic parameters for hexamidine. |
| popPK | Wesołowski_2026 | irrelevant | 0 | 0 | The paper is a review on oxidative stress mechanisms in Acanthamoeba keratitis and does not contain pharmacokinetic data for hexamidine. |
| PD | Wesołowski_2026 | not_relevant | 0 | 0 | The paper is a review on oxidative stress in Acanthamoeba keratitis and does not report any pharmacodynamic or exposure-response data for hexamidine. |
| popPK | Yeh_1993 | irrelevant | 0 | 0 | The study focuses on pentamidine pharmacokinetics, and hexamidine is only mentioned as an unavailable internal standard for the assay. |
| popPK | Zhang_2017 | irrelevant | 0 | 0 | The paper is a mechanistic study on PRMT1 inhibition and does not report any pharmacokinetic parameters for hexamidine. |
| PD | Zhang_2017 | not_relevant | 3 | 2 | The paper reports a single IC50 value for hexamidine in an in vitro enzyme assay, which is a potency metric rather than a pharmacodynamic exposure-response or dose-response relationship with derivable PD parameters (e.g., Emax, slope) in a biological system. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
