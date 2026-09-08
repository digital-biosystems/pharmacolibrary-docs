# aceclofenac

- **generic name:** aceclofenac
- **ATC codes:** `M01AB16`, `M02AA25`
- **DrugBank:** [DB06736](https://go.drugbank.com/drugs/DB06736)
- **groups:** approved

## About

**Description.** Aceclofenac is an oral non-steroidal anti-inflammatory drug (NSAID) with marked anti-inflammatory and analgesic properties used to treat osteoarthritis, rheumatoid arthritis and ankylosing spondylitis. It is reported to have a higher anti-inflammatory action or at least comparable effects than conventional NSAIDs in double-blind studies [A19667, A19668, A19670]. Aceclofenac potently inhibits the cyclo-oxygenase enzyme (COX) that is involved in the synthesis of prostaglandins, which are inflammatory mediators that cause pain, swelling, inflammation, and fever. Aceclofenac belongs to BCS Class II as it possesses poor aqueous solubility [A19667]. It displays high permeability to penetrate into synovial joints where in patients with osteoarthritis and related conditions, the loss of articular cartilage in the area causes joint pain, tenderness, stiffness, crepitus, and local inflammation [A19666]. Aceclofenac is also reported to be effective in other painful conditions such as dental and gynaecological conditions [A19672]. In 1991, aceclofenac was developed as an analog of a commonly prescribed NSAID, [DB00586], via chemical modification in effort to improve the gastrointestinal tolerability of the drug. It is a more commonly prescribed drug in Europe.

**Indication.** Aceclofenac is indicated for the relief of pain and inflammation in osteoarthritis, rheumatoid arthritis and ankylosing spondylitis.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 0/1/0 | 0/0/0 | 0/0/2 | not captured | not captured | 24 | 25/0 | 15/9 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Kim_2016](drugs/drug_aceclofenac/Aceclofenac_Kim2016_reference.md) | Kim E et al., Modeling of aceclofenac metabolism to m…, Drug metabolism and pharmac… (2016) | [10.1016/j.dmpk.2016.10.001](https://doi.org/10.1016/j.dmpk.2016.10.001) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2C8** | `Q27` · CL/F | metabolism | [Agúndez_2009](drugs/drug_aceclofenac/pgx_Ag_ndez_2009_CYP2C8_Q27.md) | Agúndez JA et al., Genetically based impairment in CYP2C8-…, Expert opinion on drug meta… (2009) | [10.1517/17425250902970998](https://doi.org/10.1517/17425250902970998) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2C9** | `Q27` · CL/F | metabolism | [Agúndez_2009](drugs/drug_aceclofenac/pgx_Ag_ndez_2009_CYP2C9_Q27.md) | Agúndez JA et al., Genetically based impairment in CYP2C8-…, Expert opinion on drug meta… (2009) | [10.1517/17425250902970998](https://doi.org/10.1517/17425250902970998) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 84 matched, 40 returned
- **screened:** 7  ·  **relevant:** 7
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Afzal_2021 | irrelevant | not captured | not captured | The study presents basic non-compartmental pharmacokinetic data in rabbits for a cocrystal formulation rather than population or compartmental modeling. |
| popPK | Aldeeb_2024 | irrelevant | not captured | not captured | The study focuses on nanoemulgel formulation, in vitro drug release, and in vivo anti-inflammatory efficacy without reporting any quantitative pharmacokinetic parameters for aceclofenac. |
| PD | Aldeeb_2024 | not_relevant | 0 | 0 | The paper describes formulation development and in vivo efficacy studies using descriptive statistics, but does not perform population pharmacodynamic or exposure-response modeling. |
| PGx | Amo_2016 | not_relevant | 0 | 0 | The study investigates genetic associations with hypersensitivity risk (an adverse event), not pharmacokinetic or pharmacodynamic parameters of aceclofenac, and reports no significant findings for this drug. |
| popPK | Bae_2012 | irrelevant | not captured | not captured | The study reports only standard non-compartmental bioequivalence parameters (AUC, Cmax) without population/compartmental modeling or specific disposition parameters. |
| PD | Bawazeer_2018 | not_relevant | 0 | 0 | The paper describes an analytical method validation (UPLC) for quantifying drug concentrations in tablets, not a population pharmacodynamic or exposure-response modeling study. |
| popPK | Brogden_1996 | irrelevant | not captured | not captured | This is a narrative review summarizing basic pharmacokinetic data without original compartmental or population-PK modeling parameters. |
| popPK | Dua_2010 | irrelevant | not captured | not captured | The study focuses on topical formulation development and in vitro release kinetics without reporting any systemic pharmacokinetic parameters or population PK modeling. |
| PD | Dua_2010 | not_relevant | 0 | 0 | The paper describes formulation development and in vitro/in vivo efficacy studies using descriptive statistics, without any population pharmacokinetic/pharmacodynamic modeling or exposure-response analysis. |
| popPK | El-Masry_2023 | irrelevant | not captured | not captured | The paper describes an in vitro analytical method for quantifying aceclofenac and contains no pharmacokinetic data or modeling. |
| PD | El-Masry_2023 | not_relevant | 0 | 0 | The paper describes an in vitro analytical method (fluorescence quenching) for quantifying aceclofenac, not a population pharmacodynamic or exposure-response model. |
| PD | El_1999 | not_relevant | 0 | 0 | The paper describes analytical chemistry methods (spectrophotometry and spectrofluorimetry) for quantifying aceclofenac in pharmaceutical formulations, not population pharmacodynamic or exposure-response modeling. |
| popPK | Garg_2017 | irrelevant | not captured | not captured | The paper focuses on nanocarrier formulation and transdermal penetration without reporting systemic population or compartmental pharmacokinetic parameters. |
| popPK | Grau_1991 | irrelevant | not captured | not captured | The paper focuses exclusively on preclinical pharmacodynamics and safety without reporting any quantitative pharmacokinetic parameters. |
| PD | Han_2025 | not_relevant | 0 | 0 | The paper is an epidemiological cohort study using survival analysis (Cox models) to assess adverse event risks, not a population pharmacodynamic modeling study estimating exposure-response parameters. |
| PD | Henrotin_2001 | not_relevant | 0 | 0 | The paper describes an in vitro mechanistic study on human chondrocytes and enzyme assays, not a population pharmacodynamic or exposure-response modeling study in vivo. |
| PD | Jeong_2023 | not_relevant | 1 | 0 | The paper uses machine learning (GBM) on administrative claims data to predict gastric ulcer risk based on medication adherence and comorbidities, but does not perform population pharmacodynamic modeling or estimate PD parameters like Emax or EC50. |
| popPK | Kim_2013 | irrelevant | not captured | not captured | The study uses noncompartmental analysis and only reports Cmax and AUC ratios, lacking the requested population-PK or compartmental disposition parameters for aceclofenac. |
| PGx | Kim_2016 | not_relevant | 0 | 0 | The paper models pharmacokinetics in healthy volunteers without analyzing genetic variants or their effects on PK/PD parameters. |
| PD | Kumar_2021 | not_relevant | 0 | 0 | The paper reports on pharmacokinetic parameters and bioavailability of aceclofenac cocrystals, but does not present a population pharmacodynamic or exposure-response model. |
| popPK | Liu_2016 | irrelevant | not captured | not captured | The paper only reports non-compartmental pharmacokinetic metrics from a rabbit formulation study and lacks population or compartmental disposition parameters. |
| PGx | Macías_2021 | not_relevant | 0 | 0 | The study investigates genetic associations with NSAID cross-hypersensitivity (an adverse drug reaction), but does not report measured pharmacokinetic or pharmacodynamic parameters for aceclofenac. |
| PGx | Martínez_2006 | not_relevant | 2 | 1 | The paper is a review that mentions aceclofenac only in the context of general GI bleeding risk associated with CYP2C9 variants, without reporting specific pharmacokinetic or pharmacodynamic parameter changes for aceclofenac itself. |
| popPK | Mathurm_2011 | irrelevant | not captured | not captured | The study focuses on in vitro drug release kinetics and pharmacodynamic efficacy of ocular inserts, with no systemic or population pharmacokinetic parameters reported. |
| PD | Minhaj_2025 | not_relevant | 0 | 0 | The paper is a phytochemical and pharmacological evaluation of Rondeletia leucophylla extract, using aceclofenac only as a standard comparator in anti-inflammatory assays; it does not report any population pharmacodynamic or exposure-response modeling for aceclofenac. |
| popPK | Moon_2022 | irrelevant | not captured | not captured | The paper reports standard non-compartmental AUC and Cmax ratios from a crossover drug interaction study rather than population or compartmental pharmacokinetic parameters. |
| popPK | Mutalik_2008 | irrelevant | not captured | not captured | The study focuses on pharmaceutical formulation and lacks quantitative compartmental or population-pharmacokinetic modeling parameters for aceclofenac. |
| popPK | Narayanaswamy_2024 | irrelevant | 1 | 8 | This is a docking/toxicity study, not a pharmacokinetic study; numeric aceclofenac docking values are present, but no PK disposition parameters. |
| PGx | Narayanaswamy_2024 | not_relevant | 0 | 0 | The study is an in silico molecular docking analysis of drug-HLA binding affinities and does not report empirical pharmacokinetic or pharmacodynamic parameter changes based on genotype. |
| popPK | Parekh_2026 | irrelevant | not captured | not captured | The paper focuses on formulation development and pharmacodynamic evaluation, lacking any quantitative pharmacokinetic parameters or population/compartmental modeling for aceclofenac. |
| popPK | Park_2013 | irrelevant | 0 | 0 | Aceclofenac is only a concomitant analgesic in a tamsulosin stone-clearance study, and no aceclofenac PK parameters are reported. |
| PD | Park_2016 | not_relevant | 0 | 0 | The paper describes formulation development and in vitro cytotoxicity assays, lacking any population pharmacokinetic/pharmacodynamic modeling or exposure-response analysis. |
| PGx | Ponsoda_2004 | not_relevant | 2 | 1 | The paper compares in vitro and in vivo metabolism of aceclofenac to validate a model, reporting phenotypic variability but does not report specific gene variants or genotypes affecting PK/PD parameters. |
| popPK | Raju_2015 | irrelevant | not captured | not captured | The paper focuses on topical formulation development, in-vitro release, and pharmacodynamic effects, without reporting any quantitative pharmacokinetic parameters or modeling for aceclofenac. |
| popPK | Shah_2025 | irrelevant | not captured | not captured | The paper focuses on molecular salt synthesis and in-vitro characterization without reporting any quantitative pharmacokinetic parameters or models for aceclofenac. |
| popPK | Sharma_2016 | irrelevant | not captured | not captured | The paper focuses on topical formulation development and pharmacodynamic evaluation without reporting quantitative systemic pharmacokinetic parameters or modeling for aceclofenac. |
| PD | Shavi_2009 | not_relevant | 0 | 0 | The paper describes pharmaceutical formulation development and in vitro dissolution studies, containing no clinical pharmacokinetic or pharmacodynamic data for population modeling. |
| popPK | Solanki_2011 | irrelevant | not captured | not captured | The paper focuses exclusively on in vitro formulation development and dissolution testing, providing no in vivo pharmacokinetic data or modeling for aceclofenac. |
| PD | Solanki_2011 | not_relevant | 0 | 0 | The paper describes pharmaceutical formulation and in vitro dissolution studies, containing no clinical pharmacokinetic or pharmacodynamic data or modeling. |
| popPK | Usha_2008 | irrelevant | not captured | not captured | The study focuses on formulation development and only provides basic non-compartmental pharmacokinetic data from a small oral crossover trial, without population or compartmental modeling. |
| PD | Yong_2005 | not_relevant | 0 | 0 | The paper reports a pharmacokinetic bioequivalence study comparing two formulations using non-compartmental analysis, with no pharmacodynamic data or exposure-response modeling. |
| PD | Younis_2023 | not_relevant | 0 | 0 | The paper describes formulation development and in vitro cytotoxicity assays (IC50) for a nanoemulsion, lacking any population pharmacokinetic/pharmacodynamic modeling or exposure-response analysis. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_aceclofenac`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
