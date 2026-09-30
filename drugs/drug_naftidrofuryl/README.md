<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C04A&quot;,&quot;href&quot;:&quot;atc/C04A.md&quot;},{&quot;label&quot;:&quot;naftidrofuryl&quot;}]"></div>

# naftidrofuryl

- **generic name:** naftidrofuryl
- **ATC codes:** `C04AX21`
- **DrugBank:** [DB13588](https://go.drugbank.com/drugs/DB13588) · **PubChem:** not captured
- **molar mass:** 383.5237 g/mol (C24H33NO3) — DrugBank
- **groups:** investigational

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-28 17:24 | 9:57 | 0/0/0 | 0/0/0 | 0/0/0 | 42,486/3,419 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 40 matched, 35 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hulot_1998.pdf` | Hulot T et al., Influence of age on the pharmacokinetic…, Arzneimittel-Forschung (1998) | popPK | 8 | not captured | [9793615](https://pubmed.ncbi.nlm.nih.gov/9793615) | The study reports quantitative non-compartmental pharmacokinetic parameters (Cmax, AUC, t1/2) for naftidrofuryl in humans, with all numeric values clearly present in the text. |
| `Lartigue-Mattei_1978.pdf` | Lartigue-Mattei C et al., [Pharmacokinetics and bioavailability o…, International journal of cl… (1978) | popPK | 8 | not captured | [730420](https://pubmed.ncbi.nlm.nih.gov/730420) | The paper reports pharmacokinetic parameters for naftidrofuryl, but the evidence only provides half-life values (11.0 and 26.5 hours) without explicit clearance, volume, or compartmental model parameters. |
| `Legallicier_2005.pdf` | Legallicier B et al., Pharmacokinetics of naftidrofuryl in pa…, Arzneimittel-Forschung (2005) | popPK | 8 | [10.1055/s-0031-1296874](https://doi.org/10.1055/s-0031-1296874) | [16080275](https://pubmed.ncbi.nlm.nih.gov/16080275) | The study reports quantitative non-compartmental pharmacokinetic parameters (Cmax, AUC, t1/2) for naftidrofuryl in humans, with values clearly present in the text. |
| `Platt_1984.pdf` | Platt D et al., [Pharmacokinetics of naftidrofuryl in m…, Zeitschrift fur Gerontologie (1984) | popPK | 8 | not captured | [6523980](https://pubmed.ncbi.nlm.nih.gov/6523980) | The paper is a PK study of naftidrofuryl reporting qualitative changes in half-life, but specific numeric parameter values are not present in the provided evidence. |
| `Kirsten_1995.pdf` | Kirsten R et al., Platelet aggregation after naftidrofury…, International journal of cl… (1995) | pd | 4 | not captured | [7757315](https://www.ncbi.nlm.nih.gov/pubmed/7757315) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-28T17:23:54.671126+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdel_2025 | irrelevant | 2 | 0 | The paper describes a bioanalytical method for naftidrofuryl and mentions a PK study in rabbits, but no quantitative PK parameters (CL, V, t1/2, etc.) are provided in the evidence. |
| popPK | Agarwal_2009 | irrelevant | 0 | 0 | This is a clinical review of hearing loss treatments where naftidrofuryl is a therapeutic agent, not a pharmacokinetic study reporting disposition parameters. |
| PD | Agarwal_2009 | not_relevant | 0 | 0 | The paper is a systematic review of clinical trials for hearing loss and does not report any pharmacokinetic or pharmacodynamic modeling, concentration-effect data, or numeric PD parameters for naftidrofuryl. |
| popPK | Belch_1996 | irrelevant | 0 | 0 | The paper is a clinical review of Raynaud's phenomenon treatment that mentions naftidrofuryl only as a therapeutic option, without reporting any pharmacokinetic parameters or quantitative disposition data. |
| PD | Belch_1996 | not_relevant | 1 | 0 | The text is a general review of Raynaud's phenomenon management that mentions naftidrofuryl as a simple vasodilator but provides no pharmacokinetic data, concentration-effect analysis, or numeric PD parameters. |
| popPK | Calvert_2002 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of receptor binding and muscle contraction, reporting no pharmacokinetic parameters. |
| popPK | Chamontin_1995 | irrelevant | 0 | 0 | The paper is a review of clinical efficacy and hemodynamic effects of peripheral vasodilators, containing no pharmacokinetic parameters or quantitative disposition data for naftidrofuryl. |
| popPK | Clissold_1987 | irrelevant | 0 | 0 | The paper is a review of buflomedil, and naftidrofuryl is mentioned only as a comparator drug without any pharmacokinetic data. |
| PD | Clissold_1987 | not_relevant | 1 | 0 | The text is a qualitative review of buflomedil that mentions naftidrofuryl only as a comparator in clinical trials, without providing any numeric PD parameters or exposure-response data for naftidrofuryl. |
| popPK | DHooge_2001 | irrelevant | 0 | 0 | The study is a clinical trial assessing quality of life outcomes and contains no pharmacokinetic parameters or disposition data for naftidrofuryl. |
| PD | DHooge_2001 | not_relevant | 0 | 0 | The paper reports a clinical trial comparing fixed-dose naftidrofuryl to placebo using a quality-of-life questionnaire, with no pharmacokinetic data, concentration-effect analysis, or numeric PD parameters. |
| popPK | Fawcett_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vascular reactivity, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Garrett_1984 | irrelevant | 0 | 0 | The study investigates nafronyl (a different drug), not naftidrofuryl. |
| popPK | Heidrich_1975 | irrelevant | 0 | 0 | The study investigates the effect of naftidrofuryl on renal function markers (creatinine, PAH/inulin clearance) rather than reporting pharmacokinetic disposition parameters (CL, V, t1/2) for naftidrofuryl itself. |
| popPK | Ibrahim_2017 | irrelevant | 0 | 0 | The paper describes analytical methods for drug quantification, not pharmacokinetic studies, and contains no disposition parameters. |
| PD | Ibrahim_2017 | not_relevant | 0 | 0 | The paper describes analytical methods for drug quantification, not pharmacodynamic or exposure-response relationships. |
| popPK | Kirsten_1995 | irrelevant | 2 | 1 | The study reports only a single peak plasma concentration (Cmax) and in vitro IC50, lacking quantitative disposition parameters like clearance, volume, or half-life required for PK modeling. |
| popPK | Lartigue-Mattei_1978 | relevant | 8 | 2 | The paper reports pharmacokinetic parameters for naftidrofuryl, but the evidence only provides half-life values (11.0 and 26.5 hours) without explicit clearance, volume, or compartmental model parameters. |
| popPK | Lehert_1994 | irrelevant | 0 | 0 | The paper is a retrospective clinical efficacy analysis of naftidrofuryl in intermittent claudication and contains no pharmacokinetic parameters or disposition data. |
| PD | Lehert_1994 | not_relevant | 1 | 0 | The paper is a retrospective clinical analysis of fixed-dose (600 mg) vs. placebo outcomes (walking distance, events) and does not report any concentration-effect data, PK/PD modeling, or numeric PD parameters like Emax or EC50. |
| popPK | Majumdar_1982 | irrelevant | 0 | 0 | The study is a clinical trial assessing therapeutic efficacy on liver function (ICG clearance) and does not report pharmacokinetic parameters for naftidrofuryl. |
| popPK | Miyake_1994 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of cerebral blood flow in rats and does not report any pharmacokinetic parameters for naftidrofuryl. |
| popPK | Moesch_1995 | irrelevant | 0 | 0 | The study investigates crystalluria (urinary stone formation) associated with naftidrofuryl oxalate and does not report any pharmacokinetic parameters. |
| PD | Moesch_1995 | not_relevant | 1 | 0 | The paper reports a qualitative association between drug use and crystalluria frequency but provides no concentration-effect data, dose-response curve, or numeric PD parameters. |
| popPK | Nabeshima_1991 | irrelevant | 0 | 0 | The study is a pharmacological investigation of anti-amnesic effects and receptor binding in mice, containing no pharmacokinetic disposition parameters. |
| popPK | Nikolov_1984 | irrelevant | 0 | 0 | The study focuses on the anti-hypoxic effects of cinnarizine, with naftidrofuryl used only as a reference drug, and no pharmacokinetic parameters are reported. |
| PD | Nikolov_1984 | not_relevant | 1 | 0 | The paper focuses on cinnarizine and only mentions naftidrofuryl as a reference drug without providing specific numeric PD parameters or detailed dose-response data for it. |
| popPK | Nikolov_1989 | irrelevant | 0 | 0 | The study focuses on the cerebroprotective effects of prostacyclin, with naftidrofuryl serving only as a co-administered agent in a pharmacodynamic interaction study, and no pharmacokinetic parameters are reported. |
| PD | Nikolov_1989 | not_relevant | 1 | 0 | The paper focuses on prostacyclin (PGI2) and only qualitatively mentions that naftidrofuryl shifts the PGI2 dose-response curve, without providing any numeric PD parameters or concentration-effect data for naftidrofuryl itself. |
| popPK | Platt_1984 | relevant | 8 | 2 | The paper is a PK study of naftidrofuryl reporting qualitative changes in half-life, but specific numeric parameter values are not present in the provided evidence. |
| popPK | Roath_1989 | irrelevant | 0 | 0 | The paper is a clinical review of Raynaud's phenomenon management that mentions naftidrofuryl only as a therapeutic option without reporting any pharmacokinetic parameters. |
| PD | Roath_1989 | not_relevant | 1 | 0 | The text is a general review of Raynaud's phenomenon management that mentions naftidrofuryl qualitatively but provides no pharmacokinetic data, dose-response curves, or numeric PD parameters. |
| popPK | Spengel_1999 | irrelevant | 0 | 0 | The paper is a clinical efficacy study focusing on quality of life outcomes and contains no pharmacokinetic parameters or disposition data for naftidrofuryl. |
| PD | Spengel_1999 | not_relevant | 0 | 0 | The paper reports a clinical trial outcome (quality of life scores) comparing a fixed dose to placebo, but it does not report any pharmacokinetic data, exposure-response analysis, or numeric PD parameters. |
| popPK | Steinmann_1990 | irrelevant | 0 | 0 | The study measures the effect of naftidrofuryl on indocyanine green (ICG) clearance, not the pharmacokinetic parameters of naftidrofuryl itself. |
| popPK | Vashisht_1992 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular contractility and does not report any pharmacokinetic parameters for naftidrofuryl. |
| popPK | Ward_1987 | irrelevant | 0 | 0 | The paper is a review of pentoxifylline, and naftidrofuryl is only mentioned as a comparator drug without any pharmacokinetic data. |
| PD | Ward_1987 | not_relevant | 0 | 0 | The paper is a review of pentoxifylline and only mentions naftidrofuryl as a comparative drug without providing any pharmacodynamic data, exposure-response analysis, or numeric PD parameters for it. |
| popPK | Yesavage_1982 | irrelevant | 0 | 0 | The study reports metabolic effects (lactate/pyruvate ratio) in CSF, not pharmacokinetic disposition parameters for naftidrofuryl. |
| PD | Yesavage_1982 | not_relevant | 1 | 0 | The study reports a qualitative change in the CSF lactate/pyruvate ratio following a fixed dose regimen, but provides no concentration-effect data, dose-response curve, or numeric PD parameters. |
| popPK | Zaccara_2020 | irrelevant | 0 | 0 | The paper is a review of drug interactions and seizure effects, mentioning naftidrofuryl only as a proconvulsant agent without reporting any pharmacokinetic parameters. |
| PD | Zaccara_2020 | not_relevant | 1 | 0 | The paper is a qualitative review of cardiovascular drugs' effects on seizures, mentioning naftidrofuryl only as proconvulsant without providing any numeric PD parameters or exposure-response data. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
