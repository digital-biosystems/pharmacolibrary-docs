<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C04A&quot;,&quot;href&quot;:&quot;atc/C04A.md&quot;},{&quot;label&quot;:&quot;suloctidil&quot;}]"></div>

# suloctidil

- **generic name:** suloctidil
- **ATC codes:** `C04AX19`
- **DrugBank:** [DB13340](https://go.drugbank.com/drugs/DB13340) · **PubChem:** not captured
- **molar mass:** 337.57 g/mol (C20H35NOS) — DrugBank
- **groups:** experimental

## About

Suloctidil is a vasodilator that was classified as a peripheral vasodilator for cardiovascular use. It is no longer in routine use and is considered an experimental compound.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7636084](https://www.wikidata.org/wiki/Q7636084) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:26 | 0:35 | 0/0/0 | 0/0/0 | 0/0/0 | 25,459/388 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 1/1 | 0/0 | 0 |

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
| popPK | Couturier_1980 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on ionophoretic activity where suloctidil is used only as an antagonist, with no pharmacokinetic parameters reported. |
| PD | Couturier_1980 | not_relevant | 1 | 0 | The paper describes a qualitative antagonistic effect of suloctidil on sulfonylurea activity in an in vitro ionophoretic assay, but provides no numeric PD parameters, dose-response curves, or quantitative exposure-response data for suloctidil. |
| popPK | Jones_1982 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for intermittent claudication and does not report any pharmacokinetic parameters (CL, V, t1/2, etc.) for suloctidil. |
| popPK | McCaffrey_1987 | irrelevant | 0 | 0 | The paper is a clinical efficacy study for dementia and does not report any pharmacokinetic parameters for suloctidil. |
| PD | McCaffrey_1987 | not_relevant | 2 | 0 | The paper reports a clinical dose-response trial (600mg vs 450mg vs placebo) but provides no pharmacokinetic data, no concentration-effect analysis, and no numeric PD parameters (Emax, EC50, etc.) in the provided text. |
| popPK | Roba_1983 | irrelevant | 0 | 0 | no_text gate: only 75 chars of text extracted (&lt; 400) |
| popPK | Rozza_1986 | irrelevant | 0 | 0 | The study focuses on the hemodynamic effects of suloctidil on cerebral blood flow in rabbits and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Sirci_2017 | irrelevant | 0 | 0 | The paper is a computational analysis of drug networks and transcriptional responses, not a pharmacokinetic study of suloctidil. |
| PD | Sirci_2017 | not_relevant | 0 | 0 | The paper analyzes transcriptional drug networks and toxicity signatures using the Connectivity Map dataset; it does not report pharmacokinetic or pharmacodynamic exposure-response relationships or numeric PD parameters for suloctidil. |
| popPK | Takayanagi_1981 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of suloctidil's effect on calcium movement in rabbit taenia coli, reporting no pharmacokinetic parameters. |
| PD | Takayanagi_1981 | not_relevant | 0 | 0 | The provided text is metadata for the GROBID software and does not contain any pharmacological data, study results, or PD parameters for suloctidil. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
