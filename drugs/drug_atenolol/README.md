# atenolol

- **generic name:** atenolol
- **ATC codes:** `C07AB03`, `C07BB03`, `C07CB03`, `C07CB53`, `C07FB03`
- **DrugBank:** [DB00335](https://go.drugbank.com/drugs/DB00335)
- **groups:** approved, investigational

## About

**Description.** Atenolol is a cardioselective beta-blocker used in a variety of cardiovascular conditions. 

Sir James Black, a Scottish pharmacologist, pioneered the use of beta-blockers for the management of angina pectoris in 1958 for which he received the Nobel Prize.[A178429] Beta-blockers quickly became popular in clinical use and where subsequently investigated for use in myocardial infarction, arrhythmias, and hypertension during the 1960s. Later they continued to be investigated for use in heart failure throughout the 1970-1980s. Atenolol itself was developed early on in this history by Alvogen Malta under the trade name Tenormin and received FDA approval in September, 1981.[label]

Despite being one of the most widely prescribed beta blockers, evidence suggests atenolol may not significantly reduce mortality, and only modestly reduce the risk of cardiovascular disease in patients with hypertension.[A235850,A235855] A Cochrane review of patients being treated for primary hypertension shows that atenolol shows a risk ratio of 0.88 for cardiovascular disease risk and a risk ratio of 0.99 for mortality.[A235850,A235855] Similar results have been found in other meta-analyses.[A235860,A235865] A meta-analysis of over 145,000 patients showed the risk of stroke in patients taking atenolol may depend on the age of the patient.[A235865] The use of atenolol may need to be based on more patient factors than hypertension alone.[A235850,A235855,A235860,A235865]

**Indication.** **Indicated** for:[label]

1) Management of hypertension alone and in combination with other antihypertensives.

2) Management of angina pectoris associated with coronary atherosclerosis.

3) Management of acute myocardial infarction in hemodynamically stable patients with a heart rate greater than 50 beats per minutes and a systolic blood pressure above 100 mmHg.

**Off-label** uses include:

1) Secondary prevention of myocardial infarction.[A178156]

2) Management of heart failure.[A178153]

3) Management of atrial fibrillation.[A178141]

4) Management of supraventricular tachycardia.[A178162]

5) Management of ventricular arrythmias such as congenital long-QT and arrhythmogenic right ventricular cardiomyopathy.[A178168]

6) Management of symptomatic thyrotoxicosis in combination with [methimazole].[A178147]

7) Prophylaxis of migraine headaches.[A178171]

8) Management of alcohol withdrawal.[A178174,A178177]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 1/3/0 | 0/1/0 | 1/0/11 | not captured | not captured | 49 | 47/0 | 16/33 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Kir_2025](drugs/drug_atenolol/Atenolol_Kir2025_reference.md) | Kir F et al., Minimal Physiologically-Based Pharmacok…, European journal of drug me… (2025) | [10.1007/s13318-025-00943-6](https://doi.org/10.1007/s13318-025-00943-6) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Buck_1989](drugs/drug_atenolol/Atenolol_Buck1989_reference.md) | Buck ML et al., Pharmacokinetics and pharmacodynamics o…, Clinical pharmacology and t… (1989) | [10.1038/clpt.1989.198](https://doi.org/10.1038/clpt.1989.198) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Scherholz_2018](drugs/drug_atenolol/Atenolol_Scherholz2018_reference.md) | Scherholz ML et al., A framework for 2-stage global sensitiv…, Journal of pharmacokinetics… (2018) | [10.1007/s10928-018-9573-1](https://doi.org/10.1007/s10928-018-9573-1) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Wójcicki_2003](drugs/drug_atenolol/Atenolol_Wjcicki2003_reference.md) | Wójcicki J et al., Comparative pharmacokinetics and pharma…, Biopharmaceutics & drug dis… (2003) | [10.1002/bdd.357](https://doi.org/10.1002/bdd.357) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [van_2007](drugs/drug_atenolol/pd_van_2007_HR.md) | van Steeg TJ et al., Pharmacokinetic-pharmacodynamic modelli…, British journal of pharmaco… (2007) | [10.1038/sj.bjp.0707234](https://doi.org/10.1038/sj.bjp.0707234) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | **GRK5** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Lobmeyer_2011](drugs/drug_atenolol/pgx_Lobmeyer_2011_GRK5_safety.md) | Lobmeyer MT et al., Polymorphisms in genes coding for GRK2…, Pharmacogenetics and genomi… (2011) | [10.1097/FPC.0b013e328341e911](https://doi.org/10.1097/FPC.0b013e328341e911) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **PTPRD** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Gong_2015](drugs/drug_atenolol/pgx_Gong_2015_PTPRD_Q100.md) | Gong Y et al., PTPRD gene associated with blood pressu…, Journal of hypertension (2015) | [10.1097/HJH.0000000000000714](https://doi.org/10.1097/HJH.0000000000000714) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **LRRC15** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Gong_2016](drugs/drug_atenolol/pgx_Gong_2016_LRRC15_Q100.md) | Gong Y et al., Pharmacogenomic Genome-Wide Meta-Analys…, Hypertension (Dallas, Tex.… (2016) | [10.1161/HYPERTENSIONAHA.115.06345](https://doi.org/10.1161/HYPERTENSIONAHA.115.06345) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **SLC25A31** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Gong_2016](drugs/drug_atenolol/pgx_Gong_2016_SLC25A31_Q100.md) | Gong Y et al., Pharmacogenomic Genome-Wide Meta-Analys…, Hypertension (Dallas, Tex.… (2016) | [10.1161/HYPERTENSIONAHA.115.06345](https://doi.org/10.1161/HYPERTENSIONAHA.115.06345) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **ADRB1** | `Q88` · AUC | target | [Kurnik_2008](drugs/drug_atenolol/pgx_Kurnik_2008_ADRB1_Q88.md) | Kurnik D et al., Beta-1-adrenoceptor genetic variants an…, Pharmacogenetics and genomi… (2008) | [10.1097/FPC.0b013e328309733f](https://doi.org/10.1097/FPC.0b013e328309733f) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **unknown** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Liljedahl_2003](drugs/drug_atenolol/pgx_Liljedahl_2003_unknown_Q100.md) | Liljedahl U et al., A microarray minisequencing system for…, Pharmacogenetics (2003) | [10.1097/00008571-200301000-00003](https://doi.org/10.1097/00008571-200301000-00003) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **ADRBK1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Lobmeyer_2011](drugs/drug_atenolol/pgx_Lobmeyer_2011_ADRBK1_Q100.md) | Lobmeyer MT et al., Polymorphisms in genes coding for GRK2…, Pharmacogenetics and genomi… (2011) | [10.1097/FPC.0b013e328341e911](https://doi.org/10.1097/FPC.0b013e328341e911) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **GRK4** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Rayner_2015](drugs/drug_atenolol/pgx_Rayner_2015_GRK4_Q100.md) | Rayner B et al., The importance of G protein-coupled rec…, International journal of mo… (2015) | [10.3390/ijms16035741](https://doi.org/10.3390/ijms16035741) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **OR10P1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [Shahin_2018](drugs/drug_atenolol/pgx_Shahin_2018_OR10P1_Q100.md) | Shahin MH et al., Genome-Wide Association Approach Identi…, Journal of the American Hea… (2018) | [10.1161/JAHA.117.006463](https://doi.org/10.1161/JAHA.117.006463) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **SNX9** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [Shahin_2018](drugs/drug_atenolol/pgx_Shahin_2018_SNX9_Q100.md) | Shahin MH et al., Genome-Wide Association Approach Identi…, Journal of the American Hea… (2018) | [10.1161/JAHA.117.006463](https://doi.org/10.1161/JAHA.117.006463) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **ADRB2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Shahin_2019](drugs/drug_atenolol/pgx_Shahin_2019_ADRB2_Q100.md) | Shahin MH et al., β2 -Adrenergic Receptor Gene Affects th…, Journal of clinical pharmac… (2019) | [10.1002/jcph.1443](https://doi.org/10.1002/jcph.1443) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **ADRB1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Van_2020](drugs/drug_atenolol/pgx_Van_2020_ADRB1_Q100.md) | Van Driest SL et al., Variants in ADRB1 and CYP2C9: Associati…, The Journal of pediatrics (2020) | [10.1016/j.jpeds.2020.03.064](https://doi.org/10.1016/j.jpeds.2020.03.064) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 568 matched, 73 returned
- **screened:** 5  ·  **relevant:** 7
- **records:** 4  ·  extracted 1  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abd_2024 | irrelevant | not captured | not captured | The paper focuses solely on analytical method development for drug quantification and contains no pharmacokinetic data or modeling. |
| popPK | Breijyeh_2021 | irrelevant | not captured | not captured | The paper is a theoretical review on enzyme models and prodrug design that only mentions atenolol as a brief example without providing any pharmacokinetic data or modeling. |
| PD | Brodde_2003 | not_relevant | 0 | 0 | The text is a general review article discussing pharmacokinetic and pharmacodynamic interactions of beta-blockers, but it does not report any population pharmacodynamic modeling or estimated exposure-response parameters for atenolol. |
| PGx | Brodde_2003 | not_relevant | 0 | 0 | The text is a general review of beta-blocker pharmacology and drug interactions; it mentions CYP2D6 polymorphisms for metoprolol but states atenolol is renally excreted without discussing genetic variants affecting its PK or PD. |
| PD | Celardo_1987 | not_relevant | 2 | 8 | The study uses an effect-compartment model to describe exposure-response in a small animal cohort (N=5) with mean parameter estimates, but it does not perform population pharmacodynamic modeling (e.g., using NONMEM or mixed-effects models to estimate inter-individual variability). |
| popPK | Chen_2018 | irrelevant | not captured | not captured | The paper is a general review on fruit juice-drug interactions and does not report original quantitative or population pharmacokinetic parameters for atenolol. |
| popPK | Chrisp_1990 | irrelevant | not captured | not captured | The paper is a review focused on dilevalol, with atenolol mentioned only as an efficacy comparator and no pharmacokinetic data provided. |
| PGx | Davis_2021 | not_relevant | 2 | 1 | The paper reports population-level prevalence of actionable genotypes and prescribing frequencies for atenolol (via ADRB1), but does not report specific pharmacokinetic or pharmacodynamic parameter changes (e.g., clearance, half-life, blood pressure response) associated with the genotype. |
| PGx | Dayer_1986 | not_relevant | 0 | 0 | no full text |
| PGx | Deneer_2011 | not_relevant | 0 | 0 | The text discusses age-related pharmacodynamic changes for atenolol but does not report any specific gene variant or genotype affecting its PK/PD parameters. |
| popPK | Fayyaz_2021 | irrelevant | not captured | not captured | The study uses non-compartmental analysis for ocular tissue distribution in rabbits and lacks systemic compartmental or population-PK parameters. |
| PGx | Frampton_1992 | not_relevant | 0 | 0 | The paper discusses nicorandil and only mentions atenolol as a comparator drug in efficacy trials, with no data on pharmacogenomic effects for atenolol. |
| PGx | Gambarin_2009 | not_relevant | 0 | 0 | The text describes a study protocol that plans to investigate pharmacogenetics for losartan and nebivolol, but does not report any results or effects for atenolol. |
| PGx | Gedde-Dahl_2022 | not_relevant | 0 | 0 | The study analyzes prescription trends and drug interaction alerts, not pharmacogenomic effects on PK/PD parameters of atenolol. |
| popPK | Hawksworth_1984 | irrelevant | not captured | not captured | Atenolol serves only as a hydrophilic comparator in a diazepam interaction study, and no quantitative pharmacokinetic parameters for atenolol are reported. |
| popPK | Hocht_2017 | irrelevant | not captured | not captured | This is a qualitative review article that discusses beta-blockers generally and does not report original quantitative pharmacokinetic parameters or population models for atenolol. |
| PGx | Ieiri_2012 | not_relevant | 2 | 1 | The paper investigates the pharmacogenomic effect of SLCO2B1 on celiprolol; atenolol is included only as a reference drug in cassette dosing, and no genotype-dependent PK data for atenolol are reported. |
| PGx | Jeon_2013 | not_relevant | 2 | 8 | The study explicitly concludes that genetic variations in SLCO2B1 had a minimal or non-significant effect on atenolol pharmacokinetics, thus failing to report a positive pharmacogenomic effect. |
| PD | Jia_2011 | not_relevant | 2 | 3 | The study uses a two-stage approach fitting PK-PD models to mean data rather than estimating population parameters via nonlinear mixed-effects modeling, and reports limited PD parameter estimates (ke0, EC50) without full statistical characterization. |
| PD | Johnston_1992 | not_relevant | 0 | 0 | The text is a clinical review discussing dose-ranging study designs and empirical dose-response observations, not a population pharmacodynamic modeling study with estimated parameters. |
| popPK | Kirch_1982 | irrelevant | not captured | not captured | The paper is a review article summarizing existing literature and does not present original quantitative pharmacokinetic parameters or population/compartmental models. |
| PD | Kumar_2006 | not_relevant | 0 | 0 | The paper investigates pharmacokinetic and pharmacological interactions of centchroman with co-administered drugs (including atenolol) using noncompartmental analysis, but does not report any population pharmacodynamic or exposure-response modeling for atenolol. |
| PGx | Kurnik_2009 | not_relevant | 0 | 0 | not captured |
| PGx | Lennard_1986 | not_relevant | 0 | 0 | The text explicitly states that the disposition of atenolol is unrelated to debrisoquine phenotype, as it is eliminated predominantly unchanged by the kidney. |
| PGx | Lennard_1986_2 | not_relevant | 2 | 5 | The paper reports that debrisoquine oxidation phenotype does not significantly affect the pharmacokinetics or pharmacodynamics of atenolol, showing similar plasma concentrations and effects in EM and PM subjects. |
| popPK | Mangrella_1998 | irrelevant | not captured | not captured | The paper focuses on nebivolol and only mentions atenolol as a qualitative pharmacodynamic comparator without reporting any quantitative PK parameters. |
| PD | McCoy_1994 | not_relevant | 3 | 8 | The study uses individual-level pharmacodynamic modeling (fitting curves to each subject's data) rather than population pharmacodynamic modeling (mixed-effects estimation of population parameters and inter-individual variability). |
| popPK | McTavish_1993 | irrelevant | not captured | not captured | The paper is a review focused on carvedilol, with atenolol mentioned only as a clinical efficacy comparator and no pharmacokinetic parameters reported. |
| PD | Montañés_2024 | not_relevant | 0 | 0 | The paper reports on environmental ecotoxicity (EC50) of atenolol in lettuce and bacteria, not population pharmacodynamic modeling or exposure-response relationships in humans/animals. |
| PGx | Navare_2010 | not_relevant | 0 | 0 | The study investigates the association between pharmacokinetic parameters (AUC) and metabolic outcomes, but does not report any gene variants or genotypes influencing these parameters. |
| PGx | Oomen_2005 | not_relevant | 0 | 0 | Atenolol is used solely as a beta-1 blocker to isolate beta-2 effects of salbutamol; the study investigates pharmacogenomics of salbutamol response, not atenolol PK/PD. |
| PD | Peperidou_2017 | not_relevant | 0 | 0 | The paper reports on the synthesis and in vitro biological evaluation (IC50 values) of novel cinnamic acid derivatives, not population pharmacodynamic or exposure-response modeling of atenolol. |
| popPK | Roohbakhsh_2014 | irrelevant | not captured | not captured | The paper is a mini-review focused on citrus flavonoids and only mentions atenolol qualitatively as an interacting drug without providing quantitative pharmacokinetic parameters. |
| PGx | Rotroff_2015 | not_relevant | 2 | 1 | The study investigates metabolomic signatures associated with treatment response but does not report specific gene variants or genotypes affecting pharmacokinetic or pharmacodynamic parameters of atenolol. |
| popPK | Saltiel_1988 | irrelevant | not captured | not captured | The paper is a review focused on felodipine and only mentions atenolol as a clinical comparator without reporting any pharmacokinetic parameters for it. |
| PD | Sowinski_1995 | not_relevant | 3 | 2 | The study fits individual subject models (non-linear mixed effects/population approach not used) and reports only median/range of PD parameters without inter-individual variability estimates or population-level statistical inference. |
| PGx | Steinberg_2016 | not_relevant | 2 | 5 | The study reports clinical efficacy (QTc shortening, cardiac events) rather than pharmacokinetic or pharmacodynamic parameters, and explicitly states that beta-blocker efficacy was not affected by genotype. |
| popPK | Tabacova_2003 | irrelevant | not captured | not captured | The paper is a comparative review of developmental toxicity and does not report quantitative pharmacokinetic parameters for atenolol. |
| PGx | Upton_1991 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions affecting theophylline pharmacokinetics and explicitly states that atenolol does not influence theophylline clearance; it does not report any pharmacogenomic effects on atenolol. |
| popPK | Van_2020 | irrelevant | not captured | not captured | The paper investigates pharmacogenomic predictors of clinical response to atenolol but contains no quantitative pharmacokinetic parameters or modeling. |
| popPK | Warner_2002 | irrelevant | not captured | not captured | Atenolol is only mentioned as a clinical efficacy comparator in a review article about olmesartan medoxomil, with no quantitative PK data reported. |
| PGx | Wehling_2010 | not_relevant | 0 | 0 | The paper explicitly states that atenolol is metabolically stable and excreted renally, implying it is not subject to the CYP2D6 pharmacogenomic effects discussed for other beta-blockers like metoprolol. |
| popPK | Wiysonge_2017 | irrelevant | not captured | not captured | This Cochrane systematic review focuses on clinical outcomes and mortality, containing no pharmacokinetic parameters or modeling for atenolol. |
| popPK | Wójcicki_2000 | relevant | 8 | 2 | The study reports atenolol PK parameters, but the specific numeric values are located in Table 1, which is referenced but not fully provided in the text evidence. |
| PGx | Yang_2025 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamic effects of atenolol on tumor progression and immune cell recruitment in a mouse model, but does not report any pharmacogenomic analysis or gene-drug interactions affecting PK/PD parameters. |
| PD | Yukawa_1990 | not_relevant | 0 | 0 | The paper describes in vitro receptor binding and functional assays on isolated eosinophils, not a population pharmacodynamic or exposure-response model in humans or animals. |
| PGx | Zhang_2019 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamic effects of atenolol on gastric cancer cell proliferation and signaling pathways, but does not report any genetic variants or genotypes influencing these effects. |
| popPK | Ågesen_2019 | irrelevant | not captured | not captured | This is a literature review covering multiple beta-blockers and lacks original quantitative population or compartmental pharmacokinetic modeling data for atenolol. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_atenolol`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
