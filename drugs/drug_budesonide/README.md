<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07E&quot;,&quot;href&quot;:&quot;atc/A07E.md&quot;},{&quot;label&quot;:&quot;budesonide&quot;}]"></div>

# budesonide

- **generic name:** budesonide
- **ATC codes:** `A07EA06`, `D07AC09`, `R01AD05`, `R03AK07`, `R03AK12`, `R03AK15`, `R03AL11`, `R03BA02`
- **DrugBank:** [DB01222](https://go.drugbank.com/drugs/DB01222)
- **groups:** approved, investigational

## About

**Description.** Budesonide is a glucocorticoid that is a mix of the 22R and 22S epimer used to treat inflammatory conditions of the lungs and intestines such as asthma, COPD, Crohn's disease, and ulcerative colitis.[A188529,A188532]

Budesonide was granted FDA approval on 14 February 1994.[L10598] It is also available in a combination product with [formoterol].[L10619]

**Indication.** Budesonide extended-release capsules are indicated for the treatment and maintenance of mild to moderate Crohn’s disease.[L10601,L10604] Various inhaled budesonide products are indicated for prophylactic therapy in asthma [L10607,L10613,L10619] and to reduce exacerbations of COPD.[L10619] A budesonide nasal spray is available over the counter for symptoms of hay fever and upper respiratory allergies.[L10616] Extended-release capsules are indicated to induce remission of mild to moderate ulcerative colitis[L10622] and a rectal foam is used for mild to moderate distal ulcerative colitis.[L10625] In addition, a delayed-release capsule formulation of budesonide is indicated to reduce proteinuria in adults with IgA nephropathy at risk of rapid disease progression.[L42515,L49540] Budesonide is indicated to treat eosinophilic esophagitis (EoE): For this indication, it is only approved for use in adults in Europe [L42525] while it is approved for short-term use (12 weeks) in patients 11 years of age and older in the US.[L50161]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-11 22:10 | 17:38 | 2/1/0 | 2/0/0 | 0/0/1 | 187,294/11,882 | ollama / qwen3.8:27b-mtp-q8_0 | 13 | 0/1 | 13/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span><br><sub>blocking: model_quarantined: Cl left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Lönnebo_2007](drugs/drug_budesonide/Budesonide_Lnnebo2007_reference.md) | Lönnebo A et al., An integrated model for the effect of b…, British journal of clinical… (2007) | [10.1111/j.1365-2125.2007.02867.x](https://doi.org/10.1111/j.1365-2125.2007.02867.x) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: T1_cmax</sub><br><sub>blocking: T3_param_coverage</sub><br><sub>route_to: `engineer`</sub> | [Rubin_2015](drugs/drug_budesonide/Budesonide_Rubin2015_reference.md) | Rubin DT et al., Budesonide Foam Has a Favorable Safety…, Digestive diseases and scie… (2015) | [10.1007/s10620-015-3868-5](https://doi.org/10.1007/s10620-015-3868-5) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Back_2020](drugs/drug_budesonide/Budesonide_Back2020_reference.md) | Back HM et al., Exposure-Response and Clinical Outcome…, Pharmaceutics (2020) | [10.3390/pharmaceutics12040336](https://doi.org/10.3390/pharmaceutics12040336) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Back_2020](drugs/drug_budesonide/pd_Back_2020_ECP.md) | Back HM et al., Exposure-Response and Clinical Outcome…, Pharmaceutics (2020) | [10.3390/pharmaceutics12040336](https://doi.org/10.3390/pharmaceutics12040336) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Back_2020](drugs/drug_budesonide/pd_Back_2020_FEV1.md) | Back HM et al., Exposure-Response and Clinical Outcome…, Pharmaceutics (2020) | [10.3390/pharmaceutics12040336](https://doi.org/10.3390/pharmaceutics12040336) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Lönnebo_2007](drugs/drug_budesonide/pd_L_nnebo_2007_ACTH.md) | Lönnebo A et al., An integrated model for the effect of b…, British journal of clinical… (2007) | [10.1111/j.1365-2125.2007.02867.x](https://doi.org/10.1111/j.1365-2125.2007.02867.x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Lönnebo_2007](drugs/drug_budesonide/pd_L_nnebo_2007_cortisol.md) | Lönnebo A et al., An integrated model for the effect of b…, British journal of clinical… (2007) | [10.1111/j.1365-2125.2007.02867.x](https://doi.org/10.1111/j.1365-2125.2007.02867.x) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **SUMF1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Ntenti_2025](drugs/drug_budesonide/pgx_Ntenti_2025_SUMF1_Q100.md) | Ntenti C et al., SUMF1 Common Variant rs793391 Is Associ…, International journal of mo… (2025) | [10.3390/ijms262010225](https://doi.org/10.3390/ijms262010225) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 137 matched, 61 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_14 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Soulele_2018.pdf` | Soulele K et al., On the pharmacokinetics of two inhaled…, Pulmonary pharmacology & th… (2018) | popPK | 10 | [10.1016/j.pupt.2017.12.002](https://doi.org/10.1016/j.pupt.2017.12.002) | [29223508](https://pubmed.ncbi.nlm.nih.gov/29223508) | The paper describes a population PK study for budesonide, but the provided evidence contains only the abstract/methodology description without any specific numeric parameter values. |
| `Daley-Yates_2004.pdf` | Daley-Yates PT et al., Relationship between systemic corticost…, Clinical therapeutics (2004) | pd | 5 | [10.1016/j.clinthera.2004.11.017](https://doi.org/10.1016/j.clinthera.2004.11.017) | [15639702](https://www.ncbi.nlm.nih.gov/pubmed/15639702) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Krishnaswami_2000.pdf` | Krishnaswami S et al., An interactive algorithm for the assess…, AAPS pharmSci (2000) | pd | 5 | [10.1208/ps020322](https://doi.org/10.1208/ps020322) | [11741238](https://www.ncbi.nlm.nih.gov/pubmed/11741238) | metadata signals extractable PD data (PK/PD) |
| `Stark_2006.pdf` | Stark JG et al., Pharmacokinetic/pharmacodynamic modelin…, Journal of pharmacokinetics… (2006) | pd | 5 | [10.1007/s10928-006-9013-5](https://doi.org/10.1007/s10928-006-9013-5) | [16633890](https://www.ncbi.nlm.nih.gov/pubmed/16633890) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Dilger_2006.pdf` | Dilger K et al., Multidrug resistance 1 genotype and dis…, Liver international : offic… (2006) | pgx | 8 | [10.1111/j.1478-3231.2005.01222.x](https://doi.org/10.1111/j.1478-3231.2005.01222.x) | [16584389](https://www.ncbi.nlm.nih.gov/pubmed/16584389) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Chen_2018.pdf` | Chen N et al., In vitro drug-drug interactions of bude…, Xenobiotica; the fate of fo… (2018) | pgx | 7 | [10.1080/00498254.2017.1344911](https://doi.org/10.1080/00498254.2017.1344911) | [28730856](https://www.ncbi.nlm.nih.gov/pubmed/28730856) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Effinger_2021.pdf` | Effinger A et al., Predicting budesonide performance in he…, European journal of pharmac… (2021) | pgx | 7 | [10.1016/j.ejps.2020.105617](https://doi.org/10.1016/j.ejps.2020.105617) | [33164838](https://www.ncbi.nlm.nih.gov/pubmed/33164838) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Grigg_2024.pdf` | Grigg A, Cushing syndrome and tertiary adrenal i…, Internal medicine journal (2024) | pgx | 7 | [10.1111/imj.16344](https://doi.org/10.1111/imj.16344) | [38404123](https://www.ncbi.nlm.nih.gov/pubmed/38404123) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Moore_2013.pdf` | Moore CD et al., Metabolic pathways of inhaled glucocort…, Drug metabolism and disposi… (2013) | pgx | 7 | [10.1124/dmd.112.046318](https://doi.org/10.1124/dmd.112.046318) | [23143891](https://www.ncbi.nlm.nih.gov/pubmed/23143891) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Seidegård_2012.pdf` | Seidegård J et al., Differentiating mucosal and hepatic met…, European journal of pharmac… (2012) | pgx | 7 | [10.1016/j.ejps.2012.04.005](https://doi.org/10.1016/j.ejps.2012.04.005) | [22538054](https://www.ncbi.nlm.nih.gov/pubmed/22538054) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Seymour_2021.pdf` | Seymour N et al., Prescribing intranasal steroids in HIV-…, The Journal of laryngology… (2021) | pgx | 7 | [10.1017/S0022215121001791](https://doi.org/10.1017/S0022215121001791) | [34387182](https://www.ncbi.nlm.nih.gov/pubmed/34387182) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Wilson_2017.pdf` | Wilson A et al., CYP3A4 Activity is Markedly Lower in Pa…, Inflammatory bowel diseases (2017) | pgx | 7 | [10.1097/MIB.0000000000001062](https://doi.org/10.1097/MIB.0000000000001062) | [28301431](https://www.ncbi.nlm.nih.gov/pubmed/28301431) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `König_2011.pdf` | König J et al., Role of organic anion-transporting poly…, Drug metabolism and disposi… (2011) | pgx | 5 | [10.1124/dmd.110.034991](https://doi.org/10.1124/dmd.110.034991) | [21430235](https://www.ncbi.nlm.nih.gov/pubmed/21430235) | metadata signals extractable PGX data (SLCO1B1) |
| `Resál_2023.pdf` | Resál T et al., Possible genetical predictors of effica…, Expert opinion on drug safe… (2023) | pgx | 5 | [10.1080/14740338.2023.2181336](https://doi.org/10.1080/14740338.2023.2181336) | [36811412](https://www.ncbi.nlm.nih.gov/pubmed/36811412) | metadata signals extractable PGX data (CYP3A4) |

<sub>queue written 2026-09-11T22:02:17.287250+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ardizzone_2002 | not_relevant | 0 | 0 | The paper is a general review of tolerability for ulcerative colitis drugs and does not report specific pharmacogenomic effects on the PK or PD of budesonide. |
| PGx | Back_2020 | not_relevant | 0 | 0 | The study tested ADRB2 genotype as a covariate but explicitly states that no significant covariate effect was found on the PK/PD model parameters. |
| PGx | Benido_2023 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (cobicistat inhibiting CYP3A4) affecting budesonide PK, but does not report a pharmacogenomic effect based on a specific gene variant or genotype. |
| popPK | Brunetti_2024 | irrelevant | 2 | 0 | The paper is a mathematical modeling study of leukemia stem cells where budesonide is a candidate drug, but no quantitative PK parameter values (CL, V, etc.) are reported in the evidence. |
| PGx | Chen_2018 | not_relevant | 0 | 0 | The study investigates in vitro drug-drug interactions (transporters and CYPs) and does not report any pharmacogenomic effects (gene variants) on budesonide PK or PD. |
| PGx | Crowe_2012 | not_relevant | 0 | 0 | The study examines P-glycoprotein transport and induction in Caco-2 cells but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Czaja_2001 | not_relevant | 0 | 0 | The text mentions budesonide only in the context of clinical efficacy in autoimmune hepatitis, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Czaja_2005 | not_relevant | 0 | 0 | The paper is a review of treatment challenges in autoimmune hepatitis and does not report specific pharmacogenomic effects on budesonide PK/PD parameters. |
| popPK | Daley-Yates_2004 | irrelevant | 0 | 0 | The provided evidence contains only the paper title and no quantitative pharmacokinetic parameter values for budesonide. |
| PGx | Daval_2020 | not_relevant | 0 | 0 | The paper is a clinical trial protocol for budesonide in COVID-19 hyposmia and does not report pharmacogenomic effects on PK or PD parameters. |
| PGx | Dilger_2006 | not_relevant | 2 | 5 | The study concludes that common MDR1 polymorphisms do not affect budesonide disposition, reporting a null result rather than a pharmacogenomic effect. |
| popPK | Donnelly_2010 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cytokine release and does not report any pharmacokinetic parameters for budesonide. |
| PGx | Effinger_2021 | not_relevant | 0 | 0 | The paper investigates the impact of Crohn's disease pathophysiology (e.g., CYP3A4 abundance, albumin levels) on budesonide PK, not the effect of specific gene variants or genotypes. |
| PGx | Eskazan_2025 | not_relevant | 0 | 0 | The paper investigates HLA associations with azathioprine-induced adverse events (pancreatitis/intolerance) and does not report pharmacokinetic or pharmacodynamic parameters for budesonide. |
| PGx | Feng_2022 | not_relevant | 0 | 0 | The paper investigates diagnostic markers (FeNO, ECT) for asthma and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of budesonide. |
| PGx | Foti_2010 | not_relevant | 0 | 0 | The paper discusses budesonide only as a probe substrate for CYP3A4 inhibition in drug-drug interaction studies, not as a drug whose PK/PD is altered by a specific gene variant or genotype. |
| PGx | García-Martín_2013 | not_relevant | 2 | 1 | The paper is a general review of drug metabolism in allergic diseases and only mentions budesonide in the context of potential pre-systemic metabolism without reporting specific pharmacogenomic effects on its PK/PD parameters. |
| PGx | Grigg_2024 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction (CYP3A4 inhibition by posaconazole) rather than a pharmacogenomic effect based on a specific gene variant or genotype. |
| popPK | Huang_2020 | irrelevant | 2 | 0 | The study reports non-compartmental PK parameters (AUC, Cmax) for a combination inhaler rather than compartmental disposition parameters (CL, V, Q, ka) for budesonide, and no specific numeric values are provided in the evidence. |
| PGx | Jönsson_1995 | not_relevant | 0 | 0 | The paper identifies the CYP3A enzyme responsible for budesonide metabolism but does not report any pharmacogenomic effects of specific gene variants or genotypes on PK/PD parameters. |
| popPK | Kelly_1998 | irrelevant | 0 | 0 | The paper is a review discussing general pharmacokinetic concepts and relative potency without reporting specific quantitative disposition parameters (CL, V, etc.) for budesonide. |
| PD | Kelly_1998 | not_relevant | 2 | 0 | The text is a qualitative review discussing relative potencies and the general shape of dose-response curves for inhaled corticosteroids, but it does not provide specific numeric PD parameters (e.g., EC50, Emax) or extractable concentration-effect data for budesonide. |
| PGx | Kong_2022 | not_relevant | 0 | 0 | The paper is a study protocol for a clinical trial evaluating the efficacy of a traditional Chinese medicine formula as an add-on to budesonide, and it does not report any pharmacogenomic effects on budesonide's PK or PD parameters. |
| popPK | Krishnaswami_2000 | irrelevant | 0 | 0 | The paper title indicates a study on cortisol suppression (pharmacodynamics) rather than pharmacokinetic parameters, and no PK data is present in the evidence. |
| PD | Krishnaswami_2000 | not_relevant | 0 | 0 | The paper describes an algorithm for assessing cumulative cortisol suppression but does not report a specific exposure-response or dose-response model with numeric PD parameters for budesonide. |
| PGx | König_2011 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of mesalazine (5-ASA) uptake, not budesonide; budesonide is only mentioned as an inhibitor of mesalazine transport. |
| popPK | Mehta_2018 | irrelevant | 0 | 0 | The study reports population PK parameters for fluticasone furoate, umeclidinium, and vilanterol, while budesonide is only mentioned as a comparator therapy in the trial design. |
| popPK | Meibohm_1999 | irrelevant | 2 | 0 | The study focuses on PK/PD modeling of lymphocytopenia and reports EC50 values, but does not provide quantitative disposition parameters (CL, V, ka) for budesonide. |
| popPK | Milara_2011 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of glucocorticoid resistance in macrophages and does not report any pharmacokinetic parameters for budesonide. |
| PGx | Moore_2013 | not_relevant | 2 | 5 | The paper studies metabolism by CYP3A enzymes (CYP3A4/5/7) but does not report effects of specific genetic variants or genotypes on PK/PD parameters. |
| popPK | Ngai_2025 | irrelevant | 0 | 0 | The paper is a clinical efficacy comparison (MAIC) of nefecon and sparsentan for kidney function in IgAN, reporting no pharmacokinetic parameters for budesonide. |
| PGx | Onstenk_2015 | not_relevant | 0 | 0 | The paper investigates the association between AR-V7 status and cabazitaxel efficacy, not the effect of a gene variant on the PK or PD of budesonide. |
| popPK | Pu_2026 | irrelevant | 0 | 0 | The paper is a meta-analysis of adverse events and does not report pharmacokinetic parameters for budesonide. |
| PD | Pu_2026 | not_relevant | 4 | 2 | The paper reports a dose-response relationship for budesonide (cataract risk) using an Emax model in a meta-analysis, but the abstract does not provide the specific numeric PD parameters (Emax, ED50) required for extraction. |
| PGx | Resál_2023 | not_relevant | 4 | 2 | The paper reports an association between CYP3A5 genotype and clinical efficacy (CAI), but does not report specific pharmacokinetic (PK) or pharmacodynamic (PD) parameter changes (e.g., AUC, Cmax, receptor binding) or fitted effect sizes. |
| PGx | Seidegård_2012 | not_relevant | 0 | 0 | The study investigates the effect of a pharmacological inhibitor (ketoconazole) on budesonide metabolism, not the effect of a genetic variant or genotype. |
| PGx | Seymour_2021 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions between intranasal steroids and HIV protease inhibitors, not pharmacogenomic effects of gene variants on PK/PD parameters. |
| popPK | Simeoli_2024 | relevant | 10 | 2 | The paper is a population PK study of budesonide, but the specific numeric values for CL, V, Q, and Ka are in Supplementary Table S1, which is not provided in the evidence. |
| PGx | Somers_2007 | not_relevant | 0 | 0 | The paper compares enzyme expression and activity in lung vs. liver cells and does not report any pharmacogenomic effects (gene variants) on budesonide PK/PD parameters. |
| popPK | Soulele_2018 | relevant | 10 | 0 | The paper describes a population PK study for budesonide, but the provided evidence contains only the abstract/methodology description without any specific numeric parameter values. |
| popPK | Stark_2006 | irrelevant | 0 | 0 | The provided evidence contains only the title, which suggests a PK/PD study of lymphocyte counts rather than standard disposition parameters (CL, V, etc.), and no numeric values are present. |
| PGx | Vyhlidal_2021 | not_relevant | 0 | 0 | The study investigates the impact of Crohn's disease inflammation on CYP3A4 expression and villous length, not the effect of a specific gene variant or genotype on budesonide pharmacokinetics. |
| PGx | Wilson_2017 | not_relevant | 0 | 0 | The study investigates disease-dependent changes in CYP3A4 activity in Crohn's disease patients, not the effect of a specific gene variant or genotype on budesonide pharmacokinetics. |
| PGx | Wu_2009 | not_relevant | 0 | 0 | The paper assesses the repeatability (ICC) of asthma outcomes in a clinical trial but does not report any pharmacogenomic effects or gene-drug interactions. |
| PGx | Zimmermann_2009 | not_relevant | 0 | 0 | The paper investigates the induction of CYP3A4 by budesonide (drug-drug interaction potential) rather than the effect of a genetic variant on budesonide's PK/PD. |
| popPK | Zuo_2026 | irrelevant | 0 | 0 | The paper is a clinical efficacy study comparing budesonide EC and telitacicept in IgA nephropathy, reporting no pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_budesonide`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
