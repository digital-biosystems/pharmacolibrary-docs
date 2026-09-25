<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;tryptophan&quot;}]"></div>

# tryptophan

- **generic name:** tryptophan
- **ATC codes:** `N06AX02`
- **DrugBank:** [DB00150](https://go.drugbank.com/drugs/DB00150)
- **groups:** approved, investigational, nutraceutical, withdrawn

## About

**Description.** An essential amino acid that is necessary for normal growth in infants and for nitrogen balance in adults. It is a precursor of indole alkaloids in plants. It is a precursor of serotonin (hence its use as an antidepressant and sleep aid). It can be a precursor to niacin, albeit inefficiently, in mammals.

**Indication.** Tryptophan may be useful in increasing serotonin production, promoting healthy sleep, managing depression by enhancing mental and emotional well-being, managing pain tolerance, and managing weight.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-24 20:23 | 2:15:54 | 0/0/0 | 1/2/0 | 0/0/0 | 698,563/32,003 | ollama / qwen3.8:27b-mtp-q8_0 | 58 | 7/50 | 52/6 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> | [Serkland_2026](drugs/drug_tryptophan/pd_Serkland_2026_CD19.md) | Serkland TT et al., Pharmacokinetic-Pharmacodynamic Modelli…, Clinical pharmacokinetics (2026) | [10.1007/s40262-026-01692-8](https://doi.org/10.1007/s40262-026-01692-8) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> | [Hanke_2026](drugs/drug_tryptophan/pd_Hanke_2026_MCH.md) | Hanke N et al., Pharmacokinetic/pharmacodynamic analysi…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1770980](https://doi.org/10.3389/fphar.2026.1770980) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> | [Hanke_2026](drugs/drug_tryptophan/pd_Hanke_2026_RBC.md) | Hanke N et al., Pharmacokinetic/pharmacodynamic analysi…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1770980](https://doi.org/10.3389/fphar.2026.1770980) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.636). The first reading is what the record holds.">cross-check: disputed</span> | [Hoeben_2026](drugs/drug_tryptophan/pd_Hoeben_2026_TV.md) | Hoeben E et al., PKPD-Based Translational Modeling of Ca…, European journal of drug me… (2026) | [10.1007/s13318-026-01010-4](https://doi.org/10.1007/s13318-026-01010-4) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tryptophan) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>“…Hepatic.…”</sub> | prose |

<sub>Actors without a tissue in the table: DDC (substrate), IDO1 (binder), IDO1 (substrate), SLC16A10 (inhibitor), SLC16A2 (inhibitor), TDO2 (substrate), TPH1 (substrate), TPH2 (substrate), WARS1 (inhibitor), WARS1 (substrate), WARS2 (inhibitor), WARS2 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 12305 matched, 222 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_23 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Shaw_1975.pdf` | Shaw DM et al., Multicompartmental analysis of amino ac…, Psychological medicine (1975) | popPK | 9 | [10.1017/s0033291700056476](https://doi.org/10.1017/s0033291700056476) | [1161958](https://pubmed.ncbi.nlm.nih.gov/1161958) | The paper describes a compartmental analysis of tryptophan PK, but the provided evidence contains only qualitative summaries and no numeric parameter values. |
| `Majewski_2018.pdf` | Majewski M et al., Toxicity and cardiac effects of acute e…, Toxicology and applied phar… (2018) | pd | 5 | [10.1016/j.taap.2018.01.004](https://doi.org/10.1016/j.taap.2018.01.004) | [29317240](https://www.ncbi.nlm.nih.gov/pubmed/29317240) | metadata signals extractable PD data (EC50) |
| `Mamede_2025.pdf` | Mamede L et al., Metabolomics study of 3-O-p-(Z/E)-couma…, International journal for p… (2025) | pd | 5 | [10.1016/j.ijpddr.2025.100595](https://doi.org/10.1016/j.ijpddr.2025.100595) | [40383077](https://www.ncbi.nlm.nih.gov/pubmed/40383077) | metadata signals extractable PD data (EC50) |
| `Shi_2017.pdf` | Shi JG et al., Population Pharmacokinetic and Pharmaco…, Journal of clinical pharmac… (2017) | pd | 5 | [10.1002/jcph.855](https://doi.org/10.1002/jcph.855) | [27990653](https://www.ncbi.nlm.nih.gov/pubmed/27990653) | metadata signals extractable PD data (PharmacodynamicModel) |
| `Chilkoti_1995.pdf` | Chilkoti A et al., Site-directed mutagenesis studies of th…, Proceedings of the National… (1995) | pd | 4 | [10.1073/pnas.92.5.1754](https://doi.org/10.1073/pnas.92.5.1754) | [7878054](https://www.ncbi.nlm.nih.gov/pubmed/7878054) | metadata signals extractable PD data (EC50) |
| `Hertenstein_2011.pdf` | Hertenstein A et al., Suppression of human CD4+ T cell activa…, Biochemical pharmacology (2011) | pd | 4 | [10.1016/j.bcp.2011.06.013](https://doi.org/10.1016/j.bcp.2011.06.013) | [21703247](https://www.ncbi.nlm.nih.gov/pubmed/21703247) | metadata signals extractable PD data (EC50) |
| `Ji_2021.pdf` | Ji F et al., A cyclic peptide antenna ligand for enh…, The Analyst (2021) | pd | 4 | [10.1039/d1an00530h](https://doi.org/10.1039/d1an00530h) | [33913937](https://www.ncbi.nlm.nih.gov/pubmed/33913937) | metadata signals extractable PD data (EC50) |
| `Kim_2016.pdf` | Kim IS et al., In vitro and in silico evaluation of tr…, Comparative biochemistry an… (2016) | pd | 4 | [10.1016/j.cbpc.2016.03.011](https://doi.org/10.1016/j.cbpc.2016.03.011) | [27060260](https://www.ncbi.nlm.nih.gov/pubmed/27060260) | metadata signals extractable PD data (EC50) |
| `Knubel_2017.pdf` | Knubel CP et al., 3-Hydroxykynurenine, a Tryptophan Metab…, ACS medicinal chemistry let… (2017) | pd | 4 | [10.1021/acsmedchemlett.7b00169](https://doi.org/10.1021/acsmedchemlett.7b00169) | [28740612](https://www.ncbi.nlm.nih.gov/pubmed/28740612) | metadata signals extractable PD data (IC50) |
| `Kuroki_1988.pdf` | Kuroki GW et al., Purification and characterization of an…, Archives of biochemistry an… (1988) | pd | 4 | [10.1016/0003-9861(88)90489-4](https://doi.org/10.1016/0003-9861(88)90489-4) | [3341760](https://www.ncbi.nlm.nih.gov/pubmed/3341760) | metadata signals extractable PD data (sigmoid) |
| `Liu_2015.pdf` | Liu C et al., GPR139, an Orphan Receptor Highly Enric…, Molecular pharmacology (2015) | pd | 4 | [10.1124/mol.115.100412](https://doi.org/10.1124/mol.115.100412) | [26349500](https://www.ncbi.nlm.nih.gov/pubmed/26349500) | metadata signals extractable PD data (EC50) |
| `Puopolo_2022.pdf` | Puopolo T et al., Gram-Scale Preparation of Cannflavin A…, Biology (2022) | pd | 4 | [10.3390/biology11101416](https://doi.org/10.3390/biology11101416) | [36290320](https://www.ncbi.nlm.nih.gov/pubmed/36290320) | metadata signals extractable PD data (IC50) |
| `Sonklin_2021.pdf` | Sonklin C et al., Functional Characterization of Mung Bea…, Molecules (Basel, Switzerla… (2021) | pd | 4 | [10.3390/molecules26061515](https://doi.org/10.3390/molecules26061515) | [33802127](https://www.ncbi.nlm.nih.gov/pubmed/33802127) | metadata signals extractable PD data (EC50) |
| `Taleb_2017.pdf` | Taleb N et al., Stability of Commercially Available Glu…, Diabetes technology & thera… (2017) | pd | 4 | [10.1089/dia.2017.0204](https://doi.org/10.1089/dia.2017.0204) | [28846447](https://www.ncbi.nlm.nih.gov/pubmed/28846447) | metadata signals extractable PD data (EC50) |
| `Xu_2020.pdf` | Xu C et al., New insights into the harmful algae inh…, The Science of the total en… (2020) | pd | 4 | [10.1016/j.scitotenv.2020.136737](https://doi.org/10.1016/j.scitotenv.2020.136737) | [31982752](https://www.ncbi.nlm.nih.gov/pubmed/31982752) | metadata signals extractable PD data (EC50) |
| `Yousof_2024.pdf` | Yousof NSAM et al., Molecular networking-based mass spectra…, Fitoterapia (2024) | pd | 4 | [10.1016/j.fitote.2024.105955](https://doi.org/10.1016/j.fitote.2024.105955) | [38604259](https://www.ncbi.nlm.nih.gov/pubmed/38604259) | metadata signals extractable PD data (EC50) |
| `Morgan_2018.pdf` | Morgan ET et al., Physiological Regulation of Drug Metabo…, Drug metabolism and disposi… (2018) | pgx | 7 | [10.1124/dmd.117.079905](https://doi.org/10.1124/dmd.117.079905) | [29514828](https://www.ncbi.nlm.nih.gov/pubmed/29514828) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Barrie_2018.pdf` | Barrie ES et al., Testing genetic modifiers of behavior a…, Journal of developmental an… (2018) | pgx | 5 | [10.1007/s10882-018-9590-4](https://doi.org/10.1007/s10882-018-9590-4) | [30197492](https://www.ncbi.nlm.nih.gov/pubmed/30197492) | metadata signals extractable PGX data (SLC6A3) |
| `Gonzalez_2021.pdf` | Gonzalez I et al., MAOB rs3027452 Modifies Mood Improvemen…, International journal of ge… (2021) | pgx | 5 | [10.2147/IJGM.S305443](https://doi.org/10.2147/IJGM.S305443) | [33986613](https://www.ncbi.nlm.nih.gov/pubmed/33986613) | metadata signals extractable PGX data (COMT) |
| `Granados_2024.pdf` | Granados JC et al., Organic anion transporters in remote se…, Pharmacology & therapeutics (2024) | pgx | 5 | [10.1016/j.pharmthera.2024.108723](https://doi.org/10.1016/j.pharmthera.2024.108723) | [39284369](https://www.ncbi.nlm.nih.gov/pubmed/39284369) | metadata signals extractable PGX data (SLCO1B1) |
| `Thome_2024.pdf` | Thome T et al., A tryptophan-derived uremic metabolite/…, JCI insight (2024) | pgx | 5 | [10.1172/jci.insight.178372](https://doi.org/10.1172/jci.insight.178372) | [38652558](https://www.ncbi.nlm.nih.gov/pubmed/38652558) | metadata signals extractable PGX data (CYP1A1) |
| `Ugartemendia_2021.pdf` | Ugartemendia L et al., SLC6A4 polymorphisms modulate the effic…, Clinical nutrition (Edinbur… (2021) | pgx | 5 | [10.1016/j.clnu.2021.02.023](https://doi.org/10.1016/j.clnu.2021.02.023) | [33743283](https://www.ncbi.nlm.nih.gov/pubmed/33743283) | metadata signals extractable PGX data (SLC6A4) |
| `Yin_2016.pdf` | Yin L et al., Catecholamine pathway polymorphisms and…, Asia-Pacific psychiatry : o… (2016) | pgx | 5 | [10.1111/appy.12180](https://doi.org/10.1111/appy.12180) | [25854875](https://www.ncbi.nlm.nih.gov/pubmed/25854875) | metadata signals extractable PGX data (SLC6A2) |

<sub>queue written 2026-09-24T19:55:12.625686+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adeyemi_2023 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of anti-parasite activity of nanoparticles, not a pharmacokinetic study, and reports no disposition parameters for tryptophan. |
| PGx | Ahrens_2024 | not_relevant | 0 | 0 | The paper investigates associations between infant biomarkers and neurodevelopmental disorders, not the pharmacokinetics or pharmacodynamics of tryptophan. |
| PD | Alfredsson_1989 | not_relevant | 0 | 0 | The study explicitly states there was no dose-response effect of sulpiride on tryptophan levels and reports no numeric PD parameters or concentration-effect curves. |
| PD | Altamura_1994 | not_relevant | 1 | 0 | The text is a review of fluoxetine PK and only qualitatively mentions a potential interaction with tryptophan (serotonergic syndrome) without providing any numeric PD parameters or exposure-response data for tryptophan. |
| popPK | Amblard_1993 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on cholecystokinin analogs where tryptophan is merely a structural component of the peptide, not the subject drug for pharmacokinetic analysis. |
| PGx | An_2023 | not_relevant | 0 | 0 | The paper investigates drug-induced hepatotoxicity and metabolic changes in rats, not the effect of a specific gene variant on the pharmacokinetics or pharmacodynamics of tryptophan. |
| popPK | Arnold_2024 | irrelevant | 0 | 0 | The study is a secondary analysis of a depression RCT focusing on placebo response predictors and genetic polymorphisms, containing no pharmacokinetic data for tryptophan. |
| popPK | Ashok_2015 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on anti-HIV agents where tryptophan is used only as a synthetic starting material, not as the subject drug for pharmacokinetic evaluation. |
| popPK | Auerbach_1985 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of serotonin release in rat hippocampal slices, not a pharmacokinetic study of tryptophan disposition. |
| PGx | BRODY_1964 | not_relevant | 0 | 0 | The paper describes a genetic suppressor mutation restoring enzymatic activity in a bacterial strain, which is a basic biological mechanism and not a pharmacogenomic effect on the PK/PD of tryptophan as a drug. |
| PGx | Barrie_2018 | not_relevant | 0 | 0 | The paper investigates genetic associations with clinical behavioral scores (ADI-R, ADHD symptoms) rather than pharmacokinetic or pharmacodynamic parameters of tryptophan. |
| popPK | Bartholmes_1976 | irrelevant | 0 | 0 | The paper studies the binding of pyridoxal 5'-phosphate to tryptophan synthase enzyme, not the pharmacokinetics of tryptophan as a drug. |
| PD | Bartholmes_1976 | not_relevant | 0 | 0 | The paper describes the binding of a cofactor (pyridoxal 5'-phosphate) to an enzyme (tryptophan synthase), not the pharmacodynamic response of a drug (tryptophan) in a biological system. |
| popPK | Barzel_2026 | irrelevant | 0 | 0 | The paper is a review of population PK models for therapeutic enzymes in lysosomal storage diseases (e.g., imiglucerase, avalglucosidase alfa) and does not study tryptophan. |
| PD | Barzel_2026 | not_relevant | 3 | 0 | The paper is a review of therapeutic enzymes in lysosomal storage diseases and does not contain any data, analysis, or parameters related to tryptophan. |
| PGx | Basler_1992 | not_relevant | 0 | 0 | The paper describes point mutations in the steroid sulfatase gene causing X-linked ichthyosis and mentions a tryptophan substitution in the protein sequence, but it does not report pharmacokinetic or pharmacodynamic parameters of tryptophan as a drug. |
| popPK | Blanco_2026 | irrelevant | 0 | 0 | The study measures tryptophan as a biomarker of metabolism in HIV patients but does not report pharmacokinetic parameters (CL, V, ka, etc.) for tryptophan as a drug. |
| PD | Borrego-Muñoz_2022 | not_relevant | 3 | 2 | The paper reports IC50 values for antifungal activity, which is a dose-response metric, but it is a standard pharmacological assay for a specific pathogen, not a pharmacodynamic (PD) model of drug exposure-response in a biological system (e.g., PK/PD fit, Emax model, or concentration-effect curve in a host/organism context). |
| PGx | Bosma_1993 | not_relevant | 0 | 0 | The paper discusses a mutation in a bilirubin metabolizing enzyme (UGT1A1) causing Crigler-Najjar syndrome, not a pharmacogenomic effect on the PK/PD of the drug tryptophan. |
| popPK | Bourdon_2018 | irrelevant | 0 | 0 | The study is a metabolomic analysis of brain extracellular fluid changes during sleep/wake states, not a pharmacokinetic study, and reports no disposition parameters (CL, V, etc.) for tryptophan. |
| popPK | Bräm_2026 | irrelevant | 0 | 0 | The paper describes a methodological approach for automated pharmacometric modeling using warfarin and generic PK data, with no mention of tryptophan or specific disposition parameters for it. |
| PD | Bräm_2026 | not_relevant | 0 | 0 | The paper focuses on a methodological approach for automated pharmacometric model development using Neural ODEs and LASSO, and does not report any specific pharmacodynamic or exposure-response data for tryptophan. |
| PGx | Bunaciu_2013 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamic effects of FICZ on leukemia cell differentiation but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| PD | Burdick_2004 | not_relevant | 3 | 2 | The paper reports a single IC50 value for a specific compound (o-Bromobenzoyl l-tryptophan) in a structure-activity relationship study, but does not provide a full concentration-effect curve, multiple data points, or a fitted PD model (Emax, slope, etc.) for tryptophan itself. |
| PGx | Chen_2024 | not_relevant | 0 | 0 | The paper investigates biological aging and metabolic associations, not the pharmacokinetics or pharmacodynamics of tryptophan as a drug. |
| PGx | Chen_2024_2 | not_relevant | 0 | 0 | The paper investigates the prognostic value of ALDH2 expression in hepatocellular carcinoma and its role in tryptophan metabolism, but it does not report a pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of a specific drug. |
| PD | Chen_2025 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values for enzyme inhibition and qualitative in vivo behavioral improvements, but lacks a formal pharmacodynamic model or exposure-response analysis linking drug concentration to effect. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of rivaroxaban, not tryptophan. |
| PD | Chen_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on the external validation of population pharmacokinetic (PK) models for rivaroxaban and does not report any pharmacodynamic (PD) or exposure-response relationships. |
| PGx | Cheng_2026 | not_relevant | 0 | 0 | The paper investigates the role of the FTH1 gene in hepatocellular carcinoma pathogenesis and tryptophan metabolism, but does not report a pharmacogenomic effect on the PK or PD of a specific drug. |
| popPK | Chilkoti_1995 | irrelevant | 0 | 0 | no_text gate: only 137 chars of text extracted (&lt; 400) |
| PD | Chilkoti_1995 | not_relevant | 0 | 0 | The paper investigates the structural role of tryptophan residues in the streptavidin-biotin complex via mutagenesis, not the pharmacodynamics of tryptophan as a drug. |
| PGx | Christ_2017 | not_relevant | 0 | 0 | The paper investigates the off-target metabolic activity of the herbicide-resistance gene BAR on endogenous tryptophan in plants, not a pharmacogenomic effect on the PK/PD of a drug. |
| popPK | Colle_2025 | irrelevant | 0 | 0 | The study measures plasma metabolite levels for diagnostic/clinical association purposes and does not report pharmacokinetic disposition parameters (CL, V, ka, etc.) for tryptophan. |
| PGx | Cong_2022 | not_relevant | 0 | 0 | The study investigates the pharmacogenomics of olanzapine, not tryptophan; tryptophan is only mentioned as a metabolic pathway affected by the drug. |
| PGx | Crisafulli_2011 | not_relevant | 0 | 0 | The paper is a review of pharmacogenetics for antidepressants and does not report a pharmacogenomic effect on the PK/PD of tryptophan. |
| PD | Cui_2020 | not_relevant | 3 | 5 | The paper reports in vitro IC50 values for enzyme inhibition, which are pharmacodynamic parameters, but it does not report an exposure-response or dose-response relationship in a biological system (PK/PD) or a formal PD model. |
| popPK | Das_2025 | irrelevant | 0 | 0 | The paper investigates the antifungal mechanism of a Cinchona-based formulation (quinine) against Rhizoctonia solani, using tryptophan only as a supplement to demonstrate starvation effects, and does not report any pharmacokinetic parameters for tryptophan. |
| popPK | De_2018 | irrelevant | 0 | 0 | The study assesses the physicochemical stability of parenteral nutrition admixtures, not the pharmacokinetics of tryptophan. |
| popPK | Deutz_2025 | irrelevant | 2 | 0 | The study reports metabolic flux changes (production rates) for tryptophan in a sepsis model rather than standard pharmacokinetic disposition parameters (CL, V, ka) for the drug, and no numeric PK values are provided. |
| popPK | Diksic_1990 | irrelevant | 2 | 0 | The study focuses on the analogue alpha-methyl-L-tryptophan for measuring serotonin synthesis, not the pharmacokinetics of tryptophan itself, and lacks quantitative PK parameters for tryptophan. |
| popPK | Diksic_2001 | irrelevant | 2 | 0 | The study focuses on alpha-methyl-L-tryptophan as a tracer for serotonin synthesis rather than the pharmacokinetics of tryptophan itself, and no quantitative PK parameter values are provided in the evidence. |
| PGx | Drozdov-Tikhomirov_1977 | not_relevant | 0 | 0 | The paper describes a mathematical model of tryptophan metabolism in E. coli, not a pharmacogenomic effect on a PK/PD parameter in humans. |
| popPK | Dulal_2018 | irrelevant | 0 | 0 | The paper is a structural biology study on Dectin-1 protein oligomerization and uses tryptophan fluorescence as a spectroscopic tool, not as a subject drug for pharmacokinetic analysis. |
| PD | Dulal_2018 | not_relevant | 0 | 0 | The paper describes protein-ligand binding and oligomerization of Dectin-1, not a pharmacodynamic exposure-response relationship for the drug tryptophan. |
| PD | Ebadi_1982 | not_relevant | 0 | 0 | The text is a review of drug-vitamin B6 interactions and mentions tryptophan only in the context of picolinic acid metabolism, without reporting any quantitative pharmacodynamic or exposure-response data. |
| popPK | Eleveld_2026 | irrelevant | 0 | 0 | The paper is a software validation study comparing estimation methods (OpenPMX vs NONMEM) and does not report specific pharmacokinetic parameters for tryptophan. |
| PD | Eleveld_2026 | not_relevant | 0 | 0 | The paper is a software validation study comparing estimation precision of OpenPMX vs NONMEM using generic PK models, with no specific drug (tryptophan) or pharmacodynamic data reported. |
| PGx | Fifita_2021 | not_relevant | 0 | 0 | The paper investigates genetic variants in tryptophan metabolism genes as risk factors for ALS, not the effect of genotypes on the pharmacokinetics or pharmacodynamics of tryptophan as a drug. |
| PGx | Francikowski_2019 | not_relevant | 0 | 0 | The paper studies genetic mutations affecting eye pigmentation and tryptophan metabolism in house crickets, not pharmacokinetic or pharmacodynamic parameters of a drug. |
| popPK | Frankevich_2026 | irrelevant | 0 | 0 | The study is a metabolomic analysis of amino acid concentrations in biological fluids, not a pharmacokinetic study reporting disposition parameters for tryptophan. |
| popPK | Friedrich_1976 | irrelevant | 0 | 0 | The paper is an in-vitro enzymology study on bacterial enzymes where tryptophan acts as an inhibitor, not a pharmacokinetic study of tryptophan disposition. |
| PD | Friedrich_1976 | not_relevant | 0 | 0 | The paper reports in vitro enzyme kinetics (Km, Ki) for bacterial enzymes, not pharmacodynamic exposure-response relationships for a drug in a biological system. |
| PGx | Friedrich_2021 | not_relevant | 0 | 0 | The paper investigates the impact of IDH mutations on glioma-associated myeloid cells and T-cell suppression, not the pharmacokinetics or pharmacodynamics of tryptophan as a drug. |
| popPK | Genet_1994 | irrelevant | 0 | 0 | The paper describes the purification and enzymatic kinetics of an enzyme acting on tryptophan, not the pharmacokinetics of tryptophan as a drug. |
| PD | Genet_1994 | not_relevant | 0 | 0 | The paper reports enzyme kinetics (Km, kcat) for a specific enzyme acting on a substrate, which is biochemical characterization, not pharmacodynamic exposure-response or dose-response modeling for a drug. |
| popPK | Glass_2023 | irrelevant | 0 | 0 | The study is a metabolomics analysis of urine metabolites in ME/CFS patients and does not report pharmacokinetic parameters (CL, V, etc.) for tryptophan. |
| popPK | González-Carrera_2026 | irrelevant | 0 | 0 | The paper is a mechanistic study of an antimicrobial peptide (VC15) and does not report pharmacokinetic parameters for tryptophan. |
| PGx | Gooding_1987 | not_relevant | 0 | 0 | The paper discusses tryptophan metabolism in tsetse flies, not the pharmacokinetics or pharmacodynamics of tryptophan as a drug in humans. |
| PGx | Gordon_1991 | not_relevant | 0 | 0 | The paper describes a clinical association between tryptophan ingestion and eosinophilia-myalgia syndrome but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Granados_2024 | not_relevant | 0 | 0 | The paper is a theoretical review of organic anion transporters and does not report specific pharmacogenomic effects on tryptophan PK/PD parameters. |
| PGx | Gray_2026 | not_relevant | 0 | 0 | The paper discusses the role of tryptophan residues in electron transfer within cytochrome P450 enzymes, not the pharmacokinetics or pharmacodynamics of tryptophan as a drug. |
| PD | Grison_2022 | not_relevant | 1 | 0 | The paper reports metabolomic changes (including tryptophan) as biomarkers of uranium exposure but does not provide a pharmacodynamic model or numeric dose-response parameters for tryptophan itself. |
| popPK | Gunn_2015 | irrelevant | 0 | 0 | The paper is a review of PET imaging methods and does not report quantitative pharmacokinetic parameters for the drug tryptophan. |
| popPK | Hajishafiee_2021 | irrelevant | 1 | 0 | The study measures plasma tryptophan concentrations as a biomarker for appetite suppression but does not report pharmacokinetic disposition parameters (e.g., clearance, volume of distribution) or a PK model. |
| popPK | Hampe_1981 | irrelevant | 0 | 0 | The paper studies the interaction of urea with lysozyme using spectroscopy, where tryptophan is mentioned only as a protein residue involved in binding, not as a drug subject to pharmacokinetic analysis. |
| PD | Hampe_1981 | not_relevant | 0 | 0 | The paper studies the biophysical interaction of urea with lysozyme using UV spectroscopy, not the pharmacodynamics of tryptophan as a drug. |
| popPK | Hanke_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of iclepertin, not tryptophan. |
| PGx | Hardebeck_2023 | not_relevant | 0 | 0 | The paper studies the effect of a PCNA mutation on protein stability and binding affinity, not the pharmacokinetics or pharmacodynamics of the drug tryptophan. |
| popPK | Hartvig_1995 | irrelevant | 0 | 0 | The study uses 5-hydroxy-L-tryptophan (5-HTP) as a PET tracer to measure serotonin synthesis rates, not tryptophan as the subject drug for PK parameter estimation. |
| popPK | He_2023 | irrelevant | 0 | 0 | The paper focuses on the synthesis and antioxidant activity of tryptophan peptides, not on the pharmacokinetics of tryptophan. |
| PD | He_2023 | not_relevant | 0 | 0 | The paper reports in vitro antioxidant activity (EC50) of synthesized peptides, which is a biochemical assay, not a pharmacodynamic (exposure-response) relationship for the drug tryptophan in a biological system. |
| PGx | Helfrich_2021 | not_relevant | 0 | 0 | The paper describes the structural role of a tryptophan amino acid residue in an enzyme, not a pharmacogenomic effect on the PK/PD of a drug. |
| popPK | Hertenstein_2011 | irrelevant | 0 | 0 | The study focuses on the immunological mechanism of tranilast, not the pharmacokinetics of tryptophan. |
| popPK | Hodgson_2017 | irrelevant | 0 | 0 | The study is a metabolomic biomarker analysis measuring plasma concentrations of tryptophan, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Hoeben_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of calaspargase pegol (an enzyme), not the amino acid tryptophan. |
| popPK | Hsu_2026 | irrelevant | 0 | 0 | The paper is a methodological simulation study on population PK model building strategies and does not report pharmacokinetic parameters for tryptophan. |
| PD | Hsu_2026 | not_relevant | 0 | 0 | The paper focuses on population pharmacokinetic (PopPK) covariate identification methods and simulation power, with no mention of tryptophan or any pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Huang_2026 | irrelevant | 0 | 0 | The paper is a methodological study on automated PopPK modeling using 22 datasets (e.g., bedaquiline, cefaclor) and does not include tryptophan as a subject drug. |
| PD | Huang_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on automated population pharmacokinetic (PopPK) modeling methods and does not report any pharmacodynamic (PD) or exposure-response relationships for tryptophan or any other drug. |
| PD | Huo_2022 | not_relevant | 3 | 2 | The paper reports IC50 values for enzyme inhibition (TDO/IDO1) and qualitative in vivo antitumor effects, but does not provide a pharmacodynamic model (e.g., Emax, EC50) or exposure-response analysis for the drug's effect on the biological system (tumor growth or immune markers). |
| PD | Immanuel_2018 | not_relevant | 0 | 0 | The paper discusses tryptophan as a growth-limiting substrate in metabolic profiling but does not report any exposure-response or dose-response relationship with numeric PD parameters. |
| PGx | Inoue_2022 | not_relevant | 0 | 0 | The paper describes a structural biology method using tryptophan fluorescence to measure substrate binding to a transporter, not a pharmacogenomic effect on the PK/PD of the drug tryptophan. |
| popPK | Itoh_1989 | irrelevant | 0 | 0 | The study uses Tc-99m N-pyridoxyl-5-methyl-tryptophan as a radiopharmaceutical probe for hepatobiliary scintigraphy, not as the subject drug for population pharmacokinetic analysis. |
| popPK | Ivanov_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics and mechanism of action of tryptophan derivatives (hypaphorines) as nAChR agonists, not on the pharmacokinetic disposition parameters of tryptophan itself. |
| PGx | Izzo_2009 | not_relevant | 0 | 0 | The paper reports a drug-herb interaction (St John's wort and tryptophan) causing serotonin syndrome, but does not report a pharmacogenomic effect (gene variant) on the PK or PD of tryptophan. |
| PGx | Jang_2015 | not_relevant | 0 | 0 | The paper investigates the structural role of a tryptophan residue in CYP2B enzymes, not the pharmacokinetics or pharmacodynamics of tryptophan as a drug. |
| popPK | Ji_2021 | irrelevant | 0 | 0 | The paper describes a chemical ligand for enhancing terbium luminescence and does not involve the pharmacokinetics of the drug tryptophan. |
| PD | Ji_2021 | not_relevant | 0 | 0 | The paper describes a chemical ligand for enhancing luminescence in a non-biological system (Tb3+ ion), not a pharmacodynamic drug response in a biological subject. |
| popPK | Jia_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for rivaroxaban, not tryptophan. |
| PD | Jia_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for rivaroxaban, not tryptophan, and does not provide a pharmacodynamic (PD) model or numeric PD parameters (e.g., Emax, EC50) for the drug. |
| popPK | Kang_2026 | irrelevant | 0 | 0 | The study focuses on multiple myeloma drugs (carfilzomib, lenalidomide, etc.) and does not report pharmacokinetic parameters for tryptophan. |
| PD | Kang_2026 | not_relevant | 0 | 0 | The paper focuses on multiple myeloma drugs (carfilzomib, lenalidomide, etc.) and does not contain any data, analysis, or mention of tryptophan. |
| popPK | Karlsen_2026 | irrelevant | 0 | 0 | The paper describes a general framework for benchmarking covariate model building methods using simulated data and does not report specific pharmacokinetic parameters for tryptophan. |
| PD | Karlsen_2026 | not_relevant | 0 | 0 | The paper describes a framework for benchmarking covariate model building in population pharmacokinetics (PK) and does not report any pharmacodynamic (PD) or exposure-response relationships for tryptophan or any other drug. |
| popPK | Kim_2016 | irrelevant | 0 | 0 | no_text gate: only 162 chars of text extracted (&lt; 400) |
| PGx | Kliman_2018 | not_relevant | 0 | 0 | The paper describes the physiological transport pathway of serotonin in the placenta and does not report pharmacogenomic effects of gene variants on the PK/PD of tryptophan. |
| PGx | Koh_2024 | not_relevant | 0 | 0 | The paper reports the discovery of a new ABCB1 inhibitor derived from tryptophan, but does not report a pharmacogenomic effect (gene variant) on the PK/PD of tryptophan itself. |
| PGx | Kou_2022 | not_relevant | 0 | 0 | The paper investigates the mechanism of AhR activation by oxidative stress and tryptophan catabolites (oxindole) in immune signaling, not the effect of genetic variants on the pharmacokinetics or pharmacodynamics of tryptophan as a drug. |
| popPK | Kuroki_1988 | irrelevant | 0 | 0 | The paper is an in-vitro enzymology study on chorismate mutase where tryptophan acts as an activator/ligand, not a pharmacokinetic study of tryptophan disposition. |
| PD | Kuroki_1988 | not_relevant | 0 | 0 | The paper describes in vitro enzyme kinetics and purification of chorismate mutase, not a pharmacodynamic or exposure-response relationship for tryptophan in a biological system. |
| popPK | Kwack_2026 | irrelevant | 0 | 0 | The study focuses on warfarin, theophylline, and tobramycin, and does not report pharmacokinetic parameters for tryptophan. |
| PD | Kwack_2026 | not_relevant | 0 | 0 | The paper focuses on automated population pharmacokinetic (PopPK) modeling for warfarin, theophylline, and tobramycin, and does not report any pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Ladva_2018 | irrelevant | 0 | 0 | The paper is an environmental metabolomics study examining traffic pollution effects, not a pharmacokinetic study, and contains no PK parameters for tryptophan. |
| PGx | Lamas_2016 | not_relevant | 0 | 0 | The paper investigates the impact of the CARD9 gene on gut microbiota metabolism of tryptophan (an endogenous amino acid) and its effect on colitis, not the pharmacokinetics or pharmacodynamics of a drug. |
| popPK | Lang_2025 | irrelevant | 0 | 0 | The paper focuses on the discovery of dengue virus protease inhibitors, and tryptophan is only used as a reagent in a fluorescence quenching assay, not as the subject drug for PK analysis. |
| PD | Lawrie_1987 | not_relevant | 2 | 1 | The paper describes a qualitative dose-response relationship for saccharin's effect on metabolites (including indican from tryptophan) but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect curve for tryptophan itself. |
| PD | Li_1995 | not_relevant | 4 | 2 | The paper describes dose-response relationships for TCDD effects on tryptophan levels but does not provide numeric PD parameters (e.g., EC50, Emax) or a concentration-effect curve for tryptophan itself in the provided text. |
| popPK | Li_2022 | irrelevant | 0 | 0 | The study is a mechanistic epidemiological investigation of PM2.5 exposure and the gut-brain axis, not a pharmacokinetic study, and it does not report any quantitative disposition parameters for tryptophan. |
| PGx | Li_2024 | not_relevant | 0 | 0 | The paper investigates tryptophan metabolism as a prognostic biomarker in renal cell carcinoma, not the pharmacokinetics or pharmacodynamics of tryptophan as a drug. |
| popPK | Li_2025 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and antifungal activity of β-carboline derivatives, with no pharmacokinetic data for tryptophan. |
| PD | Li_2025 | not_relevant | 0 | 0 | The paper reports in vitro antifungal activity (EC50) of synthesized beta-carboline derivatives, not a pharmacodynamic or exposure-response relationship for the drug tryptophan itself. |
| PGx | Li_2025_2 | not_relevant | 0 | 0 | The paper investigates gene therapy for obesity and mentions tryptophan metabolic pathways, but does not report a pharmacogenomic effect on the PK/PD of a specific drug. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of PF-06804103, an antibody-drug conjugate, and does not report any parameters for tryptophan. |
| PD | Li_2026 | not_relevant | 0 | 0 | The paper discusses a PK/PD modeling framework for PF-06804103 (an antibody-drug conjugate), not tryptophan. |
| popPK | Li_2026_2 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the monoclonal antibody gotistobart, not for the drug tryptophan. |
| PD | Li_2026_2 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for gotistobart, not tryptophan, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Lin_1970 | irrelevant | 2 | 5 | The study reports compartmental transport parameters (turnover rate, influx, efflux) for tryptophan in isolated dog bone marrow cells, which is a cellular/in-vitro mechanism study rather than a systemic pharmacokinetic study of the drug tryptophan. |
| popPK | Lin_2015 | irrelevant | 0 | 0 | The study is an NMR method validation for chemical exchange dynamics of a fluorinated tryptophan analog, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Listro_2023 | irrelevant | 0 | 0 | The study uses tryptophan fluorescence spectroscopy as a technique to study bacterial kinase binding, not as a subject drug for pharmacokinetic analysis. |
| popPK | Liu_2015 | irrelevant | 0 | 0 | no_text gate: only 145 chars of text extracted (&lt; 400) |
| PGx | Liu_2024 | not_relevant | 0 | 0 | The paper studies plant physiology and sorghum genotypes, not human pharmacogenomics or drug PK/PD. |
| popPK | Lo_2021 | irrelevant | 0 | 0 | The paper is an electrophysiology study on kynurenic acid (a tryptophan metabolite) and does not report pharmacokinetic parameters for tryptophan. |
| PGx | Lu_2024 | not_relevant | 0 | 0 | The study investigates the pharmacological effects of a herbal formula on hyperuricemia and nephropathy in mice, with no mention of gene variants or pharmacogenomic effects on tryptophan PK/PD. |
| popPK | Lubberink_2020 | irrelevant | 0 | 0 | The study focuses on the PET tracer [11C]5-Hydroxy-tryptophan for imaging serotonin biosynthesis, not the pharmacokinetics of the drug tryptophan itself. |
| PGx | Ma_2023 | not_relevant | 0 | 0 | The paper studies the effect of fecal microbiota transplantation on chicken growth and immune balance, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of tryptophan. |
| PGx | Maes_2020 | not_relevant | 0 | 0 | The paper investigates oxidative stress biomarkers and immune responses in schizophrenia, not the pharmacokinetics or pharmacodynamics of tryptophan as a drug. |
| popPK | Majewski_2018 | irrelevant | 0 | 0 | no_text gate: only 150 chars of text extracted (&lt; 400) |
| popPK | Mamede_2025 | irrelevant | 0 | 0 | no_text gate: only 91 chars of text extracted (&lt; 400) |
| PD | Mamede_2025 | not_relevant | 0 | 0 | The paper studies a coumaroyltormentic acid derivative in Trypanosoma brucei, not the drug tryptophan, and does not report PD parameters for tryptophan. |
| PGx | Mansouri_2022 | not_relevant | 0 | 0 | The paper investigates the role of the MPYS gene in fatty acid metabolism and immune tolerance, not the pharmacokinetics or pharmacodynamics of the drug tryptophan. |
| popPK | Mantulin_1986 | irrelevant | 0 | 0 | The paper is a biophysical study of apolipoprotein A-I fluorescence quenching and does not report pharmacokinetic parameters for tryptophan. |
| PGx | Matheus_2020 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamic effect of 1-methyl-D-tryptophan on AHR activation in bladder cancer cells, but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| PGx | Maushagen_2025 | not_relevant | 0 | 0 | The paper investigates associations between serum metabolites (including tryptophan) and hepatic phenotypes (fat/iron content) in a population-based cohort, but does not report pharmacokinetic or pharmacodynamic parameters of tryptophan as a drug, nor does it analyze how specific gene variants alter these PK/PD parameters. |
| popPK | Meewan_2019 | irrelevant | 0 | 0 | The paper describes tryptophan derivatives as HCV protease inhibitors, not the pharmacokinetics of the amino acid tryptophan itself. |
| PGx | Mellor_2022 | not_relevant | 0 | 0 | The paper focuses on metabolic engineering in tobacco chloroplasts to produce indican and does not report pharmacogenomic effects on the PK/PD of tryptophan. |
| PGx | Milosavljevic_2025 | not_relevant | 0 | 0 | The paper studies the effect of a Kmo gene variant on the metabolism of the endogenous amino acid tryptophan, not on the pharmacokinetics or pharmacodynamics of an administered drug. |
| popPK | Mitsumoto_2026 | irrelevant | 0 | 0 | The study is a metabolomic analysis of ALS patients where tryptophan is a measured biomarker, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Morgan_2018 | not_relevant | 0 | 0 | The paper discusses physiological regulation of drug metabolism (pregnancy, microbiome, etc.) and mentions tryptophan only as a metabolite regulating enzymes, not as a drug with a pharmacogenomic effect on its own PK/PD. |
| popPK | Morrison_2025 | irrelevant | 0 | 0 | The study investigates the effects of a nutritional supplement containing tryptophan on sleep and performance, not the pharmacokinetics of tryptophan, and reports no PK parameters. |
| popPK | Murase_1991 | irrelevant | 0 | 0 | The paper is a mechanistic enzymology study on aspartase mutagenesis, not a pharmacokinetic study of tryptophan. |
| PD | Murase_1991 | not_relevant | 0 | 0 | The paper describes a site-directed mutagenesis study of an enzyme (aspartase) where tryptophan is an amino acid substitution, not a drug; it reports kinetic parameters (kcat, Hill coefficient) for the mutant enzyme, not a pharmacodynamic exposure-response relationship for tryptophan as a therapeutic agent. |
| popPK | Murata_2025 | irrelevant | 0 | 0 | The study focuses on biomarkers for ketamine response in depression and does not report pharmacokinetic parameters for tryptophan. |
| popPK | Muzik_1997 | irrelevant | 0 | 0 | The study focuses on the PET tracer [C-11]alpha-methyl-tryptophan (an analogue) for serotonin synthesis, not the pharmacokinetics of the drug tryptophan itself. |
| popPK | Möckel_1994 | irrelevant | 0 | 0 | The paper is a biochemical study on threonine dehydratase enzymes in bacteria and does not report pharmacokinetic parameters for tryptophan. |
| PD | Möckel_1994 | not_relevant | 0 | 0 | The paper describes biochemical characterization of threonine dehydratase mutants and their structural similarity to tryptophan synthase, but does not report any pharmacodynamic or exposure-response relationship for the drug tryptophan. |
| popPK | Müller_2023 | irrelevant | 0 | 0 | The paper describes a synthetic biology study on engineered E. coli co-cultures for tryptophan production, not a pharmacokinetic study of tryptophan as a drug. |
| popPK | Müller_2024 | irrelevant | 0 | 0 | The paper is a bioprocess engineering study on violacein production in E. coli co-cultures, where tryptophan is used as a metabolic precursor/auxotrophic supplement, not as a subject drug for pharmacokinetic analysis. |
| PGx | Naito_2026 | not_relevant | 0 | 0 | The paper investigates the regulation of MDR1 proteostasis by tryptophan metabolites (IAA and skatole) in the context of gut microbiome and diet, not the effect of a human gene variant on the PK/PD of tryptophan. |
| PGx | Nessler_2020 | not_relevant | 0 | 0 | The paper describes a genetic variant in PCK2 causing a neurological disorder in dogs and mentions dietary tryptophan as a treatment, but it does not report a pharmacogenomic effect on the PK or PD of tryptophan. |
| popPK | Nøhr_2015 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of vigabatrin, using tryptophan only as a co-administered probe ligand to test transporter involvement, not as the subject drug. |
| popPK | Ooi_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of elafibranor, not tryptophan. |
| PD | Ooi_2026 | not_relevant | 0 | 0 | The paper describes pharmacokinetic-pharmacodynamic analyses for elafibranor, not tryptophan. |
| PGx | Orabona_2018 | not_relevant | 0 | 0 | The paper investigates the association between IDO1 genetic variants and Type 1 Diabetes risk/phenotype, not the pharmacokinetics or pharmacodynamics of the drug tryptophan. |
| PGx | Orhan_2025 | not_relevant | 0 | 0 | The paper investigates the pathophysiology of schizophrenia and the role of kynurenic acid (a metabolite) in synapse elimination, not the pharmacokinetics or pharmacodynamics of tryptophan as a drug. |
| PD | Pagire_2022 | not_relevant | 3 | 2 | The paper reports an in vitro IC50 for a TPH1 inhibitor and qualitative in vivo efficacy (weight/fat reduction) but does not provide a concentration-effect or dose-response curve, nor does it report numeric PD parameters (Emax, EC50, slope) for the drug's effect in the biological system. |
| popPK | Panda_2016 | irrelevant | 0 | 0 | The paper focuses on the synthesis of IDO1 inhibitors and their enzymatic activity, not on the pharmacokinetic disposition parameters of tryptophan. |
| PD | Panda_2016 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) of IDO1 by synthesized compounds, not a pharmacodynamic exposure-response or dose-response relationship for tryptophan itself. |
| PGx | Park_2020 | not_relevant | 0 | 0 | The paper investigates the aryl hydrocarbon receptor agonist activity of dopamine and carbidopa, not the pharmacogenomics of tryptophan. |
| PGx | Patel_2014 | not_relevant | 0 | 0 | The paper investigates amino acid prodrugs of lopinavir and does not report any pharmacogenomic effects of gene variants on the PK or PD of tryptophan. |
| PGx | Pho_2022 | not_relevant | 0 | 0 | The paper investigates the physiological effects of a Tph2 knockout on breathing and metabolism, not the pharmacokinetics or pharmacodynamics of tryptophan as a drug. |
| popPK | Poulsen_1993 | irrelevant | 0 | 0 | The paper is an in-vitro enzymology study characterizing anthranilate synthase, not a pharmacokinetic study of tryptophan disposition. |
| PD | Poulsen_1993 | not_relevant | 3 | 2 | The paper reports in vitro enzyme kinetics (Km, Hill coefficient) for anthranilate synthase inhibition by tryptophan, which is a biochemical mechanism study, not a pharmacodynamic (exposure-response) analysis of drug effect in a biological system or patient. |
| PGx | Qi_2022 | not_relevant | 0 | 0 | The paper investigates the association between host genetics and tryptophan metabolites in the context of type 2 diabetes risk, not the pharmacokinetics or pharmacodynamics of tryptophan as a drug. |
| PD | Qu_2021 | not_relevant | 0 | 0 | The paper is a network pharmacology and metabolomics study that identifies tryptophan metabolism as a pathway but does not report any quantitative exposure-response or dose-response data, concentration-effect curves, or numeric PD parameters for tryptophan. |
| PGx | RIZKI_1963 | not_relevant | 0 | 0 | The paper describes genetic control of kynurenine synthesis in Drosophila fatbody cells, not the pharmacokinetics or pharmacodynamics of tryptophan as a drug. |
| PGx | Reichardt_1991 | not_relevant | 0 | 0 | The paper discusses galactosemia mutations affecting GALT enzyme activity, not the pharmacokinetics or pharmacodynamics of the drug tryptophan. |
| popPK | Ren_2025 | irrelevant | 0 | 0 | The paper is a study on pesticide synthesis and biological activity where tryptophan is only mentioned as a metabolic pathway in transcriptomics, not as a subject drug for pharmacokinetic analysis. |
| PGx | Rizuan_2024 | not_relevant | 0 | 0 | The paper investigates the structural biology of TDP-43 protein multimerization and phase separation, not the pharmacokinetics or pharmacodynamics of the drug tryptophan. |
| PGx | Rolfes_2021 | not_relevant | 0 | 0 | The paper investigates the mechanism of vemurafenib-induced phototoxicity via the AHR-CYP1A1 axis and FICZ metabolism, but does not report pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PD | Röhrig_2022 | not_relevant | 0 | 0 | The paper reports in vitro enzymatic and cellular IC50 values for IDO1 inhibitors, which are pharmacodynamic potency metrics, but it does not report an exposure-response or dose-response relationship for tryptophan itself, nor does it provide PK/PD modeling parameters (e.g., Emax, EC50 for tryptophan concentration) for the drug. |
| popPK | Scrutton_1992 | irrelevant | 0 | 0 | The paper is a structural biology study on enzyme cooperativity where tryptophan is a mutated amino acid residue, not a drug subject to pharmacokinetic analysis. |
| PD | Scrutton_1992 | not_relevant | 0 | 0 | The paper describes a structural biology and enzymology study of a mutated enzyme (glutathione reductase) and does not report pharmacodynamic or exposure-response relationships for the drug tryptophan. |
| popPK | Serkland_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for ocrelizumab, not tryptophan. |
| popPK | Serrano-Villar_2026 | irrelevant | 0 | 0 | The study measures the kynurenine/tryptophan ratio as a biomarker of inflammation, not the pharmacokinetic disposition parameters (CL, V, etc.) of tryptophan. |
| popPK | Sha_2022 | irrelevant | 0 | 0 | The study is a biomarker analysis for depression prediction and does not report pharmacokinetic parameters (CL, V, etc.) for tryptophan. |
| popPK | Shaw_1975 | relevant | 9 | 0 | The paper describes a compartmental analysis of tryptophan PK, but the provided evidence contains only qualitative summaries and no numeric parameter values. |
| popPK | Sheng_2021 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on antifungal compounds synthesized from tryptophan, not a pharmacokinetic study of tryptophan itself. |
| PD | Sheng_2021 | not_relevant | 3 | 2 | The paper reports single-point EC50 values for antifungal activity but does not provide a full dose-response curve, PK/PD model, or dynamic exposure-response relationship for tryptophan. |
| popPK | Shi_2017 | irrelevant | 0 | 0 | no_text gate: only 115 chars of text extracted (&lt; 400) |
| PD | Shi_2017 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics and pharmacodynamics of epacadostat, not tryptophan. |
| PGx | Shi_2020 | not_relevant | 0 | 0 | The study investigates the effect of diet on tryptophan metabolism and gut microbiota in rats, not the effect of a gene variant on the PK/PD of a drug. |
| popPK | Shuke_1992 | irrelevant | 0 | 0 | The study focuses on hepatic imaging agents (99mTc-GSA, 99mTc-PMT, 99mTc-Sn colloid) and does not report pharmacokinetic parameters for tryptophan as a subject drug. |
| popPK | Soeorg_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of meropenem and colistin/polymyxin B, not tryptophan. |
| popPK | Solvang_2019 | irrelevant | 0 | 0 | The study is a clinical observational analysis of biomarker associations with dementia symptoms, not a pharmacokinetic study, and reports no disposition parameters for tryptophan. |
| popPK | Sonklin_2021 | irrelevant | 0 | 0 | no_text gate: only 82 chars of text extracted (&lt; 400) |
| PD | Sonklin_2021 | not_relevant | 0 | 0 | The paper focuses on the functional characterization of antioxidant peptides from mung bean meal, not on the pharmacodynamics or exposure-response relationship of tryptophan. |
| popPK | Spier_2000 | irrelevant | 0 | 0 | The paper is a mechanistic study on the role of tryptophan amino acid residues in receptor structure and function, not a pharmacokinetic study of the drug tryptophan. |
| PD | Spier_2000 | not_relevant | 0 | 0 | The paper investigates the structural role of tryptophan residues in the 5-HT3 receptor via mutagenesis, not the pharmacodynamics of tryptophan as a drug or exposure-response relationship. |
| popPK | Suthahar_2026 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic models for 5-fluorouracil (5-FU), not tryptophan. |
| PD | Suthahar_2026 | not_relevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic (PK) models for 5-fluorouracil and does not report any pharmacodynamic (PD) or exposure-response relationships for tryptophan or any other drug. |
| popPK | Szűcs_2020 | irrelevant | 0 | 0 | The paper focuses on the synthesis and biological activity of kynurenine-containing opioid peptides, not the pharmacokinetics of tryptophan itself. |
| popPK | Sürmelioğlu_2026 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic studies for vancomycin, not tryptophan. |
| PD | Sürmelioğlu_2026 | not_relevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic (PopPK) studies for vancomycin, focusing on PK parameters and dosing optimization, with no report of pharmacodynamic (PD) or exposure-response models/parameters. |
| popPK | Taleb_2017 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| PD | Taleb_2017 | not_relevant | 0 | 0 | The paper focuses on the chemical stability of a glucagon formulation and does not contain any pharmacodynamic or exposure-response analysis for tryptophan. |
| popPK | Tan_2026 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of busulfan, not tryptophan. |
| PD | Tan_2026 | not_relevant | 0 | 0 | The paper focuses on pharmacokinetic (PK) modeling and limited sampling strategies for busulfan, with no pharmacodynamic (PD) or exposure-response analysis for tryptophan or any other drug. |
| PGx | Tanaka_2021 | not_relevant | 0 | 0 | The paper studies genomic variants in beetles related to death-feigning behavior and mentions tryptophan metabolism pathways, but does not report pharmacogenomic effects on PK/PD parameters of tryptophan as a drug. |
| PGx | Thome_2024 | not_relevant | 0 | 0 | The paper investigates the pathophysiology of chronic kidney disease and mitochondrial energetics, not the pharmacokinetics or pharmacodynamics of tryptophan as a drug. |
| PD | Tijono_2022 | not_relevant | 3 | 2 | The paper reports IC50 values for enzyme inhibition and qualitative in vivo effects (K:T ratio reduction, tumor growth delay) but does not provide a pharmacodynamic model, dose-response curve, or numeric PD parameters (like Emax or EC50) for the drug's effect in the context of PK/PD analysis. |
| popPK | Tosca_2025 | irrelevant | 0 | 0 | The paper is a review on the application of Large Language Models in pharmacometrics and does not report any pharmacokinetic parameters for tryptophan. |
| PD | Tosca_2025 | not_relevant | 0 | 0 | The paper is a conceptual review on the application of Large Language Models in pharmacometrics and does not report any specific pharmacodynamic data or parameters for tryptophan. |
| PGx | Ugartemendia_2021 | not_relevant | 4 | 5 | The study investigates a nutritional intervention (diet) rather than a specific drug, and reports correlations/associations rather than fitted pharmacokinetic or pharmacodynamic effect sizes. |
| popPK | Visser_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of the PET tracer [(11)C]5-HTP, not the drug tryptophan, and does not report PK parameters for tryptophan. |
| PGx | WEED_1963 | not_relevant | 0 | 0 | The paper describes bacterial genetics and copper resistance in Bacillus subtilis, not human pharmacogenomics or tryptophan pharmacokinetics. |
| PGx | Walston_1995 | not_relevant | 0 | 0 | The paper studies a genetic variant in the beta 3-adrenergic receptor gene associated with diabetes onset, not the pharmacokinetics or pharmacodynamics of the drug tryptophan. |
| popPK | Wang_2015 | irrelevant | 0 | 0 | The study focuses on the metabolism of myclobutanil in rat hepatocytes, with tryptophan serving only as a metabolic pathway probe rather than the subject drug for PK parameter estimation. |
| PGx | Wang_2024 | not_relevant | 0 | 0 | The paper investigates the association between genetic risk scores and tryptophan metabolism in schizophrenia, not the effect of a specific gene variant on the pharmacokinetics or pharmacodynamics of tryptophan as a drug. |
| PD | Wang_2024_2 | not_relevant | 2 | 1 | The paper reports epidemiological associations and mediation analysis between arsenic exposure, tryptophan levels, and cognitive scores, but does not provide a pharmacodynamic model or numeric PD parameters (e.g., Emax, EC50) for tryptophan itself. |
| PD | Wang_2024_3 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values for IDO1 inhibition and qualitative in vivo anti-inflammatory effects, but does not provide a pharmacokinetic/pharmacodynamic (PK/PD) model, exposure-response analysis, or dose-response curve with numeric PD parameters (e.g., Emax, EC50) for the drug in a biological system. |
| PGx | Wang_2025 | not_relevant | 0 | 0 | The paper investigates the effect of a probiotic strain on depression and tryptophan metabolism in mice, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper is a population pharmacokinetic model library for polymyxin B, not tryptophan. |
| PD | Wang_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on population pharmacokinetic (PK) modeling of polymyxin B and does not report any pharmacodynamic (PD) or exposure-response relationships for tryptophan. |
| popPK | Wanika_2026 | irrelevant | 0 | 0 | The paper is a methodological study using simulated data to demonstrate a statistical metric (95% CDIRAs) and does not report pharmacokinetic parameters for tryptophan. |
| PD | Wanika_2026 | not_relevant | 0 | 0 | The paper is a methodological case study on uncertainty quantification for PK models using simulated data and does not report any pharmacodynamic or exposure-response relationships for tryptophan. |
| popPK | Wess_1993 | irrelevant | 0 | 0 | The paper is a mechanistic study on G protein-coupled receptor mutagenesis, not a pharmacokinetic study of tryptophan as a drug. |
| PD | Wess_1993 | not_relevant | 0 | 0 | The paper studies the functional role of conserved amino acid residues (proline and tryptophan) in a GPCR via mutagenesis, not the pharmacodynamics of tryptophan as a drug or ligand. |
| popPK | Wu_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for bosutinib, not tryptophan. |
| PD | Wu_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for bosutinib, not tryptophan, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Xajil-Ramos_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for tacrolimus, not tryptophan. |
| PD | Xajil-Ramos_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for tacrolimus, not tryptophan, and contains no pharmacodynamic or exposure-response analysis. |
| popPK | Xie_2026 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of daptomycin, not tryptophan. |
| PD | Xie_2026 | not_relevant | 0 | 0 | The paper focuses on daptomycin population pharmacokinetics (PopPK) and precision dosing, not tryptophan, and does not report any pharmacodynamic (PD) or exposure-response parameters. |
| popPK | Xu_2020 | irrelevant | 0 | 0 | no_text gate: only 134 chars of text extracted (&lt; 400) |
| PD | Xu_2020 | not_relevant | 0 | 0 | The paper focuses on the mechanism of algae inhibition by Spartina alterniflora and does not report any pharmacodynamic or exposure-response data for tryptophan. |
| popPK | Yang_2022 | irrelevant | 0 | 0 | The paper investigates nitrification inhibition by 3,5-dichlorophenol in activated sludge, and tryptophan is mentioned only as a fluorescent component of extracellular polymeric substances, not as a subject drug for pharmacokinetic analysis. |
| PD | Yang_2022 | not_relevant | 0 | 0 | The paper investigates the inhibition of nitrification by 3,5-dichlorophenol, not the pharmacodynamics of tryptophan; tryptophan is only mentioned as a fluorescent component in EPS. |
| PGx | Yang_2024 | not_relevant | 0 | 0 | The paper describes the structural biology and enzymatic mechanism of ACMSD, not a pharmacogenomic effect on the PK/PD of a drug. |
| PGx | Yin_2016 | not_relevant | 0 | 0 | The study investigates antidepressant response (clinical outcome) rather than pharmacokinetic or pharmacodynamic parameters of tryptophan itself. |
| popPK | Yousof_2024 | irrelevant | 0 | 0 | no_text gate: only 161 chars of text extracted (&lt; 400) |
| PD | Yousof_2024 | not_relevant | 0 | 0 | The paper focuses on the identification of metabolites from Brucea javanica and their binding affinities for dengue virus enzymes, with no mention of tryptophan or any pharmacodynamic/exposure-response analysis. |
| PD | Yu_2017 | not_relevant | 0 | 0 | The paper reports a herbicide dose-response relationship for cyhalofop-butyl in weeds, not a pharmacodynamic relationship for the drug tryptophan. |
| popPK | Zahed_2021 | irrelevant | 0 | 0 | The paper is an epidemiological study of biomarker concentrations and does not report pharmacokinetic parameters (CL, V, ka, etc.) for tryptophan. |
| popPK | Zaidi_2026 | irrelevant | 0 | 0 | The paper is a systematic review of pharmacokinetic modeling for opioids (e.g., buprenorphine, methadone) in pregnancy and does not contain any data or parameters for tryptophan. |
| PD | Zaidi_2026 | not_relevant | 0 | 0 | The paper is a systematic review of opioid pharmacokinetics in pregnancy and does not contain any data, analysis, or parameters related to tryptophan. |
| PGx | Zeng_2018 | not_relevant | 0 | 0 | The paper investigates genetic associations with longevity and mentions the tryptophan metabolic pathway as a biological pathway, but it does not report pharmacokinetic or pharmacodynamic parameters of tryptophan as a drug. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The paper is a study on fungicidal activity and mechanism of action (transcriptomics) where tryptophan is only mentioned as a metabolic pathway affected by the drug, not as a subject drug for pharmacokinetic analysis. |
| PD | Zhang_2024 | not_relevant | 0 | 0 | The paper reports fungicidal activity (EC50) of synthetic pyrrolo[2,3-d]thiazole compounds, not a pharmacodynamic or exposure-response relationship for the drug tryptophan itself. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetics for imipenem, not tryptophan. |
| PD | Zhang_2025 | not_relevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic (PK) models for imipenem and does not report any pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Zheng_2017 | irrelevant | 0 | 0 | The paper describes the synthesis and fungicidal activity of tryptophan analogues, not the pharmacokinetics of tryptophan itself. |
| popPK | Zheng_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of vigabatrin, and tryptophan is only mentioned as a metabolite measured in the metabolomics section, not as the subject drug for PK parameter estimation. |
| popPK | van_1987 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of dibromosulfophthalein, and tryptophan is only mentioned as a component of the albumin fluorescence spectrum, not as the subject drug. |
| PGx | van_2018 | not_relevant | 0 | 0 | The paper investigates the association between genetic variants and endogenous tryptophan levels in the context of disease outcome, not the pharmacokinetics or pharmacodynamics of an administered drug. |
| popPK | van_2026 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetics for immunoglobulins (IgG/IVIg/SCIg), not tryptophan. |
| PD | van_2026 | not_relevant | 0 | 0 | The paper is a systematic review of pharmacokinetic models for immunoglobulins (IVIg/SCIg) and does not report any pharmacodynamic or exposure-response data for tryptophan. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
