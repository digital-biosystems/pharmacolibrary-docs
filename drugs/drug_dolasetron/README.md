# dolasetron

- **generic name:** dolasetron
- **ATC codes:** `A04AA04`
- **DrugBank:** [DB00757](https://go.drugbank.com/drugs/DB00757)
- **groups:** approved

## About

**Description.** Dolasetron is an antinauseant and antiemetic agent indicated for the prevention of nausea and vomiting associated with moderately-emetogenic cancer chemotherapy and for the prevention of postoperative nausea and vomiting. Dolasetron is a highly specific and selective serotonin 5-HT3 receptor antagonist. This drug is not shown to have activity at other known serotonin receptors, and has low affinity for dopamine receptors.

**Indication.** For the prevention of nausea and vomiting associated with emetogenic cancer chemotherapy, including initial and repeat courses of chemotherapy. Also used for the prevention of postoperative nausea and vomiting. This drug can be used intravenously for the treatment of postoperative nausea and vomiting.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-11 02:42 | 19:28 | 0/1/0 | 1/0/0 | 0/0/2 | 231,602/20,478 | ollama / qwen3.8:27b-mtp-q8_0 | 11 | 1/10 | 10/1 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Dow_1996](drugs/drug_dolasetron/Dolasetron_Dow1996_reference.md) | Dow J et al., Comparison of the pharmacokinetics of d…, Journal of pharmaceutical s… (1996) | [10.1021/js960041m](https://doi.org/10.1021/js960041m) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [George_2021](drugs/drug_dolasetron/pd_George_2021_ASP.md) | George B et al., In Vitro Inhibition of Renal OCT2 and M…, International journal of mo… (2021) | [10.3390/ijms22126439](https://doi.org/10.3390/ijms22126439) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2D6** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Adams_2009](drugs/drug_dolasetron/pgx_Adams_2009_CYP2D6_Q100.md) | Adams LM et al., Effect of casopitant, a novel NK-1 anta…, Supportive care in cancer :… (2009) | [10.1007/s00520-008-0572-4](https://doi.org/10.1007/s00520-008-0572-4) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2D6** | `Q27` · CL/F | metabolism | [Moore_2025](drugs/drug_dolasetron/pgx_Moore_2025_CYP2D6_Q27.md) | Moore C et al., CYP2D6 genotype and associated 5-HT3 re…, Clinical and translational… (2025) | [10.1111/cts.70108](https://doi.org/10.1111/cts.70108) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 87 matched, 74 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_15 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dow_1996.pdf` | Dow J et al., Comparison of the pharmacokinetics of d…, Journal of pharmaceutical s… (1996) | popPK | 10 | [10.1021/js960041m](https://doi.org/10.1021/js960041m) | [8818990](https://pubmed.ncbi.nlm.nih.gov/8818990) | The paper reports quantitative pharmacokinetic parameters (CL, V, t1/2, ka) for dolasetron in dogs, with all numeric values explicitly present in the text. |
| `Boxenbaum_1992.pdf` | Boxenbaum H et al., Human dolasetron pharmacokinetics: I. D…, Biopharmaceutics & drug dis… (1992) | popPK | 9 | [10.1002/bdd.2510130907](https://doi.org/10.1002/bdd.2510130907) | [1467456](https://pubmed.ncbi.nlm.nih.gov/1467456) | The paper reports quantitative PK parameters for dolasetron, including renal clearance (2.68 ml min-1 kg-1) and half-life (7.56 h), directly in the provided text. |
| `Dempsey_1996.pdf` | Dempsey E et al., Pharmacokinetics of single intravenous…, Journal of clinical pharmac… (1996) | popPK | 9 | [10.1002/j.1552-4604.1996.tb04757.x](https://doi.org/10.1002/j.1552-4604.1996.tb04757.x) | [8930777](https://pubmed.ncbi.nlm.nih.gov/8930777) | The study reports quantitative PK parameters for dolasetron (half-life) and its major metabolite (Vd, t1/2, bioavailability) in the provided text. |
| `Sanwald-Ducray_1997.pdf` | Sanwald-Ducray P et al., Prediction of the pharmacokinetic param…, Xenobiotica; the fate of fo… (1997) | popPK | 9 | [10.1080/004982597240686](https://doi.org/10.1080/004982597240686) | [9058532](https://pubmed.ncbi.nlm.nih.gov/9058532) | The paper reports specific quantitative pharmacokinetic parameters (clearance, half-life, volume of distribution) for reduced dolasetron, the active metabolite of dolasetron, in the abstract. |
| `Stubbs_1997.pdf` | Stubbs K et al., Pharmacokinetics of dolasetron after or…, Journal of clinical pharmac… (1997) | popPK | 9 | [10.1002/j.1552-4604.1997.tb04267.x](https://doi.org/10.1002/j.1552-4604.1997.tb04267.x) | [9505984](https://pubmed.ncbi.nlm.nih.gov/9505984) | The study reports quantitative PK parameters for dolasetron, but specific numeric values for clearance and volume are largely absent, with only half-life values provided in the text. |
| `Coppes_1999.pdf` | Coppes MJ et al., Safety, tolerability, antiemetic effica…, Journal of pediatric hemato… (1999) | popPK | 8 | [10.1097/00043426-199907000-00007](https://doi.org/10.1097/00043426-199907000-00007) | [10445889](https://pubmed.ncbi.nlm.nih.gov/10445889) | The study reports pharmacokinetic parameters for dolasetron, but only qualitative descriptions (e.g., "approximately 6 hours") are provided in the text without specific numeric values for clearance or volume. |
| `Herndon_2018.pdf` | Herndon AK et al., Preliminary pharmacokinetics of intrave…, Journal of feline medicine… (2018) | popPK | 8 | [10.1177/1098612X17729310](https://doi.org/10.1177/1098612X17729310) | [28905667](https://pubmed.ncbi.nlm.nih.gov/28905667) | The study reports quantitative non-compartmental PK parameters (Cmax, Tmax, half-life, AUC) for the active metabolite hydrodolasetron in cats, which are readable in the text. |
| `Shah_1996.pdf` | Shah A et al., Single- and Multiple-Dose Pharmacokinet…, American journal of therape… (1996) | popPK | 8 | [10.1097/00045391-199605000-00006](https://doi.org/10.1097/00045391-199605000-00006) | [11862273](https://pubmed.ncbi.nlm.nih.gov/11862273) | The study reports quantitative pharmacokinetic parameters (clearance, half-life) for the active metabolite of dolasetron, noting that parent compound parameters could not be determined due to low plasma concentrations. |
| `Darpo_2015.pdf` | Darpo B et al., Results from the IQ-CSRC prospective st…, Clinical pharmacology and t… (2015) | pd | 5 | [10.1002/cpt.60](https://doi.org/10.1002/cpt.60) | [25670536](https://www.ncbi.nlm.nih.gov/pubmed/25670536) | metadata signals extractable PD data (exposure-response) |
| `Darpo_2018.pdf` | Darpo B et al., Challenges in implementing and obtainin…, Journal of pharmacological… (2018) | pd | 5 | [10.1016/j.vascn.2018.05.006](https://doi.org/10.1016/j.vascn.2018.05.006) | [29879475](https://www.ncbi.nlm.nih.gov/pubmed/29879475) | metadata signals extractable PD data (concentration-effect) |
| `Ferber_2017.pdf` | Ferber G et al., Can Bias Evaluation Provide Protection…, Journal of clinical pharmac… (2017) | pd | 5 | [10.1002/jcph.779](https://doi.org/10.1002/jcph.779) | [27271102](https://www.ncbi.nlm.nih.gov/pubmed/27271102) | metadata signals extractable PD data (Exposure-Response) |
| `Hassan_2011.pdf` | Hassan BA et al., Genetic polymorphisms in the three mala…, Asian Pacific journal of ca… (2011) | pgx | 8 | not captured | [21517255](https://www.ncbi.nlm.nih.gov/pubmed/21517255) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Zhou_2009.pdf` | Zhou SF, Polymorphism of human cytochrome P450 2…, Clinical pharmacokinetics (2009) | pgx | 8 | [10.2165/11318070-000000000-00000](https://doi.org/10.2165/11318070-000000000-00000) | [19902987](https://www.ncbi.nlm.nih.gov/pubmed/19902987) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Janicki_2005.pdf` | Janicki PK, Cytochrome P450 2D6 metabolism and 5-hy…, Medical science monitor : i… (2005) | pgx | 5 | not captured | [16192915](https://www.ncbi.nlm.nih.gov/pubmed/16192915) | metadata signals extractable PGX data (CYP2D6) |
| `Janicki_2006.pdf` | Janicki PK et al., Prevention of postoperative nausea and…, Anesthesia and analgesia (2006) | pgx | 5 | [10.1213/01.ane.0000200364.55798.3f](https://doi.org/10.1213/01.ane.0000200364.55798.3f) | [16551910](https://www.ncbi.nlm.nih.gov/pubmed/16551910) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-09-11T02:33:32.616426+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aapro_2005 | irrelevant | 0 | 0 | The paper is a review of dosing issues for 5-HT3 receptor antagonists and does not report original quantitative pharmacokinetic parameters for dolasetron. |
| popPK | Akabane_2012 | irrelevant | 1 | 0 | The study is an in-vitro hepatocyte assay comparing intrinsic metabolic clearance (CLint) of dolasetron as one of 14 compounds, not a pharmacokinetic study reporting in vivo disposition parameters (CL, V, t1/2) or population PK models. |
| popPK | Bolton_2006 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of clinical efficacy (postoperative vomiting) and does not report pharmacokinetic parameters for dolasetron. |
| PD | Bolton_2006 | not_relevant | 2 | 1 | The paper is a meta-analysis reporting summary odds ratios for efficacy, not a pharmacodynamic model or dose-response curve with numeric PD parameters (e.g., Emax, EC50) for dolasetron. |
| PGx | Boušová_2015 | not_relevant | 0 | 0 | The paper reviews the modulation of CBR1 by polyphenols and mentions dolasetron as a substrate, but does not report any pharmacogenomic effects (gene variants) on PK/PD parameters. |
| PD | Boxenbaum_1992 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic parameters (half-life, clearance, AUC) and makes a qualitative statement about the metabolite's potential role in pharmacodynamic activity, but provides no numeric PD parameters or exposure-response data. |
| PD | Constenla_2004 | not_relevant | 1 | 0 | The paper is a narrative review of clinical efficacy and does not report specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or concentration-effect curves for dolasetron. |
| popPK | Coppes_1999 | relevant | 8 | 4 | The study reports pharmacokinetic parameters for dolasetron, but only qualitative descriptions (e.g., "approximately 6 hours") are provided in the text without specific numeric values for clearance or volume. |
| PD | Darpo_2015 | not_relevant | 0 | 0 | The paper focuses on QT safety assessment methodology and does not report pharmacodynamic or exposure-response parameters for dolasetron. |
| PD | Darpo_2018 | not_relevant | 0 | 0 | The paper discusses the J-Tpeak assessment in the context of the CiPA initiative and does not report any pharmacodynamic or exposure-response data for dolasetron. |
| popPK | Fauser_1996 | irrelevant | 0 | 0 | The study is a clinical efficacy trial comparing anti-emetic outcomes and does not report any pharmacokinetic parameters for dolasetron. |
| popPK | Felt_2024 | irrelevant | 0 | 0 | The paper is a structural biology study on 5-HT3A receptors and does not report pharmacokinetic parameters for dolasetron. |
| PD | Felt_2024 | not_relevant | 0 | 0 | The paper is a structural biology study (cryo-EM) of 5-HT3A receptors and does not report pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters for dolasetron. |
| popPK | Ferber_2017 | irrelevant | 0 | 0 | The provided evidence contains only the title of a paper regarding QT studies and bias evaluation, with no pharmacokinetic data or parameters for dolasetron. |
| PD | Ferber_2017 | not_relevant | 0 | 0 | The provided text is only the title of a paper regarding methodology for QT studies and does not contain the full text or any specific data, models, or numeric PD parameters for dolasetron. |
| popPK | Gan_2005 | irrelevant | 1 | 0 | The paper is a review discussing pharmacological profiles and mechanisms without reporting original quantitative pharmacokinetic parameter values for dolasetron. |
| popPK | Gilmore_2019 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of netupitant and palonosetron, and does not report any data for dolasetron. |
| PD | Gilmore_2019 | not_relevant | 0 | 0 | The paper focuses exclusively on the pharmacokinetic profiles of netupitant and palonosetron to support their combination; it does not report any pharmacodynamic, exposure-response, or dose-response data for dolasetron or any other drug. |
| popPK | Grote_1997 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety study reporting antiemetic response rates, not a pharmacokinetic study with quantitative disposition parameters. |
| PD | Hassan_2011 | not_relevant | 0 | 0 | The paper focuses on granisetron, not dolasetron, and does not report PD parameters for the target drug. |
| PGx | Hassan_2011 | not_relevant | 0 | 0 | The study investigates the pharmacogenomics of granisetron, not dolasetron. |
| PD | Herndon_2018 | not_relevant | 2 | 1 | The study reports PK parameters and qualitative PD outcomes (emetic events) but finds no significant difference from saline, providing no numeric PD parameters (e.g., EC50, Emax) or quantitative exposure-response relationship. |
| PGx | Ho_2006 | not_relevant | 2 | 0 | The text is a review summary that mentions pharmacogenetic factors (CYP450, ABCB1, 5-HT3) generally but does not report specific quantitative effects of a variant on dolasetron's PK or PD parameters. |
| PGx | Hsu_2010 | not_relevant | 0 | 0 | The paper is a general review of antiemetics that mentions dolasetron's metabolism via CYP2D6 but does not report specific pharmacogenomic effects on PK or PD parameters. |
| popPK | Hunt_1996 | irrelevant | 2 | 0 | The abstract mentions pharmacokinetics but provides no quantitative disposition parameters (CL, V, t1/2) for dolasetron, only qualitative statements about the metabolite. |
| PD | Hunt_1996 | not_relevant | 0 | 0 | The study is a Phase I PK/safety trial that explicitly states no dose-response relationship was apparent for adverse events and does not report any numeric PD parameters or concentration-effect analysis. |
| PGx | Janicki_2005 | not_relevant | 5 | 0 | The text is a qualitative review discussing the mechanism of CYP2D6 polymorphism affecting dolasetron efficacy, but it does not report specific quantitative PK/PD parameter changes or fitted effect sizes. |
| popPK | Kazemi-Kjellberg_2001 | irrelevant | 0 | 0 | The paper is a systematic review of clinical efficacy for treating postoperative nausea and vomiting, reporting no pharmacokinetic parameters (CL, V, etc.) for dolasetron. |
| PD | Kazemi-Kjellberg_2001 | not_relevant | 2 | 1 | The paper is a systematic review that qualitatively concludes there is "little evidence of dose-responsiveness" for dolasetron, providing no numeric PD parameters or extractable concentration-effect curves. |
| popPK | Komatsu_2019 | irrelevant | 1 | 0 | The study focuses on exposure-response analysis for QT prolongation in monkeys and does not report quantitative pharmacokinetic disposition parameters (CL, V, etc.) for dolasetron. |
| PGx | Li_2006 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (aprepitant) and reports no effect on hydrodolasetron PK, rather than a pharmacogenomic effect of a gene variant on the drug's parameters. |
| PGx | Moore_2026 | not_relevant | 2 | 0 | The paper explicitly states that data are insufficient to support recommendations or link CYP2D6 genotype with phenotypic variability for dolasetron, providing no quantitative PK/PD effect sizes for this specific drug. |
| popPK | Ouassaf_2026 | irrelevant | 0 | 0 | The paper describes a machine learning framework for predicting drug-drug interactions and does not report any pharmacokinetic parameters for dolasetron. |
| PD | Ouassaf_2026 | not_relevant | 0 | 0 | The paper describes a machine learning framework for classifying drug-drug interactions and does not report any pharmacodynamic data, exposure-response relationships, or numeric PD parameters for dolasetron. |
| popPK | Roila_1997 | irrelevant | 0 | 0 | The paper is a review of clinical efficacy and safety of 5-HT3 antagonists and does not report any quantitative pharmacokinetic parameters for dolasetron. |
| PD | Roila_1997 | not_relevant | 1 | 0 | The text is a qualitative review comparing clinical efficacy and safety, mentioning dose-response curves in general terms but providing no numeric PD parameters or extractable concentration-effect data for dolasetron. |
| popPK | Rubenstein_1997 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for antiemetic response and does not report any pharmacokinetic parameters for dolasetron. |
| PGx | Rubenstein_2006 | not_relevant | 0 | 0 | The paper is a general review of antiemetics and mentions pharmacogenomics as a future direction, but it does not report specific gene variants or their effects on dolasetron PK/PD parameters. |
| PD | Rüsch_2002 | not_relevant | 0 | 0 | The paper is a clinical trial comparing fixed-dose antiemetic regimens and reports only incidence rates of nausea/vomiting, without any concentration-effect analysis, dose-response modeling, or numeric PD parameters for dolasetron. |
| PGx | Sanwald_1996 | not_relevant | 0 | 0 | The paper characterizes in vitro CYP450 enzymes involved in dolasetron metabolism but does not report pharmacogenomic effects (gene variants) on PK/PD parameters. |
| PGx | Sanwald_1996_2 | not_relevant | 2 | 5 | The paper reports in vitro metabolic involvement of CYP2D6 but does not report a pharmacogenomic effect (genotype-based) on a specific PK or PD parameter in humans. |
| popPK | Schärfe_2017 | irrelevant | 0 | 0 | The paper is a pharmacogenomic study analyzing genetic variation in drug-related genes and does not report any pharmacokinetic parameters for dolasetron. |
| PD | Schärfe_2017 | not_relevant | 0 | 0 | The paper is a computational pharmacogenomics study analyzing genetic variants in drug targets; it does not report any pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for dolasetron or any other drug. |
| popPK | Stubbs_1997 | relevant | 9 | 4 | The study reports quantitative PK parameters for dolasetron, but specific numeric values for clearance and volume are largely absent, with only half-life values provided in the text. |
| popPK | Warriner_1997 | irrelevant | 0 | 0 | The paper is a clinical efficacy study for postoperative nausea and vomiting prevention and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Weibel_2020 | irrelevant | 0 | 0 | This is a network meta-analysis of clinical efficacy for postoperative nausea and vomiting, not a pharmacokinetic study, and it reports no disposition parameters for dolasetron. |
| PD | Weibel_2020 | not_relevant | 1 | 0 | The paper is a network meta-analysis comparing clinical efficacy (risk ratios) of antiemetics, including dolasetron, but it does not report pharmacokinetic data, concentration-effect relationships, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Zhou_2009 | irrelevant | 0 | 0 | The paper is a review of CYP2D6 polymorphisms and does not report original quantitative pharmacokinetic parameters for dolasetron. |
| PD | Zhou_2009 | not_relevant | 0 | 0 | The paper is a review of CYP2D6 polymorphisms and does not report specific pharmacodynamic or exposure-response data for dolasetron. |
| PGx | Zhou_2009 | not_relevant | 0 | 0 | The paper discusses CYP2D6 polymorphisms generally but does not report specific pharmacokinetic or pharmacodynamic effects for dolasetron. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_dolasetron`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
