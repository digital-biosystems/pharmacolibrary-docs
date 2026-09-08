# pethidine

- **generic name:** pethidine
- **ATC codes:** `N02AB02`, `N02AG03`
- **DrugBank:** [DB00454](https://go.drugbank.com/drugs/DB00454)
- **groups:** approved, investigational

## About

**Description.** A narcotic analgesic that can be used for the relief of most types of moderate to severe pain, including postoperative pain and the pain of labor. Prolonged use may lead to dependence of the morphine type; withdrawal symptoms appear more rapidly than with morphine and are of shorter duration.

**Indication.** Used to control moderate to severe pain.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-28 08:51 | 38:30 | 0/0/0 | 0/0/0 | 0/0/1 | 196,777/3,132 | ollama / qwen3.8:27b-mtp-q8_0 | 28 | 10/18 | 27/1 | 0 |

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2C19** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Baykara_2026](drugs/drug_pethidine/pgx_Baykara_2026_CYP2C19_Q100.md) | Baykara Sayili S et al., Association between CYP2C19 gene polymo…, BMC urology (2026) | [10.1186/s12894-026-02217-y](https://doi.org/10.1186/s12894-026-02217-y) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 223 matched, 125 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_18 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Choi_1988.pdf` | Choi DW et al., Opioids and non-opioid enantiomers sele…, European journal of pharmac… (1988) | pd | 5 | [10.1016/0014-2999(88)90399-8](https://doi.org/10.1016/0014-2999(88)90399-8) | [3072212](https://www.ncbi.nlm.nih.gov/pubmed/3072212) | metadata signals extractable PD data (EC50) |
| `Kalvass_2007.pdf` | Kalvass JC et al., Pharmacokinetics and pharmacodynamics o…, The Journal of pharmacology… (2007) | pd | 5 | [10.1124/jpet.107.119560](https://doi.org/10.1124/jpet.107.119560) | [17646430](https://www.ncbi.nlm.nih.gov/pubmed/17646430) | metadata signals extractable PD data (EC50) |
| `Qiao_1993.pdf` | Qiao GL et al., Pharmacokinetic-pharmacodynamic modelli…, Journal of veterinary pharm… (1993) | pd | 5 | [10.1111/j.1365-2885.1993.tb00208.x](https://doi.org/10.1111/j.1365-2885.1993.tb00208.x) | [8126759](https://www.ncbi.nlm.nih.gov/pubmed/8126759) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Qiao_1994.pdf` | Qiao GL et al., Pharmacokinetic-pharmacodynamic modelli…, Journal of veterinary pharm… (1994) | pd | 5 | [10.1111/j.1365-2885.1994.tb00222.x](https://doi.org/10.1111/j.1365-2885.1994.tb00222.x) | [8040932](https://www.ncbi.nlm.nih.gov/pubmed/8040932) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Shafer_1988.pdf` | Shafer A et al., Pharmacokinetics and pharmacodynamics o…, Anesthesiology (1988) | pd | 5 | [10.1097/00000542-198809000-00011](https://doi.org/10.1097/00000542-198809000-00011) | [3261954](https://www.ncbi.nlm.nih.gov/pubmed/3261954) | metadata signals extractable PD data (EC50) |
| `Uccellini_1986.pdf` | Uccellini DA et al., Influence of intravenous infusion durat…, Journal of pharmacokinetics… (1986) | pd | 5 | [10.1007/BF01106710](https://doi.org/10.1007/BF01106710) | [3783449](https://www.ncbi.nlm.nih.gov/pubmed/3783449) | metadata signals extractable PD data (effectcompartment) |
| `White_2008.pdf` | White PF, Propofol: its role in changing the prac…, Anesthesiology (2008) | pd | 5 | [10.1097/ALN.0b013e31818ddba8](https://doi.org/10.1097/ALN.0b013e31818ddba8) | [19034110](https://www.ncbi.nlm.nih.gov/pubmed/19034110) | metadata signals extractable PD data (EC50) |
| `Alt_1998.pdf` | Alt A et al., Stimulation of guanosine-5'-O-(3-[35S]t…, The Journal of pharmacology… (1998) | pd | 4 | not captured | [9655870](https://www.ncbi.nlm.nih.gov/pubmed/9655870) | metadata signals extractable PD data (EC50) |
| `Austin_1980.pdf` | Austin KL et al., Relationship between blood meperidine c…, Anesthesiology (1980) | pd | 4 | [10.1097/00000542-198012000-00005](https://doi.org/10.1097/00000542-198012000-00005) | [7457961](https://www.ncbi.nlm.nih.gov/pubmed/7457961) | metadata signals extractable PD data (concentration-effect) |
| `Baldessarini_1986.pdf` | Baldessarini RJ et al., Synthetic analgesics and other phenylpi…, Life sciences (1986) | pd | 4 | [10.1016/0024-3205(86)90096-2](https://doi.org/10.1016/0024-3205(86)90096-2) | [3490612](https://www.ncbi.nlm.nih.gov/pubmed/3490612) | metadata signals extractable PD data (IC50) |
| `Barann_2015.pdf` | Barann M et al., Effects of opioids on human serotonin t…, Naunyn-Schmiedeberg's archi… (2015) | pd | 4 | [10.1007/s00210-014-1056-3](https://doi.org/10.1007/s00210-014-1056-3) | [25332055](https://www.ncbi.nlm.nih.gov/pubmed/25332055) | metadata signals extractable PD data (IC50) |
| `Turan_2005.pdf` | Turan M et al., In vitro effects of intravenous anesthe…, Pancreatology : official jo… (2005) | pd | 4 | [10.1159/000085274](https://doi.org/10.1159/000085274) | [15855818](https://www.ncbi.nlm.nih.gov/pubmed/15855818) | metadata signals extractable PD data (Emax) |
| `Wu_1994.pdf` | Wu C et al., Interaction between ethanol and opioids…, Human & experimental toxico… (1994) | pd | 4 | [10.1177/096032719401300301](https://doi.org/10.1177/096032719401300301) | [7909674](https://www.ncbi.nlm.nih.gov/pubmed/7909674) | metadata signals extractable PD data (EC50) |
| `Grond_2004.pdf` | Grond S et al., Clinical pharmacology of tramadol, Clinical pharmacokinetics (2004) | pgx | 8 | [10.2165/00003088-200443130-00004](https://doi.org/10.2165/00003088-200443130-00004) | [15509185](https://www.ncbi.nlm.nih.gov/pubmed/15509185) | metadata signals extractable PGX data (CYP2B6, PK/PD-context) |
| `Armstrong_2009.pdf` | Armstrong SC et al., Pharmacokinetic drug interactions of sy…, Psychosomatics (2009) | pgx | 7 | [10.1176/appi.psy.50.2.169](https://doi.org/10.1176/appi.psy.50.2.169) | [19377028](https://www.ncbi.nlm.nih.gov/pubmed/19377028) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Hassan_2009.pdf` | Hassan HE et al., Differential involvement of P-glycoprot…, Journal of pharmaceutical s… (2009) | pgx | 7 | [10.1002/jps.21770](https://doi.org/10.1002/jps.21770) | [19370547](https://www.ncbi.nlm.nih.gov/pubmed/19370547) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Ramírez_2004.pdf` | Ramírez J et al., CYP2B6, CYP3A4, and CYP2C19 are respons…, Drug metabolism and disposi… (2004) | pgx | 7 | not captured | [15319333](https://www.ncbi.nlm.nih.gov/pubmed/15319333) | metadata signals extractable PGX data (CYP2B6, PK/PD-context) |
| `Turpeinen_2006.pdf` | Turpeinen M et al., The functional role of CYP2B6 in human…, Current drug metabolism (2006) | pgx | 5 | [10.2174/138920006778520633](https://doi.org/10.2174/138920006778520633) | [17073575](https://www.ncbi.nlm.nih.gov/pubmed/17073575) | metadata signals extractable PGX data (CYP2B6) |

<sub>queue written 2026-08-28T08:43:21.084811+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agyemang_2025 | irrelevant | 0 | 0 | The paper is a systematic review of diclofenac suppositories for pain management, and pethidine is only mentioned as a comparator opioid without any pharmacokinetic data. |
| PD | Agyemang_2025 | not_relevant | 0 | 0 | The paper is a systematic review of diclofenac suppositories and does not report any pharmacodynamic or exposure-response analysis for pethidine. |
| PGx | Bonnet_2003 | not_relevant | 0 | 0 | The paper is a review of moclobemide's clinical efficacy and safety, and does not discuss pethidine or any pharmacogenomic effects on PK/PD parameters. |
| popPK | Boom_2010 | irrelevant | 0 | 0 | The study focuses on the chronopharmacology of fentanyl, not pethidine, and does not report pharmacokinetic parameters for pethidine. |
| PD | Boom_2010 | not_relevant | 0 | 0 | The paper studies fentanyl, not pethidine, and reports a chronopharmacological (time-of-day) effect rather than a concentration- or dose-response relationship. |
| popPK | Cantin_2024 | irrelevant | 0 | 0 | The study is a retrospective cohort examining neonatal withdrawal symptoms in SSRI-exposed newborns and does not report pharmacokinetic parameters for pethidine. |
| PD | Cantin_2024 | not_relevant | 0 | 0 | The study is a retrospective cohort analysis of SSRI-exposed neonates examining feeding methods; it does not involve pethidine or report any pharmacodynamic or exposure-response relationships. |
| PGx | Cottrill_2021 | not_relevant | 0 | 0 | The paper reports genotype/phenotype classifications for drug-metabolizing enzymes but does not measure or report specific pharmacokinetic or pharmacodynamic parameter values (e.g., AUC, Cmax, pain scores) for pethidine. |
| PGx | Elbaridi_2017 | not_relevant | 0 | 0 | The paper is a general review of phenylpiperidine opioids (focusing on fentanyl) and does not report pharmacogenomic effects on pethidine PK/PD parameters. |
| popPK | Erthal-Williamson_2022 | irrelevant | 0 | 0 | The paper is an epidemiological study analyzing pharmaceutical opioid consumption trends (S-DDD) in the Eastern Mediterranean Region, not a pharmacokinetic study, and contains no PK parameters for pethidine. |
| popPK | Groll_2019 | irrelevant | 0 | 0 | The paper is a review of liposomal amphotericin B pharmacokinetics and does not report quantitative PK parameters for pethidine. |
| PD | Groll_2019 | not_relevant | 1 | 0 | The paper is a review of liposomal amphotericin B, not pethidine, and does not report specific numeric PD parameters for the queried drug. |
| PGx | Hedrich_2016 | not_relevant | 0 | 0 | The paper is a review of CYP2B6-mediated drug-drug interactions and mentions pethidine only as a substrate, without reporting specific pharmacogenomic effects on its PK/PD parameters. |
| PGx | Hendrickson_2012 | not_relevant | 0 | 0 | The paper is a review of opioid transfer into breast milk and does not report specific pharmacogenomic effects on pethidine PK/PD parameters. |
| popPK | Hernández-Gago_2026 | irrelevant | 0 | 0 | The paper is a systematic review of dosing strategies for high-alert medications in obese pediatric patients and does not report any pharmacokinetic parameters for pethidine. |
| PD | Hernández-Gago_2026 | not_relevant | 0 | 0 | The paper is a systematic review of dosing strategies and PK in obese pediatric patients; it does not report specific PD parameters or exposure-response relationships for pethidine. |
| popPK | Higgins_1996 | irrelevant | 0 | 0 | The paper is a mechanistic study of mitochondrial complex I binding using meperidine (pethidine) only as a competitive inhibitor, not a pharmacokinetic study of pethidine disposition. |
| PD | Higgins_1996 | not_relevant | 0 | 0 | The paper describes in vitro radioligand binding assays (competition for [3H]DHR sites) and does not report pharmacokinetic or pharmacodynamic exposure-response relationships for pethidine in a physiological context. |
| popPK | Kendzerska_2023 | irrelevant | 0 | 0 | The paper is a retrospective epidemiological study on opioid prescription patterns and adverse outcomes, not a pharmacokinetic study, and does not report any PK parameters for pethidine. |
| PD | Kendzerska_2023 | not_relevant | 0 | 0 | The study is a retrospective administrative data analysis examining the association between opioid prescription characteristics (e.g., dose, type) and clinical outcomes (mortality, hospitalization) using hazard ratios; it does not report pharmacokinetic data, drug concentrations, or a pharmacodynamic exposure-response model. |
| popPK | La_1984 | irrelevant | 2 | 1 | The study focuses on in-vitro equilibrium dialysis for drug binding (unbound fraction and blood/plasma ratio) rather than reporting quantitative pharmacokinetic disposition parameters like clearance, volume, or half-life for pethidine. |
| PGx | Lee_1997 | not_relevant | 2 | 0 | The paper is a review discussing ethnic differences in opioid response; it mentions pethidine PK differences but explicitly states no genetic polymorphism was found for pethidine metabolism, and it does not report specific pharmacogenomic effects (gene variant -&gt; PK/PD change) for pethidine. |
| popPK | Mahmood_2020 | irrelevant | 2 | 0 | Pethidine (meperidine) is one of ten drugs used as a dataset for model validation, not the primary subject, and specific numeric PK parameters for it are not present in the provided text. |
| PD | Mahmood_2020 | not_relevant | 0 | 0 | The paper focuses on pharmacokinetic (clearance) maturation and allometric scaling models, not pharmacodynamic (exposure-response or dose-response) relationships. |
| PD | Mather_1987 | not_relevant | 2 | 1 | The text is a review discussing general principles of opioid pharmacokinetics and structure-activity relationships; it provides in vitro receptor binding affinities (IC50) and general PK parameters but does not report an in vivo exposure-response or dose-response analysis with numeric PD parameters (e.g., Emax, EC50) for pethidine. |
| popPK | Morse_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of acetaminophen and ibuprofen, not pethidine. |
| PD | Morse_2022 | not_relevant | 0 | 0 | The paper focuses on acetaminophen and ibuprofen, not pethidine, and does not report PD parameters for pethidine. |
| popPK | Percie_2020 | irrelevant | 0 | 0 | The paper is a methodological guide for reporting animal research (ARRIVE guidelines) and does not contain any pharmacokinetic data or parameters for pethidine. |
| PD | Percie_2020 | not_relevant | 0 | 0 | The paper is a methodological guide (ARRIVE 2.0) for reporting animal research and does not contain any pharmacodynamic data, models, or parameters for pethidine. |
| popPK | Reis_2023 | irrelevant | 0 | 0 | The paper is a systematic review of nirmatrelvir/ritonavir for COVID-19 and does not contain any pharmacokinetic data for pethidine. |
| PD | Reis_2023 | not_relevant | 0 | 0 | The paper is a systematic review of clinical efficacy and safety for nirmatrelvir/ritonavir and does not report any pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters for pethidine. |
| popPK | Rouaz_2021 | irrelevant | 0 | 0 | The paper is a review of excipients in paediatric formulations and does not report pharmacokinetic parameters for pethidine. |
| PD | Rouaz_2021 | not_relevant | 0 | 0 | The paper is a review of excipients in paediatric formulations and does not contain any pharmacodynamic or exposure-response analysis for pethidine. |
| popPK | Rudiman_2023 | irrelevant | 0 | 0 | The paper is a systematic review of topical sucralfate for wound healing where pethidine is only a comparator analgesic, and it reports no pharmacokinetic parameters for pethidine. |
| PD | Rudiman_2023 | not_relevant | 0 | 0 | The paper is a systematic review and meta-analysis of topical sucralfate, reporting clinical outcomes (VAS, wound healing) and rescue analgesic usage, but it does not contain any pharmacokinetic or pharmacodynamic modeling, concentration-effect data, or numeric PD parameters for pethidine. |
| popPK | Somogyi-Végh_2019 | irrelevant | 0 | 0 | The paper is a retrospective analysis of drug-drug interaction prevalence in pharmacy dispensing data and does not report any pharmacokinetic parameters for pethidine. |
| PD | Somogyi-Végh_2019 | not_relevant | 0 | 0 | The paper is a retrospective analysis of drug dispensing data to estimate the prevalence of drug-drug interactions; it contains no pharmacokinetic or pharmacodynamic modeling, concentration-effect data, or numeric PD parameters for pethidine. |
| popPK | Vogel_2024 | irrelevant | 0 | 0 | The paper is a wastewater-based epidemiology study analyzing environmental concentrations of drugs, not a pharmacokinetic study reporting disposition parameters for pethidine. |
| PD | Vogel_2024 | not_relevant | 0 | 0 | The paper focuses on wastewater-based epidemiology and analytical method validation for substance detection, containing no pharmacodynamic or exposure-response modeling for pethidine. |
| PGx | Xie_2020 | not_relevant | 0 | 0 | The study reports associations between gene variants and pain intensity or total opioid consumption (OME), but does not report specific pharmacokinetic or pharmacodynamic parameters for pethidine. |
| PD | Zhang_2014 | not_relevant | 3 | 2 | The study reports PK parameters and qualitative PD effects (latency) at a single dose, but does not provide a concentration-effect curve, dose-response data, or numeric PD parameters (Emax, EC50) for pethidine. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_pethidine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
