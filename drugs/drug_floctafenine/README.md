<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;floctafenine&quot;}]"></div>

# floctafenine

- **generic name:** floctafenine
- **ATC codes:** `N02BG04`
- **DrugBank:** [DB08976](https://go.drugbank.com/drugs/DB08976)
- **groups:** approved, withdrawn

## About

**Description.** Floctafenine is an anti-inflammatory analgesic similar in action to aspirin. Floctafenine inhibits prostaglandin synthesis.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-20 23:36 | 1:46 | 0/0/0 | 0/1/0 | 0/0/0 | 16,824/742 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 1/1 | 2/2 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.0). The first reading is what the record holds.">cross-check: disputed</span> | [Maenthaisong_2013](drugs/drug_floctafenine/pd_Maenthaisong_2013_AA_induced_platelet_aggregation.md) | Maenthaisong R et al., Clinical pharmacology of cyclooxygenase…, International journal of im… (2013) | [10.1177/039463201302600213](https://doi.org/10.1177/039463201302600213) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.0). The first reading is what the record holds.">cross-check: disputed</span> | [Maenthaisong_2013](drugs/drug_floctafenine/pd_Maenthaisong_2013_platelet_COX_1_activity.md) | Maenthaisong R et al., Clinical pharmacology of cyclooxygenase…, International journal of im… (2013) | [10.1177/039463201302600213](https://doi.org/10.1177/039463201302600213) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.0). The first reading is what the record holds.">cross-check: disputed</span> | [Maenthaisong_2013](drugs/drug_floctafenine/pd_Maenthaisong_2013_platelet_thromboxane_A2_generation.md) | Maenthaisong R et al., Clinical pharmacology of cyclooxygenase…, International journal of im… (2013) | [10.1177/039463201302600213](https://doi.org/10.1177/039463201302600213) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.0). The first reading is what the record holds.">cross-check: disputed</span> | [Maenthaisong_2013](drugs/drug_floctafenine/pd_Maenthaisong_2013_whole_blood_COX_1_activity.md) | Maenthaisong R et al., Clinical pharmacology of cyclooxygenase…, International journal of im… (2013) | [10.1177/039463201302600213](https://doi.org/10.1177/039463201302600213) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.0). The first reading is what the record holds.">cross-check: disputed</span> | [Maenthaisong_2013](drugs/drug_floctafenine/pd_Maenthaisong_2013_whole_blood_COX_2_activity.md) | Maenthaisong R et al., Clinical pharmacology of cyclooxygenase…, International journal of im… (2013) | [10.1177/039463201302600213](https://doi.org/10.1177/039463201302600213) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
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
| PGx | Duvignaud_2020 | not_relevant | 0 | 0 | The paper is a clinical trial protocol for treating SARS-CoV-2 and does not report pharmacogenomic effects on the PK/PD of floctafenine. |
| popPK | Ennachachibi_1988 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of glafenine, using floctafenine only as an internal standard for the HPLC assay. |
| popPK | James_1978 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of hyperalgesia and does not report any pharmacokinetic parameters for floctafenine. |
| PD | James_1978 | not_relevant | 3 | 2 | The paper describes qualitative dose-response relationships for potentiating agents (PGE1, PGE2, AA) and the blocking effect of floctafenine, but does not provide numeric PD parameters (e.g., IC50, Emax) or a quantitative concentration-effect curve for floctafenine itself. |
| popPK | Maenthaisong_2013 | irrelevant | 2 | 0 | The study focuses on COX inhibition and antiplatelet effects, mentioning only a general half-life value without reporting quantitative PK parameters like clearance or volume. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
