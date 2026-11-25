<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V04C&quot;,&quot;href&quot;:&quot;atc/V04C.md&quot;},{&quot;label&quot;:&quot;tuberculin&quot;}]"></div>

# tuberculin

- **generic name:** tuberculin
- **ATC codes:** `V04CF01`
- **DrugBank:** none · **PubChem:** none
- **groups:** not captured

## About

Tuberculin, specifically purified protein derivative, is a bacterial antigen used to diagnose tuberculosis infections. It is administered via injection into the skin.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q29505](https://www.wikidata.org/wiki/Q29505), [Wikipedia](https://en.wikipedia.org/wiki/Tuberculin?oldid=1368407135) (CC BY-SA 4.0) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span> | [Zsidai_1975_reaction_diameters](drugs/drug_tuberculin/pd_Zsidai_1975_reaction_diameters.md) | reaction diameters biomarker turnover ← tuberculin purified protein derivative | — | Zsidai J et al., A quick method for the estimation of th…, Annales immunologiae Hungar… (1975) | — |
| <span class="pk-badge pk-badge--red">Rejected</span> | [García_1981_hypersensitivity_reaction_to_tuberculin](drugs/drug_tuberculin/pd_Garc_a_1981_hypersensitivity_reaction_to_tuberculin.md) | hypersensitivity reaction to tuberculin ← tuberculin · model not identified | — | García Tamayo F, [Perspectives on immunologic damage], Boletin medico del Hospital… (1981) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 08:18 | 0:04 | 0/0/0 | 1/1/0 | 0/0/0 | 3,688/174 | einfracz / qwen3.8-27b | 22 | 6/16 | 22/0 | 0 |

## Coverage

- **PubMed hits:** 362 matched, 97 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdelgadir_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the synthetic cannabinoid AMB-FUBINACA in rats, not tuberculin (which is only mentioned as the type of syringe used for sampling). |
| PGx | Abdelgadir_2024 | not_relevant | 0 | 0 | The paper describes the pharmacokinetics of a synthetic cannabinoid in rats, with no mention of gene variants or pharmacogenomics. |
| popPK | Aggerbeck_2006 | irrelevant | 0 | 0 | The paper describes a safety and immunogenicity study of a recombinant ESAT-6 antigen in animals, not a pharmacokinetic study of tuberculin. |
| PGx | Aggerbeck_2006 | not_relevant | 0 | 0 | The paper reports on the safety and diagnostic efficacy of a recombinant tuberculin antigen (rdESAT-6) in animal models but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Alcaide_1996 | irrelevant | 0 | 0 | This is an epidemiological study on risk factors for tuberculosis; "tuberculin" refers to the diagnostic skin test, not a drug with measured pharmacokinetics. |
| PGx | Alcaide_1996 | not_relevant | 0 | 0 | The paper studies the association between smoking and tuberculosis risk in a case-control study and does not investigate pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters of tuberculin. |
| popPK | Alli_2021 | irrelevant | 0 | 0 | Clinical outcome study of tubercular uveitis treatment; tuberculin is only a diagnostic skin test and no PK parameters are reported. |
| popPK | Altet_1996 | irrelevant | 0 | 0 | The study is a case-control epidemiological analysis of passive smoking and tuberculosis risk, containing no pharmacokinetic data for the drug tuberculin. |
| PGx | Altet_1996 | not_relevant | 0 | 0 | The paper reports an environmental risk factor (passive smoking) for TB susceptibility, not a pharmacogenomic effect on the PK/PD of tuberculin. |
| popPK | Anderson_1997 | irrelevant | 0 | 0 | The study is an epidemiological case-control study on tuberculin skin test conversion rates, not a pharmacokinetic study. |
| PGx | Anderson_1997 | not_relevant | 0 | 0 | The study investigates the association between cigarette smoking and tuberculin skin test conversion; it does not report a pharmacogenomic effect (gene variant) on PK or PD parameters. |
| popPK | Apt_1993 | irrelevant | 0 | 0 | The study investigates H-2 complex control of mortality and immune responses to tuberculosis in mice, not the pharmacokinetics of the drug tuberculin. |
| PGx | Apt_1993 | not_relevant | 0 | 0 | The paper studies genetic control of immune response and mortality in tuberculosis infection, not the pharmacokinetics or pharmacodynamics of the drug tuberculin. |
| popPK | Auclair_2002 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for antituberculous drugs (isoniazid, rifampin, amikacin, etc.), not for the diagnostic agent tuberculin. |
| PGx | Auclair_2002 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics of antituberculous drugs in bongo antelopes but contains no information regarding human or animal gene variants/genotypes influencing drug response. |
| popPK | Badawy_2013 | irrelevant | 0 | 0 | The paper is an immunological study investigating gene polymorphisms and vaccine efficacy using the tuberculin skin test as a diagnostic marker, containing no pharmacokinetic data. |
| popPK | Baral_1976 | irrelevant | 0 | 0 | The study is an in vitro immunology experiment investigating lymphocyte response to irradiation, not a pharmacokinetic study of tuberculin disposition. |
| PGx | Baral_1976 | not_relevant | 0 | 0 | The paper studies radiation effects on lymphocyte mitogenic responses, not pharmacogenomic modulation of tuberculin PK/PD. |
| popPK | Beets_1979 | irrelevant | 0 | 0 | The study is an in vitro immunological assay investigating histamine's effect on lymphocyte activation, using tuberculin (P.P.D.) as an antigen stimulus rather than a drug for pharmacokinetic analysis. |
| PGx | Beets_1979 | not_relevant | 0 | 0 | The paper studies the inhibition of lymphocyte activation by histamine, not the pharmacogenomics of tuberculin itself. |
| popPK | Bercovich_1998 | irrelevant | 0 | 0 | The study evaluates the potency of brucellin as a diagnostic agent in cattle using a tuberculin-based standard, and does not report any pharmacokinetic parameters (CL, V, etc.) for tuberculin. |
| PGx | Bercovich_1998 | not_relevant | 0 | 0 | The paper describes potency testing of a brucellin vaccine in cattle and does not involve human pharmacogenomics or genetic variants affecting pharmacokinetic/pharmacodynamic parameters. |
| popPK | Bisht_2022 | irrelevant | 0 | 0 | The paper is a review of the pharmacological activities of liquorice (Glycyrrhiza glabra) and does not study tuberculin or report pharmacokinetic parameters for it. |
| PGx | Bisht_2022 | not_relevant | 0 | 0 | The paper is a review on the pharmacological activities of liquorice (Glycyrrhiza glabra) and does not report pharmacogenomic effects on PK/PD parameters of tuberculin. |
| popPK | Borgs_1986 | irrelevant | 0 | 0 | The study uses tuberculin as an immunological inducer to create skin lesions for tracking lymphocyte localization, rather than measuring the pharmacokinetic parameters of the tuberculin itself. |
| PGx | Borgs_1986 | not_relevant | 0 | 0 | The paper describes a radiolabeled lymphocyte localization assay in sheep using tuberculin to induce skin lesions, but it does not investigate any genetic variants or their effect on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Chouchkova_1986 | irrelevant | 0 | 0 | The paper studies BCG vaccine biological activity and immunogenicity, not the pharmacokinetics of tuberculin. |
| PGx | Chouchkova_1986 | not_relevant | 0 | 0 | The paper studies BCG vaccine production and tuberculin sensitivity, but does not report pharmacogenomic effects on PK/PD parameters of tuberculin as a drug. |
| popPK | Collins_1988 | irrelevant | 0 | 0 | The paper investigates the biological activity and immunogenicity of protein antigens, not the pharmacokinetic disposition of tuberculin as a drug. |
| PGx | Collins_1988 | not_relevant | 0 | 0 | The paper describes the immunological properties of Mycobacterium tuberculosis antigens (PD-like effect of an antigen), not the pharmacogenomic influence on the pharmacokinetics or pharmacodynamics of the drug tuberculin itself. |
| popPK | Coulson_1967 | irrelevant | 0 | 0 | This is an immunological study on lymphocyte response to tuberculin, not a pharmacokinetic study measuring disposition parameters like clearance or volume. |
| PGx | Coulson_1967 | not_relevant | 0 | 0 | The paper reports immunological response to tuberculin PPD but does not investigate genetic variants or genotypes affecting PK or PD. |
| popPK | Courtney_2026 | irrelevant | 0 | 0 | Tuberculin appears only as the Mantoux skin test for TB screening; the PK subject drugs are rifapentine and isoniazid, not tuberculin. |
| PGx | Cox_2025 | not_relevant | 0 | 0 | Study of multi-omic signatures of resistance to TST/IGRA conversion; no drug PK/PD parameters or pharmacogenomic drug effects reported. |
| popPK | Drusano_1995 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ciprofloxacin, not tuberculin. |
| PGx | Drusano_1995 | not_relevant | 0 | 0 | The study investigates ocular pharmacokinetics of ciprofloxacin in rabbits and contains no information regarding tuberculin or any genetic variants. |
| popPK | Eassa_2011 | irrelevant | 0 | 0 | The study is a clinical efficacy trial for immunotherapy of warts and reports no pharmacokinetic parameters (CL, V, half-life) for tuberculin. |
| PGx | Eassa_2011 | not_relevant | 0 | 0 | The study is a clinical trial of PPD as an immunotherapy for warts and does not investigate pharmacogenomic variations affecting the PK or PD of tuberculin. |
| popPK | Fan_2023 | irrelevant | 0 | 0 | Tuberculin appears only as a "tuberculin syringe" for tumor cell injection; the PK/PD models concern rHuEPO, romiplostim, and carboplatin in rats, with no tuberculin disposition parameters. |
| popPK | Faulk_1974 | irrelevant | 0 | 0 | The paper is an immunological study of placental eluates using tuberculin only as a mitogen to test lymphocyte inhibition; it contains no pharmacokinetic data for tuberculin. |
| PGx | Faulk_1974 | not_relevant | 0 | 0 | The paper studies immunological properties of human placenta IgG and its effect on lymphocyte responses to tuberculin, but does not report pharmacogenomic effects on the PK or PD parameters of tuberculin as a drug. |
| popPK | Gafar_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of rifampicin, not tuberculin (which is mentioned only as a diagnostic test for eligibility). |
| PGx | Gafar_2026 | not_relevant | 0 | 0 | The study evaluates population pharmacokinetics of rifampicin (not tuberculin) and does not report any pharmacogenomic effects or gene variant associations. |
| popPK | Gangneux_2019 | irrelevant | 0 | 0 | no_text gate: only 297 chars of text extracted (&lt; 400) |
| PGx | Gangneux_2019 | not_relevant | 0 | 0 | The text is a conference invitation and does not report any pharmacogenomic or pharmacological data. |
| popPK | García_1981 | irrelevant | 0 | 0 | The paper is a review of immunological history and mechanisms, mentioning tuberculin only in the context of hypersensitivity reactions, and contains no pharmacokinetic parameters. |
| PGx | García_1981 | not_relevant | 0 | 0 | The text discusses general immunology concepts and historical observations of hypersensitivity to tuberculin, reporting no pharmacogenomic data or drug pharmacokinetics/dynamics. |
| popPK | Godoy_2013 | irrelevant | 0 | 0 | The study is an epidemiological contact investigation using the tuberculin skin test for diagnosis, not a pharmacokinetic study of tuberculin disposition. |
| PGx | Godoy_2013 | not_relevant | 0 | 0 | The paper describes epidemiological contact investigation and tuberculin test prevalence, not pharmacogenomic effects on PK/PD parameters. |
| popPK | Godoy_2017 | irrelevant | 0 | 0 | The paper describes an epidemiological investigation of a tuberculosis outbreak using tuberculin skin tests for diagnosis, not a pharmacokinetic study of the drug tuberculin. |
| PGx | Godoy_2017 | not_relevant | 0 | 0 | The paper is an epidemiological study of a TB transmission outbreak and does not investigate genetic variants or their effects on the pharmacokinetics or pharmacodynamics of tuberculin. |
| popPK | Gómez-Perales_2021 | irrelevant | 0 | 0 | no_text gate: only 59 chars of text extracted (&lt; 400) |
| PGx | Gómez-Perales_2021 | not_relevant | 0 | 0 | The paper discusses the myth of iodine allergy in nuclear medicine and does not report pharmacogenomic effects on tuberculin. |
| popPK | Haagsma_1986 | irrelevant | 0 | 0 | The paper describes potency testing and bio-assays for the diagnostic use of tuberculin in bovine tuberculosis, not pharmacokinetic modeling or disposition parameters. |
| PGx | Haagsma_1986 | not_relevant | 0 | 0 | The paper focuses on the bio-assay for quality control of bovine tuberculin and does not discuss human pharmacogenomics. |
| popPK | Hasløv_1987 | irrelevant | 0 | 0 | The paper is an immunological study of MPB 70 protein reactivity in guinea pigs and does not contain any pharmacokinetic data for tuberculin. |
| PGx | Hasløv_1987 | not_relevant | 0 | 0 | The paper describes the immunological properties and biological activity of the protein MPB 70 in guinea pigs, containing no human pharmacogenomic data or analysis of genetic variants affecting drug PK/PD. |
| popPK | Holm_1967 | irrelevant | 0 | 0 | The study investigates the cytotoxic potential of stimulated human lymphocytes, with tuberculin (PPD) used only as an immunological stimulant, not for pharmacokinetic characterization. |
| PGx | Holm_1967 | not_relevant | 0 | 0 | The paper investigates general lymphocyte cytotoxicity and the role of tuberculin/PPD as an immunological stimulant, not the pharmacokinetics or pharmacodynamics of a specific drug affected by a genetic variant. |
| popPK | Hong_2023 | irrelevant | 0 | 0 | The study focuses on transcriptional responses to Mycobacterium tuberculosis infection and uses tuberculin only as a diagnostic context (TST conversion), not as a subject for pharmacokinetic analysis. |
| PGx | Hong_2023 | not_relevant | 0 | 0 | The paper studies host genetic/transcriptional differences in immune response to Mycobacterium tuberculosis, not the pharmacokinetics or pharmacodynamics of a drug. |
| PGx | Hong_2023_2 | not_relevant | 0 | 0 | Tuberculin is a diagnostic skin-test antigen, not a drug; the paper reports eQTL associations with TST/IGRA conversion and cytokine expression, not PK/PD parameters. |
| PGx | Hong_2024 | not_relevant | 1 | 3 | Tuberculin is a diagnostic skin-test antigen, not a drug; reported genotype effects concern eQTLs, cytokine expression, and TST/IGRA conversion, not PK/PD parameters of a medication. |
| popPK | Hur_2015 | irrelevant | 0 | 0 | The study evaluates immunoglobulin G (IgG) antibody responses to *Mycobacterium tuberculosis* antigens for diagnostic purposes and does not report any pharmacokinetic parameters for the drug tuberculin. |
| PGx | Hur_2015 | not_relevant | 0 | 0 | The study focuses on diagnostic serology (IgG responses to antigens) in TB patients, not on pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of tuberculin or any anti-tubercular drug. |
| popPK | Ivanov_1986 | irrelevant | 0 | 0 | The paper studies the effect of thermal treatment on tuberculin's structure and biological activity, not its pharmacokinetic disposition parameters. |
| PGx | Ivanov_1986 | not_relevant | 0 | 0 | The paper studies the effect of thermal treatment on tuberculin structure and biological activity, not pharmacogenomic effects of gene variants on PK or PD. |
| popPK | Kakiuchi_1981 | irrelevant | 0 | 0 | The study investigates B-cell immunology using PPD as a polyclonal activator, not the pharmacokinetics of tuberculin. |
| PGx | Kakiuchi_1981 | not_relevant | 0 | 0 | The paper studies B cell immunological responses to PPD as a polyclonal activator, not the pharmacokinetics or pharmacodynamics of tuberculin as a therapeutic drug. |
| popPK | Kiser_2012 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of isoniazid, not tuberculin. |
| PGx | Kiser_2012 | not_relevant | 0 | 0 | The paper studies Isoniazid, not tuberculin, so it does not report pharmacogenomic effects on tuberculin PK/PD parameters. |
| PGx | Kroon_2018 | not_relevant | 0 | 0 | Tuberculin is a diagnostic antigen, not a drug; no gene variant effect on PK/PD parameters is reported. |
| popPK | LANDI_1965 | irrelevant | 0 | 0 | The paper focuses on the physicochemical properties (molecular weight, composition) of tuberculin PPD, not its pharmacokinetic disposition in a biological system. |
| PGx | LANDI_1965 | not_relevant | 0 | 0 | The paper describes the physicochemical and biological properties of tuberculin PPD preparations but does not report on the effects of human gene variants on PK or PD parameters. |
| PGx | Lachmandas_2018 | not_relevant | 0 | 0 | Tuberculin is a diagnostic antigen, not a drug; the paper reports cytokine QTL effects on immune responses, not pharmacogenomic effects on any PK/PD parameter. |
| popPK | Leung_2007 | irrelevant | 0 | 0 | The study investigates epidemiological risk factors for tuberculosis using tuberculin skin testing as a diagnostic tool, not the pharmacokinetics of the drug tuberculin. |
| PGx | Leung_2007 | not_relevant | 0 | 0 | The study examines the relationship between smoking and TB risk in silicotic patients, with no pharmacogenomic data on tuberculin PK/PD parameters. |
| popPK | Lickliter_2020 | irrelevant | 0 | 0 | This is a PK study of camrelizumab (anti-PD-1 antibody); tuberculin appears only as an in-vitro assay reagent, not the subject drug. |
| popPK | Lin_2008 | irrelevant | 0 | 0 | The study is an epidemiological cross-sectional study on tuberculosis transmission, and tuberculin is used only as a diagnostic agent (tuberculin-skin-test), not as a subject drug for pharmacokinetic analysis. |
| PGx | Lin_2008 | not_relevant | 0 | 0 | The study focuses on tuberculosis transmission dynamics and treatment delay; it does not involve pharmacogenomics or the pharmacokinetics/pharmacodynamics of a drug. |
| popPK | MAGNUSSON_1958 | irrelevant | 0 | 0 | The paper describes the preparation and quality control (skin tests) of tuberculin, not pharmacokinetic disposition parameters. |
| PGx | MAGNUSSON_1958 | not_relevant | 0 | 0 | The paper describes the manufacturing process of a tuberculin batch (RT 23) and reports on yield and biological activity in animals, containing no data on genetic variants or pharmacokinetic/pharmacodynamic effects in humans. |
| popPK | Maes_2011 | irrelevant | 0 | 0 | The study evaluates the thermal stability and potency of tuberculin PPD as a diagnostic reagent in skin tests, not its pharmacokinetic disposition parameters (clearance, volume, etc.). |
| PGx | Maes_2011 | not_relevant | 0 | 0 | The paper investigates the thermal stability of tuberculin PPD formulations, not the effect of human genetic variants on pharmacokinetics or pharmacodynamics. |
| popPK | Manheimer_1973 | irrelevant | 0 | 0 | The paper is an in-vitro immunological study of macrophage migration inhibition where tuberculin is used as an immunogen, not a study of tuberculin pharmacokinetics. |
| PGx | Manheimer_1973 | not_relevant | 0 | 0 | The paper describes an immunological assay mechanism involving macrophages and tuberculin, with no genetic variants or pharmacokinetic/pharmacodynamic modeling involved. |
| popPK | Marier_2002 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of tobramycin, not tuberculin. |
| PGx | Marier_2002 | not_relevant | 0 | 0 | The paper compares pharmacokinetics of different formulations of tobramycin in rats, not a pharmacogenomic effect on tuberculin. |
| popPK | Martinez_2017 | irrelevant | 0 | 0 | The study is an observational epidemiological analysis of tuberculosis infection prevalence using the tuberculin skin test for diagnosis, and contains no pharmacokinetic modeling or disposition parameters for tuberculin. |
| PGx | Martinez_2017 | not_relevant | 0 | 0 | The paper investigates the association between diabetes/glycemic control and tuberculosis prevalence, not the effect of genetic variants on tuberculin pharmacokinetics or pharmacodynamics. |
| popPK | Mase_2016 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of levofloxacin, not tuberculin. |
| PGx | Mase_2016 | not_relevant | 0 | 0 | The paper investigates levofloxacin pharmacokinetics in children with tuberculosis, not the pharmacogenomics of tuberculin. |
| popPK | McFadden_1992 | irrelevant | 0 | 0 | The study investigates the immunological effect of verapamil on tuberculin-induced hypersensitivity reactions in humans, not the pharmacokinetic parameters (disposition) of tuberculin itself. |
| PGx | McFadden_1992 | not_relevant | 0 | 0 | The paper studies the immunological effect of verapamil on tuberculin skin reactions, not the effect of a gene variant on tuberculin pharmacokinetics or pharmacodynamics. |
| popPK | Meade_1974 | irrelevant | 0 | 0 | The study investigates immunological cellular assays (hypersensitivity and gold uptake) using tuberculin as an antigen, not the pharmacokinetics of the drug. |
| PGx | Meade_1974 | not_relevant | 0 | 0 | The paper describes an assay for cellular hypersensitivity to tuberculin and does not involve human pharmacogenomics, gene variants, or pharmacokinetic/pharmacodynamic parameters of a drug. |
| popPK | Miyabe-Nishiwaki_2021 | irrelevant | 0 | 0 | This is a propofol PK study in chimpanzees; tuberculin appears only as a routine veterinary skin test, with no tuberculin pharmacokinetic parameters reported. |
| popPK | Morris_1978 | irrelevant | 0 | 0 | no_text gate: only 393 chars of text extracted (&lt; 400) |
| PGx | Morris_1978 | not_relevant | 0 | 0 | The paper discusses a physiological immune response (anergy) to an antigen (tuberculin) in badgers, not a pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of a therapeutic drug. |
| popPK | Nishino_1984 | irrelevant | 0 | 0 | The paper investigates the effect of the anti-allergic agent KC-404 on allergic reactions, using the tuberculin reaction in guinea pigs only as a model for type IV hypersensitivity, not for pharmacokinetic analysis of tuberculin. |
| PGx | Nishino_1984 | not_relevant | 0 | 0 | The paper investigates the pharmacological effects of a drug (KC-404) on allergic reactions and does not report any pharmacogenomic analysis regarding gene variants or genotypes. |
| popPK | Nolan_1989 | irrelevant | 0 | 0 | The paper is a diagnostic study on the utility of sputum cultures for tuberculosis detection and does not contain any pharmacokinetic parameters or quantitative disposition data for tuberculin. |
| PGx | Nolan_1989 | not_relevant | 0 | 0 | The paper discusses diagnostic utility of sputum cultures and clinical factors associated with TB detection in immigrants, containing no pharmacogenomic data or PK/PD analysis. |
| popPK | Nyabenda_1985 | irrelevant | 0 | 0 | The study describes an in vitro macrophage migration inhibition test for titrating tuberculin potency, not a pharmacokinetic study of tuberculin disposition. |
| PGx | Nyabenda_1985 | not_relevant | 0 | 0 | The paper describes an in vitro test method for tuberculin potency using animal models and does not report any human pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Oettinger_1997 | irrelevant | 0 | 0 | The paper is an immunological study on delayed-type hypersensitivity epitopes in guinea pigs and contains no pharmacokinetic data for tuberculin. |
| PGx | Oettinger_1997 | not_relevant | 0 | 0 | The paper characterizes immunological epitopes in an animal model and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of tuberculin in humans. |
| popPK | Pedersen_1990 | irrelevant | 0 | 0 | The study investigates the immunomodulatory effects of isoprinosine on HIV patients, using tuberculin (PPD) only as an immunological stimulus, and reports no pharmacokinetic parameters for tuberculin. |
| PGx | Pedersen_1990 | not_relevant | 0 | 0 | The paper studies the immunomodulatory effects of isoprinosine and does not report pharmacogenomic effects on tuberculin PK/PD. |
| PGx | Pineda-Reyes_2019 | not_relevant | 0 | 0 | This is a drug-drug interaction (cobicistat–fluticasone) case report; no gene variant/genotype/phenotype effect on tuberculin PK/PD is reported. |
| popPK | Ranki_1978 | irrelevant | 0 | 0 | The paper describes an in vitro immunological study of T- and B-cell reactivity in cartilage hair hypoplasia, using tuberculin (PPD) as a mitogen/antigen for proliferation assays rather than studying its pharmacokinetics. |
| PGx | Ranki_1978 | not_relevant | 0 | 1 | The paper describes clinical immune defects in patients with cartilage hair hypoplasia regarding skin test and in vitro responses, not a pharmacogenomic study of tuberculin pharmacokinetics or pharmacodynamics. |
| popPK | Romain_1985 | irrelevant | 0 | 0 | The paper describes the biochemical preparation and purification of tuberculin antigen L, with no pharmacokinetic data or quantitative disposition parameters. |
| PGx | Romain_1985 | not_relevant | 0 | 0 | The paper describes the preparation of tuberculin antigen and does not report any pharmacogenomic effects on PK/PD parameters. |
| popPK | Schwalb_2023 | irrelevant | 0 | 0 | This is an epidemiological model of tuberculin skin test reversion and annual risk of infection, not a pharmacokinetic study; "ka" is infection risk, not an absorption rate constant, and no PK disposition parameters appear. |
| popPK | Shaheen_2015 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of tuberculin (PPD) in treating warts and measuring immunological markers (IL-4, IL-12), not a pharmacokinetic study of tuberculin disposition. |
| PGx | Shaheen_2015 | not_relevant | 0 | 0 | The paper reports clinical efficacy and cytokine changes in a general patient population without analyzing any gene variants or genotypes. |
| popPK | Shastri_2026 | irrelevant | 0 | 0 | The paper is a review of tuberculosis diagnosis and therapy in cirrhosis, mentioning the tuberculin skin test only as a diagnostic tool, with no pharmacokinetic data. |
| PGx | Shastri_2026 | not_relevant | 0 | 0 | The text is a general review of TB management in cirrhosis and does not report any specific gene variant effects on the pharmacokinetics or pharmacodynamics of tuberculin or other anti-TB drugs. |
| popPK | Sheridan_2025 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of buprenorphine, not tuberculin. |
| PGx | Sheridan_2025 | not_relevant | 0 | 0 | The study analyzes the pharmacokinetics of buprenorphine in owl monkeys, but it does not involve a different drug or any genetic variation/genotype/phenotype. |
| popPK | Siebenmann_1974 | irrelevant | 0 | 0 | The paper evaluates the protective potency of BCG vaccines in mice and guinea pigs, not the pharmacokinetic parameters of tuberculin. |
| PGx | Siebenmann_1974 | not_relevant | 0 | 0 | The paper evaluates the potency of BCG vaccines in animal models, not the pharmacogenomics of tuberculin or any other specific drug. |
| popPK | Simeon_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of linezolid, not tuberculin, which is a diagnostic agent and not the subject of this PK/PD modeling study. |
| PGx | Simeon_2024 | not_relevant | 0 | 0 | The study focuses on linezolid pharmacokinetics and does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| PGx | Simmons_2021 | not_relevant | 0 | 0 | Tuberculin is a diagnostic antigen, not a drug; PRKAG2 SNPs associate with TST/IGRA conversion phenotype, not a PK/PD parameter. |
| popPK | Singh_2002 | irrelevant | 0 | 0 | The study uses tuberculin PPD as a diagnostic antigen to assess immune cell proliferation and is not a pharmacokinetic study of tuberculin. |
| PGx | Singh_2002 | not_relevant | 0 | 0 | The paper investigates the mechanism of tuberculin-induced lymphocyte proliferation and the effects of immunosuppressants on it, but does not report any genetic variants or genotypes affecting pharmacokinetic or pharmacodynamic parameters. |
| popPK | Soppi_1982 | irrelevant | 0 | 0 | The study measures cell-mediated immune responses to tuberculin (PPD) as an immunological probe, not the pharmacokinetic disposition parameters of tuberculin itself. |
| PGx | Soppi_1982 | not_relevant | 0 | 0 | The paper investigates the effect of retinoid therapy on immune responses to PPD in Darier's disease patients, not a pharmacogenomic effect on PK/PD parameters. |
| popPK | Spohr_2015 | irrelevant | 0 | 0 | The study focuses on an in vitro assay for potency determination of bovine tuberculin PPDs (an immunological assay) and does not report any pharmacokinetic parameters for tuberculin. |
| PGx | Spohr_2015 | not_relevant | 0 | 0 | The paper is about an in vitro assay to quantify the potency of a tuberculin product and does not involve pharmacogenomics or human pharmacokinetics/pharmacodynamics. |
| popPK | Strapagiel_2008 | irrelevant | 0 | 0 | The study investigates the immunological mechanisms (CD14/TLR polymorphisms) of tuberculin skin testing reactions, not the pharmacokinetic disposition parameters (CL, V, t1/2) of tuberculin. |
| PGx | Strapagiel_2008 | not_relevant | 0 | 0 | The paper studies genetic determinants of immune response to tuberculin (PPD) as a diagnostic/vaccine challenge, not the pharmacokinetics or pharmacodynamics of tuberculin as a therapeutic drug. |
| popPK | Thappa_2016 | irrelevant | 0 | 0 | The paper is a clinical review of immunotherapy for warts and mentions tuberculin (PPD) only as a therapeutic agent for efficacy, without providing any pharmacokinetic parameters. |
| PGx | Thappa_2016 | not_relevant | 0 | 0 | The paper is a review of immunotherapy agents for warts and does not report pharmacogenomic effects on the PK or PD of tuberculin. |
| popPK | Thijs_2019 | irrelevant | 0 | 0 | The paper is a clinical case report about adrenal insufficiency where a tuberculin skin test was used as a diagnostic tool, not a pharmacokinetic study of tuberculin. |
| PGx | Thijs_2019 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction (rifampicin inducing hydrocortisone metabolism) in the context of tuberculosis treatment, not a pharmacogenomic effect on tuberculin. |
| popPK | Tokars_2001 | irrelevant | 0 | 0 | The study is an observational analysis of infection control practices and tuberculin skin test (TST) outcomes, not a pharmacokinetic study. |
| PGx | Tokars_2001 | not_relevant | 0 | 0 | The paper focuses on hospital infection control practices and TB outbreak management, not on pharmacogenomics or the PK/PD parameters of tuberculin. |
| popPK | Tolderlund_1960 | irrelevant | 0 | 0 | The study focuses on the immunological kinetics of BCG-induced allergy (tuberculin sensitivity) in guinea pigs, not the pharmacokinetic disposition parameters (CL, V, etc.) of the tuberculin agent itself. |
| PGx | Tolderlund_1960 | not_relevant | 0 | 0 | The paper describes temporal dynamics of BCG-induced allergy in guinea pigs and does not report any gene variant/genotype effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Tolderlund_1960_2 | irrelevant | 0 | 0 | The study investigates immunological tuberculin allergy (sensitivity) in guinea pigs rather than the pharmacokinetic disposition of tuberculin as a drug. |
| PGx | Tolderlund_1960_2 | not_relevant | 0 | 0 | The study examines dose-response in guinea pigs and does not report pharmacogenomic effects on tuberculin PK or PD. |
| popPK | Toyota_2001 | irrelevant | 0 | 0 | The paper describes an epidemiological study on tuberculosis transmission and chemoprophylaxis using the tuberculin skin test as a diagnostic tool, not a pharmacokinetic study of the drug tuberculin. |
| PGx | Toyota_2001 | not_relevant | 0 | 0 | The paper reports the efficacy of isoniazid prophylaxis in a tuberculosis outbreak but does not discuss pharmacogenomics or genetic variants affecting PK/PD parameters. |
| popPK | Tukvadze_2016 | irrelevant | 0 | 0 | The paper discusses a food supplement for tuberculosis risk reduction and mentions tuberculin (PPD) only as a diagnostic/imunological marker, providing no pharmacokinetic parameters for tuberculin itself. |
| PGx | Tukvadze_2016 | not_relevant | 0 | 0 | The paper describes a food supplement and its effects on TB risk/immunology, containing no pharmacogenomic analysis or specific PK/PD parameter changes linked to genetic variants. |
| popPK | Tyrrell_1971 | irrelevant | 0 | 0 | The paper discusses tuberculin as a biological reagent in haemagglutination inhibition tests and does not report any pharmacokinetic parameters. |
| PGx | Tyrrell_1971 | not_relevant | 0 | 0 | The paper discusses the inhibition of haemaggregation by tuberculin in biological fluids and the identification of inhibiting components, but it does not report on any gene variants or genotypes affecting the pharmacokinetics or pharmacodynamics of tuberculin. |
| popPK | Valdés_2026 | irrelevant | 0 | 0 | The study is an epidemiological analysis of the prevalence of latent tuberculosis and uses the tuberculin skin test as a diagnostic agent, rather than investigating the pharmacokinetics of the drug tuberculin. |
| PGx | Valdés_2026 | not_relevant | 0 | 0 | The study is epidemiological, focusing on the prevalence of latent tuberculosis in rheumatology patients, and does not report any pharmacogenomic effect on a pharmacokinetic or pharmacodynamic parameter. |
| popPK | Wall_1980 | irrelevant | 0 | 0 | The study is an immunological analysis of migration inhibitory factor production in response to tuberculin (PPD) as an antigen, not a pharmacokinetic study of the drug's disposition. |
| PGx | Wall_1980 | not_relevant | 0 | 0 | The paper discusses an immune response to PPD as an antigen, not pharmacogenomic effects on the PK/PD of a drug. |
| popPK | Yamamoto_2002 | irrelevant | 0 | 0 | The paper describes an in-vitro assay system for interferon activity where tuberculin is used only as an in-vitro immunostimulant, containing no pharmacokinetic parameters. |
| PGx | Yamamoto_2002 | not_relevant | 0 | 0 | The paper describes an assay system for measuring interferon biological activity and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of tuberculin. |
| popPK | Yang_2012 | irrelevant | 0 | 0 | The paper is a review of the history and composition of the tuberculin skin test (PPD) as a diagnostic agent, containing no pharmacokinetic data. |
| PGx | Yang_2012 | not_relevant | 0 | 0 | The paper is a review of the history and composition of tuberculin PPD and does not report any pharmacogenomic effects on PK/PD parameters. |
| popPK | Yang_2017 | irrelevant | 0 | 0 | The paper describes the fabrication of microneedles encapsulating tuberculin for skin testing (diagnostic), not the pharmacokinetics of the drug. |
| PGx | Yang_2017 | not_relevant | 0 | 0 | The paper focuses on the fabrication of microstructures for drug delivery and does not investigate pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Zsidai_1975 | irrelevant | 0 | 0 | The paper describes a biological assay method for potency estimation in guinea pigs, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Zsidai_1975 | not_relevant | 0 | 0 | The paper describes a statistical method for potency estimation of tuberculin in guinea pigs, containing no data on human gene variants or genotypes affecting pharmacokinetics or pharmacodynamics. |
| popPK | de_1989 | irrelevant | 0 | 0 | The study assesses the chemical stability and sterility of PPD tuberculin reagents for diagnostic use, not the pharmacokinetics of tuberculin as a drug. |
| PGx | de_1989 | not_relevant | 0 | 0 | The paper focuses on the quality control and storage stability of tuberculin PPD products, containing no information on pharmacogenomics or genetic effects on PK/PD parameters. |
| popPK | du_2011 | irrelevant | 0 | 0 | The study is an epidemiological investigation of tuberculosis infection risk using the tuberculin skin test as a diagnostic tool, containing no pharmacokinetic data for tuberculin. |
| PGx | du_2011 | not_relevant | 0 | 0 | The paper investigates the association between environmental tobacco smoke exposure and M. tuberculosis infection risk, not the effect of genetic variants on the pharmacokinetics or pharmacodynamics of tuberculin. |
| popPK | van_1999 | irrelevant | 0 | 0 | The paper describes an ex vivo cytokine production assay using tuberculin/PPD as a stimulus, not a pharmacokinetic study of tuberculin disposition parameters. |
| PGx | van_1999 | not_relevant | 0 | 0 | The paper studies cytokine production in response to immunological stimuli (PPD/MTB) in a diagnostic context, not the pharmacokinetics or pharmacodynamics of the drug tuberculin, and reports no gene-based variations. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btuberculin%5D&body=Drug%3A%20tuberculin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tuberculin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
