# Drotrecogin alfa

- **generic name:** Drotrecogin alfa
- **ATC codes:** `B01AD10`
- **DrugBank:** [DB00055](https://go.drugbank.com/drugs/DB00055)
- **groups:** approved, withdrawn

## About

**Description.** Drotrecogin alfa is activated human protein C that is synthesized by recombinant DNA technology. It is a glycoprotein of approximately 55 kilodalton molecular weight, consisting of a heavy chain and a light chain linked by a disulfide bond. Drotrecogin alfa was withdrawn from the market after a major study indicated that it was not effective in improving outcomes in patients with sepsis.

**Indication.** For reduction of mortality in patients with severe sepsis.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-05 19:53 | 17:59 | 0/0/2 | 0/0/0 | 0/0/0 | 133,708/5,912 | ollama / qwen3.8:27b-mtp-q8_0 | 13 | 2/11 | 13/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Abboud_2009](drugs/drug_drotrecogin_alfa/DrotrecoginAlfa_Abboud2009_reference.md) | Abboud I et al., Pharmacokinetics of epinephrine in pati…, Critical care (London, Engl… (2009) | [10.1186/cc7972](https://doi.org/10.1186/cc7972) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Macias_2002](drugs/drug_drotrecogin_alfa/DrotrecoginAlfa_Macias2002_reference.md) | Macias WL et al., Pharmacokinetic-pharmacodynamic analysi…, Clinical pharmacology and t… (2002) | [10.1067/mcp.2002.128148](https://doi.org/10.1067/mcp.2002.128148) |

## Coverage

- **PubMed hits:** 132 matched, 60 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Macias_2002.pdf` | Macias WL et al., Pharmacokinetic-pharmacodynamic analysi…, Clinical pharmacology and t… (2002) | popPK | 9 | [10.1067/mcp.2002.128148](https://doi.org/10.1067/mcp.2002.128148) | [12386641](https://pubmed.ncbi.nlm.nih.gov/12386641) | The paper reports quantitative PK parameters (median C(ss) and median plasma clearance) for drotrecogin alfa in a large clinical trial, with values explicitly stated in the text. |
| `Koppelman_1995.pdf` | Koppelman SJ et al., Inhibition of the intrinsic factor X ac…, Blood (1995) | pd | 5 | not captured | [7620160](https://www.ncbi.nlm.nih.gov/pubmed/7620160) | metadata signals extractable PD data (IC50) |
| `Geng_1995.pdf` | Geng JP et al., Transfer of specific endothelial cell-b…, Biochemistry (1995) | pd | 4 | [10.1021/bi00026a028](https://doi.org/10.1021/bi00026a028) | [7541242](https://www.ncbi.nlm.nih.gov/pubmed/7541242) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-05T19:49:06.211669+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abboud_2009 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for epinephrine, not drotrecogin alfa. |
| PD | Abboud_2009 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of epinephrine and its interaction with endogenous neurohormones, not on drotrecogin alfa, and does not report a PD model or numeric PD parameters for the target drug. |
| PD | Aliter_2024 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for a novel APC inhibitor, not pharmacodynamic or exposure-response data for drotrecogin alfa. |
| PGx | Annane_2018 | not_relevant | 0 | 0 | The study investigates pharmacogenomic effects on clinical outcomes (mortality) rather than pharmacokinetic or pharmacodynamic parameters. |
| popPK | Bajzar_1996 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on the profibrinolytic effect of activated protein C and TAFI, containing no pharmacokinetic parameters for drotrecogin alfa. |
| PGx | Bansal_2023 | not_relevant | 0 | 0 | The study investigates the metabolic effects of APC in irradiated rats and does not report pharmacogenomic effects on PK or PD parameters. |
| PGx | Bansal_2024 | not_relevant | 0 | 0 | The paper investigates the effect of a protein C variant on radiation-induced metabolic changes in mice, not the pharmacokinetics or pharmacodynamics of drotrecogin alfa. |
| PD | Barton_2004 | not_relevant | 3 | 2 | The paper reports qualitative pharmacodynamic changes (percent changes in D-dimer, protein C, and antithrombin) and PK parameters, but does not provide a concentration-effect model, dose-response curve, or numeric PD parameters like Emax or EC50. |
| PD | Bennet_1998 | not_relevant | 0 | 0 | The paper is a retrospective case-control study on the prevalence of APC resistance in women with thromboembolism and does not report any pharmacokinetic or pharmacodynamic data for drotrecogin alfa. |
| PGx | Berg_2003 | not_relevant | 0 | 0 | The paper reports on engineered protein variants (drug design) and their PK/PD properties, not on human genetic variants (pharmacogenomics) affecting the drug's parameters. |
| popPK | Chung_2023 | irrelevant | 0 | 0 | The paper is a review of quantitative systems pharmacology models of the coagulation cascade and does not report pharmacokinetic parameters for drotrecogin alfa. |
| PD | Chung_2023 | not_relevant | 0 | 0 | The paper is a review of QSP models for the coagulation cascade and does not report specific PD parameters or exposure-response relationships for drotrecogin alfa. |
| PD | DAngelo_1989 | not_relevant | 3 | 2 | The paper evaluates the sensitivity of commercial APTT reagents to activated protein C (APC) and protein S, describing qualitative dose-response curve shapes (linear, log-linear, log-log) but does not report specific numeric PD parameters (e.g., EC50, Emax) for drotrecogin alfa. |
| PGx | Del_2009 | not_relevant | 0 | 0 | The paper discusses genetic risk factors for pediatric stroke but does not mention drotrecogin alfa or any pharmacokinetic/pharmacodynamic parameters. |
| PD | Douxfils_2020 | not_relevant | 0 | 0 | The paper describes the validation of an assay for activated protein C resistance and does not report any pharmacodynamic or exposure-response data for drotrecogin alfa. |
| PGx | Douxfils_2020_2 | not_relevant | 0 | 0 | The paper discusses oral contraceptives and venous thromboembolism risk, not drotrecogin alfa. |
| popPK | Dömötör_2003 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on calcium flux signaling and does not report pharmacokinetic parameters for drotrecogin alfa. |
| PD | Faioni_1993 | not_relevant | 0 | 0 | The paper discusses activated protein C resistance and protein S assays in thrombophilic families, but does not report any pharmacodynamic or exposure-response data for drotrecogin alfa. |
| popPK | Favory_2013 | irrelevant | 0 | 0 | The study focuses on vascular reactivity and hemodynamic effects of activated protein C (drotrecogin alfa) rather than pharmacokinetic disposition parameters. |
| popPK | Futane_2023 | irrelevant | 0 | 0 | The paper is a review on aptamer-based biosensors for point-of-care diagnostics and does not contain any pharmacokinetic data or parameters for drotrecogin alfa. |
| PD | Futane_2023 | not_relevant | 0 | 0 | The paper is a review on aptamer-based point-of-care diagnostics and contains no pharmacodynamic or exposure-response data for drotrecogin alfa. |
| PGx | Gale_1997 | not_relevant | 0 | 0 | The paper studies the mechanism of a mutant activated protein C (S360A) and its interaction with Factor Va, but does not report pharmacokinetic or pharmacodynamic parameters of drotrecogin alfa in the context of a specific human gene variant affecting the drug's response. |
| PGx | Gale_2006 | not_relevant | 0 | 0 | The paper discusses engineered variants of coagulation factor VIII, not the pharmacogenomics of drotrecogin alfa. |
| PD | Geng_1995 | not_relevant | 0 | 0 | The paper describes a structural biology study on chimeric coagulation proteins and reports binding affinities (IC50) for endothelial cell receptors, but it does not report a pharmacodynamic exposure-response or dose-response relationship for the drug drotrecogin alfa. |
| PD | Guglielmone_1992 | not_relevant | 0 | 0 | The paper describes a laboratory assay for measuring protein C activity and does not report any pharmacodynamic or exposure-response relationship for drotrecogin alfa. |
| PD | Hamedani_2020 | not_relevant | 0 | 0 | The paper studies an aptamer (G-NB3) targeting Protein C, not drotrecogin alfa, and reports in vitro IC50 values for the aptamer, not PD parameters for the drug in question. |
| PGx | Incalcaterra_2004 | not_relevant | 0 | 0 | The paper discusses genetic risk factors for myocardial infarction and does not mention drotrecogin alfa or its pharmacokinetics/pharmacodynamics. |
| PGx | Iqbal_2003 | not_relevant | 0 | 0 | The paper discusses risk factors for venous thromboembolism associated with air travel and does not mention drotrecogin alfa or any pharmacogenomic effects on its PK/PD parameters. |
| PGx | Komitopoulou_2006 | not_relevant | 0 | 0 | The paper investigates genetic risk factors for childhood arterial ischemic stroke and does not mention drotrecogin alfa or its pharmacokinetics/pharmacodynamics. |
| PD | Koppelman_1995 | not_relevant | 0 | 0 | The paper studies the pharmacodynamics of Protein S, not drotrecogin alfa. |
| PD | Koster_1995 | not_relevant | 0 | 0 | The paper analyzes the association between Factor VIII/vWF levels and DVT risk, but does not report any pharmacodynamic or exposure-response relationship for drotrecogin alfa. |
| PGx | Li_2023 | not_relevant | 0 | 0 | The paper investigates urinary metabolomics for radiation-induced cardiac dysfunction in mice and does not report pharmacokinetic or pharmacodynamic parameters for drotrecogin alfa. |
| PD | Macias_2002 | not_relevant | 3 | 2 | The paper analyzes PD effects by C(ss) quartiles but explicitly states that no correlation was detected between concentration quartiles and biomarker effects, providing no numeric PD parameters or derivable exposure-response relationship. |
| popPK | McDaniel_2019 | irrelevant | 0 | 0 | The paper describes a mathematical model of sepsis pathophysiology and does not report pharmacokinetic parameters for drotrecogin alfa. |
| PD | McDaniel_2019 | not_relevant | 0 | 0 | The paper describes a mechanistic mathematical model of sepsis pathophysiology and does not report any pharmacodynamic or exposure-response analysis for drotrecogin alfa. |
| PD | Morimont_2021 | not_relevant | 0 | 0 | The paper describes the interlaboratory variability of an assay for activated protein C resistance and does not report any pharmacodynamic or exposure-response data for drotrecogin alfa. |
| popPK | Muir_2024 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics and coagulation modeling of 4-factor prothrombin complex concentrate (4F-PCC) and FXa inhibitors, not drotrecogin alfa. |
| PD | Muir_2024 | not_relevant | 0 | 0 | The paper models the effects of 4-factor prothrombin complex concentrate (4F-PCC) on coagulation, not drotrecogin alfa. |
| PGx | Nakhoul_2004 | not_relevant | 0 | 0 | The paper studies the effect of B-vitamins on homocysteine levels in hemodialysis patients, not the pharmacokinetics or pharmacodynamics of drotrecogin alfa. |
| popPK | Obrador_2026 | irrelevant | 0 | 0 | The paper is a review on radiomitigators for radiation injury and does not contain any pharmacokinetic data or mention of drotrecogin alfa. |
| PD | Obrador_2026 | not_relevant | 0 | 0 | The paper is a general review of radiomitigators and does not mention drotrecogin alfa or report any specific pharmacodynamic or exposure-response data. |
| PGx | Ocal_1997 | not_relevant | 0 | 0 | The paper investigates the association between MTHFR mutations and venous thrombosis risk, and does not mention drotrecogin alfa or its pharmacokinetic/pharmacodynamic parameters. |
| popPK | Petruk_2023 | irrelevant | 0 | 0 | The paper studies the peptide sHVF18, not drotrecogin alfa, and does not report pharmacokinetic parameters for the target drug. |
| PD | Petruk_2023 | not_relevant | 0 | 0 | The paper studies a different compound (sHVF18) and does not report any pharmacodynamic or exposure-response data for drotrecogin alfa. |
| PGx | Reda_2026 | not_relevant | 0 | 0 | The paper investigates the effect of genetic variants on the endogenous protein C pathway response to factor VIIa, not on the pharmacokinetics or pharmacodynamics of drotrecogin alfa. |
| PGx | Rolla_2014 | not_relevant | 0 | 0 | The paper investigates the prothrombin G20210A polymorphism and its effect on coagulation assays, but does not mention drotrecogin alfa or any pharmacokinetic/pharmacodynamic parameters of this drug. |
| PGx | Seed_2004 | not_relevant | 0 | 0 | The paper discusses hormone-replacement therapy and cardiovascular risk factors, not drotrecogin alfa. |
| PGx | Shetty_2015 | not_relevant | 0 | 0 | The paper is a review of novel therapeutic approaches for haemophilia and does not mention drotrecogin alfa or any pharmacogenomic effects. |
| PGx | Sim_2025 | not_relevant | 0 | 0 | The paper investigates antibody-mediated modulation of APC functions, not the effect of human gene variants on the PK/PD of drotrecogin alfa. |
| PGx | Sinha_2019 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of activated protein C (drotrecogin alfa) in a mouse model of GVHD, focusing on PAR1 signaling, but does not report pharmacogenomic effects on PK or PD parameters in humans. |
| PD | Slungaard_1993 | not_relevant | 0 | 0 | The paper investigates the mechanism of thrombosis in eosinophilic endocarditis involving Major Basic Protein (MBP) and Thrombomodulin, and does not contain any data, analysis, or mention of drotrecogin alfa. |
| PD | Stocker_1988 | not_relevant | 0 | 0 | The paper discusses Protac (a protein C activator) and its use in assays, not drotrecogin alfa, and does not report any pharmacodynamic or exposure-response parameters for the target drug. |
| PGx | Tapon-Bretaudière_2000 | not_relevant | 0 | 0 | The paper discusses laboratory testing for venous thromboembolism and genetic risk factors for thrombophilia, but does not mention drotrecogin alfa or its pharmacokinetics/pharmacodynamics. |
| PGx | Thielen_2024 | not_relevant | 0 | 0 | The paper studies the pharmacodynamic effects of an engineered variant (3K3A-aPC) on endothelial permeability in vitro, but does not report pharmacogenomic effects of human gene variants on the PK or PD of drotrecogin alfa. |
| popPK | Verdonck_2026 | irrelevant | 0 | 0 | The paper investigates the VWF-ADAMTS13 axis in trauma patients and does not involve drotrecogin_alfa or report any pharmacokinetic parameters. |
| PGx | Wan_2022 | not_relevant | 0 | 0 | The paper investigates the genetic determinants of thrombin generation and the protein C pathway (specifically KLKB1/kallikrein) in healthy individuals, and does not involve the drug drotrecogin alfa. |
| popPK | Winn_1990 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of protein C on vascular relaxation in isolated canine arteries and does not report pharmacokinetic parameters for drotrecogin alfa. |
| PD | Winn_1990 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of activated protein C and thrombin, not drotrecogin alfa. |
| popPK | Yang_2013 | irrelevant | 2 | 0 | The paper is a review of labeling and literature rather than an original PK study, and it only provides a relative percentage change (25% higher clearance) without absolute quantitative parameter values for drotrecogin alfa. |
| popPK | Yokota_2024 | irrelevant | 0 | 0 | The study investigates the effects of dienogest and combined oral contraceptives on protein S activity and does not involve drotrecogin_alfa or report any pharmacokinetic parameters for it. |
| popPK | unknown_2023 | irrelevant | 0 | 0 | The provided evidence contains only a conference title and no pharmacokinetic data or parameters for drotrecogin_alfa. |
| PD | unknown_2023 | not_relevant | 0 | 0 | The provided text is only a conference title and contains no data, analysis, or mention of drotrecogin alfa or pharmacodynamic parameters. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_drotrecogin_alfa`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
