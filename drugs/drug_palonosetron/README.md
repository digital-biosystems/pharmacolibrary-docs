# palonosetron

- **generic name:** palonosetron
- **ATC codes:** `A04AA05`
- **DrugBank:** [DB00377](https://go.drugbank.com/drugs/DB00377)
- **groups:** approved, investigational

## About

**Description.** Palonosetron (INN, trade name Aloxi) is an antagonist of 5-HT3 receptors that is indicated for the prevention and treatment of chemotherapy-induced nausea and vomiting (CINV). It is the most effective of the 5-HT3 antagonists in controlling delayed CINV nausea and vomiting that appear more than 24 hours after the first dose of a course of chemotherapy and is the only drug of its class approved for this use by the U.S. Food and Drug Administration. As of 2008, it is the most recent 5-HT3 antagonist to enter clinical use.

**Indication.** For the prevention of acute and delayed nausea and vomiting associated with initial and repeat courses of moderately emetogenic cancer chemotherapy, as well as prevention of acute nausea and vomiting associated with highly emetogenic cancer chemotherapy. Also used for the prevention of postoperative nausea and vomiting for up to 24 hours post operation.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-11 03:28 | 9:59 | 0/4/0 | 0/0/1 | 0/0/3 | 113,602/5,146 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 0/1 | 9/1 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Lee_2019](drugs/drug_palonosetron/Palonosetron_Lee2019_reference.md) | Lee S et al., Population pharmacokinetics of palonose…, Journal of anesthesia (2019) | [10.1007/s00540-019-02641-5](https://doi.org/10.1007/s00540-019-02641-5) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Li_2026](drugs/drug_palonosetron/Palonosetron_Li2026_healthy_control.md) | Li Q et al., Pharmacokinetics, safety, and populatio…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1833170](https://doi.org/10.3389/fphar.2026.1833170) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Li_2026](drugs/drug_palonosetron/Palonosetron_Li2026_healthy_control_chinese_subjects_with_im.md) | Li Q et al., Pharmacokinetics, safety, and populatio…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1833170](https://doi.org/10.3389/fphar.2026.1833170) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Li_2026](drugs/drug_palonosetron/Palonosetron_Li2026_moderate_hepatic_impairment.md) | Li Q et al., Pharmacokinetics, safety, and populatio…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1833170](https://doi.org/10.3389/fphar.2026.1833170) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Li_2026](drugs/drug_palonosetron/Palonosetron_Li2026_moderate_hepatic_impairment_chinese_subj.md) | Li Q et al., Pharmacokinetics, safety, and populatio…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1833170](https://doi.org/10.3389/fphar.2026.1833170) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Li_2026](drugs/drug_palonosetron/Palonosetron_Li2026_palonosetron.md) | Li Q et al., Pharmacokinetics, safety, and populatio…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1833170](https://doi.org/10.3389/fphar.2026.1833170) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Li_2026](drugs/drug_palonosetron/Palonosetron_Li2026_palonosetron_chinese_subjects_with_impai.md) | Li Q et al., Pharmacokinetics, safety, and populatio…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1833170](https://doi.org/10.3389/fphar.2026.1833170) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gil_2021](drugs/drug_palonosetron/pd_Gil_2021_EC50.md) | Gil HY et al., Impact of Palonosetron on Cough Suppres…, Journal of personalized med… (2021) | [10.3390/jpm11090887](https://doi.org/10.3390/jpm11090887) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gil_2021](drugs/drug_palonosetron/pd_Gil_2021_EC95.md) | Gil HY et al., Impact of Palonosetron on Cough Suppres…, Journal of personalized med… (2021) | [10.3390/jpm11090887](https://doi.org/10.3390/jpm11090887) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **HTR3A** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Yeo_2025](drugs/drug_palonosetron/pgx_Yeo_2025_HTR3A_Q100.md) | Yeo W et al., Personalized Prophylactic Antiemetic Re…, JCO precision oncology (2025) | [10.1200/PO-24-00858](https://doi.org/10.1200/PO-24-00858) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **HTR3B** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Yeo_2025](drugs/drug_palonosetron/pgx_Yeo_2025_HTR3B_Q100.md) | Yeo W et al., Personalized Prophylactic Antiemetic Re…, JCO precision oncology (2025) | [10.1200/PO-24-00858](https://doi.org/10.1200/PO-24-00858) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **TACR1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Yeo_2025](drugs/drug_palonosetron/pgx_Yeo_2025_TACR1_Q100.md) | Yeo W et al., Personalized Prophylactic Antiemetic Re…, JCO precision oncology (2025) | [10.1200/PO-24-00858](https://doi.org/10.1200/PO-24-00858) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 46 matched, 41 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 7  ·  extracted 0  ·  needs_review 0  ·  rejected 7  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lee_2019.pdf` | Lee S et al., Population pharmacokinetics of palonose…, Journal of anesthesia (2019) | popPK | 10 | [10.1007/s00540-019-02641-5](https://doi.org/10.1007/s00540-019-02641-5) | [30976908](https://pubmed.ncbi.nlm.nih.gov/30976908) | The paper reports a population PK model for palonosetron with specific numeric values for clearance and central volume of distribution provided in the text. |
| `Li_2012.pdf` | Li P et al., Liquid chromatography-electrospray quad…, Journal of chromatography.… (2012) | popPK | 8 | [10.1016/j.jchromb.2012.03.001](https://doi.org/10.1016/j.jchromb.2012.03.001) | [22465199](https://pubmed.ncbi.nlm.nih.gov/22465199) | The paper describes a PK study of palonosetron with a two-compartment model, but specific numeric values for CL, V, or half-life are not present in the provided text, only qualitative descriptions and urine excretion rates. |
| `Wang_2016.pdf` | Wang J et al., Exposure-Response of Palonosetron for P…, Journal of pediatric gastro… (2016) | popPK | 8 | [10.1097/MPG.0000000000001173](https://doi.org/10.1097/MPG.0000000000001173) | [26913757](https://pubmed.ncbi.nlm.nih.gov/26913757) | The paper is a PK/PD study of palonosetron, but the evidence only provides qualitative comparisons (e.g., "3-fold higher AUC") and lacks specific numeric values for clearance, volume, or half-life. |
| `Calcagnile_2013.pdf` | Calcagnile S et al., Effect of netupitant, a highly selectiv…, Supportive care in cancer :… (2013) | pgx | 7 | [10.1007/s00520-013-1857-9](https://doi.org/10.1007/s00520-013-1857-9) | [23748441](https://www.ncbi.nlm.nih.gov/pubmed/23748441) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Warr_2012.pdf` | Warr D, Management of highly emetogenic chemoth…, Current opinion in oncology (2012) | pgx | 7 | [10.1097/CCO.0b013e328352f6fb](https://doi.org/10.1097/CCO.0b013e328352f6fb) | [22476193](https://www.ncbi.nlm.nih.gov/pubmed/22476193) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Janicki_2005.pdf` | Janicki PK, Cytochrome P450 2D6 metabolism and 5-hy…, Medical science monitor : i… (2005) | pgx | 5 | not captured | [16192915](https://www.ncbi.nlm.nih.gov/pubmed/16192915) | metadata signals extractable PGX data (CYP2D6) |
| `Song_2017.pdf` | Song JW et al., Comparison of Ramosetron and Palonosetr…, Journal of neurosurgical an… (2017) | pgx | 5 | [10.1097/ANA.0000000000000361](https://doi.org/10.1097/ANA.0000000000000361) | [27564555](https://www.ncbi.nlm.nih.gov/pubmed/27564555) | metadata signals extractable PGX data (ABCB1) |

<sub>queue written 2026-09-11T03:24:19.473178+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Aapro_2010 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving aprepitant and palonosetron, not pharmacogenomic effects on palonosetron's PK/PD. |
| PGx | Calcagnile_2013 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (CYP3A4 inhibitors/inducers) rather than pharmacogenomic effects of gene variants on palonosetron PK/PD. |
| PGx | Davis_2016 | not_relevant | 0 | 0 | The text is a general review of antiemetic therapies and does not report any pharmacogenomic effects on palonosetron PK/PD. |
| popPK | Gil_2021 | irrelevant | 0 | 0 | The study is a clinical trial assessing the effect of palonosetron on remifentanil requirements for cough suppression, not a pharmacokinetic study, and reports no PK parameters for palonosetron. |
| PGx | Hamada_2024 | not_relevant | 0 | 0 | The paper is a case report on a drug-drug interaction involving oxycodone and aprepitant, with no mention of pharmacogenomics or specific PK/PD parameters for palonosetron. |
| PGx | Ho_2006 | not_relevant | 2 | 0 | The text is a review summary that mentions pharmacogenetic factors (CYP450, ABCB1, 5-HT3) generally but does not report specific quantitative effects of variants on palonosetron PK/PD parameters. |
| PGx | Janicki_2005 | not_relevant | 5 | 0 | The text is a qualitative review discussing the mechanism of CYP2D6 polymorphism affecting palonosetron efficacy, but it does not report specific quantitative PK/PD parameter changes or fitted effect sizes. |
| PGx | Lerman_2019 | not_relevant | 1 | 0 | The paper is a general review of pediatric ambulatory anesthesia that mentions palonosetron only as a future therapeutic option for PONV, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Li_2012 | relevant | 8 | 2 | The paper describes a PK study of palonosetron with a two-compartment model, but specific numeric values for CL, V, or half-life are not present in the provided text, only qualitative descriptions and urine excretion rates. |
| PGx | Moore_2025 | not_relevant | 0 | 0 | The paper is a systematic review of 5-HT3 antagonists, but the provided text and supplementary tables do not contain specific pharmacokinetic or pharmacodynamic data for palonosetron. |
| PGx | Moore_2026 | not_relevant | 2 | 0 | The paper explicitly states that available data are insufficient to link CYP2D6 genotype with phenotypic variability for palonosetron. |
| PGx | Natale_2016 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions (DDIs) involving netupitant and palonosetron, not pharmacogenomic effects (gene variants) on PK/PD parameters. |
| PGx | Navari_2015 | not_relevant | 0 | 0 | The paper is a review of the clinical profile of netupitant/palonosetron and does not report pharmacogenomic effects on PK or PD parameters. |
| PGx | Pinilla_2025 | not_relevant | 0 | 0 | The paper is a case report of a drug-drug interaction (ifosfamide and netupitant/palonosetron) and does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Rapoport_2017 | not_relevant | 0 | 0 | The paper is a general review of NK-1 receptor antagonists and does not report any pharmacogenomic effects on the PK or PD of palonosetron. |
| PGx | Rubenstein_2006 | not_relevant | 0 | 0 | The paper is a general review of CINV treatments and mentions pharmacogenomics only as a future direction without reporting specific gene-drug interactions or PK/PD data for palonosetron. |
| PGx | Shimamoto_2021 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics of dexamethasone and its interaction with fosaprepitant, not the pharmacogenomics of palonosetron. |
| PGx | Song_2017 | not_relevant | 2 | 5 | The paper reports a pharmacodynamic effect (PONV severity) for ramosetron, but for palonosetron it only shows a lack of significant difference in nausea incidence and does not report a specific genotype-dependent change in palonosetron's PK or PD parameters. |
| PGx | Theodosopoulou_2023 | not_relevant | 2 | 0 | The paper states that ABCB1 polymorphisms did not affect palonosetron's efficacy, reporting a null result rather than a pharmacogenomic effect. |
| popPK | Thompson_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cisplatin (total platinum), with palonosetron serving only as a comparator antiemetic agent. |
| popPK | Thompson_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cisplatin (platinum), with palonosetron serving only as a comparator antiemetic agent. |
| PGx | Tsuji_2017 | not_relevant | 0 | 0 | The study reports no significant association between gene polymorphisms and the pharmacodynamic efficacy of palonosetron. |
| popPK | Wang_2016 | relevant | 8 | 2 | The paper is a PK/PD study of palonosetron, but the evidence only provides qualitative comparisons (e.g., "3-fold higher AUC") and lacks specific numeric values for clearance, volume, or half-life. |
| PD | Wang_2016 | not_relevant | 3 | 1 | The paper discusses exposure-response concepts and compares AUC and response rates between populations but does not report a fitted PD model or numeric PD parameters (e.g., Emax, EC50) in the provided text. |
| PGx | Warr_2012 | not_relevant | 0 | 0 | The paper is a clinical review of antiemetic management and does not report pharmacogenomic effects on palonosetron PK/PD. |
| PGx | Xiong_2019 | not_relevant | 0 | 0 | The study investigates the pharmacokinetic interaction between aprepitant and ifosfamide, not the effect of a gene variant on palonosetron. |
| PGx | Yokoi_2018 | not_relevant | 0 | 0 | The study investigates genetic risk factors for chemotherapy-induced nausea and vomiting (CINV) and antiemetic response, but does not report pharmacokinetic or pharmacodynamic parameters of palonosetron. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_palonosetron`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
