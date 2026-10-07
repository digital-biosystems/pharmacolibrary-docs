<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01A&quot;,&quot;href&quot;:&quot;atc/L01A.md&quot;},{&quot;label&quot;:&quot;melphalan&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Melphalan_Li2022_reference&quot;,&quot;label&quot;:&quot;Li_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_melphalan/Melphalan_Li2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# melphalan

- **generic name:** melphalan
- **ATC codes:** `L01AA03`
- **DrugBank:** [DB01042](https://go.drugbank.com/drugs/DB01042) · **PubChem:** [CID 460612](https://pubchem.ncbi.nlm.nih.gov/compound/460612)
- **molar mass:** 305.2 g/mol (C13H18Cl2N2O2) — DrugBank
- **groups:** approved, investigational

## About

Melphalan is an alkylating anticancer drug used mainly to treat multiple myeloma, and also other cancers such as ovarian and breast cancer and childhood tumours like neuroblastoma. It is an approved medicine, authorised in the European Union, and is also used in conditioning before stem cell transplantation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2298283](https://www.wikidata.org/wiki/Q2298283) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| melphalan | parent | 305.2 | C13H18Cl2N2O2 | DrugBank | [460612](https://pubchem.ncbi.nlm.nih.gov/compound/460612) | Buitrago_2016, Li_2022, Shah_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:34 | 3:10 | 1/3/1 | 0/0/1 | 0/0/0 | 166,485/11,704 | einfracz / qwen3.8-27b | 12 | 3/9 | 10/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Li_2022_reference](drugs/drug_melphalan/Melphalan_Li2022_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Li S et al., Population Pharmacokinetics of Melphala…, Journal of clinical pharmac… (2022) | [10.1002/jcph.2030](https://doi.org/10.1002/jcph.2030) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Shah_2022_reference](drugs/drug_melphalan/Melphalan_Shah2022_reference.md) | — | 1-compartment (no model) | 1 | Shah GL et al., Population Pharmacokinetics of Melphala…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01093-z](https://doi.org/10.1007/s40262-021-01093-z) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Buitrago_2016_reference](drugs/drug_melphalan/Melphalan_Buitrago2016_reference.md) | — | 1-compartment (no model) | 2 | Buitrago E et al., Pharmacokinetics of Melphalan After Int…, Journal of ocular pharmacol… (2016) | [10.1089/jop.2015.0088](https://doi.org/10.1089/jop.2015.0088) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Chandra_2022_reference](drugs/drug_melphalan/Melphalan_Chandra2022_reference.md) | — | 1-compartment (no model) | 0 | Chandra S et al., Test-dose pharmacokinetics guided melph…, British journal of clinical… (2022) | [10.1111/bcp.14932](https://doi.org/10.1111/bcp.14932) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Nath_2007_reference](drugs/drug_melphalan/Melphalan_Nath2007_reference.md) | — | 1-compartment (no model) | 0 | Nath CE et al., Population pharmacokinetics of melphala…, British journal of clinical… (2007) | [10.1111/j.1365-2125.2007.02862.x](https://doi.org/10.1111/j.1365-2125.2007.02862.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Cho_2018_ANC](drugs/drug_melphalan/pd_Cho_2018_ANC.md) | absolute neutrophil count (ANC) biomarker turnover ← melphalan | — | Cho YK et al., Pharmacokinetic-Pharmacodynamic Model o…, CPT: pharmacometrics & syst… (2018) | [10.1002/psp4.12345](https://doi.org/10.1002/psp4.12345) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=melphalan) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| distribution | liver | `SLC22A3` inhibitor | DrugBank actor |
| distribution | placenta | `SLC22A3` inhibitor | DrugBank actor |
| distribution | skeletal muscle | `SLC22A3` inhibitor | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: DNA (cross-linking/alkylation), SLC7A10 (substrate), SLC7A5 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 114 matched, 63 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 5  ·  extracted 1  ·  needs_review 1  ·  rejected 3  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_10 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Buitrago_2016.pdf` | Buitrago E et al., Pharmacokinetics of Melphalan After Int…, Journal of ocular pharmacol… (2016) | popPK | 10 | [10.1089/jop.2015.0088](https://doi.org/10.1089/jop.2015.0088) | [26785130](https://pubmed.ncbi.nlm.nih.gov/26785130) | The study reports quantitative PK parameters (t1/2, Cmax, AUC ratios) for melphalan in rabbits. |
| `Dahi_2022.pdf` | Dahi PB et al., Evaluation of Melphalan Exposure in Lym…, Transplantation and cellula… (2022) | popPK | 10 | [10.1016/j.jtct.2022.05.003](https://doi.org/10.1016/j.jtct.2022.05.003) | [35545213](https://pubmed.ncbi.nlm.nih.gov/35545213) | The abstract describes a population-PK study with a specific AUC target, but the actual numeric parameter values (CL, V, etc.) are not explicitly listed in the provided text. |
| `Li_2022.pdf` | Li S et al., Population Pharmacokinetics of Melphala…, Journal of clinical pharmac… (2022) | popPK | 10 | [10.1002/jcph.2030](https://doi.org/10.1002/jcph.2030) | [35048362](https://pubmed.ncbi.nlm.nih.gov/35048362) | The paper reports a population PK model for melphalan with explicit numeric values for clearance, volumes, and intercompartmental clearance in the abstract. |
| `Nath_2007.pdf` | Nath CE et al., Population pharmacokinetics of melphala…, British journal of clinical… (2007) | popPK | 10 | [10.1111/j.1365-2125.2007.02862.x](https://doi.org/10.1111/j.1365-2125.2007.02862.x) | [17324241](https://pubmed.ncbi.nlm.nih.gov/17324241) | The abstract provides explicit quantitative values for the population pharmacokinetic model parameters (clearance and volume of distribution equations and interpatient variability) for melphalan in humans. |
| `Chandra_2022.pdf` | Chandra S et al., Test-dose pharmacokinetics guided melph…, British journal of clinical… (2022) | popPK | 8 | [10.1111/bcp.14932](https://doi.org/10.1111/bcp.14932) | [34075614](https://pubmed.ncbi.nlm.nih.gov/34075614) | The study reports quantitative population-PK parameters including AUC, clearance ratios, and target AUC ranges for melphalan in humans. |
| `Taich_2014.pdf` | Taich P et al., Clinical pharmacokinetics of intra-arte…, Ophthalmology (2014) | popPK | 8 | [10.1016/j.ophtha.2013.10.045](https://doi.org/10.1016/j.ophtha.2013.10.045) | [24359624](https://pubmed.ncbi.nlm.nih.gov/24359624) | The study reports a population pharmacokinetic model for melphalan in humans, but the specific numeric parameter estimates are not provided in the abstract or text evidence. |
| `Gallo_1995.pdf` | Gallo JM et al., Time-dependent pharmacodynamic models i…, Cancer research (1995) | pd | 5 | not captured | [7553617](https://www.ncbi.nlm.nih.gov/pubmed/7553617) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Cho_2017.pdf` | Cho YK et al., Associations of High-Dose Melphalan Pha…, Clinical pharmacology and t… (2017) | pgx | 8 | [10.1002/cpt.644](https://doi.org/10.1002/cpt.644) | [28160288](https://www.ncbi.nlm.nih.gov/pubmed/28160288) | metadata signals extractable PGX data (SLC7A5, PK/PD-context) |
| `Li_2023.pdf` | Li J et al., Evaluating the Impacts of CYP3A4*1B and…, Cancer genomics & proteomics (2023) | pgx | 8 | [10.21873/cgp.20360](https://doi.org/10.21873/cgp.20360) | [36581339](https://www.ncbi.nlm.nih.gov/pubmed/36581339) | metadata signals extractable PGX data (CYP3A4*1B, PK/PD-context) |
| `Giglia_2014.pdf` | Giglia JL et al., A single nucleotide polymorphism in SLC…, Biology of blood and marrow… (2014) | pgx | 5 | [10.1016/j.bbmt.2014.03.022](https://doi.org/10.1016/j.bbmt.2014.03.022) | [24704384](https://www.ncbi.nlm.nih.gov/pubmed/24704384) | metadata signals extractable PGX data (SLC7A5) |

<sub>queue written 2026-10-07T17:32:21.852109+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ben_2021 | not_relevant | 1 | 0 | The paper focuses on pharmacogenomics for busulfan and only mentions melphalan as a candidate for future optimization without reporting any specific gene-melphalan PK/PD effects. |
| PGx | Bhatla_2008 | not_relevant | 0 | 0 | The paper reports clinical outcomes of a transplant regimen in Shwachman-Diamond syndrome but does not assess pharmacogenomic effects on melphalan PK or PD. |
| popPK | Canal_1998 | irrelevant | 0 | 0 | The paper is a review of dose individualization strategies and mentions melphalan only as a drug requiring dosage adjustment in renal/hepatic dysfunction, without reporting any specific quantitative pharmacokinetic parameters for it. |
| PGx | Canal_1998 | not_relevant | 0 | 0 | The paper is a general review of dose individualization strategies (BSA, renal/hepatic function, TDM) and does not report specific pharmacogenomic effects on melphalan pharmacokinetics or pharmacodynamics. |
| popPK | Cho_2018 | irrelevant | 3 | 0 | The paper develops a PD model for neutropenia and explicitly states that melphalan PK parameters were fixed from a previous publication, providing no original quantitative PK values (CL, V, etc.) for melphalan in the evidence. |
| popPK | Dahi_2022 | relevant | 10 | 0 | The abstract describes a population-PK study with a specific AUC target, but the actual numeric parameter values (CL, V, etc.) are not explicitly listed in the provided text. |
| PGx | Damiano_1999 | not_relevant | 0 | 0 | The paper discusses cell adhesion-mediated drug resistance (CAM-DR) in human myeloma cell lines, not the pharmacogenomic effect of a gene variant on melphalan PK/PD. |
| PGx | Dasgupta_2003 | not_relevant | 1 | 0 | The paper reports associations between GSTP1 genotype and clinical outcomes (survival/progression), but does not measure or report specific pharmacokinetic (e.g., AUC, clearance) or pharmacodynamic (e.g., concentration-response) parameters of melphalan. |
| PGx | David-Beabes_2000 | not_relevant | 0 | 0 | The paper studies drug resistance mechanisms in cell lines and does not report pharmacogenomic effects on the PK or PD of melphalan in humans. |
| popPK | Delitheos_1995 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assay in yeast, not a pharmacokinetic study, and reports no disposition parameters for melphalan. |
| PD | Delitheos_1995 | not_relevant | 0 | 0 | The paper reports that melphalan was inactive up to 400 micrograms/ml in yeast strains and does not provide any numeric PD parameters or concentration-effect curves for melphalan. |
| PGx | Dumontet_2010 | not_relevant | 3 | 2 | The paper reports associations between SNPs and clinical outcomes (response, toxicity) but does not report changes in specific pharmacokinetic or pharmacodynamic parameters (e.g., AUC, Cmax, EC50) of melphalan. |
| popPK | Fu_2025 | irrelevant | 0 | 0 | The study reports patient-reported outcomes (quality of life) for a chemotherapy regimen containing melphalan, but contains no pharmacokinetic data. |
| popPK | Gallo_1995 | irrelevant | 0 | 0 | no_text gate: only 213 chars of text extracted (&lt; 400) |
| PGx | Giglia_2014 | not_relevant | 3 | 5 | The paper reports an association between a genotype and a clinical toxicity outcome (TPN use), not a change in a specific pharmacokinetic or pharmacodynamic parameter. |
| PGx | Grazziutti_2006 | not_relevant | 0 | 0 | The paper investigates clinical risk factors (creatinine, dose) for oral mucositis and explicitly states that pharmacogenomic studies are needed but not performed. |
| PGx | Hao_2021 | not_relevant | 0 | 0 | The paper reports busulfan drug-drug interactions involving melphalan, not pharmacogenomic effects on melphalan PK/PD. |
| popPK | Ishida_1982 | irrelevant | 0 | 0 | This is an in-vitro cytotoxicity study measuring EC50 values for DNA damage, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Joerger_2012 | irrelevant | 1 | 0 | The paper is a review describing the methodology of covariate modeling and lists melphalan as an example but does not provide original quantitative PK parameter values. |
| PGx | Joerger_2012 | not_relevant | 1 | 0 | This is a methodological review article on pharmacokinetic modeling that mentions melphalan as an example of a drug studied, but does not report specific pharmacogenomic effects. |
| PGx | Keenan_2004 | not_relevant | 0 | 0 | The paper investigates 2-deoxyglucose uptake in drug-resistant cell lines and does not report pharmacogenomic effects on the PK or PD of melphalan. |
| PGx | Kharbanda_2014 | not_relevant | 0 | 0 | The paper reports clinical outcomes of a transplant conditioning regimen and does not analyze the impact of gene variants on the pharmacokinetics or pharmacodynamics of melphalan. |
| PGx | Khodadadi_2025 | not_relevant | 1 | 0 | The paper evaluates the pharmacodynamic interaction (combination efficacy) of melphalan and arsenic trioxide in leukemia cells, but it does not assess how a patient's specific gene variant or genotype influences these effects. |
| popPK | Koh_2013 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assay of dental compounds where melphalan is only mentioned as a comparator drug, providing no pharmacokinetic parameters. |
| PD | Koh_2013 | not_relevant | 0 | 0 | The paper investigates dental compounds (hydroquinone, benzoquinone, eugenol, phtharal) and only mentions melphalan as a reference for tumor-specificity indices without providing any specific concentration-effect data or PD parameters for melphalan. |
| PGx | Kühne_2007 | not_relevant | 0 | 0 | The study explicitly found no significant correlations between the genotypes and melphalan pharmacokinetics or side effects. |
| PGx | Kühne_2008 | not_relevant | 4 | 5 | The paper reports associations between GST polymorphisms and adverse effects (PD outcomes), not changes in PK or specific PD parameters of melphalan itself, and concludes genotyping is not helpful. |
| PGx | Landini_2017 | not_relevant | 0 | 0 | The paper focuses on auranofin resistance in ovarian cancer cells and mentions melphalan only as a cross-resistance agent without analyzing pharmacogenomic effects on melphalan's PK/PD. |
| PGx | Mendonça-Torres_2013 | not_relevant | 0 | 0 | The paper studies the effect of the TSPO ligand PK11195 on neuroblastoma cell lines, including in combination with melphalan, but does not investigate gene variants or their impact on melphalan's PK or PD parameters. |
| PGx | Michalska_2023 | not_relevant | 1 | 1 | The paper reports a pharmacogenomic association with clinical survival, not with a pharmacokinetic or pharmacodynamic parameter of melphalan. |
| PGx | Misund_2022 | not_relevant | 1 | 0 | The paper investigates tumor genomics and transcriptomic changes in response to treatment (including melphalan) but does not report pharmacokinetic or pharmacodynamic parameter changes driven by host germline variants or genotypes. |
| PGx | Nampoothiri_2019 | not_relevant | 3 | 0 | The paper correlates the GSTP1 genotype with clinical toxicity outcomes (GI toxicity, infections) rather than quantifying its effect on melphalan pharmacokinetic parameters like AUC. |
| popPK | Nath_2016 | irrelevant | 0 | 0 | The paper investigates the mechanism of action of lonidamine, not melphalan, and contains no pharmacokinetic data for melphalan. |
| PD | Nath_2016 | not_relevant | 0 | 0 | The paper discusses the mechanism of action of lonidamine, not melphalan, and does not report any pharmacodynamic or exposure-response data for melphalan. |
| PGx | Ocanto_2020 | not_relevant | 0 | 0 | The paper reports clinical outcomes (GVHD, survival, rejection) of a conditioning regimen but does not investigate the impact of any gene variants on the pharmacokinetics or pharmacodynamics of melphalan. |
| PGx | Paioli_2014 | not_relevant | 0 | 0 | The paper analyzes the influence of sex and age on toxicity, not the influence of gene variants/genotypes on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Rabier_1991 | not_relevant | 0 | 0 | The study investigates multifactorial drug resistance in cell lines, not the effect of a specific germline gene variant or genotype on melphalan pharmacokinetics or pharmacodynamics. |
| PGx | Rapoport_2002 | not_relevant | 0 | 0 | The paper reports clinical outcomes of a high-dose chemotherapy/autotransplant protocol but contains no pharmacogenomic data or analysis of gene variants affecting melphalan PK/PD. |
| popPK | Taich_2014 | relevant | 8 | 3 | The study reports a population pharmacokinetic model for melphalan in humans, but the specific numeric parameter estimates are not provided in the abstract or text evidence. |
| popPK | Testart-Paillet_2007 | irrelevant | 0 | 0 | The paper is a review of pharmacodynamic models for hematological toxicity, not a study reporting quantitative pharmacokinetic parameters for melphalan. |
| PD | Testart-Paillet_2007 | not_relevant | 2 | 0 | The text is a review abstract that mentions melphalan as an example of a drug for which PD models exist, but it does not report specific numeric PD parameters or extractable concentration-effect data in this snippet. |
| popPK | Trudel_2007 | irrelevant | 0 | 0 | The study focuses on the antimyeloma activity of ABT-737 and its synergy with melphalan, with no pharmacokinetic parameters reported for melphalan. |
| PD | Trudel_2007 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50) for ABT-737, not melphalan; melphalan is only mentioned as a combination partner without specific dose-response data. |
| PGx | Winter_2016 | not_relevant | 0 | 0 | The paper investigates the effect of different chemotherapy schedules (conventional vs. metronomic) on cytotoxicity and angiogenesis, but does not report on pharmacogenomic factors (genotypes/variants) influencing PK or PD parameters. |
| PGx | Wojas-Pelc_2005 | not_relevant | 0 | 0 | The paper is a clinical case report regarding the efficacy of IVIG and melphalan in treating scleromyxedema, with no mention of pharmacogenomics or specific PK/PD parameters influenced by genetic variants. |
| popPK | Xu_2018 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of daratumumab in patients with multiple myeloma, and melphalan is only mentioned as a co-administered drug in the VMP regimen, not as the subject of the PK analysis. |
| PD | Xu_2018 | not_relevant | 0 | 0 | The paper analyzes the pharmacokinetics and exposure-response relationship for daratumumab, not melphalan. |
| PGx | Yang_2015 | not_relevant | 0 | 0 | The study evaluates a novel combination therapy in a mouse model and does not investigate the impact of specific gene variants on the pharmacokinetics or pharmacodynamics of melphalan. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 17:32 UTC</sub>
