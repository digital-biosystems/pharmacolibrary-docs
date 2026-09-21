<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01A&quot;,&quot;href&quot;:&quot;atc/L01A.md&quot;},{&quot;label&quot;:&quot;busulfan&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Busulfan_Lawson2022_pediatric_stem_cell_transplantation_reci&quot;,&quot;label&quot;:&quot;Lawson_2022_pediatric stem cell transplantation recipients&quot;,&quot;href&quot;:&quot;drugs/drug_busulfan/Busulfan_Lawson2022_pediatric_stem_cell_transplantation_reci.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# busulfan

- **generic name:** busulfan
- **ATC codes:** `L01AB01`
- **DrugBank:** [DB01008](https://go.drugbank.com/drugs/DB01008)
- **groups:** approved, investigational

## About

**Description.** Busulfan is a bifunctional alkylating agent, having a selective immunosuppressive effect on bone marrow. It is not a structural analog of the nitrogen mustards. It has been used in the palliative treatment of chronic myeloid leukemia (myeloid leukemia, chronic), but although symptomatic relief is provided, no permanent remission is brought about. According to the Fourth Annual Report on Carcinogens (NTP 85-002, 1985), busulfan is listed as a known carcinogen.

**Indication.** For use in combination with cyclophosphamide as a conditioning regimen prior to allogeneic hematopoietic progenitor cell transplantation for chronic myelogenous  (myeloid, myelocytic, granulocytic) leukemia (FDA has designated busulfan as an orphan drug for this use). It is also used as a component of pretransplant conditioning regimens in patients undergoing bone marrow transplantation for acute myeloid leukemia and nonmalignant diseases.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 02:51 | 26:36 | 0/0/0 | 0/0/0 | 1/0/6 | 130,125/6,382 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 2/8 | 9/1 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Lawson_2022_pediatric stem cell transplantation recipients](drugs/drug_busulfan/Busulfan_Lawson2022_pediatric_stem_cell_transplantation_reci.md) | Lawson R et al., Population pharmacokinetic model for on…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12809](https://doi.org/10.1002/psp4.12809) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | **CYP2C9** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Uppugunduri_2017](drugs/drug_busulfan/pgx_Uppugunduri_2017_CYP2C9_safety.md) | Uppugunduri CRS et al., The Association of Combined GSTM1 and C…, Frontiers in pharmacology (2017) | [10.3389/fphar.2017.00451](https://doi.org/10.3389/fphar.2017.00451) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **GSTA1** | `Q22` · CL | metabolism | [Ansari_2017](drugs/drug_busulfan/pgx_Ansari_2017_GSTA1_Q22.md) | Ansari M et al., GSTA1 diplotypes affect busulfan cleara…, Oncotarget (2017) | [10.18632/oncotarget.20310](https://doi.org/10.18632/oncotarget.20310) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **GSTM1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [Ansari_2017](drugs/drug_busulfan/pgx_Ansari_2017_GSTM1_Q100.md) | Ansari M et al., GSTA1 diplotypes affect busulfan cleara…, Oncotarget (2017) | [10.18632/oncotarget.20310](https://doi.org/10.18632/oncotarget.20310) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **GSTP1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [Ansari_2017](drugs/drug_busulfan/pgx_Ansari_2017_GSTP1_Q100.md) | Ansari M et al., GSTA1 diplotypes affect busulfan cleara…, Oncotarget (2017) | [10.18632/oncotarget.20310](https://doi.org/10.18632/oncotarget.20310) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **GSTA1** | `Q22` · CL | metabolism | [Ben_2024](drugs/drug_busulfan/pgx_Ben_2024_GSTA1_Q22.md) | Ben Hassine K et al., Pharmacokinetic Modeling and Simulation…, Transplantation and cellula… (2024) | [10.1016/j.jtct.2023.12.003](https://doi.org/10.1016/j.jtct.2023.12.003) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **GSTA1** | `Q22` · CL | metabolism | [Seydoux_2023](drugs/drug_busulfan/pgx_Seydoux_2023_GSTA1_Q22.md) | Seydoux C et al., Effect of pharmacokinetics and pharmaco…, Bone marrow transplantation (2023) | [10.1038/s41409-023-01963-z](https://doi.org/10.1038/s41409-023-01963-z) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **GSTM1** | `Q27` · CL/F | metabolism | [Uppugunduri_2017](drugs/drug_busulfan/pgx_Uppugunduri_2017_GSTM1_Q27.md) | Uppugunduri CRS et al., The Association of Combined GSTM1 and C…, Frontiers in pharmacology (2017) | [10.3389/fphar.2017.00451](https://doi.org/10.3389/fphar.2017.00451) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=busulfan) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | brain | <sub>“…a small, highly lipophilic molecule that crosses the blood-brain-barrier. The absolute bio…”</sub> | prose |
| absorption | small intestine | <sub>“…Completely absorbed from the gastrointestinal tract. Busulfan is a small, highly lipophili…”</sub> | prose |
| metabolism | liver | `CYP2C9` safety_allele, `CYP3A4` substrate, `GSTM1` substrate/unknown, `GSTP1` substrate/unknown | DrugBank actor |
| metabolism | lung | `GSTP1` substrate/unknown | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…e urine over 48 hours; negligible amounts were recovered in feces. Less than 2% of the adm…”</sub> | prose |
| excretion | kidney | <sub>“…pproximately 30% of the radioactivity was excreted into the urine over 48 hours; negligibl…”</sub> | prose |

<sub>Actors without a tissue in the table: DNA (cross-linking/alkylation), GSTA1 (metabolism), GSTA1 (substrate), GSTA2 (substrate), MGST2 (substrate).</sub>

## Coverage

- **PubMed hits:** 268 matched, 69 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_12 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `He_2025.pdf` | He Z et al., Population Pharmacokinetics of Busulfan…, Pediatric blood & cancer (2025) | popPK | 10 | [10.1002/pbc.31969](https://doi.org/10.1002/pbc.31969) | [40781807](https://pubmed.ncbi.nlm.nih.gov/40781807) | The paper describes a population pharmacokinetic model for busulfan, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Lawson_2022.pdf` | Lawson R et al., Population pharmacokinetic model for on…, CPT: pharmacometrics & syst… (2022) | popPK | 10 | [10.1002/psp4.12809](https://doi.org/10.1002/psp4.12809) | [35611997](https://pubmed.ncbi.nlm.nih.gov/35611997) | The evidence explicitly reports quantitative population PK parameters for busulfan, including typical clearance (14.5 L/h), central volume (40.6 L), and peripheral volume (3.57 L). |
| `Takahashi_2022.pdf` | Takahashi T et al., Busulfan dose Recommendation in Inherit…, Transplantation and cellula… (2022) | popPK | 10 | [10.1016/j.jtct.2021.11.018](https://doi.org/10.1016/j.jtct.2021.11.018) | [34883294](https://pubmed.ncbi.nlm.nih.gov/34883294) | The paper describes a population PK model for busulfan, but the specific numeric parameter values (clearance, volume, etc.) are not present in the provided evidence. |
| `Ehrsson_1983.pdf` | Ehrsson H et al., Busulfan kinetics, Clinical pharmacology and t… (1983) | popPK | 9 | [10.1038/clpt.1983.134](https://doi.org/10.1038/clpt.1983.134) | [6574831](https://pubmed.ncbi.nlm.nih.gov/6574831) | The study reports quantitative PK parameters for busulfan, including the elimination rate constant (0.27 +/- 0.05 hr-1), but other specific values like absorption rate constants are described qualitatively without explicit numbers in the provided text. |
| `Philippe_2019.pdf` | Philippe M et al., Maximal concentration of intravenous bu…, Bone marrow transplantation (2019) | popPK | 8 | [10.1038/s41409-018-0281-7](https://doi.org/10.1038/s41409-018-0281-7) | [30108322](https://pubmed.ncbi.nlm.nih.gov/30108322) | The study is a PK-PD analysis of busulfan in children, but the specific quantitative PK parameter values (CL, V, etc.) are not present in the provided evidence, which only reports Cmax as a predictor and general study demographics. |
| `Admiraal_2014.pdf` | Admiraal R et al., Towards evidence-based dosing regimens…, Archives of disease in chil… (2014) | pd | 5 | [10.1136/archdischild-2013-303721](https://doi.org/10.1136/archdischild-2013-303721) | [24356807](https://www.ncbi.nlm.nih.gov/pubmed/24356807) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Bartelink_2025.pdf` | Bartelink IH et al., Optimizing Allogeneic Hematopoietic Cel…, Transplantation and cellula… (2025) | pd | 5 | [10.1016/j.jtct.2025.07.008](https://doi.org/10.1016/j.jtct.2025.07.008) | [40759455](https://www.ncbi.nlm.nih.gov/pubmed/40759455) | metadata signals extractable PD data (PK/PD) |
| `Dalal_2010.pdf` | Dalal J et al., Busulfan in children: impact of develop…, Pediatric blood & cancer (2010) | pd | 5 | [10.1002/pbc.22296](https://doi.org/10.1002/pbc.22296) | [19953643](https://www.ncbi.nlm.nih.gov/pubmed/19953643) | metadata signals extractable PD data (exposure-response) |
| `Freise_2008.pdf` | Freise KJ et al., Pharmacodynamic modeling of the effect…, Journal of pharmacokinetics… (2008) | pd | 4 | [10.1007/s10928-008-9100-x](https://doi.org/10.1007/s10928-008-9100-x) | [18937059](https://www.ncbi.nlm.nih.gov/pubmed/18937059) | metadata signals extractable PD data (Pharmacodynamicmodel) |
| `Tessaro_2015.pdf` | Tessaro I et al., Transferability and inter-laboratory va…, Reproductive toxicology (El… (2015) | pd | 4 | [10.1016/j.reprotox.2015.01.001](https://doi.org/10.1016/j.reprotox.2015.01.001) | [25625651](https://www.ncbi.nlm.nih.gov/pubmed/25625651) | metadata signals extractable PD data (EC50) |
| `ten_2013.pdf` | ten Brink MH et al., Effect of genetic variants GSTA1 and CY…, Pharmacogenomics (2013) | pgx | 8 | [10.2217/pgs.13.159](https://doi.org/10.2217/pgs.13.159) | [24192117](https://www.ncbi.nlm.nih.gov/pubmed/24192117) | metadata signals extractable PGX data (CYP39A1, PK/PD-context) |
| `Dunn_2022.pdf` | Dunn A et al., Characterization of drug-drug interacti…, British journal of clinical… (2022) | pgx | 7 | [10.1111/bcp.15151](https://doi.org/10.1111/bcp.15151) | [34799882](https://www.ncbi.nlm.nih.gov/pubmed/34799882) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-15T02:44:05.193945+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Admiraal_2014 | irrelevant | 0 | 0 | The provided evidence contains only the paper title and no quantitative pharmacokinetic parameters or data for busulfan. |
| PD | Admiraal_2014 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text or any numeric PD parameters, curves, or model results for busulfan. |
| PGx | Al-Riyami_2022 | not_relevant | 2 | 5 | The study reports associations between GST genotypes and clinical outcomes (graft loss, GVHD, mortality) but does not report a significant change in the pharmacokinetic parameter (clearance) itself. |
| popPK | Bartelink_2016 | irrelevant | 2 | 0 | The study reports clinical outcomes associated with busulfan AUC exposure but does not provide specific quantitative pharmacokinetic parameters (such as clearance, volume, or half-life) for the drug. |
| popPK | Bartelink_2025 | irrelevant | 0 | 0 | The evidence provided contains only the paper title and no quantitative pharmacokinetic parameters or data for busulfan. |
| PD | Bartelink_2025 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text or any numeric PD parameters, curves, or model results. |
| popPK | Bognàr_2024 | irrelevant | 2 | 0 | The study is a clinical outcome analysis using a previously validated PK model to estimate exposure (AUC), but it does not report the underlying quantitative PK parameters (CL, V, Q, ka) for busulfan in the provided text. |
| PGx | Bradford_2020 | not_relevant | 2 | 0 | The paper analyzes GST genotypes but explicitly states that no single genetic finding predicted rapid versus slow clearance, reporting a null result rather than a specific pharmacogenomic effect. |
| PGx | Castelli_2024 | not_relevant | 0 | 0 | The paper is a clinical case series describing the management of busulfan-induced lung injury and does not report quantitative pharmacogenomic effects on PK or PD parameters. |
| popPK | Dalal_2010 | irrelevant | 0 | 0 | The provided evidence contains only the paper title and no quantitative pharmacokinetic parameters or data for busulfan. |
| PD | Dalal_2010 | not_relevant | 0 | 0 | The provided text contains only the title of the paper and lacks the full text, abstract, or data required to determine if numeric PD parameters or exposure-response relationships are reported. |
| PGx | Dunn_2022 | not_relevant | 0 | 0 | The study investigates drug-drug interactions and maturation effects (weight/age) on busulfan PK, but does not report any pharmacogenomic effects (gene variants/genotypes). |
| PGx | Fishleder_1992 | not_relevant | 0 | 0 | The paper reports the incidence of mixed chimerism (a clinical outcome) in patients receiving busulfan, but does not investigate the impact of specific gene variants or genotypes on busulfan pharmacokinetics or pharmacodynamics. |
| popPK | Freise_2008 | irrelevant | 0 | 0 | The paper title indicates a pharmacodynamic study on cellular lifespan, with no evidence of busulfan pharmacokinetic parameters. |
| PD | Freise_2008 | not_relevant | 0 | 0 | The paper discusses general pharmacodynamic modeling of cellular lifespan and environmental effects, but does not mention busulfan or provide any specific exposure-response data for it. |
| PGx | Goekkurt_2007 | not_relevant | 2 | 5 | The study reports associations between MTHFR polymorphisms and liver toxicity markers (bilirubin, SOS), which are adverse events/PD outcomes of toxicity, not direct PK parameters (AUC, Cmax) or standard PD parameters of busulfan efficacy. |
| PGx | Gomez-Ospina_2025 | not_relevant | 0 | 0 | The paper focuses on genome editing for Gaucher disease and mentions busulfan only as a conditioning regimen, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Gu_2018 | irrelevant | 0 | 0 | The paper reports in-vitro cytotoxicity (EC20) values for busulfan, not pharmacokinetic disposition parameters. |
| PD | Gu_2018 | not_relevant | 0 | 0 | The paper reports in vitro cytotoxicity (EC20) for busulfan, which is a pharmacological potency metric, not a pharmacodynamic (exposure-response) relationship in a biological system or patient population. |
| popPK | He_2025 | relevant | 10 | 0 | The paper describes a population pharmacokinetic model for busulfan, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| popPK | Hendricks_1991 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of hepsulfam, not busulfan, which is only mentioned as a structural comparator. |
| popPK | Joerger_2012 | irrelevant | 2 | 0 | The paper is a review article discussing covariate modeling in oncology and mentions busulfan only as an example of a drug with improved pharmacological understanding, without providing original quantitative PK parameter values. |
| PGx | Joerger_2012 | not_relevant | 0 | 0 | The paper is a review of covariate modeling methods and does not report specific pharmacogenomic effects on busulfan PK/PD parameters. |
| PGx | Kiladjian_2024 | not_relevant | 0 | 0 | The paper describes a clinical trial protocol for ropeginterferon alfa-2b in essential thrombocythemia and does not report pharmacogenomic effects on busulfan PK/PD parameters. |
| PGx | Kwiatkowski_2024 | not_relevant | 0 | 0 | The paper reports on the efficacy of gene therapy for beta-thalassaemia and mentions busulfan conditioning, but does not report pharmacogenomic effects on busulfan PK or PD parameters. |
| PGx | Law_2012 | not_relevant | 0 | 0 | The paper reports clinical outcomes (engraftment, GVHD, survival) of a conditioning regimen but does not report pharmacokinetic or pharmacodynamic parameters or any association with gene variants. |
| PGx | Lawson_2021 | not_relevant | 5 | 2 | The paper is a review that identifies GSTA1 genotype as a covariate affecting clearance but does not report specific fitted effect sizes or quantitative pharmacogenomic parameters in the provided text. |
| PGx | Locatelli_2022 | not_relevant | 0 | 0 | The paper reports clinical outcomes of gene therapy and mentions busulfan PK-guided dosing, but does not report any pharmacogenomic effect (gene variant impact) on busulfan PK or PD parameters. |
| PGx | Lum_2026 | not_relevant | 0 | 0 | The paper focuses on treosulfan outcomes and mentions busulfan only as a comparison, without reporting any pharmacogenomic effects on busulfan PK or PD parameters. |
| popPK | Mahmood_2020 | irrelevant | 2 | 0 | Busulfan is one of ten drugs used as a dataset for model validation rather than the subject of a dedicated PK study, and specific numeric clearance values for busulfan are not present in the provided text. |
| PD | Mahmood_2020 | not_relevant | 0 | 0 | The paper focuses on pharmacokinetic (clearance) maturation and allometric scaling models, not pharmacodynamic (exposure-response or dose-response) relationships. |
| popPK | McCune_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of fludarabine, and busulfan is only mentioned as a co-administered conditioning agent without any reported PK parameters for it. |
| PGx | McCune_2023 | not_relevant | 0 | 0 | The paper investigates pharmacometabolomics (endogenous metabolites) for predicting busulfan clearance, not pharmacogenomics (gene variants). |
| popPK | Migliavacca_2024 | irrelevant | 0 | 0 | The paper is a clinical safety and efficacy study for gene therapy where busulfan is used only as a conditioning agent, with no pharmacokinetic parameters reported. |
| PGx | Mirza_2025 | not_relevant | 0 | 0 | The paper reports clinical outcomes and adverse events of gene therapy (beti-cel) in beta-thalassemia patients conditioned with busulfan, but does not report any pharmacogenomic analysis linking specific gene variants to busulfan pharmacokinetic or pharmacodynamic parameters. |
| PGx | Paioli_2014 | not_relevant | 0 | 0 | The paper analyzes the influence of sex and age on chemotherapy toxicity, not the effect of gene variants on busulfan pharmacokinetics or pharmacodynamics. |
| popPK | Philippe_2019 | relevant | 8 | 0 | The study is a PK-PD analysis of busulfan in children, but the specific quantitative PK parameter values (CL, V, etc.) are not present in the provided evidence, which only reports Cmax as a predictor and general study demographics. |
| popPK | Porta-Oltra_2021 | irrelevant | 1 | 0 | The paper is a non-systematic literature review that mentions busulfan only in the context of general therapeutic monitoring benefits without reporting specific quantitative pharmacokinetic parameter values. |
| PD | Porta-Oltra_2021 | not_relevant | 1 | 0 | The paper is a non-systematic literature review that qualitatively mentions busulfan in the context of therapeutic personalization but does not report specific numeric PD parameters or concentration-effect curves for busulfan. |
| PGx | Remy_2021 | not_relevant | 2 | 5 | The study investigates the effect of Sickle Cell Disease (a disease phenotype) on busulfan clearance, not a specific gene variant/genotype (GSTA1 was only used for matching). |
| PGx | Sun_2020 | not_relevant | 2 | 5 | The study explicitly concludes that GSTA1 genotype is not a clinically relevant predictor of busulfan clearance, accounting for only 1.1% of variability. |
| PGx | Sweiss_2019 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (busulfan and blinatumomab) mediated by cytokine-induced CYP3A4 suppression, not a pharmacogenomic effect based on a specific gene variant or genotype. |
| popPK | Takahashi_2022 | relevant | 10 | 0 | The paper describes a population PK model for busulfan, but the specific numeric parameter values (clearance, volume, etc.) are not present in the provided evidence. |
| popPK | Takahashi_2023 | irrelevant | 2 | 1 | This is a systematic review and simulation study that reports summary statistics (medians, percentages) of model characteristics rather than original quantitative PK parameter values for a specific population. |
| PGx | Takahashi_2023 | not_relevant | 5 | 0 | The paper is a systematic review that mentions GSTA1 as a covariate in 15% of models but does not report specific fitted effect sizes or quantitative pharmacogenomic data for busulfan. |
| popPK | Tessaro_2015 | irrelevant | 0 | 0 | The paper concerns an in vitro bovine oocyte fertilization test and does not report pharmacokinetic parameters for busulfan. |
| PD | Tessaro_2015 | not_relevant | 0 | 0 | The paper focuses on the transferability of an in vitro bovine oocyte fertilization test and does not report any pharmacodynamic or exposure-response data for busulfan. |
| PGx | Thompson_2018 | not_relevant | 0 | 0 | The paper reports on the efficacy of gene therapy for beta-thalassemia and does not investigate the impact of genetic variants on the pharmacokinetics or pharmacodynamics of busulfan. |
| PGx | Uppugunduri_2017 | not_relevant | 5 | 5 | The study reports an association between genotypes and the clinical outcome of hemorrhagic cystitis, not a direct pharmacokinetic or pharmacodynamic parameter of busulfan. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_busulfan`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
