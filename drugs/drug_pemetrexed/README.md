<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;pemetrexed&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pemetrexed_Boosman2023_reference&quot;,&quot;label&quot;:&quot;Boosman_2023_reference&quot;,&quot;href&quot;:&quot;drugs/drug_pemetrexed/Pemetrexed_Boosman2023_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pemetrexed_Cao2022_reference&quot;,&quot;label&quot;:&quot;Cao_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_pemetrexed/Pemetrexed_Cao2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pemetrexed_de2022_reference&quot;,&quot;label&quot;:&quot;de_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_pemetrexed/Pemetrexed_de2022_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# pemetrexed

- **generic name:** pemetrexed
- **ATC codes:** `L01BA04`
- **DrugBank:** [DB00642](https://go.drugbank.com/drugs/DB00642)
- **groups:** approved, investigational

## About

**Description.** Pemetrexed is a chemotherapy drug that is manufactured and marketed by Eli Lilly and Company under the brand name Alimta. It is indicated for use in combination with cisplatin for the treatment of patients with malignant pleural mesothelioma whose disease is either unresectable or who are otherwise not candidates for curative surgery. Its use in non-small cell lung cancer has also been investigated. Pemetrexed was first approved by the FDA in February 4, 2004.[A253907]

**Indication.** Pemetrexed is indicated for the treatment of the following conditions:

**Non-squamous non-small cell lung cancer (NSCLC)**

- in combination with [pembrolizumab] and platinum-based chemotherapy as initial treatment in metastatic disease where no EGFR or ALK genomic tumour aberrations exist [L40943]
- in combination with [cisplatin] as initial treatment for locally advanced or metastatic disease [L40943,L44883]
- as maintenance treatment for locally advanced or metastatic disease that has not progressed following four cycles of platinum-based chemotherapy [L40943,L44883]
- recurrent metastatic disease following prior chemotherapy [L40943]
- as monotherapy for the second-line treatment of patients with locally advanced or metastatic non-squamous non-small cell lung cancer [L44883]

**Malignant pleural mesothelioma**

- in combination with [cisplatin] for the initial treatment of patients with malignant pleural mesothelioma.[L40943,L44883] In the US, it is reserved for patients whose disease is unresectable or otherwise not candidates for curative surgery.[L40943]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 07:12 | 25:13 | 3/0/0 | 0/1/0 | 1/0/1 | 265,853/26,038 | ollama / qwen3.8:27b-mtp-q8_0 | 19 | 6/13 | 18/1 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Boosman_2023_reference](drugs/drug_pemetrexed/Pemetrexed_Boosman2023_reference.md) | Boosman RJ et al., Prediction of the pharmacokinetics of p…, British journal of clinical… (2023) | [10.1111/bcp.15520](https://doi.org/10.1111/bcp.15520) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Cao_2022_reference](drugs/drug_pemetrexed/Pemetrexed_Cao2022_reference.md) | Cao P et al., Population pharmacokinetic study of pem…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.954242](https://doi.org/10.3389/fphar.2022.954242) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span><br><sub>blocking: model_quarantined: Vd left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [de_2022_reference](drugs/drug_pemetrexed/Pemetrexed_de2022_reference.md) | de Rouw N et al., Hyperhydration with cisplatin does not…, British journal of clinical… (2022) | [10.1111/bcp.15031](https://doi.org/10.1111/bcp.15031) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Hu_2026](drugs/drug_pemetrexed/pd_Hu_2026_Bim.md) | Hu K et al., A Mechanistic Pharmacokinetic/Pharmacod…, Pharmaceutics (2026) | [10.3390/pharmaceutics18040408](https://doi.org/10.3390/pharmaceutics18040408) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Hu_2026](drugs/drug_pemetrexed/pd_Hu_2026_CL_PARP.md) | Hu K et al., A Mechanistic Pharmacokinetic/Pharmacod…, Pharmaceutics (2026) | [10.3390/pharmaceutics18040408](https://doi.org/10.3390/pharmaceutics18040408) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Hu_2026](drugs/drug_pemetrexed/pd_Hu_2026_TGI.md) | Hu K et al., A Mechanistic Pharmacokinetic/Pharmacod…, Pharmaceutics (2026) | [10.3390/pharmaceutics18040408](https://doi.org/10.3390/pharmaceutics18040408) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Hu_2026](drugs/drug_pemetrexed/pd_Hu_2026_pEGFR_EGFR.md) | Hu K et al., A Mechanistic Pharmacokinetic/Pharmacod…, Pharmaceutics (2026) | [10.3390/pharmaceutics18040408](https://doi.org/10.3390/pharmaceutics18040408) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | **MTHFR** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Lan_2017](drugs/drug_pemetrexed/pgx_Lan_2017_MTHFR_safety.md) | Lan G et al., Correlation Between Methylenetetrahydro…, Medical science monitor : i… (2017) | [10.12659/msm.904836](https://doi.org/10.12659/msm.904836) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **FPGS** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Mitarai_2023](drugs/drug_pemetrexed/pgx_Mitarai_2023_FPGS_Q100.md) | Mitarai Y et al., Effects of single nucleotide polymorphi…, British journal of clinical… (2023) | [10.1111/bcp.15851](https://doi.org/10.1111/bcp.15851) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 142 matched, 60 returned
- **screened:** 7  ·  **relevant:** 7
- **records:** 3  ·  extracted 2  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Latz_2006.pdf` | Latz JE et al., Population pharmacokinetic analysis of…, Cancer chemotherapy and pha… (2006) | popPK | 10 | [10.1007/s00280-005-0036-1](https://doi.org/10.1007/s00280-005-0036-1) | [16322991](https://pubmed.ncbi.nlm.nih.gov/16322991) | The paper is a population PK study of pemetrexed and explicitly reports numeric values for clearance, volume of distribution, and half-life in the text. |
| `Latz_2006_3.pdf` | Latz JE et al., Clinical application of a semimechanist…, Cancer chemotherapy and pha… (2006) | popPK | 10 | [10.1007/s00280-005-0035-2](https://doi.org/10.1007/s00280-005-0035-2) | [16322992](https://pubmed.ncbi.nlm.nih.gov/16322992) | The title indicates a population PK/PD study for pemetrexed, but the provided evidence contains only the title and no numeric parameter values. |
| `Latz_2009.pdf` | Latz JE et al., Population pharmacokinetic/pharmacodyna…, Clinical cancer research :… (2009) | popPK | 10 | [10.1158/1078-0432.CCR-08-0791](https://doi.org/10.1158/1078-0432.CCR-08-0791) | [19118064](https://pubmed.ncbi.nlm.nih.gov/19118064) | The title confirms a population PK study of pemetrexed, but the provided evidence contains only the title and no numeric parameter values. |
| `Ouellet_2000.pdf` | Ouellet D et al., Population pharmacokinetics of pemetrex…, Cancer chemotherapy and pha… (2000) | popPK | 10 | [10.1007/s002800000144](https://doi.org/10.1007/s002800000144) | [11021740](https://pubmed.ncbi.nlm.nih.gov/11021740) | The paper reports a population PK model for pemetrexed with explicit numeric values for clearance, volumes, intercompartmental clearance, and half-lives directly in the text. |
| `Srinivasan_2019.pdf` | Srinivasan M et al., Population Pharmacokinetics of Pemetrex…, Journal of clinical pharmac… (2019) | popPK | 10 | [10.1002/jcph.1417](https://doi.org/10.1002/jcph.1417) | [30973978](https://pubmed.ncbi.nlm.nih.gov/30973978) | The paper reports a population PK model for pemetrexed with explicit numeric values for CL, V1, V2, and Q in the text. |
| `Sun_2011.pdf` | Sun JM et al., Safety and pharmacokinetics of intrathe…, Cancer chemotherapy and pha… (2011) | popPK | 9 | [10.1007/s00280-010-1522-7](https://doi.org/10.1007/s00280-010-1522-7) | [21107572](https://pubmed.ncbi.nlm.nih.gov/21107572) | The study reports quantitative pharmacokinetic parameters (half-lives, AUC, Vss) for pemetrexed in rats, with values explicitly stated in the abstract text. |
| `Gupta_2016.pdf` | Gupta A et al., Population pharmacokinetics and exposur…, Cancer chemotherapy and pha… (2016) | pd | 5 | [10.1007/s00280-016-2984-z](https://doi.org/10.1007/s00280-016-2984-z) | [26898299](https://www.ncbi.nlm.nih.gov/pubmed/26898299) | metadata signals extractable PD data (exposure-response) |

<sub>queue written 2026-09-15T06:57:02.909639+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arulananda_2021 | irrelevant | 0 | 0 | The paper is a pre-clinical study of AZD0466 in mesothelioma where pemetrexed is only mentioned as background standard-of-care therapy, with no PK parameters reported for it. |
| PD | Arulananda_2021 | not_relevant | 0 | 0 | The paper focuses on a novel BH3-mimetic (AZD0466) and does not report pharmacodynamic or exposure-response data for pemetrexed. |
| PGx | Assié_2026 | not_relevant | 0 | 0 | The paper focuses on drug repurposing and sensitivity in mesothelioma cell lines, mentioning pemetrexed only as a standard control without analyzing how genetic variants affect its PK or PD parameters. |
| PGx | Booth_2019 | not_relevant | 0 | 0 | The paper discusses the mechanism of action of kinase inhibitors and tumor heterogeneity, with no mention of pemetrexed or pharmacogenomics. |
| PGx | Chen_2021 | not_relevant | 2 | 5 | The study investigates the effect of ABCC5 transporter expression levels (phenotype) on pemetrexed resistance, not the effect of a specific gene variant or genotype. |
| PGx | Cioce_2024 | not_relevant | 0 | 0 | The paper investigates the role of the tumor microenvironment (fibroblasts and IL-6) in drug resistance, not the effect of a specific gene variant or genotype on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Corrigan_2014 | not_relevant | 0 | 0 | The study reports associations with clinical toxicity and survival outcomes, not pharmacokinetic or pharmacodynamic parameters. |
| PGx | Dy_2014 | not_relevant | 0 | 0 | The paper reports associations between gene variants and clinical outcomes (DFS, pCR), not pharmacokinetic or pharmacodynamic parameters. |
| PGx | Franchina_2014 | not_relevant | 2 | 5 | The study reports an association between miRNA expression and clinical outcome (progressive disease), but does not report changes in specific pharmacokinetic (PK) or pharmacodynamic (PD) parameters of pemetrexed. |
| popPK | Gangjee_2004 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and in-vitro activity of pemetrexed analogues, containing no pharmacokinetic data. |
| PD | Gangjee_2004 | not_relevant | 0 | 0 | The paper is a medicinal chemistry study reporting in vitro EC50 values for novel antifolate analogues, not a pharmacodynamic or exposure-response analysis for pemetrexed. |
| PGx | Giovannetti_2004 | not_relevant | 2 | 5 | The study investigates drug-drug interaction and gene expression changes (dCK) induced by pemetrexed, but does not report how a specific genetic variant or genotype alters the PK or PD of pemetrexed. |
| PGx | Giovannetti_2005 | not_relevant | 2 | 5 | The study investigates gene expression levels (dCK, TS, etc.) as predictors of chemosensitivity in cell lines, rather than reporting a pharmacogenomic effect of a specific genetic variant on a PK or PD parameter of pemetrexed. |
| PGx | Goričar_2017 | not_relevant | 0 | 0 | The paper reports associations between genotypes and clinical outcomes (PFS, OS, response rate), not pharmacokinetic or pharmacodynamic parameters. |
| PGx | Gota_2014 | not_relevant | 0 | 0 | The paper reports a population-level difference in PK parameters (higher exposure in Indian patients) but does not analyze specific gene variants or genotypes to establish a pharmacogenomic effect. |
| popPK | Gupta_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of amatuximab, not pemetrexed. |
| PD | Gupta_2016 | not_relevant | 0 | 0 | The paper focuses on amatuximab, not pemetrexed. |
| PGx | Hattinger_2017 | not_relevant | 0 | 0 | The paper is a review summarizing pharmacogenomics for antifolates in osteosarcoma, focusing primarily on methotrexate, and does not report specific quantitative PK/PD effects of gene variants on pemetrexed. |
| popPK | Hou_2023 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial evaluating the activity and safety of a chemotherapy regimen, and it does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for pemetrexed. |
| popPK | Hu_2026 | irrelevant | 2 | 0 | The study focuses on PK/PD modeling of a combination therapy in animals, and while it mentions a mouse half-life, the specific quantitative PK parameters (CL, V, Q) for pemetrexed are not provided in the text, likely residing in supplementary tables or figures not included. |
| PGx | Hu_2026 | not_relevant | 0 | 0 | The paper focuses on PK/PD modeling of drug-drug interactions and schedule-dependent synergy, not on pharmacogenomic effects of gene variants on PK/PD parameters. |
| PGx | Jung_2013 | not_relevant | 0 | 0 | The study reports associations between genotypes and clinical outcomes (survival, toxicity) rather than pharmacokinetic or pharmacodynamic parameters. |
| PGx | Kanazawa_2014 | not_relevant | 2 | 5 | The paper reports associations between TYMS VNTR and toxicity (anemia/thrombocytopenia), which are clinical adverse events rather than direct pharmacokinetic (PK) or pharmacodynamic (PD) parameters of pemetrexed itself. |
| popPK | Latz_2006_2 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic modeling of neutropenia and does not report quantitative pharmacokinetic disposition parameters (e.g., clearance, volume) for pemetrexed in the provided evidence. |
| popPK | Latz_2006_3 | relevant | 10 | 0 | The title indicates a population PK/PD study for pemetrexed, but the provided evidence contains only the title and no numeric parameter values. |
| popPK | Latz_2009 | relevant | 10 | 0 | The title confirms a population PK study of pemetrexed, but the provided evidence contains only the title and no numeric parameter values. |
| popPK | Leil_2007 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of genetic variation in the FPGS gene and does not report population pharmacokinetic parameters for pemetrexed. |
| PGx | Li_2017 | not_relevant | 0 | 0 | The paper reports clinical efficacy (PFS, OS) and toxicity differences based on EGFR genotype, but does not report pharmacokinetic (PK) or pharmacodynamic (PD) biomarker parameters (e.g., AUC, Cmax, target inhibition) for pemetrexed. |
| PGx | Morotti_2012 | not_relevant | 0 | 0 | The paper is a review of pemetrexed in ovarian cancer and explicitly states that further pharmacogenomic data are warranted, indicating it does not report specific gene variant effects on PK/PD parameters. |
| PGx | Powrózek_2014 | not_relevant | 2 | 5 | The paper reports associations between gene variants and clinical outcomes (PFS/OS), not pharmacokinetic or pharmacodynamic parameters of pemetrexed. |
| PGx | Qin_2017 | not_relevant | 0 | 0 | The paper investigates a potential marker for drug resistance (CARP expression) in cell lines but does not report a pharmacogenomic effect of a specific gene variant on a pharmacokinetic or pharmacodynamic parameter of pemetrexed. |
| PGx | Ricciuti_2020 | not_relevant | 0 | 0 | The paper reports clinical outcomes (survival, response rates) rather than pharmacokinetic or pharmacodynamic parameters. |
| PGx | Ricciuti_2021 | not_relevant | 0 | 0 | The paper investigates ctDNA as a biomarker for response to pembrolizumab-based therapy and does not report any pharmacogenomic effects on the PK or PD of pemetrexed. |
| PGx | Sharma_2023 | not_relevant | 2 | 5 | The study reports associations between gene variants and clinical outcomes (survival/prognosis), not pharmacokinetic or pharmacodynamic parameters. |
| PGx | Socinski_2009 | not_relevant | 0 | 0 | The paper is a clinical trial comparing efficacy and safety of two chemotherapy regimens and does not report pharmacogenomic effects on PK or PD parameters. |
| PGx | Szlosarek_2021 | not_relevant | 0 | 0 | The study evaluates the efficacy and safety of a drug combination in patients selected by a tumor biomarker (ASS1 deficiency) but does not report how a gene variant alters the pharmacokinetics or pharmacodynamics of pemetrexed. |
| PGx | Takeda_2023 | not_relevant | 0 | 0 | The study reports associations between SNPs and clinical outcomes (toxicity/efficacy) but does not report pharmacokinetic (PK) or pharmacodynamic (PD) parameters. |
| PGx | Vallo_2015 | not_relevant | 0 | 0 | The paper investigates drug resistance in cell lines and does not report pharmacogenomic effects on PK or PD parameters for pemetrexed. |
| PGx | Visser_2021 | not_relevant | 0 | 0 | The study explicitly reports that no significant associations were observed between the investigated SNPs and pemetrexed clearance (PK), and the reported PD effects are on clinical outcomes (survival/toxicity) rather than direct pharmacodynamic parameters. |
| PGx | Vázquez_2019 | not_relevant | 0 | 0 | The study reports no significant association between MTHFR/TYMS genotypes and toxicity or survival, and does not report changes in PK/PD parameters. |
| PGx | Walia_2022 | not_relevant | 2 | 5 | The paper reports associations between MTHFR polymorphisms and clinical toxicity endpoints (diarrhea, neutropenia) and survival, but does not report changes in specific pharmacokinetic (PK) or pharmacodynamic (PD) parameters of pemetrexed. |
| PGx | Xu_2019 | not_relevant | 0 | 0 | The paper investigates acquired drug resistance in cell lines via gene expression changes (ABCB1, TYMS), not the effect of a specific germline gene variant on PK/PD parameters. |
| popPK | Yang_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of osimertinib and its metabolite AZ5104, with pemetrexed serving only as a co-administered chemotherapy agent without reported PK parameters. |
| PD | Yang_2025 | not_relevant | 2 | 1 | The paper analyzes the exposure-response relationship for osimertinib (finding no significant link to PFS) and notes that pemetrexed cycles are associated with PFS, but it does not report a pharmacokinetic or pharmacodynamic model for pemetrexed, nor does it provide numeric PD parameters (e.g., Emax, EC50) for pemetrexed. |
| PGx | Zhong_2014 | not_relevant | 2 | 5 | The paper reports an association between BIM deletion and progression-free survival (clinical outcome) for pemetrexed, but does not report changes in specific pharmacokinetic (PK) or pharmacodynamic (PD) parameters (e.g., AUC, Cmax, receptor occupancy). |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_pemetrexed`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
