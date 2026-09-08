# tilidine

- **generic name:** tilidine
- **ATC codes:** `N02AX01`, `N02AX51`
- **DrugBank:** [DB13787](https://go.drugbank.com/drugs/DB13787)
- **groups:** investigational

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-28 09:55 | 24:12 | 0/0/0 | 0/1/0 | 0/0/1 | 173,246/4,203 | ollama / qwen3.8:27b-mtp-q8_0 | 24 | 12/12 | 23/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Bryant_1982](drugs/drug_tilidine/pd_Bryant_1982_unknown.md) | Bryant RM et al., Involvement of the median raphe nucleus…, British journal of pharmaco… (1982) | [10.1111/j.1476-5381.1982.tb09339.x](https://doi.org/10.1111/j.1476-5381.1982.tb09339.x) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2C19** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | formation | [Grün_2012](drugs/drug_tilidine/pgx_Gr_n_2012_CYP2C19_Q100.md) | Grün B et al., Contribution of CYP2C19 and CYP3A4 to t…, British journal of clinical… (2012) | [10.1111/j.1365-2125.2012.04261.x](https://doi.org/10.1111/j.1365-2125.2012.04261.x) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 172 matched, 58 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Eichbaum_2015.pdf` | Eichbaum C et al., Pre-systemic elimination of tilidine: l…, Basic & clinical pharmacolo… (2015) | pgx | 7 | [10.1111/bcpt.12328](https://doi.org/10.1111/bcpt.12328) | [25223231](https://www.ncbi.nlm.nih.gov/pubmed/25223231) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Weiss_2008.pdf` | Weiss J et al., In vitro metabolism of the opioid tilid…, Naunyn-Schmiedeberg's archi… (2008) | pgx | 7 | [10.1007/s00210-008-0294-7](https://doi.org/10.1007/s00210-008-0294-7) | [18516595](https://www.ncbi.nlm.nih.gov/pubmed/18516595) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Wustrow_2012.pdf` | Wustrow I et al., In vitro identification of the cytochro…, Naunyn-Schmiedeberg's archi… (2012) | pgx | 7 | [10.1007/s00210-012-0737-z](https://doi.org/10.1007/s00210-012-0737-z) | [22349139](https://www.ncbi.nlm.nih.gov/pubmed/22349139) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |

<sub>queue written 2026-08-28T09:52:14.367318+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baradaran_2025 | irrelevant | 0 | 0 | The paper describes an optical coherence tomography imaging system and contains no pharmacokinetic data or information regarding tilidine. |
| popPK | Chiappini_2021 | irrelevant | 0 | 0 | The paper is a cross-sectional epidemiological study on opioid dependence prevalence in the elderly and does not report any pharmacokinetic parameters for tilidine. |
| popPK | Chue-Sang_2019 | irrelevant | 0 | 0 | The paper is a review of optical phantoms for biomedical polarimetry and does not contain any pharmacokinetic data or parameters for tilidine. |
| popPK | Cook_1988 | irrelevant | 0 | 0 | The paper is a neurophysiology study on fetal lambs investigating evoked potentials and does not involve tilidine or pharmacokinetic parameters. |
| popPK | Cottrill_2021 | irrelevant | 0 | 0 | The paper is a pharmacogenomics dataset describing gene variants and metabolic phenotypes, not a pharmacokinetic study reporting quantitative disposition parameters for tilidine. |
| PGx | Cottrill_2021 | not_relevant | 0 | 0 | The paper reports genotype/phenotype profiling for drug metabolism but does not measure or report specific pharmacokinetic or pharmacodynamic parameter changes for tilidine. |
| popPK | Feng_2017 | irrelevant | 1 | 0 | The paper is a narrative review of opioid drug interactions that mentions tilidine only as a drug involved in interactions with antimycotics and protease inhibitors, without reporting original quantitative PK parameters for tilidine. |
| popPK | GIESE_1961 | irrelevant | 0 | 0 | The paper is a study on the regeneration of the protozoan Blepharisma undulans and contains no information regarding the drug tilidine or pharmacokinetic parameters. |
| popPK | Gailevičius_2020 | irrelevant | 0 | 0 | The paper is a materials science study on the optical birefringence of black silicon surfaces and contains no pharmacokinetic data for tilidine. |
| popPK | Giorgetti_2024 | irrelevant | 0 | 0 | The paper is a forensic case report on novel synthetic opioids (U-47700, MeACF) where tilidine is only a co-administered drug without specific PK parameter reporting. |
| PGx | Grün_2009 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (voriconazole) rather than a pharmacogenomic effect (gene variant/genotype). |
| popPK | Hristova_2024 | irrelevant | 0 | 0 | The paper is a theoretical optics study on polarization retarders and contains no pharmacokinetic data or mention of tilidine. |
| popPK | Jobski_2024 | irrelevant | 0 | 0 | The paper is a clinical cohort study analyzing pain medication regimens and utilization patterns, not a pharmacokinetic study, and contains no PK parameters for tilidine. |
| popPK | Kleine-Borgmann_2021 | irrelevant | 0 | 0 | The study is a pharmacodynamic analysis of analgesic efficacy and safety in a cold pressor test, reporting no pharmacokinetic parameters (e.g., clearance, volume, half-life) for tilidine. |
| popPK | Lien_2022 | irrelevant | 0 | 0 | The paper is a biophotonics study on collagen glycation and birefringence, containing no pharmacokinetic data or mention of tilidine. |
| popPK | Lötsch_2005 | irrelevant | 1 | 0 | The paper is a review of opioid metabolism and pharmacodynamics, not a pharmacokinetic study, and it only mentions tilidine's bioavailability without providing quantitative disposition parameters like clearance or volume. |
| popPK | Naoumkina_2024 | irrelevant | 0 | 0 | The paper is a review on naturally colored cotton and textile applications, containing no pharmacokinetic data for tilidine. |
| popPK | Oldenbourg_1998 | irrelevant | 0 | 0 | The paper describes birefringence measurements of microtubules using polarized light microscopy and contains no pharmacokinetic data for tilidine. |
| popPK | Richards_2022 | irrelevant | 0 | 0 | The paper is a global epidemiological study of opioid consumption rates and does not report any pharmacokinetic parameters for tilidine. |
| popPK | Shah_2016 | irrelevant | 0 | 0 | The paper is a review on low protein diet management in chronic kidney disease and does not contain any pharmacokinetic data or parameters for tilidine. |
| popPK | Sommer_2024 | irrelevant | 0 | 0 | The paper is a pharmacovigilance study analyzing adverse drug reactions using regression models, not a pharmacokinetic study, and contains no PK parameters for tilidine. |
| PD | Sommer_2024 | not_relevant | 0 | 0 | The paper analyzes adverse drug reactions using regression models on polypharmacy data and does not report any pharmacodynamic (exposure-response or dose-response) parameters for tilidine. |
| popPK | Wörz_1984 | irrelevant | 0 | 0 | The paper discusses morphine therapy for cancer pain and does not contain any pharmacokinetic data or parameters for tilidine. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The paper describes a microscopy imaging technique (GROM) and contains no pharmacokinetic data or information regarding the drug tilidine. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_tilidine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
