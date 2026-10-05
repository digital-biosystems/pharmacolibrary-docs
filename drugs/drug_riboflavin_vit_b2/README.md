<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A11H&quot;,&quot;href&quot;:&quot;atc/A11H.md&quot;},{&quot;label&quot;:&quot;riboflavin (vit B2)&quot;}]"></div>

# riboflavin (vit B2)

- **generic name:** riboflavin (vit B2)
- **ATC codes:** `A11HA04`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Riboflavin, a B vitamin, is used to treat ariboflavinosis, a deficiency of this vitamin. It is listed among WHO essential medicines and is available as a plain vitamin preparation, so it is widely used.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q130365](https://www.wikidata.org/wiki/Q130365) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 08:36 | 6:09 | 0/0/0 | 0/0/0 | 0/0/0 | 221,849/6,540 | ollama / qwen3.8:27b-mtp-q8_0 | 24 | 11/13 | 23/1 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 70 matched, 107 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zempleni_1996.pdf` | Zempleni J et al., Pharmacokinetics of orally and intraven…, The American journal of cli… (1996) | popPK | 10 | [10.1093/ajcn/63.1.54](https://doi.org/10.1093/ajcn/63.1.54) | [8604671](https://pubmed.ncbi.nlm.nih.gov/8604671) | The study reports a two-compartment PK model for riboflavin in humans with specific values for absorption half-life (1.1 h) and maximal absorption (27 mg), but lacks explicit numeric values for clearance, volume, or rate constants in the provided text. |
| `Upadhyay_2013.pdf` | Upadhyay MS et al., Glyceryl monooleate-coated bioadhesive…, Drug delivery and translati… (2013) | popPK | 8 | [10.1007/s13346-013-0143-1](https://doi.org/10.1007/s13346-013-0143-1) | [25788130](https://pubmed.ncbi.nlm.nih.gov/25788130) | The study reports a pharmacokinetic parameter (relative bioavailability Fr = 178.47%) for riboflavin, but lacks standard disposition parameters like clearance, volume, or half-life. |

<sub>queue written 2026-10-05T08:36:17.821480+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aleman_1967 | irrelevant | 0 | 0 | no_text gate: only 51 chars of text extracted (&lt; 400) |
| popPK | Averianova_2020 | irrelevant | 0 | 0 | The paper is a review of microbial production and biosynthesis of riboflavin, not a pharmacokinetic study of riboflavin disposition in humans or animals. |
| popPK | BENZIMAN_1964 | irrelevant | 0 | 0 | The paper is an in-vitro enzymology study of malic dehydrogenase in bacteria, not a pharmacokinetic study of riboflavin. |
| popPK | Batista_2019 | irrelevant | 0 | 0 | The study is an ex-vivo imaging analysis of corneal collagen crosslinking outcomes, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, ka) for riboflavin. |
| popPK | Beztsinna_2016 | irrelevant | 1 | 0 | The study focuses on the synthesis and targeting of riboflavin derivatives in liposomes, reporting only qualitative biodistribution and uptake data without quantitative PK parameters for riboflavin itself. |
| popPK | Cashman_1993 | irrelevant | 0 | 0 | The study investigates the enantioselective S-oxygenation of cimetidine, not the pharmacokinetics of riboflavin. |
| popPK | Catucci_2018 | irrelevant | 0 | 0 | The study investigates the metabolism of tamoxifen, clomiphene, and GSK5182 by FMO3, and does not involve riboflavin (vitamin B2) as the subject drug. |
| popPK | Chanteux_2020 | irrelevant | 0 | 0 | The study focuses on CYP3A4/5 inhibition using azamulin in human hepatocytes and does not involve riboflavin or its pharmacokinetics. |
| popPK | Chiba_1988 | irrelevant | 0 | 0 | The study investigates the metabolism of MPTP in mice and does not report pharmacokinetic parameters for riboflavin. |
| popPK | Chiou_1986 | irrelevant | 2 | 0 | The paper is a methodological review that cites literature data for riboflavin to validate a renal clearance model, but it does not report original quantitative PK parameters (CL, V, etc.) for riboflavin in the provided text. |
| popPK | Chungi_1989 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of sulfasalazine metabolites, with riboflavin serving only as a co-administered agent to test for interaction effects, and no PK parameters for riboflavin itself are reported. |
| popPK | Criado_2004 | irrelevant | 0 | 0 | The study is an in-vitro photochemical investigation of riboflavin as a photosensitizer for drug degradation, not a pharmacokinetic study of riboflavin disposition. |
| popPK | DE_1955 | irrelevant | 0 | 0 | no_text gate: only 33 chars of text extracted (&lt; 400) |
| popPK | Dadara_2024 | irrelevant | 0 | 0 | The study characterizes a riboflavin transporter in Schistosoma mansoni parasites and measures uptake in vitro, but does not report pharmacokinetic parameters (CL, V, ka, etc.) for riboflavin in a host species. |
| popPK | Dalmadi_2003 | irrelevant | 0 | 0 | The study investigates the in vitro metabolism of tolperisone, not the pharmacokinetics of riboflavin. |
| popPK | Dancis_1985 | irrelevant | 2 | 2 | The study is an in vitro placental perfusion model reporting transfer indices and rates, not systemic population pharmacokinetic parameters (CL, V, ka) for the drug in a subject. |
| popPK | Dancis_1988 | irrelevant | 2 | 1 | The study reports placental transfer indices and uptake percentages rather than systemic pharmacokinetic parameters (CL, V, ka) for the subject drug. |
| popPK | Dancis_1992 | irrelevant | 0 | 0 | The study focuses on retinol (Vitamin A) pharmacokinetics, and riboflavin is only mentioned as a comparator for transfer index values from previous studies. |
| popPK | Darguzyte_2020 | irrelevant | 0 | 0 | The paper is a review on riboflavin-targeted drug delivery and does not report quantitative pharmacokinetic parameters for riboflavin. |
| popPK | Deme_2026 | irrelevant | 0 | 0 | The study is a metabolomics analysis of renal aging in mice and humans, focusing on metabolic pathways and epigenetic cofactors, and does not report pharmacokinetic parameters for riboflavin. |
| popPK | Deng_2024 | irrelevant | 2 | 1 | The study focuses on riboflavin as a biomarker for BCRP activity and reports only a relative change (1.20-fold) in plasma concentration due to ticagrelor, without providing standard quantitative PK parameters like clearance, volume, or half-life for riboflavin itself. |
| popPK | Dhuria_2021 | irrelevant | 0 | 0 | The paper is a review on non-CYP metabolism prediction and does not report specific pharmacokinetic parameters for riboflavin. |
| popPK | Eagling_1994 | irrelevant | 0 | 0 | The study focuses on the metabolism of zidovudine, not riboflavin, and riboflavin is not the subject drug. |
| popPK | Fedorovych_2023 | irrelevant | 0 | 0 | The paper describes the microbial production of flavin mononucleotide (FMN) in yeast, not the pharmacokinetics of riboflavin in a biological subject. |
| popPK | Fitzgerald_1980 | irrelevant | 0 | 0 | The paper describes protein aggregation in cyanobacteria and algae, not the pharmacokinetics of riboflavin in a biological subject. |
| popPK | Foti_2016 | irrelevant | 0 | 0 | The paper is a general review introduction on drug metabolism enzymes and does not report specific pharmacokinetic parameters for riboflavin. |
| popPK | Germain_2003 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of diallyl disulphide, not riboflavin. |
| popPK | Goodrich_2000 | irrelevant | 0 | 0 | The paper focuses on the use of riboflavin for pathogen inactivation in blood products and does not report pharmacokinetic parameters for riboflavin itself. |
| popPK | Grant_2021 | irrelevant | 0 | 0 | The study investigates lung injury and epithelial sodium channel activity in mice, with no pharmacokinetic analysis of riboflavin. |
| popPK | Guo_2017 | irrelevant | 0 | 0 | The study focuses on doxorubicin delivery using riboflavin-based nanocarriers, not the pharmacokinetics of riboflavin itself. |
| popPK | Gutiérrez-Preciado_2015 | irrelevant | 0 | 0 | The paper is a genomic and microbiological study of bacterial riboflavin transporters, not a pharmacokinetic study of riboflavin disposition in humans or animals. |
| popPK | HENDERSON_1955 | irrelevant | 0 | 0 | no_text gate: only 62 chars of text extracted (&lt; 400) |
| popPK | Hukkanen_2005 | irrelevant | 0 | 0 | The paper is a review of nicotine pharmacokinetics and does not contain data for riboflavin. |
| popPK | Inouye_1994 | irrelevant | 0 | 0 | The paper describes the purification and characterization of a bacterial enzyme (NAD(P)H-flavin oxidoreductase) and does not report pharmacokinetic parameters for riboflavin. |
| popPK | Islam_2023 | irrelevant | 0 | 0 | The paper is a network pharmacology study on Linum usitatissimum for ovarian cancer where riboflavin is listed as a phytochemical target, but no pharmacokinetic parameters are reported. |
| popPK | Johansson_2013 | irrelevant | 0 | 0 | The study assesses hemostatic function of platelets treated with riboflavin, not the pharmacokinetics of riboflavin itself. |
| popPK | Jones_2017 | irrelevant | 0 | 0 | The study focuses on FMO substrates (e.g., imipramine, itopride) and does not report pharmacokinetic parameters for riboflavin. |
| popPK | Kaufman_2016 | irrelevant | 0 | 0 | no_text gate: only 246 chars of text extracted (&lt; 400) |
| popPK | Kesseli_2021 | irrelevant | 0 | 0 | The study focuses on liver perfusion biomarkers (specifically FMN) in a nonhuman primate model and does not report pharmacokinetic parameters for riboflavin. |
| popPK | Knight_1967 | irrelevant | 0 | 0 | no_text gate: only 46 chars of text extracted (&lt; 400) |
| popPK | Kodentsova_1995 | irrelevant | 0 | 0 | The study reports on vitamin B2 deficiency and tissue/plasma content levels, not quantitative pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Kubo_2017 | irrelevant | 2 | 0 | The study focuses on mechanistic transport kinetics (permeability clearance, Km) at the blood-retina barrier in rats and in vitro, rather than reporting systemic population pharmacokinetic parameters (CL, V, ka) for riboflavin. |
| popPK | LUSCOMBE_1956 | irrelevant | 0 | 0 | no_text gate: only 23 chars of text extracted (&lt; 400) |
| popPK | Lafaye_2022 | irrelevant | 0 | 0 | The paper is a structural biology and photophysics study of a flavoprotein (miniSOG) using riboflavin as a chromophore, not a pharmacokinetic study of riboflavin disposition. |
| popPK | Lee_1974 | irrelevant | 0 | 0 | no_text gate: only 15 chars of text extracted (&lt; 400) |
| popPK | Lickteig_2009 | irrelevant | 0 | 0 | The study characterizes the enzyme FMO3 in dogs and humans using benzydamine and sulindac as substrates, and does not report pharmacokinetic parameters for riboflavin. |
| popPK | Lienhart_2013 | irrelevant | 0 | 0 | The paper is a review of the human flavoproteome and does not report any pharmacokinetic parameters for riboflavin. |
| popPK | MAYNARD_1952 | irrelevant | 0 | 0 | no_text gate: only 31 chars of text extracted (&lt; 400) |
| popPK | MODI_1956 | irrelevant | 0 | 0 | The paper analyzes the chemical forms of riboflavin in milk across different species, not its pharmacokinetic disposition parameters. |
| popPK | Magner_2024 | irrelevant | 0 | 0 | The paper investigates the ecological and chemical role of riboflavin in plant nectar, not its pharmacokinetics in an animal or human host. |
| popPK | McAnulty_2014 | irrelevant | 0 | 0 | The study is an in-vitro microbiology paper on flavin secretion by E. coli, not a pharmacokinetic study of riboflavin in humans or animals. |
| popPK | Merrill_1980 | irrelevant | 0 | 0 | no_text gate: only 30 chars of text extracted (&lt; 400) |
| popPK | Merrill_1984 | irrelevant | 0 | 0 | The study analyzes vitamin B-6 metabolism in human liver and uses riboflavin 5'-phosphate only as a cofactor, not as the subject drug for PK parameter estimation. |
| popPK | Miller_1981 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of egg yolk riboflavin-binding protein (a carrier protein), not the disposition parameters of riboflavin itself. |
| popPK | Miller_1982 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of riboflavin-binding protein (RBP), not the drug riboflavin (vitamin B2) itself. |
| popPK | Miller_1982_2 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of riboflavin-binding protein (RBP) and phosvitin in chickens, not the drug riboflavin (vitamin B2) itself. |
| popPK | Mosley-Kellum_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ibuprofen, with riboflavin serving only as a photoinitiator in the 3D printing formulation. |
| popPK | Moyano_2014 | irrelevant | 0 | 0 | The paper is a microbiology study on Pseudomonas aeruginosa flavodoxin and oxidative stress, not a pharmacokinetic study of riboflavin. |
| popPK | Mulkey_1993 | irrelevant | 0 | 0 | The paper is a review of thallium toxicity and only mentions riboflavin as a potential target for toxic interaction, providing no pharmacokinetic parameters for riboflavin. |
| popPK | Naghipour_2021 | irrelevant | 0 | 0 | The paper is a review of trimethylamine N-oxide (TMAO) and its role in cardiovascular disease, with no data or parameters for riboflavin (vitamin B2). |
| popPK | Nielsen_1983 | irrelevant | 0 | 0 | The study is a chemical analysis of riboflavin phosphates using HPLC and does not report pharmacokinetic parameters. |
| popPK | Nnane_2001 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for trimethylamine (TMA), not riboflavin (vitamin B2). |
| popPK | Nysten_2024 | irrelevant | 0 | 0 | The paper investigates riboflavin biosynthesis and uptake in fungi (Candida species) as a drug target, not the pharmacokinetics of riboflavin in humans or animals. |
| popPK | Ozbey_2023 | irrelevant | 0 | 0 | The paper is a review of PBPK modeling for non-CYP enzymes and does not report specific quantitative pharmacokinetic parameters for riboflavin. |
| popPK | Park_2017 | irrelevant | 0 | 0 | The paper is a structural and mechanistic study of tetracycline-resistance enzymes (Tet destructases) and does not involve the pharmacokinetics of riboflavin. |
| popPK | Potter-Baker_2014 | irrelevant | 0 | 0 | The paper is a materials science study on microelectrode coatings, using riboflavin only as a reagent in an in-vitro antioxidant assay, not as a subject drug for pharmacokinetic analysis. |
| popPK | Ribes_2021 | irrelevant | 0 | 0 | The paper focuses on the structural design and self-assembly of riboflavin-conjugated nanoparticles for photodynamic therapy, not on the pharmacokinetic parameters of riboflavin itself. |
| popPK | Rivlin_1970 | irrelevant | 0 | 0 | no_text gate: only 21 chars of text extracted (&lt; 400) |
| popPK | Rohira_2024 | irrelevant | 0 | 0 | The study focuses on corneal collagen crosslinking efficacy and tissue penetration/uptake in rabbits, not on systemic pharmacokinetic parameters (CL, V, t1/2) for riboflavin. |
| popPK | Sainkhuu_2016 | irrelevant | 0 | 0 | The study investigates the induction of FMO enzymes by a mushroom extract and uses carbendazim as a probe drug, with no pharmacokinetic data reported for riboflavin. |
| popPK | Sato_2004 | irrelevant | 4 | 0 | The study reports qualitative trends in urinary excretion half-life but does not provide specific numeric PK parameter values (CL, V, ka) in the evidence. |
| popPK | Schall_2020 | irrelevant | 0 | 0 | The paper is a computational analysis of the flavoproteome in Arabidopsis thaliana and contains no pharmacokinetic data for riboflavin. |
| popPK | Schneider_2020 | irrelevant | 0 | 0 | The paper is an immunology study on Mait cells and neutrophils, with no pharmacokinetic data for riboflavin. |
| popPK | Schwarz_2016 | irrelevant | 0 | 0 | The paper describes the biosynthesis of roseoflavin in bacteria and does not report pharmacokinetic parameters for riboflavin. |
| popPK | Scimone_2021 | irrelevant | 0 | 0 | The paper is a case report on the therapeutic use of riboflavin for trimethylaminuria and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for riboflavin. |
| popPK | Sebastián_2019 | irrelevant | 0 | 0 | The paper is a biochemical and biophysical study of bacterial enzymes (FADS) involved in riboflavin metabolism, not a pharmacokinetic study of riboflavin disposition. |
| popPK | Shan_2024 | irrelevant | 0 | 0 | The paper is a mechanistic immunology study on riboflavin kinase and macrophage polarization, not a pharmacokinetic study, and contains no PK parameters for riboflavin. |
| popPK | Shen_2024 | irrelevant | 2 | 0 | Riboflavin is used as a surrogate biomarker for BCRP inhibition rather than as the subject drug for PK parameter estimation, and no quantitative disposition parameters (CL, V, etc.) are reported. |
| popPK | Shibata_2022 | irrelevant | 0 | 0 | The paper is an immunology study on Francisella tularensis and MAIT cells, not a pharmacokinetic study of riboflavin. |
| popPK | Shimizu_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of itopride and trimethylamine in humanized-liver mice, not riboflavin. |
| popPK | Shumyantseva_2023 | irrelevant | 0 | 0 | The study is an in-vitro electrocatalytic mechanism study using riboflavin as an electron transfer mediator, not a pharmacokinetic study of riboflavin disposition. |
| popPK | Singh_2024 | irrelevant | 0 | 0 | The paper is a proteomics study quantifying drug-metabolizing enzymes and transporters, not a pharmacokinetic study of riboflavin. |
| popPK | Spector_1980 | irrelevant | 2 | 0 | The study investigates CNS homeostasis and tissue distribution mechanisms in rabbits using tracer kinetics, but does not report standard systemic population pharmacokinetic parameters (CL, V, ka) for riboflavin. |
| popPK | Sánchez-Luquez_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of etodolac, and riboflavin is only mentioned as a metabolomic pathway correlated with etodolac's effects, not as the subject drug. |
| popPK | Tachibana_1979 | irrelevant | 0 | 0 | The study is a microbial bioassay and in-vitro enzymatic conversion study of riboflavin derivatives, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Takaoka_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of clozapine in an in vitro hepatocyte spheroid model, not riboflavin. |
| popPK | Tang_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of paeoniflorin in rats, using riboflavin only as an internal standard for HPLC analysis, not as the subject drug. |
| popPK | Tang_2026 | irrelevant | 0 | 0 | The paper investigates the role of FMO1 in chondrocyte senescence and does not report pharmacokinetic parameters for riboflavin. |
| popPK | Tong_2023 | irrelevant | 0 | 0 | The paper focuses on engineered gut bacteria for purine degradation and does not report pharmacokinetic parameters for riboflavin. |
| popPK | Uchida_2016 | irrelevant | 0 | 0 | The study focuses on the photodegradation of famotidine by riboflavin, and the pharmacokinetic data provided are for famotidine, not riboflavin. |
| popPK | Uckun_2020 | irrelevant | 0 | 0 | The study explicitly states that PK parameters were calculated for all active ingredients *except* riboflavin 5' phosphate, and no quantitative disposition parameters for riboflavin are reported. |
| popPK | Upadhyay_2013 | relevant | 8 | 2 | The study reports a pharmacokinetic parameter (relative bioavailability Fr = 178.47%) for riboflavin, but lacks standard disposition parameters like clearance, volume, or half-life. |
| popPK | Vogl_2007 | irrelevant | 0 | 0 | The study characterizes riboflavin transport proteins in bacteria (Bacillus subtilis and Corynebacterium glutamicum) and is not a pharmacokinetic study of riboflavin in humans or animals. |
| popPK | Vore_2008 | irrelevant | 0 | 0 | The paper is a commentary on BCRP regulation and mentions riboflavin only as a substrate, without reporting any pharmacokinetic parameters. |
| popPK | Vyshnavi_2023 | irrelevant | 0 | 0 | The study is an in-silico analysis of a herbal formulation where riboflavin is a constituent, not a pharmacokinetic study of riboflavin as the subject drug. |
| popPK | Wang_2008 | irrelevant | 0 | 0 | The study is a mechanistic investigation of riboflavin's effect on glutamate release in rat nerve terminals, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of dapoxetine, not riboflavin. |
| popPK | YAGI_1963 | irrelevant | 0 | 0 | no_text gate: only 42 chars of text extracted (&lt; 400) |
| popPK | YAMABE_1961 | irrelevant | 0 | 0 | no_text gate: only 250 chars of text extracted (&lt; 400) |
| popPK | Zane_2018 | irrelevant | 0 | 0 | The study focuses on the age-dependent expression and activity of CYP and FMO enzymes in human liver tissue, and does not report pharmacokinetic parameters for riboflavin. |
| popPK | Zempleni_1996 | relevant | 10 | 4 | The study reports a two-compartment PK model for riboflavin in humans with specific values for absorption half-life (1.1 h) and maximal absorption (27 mg), but lacks explicit numeric values for clearance, volume, or rate constants in the provided text. |
| popPK | Zhilina_1977 | irrelevant | 0 | 0 | The paper describes the chemical synthesis and spectroscopic characterization of 8-hydroxy-FMN and related flavin derivatives, containing no pharmacokinetic data. |
| popPK | Zhu_2026 | irrelevant | 0 | 0 | The paper describes a nanoplatform for osteomyelitis treatment and does not report pharmacokinetic parameters for riboflavin. |
| popPK | Zong_2025 | irrelevant | 0 | 0 | The study focuses on the mechanical properties and antimicrobial efficacy of riboflavin microneedles for photodynamic therapy, not on the pharmacokinetic disposition parameters (CL, V, etc.) of riboflavin. |
| popPK | unknown_1956 | irrelevant | 0 | 0 | no_text gate: only 23 chars of text extracted (&lt; 400) |
| popPK | van_1989 | irrelevant | 0 | 0 | The paper describes an analytical method for measuring vitamin stability in parenteral nutrition solutions, not a pharmacokinetic study. |
| popPK | van_2023 | irrelevant | 0 | 0 | The study investigates FMN as a biomarker for kidney graft quality during machine perfusion and does not report pharmacokinetic parameters (CL, V, ka, etc.) for riboflavin. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
