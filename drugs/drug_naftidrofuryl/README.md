<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C04A&quot;,&quot;href&quot;:&quot;atc/C04A.md&quot;},{&quot;label&quot;:&quot;naftidrofuryl&quot;}]"></div>

# naftidrofuryl

- **generic name:** naftidrofuryl
- **ATC codes:** `C04AX21`
- **DrugBank:** [DB13588](https://go.drugbank.com/drugs/DB13588) · **PubChem:** not captured
- **molar mass:** 383.5237 g/mol (C24H33NO3) — DrugBank
- **groups:** investigational

## About

Naftidrofuryl is a vasodilator and serotonin antagonist that has been used to treat intermittent claudication. It is classified as an investigational drug and is not clearly authorised anywhere today.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q425867](https://www.wikidata.org/wiki/Q425867) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:27 | 1:25 | 0/0/0 | 0/0/0 | 0/0/0 | 22,696/1,212 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 41 matched, 40 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Abdel_2025.pdf` | Abdel Hakiem AF et al., Ratiomeric Luminescent Monitoring of Ca…, Luminescence : the journal… (2025) | popPK | 8 | [10.1002/bio.70243](https://doi.org/10.1002/bio.70243) | [40817571](https://pubmed.ncbi.nlm.nih.gov/40817571) | The study reports a pharmacokinetic bioavailability study of naftidrofuryl in rabbits, but the specific numeric PK parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Hulot_1998.pdf` | Hulot T et al., Influence of age on the pharmacokinetic…, Arzneimittel-Forschung (1998) | popPK | 8 | not captured | [9793615](https://pubmed.ncbi.nlm.nih.gov/9793615) | The study reports quantitative non-compartmental pharmacokinetic parameters (Cmax, AUC, t1/2) for naftidrofuryl in humans, with all values explicitly listed in the text. |
| `Lartigue-Mattei_1978.pdf` | Lartigue-Mattei C et al., [Pharmacokinetics and bioavailability o…, International journal of cl… (1978) | popPK | 8 | not captured | [730420](https://pubmed.ncbi.nlm.nih.gov/730420) | The study reports pharmacokinetic parameters (half-lives) for naftidrofuryl in humans, but specific values for clearance, volume, or bioavailability percentages are not explicitly provided in the text. |
| `Legallicier_2005.pdf` | Legallicier B et al., Pharmacokinetics of naftidrofuryl in pa…, Arzneimittel-Forschung (2005) | popPK | 8 | [10.1055/s-0031-1296874](https://doi.org/10.1055/s-0031-1296874) | [16080275](https://pubmed.ncbi.nlm.nih.gov/16080275) | The study reports quantitative non-compartmental pharmacokinetic parameters (Cmax, AUC, t1/2) for naftidrofuryl in humans, though it lacks explicit clearance (CL) or volume (V) values. |
| `Platt_1984.pdf` | Platt D et al., [Pharmacokinetics of naftidrofuryl in m…, Zeitschrift fur Gerontologie (1984) | popPK | 8 | not captured | [6523980](https://pubmed.ncbi.nlm.nih.gov/6523980) | The study reports pharmacokinetic parameters (half-life) for naftidrofuryl in humans, but specific numeric values are not present in the provided abstract text. |
| `Kirsten_1995.pdf` | Kirsten R et al., Platelet aggregation after naftidrofury…, International journal of cl… (1995) | pd | 4 | not captured | [7757315](https://www.ncbi.nlm.nih.gov/pubmed/7757315) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-06T20:27:03.411594+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdel_2025 | relevant | 8 | 0 | The study reports a pharmacokinetic bioavailability study of naftidrofuryl in rabbits, but the specific numeric PK parameter values (CL, V, etc.) are not present in the provided evidence. |
| popPK | Agarwal_2009 | irrelevant | 0 | 0 | This is a clinical review of hearing loss treatments where naftidrofuryl is a therapeutic agent, not a pharmacokinetic study reporting disposition parameters. |
| PD | Agarwal_2009 | not_relevant | 0 | 0 | The paper is a systematic review of clinical trials for hearing loss and does not report any pharmacokinetic or pharmacodynamic modeling, concentration-effect data, or numeric PD parameters for naftidrofuryl. |
| popPK | Belch_1996 | irrelevant | 0 | 0 | The paper is a clinical review of Raynaud's phenomenon treatment that mentions naftidrofuryl only as a therapeutic option, without reporting any pharmacokinetic parameters or quantitative disposition data. |
| PD | Belch_1996 | not_relevant | 1 | 0 | The text is a general review of Raynaud's phenomenon management that mentions naftidrofuryl as a simple vasodilator but provides no pharmacokinetic data, concentration-effect analysis, or numeric PD parameters. |
| popPK | Calvert_2002 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of receptor binding and muscle contraction, reporting no pharmacokinetic parameters. |
| popPK | Chamontin_1995 | irrelevant | 0 | 0 | The paper is a review of hemodynamic and clinical effects of peripheral vasodilators and does not report any pharmacokinetic parameters for naftidrofuryl. |
| popPK | Clissold_1987 | irrelevant | 0 | 0 | The paper is a review of buflomedil, and naftidrofuryl is mentioned only as a comparator drug without any pharmacokinetic data. |
| PD | Clissold_1987 | not_relevant | 1 | 0 | The text is a qualitative review of buflomedil that mentions naftidrofuryl only as a comparator in clinical trials, without providing any numeric PD parameters or exposure-response data for naftidrofuryl. |
| popPK | DHooge_2001 | irrelevant | 0 | 0 | The study is a clinical trial assessing quality of life outcomes and contains no pharmacokinetic parameters or disposition data for naftidrofuryl. |
| PD | DHooge_2001 | not_relevant | 0 | 0 | The paper reports a clinical trial comparing fixed-dose naftidrofuryl to placebo using a quality-of-life questionnaire, with no pharmacokinetic data, concentration-effect analysis, or numeric PD parameters. |
| popPK | Fawcett_1995 | irrelevant | 0 | 0 | The study is an in-vitro organ bath experiment measuring vasoconstriction, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Garrett_1984 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of nafronyl (a different drug), not naftidrofuryl. |
| popPK | Heidrich_1975 | irrelevant | 0 | 0 | The study investigates the effect of naftidrofuryl on renal function markers (creatinine, PAH/inulin clearance) rather than reporting pharmacokinetic parameters (CL, V, t1/2) for naftidrofuryl itself. |
| popPK | Ibrahim_2017 | irrelevant | 0 | 0 | The paper describes analytical methods for drug quantification, not pharmacokinetic studies, and contains no disposition parameters. |
| PD | Ibrahim_2017 | not_relevant | 0 | 0 | The paper describes analytical methods for drug quantification, not pharmacodynamic or exposure-response relationships. |
| popPK | Kirsten_1995 | irrelevant | 2 | 1 | The study reports only a single peak plasma concentration (Cmax) and in vitro IC50, lacking quantitative disposition parameters like clearance, volume, or half-life required for PK modeling. |
| popPK | Lartigue-Mattei_1978 | relevant | 8 | 2 | The study reports pharmacokinetic parameters (half-lives) for naftidrofuryl in humans, but specific values for clearance, volume, or bioavailability percentages are not explicitly provided in the text. |
| popPK | Lehert_1994 | irrelevant | 0 | 0 | The paper is a retrospective clinical efficacy analysis of naftidrofuryl in intermittent claudication and contains no pharmacokinetic parameters or disposition data. |
| PD | Lehert_1994 | not_relevant | 1 | 0 | The paper is a retrospective clinical analysis of fixed-dose (600 mg) vs. placebo outcomes (walking distance, events) and does not report any concentration-effect data, PK/PD modeling, or numeric PD parameters like Emax or EC50. |
| popPK | Majumdar_1982 | irrelevant | 0 | 0 | The study is a clinical trial assessing the therapeutic effect of naftidrofuryl on liver function (ICG clearance, GGT levels) and does not report pharmacokinetic parameters (CL, V, t1/2) for naftidrofuryl itself. |
| popPK | Miyake_1994 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of cerebral blood flow in rats and does not report any pharmacokinetic parameters (CL, V, t1/2, etc.) for naftidrofuryl. |
| popPK | Moesch_1995 | irrelevant | 0 | 0 | The study investigates crystalluria (urinary stone formation) associated with naftidrofuryl oxalate and does not report any pharmacokinetic parameters. |
| PD | Moesch_1995 | not_relevant | 1 | 0 | The paper reports a qualitative association between drug use and crystalluria frequency but provides no concentration-effect data, dose-response curve, or numeric PD parameters. |
| popPK | Nabeshima_1991 | irrelevant | 0 | 0 | The study is a pharmacological investigation of anti-amnesic effects and receptor binding in mice, containing no pharmacokinetic disposition parameters. |
| popPK | Nikolov_1984 | irrelevant | 0 | 0 | The study focuses on the anti-hypoxic effects of cinnarizine, with naftidrofuryl used only as a reference drug, and no pharmacokinetic parameters are reported. |
| PD | Nikolov_1984 | not_relevant | 1 | 0 | The paper focuses on cinnarizine and only mentions naftidrofuryl as a reference drug without providing specific numeric PD parameters or detailed dose-response data for it. |
| popPK | Nikolov_1989 | irrelevant | 0 | 0 | The study investigates the cerebroprotective effects of prostacyclin and its interaction with naftidrofuryl, but does not report any pharmacokinetic parameters for naftidrofuryl. |
| PD | Nikolov_1989 | not_relevant | 1 | 0 | The paper focuses on prostacyclin (PGI2) and only qualitatively mentions that naftidrofuryl shifts the PGI2 dose-response curve, without providing any numeric PD parameters or concentration-effect data for naftidrofuryl itself. |
| popPK | Platt_1984 | relevant | 8 | 2 | The study reports pharmacokinetic parameters (half-life) for naftidrofuryl in humans, but specific numeric values are not present in the provided abstract text. |
| popPK | Roath_1989 | irrelevant | 0 | 0 | The paper is a clinical review of Raynaud's phenomenon management that mentions naftidrofuryl only as a therapeutic option without reporting any pharmacokinetic parameters. |
| PD | Roath_1989 | not_relevant | 1 | 0 | The text is a general review of Raynaud's phenomenon management that mentions naftidrofuryl qualitatively but provides no pharmacokinetic data, dose-response curves, or numeric PD parameters. |
| popPK | Spengel_1999 | irrelevant | 0 | 0 | The paper is a clinical efficacy study focusing on quality of life outcomes and contains no pharmacokinetic parameters or disposition data for naftidrofuryl. |
| PD | Spengel_1999 | not_relevant | 0 | 0 | The paper reports a clinical trial outcome (quality of life scores) comparing a fixed dose to placebo, but it does not report any pharmacokinetic data, exposure-response analysis, or numeric PD parameters. |
| popPK | Steinmann_1990 | irrelevant | 0 | 0 | The study measures the pharmacokinetics of indocyanine green (ICG) as a probe, not naftidrofuryl, which is the drug being administered. |
| popPK | Vashisht_1992 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular contractility, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Ward_1987 | irrelevant | 0 | 0 | The paper is a review of pentoxifylline, and naftidrofuryl is only mentioned as a comparator drug without any pharmacokinetic data. |
| PD | Ward_1987 | not_relevant | 0 | 0 | The paper is a review of pentoxifylline and only mentions naftidrofuryl as a comparative drug without providing any pharmacodynamic data, exposure-response analysis, or numeric PD parameters for it. |
| popPK | Yesavage_1982 | irrelevant | 0 | 0 | The study reports metabolic effects (lactate/pyruvate ratio) in CSF, not pharmacokinetic disposition parameters for naftidrofuryl. |
| PD | Yesavage_1982 | not_relevant | 1 | 0 | The study reports a qualitative change in the CSF lactate/pyruvate ratio following a fixed dose regimen, but provides no concentration-effect data, dose-response curve, or numeric PD parameters. |
| popPK | Zaccara_2020 | irrelevant | 0 | 0 | The paper is a review of drug interactions and seizure effects, mentioning naftidrofuryl only as a proconvulsant agent without reporting any pharmacokinetic parameters. |
| PD | Zaccara_2020 | not_relevant | 1 | 0 | The paper is a qualitative review of cardiovascular drugs' effects on seizures, mentioning naftidrofuryl only as proconvulsant without providing any numeric PD parameters or exposure-response data. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
