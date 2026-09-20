<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;phytomenadione&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Phytomenadione_Novotny2010_reference&quot;,&quot;label&quot;:&quot;Novotny_2010_reference&quot;,&quot;href&quot;:&quot;drugs/drug_phytomenadione/Phytomenadione_Novotny2010_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

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
| 2026-09-18 22:07 | 5:55 | 0/1/0 | 1/1/0 | 0/0/3 | 178,123/10,585 | ollama / qwen3.8:27b-mtp-q8_0 | 13 | 5/8 | 12/1 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Novotny_2010_reference](drugs/drug_phytomenadione/Phytomenadione_Novotny2010_reference.md) | Novotny JA et al., Vitamin K absorption and kinetics in hu…, The British journal of nutr… (2010) | [10.1017/S0007114510001182](https://doi.org/10.1017/S0007114510001182) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [OREILLY_1963](drugs/drug_phytomenadione/pd_OREILLY_1963_prothrombin_complex_activity.md) | OREILLY (1963) | — |
| <span class="pk-badge pk-badge--red">rejected</span> | [Filonov_2018](drugs/drug_phytomenadione/pd_Filonov_2018_CFDA.md) | Filonov D et al., Initial Assessment of Variability of Re…, Frontiers in public health (2018) | [10.3389/fpubh.2018.00369](https://doi.org/10.3389/fpubh.2018.00369) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **ABCC6** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Marinova_2013](drugs/drug_phytomenadione/pgx_Marinova_2013_ABCC6_Q100.md) | Marinova M et al., VKORC1-dependent pharmacokinetics of in…, European journal of clinica… (2013) | [10.1007/s00228-012-1362-y](https://doi.org/10.1007/s00228-012-1362-y) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP4F2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Marinova_2013](drugs/drug_phytomenadione/pgx_Marinova_2013_CYP4F2_Q100.md) | Marinova M et al., VKORC1-dependent pharmacokinetics of in…, European journal of clinica… (2013) | [10.1007/s00228-012-1362-y](https://doi.org/10.1007/s00228-012-1362-y) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **VKORC1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Marinova_2013](drugs/drug_phytomenadione/pgx_Marinova_2013_VKORC1_Q100.md) | Marinova M et al., VKORC1-dependent pharmacokinetics of in…, European journal of clinica… (2013) | [10.1007/s00228-012-1362-y](https://doi.org/10.1007/s00228-012-1362-y) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 47 matched, 44 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mi_2026.pdf` | Mi YN et al., Constant-Speed Intravenous Infusion Mod…, Current drug metabolism (2026) | popPK | 9 | [10.2174/0113892002447026260402063559](https://doi.org/10.2174/0113892002447026260402063559) | [42003058](https://pubmed.ncbi.nlm.nih.gov/42003058) | The study reports quantitative pharmacokinetic parameters (t1/2, CL, Vd) for phylloquinone (phytomenadione) in rats, with specific numeric values provided in the text. |
| `Reddi_1995.pdf` | Reddi K et al., Interleukin 6 production by lipopolysac…, Cytokine (1995) | pd | 4 | [10.1006/cyto.1995.0034](https://doi.org/10.1006/cyto.1995.0034) | [7640347](https://www.ncbi.nlm.nih.gov/pubmed/7640347) | metadata signals extractable PD data (IC50) |
| `Alade_2024.pdf` | Alade AN et al., Cytochrome P450 Family 4F2 and 4F11 Hap…, ACS pharmacology & translat… (2024) | pgx | 5 | [10.1021/acsptsci.3c00287](https://doi.org/10.1021/acsptsci.3c00287) | [38481683](https://www.ncbi.nlm.nih.gov/pubmed/38481683) | metadata signals extractable PGX data (CYP4F2) |
| `Edson_2013.pdf` | Edson KZ et al., Cytochrome P450-dependent catabolism of…, Biochemistry (2013) | pgx | 5 | [10.1021/bi401208m](https://doi.org/10.1021/bi401208m) | [24138531](https://www.ncbi.nlm.nih.gov/pubmed/24138531) | metadata signals extractable PGX data (CYP4F2) |

<sub>queue written 2026-09-18T22:02:21.094187+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Adams_2005 | not_relevant | 2 | 0 | The text is a narrative review summarizing the role of Vitamin K in bone health and arterial calcification; it mentions dose-response studies qualitatively but does not provide specific numeric PD parameters, concentration-effect curves, or model fits for phytomenadione. |
| PGx | Alade_2024 | not_relevant | 0 | 0 | The study focuses on phylloquinone (Vitamin K1) metabolism, not phytomenadione (Vitamin K2). |
| PGx | Crosier_2009 | not_relevant | 0 | 0 | The study examines baseline vitamin K status (phylloquinone levels) in a general population, not the pharmacokinetics or pharmacodynamics of phytomenadione administration. |
| PGx | Dashti_2014 | not_relevant | 0 | 0 | The study investigates genetic associations with circulating phylloquinone (vitamin K) levels in the general population, not the pharmacokinetics or pharmacodynamics of phytomenadione as a therapeutic drug. |
| PD | Ghavami_2026 | not_relevant | 2 | 1 | The paper reports in vitro IC50 values and in vivo tumor volume outcomes, but does not provide a concentration-effect or dose-response curve, nor does it link exposure to effect with numeric PD parameters (e.g., Emax, EC50 in vivo, slope) for phytomenadione. |
| PD | Haghighat_2025 | not_relevant | 2 | 1 | The paper is a meta-analysis of epidemiological data on dietary intake and fracture risk, not a pharmacodynamic study of phytomenadione exposure or dose-response with numeric PD parameters like Emax or EC50. |
| PD | Hao_2017 | not_relevant | 2 | 1 | The paper is a meta-analysis of epidemiological studies examining the association between dietary intake and fracture risk, not a pharmacodynamic study measuring drug concentration or dose-response in a biological system with PD parameters like Emax or EC50. |
| PGx | Holden_2010 | not_relevant | 2 | 5 | The paper reports an association between Apolipoprotein E genotype and PIVKA-II levels, but does not report a pharmacogenomic effect on the PK/PD of phytomenadione (Vitamin K1) administration. |
| popPK | Hollinger_1993 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for brodifacoum, not phytomenadione, which is only mentioned as a treatment agent. |
| PD | Jadhav_2022 | not_relevant | 2 | 0 | The paper is a synthetic review discussing mechanisms and clinical trials but does not present original data or specific numeric PD parameters (Emax, EC50) for phytomenadione. |
| PD | Kim_1999 | not_relevant | 0 | 0 | The provided text is metadata from a document processing tool (GROBID) and does not contain any scientific content, data, or analysis regarding phytomenadione or pharmacodynamics. |
| PGx | Kohlmeier_1996 | not_relevant | 5 | 2 | The paper discusses phylloquinone (Vitamin K1), not phytomenadione (Vitamin K2), and reports qualitative associations with ApoE variants rather than fitted pharmacokinetic effect sizes. |
| PGx | Margier_2021 | not_relevant | 5 | 8 | The study investigates the role of the ABCB1 transporter in vitamin K (phytomenadione) absorption using cell lines and knockout mice, but it does not report a pharmacogenomic effect based on human genetic variants or genotypes. |
| popPK | Mateu-Fabregat_2026 | irrelevant | 0 | 0 | The paper is a nutritional epidemiology study examining the association between phylloquinone intake and neurodevelopmental outcomes, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Newman_2002 | not_relevant | 2 | 5 | The paper studies the cellular uptake mechanism of phylloquinone (vitamin K1) and the role of apoE isoforms, but it does not report a pharmacokinetic or pharmacodynamic effect of a gene variant on the drug phytomenadione (vitamin K3). |
| PGx | Reboul_2023 | not_relevant | 0 | 0 | The paper is a review of transport proteins for fat-soluble vitamins and does not report pharmacogenomic effects on phytomenadione PK/PD parameters. |
| PD | Schlagheck_1997 | not_relevant | 0 | 0 | The paper studies the dose-response of olestra on nutrient absorption, not the pharmacodynamics of phytomenadione itself. |
| PD | Shearer_1976 | not_relevant | 0 | 0 | The paper investigates the dose-response relationship between warfarin and phylloquinone metabolism, not the pharmacodynamic effect of phytomenadione (vitamin K1) itself. |
| PD | Shetty_1989 | not_relevant | 1 | 0 | The text is a qualitative review of warfarin pharmacokinetics and mentions phytomenadione only in the context of overdose management duration, without providing any numeric PD parameters or exposure-response data. |
| PGx | Sogabe_2007 | not_relevant | 0 | 0 | The study investigates the pharmacodynamics of Vitamin K (specifically MK-7) and osteocalcin carboxylation, not the pharmacokinetics or pharmacodynamics of the drug phytomenadione (Vitamin K1). |
| popPK | Solis-Trapala_2015 | irrelevant | 0 | 0 | The study is a cross-sectional analysis of bone metabolism and body composition where phylloquinone is used only as a biomarker, not as a subject drug for pharmacokinetic parameter estimation. |
| PD | Truong_2012 | not_relevant | 0 | 0 | The paper is a clinical case report regarding the management of warfarin therapy during travel; it mentions phytonadione only as a contingency plan that was not used, and contains no pharmacodynamic data, exposure-response analysis, or numeric PD parameters. |
| PD | Wang_2021 | not_relevant | 0 | 0 | The paper is an epidemiological cohort study analyzing dietary intake quintiles and cancer risk, not a pharmacodynamic study of phytomenadione (vitamin K1) exposure-response or dose-response with numeric PD parameters. |
| PD | White_2017 | not_relevant | 0 | 0 | The paper models the dose-response relationship for soybean oil (a food matrix component) on the bioavailability of phylloquinone, not the pharmacodynamic or exposure-response relationship of the drug phytomenadione itself. |
| popPK | Xue_2023 | irrelevant | 0 | 0 | The study focuses on warfarin pharmacokinetics and the relationship between vitamin K concentrations and warfarin variability, rather than reporting quantitative pharmacokinetic parameters (CL, V, etc.) for phytomenadione as the subject drug. |
| PD | Xue_2023 | not_relevant | 4 | 2 | The paper investigates the effect of vitamin K (phytomenadione) on warfarin PK/PD parameters (like EC50) but does not report a direct concentration-effect relationship or numeric PD parameters for phytomenadione itself. |
| PD | Yu_2021 | not_relevant | 0 | 0 | The paper is an epidemiological study assessing dietary intake and cancer risk using hazard ratios, not a pharmacodynamic study measuring drug concentration or dose-response relationships for phytomenadione. |
| PD | Zhang_2024 | not_relevant | 1 | 0 | The paper is a general clinical review of Vitamin K2 that qualitatively discusses the need for dose-response research but does not report any specific numeric PD parameters or exposure-response models for phytomenadione. |
| popPK | unknown_2023 | irrelevant | 0 | 0 | no_text gate: only 16 chars of text extracted (&lt; 400) |
| PD | unknown_2023 | not_relevant | 0 | 0 | The provided text is only a conference title and contains no data, analysis, or parameters regarding phytomenadione pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_phytomenadione`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
