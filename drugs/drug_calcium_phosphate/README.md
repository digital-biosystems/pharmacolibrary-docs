<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A12A&quot;,&quot;href&quot;:&quot;atc/A12A.md&quot;},{&quot;label&quot;:&quot;calcium phosphate&quot;}]"></div>

# calcium phosphate

- **generic name:** calcium phosphate
- **ATC codes:** `A12AA01`
- **DrugBank:** [DB11348](https://go.drugbank.com/drugs/DB11348) · **PubChem:** [CID 24456](https://pubchem.ncbi.nlm.nih.gov/compound/24456)
- **molar mass:** 310.177 g/mol (Ca3O8P2) — DrugBank
- **groups:** approved, investigational

## About

Calcium phosphate is a calcium mineral supplement used to treat or prevent calcium deficiency. It is an approved supplement, available widely as a dietary mineral product, and has also been studied investigationally.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q278387](https://www.wikidata.org/wiki/Q278387) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 08:56 | 11:04 | 0/0/0 | 0/0/1 | 0/0/0 | 358,372/10,909 | ollama / qwen3.8:27b-mtp-q8_0 | 24 | 7/29 | 21/3 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by qwen3.8:27b-mtp-q8_0, p(non-human) 0.50).">human + animal</span> | [Perez_2020_CAC_volume](drugs/drug_calcium_phosphate/pd_Perez_2020_CAC_volume.md) | percent change from baseline to week 52 in coronary artery calcium (CAC) volume ← inhibition of calcium phosphate crystallization · direct linear effect | — | Perez MM et al., A novel assay to measure calcification…, Scientific reports (2020) | [10.1038/s41598-020-74592-x](https://doi.org/10.1038/s41598-020-74592-x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=calcium_phosphate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CACNA1A (substrate), CACNA1C (substrate), CACNA1E (substrate), CACNA1G (substrate), CADPS (target), CADPS2 (target), CALB1 (substrate), CALB2 (target), CALM1 (target), CALM2 (target), CALM3 (target), CALR (target), CALR3 (target), CANX (target), CAPS (target), CASQ1 (target), CASQ2 (target), CASR (target), CATSPER1 (substrate), CHP1 (target), CIB1 (target), CIB2 (target), FBN2 (target), FBN3 (target), GCA (target), NCS1 (target), NRXN1 (target), NUCB1 (target), NUCB2 (target), PDCD6 (target), PEF1 (target), PKD1L3 (substrate), PKD2L1 (substrate), RGN (target), RYR1 (substrate), RYR2 (substrate), RYR3 (substrate), S100A13 (target), S100A16 (target), S100A6 (target), S100B (target), S100G (substrate), SLC20A1 (substrate), SLC20A2 (substrate), SLC34A1 (substrate), SLC34A2 (substrate), SLC34A3 (substrate), SLC8A1 (substrate), SPARC (target), SRI (target), TPT1 (target), TRPV5 (substrate), TRPV6 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 271 matched, 186 returned
- **screened:** 17  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_14 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Besarab_1982.pdf` | Besarab A et al., Differences in effects of amino-termina…, Renal physiology (1982) | pd | 5 | [10.1159/000172866](https://doi.org/10.1159/000172866) | [6294762](https://www.ncbi.nlm.nih.gov/pubmed/6294762) | metadata signals extractable PD data (sigmoid) |
| `Chen_2012.pdf` | Chen CK et al., Setting solution concentration effect o…, Journal of materials scienc… (2012) | pd | 4 | [10.1007/s10856-012-4700-9](https://doi.org/10.1007/s10856-012-4700-9) | [22689011](https://www.ncbi.nlm.nih.gov/pubmed/22689011) | metadata signals extractable PD data (concentrationeffect) |
| `Gorvin_2016.pdf` | Gorvin CM et al., A G-protein Subunit-α11 Loss-of-Functio…, Journal of bone and mineral… (2016) | pd | 4 | [10.1002/jbmr.2778](https://doi.org/10.1002/jbmr.2778) | [26729423](https://www.ncbi.nlm.nih.gov/pubmed/26729423) | metadata signals extractable PD data (EC50) |
| `Hunter_1994.pdf` | Hunter GK et al., Modulation of crystal formation by bone…, The Biochemical journal (1994) | pd | 4 | [10.1042/bj3000723](https://doi.org/10.1042/bj3000723) | [8010953](https://www.ncbi.nlm.nih.gov/pubmed/8010953) | metadata signals extractable PD data (IC50) |
| `ONeill_2012.pdf` | O'Neill WC et al., The chemistry of thiosulfate and vascul…, Nephrology, dialysis, trans… (2012) | pd | 4 | [10.1093/ndt/gfr375](https://doi.org/10.1093/ndt/gfr375) | [21737516](https://www.ncbi.nlm.nih.gov/pubmed/21737516) | metadata signals extractable PD data (EC50) |
| `Vadas_1986.pdf` | Vadas P et al., Potential therapeutic efficacy of inhib…, Agents and actions (1986) | pd | 4 | [10.1007/BF01966206](https://doi.org/10.1007/BF01966206) | [3825740](https://www.ncbi.nlm.nih.gov/pubmed/3825740) | metadata signals extractable PD data (IC50) |
| `Collins_2023.pdf` | Collins L et al., Hypervitaminosis D Secondary to a CYP24…, JBMR plus (2023) | pgx | 8 | [10.1002/jbm4.10788](https://doi.org/10.1002/jbm4.10788) | [37701149](https://www.ncbi.nlm.nih.gov/pubmed/37701149) | metadata signals extractable PGX data (CYP24A1, PK/PD-context) |
| `Bennin_2024.pdf` | Bennin D et al., Loss of 24-hydroxylated catabolism incr…, JBMR plus (2024) | pgx | 5 | [10.1093/jbmrpl/ziae012](https://doi.org/10.1093/jbmrpl/ziae012) | [38577520](https://www.ncbi.nlm.nih.gov/pubmed/38577520) | metadata signals extractable PGX data (CYP24A1) |
| `Fahkri_2015.pdf` | Fahkri H et al., Checkpoint kinase Chk2 controls renal C…, Pflugers Archiv : European… (2015) | pgx | 5 | [10.1007/s00424-014-1625-9](https://doi.org/10.1007/s00424-014-1625-9) | [25319519](https://www.ncbi.nlm.nih.gov/pubmed/25319519) | metadata signals extractable PGX data (Cyp27b1) |
| `Hu_2021.pdf` | Hu J et al., Selenium-doped calcium phosphate biomin…, Nanomedicine : nanotechnolo… (2021) | pgx | 5 | [10.1016/j.nano.2020.102322](https://doi.org/10.1016/j.nano.2020.102322) | [33186694](https://www.ncbi.nlm.nih.gov/pubmed/33186694) | metadata signals extractable PGX data (ABCB1) |
| `Maekawa_2024.pdf` | Maekawa AS et al., Maternal loss of 24-hydroxylase causes…, Journal of bone and mineral… (2024) | pgx | 5 | [10.1093/jbmr/zjae166](https://doi.org/10.1093/jbmr/zjae166) | [39385466](https://www.ncbi.nlm.nih.gov/pubmed/39385466) | metadata signals extractable PGX data (CYP24A1) |
| `Rush_2022.pdf` | Rush ET et al., Molecular Diagnoses of X-Linked and Oth…, Journal of bone and mineral… (2022) | pgx | 5 | [10.1002/jbmr.4454](https://doi.org/10.1002/jbmr.4454) | [34633109](https://www.ncbi.nlm.nih.gov/pubmed/34633109) | metadata signals extractable PGX data (CYP27B1) |
| `Tamura_2006.pdf` | Tamura A et al., Genetic polymorphisms of human ABC tran…, Journal of experimental the… (2006) | pgx | 5 | not captured | [17228519](https://www.ncbi.nlm.nih.gov/pubmed/17228519) | metadata signals extractable PGX data (ABCG2) |
| `Wakabayashi-Nakao_2010.pdf` | Wakabayashi-Nakao K et al., Production of cells with targeted integ…, Methods in molecular biolog… (2010) | pgx | 5 | [10.1007/978-1-60761-756-3_9](https://doi.org/10.1007/978-1-60761-756-3_9) | [20700710](https://www.ncbi.nlm.nih.gov/pubmed/20700710) | metadata signals extractable PGX data (ABCG2) |

<sub>queue written 2026-10-05T08:49:01.060550+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | An_2019 | irrelevant | 0 | 0 | The paper describes a nanomedicine formulation using calcium phosphate as a carrier for ferroptosis inducers, not a pharmacokinetic study of calcium phosphate as a subject drug. |
| PD | An_2019 | not_relevant | 3 | 2 | The paper reports a single IC50 value for a combination therapy in vitro and qualitative tumor suppression in vivo, but lacks a formal exposure-response or dose-response curve analysis with derivable PD parameters (e.g., Emax, EC50, slope) for calcium phosphate specifically. |
| PGx | Andrukhova_2016 | not_relevant | 0 | 0 | The paper investigates the interaction between FGF23 and PTH signaling in mice, not the pharmacogenomics of calcium phosphate as a drug. |
| PGx | Bach_2013 | not_relevant | 0 | 0 | The paper describes a disease and general treatment options but does not report any pharmacogenomic effects on the PK or PD of calcium phosphate. |
| PGx | Badura-Stronka_2025 | not_relevant | 0 | 0 | The paper describes a genetic variant associated with a clinical phenotype (Kenny-Caffey syndrome) and notes normal calcium-phosphate metabolism, but does not report a pharmacogenomic effect on the PK/PD of a drug. |
| PGx | Baranowska_2020 | not_relevant | 0 | 0 | The paper is a review of the biological functions of the Klotho protein and does not report pharmacogenomic effects on the PK or PD of calcium phosphate. |
| popPK | Beffinger_2025 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of an IL-12Fc fusion protein in glioblastoma models, not calcium phosphate. |
| PD | Beffinger_2025 | not_relevant | 0 | 0 | The paper studies IL-12Fc, not calcium phosphate, and reports PK/PD for a cytokine fusion protein without any data on calcium phosphate. |
| PGx | Bennin_2024 | not_relevant | 0 | 0 | The paper studies the physiological effects of a genetic knockout on endogenous vitamin D and mineral metabolism, not the pharmacokinetics or pharmacodynamics of the drug calcium phosphate. |
| popPK | Besarab_1982 | irrelevant | 0 | 0 | The study investigates the physiological effects of parathyroid hormone on renal excretion of calcium and phosphate in an isolated perfused rat kidney model, rather than the pharmacokinetics of calcium phosphate as a drug. |
| PD | Besarab_1982 | not_relevant | 0 | 0 | The paper studies the effects of parathyroid hormone (PTH) on kidney function, not calcium phosphate as a drug, and does not report a pharmacodynamic model for calcium phosphate. |
| PGx | Björk_2018 | not_relevant | 0 | 0 | The paper investigates the effect of CYP2R1 variants on endogenous 25(OH)D and bone markers, not on the pharmacokinetics or pharmacodynamics of the drug calcium phosphate. |
| popPK | Bortnick_2019 | irrelevant | 0 | 0 | The study is an epidemiological investigation of mineral metabolism biomarkers (FGF-23, phosphate) and cardiovascular calcification, not a pharmacokinetic study of calcium phosphate. |
| popPK | Bortnick_2026 | irrelevant | 0 | 0 | The study investigates the association between mineralization regulators (MGP, FGF-23, fetuin-A) and valvular calcification progression, not the pharmacokinetics of calcium phosphate. |
| popPK | Boulay_2024 | irrelevant | 0 | 0 | The paper describes the pharmacology of an HIV-1 capsid inhibitor (H27) and does not study the pharmacokinetics of calcium phosphate. |
| PGx | Buccoliero_2025 | not_relevant | 0 | 0 | The paper describes a genetic disorder (GACI) affecting calcium-phosphate metabolism and arterial calcification, not the pharmacokinetics or pharmacodynamics of a specific drug. |
| PGx | Canales_2017 | not_relevant | 0 | 0 | The paper investigates genetic associations with urine pH and kidney stone risk, not the pharmacokinetics or pharmacodynamics of a specific drug named calcium_phosphate. |
| PGx | Cetani_2026 | not_relevant | 0 | 0 | The paper reports a genetic variant causing a disease (FHH2) affecting calcium homeostasis, but it does not report the effect of a gene variant on the pharmacokinetics or pharmacodynamics of the drug calcium phosphate. |
| popPK | Chen_2012 | irrelevant | 0 | 0 | The paper investigates the material properties (setting time, strength, XRD) of calcium phosphate cement, not its pharmacokinetics in a biological system. |
| PD | Chen_2012 | not_relevant | 0 | 0 | The paper investigates the effect of solution concentration on the physical properties of a calcium phosphate cement, which is a materials science study, not a pharmacodynamic or exposure-response analysis of a drug. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | The paper describes a computational platform for antisense oligonucleotide design and does not involve calcium phosphate or its pharmacokinetics. |
| PD | Chen_2026 | not_relevant | 0 | 0 | The paper describes a computational platform for ASO design and reports qualitative efficacy in animal models, but does not provide numeric pharmacodynamic parameters or exposure-response relationships for calcium phosphate. |
| popPK | Cheng_2007 | irrelevant | 0 | 0 | The study focuses on in vitro drug release and cytotoxicity of cisplatin from calcium phosphate nanoparticles, not the pharmacokinetics of calcium phosphate itself. |
| PGx | Chertok_2023 | not_relevant | 0 | 0 | The paper investigates FGF-23 levels in primary hyperparathyroidism and does not report pharmacogenomic effects on the PK/PD of calcium phosphate. |
| popPK | Chesnut_1993 | irrelevant | 0 | 0 | The study focuses on alendronate's effect on bone mass and turnover markers, with calcium phosphate mentioned only as a biochemical marker, not as the subject drug for PK analysis. |
| PGx | Chiarito_2025 | not_relevant | 0 | 0 | The paper studies bone turnover markers in Noonan syndrome patients, not the pharmacokinetics or pharmacodynamics of the drug calcium phosphate. |
| popPK | Chow_1984 | irrelevant | 0 | 0 | The study is an in-vitro physicochemical model of caries formation using hydroxyapatite crystals, not a pharmacokinetic study of calcium phosphate as a drug. |
| PGx | Chudek_2000 | not_relevant | 0 | 0 | The paper investigates the association between VDR genotype and calcium-phosphate metabolism markers (like phosphate and iPTH) in hemodialysis patients, but it does not report the pharmacokinetic or pharmacodynamic effects of a specific drug named 'calcium_phosphate'. |
| PGx | Collins_2023 | not_relevant | 0 | 0 | The paper describes a genetic cause of hypervitaminosis D and hypercalcemia, but does not report pharmacokinetic or pharmacodynamic parameters for the drug calcium phosphate. |
| popPK | Curcio_2026 | irrelevant | 0 | 0 | The paper describes the fabrication of aortic valve phantoms using calcium phosphate as a material component to mimic calcification, not a pharmacokinetic study of calcium phosphate as a drug. |
| PGx | Dahir_2022 | not_relevant | 0 | 0 | The paper describes the clinical phenotype of a genetic disease (XLH) and does not report pharmacokinetic or pharmacodynamic effects of a drug (calcium phosphate) modified by genotype. |
| PGx | Davis_2024 | not_relevant | 0 | 0 | The paper describes a genetic cause of a disease (ADHR) and its treatment response, but does not report a pharmacogenomic effect on the PK or PD of calcium phosphate. |
| PGx | Della_2026 | not_relevant | 0 | 0 | The paper describes the clinical phenotype of MEN1 syndrome and does not report pharmacogenomic effects on the PK/PD of calcium phosphate. |
| popPK | Donnelly_1989 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on crystal growth inhibition by gallium, not a pharmacokinetic study of calcium phosphate. |
| popPK | Downey_2018 | irrelevant | 0 | 0 | The study measures fluoride levels in saliva following the application of fluoride varnishes and does not report pharmacokinetic parameters for calcium phosphate. |
| popPK | Duan_2024 | irrelevant | 0 | 0 | The paper focuses on a drug screening platform for pancreatic cancer and identifies perhexiline maleate as an inhibitor, with no mention of calcium phosphate pharmacokinetics. |
| PD | Duan_2024 | not_relevant | 0 | 0 | The paper reports on a drug screening platform and identifies perhexiline maleate as an inhibitor, but it does not report any pharmacodynamic (PD) or exposure-response analysis for calcium phosphate, nor does it provide numeric PD parameters for the identified compound. |
| PGx | Duffaut_2026 | not_relevant | 0 | 0 | The paper focuses on machine learning models for predicting kidney stone composition and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of calcium phosphate. |
| popPK | EFSA_2026 | irrelevant | 0 | 0 | The paper concerns the feed additive nicarbazin for chickens, not the pharmacokinetics of calcium phosphate. |
| PD | EFSA_2026 | not_relevant | 0 | 0 | The paper is a regulatory safety and efficacy opinion for a feed additive (nicarbazin) and does not report any pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters. |
| popPK | Eanes_1983 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ionophore-mediated calcium transport and precipitation in Pressman cells, not a pharmacokinetic study of calcium phosphate as a drug. |
| popPK | El-Tohamy_2026 | irrelevant | 0 | 0 | The study focuses on the material science and in-vitro drug release of amoxicillin from calcium phosphate scaffolds, not the pharmacokinetics of calcium phosphate itself. |
| PD | El-Tohamy_2026 | not_relevant | 2 | 1 | The paper reports material characterization and qualitative biocompatibility trends (IC50 mentioned but not quantified) for a drug delivery system, lacking a formal pharmacodynamic model or numeric exposure-response parameters for calcium phosphate. |
| popPK | Eldokmak_2025 | irrelevant | 0 | 0 | The paper is a materials science study on 3D-printed scaffolds for bone regeneration and does not report pharmacokinetic parameters for calcium phosphate. |
| PD | Eldokmak_2025 | not_relevant | 0 | 0 | The paper describes a biomaterials study on 3D-printed scaffolds and reports an IC50 value for cell viability, which is a cytotoxicity metric, not a pharmacodynamic exposure-response relationship for a drug. |
| PGx | Elli_2022 | not_relevant | 0 | 0 | The paper discusses genetic variants causing skeletal disorders (brachydactyly) and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of calcium phosphate. |
| PGx | Fahkri_2015 | not_relevant | 0 | 0 | The paper investigates the physiological role of the Chk2 gene in endogenous calcium-phosphate metabolism and calcitriol synthesis, not the pharmacokinetics or pharmacodynamics of an exogenous calcium-phosphate drug. |
| PGx | Fan_2016 | not_relevant | 0 | 0 | The paper investigates the physiological role of the PTH1R receptor in mineral homeostasis using a genetic knockout mouse model, but it does not report pharmacogenomic effects on the PK or PD of the drug calcium_phosphate. |
| popPK | Fei_2008 | irrelevant | 0 | 0 | The paper describes the material science and in-vitro release properties of a bone graft composite, not the pharmacokinetics of calcium phosphate as a drug. |
| PD | Fei_2008 | not_relevant | 2 | 1 | The paper reports a qualitative dose-response for rhBMP-2 (the active agent) in a cell culture assay, but provides no numeric PD parameters (Emax, EC50, etc.) or quantitative concentration-effect data for calcium phosphate or the composite. |
| popPK | Fentiman_1989 | irrelevant | 0 | 0 | The study investigates the effect of tamoxifen on bone density and reports plasma phosphate levels as a biomarker, but does not report pharmacokinetic parameters for calcium phosphate. |
| PD | Fentiman_1989 | not_relevant | 0 | 0 | The paper studies the effect of tamoxifen on bone density and explicitly states that no dose-response was observed; it does not report a pharmacodynamic model or numeric PD parameters for calcium phosphate. |
| popPK | Filler_2026 | irrelevant | 0 | 0 | The paper is a case report on Burosumab (a monoclonal antibody) and does not report pharmacokinetic parameters for calcium phosphate. |
| PD | Filler_2026 | not_relevant | 1 | 0 | The paper is a single case report describing qualitative clinical observations (phosphate retention, hypercalcemia) without providing numeric concentration-effect data, dose-response curves, or PD parameters. |
| PGx | Filler_2026 | not_relevant | 0 | 0 | The paper reports a pharmacodynamic effect of Burosumab on calcium-phosphate homeostasis in a neonate, but it does not report a pharmacogenomic effect (i.e., how a specific gene variant modifies the drug's PK/PD). |
| PGx | Filopanti_2012 | not_relevant | 0 | 0 | The study investigates the effect of a CASR variant on the response to cinacalcet, not on the pharmacokinetics or pharmacodynamics of calcium phosphate. |
| popPK | Finlay_2023 | irrelevant | 0 | 0 | The paper describes an in vitro bone model using beta-tricalcium phosphate as a scaffold material, not a pharmacokinetic study of calcium phosphate as a drug. |
| PD | Finlay_2023 | not_relevant | 0 | 0 | The paper describes a methodology for creating an in vitro bone model and does not report any pharmacodynamic or exposure-response analysis for calcium phosphate. |
| popPK | Finogenova_2026 | irrelevant | 0 | 0 | The paper is a review of radiolabeled nanoparticles for oncology and does not contain pharmacokinetic data for calcium phosphate. |
| PD | Finogenova_2026 | not_relevant | 0 | 0 | The paper is a review of radionuclide-labeled nanoparticles and does not report any pharmacodynamic or exposure-response data for calcium phosphate. |
| PGx | Florenzano_2025 | not_relevant | 0 | 0 | The paper compares the clinical effectiveness of two treatments (burosumab vs. oral phosphate) in patients with a genetic disease (XLH) but does not report how a specific gene variant affects the pharmacokinetics or pharmacodynamics of the drug itself. |
| popPK | Fu_2025 | irrelevant | 0 | 0 | The paper investigates the association between Klotho levels and hypertension, not the pharmacokinetics of calcium phosphate. |
| PD | Fu_2025 | not_relevant | 0 | 0 | The paper investigates the association between Klotho levels and hypertension, not the pharmacodynamic or exposure-response relationship of calcium phosphate. |
| popPK | Gao_2000 | irrelevant | 0 | 0 | The paper is an in-vitro cell biology study where calcium phosphate is used as a transfection reagent, not as the subject drug for pharmacokinetic analysis. |
| PD | Gao_2000 | not_relevant | 0 | 0 | The paper uses calcium phosphate as a transfection method, not as the drug of interest, and reports dose-response parameters for norepinephrine. |
| popPK | Garcia-Contreras_2003 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of insulin using calcium phosphate as a delivery vehicle, not the pharmacokinetics of calcium phosphate itself. |
| popPK | Gorvin_2016 | irrelevant | 0 | 0 | no_text gate: only 118 chars of text extracted (&lt; 400) |
| PD | Gorvin_2016 | not_relevant | 0 | 0 | The paper describes a genetic mutation causing a disease phenotype, not a pharmacodynamic or exposure-response analysis of a drug. |
| PGx | Gorvin_2017 | not_relevant | 0 | 0 | The paper describes a mouse model for a genetic disorder affecting calcium homeostasis, not the pharmacokinetics or pharmacodynamics of the drug calcium phosphate. |
| popPK | Gray_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of osteoclast activity using calcium phosphate films as a substrate, not a pharmacokinetic study of calcium phosphate as a drug. |
| PGx | Grigelioniene_2017 | not_relevant | 0 | 0 | The paper describes a genetic cause of a disease (Pseudohypoparathyroidism) involving PTH resistance, not a pharmacogenomic effect on the PK/PD of the drug calcium_phosphate. |
| PGx | Guan_2023 | not_relevant | 0 | 0 | The paper describes a drug delivery formulation (calcium phosphate nanoparticles) for phenytoin, not a pharmacogenomic effect of a gene variant on the PK/PD of calcium phosphate. |
| popPK | Guiastrennec_2017 | irrelevant | 0 | 0 | The study focuses on the erosion modeling of HPMC matrix tablets and does not report pharmacokinetic parameters for calcium phosphate. |
| PD | Guiastrennec_2017 | not_relevant | 0 | 0 | The paper models the physical erosion/release kinetics of HPMC matrix tablets (dissolution), not the pharmacodynamic effect of calcium phosphate on a biological system. |
| popPK | Guldhaug_2026 | irrelevant | 0 | 0 | The study analyzes biological variation of calcium homeostasis biomarkers (including phosphate) in healthy volunteers, not the pharmacokinetics of the drug calcium phosphate. |
| popPK | Guo_2026 | irrelevant | 0 | 0 | The study measures urinary stone risk parameters (supersaturation, pH, citrate) in humans, not the pharmacokinetic disposition parameters (CL, V, ka) of calcium phosphate. |
| PGx | Gök_2026 | not_relevant | 0 | 0 | The paper describes the natural history and treatment outcomes of a genetic bone disorder (osteopetrosis) and its effect on calcium homeostasis, but it does not report a pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of a specific drug. |
| PGx | Hannan_2019 | not_relevant | 0 | 0 | The paper is a general review of genetic approaches to metabolic bone diseases and does not report pharmacogenomic effects on the PK/PD of calcium phosphate. |
| PGx | Hennings_2024 | not_relevant | 0 | 0 | The paper investigates the diagnosis of hypophosphatasia via biomarkers and ALPL gene variants, but does not report pharmacokinetic or pharmacodynamic effects of a drug (calcium phosphate) modified by a genotype. |
| PGx | Hidaka_2023 | not_relevant | 0 | 0 | The paper reports the therapeutic efficacy of asfotase alfa in a patient with hypophosphatasia, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of calcium phosphate. |
| PGx | Hu_2021 | not_relevant | 0 | 0 | The paper describes a drug delivery system (selenium-doped calcium phosphate) for chemotherapy and does not report pharmacogenomic effects on the PK/PD of calcium phosphate itself. |
| popPK | Hunter_1994 | irrelevant | 0 | 0 | no_text gate: only 146 chars of text extracted (&lt; 400) |
| PD | Hunter_1994 | not_relevant | 0 | 0 | The paper focuses on the structural mechanism of osteopontin inhibiting hydroxyapatite crystal formation, not on the pharmacodynamic exposure-response relationship of calcium phosphate as a drug. |
| popPK | Ismail_2025 | irrelevant | 0 | 0 | The study is a dental clinical trial evaluating remineralizing agents for shade stability, not a pharmacokinetic study of calcium phosphate. |
| popPK | Israni_2026 | irrelevant | 0 | 0 | The paper is a review of anti-inflammatory compounds and does not contain pharmacokinetic data for calcium phosphate. |
| PD | Israni_2026 | not_relevant | 0 | 0 | The paper is a review of natural anti-inflammatory compounds and does not mention calcium phosphate or report any pharmacodynamic parameters. |
| popPK | Jeong_2026 | irrelevant | 0 | 0 | The paper describes NSD2 inhibitors for cancer treatment and does not study the pharmacokinetics of calcium phosphate. |
| PGx | Jorde_2012 | not_relevant | 0 | 0 | The paper investigates the association between genetic variants and human height, not the pharmacokinetic or pharmacodynamic parameters of the drug calcium phosphate. |
| PGx | Jorgenson_2025 | not_relevant | 0 | 0 | The paper is a case report on caseous calcification of the mitral annulus in a patient with Fabry disease and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of calcium phosphate. |
| popPK | Kadyrov_2026 | irrelevant | 0 | 0 | The study is a toxicology assessment of hydrazine in rats and does not report pharmacokinetic parameters for calcium phosphate. |
| PD | Kadyrov_2026 | not_relevant | 0 | 0 | The paper focuses on inter-laboratory variability in clinical chemistry parameters following hydrazine toxicity, not on the pharmacodynamics of calcium phosphate. |
| PGx | Kamiński_2025 | not_relevant | 0 | 0 | The paper investigates the association between VDR gene variants and the risk of osteoporosis, not the pharmacokinetic or pharmacodynamic parameters of a specific drug. |
| popPK | Kamphof_2023 | irrelevant | 0 | 0 | The paper is a systematic review of the antimicrobial activity of ion-substituted calcium phosphate biomaterials, not a pharmacokinetic study of calcium phosphate as a drug. |
| PGx | Kappers_1996 | not_relevant | 0 | 0 | The paper studies CYP2C10 inhibition by NSAIDs using tolbutamide as a probe substrate; calcium phosphate is only mentioned as a transfection method, not as the drug of interest. |
| popPK | Karpf_2020 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of TransCon PTH (a prodrug of PTH(1-34)), not calcium phosphate, which is only mentioned as a biomarker (serum phosphate). |
| popPK | Kendra_2026 | irrelevant | 0 | 0 | The study investigates the effect of a borophosphate glass biomaterial on skeletal muscle in mice and does not report pharmacokinetic parameters for calcium phosphate. |
| PD | Kendra_2026 | not_relevant | 0 | 0 | The paper investigates the biological effects of a borophosphate glass biomaterial in a mouse model, not a pharmacodynamic exposure-response relationship for calcium phosphate. |
| popPK | Khalid-Salako_2025 | irrelevant | 0 | 0 | The paper is a review of nanocarrier drug delivery systems and does not report pharmacokinetic parameters for calcium phosphate. |
| PD | Khalid-Salako_2025 | not_relevant | 0 | 0 | The paper is a general review of nanocarriers and does not report any specific pharmacodynamic or exposure-response data for calcium phosphate. |
| popPK | Kim_2017 | irrelevant | 0 | 0 | The study is an epidemiological cohort analysis of parathyroid hormone and cognitive decline, not a pharmacokinetic study of calcium phosphate. |
| popPK | Kim_2026 | irrelevant | 0 | 0 | The paper is a structural biology study of NMDA receptors and does not contain any pharmacokinetic data for calcium phosphate. |
| PGx | Kiuchi_2021 | not_relevant | 0 | 0 | The paper describes the genetic cause of a disease (Pseudohypoparathyroidism) involving phosphate metabolism, but does not report a pharmacogenomic effect on the PK/PD of a specific drug named calcium_phosphate. |
| PGx | Koehler_2021 | not_relevant | 0 | 0 | The paper discusses a genetic disease (Hypophosphatasia) and its clinical diagnosis, not the pharmacokinetics or pharmacodynamics of a drug named calcium_phosphate. |
| popPK | Kolar_2002 | irrelevant | 0 | 0 | The study investigates the binding kinetics of inorganic phosphate within bovine casein micelles (a food component) using isotopic exchange, not the pharmacokinetics of calcium phosphate as a drug in a biological system. |
| popPK | Komez_2020 | irrelevant | 0 | 0 | The paper describes a 3D bone tumor model and the efficacy of Doxorubicin, not the pharmacokinetics of calcium phosphate. |
| PGx | Kowalówka_2020 | not_relevant | 0 | 0 | The paper is a review of Vitamin D status and does not report pharmacogenomic effects on the PK/PD of calcium phosphate. |
| PGx | Laure_2026 | not_relevant | 0 | 0 | The paper investigates the diagnosis of hyperparathyroidism in acromegaly and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of calcium phosphate. |
| PGx | Lee_2002 | not_relevant | 0 | 0 | The paper investigates gene delivery using calcium phosphate as a carrier vehicle, not the pharmacokinetics or pharmacodynamics of calcium phosphate as a drug. |
| popPK | Leighow_2025 | irrelevant | 0 | 0 | The paper focuses on gene drives and cancer evolution, not the pharmacokinetics of calcium phosphate. |
| PD | Leighow_2025 | not_relevant | 0 | 0 | The paper focuses on gene drive engineering and evolutionary dynamics for cancer therapy, not on the pharmacodynamics of calcium phosphate. |
| popPK | Leng_2018 | irrelevant | 0 | 0 | The paper is a toxicity assessment of nanocapsules containing calcium phosphate, not a pharmacokinetic study of calcium phosphate as a drug, and reports no PK parameters. |
| PD | Leng_2018 | not_relevant | 2 | 2 | The paper reports toxicity screening (LC50/IC50) for a nanocapsule formulation, not a pharmacodynamic exposure-response or dose-response relationship for calcium phosphate itself. |
| PGx | Leyne_2026 | not_relevant | 0 | 0 | The paper describes a genetic disorder (TRPV6 variants) affecting calcium metabolism and bone development, not the pharmacokinetics or pharmacodynamics of a specific drug. |
| popPK | Ligon_2023 | irrelevant | 0 | 0 | The study evaluates guadecitabine in cancer patients and does not report pharmacokinetic parameters for calcium phosphate. |
| PD | Ligon_2023 | not_relevant | 0 | 0 | The paper reports clinical outcomes and qualitative biologic activity (demethylation) for guadecitabine, but contains no pharmacokinetic data, exposure-response analysis, or numeric PD parameters. |
| popPK | Lima_2026 | irrelevant | 0 | 0 | The study is a histomorphometric evaluation of osseointegration in sheep, not a pharmacokinetic study, and reports no disposition parameters for calcium phosphate. |
| popPK | Liu_2020 | irrelevant | 1 | 0 | The study focuses on dexamethasone sodium phosphate (Dsp) as the subject drug, with calcium phosphate serving only as a structural component of the nanoparticle carrier, and no quantitative PK parameters for calcium phosphate itself are reported. |
| PD | Liu_2020 | not_relevant | 2 | 1 | The paper reports qualitative improvements in renal function and biomarkers for the nanoparticle formulation compared to free drug, but does not provide numeric concentration-effect or dose-response parameters (e.g., EC50, Emax) or a formal PK/PD model. |
| popPK | Liu_2023 | irrelevant | 0 | 0 | The paper focuses on kinase inhibitors and drug repurposing, with no mention of calcium phosphate or its pharmacokinetic parameters. |
| PD | Liu_2023 | not_relevant | 0 | 0 | The paper focuses on kinase inhibitors and does not report any pharmacodynamic or exposure-response data for calcium phosphate. |
| popPK | Liu_2025 | irrelevant | 0 | 0 | The paper is an in-vitro materials science study on bone cement preparation and angiogenic activity, not a pharmacokinetic study reporting disposition parameters for calcium phosphate. |
| PD | Liu_2025 | not_relevant | 2 | 1 | The paper describes the preparation and qualitative in vitro angiogenic activity of a bone cement but does not provide numeric concentration-effect data, dose-response curves, or PD parameters for calcium phosphate. |
| popPK | Luo_2021 | irrelevant | 0 | 0 | The paper is an immunology study on a COVID-19 vaccine using calcium phosphate as a biomineral coating, not a pharmacokinetic study of calcium phosphate as a drug. |
| PD | Luo_2021 | not_relevant | 0 | 0 | The paper reports immunogenicity (antibody titers, T-cell responses) and thermostability of a vaccine formulation, but does not report a pharmacodynamic exposure-response or dose-response relationship with numeric PD parameters (e.g., Emax, EC50) for calcium phosphate. |
| popPK | López-García_2021 | irrelevant | 0 | 0 | The paper is an in-vitro biocompatibility study of desensitizers containing calcium phosphate, not a pharmacokinetic study, and reports no disposition parameters. |
| PGx | López-Sánchez_2020 | not_relevant | 0 | 0 | The paper investigates the cellular mechanism of phosphate transporters in a genetic disease (PFBC) and does not report pharmacokinetic or pharmacodynamic effects of a drug (calcium phosphate) modulated by a gene variant. |
| popPK | Lübbe_2019 | irrelevant | 0 | 0 | The study analyzes clinical outcomes and laboratory parameters (including serum phosphate levels) in dialysis patients, but does not report pharmacokinetic parameters for calcium phosphate. |
| popPK | Ma_2007 | irrelevant | 0 | 0 | The study is a histomorphometric and biomechanical analysis of tendon-to-bone healing using calcium phosphate as a carrier, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Ma_2026 | irrelevant | 0 | 0 | The study focuses on the preparation and in vitro/in vivo efficacy of a drug delivery system (lipid nanoparticles) for doxorubicin and siRNA, not on the pharmacokinetic parameters of calcium phosphate itself. |
| PD | Ma_2026 | not_relevant | 2 | 1 | The paper reports an IC50 value for a drug combination, which is a single-point potency metric, but does not provide a full concentration-effect curve, dose-response model, or population PK/PD analysis with derivable parameters like Emax or EC50 for the specific formulation. |
| PGx | Maekawa_2024 | not_relevant | 0 | 0 | The paper studies the physiological role of the CYP24A1 gene in calcium homeostasis, not the pharmacokinetics or pharmacodynamics of the drug calcium phosphate. |
| popPK | Mahidhara_2015 | irrelevant | 0 | 0 | The study focuses on the anticancer efficacy and biodistribution of calcium phosphate nanocapsules as a drug delivery vehicle, not on the pharmacokinetic parameters of calcium phosphate itself. |
| PGx | Marchelek-Myśliwiec_2016 | not_relevant | 0 | 0 | The study investigates the association between a Klotho polymorphism and calcium-phosphate metabolism parameters (Ca, P, FGF23) in hemodialysis patients, not the pharmacokinetics or pharmacodynamics of a specific drug named 'calcium_phosphate'. |
| popPK | Martino_2014 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on stem cell differentiation and does not report pharmacokinetic parameters for calcium phosphate. |
| popPK | McCoombe_2026 | irrelevant | 0 | 0 | The study is a phantom imaging study investigating CT characterization of kidney stones, not a pharmacokinetic study of calcium phosphate. |
| popPK | Mesas_2022 | irrelevant | 0 | 0 | The study focuses on the in vitro cytotoxicity and in vivo antitumor efficacy of calcium phosphate nanoparticles, not on the pharmacokinetic disposition parameters (CL, V, etc.) of the drug itself. |
| popPK | Mohiyuddin_2018 | irrelevant | 0 | 0 | The paper is an in-vitro study on 5-fluorouracil-loaded calcium phosphate nanoparticles focusing on synthesis and cytotoxicity, with no pharmacokinetic parameters reported for calcium phosphate. |
| PGx | Moulin_2017 | not_relevant | 0 | 0 | The paper assesses the heritability of renal electrolyte handling in a general population, not the effect of specific gene variants on the pharmacokinetics or pharmacodynamics of the drug calcium phosphate. |
| popPK | Mousavi_2023 | irrelevant | 0 | 0 | The paper is a review on the cytotoxicity and antibacterial effects of marine organisms, mentioning calcium phosphate only as a bioactive compound, and contains no pharmacokinetic data. |
| PD | Mousavi_2023 | not_relevant | 1 | 0 | The paper is a general review of marine organisms and only lists calcium phosphate as a bioactive compound without providing any specific exposure-response data or numeric PD parameters for it. |
| popPK | Moutaftsis_2026 | irrelevant | 0 | 0 | The study evaluates bone mineral density outcomes in osteoporosis patients and does not report pharmacokinetic parameters for calcium phosphate. |
| PGx | Mumm_2015 | not_relevant | 0 | 0 | The paper describes a genetic mutation causing a disease (hypophosphatemic rickets) and its phenotypic presentation, but does not report the effect of this variant on the pharmacokinetics or pharmacodynamics of a specific drug (calcium phosphate). |
| PGx | Mundorff-Shrestha_1999 | not_relevant | 0 | 0 | The study evaluates the cariostatic efficacy of a dentifrice in rats and does not investigate pharmacogenomic effects on PK or PD parameters. |
| PGx | Munteanu_2026 | not_relevant | 2 | 5 | The paper reports a clinical safety outcome (vascular calcification) associated with a genetic variant and phosphate supplementation, but does not quantify changes in specific pharmacokinetic or pharmacodynamic parameters of calcium phosphate. |
| popPK | Murashima_2023 | irrelevant | 0 | 0 | The study analyzes the association of serum calcium and phosphate levels with clinical outcomes in dialysis patients, not the pharmacokinetic disposition parameters of calcium phosphate as a drug. |
| popPK | Nair_2015 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cholecalciferol (Vitamin D), not calcium phosphate, and does not report PK parameters for the target drug. |
| PD | Nair_2015 | not_relevant | 2 | 1 | The study reports qualitative associations and group comparisons for PD endpoints (cathelicidin, PTH) but does not provide numeric PD parameters (Emax, EC50) or a fitted concentration-effect curve. |
| PGx | Nandam_2021 | not_relevant | 0 | 0 | The paper describes a case of tumor-induced osteomalacia and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of calcium phosphate. |
| popPK | Nekouei_2026 | irrelevant | 0 | 0 | The study investigates the association between statin use and arterial calcification volume, not the pharmacokinetics of calcium phosphate. |
| PD | Nekouei_2026 | not_relevant | 0 | 0 | The paper investigates the association between statin use and arterial calcification, not the pharmacodynamics of calcium phosphate. |
| popPK | Niu_2026 | irrelevant | 0 | 0 | The paper investigates the role of RGS19 in renal fibrosis and does not report any pharmacokinetic parameters for calcium phosphate. |
| PD | Niu_2026 | not_relevant | 0 | 0 | The paper investigates the mechanism of RGS19 in renal fibrosis using siRNA knockdown and does not report any pharmacodynamic or exposure-response relationship for calcium phosphate. |
| PGx | Norek_2010 | not_relevant | 0 | 0 | The study investigates genetic associations with bone mineral density in cystic fibrosis patients, not the pharmacokinetics or pharmacodynamics of the drug calcium phosphate. |
| popPK | ONeill_2012 | irrelevant | 0 | 0 | no_text gate: only 55 chars of text extracted (&lt; 400) |
| PD | ONeill_2012 | not_relevant | 0 | 0 | The paper discusses the chemistry of thiosulfate and vascular calcification, not calcium phosphate, and does not report any pharmacodynamic or exposure-response data. |
| PGx | Ogg_1997 | not_relevant | 0 | 0 | The paper describes an in vitro assay for CYP3A4 induction where calcium phosphate is used as a transfection reagent, not as the drug of interest for pharmacogenomic analysis. |
| popPK | Oláh_2026 | irrelevant | 0 | 0 | The paper investigates the mechanism of GABA release and NMDAR subunits in mice, with no mention of calcium phosphate pharmacokinetics. |
| PD | Oláh_2026 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of NMDAR modulators and ketamine on GABA release and LTP, and does not report any pharmacodynamic or exposure-response relationship for calcium phosphate. |
| popPK | Pal_2024 | irrelevant | 0 | 0 | The study focuses on the fabrication and in-vitro release of ciprofloxacin from calcium phosphate particles, not on the pharmacokinetics of calcium phosphate itself. |
| PD | Pal_2024 | not_relevant | 3 | 2 | The paper describes a materials science study on drug delivery particles and mentions qualitative dose-dependent antibacterial activity, but it does not report a pharmacokinetic/pharmacodynamic model or extractable numeric PD parameters (e.g., EC50, Emax) for the drug itself. |
| popPK | Pan_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of asfotase alfa, not calcium phosphate. |
| PD | Pan_2021 | not_relevant | 1 | 0 | The paper reports only pharmacokinetic (PK) parameters (exposure, half-life, dose proportionality) and explicitly refers to previously published pharmacodynamic results, providing no numeric PD parameters or concentration-effect curves in this text. |
| PGx | Pan_2021 | not_relevant | 0 | 0 | The paper reports the pharmacokinetics of asfotase alfa in patients with hypophosphatasia but does not report a pharmacogenomic effect (gene variant/genotype) on the PK or PD of calcium phosphate. |
| popPK | Pandey_2019 | irrelevant | 2 | 0 | The study focuses on methotrexate (MTX) as the subject drug with calcium phosphate nanoparticles as a delivery vehicle, and no quantitative PK parameters (CL, V, etc.) for calcium phosphate itself are reported. |
| PD | Pandey_2019 | not_relevant | 2 | 1 | The paper reports qualitative pharmacodynamic outcomes (arthritic assessment, histopathology) and a bioavailability ratio, but does not provide numeric concentration-effect or dose-response parameters (e.g., Emax, EC50) or a fitted PD model. |
| PGx | Pandya_2026 | not_relevant | 0 | 0 | The paper analyzes mutational patterns in parathyroid carcinomas and does not report pharmacokinetic or pharmacodynamic effects of calcium phosphate. |
| popPK | Papadopoulou_2025 | irrelevant | 0 | 0 | The paper is a review on marine bioactives for cosmetics and does not contain pharmacokinetic data for calcium phosphate. |
| PD | Papadopoulou_2025 | not_relevant | 0 | 0 | The paper is a review on marine bioactives for cosmetics and does not report any pharmacodynamic or exposure-response data for calcium phosphate. |
| popPK | Pardo_2026 | irrelevant | 0 | 0 | The paper is a mechanistic study on lung cancer tumorigenesis in mice and does not involve calcium phosphate or pharmacokinetic parameters. |
| PD | Pardo_2026 | not_relevant | 0 | 0 | The paper investigates the role of eIF4A2 in lung cancer tumorigenesis and mentions rapamycin as a pharmacological inhibitor, but it does not report any exposure-response or dose-response relationship for calcium phosphate, nor does it provide numeric PD parameters for any drug. |
| popPK | Parrot_2026 | irrelevant | 0 | 0 | The paper is a review on nanoparticle pharmacokinetic modeling and does not report quantitative PK parameters for calcium phosphate. |
| PD | Parrot_2026 | not_relevant | 0 | 0 | The text is a review of pharmacokinetic modeling frameworks for nanoparticles and does not report any specific pharmacodynamic or exposure-response data for calcium phosphate. |
| PGx | Pathare_2012 | not_relevant | 0 | 0 | The paper investigates the physiological role of the SPAK gene in calcium-phosphate homeostasis in mice, not the pharmacokinetics or pharmacodynamics of a specific drug named 'calcium_phosphate'. |
| popPK | Patten_2022 | irrelevant | 0 | 0 | The paper focuses on identifying SARS-CoV-2 inhibitors and does not report pharmacokinetic parameters for calcium phosphate. |
| PD | Patten_2022 | not_relevant | 0 | 0 | The paper focuses on high-throughput screening for SARS-CoV-2 inhibitors and does not report any pharmacodynamic or exposure-response data for calcium phosphate. |
| popPK | Peng_2014 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of a synthetic pyrimidine derivative (1-calcium phosphate-uracil) and does not report any pharmacokinetic parameters for calcium phosphate. |
| popPK | Perez_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of SNF472 (a calcification inhibitor) and calcium phosphate crystallization, not the pharmacokinetic disposition parameters of calcium phosphate itself. |
| PGx | Portale_2026 | not_relevant | 0 | 0 | The paper examines the effect of meal timing on serum phosphorus and calcium levels in patients with X-linked hypophosphatemia treated with burosumab, but it does not report a pharmacogenomic effect (i.e., how a specific gene variant changes the PK/PD of the drug). |
| popPK | Pukallus_2013 | irrelevant | 0 | 0 | The study is a clinical trial on dental caries prevention using CPP-ACP cream and does not report any pharmacokinetic parameters for calcium phosphate. |
| PD | Pukallus_2013 | not_relevant | 3 | 2 | The study reports a qualitative dose-response trend based on usage compliance (regular/irregular/non-users) rather than a quantitative exposure-response relationship with numeric PD parameters like Emax or EC50. |
| popPK | Purpus_1993 | irrelevant | 0 | 0 | The paper is a molecular biology study on gene transfection efficiency in embryonal carcinoma cells, where calcium phosphate is used as a delivery method (reagent) rather than a drug subject to pharmacokinetic analysis. |
| PD | Purpus_1993 | not_relevant | 2 | 1 | The paper describes a dose-response for lipofection efficiency and qualitatively compares it to calcium-phosphate, but does not provide numeric PD parameters or a concentration-effect curve for calcium phosphate. |
| popPK | Qin_2025 | irrelevant | 0 | 0 | The study is an epidemiological cohort analysis of serum levels and arrhythmia risk, not a pharmacokinetic study reporting disposition parameters for calcium phosphate. |
| PD | Qin_2025 | not_relevant | 3 | 2 | The study reports epidemiological hazard ratios and spline trends for serum mineral levels, but does not provide a pharmacodynamic model or extractable numeric PD parameters (e.g., Emax, EC50) for calcium phosphate. |
| popPK | Quodbach_2014 | irrelevant | 0 | 0 | The study investigates the physical disintegration mechanisms of tablets using dibasic calcium phosphate as a filler, not the pharmacokinetics of calcium phosphate as a drug. |
| PD | Quodbach_2014 | not_relevant | 0 | 0 | The paper analyzes the physical disintegration kinetics of tablets using a modified Hill equation, which is a physicochemical model, not a pharmacodynamic (drug effect) model. |
| popPK | Raja_2022 | irrelevant | 0 | 0 | The study focuses on the anti-osteoporotic effects of a plant extract and reports biochemical markers (serum calcium/phosphate levels) rather than pharmacokinetic parameters for calcium phosphate. |
| PD | Raja_2022 | not_relevant | 1 | 0 | The paper reports a single-dose effect (400 mg/kg) on serum calcium and phosphate levels but does not provide a dose-response curve, concentration-effect relationship, or numeric PD parameters (e.g., Emax, EC50) for calcium phosphate. |
| popPK | Ramezani_2024 | irrelevant | 0 | 0 | The study is an in-vitro cell viability experiment where calcium phosphate is used only as a transfection reagent, not as the subject drug for pharmacokinetic analysis. |
| PD | Ramezani_2024 | not_relevant | 0 | 0 | The paper reports dose-response data for 5-Fluorouracil and Annexin A5, but calcium phosphate is only mentioned as the transfection reagent, not as the drug of interest for PD analysis. |
| PGx | Reyes_2021 | not_relevant | 0 | 0 | The paper describes a genetic cause of a disease (PHP1B) involving PTH resistance, not a pharmacogenomic effect on the PK/PD of the drug calcium_phosphate. |
| popPK | Reynolds_1995 | irrelevant | 0 | 0 | The study investigates the anticariogenic effects of calcium phosphate complexes in rats, not the pharmacokinetic disposition parameters of calcium phosphate. |
| popPK | Reynolds_2010 | irrelevant | 0 | 0 | The study reports reference intervals for plasma biochemical values (including phosphate) in cats, not pharmacokinetic parameters for calcium phosphate. |
| PGx | Rodríguez_2024 | not_relevant | 0 | 0 | The paper investigates the association between serum sclerostin levels and kidney stone formation, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of a drug. |
| popPK | Rudalska_2025 | irrelevant | 0 | 0 | The paper studies p38α inhibitors (e.g., compound 2015) in colorectal cancer models, not the pharmacokinetics of calcium phosphate. |
| PGx | Rush_2022 | not_relevant | 0 | 0 | The paper discusses genetic causes of hypophosphatemia (disease etiology) rather than the pharmacogenomics of a specific drug's PK/PD parameters. |
| popPK | Saghiri_2026 | irrelevant | 0 | 0 | The study investigates the mechanical properties of human dentin in relation to diet, not the pharmacokinetics of calcium phosphate. |
| popPK | Salamat_2026 | irrelevant | 0 | 0 | The paper is a review of chitosan-based hydrogels for biomedical applications and does not report pharmacokinetic parameters for calcium phosphate. |
| PD | Salamat_2026 | not_relevant | 0 | 0 | The paper is a comprehensive review of chitosan-based hydrogels for biomedical applications and does not report any pharmacodynamic or exposure-response data for calcium phosphate. |
| popPK | Seefried_2021 | irrelevant | 0 | 0 | The study evaluates the pharmacodynamics of asfotase alfa, not the pharmacokinetics of calcium phosphate. |
| popPK | Sever_2016 | irrelevant | 0 | 0 | The study is a dental microhardness analysis of bleaching agents and amorphous calcium phosphate, not a pharmacokinetic study of calcium phosphate as a drug. |
| popPK | Sim_2019 | irrelevant | 0 | 0 | The study investigates the anticariogenic efficacy of a saliva biomimetic (CPP-ACP) and does not report any pharmacokinetic parameters for calcium phosphate. |
| popPK | Sine_1991 | irrelevant | 0 | 0 | The paper is a molecular biology study on acetylcholine receptors where calcium phosphate is used only as a transfection reagent, not as a subject drug for pharmacokinetic analysis. |
| PD | Sine_1991 | not_relevant | 0 | 0 | The paper describes a cell line expression system and characterizes receptor properties; it does not report a pharmacodynamic exposure-response or dose-response relationship for calcium phosphate. |
| PGx | Singh_2025 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of nintedanib using calcium phosphate as an excipient, not the pharmacogenomics of calcium phosphate itself. |
| PGx | Sridharan_2024 | not_relevant | 0 | 0 | The study investigates genetic associations with endogenous calcium metabolism biomarkers in ESRD, not the pharmacokinetics or pharmacodynamics of the drug calcium phosphate. |
| popPK | Su_2025 | irrelevant | 0 | 0 | The paper is a review on nanotechnology and immunotherapy for osteosarcoma and does not report pharmacokinetic parameters for calcium phosphate. |
| PD | Su_2025 | not_relevant | 0 | 0 | The paper is a review of nanotechnology and immunotherapy strategies in osteosarcoma and does not report any pharmacodynamic or exposure-response data for calcium phosphate. |
| popPK | Suter_2026 | irrelevant | 0 | 0 | The paper is an in-vitro materials science study on bone regeneration and does not report any pharmacokinetic parameters for calcium phosphate. |
| PD | Suter_2026 | not_relevant | 0 | 0 | The paper reports qualitative gene expression changes and cytocompatibility assays for a ceramic material, but does not provide numeric concentration-effect or dose-response parameters (e.g., EC50, Emax) for calcium phosphate. |
| PGx | Tamura_2006 | not_relevant | 0 | 0 | The paper describes a method for validating ABCG2 variants and reports protein expression levels, but does not report pharmacokinetic or pharmacodynamic parameters for calcium phosphate. |
| popPK | Tiong_2023 | irrelevant | 0 | 0 | The study investigates the effect of lanthanum carbonate on calciprotein particles (a biomarker) in CKD patients and does not report pharmacokinetic parameters for calcium phosphate. |
| popPK | Torabi_2017 | irrelevant | 0 | 0 | The paper describes the synthesis and in-vitro biological activity of calcium phosphate nanoparticles as a drug delivery vehicle, not the pharmacokinetics of calcium phosphate itself. |
| PGx | Tornero_2024 | not_relevant | 0 | 0 | The paper investigates the prevalence of a disease (chondrocalcinosis) associated with a genetic condition (HPP), not the pharmacokinetic or pharmacodynamic effects of a drug (calcium phosphate) modified by a gene variant. |
| popPK | Trechsel_1977 | irrelevant | 0 | 0 | The study investigates the effects of phosphonates on calcium homeostasis and bone mineralization in rats, not the pharmacokinetics of calcium phosphate as a drug. |
| PD | Trechsel_1977 | not_relevant | 3 | 1 | The paper describes a qualitative dose-response correlation and mentions a study with two compounds, but does not provide specific numeric PD parameters (like Emax, EC50) or detailed concentration-effect data in the provided text. |
| popPK | Vadas_1986 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on phospholipase A2 inhibition, and calcium phosphate is mentioned only as a complexing agent causing factitious inhibition, not as a subject drug for PK analysis. |
| PGx | VanItallie_2010 | not_relevant | 0 | 0 | The paper discusses the pathogenesis of gout and genetic variants affecting urate transport, but does not report pharmacogenomic effects on the PK/PD of calcium phosphate. |
| PGx | Vezzoli_2002 | not_relevant | 0 | 0 | The paper investigates the effect of a VDR gene variant on endogenous calcium-phosphate metabolism parameters (serum phosphate, BMD), not on the pharmacokinetics or pharmacodynamics of a specific drug named calcium_phosphate. |
| PGx | Vilaca_2025 | not_relevant | 0 | 0 | The paper reports the effect of ALPL gene variants on endogenous biochemical markers (ALP, phosphate, PTH) in a disease context (Hypophosphatasia), not the pharmacokinetic or pharmacodynamic parameters of the drug calcium_phosphate. |
| popPK | Villa-Bellosta_2011 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on vascular calcification and does not report pharmacokinetic parameters for calcium phosphate. |
| popPK | Vincent_2026 | irrelevant | 0 | 0 | The study evaluates the clinical efficacy of PTH(1-34) infusion on calcium and phosphate homeostasis in a disease state, not the pharmacokinetic parameters (CL, V, etc.) of calcium phosphate. |
| popPK | Vissink_1990 | irrelevant | 0 | 0 | The study investigates radiation effects on salivary gland function and composition in rats, not the pharmacokinetics of calcium phosphate. |
| PD | Vissink_1990 | not_relevant | 0 | 0 | The study explicitly states that no dose-response relationship was observed for calcium and phosphate concentrations. |
| popPK | Voetberg_1994 | irrelevant | 0 | 0 | The study investigates the metabolic effects of hormone replacement therapy on calcium and lipid levels, not the pharmacokinetics of calcium phosphate. |
| PD | Voetberg_1994 | not_relevant | 1 | 0 | The study reports a lack of dose-response for dydrogesterone on calcium indices and provides no numeric PD parameters or concentration-effect curves. |
| PGx | Wagner_2006 | not_relevant | 0 | 0 | The paper is a review of the stanniocalcin protein family and its role in mineral metabolism, not a pharmacogenomic study of a drug's PK/PD parameters. |
| PGx | Wakabayashi-Nakao_2010 | not_relevant | 0 | 0 | The paper describes a cell line engineering method for studying ABCG2 protein stability and does not report pharmacokinetic or pharmacodynamic effects of calcium phosphate. |
| popPK | Wan_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of colecalciferol (Vitamin D3), not calcium phosphate. |
| PD | Wan_2022 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for colecalciferol, not a pharmacodynamic (PD) or exposure-response model for calcium phosphate. |
| popPK | Wang_2025 | irrelevant | 0 | 0 | The paper is a review on inorganic nanomaterials for colorectal cancer and does not report pharmacokinetic parameters for calcium phosphate. |
| PD | Wang_2025 | not_relevant | 0 | 0 | The paper is a review on inorganic nanomaterials for colorectal cancer and does not report any pharmacodynamic or exposure-response data for calcium phosphate. |
| popPK | Wong_1995 | irrelevant | 0 | 0 | The paper describes calcium phosphate as a transfection method for expressing nicotinic receptors in cells, not as a drug subject to pharmacokinetic analysis. |
| PD | Wong_1995 | not_relevant | 0 | 0 | The paper reports pharmacological properties of a receptor expressed via calcium phosphate transfection, not a pharmacodynamic or exposure-response relationship for the drug calcium phosphate. |
| popPK | Wong_2026 | irrelevant | 0 | 0 | The paper is a genotoxicity study using the bacterial reverse mutation assay and does not report any pharmacokinetic parameters for calcium phosphate. |
| PD | Wong_2026 | not_relevant | 0 | 0 | The study is a genotoxicity screening (Ames test) that explicitly reports the absence of a dose-response relationship and does not provide pharmacodynamic parameters. |
| popPK | Wu_2003 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on matrix vesicle mineralization, not a pharmacokinetic study of calcium phosphate as a drug. |
| popPK | Xi_2023 | irrelevant | 0 | 0 | The study focuses on a nano-delivery system for doxorubicin where calcium phosphate is a structural coating component, not the subject drug for pharmacokinetic analysis. |
| PD | Xi_2023 | not_relevant | 1 | 0 | The paper describes a drug delivery system and mentions an in vivo pharmacodynamic evaluation (tumor inhibition) but does not provide numeric PD parameters, exposure-response data, or dose-response curves. |
| popPK | Xu_2014 | irrelevant | 0 | 0 | The paper is a virology study using calcium phosphate as a transfection reagent, not a pharmacokinetic study of calcium phosphate. |
| popPK | Yarotskyy_2007 | irrelevant | 0 | 0 | The paper is an electrophysiology study on roscovitine's effect on calcium channels, where calcium phosphate is only mentioned as a transfection method, not as the subject drug for PK analysis. |
| popPK | Ying_2007 | irrelevant | 0 | 0 | The paper describes a cell binding assay for a melanocyte-stimulating hormone analogue, and "calcium phosphate" is mentioned only as a transfection method, not as the subject drug. |
| PGx | Zeng_2019 | not_relevant | 0 | 0 | The paper investigates the association between a klotho gene polymorphism and calcium-phosphate metabolism disorders in ESRD patients, not the pharmacokinetics or pharmacodynamics of a specific drug named calcium_phosphate. |
| popPK | Zhou_2019 | irrelevant | 0 | 0 | The paper studies RIP1/RIP3 inhibitors (GSK'074) in aortic aneurysm models, and "calcium phosphate" appears only as a disease model name, not as a drug subject for pharmacokinetic analysis. |
| PGx | unknown_2005 | not_relevant | 0 | 0 | The paper reviews the clinical efficacy of Osteogenic Protein-1 for bone nonunion and does not report any pharmacogenomic effects on the PK or PD of calcium phosphate. |
| PGx | Şengün_2024 | not_relevant | 0 | 0 | The study investigates the association between VDR gene variants and dental caries, not the pharmacokinetics or pharmacodynamics of calcium phosphate. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
