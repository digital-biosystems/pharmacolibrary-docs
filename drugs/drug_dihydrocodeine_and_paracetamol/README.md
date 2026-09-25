<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;dihydrocodeine and paracetamol&quot;}]"></div>

# dihydrocodeine and paracetamol

- **generic name:** dihydrocodeine and paracetamol
- **ATC codes:** `N02AJ01`
- **DrugBank:** not captured
- **groups:** not captured

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-27 20:11 | 1:36 | 0/0/0 | 0/0/0 | 0/0/0 | 1,228/490 | ollama / qwen3.8:27b-mtp-q8_0 | 12 | 0/0 | 10/2 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `unknown_2016.pdf` | unknown, "Weak" opioid analgesics. Codeine, dihy…, Prescrire international (2016) | pgx | 8 | not captured | [27042732](https://www.ncbi.nlm.nih.gov/pubmed/27042732) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-08-27T20:11:19.155554+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Allegaert_2015 | irrelevant | 0 | 0 | The study focuses exclusively on the pharmacokinetics of paracetamol, not the combination drug dihydrocodeine_and_paracetamol. |
| popPK | Atkinson_2015 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ibuprofen and paracetamol, not dihydrocodeine and paracetamol. |
| popPK | Haslund-Krog_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of paracetamol (acetaminophen) in neonates, not dihydrocodeine_and_paracetamol. |
| popPK | Holladay_2023 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for acetaminophen (paracetamol) alone, not the combination drug dihydrocodeine_and_paracetamol. |
| popPK | Kantae_2016 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of paracetamol alone in zebrafish larvae, not the combination drug dihydrocodeine_and_paracetamol. |
| popPK | Kroes_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of paracetamol, not dihydrocodeine_and_paracetamol. |
| popPK | McQuay_1998 | irrelevant | 0 | 0 | The paper is a systematic review of clinical efficacy for postoperative analgesia and does not report pharmacokinetic parameters for dihydrocodeine and paracetamol. |
| PD | McQuay_1998 | not_relevant | 1 | 0 | The paper is a systematic review of clinical trials for postoperative analgesia and does not report primary pharmacokinetic or pharmacodynamic modeling or numeric PD parameters for dihydrocodeine and paracetamol. |
| popPK | Miners_1986 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of paracetamol alone, not the combination drug dihydrocodeine_and_paracetamol. |
| popPK | Roberts_2018 | irrelevant | 0 | 0 | The paper focuses on the population pharmacokinetics of paracetamol (acetaminophen) and its metabolites, not dihydrocodeine_and_paracetamol. |
| popPK | Schlachter_2026 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for atogepant, not dihydrocodeine_and_paracetamol. |
| popPK | Wattanakul_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for paracetamol, not the subject drug dihydrocodeine_and_paracetamol. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
