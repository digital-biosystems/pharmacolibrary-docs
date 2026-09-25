<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A08A&quot;,&quot;href&quot;:&quot;atc/A08A.md&quot;},{&quot;label&quot;:&quot;lorcaserin&quot;}]"></div>

# lorcaserin

- **generic name:** lorcaserin
- **ATC codes:** `A08AA11`
- **DrugBank:** [DB04871](https://go.drugbank.com/drugs/DB04871)
- **groups:** approved, withdrawn

## About

**Description.** Lorcaserin (previously APD-356), a highly selective 5HT2C receptor agonist, is used for the treatment of obesity. It has been shown to reduce body weight and food intake in animal models of obesity, and it is thought that targeting the 5HT2C receptor may alter body weight by regulating satiety. Lorcaserin is marketed as a salt form called Belviq, which is lorcaserin hydrochloride.

In February 2020, the FDA issued a Drug Safety Communication requesting the manufacturer of Belviq (lorcaserin hydrochloride tablets, 10 mg) and Belviq XR (lorcaserin hydrochloride extended-release tablets, 20 mg) to voluntarily withdraw these products from the U.S. market, and the company has submitted a request to voluntarily withdraw the drug. This decision was based on the results of a clinical trial assessing the risk of heart-related problems that found that patients treated with lorcaserin may have a higher risk of cancer.[L44042,L44047]

**Indication.** For the treatment of obesity, as an adjunct to a reduced-calorie diet and increased physical activity.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-22 07:50 | 7:19 | 0/0/0 | 1/1/0 | 0/0/0 | 146,790/5,707 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 0/5 | 5/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Han_2015](drugs/drug_lorcaserin/pd_Han_2015_BW.md) | Han S et al., Exposure-response model for sibutramine…, Drug design, development an… (2015) | [10.2147/dddt.s85435](https://doi.org/10.2147/dddt.s85435) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> | [Sharma_2018](drugs/drug_lorcaserin/pd_Sharma_2018_BW.md) | Sharma VD et al., Model-Based Approach to Predict Adheren…, Journal of clinical pharmac… (2018) | [10.1002/jcph.994](https://doi.org/10.1002/jcph.994) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=lorcaserin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | <sub>“…moyl glucuronide lorcaserin (M5) is the major metabolite in urine. Other minor metabolites…”</sub> | prose |
| metabolism | liver | `CYP1A2` substrate, `CYP2A6` substrate, `CYP2B6` substrate, `CYP2C19` substrate, `CYP2D6` inhibitor/substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | lung | `CYP1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP1A1` substrate, `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…are eliminated mostly in the urine (92.3%) and some through feces (2.2%).…”</sub> | prose |
| excretion | kidney | <sub>“…etabolism, and the metabolites are eliminated mostly in the urine (92.3%) and some through…”</sub> | prose |
| excretion | liver | <sub>“…Lorcaserin is eliminated by hepatic metabolism, and the metabolites are eliminated mostly…”</sub> | prose |

<sub>Actors without a tissue in the table: FMO1 (substrate), HTR2C (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 53 matched, 53 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Christopher_2017.pdf` | Christopher RJ et al., Pharmacokinetics and Tolerability of Lo…, Clinical therapeutics (2017) | popPK | 8 | [10.1016/j.clinthera.2017.03.004](https://doi.org/10.1016/j.clinthera.2017.03.004) | [28365033](https://pubmed.ncbi.nlm.nih.gov/28365033) | The paper reports PK parameters (Cmax, AUC) for lorcaserin in special populations, but lacks compartmental parameters (CL, V, t1/2) and specific numeric values for the primary endpoints are mostly presented as ratios. |
| `Subramanian_2014.pdf` | Subramanian M et al., Role of hepatic blood flow and metaboli…, Xenobiotica; the fate of fo… (2014) | popPK | 8 | [10.3109/00498254.2014.932470](https://doi.org/10.3109/00498254.2014.932470) | [24947446](https://pubmed.ncbi.nlm.nih.gov/24947446) | The study reports quantitative PK parameters (clearance) for lorcaserin in rats, but specific numeric values are not provided in the text, only relative changes and a threshold. |
| `Kulkarni_2017.pdf` | Kulkarni P et al., Correlation of pharmacokinetics and bra…, Journal of pharmacological… (2017) | pd | 5 | [10.1016/j.vascn.2017.09.258](https://doi.org/10.1016/j.vascn.2017.09.258) | [28974368](https://www.ncbi.nlm.nih.gov/pubmed/28974368) | metadata signals extractable PD data (PK-PD) |
| `Usmani_2012.pdf` | Usmani KA et al., Identification of human cytochrome P450…, Drug metabolism and disposi… (2012) | pgx | 7 | [10.1124/dmd.111.043414](https://doi.org/10.1124/dmd.111.043414) | [22266842](https://www.ncbi.nlm.nih.gov/pubmed/22266842) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-09-22T07:48:17.548701+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cataldi_2019 | irrelevant | 0 | 0 | The paper is a review discussing gender-related pharmacology without reporting original quantitative pharmacokinetic parameters for lorcaserin. |
| PD | Cataldi_2019 | not_relevant | 1 | 0 | The text is a review discussing the theoretical need for gender-specific pharmacodynamic studies but does not report any specific numeric PD parameters or exposure-response data for lorcaserin. |
| popPK | Catoira_2014 | irrelevant | 1 | 0 | The paper is a review article discussing mechanisms and clinical efficacy without providing original quantitative pharmacokinetic parameter values for lorcaserin. |
| popPK | Christopher_2016 | relevant | 4 | 2 | The study reports PK parameters (Cmax, Tmax, AUC) for lorcaserin, but lacks specific quantitative values for clearance, volume of distribution, or half-life required for population PK modeling. |
| popPK | Christopher_2017 | relevant | 8 | 2 | The paper reports PK parameters (Cmax, AUC) for lorcaserin in special populations, but lacks compartmental parameters (CL, V, t1/2) and specific numeric values for the primary endpoints are mostly presented as ratios. |
| PD | Christopher_2017 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic parameters (Cmax, AUC) and tolerability in special populations, with no pharmacodynamic or exposure-response analysis. |
| popPK | Collins_2016 | irrelevant | 2 | 0 | The study is a behavioral pharmacology experiment in rhesus monkeys that mentions plasma concentrations but does not report quantitative PK parameters (CL, V, ka, etc.) for lorcaserin. |
| popPK | Dong_2017 | irrelevant | 0 | 0 | The paper is a pharmacodynamic efficacy study reporting weight loss outcomes, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Gannon_2018 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment investigating the effects of lorcaserin on drug self-administration, not a pharmacokinetic study, and reports no disposition parameters. |
| PGx | Guzman_2014 | not_relevant | 0 | 0 | The text is a general introduction to a review article and does not report specific pharmacogenomic effects on PK/PD parameters for lorcaserin. |
| popPK | Han_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and exposure-response of sibutramine, with lorcaserin mentioned only as a background comparator in the introduction. |
| PD | Han_2015 | not_relevant | 0 | 0 | The paper reports a pharmacodynamic model for sibutramine, not lorcaserin. |
| popPK | Higgins_2015 | irrelevant | 2 | 1 | The study reports only descriptive plasma concentration ranges (Cmin, Cmax) and AUC for lorcaserin in rats, lacking the compartmental parameters (CL, V, ka, t1/2) required for population pharmacokinetic modeling. |
| popPK | Higgins_2017 | irrelevant | 2 | 0 | The study focuses on pharmacodynamics and tolerability (nausea models) in rats, mentioning PK only qualitatively (plasma/CSF levels vs dose) without reporting quantitative disposition parameters like clearance or volume. |
| popPK | Hurren_2011 | irrelevant | 1 | 0 | The paper is a review of pharmacology and clinical efficacy without reporting original quantitative pharmacokinetic parameter values. |
| popPK | Hurren_2017 | irrelevant | 2 | 0 | The paper is a review article that discusses pharmacokinetics qualitatively but does not provide specific quantitative disposition parameters (CL, V, ka, etc.) for lorcaserin in the provided text. |
| PD | Hurren_2017 | not_relevant | 1 | 0 | The text is a review summary that mentions pharmacodynamics qualitatively but provides no numeric PD parameters, concentration-effect curves, or dose-response data. |
| PGx | Hurren_2017 | not_relevant | 0 | 0 | The paper reviews the pharmacokinetics and pharmacodynamics of lorcaserin ER but does not report any specific pharmacogenomic effects or gene variant associations. |
| PGx | Hurt_2018 | not_relevant | 2 | 0 | The paper discusses the pharmacogenomics of the serotonin system and mentions CYP2D6 metabolism in the context of drug interactions, but it does not report specific gene variant effects on lorcaserin PK or PD parameters. |
| popPK | Kaptein_2012 | irrelevant | 0 | 0 | The paper analyzes weight loss efficacy using an exponential model, not pharmacokinetic disposition parameters (CL, V, etc.) for lorcaserin. |
| PD | Kaptein_2012 | not_relevant | 2 | 1 | The paper fits a time-course exponential model to mean weight data to estimate maximum weight loss and duration, but does not report a concentration- or dose-response relationship with numeric PD parameters (e.g., EC50, Emax vs. dose/concentration) for lorcaserin. |
| popPK | Kohut_2018 | irrelevant | 0 | 0 | The study is a behavioral pharmacology investigation of lorcaserin's effects on heroin self-administration in rhesus monkeys and does not report any pharmacokinetic parameters. |
| popPK | Kulkarni_2017 | irrelevant | 0 | 0 | no_text gate: only 114 chars of text extracted (&lt; 400) |
| PD | Kulkarni_2017 | not_relevant | 0 | 0 | The paper focuses on the correlation of pharmacokinetics and brain penetration in zebrafish and mammals, and does not report any pharmacodynamic or exposure-response data for lorcaserin. |
| PGx | Li_2024 | not_relevant | 0 | 0 | The paper evaluates the mutagenicity and genotoxicity of nitrosamine impurities, not the pharmacokinetic or pharmacodynamic effects of lorcaserin itself. |
| popPK | Mensah_2024 | irrelevant | 1 | 0 | Lorcaserin is only a comparator/add-on agent in a seizure efficacy study, and no quantitative PK parameters for lorcaserin are reported in the evidence. |
| popPK | Pirtle_2019 | irrelevant | 0 | 0 | The study is a behavioral/clinical trial assessing the subjective and cardiovascular effects of lorcaserin on cocaine use, and it does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for lorcaserin. |
| PD | Pirtle_2019 | not_relevant | 0 | 0 | The study is a behavioral pharmacology trial assessing the effects of a fixed dose of lorcaserin on cocaine self-administration and subjective ratings, without reporting plasma concentrations or fitting a pharmacodynamic model to derive numeric PD parameters. |
| popPK | Reddy_2021 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel indole derivatives where lorcaserin is used only as a reference compound for in vitro receptor binding activity, with no pharmacokinetic data reported. |
| PD | Reddy_2021 | not_relevant | 1 | 2 | The paper reports in vitro receptor binding EC50 values for novel compounds and compares them to lorcaserin, but does not report a pharmacokinetic or pharmacodynamic exposure-response relationship for lorcaserin itself. |
| PGx | Sadeque_2012 | not_relevant | 0 | 0 | The paper identifies the UGT enzymes responsible for lorcaserin metabolism but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Sadeque_2016 | irrelevant | 1 | 0 | The paper focuses on in-vitro metabolic enzyme identification (SULTs) and mechanistic properties, not on quantitative population pharmacokinetic parameters (CL, V, ka) for lorcaserin. |
| popPK | Sandeep_2022 | irrelevant | 0 | 0 | The paper focuses on the discovery of a new 5-HT2CR modulator (compound 4i) and uses lorcaserin only as a comparator/reference drug, without reporting any quantitative pharmacokinetic parameters for lorcaserin. |
| PD | Sandeep_2022 | not_relevant | 2 | 1 | The paper focuses on the discovery of a new PAAM (compound 4i) and only provides a qualitative comparison of food intake effects to lorcaserin without reporting any numeric PD parameters or exposure-response data for lorcaserin. |
| popPK | Sarkar_2026 | irrelevant | 0 | 0 | The paper focuses on the synthesis and in vitro/in vivo evaluation of novel 5-HT2CR modulators, using lorcaserin only as a mechanistic comparator without reporting any pharmacokinetic parameters for it. |
| PD | Sarkar_2026 | not_relevant | 1 | 1 | The paper focuses on the synthesis and in vitro characterization of novel 5-HT2CR modulators, mentioning lorcaserin only as a mechanistic comparator without providing any exposure-response or dose-response data for it. |
| popPK | Sharma_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of naltrexone and bupropion (Contrave), not lorcaserin. |
| popPK | Sharma_2020 | irrelevant | 2 | 0 | The paper is a review article that summarizes general information and does not report original quantitative pharmacokinetic parameter values (such as CL, V, or ka) for lorcaserin. |
| PD | Sharma_2020 | not_relevant | 1 | 0 | The text is a review summary that qualitatively mentions pharmacodynamics and PK but does not provide any numeric PD parameters, concentration-effect curves, or model fits. |
| popPK | Shukla_2015 | irrelevant | 2 | 0 | The paper is a review article discussing pharmacokinetic properties qualitatively without providing original quantitative disposition parameter values in the evidence. |
| PD | Shukla_2015 | not_relevant | 2 | 0 | The text is a review summary that qualitatively discusses pharmacodynamic properties and efficacy but does not provide specific numeric PD parameters or exposure-response data. |
| popPK | Singh_2019 | irrelevant | 0 | 0 | The paper is a pharmacological study on allosteric modulators of 5-HT receptors and uses lorcaserin only as a comparator agent, reporting no pharmacokinetic parameters. |
| PD | Singh_2019 | not_relevant | 1 | 1 | The paper reports in vitro receptor binding/modulation data (Emax/EC50 changes) and qualitative in vivo food intake comparisons, but does not provide a pharmacokinetic-pharmacodynamic (PK/PD) model or exposure-response analysis for lorcaserin. |
| PGx | Solas_2016 | not_relevant | 0 | 0 | The text is a general review introduction that mentions lorcaserin and pharmacogenetics but does not report specific gene-variant effects on lorcaserin PK/PD parameters. |
| popPK | Subramanian_2014 | relevant | 8 | 2 | The study reports quantitative PK parameters (clearance) for lorcaserin in rats, but specific numeric values are not provided in the text, only relative changes and a threshold. |
| popPK | Tchang_2020 | irrelevant | 2 | 0 | The paper is a review article discussing lorcaserin's properties and efficacy, but the provided evidence contains no original quantitative pharmacokinetic parameter values (e.g., CL, V, t1/2). |
| PD | Tchang_2020 | not_relevant | 2 | 0 | The text is a review article abstract that qualitatively discusses pharmacodynamics and efficacy but does not provide specific numeric PD parameters or exposure-response data. |
| popPK | Usmani_2012 | irrelevant | 0 | 0 | no_text gate: only 180 chars of text extracted (&lt; 400) |
| PD | Usmani_2012 | not_relevant | 0 | 0 | The paper focuses on the identification of metabolic enzymes (CYP450 and FMOs) for lorcaserin and does not report any pharmacodynamic or exposure-response data. |
| PGx | Usmani_2012 | not_relevant | 0 | 0 | The paper identifies metabolic enzymes (CYP/FMO) but does not report pharmacogenomic effects of specific gene variants on PK/PD parameters. |
| PGx | Valenzuela-Vallejo_2022 | not_relevant | 0 | 0 | The paper investigates the effect of lorcaserin on GDF-15 levels, not the effect of a gene variant on lorcaserin's PK/PD. |
| popPK | unknown_2021 | irrelevant | 0 | 0 | no_text gate: only 63 chars of text extracted (&lt; 400) |
| PD | unknown_2021 | not_relevant | 0 | 0 | The provided text is only a header for conference poster abstracts and contains no specific data, results, or PD parameters for lorcaserin. |
| popPK | unknown_2022 | irrelevant | 0 | 0 | no_text gate: only 63 chars of text extracted (&lt; 400) |
| PD | unknown_2022 | not_relevant | 0 | 0 | The provided text is only a header for conference poster abstracts and does not contain the specific content, data, or analysis for lorcaserin. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
