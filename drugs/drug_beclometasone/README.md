<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07E&quot;,&quot;href&quot;:&quot;atc/A07E.md&quot;},{&quot;label&quot;:&quot;beclometasone&quot;}]"></div>

# beclometasone

- **generic name:** beclometasone
- **ATC codes:** `A07EA07`, `D07AC15`, `R01AD01`, `R03BA01`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Beclometasone is a corticosteroid with anti-inflammatory and anti-asthmatic actions, used for inflammatory conditions of the airways, nose, skin, and intestines. It is widely used and appears on the WHO list of essential medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421475](https://www.wikidata.org/wiki/Q421475) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 19:12 | 6:16 | 0/0/0 | 0/0/0 | 0/0/0 | 221,224/6,727 | ollama / qwen3.8:27b-mtp-q8_0 | 13 | 6/10 | 12/1 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 101 matched, 98 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_11 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Agertoft_2003.pdf` | Agertoft L et al., Influence of particle size on lung depo…, Pediatric pulmonology (2003) | popPK | 9 | [10.1002/ppul.10238](https://doi.org/10.1002/ppul.10238) | [12567387](https://pubmed.ncbi.nlm.nih.gov/12567387) | The study reports quantitative PK parameters (Vd, t1/2, CL) for beclomethasone dipropionate and its metabolite 17-BMP in children. |
| `Small_2018.pdf` | Small CJ et al., Pharmacokinetics of Beclomethasone Dipr…, Journal of aerosol medicine… (2018) | popPK | 9 | [10.1089/jamp.2017.1397](https://doi.org/10.1089/jamp.2017.1397) | [28937845](https://pubmed.ncbi.nlm.nih.gov/28937845) | The study reports PK parameters for 17-BMP (active metabolite of beclomethasone), including half-life (~4 hours) and relative exposure metrics, but lacks specific numeric values for clearance, volume, or absolute AUC/Cmax. |
| `Chanoine_1991.pdf` | Chanoine F et al., Pharmacokinetics of butixocort 21-propi…, Drug metabolism and disposi… (1991) | popPK | 8 | not captured | [1676668](https://pubmed.ncbi.nlm.nih.gov/1676668) | The study reports pharmacokinetic parameters for beclomethasone dipropionate (BDP) and its metabolite beclomethasone monopropionate (BMP) in rats, but specific numeric values for clearance, volume, or half-life are not present in the provided abstract text. |
| `Esposito-Festen_2007.pdf` | Esposito-Festen JE et al., Pharmacokinetics of inhaled monodispers…, British journal of clinical… (2007) | popPK | 8 | [10.1111/j.1365-2125.2007.02894.x](https://doi.org/10.1111/j.1365-2125.2007.02894.x) | [17439539](https://pubmed.ncbi.nlm.nih.gov/17439539) | The study reports quantitative PK parameters (Cmax, AUC, half-life) for 17-beclomethasone monopropionate, the primary metabolite of beclomethasone dipropionate, in human subjects. |
| `Harrison_1997.pdf` | Harrison LI et al., Pharmacokinetics and dose proportionali…, Biopharmaceutics & drug dis… (1997) | popPK | 8 | [10.1002/(sici)1099-081x(199710)18:7&lt;635::aid-bdd53&gt;3.0.co;2-y](https://doi.org/10.1002/(sici)1099-081x(199710)18:7<635::aid-bdd53>3.0.co;2-y) | [9330783](https://pubmed.ncbi.nlm.nih.gov/9330783) | The study reports pharmacokinetic parameters (Cmax, AUC) for beclomethasone in humans, but specific numeric values are not provided in the text, only ratios and qualitative descriptions. |
| `Harrison_1999.pdf` | Harrison LI et al., Adrenal effects and pharmacokinetics of…, The Journal of pharmacy and… (1999) | popPK | 8 | [10.1211/0022357991772439](https://doi.org/10.1211/0022357991772439) | [10344626](https://pubmed.ncbi.nlm.nih.gov/10344626) | The study reports pharmacokinetics of beclomethasone dipropionate in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Harrison_1999_2.pdf` | Harrison LI et al., Pharmacokinetic differences between chl…, The Journal of pharmacy and… (1999) | popPK | 8 | [10.1211/0022357991776967](https://doi.org/10.1211/0022357991776967) | [10632080](https://pubmed.ncbi.nlm.nih.gov/10632080) | The study reports quantitative pharmacokinetic parameters (Cmax, AUC, Tmax) for beclomethasone and its esters in humans, with specific numeric values provided in the abstract. |
| `Kuna_2022.pdf` | Kuna P et al., Pharmacokinetics of extrafine beclometa…, Pharmacology research & per… (2022) | popPK | 8 | [10.1002/prp2.980](https://doi.org/10.1002/prp2.980) | [35733414](https://pubmed.ncbi.nlm.nih.gov/35733414) | The study reports pharmacokinetic parameters (AUC ratios) for beclometasone's active metabolite (B17MP) in humans, but specific absolute numeric values for clearance, volume, or half-life are not present in the provided text. |
| `Lipworth_1999.pdf` | Lipworth BJ et al., Pharmacokinetics of chlorofluorocarbon…, British journal of clinical… (1999) | popPK | 8 | [10.1046/j.1365-2125.1999.00098.x](https://doi.org/10.1046/j.1365-2125.1999.00098.x) | [10594492](https://pubmed.ncbi.nlm.nih.gov/10594492) | The study reports pharmacokinetic parameters (AUC, Cmax) for beclomethasone 17-monopropionate (the active metabolite) in humans, but specific numeric values for CL, V, or ka are not explicitly listed in the text, only relative fold-changes. |
| `Teramoto_2006.pdf` | Teramoto T et al., Pharmacokinetics of beclomethasone dipr…, Allergology international :… (2006) | popPK | 8 | [10.2332/allergolint.55.317](https://doi.org/10.2332/allergolint.55.317) | [17075274](https://pubmed.ncbi.nlm.nih.gov/17075274) | The study reports quantitative non-compartmental pharmacokinetic parameters (AUC, Cmax, t1/2) for beclomethasone 17-monopropionate, the major metabolite of beclomethasone dipropionate, in human subjects. |
| `Uchida_2025.pdf` | Uchida A et al., Novel Enteric Microsphere of Beclometha…, Biopharmaceutics & drug dis… (2025) | popPK | 8 | [10.1002/bdd.70005](https://doi.org/10.1002/bdd.70005) | [40202075](https://pubmed.ncbi.nlm.nih.gov/40202075) | The study reports PK parameters (bioavailability, tissue-to-plasma partition) for beclomethasone dipropionate and its metabolite in rats, but specific numeric values for clearance, volume, or half-life are not explicitly listed in the provided abstract text. |

<sub>queue written 2026-10-04T19:11:11.594732+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adams_2006 | irrelevant | 0 | 0 | The paper is a review of clinical efficacy and dose-response in asthma, not a pharmacokinetic study, and contains no PK parameters. |
| PD | Adams_2006 | not_relevant | 2 | 0 | The paper is a qualitative overview of Cochrane reviews describing general dose-response trends for inhaled corticosteroids but does not provide specific numeric PD parameters (e.g., EC50, Emax) or extractable concentration-effect curves for beclometasone. |
| popPK | Barberio_2023 | irrelevant | 0 | 0 | This is a systematic review and meta-analysis of clinical efficacy (remission rates) in ulcerative colitis, not a pharmacokinetic study, and it reports no disposition parameters (CL, V, ka, etc.) for beclometasone. |
| popPK | Beuschlein_2024 | irrelevant | 0 | 0 | The paper is a clinical guideline for glucocorticoid-induced adrenal insufficiency and does not report pharmacokinetic parameters for beclometasone. |
| PD | Beuschlein_2024 | not_relevant | 0 | 0 | The paper is a clinical guideline for glucocorticoid-induced adrenal insufficiency and does not report any pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for beclometasone. |
| PD | Bousquet_2003 | not_relevant | 3 | 2 | The study reports qualitative comparisons of pharmacodynamic endpoints (FEV1, PEF) across dose groups but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect/dose-response curve. |
| PD | Bousquet_2009 | not_relevant | 2 | 1 | The study compares systemic exposure and cortisol suppression between formulations but does not report a quantitative exposure-response or dose-response model with numeric PD parameters (e.g., EC50, Emax) for beclometasone. |
| PGx | Briard_2023 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions (CYP3A4 inhibition) causing Cushing's syndrome and mentions beclometasone only as a safer alternative, without reporting any pharmacogenomic effects on its PK/PD parameters. |
| popPK | Casula_2021 | irrelevant | 0 | 0 | The study is a formulation and physicochemical characterization of a nanosuspension for pulmonary delivery, reporting no pharmacokinetic parameters (CL, V, t1/2) for beclomethasone. |
| popPK | Champion_1975 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for asthma treatment and does not report any pharmacokinetic parameters for beclomethasone. |
| popPK | Chanoine_1991 | relevant | 8 | 2 | The study reports pharmacokinetic parameters for beclomethasone dipropionate (BDP) and its metabolite beclomethasone monopropionate (BMP) in rats, but specific numeric values for clearance, volume, or half-life are not present in the provided abstract text. |
| popPK | Chassot_2015 | irrelevant | 1 | 0 | The study focuses on formulation development and acute toxicity (lung injury) in rats, with no quantitative pharmacokinetic parameters (CL, V, etc.) reported for beclometasone. |
| popPK | Chatterjee_1980 | irrelevant | 0 | 0 | The study is a clinical efficacy trial comparing administration methods and reports no pharmacokinetic parameters. |
| popPK | Check_1990 | irrelevant | 0 | 0 | The text is a general review of the pharmacology of topical corticosteroids and does not report specific quantitative pharmacokinetic parameters (CL, V, ka, etc.) for beclometasone. |
| popPK | Corradi_2016 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety review of asthma treatment that does not report pharmacokinetic disposition parameters (CL, V, ka, etc.) for beclometasone. |
| popPK | Corte_2019 | irrelevant | 0 | 0 | The study is a clinical efficacy trial for microscopic colitis and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for beclometasone. |
| popPK | Davies_1982 | irrelevant | 1 | 0 | The text is a narrative review discussing the importance of pharmacokinetics in asthma drugs but provides no original quantitative parameter values for beclometasone. |
| popPK | Derom_2005 | irrelevant | 2 | 0 | The paper is a review discussing formulation characteristics and relative efficacy without reporting original quantitative pharmacokinetic parameter values (CL, V, etc.) for beclometasone. |
| PD | Derom_2005 | not_relevant | 1 | 0 | The text is a qualitative review discussing formulation characteristics and relative efficacy ratios without providing specific numeric PD parameters or concentration-effect curves. |
| popPK | Dickson_1973 | irrelevant | 0 | 0 | The paper is a clinical efficacy study of beclomethasone dipropionate in childhood asthma and does not report any pharmacokinetic parameters. |
| popPK | Dierckx_2025 | irrelevant | 0 | 0 | The study focuses on the effect of intrapulmonary percussive ventilation on lung function and drug deposition in COPD patients, not on the pharmacokinetic parameters (CL, V, etc.) of beclometasone. |
| popPK | Dry_1985 | irrelevant | 0 | 0 | The study is a clinical efficacy comparison of inhaled steroids and does not report any pharmacokinetic parameters for beclometasone. |
| popPK | Fazio_1986 | irrelevant | 0 | 0 | The study investigates mucociliary clearance (a physiological function) rather than pharmacokinetic disposition parameters (CL, V, etc.) for beclometasone. |
| popPK | Ferrante_2016 | irrelevant | 0 | 0 | The paper is a review of efficacy and safety for allergic rhinitis treatment and does not report quantitative pharmacokinetic parameters for beclometasone. |
| popPK | Foe_1998 | irrelevant | 0 | 0 | The paper describes the chemical structure elucidation of degradation products of beclomethasone dipropionate in plasma, not the pharmacokinetic parameters (CL, V, etc.) of beclometasone. |
| popPK | Gaballa_2020 | irrelevant | 1 | 0 | The study focuses on formulation development and in vitro permeation (Papp, flux) rather than reporting systemic pharmacokinetic parameters (CL, V, t1/2) for beclometasone. |
| popPK | Gionchetti_2014 | irrelevant | 0 | 0 | The study is a clinical efficacy trial for pouchitis and does not report any pharmacokinetic parameters for beclomethasone. |
| popPK | Guleria_2003 | irrelevant | 0 | 0 | The study measures mucociliary clearance (a physiological function) rather than pharmacokinetic disposition parameters (CL, V, t1/2) for beclometasone. |
| popPK | Gulliver_2007 | irrelevant | 2 | 0 | This is a review article that discusses pharmacokinetic properties of various inhaled corticosteroids but does not report original quantitative disposition parameters (CL, V, Q, ka) for beclometasone. |
| PD | Gulliver_2007 | not_relevant | 2 | 1 | The text is a qualitative review that mentions receptor binding affinities and general dose-response concepts but does not provide specific numeric PD parameters (like Emax, EC50) or an extractable concentration-effect curve for beclometasone. |
| popPK | Harrison_1997 | relevant | 8 | 2 | The study reports pharmacokinetic parameters (Cmax, AUC) for beclomethasone in humans, but specific numeric values are not provided in the text, only ratios and qualitative descriptions. |
| popPK | Harrison_1999 | relevant | 8 | 0 | The study reports pharmacokinetics of beclomethasone dipropionate in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Harrison_2002 | irrelevant | 2 | 0 | The paper is a review/analysis comparing bioavailability ratios (L/T) of two formulations rather than reporting original quantitative population PK parameters (CL, V, ka) for beclometasone. |
| popPK | Holliday_1994 | irrelevant | 0 | 0 | The paper is a review of fluticasone propionate, with beclometasone serving only as a comparator, and no quantitative PK parameters for beclometasone are provided. |
| popPK | Holmberg_1986 | irrelevant | 0 | 0 | The study measures mucociliary clearance (a pharmacodynamic/physiological endpoint) rather than pharmacokinetic disposition parameters like clearance, volume, or half-life. |
| popPK | Ivey_2017 | irrelevant | 0 | 0 | The study investigates the physical morphology and solid phase of beclomethasone dipropionate particles emitted from inhalers, not its pharmacokinetic disposition parameters. |
| popPK | Jenkins_1988 | irrelevant | 0 | 0 | The study reports clinical efficacy outcomes (FEV1, PD20) rather than pharmacokinetic parameters (CL, V, ka) for beclometasone. |
| popPK | Khan_2021 | irrelevant | 0 | 0 | The study is a formulation and aerosolization performance study (in vitro/physicochemical) using beclomethasone dipropionate as a model drug, reporting no pharmacokinetic parameters. |
| popPK | Kugelman_2017 | irrelevant | 0 | 0 | The study is a clinical trial assessing the efficacy of inhaled beclomethasone dipropionate in infants with BPD and does not report any pharmacokinetic parameters (CL, V, ka, etc.). |
| PD | Kuna_2015 | not_relevant | 1 | 0 | The study reports bioequivalence of pharmacodynamic endpoints (potassium, glucose, pulse, pulmonary function) between formulations but does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., Emax, EC50). |
| popPK | Kuna_2022 | relevant | 8 | 2 | The study reports pharmacokinetic parameters (AUC ratios) for beclometasone's active metabolite (B17MP) in humans, but specific absolute numeric values for clearance, volume, or half-life are not present in the provided text. |
| PD | Kuna_2022 | not_relevant | 1 | 0 | The study is a PK comparison between adolescents and adults; while it mentions pharmacodynamic safety assessments (e.g., cortisol, potassium), it does not report an exposure-response or dose-response model with numeric PD parameters (Emax, EC50, etc.) for beclometasone. |
| popPK | Lax_2022 | irrelevant | 0 | 0 | This is a clinical review of topical corticosteroid strategies for eczema and does not report pharmacokinetic parameters for beclometasone. |
| PD | Lax_2022 | not_relevant | 0 | 0 | The paper is a clinical systematic review comparing treatment strategies (potency, frequency, duration) and reports clinical outcomes (odds ratios, risk ratios) rather than pharmacokinetic or pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response relationships. |
| popPK | Leach_1998 | irrelevant | 0 | 0 | The text is a review of inhaled device targeting and deposition, lacking any quantitative pharmacokinetic parameters (CL, V, ka, etc.) for beclometasone. |
| popPK | Lewis_2014 | irrelevant | 0 | 0 | The study focuses on in vitro aerosol characterization and dissolution of beclomethasone dipropionate formulations, reporting no in vivo pharmacokinetic parameters. |
| popPK | Lipworth_1999 | relevant | 8 | 4 | The study reports pharmacokinetic parameters (AUC, Cmax) for beclomethasone 17-monopropionate (the active metabolite) in humans, but specific numeric values for CL, V, or ka are not explicitly listed in the text, only relative fold-changes. |
| popPK | Lovera_1976 | irrelevant | 0 | 0 | The study is a clinical assessment of efficacy and safety (adrenal/pulmonary function) in asthmatic children, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Löfdahl_1984 | irrelevant | 2 | 0 | The study focuses on systemic effects and qualitative comparisons of inhaled glucocorticoids without reporting quantitative pharmacokinetic parameters (CL, V, t1/2) for beclometasone. |
| popPK | Malm_1976 | irrelevant | 0 | 0 | The study is a clinical efficacy trial for vasomotor rhinitis that reports symptom scores and safety markers (cortisol), but does not report any pharmacokinetic parameters (CL, V, t1/2, etc.) for beclometasone. |
| popPK | Mansfield_2015 | irrelevant | 2 | 0 | The paper is a review of clinical efficacy and safety for allergic rhinitis treatment, and no quantitative pharmacokinetic parameter values are provided in the evidence. |
| popPK | Milne_1974 | irrelevant | 0 | 0 | The paper is a clinical survey of oropharyngeal candidiasis incidence and contains no pharmacokinetic parameters. |
| popPK | OCallaghan_1988 | irrelevant | 0 | 0 | no_text gate: only 222 chars of text extracted (&lt; 400) |
| popPK | OCallaghan_1994 | irrelevant | 0 | 0 | The study measures the physical dose of beclomethasone dipropionate available for inhalation from a spacer device using impinger and HPLC methods, but does not report any pharmacokinetic parameters (CL, V, ka, etc.) for the drug in a biological system. |
| popPK | Parish_1993 | irrelevant | 0 | 0 | no_text gate: only 41 chars of text extracted (&lt; 400) |
| popPK | Ryrfeldt_1982 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of budesonide, with beclomethasone dipropionate serving only as a comparator in in-vitro metabolism assays without reporting quantitative PK parameters for beclomethasone. |
| popPK | Saari_1998 | irrelevant | 2 | 0 | The study measures regional lung deposition and mucociliary clearance of a radiolabeled liposomal formulation using gamma camera imaging, not systemic pharmacokinetic parameters (CL, V, ka) for beclometasone. |
| popPK | Saari_1999 | irrelevant | 2 | 0 | The study reports pulmonary deposition and retention percentages of radiolabeled liposomes via scintigraphy, not systemic pharmacokinetic parameters (CL, V, ka) for beclometasone. |
| popPK | Said_2019 | irrelevant | 2 | 0 | The study reports relative bioavailability and urinary excretion amounts (mass) rather than quantitative disposition parameters like clearance, volume, or half-life. |
| popPK | Saini_2003 | irrelevant | 0 | 0 | The paper is a review of growth velocity outcomes in children, not a pharmacokinetic study, and contains no PK parameters for beclometasone. |
| popPK | Sakagami_2002 | relevant | 4 | 2 | The study reports qualitative pharmacokinetic profiles and retention percentages for beclomethasone in guinea pigs, but lacks specific quantitative compartmental parameters (CL, V, ka) in the provided text. |
| popPK | Scadding_1995 | irrelevant | 0 | 0 | The study is a clinical efficacy trial comparing fluticasone and beclomethasone for rhinitis, reporting no pharmacokinetic parameters. |
| popPK | Shrestha_2020 | irrelevant | 0 | 0 | The paper is a prevalence study on the misuse of topical corticosteroids and does not report any pharmacokinetic parameters for beclometasone. |
| popPK | Singh_2008 | irrelevant | 2 | 1 | The study is a tolerability/safety trial, not a PK study, and only reports Cmax time and half-life for the metabolite B17MP without clearance or volume parameters. |
| popPK | Singh_2016 | irrelevant | 0 | 0 | The study is a clinical trial assessing bronchodilator efficacy (spirometry) in COPD, not a pharmacokinetic study reporting disposition parameters for beclometasone. |
| PD | Singh_2016 | not_relevant | 0 | 0 | The study investigates the dose-response of glycopyrronium (GB) added to a fixed background of beclometasone/formoterol, and does not report a pharmacodynamic or exposure-response relationship for beclometasone itself. |
| popPK | Singh_2017 | irrelevant | 0 | 0 | The study focuses on the bronchodilator efficacy and pharmacokinetics of glycopyrronium bromide, with beclometasone dipropionate mentioned only as a component of a potential fixed-dose combination, and no PK parameters for beclometasone are reported. |
| PD | Singh_2017 | not_relevant | 0 | 0 | The study focuses on the dose-response of glycopyrronium bromide (GB) and does not report pharmacodynamic parameters or exposure-response relationships for beclometasone. |
| popPK | Small_2018 | relevant | 9 | 4 | The study reports PK parameters for 17-BMP (active metabolite of beclomethasone), including half-life (~4 hours) and relative exposure metrics, but lacks specific numeric values for clearance, volume, or absolute AUC/Cmax. |
| popPK | Soria_1998 | irrelevant | 2 | 0 | The study reports relative bioavailability (40%) and an estimated fraction of oral dose reaching systemic circulation, but does not provide quantitative disposition parameters like clearance, volume, or half-life for beclometasone. |
| popPK | Storr_1986 | irrelevant | 0 | 0 | The paper is a clinical efficacy study of nebulized beclomethasone dipropionate in children and does not report any pharmacokinetic parameters. |
| popPK | Szefler_2001 | irrelevant | 1 | 0 | The text is a general review of intranasal corticosteroids that discusses pharmacokinetic concepts qualitatively but does not report any specific quantitative disposition parameters (CL, V, t1/2, etc.) for beclometasone. |
| popPK | Szelenyi_2000 | irrelevant | 0 | 0 | The paper is a review of loteprednol etabonate, with beclometasone mentioned only as a comparator for therapeutic ratio, and no quantitative PK parameters for beclometasone are provided. |
| PD | Tamm_2012 | not_relevant | 1 | 0 | The text is a review article summarizing pharmacological profiles and clinical trial data without providing specific numeric PD parameters or extractable concentration-effect curves for beclometasone. |
| popPK | Tosca_2022 | irrelevant | 2 | 1 | The paper is a narrative review of beclometasone dipropionate administration devices and general pharmacology, lacking original quantitative population PK parameter estimates (CL, V, Q, ka) for the subject drug. |
| popPK | Tsai_1995 | irrelevant | 0 | 0 | The study evaluates lung ventilation and alveolar permeability using radioaerosol scintigraphy, not the pharmacokinetic disposition parameters (CL, V, etc.) of beclometasone. |
| popPK | Uchida_2025 | relevant | 8 | 2 | The study reports PK parameters (bioavailability, tissue-to-plasma partition) for beclomethasone dipropionate and its metabolite in rats, but specific numeric values for clearance, volume, or half-life are not explicitly listed in the provided abstract text. |
| PD | Usmani_2019 | not_relevant | 0 | 0 | The paper is a review of fluticasone propionate/formoterol fumarate and does not report any pharmacodynamic or exposure-response data for beclometasone. |
| PD | Virchow_2018 | not_relevant | 1 | 0 | The study focuses on lung deposition and distribution using gamma-scintigraphy; while it mentions a qualitative FEV1 improvement, it does not provide numeric PD parameters (Emax, EC50) or a quantitative exposure-response/dose-response analysis for beclometasone. |
| popPK | Wang_1995 | irrelevant | 0 | 0 | The study measures lung permeability using Tc-99m DTPA clearance, not the pharmacokinetic disposition parameters (CL, V, ka) of beclomethasone itself. |
| popPK | Webb_1986 | irrelevant | 0 | 0 | The study is a clinical efficacy trial comparing nebulized beclomethasone to placebo and does not report any pharmacokinetic parameters. |
| popPK | Welideniya_2022 | irrelevant | 0 | 0 | The paper describes the chemical synthesis of beclomethasone dipropionate and contains no pharmacokinetic data or disposition parameters. |
| popPK | Willey_1976 | irrelevant | 0 | 0 | The paper is a clinical survey of oropharyngeal candidiasis prevalence and contains no pharmacokinetic parameters or disposition data for beclometasone. |
| popPK | Williams_1981 | irrelevant | 0 | 0 | The text is a clinical review of therapeutic efficacy and safety, containing no quantitative pharmacokinetic parameters or models. |
| popPK | Wolthers_2017 | irrelevant | 0 | 0 | The study measures short-term growth rates (mm/week) as a safety endpoint, not pharmacokinetic parameters like clearance or volume. |
| PD | Woodcock_2002 | not_relevant | 1 | 0 | The text describes comparative PK/PD outcomes (cortisol, B17MP) between formulations but does not provide numeric PD parameters (Emax, EC50) or a quantitative exposure-response model. |
| popPK | Wu_2023 | irrelevant | 0 | 0 | The study is an in-vitro physico-chemical compatibility and aerosol characterization study, not a pharmacokinetic study, and reports no disposition parameters (CL, V, ka, etc.). |
| popPK | Würthwein_1990 | irrelevant | 0 | 0 | The study reports receptor binding affinities and qualitative hydrolysis rates in vitro, but does not provide quantitative pharmacokinetic parameters (CL, V, ka, t1/2) for beclometasone. |
| popPK | Yadav_2013 | irrelevant | 0 | 0 | The study is an in-vitro investigation of bacterial stability/degradation in simulated colonic fluid, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Yamaguchi_1995 | irrelevant | 0 | 0 | The paper is a clinical case report describing symptomatic improvement in sputum volume and composition, with no pharmacokinetic parameters or quantitative disposition data for beclometasone. |
| popPK | unknown_2008 | irrelevant | 0 | 0 | The paper is a clinical review discussing the transition from CFC to HFA propellants in beclometasone inhalers and does not report any quantitative pharmacokinetic parameters. |
| popPK | unknown_2020 | irrelevant | 0 | 0 | no_text gate: only 14 chars of text extracted (&lt; 400) |
| popPK | unknown_2020_2 | irrelevant | 0 | 0 | no_text gate: only 50 chars of text extracted (&lt; 400) |
| popPK | unknown_2024 | irrelevant | 0 | 0 | no_text gate: only 16 chars of text extracted (&lt; 400) |
| popPK | unknown_2024_2 | irrelevant | 0 | 0 | no_text gate: only 60 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
