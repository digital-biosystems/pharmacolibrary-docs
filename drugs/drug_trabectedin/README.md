<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;trabectedin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Trabectedin_PerezRuixo2007_cancer_patients&quot;,&quot;label&quot;:&quot;Perez-Ruixo_2007_cancer patients&quot;,&quot;href&quot;:&quot;drugs/drug_trabectedin/Trabectedin_PerezRuixo2007_cancer_patients.md&quot;,&quot;status&quot;:&quot;not modelled&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Trabectedin_Poggesi2019_children_and_adolescent_patients_wit&quot;,&quot;label&quot;:&quot;Poggesi_2019_children and adolescent patients with cancer&quot;,&quot;href&quot;:&quot;drugs/drug_trabectedin/Trabectedin_Poggesi2019_children_and_adolescent_patients_wit.md&quot;,&quot;status&quot;:&quot;not modelled&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

# trabectedin

- **generic name:** trabectedin
- **ATC codes:** `L01CX01`
- **DrugBank:** [DB05109](https://go.drugbank.com/drugs/DB05109)
- **groups:** approved, investigational

## About

**Description.** Trabectedin, also referred as ET-743 during its development, is a marine-derived antitumor agent discovered in the Carribean tunicate _Ecteinascidia turbinata_ and now produced synthetically. Trabectedin has a unique mechanism of action. It binds to the minor groove of DNA interfering with cell division and genetic transcription processes and DNA repair machinery. It is approved for use in Europe, Russia and South Korea for the treatment of advanced soft tissue sarcoma. It is currently under evaluation for the treatment of breast cancer, prostate cancer, in addition to pediatric sarcomas. Both the European Commission and the U.S. Food and Drug Administration (FDA) have approved trabectedin as an orphan drug in soft tissue sarcomas and ovarian cancer. On October 23, 2015, the FDA approved trabectedin, (as Yondelis), for the treatment of specific soft tissue sarcomas.

**Indication.** Indicated for treatment of advanced soft tissue sarcoma in patients refractory to or unsuitable to receive anthracycline or ifosfamide chemotherapy in Europe, Russia and South Korea. Approved for orphan drug status by the U.S. FDA for treatment of soft tissue sarcomas and ovarian cancer. Investigated for use/treatment in cancer/tumors (unspecified), gastric cancer, ovarian cancer, pediatric indications, sarcoma, and solid tumors.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 22:47 | 9:32 | 0/0/0 | 1/0/0 | 0/0/0 | 42,850/27,785 | ollama / qwen3.8:27b-mtp-q8_0 | 9 | 0/9 | 9/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">not modelled</span> | [Perez-Ruixo_2007_cancer patients](drugs/drug_trabectedin/Trabectedin_PerezRuixo2007_cancer_patients.md) | Perez-Ruixo JJ et al., Population pharmacokinetic meta-analysi…, Clinical pharmacokinetics (2007) | [10.2165/00003088-200746100-00005](https://doi.org/10.2165/00003088-200746100-00005) |
| <span class="pk-badge pk-badge--neutral">not modelled</span> | [Poggesi_2019_children and adolescent patients with cancer](drugs/drug_trabectedin/Trabectedin_Poggesi2019_children_and_adolescent_patients_wit.md) | Poggesi I et al., Population pharmacokinetics of trabecte…, Cancer chemotherapy and pha… (2019) | [10.1007/s00280-019-03899-y](https://doi.org/10.1007/s00280-019-03899-y) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Miao_2016](drugs/drug_trabectedin/pd_Miao_2016_fraction_of_cells_in_G0_G1_phase.md) | Miao (2016) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Miao_2016](drugs/drug_trabectedin/pd_Miao_2016_fraction_of_cells_in_G2_M_phase.md) | Miao (2016) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Miao_2016](drugs/drug_trabectedin/pd_Miao_2016_fraction_of_cells_in_S_phase.md) | Miao (2016) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Miao_2016](drugs/drug_trabectedin/pd_Miao_2016_fraction_of_cells_in_sub_G1_phase_apoptosis.md) | Miao (2016) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=trabectedin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` substrate, `CYP2C9` substrate, `CYP2D6` substrate, `CYP2E1` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: DNA (binder), PTGS1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 44 matched, 44 returned
- **screened:** 8  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Perez-Ruixo_2007.pdf` | Perez-Ruixo JJ et al., Population pharmacokinetic meta-analysi…, Clinical pharmacokinetics (2007) | popPK | 10 | [10.2165/00003088-200746100-00005](https://doi.org/10.2165/00003088-200746100-00005) | [17854236](https://pubmed.ncbi.nlm.nih.gov/17854236) | The paper is a population PK study of trabectedin and explicitly reports quantitative values for clearance (31.5 L/h), half-life (180 h), and volume of distribution (6070 L/5240 L) in the text. |
| `Poggesi_2019.pdf` | Poggesi I et al., Population pharmacokinetics of trabecte…, Cancer chemotherapy and pha… (2019) | popPK | 10 | [10.1007/s00280-019-03899-y](https://doi.org/10.1007/s00280-019-03899-y) | [31286189](https://pubmed.ncbi.nlm.nih.gov/31286189) | The paper reports quantitative population PK parameters (clearance, volume of distribution, AUC) for trabectedin in pediatric patients, with specific numeric values provided in the text. |
| `Beumer_2007.pdf` | Beumer JH et al., Metabolism of trabectedin (ET-743, Yond…, Cancer chemotherapy and pha… (2007) | pgx | 8 | [10.1007/s00280-006-0342-2](https://doi.org/10.1007/s00280-006-0342-2) | [16988825](https://www.ncbi.nlm.nih.gov/pubmed/16988825) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Leporini_2014.pdf` | Leporini C et al., A comprehensive safety evaluation of tr…, BioDrugs : clinical immunot… (2014) | pgx | 7 | [10.1007/s40259-014-0100-7](https://doi.org/10.1007/s40259-014-0100-7) | [25209722](https://www.ncbi.nlm.nih.gov/pubmed/25209722) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Machiels_2014.pdf` | Machiels JP et al., Impact of cytochrome P450 3A4 inducer a…, Cancer chemotherapy and pha… (2014) | pgx | 7 | [10.1007/s00280-014-2554-1](https://doi.org/10.1007/s00280-014-2554-1) | [25100135](https://www.ncbi.nlm.nih.gov/pubmed/25100135) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-15T20:23:20.081488+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Beumer_2007 | not_relevant | 0 | 0 | The study explicitly states that inter-individual differences in metabolism did not correlate with polymorphisms in drug-metabolising enzymes. |
| PGx | Brandon_2006 | not_relevant | 2 | 5 | The paper characterizes in vitro CYP metabolism and notes a sex-based difference in Km, but does not report a specific gene variant/genotype effect on a PK or PD parameter. |
| PGx | Canese_2019 | not_relevant | 0 | 0 | The paper investigates pharmacodynamic markers of trabectedin efficacy in a preclinical model using MRI/MRS but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Duan_2009 | not_relevant | 0 | 0 | The study investigates cross-resistance mechanisms in cell lines and does not report pharmacogenomic effects on PK or PD parameters in humans. |
| popPK | Fetterly_2008 | irrelevant | 2 | 0 | The study focuses on a pharmacodynamic model for transaminitis (ALT) rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, Q) for trabectedin. |
| popPK | Gallo_2024 | irrelevant | 0 | 0 | The paper is an in-vitro study on cytotoxicity and autophagy of a marine extract, with no pharmacokinetic parameters for trabectedin. |
| PD | Gallo_2024 | not_relevant | 0 | 0 | The paper studies a crude organic extract from Ciona robusta, not the specific drug trabectedin, and reports no PK/PD modeling or exposure-response relationship for trabectedin. |
| PGx | Gastaud_2013 | not_relevant | 2 | 1 | The paper reports a clinical response (efficacy) associated with a genotype, but does not report changes in specific pharmacokinetic (PK) or pharmacodynamic (PD) parameters (e.g., AUC, Cmax, receptor binding). |
| popPK | Grosso_2012 | irrelevant | 2 | 0 | The paper is a safety analysis of rhabdomyolysis that uses PK parameters (CL, AUC) as covariates in a logistic regression model but does not report the quantitative PK parameter values (e.g., mean CL, V, half-life) for trabectedin. |
| popPK | Hing_2008 | irrelevant | 2 | 0 | The paper reports PK/PD parameters for neutropenia (e.g., MTT, ke0) rather than standard trabectedin disposition parameters (CL, V, Q), and no numeric values for trabectedin clearance or volume are present in the evidence. |
| PGx | Jimeno_2006 | not_relevant | 5 | 5 | The paper reports associations between gene expression levels (e.g., BRCA1, XPD) and clinical outcomes (response rate, survival) for trabectedin, but does not report a pharmacogenomic effect on specific pharmacokinetic (PK) or pharmacodynamic (PD) parameters (e.g., AUC, Cmax, biomarker levels). |
| PGx | Kono_2026 | not_relevant | 2 | 0 | The paper compares species-level transcriptomic differences and general drug sensitivity in osteosarcoma models, but does not report specific gene variants or genotypes affecting trabectedin PK/PD parameters. |
| PGx | Laroche-Clary_2015 | not_relevant | 0 | 0 | The study reports a pharmacogenomic association with clinical efficacy (survival/progression) but does not report changes in pharmacokinetic (PK) or pharmacodynamic (PD) parameters. |
| PGx | Larsson_2023 | not_relevant | 0 | 0 | The paper reports drug response (efficacy) in PDX models but does not report pharmacokinetic parameters or pharmacodynamic biomarkers linked to specific gene variants. |
| PGx | Laurenty_2013 | not_relevant | 5 | 2 | The paper reports a clinical adverse event (hepatotoxicity) associated with a genotype but does not report quantitative changes in pharmacokinetic (e.g., AUC, Cmax) or pharmacodynamic parameters. |
| PGx | Le_2009 | not_relevant | 0 | 0 | The paper is a bibliographic review of clinical trials evaluating the efficacy of trabectedin in soft tissue sarcoma and does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Leporini_2014 | not_relevant | 0 | 0 | The paper reviews safety and drug-drug interactions (specifically CYP3A4 metabolism) but does not report pharmacogenomic effects of gene variants on trabectedin PK/PD parameters. |
| PGx | Machiels_2014 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (CYP3A4 inducers/inhibitors) rather than the impact of a specific gene variant or genotype on pharmacokinetics. |
| PGx | Maillard_2020 | not_relevant | 2 | 5 | The study reports associations between genetic variants and the incidence of hepatotoxicity (a clinical adverse event), but does not report quantitative changes in pharmacokinetic (e.g., AUC, Cmax) or pharmacodynamic parameters. |
| popPK | Miao_2016 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacodynamic (cell cycle) modeling study, not a pharmacokinetic study, and reports no disposition parameters (CL, V, etc.) for trabectedin. |
| popPK | Miao_2016_2 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic (PD) modeling study focusing on cytotoxicity and drug interaction, not a pharmacokinetic (PK) study reporting disposition parameters for trabectedin. |
| popPK | Miao_2024 | irrelevant | 0 | 0 | The paper focuses on systems pharmacodynamics and proteomic mechanisms in cancer cells, not pharmacokinetic disposition parameters for trabectedin. |
| popPK | Miao_2024_2 | irrelevant | 0 | 0 | The paper is an in-vitro systems pharmacodynamic study focusing on protein expression and signal transduction pathways, not a pharmacokinetic study reporting quantitative disposition parameters for trabectedin. |
| PD | Miao_2024_2 | not_relevant | 4 | 2 | The paper describes a systems pharmacodynamic model based on proteomic data in cell lines, but the provided text does not contain specific numeric PD parameters (e.g., EC50, Emax) or explicit concentration-effect curves for trabectedin. |
| PGx | Minuzzo_2005 | not_relevant | 0 | 0 | The paper investigates the molecular mechanism of action (transcriptional effects) of trabectedin in cell lines, not the impact of genetic variants on its pharmacokinetics or pharmacodynamics. |
| PGx | Mondaza-Hernandez_2022 | not_relevant | 0 | 0 | The paper investigates ISG15 as a prognostic biomarker and its role in cancer stem cell maintenance and drug sensitivity in vitro, but does not report pharmacogenomic effects of specific gene variants on the pharmacokinetics or pharmacodynamics of trabectedin. |
| PGx | Monk_2015 | not_relevant | 0 | 0 | The paper reports clinical outcomes (response rate, PFS, OS) rather than pharmacokinetic or pharmacodynamic parameters. |
| PGx | Rao_2019 | not_relevant | 0 | 0 | The paper is a general review on the pharmacogenetics of natural products and does not report specific data or effects for trabectedin. |
| popPK | Sessa_2013 | irrelevant | 2 | 0 | The paper is a Phase I dose-escalation study that mentions PK interactions qualitatively but does not report quantitative disposition parameters (CL, V, etc.) for trabectedin in the provided evidence. |
| PGx | Shinn_2021 | not_relevant | 0 | 0 | The paper discusses lurbinectedin, not trabectedin, and does not report pharmacogenomic effects on PK/PD parameters. |
| PGx | Uboldi_2017 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of trabectedin in DSRCT cells (specifically its effect on the EWS-WT1 fusion protein) but does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Vermeir_2009 | not_relevant | 0 | 0 | The paper describes in vitro CYP phenotyping and metabolism pathways but does not report any pharmacogenomic effect (gene variant/genotype) on PK or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-15 20:23 UTC</sub>
