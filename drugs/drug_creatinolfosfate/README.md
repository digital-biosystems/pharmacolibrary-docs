<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01E&quot;,&quot;href&quot;:&quot;atc/C01E.md&quot;},{&quot;label&quot;:&quot;creatinolfosfate&quot;}]"></div>

# creatinolfosfate

- **generic name:** creatinolfosfate
- **ATC codes:** `C01EB05`
- **DrugBank:** [DB13071](https://go.drugbank.com/drugs/DB13071) · **PubChem:** [CID 23342](https://pubchem.ncbi.nlm.nih.gov/compound/23342)
- **molar mass:** 197.131 g/mol (C4H12N3O4P) — DrugBank
- **groups:** investigational

## About

**Description.** COP is under investigation for the treatment of Rheumatoid Arthritis, Mature B-Cell Lymphoma, and Noninflammatory Degenerative Joint Disease. COP has been investigated for the treatment of Diabetic Retinopathy.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-27 21:50 | 46:51 | 0/0/0 | 0/1/0 | 0/0/0 | 312,138/18,463 | ollama / qwen3.8:27b-mtp-q8_0 | 27 | 7/20 | 27/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Hu_2019_NO](drugs/drug_creatinolfosfate/pd_Hu_2019_NO.md) | NO ← coptisine · direct linear effect | — | Hu Y et al., Pharmacokinetic-Pharmacodynamic Modelin…, Scientific reports (2019) | [10.1038/s41598-018-38164-4](https://doi.org/10.1038/s41598-018-38164-4) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Hu_2019_TNF](drugs/drug_creatinolfosfate/pd_Hu_2019_TNF.md) | TNF-α ← coptisine · direct linear effect | — | Hu Y et al., Pharmacokinetic-Pharmacodynamic Modelin…, Scientific reports (2019) | [10.1038/s41598-018-38164-4](https://doi.org/10.1038/s41598-018-38164-4) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Hu_2019_iNOS](drugs/drug_creatinolfosfate/pd_Hu_2019_iNOS.md) | iNOS ← coptisine · direct linear effect | — | Hu Y et al., Pharmacokinetic-Pharmacodynamic Modelin…, Scientific reports (2019) | [10.1038/s41598-018-38164-4](https://doi.org/10.1038/s41598-018-38164-4) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 161 matched, 116 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hendershot_2013.pdf` | Hendershot BD et al., Evidence for an exposure-response relat…, Journal of biomechanics (2013) | pd | 5 | [10.1016/j.jbiomech.2013.07.021](https://doi.org/10.1016/j.jbiomech.2013.07.021) | [23932325](https://www.ncbi.nlm.nih.gov/pubmed/23932325) | metadata signals extractable PD data (exposure-response) |
| `Hong_2017.pdf` | Hong S et al., Reproducibility and diagnostic performa…, Clinical imaging (2017) | pd | 5 | [10.1016/j.clinimag.2017.03.022](https://doi.org/10.1016/j.clinimag.2017.03.022) | [28402836](https://www.ncbi.nlm.nih.gov/pubmed/28402836) | metadata signals extractable PD data (Emax) |
| `Nitta_1995.pdf` | Nitta S et al., A less invasive Emax estimation method…, IEEE transactions on bio-me… (1995) | pd | 4 | [10.1109/10.476123](https://doi.org/10.1109/10.476123) | [8550058](https://www.ncbi.nlm.nih.gov/pubmed/8550058) | metadata signals extractable PD data (Emax) |
| `Weidman_1994.pdf` | Weidman PJ et al., The G protein-activating peptide, masto…, The Journal of cell biology (1994) | pd | 4 | [10.1083/jcb.127.6.1815](https://doi.org/10.1083/jcb.127.6.1815) | [7806562](https://www.ncbi.nlm.nih.gov/pubmed/7806562) | metadata signals extractable PD data (IC50) |
| `Wu_2020.pdf` | Wu Q et al., Purification, structural characterizati…, Carbohydrate polymers (2020) | pd | 4 | [10.1016/j.carbpol.2020.116020](https://doi.org/10.1016/j.carbpol.2020.116020) | [32172840](https://www.ncbi.nlm.nih.gov/pubmed/32172840) | metadata signals extractable PD data (IC50) |
| `Li_2023.pdf` | Li SC et al., Coptisine modulates the pharmacokinetic…, Xenobiotica; the fate of fo… (2023) | pgx | 7 | [10.1080/00498254.2023.2211135](https://doi.org/10.1080/00498254.2023.2211135) | [37144948](https://www.ncbi.nlm.nih.gov/pubmed/37144948) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-09-27T21:36:54.993443+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abraham_2023 | irrelevant | 0 | 0 | The study focuses on busulfan pharmacokinetics and clonal dynamics in rhesus macaques, with no mention of creatinolfosfate. |
| PD | Abraham_2023 | not_relevant | 0 | 0 | The paper studies busulfan and TBI conditioning in rhesus macaques and does not mention creatinolfosfate or report any pharmacodynamic parameters for it. |
| PGx | Acebo_1998 | not_relevant | 0 | 0 | The paper describes the structural features of a bacterial transcriptional repressor protein (CopG) and has no relation to pharmacogenomics or creatinolfosfate. |
| popPK | Ahmed_2014 | irrelevant | 0 | 0 | The paper is an in-vitro study on Combretum plant extracts and does not involve creatinolfosfate or pharmacokinetic parameters. |
| PD | Ahmed_2014 | not_relevant | 0 | 0 | The paper studies in vitro pharmacological activities (antioxidant, antimicrobial, cytotoxicity) of plant extracts, not the pharmacodynamics of the drug creatinolfosfate. |
| popPK | Alexandre_2022 | irrelevant | 0 | 0 | The paper models SARS-CoV-2 viral dynamics in non-human primates and does not study the drug creatinolfosfate. |
| PD | Alexandre_2022 | not_relevant | 0 | 0 | The paper models viral dynamics and correlates of protection for SARS-CoV-2 vaccines in non-human primates and does not contain any data or analysis regarding creatinolfosfate. |
| PGx | Ar_2017 | not_relevant | 0 | 0 | The paper describes a genetic screening method for Spinal Muscular Atrophy (SMA) using SMN1/SMN2 genes and does not report pharmacokinetic or pharmacodynamic effects of creatinolfosfate. |
| popPK | Barinov_2018 | irrelevant | 0 | 0 | The paper is a study on platelet receptor activity in pyelonephritis and does not involve creatinolfosfate or pharmacokinetic parameters. |
| PD | Barinov_2018 | not_relevant | 0 | 0 | The paper studies platelet receptor reactivity in pyelonephritis and does not mention creatinolfosfate or report any drug exposure-response relationship. |
| PGx | Batnini_2020 | not_relevant | 0 | 0 | The paper studies plant physiology and fungal infection in Medicago truncatula, not human pharmacogenomics or creatinolfosfate. |
| PGx | Brown_2022 | not_relevant | 0 | 0 | The paper describes a pharmacogenomics workforce education program and does not report any pharmacokinetic or pharmacodynamic effects of gene variants on creatinolfosfate. |
| popPK | Buser_2023 | irrelevant | 0 | 0 | The paper is a biomechanical study on horse gait and hoof pressure, containing no pharmacokinetic data for creatinolfosfate. |
| popPK | Cao_2026 | irrelevant | 0 | 0 | The paper is a biomechanical study on chronic ankle instability and contains no pharmacokinetic data for creatinolfosfate. |
| popPK | Charalambous_2023 | irrelevant | 0 | 0 | The paper is a biomechanical study on ground reaction forces in dogs and does not involve creatinolfosfate or pharmacokinetics. |
| PD | Chen_2026 | not_relevant | 0 | 0 | The paper is a systematic review of exercise interventions (sensorimotor training) and does not involve the drug creatinolfosfate or any pharmacological exposure-response relationship. |
| PD | Cheng_2022 | not_relevant | 0 | 0 | The paper investigates biomechanical effects of insole arch support doses, not the pharmacodynamics of creatinolfosfate. |
| PD | Chidambaram_2025 | not_relevant | 0 | 0 | The paper studies the synthesis and cytotoxicity of Rh-B/F127@β-FeOOH nanoparticles, not the drug creatinolfosfate. |
| popPK | Crews_2023 | irrelevant | 0 | 0 | The paper studies Rebecsinib and ADAR1 splicing, not creatinolfosfate pharmacokinetics. |
| PD | Crews_2023 | not_relevant | 0 | 0 | The paper discusses Rebecsinib, not creatinolfosfate, and does not report specific numeric PD parameters for the requested drug. |
| popPK | Davidson_2026 | irrelevant | 0 | 0 | The paper is a biomechanical study on force-estimating insoles and contains no pharmacokinetic data for creatinolfosfate. |
| PGx | Del-Saz_2016 | not_relevant | 0 | 0 | The paper studies plant physiology (salinity tolerance in Medicago truncatula) and does not involve the drug creatinolfosfate or human pharmacogenomics. |
| PD | Deng_2024 | not_relevant | 0 | 0 | The paper investigates the association between serum surfactant protein A (SP-A) levels and pneumonia severity/prognosis, not the pharmacodynamics of creatinolfosfate. |
| popPK | Diack_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of faricimab, not the pharmacokinetics of creatinolfosfate. |
| PD | Diack_2024 | not_relevant | 0 | 0 | The paper reports pharmacodynamics for faricimab, not creatinolfosfate. |
| PGx | Ding_2024 | not_relevant | 0 | 0 | The paper studies zosuquidar's effect on PD-L1 and tumor immunity, not the pharmacokinetics or pharmacodynamics of creatinolfosfate. |
| PD | Epstein_2014 | not_relevant | 0 | 0 | The paper studies hydroxyethyl starch in horses and does not mention creatinolfosfate or report any exposure-response relationship. |
| popPK | Farhat_2013 | irrelevant | 0 | 0 | The paper is a mechanistic study on Hepatitis C virus replication and Golgi function, and does not involve creatinolfosfate or pharmacokinetic parameters. |
| PD | Farhat_2013 | not_relevant | 0 | 0 | The paper studies the effect of Brefeldin A (BFA) on HCV replication and Golgi function, not creatinolfosfate. |
| popPK | Felicio_2014 | irrelevant | 0 | 0 | The paper is a biomechanical study on postural control in patellofemoral pain syndrome and does not involve creatinolfosfate or pharmacokinetics. |
| PD | Fiorentino_2018 | not_relevant | 0 | 0 | The paper studies the effect of alcohol on postural control, not creatinolfosfate, and does not report any PD parameters for the target drug. |
| popPK | Fujiya_2025 | irrelevant | 0 | 0 | The paper is a study on COVID-19 antibody kinetics and booster timing, unrelated to the pharmacokinetics of creatinolfosfate. |
| popPK | Gagné_2001 | irrelevant | 0 | 0 | The paper studies the estrogenic effects of coprostanol in mussels and does not involve creatinolfosfate or pharmacokinetic parameters. |
| PD | Gagné_2001 | not_relevant | 0 | 0 | The paper studies the estrogenic effects of coprostanol on freshwater mussels, not the pharmacodynamics of creatinolfosfate. |
| popPK | Geier_2026 | irrelevant | 0 | 0 | The paper is a radiological study on mandibular anatomy and pathology, unrelated to the pharmacokinetics of creatinolfosfate. |
| popPK | Gilbert_2017 | irrelevant | 0 | 0 | The paper describes HIV-1 prevention trials using the antibody VRC01 and does not mention creatinolfosfate or report any pharmacokinetic parameters for it. |
| PD | Gilbert_2017 | not_relevant | 0 | 0 | The paper describes the design of clinical trials for VRC01 (an antibody) and does not mention creatinolfosfate or report any pharmacodynamic parameters. |
| popPK | Gomez-Navarro_2016 | irrelevant | 0 | 0 | The paper discusses cellular vesicle trafficking and is unrelated to the pharmacokinetics of creatinolfosfate. |
| popPK | Gould_1992 | irrelevant | 0 | 0 | The paper discusses hemoglobin-based red cell substitutes and does not mention creatinolfosfate or report any pharmacokinetic parameters for it. |
| PD | Gould_1992 | not_relevant | 0 | 0 | The paper discusses hemoglobin-based oxygen carriers (SFH) and does not mention creatinolfosfate or report any pharmacodynamic exposure-response relationships. |
| popPK | Grondel_1989 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of oxytetracycline in fish, not creatinolfosfate. |
| popPK | Haddas_2026 | irrelevant | 0 | 0 | The paper is a biomechanical study on postural stability after lumbar surgery and does not involve creatinolfosfate or pharmacokinetics. |
| PD | Hammami_2023 | not_relevant | 0 | 0 | The paper is a clinical trial on balance training in children and does not involve the drug creatinolfosfate or any pharmacodynamic modeling. |
| popPK | Hendershot_2013 | irrelevant | 0 | 0 | no_text gate: only 110 chars of text extracted (&lt; 400) |
| PD | Hendershot_2013 | not_relevant | 0 | 0 | The paper discusses trunk flexion and postural control, likely in a neurological or rehabilitation context, and does not mention creatinolfosfate or any pharmacodynamic exposure-response relationship for a drug. |
| PD | Hirth_2023 | not_relevant | 0 | 0 | The paper studies bacterial copper resistance mechanisms and does not involve the drug creatinolfosfate or any pharmacodynamic modeling. |
| popPK | Hodgson_2026 | irrelevant | 0 | 0 | The paper is an immunological study on RSV antibody kinetics and correlates of protection, and does not involve the drug creatinolfosfate or report any pharmacokinetic parameters for it. |
| PD | Hodgson_2026 | not_relevant | 0 | 0 | The paper analyzes immunological correlates of protection (antibody titers vs. infection risk) for RSV, not the pharmacodynamics of creatinolfosfate. |
| popPK | Holford_1992 | irrelevant | 0 | 0 | The paper focuses on a pharmacodynamic model for tacrine in Alzheimer's patients and does not involve creatinolfosfate or report its pharmacokinetic parameters. |
| PD | Holford_1992 | not_relevant | 0 | 0 | The paper discusses a PD model for tacrine, not creatinolfosfate. |
| popPK | Hong_2017 | irrelevant | 0 | 0 | The paper is a diagnostic imaging study on breast masses and does not involve creatinolfosfate or pharmacokinetics. |
| PD | Hong_2017 | not_relevant | 0 | 0 | The paper discusses shear wave elastography for breast masses and uses "Emax" as a mechanical stiffness parameter, not a pharmacodynamic drug effect parameter. |
| popPK | Hu_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of coptisine, not creatinolfosfate. |
| popPK | Huang_2004 | irrelevant | 0 | 0 | The paper is a mechanistic study on protein kinase C binding in cardiac myocytes and does not involve creatinolfosfate or pharmacokinetics. |
| PD | Huang_2004 | not_relevant | 0 | 0 | The paper studies protein kinase C binding to myofibrils and does not involve the drug creatinolfosfate or any pharmacodynamic exposure-response relationship for it. |
| PD | Huang_2022 | not_relevant | 0 | 0 | The paper is an epidemiological cohort study on carbon monoxide poisoning and adrenal insufficiency, containing no pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for creatinolfosfate. |
| popPK | Jamal_2025 | irrelevant | 0 | 0 | The paper is a biomechanics study on gait and proprioception, unrelated to the pharmacokinetics of creatinolfosfate. |
| PGx | Jovičić_2024 | not_relevant | 0 | 0 | The paper investigates the neurotoxicity of chlorpyrifos in murine models and does not involve the drug creatinolfosfate or its pharmacokinetics/pharmacodynamics. |
| popPK | Kaewmanee_2026 | irrelevant | 0 | 0 | The paper is a biomechanics study on postural control during lifting and contains no pharmacokinetic data for creatinolfosfate. |
| popPK | Keipert_1988 | irrelevant | 0 | 0 | The paper describes the physicochemical properties of a hemoglobin-based oxygen carrier and does not mention creatinolfosfate or report any pharmacokinetic parameters for it. |
| PD | Keipert_1988 | not_relevant | 0 | 0 | The paper describes the physicochemical properties and storage stability of a hemoglobin solution, not a pharmacodynamic or exposure-response relationship for creatinolfosfate. |
| PD | Kenny_2025 | not_relevant | 0 | 0 | The paper focuses on statistical methods for immune correlates of protection in vaccine trials (mRNA-1273) and does not involve creatinolfosfate or pharmacodynamic modeling. |
| popPK | Kimera_2026 | irrelevant | 0 | 0 | The paper is an educational intervention study on HIV competence in school staff and contains no pharmacokinetic data for creatinolfosfate. |
| popPK | Koff_2021 | irrelevant | 0 | 0 | The paper is a clinical study on hip arthroplasty and metal ion levels, unrelated to creatinolfosfate pharmacokinetics. |
| popPK | Kume_1986 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of chloramphenicol in goats, not creatinolfosfate. |
| PD | Laukkanen_2021 | not_relevant | 0 | 0 | The paper investigates the association between a cardiopulmonary exercise test variable (COP) and sudden cardiac death risk, not the pharmacodynamic or exposure-response relationship of the drug creatinolfosfate. |
| PD | Laukkanen_2021_2 | not_relevant | 0 | 0 | The paper analyzes the prognostic value of a cardiopulmonary exercise test variable (COP) for mortality and does not involve the drug creatinolfosfate or any pharmacodynamic exposure-response relationship. |
| PD | LeBlanc_2014 | not_relevant | 0 | 0 | The text is a review of comparative oncology and imaging in dogs and does not mention creatinolfosfate or report any specific pharmacodynamic parameters. |
| popPK | Li_2017 | irrelevant | 0 | 0 | The paper is a meta-analysis of progression-free survival in non-Hodgkin lymphoma and does not involve creatinolfosfate or pharmacokinetic parameters. |
| PD | Li_2017 | not_relevant | 0 | 0 | The paper is a model-based meta-analysis of progression-free survival in NHL patients and does not involve creatinolfosfate or report any pharmacodynamic or exposure-response parameters. |
| popPK | Li_2019 | irrelevant | 0 | 0 | The study focuses on the toxicokinetics of aconitine in CaoWu, not the pharmacokinetics of creatinolfosfate. |
| PD | Li_2023 | not_relevant | 0 | 0 | The paper investigates environmental contaminants (phenols, phthalates, PAHs) and frailty, not the drug creatinolfosfate. |
| PGx | Li_2023_2 | not_relevant | 0 | 0 | The paper studies the effect of co-administered coptisine on florfenicol pharmacokinetics in rats, not the effect of a genetic variant on creatinolfosfate. |
| popPK | Liu_2026 | irrelevant | 0 | 0 | The paper is a biomechanics study on sitting balance and center of pressure, containing no pharmacokinetic data for creatinolfosfate. |
| PD | Lucinde_2021 | not_relevant | 0 | 0 | The paper is a systematic review of pneumococcal conjugate vaccines and does not contain any data, analysis, or mention of creatinolfosfate. |
| popPK | Lutonsky_2023 | irrelevant | 0 | 0 | The study investigates postural stability in dogs and does not involve creatinolfosfate or pharmacokinetic parameters. |
| popPK | Matsugi_2025 | irrelevant | 0 | 0 | The paper investigates the effects of galvanic vestibular stimulation on blood pressure and postural sway, and does not involve the drug creatinolfosfate or any pharmacokinetic analysis. |
| popPK | McDaniel_2019 | irrelevant | 0 | 0 | The paper describes a mathematical model of sepsis pathophysiology and does not report pharmacokinetic parameters for creatinolfosfate. |
| PD | McDaniel_2019 | not_relevant | 0 | 0 | The paper describes a mechanistic mathematical model of sepsis pathophysiology and does not report any pharmacodynamic or exposure-response analysis for creatinolfosfate. |
| popPK | Mille_2026 | irrelevant | 0 | 0 | The paper is a biomechanical study on feline gait and center of pressure metrics, containing no pharmacokinetic data for creatinolfosfate. |
| popPK | Miyakawa_2026 | irrelevant | 0 | 0 | The paper is a biomechanical study on lateral ankle sprains and postural control in adolescent athletes, containing no pharmacokinetic data or mention of creatinolfosfate. |
| PD | Moore_2017 | not_relevant | 0 | 0 | The paper investigates drug absorption in microfluidic device materials for bortezomib and carfilzomib, not creatinolfosfate. |
| popPK | Nascimben_2025 | irrelevant | 0 | 0 | The paper is a bioinformatics study on bacterial biofilm transcriptomics and does not involve creatinolfosfate or pharmacokinetics. |
| PD | Nascimben_2025 | not_relevant | 0 | 0 | The paper focuses on bacterial biofilm transcriptomics and gene expression analysis using a software tool; it does not contain any pharmacokinetic or pharmacodynamic data for creatinolfosfate. |
| popPK | Nitta_1995 | irrelevant | 0 | 0 | no_text gate: only 74 chars of text extracted (&lt; 400) |
| PD | Nitta_1995 | not_relevant | 0 | 0 | The paper discusses a method for estimating Emax in the context of cardiac assistance weaning, but does not report any pharmacodynamic or exposure-response data for creatinolfosfate. |
| PD | Panuganti_2026 | not_relevant | 2 | 1 | The paper is about recombinant human serum albumin (rHSA), not creatinolfosfate, and reports only qualitative PD equivalence (COP/HCT ratios) without numeric PD parameters or concentration-effect curves. |
| PD | Park_1996 | not_relevant | 0 | 0 | The paper studies the dose-response of crystalloid volume on hemodynamics, not the pharmacodynamics of creatinolfosfate. |
| PGx | Pavissich_2010 | not_relevant | 0 | 0 | The paper studies bacterial sulfate reduction and copper resistance in sediments, unrelated to human pharmacogenomics or creatinolfosfate. |
| PD | Pilecki_1991 | not_relevant | 0 | 0 | The paper discusses radiobiological dose-response for radiotherapy in a single case of lymphoma and does not report any pharmacodynamic or exposure-response data for creatinolfosfate. |
| popPK | Ramesh_2026 | irrelevant | 0 | 0 | The paper focuses on clinical trial simulation for Autosomal Dominant Tubulointerstitial Kidney Disease (ADTKD) and does not mention creatinolfosfate or report any pharmacokinetic parameters for it. |
| PD | Ribeiro_2026 | not_relevant | 0 | 0 | The paper investigates the Drug Burden Index (a composite score of multiple medications) and does not report pharmacodynamic parameters for creatinolfosfate. |
| popPK | Ritschel_1975 | irrelevant | 0 | 0 | The paper is a general methodological review on dose calculation and does not report specific pharmacokinetic parameters for creatinolfosfate. |
| PGx | Romanó_2026 | not_relevant | 0 | 0 | The paper discusses a sanitation program for Staphylococcus aureus in dairy cows and does not report pharmacogenomic effects on the PK/PD of creatinolfosfate. |
| popPK | Roy_2025 | irrelevant | 0 | 0 | The paper investigates the mechanism of action of SW016789 on beta cells and does not involve creatinolfosfate or pharmacokinetic parameters. |
| PD | Roy_2025 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of SW016789 (VDAC1 target) and does not mention creatinolfosfate or report any pharmacodynamic parameters. |
| popPK | Saldanha_2023 | irrelevant | 0 | 0 | The paper is a review on in silico studies for vaccine development and does not contain any pharmacokinetic data for creatinolfosfate. |
| PD | Saldanha_2023 | not_relevant | 0 | 0 | The paper is a review of in silico studies for vaccine development and does not contain any pharmacodynamic or exposure-response data for creatinolfosfate. |
| PGx | Schmidt_2022 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics and efficacy of a monoclonal antibody (adintrevimab) for COVID-19, not creatinolfosfate, and does not report pharmacogenomic effects. |
| PGx | Schmidt_2023 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics and protective efficacy of a monoclonal antibody against SARS-CoV-2, not creatinolfosfate, and does not report pharmacogenomic effects. |
| popPK | Schwab_2023 | irrelevant | 0 | 0 | The paper is a biomechanics study on stroke patients and contains no pharmacokinetic data for creatinolfosfate. |
| PD | Seruto_2005 | not_relevant | 0 | 0 | The paper studies PAH exposure in fish and does not mention creatinolfosfate or report any pharmacodynamic parameters for it. |
| popPK | Solomonow-Avnon_2017 | irrelevant | 0 | 0 | The paper is a clinical study on gait therapy for hip osteoarthritis and does not involve creatinolfosfate or pharmacokinetics. |
| popPK | Solomonow-Avnon_2019 | irrelevant | 0 | 0 | The paper is a biomechanical study on knee osteoarthritis and gait analysis, unrelated to the pharmacokinetics of creatinolfosfate. |
| popPK | Su_2015 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of coptisine (COP), not creatinolfosfate. |
| popPK | Sundaram_2025 | irrelevant | 0 | 0 | The paper is a biomechanical study on wheelchair pressure redistribution and does not involve creatinolfosfate or pharmacokinetics. |
| popPK | Sørensen_2014 | irrelevant | 0 | 0 | The paper studies postural balance in knee osteoarthritis patients and does not involve creatinolfosfate or pharmacokinetics. |
| PD | Tang_2024 | not_relevant | 0 | 0 | The paper studies the biomarker IL-34 in pneumonia patients, not the pharmacodynamics of the drug creatinolfosfate. |
| PD | Urba_1990 | not_relevant | 0 | 0 | The text is a general review of lymphoma treatment and does not mention creatinolfosfate or provide any specific pharmacodynamic or exposure-response data. |
| popPK | Viola_2026 | irrelevant | 0 | 0 | The paper investigates posturographic balance assessments in dogs and contains no pharmacokinetic data or parameters for creatinolfosfate. |
| PD | Weidman_1994 | not_relevant | 0 | 0 | The paper discusses the mechanism of action of mastoparan and ARFp13 on Golgi transport and does not mention creatinolfosfate or report any pharmacodynamic parameters for it. |
| PGx | Wijaya_2021 | not_relevant | 0 | 0 | The paper describes a diagnostic screening method for a genetic disease (GSDIa) and does not report pharmacokinetic or pharmacodynamic effects of a drug (specifically creatinolfosfate) based on genotype. |
| PD | Wiwe_2026 | not_relevant | 0 | 0 | The paper analyzes the relationship between SARS-CoV-2 antibody levels and reinfection risk, not the pharmacodynamics of creatinolfosfate. |
| popPK | Wolszky_2024 | irrelevant | 0 | 0 | The study investigates balance assessment in dogs and does not involve creatinolfosfate or pharmacokinetic parameters. |
| PD | Wu_2020 | not_relevant | 0 | 0 | The paper focuses on the purification, structural characterization, and antioxidant activity of a polysaccharide from Codonopsis tangshen, and does not contain any pharmacodynamic or exposure-response data for creatinolfosfate. |
| PD | Wyles_2020 | not_relevant | 0 | 0 | The paper studies cobalt and chromium ion release from hip implants and their cytotoxicity, not the pharmacodynamics of creatinolfosfate. |
| PD | Xiang_2025 | not_relevant | 0 | 0 | The paper focuses on the tissue distribution and pharmacokinetics of alkaloids in Zuojin Pill, not creatinolfosfate, and does not report any exposure-response or dose-response PD parameters. |
| popPK | Yiew_2020 | irrelevant | 0 | 0 | The paper is a review of volume kinetics for IV fluid therapy and does not study creatinolfosfate or report any pharmacokinetic parameters for it. |
| PD | Yiew_2020 | not_relevant | 0 | 0 | The paper is a review of volume kinetics for intravenous fluids and does not contain any data, analysis, or parameters for creatinolfosfate. |
| popPK | Yoo_2026 | irrelevant | 0 | 0 | The paper focuses on the discovery of RORγt inhibitors (berberine and coptisine) and contains no information regarding creatinolfosfate or its pharmacokinetics. |
| PD | Yoo_2026 | not_relevant | 0 | 0 | The paper focuses on the discovery of RORγt inhibitors (berberine and coptisine) and does not mention creatinolfosfate or report any pharmacodynamic parameters for it. |
| PGx | Yoshida_2006 | not_relevant | 0 | 0 | The paper describes the isolation of neural crest-derived stem cells from the mouse cornea and contains no information regarding creatinolfosfate, pharmacokinetics, pharmacodynamics, or pharmacogenomics. |
| PD | Zhang_2022 | not_relevant | 0 | 0 | The paper studies biomechanical dose-response of foot orthotics, not the pharmacodynamic relationship of the drug creatinolfosfate. |
| popPK | Zhang_2022_2 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of the HIV monoclonal antibody VRC01, not creatinolfosfate. |
| PD | Zhang_2022_2 | not_relevant | 0 | 0 | The paper focuses on PK sampling design for HIV monoclonal antibody (VRC01) and does not mention creatinolfosfate or report any pharmacodynamic parameters. |
| PD | Zhang_2024 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of Coptis deltoidea (YL) and its constituents, not creatinolfosfate, and does not report any exposure-response or dose-response relationship for the target drug. |
| PD | Zhao_2024 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of Coptisine in ulcerative colitis and does not report any pharmacokinetic data, exposure-response relationships, or numeric PD parameters for creatinolfosfate. |
| popPK | unknown_2023 | irrelevant | 0 | 0 | no_text gate: only 62 chars of text extracted (&lt; 400) |
| PD | unknown_2023 | not_relevant | 0 | 0 | The provided text is a placeholder for a large PDF file from a conference and contains no scientific content, data, or PD parameters. |
| popPK | unknown_2024 | irrelevant | 0 | 0 | no_text gate: only 61 chars of text extracted (&lt; 400) |
| PD | unknown_2024 | not_relevant | 0 | 0 | The provided text is a placeholder for a PDF file and contains no scientific content, data, or mention of creatinolfosfate or pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
