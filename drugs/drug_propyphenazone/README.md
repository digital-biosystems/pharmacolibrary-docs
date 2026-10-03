<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;propyphenazone&quot;}]"></div>

# propyphenazone

- **generic name:** propyphenazone
- **ATC codes:** `N02BB04`
- **DrugBank:** [DB13524](https://go.drugbank.com/drugs/DB13524) · **PubChem:** not captured
- **molar mass:** 230.311 g/mol (C14H18N2O) — DrugBank
- **groups:** investigational

## About

**Description.** Propyphenazone is a non-steroidal anti-inflammatory agent with analgesic effects.[A275063, A275068]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-01 21:07 | 0:59 | 0/0/0 | 0/0/0 | 0/0/0 | 15,307/627 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 3/2 | 5/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=propyphenazone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: PTGS1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 12 returned
- **screened:** 2  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bornschein_1985 | irrelevant | 0 | 0 | The study is an in-vitro bioavailability assessment of suppositories and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for propyphenazone. |
| popPK | Brent_2011 | irrelevant | 0 | 0 | The paper is a review of caffeine's reproductive risks and does not contain any data for propyphenazone. |
| PD | Brent_2011 | not_relevant | 0 | 0 | The paper is a review of caffeine reproductive toxicity and does not contain any pharmacodynamic or exposure-response data for propyphenazone. |
| popPK | Brune_1986 | irrelevant | 0 | 0 | The paper is a general review of non-opioid analgesics and does not report specific quantitative pharmacokinetic parameters for propyphenazone. |
| popPK | Gafiţanu_1991 | irrelevant | 2 | 0 | The study focuses on formulation and bioavailability comparison without reporting quantitative pharmacokinetic parameters (CL, V, ka) for propyphenazone. |
| popPK | Hackenberger_1986 | irrelevant | 2 | 0 | The study focuses on bioavailability and bioequivalence (AUC) rather than reporting specific quantitative disposition parameters like clearance, volume, or half-life for propyphenazone. |
| popPK | Mazzarino_2010 | irrelevant | 0 | 0 | The study investigates the effect of propyphenazone on steroid detection methods (analytical interference) rather than reporting pharmacokinetic parameters for propyphenazone itself. |
| popPK | Mendoza_2015 | irrelevant | 0 | 0 | The paper is an environmental study measuring propyphenazone concentrations in hospital wastewater, not a pharmacokinetic study reporting disposition parameters. |
| PD | Mendoza_2015 | not_relevant | 0 | 0 | The paper is an environmental risk assessment of pharmaceuticals in wastewater and does not report any pharmacodynamic or exposure-response data for propyphenazone. |
| popPK | Radwan_2014 | irrelevant | 0 | 0 | The paper focuses on the synthesis and pharmacological activity (COX inhibition, analgesia) of propyphenazone-based prodrugs and analogues, without reporting quantitative pharmacokinetic parameters for propyphenazone itself. |
| PD | Radwan_2014 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values for a specific analogue (ANT-MP) and qualitative in vivo efficacy, but does not provide a concentration-effect or dose-response curve with numeric PD parameters (Emax, EC50, slope) for propyphenazone itself or a PK/PD model. |
| popPK | Rohdewald_1981 | irrelevant | 0 | 0 | The paper describes a thin-layer chromatography method for analyzing drug concentrations in saliva and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for propyphenazone. |
| popPK | Shaheen_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of bisoprolol, using propyphenazone only as a derivatization reagent, and does not report PK parameters for propyphenazone itself. |
| popPK | Volz_1980 | relevant | 4 | 5 | The paper is a review that reports limited quantitative PK parameters (Vd, t1/2, Cmax) for propyphenazone in humans and animals, but lacks a compartmental model or clearance values. |
| popPK | Wiedow_1996 | irrelevant | 0 | 0 | The paper is a clinical diagnostic study on analgesic intolerance and does not report any pharmacokinetic parameters for propyphenazone. |
| PD | Wiedow_1996 | not_relevant | 3 | 0 | The paper mentions a qualitative dose-response relationship for propyphenazone in an oral challenge context but provides no numeric PD parameters (such as ED50 values or concentration-effect curves) in the text. |
| popPK | von_1980 | irrelevant | 0 | 0 | The paper is a clinical efficacy study evaluating analgesic effects in headache patients and does not report any pharmacokinetic parameters for propyphenazone. |
| popPK | von_1980_2 | irrelevant | 0 | 0 | The paper is a clinical efficacy study of analgesic drugs in headache patients and does not report any pharmacokinetic parameters for propyphenazone. |
| PD | von_1980_2 | not_relevant | 3 | 1 | The paper describes a clinical trial methodology and reports qualitative dose-response findings for aspirin, but it does not provide numeric PD parameters or concentration-effect data for propyphenazone. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
