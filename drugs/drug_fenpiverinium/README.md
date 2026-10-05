<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03A&quot;,&quot;href&quot;:&quot;atc/A03A.md&quot;},{&quot;label&quot;:&quot;fenpiverinium&quot;}]"></div>

# fenpiverinium

- **generic name:** fenpiverinium
- **ATC codes:** `A03AB21`
- **DrugBank:** [DB13759](https://go.drugbank.com/drugs/DB13759) · **PubChem:** not captured
- **molar mass:** 337.486 g/mol (C22H29N2O) — DrugBank
- **groups:** investigational

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 12:27 | 0:25 | 0/0/0 | 0/0/0 | 0/0/0 | 10,503/495 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 12 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bloch_1985 | irrelevant | 0 | 0 | The study is a clinical trial assessing analgesic efficacy, not a pharmacokinetic study, and reports no disposition parameters for fenpiverinium. |
| popPK | Chaudhary_1999 | irrelevant | 0 | 0 | The study is a clinical efficacy trial for pain management and does not report any pharmacokinetic parameters for fenpiverinium. |
| popPK | Chaudhary_1999_2 | irrelevant | 0 | 0 | no_text gate: only 268 chars of text extracted (&lt; 400) |
| popPK | Colpi_1985 | irrelevant | 0 | 0 | no_text gate: only 181 chars of text extracted (&lt; 400) |
| popPK | Dureng_1981 | irrelevant | 0 | 0 | The study is a pharmacodynamic comparison of antispasmodic efficacy (ED50 values) in anesthetized dogs, not a pharmacokinetic study reporting disposition parameters for fenpiverinium. |
| popPK | Golhar_1999 | irrelevant | 0 | 0 | The study is a clinical efficacy trial for pain relief and does not report any pharmacokinetic parameters for fenpiverinium. |
| popPK | Hertle_1984 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of smooth muscle activity, not a pharmacokinetic study reporting disposition parameters. |
| PD | Hertle_1984 | not_relevant | 3 | 2 | The paper describes qualitative anticholinergic effects of fenpiverinium but provides no numeric PD parameters (e.g., EC50, Emax) or concentration-effect curve for it; the only quantitative PD parameter reported is for pitofenone. |
| popPK | Jensen_2021 | irrelevant | 0 | 0 | The study is an in-vitro transporter (OCT1) substrate identification study, not a pharmacokinetic study reporting disposition parameters for fenpiverinium. |
| PD | Jensen_2021 | not_relevant | 0 | 0 | The paper focuses on machine learning prediction of OCT1 transporter substrates and in vitro uptake validation, reporting no pharmacodynamic or exposure-response data for fenpiverinium. |
| popPK | Vojta_2015 | irrelevant | 0 | 0 | The paper describes an HPLC method for impurity analysis in a suppository formulation, not a pharmacokinetic study. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
