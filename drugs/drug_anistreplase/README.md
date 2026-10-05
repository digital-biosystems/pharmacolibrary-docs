<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;anistreplase&quot;}]"></div>

# anistreplase

- **generic name:** anistreplase
- **ATC codes:** `B01AD03`
- **DrugBank:** [DB00029](https://go.drugbank.com/drugs/DB00029) · **PubChem:** not captured
- **groups:** approved, withdrawn

## About

Anistreplase is a fibrinolytic (clot-dissolving) drug that was used to treat myocardial infarction and pulmonary embolism. It has been withdrawn and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4765471](https://www.wikidata.org/wiki/Q4765471) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 13:38 | 0:48 | 0/0/0 | 0/0/0 | 0/0/0 | 23,711/473 | ollama / qwen3.8:27b-mtp-q8_0 | 11 | 3/1 | 1/10 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=anistreplase) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: FGA (unknown), PLG (activator), SERPINE1 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alpert_1991 | irrelevant | 1 | 0 | This is a clinical review comparing pharmacological profiles of thrombolytic agents that mentions anistreplase's long half-life qualitatively but does not report quantitative population pharmacokinetic parameters (CL, V, Q, ka) or compartmental model values. |
| popPK | Bassand_1989_2 | irrelevant | 1 | 0 | The text is a general review of thrombolytic agents that mentions anistreplase's half-life (90 minutes) but lacks quantitative disposition parameters like clearance, volume, or compartmental model details. |
| popPK | Been_1986 | irrelevant | 2 | 1 | The study reports pharmacokinetic parameters (clearance half-life) for APSAC (anisoylated plasminogen-streptokinase activator complex), not anistreplase. |
| popPK | Claessens_2000 | irrelevant | 0 | 0 | The paper is a clinical outcome study on mortality in myocardial infarction and does not report any quantitative pharmacokinetic parameters for anistreplase. |
| popPK | Crabbe_1990 | irrelevant | 1 | 0 | The text is a clinical review discussing efficacy and safety, mentioning only a qualitative half-life extension without reporting quantitative pharmacokinetic parameters like clearance or volume. |
| popPK | Hillis_1987 | irrelevant | 2 | 1 | The paper is a clinical efficacy study of anistreplase (APSAC) in myocardial infarction, not a pharmacokinetic study, and only mentions half-life values without reporting quantitative disposition parameters like clearance or volume. |
| popPK | Leizorovicz_1987 | irrelevant | 0 | 0 | The study is a clinical dose-response trial assessing reperfusion rates and does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for anistreplase. |
| popPK | Marder_1989 | irrelevant | 1 | 0 | The paper is a clinical review comparing thrombolytic agents and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for anistreplase, only mentioning its half-life qualitatively. |
| popPK | Marinac_1990 | irrelevant | 2 | 1 | The paper is a review that cites a half-life value (88 minutes) but lacks the quantitative compartmental parameters (CL, V, Q) required for population PK modeling. |
| popPK | Martin_1990 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of BM 06.022, with anistreplase serving only as a comparator agent for reperfusion speed. |
| popPK | Munger_1990 | irrelevant | 2 | 1 | The paper is a review that mentions a plasma half-life range (88-112 minutes) but lacks the quantitative compartmental parameters (CL, V, Q, ka) required for population PK modeling. |
| popPK | Nguyen_1987 | irrelevant | 0 | 0 | The paper is a review of thrombolytic agents (t-PA, scu-PA, APSAC) and does not mention anistreplase or report any pharmacokinetic parameters. |
| popPK | Pacouret_1990 | irrelevant | 2 | 0 | The text is a clinical review/summary reporting efficacy (recanalization rates) and a single half-life value, but lacks quantitative compartmental PK parameters (CL, V, Q) or a population PK model. |
| popPK | Sakharov_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic comparison of fibrinolysis efficiency and does not report pharmacokinetic parameters for anistreplase. |
| PD | Sakharov_1999 | not_relevant | 4 | 2 | The paper describes qualitative dose-response characteristics (bell-shaped curves, relative efficacy) for anistreplase but does not provide numeric PD parameters (Emax, EC50) or extractable concentration-effect data in the text. |
| popPK | Samama_1992 | irrelevant | 0 | 0 | The paper is a general review of thrombolytic agents that does not mention anistreplase or report any quantitative pharmacokinetic parameters. |
| popPK | Schwerdt_1990 | irrelevant | 0 | 0 | The study focuses on modeling the time course of creatine kinase (CK) and CK-MB levels as reperfusion indicators, not on the pharmacokinetic parameters (CL, V, etc.) of anistreplase itself. |
| popPK | Seifried_1993 | irrelevant | 0 | 0 | The paper is a general review of the fibrinolytic system and does not mention anistreplase or provide any pharmacokinetic parameters. |
| popPK | Sherry_1990 | irrelevant | 2 | 1 | The paper is a pharmacological review that reports a half-life (90-105 min) but lacks quantitative compartmental parameters (CL, V, Q) or a population PK model. |
| popPK | Sorensen_1987 | irrelevant | 0 | 0 | The paper is a clinical study evaluating the reliability of angiographic grading for reperfusion, not a pharmacokinetic study, and contains no PK parameters for anistreplase. |
| popPK | Tanswell_1992 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of alteplase, with anistreplase mentioned only as a comparator in the trial design, so no PK parameters for anistreplase are reported. |
| popPK | Verstraete_1989 | irrelevant | 1 | 0 | The paper is a clinical review of thrombolytic efficacy that mentions a clearance half-life for anistreplase but does not report quantitative PK parameters (CL, V, Q, ka) or a compartmental model. |
| popPK | Zeymer_1994 | irrelevant | 0 | 0 | The paper is a review of thrombolytic regimens and does not report quantitative pharmacokinetic parameters for anistreplase. |
| popPK | de_1995 | irrelevant | 1 | 0 | This is a review article discussing drug interactions and general pharmacokinetic principles for thrombolytics, without reporting original quantitative PK parameters for anistreplase. |
| PD | de_1995 | not_relevant | 1 | 0 | The text is a qualitative review of drug interactions and pharmacokinetic mechanisms (hepatic blood flow) without reporting any numeric PD parameters or concentration-effect data for anistreplase. |
| popPK | unknown_1994 | irrelevant | 0 | 0 | no_text gate: only 120 chars of text extracted (&lt; 400) |
| PD | unknown_1994 | not_relevant | 0 | 0 | The provided text is only a title and file description for a conference abstract collection, containing no specific data, models, or numeric parameters for anistreplase. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
