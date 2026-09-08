# phytomenadione

- **generic name:** phytomenadione
- **ATC codes:** `B02BA01`
- **DrugBank:** [DB01022](https://go.drugbank.com/drugs/DB01022)
- **groups:** approved, investigational

## About

**Description.** Vitamin K1, also called phylloquinone or phytonadione, is a fat soluble vitamin.[L33319,L33345] Phylloquinone is a cofactor of the enzyme γ-carboxylase, which modifies and activates precursors to coagulation factors II, VII, IX, and X.[A234264,A234195,A234259] It is indicated in the treatment of coagulation disorders due to faulty formation of coagulation factors II, VII, IX, and X caused by deficiency or interference in the activity of vitamin K.[L33319]

Phylloquinone has been synthesized since at least 1939,[A234384] and was approved by the FDA prior to 1955.[L33389]

**Indication.** Oral phylloquinone is indicated to treat prothrombin deficiency caused by coumarin or indanedione derivatives; and hypoprothrombinemia secondary to antibacterial therapy, salicylates, or obstructive jaundice or biliary fistulas with concomitant bile salt administration.[L33345]

Parenteral (intravenous, intramuscular, and subcutaneous) phylloquinone is indicated to treat coagulation disorders due to faulty formation of coagulation factors II, VII, IX, and X caused by vitamin K deficiency or some interference with vitamin K activity.[L33319] These indications include the above indications as well as hypoprothrombinemia secondary to sprue, ulcerative colitis, celiac disease, intestinal resection, pancreatic cystic fibrosis, or regional enteritis; or hypoprothrombinemia caused by interference with vitamin k metabolism.[L33319]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-06 10:42 | 42:21 | 0/1/0 | 1/0/0 | 0/0/0 | 110,079/6,978 | ollama / qwen3.8:27b-q4_K_M | 13 | 5/8 | 12/1 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Novotny_2010](drugs/drug_phytomenadione/Phytomenadione_Novotny2010_reference.md) | Novotny JA et al., Vitamin K absorption and kinetics in hu…, The British journal of nutr… (2010) | [10.1017/S0007114510001182](https://doi.org/10.1017/S0007114510001182) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [OREILLY_1963](drugs/drug_phytomenadione/pd_OREILLY_1963_prothrombin_complex_activity.md) | OREILLY (1963) | — |

## Coverage

- **PubMed hits:** 47 matched, 44 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mi_2026.pdf` | Mi YN et al., Constant-Speed Intravenous Infusion Mod…, Current drug metabolism (2026) | popPK | 9 | [10.2174/0113892002447026260402063559](https://doi.org/10.2174/0113892002447026260402063559) | [42003058](https://pubmed.ncbi.nlm.nih.gov/42003058) | The paper reports specific quantitative pharmacokinetic parameters (t1/2, CL, Vd) for phylloquinone (phytomenadione) in rats, with all numeric values clearly present in the evidence text. |
| `Reddi_1995.pdf` | Reddi K et al., Interleukin 6 production by lipopolysac…, Cytokine (1995) | pd | 4 | [10.1006/cyto.1995.0034](https://doi.org/10.1006/cyto.1995.0034) | [7640347](https://www.ncbi.nlm.nih.gov/pubmed/7640347) | metadata signals extractable PD data (IC50) |
| `Alade_2024.pdf` | Alade AN et al., Cytochrome P450 Family 4F2 and 4F11 Hap…, ACS pharmacology & translat… (2024) | pgx | 5 | [10.1021/acsptsci.3c00287](https://doi.org/10.1021/acsptsci.3c00287) | [38481683](https://www.ncbi.nlm.nih.gov/pubmed/38481683) | metadata signals extractable PGX data (CYP4F2) |
| `Edson_2013.pdf` | Edson KZ et al., Cytochrome P450-dependent catabolism of…, Biochemistry (2013) | pgx | 5 | [10.1021/bi401208m](https://doi.org/10.1021/bi401208m) | [24138531](https://www.ncbi.nlm.nih.gov/pubmed/24138531) | metadata signals extractable PGX data (CYP4F2) |

<sub>queue written 2026-09-06T20:26:30.748561+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Adams_2005 | not_relevant | 2 | 0 | The text is a qualitative review summarizing the role of vitamin K in bone health and mentions the existence of dose-response studies, but it does not provide any specific numeric PD parameters, concentration-effect curves, or detailed data for phytomenadione. |
| PGx | Crosier_2009 | not_relevant | 2 | 8 | The paper reports associations between VKORC1/GGCX genotypes and baseline vitamin K status markers (phylloquinone levels, osteocalcin carboxylation) in a general population, not the pharmacokinetic or pharmacodynamic response to a specific administered dose of phytomenadione. |
| PGx | Dashti_2014 | not_relevant | 2 | 5 | The paper reports genetic associations with circulating phylloquinone (vitamin K) levels, which is a biomarker of nutritional status, not a pharmacokinetic or pharmacodynamic parameter of the drug phytomenadione. |
| PD | Ghavami_2026 | not_relevant | 2 | 1 | The paper reports in vitro IC50 values and in vivo tumor volume outcomes, but does not provide a concentration-effect curve, dose-response analysis, or numeric PD parameters (Emax, EC50, slope) for phytomenadione. |
| PD | Haghighat_2025 | not_relevant | 2 | 1 | The paper is a systematic review and meta-analysis of epidemiological data regarding dietary intake and fracture risk, not a pharmacodynamic study of phytomenadione with exposure-response modeling or numeric PD parameters like Emax or EC50. |
| PD | Hao_2017 | not_relevant | 2 | 1 | The paper is an epidemiological meta-analysis of dietary intake and fracture risk, not a pharmacodynamic study of phytomenadione (vitamin K2) exposure-response or dose-response with PD parameters. |
| PGx | Holden_2010 | not_relevant | 0 | 0 | The paper reports an association between apolipoprotein E genotype and PIVKA-II levels, but does not report a pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of phytomenadione (Vitamin K1) administration. |
| popPK | Hollinger_1993 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for brodifacoum, not phytomenadione, which is only mentioned as a treatment agent. |
| PD | Jadhav_2022 | not_relevant | 2 | 1 | The paper is a synthetic review discussing molecular pathways and general clinical benefits of Vitamin K2-7, but it does not present or report specific numeric PD parameters (Emax, EC50) or an extractable exposure-response curve in the provided text. |
| PD | Kim_1999 | not_relevant | 0 | 0 | The provided text is metadata for a software tool (GROBID) and does not contain any pharmacodynamic data, models, or parameters for phytomenadione. |
| PGx | Margier_2021 | not_relevant | 4 | 8 | The study investigates the role of the ABCB1 transporter in vitamin K efflux and absorption using cell lines and knockout mice, but it does not report a pharmacogenomic effect of a specific human gene variant on a PK/PD parameter of phytomenadione. |
| popPK | Mateu-Fabregat_2026 | irrelevant | 0 | 0 | The paper is a nutritional epidemiology study analyzing the association between phylloquinone intake and neurodevelopmental outcomes, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Newman_2002 | not_relevant | 2 | 5 | The paper investigates the cellular uptake mechanism of phylloquinone (vitamin K1) and the role of ApoE isoforms, but it does not report a pharmacogenomic effect on the PK or PD parameters of phytomenadione (vitamin K2). |
| PGx | Reboul_2023 | not_relevant | 0 | 0 | The paper is a review of transport proteins involved in the absorption of fat-soluble vitamins and does not report specific pharmacogenomic effects of gene variants on the PK/PD of phytomenadione. |
| PD | Schlagheck_1997 | not_relevant | 0 | 0 | The paper studies the dose-response of olestra on nutrient absorption, not the pharmacodynamics of phytomenadione itself. |
| PD | Shetty_1989 | not_relevant | 1 | 0 | The text is a qualitative review of warfarin pharmacokinetics and mentions phytomenadione only in the context of overdose management without providing any numeric PD parameters or exposure-response data. |
| PGx | Sogabe_2007 | not_relevant | 2 | 5 | The study investigates the effect of a GGCX polymorphism on the correlation between dietary vitamin K intake and osteocalcin carboxylation status, rather than the pharmacokinetic or pharmacodynamic response to a specific administered dose of phytomenadione. |
| popPK | Solis-Trapala_2015 | irrelevant | 0 | 0 | The study is a cross-sectional analysis of bone metabolism and body composition where phylloquinone is used only as a biomarker, not as a subject drug for pharmacokinetic parameter estimation. |
| PD | Truong_2012 | not_relevant | 0 | 0 | The paper is a clinical case report regarding the management of warfarin therapy during travel and does not contain any pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for phytomenadione. |
| PD | Wang_2021 | not_relevant | 0 | 0 | The paper is an epidemiological cohort study analyzing dietary intake quintiles and cancer risk, not a pharmacodynamic study of phytomenadione with exposure-response or dose-response parameters. |
| popPK | Xue_2023 | irrelevant | 0 | 0 | The study focuses on warfarin pharmacokinetics and the effect of vitamin K concentrations on warfarin pharmacodynamics, but does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for phytomenadione itself. |
| PD | Yu_2021 | not_relevant | 0 | 0 | The paper is an epidemiological study assessing dietary intake and cancer risk, not a pharmacodynamic or exposure-response analysis of phytomenadione. |
| PD | Zhang_2024 | not_relevant | 1 | 0 | The paper is a clinical review of Vitamin K2 that discusses general health outcomes and mentions the need for dose-response research, but it does not report any specific pharmacodynamic model, concentration-effect curve, or numeric PD parameters (Emax, EC50, etc.) for phytomenadione. |
| popPK | unknown_2023 | irrelevant | 0 | 0 | The provided evidence contains only a conference title and no pharmacokinetic data or parameters for phytomenadione. |
| PD | unknown_2023 | not_relevant | 0 | 0 | The provided text is only a conference title and contains no data, analysis, or parameters regarding phytomenadione. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_phytomenadione`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
