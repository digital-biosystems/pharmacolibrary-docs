<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A12B&quot;,&quot;href&quot;:&quot;atc/A12B.md&quot;},{&quot;label&quot;:&quot;potassium citrate&quot;}]"></div>

# potassium citrate

- **generic name:** potassium citrate
- **ATC codes:** `A12BA02`
- **DrugBank:** [DB09125](https://go.drugbank.com/drugs/DB09125) · **PubChem:** [CID 13344](https://pubchem.ncbi.nlm.nih.gov/compound/13344)
- **molar mass:** 306.394 g/mol (C6H5K3O7) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Potassium citrate is a potassium supplement used to treat low blood potassium, renal tubular acidosis, and kidney stones. It is an approved medicine, also approved for veterinary use, and is used fairly widely as a mineral supplement.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q419921](https://www.wikidata.org/wiki/Q419921) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:14 | 1:26 | 0/0/0 | 0/1/0 | 0/0/0 | 115,508/4,539 | einfracz / qwen3.8-27b | 10 | 3/10 | 8/2 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">in vitro</span> | [Aziz_2005_size_of_calcium_oxalate_crystals](drugs/drug_potassium_citrate/pd_Aziz_2005_size_of_calcium_oxalate_crystals.md) | size of calcium oxalate crystals ← potassium citrate · inhibition effect | — | Aziz SA et al., In vitro effects of plantago major extr…, The Malaysian journal of me… (2005) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=potassium_citrate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 73 matched, 60 returned
- **screened:** 5  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tanner_2000.pdf` | Tanner GA et al., Citrate therapy for polycystic kidney d…, Kidney international (2000) | popPK | 5 | [10.1111/j.1523-1755.2000.00357.x](https://doi.org/10.1111/j.1523-1755.2000.00357.x) | [11044205](https://pubmed.ncbi.nlm.nih.gov/11044205) | The study reports qualitative renal handling parameters (fractional excretion, renal consumption rates) for citrate (metabolite of potassium citrate) in rats, but lacks quantitative compartmental PK parameters like clearance (CL) or volume (V). |
| `Sandford_1992.pdf` | Sandford CA et al., Properties of a cell volume-sensitive p…, The Journal of physiology (1992) | pd | 4 | [10.1113/jphysiol.1992.sp018995](https://doi.org/10.1113/jphysiol.1992.sp018995) | [1593444](https://www.ncbi.nlm.nih.gov/pubmed/1593444) | metadata signals extractable PD data (IC50) |
| `Song_2020.pdf` | Song Z et al., A comparative study of 14-day dual ther…, Helicobacter (2020) | pgx | 5 | [10.1111/hel.12762](https://doi.org/10.1111/hel.12762) | [33040439](https://www.ncbi.nlm.nih.gov/pubmed/33040439) | metadata signals extractable PGX data (CYP2C19) |
| `Suo_2025.pdf` | Suo B et al., Tailored Therapy Guided by Antibiotic G…, Helicobacter (2025) | pgx | 5 | [10.1111/hel.70082](https://doi.org/10.1111/hel.70082) | [41116602](https://www.ncbi.nlm.nih.gov/pubmed/41116602) | metadata signals extractable PGX data (CYP2C19) |

<sub>queue written 2026-10-07T17:13:12.759041+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akerele_1991 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for ofloxacin (the subject drug), while potassium citrate is only a co-administered agent used to test for interactions. |
| popPK | Arif_2026 | irrelevant | 0 | 0 | The study focuses on rooster semen quality and selenium supplementation, where potassium citrate is merely an ingredient in the extender, not the subject of pharmacokinetic analysis. |
| PD | Arif_2026 | not_relevant | 0 | 0 | The paper studies the dose-response of selenium methionine on rooster semen quality, not the pharmacodynamics of potassium citrate (which is merely an ingredient in the extender). |
| popPK | Attalla_2026 | irrelevant | 0 | 0 | The paper studies the efficacy of anthelmintic drugs on C. elegans and does not involve potassium citrate or pharmacokinetic parameter estimation. |
| PD | Attalla_2026 | not_relevant | 0 | 0 | The paper investigates anthelmintics (e.g., albendazole, ivermectin) in C. elegans and does not mention or test potassium citrate. |
| popPK | Aziz_2005 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of crystal inhibition where potassium citrate serves only as a positive control, with no pharmacokinetic parameters reported. |
| popPK | Belldina_2003 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cysteamine bitartrate, not potassium citrate. |
| PD | Belldina_2003 | not_relevant | 0 | 0 | The paper investigates cysteamine bitartrate, not potassium citrate. |
| popPK | Breznock_1978 | irrelevant | 0 | 0 | The study focuses on the efficacy of chemical defibrillation in dogs and does not report any pharmacokinetic parameters for potassium citrate. |
| popPK | Canales_2019 | irrelevant | 0 | 0 | The paper is a clinical outcome study on stone recurrence and does not report pharmacokinetic parameters. |
| popPK | Carvalho_2017 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis focusing on clinical efficacy (stone recurrence) rather than pharmacokinetic parameters. |
| PD | Carvalho_2017 | not_relevant | 1 | 0 | The paper is a meta-analysis of clinical outcomes (stone recurrence) and does not report pharmacokinetic data, concentration-effect relationships, or numeric PD parameters like Emax or EC50. |
| popPK | Caudarella_2009 | irrelevant | 0 | 0 | This is a review article discussing the therapeutic mechanisms of citrate in nephrolithiasis, not a study reporting quantitative pharmacokinetic parameters (CL, V, ka) for potassium citrate. |
| PGx | Cui_2021 | not_relevant | 0 | 0 | The paper investigates Helicobacter pylori antibiotic resistance (microbial genetics) and clinical eradication outcomes, rather than human pharmacogenomic effects on the PK or PD of potassium citrate. |
| popPK | Domrongkitchaiporn_2002 | irrelevant | 0 | 0 | The study is a clinical trial focused on dosing for therapeutic efficacy in renal tubular acidosis and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Dong_2015 | not_relevant | 0 | 0 | The paper discusses antibiotic resistance in H. pylori, not the pharmacogenomic effects of potassium_citrate. |
| popPK | Du_2024 | irrelevant | 0 | 0 | The paper is a clinical trial protocol for a combination therapy where bismuth potassium citrate is a component, but no quantitative pharmacokinetic parameters (CL, V, etc.) for potassium citrate are reported in the provided evidence. |
| PD | Du_2024 | not_relevant | 0 | 0 | The provided text contains only exclusion criteria and bioanalytical method details for a PK study; it does not report any pharmacodynamic data, exposure-response relationships, or numeric PD parameters for potassium citrate or any other drug. |
| popPK | EFSA_2025 | irrelevant | 0 | 0 | The paper concerns the toxicology of bromide, not the pharmacokinetics of potassium citrate. |
| PD | EFSA_2025 | not_relevant | 0 | 0 | The paper discusses bromide toxicity and risk assessment, not potassium citrate pharmacodynamics. |
| popPK | Ergani_2021 | irrelevant | 0 | 0 | The paper is a clinical case report regarding the management of Gitelman syndrome in pregnancy and does not contain any pharmacokinetic studies or quantitative disposition parameters for potassium citrate. |
| PD | Ergani_2021 | not_relevant | 0 | 0 | The paper is a clinical case report describing the management of Gitelman syndrome in pregnancy with qualitative observations on dosage adjustments, but it does not provide any quantitative exposure-response or dose-response data, curves, or PD parameters for potassium citrate. |
| popPK | Fan_2001 | irrelevant | 1 | 0 | The study focuses on calcium oxalate crystallization and bioequivalence of urinary citrate levels, not on the pharmacokinetic disposition parameters (CL, V, ka) of potassium citrate. |
| popPK | Fukunaga_2008 | irrelevant | 0 | 0 | The study measures the pharmacokinetics of phenobarbital, with potassium citrate serving only as a dietary agent to modify urine pH. |
| popPK | Gambaro_2000 | irrelevant | 0 | 0 | The paper is a clinical case report on a liver-kidney transplant where potassium citrate is used as a therapeutic adjunct to increase oxalate solubility, with no pharmacokinetic parameters reported for the drug itself. |
| popPK | Ghorbani_2019 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the therapeutic efficacy of sodium potassium citrate in preventing nephropathy, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Gisbert_1997 | irrelevant | 0 | 0 | The paper is a cost-effectiveness analysis of potassium citrate for urinary lithiasis prevention and does not report any pharmacokinetic parameters. |
| PD | Gisbert_1997 | not_relevant | 1 | 0 | The paper is a cost-effectiveness analysis that cites clinical outcomes (relapse rates) from other studies but does not report any pharmacokinetic data, concentration-effect relationships, or numeric PD parameters for potassium citrate. |
| popPK | Gridley_2019 | irrelevant | 0 | 0 | The paper is a clinical retrospective review of dissolution therapy outcomes for kidney stones and contains no pharmacokinetic modeling or quantitative disposition parameters (CL, V, etc.) for potassium citrate. |
| popPK | Guittet_2020 | irrelevant | 0 | 0 | The study is a pharmacodynamic trial measuring urine pH and electrolytes, not a pharmacokinetic study reporting disposition parameters like clearance or volume for potassium citrate. |
| popPK | Guo_2026 | irrelevant | 0 | 0 | The study is a clinical trial measuring urinary stone risk parameters (24-hour urine collections) rather than pharmacokinetic disposition parameters (CL, V, ka, etc.) for potassium citrate. |
| popPK | Huang_2000 | irrelevant | 0 | 0 | The study investigates free radical production in rat nephrolithiasis where potassium citrate is used as a therapeutic agent, not as the subject of pharmacokinetic analysis. |
| popPK | Hwang_1992 | irrelevant | 2 | 0 | The study measures urinary excretion parameters (pH, K, citrate) to demonstrate slow-release properties but does not report standard quantitative plasma pharmacokinetic parameters (CL, V, t1/2, ka) for potassium citrate itself. |
| popPK | Kaplon_2011 | irrelevant | 0 | 0 | The study focuses on the effect of topiramate on urinary citrate excretion, with potassium citrate used only as a therapeutic intervention to restore citrate levels, not as the subject of pharmacokinetic analysis. |
| popPK | Kavanagh_2022 | irrelevant | 0 | 0 | The paper models the pharmacokinetics of antibiotics (e.g., amoxicillin, ciprofloxacin) in the context of co-administration with alkalizers like potassium citrate, but does not report PK parameters for potassium citrate itself. |
| popPK | Korkmaz_2019 | irrelevant | 0 | 0 | The paper investigates potassium citrate as a radiation dosimeter material using ESR spectroscopy, which is a physicochemical/mechanistic study, not a pharmacokinetic study. |
| PD | Korkmaz_2019 | not_relevant | 0 | 0 | The paper investigates potassium citrate as a radiation dosimeter material using ESR spectroscopy, reporting a physical dose-response to radiation, not a pharmacodynamic drug effect. |
| popPK | Kourambas_2000 | irrelevant | 0 | 0 | The paper describes a surgical management technique for kidney stones where potassium citrate is used merely as a maintenance medication, not as the subject of a pharmacokinetic study. |
| popPK | Li_2025_2 | irrelevant | 0 | 0 | no_text gate: only 365 chars of text extracted (&lt; 400) |
| popPK | Lubkowicz_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of an engineered bacteria (SYNB8802) and oxalate metabolism, not the drug potassium_citrate. |
| popPK | Lv_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of bismuth metal (a trace element/component) in bismuth potassium citrate, not the pharmacokinetic parameters of the potassium citrate molecule itself as the subject drug. |
| popPK | Martín_2001 | irrelevant | 0 | 0 | The paper is a case report on urinary stone management where potassium citrate is used as a therapeutic agent, but no pharmacokinetic parameters are reported. |
| popPK | Miao_2023 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for bismuth (the active moiety of bismuth potassium citrate) and compares vonoprazan/esomeprazole, not the pharmacokinetics of potassium citrate itself. |
| popPK | Pak_1984 | irrelevant | 0 | 0 | The study focuses on urinary citrate excretion (pharmacodynamics) rather than pharmacokinetic disposition parameters (CL, V, ka) for potassium citrate. |
| popPK | Papatsoris_2025 | irrelevant | 0 | 0 | The paper is a review of urological surgery and kidney stone management where potassium citrate is mentioned only as a therapeutic agent for stone prevention, with no pharmacokinetic parameters reported. |
| popPK | Reum_2024 | irrelevant | 0 | 0 | The paper is a meta-analysis of H. pylori eradication efficacy and does not report pharmacokinetic parameters for potassium citrate. |
| PD | Reum_2024 | not_relevant | 0 | 0 | The paper is a meta-analysis of clinical efficacy (eradication rates) and does not report pharmacokinetic or pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response relationships for potassium citrate. |
| popPK | Ripa_2023 | irrelevant | 0 | 0 | This is a systematic review of surgical and medical management outcomes for cystine stones, not a pharmacokinetic study, and contains no quantitative PK parameters for potassium citrate. |
| popPK | Sakhaee_1991 | irrelevant | 0 | 0 | The study reports renal clearance of the metabolite citrate (a diagnostic/physiological outcome), not the population pharmacokinetic parameters of the parent drug potassium citrate. |
| popPK | Sandford_1992 | irrelevant | 0 | 0 | The paper is an electrophysiology study of potassium channels in hepatocytes where potassium citrate is used only as an electrode filling solution, not as a subject drug for pharmacokinetic analysis. |
| PD | Sandford_1992 | not_relevant | 0 | 0 | The paper investigates the biophysical properties of a potassium conductance channel in hepatocytes, not the pharmacodynamic or exposure-response relationship of the drug potassium citrate. |
| popPK | Sarica_2008 | irrelevant | 0 | 0 | The paper is a review of shockwave lithotripsy and protective agents, containing no pharmacokinetic data or quantitative disposition parameters for potassium citrate. |
| PD | Sarica_2008 | not_relevant | 1 | 0 | The text is a review overview that qualitatively mentions potassium citrate as a protective agent and explicitly states that further investigations are needed to determine the dose-response relationship, providing no numeric PD parameters. |
| popPK | Schell-Feith_2006 | irrelevant | 0 | 0 | The study is a clinical trial assessing the efficacy of citrate therapy for nephrocalcinosis and does not report pharmacokinetic parameters (CL, V, ka, etc.) for potassium citrate. |
| PD | Schell-Feith_2006 | not_relevant | 1 | 0 | The paper is a clinical trial reporting binary outcomes (nephrocalcinosis incidence) and urinary biomarkers, but it does not provide a pharmacodynamic model, concentration-effect curve, or numeric PD parameters (e.g., Emax, EC50) for potassium citrate. |
| popPK | Singh_2011 | irrelevant | 0 | 0 | The study is a clinical trial comparing therapeutic outcomes for nephrolithiasis and reports no pharmacokinetic parameters (CL, V, ka, etc.) for potassium citrate. |
| PGx | Song_2016 | not_relevant | 0 | 0 | The paper evaluates H. pylori eradication efficacy and analyzes CYP2C19 polymorphism, but does not report PK/PD parameters of potassium citrate or its interaction with the genotype. |
| PGx | Song_2020 | not_relevant | 0 | 0 | The paper investigates treatment efficacy for H. pylori and mentions CYP2C19 polymorphism for esomeprazole, but it does not report pharmacogenomic effects on the PK or PD parameters of potassium_citrate. |
| PGx | Suo_2025 | not_relevant | 1 | 0 | The paper reports that CYP2C19 genotypes guide drug selection to improve eradication efficacy, but it does not report any direct quantitative pharmacokinetic or pharmacodynamic parameters (e.g., AUC, T1/2, Cmax) for potassium citrate or any other specific drug in relation to the genetic variants. |
| popPK | Tanner_1998 | irrelevant | 0 | 0 | The study measures renal function (GFR) and potassium levels, not the pharmacokinetic disposition parameters (CL, V, etc.) of potassium citrate. |
| popPK | Tanner_2000 | relevant | 5 | 2 | The study reports qualitative renal handling parameters (fractional excretion, renal consumption rates) for citrate (metabolite of potassium citrate) in rats, but lacks quantitative compartmental PK parameters like clearance (CL) or volume (V). |
| popPK | Toblli_2001 | irrelevant | 0 | 0 | The study evaluates histomorphological and functional renal outcomes (fibrosis, albuminuria, creatinine clearance) in a nephropathy model, rather than reporting quantitative pharmacokinetic parameters (CL, Vd, ka) for potassium citrate. |
| popPK | Vaidyanathan_2006 | irrelevant | 0 | 0 | The paper is a case report focusing on metabolic evaluation (oxalate/citrate excretion) and gut microbiology, not a pharmacokinetic study of potassium citrate. |
| popPK | Veronese_2025 | irrelevant | 0 | 0 | This is a clinical umbrella review of efficacy for kidney stone prevention, containing no pharmacokinetic parameter estimation or disposition data. |
| PGx | Wang_2023 | not_relevant | 0 | 0 | The paper reports on Helicobacter pylori eradication rates and does not report pharmacokinetic or pharmacodynamic parameters of potassium_citrate. |
| PGx | Wang_2026 | not_relevant | 0 | 0 | The study compares therapeutic efficacy (eradication rates) based on H. pylori antibiotic resistance genotypes, not human pharmacogenomic variants affecting the PK/PD of potassium citrate. |
| popPK | Wiegand_2020 | irrelevant | 0 | 0 | The study is an observational analysis of urinary metabolic parameters and stone risk factors, not a pharmacokinetic study, and reports no PK parameters (CL, V, ka, etc.) for potassium citrate. |
| PD | Wiegand_2020 | not_relevant | 2 | 1 | The study is an observational comparison of treated vs. untreated groups reporting mean changes in urinary parameters, but it does not model or report a quantitative exposure-response or dose-response relationship (e.g., Emax, EC50, or slope) for potassium citrate. |
| popPK | Yuruk_2017 | irrelevant | 0 | 0 | The study reports surgical outcomes for pediatric cystine stones and does not contain pharmacokinetic parameters for potassium citrate. |
| PGx | Zgheib_2024 | not_relevant | 0 | 0 | The paper is a clinical case report on nephrocalcinosis in hypothyroidism where potassium citrate is used as therapy, but it does not report any genetic variant affecting the PK or PD of the drug. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
