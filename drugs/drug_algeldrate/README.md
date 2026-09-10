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
| 2026-09-10 11:43 | 18:34 | 0/0/0 | 0/0/0 | 1/0/0 | 150,490/4,562 | ollama / qwen3.8:27b-mtp-q8_0 | 16 | 5/11 | 15/1 | 0 |

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | **HLA-DR3-DQ2** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Hannelius_2020](drugs/drug_algeldrate/pgx_Hannelius_2020_HLA_DR3_DQ2_safety.md) | Hannelius U et al., Efficacy of GAD-alum immunotherapy asso…, Diabetologia (2020) | [10.1007/s00125-020-05227-z](https://doi.org/10.1007/s00125-020-05227-z) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 388 matched, 67 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Back_1990 | not_relevant | 0 | 0 | The text is a review of pharmacokinetic drug interactions with oral contraceptives and does not mention algeldrate or report any pharmacodynamic or exposure-response parameters. |
| popPK | Balfour_1999 | irrelevant | 0 | 0 | The paper discusses moxifloxacin, not algeldrate, and contains no pharmacokinetic parameters for the target drug. |
| popPK | Becker_2016 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of riociguat, not algeldrate. |
| popPK | Bourgoin_2005 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cyclosporin A, not algeldrate. |
| PD | Bourgoin_2005 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetic (PK) modeling and Bayesian estimation of cyclosporin A exposure (AUC) and does not report any pharmacodynamic (PD) or exposure-response relationships. |
| PD | Brady_1976 | not_relevant | 3 | 2 | The paper describes a qualitative dose-response relationship (plateau effect vs. proportional decline) for vaccine potency in chickens but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect curve. |
| popPK | Cacek_1986 | irrelevant | 0 | 0 | The paper is a review of phenytoin bioavailability and does not study algeldrate or report any pharmacokinetic parameters for it. |
| popPK | Chandra_2007 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of azithromycin, not algeldrate. |
| popPK | Cometa_2023 | irrelevant | 0 | 0 | The paper focuses on the development and characterization of Boswellia serrata extract-loaded layered double hydroxide composites and does not involve the drug algeldrate or report any pharmacokinetic parameters. |
| PD | Cometa_2023 | not_relevant | 0 | 0 | The paper focuses on the material characterization and in vitro bioactivity (antimicrobial/anti-inflammatory) of Boswellia serrata extract composites, not on the pharmacokinetics or pharmacodynamics of algeldrate. |
| PD | Coulson_2022 | not_relevant | 3 | 2 | The paper is a systematic review reporting median concentrations for different toxicity outcomes but does not provide a fitted dose-response curve or specific PD parameters like Emax or EC50. |
| popPK | Córdoba-Díaz_1998 | irrelevant | 0 | 0 | The study focuses on the in-vitro interaction between norfloxacin and antacids (including algeldrate) via chelation, not on the pharmacokinetic parameters of algeldrate itself. |
| popPK | Day_1987 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of tenoxicam, not algeldrate. |
| popPK | Di_2024 | irrelevant | 0 | 0 | The paper studies vaccine adjuvants (alum) and antigen binding, not the pharmacokinetics of the drug algeldrate. |
| popPK | EFSA_2024 | irrelevant | 0 | 0 | The paper is a risk assessment of polybrominated diphenyl ethers (PBDEs) and does not involve the drug algeldrate or report any pharmacokinetic parameters for it. |
| PD | EFSA_2024 | not_relevant | 0 | 0 | The paper is a risk assessment of polybrominated diphenyl ethers (PBDEs) in food and does not involve the drug algeldrate or report any pharmacodynamic parameters. |
| PD | Elhabal_2025 | not_relevant | 1 | 0 | The paper reports qualitative pharmacodynamic effects (percent changes in cytokines) in an animal model but does not provide concentration-effect data, dose-response curves, or numeric PD parameters (Emax, EC50) for algeldrate or the drug. |
| popPK | Flor_1990 | irrelevant | 0 | 0 | The study investigates the effect of antacids on ofloxacin bioavailability, not the pharmacokinetics of algeldrate. |
| popPK | Galeazzi_1977 | irrelevant | 0 | 0 | The study investigates the bioavailability of indomethacin, not algeldrate, and does not report PK parameters for the target drug. |
| PD | Guld_1978 | not_relevant | 2 | 0 | The paper describes a qualitative comparison of dose-response relationships (delayed hypersensitivity) in guinea pigs but does not provide numeric PD parameters, concentration-effect curves, or a formal PK/PD model. |
| popPK | Hem_1982 | irrelevant | 0 | 0 | The paper evaluates antacid properties and composition of aluminum/magnesium hydroxide suspensions, not the pharmacokinetics of algeldrate. |
| PD | Hoffmann_2022 | not_relevant | 2 | 1 | The study reports epidemiological risk factors (rate ratios) for granulomas based on cumulative aluminum dose, but does not provide pharmacokinetic data or a pharmacodynamic exposure-response model with parameters like Emax or EC50. |
| PD | Holt_1987 | not_relevant | 0 | 0 | The paper describes immunological tolerance mechanisms in animal models and does not report pharmacodynamic parameters or exposure-response relationships for the drug algeldrate. |
| PD | Höpfner_1997 | not_relevant | 0 | 0 | The paper studies acarbose, not algeldrate, and reports only qualitative/summary efficacy metrics (AUC, Cmax) without numeric PD parameters or concentration-effect curves. |
| popPK | Itano_2023 | irrelevant | 0 | 0 | The paper studies the immunomodulatory effects of the bacterial strain EDP1815 (Prevotella histicola) and does not mention or report pharmacokinetic parameters for algeldrate. |
| PD | Itano_2023 | not_relevant | 2 | 1 | The paper reports clinical efficacy and preclinical dose-response trends for a live bacterial preparation (EDP1815) but does not provide numeric pharmacodynamic parameters (e.g., Emax, EC50) or a formal exposure-response model, as the drug is not systemically absorbed and no PK/PD modeling is performed. |
| popPK | Jacobse_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of adalimumab, not algeldrate. |
| PD | Jacobse_2021 | not_relevant | 0 | 0 | The paper reports population PK modeling and qualitative PD comparisons (cytokine levels, pain scores) but does not provide a quantitative exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50). |
| PD | Jenkins_1989 | not_relevant | 1 | 0 | The paper reports clinical outcomes (phosphate control, bone toxicity) at a fixed low dose but does not provide a concentration-effect curve, dose-response model, or numeric PD parameters like Emax or EC50. |
| popPK | Kanefendt_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of asundexian, not algeldrate. |
| PD | Kellner_1992 | not_relevant | 0 | 0 | The paper studies adjuvants (lipopeptides, aluminium hydroxide) and does not report any pharmacodynamic or exposure-response data for algeldrate. |
| popPK | Kirch_1982 | irrelevant | 0 | 0 | The paper is a review of atenolol pharmacokinetics and does not report quantitative PK parameters for algeldrate. |
| PD | Kirch_1982 | not_relevant | 1 | 0 | The text is a review of atenolol (not algeldrate) and only qualitatively mentions a linear relationship between plasma levels and beta-blocking effect without providing numeric PD parameters. |
| popPK | Koyyada_2021 | irrelevant | 0 | 0 | The paper is a review of adverse effects of proton pump inhibitors and does not mention algeldrate or report any pharmacokinetic parameters. |
| PD | Larsen_2002 | not_relevant | 0 | 0 | The paper studies the adjuvant effect of phthalates, not algeldrate, and does not report any pharmacodynamic or exposure-response parameters for algeldrate. |
| popPK | Lober_1999 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of gatifloxacin, not algeldrate. |
| popPK | Lockard_1979 | irrelevant | 0 | 0 | The study evaluates the efficacy and toxicity of polyethylene glycol 400 (PEG 400) in monkeys, not algeldrate, and reports no pharmacokinetic parameters for algeldrate. |
| PD | Lofthouse_2002 | not_relevant | 2 | 1 | The paper describes a qualitative dose-response trend for a vaccine delivery system but does not provide numeric PD parameters or a quantitative exposure-response model. |
| PD | Lohmann_1991 | not_relevant | 0 | 0 | The study investigates the effect of an antacid on the pharmacokinetics (absorption) of vinpocetine, not the pharmacodynamic or exposure-response relationship of algeldrate. |
| popPK | Lyons-Weiler_2020 | irrelevant | 0 | 0 | The paper focuses on aluminum adjuvant toxicity modeling, not the pharmacokinetics of the drug algeldrate. |
| PD | Lücker_1985 | not_relevant | 0 | 0 | The study reports no change in pharmacokinetics or pharmacodynamics (urinary excretion) and provides no numeric PD parameters or concentration-effect relationship. |
| popPK | Mallick_2007 | irrelevant | 0 | 0 | The study focuses on the interaction between gatifloxacin and aluminium hydroxide, not the pharmacokinetics of algeldrate. |
| popPK | Nakatani_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of fluoroquinolones and the effect of metal ions on their permeation, not algeldrate. |
| popPK | Neuvonen_1988 | irrelevant | 0 | 0 | The study investigates the effect of antacids on the pharmacokinetics of tolfenamic and mefenamic acids, not algeldrate. |
| popPK | Nguyen_1989 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of doxycycline, not algeldrate. |
| popPK | Nix_1989 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ciprofloxacin, with algeldrate (as part of Maalox) serving only as a co-administered antacid, not the subject drug. |
| popPK | Oda_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of casearin B and caseargrewiin F, not algeldrate. |
| PD | Osterballe_1982 | not_relevant | 2 | 1 | The paper reports qualitative dose-dependent side effects (e.g., threshold of 1,000 units for major SSE) but lacks a formal PK/PD model, concentration-effect curve, or numeric PD parameters like Emax/EC50. |
| PD | Poulsen_1985 | not_relevant | 0 | 0 | The paper describes a laboratory method (AlRAST) for measuring IgE levels using aluminum hydroxide as a sorbent, not a pharmacodynamic or exposure-response analysis of algeldrate as a drug. |
| popPK | Priest_1996 | irrelevant | 0 | 0 | The study investigates aluminium citrate and hydroxide, not algeldrate, and reports fractional uptake rather than PK parameters for the target drug. |
| popPK | Priest_2021 | irrelevant | 0 | 0 | The paper studies the bioavailability of various aluminium compounds in rats, not the pharmacokinetics of the specific drug algeldrate. |
| popPK | Ranade_2001 | irrelevant | 0 | 0 | The paper is a review of magnesium salts and does not mention algeldrate or provide any pharmacokinetic parameters for it. |
| popPK | Ranchon_2018 | irrelevant | 0 | 0 | The study focuses on methotrexate pharmacokinetics and interactions with antacids, and does not report any pharmacokinetic parameters for algeldrate. |
| popPK | Ritter_1985 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of muzolimine, not algeldrate, and algeldrate is not mentioned or used as a subject drug. |
| popPK | Rudiman_2023 | irrelevant | 0 | 0 | The paper is a systematic review of topical sucralfate for wound healing and pain, not a pharmacokinetic study of algeldrate. |
| PD | Rudiman_2023 | not_relevant | 0 | 0 | The paper is a systematic review and meta-analysis of clinical trials evaluating the efficacy of topical sucralfate; it does not report pharmacokinetic data, exposure-response relationships, or numeric pharmacodynamic parameters (e.g., Emax, EC50) for the drug. |
| PD | Scott_2004 | not_relevant | 0 | 0 | The paper reports a pharmacokinetic drug-drug interaction study for lumiracoxib, not a pharmacodynamic or exposure-response analysis for algeldrate. |
| popPK | Shelton_1992 | irrelevant | 0 | 0 | The paper is a review of didanosine (ddI) pharmacokinetics and does not contain any data for algeldrate. |
| popPK | Snell_2002 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of oseltamivir and its metabolite Ro 64-0802, not algeldrate. |
| popPK | Sun_2026 | irrelevant | 0 | 0 | The paper describes an immunotherapy mechanism using aluminum hydroxide (Alum) as a delivery platform, not a pharmacokinetic study of algeldrate, and contains no PK parameters. |
| PD | Tay_2011 | not_relevant | 0 | 0 | The paper investigates the effect of aluminium hydroxide concentration on the in vitro dissolution of indomethacin, which is a physicochemical formulation study, not a pharmacodynamic or exposure-response analysis of a drug's biological effect. |
| popPK | Thomson_1989 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for lisinopril, not algeldrate. |
| PD | Thomson_1989 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics (PK) of lisinopril, not algeldrate, and contains no pharmacodynamic (PD) or exposure-response modeling. |
| popPK | Tobert_1981 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of diflunisal, with algeldrate (aluminum hydroxide) serving only as a co-administered antacid, not the subject drug. |
| PD | Toothaker_1989 | not_relevant | 0 | 0 | The text describes only the pharmacokinetic properties (absorption, bioavailability, half-life) of enoxacin and contains no pharmacodynamic or exposure-response data. |
| popPK | Vergin_1989 | irrelevant | 0 | 0 | The study investigates the effect of an antacid on the pharmacokinetics of pirenzepine, not algeldrate. |
| PGx | Wang_2021 | not_relevant | 0 | 0 | The paper investigates genetic associations with childhood asthma and immune responses, not the pharmacokinetics or pharmacodynamics of algeldrate. |
| PD | Xiang_2023 | not_relevant | 0 | 0 | The paper describes the adsorption of fluoride ions by an aluminum-hydroxide-modified diatomite material in an environmental context, not the pharmacodynamics of a drug in a biological system. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | The provided evidence consists only of a conference title and contains no pharmacokinetic data or specific study details for algeldrate. |
| PD | unknown_2018 | not_relevant | 0 | 0 | The provided text is only a header for conference abstracts and contains no specific data, results, or PD parameters for algeldrate. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_algeldrate`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
