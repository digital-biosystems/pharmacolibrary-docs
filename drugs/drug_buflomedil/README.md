<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C04A&quot;,&quot;href&quot;:&quot;atc/C04A.md&quot;},{&quot;label&quot;:&quot;buflomedil&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Buflomedil_Rey1984_reference&quot;,&quot;label&quot;:&quot;Rey_1984_reference&quot;,&quot;href&quot;:&quot;drugs/drug_buflomedil/Buflomedil_Rey1984_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# buflomedil

- **generic name:** buflomedil
- **ATC codes:** `C04AX20`
- **DrugBank:** [DB13510](https://go.drugbank.com/drugs/DB13510) · **PubChem:** not captured
- **molar mass:** 307.39 g/mol (C17H25NO4) — DrugBank
- **groups:** experimental

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| buflomedil | parent | 307.39 | C17H25NO4 | DrugBank | — | Rey_1984 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-28 12:21 | 11:25 | 0/0/1 | 0/0/0 | 0/0/0 | 37,935/5,751 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Rey_1984_reference](drugs/drug_buflomedil/Buflomedil_Rey1984_reference.md) | — | 1-compartment (no model) | 2 | Rey E et al., Pharmacokinetics of buflomedil after in…, International journal of cl… (1984) | — |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 39 matched, 36 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_9 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gundert-Remy_1981.pdf` | Gundert-Remy U et al., The clinical pharmacokinetics of buflom…, European journal of clinica… (1981) | popPK | 10 | [10.1007/BF00542100](https://doi.org/10.1007/BF00542100) | [7286057](https://pubmed.ncbi.nlm.nih.gov/7286057) | The evidence explicitly reports quantitative pharmacokinetic parameters for buflomedil, including half-life, volume of distribution, and bioavailability. |
| `Rey_1984.pdf` | Rey E et al., Pharmacokinetics of buflomedil after in…, International journal of cl… (1984) | popPK | 10 | not captured | [6526539](https://pubmed.ncbi.nlm.nih.gov/6526539) | The study reports quantitative pharmacokinetic parameters (half-life and total clearance) for buflomedil in patients with chronic renal failure. |
| `Bourguignon_2012.pdf` | Bourguignon L et al., The value of population pharmacokinetic…, Fundamental & clinical phar… (2012) | popPK | 9 | [10.1111/j.1472-8206.2011.01000.x](https://doi.org/10.1111/j.1472-8206.2011.01000.x) | [22004557](https://pubmed.ncbi.nlm.nih.gov/22004557) | The paper describes a population PK study for buflomedil with a three-compartment model, but the specific numeric parameter values (CL, V, Q, etc.) are not present in the provided abstract text. |
| `Rey_1980.pdf` | Rey E et al., Pharmacokinetics of buflomedil after in…, International journal of cl… (1980) | popPK | 9 | not captured | [7203720](https://pubmed.ncbi.nlm.nih.gov/7203720) | The paper reports quantitative pharmacokinetic parameters (clearance and half-life) for buflomedil in humans, with specific numeric values provided in the text. |
| `Zecca_1989.pdf` | Zecca L et al., Pharmacokinetics of buflomedil after va…, Arzneimittel-Forschung (1989) | popPK | 9 | not captured | [2751740](https://pubmed.ncbi.nlm.nih.gov/2751740) | The paper is a relevant human PK study of buflomedil, but the provided evidence contains only qualitative descriptions and no numeric parameter values. |
| `Rey_1986.pdf` | Rey E et al., Buflomedil kinetics in patients with li…, International journal of cl… (1986) | popPK | 8 | not captured | [3759277](https://pubmed.ncbi.nlm.nih.gov/3759277) | The paper is a pharmacokinetic study of buflomedil in humans, but the specific numeric parameter values are not present in the provided evidence, only qualitative descriptions of changes. |
| `Rey_1996.pdf` | Rey E et al., Dialysis clearance of buflomedil in hem…, Arzneimittel-Forschung (1996) | popPK | 8 | not captured | [8737633](https://pubmed.ncbi.nlm.nih.gov/8737633) | The study reports quantitative dialysis clearance (25.4 ml/min) and plasma concentration data for buflomedil in hemodialyzed patients. |
| `de_1992.pdf` | de Bernardi di Valserra M et al., Pharmacokinetics of a sustained release…, Arzneimittel-Forschung (1992) | popPK | 8 | not captured | [1530676](https://pubmed.ncbi.nlm.nih.gov/1530676) | The study reports quantitative PK parameters (Cmax, Tmax, steady-state levels) for buflomedil, but lacks explicit clearance, volume, or half-life values. |
| `Tyagi_2019.pdf` | Tyagi V et al., Topical iontophoresis of buflomedil hyd…, International journal of ph… (2019) | pd | 4 | [10.1016/j.ijpharm.2019.118610](https://doi.org/10.1016/j.ijpharm.2019.118610) | [31415875](https://www.ncbi.nlm.nih.gov/pubmed/31415875) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-28T12:19:49.204284+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bourguignon_2012 | relevant | 9 | 2 | The paper describes a population PK study for buflomedil with a three-compartment model, but the specific numeric parameter values (CL, V, Q, etc.) are not present in the provided abstract text. |
| PD | Bourguignon_2012 | not_relevant | 0 | 0 | The paper focuses exclusively on population pharmacokinetics (PK) and Monte Carlo simulation for safety/toxicity risk assessment, without reporting any pharmacodynamic (PD) model, concentration-effect relationship, or numeric PD parameters. |
| PD | Briguglio_2005 | not_relevant | 1 | 0 | The study reports qualitative neuroprotective effects and biomarker changes at a single dose (10 mg/kg) without providing concentration-effect data, dose-response curves, or numeric PD parameters. |
| PD | Bucolo_2012 | not_relevant | 0 | 0 | The paper is a safety review of adverse drug reactions and overdose cases, containing no pharmacodynamic modeling, concentration-effect analysis, or numeric PD parameters. |
| PD | Chiffoleau_2000 | not_relevant | 0 | 0 | The text is a case report of an adverse event due to accidental double dosing and does not contain any pharmacodynamic modeling, concentration-effect analysis, or numeric PD parameters. |
| PD | Clissold_1987 | not_relevant | 2 | 0 | The text is a qualitative review summarizing therapeutic efficacy and general pharmacodynamic properties without providing specific numeric PD parameters (e.g., Emax, EC50) or concentration-effect data. |
| popPK | Ding_2004 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of eperisone, using buflomedil only as an internal standard, and does not report PK parameters for buflomedil. |
| popPK | Ding_2007 | irrelevant | 0 | 0 | The study focuses on trimetazidine pharmacokinetics, using buflomedil only as an internal standard, and reports no PK parameters for buflomedil. |
| popPK | Dubourg_1981 | irrelevant | 2 | 1 | The paper is a review that only provides a qualitative half-life range (2-3 hours) without reporting quantitative compartmental parameters like clearance, volume, or intercompartmental clearance. |
| PD | Fort_1982 | not_relevant | 1 | 0 | The text describes a qualitative toxicology study with dose levels and observed adverse effects, but it does not report any numeric pharmacodynamic parameters (e.g., EC50, Emax) or quantitative exposure-response relationships. |
| PD | Fort_1993 | not_relevant | 0 | 0 | The paper is a chronic toxicity study reporting qualitative safety observations and a no-observed-adverse-effect level (NOAEL), but it does not provide any pharmacodynamic modeling, concentration-effect curves, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Gundert-Remy_1983 | irrelevant | 0 | 0 | no_text gate: only 41 chars of text extracted (&lt; 400) |
| PD | Labs_2000 | not_relevant | 3 | 2 | The study reports qualitative changes in hemodynamic parameters after a single fixed dose (200 mg) infusion but does not provide plasma concentration data or fit a dose-response model to derive numeric PD parameters like Emax or EC50. |
| PD | Martínez-Sierra_1992 | not_relevant | 1 | 0 | The text is a qualitative case report of intoxication that mentions a specific dose (50 mg/kg) causing seizures but provides no concentration-effect data, curve, or numeric PD parameters. |
| PD | Maurel_1995 | not_relevant | 2 | 1 | The study reports a clinical dose-response (600 mg vs placebo) with temperature changes, but lacks concentration data or formal PK/PD modeling parameters (Emax, EC50). |
| popPK | Mo_2025 | irrelevant | 1 | 0 | The paper describes an analytical method (ECL sensor) for detecting buflomedil and does not report any quantitative pharmacokinetic parameters (CL, V, t1/2, etc.). |
| PD | Nowak_2002 | not_relevant | 2 | 1 | The study reports qualitative findings (non-significant effects) on RBC rheology and enzyme activity at two concentrations, but provides no numeric PD parameters, dose-response curves, or quantitative effect values to derive a relationship. |
| popPK | Rey_1986 | relevant | 8 | 0 | The paper is a pharmacokinetic study of buflomedil in humans, but the specific numeric parameter values are not present in the provided evidence, only qualitative descriptions of changes. |
| PD | Rey_1996 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic parameters (dialysis clearance, Cmin, Cmax) and does not measure or report any pharmacodynamic effects or exposure-response relationships. |
| popPK | Salerno_1985 | irrelevant | 0 | 0 | The paper is a clinical efficacy study assessing therapeutic outcomes and blood flow, not a pharmacokinetic study reporting quantitative disposition parameters for buflomedil. |
| PD | Scheffler_1990 | not_relevant | 1 | 0 | The paper describes qualitative observations of blood flow changes and redistribution phenomena following intra-arterial infusion but does not provide numeric concentration-effect data, dose-response curves, or PD parameters for buflomedil. |
| PD | Szombathelyi_1991 | not_relevant | 3 | 2 | The paper reports qualitative dose-response comparisons and specific dose effects in animal models but does not provide numeric PD parameters (e.g., EC50, Emax) or a fitted concentration-effect curve for buflomedil. |
| popPK | Tyagi_2019 | irrelevant | 2 | 0 | The study reports in-vitro ex vivo delivery and biodistribution data (µg/cm²) rather than systemic pharmacokinetic parameters (CL, V, t1/2) for buflomedil. |
| PD | Tyagi_2019 | not_relevant | 0 | 0 | The paper focuses on PK (bioavailability) and safety of topical iontophoresis, with no reported concentration-effect or dose-response analysis for buflomedil. |
| popPK | Wei_2004 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of eperisone hydrochloride, using buflomedil only as an internal standard for the assay. |
| PD | Zaccara_2020 | not_relevant | 1 | 0 | The paper is a qualitative review of cardiovascular drugs' effects on seizures, mentioning buflomedil only as proconvulsant without providing any numeric PD parameters or exposure-response data. |
| popPK | Zecca_1989 | relevant | 9 | 0 | The paper is a relevant human PK study of buflomedil, but the provided evidence contains only qualitative descriptions and no numeric parameter values. |
| PD | Zecca_1989 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic parameters (absorption, plasma levels, excretion) and contains no pharmacodynamic or exposure-response data. |
| popPK | de_1992 | relevant | 8 | 4 | The study reports quantitative PK parameters (Cmax, Tmax, steady-state levels) for buflomedil, but lacks explicit clearance, volume, or half-life values. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-28 12:20 UTC</sub>
