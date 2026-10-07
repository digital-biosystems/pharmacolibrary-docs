<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;tryptophan&quot;}]"></div>

# tryptophan

- **generic name:** tryptophan
- **ATC codes:** `N06AX02`
- **DrugBank:** [DB00150](https://go.drugbank.com/drugs/DB00150) · **PubChem:** [CID 6305](https://pubchem.ncbi.nlm.nih.gov/compound/6305)
- **molar mass:** 204.2252 g/mol (C11H12N2O2) — DrugBank
- **groups:** approved, investigational, nutraceutical, withdrawn

## About

Tryptophan, an essential amino acid, has been used as an antidepressant. It was withdrawn as a medicine in several countries after being linked to a serious muscle and blood disorder, though it remains available as a dietary supplement in some places.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q181003](https://www.wikidata.org/wiki/Q181003) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:09 | 5:29 | 0/0/0 | 0/0/0 | 0/0/1 | 500,661/13,394 | ollama / glm-5.3-flash | 63 | 16/52 | 58/5 | 0 |

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **MAOB** | `Q320` · Emax | target | [Gonzalez_2021](drugs/drug_tryptophan/pgx_Gonzalez_2021_MAOB_Q320.md) | Gonzalez I et al., MAOB rs3027452 Modifies Mood Improvemen…, International journal of ge… (2021) | [10.2147/IJGM.S305443](https://doi.org/10.2147/IJGM.S305443) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tryptophan) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `MAOB` target | paper PGx gene |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | platelet | `MAOB` target | paper PGx gene |

<sub>Actors without a tissue in the table: DDC (substrate), IDO1 (binder), IDO1 (substrate), SLC16A10 (inhibitor), SLC16A2 (inhibitor), TDO2 (substrate), TPH1 (substrate), TPH2 (substrate), WARS1 (inhibitor), WARS1 (substrate), WARS2 (inhibitor), WARS2 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 12305 matched, 222 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_20 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Shaw_1975.pdf` | Shaw DM et al., Multicompartmental analysis of amino ac…, Psychological medicine (1975) | popPK | 7 | [10.1017/s0033291700056476](https://doi.org/10.1017/s0033291700056476) | [1161958](https://pubmed.ncbi.nlm.nih.gov/1161958) | Compartmental PK/flux analysis of tryptophan itself in humans, but no numeric parameter values are present in the evidence. |
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
| `Sonklin_2021.pdf` | Sonklin C et al., Functional Characterization of Mung Bea…, Molecules (Basel, Switzerla… (2021) | pd | 4 | [10.3390/molecules26061515](https://doi.org/10.3390/molecules26061515) | [33802127](https://www.ncbi.nlm.nih.gov/pubmed/33802127) | metadata signals extractable PD data (EC50) |
| `Taleb_2017.pdf` | Taleb N et al., Stability of Commercially Available Glu…, Diabetes technology & thera… (2017) | pd | 4 | [10.1089/dia.2017.0204](https://doi.org/10.1089/dia.2017.0204) | [28846447](https://www.ncbi.nlm.nih.gov/pubmed/28846447) | metadata signals extractable PD data (EC50) |
| `Xu_2020.pdf` | Xu C et al., New insights into the harmful algae inh…, The Science of the total en… (2020) | pd | 4 | [10.1016/j.scitotenv.2020.136737](https://doi.org/10.1016/j.scitotenv.2020.136737) | [31982752](https://www.ncbi.nlm.nih.gov/pubmed/31982752) | metadata signals extractable PD data (EC50) |
| `Yousof_2024.pdf` | Yousof NSAM et al., Molecular networking-based mass spectra…, Fitoterapia (2024) | pd | 4 | [10.1016/j.fitote.2024.105955](https://doi.org/10.1016/j.fitote.2024.105955) | [38604259](https://www.ncbi.nlm.nih.gov/pubmed/38604259) | metadata signals extractable PD data (EC50) |
| `Morgan_2018.pdf` | Morgan ET et al., Physiological Regulation of Drug Metabo…, Drug metabolism and disposi… (2018) | pgx | 7 | [10.1124/dmd.117.079905](https://doi.org/10.1124/dmd.117.079905) | [29514828](https://www.ncbi.nlm.nih.gov/pubmed/29514828) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Barrie_2018.pdf` | Barrie ES et al., Testing genetic modifiers of behavior a…, Journal of developmental an… (2018) | pgx | 5 | [10.1007/s10882-018-9590-4](https://doi.org/10.1007/s10882-018-9590-4) | [30197492](https://www.ncbi.nlm.nih.gov/pubmed/30197492) | metadata signals extractable PGX data (SLC6A3) |
| `Granados_2024.pdf` | Granados JC et al., Organic anion transporters in remote se…, Pharmacology & therapeutics (2024) | pgx | 5 | [10.1016/j.pharmthera.2024.108723](https://doi.org/10.1016/j.pharmthera.2024.108723) | [39284369](https://www.ncbi.nlm.nih.gov/pubmed/39284369) | metadata signals extractable PGX data (SLCO1B1) |
| `Ugartemendia_2021.pdf` | Ugartemendia L et al., SLC6A4 polymorphisms modulate the effic…, Clinical nutrition (Edinbur… (2021) | pgx | 5 | [10.1016/j.clnu.2021.02.023](https://doi.org/10.1016/j.clnu.2021.02.023) | [33743283](https://www.ncbi.nlm.nih.gov/pubmed/33743283) | metadata signals extractable PGX data (SLC6A4) |
| `Yin_2016.pdf` | Yin L et al., Catecholamine pathway polymorphisms and…, Asia-Pacific psychiatry : o… (2016) | pgx | 5 | [10.1111/appy.12180](https://doi.org/10.1111/appy.12180) | [25854875](https://www.ncbi.nlm.nih.gov/pubmed/25854875) | metadata signals extractable PGX data (SLC6A2) |

<sub>queue written 2026-10-07T00:06:50.461733+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adeyemi_2023 | irrelevant | 0 | 0 | In-vitro anti-parasitic nanoparticle efficacy study with EC50 values, no pharmacokinetic disposition parameters for tryptophan. |
| PGx | Ahrens_2024 | not_relevant | 0 | 0 | No drug or pharmacogenomic PK/PD effect reported; study concerns metabolomics/genotype associations with neurodevelopment. |
| PD | Alfredsson_1989 | not_relevant | 0 | 0 | The study explicitly states there was no dose-response effect of sulpiride on tryptophan levels and reports no numeric PD parameters or concentration-effect curves. |
| PD | Altamura_1994 | not_relevant | 1 | 0 | The text is a review of fluoxetine PK and only qualitatively mentions a potential interaction with tryptophan (serotonergic syndrome) without providing any numeric PD parameters or exposure-response data for tryptophan. |
| popPK | Amblard_1993 | irrelevant | 0 | 0 | Tryptophan is only a residue within synthesized CCK analogs; no PK parameters for tryptophan are reported. |
| PGx | An_2023 | not_relevant | 0 | 0 | No gene variant/genotype effect on tryptophan PK/PD; only drug-induced metabolite and gene expression changes in rats. |
| popPK | Arnold_2024 | irrelevant | 0 | 0 | This is a clinical trial of placebo response in depression; tryptophan appears only via genetic polymorphisms (TPH1), with no pharmacokinetic parameters. |
| popPK | Ashok_2015 | irrelevant | 0 | 0 | This is a medicinal chemistry/anti-HIV synthesis paper using tryptophan only as a starting material, with no pharmacokinetic parameters for tryptophan. |
| popPK | Auerbach_1985 | irrelevant | 0 | 0 | In vitro rat hippocampus study of serotonin release kinetics; tryptophan is only a bath additive, not a PK disposition study. |
| PGx | BRODY_1964 | not_relevant | 0 | 0 | Microbial genetics of suppressor mutations in tryptophan biosynthesis, not a pharmacogenomic PK/PD effect. |
| PGx | Barrie_2018 | not_relevant | 3 | 3 | Reports genotype associations with behavioral/clinical scores, not PK/PD parameters of atomoxetine; CYP2D6 response association was null. |
| popPK | Bartholmes_1976 | irrelevant | 0 | 0 | This is an in vitro biochemical study of pyridoxal phosphate binding to tryptophan synthase from E. coli, with no pharmacokinetic parameters for tryptophan. |
| PD | Bartholmes_1976 | not_relevant | 0 | 0 | The paper describes the binding of a cofactor (pyridoxal 5'-phosphate) to an enzyme (tryptophan synthase), not the pharmacodynamic response of a drug (tryptophan) in a biological system. |
| popPK | Barzel_2026 | irrelevant | 0 | 0 | This is a review of popPK models for therapeutic enzymes in lysosomal storage diseases, not tryptophan, and no numeric PK values are present. |
| PD | Barzel_2026 | not_relevant | 3 | 0 | The paper is a review of therapeutic enzymes in lysosomal storage diseases and does not contain any data, analysis, or parameters related to tryptophan. |
| PGx | Basler_1992 | not_relevant | 0 | 0 | Reports STS gene point mutations causing enzyme deficiency; no drug PK/PD parameter or pharmacogenomic effect is described. |
| popPK | Blanco_2026 | irrelevant | 0 | 0 | This is a biomarker study of tryptophan catabolism metabolites in HIV patients on ART, not a pharmacokinetic study of tryptophan; no CL/V/ka or PK model values are reported. |
| PD | Borrego-Muñoz_2022 | not_relevant | 3 | 2 | The paper reports IC50 values for antifungal activity, which is a dose-response metric, but it is a standard pharmacological assay for a specific pathogen, not a pharmacodynamic (PD) model of drug exposure-response in a biological system (e.g., PK/PD fit, Emax model, or concentration-effect curve in a host/organism context). |
| PGx | Bosma_1993 | not_relevant | 0 | 0 | Tryptophan is an amino acid substitution in UGT1A1, not a drug; no PK/PD pharmacogenomic effect reported. |
| popPK | Bourdon_2018 | irrelevant | 0 | 0 | Metabolomics study of endogenous brain tryptophan levels during sleep/wake in mice; no PK dosing or disposition parameters (CL, V, ka, half-life) reported. |
| popPK | Bräm_2026 | irrelevant | 0 | 0 | Methodology paper about NODE-LASSO automated modeling; tryptophan is not the subject drug (examples are warfarin and simulated bi-exponential data), and no tryptophan PK parameters appear. |
| PD | Bräm_2026 | not_relevant | 0 | 0 | The paper focuses on a methodological approach for automated pharmacometric model development using Neural ODEs and LASSO, and does not report any specific pharmacodynamic or exposure-response data for tryptophan. |
| PGx | Bunaciu_2013 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effect on PK/PD parameters of tryptophan is reported; the study examines FICZ (a tryptophan photoproduct) effects on cell differentiation signaling in vitro. |
| PD | Burdick_2004 | not_relevant | 3 | 2 | The paper reports a single IC50 value for a specific compound (o-Bromobenzoyl l-tryptophan) in a structure-activity relationship study, but does not provide a full concentration-effect curve, multiple data points, or a fitted PD model (Emax, slope, etc.) for tryptophan itself. |
| PGx | Chen_2024 | not_relevant | 0 | 0 | Tryptophan is a biomarker associated with biological aging, not a drug; no pharmacogenomic effect on PK/PD parameters is reported. |
| PGx | Chen_2024_2 | not_relevant | 0 | 0 | Study examines tryptophan metabolism gene expression in HCC prognosis, not gene variant effects on PK/PD parameters of a drug. |
| PD | Chen_2025 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values for enzyme inhibition and qualitative in vivo behavioral improvements, but lacks a formal pharmacodynamic model or exposure-response analysis linking drug concentration to effect. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | This is a rivaroxaban population PK study; tryptophan is not involved at all. |
| PD | Chen_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on the external validation of population pharmacokinetic (PK) models for rivaroxaban and does not report any pharmacodynamic (PD) or exposure-response relationships. |
| PGx | Cheng_2026 | not_relevant | 0 | 0 | Study examines FTH1 effects on tryptophan metabolism in HCC, not a gene variant effect on PK/PD parameters of a drug. |
| popPK | Chilkoti_1995 | irrelevant | 0 | 0 | no_text gate: only 137 chars of text extracted (&lt; 400) |
| PD | Chilkoti_1995 | not_relevant | 0 | 0 | The paper investigates the structural role of tryptophan residues in the streptavidin-biotin complex via mutagenesis, not the pharmacodynamics of tryptophan as a drug. |
| PGx | Christ_2017 | not_relevant | 2 | 3 | Plant enzyme BAR off-target N-acetylation of tryptophan; no gene variant effect on a PK/PD parameter of a drug. |
| popPK | Colle_2025 | irrelevant | 0 | 0 | This is a biomarker concentration study of tryptophan/kynurenine metabolites in depression, with no pharmacokinetic disposition parameters (CL, V, half-life, or PK model) reported. |
| PGx | Cong_2022 | not_relevant | 2 | 5 | The pharmacogenomic effect (GABA-T rs1641031) is on olanzapine PK (Cmax, CL/F), not on a PK/PD parameter of tryptophan, which is only a measured metabolite. |
| PGx | Crisafulli_2011 | not_relevant | 3 | 2 | Review of antidepressant pharmacogenetics; tryptophan is not a drug here and no PK/PD effect sizes are reported. |
| PD | Cui_2020 | not_relevant | 3 | 5 | The paper reports in vitro IC50 values for enzyme inhibition, which are pharmacodynamic parameters, but it does not report an exposure-response or dose-response relationship in a biological system (PK/PD) or a formal PD model. |
| popPK | Das_2025 | irrelevant | 0 | 0 | This is an antifungal mechanism study of quinine against Rhizoctonia solani; tryptophan is only a metabolite/target, with no PK disposition parameters for tryptophan. |
| popPK | De_2018 | irrelevant | 0 | 0 | This is a physicochemical stability study of parenteral nutrition admixtures; tryptophan is only a measured amino acid component, with no pharmacokinetic parameters. |
| popPK | Deutz_2025 | relevant | 4 | 3 | Compartmental/isotope-tracer kinetic analysis of amino acid metabolism including tryptophan in pigs, but only a -22% intracellular production change for tryptophan is given; full kinetic parameter values likely in tables/supplements not provided. |
| popPK | Diksic_1990 | irrelevant | 3 | 2 | This is an autoradiographic tracer-kinetic method for serotonin synthesis in rat brain using the analogue alpha-methyl-tryptophan, not a PK study of tryptophan disposition; only a precursor-pool half-life (~20 min) is given, with no CL/V/compartmental parameter values. |
| popPK | Diksic_2001 | irrelevant | 2 | 1 | This is a review of the alpha-methyl-tryptophan tracer method for brain serotonin synthesis; no numeric PK disposition parameters (CL, V, half-life) for tryptophan are reported. |
| PGx | Drozdov-Tikhomirov_1977 | not_relevant | 1 | 2 | Bacterial trp-operon modeling in E. coli, not a pharmacogenomic effect on PK/PD of a drug. |
| popPK | Dulal_2018 | irrelevant | 0 | 0 | Structural biology study of Dectin-1; tryptophan appears only as intrinsic fluorescence, no PK parameters. |
| PD | Dulal_2018 | not_relevant | 0 | 0 | The paper describes protein-ligand binding and oligomerization of Dectin-1, not a pharmacodynamic exposure-response relationship for the drug tryptophan. |
| PD | Ebadi_1982 | not_relevant | 0 | 0 | The text is a review of drug-vitamin B6 interactions and mentions tryptophan only in the context of picolinic acid metabolism, without reporting any quantitative pharmacodynamic or exposure-response data. |
| popPK | Eleveld_2026 | irrelevant | 0 | 0 | Software validation paper comparing OpenPMX to NONMEM; no tryptophan PK parameters reported. |
| PD | Eleveld_2026 | not_relevant | 0 | 0 | The paper is a software validation study comparing estimation precision of OpenPMX vs NONMEM using generic PK models, with no specific drug (tryptophan) or pharmacodynamic data reported. |
| PGx | Fifita_2021 | not_relevant | 0 | 0 | Genetic variants in tryptophan metabolism genes are studied as ALS risk factors, not as modifiers of PK/PD parameters of a drug. |
| PGx | Francikowski_2019 | not_relevant | 0 | 0 | Tryptophan is an endogenous metabolite in insect eye pigments, not a drug; no PK/PD parameters or pharmacogenomic effects are reported. |
| popPK | Frankevich_2026 | irrelevant | 0 | 0 | This is a metabolomic biomarker study measuring amino acid concentrations, not a pharmacokinetic study with disposition parameters for tryptophan. |
| popPK | Friedrich_1976 | irrelevant | 0 | 0 | This is an in vitro bacterial enzyme kinetics study where tryptophan is merely an inhibitor; no pharmacokinetic parameters for tryptophan are reported. |
| PD | Friedrich_1976 | not_relevant | 0 | 0 | The paper reports in vitro enzyme kinetics (Km, Ki) for bacterial enzymes, not pharmacodynamic exposure-response relationships for a drug in a biological system. |
| PGx | Friedrich_2021 | not_relevant | 3 | 2 | Tryptophan metabolism in IDH-mutant glioma microenvironment; no gene variant effect on PK/PD parameters of a drug. |
| popPK | Genet_1994 | irrelevant | 0 | 0 | In-vitro enzyme characterization study; no pharmacokinetic disposition parameters for tryptophan in any organism. |
| PD | Genet_1994 | not_relevant | 0 | 0 | The paper reports enzyme kinetics (Km, kcat) for a specific enzyme acting on a substrate, which is biochemical characterization, not pharmacodynamic exposure-response or dose-response modeling for a drug. |
| popPK | Glass_2023 | irrelevant | 0 | 0 | Metabolomics study of exercise response; tryptophan is only a measured metabolite, no PK parameters reported. |
| popPK | González-Carrera_2026 | irrelevant | 0 | 0 | Tryptophan is only mentioned as a residue in a peptide; no PK parameters for tryptophan are reported. |
| PGx | Gooding_1987 | not_relevant | 0 | 0 | Insect genetics affecting tryptophan metabolism, not a pharmacogenomic effect on a drug PK/PD parameter. |
| PGx | Gordon_1991 | not_relevant | 0 | 0 | No gene variant/genotype or pharmacogenomic effect on tryptophan PK/PD parameters is reported; only clinical case descriptions of tryptophan-associated syndrome. |
| PGx | Granados_2024 | not_relevant | 1 | 1 | Review of OAT transporters mentions polymorphisms only in passing; no gene variant effect on tryptophan PK/PD parameters reported. |
| PGx | Gray_2026 | not_relevant | 0 | 0 | Computational modeling of hole transfer to tryptophan residues in P450 enzymes; no gene variant/genotype effect on a PK/PD parameter of a drug. |
| PD | Grison_2022 | not_relevant | 1 | 0 | The paper reports metabolomic changes (including tryptophan) as biomarkers of uranium exposure but does not provide a pharmacodynamic model or numeric dose-response parameters for tryptophan itself. |
| popPK | Gunn_2015 | irrelevant | 0 | 0 | This is a review of PET brain imaging; tryptophan appears only as a protein class name, with no PK parameters for tryptophan. |
| popPK | Hajishafiee_2021 | irrelevant | 1 | 1 | Appetite/energy-intake study with plasma Trp concentrations only; no PK disposition parameters (CL, V, half-life, model) reported. |
| popPK | Hampe_1981 | irrelevant | 0 | 0 | In-vitro spectroscopic study of urea binding to lysozyme; tryptophan is only a protein residue, with no PK parameters. |
| PD | Hampe_1981 | not_relevant | 0 | 0 | The paper studies the biophysical interaction of urea with lysozyme using UV spectroscopy, not the pharmacodynamics of tryptophan as a drug. |
| popPK | Hanke_2026 | irrelevant | 0 | 0 | This is a popPK/PD study of iclepertin (a GlyT1 inhibitor), not of tryptophan; tryptophan is not the subject drug and no tryptophan parameters appear. |
| PGx | Hardebeck_2023 | not_relevant | 0 | 0 | Tryptophan is only a fluorescent probe in protein stability assays; no gene variant affects PK/PD parameters of tryptophan as a drug. |
| popPK | Hartvig_1995 | irrelevant | 1 | 2 | This is a PET study of serotonin synthesis rate from 5-HTP in monkey brain, not a PK study of tryptophan disposition; the rate constant is a metabolic/synthesis parameter, not CL/V/ka. |
| popPK | He_2023 | irrelevant | 0 | 0 | This is a chemical synthesis and antioxidant activity study of γ-glutamyl-tryptophan peptides, with no pharmacokinetic parameters for tryptophan. |
| PD | He_2023 | not_relevant | 0 | 0 | The paper reports in vitro antioxidant activity (EC50) of synthesized peptides, which is a biochemical assay, not a pharmacodynamic (exposure-response) relationship for the drug tryptophan in a biological system. |
| PGx | Helfrich_2021 | not_relevant | 0 | 0 | Tryptophan is an active-site residue of homospermidine synthase, not a drug; no pharmacogenomic effect on PK/PD parameters is reported. |
| popPK | Hertenstein_2011 | irrelevant | 0 | 0 | This is an in-vitro immunology study of tranilast, a different drug; tryptophan is only mentioned as a structural homology, with no PK parameters for tryptophan. |
| popPK | Hodgson_2017 | irrelevant | 0 | 0 | This is a metabolomics biomarker study of HIV-COPD; tryptophan is only a measured endogenous metabolite, with no dosing and no PK parameters reported. |
| popPK | Hoeben_2026 | irrelevant | 0 | 0 | The drug is calaspargase pegol (asparaginase), not tryptophan; no tryptophan PK parameters are reported. |
| popPK | Hsu_2026 | irrelevant | 0 | 0 | A simulation methodology study for PopPK covariate identification with a hypothetical drug; no tryptophan data or parameters. |
| PD | Hsu_2026 | not_relevant | 0 | 0 | The paper focuses on population pharmacokinetic (PopPK) covariate identification methods and simulation power, with no mention of tryptophan or any pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Huang_2026 | irrelevant | 0 | 0 | The paper is about automated PopPK modeling software evaluated on 22 clinical datasets, with no mention of tryptophan or any of its parameters. |
| PD | Huang_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on automated population pharmacokinetic (PopPK) modeling methods and does not report any pharmacodynamic (PD) or exposure-response relationships for tryptophan or any other drug. |
| PD | Huo_2022 | not_relevant | 3 | 2 | The paper reports IC50 values for enzyme inhibition (TDO/IDO1) and qualitative in vivo antitumor effects, but does not provide a pharmacodynamic model (e.g., Emax, EC50) or exposure-response analysis for the drug's effect on the biological system (tumor growth or immune markers). |
| PD | Immanuel_2018 | not_relevant | 0 | 0 | The paper discusses tryptophan as a growth-limiting substrate in metabolic profiling but does not report any exposure-response or dose-response relationship with numeric PD parameters. |
| PGx | Inoue_2022 | not_relevant | 0 | 0 | Study uses tryptophan fluorescence to measure substrate binding to a transporter; no gene variant/genotype effect on tryptophan PK/PD is reported. |
| popPK | Itoh_1989 | irrelevant | 1 | 2 | Tryptophan appears only as a radiolabeled diagnostic tracer (Tc-99m N-pyridoxyl-5-methyl-tryptophan) for liver scintigraphy, not as a subject drug with PK disposition parameters; some rate constants are mentioned but no numeric values are given. |
| popPK | Ivanov_2023 | irrelevant | 0 | 0 | Tryptophan derivatives are studied as α7 nAChR agonists; no PK disposition parameters for tryptophan are reported. |
| PGx | Izzo_2009 | not_relevant | 0 | 0 | Tryptophan appears only in a case report of serotonin syndrome with St John's wort; no gene variant/genotype effect on any PK/PD parameter is reported. |
| PGx | Jang_2015 | not_relevant | 0 | 0 | Tryptophan is an engineered amino-acid substitution in CYP2B enzymes, not a drug with a pharmacogenomic PK/PD effect. |
| popPK | Ji_2021 | irrelevant | 0 | 0 | This is a luminescence/chemistry paper about a terbium-binding peptide; tryptophan is only a residue in the ligand, with no PK parameters. |
| PD | Ji_2021 | not_relevant | 0 | 0 | The paper describes a chemical ligand for enhancing luminescence in a non-biological system (Tb3+ ion), not a pharmacodynamic drug response in a biological subject. |
| popPK | Jia_2026 | irrelevant | 0 | 0 | This is a population PK study of rivaroxaban, not tryptophan; no tryptophan parameters appear. |
| PD | Jia_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for rivaroxaban, not tryptophan, and does not provide a pharmacodynamic (PD) model or numeric PD parameters (e.g., Emax, EC50) for the drug. |
| popPK | Kang_2026 | irrelevant | 0 | 0 | This is a simulation study of multiple myeloma drugs (carfilzomib, lenalidomide, etc.), not tryptophan; no tryptophan PK parameters appear. |
| PD | Kang_2026 | not_relevant | 0 | 0 | The paper focuses on multiple myeloma drugs (carfilzomib, lenalidomide, etc.) and does not contain any data, analysis, or mention of tryptophan. |
| popPK | Karlsen_2026 | irrelevant | 0 | 0 | A simulated-data framework for covariate model building benchmarking; tryptophan is not the subject drug and no tryptophan PK parameters are reported. |
| PD | Karlsen_2026 | not_relevant | 0 | 0 | The paper describes a framework for benchmarking covariate model building in population pharmacokinetics (PK) and does not report any pharmacodynamic (PD) or exposure-response relationships for tryptophan or any other drug. |
| popPK | Kim_2016 | irrelevant | 0 | 0 | no_text gate: only 162 chars of text extracted (&lt; 400) |
| PGx | Kliman_2018 | not_relevant | 0 | 0 | No gene variant/genotype effects on PK/PD parameters of tryptophan are reported; the study examines placental serotonin transport via inhibitors, not pharmacogenomics. |
| PGx | Koh_2024 | not_relevant | 2 | 3 | Paper studies tryptophan-derived compounds as ABCB1 inhibitors; no gene variant/genotype effect on tryptophan PK/PD parameters is reported. |
| PGx | Kou_2022 | not_relevant | 0 | 0 | No gene variant/genotype effect on PK/PD parameters of tryptophan; paper describes ROS/AhR signaling and tryptophan catabolism only. |
| popPK | Kuroki_1988 | irrelevant | 0 | 0 | In-vitro plant enzyme kinetics study; tryptophan is only an enzyme activator/ligand, no PK parameters. |
| PD | Kuroki_1988 | not_relevant | 0 | 0 | The paper describes in vitro enzyme kinetics and purification of chorismate mutase, not a pharmacodynamic or exposure-response relationship for tryptophan in a biological system. |
| popPK | Kwack_2026 | irrelevant | 0 | 0 | The paper is about an LLM tool for PopPK modeling using warfarin, theophylline, and tobramycin datasets; tryptophan is not studied at all. |
| PD | Kwack_2026 | not_relevant | 0 | 0 | The paper focuses on automated population pharmacokinetic (PopPK) modeling for warfarin, theophylline, and tobramycin, and does not report any pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Ladva_2018 | irrelevant | 0 | 0 | Metabolomics study of air pollution exposure; tryptophan is only a pathway/metabolite mention, no PK parameters for tryptophan. |
| PGx | Lamas_2016 | not_relevant | 2 | 4 | CARD9 genotype alters microbial tryptophan metabolite production (endogenous metabolism/inflammation), not a pharmacokinetic or pharmacodynamic parameter of a drug. |
| popPK | Lang_2025 | irrelevant | 0 | 0 | Tryptophan is only used in a fluorescence quenching assay; the PK parameters reported are for dengue protease inhibitors, not tryptophan. |
| PD | Lawrie_1987 | not_relevant | 2 | 1 | The paper describes a qualitative dose-response relationship for saccharin's effect on metabolites (including indican from tryptophan) but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect curve for tryptophan itself. |
| PD | Li_1995 | not_relevant | 4 | 2 | The paper describes dose-response relationships for TCDD effects on tryptophan levels but does not provide numeric PD parameters (e.g., EC50, Emax) or a concentration-effect curve for tryptophan itself in the provided text. |
| popPK | Li_2022 | irrelevant | 0 | 0 | This is an environmental epidemiology study of PM2.5 and gut-brain axis biomarkers; tryptophan appears only as metabolites, with no PK parameters. |
| PGx | Li_2024 | not_relevant | 0 | 0 | This is a prognostic gene signature study in ccRCC; no gene variant effect on PK/PD parameters of tryptophan is reported. |
| popPK | Li_2025 | irrelevant | 0 | 0 | This is a chemistry/antifungal activity study using d-tryptophan only as a synthetic starting material; no PK parameters for tryptophan are reported. |
| PD | Li_2025 | not_relevant | 0 | 0 | The paper reports in vitro antifungal activity (EC50) of synthesized beta-carboline derivatives, not a pharmacodynamic or exposure-response relationship for the drug tryptophan itself. |
| PGx | Li_2025_2 | not_relevant | 2 | 2 | Tryptophan metabolism changes are from Scg2 gene overexpression (gene therapy), not a gene variant/genotype altering a PK/PD parameter of a drug. |
| popPK | Li_2026 | irrelevant | 0 | 0 | This is a PKPD modeling study of the antibody-drug conjugate PF-06804103, not of tryptophan; no tryptophan parameters appear. |
| PD | Li_2026 | not_relevant | 0 | 0 | The paper discusses a PK/PD modeling framework for PF-06804103 (an antibody-drug conjugate), not tryptophan. |
| popPK | Li_2026_2 | irrelevant | 0 | 0 | This is a population PK study of gotistobart, a different drug; tryptophan is not the subject. |
| PD | Li_2026_2 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for gotistobart, not tryptophan, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Lin_1970 | irrelevant | 4 | 6 | In-vitro study of amino acid transport into dog bone marrow cells; tryptophan is one of several amino acids with compartmental turnover parameters (half-time 6.5 min, fractional rates in Table I), but this is cellular transport kinetics, not in-vivo pharmacokinetic disposition of tryptophan as a subject drug. |
| popPK | Lin_2015 | irrelevant | 0 | 0 | In-vitro NMR study of fluorinated tryptophan-albumin binding/exchange, not a pharmacokinetic study with disposition parameters. |
| popPK | Listro_2023 | irrelevant | 0 | 0 | Tryptophan is only used as a fluorescence probe in a biochemical/binding study; no PK parameters for tryptophan are reported. |
| popPK | Liu_2015 | irrelevant | 0 | 0 | no_text gate: only 145 chars of text extracted (&lt; 400) |
| PGx | Liu_2024 | not_relevant | 0 | 0 | Plant study of tryptophan as a metabolite/regulator in sorghum, not a drug with PK/PD parameters affected by genotype. |
| popPK | Lo_2021 | irrelevant | 0 | 0 | This is an in-vitro electrophysiology study of kynurenic acid (a tryptophan metabolite) on K+ currents in cell lines, with no PK disposition parameters for tryptophan. |
| PGx | Lu_2024 | not_relevant | 0 | 0 | Tryptophan is only listed as a constituent of the herbal formula; no gene variant effects on its PK/PD are reported. |
| popPK | Lubberink_2020 | irrelevant | 3 | 2 | PET tracer kinetic modeling of [11C]5-HTP in monkey pancreas reports rate constants (k2, k3, kloss) but not disposition PK parameters (CL, V, half-life) for tryptophan itself, and numeric values are not given in the evidence. |
| PGx | Ma_2023 | not_relevant | 0 | 0 | No gene variant/genotype effect on tryptophan PK/PD parameters; only microbiota-driven metabolite changes. |
| PGx | Maes_2020 | not_relevant | 2 | 3 | PON1 genotype is associated with oxidative/immune biomarkers and symptom variance, not with any PK/PD parameter of a drug (tryptophan not dosed as drug). |
| popPK | Majewski_2018 | irrelevant | 0 | 0 | no_text gate: only 150 chars of text extracted (&lt; 400) |
| popPK | Mamede_2025 | irrelevant | 0 | 0 | no_text gate: only 91 chars of text extracted (&lt; 400) |
| PD | Mamede_2025 | not_relevant | 0 | 0 | The paper studies a coumaroyltormentic acid derivative in Trypanosoma brucei, not the drug tryptophan, and does not report PD parameters for tryptophan. |
| PGx | Mansouri_2022 | not_relevant | 0 | 0 | Tryptophan is only used in fluorescence assays of MPYS protein; no drug PK/PD parameter or pharmacogenomic effect is reported. |
| popPK | Mantulin_1986 | irrelevant | 0 | 0 | This is an in-vitro fluorescence quenching study of apolipoprotein A-I; tryptophan is only a fluorescent residue, not a dosed drug with PK parameters. |
| PGx | Matheus_2020 | not_relevant | 2 | 3 | No gene variant/genotype effect on tryptophan PK/PD parameters; only expression associations and in vitro drug effects reported. |
| PGx | Maushagen_2025 | not_relevant | 0 | 0 | Tryptophan is an endogenous metabolite, not a drug; no pharmacogenomic effect on PK/PD parameters is reported. |
| popPK | Meewan_2019 | irrelevant | 0 | 0 | This is a drug-discovery/virology paper about HCV protease inhibitors with a tryptophan-derived scaffold; no PK parameters for tryptophan are reported. |
| PGx | Mellor_2022 | not_relevant | 0 | 0 | This is a metabolic engineering study of indican biosynthesis in tobacco chloroplasts; no gene variant/genotype effect on PK/PD parameters of tryptophan as a drug is reported. |
| PGx | Milosavljevic_2025 | not_relevant | 3 | 4 | Reports Kmo genotype effects on endogenous tryptophan/kynurenine metabolites and behavior, not on a pharmacokinetic or pharmacodynamic parameter of an administered drug. |
| popPK | Mitsumoto_2026 | irrelevant | 0 | 0 | Metabolomics study of ALS/TJ-68; tryptophan is only a measured metabolite, no PK disposition parameters reported. |
| PGx | Morgan_2018 | not_relevant | 1 | 1 | Symposium summary mentions microbiota regulation via tryptophan metabolites, not a gene variant effect on tryptophan PK/PD. |
| popPK | Morrison_2025 | irrelevant | 0 | 0 | Tryptophan is only a co-administered ingredient in a sleep/performance intervention study; no PK parameters are reported. |
| popPK | Murase_1991 | irrelevant | 0 | 0 | This is an in-vitro enzyme mutagenesis study; tryptophan is an amino acid substitution, not a dosed drug, and no PK parameters appear. |
| PD | Murase_1991 | not_relevant | 0 | 0 | The paper describes a site-directed mutagenesis study of an enzyme (aspartase) where tryptophan is an amino acid substitution, not a drug; it reports kinetic parameters (kcat, Hill coefficient) for the mutant enzyme, not a pharmacodynamic exposure-response relationship for tryptophan as a therapeutic agent. |
| popPK | Murata_2025 | irrelevant | 0 | 0 | Tryptophan is only a biomarker ratio component in a ketamine response study; no PK parameters for tryptophan are reported. |
| popPK | Muzik_1997 | irrelevant | 4 | 3 | PET tracer kinetic modeling of [C-11]AMT (a tryptophan analogue) in brain for serotonin synthesis; not disposition PK of tryptophan itself, and no numeric parameter values are given in the evidence. |
| popPK | Möckel_1994 | irrelevant | 0 | 0 | This is a bacterial enzyme biochemistry study with no pharmacokinetic parameters for tryptophan; tryptophan synthase is only mentioned as a structural comparison. |
| PD | Möckel_1994 | not_relevant | 0 | 0 | The paper describes biochemical characterization of threonine dehydratase mutants and their structural similarity to tryptophan synthase, but does not report any pharmacodynamic or exposure-response relationship for the drug tryptophan. |
| popPK | Müller_2023 | irrelevant | 0 | 0 | This is a microbial bioproduction study of engineered E. coli, not a pharmacokinetic study of tryptophan disposition; no PK parameters are reported. |
| popPK | Müller_2024 | irrelevant | 0 | 0 | This is a bioprocess/metabolic engineering study of violacein production in E. coli co-cultures; tryptophan is only an auxotrophy metabolite, with no pharmacokinetic disposition parameters. |
| PGx | Naito_2026 | not_relevant | 1 | 5 | No gene variant/genotype/phenotype is studied; effects of tryptophan metabolites on MDR1 protein expression are metabolite- and diet-driven, not pharmacogenomic. |
| PGx | Nessler_2020 | not_relevant | 0 | 0 | Tryptophan is a dietary component in a diet-based treatment, not a drug with PK/PD parameters; no gene variant effect on tryptophan pharmacokinetics or pharmacodynamics is reported. |
| popPK | Nøhr_2015 | irrelevant | 0 | 0 | Tryptophan is only a co-administered PAT1-ligand probe; the PK model and parameters concern vigabatrin, not tryptophan. |
| popPK | Ooi_2026 | irrelevant | 0 | 0 | This is a population PK study of elafibranor and its metabolite GFT1007, not tryptophan; no tryptophan parameters are reported. |
| PD | Ooi_2026 | not_relevant | 0 | 0 | The paper describes pharmacokinetic-pharmacodynamic analyses for elafibranor, not tryptophan. |
| PGx | Orabona_2018 | not_relevant | 3 | 2 | Paper studies IDO1 SNPs in T1D incidence, not effects of variants on PK/PD parameters of tryptophan. |
| PGx | Orhan_2025 | not_relevant | 2 | 3 | No gene variant effect on PK/PD parameters of tryptophan is reported; KYNA metabolism and schizophrenia risk genetics only, no pharmacogenomic effect sizes. |
| PD | Pagire_2022 | not_relevant | 3 | 2 | The paper reports an in vitro IC50 for a TPH1 inhibitor and qualitative in vivo efficacy (weight/fat reduction) but does not provide a concentration-effect or dose-response curve, nor does it report numeric PD parameters (Emax, EC50, slope) for the drug's effect in the biological system. |
| popPK | Panda_2016 | irrelevant | 0 | 0 | This is a medicinal chemistry paper on IDO1 inhibitors; tryptophan is only a substrate of the target enzyme, with no PK parameters reported. |
| PD | Panda_2016 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) of IDO1 by synthesized compounds, not a pharmacodynamic exposure-response or dose-response relationship for tryptophan itself. |
| PGx | Park_2020 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effect on PK/PD parameters of tryptophan is reported; the study examines AhR activation by metabolites/drugs. |
| PGx | Patel_2014 | not_relevant | 0 | 0 | Tryptophan is a prodrug promoiety conjugated to lopinavir; no gene variant/genotype/phenotype effect on PK or PD parameters is reported. |
| PGx | Pho_2022 | not_relevant | 1 | 5 | Tryptophan is an endogenous amino acid, not a drug; Tph2 knockout alters serotonin synthesis and physiology, not a PK/PD parameter of tryptophan. |
| popPK | Poulsen_1993 | irrelevant | 0 | 0 | In-vitro enzyme kinetics study of anthranilate synthase; tryptophan is only an inhibitor, no PK disposition parameters. |
| PD | Poulsen_1993 | not_relevant | 3 | 2 | The paper reports in vitro enzyme kinetics (Km, Hill coefficient) for anthranilate synthase inhibition by tryptophan, which is a biochemical mechanism study, not a pharmacodynamic (exposure-response) analysis of drug effect in a biological system or patient. |
| PGx | Qi_2022 | not_relevant | 1 | 3 | Tryptophan is an endogenous metabolite, not a drug; genetic associations with metabolite levels are not pharmacogenomic PK/PD effects. |
| PD | Qu_2021 | not_relevant | 0 | 0 | The paper is a network pharmacology and metabolomics study that identifies tryptophan metabolism as a pathway but does not report any quantitative exposure-response or dose-response data, concentration-effect curves, or numeric PD parameters for tryptophan. |
| PGx | RIZKI_1963 | not_relevant | 1 | 3 | Tryptophan is a dietary precursor, not a drug; gene variants alter kynurenine metabolite distribution/synthesis, not a PK or PD parameter of tryptophan. |
| PGx | Reichardt_1991 | not_relevant | 0 | 0 | Tryptophan appears only as a substituted amino acid in GALT mutations; no drug PK/PD pharmacogenomic effect is reported. |
| popPK | Ren_2025 | irrelevant | 0 | 0 | This is a pesticide chemistry paper; tryptophan appears only as a metabolic pathway in rice, with no PK parameters for tryptophan. |
| PGx | Rizuan_2024 | not_relevant | 0 | 0 | Structural biology of TDP-43 protein oligomerization; no drug, PK/PD parameters, or pharmacogenomic effects. |
| PGx | Rolfes_2021 | not_relevant | 2 | 5 | No gene variant/genotype/phenotype is linked to a PK/PD parameter; effects are drug/enzyme inhibition and AHR knockdown, not pharmacogenomic variation. |
| PD | Röhrig_2022 | not_relevant | 0 | 0 | The paper reports in vitro enzymatic and cellular IC50 values for IDO1 inhibitors, which are pharmacodynamic potency metrics, but it does not report an exposure-response or dose-response relationship for tryptophan itself, nor does it provide PK/PD modeling parameters (e.g., Emax, EC50 for tryptophan concentration) for the drug. |
| popPK | Scrutton_1992 | irrelevant | 0 | 0 | This is an enzyme mutation study; tryptophan is an amino acid residue substitution, not a dosed drug, and no PK parameters appear. |
| PD | Scrutton_1992 | not_relevant | 0 | 0 | The paper describes a structural biology and enzymology study of a mutated enzyme (glutathione reductase) and does not report pharmacodynamic or exposure-response relationships for the drug tryptophan. |
| popPK | Serkland_2026 | irrelevant | 0 | 0 | This is a population PKPD study of ocrelizumab, not tryptophan; no tryptophan parameters appear. |
| popPK | Serrano-Villar_2026 | irrelevant | 0 | 0 | Tryptophan is only used as a biomarker ratio (kynurenine/tryptophan) in an HIV ART trial; no PK parameters for tryptophan are reported. |
| popPK | Sha_2022 | irrelevant | 0 | 0 | This is a biomarker study of endogenous tryptophan/kynurenine metabolites predicting depression; no dosing, no PK disposition parameters (CL, V, ka, half-life) for tryptophan are reported, and metabolite levels are in supplementary tables not provided. |
| popPK | Shaw_1975 | relevant | 7 | 2 | Compartmental PK/flux analysis of tryptophan itself in humans, but no numeric parameter values are present in the evidence. |
| popPK | Sheng_2021 | irrelevant | 0 | 0 | Tryptophan is only a synthetic precursor for β-carboline antifungal compounds; no PK parameters for tryptophan are reported. |
| PD | Sheng_2021 | not_relevant | 3 | 2 | The paper reports single-point EC50 values for antifungal activity but does not provide a full dose-response curve, PK/PD model, or dynamic exposure-response relationship for tryptophan. |
| popPK | Shi_2017 | irrelevant | 0 | 0 | no_text gate: only 115 chars of text extracted (&lt; 400) |
| PD | Shi_2017 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics and pharmacodynamics of epacadostat, not tryptophan. |
| PGx | Shi_2020 | not_relevant | 0 | 0 | Study of diet effects on tryptophan metabolism in rats; no gene variant/genotype affecting PK/PD parameters reported. |
| popPK | Shuke_1992 | irrelevant | 0 | 0 | Tryptophan appears only as a component of the radiolabeled imaging agent 99mTc-PMT; the PK parameters are for the tracer agents, not for tryptophan itself. |
| popPK | Soeorg_2026 | irrelevant | 0 | 0 | This is a PK/PD model of meropenem and colistin/polymyxin B against A. baumannii; tryptophan is not involved at all. |
| popPK | Solvang_2019 | irrelevant | 0 | 0 | Biomarker association study of tryptophan metabolites in dementia; no PK parameters or disposition values reported. |
| popPK | Sonklin_2021 | irrelevant | 0 | 0 | no_text gate: only 82 chars of text extracted (&lt; 400) |
| PD | Sonklin_2021 | not_relevant | 0 | 0 | The paper focuses on the functional characterization of antioxidant peptides from mung bean meal, not on the pharmacodynamics or exposure-response relationship of tryptophan. |
| popPK | Spier_2000 | irrelevant | 0 | 0 | This is a molecular biology study of tryptophan residues in receptor binding domains, not a pharmacokinetic study of tryptophan as a drug. |
| PD | Spier_2000 | not_relevant | 0 | 0 | The paper investigates the structural role of tryptophan residues in the 5-HT3 receptor via mutagenesis, not the pharmacodynamics of tryptophan as a drug or exposure-response relationship. |
| popPK | Suthahar_2026 | irrelevant | 0 | 0 | This is a systematic review of population PK models for 5-fluorouracil, not tryptophan; no tryptophan parameters are reported. |
| PD | Suthahar_2026 | not_relevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic (PK) models for 5-fluorouracil and does not report any pharmacodynamic (PD) or exposure-response relationships for tryptophan or any other drug. |
| popPK | Szűcs_2020 | irrelevant | 1 | 2 | This is a peptide synthesis/pharmacology study of opioid peptides containing kynurenine residues; tryptophan is not the subject drug and no PK disposition parameters (CL, V, ka, compartmental model) are reported — only a plasma stability t1/2 = 47 min for a synthetic peptide in vitro. |
| popPK | Sürmelioğlu_2026 | irrelevant | 0 | 0 | This is a systematic review of vancomycin PopPK studies; tryptophan is not the subject drug and no tryptophan parameters appear. |
| PD | Sürmelioğlu_2026 | not_relevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic (PopPK) studies for vancomycin, focusing on PK parameters and dosing optimization, with no report of pharmacodynamic (PD) or exposure-response models/parameters. |
| popPK | Taleb_2017 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| PD | Taleb_2017 | not_relevant | 0 | 0 | The paper focuses on the chemical stability of a glucagon formulation and does not contain any pharmacodynamic or exposure-response analysis for tryptophan. |
| popPK | Tan_2026 | irrelevant | 0 | 0 | This is a busulfan population PK study; tryptophan is not mentioned at all. |
| PD | Tan_2026 | not_relevant | 0 | 0 | The paper focuses on pharmacokinetic (PK) modeling and limited sampling strategies for busulfan, with no pharmacodynamic (PD) or exposure-response analysis for tryptophan or any other drug. |
| PGx | Tanaka_2021 | not_relevant | 0 | 0 | Beetle behavioral genomics study of tryptophan metabolism pathway variants; no drug PK/PD parameters. |
| PGx | Thome_2024 | not_relevant | 2 | 3 | Tryptophan is an endogenous metabolite, not a drug; AHR allele affinity differences affect metabolite signaling/mitochondrial function, not PK/PD parameters of a pharmacologic agent. |
| PD | Tijono_2022 | not_relevant | 3 | 2 | The paper reports IC50 values for enzyme inhibition and qualitative in vivo effects (K:T ratio reduction, tumor growth delay) but does not provide a pharmacodynamic model, dose-response curve, or numeric PD parameters (like Emax or EC50) for the drug's effect in the context of PK/PD analysis. |
| popPK | Tosca_2025 | irrelevant | 0 | 0 | A review/perspective on LLMs in pharmacometrics with no tryptophan PK data or parameters. |
| PD | Tosca_2025 | not_relevant | 0 | 0 | The paper is a conceptual review on the application of Large Language Models in pharmacometrics and does not report any specific pharmacodynamic data or parameters for tryptophan. |
| popPK | Visser_2014 | irrelevant | 3 | 2 | PET tracer kinetic modeling of [(11)C]5-HTP in rat brain for serotonin synthesis, not disposition PK of tryptophan itself; no numeric CL/V/ka values present in the evidence. |
| PGx | WEED_1963 | not_relevant | 0 | 0 | Bacterial copper-induced variants affecting tryptophan auxotrophy; no gene variant effect on PK/PD parameters of a drug. |
| PGx | Walston_1995 | not_relevant | 0 | 0 | Tryptophan is an amino acid in the receptor sequence, not a drug; no PK/PD pharmacogenomic effect reported. |
| popPK | Wang_2015 | irrelevant | 0 | 0 | Tryptophan is only a metabolomics endpoint after dosing a different drug (myclobutanil) in vitro; no tryptophan PK parameters. |
| PGx | Wang_2024 | not_relevant | 0 | 0 | No drug or pharmacogenomic effect on PK/PD parameters; tryptophan is studied as a disease-related metabolite, not a drug. |
| PD | Wang_2024_2 | not_relevant | 2 | 1 | The paper reports epidemiological associations and mediation analysis between arsenic exposure, tryptophan levels, and cognitive scores, but does not provide a pharmacodynamic model or numeric PD parameters (e.g., Emax, EC50) for tryptophan itself. |
| PD | Wang_2024_3 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values for IDO1 inhibition and qualitative in vivo anti-inflammatory effects, but does not provide a pharmacokinetic/pharmacodynamic (PK/PD) model, exposure-response analysis, or dose-response curve with numeric PD parameters (e.g., Emax, EC50) for the drug in a biological system. |
| PGx | Wang_2025 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effect on tryptophan PK/PD parameters; study concerns probiotic metabolism of tryptophan via ILA/AHR in mice. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | This is a population PK model library for polymyxin B, not tryptophan; no tryptophan parameters appear. |
| PD | Wang_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on population pharmacokinetic (PK) modeling of polymyxin B and does not report any pharmacodynamic (PD) or exposure-response relationships for tryptophan. |
| popPK | Wanika_2026 | irrelevant | 3 | 0 | A methods paper on uncertainty quantification using simulated data; no tryptophan PK parameters reported. |
| PD | Wanika_2026 | not_relevant | 0 | 0 | The paper is a methodological case study on uncertainty quantification for PK models using simulated data and does not report any pharmacodynamic or exposure-response relationships for tryptophan. |
| popPK | Wess_1993 | irrelevant | 0 | 0 | Tryptophan here is an amino acid residue in receptor mutagenesis, not the drug tryptophan; no PK parameters. |
| PD | Wess_1993 | not_relevant | 0 | 0 | The paper studies the functional role of conserved amino acid residues (proline and tryptophan) in a GPCR via mutagenesis, not the pharmacodynamics of tryptophan as a drug or ligand. |
| popPK | Wu_2026 | irrelevant | 0 | 0 | This is a population PK study of bosutinib, not tryptophan; tryptophan is not the subject drug. |
| PD | Wu_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for bosutinib, not tryptophan, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Xajil-Ramos_2026 | irrelevant | 0 | 0 | This is a population PK study of tacrolimus, not tryptophan; no tryptophan parameters are reported. |
| PD | Xajil-Ramos_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for tacrolimus, not tryptophan, and contains no pharmacodynamic or exposure-response analysis. |
| popPK | Xie_2026 | irrelevant | 0 | 0 | This is a population PK study of daptomycin, not tryptophan; no tryptophan parameters are reported. |
| PD | Xie_2026 | not_relevant | 0 | 0 | The paper focuses on daptomycin population pharmacokinetics (PopPK) and precision dosing, not tryptophan, and does not report any pharmacodynamic (PD) or exposure-response parameters. |
| popPK | Xu_2020 | irrelevant | 0 | 0 | no_text gate: only 134 chars of text extracted (&lt; 400) |
| PD | Xu_2020 | not_relevant | 0 | 0 | The paper focuses on the mechanism of algae inhibition by Spartina alterniflora and does not report any pharmacodynamic or exposure-response data for tryptophan. |
| popPK | Yang_2022 | irrelevant | 0 | 0 | Tryptophan appears only as a fluorescence marker in EPS of activated sludge; no PK parameters for tryptophan are reported. |
| PD | Yang_2022 | not_relevant | 0 | 0 | The paper investigates the inhibition of nitrification by 3,5-dichlorophenol, not the pharmacodynamics of tryptophan; tryptophan is only mentioned as a fluorescent component in EPS. |
| PGx | Yang_2024 | not_relevant | 0 | 0 | Enzyme mutagenesis/structural study of ACMSD catalysis; no gene variant effect on in vivo PK/PD parameters of tryptophan. |
| PGx | Yin_2016 | not_relevant | 3 | 5 | Reports genotype association with antidepressant treatment response (clinical outcome), not a PK/PD parameter of tryptophan. |
| popPK | Yousof_2024 | irrelevant | 0 | 0 | no_text gate: only 161 chars of text extracted (&lt; 400) |
| PD | Yousof_2024 | not_relevant | 0 | 0 | The paper focuses on the identification of metabolites from Brucea javanica and their binding affinities for dengue virus enzymes, with no mention of tryptophan or any pharmacodynamic/exposure-response analysis. |
| PD | Yu_2017 | not_relevant | 0 | 0 | The paper reports a herbicide dose-response relationship for cyhalofop-butyl in weeds, not a pharmacodynamic relationship for the drug tryptophan. |
| popPK | Zahed_2021 | irrelevant | 0 | 0 | Epidemiological biomarker study of blood concentrations, not a PK study; no tryptophan dosing or disposition parameters (CL, V, half-life) reported. |
| popPK | Zaidi_2026 | irrelevant | 0 | 0 | Systematic review of opioid PopPK/PBPK models in pregnancy; tryptophan is not the subject drug and no numeric parameters are present. |
| PD | Zaidi_2026 | not_relevant | 0 | 0 | The paper is a systematic review of opioid pharmacokinetics in pregnancy and does not contain any data, analysis, or parameters related to tryptophan. |
| PGx | Zeng_2018 | not_relevant | 0 | 0 | GWAS of longevity; no drug, no PK/PD parameters, and tryptophan not studied. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | This is a fungicide discovery study; tryptophan is only a metabolic pathway mentioned in transcriptomics, with no PK parameters for tryptophan. |
| PD | Zhang_2024 | not_relevant | 0 | 0 | The paper reports fungicidal activity (EC50) of synthetic pyrrolo[2,3-d]thiazole compounds, not a pharmacodynamic or exposure-response relationship for the drug tryptophan itself. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The paper is a systematic review of population PK for imipenem, a different drug; tryptophan is not mentioned. |
| PD | Zhang_2025 | not_relevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic (PK) models for imipenem and does not report any pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Zheng_2017 | irrelevant | 0 | 0 | This is a chemistry/fungicidal-activity study of tryptophan derivatives with no pharmacokinetic parameters. |
| popPK | Zheng_2025 | irrelevant | 0 | 0 | Tryptophan is only a measured metabolomics biomarker, not the subject drug; the PK model is for vigabatrin. |
| popPK | van_1987 | irrelevant | 0 | 0 | Tryptophan appears only as a fluorescence probe of albumin; the PK parameters concern dibromosulfophthalein, not tryptophan. |
| PGx | van_2018 | not_relevant | 3 | 4 | Genetic loci predict CSF tryptophan concentrations (endogenous metabolite QTLs), not a pharmacokinetic or pharmacodynamic parameter of a drug. |
| popPK | van_2026 | irrelevant | 0 | 0 | This is a systematic review of population PK models for immunoglobulin G, not tryptophan, and no tryptophan parameters appear. |
| PD | van_2026 | not_relevant | 0 | 0 | The paper is a systematic review of pharmacokinetic models for immunoglobulins (IVIg/SCIg) and does not report any pharmacodynamic or exposure-response data for tryptophan. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
