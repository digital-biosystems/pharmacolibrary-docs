# oxymorphone

- **generic name:** oxymorphone
- **ATC codes:** `N02AA11`
- **DrugBank:** [DB01192](https://go.drugbank.com/drugs/DB01192)
- **groups:** approved, vet_approved

## About

**Description.** An opioid analgesic with actions and uses similar to those of morphine, apart from an absence of cough suppressant activity. It is used in the treatment of moderate to severe pain, including pain in obstetrics. It may also be used as an adjunct to anesthesia (From Martindale, The Extra Pharmacopoeia, 30th ed, p1092). On June 8, 2017, FDA requested Endo Pharmaceuticals to remove the medication from the market due to opioid misuse and abuse risks associated with the product's injectable reformulation.

**Indication.** For the treatment of moderate-to-severe pain.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-28 06:49 | 22:15 | 0/0/0 | 0/0/0 | 0/0/0 | 179,011/7,238 | ollama / qwen3.8:27b-mtp-q8_0 | 31 | 4/17 | 30/1 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">None</span> | [Sadiq_2013](drugs/drug_oxymorphone/Oxymorphone_Sadiq2013_bootstrap_resampling.md) | Sadiq MW et al., Oxymorphone active uptake at the blood-…, Journal of pharmaceutical s… (2013) | [10.1002/jps.23492](https://doi.org/10.1002/jps.23492) |
| <span class="pk-badge pk-badge--neutral">not_reviewed</span> | [Sadiq_2013](drugs/drug_oxymorphone/Oxymorphone_Sadiq2013_bootstrap_resampling_male_sprague_dawl.md) | Sadiq MW et al., Oxymorphone active uptake at the blood-…, Journal of pharmaceutical s… (2013) | [10.1002/jps.23492](https://doi.org/10.1002/jps.23492) |
| <span class="pk-badge pk-badge--neutral">None</span> | [Sadiq_2013](drugs/drug_oxymorphone/Oxymorphone_Sadiq2013_original_data_set.md) | Sadiq MW et al., Oxymorphone active uptake at the blood-…, Journal of pharmaceutical s… (2013) | [10.1002/jps.23492](https://doi.org/10.1002/jps.23492) |
| <span class="pk-badge pk-badge--neutral">not_reviewed</span> | [Sadiq_2013](drugs/drug_oxymorphone/Oxymorphone_Sadiq2013_original_data_set_male_sprague_dawley.md) | Sadiq MW et al., Oxymorphone active uptake at the blood-…, Journal of pharmaceutical s… (2013) | [10.1002/jps.23492](https://doi.org/10.1002/jps.23492) |

## Coverage

- **PubMed hits:** 220 matched, 102 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 4  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_12 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Schoedel_2010.pdf` | Schoedel KA et al., Reduced cognitive and psychomotor impai…, Pain physician (2010) | pd | 4 | not captured | [21102969](https://www.ncbi.nlm.nih.gov/pubmed/21102969) | metadata signals extractable PD data (Emax) |
| `Heiskanen_1998.pdf` | Heiskanen T et al., Effects of blocking CYP2D6 on the pharm…, Clinical pharmacology and t… (1998) | pgx | 8 | [10.1016/S0009-9236(98)90051-0](https://doi.org/10.1016/S0009-9236(98)90051-0) | [9871425](https://www.ncbi.nlm.nih.gov/pubmed/9871425) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Kummer_2011.pdf` | Kummer O et al., Effect of the inhibition of CYP3A4 or C…, European journal of clinica… (2011) | pgx | 8 | [10.1007/s00228-010-0893-3](https://doi.org/10.1007/s00228-010-0893-3) | [20857093](https://www.ncbi.nlm.nih.gov/pubmed/20857093) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Söderberg_2013.pdf` | Söderberg Löfdal KC et al., Cytochrome P450-mediated changes in oxy…, Drugs (2013) | pgx | 8 | [10.1007/s40265-013-0036-0](https://doi.org/10.1007/s40265-013-0036-0) | [23605691](https://www.ncbi.nlm.nih.gov/pubmed/23605691) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Lalovic_2004.pdf` | Lalovic B et al., Quantitative contribution of CYP2D6 and…, Drug metabolism and disposi… (2004) | pgx | 7 | [10.1124/dmd.32.4.447](https://doi.org/10.1124/dmd.32.4.447) | [15039299](https://www.ncbi.nlm.nih.gov/pubmed/15039299) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Lalovic_2006.pdf` | Lalovic B et al., Pharmacokinetics and pharmacodynamics o…, Clinical pharmacology and t… (2006) | pgx | 7 | [10.1016/j.clpt.2006.01.009](https://doi.org/10.1016/j.clpt.2006.01.009) | [16678548](https://www.ncbi.nlm.nih.gov/pubmed/16678548) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Overholser_2011.pdf` | Overholser BR et al., Opioid pharmacokinetic drug-drug intera…, The American journal of man… (2011) | pgx | 7 | not captured | [21999760](https://www.ncbi.nlm.nih.gov/pubmed/21999760) | metadata signals extractable PGX data (CYP450, PK/PD-context) |
| `Rytkönen_2020.pdf` | Rytkönen J et al., Physiologically based pharmacokinetic m…, Biopharmaceutics & drug dis… (2020) | pgx | 7 | [10.1002/bdd.2215](https://doi.org/10.1002/bdd.2215) | [31925778](https://www.ncbi.nlm.nih.gov/pubmed/31925778) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Saari_2010.pdf` | Saari TI et al., Effects of itraconazole on the pharmaco…, European journal of clinica… (2010) | pgx | 7 | [10.1007/s00228-009-0775-8](https://doi.org/10.1007/s00228-009-0775-8) | [20076952](https://www.ncbi.nlm.nih.gov/pubmed/20076952) | metadata signals extractable PGX data (CYP34A, PK/PD-context) |
| `Madadi_2012.pdf` | Madadi P et al., Pharmacogenetics of opioids for the tre…, Current drug metabolism (2012) | pgx | 5 | [10.2174/138920012800840392](https://doi.org/10.2174/138920012800840392) | [22452458](https://www.ncbi.nlm.nih.gov/pubmed/22452458) | metadata signals extractable PGX data (CYP2D6) |
| `Merchant_2022.pdf` | Merchant S et al., Association of CYP2D6 genotype predicte…, Annals of translational med… (2022) | pgx | 5 | [10.21037/atm-2022-58](https://doi.org/10.21037/atm-2022-58) | [36618804](https://www.ncbi.nlm.nih.gov/pubmed/36618804) | metadata signals extractable PGX data (CYP2D6) |
| `Otton_1993.pdf` | Otton SV et al., Inhibition by fluoxetine of cytochrome…, Clinical pharmacology and t… (1993) | pgx | 5 | [10.1038/clpt.1993.43](https://doi.org/10.1038/clpt.1993.43) | [8477556](https://www.ncbi.nlm.nih.gov/pubmed/8477556) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-08-28T06:45:42.407207+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agema_2021 | irrelevant | 1 | 0 | The study focuses on oxycodone and its metabolites, and oxymorphone was explicitly excluded from the final pharmacokinetic model due to insufficient data (high BLQ rates), so no quantitative parameters for oxymorphone are reported. |
| popPK | Ahmadi_2025 | irrelevant | 0 | 0 | The paper is a computational study on dengue virus inhibitors and does not involve oxymorphone or report any pharmacokinetic parameters for it. |
| popPK | Chen_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of S-atenolol in rats, and oxymorphone is only mentioned as a reference for a previously developed model. |
| popPK | Gebrin_2025 | irrelevant | 0 | 0 | The paper is a meta-analysis of tranexamic acid in traumatic brain injury and does not contain any pharmacokinetic data for oxymorphone. |
| popPK | Ing_2012 | irrelevant | 1 | 0 | This is a review article that mentions oxymorphone only as an active metabolite of oxycodone contributing to analgesia, without reporting any original quantitative pharmacokinetic parameters for oxymorphone itself. |
| popPK | Israni_2026 | irrelevant | 0 | 0 | The paper is a review on bioactive anti-inflammatory compounds and does not mention oxymorphone or report any pharmacokinetic parameters for it. |
| popPK | Laffont_2022 | irrelevant | 0 | 0 | The study focuses on buprenorphine pharmacokinetics and exposure-response in opioid use disorder, with oxymorphone mentioned only as a metabolite in urine drug screening confirmatory tests. |
| popPK | Li_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of oxycodone, and oxymorphone is only mentioned as a metabolite without any quantitative PK parameters reported for it. |
| popPK | Muir_2026 | irrelevant | 0 | 0 | The paper is a review of fluid dynamics and hemodynamics in veterinary medicine and does not contain any pharmacokinetic data for oxymorphone. |
| popPK | Noh_2017 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for 7-O-Succinyl Macrolactin A (SMA), not oxymorphone. |
| popPK | Piirainen_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of oxycodone, and oxymorphone is only mentioned as a measured metabolite without specific PK parameter estimation. |
| popPK | Schmith_2019 | irrelevant | 0 | 0 | The study focuses on the QT interval effects of buprenorphine, and oxymorphone is only mentioned as a potential covariate in the statistical model, with no pharmacokinetic parameters reported for it. |
| popPK | Svensson_2017 | irrelevant | 0 | 0 | The paper is a simulation study for hypothetical anti-TB drugs (A-D) and does not report pharmacokinetic parameters for oxymorphone. |
| popPK | Toyama_2017 | irrelevant | 0 | 0 | The study focuses on oxycodone bioequivalence, and oxymorphone is only mentioned as a metabolite without any quantitative PK parameters reported for it. |
| popPK | Valtola_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of oxycodone, and oxymorphone is only mentioned as a metabolite detected in low concentrations without any reported quantitative PK parameters. |
| popPK | Vats_2025 | irrelevant | 0 | 0 | The paper is a review of the medicinal plant Tecomella undulata and does not contain any pharmacokinetic data for oxymorphone. |
| popPK | Wei_2025 | irrelevant | 0 | 0 | The paper is a retrospective cohort study on clinical outcomes of drug interactions, not a pharmacokinetic study, and does not report any PK parameters for oxymorphone. |
| popPK | Zaidi_2026 | irrelevant | 0 | 0 | The paper is a systematic review of opioid PK models in pregnancy that does not include oxymorphone as a subject drug, reporting no quantitative PK parameters for it. |
| popPK | Zeitlinger_2021 | irrelevant | 0 | 0 | The study focuses on oxycodone pharmacokinetics, and oxymorphone is only mentioned as a metabolite that could not be modeled due to low concentrations, with no quantitative parameters reported for it. |
| popPK | Zádor_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacological properties (affinity, potency, efficacy) of a novel compound (14-O-methylmorphine) and does not report pharmacokinetic parameters for oxymorphone. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_oxymorphone`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
