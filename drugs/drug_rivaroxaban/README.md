# rivaroxaban

- **generic name:** rivaroxaban
- **ATC codes:** `B01AF01`, `B01AF51`
- **DrugBank:** [DB06228](https://go.drugbank.com/drugs/DB06228)
- **groups:** approved, investigational

## About

**Description.** Rivaroxaban is an anticoagulant and the first orally active direct factor Xa inhibitor. Unlike warfarin, routine lab monitoring of INR is not necessary. However there is no antidote available in the event of a major bleed. Only the 10 mg tablet can be taken without regard to food. The 15 mg and 20 mg tablet should be taken with food. FDA approved on July 1, 2011.

**Indication.** Rivaroxaban is indicated for the prevention of venous thromboembolic events (VTE) in patients who have undergone total hips replacements and total knee replacement surgery; prevention of stroke and systemic embolism in patients with nonvalvular atrial fibrillation; treatment of deep vein thrombosis (DVT) and pulmonary embolism (PE); to reduce risk of recurrent DVT and/or PE. Rivaroxaban is also indicated, in combination with aspirin, for reducing the risk of major cardiovascular events in patients with chronic coronary artery disease or peripheral artery disease. Its use is also not recommended in those with severe renal impairment (<30mL/min).[L12819]

Rivaroxaban is also indicated for the treatment and prevention of VTE in pediatric patients (from birth to 18 years of age) and for thromboprophylaxis in pediatric patients ≥2 years old with congenital heart disease following the Fontan procedure.[L12819]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-05 22:06 | 31:36 | 9/0/0 | 0/0/1 | 0/0/3 | 269,090/35,637 | ollama / qwen3.8:27b-mtp-q8_0 | 16 | 9/7 | 14/2 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Alqahtani_2023](drugs/drug_rivaroxaban/Rivaroxaban_Alqahtani2023_reference.md) | Alqahtani S et al., Population Pharmacokinetics of Rivaroxa…, Journal of clinical pharmac… (2023) | [10.1002/jcph.2255](https://doi.org/10.1002/jcph.2255) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Esmaeili_2022](drugs/drug_rivaroxaban/Rivaroxaban_Esmaeili2022_reference.md) | Esmaeili T et al., Rivaroxaban population pharmacokinetic…, Journal of clinical pharmac… (2022) | [10.1111/jcpt.13673](https://doi.org/10.1111/jcpt.13673) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Jia_2026](drugs/drug_rivaroxaban/Rivaroxaban_Jia2026_reference.md) | Jia M et al., Population pharmacokinetics of rivaroxa…, European journal of clinica… (2026) | [10.1007/s00228-026-04034-6](https://doi.org/10.1007/s00228-026-04034-6) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Li_2025](drugs/drug_rivaroxaban/Rivaroxaban_Li2025_base.md) | Li (2025) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Li_2025](drugs/drug_rivaroxaban/Rivaroxaban_Li2025_final.md) | Li (2025) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Li_2025](drugs/drug_rivaroxaban/Rivaroxaban_Li2025_reference.md) | Li (2025) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Liu_2022](drugs/drug_rivaroxaban/Rivaroxaban_Liu2022_sequential_modeling.md) | Liu XQ et al., Population pharmacokinetic and pharmaco…, Acta pharmacologica Sinica (2022) | [10.1038/s41401-022-00892-9](https://doi.org/10.1038/s41401-022-00892-9) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Liu_2022](drugs/drug_rivaroxaban/Rivaroxaban_Liu2022_simultaneous_modeling.md) | Liu XQ et al., Population pharmacokinetic and pharmaco…, Acta pharmacologica Sinica (2022) | [10.1038/s41401-022-00892-9](https://doi.org/10.1038/s41401-022-00892-9) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ren_2026](drugs/drug_rivaroxaban/Rivaroxaban_Ren2026_reference.md) | Ren J et al., Population pharmacokinetic and pharmaco…, Research and practice in th… (2026) | [10.1016/j.rpth.2026.106618](https://doi.org/10.1016/j.rpth.2026.106618) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Li_2025](drugs/drug_rivaroxaban/pd_Li_2025_unknown.md) | Li (2025) | — |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **ABCB1** | `Q27` · CL/F | transport | [Gu_2025](drugs/drug_rivaroxaban/pgx_Gu_2025_ABCB1_Q27.md) | Gu F et al., Population pharmacokinetic analysis of…, Frontiers in pharmacology (2025) | [10.3389/fphar.2025.1562259](https://doi.org/10.3389/fphar.2025.1562259) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **ABCG2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Santos_2024](drugs/drug_rivaroxaban/pgx_Santos_2024_ABCG2_Q100.md) | Santos AFD et al., ABCG2 polymorphism and rivaroxaban phar…, Brazilian journal of medica… (2024) | [10.1590/1414-431X2024e13257](https://doi.org/10.1590/1414-431X2024e13257) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **NAT2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Villapalos-García_2023](drugs/drug_rivaroxaban/pgx_Villapalos_Garc_a_2023_NAT2_Q100.md) | Villapalos-García G et al., NAT2 phenotype alters pharmacokinetics…, Biomedicine & pharmacothera… (2023) | [10.1016/j.biopha.2023.115058](https://doi.org/10.1016/j.biopha.2023.115058) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 434 matched, 68 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 9  ·  extracted 9  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_18 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Alqahtani_2023.pdf` | Alqahtani S et al., Population Pharmacokinetics of Rivaroxa…, Journal of clinical pharmac… (2023) | popPK | 10 | [10.1002/jcph.2255](https://doi.org/10.1002/jcph.2255) | [37102317](https://pubmed.ncbi.nlm.nih.gov/37102317) | The evidence explicitly reports quantitative population PK parameters (ka, CL/F, V) for rivaroxaban in the text. |
| `Esmaeili_2022.pdf` | Esmaeili T et al., Rivaroxaban population pharmacokinetic…, Journal of clinical pharmac… (2022) | popPK | 10 | [10.1111/jcpt.13673](https://doi.org/10.1111/jcpt.13673) | [35504629](https://pubmed.ncbi.nlm.nih.gov/35504629) | The paper reports quantitative population PK parameters (Vd, CL) for rivaroxaban directly in the text. |
| `Ren_2026.pdf` | Ren J et al., Population pharmacokinetic and pharmaco…, Research and practice in th… (2026) | popPK | 10 | [10.1016/j.rpth.2026.106618](https://doi.org/10.1016/j.rpth.2026.106618) | [42232251](https://pubmed.ncbi.nlm.nih.gov/42232251) | The study is a population PK analysis of rivaroxaban and explicitly reports numeric values for Ka, V/F, and CL/F in the abstract. |
| `Young_2020.pdf` | Young G et al., Rivaroxaban for treatment of pediatric…, Journal of thrombosis and h… (2020) | popPK | 9 | [10.1111/jth.14813](https://doi.org/10.1111/jth.14813) | [32246743](https://pubmed.ncbi.nlm.nih.gov/32246743) | The paper describes a population PK modeling study for rivaroxaban, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| `Wen_2022.pdf` | Wen HN et al., Predicting drug-drug interactions with…, Thrombosis research (2022) | pd | 5 | [10.1016/j.thromres.2022.08.007](https://doi.org/10.1016/j.thromres.2022.08.007) | [35985100](https://www.ncbi.nlm.nih.gov/pubmed/35985100) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Sychev_2025.pdf` | Sychev DA et al., Exome-wide association study of bleedin…, Science progress (2025) | pgx | 8 | [10.1177/00368504251398881](https://doi.org/10.1177/00368504251398881) | [41313269](https://www.ncbi.nlm.nih.gov/pubmed/41313269) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Wang_2025.pdf` | Wang D et al., Relevance of selected pharmacogenetic p…, British journal of clinical… (2025) | pgx | 8 | [10.1002/bcp.70078](https://doi.org/10.1002/bcp.70078) | [40400080](https://www.ncbi.nlm.nih.gov/pubmed/40400080) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Zdovc_2019.pdf` | Zdovc J et al., Downregulation of ABCB1 gene in patient…, European journal of clinica… (2019) | pgx | 8 | [10.1007/s00228-019-02639-8](https://doi.org/10.1007/s00228-019-02639-8) | [30725221](https://www.ncbi.nlm.nih.gov/pubmed/30725221) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Abrignani_2021.pdf` | Abrignani MG et al., Gastroprotection in patients on antipla…, European journal of interna… (2021) | pgx | 7 | [10.1016/j.ejim.2020.11.014](https://doi.org/10.1016/j.ejim.2020.11.014) | [33279389](https://www.ncbi.nlm.nih.gov/pubmed/33279389) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Bruni-Montero_2021.pdf` | Bruni-Montero MÁ et al., Rivaroxaban and selective serotonin reu…, Farmacia hospitalaria : org… (2021) | pgx | 7 | not captured | [35379086](https://www.ncbi.nlm.nih.gov/pubmed/35379086) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Chen_2025.pdf` | Chen Y et al., Drug-Drug Interactions and Combination…, Pharmacotherapy (2025) | pgx | 7 | [10.1002/phar.70050](https://doi.org/10.1002/phar.70050) | [40798896](https://www.ncbi.nlm.nih.gov/pubmed/40798896) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Gronich_2021.pdf` | Gronich N et al., Association Between Use of Pharmacokine…, Clinical pharmacology and t… (2021) | pgx | 7 | [10.1002/cpt.2369](https://doi.org/10.1002/cpt.2369) | [34287842](https://www.ncbi.nlm.nih.gov/pubmed/34287842) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Grymonprez_2023.pdf` | Grymonprez M et al., Impact of P-glycoprotein and CYP3A4-int…, European heart journal. Car… (2023) | pgx | 7 | [10.1093/ehjcvp/pvad070](https://doi.org/10.1093/ehjcvp/pvad070) | [37791408](https://www.ncbi.nlm.nih.gov/pubmed/37791408) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Ordovás_2009.pdf` | Ordovás Baines JP et al., [Pharmacokinetics and pharmacodynamics…, Farmacia hospitalaria : org… (2009) | pgx | 7 | not captured | [19712596](https://www.ncbi.nlm.nih.gov/pubmed/19712596) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Skov_2020.pdf` | Skov K et al., Supratheraputic rivaroxaban levels: A p…, Basic & clinical pharmacolo… (2020) | pgx | 7 | [10.1111/bcpt.13419](https://doi.org/10.1111/bcpt.13419) | [32336024](https://www.ncbi.nlm.nih.gov/pubmed/32336024) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Suzuki_2018.pdf` | Suzuki S et al., An analysis on distribution and inter-r…, Drug metabolism and pharmac… (2018) | pgx | 7 | [10.1016/j.dmpk.2018.02.002](https://doi.org/10.1016/j.dmpk.2018.02.002) | [29773500](https://www.ncbi.nlm.nih.gov/pubmed/29773500) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Verstraete_2026.pdf` | Verstraete A et al., Direct oral anticoagulant use and drug-…, Journal of thrombosis and h… (2026) | pgx | 7 | [10.1016/j.jtha.2026.06.038](https://doi.org/10.1016/j.jtha.2026.06.038) | [42413824](https://www.ncbi.nlm.nih.gov/pubmed/42413824) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Zhang_2023.pdf` | Zhang D et al., Population Pharmacokinetics and Hemorrh…, Journal of clinical pharmac… (2023) | pgx | 7 | [10.1002/jcph.2145](https://doi.org/10.1002/jcph.2145) | [36029108](https://www.ncbi.nlm.nih.gov/pubmed/36029108) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |

<sub>queue written 2026-09-05T21:49:04.978615+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abrignani_2021 | not_relevant | 0 | 0 | The paper is a position statement on gastroprotection and drug interactions (PPIs) and does not report pharmacogenomic effects on rivaroxaban PK/PD. |
| popPK | Ashton_2021 | irrelevant | 2 | 0 | The paper is a review of rivaroxaban in obese patients that discusses population PK concepts but does not report original quantitative PK parameter values (CL, V, etc.) in the provided text. |
| PGx | Bruni-Montero_2021 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (SSRIs) and bleeding risk, not pharmacogenomic effects of gene variants on rivaroxaban PK/PD. |
| PGx | Chen_2025 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions (amiodarone) and does not report any pharmacogenomic effects (gene variants) on rivaroxaban PK/PD. |
| PGx | Cheong_2019 | not_relevant | 0 | 0 | The paper describes a PBPK model for drug-drug and disease interactions but does not report pharmacogenomic effects of gene variants on rivaroxaban PK/PD. |
| popPK | Daci_2020 | irrelevant | 0 | 0 | The study investigates the anti-inflammatory and vascular effects of rivaroxaban in rats but does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life). |
| PD | Daci_2020 | not_relevant | 3 | 2 | The study reports qualitative dose-response effects (reduction in inflammation and vascular dysfunction) at a single dose, but does not provide concentration-effect data, Emax/EC50 parameters, or a formal PK/PD model. |
| popPK | Diesveld_2024 | irrelevant | 2 | 0 | This is a systematic review and recommendation paper that discusses rivaroxaban's safety profile in cirrhosis but does not report original quantitative pharmacokinetic parameter values (e.g., CL, V, ka) in the provided evidence. |
| PD | Diesveld_2024 | not_relevant | 1 | 0 | The paper is a systematic review providing qualitative safety recommendations and summary tables, but it does not report or derive specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or concentration-effect curves for rivaroxaban. |
| PGx | Du_2025 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (palbociclib) in rats, not a pharmacogenomic effect (gene variant/genotype) on rivaroxaban PK/PD. |
| PGx | Gronich_2021 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (P-gp/CYP3A4 inhibitors/inducers) and clinical outcomes, not the effect of genetic variants on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Grymonprez_2023 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (P-gp/CYP3A4 inhibitors/inducers) and clinical outcomes, not the effect of a specific gene variant or genotype on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Liu_2022 | not_relevant | 0 | 0 | The study tested SNPs as covariates but explicitly states that no single nucleotide polymorphism was identified as a significant covariate for rivaroxaban PK or PD. |
| popPK | Liu_2023 | irrelevant | 2 | 2 | The paper is a systematic review summarizing findings from other studies rather than reporting original quantitative PK parameters or a population PK model for rivaroxaban. |
| PD | Liu_2023 | not_relevant | 3 | 1 | The paper is a systematic review that qualitatively describes the shape of the PD models (linear for PT, Emax for FXa) but does not provide specific numeric PD parameters (e.g., Emax, EC50) or data points to derive them. |
| popPK | Lu_2020 | irrelevant | 1 | 0 | The study focuses on the reversal of anticoagulation by andexanet alfa, not the population pharmacokinetic parameters (CL, V, etc.) of rivaroxaban itself. |
| PGx | Mar_2022 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions and does not report pharmacogenomic effects on rivaroxaban PK/PD parameters. |
| PGx | McNary_2025 | not_relevant | 0 | 0 | The study investigates the clinical safety outcomes (thromboembolism, mortality) of drug-drug interactions, not the impact of genetic variants on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Moon_2023 | irrelevant | 2 | 0 | The study is a bioequivalence trial reporting only Cmax and AUC ratios, lacking the specific quantitative disposition parameters (CL, V, ka, half-life) required for population PK modeling. |
| popPK | Moore_2018 | irrelevant | 2 | 0 | The paper is a narrative review summarizing literature rather than an original study, and no specific quantitative PK parameter values (e.g., CL, V, ka) are provided in the evidence. |
| popPK | Oh_2026 | irrelevant | 0 | 0 | The paper is a review of pharmacokinetic interactions and does not report original quantitative disposition parameters for rivaroxaban. |
| PD | Oh_2026 | not_relevant | 1 | 0 | The text is a review article discussing mechanistic interactions and qualitative risks without reporting specific numeric PD parameters or concentration-effect curves for rivaroxaban. |
| PGx | Ordovás_2009 | not_relevant | 0 | 0 | The paper describes general pharmacokinetics and pharmacodynamics of rivaroxaban and dabigatran but does not report any effects of gene variants or genotypes on these parameters. |
| PGx | Pawlak_2025 | not_relevant | 0 | 0 | The paper is a bibliometric analysis of publication trends and does not report specific pharmacogenomic effects on PK or PD parameters. |
| PGx | Qian_2025 | not_relevant | 0 | 0 | The paper investigates the cardioprotective mechanism of rivaroxaban against sunitinib-induced injury in cell models and does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Sennesael_2018 | not_relevant | 0 | 0 | The study reports a null result, finding no significant effect of ABCB1 polymorphisms on rivaroxaban transport. |
| PGx | Sennesael_2018_2 | not_relevant | 3 | 5 | The study reports an association between ABCB1 genotypes and high rivaroxaban levels in a small cohort (n=10) but explicitly states that no clear association was observed (p &gt; 0.05) and does not provide a fitted pharmacogenomic effect size. |
| PGx | Skov_2020 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (amiodarone) affecting rivaroxaban levels, not a pharmacogenomic effect based on gene variants. |
| PGx | Suzuki_2018 | not_relevant | 0 | 0 | The study analyzes population PK/PD covariates (renal/hepatic function, inhibitors) but does not report any pharmacogenomic effects (gene variants) on rivaroxaban parameters. |
| PGx | Sychev_2018 | not_relevant | 2 | 5 | The study correlates CYP3A4 activity (a phenotypic measure) with rivaroxaban levels but does not report specific gene variants or genotypes, nor does it provide fitted pharmacokinetic effect sizes. |
| PGx | Sychev_2025 | not_relevant | 3 | 2 | The study reports trends and non-significant associations between genetic variants and bleeding risk or PK indices, but fails to demonstrate a statistically significant pharmacogenomic effect on a PK/PD parameter. |
| PGx | Tang_2021 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (benzbromarone affecting CYP3A5-mediated rivaroxaban metabolism) rather than the effect of a genetic variant or genotype on rivaroxaban pharmacokinetics or pharmacodynamics. |
| popPK | Terrier_2022 | relevant | 8 | 4 | The paper is a systematic review of PopPK models for rivaroxaban that reports median CL/F ranges (4.4-9.2 L/h) and IIV in the text, but detailed parameter estimates and equations are located in supplementary tables and data files not provided. |
| PGx | Terrier_2025 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction (dexamethasone/prednisone) on rivaroxaban PK, not a pharmacogenomic effect (gene variant/genotype). |
| PGx | Verstraete_2026 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (calcineurin inhibitors) and clinical factors, not pharmacogenomic variants. |
| PGx | Wang_2025 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (furmonertinib affecting rivaroxaban PK) rather than a pharmacogenomic effect (gene variant/genotype). |
| PGx | Wang_2025_2 | not_relevant | 2 | 5 | The study reports associations between genetic variants and clinical outcomes (bleeding/thromboembolism), not direct changes in pharmacokinetic (PK) or pharmacodynamic (PD) parameters. |
| PGx | Wei_2024 | not_relevant | 0 | 0 | The paper investigates in vitro CYP3A4 allosteric inhibition mechanisms using rivaroxaban as a probe substrate, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Wen_2022 | irrelevant | 2 | 0 | The study is a PBPK simulation of a drug-drug interaction (dronedarone) and reports only fold-changes in exposure (AUC), not primary quantitative disposition parameters (CL, V, ka) for rivaroxaban. |
| PGx | Yang_2024 | not_relevant | 0 | 0 | The paper is a network meta-analysis of clinical outcomes (bleeding risk) associated with drug-drug interactions (P-gp/CYP3A4 inhibitors), not a study of genetic variants affecting PK/PD parameters. |
| PGx | Yao_2015 | not_relevant | 0 | 0 | The study investigates the in vitro inhibition of UGT enzymes by rivaroxaban derivatives, not the effect of human genetic variants on rivaroxaban pharmacokinetics or pharmacodynamics. |
| popPK | Young_2020 | relevant | 9 | 0 | The paper describes a population PK modeling study for rivaroxaban, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| PD | Young_2020 | not_relevant | 3 | 0 | The paper generates exposure-response graphs but explicitly states that no clustering or relationship was observed between PK parameters and efficacy/safety outcomes, and no numeric PD parameters are reported. |
| popPK | Zhang_2022 | irrelevant | 2 | 1 | The study focuses on miRNA biomarkers and reports only non-compartmental AUC values, lacking the compartmental or population PK parameters (CL, V, ka) required for extraction. |
| PD | Zhang_2022 | not_relevant | 2 | 1 | The study correlates miRNA levels with PK/PD parameters (AUC, anti-Xa) but does not model or report a direct concentration-effect or dose-response relationship for rivaroxaban itself with numeric PD parameters (e.g., Emax, EC50). |
| PGx | Zhang_2022 | not_relevant | 2 | 5 | The study investigates circulating microRNAs (miRNAs) as biomarkers, not specific gene variants or genotypes, and reports correlations rather than a fitted pharmacogenomic effect size. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_rivaroxaban`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
