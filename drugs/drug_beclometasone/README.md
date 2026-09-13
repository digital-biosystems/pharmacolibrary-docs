<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07E&quot;,&quot;href&quot;:&quot;atc/A07E.md&quot;},{&quot;label&quot;:&quot;beclometasone&quot;}]"></div>

# beclometasone

- **generic name:** beclometasone
- **ATC codes:** `A07EA07`, `D07AC15`, `R01AD01`, `R03BA01`
- **DrugBank:** not captured
- **groups:** not captured

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-11 21:46 | 20:30 | 0/0/0 | 0/0/0 | 0/0/0 | 159,759/6,661 | ollama / qwen3.8:27b-mtp-q8_0 | 13 | 0/0 | 12/1 | 0 |

## popPK records

_not available_

## Coverage

- **PubMed hits:** 3403 matched, 81 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chanoine_1991.pdf` | Chanoine F et al., Pharmacokinetics of butixocort 21-propi…, Drug metabolism and disposi… (1991) | popPK | 8 | not captured | [1676668](https://pubmed.ncbi.nlm.nih.gov/1676668) | The study reports pharmacokinetic parameters for beclomethasone dipropionate (BDP) and its metabolite beclomethasone monopropionate (BMP) in rats, but the evidence provided (abstract) only contains qualitative descriptions and bioavailability percentages, lacking specific numeric values for clearance, volume, or rate constants. |
| `Esposito-Festen_2007.pdf` | Esposito-Festen JE et al., Pharmacokinetics of inhaled monodispers…, British journal of clinical… (2007) | popPK | 8 | [10.1111/j.1365-2125.2007.02894.x](https://doi.org/10.1111/j.1365-2125.2007.02894.x) | [17439539](https://pubmed.ncbi.nlm.nih.gov/17439539) | The study reports quantitative PK parameters (Cmax, AUC, half-life) for the metabolite 17-BMP following inhaled beclomethasone administration, which are directly extractable from the text. |
| `Harrison_1999.pdf` | Harrison LI et al., Adrenal effects and pharmacokinetics of…, The Journal of pharmacy and… (1999) | popPK | 8 | [10.1211/0022357991772439](https://doi.org/10.1211/0022357991772439) | [10344626](https://pubmed.ncbi.nlm.nih.gov/10344626) | The paper is a pharmacokinetic study of beclomethasone dipropionate, but the provided evidence contains only qualitative descriptions and ratios, lacking specific numeric values for clearance, volume, or half-life. |
| `Small_2018.pdf` | Small CJ et al., Pharmacokinetics of Beclomethasone Dipr…, Journal of aerosol medicine… (2018) | popPK | 8 | [10.1089/jamp.2017.1397](https://doi.org/10.1089/jamp.2017.1397) | [28937845](https://pubmed.ncbi.nlm.nih.gov/28937845) | The study reports PK parameters for beclomethasone dipropionate (specifically its metabolite 17-BMP), but only provides summary statistics like half-life and relative AUC/Cmax changes rather than absolute quantitative disposition parameters (CL, V, Q, ka) or population model estimates. |
| `Teramoto_2006.pdf` | Teramoto T et al., Pharmacokinetics of beclomethasone dipr…, Allergology international :… (2006) | popPK | 8 | [10.2332/allergolint.55.317](https://doi.org/10.2332/allergolint.55.317) | [17075274](https://pubmed.ncbi.nlm.nih.gov/17075274) | The study reports quantitative non-compartmental pharmacokinetic parameters (AUC, Cmax, t1/2, Tmax) for beclomethasone dipropionate (and its metabolite) in children, with all numeric values explicitly present in the text. |
| `Uchida_2025.pdf` | Uchida A et al., Novel Enteric Microsphere of Beclometha…, Biopharmaceutics & drug dis… (2025) | popPK | 8 | [10.1002/bdd.70005](https://doi.org/10.1002/bdd.70005) | [40202075](https://pubmed.ncbi.nlm.nih.gov/40202075) | The study reports pharmacokinetic data for beclomethasone dipropionate (BDP) in rats, including bioavailability and tissue distribution, but specific quantitative parameters like clearance (CL) or volume (V) are not explicitly listed in the provided text. |

<sub>queue written 2026-09-11T21:44:56.912549+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adams_2006 | irrelevant | 0 | 0 | The paper is a review of clinical efficacy and dose-response relationships for asthma treatment, not a pharmacokinetic study, and contains no quantitative PK parameters for beclometasone. |
| PD | Adams_2006 | not_relevant | 2 | 1 | The paper is a qualitative overview of Cochrane reviews describing general dose-response trends for inhaled corticosteroids but does not provide specific numeric PD parameters (e.g., EC50, Emax) or extractable concentration-effect curves for beclometasone. |
| popPK | Barberio_2023 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of clinical efficacy and safety in ulcerative colitis, reporting no pharmacokinetic parameters for beclometasone. |
| popPK | Beuschlein_2024 | irrelevant | 0 | 0 | The paper is a clinical guideline for glucocorticoid-induced adrenal insufficiency and does not report pharmacokinetic parameters for beclometasone. |
| PD | Beuschlein_2024 | not_relevant | 0 | 0 | The paper is a clinical practice guideline for glucocorticoid-induced adrenal insufficiency and does not report any pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for beclometasone. |
| PD | Bousquet_2003 | not_relevant | 3 | 2 | The study reports qualitative comparisons of pharmacodynamic endpoints (FEV1, PEF) across dose groups but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect/dose-response curve. |
| PD | Bousquet_2009 | not_relevant | 2 | 1 | The study compares systemic exposure and cortisol suppression between formulations but does not report a quantitative exposure-response or dose-response model with numeric PD parameters (e.g., EC50, Emax) for beclometasone. |
| PGx | Briard_2023 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions (CYP3A4 inhibition) causing Cushing's syndrome and mentions beclometasone only as a safer alternative, without reporting any pharmacogenomic effects on its PK/PD parameters. |
| popPK | Casula_2021 | irrelevant | 0 | 0 | The paper is a formulation and physicochemical characterization study (nanosuspension preparation, particle size, nebulization) and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for beclometasone. |
| popPK | Champion_1975 | irrelevant | 0 | 0 | The paper is a clinical efficacy study of beclomethasone dipropionate in asthma and does not report any pharmacokinetic parameters. |
| popPK | Chanoine_1991 | relevant | 8 | 2 | The study reports pharmacokinetic parameters for beclomethasone dipropionate (BDP) and its metabolite beclomethasone monopropionate (BMP) in rats, but the evidence provided (abstract) only contains qualitative descriptions and bioavailability percentages, lacking specific numeric values for clearance, volume, or rate constants. |
| popPK | Chassot_2015 | irrelevant | 1 | 0 | The study focuses on formulation development and in vitro/in vivo safety (cytotoxicity and lung injury) without reporting quantitative pharmacokinetic parameters for beclometasone. |
| popPK | Chatterjee_1980 | irrelevant | 0 | 0 | The paper is a clinical efficacy study comparing administration methods and does not report any pharmacokinetic parameters for beclomethasone. |
| popPK | Corradi_2016 | irrelevant | 0 | 0 | The paper is a clinical review of efficacy and safety (lung function, symptoms) and does not report pharmacokinetic parameters such as clearance, volume, or half-life for beclometasone. |
| popPK | Corte_2019 | irrelevant | 0 | 0 | The paper is a clinical efficacy study for microscopic colitis and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for beclometasone. |
| popPK | Derom_2005 | irrelevant | 2 | 0 | The text is a review discussing formulation characteristics and relative efficacy without reporting original quantitative pharmacokinetic parameter values (e.g., CL, V, ka) for beclometasone. |
| PD | Derom_2005 | not_relevant | 1 | 0 | The text is a qualitative review discussing formulation differences and relative efficacy ratios without providing specific numeric PD parameters or concentration-effect curves. |
| popPK | Dickson_1973 | irrelevant | 0 | 0 | The paper is a clinical efficacy study of beclomethasone dipropionate in childhood asthma and does not report any pharmacokinetic parameters. |
| popPK | Dierckx_2025 | irrelevant | 0 | 0 | The study focuses on intrapulmonary percussive ventilation and drug deposition in COPD, not the pharmacokinetics of beclometasone. |
| popPK | Dry_1985 | irrelevant | 0 | 0 | The paper is a clinical efficacy comparison study for asthma treatment and does not report any pharmacokinetic parameters for beclometasone. |
| popPK | Fazio_1986 | irrelevant | 0 | 0 | The study investigates mucociliary clearance (a physiological function) rather than pharmacokinetic disposition parameters (CL, V, etc.) for beclometasone. |
| popPK | Ferrante_2016 | irrelevant | 0 | 0 | The paper is a review of efficacy and safety for allergic rhinitis treatment and does not report quantitative pharmacokinetic parameters for beclometasone. |
| popPK | Foe_1998 | irrelevant | 0 | 0 | The paper focuses on the chemical structure elucidation of degradation products of beclomethasone dipropionate in plasma, not on pharmacokinetic parameter estimation. |
| popPK | Gaballa_2020 | irrelevant | 1 | 0 | The study focuses on formulation development and in vitro permeation (Papp, flux) rather than reporting quantitative systemic pharmacokinetic parameters (CL, V, ka) for beclometasone. |
| popPK | Gionchetti_2014 | irrelevant | 0 | 0 | The paper is a clinical efficacy study for beclomethasone dipropionate in pouchitis and does not report any pharmacokinetic parameters. |
| popPK | Gulliver_2007 | irrelevant | 1 | 0 | The paper is a review discussing general pharmacokinetic properties of inhaled corticosteroids, and while it mentions beclometasone, it does not provide specific quantitative disposition parameters (CL, V, ka, etc.) for beclometasone itself. |
| PD | Gulliver_2007 | not_relevant | 2 | 1 | The text is a qualitative review that mentions receptor binding affinities and general dose-response concepts but does not provide specific numeric PD parameters (like Emax, EC50) or an extractable concentration-effect curve for beclometasone. |
| popPK | Harrison_1999 | relevant | 8 | 2 | The paper is a pharmacokinetic study of beclomethasone dipropionate, but the provided evidence contains only qualitative descriptions and ratios, lacking specific numeric values for clearance, volume, or half-life. |
| popPK | Harrison_2002 | irrelevant | 2 | 0 | The paper focuses on the Local/Total (L/T) bioavailability ratio for formulation comparison rather than reporting specific quantitative disposition parameters (CL, V, ka) for beclometasone. |
| popPK | Holliday_1994 | irrelevant | 0 | 0 | The paper is a review of fluticasone propionate, with beclometasone serving only as a comparator, and no quantitative PK parameters for beclometasone are provided. |
| popPK | Holmberg_1986 | irrelevant | 0 | 0 | The study investigates mucociliary clearance (a physiological function) rather than pharmacokinetic disposition parameters (CL, V, etc.) for beclometasone. |
| popPK | Jenkins_1988 | irrelevant | 0 | 0 | The study is a clinical trial assessing airway responsiveness (PD20, FEV1) and does not report any pharmacokinetic parameters for beclometasone. |
| popPK | Khan_2021 | irrelevant | 0 | 0 | The paper is a formulation and aerosolization study (in-vitro/physicochemical) for beclomethasone dipropionate, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Kugelman_2017 | irrelevant | 0 | 0 | The paper is a clinical efficacy study of inhaled beclomethasone dipropionate in infants with BPD and does not report any pharmacokinetic parameters (CL, V, ka, etc.). |
| PD | Kuna_2015 | not_relevant | 1 | 0 | The study reports bioequivalence of pharmacodynamic endpoints (potassium, glucose, pulse, pulmonary function) between formulations but does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., Emax, EC50). |
| PD | Kuna_2022 | not_relevant | 1 | 0 | The study is a pharmacokinetic (PK) comparison between adolescents and adults; while pharmacodynamic (PD) endpoints like heart rate and potassium were measured, the text reports no concentration-effect or dose-response modeling and provides no numeric PD parameters (e.g., Emax, EC50) for beclometasone. |
| popPK | Lax_2022 | irrelevant | 0 | 0 | The paper is a clinical review of topical corticosteroid strategies for eczema and contains no pharmacokinetic data or quantitative disposition parameters for beclometasone. |
| PD | Lax_2022 | not_relevant | 0 | 0 | The paper is a clinical systematic review comparing treatment strategies (potency, frequency, duration) and reports clinical outcomes (odds ratios, risk ratios) rather than pharmacokinetic or pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response relationships. |
| popPK | Leach_1998 | irrelevant | 0 | 0 | The text is a review of inhaled device delivery and deposition, not a pharmacokinetic study, and contains no quantitative PK parameters for beclometasone. |
| popPK | Lovera_1976 | irrelevant | 0 | 0 | The paper is a clinical efficacy study assessing pulmonary function and adrenal suppression, reporting no pharmacokinetic parameters for beclomethasone. |
| popPK | Löfdahl_1984 | irrelevant | 1 | 0 | The paper focuses on glucocorticoid resistance and systemic effects (comparative qualitative/semi-quantitative assessment) rather than reporting specific quantitative pharmacokinetic parameters (CL, V, ka) for beclometasone. |
| popPK | Malm_1976 | irrelevant | 0 | 0 | The paper is a clinical efficacy study for vasomotor rhinitis and does not report any pharmacokinetic parameters for beclometasone. |
| popPK | Milne_1974 | irrelevant | 0 | 0 | The paper is a clinical survey of oropharyngeal candidiasis incidence and contains no pharmacokinetic parameters or disposition data for beclometasone. |
| popPK | OCallaghan_1988 | irrelevant | 0 | 0 | The paper is a clinical case report regarding inhaler abuse and behavioral effects, containing no pharmacokinetic data or quantitative disposition parameters for beclometasone. |
| popPK | OCallaghan_1994 | irrelevant | 0 | 0 | The study investigates device delivery and particle size distribution (in-vitro/physical), not pharmacokinetic disposition parameters. |
| popPK | Ryrfeldt_1982 | irrelevant | 1 | 0 | The study focuses on budesonide as the subject drug, with beclometasone dipropionate serving only as a comparator in in-vitro metabolism assays without reporting quantitative PK parameters for beclometasone. |
| popPK | Saari_1999 | irrelevant | 2 | 0 | The study uses gamma scintigraphy to measure pulmonary retention of radiolabeled liposomes, reporting only percentage clearance over time rather than quantitative systemic pharmacokinetic parameters (CL, V, ka) for beclometasone. |
| popPK | Said_2019 | irrelevant | 2 | 0 | The study reports relative bioavailability and urinary excretion amounts rather than quantitative compartmental PK parameters (CL, V, ka) for beclometasone. |
| popPK | Saini_2003 | irrelevant | 0 | 0 | The paper is a review of growth velocity outcomes in children, not a pharmacokinetic study, and contains no PK parameters for beclometasone. |
| popPK | Sakagami_2002 | relevant | 4 | 1 | The study reports qualitative pharmacokinetic profiles and retention percentages for beclomethasone in guinea pigs, but lacks specific quantitative disposition parameters (CL, V, ka) in the provided text. |
| popPK | Scadding_1995 | irrelevant | 0 | 0 | The study is a clinical efficacy trial comparing fluticasone and beclomethasone for rhinitis and does not report pharmacokinetic parameters for beclometasone. |
| popPK | Shrestha_2020 | irrelevant | 0 | 0 | The paper is a clinical epidemiological study on the prevalence of topical corticosteroid misuse and reports no pharmacokinetic parameters for beclometasone. |
| popPK | Singh_2016 | irrelevant | 0 | 0 | The study is a clinical efficacy trial for COPD focusing on spirometry endpoints, not a pharmacokinetic study, and contains no PK parameters for beclometasone. |
| PD | Singh_2016 | not_relevant | 0 | 0 | The study investigates the dose-response of glycopyrronium added to a fixed background of beclometasone/formoterol, and does not report a pharmacodynamic or exposure-response relationship for beclometasone itself. |
| popPK | Singh_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of glycopyrronium bromide, with beclometasone mentioned only as a component of a future fixed-dose combination and not as the subject of PK analysis. |
| popPK | Small_2018 | relevant | 8 | 2 | The study reports PK parameters for beclomethasone dipropionate (specifically its metabolite 17-BMP), but only provides summary statistics like half-life and relative AUC/Cmax changes rather than absolute quantitative disposition parameters (CL, V, Q, ka) or population model estimates. |
| popPK | Soria_1998 | irrelevant | 2 | 0 | The study reports relative bioavailability (40%) and an estimated fraction of oral dose reaching systemic circulation, but does not provide quantitative disposition parameters such as clearance, volume of distribution, or half-life for beclometasone. |
| popPK | Storr_1986 | irrelevant | 0 | 0 | The paper is a clinical efficacy study of nebulized beclomethasone dipropionate in children and does not report any pharmacokinetic parameters. |
| popPK | Szelenyi_2000 | irrelevant | 0 | 0 | The paper focuses on loteprednol etabonate, with beclometasone mentioned only as a comparator for therapeutic ratio, and no quantitative PK parameters for beclometasone are provided. |
| PD | Tamm_2012 | not_relevant | 1 | 0 | The text is a review article summarizing pharmacological profiles and clinical trial data without providing specific numeric PD parameters or extractable concentration-effect curves for beclometasone. |
| popPK | Tsai_1995 | irrelevant | 0 | 0 | The study evaluates lung ventilation and alveolar permeability using radioaerosol scintigraphy, not pharmacokinetic parameters for beclometasone. |
| popPK | Uchida_2025 | relevant | 8 | 2 | The study reports pharmacokinetic data for beclomethasone dipropionate (BDP) in rats, including bioavailability and tissue distribution, but specific quantitative parameters like clearance (CL) or volume (V) are not explicitly listed in the provided text. |
| PD | Usmani_2019 | not_relevant | 0 | 0 | The paper is a review of fluticasone propionate/formoterol fumarate and does not report any pharmacodynamic or exposure-response data for beclometasone. |
| PD | Virchow_2018 | not_relevant | 2 | 1 | The study focuses on lung deposition via gamma scintigraphy and reports qualitative FEV1 improvements without providing numeric concentration-effect parameters or a formal PD model. |
| popPK | Wang_1995 | irrelevant | 0 | 0 | The study measures lung permeability via Tc-99m DTPA clearance, not the pharmacokinetic disposition parameters (CL, V, ka) of beclometasone itself. |
| popPK | Webb_1986 | irrelevant | 0 | 0 | The paper is a clinical efficacy study comparing nebulized beclomethasone to placebo in children and does not report any pharmacokinetic parameters. |
| popPK | Welideniya_2022 | irrelevant | 0 | 0 | The paper describes the chemical synthesis of beclomethasone dipropionate and contains no pharmacokinetic data or disposition parameters. |
| popPK | Willey_1976 | irrelevant | 0 | 0 | The paper is a clinical survey of oropharyngeal candidiasis prevalence and contains no pharmacokinetic parameters or quantitative disposition data for beclometasone. |
| popPK | Williams_1981 | irrelevant | 0 | 0 | The text is a clinical review of therapeutic efficacy and safety, containing no pharmacokinetic parameters or quantitative disposition data for beclometasone. |
| popPK | Wolthers_2017 | irrelevant | 0 | 0 | The study is a clinical trial assessing growth suppression (safety) and does not report pharmacokinetic parameters for beclometasone. |
| PD | Woodcock_2002 | not_relevant | 1 | 0 | The text describes comparative PK/PD outcomes (cortisol, B17MP) between formulations but does not provide numeric PD parameters (Emax, EC50) or a concentration-effect curve. |
| popPK | Wu_2023 | irrelevant | 0 | 0 | The study is an in-vitro physico-chemical compatibility and aerosol characterization study, not a pharmacokinetic study, and reports no disposition parameters (CL, V, ka, etc.) for beclometasone. |
| popPK | Würthwein_1990 | irrelevant | 0 | 0 | The study focuses on receptor binding affinity and metabolic hydrolysis rates (activation) rather than quantitative pharmacokinetic disposition parameters (CL, V, ka) for beclometasone. |
| popPK | Yadav_2013 | irrelevant | 0 | 0 | The study is an in-vitro investigation of bacterial stability/metabolism in simulated colonic fluid, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for beclometasone. |
| popPK | Yamaguchi_1995 | irrelevant | 0 | 0 | The paper is a clinical case report describing symptomatic improvement in bronchorrhea and does not report any quantitative pharmacokinetic parameters for beclometasone. |
| popPK | unknown_2008 | irrelevant | 0 | 0 | The text is a clinical review discussing the switch from CFC to HFA propellants in beclometasone inhalers and contains no pharmacokinetic data or quantitative disposition parameters. |
| popPK | unknown_2020 | irrelevant | 0 | 0 | The provided evidence consists only of a title "Drugs for COPD" with no pharmacokinetic data, parameters, or specific study details for beclometasone. |
| popPK | unknown_2020_2 | irrelevant | 0 | 0 | The evidence consists only of a table title regarding inhaler use, containing no pharmacokinetic data or numeric parameters for beclometasone. |
| popPK | unknown_2024 | irrelevant | 0 | 0 | The evidence consists only of a title "Drugs for asthma" with no pharmacokinetic data, parameters, or specific study details for beclometasone. |
| popPK | unknown_2024_2 | irrelevant | 0 | 0 | The evidence consists only of a title for a comparison chart of inhaled asthma drugs, containing no pharmacokinetic data or numeric parameters for beclometasone. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_beclometasone`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
