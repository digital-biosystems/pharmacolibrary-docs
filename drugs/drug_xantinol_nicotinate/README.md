<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C04A&quot;,&quot;href&quot;:&quot;atc/C04A.md&quot;},{&quot;label&quot;:&quot;xantinol nicotinate&quot;}]"></div>

# xantinol nicotinate

- **generic name:** xantinol nicotinate
- **ATC codes:** `C04AD02`
- **DrugBank:** [DB09092](https://go.drugbank.com/drugs/DB09092) · **PubChem:** [CID 9913](https://pubchem.ncbi.nlm.nih.gov/compound/9913)
- **molar mass:** 311.342 g/mol (C13H21N5O4) — DrugBank
- **groups:** approved, withdrawn

## About

Xantinol nicotinate is a purine-derivative peripheral vasodilator once used to improve blood flow in circulatory disorders. It has been withdrawn and is no longer in clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5814478](https://www.wikidata.org/wiki/Q5814478) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:31 | 0:22 | 0/0/0 | 0/0/0 | 0/0/0 | 16,220/274 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 1/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=xantinol_nicotinate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: GAPDH (cofactor), IDH3A (cofactor), MDH2 (cofactor), NNT (cofactor), OGDH (cofactor), RPL3 (binder).</sub>

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
| popPK | Juszczyk_1975 | irrelevant | 0 | 0 | no_text gate: only 161 chars of text extracted (&lt; 400) |
| popPK | Nikolov_1984 | irrelevant | 0 | 0 | The study focuses on the anti-hypoxic effects of cinnarizine, with xantinol nicotinate used only as a reference drug, and no pharmacokinetic parameters are reported. |
| PD | Nikolov_1984 | not_relevant | 1 | 0 | The paper mentions xantinol nicotinate only as a reference drug for comparison and does not provide any specific numeric dose-response parameters or concentration-effect data for it. |
| popPK | Nikolov_1987 | irrelevant | 0 | 0 | The study focuses on the cerebroprotective effects of nicergoline, with xantinol nicotinate used only as a reference drug, and no pharmacokinetic parameters are reported. |
| PD | Nikolov_1987 | not_relevant | 2 | 0 | The text describes a qualitative shift in the dose-response curve for nicergoline (not xantinol nicotinate) and does not provide any numeric PD parameters or extractable data for xantinol nicotinate. |
| popPK | Szilvási_1973 | irrelevant | 0 | 0 | no_text gate: only 72 chars of text extracted (&lt; 400) |
| popPK | Zivić_2008 | irrelevant | 0 | 0 | The paper is a clinical study on the efficacy of xantinol nicotinate for sudden hearing loss and does not report any pharmacokinetic parameters. |
| PD | Zivić_2008 | not_relevant | 0 | 0 | The paper is a clinical case series reporting hearing recovery rates after vasoactive treatment, with no pharmacokinetic or pharmacodynamic modeling, concentration-effect analysis, or numeric PD parameters. |
| popPK | von_1985 | irrelevant | 2 | 0 | The study reports bioavailability and tolerance comparisons but does not provide quantitative pharmacokinetic parameters (CL, V, ka, etc.) in the evidence. |
| PD | von_1985 | not_relevant | 1 | 0 | The paper reports bioavailability (PK) and qualitative tolerance (flush rate) comparisons but does not provide numeric PD parameters or a quantitative exposure-response model. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
