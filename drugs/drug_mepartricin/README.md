<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A01A&quot;,&quot;href&quot;:&quot;atc/A01A.md&quot;},{&quot;label&quot;:&quot;mepartricin&quot;}]"></div>

# mepartricin

- **generic name:** mepartricin
- **ATC codes:** `A01AB16`, `D01AA06`, `G01AA09`, `G04CX03`
- **DrugBank:** [DB13633](https://go.drugbank.com/drugs/DB13633) · **PubChem:** not captured
- **groups:** investigational

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 01:52 | 0:26 | 0/0/0 | 0/0/0 | 0/0/0 | 13,764/487 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Giurioli_1988 | irrelevant | 0 | 0 | no_text gate: only 76 chars of text extracted (&lt; 400) |
| PD | Giurioli_1988 | not_relevant | 0 | 0 | The provided text is only a title and contains no data, analysis, or numeric parameters to derive a pharmacodynamic relationship. |
| popPK | Godts_1987 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for local treatment of vaginitis and does not report any pharmacokinetic parameters (CL, V, etc.) for mepartricin. |
| PD | Godts_1987 | not_relevant | 0 | 0 | The paper reports only clinical cure rates and qualitative symptom improvement for a fixed dose regimen, with no concentration-effect data, PK/PD modeling, or numeric PD parameters. |
| popPK | Petrou_1991 | irrelevant | 0 | 0 | The study is an in-vitro microbiological interaction study, not a pharmacokinetic study, and reports no disposition parameters. |
| PD | Petrou_1991 | not_relevant | 1 | 0 | The paper describes qualitative in vitro interactions (synergy/antagonism) and general activity patterns (cidal vs fungistatic) but does not report numeric PD parameters (Emax, EC50) or quantitative exposure-response curves for mepartricin. |
| popPK | Piccinno_1990 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic interactions with antilipemic drugs and does not report quantitative pharmacokinetic parameters for mepartricin. |
| PD | Piccinno_1990 | not_relevant | 1 | 0 | The text describes a qualitative clinical trial assessing drug interactions and symptom improvement but provides no numeric concentration-effect data, dose-response curves, or PD parameters. |
| popPK | Pisani_1995 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety study for benign prostatic hypertrophy and does not report any pharmacokinetic parameters. |
| PD | Pisani_1995 | not_relevant | 0 | 0 | The text describes a clinical efficacy study with a fixed dose but contains no pharmacokinetic data, concentration-effect analysis, or numeric PD parameters. |
| popPK | Prezioso_1996 | irrelevant | 0 | 0 | The paper is a clinical efficacy study for BPH treatment and does not report any pharmacokinetic parameters for mepartricin. |
| PD | Prezioso_1996 | not_relevant | 1 | 0 | The text describes a clinical trial comparing a fixed dose of mepartricin to placebo but provides no concentration-effect data, dose-response curve, or numeric PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
