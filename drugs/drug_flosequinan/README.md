# flosequinan

- **generic name:** flosequinan
- **ATC codes:** `C01DB01`
- **DrugBank:** [DB13228](https://go.drugbank.com/drugs/DB13228)
- **groups:** approved, withdrawn

## About

**Description.** Flosequinan was approved in the USA and the UK for a year prior to being withdrawn from the market due to increased mortality in chronic heart failure patients, found in drug trials.[A174979,L43942]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-09 21:34 | 9:39 | 0/0/0 | 0/0/0 | 0/0/0 | 41,407/3,848 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

## Coverage

- **PubMed hits:** 26 matched, 38 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hinson_1994.pdf` | Hinson JL et al., Pharmacokinetics, safety, and tolerabil…, Journal of pharmaceutical s… (1994) | popPK | 10 | [10.1002/jps.2600830323](https://doi.org/10.1002/jps.2600830323) | [8207686](https://pubmed.ncbi.nlm.nih.gov/8207686) | The abstract provides explicit quantitative pharmacokinetic parameters (AUC, Cmax, t1/2, clearance, elimination rate constant) for flosequinan in patients with hepatic dysfunction. |
| `Gallo_1993.pdf` | Gallo BV et al., Pharmacokinetic profile of flosequinan…, Journal of pharmaceutical s… (1993) | popPK | 9 | [10.1002/jps.2600820313](https://doi.org/10.1002/jps.2600820313) | [8450423](https://pubmed.ncbi.nlm.nih.gov/8450423) | The study reports quantitative PK parameters (Cmax, Tmax, half-life, clearance changes) for flosequinan and its metabolite in renal patients, with specific numeric values provided in the text. |
| `Kashiyama_1994.pdf` | Kashiyama E et al., Stereoselective pharmacokinetics and in…, Xenobiotica; the fate of fo… (1994) | popPK | 9 | [10.3109/00498259409045900](https://doi.org/10.3109/00498259409045900) | [8059540](https://pubmed.ncbi.nlm.nih.gov/8059540) | The paper is a pharmacokinetic study of flosequinan in rats, but the provided evidence contains only qualitative descriptions of parameter differences (e.g., "clearance... was higher") without specific numeric values. |
| `Lindsey_2000.pdf` | Lindsey JK et al., Simultaneous modelling of flosequinan a…, European journal of clinica… (2000) | popPK | 9 | [10.1007/s002280050704](https://doi.org/10.1007/s002280050704) | [10805061](https://pubmed.ncbi.nlm.nih.gov/10805061) | The paper describes a PK study of flosequinan with simultaneous modeling, but the provided evidence contains only the abstract and no numeric parameter values. |
| `Nicholls_1996.pdf` | Nicholls DP et al., Pharmacokinetics of flosequinan in pati…, European journal of clinica… (1996) | popPK | 8 | [10.1007/s002280050110](https://doi.org/10.1007/s002280050110) | [8803521](https://pubmed.ncbi.nlm.nih.gov/8803521) | The study reports quantitative PK parameters (Cmax, Tmax, half-life) for flosequinan in heart failure patients, but lacks explicit clearance or volume of distribution values. |
| `Sakai_1993.pdf` | Sakai M et al., Pharmacokinetics of flosequinan in elde…, European journal of clinica… (1993) | popPK | 8 | [10.1007/BF00316479](https://doi.org/10.1007/BF00316479) | [8513852](https://pubmed.ncbi.nlm.nih.gov/8513852) | The paper reports quantitative PK parameters (tmax, Cmax, t1/2) for flosequinan in humans, though it lacks explicit clearance or volume values. |
| `Frodsham_1992.pdf` | Frodsham G et al., Effect of flosequinan upon isoenzymes o…, European journal of pharmac… (1992) | pd | 5 | [10.1016/0014-2999(92)90396-l](https://doi.org/10.1016/0014-2999(92)90396-l) | [1319914](https://www.ncbi.nlm.nih.gov/pubmed/1319914) | metadata signals extractable PD data (IC50) |
| `Starling_1994.pdf` | Starling MR, Effects of low-dose flosequinan on left…, American heart journal (1994) | pd | 4 | [10.1016/0002-8703(94)90018-3](https://doi.org/10.1016/0002-8703(94)90018-3) | [8017265](https://www.ncbi.nlm.nih.gov/pubmed/8017265) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-09-09T21:33:57.681807+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aoki_1986 | irrelevant | 0 | 0 | The paper investigates the pharmacological effects of Bay K 8644 and nifedipine on rat femoral arteries and does not mention flosequinan or report any pharmacokinetic parameters. |
| popPK | Atchison_1987 | irrelevant | 0 | 0 | The paper studies the neurophysiological effects of BAY K 8644 on acetylcholine release and does not involve flosequinan or pharmacokinetic parameters. |
| popPK | Barrús_1995 | irrelevant | 0 | 0 | The paper studies the effect of Bay K 8644 on human placental arteries and does not involve flosequinan or pharmacokinetic parameters. |
| popPK | Cohn_1991 | irrelevant | 0 | 0 | The paper is a review discussing the mechanism of action and therapeutic potential of flosequinan, containing no quantitative pharmacokinetic parameters. |
| PD | Cohn_1991 | not_relevant | 1 | 0 | The text is a qualitative review discussing the mechanism and potential benefits of flosequinan without providing any numeric pharmacodynamic parameters, concentration-effect data, or dose-response curves. |
| popPK | Falotico_1989 | irrelevant | 1 | 0 | The study reports inotropic and hemodynamic effects (pharmacodynamics) rather than quantitative pharmacokinetic disposition parameters like clearance or volume of distribution. |
| popPK | Frodsham_1992 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on phosphodiesterase isoenzymes and does not report pharmacokinetic parameters for flosequinan. |
| PD | Frodsham_1992 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition kinetics (IC50) for phosphodiesterase isoenzymes, which is a mechanistic/pharmacological study, not a pharmacodynamic (exposure-response) or dose-response analysis in a biological system (in vivo or ex vivo tissue response) as defined for PD modeling. |
| popPK | Haida_1994 | irrelevant | 0 | 0 | The study investigates the neuroprotective effects of BAY K-8644 on rat brain ischemia and does not involve flosequinan or report any pharmacokinetic parameters. |
| popPK | Howl_1989 | irrelevant | 0 | 0 | The paper investigates the mechanism of muscle necrosis induced by Bay K 8644 in vitro and does not involve flosequinan or pharmacokinetic parameters. |
| popPK | Högestätt_1989 | irrelevant | 0 | 0 | The paper studies the pharmacological effects of Bay K 8644 on adrenoceptors and does not involve flosequinan or report any pharmacokinetic parameters. |
| popPK | Ives_1986 | irrelevant | 0 | 0 | The paper studies the hemodynamic effects of BAY k 8644 in rats and does not mention flosequinan or report any pharmacokinetic parameters. |
| popPK | Kamali_1991 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of theophylline, with flosequinan serving only as a co-administered agent to test for drug interactions, and no PK parameters for flosequinan are reported. |
| popPK | Kashiyama_1994 | relevant | 9 | 2 | The paper is a pharmacokinetic study of flosequinan in rats, but the provided evidence contains only qualitative descriptions of parameter differences (e.g., "clearance... was higher") without specific numeric values. |
| popPK | Leary_1989 | irrelevant | 0 | 0 | The study focuses on renal excretory actions and pharmacodynamics, not pharmacokinetic parameters, and flosequinan is only a comparator agent. |
| PD | Leary_1989 | not_relevant | 0 | 0 | The paper only qualitatively states that flosequinan did not affect water and electrolyte excretion, providing no numeric PD parameters or exposure-response data. |
| popPK | Lindsey_2000 | relevant | 9 | 0 | The paper describes a PK study of flosequinan with simultaneous modeling, but the provided evidence contains only the abstract and no numeric parameter values. |
| popPK | McMurtry_1985 | irrelevant | 0 | 0 | The paper studies the effects of BAY K 8644 and A23187 on pulmonary vasoconstriction in rat lungs and does not mention flosequinan or report any pharmacokinetic parameters. |
| popPK | Moreland_1988 | irrelevant | 0 | 0 | The paper studies the mechanism of action of Bay K 8644 and does not mention flosequinan or report any pharmacokinetic parameters for it. |
| popPK | Ng_1994 | irrelevant | 0 | 0 | The study reports only pharmacodynamic (hemodynamic) effects and contains no pharmacokinetic parameters for flosequinan. |
| PD | Ng_1994 | not_relevant | 2 | 1 | The study reports qualitative changes in hemodynamic variables (HR, CO, etc.) for a single fixed dose compared to placebo, but does not provide concentration-effect data, dose-response curves, or numeric PD parameters (Emax, EC50). |
| popPK | Ogawa_2014 | irrelevant | 2 | 0 | This is a review article that discusses flosequinan qualitatively (noting increased AUC in decompensated heart failure) but does not provide specific quantitative PK parameter values (CL, V, etc.) in the provided text. |
| popPK | Rau_1994 | irrelevant | 2 | 0 | The study is a drug-drug interaction trial that reports no significant differences in pharmacokinetic parameters but does not provide the specific quantitative values (CL, V, etc.) for flosequinan in the evidence. |
| PD | Rau_1994 | not_relevant | 2 | 1 | The paper reports a drug-drug interaction study with only qualitative/percentage changes in blood pressure and heart rate, lacking any concentration-effect modeling or numeric PD parameters (Emax, EC50, etc.). |
| popPK | Scott_1991 | irrelevant | 1 | 0 | The study focuses on hemodynamic effects (blood flow and vascular resistance) rather than pharmacokinetic disposition parameters like clearance or volume of distribution. |
| popPK | Scriabine_1986 | irrelevant | 0 | 0 | The paper studies the mechanism of BAY K 8644 on calcium uptake in rabbit aortic rings and does not involve flosequinan or pharmacokinetic parameters. |
| popPK | Sim_1988 | irrelevant | 1 | 0 | The paper reports cardiovascular and renal physiological effects (blood pressure, PRA, sodium excretion) but does not provide quantitative pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Starling_1994 | irrelevant | 0 | 0 | The paper title indicates a study on hemodynamic effects (chamber performance) rather than pharmacokinetic disposition parameters, and no PK data is present in the evidence. |
| PD | Starling_1994 | not_relevant | 0 | 0 | The provided text is only the title of the paper and does not contain the full text, data, or numeric PD parameters required to assess the exposure-response relationship. |
| popPK | Tran_2023 | irrelevant | 0 | 0 | The paper investigates the neuroprotective mechanisms of ginsenoside Re in mice and does not involve flosequinan or pharmacokinetic parameters. |
| popPK | Vercruysse_1993 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of propranolol in rats, not flosequinan. |
| popPK | Warbanow_1988 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on rat aorta regarding calcium channels and does not involve flosequinan or pharmacokinetic parameters. |
| popPK | Xu_2011 | irrelevant | 0 | 0 | The paper studies BK channel knockout mice and blood pressure, and does not mention flosequinan or report any pharmacokinetic parameters. |
| popPK | Yamaguchi_2020 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on liver cancer cells and does not involve flosequinan or pharmacokinetic parameters. |
| popPK | Zhou_1998 | irrelevant | 0 | 0 | The paper studies insulin-producing beta cells in microcapsules and does not involve flosequinan or its pharmacokinetics. |
| popPK | de_1989 | irrelevant | 0 | 0 | The paper studies the chronotropic effects of Bay K 8644 in rat atria and does not mention flosequinan or report any pharmacokinetic parameters. |
| popPK | unknown_1988 | irrelevant | 0 | 0 | The provided evidence is only a header for a conference abstract collection and contains no specific study data, parameters, or mention of flosequinan. |
| PD | unknown_1988 | not_relevant | 0 | 0 | The provided text is only a header for a conference proceedings and does not contain the abstract or data for flosequinan. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_flosequinan`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
