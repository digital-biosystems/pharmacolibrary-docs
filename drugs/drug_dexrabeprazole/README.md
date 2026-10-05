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
| 2026-10-04 10:57 | 4:02 | 0/0/0 | 0/0/0 | 0/0/0 | 147,874/3,721 | ollama / qwen3.8:27b-mtp-q8_0 | 16 | 4/12 | 16/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=dexrabeprazole) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2C19` substrate | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 157 matched, 61 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Guo_2024.pdf` | Guo J et al., Improved quantitative determination of…, Journal of chromatography.… (2024) | popPK | 10 | [10.1016/j.jchromb.2023.123969](https://doi.org/10.1016/j.jchromb.2023.123969) | [38141290](https://pubmed.ncbi.nlm.nih.gov/38141290) | The study reports toxicokinetic parameters for (R)-rabeprazole (dexrabeprazole) in rats, but the specific numeric values are not present in the provided evidence text. |

<sub>queue written 2026-10-04T10:57:08.112344+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arai_2008 | irrelevant | 0 | 0 | The study investigates rabeprazole, not dexrabeprazole, and does not report specific disposition parameters (CL, V, ka) for the target drug. |
| popPK | Bakheit_2021 | irrelevant | 1 | 0 | The paper is a comprehensive review of rabeprazole (the parent drug, not specifically dexrabeprazole) and the provided evidence contains no quantitative pharmacokinetic parameter values. |
| popPK | Bao_2014 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of levofloxacin in rats, with rabeprazole used only as a co-administered agent to modify gastric pH, and no PK parameters for dexrabeprazole are reported. |
| popPK | Cheung_2021 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of GDC-3280, with rabeprazole (not dexrabeprazole) used only as a co-administered proton pump inhibitor. |
| popPK | Chiba_2014 | irrelevant | 0 | 0 | The study focuses on CYP2C19 substrates (omeprazole, lansoprazole, rabeprazole) and does not report pharmacokinetic parameters for dexrabeprazole. |
| PD | Chitlange_2010 | not_relevant | 0 | 0 | The paper describes a stability-indicating TLC method for quantifying drug concentrations in formulations and contains no pharmacodynamic, exposure-response, or dose-response data. |
| popPK | Chiu_2007 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of lopinavir and ritonavir, with rabeprazole (the racemate, not specifically dexrabeprazole) listed only as a co-administered gastric acid-reducing agent. |
| popPK | Desai_2002 | irrelevant | 0 | 0 | no_text gate: only 11 chars of text extracted (&lt; 400) |
| popPK | Gao_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of osimertinib, with rabeprazole serving only as a co-administered inhibitor/comparator, and no PK parameters for dexrabeprazole are reported. |
| popPK | Guo_2024 | relevant | 10 | 2 | The study reports toxicokinetic parameters for (R)-rabeprazole (dexrabeprazole) in rats, but the specific numeric values are not present in the provided evidence text. |
| popPK | Hoch_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of asciminib, with rabeprazole serving only as a co-administered acid-reducing agent (comparator/probe) rather than the subject drug. |
| popPK | Hossain_2021 | irrelevant | 0 | 0 | The study is an in-vitro investigation of drug-protein binding (BSA) for rabeprazole sodium (not dexrabeprazole) and does not report pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Itagaki_2004 | irrelevant | 0 | 0 | The study investigates the effect of rabeprazole (not dexrabeprazole) on tacrolimus pharmacokinetics, and does not report PK parameters for dexrabeprazole. |
| popPK | Jeong_2023 | irrelevant | 0 | 0 | The study focuses on rabeprazole, not dexrabeprazole, and does not report parameters for the subject drug. |
| popPK | Keane_1999 | irrelevant | 0 | 0 | The study investigates rabeprazole, not dexrabeprazole, and does not report quantitative PK parameters for the target drug. |
| popPK | Kekilli_2014 | irrelevant | 0 | 0 | no_text gate: only 28 chars of text extracted (&lt; 400) |
| popPK | Khan_2024 | irrelevant | 0 | 0 | The study investigates rabeprazole (not dexrabeprazole) and ibuprofen in dogs, and does not report specific PK parameters (CL, V, etc.) for dexrabeprazole. |
| popPK | Kim_2014 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of metformin, with rabeprazole acting only as a co-administered drug, and does not report PK parameters for dexrabeprazole. |
| popPK | Kimura_2010 | irrelevant | 0 | 0 | The study evaluates the diagnostic utility of barium swallow for predicting clinical response to rabeprazole, not its pharmacokinetics. |
| popPK | Kirchheiner_2009 | irrelevant | 0 | 0 | The paper is a pharmacodynamic meta-analysis of proton-pump inhibitors focusing on gastric pH and dose-equivalence, not a pharmacokinetic study reporting disposition parameters (CL, V, ka) for dexrabeprazole. |
| popPK | Kochar_2010 | irrelevant | 0 | 0 | The study is a clinical trial assessing the efficacy of rabeprazole (not dexrabeprazole) as an adjunct to quinine for malaria treatment, with no pharmacokinetic parameters reported. |
| popPK | Kosugi_2015 | irrelevant | 0 | 0 | The study uses rabeprazole (not dexrabeprazole) as a tool to control gastric pH and evaluates the bioavailability of other drugs (omeprazole, erythromycin, etc.), not the PK parameters of dexrabeprazole. |
| popPK | Lee_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of rabeprazole sodium in beagles, not dexrabeprazole. |
| popPK | Li_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP450 inhibition by rabeprazole (not dexrabeprazole) and does not report pharmacokinetic disposition parameters. |
| popPK | Li_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of rifasutenizol, with rabeprazole (not dexrabeprazole) used only as a co-administered drug. |
| popPK | Li_2025 | irrelevant | 0 | 0 | The study is a bioanalytical method validation for multiple PPIs (including rabeprazole, but not dexrabeprazole) and does not report pharmacokinetic parameters for dexrabeprazole. |
| popPK | Liu_2016 | irrelevant | 0 | 0 | The study investigates the effect of rabeprazole on metformin pharmacokinetics, not the pharmacokinetics of dexrabeprazole. |
| PD | Mario_2003 | not_relevant | 2 | 1 | The paper reports a clinical dose-comparison (10mg vs 20mg) with binary efficacy outcomes (eradication rates) but provides no PK data, concentration-effect curves, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | McLeay_2014 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for rabeprazole, not dexrabeprazole. |
| popPK | Miura_2006 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of rabeprazole metabolism, not a pharmacokinetic study of dexrabeprazole disposition. |
| popPK | Musib_2013 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cobimetinib, with rabeprazole (not dexrabeprazole) used only as a co-administered proton pump inhibitor to test for drug interactions. |
| popPK | Nakada_2019 | irrelevant | 0 | 0 | The study focuses on renal transporter inhibition and creatinine clearance estimation, using rabeprazole (not dexrabeprazole) only as a test compound for transporter interaction, with no PK parameters for dexrabeprazole reported. |
| popPK | Ochoa_2020 | irrelevant | 2 | 1 | The study investigates rabeprazole (the racemate), not dexrabeprazole (the S-enantiomer), and reports non-compartmental parameters (AUC, Cmax, Tmax) rather than specific disposition parameters (CL, V, ka) for the target drug. |
| popPK | Pace_2007 | irrelevant | 2 | 2 | The paper is a review of rabeprazole (not dexrabeprazole) and lacks specific quantitative PK parameters (CL, V, Q) for dexrabeprazole. |
| PD | Pai_2007 | not_relevant | 1 | 0 | The text is a general review of chirally pure PPIs and mentions dexrabeprazole qualitatively but provides no numeric PD parameters, exposure-response data, or dose-effect curves. |
| popPK | Park_1996 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding dexrabeprazole pharmacokinetics. |
| popPK | Patel_2019 | irrelevant | 0 | 0 | The study evaluates rabeprazole (the racemate), not dexrabeprazole (the specific enantiomer), and does not report PK parameters for dexrabeprazole. |
| popPK | Patil_2022 | irrelevant | 0 | 0 | The study is an in-vitro/in-silico mechanistic investigation of drug-drug interactions and CYP450 inhibition, not a pharmacokinetic study reporting disposition parameters for dexrabeprazole. |
| popPK | Pisanu_2021 | irrelevant | 0 | 0 | The study is an epidemiological analysis of migraine prevalence and CYP2C19 phenotypes, not a pharmacokinetic study reporting disposition parameters for dexrabeprazole. |
| popPK | Piscitelli_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of encorafenib, with rabeprazole (not dexrabeprazole) serving only as a co-administered proton-pump inhibitor. |
| popPK | Prakash_1998 | irrelevant | 0 | 0 | The paper is a review of rabeprazole (not dexrabeprazole) focusing on clinical efficacy and safety, with no quantitative pharmacokinetic parameters reported. |
| popPK | Qi_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of voriconazole and its interaction with PPIs (including rabeprazole), not the PK parameters of dexrabeprazole itself. |
| popPK | Román_2014 | irrelevant | 0 | 0 | The study investigates omeprazole, pantoprazole, and rabeprazole, but does not report pharmacokinetic parameters for dexrabeprazole. |
| popPK | Sablin_2018 | irrelevant | 0 | 0 | The paper is a clinical review of GERD pathophysiology and treatment with rabeprazole, containing no pharmacokinetic data for dexrabeprazole. |
| popPK | Setoyama_2005 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for rabeprazole, not dexrabeprazole. |
| popPK | Shimizu_2006 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of rabeprazole, not dexrabeprazole. |
| popPK | Shin_2013 | irrelevant | 0 | 0 | The paper is a review of proton pump inhibitors focusing on omeprazole, lansoprazole, and pantoprazole, and does not report quantitative pharmacokinetic parameters for dexrabeprazole. |
| PD | Takeuchi_2020 | not_relevant | 2 | 1 | The study reports comparative mean pharmacodynamic endpoints (pH holding time ratios) for different doses but does not provide a concentration-effect model, dose-response curve, or specific PD parameters like Emax or EC50. |
| popPK | Toda_2018 | irrelevant | 0 | 0 | The study focuses on azeloprazole sodium, with rabeprazole (not dexrabeprazole) serving only as a comparator. |
| popPK | Tsuchiya_1995 | irrelevant | 0 | 0 | The provided evidence contains only metadata and software version information, with no pharmacokinetic data or text regarding dexrabeprazole. |
| popPK | Ueda_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of methotrexate in rats, with dexrabeprazole (or rabeprazole) serving only as a comparator agent for OAT3 inhibition. |
| popPK | Uno_2006 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of rabeprazole, not dexrabeprazole. |
| popPK | Wedemeyer_2014 | irrelevant | 0 | 0 | The paper is a review of drug interactions for proton pump inhibitors and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for dexrabeprazole. |
| popPK | Wölke_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of zongertinib, with rabeprazole used only as a gastric pH modifier/comparator, and no PK parameters for dexrabeprazole are reported. |
| popPK | Xie_2024 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of rabeprazole's effect on ferroptosis and gene expression, containing no pharmacokinetic parameters. |
| popPK | Zannikos_2011 | irrelevant | 0 | 0 | The study investigates rabeprazole, not dexrabeprazole, and does not report quantitative PK parameters for the target drug. |
| PD | Zhou_2008 | not_relevant | 1 | 0 | The text is a qualitative discussion and literature review regarding racemic switches in PPIs, containing no numeric PD parameters, concentration-effect curves, or specific PK/PD modeling results for dexrabeprazole. |
| popPK | Zubiaur_2023 | irrelevant | 2 | 1 | The study analyzes rabeprazole (not dexrabeprazole) as a CYP2C19 substrate and reports only normalized AUC (nAUC) values, lacking specific disposition parameters (CL, V, ka) for dexrabeprazole. |
| popPK | unknown_1999 | irrelevant | 0 | 0 | no_text gate: only 18 chars of text extracted (&lt; 400) |
| popPK | unknown_1999_2 | irrelevant | 0 | 0 | no_text gate: only 11 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
