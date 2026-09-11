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
| 2026-09-11 04:46 | 21:13 | 0/0/0 | 0/0/0 | 0/0/0 | 356,664/6,709 | ollama / qwen3.8:27b-mtp-q8_0 | 29 | 0/0 | 29/0 | 0 |

## popPK records

_not available_

## Coverage

- **PubMed hits:** 75 matched, 84 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Alkhouri_2024.pdf` | Alkhouri N et al., Safety, pharmacokinetics and pharmacody…, Liver international : offic… (2024) | popPK | 8 | [10.1111/liv.15816](https://doi.org/10.1111/liv.15816) | [38293761](https://pubmed.ncbi.nlm.nih.gov/38293761) | The paper is a PK study of obeticholic acid, but the evidence text only provides qualitative trends and relative fold-changes (e.g., 1.8-fold increase) without specific numeric values for clearance, volume, or half-life. |

<sub>queue written 2026-09-11T04:42:31.056445+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Aizawa_2016 | not_relevant | 0 | 0 | The paper is a general review of NAFLD/NASH management and mentions obeticholic acid as a treatment option, but it does not report any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Alkhouri_2024 | relevant | 8 | 2 | The paper is a PK study of obeticholic acid, but the evidence text only provides qualitative trends and relative fold-changes (e.g., 1.8-fold increase) without specific numeric values for clearance, volume, or half-life. |
| PD | Alkhouri_2024 | not_relevant | 3 | 1 | The paper reports qualitative changes in pharmacodynamic markers (FXR activation, transaminases) and PK exposure differences by fibrosis stage, but does not provide numeric PD parameters (Emax, EC50) or a quantitative exposure-response model. |
| popPK | Amatya_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of a gold nanoparticle formulation (ESC-ABD-AuNPs), and obeticholic acid is only used as a model drug for loading efficiency tests without any PK parameter reporting. |
| popPK | Carino_2018 | irrelevant | 0 | 0 | The paper focuses on the antifibrotic mechanism of a novel FXR ligand (BAR704) and does not report pharmacokinetic parameters for obeticholic acid. |
| PD | Carino_2018 | not_relevant | 2 | 1 | The paper focuses on a novel compound (BAR704) and only mentions obeticholic acid qualitatively as a comparator with side effects, providing no PD parameters or exposure-response data for obeticholic acid. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on FABP1 inhibitors where obeticholic acid is used only as a comparator for efficacy, with no pharmacokinetic parameters reported. |
| PD | Chen_2024 | not_relevant | 0 | 0 | The paper focuses on the design and synthesis of novel FABP1 inhibitors and only qualitatively compares the efficacy of the lead compound to obeticholic acid in mice, without reporting any exposure-response or dose-response data for obeticholic acid. |
| popPK | Chen_2025 | irrelevant | 0 | 0 | The paper focuses on the discovery of a new FABP/PPAR modulator (compound 27) and uses obeticholic acid only as a therapeutic comparator in a disease model, without reporting any pharmacokinetic parameters for obeticholic acid. |
| PD | Chen_2025 | not_relevant | 0 | 0 | The paper reports in vitro IC50/EC50 values for a new compound (27) and qualitatively compares its efficacy to obeticholic acid in mice, but it does not provide any exposure-response or dose-response data, PK/PD modeling, or numeric PD parameters for obeticholic acid. |
| PGx | Christen_2022 | not_relevant | 0 | 0 | The paper is a review of animal models for autoimmune hepatitis and does not report pharmacogenomic effects on the PK or PD of obeticholic acid. |
| popPK | Edwards_2017 | irrelevant | 2 | 0 | The study evaluates OCA as a perpetrator of drug-drug interactions on probe substrates, reporting only relative changes in probe PK parameters rather than quantitative disposition parameters (CL, V, etc.) for OCA itself. |
| PGx | Edwards_2017 | not_relevant | 0 | 0 | The paper reports drug-drug interactions (DDI) of obeticholic acid with probe substrates, not pharmacogenomic effects (gene variants) on obeticholic acid's PK/PD. |
| PGx | Fan_2019 | not_relevant | 0 | 0 | The paper investigates the mechanism of lignans from Schisandra sphenanthera in protecting against cholestasis and mentions obeticholic acid only as background context, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Gai_2020 | not_relevant | 0 | 0 | The paper studies the effect of obeticholic acid on valproic acid toxicity and mentions FXR variants only as a hypothetical future consideration, without reporting any pharmacogenomic data or PK/PD parameters for obeticholic acid. |
| PGx | Gao_2021 | not_relevant | 0 | 0 | The paper investigates the functional characteristics of induced ballooned hepatocytes and the histological effects of obeticholic acid in a cell model, but it does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Grzegorzewski_2022 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of dextromethorphan (DXM) and CYP2D6 polymorphism, with obeticholic acid appearing only as a co-administered drug in a cited study, not as the subject of PK parameter estimation. |
| PD | Grzegorzewski_2022 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics (PBPK) of dextromethorphan and CYP2D6 polymorphisms; it does not study obeticholic acid or report any pharmacodynamic (exposure-response) parameters. |
| popPK | Guo_2018 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of transporters in hepatocytes, not a pharmacokinetic study reporting disposition parameters for obeticholic acid. |
| popPK | Guthrie_2018 | irrelevant | 0 | 0 | The study is an in-vitro/in-vivo mechanistic investigation of inflammation where obeticholic acid is used only as a comparator FXR agonist, with no pharmacokinetic parameters reported. |
| PGx | Hu_2024 | not_relevant | 0 | 0 | The paper is a computational study on novel FXR agonists and does not report pharmacogenomic effects on obeticholic acid PK/PD parameters. |
| PGx | Ishida_2019 | not_relevant | 0 | 0 | The paper investigates the mechanism of CYP1A2 downregulation by obeticholic acid in vitro, not the effect of a gene variant on the PK/PD of obeticholic acid. |
| PGx | Jiang_2024 | not_relevant | 0 | 0 | The paper is an animal study (neonatal pigs) investigating the efficacy of obeticholic acid in preventing cholestasis; it does not report pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Jiang_2025 | not_relevant | 0 | 0 | The paper is an animal study investigating the efficacy of obeticholic acid in neonatal pigs and does not report pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Kim_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of the novel compound MHY5396, using obeticholic acid only as a comparator agent without reporting its PK parameters. |
| PD | Kim_2025 | not_relevant | 0 | 0 | The paper focuses on a novel compound (MHY5396) and only uses obeticholic acid (OCA) as a qualitative positive control for receptor binding and efficacy comparisons, without reporting any exposure-response or dose-response PD parameters for OCA. |
| PGx | Kim_2025 | not_relevant | 0 | 0 | The paper reports pharmacokinetic and pharmacodynamic data for a novel compound (MHY5396) and uses obeticholic acid only as a positive control, without investigating any gene variants or pharmacogenomic effects on obeticholic acid. |
| popPK | Kjærgaard_2021 | irrelevant | 0 | 0 | The study measures the pharmacokinetics of the PET tracer 11C-CSar to assess the effect of obeticholic acid on bile acid transport, rather than reporting PK parameters for obeticholic acid itself. |
| popPK | Liang_2023 | irrelevant | 0 | 0 | The study is a reproductive toxicity assessment in mice and does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for obeticholic acid. |
| popPK | Lin_2022 | irrelevant | 0 | 0 | The paper is a mechanistic study investigating the effect of obeticholic acid on fatty acid uptake in mice and cells, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Ling_2026 | not_relevant | 0 | 0 | The paper evaluates the protective effect of obeticholic acid in a 3D liver model exposed to Microcystin-LR, but does not report any pharmacogenomic effects (gene variants) on the drug's PK or PD parameters. |
| popPK | Lu_2024 | irrelevant | 0 | 0 | The paper is a nanomedicine formulation study focusing on drug delivery and therapeutic efficacy in mice, reporting tissue concentrations and release profiles rather than quantitative pharmacokinetic parameters (CL, V, ka) for obeticholic acid. |
| popPK | Luo_2021 | irrelevant | 0 | 0 | The paper focuses on the discovery of a new FXR modulator (compound 11k) and only mentions obeticholic acid as a comparator, without providing any quantitative PK parameters for obeticholic acid. |
| popPK | Massafra_2017 | irrelevant | 0 | 0 | The study is a mechanistic investigation of FXR activation on amino acid metabolism in mice and does not report pharmacokinetic parameters for obeticholic acid. |
| popPK | Mejdrová_2023 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel CAR agonists and does not report pharmacokinetic parameters for obeticholic acid. |
| popPK | Murphy_2024 | irrelevant | 0 | 0 | The paper is a mechanistic study on bile acid transporter zonation in NAFLD liver biopsies and does not report pharmacokinetic parameters for obeticholic acid. |
| PD | Murphy_2024 | not_relevant | 0 | 0 | The paper analyzes zonal distribution and membrane localization of bile acid transporters in NAFLD liver biopsies using immunohistochemistry and does not report any pharmacodynamic or exposure-response data for obeticholic acid. |
| popPK | Nørgaard_2024 | irrelevant | 0 | 0 | The study is an in-vitro investigation of drug-drug interaction mechanisms (CYP regulation) using obeticholic acid as a perpetrator, and it does not report pharmacokinetic disposition parameters (CL, V, etc.) for obeticholic acid. |
| PD | Nørgaard_2024 | not_relevant | 1 | 0 | The paper is an in vitro study assessing CYP regulation (DDI risk) using advanced cell systems; it does not report in vivo pharmacodynamic or exposure-response relationships for obeticholic acid. |
| PGx | Nørgaard_2024 | not_relevant | 0 | 0 | The paper evaluates in vitro drug-drug interaction mechanisms for peptides and small molecules (including obeticholic acid) but does not report pharmacogenomic effects (gene variants) on PK/PD parameters. |
| PGx | Odanga_2025 | not_relevant | 0 | 0 | The study investigates the effects of obeticholic acid on primary human hepatocytes in vitro but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Ooi_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of elafibranor and its metabolite GFT1007, not obeticholic acid. |
| PD | Ooi_2026 | not_relevant | 0 | 0 | The paper reports PK/PD analyses for elafibranor, not obeticholic acid. |
| popPK | Palanisamy_2023 | irrelevant | 0 | 0 | The paper is an in vitro and in silico study on Nigella sativa extracts for wound healing, where obeticholic acid is only mentioned as a phytocompound with docking scores, not as a subject of pharmacokinetic analysis. |
| PD | Palanisamy_2023 | not_relevant | 0 | 0 | The paper is an in vitro/in silico study on Nigella sativa extracts; obeticholic acid is only mentioned as a phytocompound identified by GC-MS and docked in silico, with no pharmacodynamic or exposure-response data reported. |
| popPK | Pellicciari_2002 | irrelevant | 0 | 0 | The paper focuses on the synthesis and pharmacological activity (FXR agonism) of 6-ECDCA, not the pharmacokinetics of obeticholic acid. |
| PD | Pellicciari_2002 | not_relevant | 3 | 2 | The paper reports an in vitro EC50 for a different compound (6-ECDCA) and qualitative in vivo activity, but does not provide a quantitative exposure-response or dose-response model with numeric PD parameters for obeticholic acid. |
| PGx | Ramos_2020 | not_relevant | 2 | 5 | The paper investigates the mechanism of action of obeticholic acid on FXR isoforms and metabolic outcomes (PD), but does not report a pharmacogenomic effect of a specific gene variant on a PK or PD parameter of the drug itself. |
| popPK | Rizzo_2005 | irrelevant | 0 | 0 | The paper is a review of FXR signaling and bile acid homeostasis, focusing on CDCA and 6-ECDCA, with no pharmacokinetic data for obeticholic acid. |
| PD | Rizzo_2005 | not_relevant | 1 | 0 | The text is a review discussing FXR biology and mentions in vitro EC50 values for CDCA and 6-ECDCA, but it does not report any pharmacodynamic or exposure-response data for obeticholic acid. |
| popPK | Roda_2017 | irrelevant | 2 | 1 | The study reports biodistribution and mass balance data (percent recovery, concentrations) rather than compartmental pharmacokinetic parameters (CL, V, ka) for obeticholic acid. |
| popPK | Saito_2025 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ammonium metabolism in hepatocyte-like cells, not a pharmacokinetic study reporting disposition parameters for obeticholic acid. |
| popPK | Schramm_2022 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of tropifexor, not obeticholic acid, which is only mentioned as a comparator in the introduction. |
| PD | Schramm_2022 | not_relevant | 0 | 0 | not captured |
| popPK | Simaremare_2019 | irrelevant | 0 | 0 | The paper is a biomonitoring study of organophosphate and pyrethroid insecticides in pregnant women and does not involve obeticholic acid or pharmacokinetic modeling. |
| PD | Simaremare_2019 | not_relevant | 0 | 0 | The paper is a pilot study on the correlation between insecticide concentrations in blood and their metabolites in urine; it does not involve obeticholic acid or report any pharmacodynamic (exposure-response) relationship. |
| popPK | Stefela_2021 | irrelevant | 0 | 0 | The paper is a mechanistic study on a new FXR antagonist (7-ELCA) where obeticholic acid is used only as a reference agonist, and no pharmacokinetic parameters for obeticholic acid are reported. |
| popPK | Tølbøl_2018 | irrelevant | 0 | 0 | The study is a pharmacodynamic evaluation of obeticholic acid in mouse models of NASH and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Tølbøl_2018 | not_relevant | 2 | 0 | The paper reports qualitative histological and metabolic treatment effects in mouse models but does not provide numeric PD parameters (e.g., Emax, EC50) or concentration-effect curves for obeticholic acid. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The paper is a drug delivery and efficacy study for a liposomal formulation of obeticholic acid, focusing on biodistribution and therapeutic outcomes rather than reporting quantitative pharmacokinetic parameters (CL, V, ka) for the drug itself. |
| PGx | Weber_2021 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of obeticholic acid on UGT1A1 induction and bilirubin levels in mice, but does not report a pharmacogenomic effect (gene variant changing PK/PD) of the drug itself. |
| popPK | Wilcox_2014 | irrelevant | 0 | 0 | The paper is a systematic review of clinical management for bile acid malabsorption and does not report quantitative pharmacokinetic parameters for obeticholic acid. |
| popPK | Xin_2021 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of caffeine and EGCG in NASH mice where obeticholic acid is used only as a positive control, and no pharmacokinetic parameters are reported. |
| PD | Xin_2021 | not_relevant | 0 | 0 | The paper is a comparative study of caffeine and EGCG in a mouse model, using obeticholic acid only as a single-dose positive control without any exposure-response modeling or derivation of PD parameters for OCA. |
| popPK | Xu_2026 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on a new dual modulator where obeticholic acid is used only as a comparator, and no pharmacokinetic parameters are reported. |
| PD | Xu_2026 | not_relevant | 1 | 0 | The paper focuses on the discovery of a new compound (10) and only qualitatively compares its efficacy to obeticholic acid without providing any numeric PD parameters or exposure-response data for obeticholic acid. |
| popPK | Yao_2026 | irrelevant | 0 | 0 | The paper is a bioinformatics study on gene signatures for HCV cirrhosis where obeticholic acid is only mentioned as a potential drug target in molecular docking, with no pharmacokinetic data. |
| popPK | Zanella_2023 | irrelevant | 0 | 0 | The study investigates the behavioral and neurochemical effects of obeticholic acid on cocaine reinstatement and dopamine clearance, not the pharmacokinetic disposition parameters (CL, V, etc.) of the drug itself. |
| PGx | Zeng_2017 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of Schisandrol B via PXR activation and does not report pharmacogenomic effects on the PK or PD of obeticholic acid. |
| popPK | Zhang_2013 | irrelevant | 0 | 0 | The study is a mechanistic investigation of FGF19 gene expression in human ileal explants and does not report any pharmacokinetic parameters for obeticholic acid. |
| popPK | Zhang_2020 | irrelevant | 0 | 0 | The study focuses on the mechanism of isoniazid-induced liver injury and FXR inhibition, using obeticholic acid only as a co-administered FXR agonist without reporting any pharmacokinetic parameters for it. |
| PD | Zhang_2020 | not_relevant | 1 | 0 | The paper reports an IC50 for a different compound (PIH) and uses obeticholic acid only as a qualitative positive control without providing dose-response data or numeric PD parameters for OCA. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of XZP-5610, and obeticholic acid is only mentioned as a comparator in the introduction without any PK parameter reporting. |
| PD | Zhang_2024 | not_relevant | 0 | 0 | The paper focuses on PK prediction and PBPK modeling for XZP-5610; it mentions obeticholic acid only as background context without providing any PD or exposure-response data for it. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The paper focuses on the discovery of a new FXR partial agonist (V15) and uses obeticholic acid only as a comparator for efficacy, without reporting any pharmacokinetic parameters for obeticholic acid. |
| PD | Zhang_2026 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50, efficacy) for a novel compound (V15), not for obeticholic acid, which is only used as a reference standard. |
| popPK | Zheng_2026 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study focusing on the discovery of a new FXR agonist, with obeticholic acid serving only as a reference compound for efficacy and selectivity, and no pharmacokinetic parameters are reported. |
| PD | Zheng_2026 | not_relevant | 2 | 2 | The paper reports in vitro receptor binding EC50 values and qualitative in vivo efficacy comparisons, but does not provide an exposure-response or dose-response analysis with numeric PD parameters (e.g., Emax, EC50 in vivo, slope) for obeticholic acid. |
| PGx | Zhou_2019 | not_relevant | 0 | 0 | The paper investigates metabolic pathways and transporter interactions in vitro but does not report any genetic variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Zhou_2022 | irrelevant | 0 | 0 | The paper focuses on the discovery of a new drug (ZLY18) and uses obeticholic acid only as a comparator for efficacy, without reporting any pharmacokinetic parameters for obeticholic acid. |
| PGx | Zhou_2025 | not_relevant | 0 | 0 | The paper is a clinical case report describing the diagnosis and treatment of a patient with PSC and specific gene mutations, but it does not report a pharmacogenomic study analyzing how these variants affect the pharmacokinetics or pharmacodynamics of obeticholic acid. |
| PGx | Zhou_2026 | not_relevant | 0 | 0 | The study investigates the synergistic pharmacodynamic effects of obeticholic acid and sulforaphane in a rat model of cholestatic liver injury, but it does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | unknown_2019 | irrelevant | 0 | 0 | The provided evidence contains only a conference title and no pharmacokinetic data or parameters for obeticholic acid. |
| PD | unknown_2019 | not_relevant | 0 | 0 | The provided text is only a title/header for a conference session and contains no data, results, or PD parameters for obeticholic acid. |
| PGx | van_2021 | not_relevant | 0 | 0 | The paper investigates the therapeutic efficacy of obeticholic acid in animal models of hyperbilirubinemia but does not report pharmacogenomic effects (gene variant-dependent changes) on PK or PD parameters. |
| popPK | Ðanić_2018 | irrelevant | 0 | 0 | The paper is a review of bile acid pharmacology and metabolic syndrome mechanisms, not a pharmacokinetic study reporting quantitative disposition parameters for obeticholic acid. |
| PD | Ðanić_2018 | not_relevant | 1 | 0 | The paper is a general review of bile acid pharmacology and metabolic syndrome, lacking any specific quantitative pharmacodynamic modeling or numeric exposure-response parameters for obeticholic acid. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_obeticholic_acid`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
