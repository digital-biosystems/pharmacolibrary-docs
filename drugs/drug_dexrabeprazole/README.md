<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;dexrabeprazole&quot;}]"></div>

# dexrabeprazole

- **generic name:** dexrabeprazole
- **ATC codes:** `A02BC07`
- **DrugBank:** [DB13762](https://go.drugbank.com/drugs/DB13762) · **PubChem:** not captured
- **molar mass:** 359.443 g/mol (C18H21N3O3S) — DrugBank
- **groups:** investigational

## About

Dexrabeprazole is the R-enantiomer of the proton pump inhibitor rabeprazole, a drug class used for acid-related disorders such as peptic ulcer and gastro-oesophageal reflux disease. It is classed as investigational and is not an authorised medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27263884](https://www.wikidata.org/wiki/Q27263884) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 03:47 | 1:30 | 0/0/0 | 0/0/1 | 0/0/0 | 151,772/4,377 | einfracz / qwen3.8-27b | 16 | 4/12 | 16/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Mario_2003_Helicobacter_pylori_eradication](drugs/drug_dexrabeprazole/pd_Mario_2003_Helicobacter_pylori_eradication.md) | Helicobacter pylori eradication biomarker turnover ← none | — | Mario FD et al., Rabeprazole in a one-week eradication t…, Journal of gastroenterology… (2003) | [10.1046/j.1440-1746.2003.03035.x](https://doi.org/10.1046/j.1440-1746.2003.03035.x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=dexrabeprazole).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2C19` substrate | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 157 matched, 61 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Guo_2024.pdf` | Guo J et al., Improved quantitative determination of…, Journal of chromatography.… (2024) | popPK | 8 | [10.1016/j.jchromb.2023.123969](https://doi.org/10.1016/j.jchromb.2023.123969) | [38141290](https://pubmed.ncbi.nlm.nih.gov/38141290) | The paper reports toxicokinetic parameters for (R)-rabeprazole (dexrabeprazole) in rats, but the specific numeric values are not present in the provided evidence text. |

<sub>queue written 2026-10-15T03:47:18.014190+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arai_2008 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of rabeprazole, not dexrabeprazole. |
| popPK | Bakheit_2021 | irrelevant | 0 | 0 | The paper is a comprehensive review of rabeprazole (not dexrabeprazole) and does not report original quantitative PK parameters. |
| popPK | Bao_2014 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of levofloxacin in rats, with rabeprazole (not dexrabeprazole) acting as a comparator co-administered agent. |
| popPK | Cheung_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of GDC-3280, with rabeprazole (the parent of dexrabeprazole) used only as a co-administered probe agent, and no quantitative PK parameters are reported for dexrabeprazole. |
| popPK | Chiba_2014 | irrelevant | 0 | 0 | The study focuses on omeprazole, lansoprazole, and rabeprazole to model CYP2C19 variability, and does not report quantitative PK parameters for the specific drug dexrabeprazole. |
| PD | Chitlange_2010 | not_relevant | 0 | 0 | The paper describes a stability-indicating TLC method for quantifying drug concentrations in formulations and contains no pharmacodynamic, exposure-response, or dose-response data. |
| popPK | Chiu_2007 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of lopinavir/ritonavir, and dexrabeprazole is not mentioned or studied. |
| popPK | Desai_2002 | irrelevant | 0 | 0 | no_text gate: only 11 chars of text extracted (&lt; 400) |
| popPK | Gao_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of osimertinib and the inhibitory effect of rabeprazole (the parent drug of dexrabeprazole), not the pharmacokinetics of dexrabeprazole itself. |
| popPK | Guo_2024 | relevant | 8 | 0 | The paper reports toxicokinetic parameters for (R)-rabeprazole (dexrabeprazole) in rats, but the specific numeric values are not present in the provided evidence text. |
| popPK | Hoch_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of asciminib, with rabeprazole used only as a co-administered acid-reducing agent (comparator) rather than the subject drug. |
| popPK | Hossain_2021 | irrelevant | 0 | 0 | The study is an in vitro fluorescence spectroscopy and molecular docking analysis of rabeprazole binding to bovine serum albumin, reporting binding constants and thermodynamic parameters, but it does not report pharmacokinetic disposition parameters (CL, V, t1/2) for dexrabeprazole. |
| popPK | Itagaki_2004 | irrelevant | 0 | 0 | The study investigates the effect of rabeprazole (not dexrabeprazole) on tacrolimus pharmacokinetics. |
| popPK | Jeong_2023 | irrelevant | 0 | 0 | The study investigates rabeprazole, not dexrabeprazole, which is the specific enantiomer required. |
| popPK | Keane_1999 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of rabeprazole, not dexrabeprazole, and no specific numeric PK parameter values are provided in the evidence. |
| popPK | Kekilli_2014 | irrelevant | 0 | 0 | no_text gate: only 28 chars of text extracted (&lt; 400) |
| popPK | Khan_2024 | irrelevant | 1 | 0 | The study focuses on Rabeprazole (not Dexrabeprazole) in beagle dogs, and specific PK disposition parameters (CL, V, ka) are not reported in the evidence, only Cmax. |
| popPK | Kim_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of metformin as the subject drug, with rabeprazole (the parent of dexrabeprazole) acting only as a co-administered interaction probe; no PK parameters for dexrabeprazole are reported. |
| popPK | Kimura_2010 | irrelevant | 0 | 0 | The study evaluates the efficacy of rabeprazole (a different drug) in treating laryngopharyngeal reflux disease and does not report pharmacokinetic parameters for dexrabeprazole. |
| popPK | Kirchheiner_2009 | irrelevant | 0 | 0 | The paper is a pharmacodynamic meta-analysis of gastric pH effects for PPIs (including rabeprazole, but not specifically dexrabeprazole) and does not report pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Kochar_2010 | irrelevant | 0 | 0 | The study is a clinical trial for malaria treatment using rabeprazole (not dexrabeprazole) as an adjunct, reporting parasitological outcomes rather than pharmacokinetic parameters. |
| popPK | Kosugi_2015 | irrelevant | 0 | 0 | The study focuses on the acid tolerance and bioavailability of other drugs (omeprazole, erythromycin, etc.) using rabeprazole only as a pharmacological tool to inhibit gastric acid, with no PK parameters reported for rabeprazole or dexrabeprazole. |
| popPK | Lee_2021 | irrelevant | 1 | 2 | The study reports pharmacokinetic parameters for rabeprazole sodium (the racemate), not dexrabeprazole (the S-enantiomer). |
| popPK | Li_2004 | irrelevant | 0 | 0 | The study is an in-vitro investigation of P450 enzyme inhibition (mechanistic), not a pharmacokinetic study reporting disposition parameters for dexrabeprazole. |
| popPK | Li_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of rifasutenizol, and dexrabeprazole is not mentioned (rabeprazole is the co-administered comparator, but no PK data for it are provided). |
| popPK | Li_2025 | irrelevant | 0 | 0 | The study is an analytical method development for measuring rabeprazole (not dexrabeprazole) and other acid suppressants, and does not report PK parameters for dexrabeprazole. |
| popPK | Liu_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of metformin and the effect of rabeprazole (not dexrabeprazole) as a co-administered agent. |
| PD | Mario_2003 | not_relevant | 2 | 1 | The paper reports a clinical dose-comparison (10mg vs 20mg) with binary efficacy outcomes (eradication rates) but provides no PK data, concentration-effect curves, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | McLeay_2014 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for rabeprazole, not dexrabeprazole. |
| popPK | Miura_2006 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of rabeprazole (not dexrabeprazole) and its thioether metabolite, reporting enzymatic kinetics (Km/Vmax) rather than in-vivo population pharmacokinetic parameters (CL, V, ka). |
| popPK | Musib_2013 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cobimetinib, with rabeprazole used only as a proton pump inhibitor to evaluate drug interactions. |
| popPK | Nakada_2019 | irrelevant | 0 | 0 | The study focuses on creatinine pharmacokinetics and transporter inhibition modeling, where rabeprazole is used only as a probe compound for renal transporter testing, not as the subject drug for PK parameter estimation. |
| popPK | Pace_2007 | irrelevant | 1 | 0 | The paper is a clinical review of rabeprazole (the enantiomer parent, not dexrabeprazole) and does not report quantitative disposition parameters or population PK models for dexrabeprazole. |
| PD | Pai_2007 | not_relevant | 1 | 0 | The text is a general review of chirally pure PPIs and mentions dexrabeprazole qualitatively but provides no numeric PD parameters, exposure-response data, or dose-effect curves. |
| popPK | Park_1996 | irrelevant | 0 | 0 | The provided evidence consists only of software metadata and contains no pharmacokinetic data for dexrabeprazole. |
| popPK | Patel_2019 | irrelevant | 1 | 0 | The study evaluates rabeprazole (the parent racemate) in dogs, not dexrabeprazole (the enantiomer) specifically, and no quantitative PK parameter values are provided in the text. |
| popPK | Patil_2022 | irrelevant | 0 | 0 | The study is an in-silico and in-vitro mechanistic investigation of drug-drug interactions (CYP450 inhibition) and does not report pharmacokinetic disposition parameters for dexrabeprazole. |
| popPK | Pisanu_2021 | irrelevant | 0 | 0 | The study is a pharmacogenomic epidemiological analysis of migraine prevalence associated with PPI use and CYP2C19 phenotypes, reporting no pharmacokinetic parameters for dexrabeprazole. |
| popPK | Piscitelli_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of encorafenib, with dexrabeprazole (or its active metabolite rabeprazole) serving only as a co-administered proton-pump inhibitor to assess food and PPI effects on the subject drug. |
| popPK | Prakash_1998 | irrelevant | 0 | 0 | The paper is a clinical review of rabeprazole (not dexrabeprazole) focusing on efficacy and safety, with no quantitative pharmacokinetic parameters reported. |
| popPK | Qi_2017 | irrelevant | 1 | 0 | The study focuses on voriconazole PK and its interaction with PPIs; rabeprazole is a co-administered comparator, not the subject, and no quantitative PK parameters for dexrabeprazole are reported. |
| popPK | Román_2014 | irrelevant | 0 | 0 | The study focuses on omeprazole, pantoprazole, and rabeprazole (not dexrabeprazole), and no specific numeric PK parameters for dexrabeprazole are reported. |
| popPK | Sablin_2018 | irrelevant | 0 | 0 | The paper is a clinical review of gastroesophageal reflux disease (GERD) and the efficacy of proton pump inhibitors (specifically rabeprazole, not dexrabeprazole), containing no pharmacokinetic parameters or models. |
| popPK | Setoyama_2005 | irrelevant | 0 | 0 | The study measures pharmacokinetic parameters for rabeprazole, not the specific enantiomer dexrabeprazole. |
| popPK | Shimizu_2006 | irrelevant | 0 | 0 | The study investigates rabeprazole, which is the racemate of esomeprazole (S)- and dexrabeprazole (R)-, and does not report specific PK parameters for the dexrabeprazole enantiomer alone. |
| popPK | Shin_2013 | irrelevant | 0 | 0 | The paper is a review of PPIs that focuses on omeprazole, lansoprazole, and pantoprazole; it mentions rabeprazole only in passing (e.g., pKa) and provides no quantitative pharmacokinetic parameters for dexrabeprazole. |
| PD | Takeuchi_2020 | not_relevant | 2 | 1 | The study reports comparative mean pharmacodynamic endpoints (pH holding time ratios) for different doses but does not provide a concentration-effect model, dose-response curve, or specific PD parameters like Emax or EC50. |
| popPK | Toda_2018 | irrelevant | 0 | 0 | The study evaluates azeloprazole sodium as the subject drug, with rabeprazole serving only as a comparator; no specific data for dexrabeprazole is reported. |
| popPK | Tsuchiya_1995 | irrelevant | 0 | 0 | The provided text is empty metadata/placeholder text for a software tool (GROBID) and contains no pharmacokinetic data, drug names, or scientific content for dexrabeprazole. |
| popPK | Ueda_2020 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of methotrexate and in vitro inhibition of OAT3 by proton pump inhibitors, with no reported quantitative disposition parameters for dexrabeprazole. |
| popPK | Uno_2006 | irrelevant | 0 | 0 | The study examines the pharmacokinetics of rabeprazole (the S-enantiomer is dexrabeprazole, but the parent drug rabeprazole is the subject, not specifically dexrabeprazole as a distinct agent or with separate PK parameters for dexrabeprazole alone). |
| popPK | Wedemeyer_2014 | irrelevant | 0 | 0 | The paper is a review of drug interactions for proton pump inhibitors and does not provide specific population pharmacokinetic parameter estimates (CL, V, Q, ka) for dexrabeprazole. |
| popPK | Wölke_2025 | irrelevant | 0 | 0 | The study focuses on zongertinib PK, and rabeprazole is used only as a gastric pH modifier, not as the subject drug. |
| popPK | Xie_2024 | irrelevant | 0 | 0 | The paper is a mechanistic in vitro study on the anti-metaplastic effects of rabeprazole (not dexrabeprazole) and does not report pharmacokinetic parameters. |
| popPK | Zannikos_2011 | irrelevant | 0 | 0 | The study characterizes the pharmacokinetics of rabeprazole (the enantiomer/diastereomer pair), not dexrabeprazole specifically, and does not report quantitative PK parameters for the dexrabeprazole enantiomer. |
| PD | Zhou_2008 | not_relevant | 1 | 0 | The text is a qualitative discussion and literature review regarding racemic switches in PPIs, containing no numeric PD parameters, concentration-effect curves, or specific PK/PD modeling results for dexrabeprazole. |
| popPK | Zubiaur_2023 | irrelevant | 2 | 0 | The study investigates rabeprazole (the S-enantiomer of dexrabeprazole is often grouped, but the text specifies rabeprazole) and other drugs only to analyze CYP2C19 genotype-phenotype associations using normalized AUC (nAUC), without reporting quantitative disposition parameters (CL, V, ka) or compartmental model parameters for dexrabeprazole specifically. |
| popPK | unknown_1999 | irrelevant | 0 | 0 | no_text gate: only 18 chars of text extracted (&lt; 400) |
| popPK | unknown_1999_2 | irrelevant | 0 | 0 | no_text gate: only 11 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
