<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02A&quot;,&quot;href&quot;:&quot;atc/A02A.md&quot;},{&quot;label&quot;:&quot;aluminium hydroxide&quot;}]"></div>

# aluminium hydroxide

- **generic name:** aluminium hydroxide
- **ATC codes:** `A02AB01`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Aluminium hydroxide is an antacid used to treat acid-related conditions such as duodenal ulcers, and it also serves as an immunologic adjuvant in vaccines. It remains in use as an over-the-counter antacid for acid-related digestive disorders.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q407125](https://www.wikidata.org/wiki/Q407125) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 08:31 | 7:39 | 0/0/0 | 0/0/0 | 1/0/0 | 253,426/6,333 | ollama / qwen3.8:27b-mtp-q8_0 | 36 | 12/30 | 32/4 | 0 |

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.">safety allele</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **HLA-DR3-DQ2** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Hannelius_2020](drugs/drug_aluminium_hydroxide/pgx_Hannelius_2020_HLA_DR3_DQ2_safety.md) | Hannelius U et al., Efficacy of GAD-alum immunotherapy asso…, Diabetologia (2020) | [10.1007/s00125-020-05227-z](https://doi.org/10.1007/s00125-020-05227-z) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=aluminium_hydroxide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: HLA-DR3-DQ2 (safety_allele).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 163 matched, 117 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Achira_2002 | irrelevant | 0 | 0 | The study investigates P-glycoprotein activity in rats using doxorubicin as a substrate, and does not involve aluminium_hydroxide. |
| popPK | Ahlén_2025 | irrelevant | 0 | 0 | The study is a metabolomics analysis of SARS-CoV-2 vaccines in ferrets and does not report pharmacokinetic parameters for aluminium hydroxide. |
| popPK | Authier_2006 | irrelevant | 0 | 0 | The study focuses on the histopathology and immune mechanisms of macrophagic myofasciitis in rats, not on the quantitative pharmacokinetic parameters (CL, V, etc.) of aluminium hydroxide. |
| popPK | Bagwe_2023 | irrelevant | 0 | 0 | The study is an immunology/vaccine efficacy study in mice where aluminium hydroxide (Alhydrogel) is used as an adjuvant, not as the subject drug for pharmacokinetic analysis. |
| popPK | Bartlett_1992 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of droxicam/piroxicam, with aluminum hydroxide serving only as a co-administered antacid agent. |
| popPK | Battula_2023 | irrelevant | 0 | 0 | The study focuses on the antitumor efficacy and retention of an IL-12 complex (ANK-101) in mice and macaques, not the pharmacokinetic parameters of aluminum hydroxide itself. |
| popPK | Becker_2016 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of riociguat, with aluminium hydroxide (AlOH) serving only as a co-administered antacid to test for drug-drug interactions, not as the subject drug. |
| popPK | Bergeron_1989 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of fluoroquinolones, and aluminium hydroxide is only mentioned as a co-administered antacid that reduces absorption, not as the subject drug. |
| popPK | Bloksma_1981 | irrelevant | 0 | 0 | The study investigates the immunological effects of Lactobacillus in mice and does not involve aluminium_hydroxide or pharmacokinetic parameters. |
| popPK | Bourgoin_2005 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for cyclosporin A, not aluminium_hydroxide. |
| PD | Bourgoin_2005 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of cyclosporin A, not aluminium hydroxide, and does not report any pharmacodynamic or exposure-response relationships. |
| PD | Brady_1976 | not_relevant | 3 | 2 | The paper describes a qualitative dose-response difference (plateau vs. proportional decline) for vaccine potency but does not provide numeric PD parameters (Emax, EC50) or a quantitative exposure-response model for aluminium hydroxide. |
| PD | Bretagne_2017 | not_relevant | 0 | 0 | The paper describes the physical mechanism of pore plugging using microfluidics and SAXS, but does not report any pharmacodynamic exposure-response or dose-response data with numeric parameters. |
| popPK | Bur_2026 | irrelevant | 0 | 0 | The paper is a clinical oncology study regarding margin assessment in oral cancer and contains no pharmacokinetic data for aluminium hydroxide. |
| popPK | Carnrot_2023 | irrelevant | 0 | 0 | The study investigates the biodistribution of the Matrix-M adjuvant (saponins/cholesterol) in mice, not the pharmacokinetics of aluminium hydroxide. |
| popPK | Cascone_2026 | irrelevant | 0 | 0 | The paper is a clinical trial of nivolumab in NSCLC focusing on ctDNA clearance and survival outcomes, containing no pharmacokinetic data for aluminium hydroxide. |
| popPK | Chandra_2007 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of azithromycin, with aluminium hydroxide serving only as a component of the antacid co-administered to test food/antacid effects. |
| popPK | Chen_1984 | irrelevant | 0 | 0 | The study examines the pharmacokinetics of ethambutol, with aluminum hydroxide serving only as a co-administered antacid/comparator. |
| popPK | Chung_2016 | irrelevant | 0 | 0 | The study investigates the effect of low-intensity ultrasound on arthritis in rats and does not involve the drug aluminium_hydroxide or any pharmacokinetic parameters. |
| popPK | Coates_1995 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of tenidap sodium, with aluminium hydroxide serving only as a co-administered antacid (Maalox) rather than the subject drug. |
| popPK | Coburn_1970 | irrelevant | 0 | 0 | The study investigates renal calcium handling during phosphate depletion induced by aluminum hydroxide, which is used as a phosphate binder rather than the subject of pharmacokinetic analysis. |
| popPK | Cometa_2023 | irrelevant | 0 | 0 | The paper describes the development of a drug delivery composite for Boswellia serrata extract, not the pharmacokinetics of aluminium hydroxide. |
| PD | Cometa_2023 | not_relevant | 0 | 0 | The paper focuses on the material characterization and in vitro bioactivity of a drug delivery composite, reporting no pharmacokinetic data, exposure-response relationships, or numeric PD parameters for aluminium hydroxide. |
| popPK | Cookenham_2020 | irrelevant | 0 | 0 | The study is an immunological investigation of influenza vaccine efficacy in mice and does not report pharmacokinetic parameters for aluminium hydroxide. |
| PD | Coulson_2022 | not_relevant | 3 | 2 | The paper is a systematic review reporting median concentrations for different toxicity outcomes (neurotoxicity vs bone disease) but does not provide a fitted dose-response curve, Emax/EC50 parameters, or a quantitative PK/PD model. |
| PD | De_2008 | not_relevant | 1 | 0 | The paper is a commentary on the mechanism of action of aluminium hydroxide (Nlrp3 inflammasome activation) and does not report any quantitative pharmacodynamic or exposure-response data. |
| popPK | Dillard_2024 | irrelevant | 0 | 0 | The paper is an immunology study on SARS-CoV-2 vaccines where aluminum hydroxide is used as an adjuvant, not as the subject drug for pharmacokinetic analysis. |
| popPK | Dillingh_2016 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of adalimumab (Humira), using aluminum hydroxide only as an adjuvant in an in vitro/whole blood pharmacodynamic challenge, not as the subject drug. |
| popPK | Dong_2019 | irrelevant | 0 | 0 | The paper describes a cancer immunotherapy nanovaccine (ovalbumin/CpG) and does not report pharmacokinetic parameters for aluminium hydroxide. |
| popPK | Du_2023 | irrelevant | 0 | 0 | The paper is a clinical oncology study on non-small cell lung cancer treatment outcomes and contains no pharmacokinetic data for aluminium hydroxide. |
| popPK | EFSA_2024 | irrelevant | 0 | 0 | The paper is a risk assessment of polybrominated diphenyl ethers (PBDEs) and does not involve aluminium hydroxide or its pharmacokinetics. |
| PD | EFSA_2024 | not_relevant | 0 | 0 | The paper is a risk assessment for polybrominated diphenyl ethers (PBDEs) and does not contain any pharmacodynamic or exposure-response data for aluminium hydroxide. |
| PD | Elhabal_2025 | not_relevant | 0 | 0 | The paper reports qualitative/percentage changes in biomarkers (IgE, cytokines) in an animal model but does not provide concentration-effect data, dose-response curves, or numeric PD parameters (Emax, EC50) for aluminium hydroxide or the drug. |
| popPK | Eng_1978 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of myelin basic protein (MBP) in rabbits, not aluminium hydroxide. |
| popPK | Freixeiro_2026 | irrelevant | 0 | 0 | The paper is a preclinical vaccine efficacy study where aluminium hydroxide is used only as an adjuvant, and no pharmacokinetic parameters for aluminium hydroxide are reported. |
| popPK | Gan_2020 | irrelevant | 0 | 0 | The study focuses on the immunological efficacy of aluminum phosphate nanoparticles as a cancer vaccine adjuvant in mice, not on the pharmacokinetic disposition parameters of aluminium_hydroxide. |
| popPK | Goh_2021 | irrelevant | 0 | 0 | The paper is a clinical study on biliary atresia outcomes (cholangitis and jaundice clearance) and does not report pharmacokinetic parameters for aluminium_hydroxide. |
| popPK | Grunder_2006 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of linezolid, with aluminum hydroxide serving only as a co-administered antacid (comparator) rather than the subject drug. |
| PD | Guld_1978 | not_relevant | 2 | 0 | The paper mentions dose-response relationships and compares antibody responses to aluminium hydroxide vs BCG, but it is a qualitative summary of experiments without providing specific numeric PD parameters (Emax, EC50) or extractable concentration-effect curves in the text. |
| popPK | Guo_2022 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for docetaxel, not aluminium_hydroxide. |
| popPK | Hege_2023 | irrelevant | 0 | 0 | The paper focuses on the synthesis and immunological screening of methacrylate oligomers as vaccine adjuvants, not the pharmacokinetics of aluminium hydroxide. |
| popPK | Heise_2023 | irrelevant | 0 | 0 | The paper is an immunology study on SARS-CoV-2 vaccines where aluminum hydroxide is used as an adjuvant, not as the subject drug for pharmacokinetic analysis. |
| popPK | Hockey_1987 | irrelevant | 0 | 0 | The paper is a clinical review of gastric lymphoma cases and contains no pharmacokinetic data for aluminium hydroxide. |
| PD | Holt_1987 | not_relevant | 0 | 0 | The paper discusses aluminium hydroxide only as an adjuvant that abrogates tolerance in an immunological context, without reporting any pharmacokinetic or pharmacodynamic exposure-response data or numeric PD parameters for the compound itself. |
| popPK | Hughes_1989 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cefpodoxime proxetil, with aluminium hydroxide used only as a gastric pH modifier/comparator. |
| PD | Höpfner_1997 | not_relevant | 0 | 0 | The study assesses the effect of an antacid on the pharmacodynamics of acarbose (blood glucose/insulin), not the pharmacodynamics of aluminium hydroxide itself, and reports no PD parameters for the antacid. |
| popPK | Itano_2023 | irrelevant | 0 | 0 | The paper studies the anti-inflammatory effects of a bacterial preparation (Prevotella histicola) and does not report pharmacokinetic parameters for aluminium_hydroxide. |
| PD | Itano_2023 | not_relevant | 0 | 0 | The paper studies EDP1815 (a bacterial strain), not aluminium hydroxide, and reports no exposure-response or dose-response PD parameters for the target drug. |
| popPK | Jacobse_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of adalimumab, not aluminium_hydroxide. |
| PD | Jacobse_2021 | not_relevant | 0 | 0 | The paper focuses on PK and local tolerability of adalimumab; aluminium hydroxide is only used as an adjuvant in an ex-vivo cytokine assay, and no PD or exposure-response relationship for aluminium hydroxide is reported. |
| PD | Kellner_1992 | not_relevant | 2 | 1 | The paper provides only a qualitative comparison of adjuvant efficacy (antibody titers) without reporting specific numeric dose-response parameters or curves for aluminium hydroxide. |
| popPK | Kirch_1982 | irrelevant | 0 | 0 | The paper is a review of atenolol pharmacokinetics, and aluminium hydroxide is only mentioned as a co-administered agent affecting atenolol absorption, not as the subject drug. |
| popPK | Krishna_2007 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of garenoxacin in the presence of an aluminum hydroxide antacid, rather than the pharmacokinetics of aluminum hydroxide itself. |
| popPK | Krishna_2016 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of raltegravir, with aluminium hydroxide serving only as a co-administered antacid comparator. |
| popPK | Kun_1986 | irrelevant | 0 | 0 | The paper is a clinical oncology trial evaluating chemotherapy regimens (bleomycin, cyclophosphamide, methotrexate, 5-FU) and contains no data on aluminium hydroxide pharmacokinetics. |
| popPK | Kwak_2022 | irrelevant | 0 | 0 | The paper is a clinical study on imiquimod for lentigo maligna and contains no pharmacokinetic data for aluminium hydroxide. |
| PD | Laera_2023 | not_relevant | 0 | 0 | The paper focuses on the physical-chemical characterization and formulation stability of antigen adsorption to aluminium hydroxide particles, not on pharmacodynamic exposure-response or dose-response relationships in a biological system. |
| PD | Larsen_2002 | not_relevant | 0 | 0 | The paper studies phthalates as adjuvants and mentions aluminium hydroxide only as a positive control without reporting any specific exposure-response or dose-response data for it. |
| popPK | Lei_2025 | irrelevant | 0 | 0 | The study is a vaccine immunogenicity and efficacy trial in mice where aluminum hydroxide is used only as a comparator adjuvant, not as the subject drug for pharmacokinetic analysis. |
| popPK | Liel_1994 | irrelevant | 0 | 0 | The study investigates the effect of aluminum hydroxide on levothyroxine pharmacokinetics, making levothyroxine the subject drug and aluminum hydroxide the interacting agent. |
| PD | Lofthouse_2002 | not_relevant | 2 | 1 | The paper compares vaccine delivery vehicles and mentions a qualitative dose-response trend for the matrix implant, but it does not report numeric PD parameters (Emax, EC50, etc.) or a quantitative exposure-response model for aluminium hydroxide. |
| popPK | Luo_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of an anti-SEB mRNA antibody in mice, not the drug aluminium_hydroxide. |
| popPK | Lyons-Weiler_2020 | irrelevant | 2 | 0 | The paper applies existing clearance models to calculate toxicity exposure but does not report new quantitative PK parameter values (CL, V, etc.) for aluminum hydroxide in the provided evidence. |
| popPK | Lücker_1985 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of muzolimine, with aluminium hydroxide serving only as a co-administered agent to test for interactions, not as the subject drug. |
| PD | Lücker_1985 | not_relevant | 0 | 0 | The study reports no change in pharmacokinetics or pharmacodynamics (urinary excretion) and provides no numeric PD parameters or concentration-effect relationship. |
| popPK | Mahieu_1998 | irrelevant | 0 | 0 | The study investigates the renal handling of phosphate and parathyroid function in rats, not the pharmacokinetic disposition parameters (CL, V, ka) of aluminium hydroxide itself. |
| popPK | Marco_2010 | irrelevant | 0 | 0 | The paper is a clinical case report on the treatment of calcinosis with pamidronate, and aluminium hydroxide is only mentioned as a previously used, ineffective comparator without any pharmacokinetic data. |
| popPK | Mistry_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of an IL-12 anchored drug conjugate (mANK-101), where aluminum hydroxide is used as a scaffold/adjuvant rather than being the subject drug itself. |
| popPK | Mitkus_2011 | irrelevant | 2 | 0 | The paper is a safety assessment/review that updates a previous model but does not report original quantitative PK parameters (CL, V, etc.) for aluminum hydroxide in the provided text. |
| popPK | Morris_2022 | irrelevant | 0 | 0 | The paper discusses circulating tumor DNA (ctDNA) in colon cancer and does not involve the drug aluminium_hydroxide or any pharmacokinetic parameters. |
| popPK | Muir_1993 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of theophylline, with aluminium hydroxide serving only as a co-administered antacid/comparator. |
| popPK | Nakamura_2024 | irrelevant | 0 | 0 | The paper is a clinical oncology study on ctDNA in colorectal cancer and does not report pharmacokinetic parameters for aluminium_hydroxide. |
| popPK | Nguyen_1989 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of doxycycline, with aluminium hydroxide serving only as a co-administered antacid agent. |
| popPK | Onofrio_2026 | irrelevant | 0 | 0 | The study is an immunogenicity assessment of a gonococcal vaccine where aluminium hydroxide is used solely as an adjuvant, not as the subject drug for pharmacokinetic analysis. |
| popPK | Origitano_1989 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Photofrin-II (HpD-II) in dogs, not aluminium_hydroxide. |
| popPK | Pahima_2021 | irrelevant | 0 | 0 | The study uses aluminum hydroxide as an adjuvant in an immunology model, not as a subject drug for pharmacokinetic analysis. |
| popPK | Park_2025 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of tolododekin alfa (an IL-12 conjugate), where aluminum hydroxide serves only as an inert scaffold, not as the subject drug. |
| popPK | Parolini_2019 | irrelevant | 0 | 0 | The study focuses on antiviral therapy for biliary atresia and does not report pharmacokinetic parameters for aluminium hydroxide. |
| popPK | Pavel_2021 | irrelevant | 0 | 0 | The paper describes the immunogenicity and efficacy of a SARS-CoV-2 vaccine where aluminium hydroxide is used as an adjuvant, not as the subject drug for pharmacokinetic analysis. |
| popPK | Pellatt_2025 | irrelevant | 0 | 0 | The paper is a clinical trial of TAS-102 in colorectal cancer and does not involve aluminium_hydroxide or pharmacokinetic modeling. |
| PD | Poulsen_1985 | not_relevant | 0 | 0 | The paper describes a laboratory diagnostic method (AlRAST) using aluminium hydroxide as a sorbent, not a pharmacodynamic or exposure-response analysis of the drug itself. |
| popPK | Ramirez_2007 | irrelevant | 0 | 0 | The study investigates the efficacy of imiquimod and laser for tattoo removal in guinea pigs and does not report pharmacokinetic parameters for aluminium hydroxide. |
| popPK | Ritter_1985 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of muzolimine, with aluminium hydroxide acting only as a co-administered agent to test for interaction, not as the subject drug. |
| popPK | Rodin_1988 | irrelevant | 0 | 0 | The paper is a review of pharmacokinetic interactions involving digoxin, where aluminium hydroxide is mentioned only as an interacting agent (antacid) that reduces digoxin absorption, not as the subject of PK parameter estimation. |
| popPK | Rodrigues_2021 | irrelevant | 0 | 0 | The study focuses on the immunological efficacy of an aluminum hydroxide adjuvant in a vaccine context, not on the pharmacokinetic disposition parameters of aluminum hydroxide itself. |
| PD | Roeffen_2015 | not_relevant | 0 | 0 | The paper reports immunogenicity and functional antibody activity (SMFA) for a malaria vaccine candidate, not a pharmacodynamic exposure-response relationship for aluminium hydroxide as a drug. |
| popPK | Rudiman_2023 | irrelevant | 0 | 0 | The paper is a systematic review of topical sucralfate for wound healing and pain, containing no pharmacokinetic data for aluminium hydroxide. |
| PD | Rudiman_2023 | not_relevant | 0 | 0 | The paper is a systematic review and meta-analysis of clinical trials evaluating the efficacy of topical sucralfate, containing no pharmacokinetic data, exposure-response modeling, or numeric PD parameters for aluminium hydroxide. |
| popPK | Sadana_2025 | irrelevant | 0 | 0 | The paper is a clinical trial protocol for artesunate in cervical precancer and does not study the pharmacokinetics of aluminium_hydroxide. |
| popPK | Scoville_2018 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of acetaminophen, not aluminium_hydroxide. |
| popPK | Seale_1992 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of polyvinylpyrrolidone (PVP), not aluminium hydroxide. |
| popPK | Shen_2016 | irrelevant | 0 | 0 | The study investigates the immunogenicity of a hepatitis B vaccine formulation where aluminum hydroxide acts as an adjuvant, not the pharmacokinetics of aluminum hydroxide itself. |
| popPK | Shen_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of lesinurad, with aluminum hydroxide serving only as a co-administered antacid agent. |
| popPK | Shimada_1993 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of sparfloxacin, and aluminium hydroxide is only mentioned as an antacid that reduces sparfloxacin's bioavailability, not as the subject drug. |
| popPK | Sojati_2025 | irrelevant | 0 | 0 | The paper is an immunology study on human metapneumovirus (HMPV) in mice and does not involve the drug aluminium_hydroxide or any pharmacokinetic parameters. |
| PD | Stephen_2017 | not_relevant | 0 | 0 | The paper describes the mechanism of action (neutrophil swarming and NET formation) using qualitative imaging and knockout mouse comparisons, but does not report any quantitative exposure-response or dose-response data with numeric PD parameters. |
| PD | Sáinz_2003 | not_relevant | 0 | 0 | The paper is a qualitative review of medication issues in ostomized patients and mentions aluminum hydroxide only as a cause of stool discoloration, without providing any quantitative pharmacodynamic or exposure-response data. |
| PD | Taylor_1978 | not_relevant | 1 | 0 | The paper provides a qualitative comparison of therapeutic agents for post-vagotomy diarrhoea without reporting any numeric concentration-effect or dose-response parameters for aluminium hydroxide. |
| popPK | Thomson_1989 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of lisinopril, not aluminium_hydroxide. |
| PD | Thomson_1989 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics (PK) of lisinopril, not pharmacodynamics (PD) or exposure-response relationships for aluminium hydroxide. |
| popPK | Tie_2025 | irrelevant | 0 | 0 | The paper is a clinical trial regarding ctDNA-guided adjuvant therapy for colon cancer and does not contain any pharmacokinetic data for aluminium_hydroxide. |
| popPK | Tjandra-Maga_1986 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of flecainide, with aluminium hydroxide serving only as a co-administered antacid to test for interaction, not as the subject drug. |
| popPK | Tvedskov_2024 | irrelevant | 0 | 0 | The paper is a clinical oncology study regarding axillary clearance in breast cancer and contains no pharmacokinetic data for aluminium hydroxide. |
| PD | Varela-Martínez_2023 | not_relevant | 0 | 0 | The paper reports differential miRNA expression in sheep spleens following vaccination with aluminium hydroxide adjuvants, but it does not provide any pharmacokinetic data, concentration-effect curves, or numeric pharmacodynamic parameters (e.g., Emax, EC50) for the adjuvant itself. |
| popPK | Vergin_1989 | irrelevant | 0 | 0 | The study investigates the effect of an aluminium-hydroxide antacid on the pharmacokinetics of pirenzepine, not the pharmacokinetics of aluminium-hydroxide itself. |
| popPK | Wang_2021 | irrelevant | 0 | 0 | The paper is an immunological study using aluminium hydroxide as an in vitro immune stimulant, not a pharmacokinetic study of the drug. |
| PGx | Wang_2021 | not_relevant | 0 | 0 | The paper investigates the mediation of asthma risk by immune responses to aluminium hydroxide as an innate ligand, not the pharmacokinetics or pharmacodynamics of aluminium hydroxide as a therapeutic drug. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | The paper focuses on ultrasound-mediated delivery of immune adjuvants for tumor immunotherapy and does not report pharmacokinetic parameters for aluminium hydroxide. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The paper is an immunology study on cryptococcal vaccines in mice and does not report pharmacokinetic parameters for aluminium hydroxide. |
| popPK | Wilner_2000 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ziprasidone, with aluminium hydroxide (Maalox) serving only as a co-administered antacid comparator, not the subject drug. |
| popPK | Zeng_2026 | irrelevant | 0 | 0 | The paper investigates LNP-based delivery of CpG for cancer vaccines and does not report pharmacokinetic parameters for aluminium hydroxide. |
| popPK | Zhang_2021 | irrelevant | 0 | 0 | The paper is a surgical case report on breast cancer surgery and contains no pharmacokinetic data for aluminium_hydroxide. |
| popPK | Zhao_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of rasagiline, using aluminum hydroxide only as an excipient to modulate release, and does not report PK parameters for aluminum hydroxide itself. |
| popPK | Zussman_2001 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cilomilast, with aluminium hydroxide serving only as a co-administered antacid agent. |
| popPK | unknown_1984 | irrelevant | 0 | 0 | The paper is a clinical trial of breast cancer treatments (chemo-endocrine therapy) and does not involve aluminium_hydroxide or pharmacokinetic modeling. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | no_text gate: only 112 chars of text extracted (&lt; 400) |
| PD | unknown_2018 | not_relevant | 0 | 0 | The provided text is only a header for conference abstracts and contains no specific data, models, or parameters regarding aluminium hydroxide pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
