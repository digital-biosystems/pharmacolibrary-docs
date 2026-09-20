<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A05A&quot;,&quot;href&quot;:&quot;atc/A05A.md&quot;},{&quot;label&quot;:&quot;obeticholic acid&quot;}]"></div>

# obeticholic acid

- **generic name:** obeticholic acid
- **ATC codes:** `A05AA04`
- **DrugBank:** [DB05990](https://go.drugbank.com/drugs/DB05990)
- **groups:** approved, investigational

## About

**Description.** Primary biliary cirrhosis, or PBC, is a progressive and chronic condition that leads to hepatic injury often resulting in end-stage liver failure that requires liver transplantation.[A192786]

Obeticholic acid is a farnesoid-X receptor (FXR) agonist used to treat this condition, possibly allowing for increased survival.[A18696]  In 2016, it was granted approval to treat primary biliary cholangitis in combination with [ursodeoxycholic acid], which was previously the mainstay treatment for this condition.[A18696,L12633] In May 2021, the FDA updated its prescribing information to contraindicate the use of obeticholic acid in patients with PBC and advanced cirrhosis (e.g. those with portal hypertension or hepatic decompensation) due to a risk of liver failure, in some cases requiring liver transplantation.[L34650] 

Obeticholic acid is currently being considered for FDA approval to treat fibrosis caused by non-alcoholic liver steatohepatitis (NASH). The NDA from Intercept Pharmaceuticals was approved in November 2019 and obeticholic acid is expected to be granted full approval for this indication in 2020.[L12636]

**Indication.** Obeticholic acid is indicated for the treatment of primary biliary cholangitis in combination with ursodeoxycholic acid (UDCA) in adults with an inadequate response to UDCA. It is also used as a monotherapy in adults with PBC that are unable to tolerate UDCA.[L12633]

Obeticholic acid is currently being considered for FDA approval to treat fibrosis caused by non-alcoholic liver steatohepatitis (NASH), and is likely to be approved for this indication in 2020.[L12636]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 14:19 | 17:57 | 0/0/0 | 0/2/0 | 0/0/0 | 607,168/11,283 | ollama / qwen3.8:27b-mtp-q8_0 | 30 | 3/27 | 30/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Ooi_2026](drugs/drug_obeticholic_acid/pd_Ooi_2026_ALP.md) | Ooi QX et al., Population Pharmacokinetics and Pharmac…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70247](https://doi.org/10.1002/psp4.70247) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Ooi_2026](drugs/drug_obeticholic_acid/pd_Ooi_2026_TB.md) | Ooi QX et al., Population Pharmacokinetics and Pharmac…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70247](https://doi.org/10.1002/psp4.70247) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Schramm_2022](drugs/drug_obeticholic_acid/pd_Schramm_2022_C4.md) | Schramm C et al., Farnesoid X receptor agonist tropifexor…, JHEP reports : innovation i… (2022) | [10.1016/j.jhepr.2022.100544](https://doi.org/10.1016/j.jhepr.2022.100544) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Schramm_2022](drugs/drug_obeticholic_acid/pd_Schramm_2022_FGF19.md) | Schramm C et al., Farnesoid X receptor agonist tropifexor…, JHEP reports : innovation i… (2022) | [10.1016/j.jhepr.2022.100544](https://doi.org/10.1016/j.jhepr.2022.100544) |

## Coverage

- **PubMed hits:** 97 matched, 95 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Alkhouri_2024.pdf` | Alkhouri N et al., Safety, pharmacokinetics and pharmacody…, Liver international : offic… (2024) | popPK | 8 | [10.1111/liv.15816](https://doi.org/10.1111/liv.15816) | [38293761](https://pubmed.ncbi.nlm.nih.gov/38293761) | The paper is a PK study of obeticholic acid, but the evidence text only provides qualitative trends and relative fold-changes (e.g., 1.8-fold increase) without specific numeric values for clearance, volume, or half-life. |
| `Li_2021.pdf` | Li X et al., Comparison of the Pharmacokinetics of G…, Clinical pharmacology in dr… (2021) | popPK | 8 | [10.1002/cpdd.905](https://doi.org/10.1002/cpdd.905) | [33463088](https://pubmed.ncbi.nlm.nih.gov/33463088) | The study is a PK bioequivalence trial for obeticholic acid, but the evidence provided only contains relative percentage changes and qualitative bioequivalence statements, lacking specific quantitative disposition parameters (CL, V, t1/2) or absolute PK values. |

<sub>queue written 2026-09-18T14:15:32.102686+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Aizawa_2016 | not_relevant | 0 | 0 | The paper is a general review of NAFLD/NASH management and mentions obeticholic acid as a treatment option, but it does not report any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Alkhouri_2024 | relevant | 8 | 2 | The paper is a PK study of obeticholic acid, but the evidence text only provides qualitative trends and relative fold-changes (e.g., 1.8-fold increase) without specific numeric values for clearance, volume, or half-life. |
| PD | Alkhouri_2024 | not_relevant | 3 | 1 | The paper reports qualitative changes in pharmacodynamic markers (FXR activation, transaminases) and PK exposure differences by fibrosis stage, but does not provide numeric PD parameters (Emax, EC50) or a quantitative exposure-response model. |
| popPK | Amatya_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ESC-ABD-AuNPs, and obeticholic acid is only used as a model drug for loading efficiency testing without any PK parameter reporting. |
| popPK | Carino_2018 | irrelevant | 0 | 0 | The paper focuses on the antifibrotic mechanism of a novel FXR ligand (BAR704) and does not report pharmacokinetic parameters for obeticholic acid. |
| PD | Carino_2018 | not_relevant | 2 | 1 | The paper focuses on a novel compound (BAR704) and only mentions obeticholic acid qualitatively as a comparator with side effects, providing no PD parameters or exposure-response data for obeticholic acid. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on FABP1 inhibitors where obeticholic acid is used only as a comparator for efficacy, with no pharmacokinetic parameters reported. |
| PD | Chen_2024 | not_relevant | 0 | 0 | The paper focuses on the design and synthesis of novel FABP1 inhibitors and only qualitatively compares the efficacy of the lead compound to obeticholic acid in mice, without reporting any exposure-response or dose-response data for obeticholic acid. |
| popPK | Chen_2025 | irrelevant | 0 | 0 | The paper focuses on the discovery of a new FABP/PPAR modulator (compound 27) and uses obeticholic acid only as a therapeutic comparator in a disease model, without reporting any pharmacokinetic parameters for obeticholic acid. |
| PD | Chen_2025 | not_relevant | 0 | 0 | The paper reports in vitro IC50/EC50 values for a new compound (27) and qualitatively compares its efficacy to obeticholic acid in mice, but it does not provide any exposure-response or dose-response data, PK/PD modeling, or numeric PD parameters for obeticholic acid. |
| PGx | Christen_2022 | not_relevant | 0 | 0 | The paper is a review of animal models for autoimmune hepatitis and does not report pharmacogenomic effects on the PK or PD of obeticholic acid. |
| popPK | Edwards_2017 | irrelevant | 0 | 0 | The study evaluates obeticholic acid as a perpetrator in drug-drug interaction studies, reporting PK parameters only for probe substrates (e.g., midazolam, warfarin) and not for obeticholic acid itself. |
| PGx | Edwards_2017 | not_relevant | 0 | 0 | The paper reports drug-drug interactions (DDIs) of obeticholic acid with probe substrates, not pharmacogenomic effects (gene variants) on PK/PD parameters. |
| PGx | Fan_2019 | not_relevant | 0 | 0 | The paper investigates the mechanism of lignans from Schisandra sphenanthera in protecting against cholestasis and mentions obeticholic acid only as background context, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Gai_2020 | not_relevant | 0 | 0 | The paper studies the effect of obeticholic acid on valproic acid toxicity and mentions FXR variants only as a hypothetical future consideration, without reporting any pharmacogenomic data or PK/PD parameters for obeticholic acid. |
| PGx | Gao_2021 | not_relevant | 0 | 0 | The paper investigates the functional characteristics of induced ballooned hepatocytes and the histological effects of obeticholic acid in a cell model, but it does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Gege_2014 | irrelevant | 0 | 0 | The paper is a review of synthetic FXR agonists and does not report original quantitative pharmacokinetic parameters for obeticholic acid. |
| popPK | Grzegorzewski_2022 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of dextromethorphan, not obeticholic acid. |
| PD | Grzegorzewski_2022 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of dextromethorphan and CYP2D6 polymorphisms, not obeticholic acid, and does not report any pharmacodynamic or exposure-response relationships for the target drug. |
| popPK | Guo_2018 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of transporters in hepatocytes, not a pharmacokinetic study reporting disposition parameters for obeticholic acid. |
| popPK | Guthrie_2018 | irrelevant | 0 | 0 | The study is an in-vitro/in-vivo mechanistic investigation of inflammation where obeticholic acid is used only as a comparator FXR agonist, with no pharmacokinetic parameters reported. |
| PGx | Hu_2024 | not_relevant | 0 | 0 | The paper is a computational drug discovery study screening for novel FXR agonists and does not report any pharmacogenomic effects on the PK or PD of obeticholic acid. |
| PGx | Ishida_2019 | not_relevant | 0 | 0 | The paper investigates the mechanism of CYP1A2 downregulation by obeticholic acid in vitro, not the effect of a gene variant on the PK/PD of obeticholic acid. |
| popPK | Jiang_2022 | irrelevant | 0 | 0 | The study focuses on a new compound (25-HL) and only mentions obeticholic acid as a comparator without providing any pharmacokinetic parameters for it. |
| PGx | Jiang_2024 | not_relevant | 0 | 0 | The study investigates the pharmacological effects of obeticholic acid in neonatal pigs but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| PGx | Jiang_2025 | not_relevant | 0 | 0 | The paper is an animal study in neonatal pigs investigating the efficacy of obeticholic acid in preventing cholestasis; it does not report pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Kim_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of the novel compound MHY5396, with obeticholic acid serving only as a comparator agent without reported PK parameters. |
| PD | Kim_2025 | not_relevant | 0 | 0 | The paper focuses on a new compound (MHY5396) and only uses obeticholic acid (OCA) as a qualitative positive control in efficacy comparisons, without reporting any exposure-response or dose-response PD parameters for OCA. |
| PGx | Kim_2025 | not_relevant | 0 | 0 | The paper focuses on the pharmacology and PK of a new compound (MHY5396) and does not report pharmacogenomic effects on obeticholic acid. |
| popPK | Kjærgaard_2021 | irrelevant | 0 | 0 | The study measures the pharmacokinetics of the PET tracer 11C-CSar to assess the effect of obeticholic acid on bile acid transport, rather than reporting PK parameters for obeticholic acid itself. |
| popPK | Li_2019 | irrelevant | 2 | 0 | The paper describes the development and validation of an analytical method (UPLC-MS/MS) for obeticholic acid in rat plasma, but the provided evidence contains no quantitative pharmacokinetic parameter values (e.g., CL, V, t1/2) for the drug. |
| popPK | Li_2021 | relevant | 8 | 2 | The study is a PK bioequivalence trial for obeticholic acid, but the evidence provided only contains relative percentage changes and qualitative bioequivalence statements, lacking specific quantitative disposition parameters (CL, V, t1/2) or absolute PK values. |
| popPK | Li_2024 | irrelevant | 2 | 0 | The paper describes a bioanalytical method validation and mentions application to PK studies, but no quantitative PK parameters (CL, V, etc.) for obeticholic acid are reported in the provided evidence. |
| popPK | Liang_2023 | irrelevant | 0 | 0 | The study is a reproductive toxicity assessment in mice and does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for obeticholic acid. |
| popPK | Lin_2022 | irrelevant | 0 | 0 | The paper is a mechanistic study investigating the effect of obeticholic acid on fatty acid uptake in mice and cells, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Ling_2026 | not_relevant | 0 | 0 | The paper evaluates the protective effect of obeticholic acid in a 3D liver model exposed to Microcystin-LR, but does not report any pharmacogenomic effects (gene variants) on the drug's PK or PD parameters. |
| popPK | Lu_2024 | irrelevant | 1 | 0 | The paper is a nanomedicine formulation study focusing on drug loading, stability, and therapeutic efficacy in mice, and does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for obeticholic acid. |
| popPK | Luo_2021 | irrelevant | 0 | 0 | The paper focuses on the discovery of a new FXR modulator (compound 11k) and only mentions obeticholic acid as a comparator, without providing any quantitative PK parameters for obeticholic acid. |
| popPK | Massafra_2017 | irrelevant | 0 | 0 | The study is a mechanistic investigation of FXR activation on amino acid metabolism in mice and does not report pharmacokinetic parameters for obeticholic acid. |
| popPK | Mejdrová_2023 | irrelevant | 0 | 0 | The paper describes the discovery of novel CAR agonists and does not report pharmacokinetic parameters for obeticholic acid. |
| PD | Mejdrová_2023 | not_relevant | 0 | 0 | The paper focuses on the discovery of novel CAR agonists and does not report any pharmacodynamic or exposure-response data for obeticholic acid. |
| popPK | Murphy_2024 | irrelevant | 0 | 0 | The paper is a mechanistic study on bile acid transporter localization in NAFLD liver biopsies and does not report pharmacokinetic parameters for obeticholic acid. |
| PD | Murphy_2024 | not_relevant | 0 | 0 | The paper analyzes zonal distribution and membrane localization of bile acid transporters in NAFLD liver biopsies using immunohistochemistry and Bayesian regression; it does not report any pharmacodynamic or exposure-response relationship for obeticholic acid. |
| popPK | Narayanan_2024 | irrelevant | 1 | 0 | The paper is a review article discussing mechanisms and clinical journey without providing original quantitative pharmacokinetic parameter values for obeticholic acid. |
| popPK | Nørgaard_2024 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP regulation and drug-drug interactions, not a pharmacokinetic study reporting disposition parameters for obeticholic acid. |
| PD | Nørgaard_2024 | not_relevant | 1 | 0 | The paper is an in vitro DDI study using hepatocyte models; it mentions obeticholic acid only as a test compound for CYP regulation and explicitly states that EC50 determinations are needed, implying no numeric PD parameters are reported. |
| PGx | Nørgaard_2024 | not_relevant | 0 | 0 | The paper investigates in vitro drug-drug interaction mechanisms (CYP regulation) using obeticholic acid as a small molecule control, but does not report any pharmacogenomic effects (gene variants) on its PK or PD parameters. |
| PGx | Odanga_2025 | not_relevant | 0 | 0 | The study investigates the effects of OCA on healthy vs. diseased hepatocytes in vitro, but does not report pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Ooi_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of elafibranor and its metabolite GFT1007, not obeticholic acid. |
| popPK | Palanisamy_2023 | irrelevant | 0 | 0 | The paper is an in vitro and in silico study on Nigella sativa extracts where obeticholic acid is only mentioned as a phytocompound with docking scores, not as a subject of pharmacokinetic analysis. |
| PD | Palanisamy_2023 | not_relevant | 0 | 0 | The paper mentions obeticholic acid only in the context of in silico molecular docking scores, with no in vivo or in vitro pharmacodynamic or exposure-response data. |
| popPK | Pellicciari_2002 | irrelevant | 0 | 0 | The paper focuses on the synthesis and pharmacological activity (FXR agonism) of 6-ECDCA, not the pharmacokinetics of obeticholic acid. |
| PD | Pellicciari_2002 | not_relevant | 3 | 2 | The paper reports an in vitro EC50 for a different compound (6-ECDCA) and qualitative in vivo activity, but does not provide a quantitative exposure-response or dose-response model with numeric PD parameters for obeticholic acid. |
| PGx | Ramos_2020 | not_relevant | 2 | 5 | The paper investigates the mechanism of action of obeticholic acid on FXR isoforms and metabolic outcomes (PD), but does not report a pharmacogenomic effect of a specific gene variant on a PK or PD parameter of the drug itself. |
| popPK | Rizzo_2005 | irrelevant | 0 | 0 | The paper is a review of FXR signaling and bile acid homeostasis, focusing on CDCA and 6-ECDCA, with no pharmacokinetic data for obeticholic acid. |
| PD | Rizzo_2005 | not_relevant | 1 | 0 | The text is a review discussing FXR biology and mentions in vitro EC50 values for CDCA and 6-ECDCA, but it does not report any pharmacodynamic or exposure-response data for obeticholic acid. |
| popPK | Roda_2017 | relevant | 4 | 2 | The study reports qualitative PK parameters (biodistribution, clearance trends, half-life description) for obeticholic acid in rats, but lacks specific quantitative compartmental PK values (CL, V, ka) which are likely in supplementary material or figures not provided. |
| popPK | Saito_2025 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ammonium metabolism in hepatocyte-like cells, not a pharmacokinetic study reporting disposition parameters for obeticholic acid. |
| popPK | Schramm_2022 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of tropifexor, not obeticholic acid, which is only mentioned as a comparator in the background. |
| popPK | Simaremare_2019 | irrelevant | 0 | 0 | The paper is a pilot study on organophosphate and pyrethroid insecticide exposure in pregnant women and does not mention obeticholic acid or report any pharmacokinetic parameters for it. |
| PD | Simaremare_2019 | not_relevant | 0 | 0 | The paper studies insecticide exposure in pregnant women and does not mention obeticholic acid or any pharmacodynamic relationship. |
| popPK | Stefela_2020 | irrelevant | 2 | 0 | The paper focuses on the mechanism of action (epimerization) of an OCA derivative (3β-isoOCA) rather than reporting quantitative population PK parameters (CL, V, etc.) for obeticholic acid itself, and no numeric PK values are present in the evidence. |
| popPK | Stefela_2021 | irrelevant | 0 | 0 | The paper is a mechanistic study on a new FXR antagonist (7-ELCA) where obeticholic acid is used only as a reference agonist, and no pharmacokinetic parameters for obeticholic acid are reported. |
| popPK | Tølbøl_2018 | irrelevant | 0 | 0 | The study is a pharmacodynamic evaluation of obeticholic acid in mouse models of NASH and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Tølbøl_2018 | not_relevant | 2 | 1 | The study is a single-dose efficacy trial in mice comparing histological endpoints; it does not report plasma concentrations, PK data, or a dose-response curve, making it impossible to derive numeric PD parameters like Emax or EC50. |
| popPK | Valluri_2021 | irrelevant | 2 | 0 | The paper describes a bioanalytical method and mentions a PK study application, but no quantitative PK parameters (CL, V, etc.) are provided in the evidence. |
| popPK | Wang_2021 | relevant | 4 | 5 | The study reports non-compartmental PK parameters (AUC, Cmax, t1/2) for obeticholic acid, but lacks compartmental model parameters (CL, V, Q) and specific clearance values are not explicitly listed in the provided text. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The paper is a nanomedicine delivery study focusing on therapeutic efficacy and biodistribution imaging, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for obeticholic acid. |
| PGx | Weber_2021 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of obeticholic acid on UGT1A1 induction and bilirubin levels in mice, but does not report a pharmacogenomic effect (gene variant changing PK/PD) of the drug itself. |
| popPK | Wilcox_2014 | irrelevant | 0 | 0 | The paper is a systematic review of clinical management for bile acid malabsorption and does not report quantitative pharmacokinetic parameters for obeticholic acid. |
| popPK | Xin_2021 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of caffeine and EGCG in NASH mice where obeticholic acid is used only as a positive control, and no pharmacokinetic parameters are reported. |
| PD | Xin_2021 | not_relevant | 0 | 0 | The paper is a comparative study of caffeine and EGCG in a mouse model, using obeticholic acid only as a single-dose positive control without any exposure-response modeling, concentration measurements, or derivation of PD parameters for OCA. |
| popPK | Xu_2026 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on a new dual modulator where obeticholic acid is used only as a comparator, and no pharmacokinetic parameters are reported. |
| PD | Xu_2026 | not_relevant | 1 | 0 | The paper focuses on the discovery of a new compound (10) and only qualitatively compares its efficacy to obeticholic acid without providing any numeric PD parameters or exposure-response data for obeticholic acid. |
| popPK | Yao_2026 | irrelevant | 0 | 0 | The paper is a bioinformatics study on gene signatures for HCV cirrhosis where obeticholic acid is only mentioned as a potential drug target in molecular docking, with no pharmacokinetic data. |
| popPK | Zanella_2023 | irrelevant | 0 | 0 | The study investigates the behavioral and neurochemical effects of obeticholic acid on cocaine reinstatement, not its pharmacokinetic disposition parameters (CL, V, etc.). |
| PGx | Zeng_2017 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of Schisandrol B via PXR activation and does not report pharmacogenomic effects on the PK or PD of obeticholic acid. |
| popPK | Zhang_2013 | irrelevant | 0 | 0 | The study is a mechanistic investigation of FGF19 gene expression in human ileal explants and does not report any pharmacokinetic parameters for obeticholic acid. |
| popPK | Zhang_2020 | irrelevant | 0 | 0 | The study focuses on the mechanism of isoniazid-induced liver injury and FXR inhibition, using obeticholic acid only as a co-administered FXR agonist without reporting any pharmacokinetic parameters for it. |
| PD | Zhang_2020 | not_relevant | 1 | 0 | The paper reports an IC50 for a different compound (PIH) and uses obeticholic acid only as a qualitative positive control without providing dose-response data or numeric PD parameters for OCA. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of XZP-5610, and obeticholic acid is only mentioned as a comparator drug in the introduction and discussion without any PK parameter reporting. |
| PD | Zhang_2024 | not_relevant | 0 | 0 | The paper focuses exclusively on PK prediction (allometric scaling and PBPK) and dose selection for XZP-5610, reporting no pharmacodynamic data, exposure-response relationships, or numeric PD parameters. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The paper focuses on the discovery of a new FXR partial agonist (V15) and uses obeticholic acid only as a comparator for efficacy, without reporting any pharmacokinetic parameters for obeticholic acid. |
| PD | Zhang_2026 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50, efficacy) for a novel compound (V15), not for obeticholic acid, which is only used as a reference standard. |
| popPK | Zheng_2026 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study focusing on the discovery of a new FXR agonist, with obeticholic acid serving only as a reference compound for efficacy and selectivity, and no pharmacokinetic parameters are reported. |
| PD | Zheng_2026 | not_relevant | 2 | 2 | The paper reports in vitro receptor binding EC50 values and qualitative in vivo efficacy comparisons, but does not provide an exposure-response or dose-response analysis with numeric PD parameters (e.g., Emax, EC50 in vivo, slope) for obeticholic acid. |
| PGx | Zhou_2019 | not_relevant | 0 | 0 | The paper investigates metabolic pathways and transporter interactions in vitro but does not report any genetic variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Zhou_2022 | irrelevant | 0 | 0 | The paper focuses on the discovery of a new drug (ZLY18) and uses obeticholic acid only as a comparator for efficacy, without reporting any pharmacokinetic parameters for obeticholic acid. |
| PGx | Zhou_2025 | not_relevant | 0 | 0 | The paper is a case report describing the diagnosis of PSC with specific gene mutations (PKLR, UGT1A1) and mentions the use of obeticholic acid, but it does not report any pharmacogenomic effect of these variants on the pharmacokinetic or pharmacodynamic parameters of obeticholic acid. |
| PGx | Zhou_2026 | not_relevant | 0 | 0 | The study investigates the synergistic pharmacodynamic effects of obeticholic acid and sulforaphane in a rat model of cholestatic liver injury, but it does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | unknown_2019 | irrelevant | 0 | 0 | no_text gate: only 32 chars of text extracted (&lt; 400) |
| PD | unknown_2019 | not_relevant | 0 | 0 | The provided text is only a title/header for a conference session and contains no data, results, or PD parameters for obeticholic acid. |
| PGx | van_2021 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamic effects of obeticholic acid on bilirubin levels in animal models but does not report any pharmacogenomic effects (gene variant/genotype differences) on PK or PD parameters. |
| popPK | Ðanić_2018 | irrelevant | 0 | 0 | The paper is a review of bile acid pharmacology and metabolic syndrome mechanisms, not a pharmacokinetic study reporting quantitative disposition parameters for obeticholic acid. |
| PD | Ðanić_2018 | not_relevant | 1 | 0 | The text is a review article discussing the general pharmacology of bile acids and metabolic syndrome, containing no specific PK/PD modeling, exposure-response analysis, or numeric PD parameters for obeticholic acid. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_obeticholic_acid`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
