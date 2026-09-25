<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02A&quot;,&quot;href&quot;:&quot;atc/A02A.md&quot;},{&quot;label&quot;:&quot;algeldrate&quot;}]"></div>

# algeldrate

- **generic name:** algeldrate
- **ATC codes:** `A02AB02`
- **DrugBank:** [DB06723](https://go.drugbank.com/drugs/DB06723)
- **groups:** approved, investigational

## About

**Description.** Aluminum hydroxide is an inorganic salt used as an antacid. It is a basic compound that acts by neutralizing hydrochloric acid in gastric secretions. Subsequent increases in pH may inhibit the action of pepsin. An increase in bicarbonate ions and prostaglandins may also confer cytoprotective effects.

**Indication.** For relief of heartburn and acid indigestion.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-22 10:56 | 26:12 | 0/0/0 | 0/0/0 | 1/0/0 | 449,756/10,707 | ollama / qwen3.8:27b-mtp-q8_0 | 23 | 6/17 | 22/1 | 0 |

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | **HLA-DR3-DQ2** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Hannelius_2020](drugs/drug_algeldrate/pgx_Hannelius_2020_HLA_DR3_DQ2_safety.md) | Hannelius U et al., Efficacy of GAD-alum immunotherapy asso…, Diabetologia (2020) | [10.1007/s00125-020-05227-z](https://doi.org/10.1007/s00125-020-05227-z) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=algeldrate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>“…Absorbed aluminum chloride is rapidly eliminated by the kidneys in patients with normal re…”</sub> | prose |

<sub>Actors without a tissue in the table: HLA-DR3-DQ2 (safety_allele).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 145 matched, 103 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Authier_2006 | irrelevant | 0 | 0 | The study focuses on the histopathology and genetic influence of macrophagic myofasciitis lesions in rats, not on the pharmacokinetic parameters of algeldrate. |
| PD | Back_1990 | not_relevant | 0 | 0 | The text is a review of pharmacokinetic drug interactions with oral contraceptives and does not mention algeldrate or report any pharmacodynamic or exposure-response parameters. |
| popPK | Balfour_1999 | irrelevant | 0 | 0 | The paper discusses moxifloxacin, not algeldrate, and contains no pharmacokinetic parameters for the target drug. |
| popPK | Bartlett_1992 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of droxicam (a prodrug of piroxicam), not algeldrate. |
| popPK | Battula_2023 | irrelevant | 0 | 0 | The paper studies an IL-12 complex (ANK-101) using aluminum hydroxide as an adjuvant, not algeldrate as the subject drug, and reports no PK parameters for algeldrate. |
| popPK | Becker_2016 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of riociguat, not algeldrate. |
| popPK | Bergeron_1989 | irrelevant | 0 | 0 | The paper discusses the pharmacokinetics of fluoroquinolones (e.g., ciprofloxacin, norfloxacin) and does not mention algeldrate. |
| popPK | Blouin_1990 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cefetamet pivoxil, not algeldrate. |
| popPK | Bourgoin_2005 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for cyclosporin A, not algeldrate. |
| PD | Bourgoin_2005 | not_relevant | 0 | 0 | The paper describes a population pharmacokinetic (PK) model for cyclosporin A and Bayesian estimation of AUC, but it does not report any pharmacodynamic (PD) or exposure-response relationship for algeldrate or any other drug. |
| PD | Brady_1976 | not_relevant | 2 | 1 | The paper mentions different dose-response curves for vaccine antigenicity but provides no numeric PD parameters, concentration-effect data, or extractable quantitative relationship. |
| popPK | Cacek_1986 | irrelevant | 0 | 0 | The paper is a review of phenytoin bioavailability and does not study algeldrate or report any pharmacokinetic parameters for it. |
| popPK | Chandra_2007 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of azithromycin, not algeldrate. |
| popPK | Coates_1995 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of tenidap sodium, not algeldrate. |
| popPK | Cometa_2023 | irrelevant | 0 | 0 | The paper focuses on the development and characterization of Boswellia serrata extract-loaded layered double hydroxide composites and does not involve the drug algeldrate or report any pharmacokinetic parameters. |
| PD | Cometa_2023 | not_relevant | 0 | 0 | The paper focuses on the material characterization and in vitro bioactivity (antimicrobial/anti-inflammatory) of Boswellia serrata extract composites, not on the pharmacokinetics or pharmacodynamics of algeldrate. |
| PD | Coulson_2022 | not_relevant | 3 | 2 | The paper is a systematic review reporting median concentrations for different toxicity outcomes but does not provide a fitted dose-response curve or specific PD parameters like Emax or EC50. |
| popPK | Córdoba-Díaz_1998 | irrelevant | 0 | 0 | The study focuses on the in-vitro interaction between norfloxacin and antacids (including algeldrate) via chelation, not on the pharmacokinetic parameters of algeldrate itself. |
| popPK | Day_1987 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of tenoxicam, not algeldrate. |
| popPK | Di_2024 | irrelevant | 0 | 0 | The paper studies vaccine adjuvants (alum) and antigen binding, not the pharmacokinetics of the drug algeldrate. |
| popPK | Dillingh_2016 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of adalimumab (Humira/ONS-3010), not algeldrate. |
| popPK | EFSA_2024 | irrelevant | 0 | 0 | The paper is a risk assessment of polybrominated diphenyl ethers (PBDEs) and does not involve the drug algeldrate or report any pharmacokinetic parameters for it. |
| PD | EFSA_2024 | not_relevant | 0 | 0 | The paper is a risk assessment of polybrominated diphenyl ethers (PBDEs) in food and does not mention algeldrate or report any pharmacodynamic or exposure-response relationships for it. |
| PD | Elhabal_2025 | not_relevant | 2 | 1 | The paper reports qualitative and percentage-based changes in biomarkers (IgE, cytokines) and gene expression for different formulations, but it does not provide a concentration-effect or dose-response relationship with numeric PD parameters (e.g., EC50, Emax) or a PK/PD model. |
| popPK | Flor_1990 | irrelevant | 0 | 0 | The study investigates the effect of antacids on ofloxacin bioavailability, not the pharmacokinetics of algeldrate. |
| popPK | Ford_2005 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of fosamprenavir/amprenavir, not algeldrate. |
| popPK | Freixeiro_2026 | irrelevant | 0 | 0 | The paper is a pre-clinical vaccine efficacy study for Neisseria gonorrhoeae and does not involve the drug algeldrate or report pharmacokinetic parameters. |
| popPK | Galeazzi_1977 | irrelevant | 0 | 0 | The study investigates the bioavailability of indomethacin, not algeldrate, and does not report PK parameters for the target drug. |
| popPK | Granneman_1992 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of temafloxacin, not algeldrate. |
| PD | Guld_1978 | not_relevant | 2 | 0 | The paper describes a qualitative comparison of dose-response relationships (delayed hypersensitivity) in guinea pigs but does not provide numeric PD parameters, concentration-effect curves, or a formal PK/PD model. |
| popPK | Healy_1989 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cefixime, with algeldrate (as part of Maalox) serving only as a co-administered antacid, not the subject drug. |
| popPK | Hem_1982 | irrelevant | 0 | 0 | The paper evaluates antacid properties and composition of aluminum/magnesium hydroxide suspensions, not the pharmacokinetics of algeldrate. |
| PD | Hoffmann_2022 | not_relevant | 2 | 1 | The study reports epidemiological risk factors (rate ratios) for granulomas based on cumulative aluminium dose, but it does not measure drug concentrations or fit a pharmacodynamic model (e.g., Emax, EC50) to individual exposure data. |
| PD | Holt_1987 | not_relevant | 0 | 0 | The paper describes immunological tolerance and dose-response to an antigen (OVA) in mice/rats, not the pharmacodynamics of the drug algeldrate. |
| popPK | Hughes_1989 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cefpodoxime proxetil, not algeldrate. |
| PD | Höpfner_1997 | not_relevant | 0 | 0 | The paper studies acarbose, not algeldrate, and reports only qualitative/summary efficacy metrics (AUC, Cmax) without numeric PD parameters or concentration-effect curves. |
| popPK | Itano_2023 | irrelevant | 0 | 0 | The paper studies the immunomodulatory effects of the bacterial strain EDP1815 (Prevotella histicola) and does not report pharmacokinetic parameters for the drug algeldrate. |
| PD | Itano_2023 | not_relevant | 2 | 1 | The paper reports clinical efficacy and preclinical dose-response trends for a live bacterial preparation (EDP1815) but does not provide a pharmacokinetic profile or numeric pharmacodynamic parameters (e.g., Emax, EC50) linking exposure to effect. |
| popPK | Jacobse_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of adalimumab, not algeldrate. |
| PD | Jacobse_2021 | not_relevant | 0 | 0 | The paper reports population PK modeling and qualitative PD comparisons (cytokine release, skin reaction) but does not provide a quantitative exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50). |
| PD | Jenkins_1989 | not_relevant | 1 | 0 | The paper reports clinical outcomes (phosphate control, bone toxicity) at a fixed low dose but does not provide a concentration-effect curve, dose-response model, or numeric PD parameters like Emax or EC50. |
| popPK | Kanefendt_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of asundexian, not algeldrate. |
| PD | Kellner_1992 | not_relevant | 0 | 0 | The paper studies adjuvants (lipopeptides, aluminium hydroxide) and does not report any pharmacodynamic or exposure-response data for algeldrate. |
| popPK | Kirch_1982 | irrelevant | 0 | 0 | The paper is a review of atenolol pharmacokinetics and does not report quantitative PK parameters for algeldrate. |
| PD | Kirch_1982 | not_relevant | 1 | 0 | The text is a review of atenolol (not algeldrate) and only qualitatively mentions a linear relationship between plasma levels and beta-blocking effect without providing numeric PD parameters. |
| popPK | Koyyada_2021 | irrelevant | 0 | 0 | The paper is a review of adverse effects of proton pump inhibitors and does not mention algeldrate or report any pharmacokinetic parameters. |
| popPK | Krishna_2007 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of garenoxacin, not algeldrate, and algeldrate is not mentioned or studied. |
| popPK | Krishna_2016 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of raltegravir, not algeldrate, and algeldrate is not the subject drug. |
| PD | Larsen_2002 | not_relevant | 0 | 0 | The paper studies the adjuvant effect of phthalates, not algeldrate, and does not report any pharmacodynamic or exposure-response parameters for algeldrate. |
| popPK | Lei_2025 | irrelevant | 0 | 0 | The paper is an immunology study on Mycoplasma pneumoniae vaccines and does not involve the drug algeldrate or pharmacokinetic parameters. |
| popPK | Liang_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of moxifloxacin, not algeldrate, which is not mentioned in the evidence. |
| popPK | Liel_1994 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of levothyroxine and its interaction with aluminum hydroxide, not algeldrate. |
| popPK | Lober_1999 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of gatifloxacin, not algeldrate. |
| popPK | Lockard_1979 | irrelevant | 0 | 0 | The study evaluates the solvent polyethylene glycol 400 (PEG 400) in a monkey model and does not report pharmacokinetic parameters for algeldrate. |
| PD | Lofthouse_2002 | not_relevant | 2 | 1 | The paper describes a qualitative dose-response trend for a vaccine delivery system but does not provide numeric PD parameters or a quantitative exposure-response model. |
| PD | Lohmann_1991 | not_relevant | 0 | 0 | The paper investigates the effect of an antacid on the pharmacokinetics (absorption) of vinpocetine, not the pharmacodynamics or exposure-response relationship of algeldrate. |
| popPK | Lyons-Weiler_2020 | irrelevant | 0 | 0 | The paper discusses aluminum adjuvant toxicity and clearance modeling, not the pharmacokinetics of the drug algeldrate. |
| popPK | Lücker_1985 | irrelevant | 0 | 0 | The study investigates muzolimine (with/without aluminium hydroxide), not algeldrate, and reports no quantitative PK parameters for algeldrate. |
| PD | Lücker_1985 | not_relevant | 0 | 0 | The study reports no change in pharmacokinetics or pharmacodynamics (urinary excretion) and provides no numeric PD parameters or concentration-effect relationship. |
| popPK | Mahieu_1998 | irrelevant | 0 | 0 | The study investigates renal phosphate handling in rats using aluminum hydroxide, not the pharmacokinetics of algeldrate. |
| popPK | Mallick_2007 | irrelevant | 0 | 0 | The study focuses on the interaction between gatifloxacin and aluminium hydroxide, not the pharmacokinetics of algeldrate. |
| popPK | Marco_2010 | irrelevant | 0 | 0 | The paper is a clinical case report on pamidronate for calcinosis and does not contain pharmacokinetic data for algeldrate. |
| popPK | Mitkus_2011 | irrelevant | 0 | 0 | The paper discusses aluminum pharmacokinetics in the context of vaccine adjuvants and dietary exposure, not the specific drug algeldrate. |
| popPK | Muir_1993 | irrelevant | 0 | 0 | The study investigates the effect of an antacid on theophylline pharmacokinetics, not algeldrate. |
| popPK | Nakatani_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of fluoroquinolones and the effect of metal ions on their permeation, not algeldrate. |
| popPK | Neuvonen_1988 | irrelevant | 0 | 0 | The study investigates the effect of antacids on the absorption of tolfenamic and mefenamic acids, not algeldrate. |
| popPK | Nguyen_1989 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of doxycycline, not algeldrate. |
| popPK | Nix_1989 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ciprofloxacin, with algeldrate (as part of Maalox) serving only as a co-administered antacid, not the subject drug. |
| popPK | Oda_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of casearin B and caseargrewiin F, not algeldrate. |
| popPK | Onofrio_2026 | irrelevant | 0 | 0 | The paper is an immunology study on a gonococcal vaccine and does not report pharmacokinetic parameters for algeldrate. |
| PD | Osterballe_1982 | not_relevant | 2 | 1 | The paper reports qualitative dose-dependent side effects (e.g., threshold of 1,000 units for major SSE) but lacks a formal PK/PD model, concentration-effect curve, or numeric PD parameters like Emax/EC50. |
| popPK | Pahima_2021 | irrelevant | 0 | 0 | The paper describes an immunological model of allergic peritonitis in mice and does not report any pharmacokinetic parameters for algeldrate. |
| popPK | Park_2025 | irrelevant | 0 | 0 | The study investigates tolododekin alfa (an IL-12 conjugate), not algeldrate, and does not report PK parameters for algeldrate. |
| popPK | Pavel_2021 | irrelevant | 0 | 0 | The paper describes the development and immunogenicity of a SARS-CoV-2 vaccine and does not report pharmacokinetic parameters for algeldrate. |
| PD | Poulsen_1985 | not_relevant | 0 | 0 | The paper describes a laboratory method (AlRAST) for measuring IgE levels and does not report any pharmacodynamic or exposure-response relationship for algeldrate. |
| popPK | Priest_1996 | irrelevant | 0 | 0 | The study investigates aluminium citrate and hydroxide, not algeldrate, and reports fractional uptake rather than PK parameters for the target drug. |
| popPK | Priest_2021 | irrelevant | 0 | 0 | The study investigates the bioavailability of various aluminium compounds in rats, not the pharmacokinetics of the specific drug algeldrate. |
| popPK | Ranade_2001 | irrelevant | 0 | 0 | The paper is a review of magnesium salts and does not mention algeldrate or provide any pharmacokinetic parameters for it. |
| popPK | Ranchon_2018 | irrelevant | 0 | 0 | The study focuses on methotrexate pharmacokinetics and does not report any data for algeldrate. |
| popPK | Ritter_1985 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of muzolimine, not algeldrate, and algeldrate is not mentioned or used as a subject drug. |
| popPK | Rodrigues_2021 | irrelevant | 0 | 0 | The paper is an immunology study on SARS-CoV-2 vaccine adjuvants using aluminum hydroxide (alum), not a pharmacokinetic study of the drug algeldrate. |
| popPK | Rudiman_2023 | irrelevant | 0 | 0 | The paper is a systematic review of topical sucralfate for pain and wound healing, not a pharmacokinetic study of algeldrate. |
| PD | Rudiman_2023 | not_relevant | 0 | 0 | The paper is a systematic review and meta-analysis of clinical trials evaluating the efficacy of topical sucralfate; it does not report pharmacokinetic data, exposure-response relationships, or numeric pharmacodynamic parameters (e.g., Emax, EC50) for the drug. |
| popPK | Saathoff_1992 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cefpodoxime proxetil, not algeldrate. |
| PD | Scott_2004 | not_relevant | 0 | 0 | The paper reports a pharmacokinetic drug-drug interaction study for lumiracoxib, not a pharmacodynamic or exposure-response analysis for algeldrate. |
| popPK | Shelton_1992 | irrelevant | 0 | 0 | The paper is a review of didanosine (ddI) pharmacokinetics and does not contain any data for algeldrate. |
| popPK | Shen_2016 | irrelevant | 0 | 0 | The paper is an immunogenicity study of a hepatitis B vaccine and does not report pharmacokinetic parameters for algeldrate. |
| popPK | Shen_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of lesinurad, not algeldrate. |
| popPK | Shimada_1993 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for sparfloxacin, not algeldrate. |
| popPK | Snell_2002 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of oseltamivir and its metabolite Ro 64-0802, not algeldrate. |
| popPK | Sonnappa_2011 | irrelevant | 0 | 0 | The paper is a respiratory physiology study on preschool wheezers and does not involve the drug algeldrate or pharmacokinetic parameters. |
| popPK | Sun_2026 | irrelevant | 0 | 0 | The paper describes an immunotherapy mechanism using aluminum hydroxide (Alum) as a delivery platform, not a pharmacokinetic study of algeldrate, and contains no PK parameters. |
| PD | Tay_2011 | not_relevant | 0 | 0 | The paper investigates the effect of aluminium hydroxide concentration on the in vitro dissolution of indomethacin, which is a physicochemical formulation study, not a pharmacodynamic or exposure-response analysis of a drug's biological effect. |
| popPK | Thomson_1989 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for lisinopril, not algeldrate. |
| PD | Thomson_1989 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics (PK) of lisinopril, not algeldrate, and does not model or report any pharmacodynamic (PD) or exposure-response parameters. |
| popPK | Tobert_1981 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of diflunisal, with algeldrate (aluminum hydroxide) serving only as a co-administered antacid, not the subject drug. |
| PD | Toothaker_1989 | not_relevant | 0 | 0 | The text describes only the pharmacokinetic properties (absorption, bioavailability, half-life) of enoxacin and contains no pharmacodynamic or exposure-response data. |
| popPK | Vergin_1989 | irrelevant | 0 | 0 | The study investigates the effect of an antacid on the pharmacokinetics of pirenzepine, not algeldrate. |
| popPK | Walden_2021 | irrelevant | 0 | 0 | The study focuses on fluoroquinolones and their chelation with metals, not algeldrate, and is a computational study without algeldrate PK parameters. |
| PGx | Wang_2021 | not_relevant | 0 | 0 | The paper investigates genetic associations with childhood asthma and immune responses, not the pharmacokinetics or pharmacodynamics of algeldrate. |
| popPK | Wilner_2000 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ziprasidone, not algeldrate. |
| PD | Xiang_2023 | not_relevant | 0 | 0 | The paper describes the adsorption of fluoride by a modified diatomite material in an environmental context, not the pharmacodynamics of a drug in a biological system. |
| popPK | Zhao_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of rasagiline, not algeldrate. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | no_text gate: only 112 chars of text extracted (&lt; 400) |
| PD | unknown_2018 | not_relevant | 0 | 0 | The provided text is only a header for conference abstracts and contains no specific data, results, or PD parameters for algeldrate. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
