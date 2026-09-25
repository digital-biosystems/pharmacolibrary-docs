<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A09A&quot;,&quot;href&quot;:&quot;atc/A09A.md&quot;},{&quot;label&quot;:&quot;hydrochloric acid&quot;}]"></div>

# hydrochloric acid

- **generic name:** hydrochloric acid
- **ATC codes:** `A09AB03`, `B05XA13`
- **DrugBank:** [DB13366](https://go.drugbank.com/drugs/DB13366)
- **groups:** investigational

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-14 16:29 | 36:57 | 0/0/0 | 1/2/0 | 0/0/0 | 376,261/8,191 | ollama / qwen3.8:27b-mtp-q8_0 | 29 | 0/0 | 28/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Tanaka_2004](drugs/drug_hydrochloric_acid/pd_Tanaka_2004_PGE2_levels.md) | Tanaka K et al., Cytotoxic synergy between indomethacin…, Biological & pharmaceutical… (2004) | [10.1248/bpb.27.1188](https://doi.org/10.1248/bpb.27.1188) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Tanaka_2004](drugs/drug_hydrochloric_acid/pd_Tanaka_2004_apoptotic_DNA_fragmentation.md) | Tanaka K et al., Cytotoxic synergy between indomethacin…, Biological & pharmaceutical… (2004) | [10.1248/bpb.27.1188](https://doi.org/10.1248/bpb.27.1188) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Tanaka_2004](drugs/drug_hydrochloric_acid/pd_Tanaka_2004_cell_viability.md) | Tanaka K et al., Cytotoxic synergy between indomethacin…, Biological & pharmaceutical… (2004) | [10.1248/bpb.27.1188](https://doi.org/10.1248/bpb.27.1188) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Ariffin_2014](drugs/drug_hydrochloric_acid/pd_Ariffin_2014_MGG_AO_EtBr.md) | Ariffin SH et al., Cytotoxicity effect of degraded and und…, BMC complementary and alter… (2014) | [10.1186/1472-6882-14-508](https://doi.org/10.1186/1472-6882-14-508) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Ariffin_2014](drugs/drug_hydrochloric_acid/pd_Ariffin_2014_MTT.md) | Ariffin SH et al., Cytotoxicity effect of degraded and und…, BMC complementary and alter… (2014) | [10.1186/1472-6882-14-508](https://doi.org/10.1186/1472-6882-14-508) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Ariffin_2014](drugs/drug_hydrochloric_acid/pd_Ariffin_2014_RT_PCR.md) | Ariffin SH et al., Cytotoxicity effect of degraded and und…, BMC complementary and alter… (2014) | [10.1186/1472-6882-14-508](https://doi.org/10.1186/1472-6882-14-508) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Ariffin_2014](drugs/drug_hydrochloric_acid/pd_Ariffin_2014_gel_electrophoresis.md) | Ariffin SH et al., Cytotoxicity effect of degraded and und…, BMC complementary and alter… (2014) | [10.1186/1472-6882-14-508](https://doi.org/10.1186/1472-6882-14-508) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Vlahopoulos_1986](drugs/drug_hydrochloric_acid/pd_Vlahopoulos_1986_gerbil_s_chorda_tympani_nerve_response_to_s.md) | Vlahopoulos V et al., Antagonism of the gerbil's sucrose tast…, The Journal of neuroscience… (1986) | [10.1523/JNEUROSCI.06-09-02611.1986](https://doi.org/10.1523/JNEUROSCI.06-09-02611.1986) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 470 matched, 99 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_10 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Archana_2016.pdf` | Archana A et al., Nutrient composition and antioxidant ac…, Food chemistry (2016) | pd | 4 | [10.1016/j.foodchem.2015.11.003](https://doi.org/10.1016/j.foodchem.2015.11.003) | [26616993](https://www.ncbi.nlm.nih.gov/pubmed/26616993) | metadata signals extractable PD data (IC50) |
| `Jia_2020.pdf` | Jia CL et al., Generation and characterization of dipe…, Food chemistry (2020) | pd | 4 | [10.1016/j.foodchem.2020.126333](https://doi.org/10.1016/j.foodchem.2020.126333) | [32151919](https://www.ncbi.nlm.nih.gov/pubmed/32151919) | metadata signals extractable PD data (IC50) |
| `Khan_2019.pdf` | Khan MY et al., Mechanism & inhibition kinetics of bioa…, Journal of traditional and… (2019) | pd | 4 | [10.1016/j.jtcme.2018.02.001](https://doi.org/10.1016/j.jtcme.2018.02.001) | [30671369](https://www.ncbi.nlm.nih.gov/pubmed/30671369) | metadata signals extractable PD data (IC50) |
| `Liu_2019.pdf` | Liu M et al., Large-scale separation of acetylcholine…, Journal of separation scien… (2019) | pd | 4 | [10.1002/jssc.201801238](https://doi.org/10.1002/jssc.201801238) | [30638299](https://www.ncbi.nlm.nih.gov/pubmed/30638299) | metadata signals extractable PD data (IC50) |
| `Sanders_1989.pdf` | Sanders SW et al., Pharmacodynamics of intravenous ranitid…, Clinical pharmacology and t… (1989) | pd | 4 | [10.1038/clpt.1989.184](https://doi.org/10.1038/clpt.1989.184) | [2582711](https://www.ncbi.nlm.nih.gov/pubmed/2582711) | metadata signals extractable PD data (EC50) |
| `Valentin_2024.pdf` | Valentin BC et al., Antibacterial and Antioxidant Activitie…, Advances in pharmacological… (2024) | pd | 4 | [10.1155/adpp/9954073](https://doi.org/10.1155/adpp/9954073) | [39640498](https://www.ncbi.nlm.nih.gov/pubmed/39640498) | metadata signals extractable PD data (IC50) |
| `Wiwattanapatapee_2025.pdf` | Wiwattanapatapee R et al., Engineered gastroretentive amorphous fe…, Pharmaceutical development… (2025) | pd | 4 | [10.1080/10837450.2025.2525265](https://doi.org/10.1080/10837450.2025.2525265) | [40566977](https://www.ncbi.nlm.nih.gov/pubmed/40566977) | metadata signals extractable PD data (IC50) |
| `Xiong_2019.pdf` | Xiong F et al., Characterization and antioxidant activi…, Carbohydrate polymers (2019) | pd | 4 | [10.1016/j.carbpol.2019.04.069](https://doi.org/10.1016/j.carbpol.2019.04.069) | [31221342](https://www.ncbi.nlm.nih.gov/pubmed/31221342) | metadata signals extractable PD data (IC50) |
| `da_2019.pdf` | da Silva Souza L et al., Harmful effects of cocaine byproduct in…, Chemosphere (2019) | pd | 4 | [10.1016/j.chemosphere.2019.07.015](https://doi.org/10.1016/j.chemosphere.2019.07.015) | [31310985](https://www.ncbi.nlm.nih.gov/pubmed/31310985) | metadata signals extractable PD data (EC50) |
| `Zhu_1998.pdf` | Zhu R et al., [Determination of clozapine and its N-d…, Se pu = Chinese journal of… (1998) | pgx | 8 | not captured | [11367762](https://www.ncbi.nlm.nih.gov/pubmed/11367762) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-09-14T16:21:02.427786+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Amer_2025 | irrelevant | 0 | 0 | The paper is a review on peptide delivery and mentions hydrochloric acid only as a component of gastric juice, not as a subject drug for PK parameter extraction. |
| PD | Amer_2025 | not_relevant | 0 | 0 | The paper is a review on peptide delivery barriers and does not report any pharmacodynamic or exposure-response data for hydrochloric acid. |
| PD | Archana_2016 | not_relevant | 0 | 0 | The paper analyzes the nutrient composition and antioxidant activity of sea urchin gonads and does not involve hydrochloric acid or any pharmacodynamic modeling. |
| PD | BRKIC_1953 | not_relevant | 0 | 0 | The paper investigates the effect of other substances on hydrochloric acid secretion, not the pharmacodynamic or exposure-response relationship of hydrochloric acid itself as a drug. |
| popPK | Bahari_2026 | irrelevant | 0 | 0 | The paper focuses on the mechanistic profiling of curcumin derivatives for COX inhibition and does not report pharmacokinetic parameters for hydrochloric acid. |
| PD | Bahari_2026 | not_relevant | 0 | 0 | The paper reports IC50 values for curcumin derivatives (C25, C27, C43) on COX/PGE2, but does not report any pharmacodynamic or exposure-response data for hydrochloric acid. |
| popPK | Ballicu_2026 | irrelevant | 0 | 0 | The paper investigates protein corona formation on nanoparticles and does not involve hydrochloric acid or pharmacokinetic parameters. |
| PD | Ballicu_2026 | not_relevant | 0 | 0 | The paper investigates protein corona formation on nanoparticles and does not report any pharmacodynamic or exposure-response relationship for hydrochloric acid. |
| PD | Bason_1992 | not_relevant | 4 | 2 | The paper compares in vitro and in vivo dose-response curves for hydrochloric acid and reports correlation coefficients, but it does not provide the specific numeric effect values or curve parameters (like Emax or EC50) required to extract a quantitative PD relationship. |
| popPK | Bayoumy_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for thioguanine, not hydrochloric acid. |
| PD | Bayoumy_2025 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for thioguanine but does not include any pharmacodynamic (PD) or exposure-response analysis, nor does it report numeric PD parameters. |
| PD | Ben_2021 | not_relevant | 0 | 0 | The paper reports the synthesis of triazole derivatives and a single IC50 value for a specific compound, but does not report a pharmacodynamic or exposure-response relationship for hydrochloric acid. |
| PD | Bratskaya_2019 | not_relevant | 0 | 0 | The paper describes the chemical synthesis and material properties of chitosan gels, not a pharmacodynamic or exposure-response relationship for hydrochloric acid as a drug. |
| PGx | Chen_2024 | not_relevant | 0 | 0 | The paper investigates the mechanism of paclitaxel resistance via pH modulation and gene expression, not the pharmacokinetics or pharmacodynamics of hydrochloric acid. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | The paper describes a computational platform for antisense oligonucleotide design and does not report pharmacokinetic parameters for hydrochloric acid. |
| PD | Chen_2026 | not_relevant | 0 | 0 | The paper describes a computational platform for ASO design and reports qualitative efficacy in animal models, but does not provide numeric PD parameters or exposure-response relationships for hydrochloric acid. |
| PGx | Chernin_2004 | not_relevant | 0 | 0 | The paper describes clinicopathogenetic variants of chronic gastritis and physiological parameters (acidity, histamine) but does not report pharmacogenomic effects on the PK/PD of hydrochloric acid as a drug. |
| popPK | Chongwilaikasem_2024 | irrelevant | 0 | 0 | The paper is a food chemistry study on the extraction and in vitro biological activity of roselle extracts, where hydrochloric acid is used only as an extraction solvent, not as a subject drug for pharmacokinetic analysis. |
| PD | Chongwilaikasem_2024 | not_relevant | 0 | 0 | The paper reports in vitro antioxidant and antibacterial activities (IC50, MIC) for roselle extracts, not a pharmacodynamic exposure-response relationship for hydrochloric acid. |
| popPK | Collins_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of midazolam (a probe drug) and efavirenz, not hydrochloric acid, which is only mentioned as a reagent in the sample preparation method. |
| PD | Collins_2025 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for midazolam clearance affected by efavirenz, but it does not report a pharmacodynamic (PD) model or exposure-response relationship for hydrochloric acid (which is only used as a reagent in sample preparation). |
| popPK | Daneshmend_1988 | irrelevant | 0 | 0 | The paper is a review of ketoconazole pharmacokinetics, and hydrochloric acid is only mentioned as a factor affecting absorption, not as the subject drug. |
| popPK | Dang_2009 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cantharidin, not hydrochloric acid, which is only used as a reagent for protein precipitation. |
| popPK | Devrimci_2026 | irrelevant | 0 | 0 | The study is an in vitro dental materials investigation where hydrochloric acid is used as a reagent for microabrasion, not as a subject drug for pharmacokinetic analysis. |
| popPK | Fajana_2026 | irrelevant | 0 | 0 | The paper is an in vitro and in silico study on plant extracts for hypertension and does not report pharmacokinetic parameters for hydrochloric acid. |
| PD | Fajana_2026 | not_relevant | 0 | 0 | The paper evaluates the pharmacological activity of plant extracts (Ficus exasperata) using in vitro assays (IC50) and in silico docking, not the pharmacodynamics of hydrochloric acid. |
| PD | Fisher_1975 | not_relevant | 0 | 0 | The paper states that 5% hydrochloric acid had no effect on epidermal mitosis and does not provide any numeric PD parameters or dose-response data for it. |
| popPK | Fleckenstein_2026 | irrelevant | 0 | 0 | The paper describes the development of biosensors for trimethoprim and tetracycline, not the pharmacokinetics of hydrochloric acid. |
| PD | Fleckenstein_2026 | not_relevant | 0 | 0 | The paper reports the characterization of fluorescent biosensors for trimethoprim and tetracyclines (binding kinetics, Kd), not a pharmacodynamic exposure-response relationship for hydrochloric acid. |
| PGx | Fuqua_2018 | not_relevant | 0 | 0 | The paper studies iron metabolism in mice and does not report pharmacokinetic or pharmacodynamic effects of hydrochloric acid. |
| PD | Gamal_2019 | not_relevant | 0 | 0 | The paper reports IC50 values for melanin (a natural pigment) in cell lines, not for hydrochloric acid, which is used only as a reagent for extraction. |
| PD | Gopi_2017 | not_relevant | 0 | 0 | The paper investigates phospholipid levels in a rotenone-induced Parkinson's disease model and does not report any pharmacodynamic or exposure-response relationship for hydrochloric acid. |
| popPK | Hara_2026 | irrelevant | 0 | 0 | The paper focuses on the identification of KDM5B inhibitors (JB-157 and JB-161) and their antitumor effects, with no pharmacokinetic data or parameters reported for hydrochloric acid. |
| PD | Hara_2026 | not_relevant | 4 | 3 | The paper reports IC50 and GI50 values for KDM5B inhibitors (JB-157, JB-161), which are dose-response parameters, but the question specifically asks about hydrochloric acid, which is only mentioned as a reagent for pH adjustment in the synthesis section. |
| popPK | Imani_2025 | irrelevant | 0 | 0 | The paper is a materials science study on wound dressings and lawsone extraction, where hydrochloric acid is used only as a reagent, not as a subject drug for pharmacokinetic analysis. |
| PD | Imani_2025 | not_relevant | 0 | 0 | The paper describes the extraction of lawsone and the fabrication of a wound dressing; it does not report any pharmacodynamic or exposure-response analysis for hydrochloric acid (which is used only as a reagent). |
| popPK | Ireland_2026 | irrelevant | 0 | 0 | The paper is a behavioral toxicology study in planarians and does not report pharmacokinetic parameters for hydrochloric acid. |
| PD | Ireland_2026 | not_relevant | 0 | 0 | The paper does not study hydrochloric acid; it evaluates the seizurogenic potential of various neuroactive chemicals and pesticides in planarians. |
| PD | Ishida_1992 | not_relevant | 1 | 0 | The paper describes a qualitative physiological response to hydrochloric acid instillation (increased airway responsiveness) but does not provide numeric dose-response parameters, concentration-effect curves, or PD model fits for hydrochloric acid. |
| popPK | Jesudason_2026 | irrelevant | 0 | 0 | The paper focuses on SHIP1 ligands for Alzheimer's disease and does not involve hydrochloric acid as a subject drug or report any pharmacokinetic parameters. |
| PD | Jesudason_2026 | not_relevant | 1 | 0 | The paper describes qualitative pharmacodynamic effects (gene expression, IL-1β levels) and target engagement but does not provide numeric concentration-effect data, dose-response curves, or PD parameters (Emax, EC50) for hydrochloric acid or the specific compound. |
| PD | Jia_2020 | not_relevant | 0 | 0 | The paper focuses on the generation and characterization of DPP-IV inhibitory peptides from whey proteins, not on the pharmacodynamics of hydrochloric acid. |
| popPK | Jia_2023 | irrelevant | 0 | 0 | The paper is a review on traditional Chinese medications for gastric mucosal injury, and hydrochloric acid is mentioned only as a physiological irritant, not as a subject drug for pharmacokinetic analysis. |
| PD | Jia_2023 | not_relevant | 1 | 0 | The paper is a narrative review of traditional Chinese medications for gastric mucosal injury and does not report any original pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for hydrochloric acid or any specific drug. |
| PD | Kataria_2019 | not_relevant | 0 | 0 | The paper reports IC50 values for chlorogenic acid derivatives, not hydrochloric acid, and contains no pharmacodynamic modeling or exposure-response analysis for HCl. |
| PD | Khan_2019 | not_relevant | 0 | 0 | The paper focuses on ACE inhibition by plant fractions and does not report any pharmacodynamic or exposure-response data for hydrochloric acid. |
| popPK | Khandave_2012 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of losartan, and hydrochloric acid is only mentioned as a dissolution medium, not as the subject drug. |
| popPK | Khlifi_2026 | irrelevant | 0 | 0 | The paper studies a zinc pyrazole complex, not hydrochloric acid, and contains no pharmacokinetic parameters for the target drug. |
| PD | Khlifi_2026 | not_relevant | 0 | 0 | The paper studies a zinc pyrazole complex, not hydrochloric acid, and reports only qualitative antimicrobial data (MIC/MBC) without a formal PD model or derivable concentration-effect curve parameters. |
| PD | Konturek_1980 | not_relevant | 4 | 2 | The paper describes a dose-response interaction between PGI2 and secretin (mixed inhibition) but does not provide numeric PD parameters (Emax, EC50) or extractable concentration-effect curves for hydrochloric acid. |
| PGx | Köppel_1989 | not_relevant | 0 | 0 | The paper studies the pharmacogenomics of ajmaline metabolism, not hydrochloric acid (which is used only as a reagent for hydrolysis). |
| popPK | Lad_2026 | irrelevant | 0 | 0 | The paper is a phytochemical and in-vitro bioactivity study of Eucalyptus globulus essential oil, not a pharmacokinetic study of hydrochloric acid. |
| PD | Lad_2026 | not_relevant | 0 | 0 | The paper studies Eucalyptus globulus essential oil, not hydrochloric acid, and reports in vitro bioassays (antioxidant, antibacterial) rather than a pharmacodynamic exposure-response relationship for the specified drug. |
| popPK | Li_2012 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of albendazole sulfoxide (ABZSO), not hydrochloric acid, which is the target drug. |
| popPK | Li_2013 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Huangqin Tang constituents, and hydrochloric acid is used only as a reagent for sample preparation, not as the subject drug. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper is a microbiology study on antifungal compounds from Bacillus velezensis, where hydrochloric acid is used only as a reagent for precipitation, not as a subject drug for pharmacokinetic analysis. |
| PD | Li_2026 | not_relevant | 0 | 0 | The paper reports the EC50 of a specific antifungal compound (marihysin B) against a fungal pathogen, not a pharmacodynamic relationship for hydrochloric acid (which was used only as a precipitation reagent). |
| PD | Liu_2019 | not_relevant | 0 | 0 | The paper describes a separation method for acetylcholinesterase inhibitors and does not report any pharmacodynamic or exposure-response data for hydrochloric acid. |
| popPK | M_2026 | irrelevant | 0 | 0 | The paper focuses on the synthesis and antioxidant activity of cyclic dipeptides and does not involve hydrochloric acid as a subject drug or report any pharmacokinetic parameters. |
| PD | M_2026 | not_relevant | 0 | 0 | The paper studies the synthesis and antioxidant activity of cyclic dipeptides, not the pharmacodynamics of hydrochloric acid. |
| PD | Maldonado-Sanabria_2024 | not_relevant | 0 | 0 | The paper reports the antioxidant activity (IC50) of a synthesized chemical compound, not a pharmacodynamic or exposure-response relationship for hydrochloric acid. |
| popPK | Matharoo_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of adapalene, not hydrochloric acid. |
| popPK | Matsumura_2015 | irrelevant | 0 | 0 | The paper is a chemistry study on polymer synthesis where hydrochloric acid is used as a reagent, not a pharmacokinetic study of the drug. |
| PD | Matsumura_2015 | not_relevant | 0 | 0 | The paper describes the chemical synthesis of photoluminescent polymers using hydrochloric acid as a reagent, not a pharmacodynamic or exposure-response study. |
| popPK | Morcos_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of copanlisib, not hydrochloric acid, which is only mentioned as a formulation component. |
| PD | Morcos_2023 | not_relevant | 0 | 0 | The paper focuses on PK modeling (PBPK and population PK) to support pediatric dosing and does not report any pharmacodynamic (PD) or exposure-response analysis with numeric PD parameters. |
| popPK | Niu_2026 | irrelevant | 0 | 0 | The paper investigates renal fibrosis and RGS19 using nanoparticles, and hydrochloric acid is only mentioned as a reagent for histological staining, not as a subject drug for pharmacokinetic analysis. |
| PD | Niu_2026 | not_relevant | 0 | 0 | The paper investigates the role of the gene RGS19 in renal fibrosis using siRNA and nanoparticles; it does not report a pharmacodynamic or exposure-response relationship for hydrochloric acid. |
| popPK | Oliveira_2022 | irrelevant | 0 | 0 | The paper is a materials science study on dental ceramics using hydrochloric acid as a corrosive agent, not a pharmacokinetic study of the drug. |
| PD | Oliveira_2022 | not_relevant | 0 | 0 | The paper is a materials science study evaluating the physical degradation of dental ceramics by hydrochloric acid, not a pharmacodynamic study of a drug. |
| PGx | Onyutha_2023 | not_relevant | 0 | 0 | The paper investigates the coagulation efficacy of mango seed kernels in water treatment, not the pharmacokinetics or pharmacodynamics of hydrochloric acid in humans. |
| popPK | Parlocha_2026 | irrelevant | 0 | 0 | The paper is an in-vitro study on the ACE-1 inhibitory activity of a plant extract and does not involve hydrochloric acid or pharmacokinetic parameters. |
| PD | Parlocha_2026 | not_relevant | 0 | 0 | The paper investigates the ACE-1 inhibitory activity of a plant extract (Coleus scutellarioides), not hydrochloric acid. |
| PD | Polsky_2020 | not_relevant | 0 | 0 | The paper describes an analytical interference (pseudohypernatremia) caused by drug presence in the sample, not a pharmacodynamic effect of hydrochloric acid or the drugs on a biological target. |
| popPK | Richter_2024 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on ion channels in gastric cells, not a pharmacokinetic study of hydrochloric acid. |
| popPK | Sanders_1989 | irrelevant | 0 | 0 | The study focuses on ranitidine, not hydrochloric acid, and provides no PK parameters for the target drug. |
| PD | Sanders_1989 | not_relevant | 0 | 0 | The paper investigates ranitidine, not hydrochloric acid, and does not report a pharmacodynamic model for the drug specified in the query. |
| popPK | Sarria_2002 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study on muscarinic receptors in human bronchus and does not report pharmacokinetic parameters for hydrochloric acid. |
| popPK | Shaik_2026 | irrelevant | 0 | 0 | The paper focuses on the analytical characterization and in-silico ADME prediction of asciminib degradation products, not the pharmacokinetics of hydrochloric acid. |
| PD | Shaik_2026 | not_relevant | 0 | 0 | The paper is an analytical chemistry study focusing on the development of an HPLC method and characterization of degradation products of asciminib; it does not report any pharmacodynamic or exposure-response data. |
| PD | Song_2019 | not_relevant | 0 | 0 | The paper investigates the anti-ulcer effect of a herbal extract (Gallarhois) in an ethanol/HCl-induced injury model, not the pharmacodynamics of hydrochloric acid itself, and does not report any exposure-response or dose-response parameters for HCl. |
| PD | Sousa_2021 | not_relevant | 0 | 0 | The paper reports phytochemical screening and in vitro antioxidant/cytotoxicity assays for plant extracts, not a pharmacodynamic or exposure-response relationship for hydrochloric acid. |
| popPK | Steiger-Ronay_2020 | irrelevant | 0 | 0 | The study is an in vitro investigation of enamel erosion using hydrochloric acid as a reagent, not a pharmacokinetic study of the drug. |
| popPK | Suleymanov_2026 | irrelevant | 0 | 0 | The paper is an analytical method validation study for levofloxacin, and hydrochloric acid is used only as a solvent/reagent, not as the subject drug for pharmacokinetic analysis. |
| PD | Suleymanov_2026 | not_relevant | 0 | 0 | The paper describes the development and validation of a spectrophotometric analytical method for levofloxacin in rat plasma; it does not report any pharmacodynamic or exposure-response relationship for hydrochloric acid or any other drug. |
| popPK | Tanaka_2001 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of bromvalerylurea, and hydrochloric acid is only mentioned as a reagent for sample preparation. |
| popPK | Thanishka_2026 | irrelevant | 0 | 0 | The paper is an in vitro formulation study of a herbal suppository containing Peperomia pellucida and does not report pharmacokinetic parameters for hydrochloric acid. |
| popPK | Tharmalingam_2026 | irrelevant | 0 | 0 | The paper studies the antimicrobial mechanism of candesartan cilexetil against MRSA, not the pharmacokinetics of hydrochloric acid. |
| PD | Tong_2017 | not_relevant | 0 | 0 | The paper focuses on the formulation and PK of Desvenlafaxine nanoparticles; hydrochloric acid is only mentioned as a reagent in the biochemical assay method, not as a drug with a PD relationship. |
| popPK | Torres_2026 | irrelevant | 0 | 0 | The paper describes an AI method for peptide antibiotic optimization and does not report pharmacokinetic parameters for hydrochloric acid. |
| PD | Torres_2026 | not_relevant | 0 | 0 | The paper focuses on AI-driven peptide design and reports MICs (antimicrobial potency) and in vivo efficacy, but does not contain pharmacokinetic data or a pharmacodynamic exposure-response model for hydrochloric acid. |
| popPK | Tucker_2025 | irrelevant | 0 | 0 | The paper studies a chitosan hydrogel and polylactic acid microparticle delivery system for fosfomycin, not the pharmacokinetics of hydrochloric acid. |
| PD | Tucker_2025 | not_relevant | 0 | 0 | The paper evaluates the antimicrobial efficacy of a drug delivery system (chitosan hydrogel + PLA microparticles) using categorical comparisons of bacterial load and zone of inhibition, but does not report a quantitative exposure-response or dose-response relationship with numeric PD parameters (e.g., Emax, EC50) for hydrochloric acid or any other drug. |
| popPK | Ullah_2026 | irrelevant | 0 | 0 | The paper is a phytochemical and pharmacological study of the plant Fingerhuthia africana, not a pharmacokinetic study of hydrochloric acid. |
| PD | Valentin_2024 | not_relevant | 0 | 0 | The paper investigates the antibacterial, antioxidant, and toxicological properties of plant extracts, not the pharmacodynamics of hydrochloric acid. |
| popPK | Wang_1985 | irrelevant | 0 | 0 | The study investigates vasopressin secretion in dogs, and hydrochloric acid is used only as a stimulus agent, not as the subject drug for pharmacokinetic analysis. |
| popPK | Wang_2008 | irrelevant | 0 | 0 | The paper investigates the chemical composition and biotoxicity of chlorobenzene photodegradation products, not the pharmacokinetics of hydrochloric acid. |
| PD | Wang_2008 | not_relevant | 0 | 0 | The paper reports an EC50 for the total gaseous exhaust mixture, not for hydrochloric acid specifically, and does not provide a dose-response curve or specific PD parameters for HCl. |
| popPK | Weiss_2025 | irrelevant | 0 | 0 | The paper describes an in vitro aerosol exposure system (NAVETTA) for lung toxicity studies and does not report pharmacokinetic parameters for hydrochloric acid. |
| PD | Weiss_2025 | not_relevant | 0 | 0 | The paper describes an in vitro aerosol exposure system (NAVETTA) and reports qualitative cellular responses (viability, IL-8 secretion) to nanoparticles, but it does not report a pharmacodynamic model or numeric PD parameters (e.g., Emax, EC50) for hydrochloric acid or any other drug. |
| PD | Wiwattanapatapee_2025 | not_relevant | 0 | 0 | The paper focuses on the formulation and bioavailability of ferulate, not on the pharmacodynamics of hydrochloric acid. |
| PD | Xiong_2019 | not_relevant | 0 | 0 | The paper focuses on the characterization and antioxidant activity of polysaccharides from Passiflora edulis peel, not on the pharmacodynamics of hydrochloric acid. |
| popPK | Ye_2024 | irrelevant | 0 | 0 | The study focuses on piperacillin/tazobactam, not hydrochloric acid. |
| PD | Ye_2024 | not_relevant | 0 | 0 | The paper evaluates PK/PD targets (fT&gt;MIC) for piperacillin/tazobactam, not hydrochloric acid, and reports no numeric PD parameters for the queried drug. |
| PD | Zeballos_1995 | not_relevant | 0 | 0 | The paper describes the pharmacokinetics of nitrate and its use as a biomarker for NO, but does not report a pharmacodynamic exposure-response or dose-response relationship for hydrochloric acid (which is used only as a reagent for analysis). |
| popPK | Zhang_2010 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cinnamic acid, not hydrochloric acid, which is only used as a reagent for sample preparation. |
| PD | Zhao_2021 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (Ki) and PK parameters, but does not provide an exposure-response or dose-response relationship linking drug concentration to a pharmacodynamic effect with numeric PD parameters (e.g., Emax, EC50). |
| PGx | Zhou_2024 | not_relevant | 0 | 0 | The paper evaluates the pharmacokinetics of a novel antibiotic (PMTM) but does not report any pharmacogenomic effects or gene variants influencing its parameters. |
| PGx | Zhu_1998 | not_relevant | 0 | 0 | The paper describes an analytical method for clozapine and does not report pharmacogenomic effects on hydrochloric acid. |
| popPK | da_2013 | irrelevant | 0 | 0 | The paper studies the antioxidant and mutagenic properties of a cashew apple nectar beverage, not the pharmacokinetics of hydrochloric acid. |
| PD | da_2013 | not_relevant | 0 | 0 | The paper evaluates antioxidant and mutagenic activities of a beverage, not the pharmacodynamics of hydrochloric acid. |
| popPK | da_2019 | irrelevant | 0 | 0 | The paper concerns the reproductive effects of a cocaine byproduct in sea urchins and does not report pharmacokinetic parameters for hydrochloric acid. |
| PD | da_2019 | not_relevant | 0 | 0 | The paper investigates the effects of cocaine byproducts and ocean acidification on sea urchins, not the pharmacodynamics of hydrochloric acid in a biological system. |
| popPK | van_2025 | irrelevant | 0 | 0 | The paper describes a chromatographic method for antibody glycoform characterization and does not report pharmacokinetic parameters for hydrochloric acid. |
| PD | van_2025 | not_relevant | 0 | 0 | The paper describes a chromatographic method for antibody glycoform characterization and contains no pharmacodynamic or exposure-response data for hydrochloric acid. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
