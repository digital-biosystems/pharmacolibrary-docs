<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;evogliptin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Evogliptin_Kim2025_reference&quot;,&quot;label&quot;:&quot;Kim_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_evogliptin/Evogliptin_Kim2025_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Kim_2025_DPP_4&quot;,&quot;label&quot;:&quot;Kim_2025 \u00b7 DPP-4&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_evogliptin/pd_Kim_2025_DPP_4.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# evogliptin

- **generic name:** evogliptin
- **ATC codes:** `A10BD22`, `A10BH07`
- **DrugBank:** [DB12625](https://go.drugbank.com/drugs/DB12625) · **PubChem:** [CID 25022354](https://pubchem.ncbi.nlm.nih.gov/compound/25022354)
- **molar mass:** 401.43 g/mol (C19H26F3N3O3) — DrugBank
- **groups:** investigational

## About

Evogliptin is a DPP-4 inhibitor studied for lowering blood glucose in diabetes. It is considered investigational and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q25103700](https://www.wikidata.org/wiki/Q25103700) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| evogliptin | parent | 401.43 | C19H26F3N3O3 | DrugBank | [25022354](https://pubchem.ncbi.nlm.nih.gov/compound/25022354) | Kim_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 23:53 | 4:44 | 1/0/0 | 0/0/1 | 0/0/0 | 83,643/11,914 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/2 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.083). The first reading is what the record holds.">cross-check: disputed</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub> | [Kim_2025_reference](drugs/drug_evogliptin/Evogliptin_Kim2025_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 (+4 cov.) | Kim B et al., Population pharmacokinetic and pharmaco…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13263](https://doi.org/10.1002/psp4.13263) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Kim_2025_DPP_4](drugs/drug_evogliptin/pd_Kim_2025_DPP_4.md) | DPP-4 activity ← evogliptin · direct sigmoid Emax (Hill) effect | ▶ model + simulator | Kim B et al., Population pharmacokinetic and pharmaco…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13263](https://doi.org/10.1002/psp4.13263) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=evogliptin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: DPP4 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 37 matched, 30 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Gomes_2026 | irrelevant | 1 | 0 | The paper is a scoping review that discusses evogliptin only as a comparator in the context of drug-drug interactions with rifampicin, without reporting original quantitative PK parameter values. |
| PD | Gomes_2026 | not_relevant | 1 | 0 | The paper is a scoping review that qualitatively summarizes PK changes (exposure reduction) but does not report or provide numeric PD parameters (e.g., Emax, EC50) or concentration-effect curves for evogliptin. |
| popPK | Gu_2014 | relevant | 8 | 2 | The study reports PK parameters for evogliptin, but only half-life and accumulation ratio are provided in the text, lacking specific values for clearance, volume, or ka. |
| popPK | Hwang_2020 | irrelevant | 2 | 0 | The study reports only relative geometric mean ratios (GMRs) for PK parameters to assess interaction, without providing absolute quantitative disposition parameters (CL, V, ka, t1/2) for evogliptin. |
| PD | Hwang_2020 | not_relevant | 2 | 1 | The study reports qualitative comparisons of glucose-lowering effects and PK parameters (Cmax, AUC) but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect model. |
| PGx | Jeong_2015 | not_relevant | 0 | 0 | The paper describes in vitro metabolic pathways and enzyme characterization (CYP3A4/5, UGT2B4/7) but does not report specific gene variants or genotypes affecting PK/PD parameters. |
| popPK | Khotimchenko_2022 | irrelevant | 0 | 0 | The paper is an in silico modeling study that mentions evogliptin as a candidate drug but does not report any quantitative pharmacokinetic parameters or disposition data. |
| PD | Khotimchenko_2022 | not_relevant | 1 | 0 | The paper describes an in silico modeling approach and mentions evogliptin as a candidate, but the provided text does not contain any numeric PD parameters, concentration-effect curves, or specific exposure-response data. |
| popPK | Kim_2018 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic interactions and glucose control in diabetic mice, reporting no quantitative pharmacokinetic parameters for evogliptin. |
| PD | Kim_2018 | not_relevant | 2 | 1 | The paper reports qualitative pharmacodynamic interactions and statistical comparisons of glucose levels in mice but does not provide numeric PD parameters (e.g., Emax, EC50) or an exposure-response curve for evogliptin. |
| popPK | Kim_2023 | relevant | 8 | 2 | The study reports PK parameters for evogliptin, but the evidence only provides geometric mean ratios and fold-changes rather than absolute quantitative values like clearance or volume. |
| popPK | Kim_2023_2 | irrelevant | 2 | 0 | The study is a drug-drug interaction trial that reports only relative changes (geometric mean ratios) in PK parameters rather than absolute quantitative disposition values (CL, V, etc.) for evogliptin. |
| PD | Kim_2023_2 | not_relevant | 2 | 1 | The study reports qualitative PD outcomes (glucose-lowering effect) and PK parameters but does not provide numeric PD parameters (e.g., Emax, EC50) or an exposure-response model. |
| PGx | Kim_2025 | not_relevant | 0 | 0 | The study investigates the effect of renal impairment and biochemical covariates (amylase, triglycerides) on evogliptin PK/PD, but does not report any pharmacogenomic effects (gene variants/genotypes). |
| popPK | Oh_2017 | relevant | 8 | 2 | The study reports PK changes (AUC ratios) for evogliptin in renal impairment, but specific quantitative disposition parameters (CL, V, t1/2) are not explicitly listed in the provided text. |
| PD | Oh_2017 | not_relevant | 3 | 2 | The paper reports qualitative changes in DPP-4 inhibition and PK parameters (AUC) across renal function groups but does not provide numeric PD parameters (e.g., Emax, IC50) or a quantitative concentration-effect model. |
| popPK | Ojo_2025 | irrelevant | 0 | 0 | The paper is an in-vitro and computational study of herbal formulations where evogliptin is used only as a reference inhibitor for DPP-IV activity, with no pharmacokinetic parameters reported. |
| PD | Ojo_2025 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition IC50 values for herbal formulations and evogliptin, but does not provide a pharmacokinetic or pharmacodynamic exposure-response relationship or dose-effect curve for evogliptin. |
| popPK | Rhee_2016_2 | irrelevant | 2 | 0 | The study reports only relative geometric mean ratios for PK parameters (Cmax, AUC) in a drug interaction study, without providing absolute quantitative disposition parameters (CL, V, ka, t1/2) for evogliptin. |
| PD | Rhee_2016_2 | not_relevant | 3 | 2 | The study reports qualitative pharmacodynamic changes (DPP-4 inhibition, GLP-1, glucose) and PK interaction ratios, but does not provide numeric PD parameters (e.g., Emax, IC50) or a concentration-effect model. |
| popPK | Yoo_2020 | irrelevant | 2 | 0 | The study reports only relative geometric mean ratios (GMRs) for PK parameters to assess drug-drug interaction, not absolute quantitative disposition parameters (CL, V, t1/2) for evogliptin. |
| PD | Yoo_2020 | not_relevant | 2 | 1 | The study reports qualitative additive glucose-lowering effects and PK interaction ratios, but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect model. |
| popPK | Zou_2022 | irrelevant | 1 | 0 | The paper is a literature review summarizing evogliptin studies and does not report original quantitative pharmacokinetic parameter values in the provided evidence. |
| PD | Zou_2022 | not_relevant | 2 | 0 | The text is a literature review summary that qualitatively describes the mechanism of action but does not provide specific numeric PD parameters or exposure-response data for evogliptin. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 23:49 UTC</sub>
