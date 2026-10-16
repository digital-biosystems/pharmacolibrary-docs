<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01E&quot;,&quot;href&quot;:&quot;atc/C01E.md&quot;},{&quot;label&quot;:&quot;creatinolfosfate&quot;}]"></div>

# creatinolfosfate

- **generic name:** creatinolfosfate
- **ATC codes:** `C01EB05`
- **DrugBank:** [DB13071](https://go.drugbank.com/drugs/DB13071) · **PubChem:** [CID 23342](https://pubchem.ncbi.nlm.nih.gov/compound/23342)
- **molar mass:** 197.131 g/mol (C4H12N3O4P) — DrugBank
- **groups:** investigational

## About

Creatinolfosfate is a chemical compound classified as an other cardiac preparation, investigated for use in cardiac therapy. It remains investigational and is not an authorised medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6598844](https://www.wikidata.org/wiki/Q6598844) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 22:39 | 1:51 | 0/0/0 | 0/0/1 | 0/0/0 | 139,760/7,350 | einfracz / qwen3.8-27b | 27 | 8/21 | 27/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span> | [Hu_2019_TNF](drugs/drug_creatinolfosfate/pd_Hu_2019_TNF.md) | plasma TNF-α ← coptisine · direct linear effect | — | Hu Y et al., Pharmacokinetic-Pharmacodynamic Modelin…, Scientific reports (2019) | [10.1038/s41598-018-38164-4](https://doi.org/10.1038/s41598-018-38164-4) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 161 matched, 120 returned
- **screened:** 12  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hendershot_2013.pdf` | Hendershot BD et al., Evidence for an exposure-response relat…, Journal of biomechanics (2013) | pd | 5 | [10.1016/j.jbiomech.2013.07.021](https://doi.org/10.1016/j.jbiomech.2013.07.021) | [23932325](https://www.ncbi.nlm.nih.gov/pubmed/23932325) | metadata signals extractable PD data (exposure-response) |
| `Hong_2017.pdf` | Hong S et al., Reproducibility and diagnostic performa…, Clinical imaging (2017) | pd | 5 | [10.1016/j.clinimag.2017.03.022](https://doi.org/10.1016/j.clinimag.2017.03.022) | [28402836](https://www.ncbi.nlm.nih.gov/pubmed/28402836) | metadata signals extractable PD data (Emax) |
| `Nitta_1995.pdf` | Nitta S et al., A less invasive Emax estimation method…, IEEE transactions on bio-me… (1995) | pd | 4 | [10.1109/10.476123](https://doi.org/10.1109/10.476123) | [8550058](https://www.ncbi.nlm.nih.gov/pubmed/8550058) | metadata signals extractable PD data (Emax) |
| `Wu_2020.pdf` | Wu Q et al., Purification, structural characterizati…, Carbohydrate polymers (2020) | pd | 4 | [10.1016/j.carbpol.2020.116020](https://doi.org/10.1016/j.carbpol.2020.116020) | [32172840](https://www.ncbi.nlm.nih.gov/pubmed/32172840) | metadata signals extractable PD data (IC50) |
| `Li_2023.pdf` | Li SC et al., Coptisine modulates the pharmacokinetic…, Xenobiotica; the fate of fo… (2023) | pgx | 7 | [10.1080/00498254.2023.2211135](https://doi.org/10.1080/00498254.2023.2211135) | [37144948](https://www.ncbi.nlm.nih.gov/pubmed/37144948) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-10-14T22:39:25.864583+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abraham_2023 | irrelevant | 0 | 0 | The study focuses on busulfan pharmacokinetics and clonal dynamics in macaques, with no mention of creatinolfosfate. |
| PD | Abraham_2023 | not_relevant | 0 | 0 | The paper studies busulfan and TBI conditioning in rhesus macaques and does not mention creatinolfosfate or report any pharmacodynamic parameters for it. |
| PGx | Acebo_1998 | not_relevant | 0 | 0 | The paper describes the structural biology of a bacterial transcriptional repressor protein and is unrelated to pharmacogenomics or creatinolfosfate. |
| popPK | Ahmed_2014 | irrelevant | 0 | 0 | The paper focuses on the in vitro antimicrobial and antioxidant activities of Combretum plant extracts and does not study creatinolfosfate pharmacokinetics. |
| PD | Ahmed_2014 | not_relevant | 0 | 0 | The paper studies in vitro pharmacological activities (antioxidant, antimicrobial, cytotoxicity) of plant extracts, not the pharmacodynamics of the drug creatinolfosfate. |
| popPK | Alexandre_2022 | irrelevant | 0 | 0 | The paper focuses on SARS-CoV-2 viral dynamics and vaccine correlates of protection in non-human primates, with no mention of creatinolfosfate. |
| PD | Alexandre_2022 | not_relevant | 0 | 0 | The paper models viral dynamics and correlates of protection for SARS-CoV-2 vaccines in non-human primates and does not contain any data or analysis regarding creatinolfosfate. |
| PGx | Ar_2017 | not_relevant | 0 | 0 | The paper describes a genetic diagnostic screening method for Spinal Muscular Atrophy (SMA) using PCR and does not report any pharmacokinetic or pharmacodynamic effects of creatinolfosfate. |
| popPK | Barinov_2018 | irrelevant | 0 | 0 | The paper describes platelet receptor activity in pyelonephritis and does not contain pharmacokinetic data for creatinolfosfate. |
| PD | Barinov_2018 | not_relevant | 0 | 0 | The paper studies platelet receptor reactivity in pyelonephritis and does not mention creatinolfosfate or report any drug exposure-response relationship. |
| PGx | Batnini_2020 | not_relevant | 0 | 0 | The paper studies plant pathology and alternative oxidase pathways in Medicago truncatula, unrelated to pharmacogenomics or creatinolfosfate. |
| PGx | Brown_2022 | not_relevant | 0 | 0 | The paper is about a workforce education program for pharmacogenomics and does not report any pharmacokinetic or pharmacodynamic data for creatinolfosfate or any other specific drug-gene interaction. |
| popPK | Buser_2023 | irrelevant | 0 | 0 | The paper studies hoof mechanics in horses with osteoarthritis and contains no pharmacokinetic data for creatinolfosfate. |
| popPK | Cao_2026 | irrelevant | 0 | 0 | The paper investigates postural control and muscle strength in ankle instability and contains no pharmacokinetic data for creatinolfosfate. |
| popPK | Charalambous_2023 | irrelevant | 0 | 0 | The paper is a biomechanical study of ground reaction forces in dogs during heelwork, containing no pharmacokinetic data or mention of creatinolfosfate. |
| PD | Chen_2026 | not_relevant | 0 | 0 | The paper is a systematic review of exercise interventions (sensorimotor training) and does not involve the drug creatinolfosfate or any pharmacological exposure-response relationship. |
| PD | Cheng_2022 | not_relevant | 0 | 0 | The paper investigates biomechanical effects of insole arch support doses, not the pharmacodynamics of creatinolfosfate. |
| PD | Chidambaram_2025 | not_relevant | 0 | 0 | The paper studies the synthesis and cytotoxicity of Rh-B/F127@β-FeOOH nanoparticles, not the drug creatinolfosfate. |
| popPK | Crews_2023 | irrelevant | 0 | 0 | The paper focuses on the pharmacodynamics and toxicokinetics of Rebecsinib (an ADAR1 inhibitor) and does not contain pharmacokinetic data for creatinolfosfate. |
| PD | Crews_2023 | not_relevant | 0 | 0 | The paper discusses Rebecsinib, not creatinolfosfate, and does not report specific numeric PD parameters for the requested drug. |
| popPK | Davidson_2026 | irrelevant | 0 | 0 | The paper is a biomechanics study validating force-estimating insoles and contains no pharmacokinetic data for creatinolfosfate. |
| PGx | Del-Saz_2016 | not_relevant | 0 | 0 | The paper studies salt stress physiology in plants and does not involve pharmacogenomics or the drug creatinolfosfate. |
| PD | Deng_2024 | not_relevant | 0 | 0 | The paper investigates the association between serum surfactant protein A (SP-A) levels and pneumonia severity/prognosis, not the pharmacodynamics of creatinolfosfate. |
| popPK | Diack_2024 | irrelevant | 0 | 0 | The paper studies the pharmacodynamics of faricimab, not the pharmacokinetics of creatinolfosfate. |
| PD | Diack_2024 | not_relevant | 0 | 0 | The paper reports pharmacodynamics for faricimab, not creatinolfosfate. |
| PGx | Ding_2024 | not_relevant | 0 | 0 | The paper does not involve creatinolfosfate and focuses on zosuquidar's mechanism of action on PD-L1. |
| PD | Epstein_2014 | not_relevant | 0 | 0 | The paper studies hydroxyethyl starch in horses and does not mention creatinolfosfate or report any exposure-response relationship. |
| PD | Epstein_2017 | not_relevant | 0 | 0 | The paper focuses exclusively on the pharmacokinetics of hydroxyethyl starch in horses and does not report any pharmacodynamic data or exposure-response relationships for creatinolfosfate. |
| popPK | Farhat_2013 | irrelevant | 0 | 0 | The paper studies HCV replication and Golgi function in cell lines and does not involve creatinolfosfate pharmacokinetics. |
| PD | Farhat_2013 | not_relevant | 0 | 0 | The paper studies the effect of Brefeldin A (BFA) on HCV replication and Golgi function, not creatinolfosfate. |
| popPK | Felicio_2014 | irrelevant | 0 | 0 | The paper studies the effect of a patellar bandage on postural control in humans with knee pain and contains no pharmacokinetic data or mention of creatinolfosfate. |
| PD | Fiorentino_2018 | not_relevant | 0 | 0 | The paper studies the effect of alcohol on postural control, not creatinolfosfate, and does not report any PD parameters for the target drug. |
| popPK | Fujiya_2025 | irrelevant | 0 | 0 | The paper studies antibody kinetics related to SARS-CoV-2 vaccination, not the pharmacokinetics of creatinolfosfate. |
| popPK | Gagné_2001 | irrelevant | 0 | 0 | The study investigates the estrogenic effects of coprostanol in freshwater mussels and does not involve creatinolfosfate. |
| PD | Gagné_2001 | not_relevant | 0 | 0 | The paper studies the estrogenic effects of coprostanol on freshwater mussels, not the pharmacodynamics of creatinolfosfate. |
| popPK | Geier_2026 | irrelevant | 0 | 0 | The paper is a radiological study on mandibular anatomy and does not involve creatinolfosfate or pharmacokinetics. |
| popPK | Gilbert_2017 | irrelevant | 0 | 0 | The paper describes a clinical trial protocol for HIV-1 prevention using the antibody VRC01 and contains no data or mention of creatinolfosfate. |
| PD | Gilbert_2017 | not_relevant | 0 | 0 | The paper describes the design of clinical trials for VRC01 (an antibody) and does not mention creatinolfosfate or report any pharmacodynamic parameters. |
| popPK | Gomez-Navarro_2016 | irrelevant | 0 | 0 | The text describes general cell biology of COP-coated vesicles and protein trafficking, containing no pharmacokinetic data or mention of creatinolfosfate. |
| popPK | Gould_1992 | irrelevant | 0 | 0 | The paper discusses hemoglobin-based blood substitutes and does not mention creatinolfosfate or its pharmacokinetics. |
| PD | Gould_1992 | not_relevant | 0 | 0 | The paper discusses hemoglobin-based oxygen carriers (SFH) and does not mention creatinolfosfate or report any pharmacodynamic exposure-response relationships. |
| popPK | Grondel_1989 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for oxytetracycline in fish, not creatinolfosfate. |
| popPK | Haddas_2026 | irrelevant | 0 | 0 | The paper studies postural stability and balance metrics in patients with lumbar spinal stenosis and contains no pharmacokinetic data or mention of creatinolfosfate. |
| PD | Hammami_2023 | not_relevant | 0 | 0 | The paper is a clinical trial on balance training in children and does not involve the drug creatinolfosfate or any pharmacodynamic modeling. |
| popPK | Hendershot_2013 | irrelevant | 0 | 0 | no_text gate: only 110 chars of text extracted (&lt; 400) |
| PD | Hendershot_2013 | not_relevant | 0 | 0 | The paper discusses trunk flexion and postural control, likely in a neurological or rehabilitation context, and does not mention creatinolfosfate or any pharmacodynamic exposure-response relationship for a drug. |
| PD | Hirth_2023 | not_relevant | 0 | 0 | The paper studies bacterial copper resistance mechanisms and does not involve the drug creatinolfosfate or any pharmacodynamic modeling. |
| popPK | Hodgson_2026 | irrelevant | 0 | 0 | The paper concerns RSV immunology and does not contain pharmacokinetic data for creatinolfosfate. |
| PD | Hodgson_2026 | not_relevant | 0 | 0 | The paper analyzes immunological correlates of protection (antibody titers vs. infection risk) for RSV, not the pharmacodynamics of creatinolfosfate. |
| popPK | Holford_1992 | irrelevant | 0 | 0 | The paper focuses on a population pharmacodynamic model for tacrine in Alzheimer's patients and does not study creatinolfosfate. |
| PD | Holford_1992 | not_relevant | 0 | 0 | The paper discusses a PD model for tacrine, not creatinolfosfate. |
| popPK | Hong_2017 | irrelevant | 0 | 0 | no_text gate: only 101 chars of text extracted (&lt; 400) |
| PD | Hong_2017 | not_relevant | 0 | 0 | The paper discusses shear wave elastography for breast masses and uses "Emax" as a mechanical stiffness parameter, not a pharmacodynamic drug effect parameter. |
| popPK | Hu_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of coptisine, not creatinolfosfate. |
| popPK | Huang_2004 | irrelevant | 0 | 0 | The paper is a mechanistic cell biology study regarding protein kinase C binding in cardiac myocytes and contains no pharmacokinetic data for creatinolfosfate. |
| PD | Huang_2004 | not_relevant | 0 | 0 | The paper studies protein kinase C binding to myofibrils and does not involve the drug creatinolfosfate or any pharmacodynamic exposure-response relationship for it. |
| PD | Huang_2022 | not_relevant | 0 | 0 | The paper is an epidemiological cohort study on carbon monoxide poisoning and adrenal insufficiency, containing no pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for creatinolfosfate. |
| popPK | Jamal_2025 | irrelevant | 0 | 0 | The paper investigates biomechanics and gait control in healthy humans and contains no pharmacokinetic data or mention of creatinolfosfate. |
| PGx | Jovičić_2024 | not_relevant | 0 | 0 | The study investigates the effect of chlorpyrifos exposure on RNA expression in mouse brain genotypes, not the pharmacogenomics of creatinolfosfate or its PK/PD parameters. |
| popPK | Kaewmanee_2026 | irrelevant | 0 | 0 | The paper investigates biomechanics and postural control during lifting tasks and contains no pharmacokinetic data for creatinolfosfate. |
| popPK | Keipert_1988 | irrelevant | 0 | 0 | The paper describes the formulation and storage properties of a hemoglobin-based oxygen carrier, not the pharmacokinetics of creatinolfosfate. |
| PD | Keipert_1988 | not_relevant | 0 | 0 | The paper describes the physicochemical properties and storage stability of a hemoglobin solution, not a pharmacodynamic or exposure-response relationship for creatinolfosfate. |
| PD | Kenny_2025 | not_relevant | 0 | 0 | The paper focuses on statistical methods for immune correlates of protection in vaccine trials (mRNA-1273) and does not involve creatinolfosfate or pharmacodynamic modeling. |
| popPK | Kimera_2026 | irrelevant | 0 | 0 | The paper describes an educational intervention for HIV competence and contains no pharmacokinetic data for creatinolfosfate. |
| popPK | Koff_2021 | irrelevant | 0 | 0 | The paper is a clinical study on hip arthroplasty adverse tissue reactions and metal ion levels, with no mention of creatinolfosfate or its pharmacokinetics. |
| popPK | Kume_1986 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for chloramphenicol in goats, not creatinolfosfate. |
| PD | Laukkanen_2021 | not_relevant | 0 | 0 | The paper investigates the association between a cardiopulmonary exercise test variable (COP) and sudden cardiac death risk, not the pharmacodynamic or exposure-response relationship of the drug creatinolfosfate. |
| PD | Laukkanen_2021_2 | not_relevant | 0 | 0 | The paper analyzes the prognostic value of a cardiopulmonary exercise test variable (COP) for mortality and does not involve the drug creatinolfosfate or any pharmacodynamic exposure-response relationship. |
| PD | LeBlanc_2014 | not_relevant | 0 | 0 | The text is a review of comparative oncology and imaging in dogs and does not mention creatinolfosfate or report any specific pharmacodynamic parameters. |
| popPK | Li_2017 | irrelevant | 0 | 0 | The paper is a meta-analysis of non-Hodgkin lymphoma progression-free survival and does not involve creatinolfosfate or pharmacokinetic parameters. |
| PD | Li_2017 | not_relevant | 0 | 0 | The paper is a model-based meta-analysis of progression-free survival in NHL patients and does not involve creatinolfosfate or report any pharmacodynamic or exposure-response parameters. |
| popPK | Li_2019 | irrelevant | 0 | 0 | The study focuses on the toxicokinetics of aconitine in CaoWu processing, not creatinolfosfate. |
| PD | Li_2023 | not_relevant | 0 | 0 | The paper investigates environmental contaminants (phenols, phthalates, PAHs) and frailty, not the drug creatinolfosfate. |
| PGx | Li_2023_2 | not_relevant | 0 | 0 | The paper investigates the drug-drug interaction effect of Coptisine on florfenicol PK, not a pharmacogenomic effect (gene variant) on creatinolfosfate. |
| popPK | Linares_2011 | irrelevant | 0 | 0 | The paper focuses on computational prescribing models for 12 opioids and does not study creatinolfosfate. |
| popPK | Liu_2026 | irrelevant | 0 | 0 | The paper is a biomechanics study of sitting balance and does not involve creatinolfosfate or pharmacokinetics. |
| PD | Lucinde_2021 | not_relevant | 0 | 0 | The paper is a systematic review of pneumococcal conjugate vaccines and does not contain any data, analysis, or mention of creatinolfosfate. |
| popPK | Lutonsky_2023 | irrelevant | 0 | 0 | The paper investigates postural stability in dogs and does not involve the drug creatinolfosfate or any pharmacokinetic parameters. |
| popPK | Matsugi_2025 | irrelevant | 0 | 0 | The paper investigates the effects of galvanic vestibular stimulation on blood pressure and postural sway, containing no pharmacokinetic data for creatinolfosfate. |
| popPK | McDaniel_2019 | irrelevant | 0 | 0 | The paper describes a whole-body mathematical model of sepsis pathophysiology and contains no pharmacokinetic parameters for creatinolfosfate. |
| PD | McDaniel_2019 | not_relevant | 0 | 0 | The paper describes a mechanistic mathematical model of sepsis pathophysiology and does not report any pharmacodynamic or exposure-response analysis for creatinolfosfate. |
| popPK | Mille_2026 | irrelevant | 0 | 0 | The paper is a veterinary gait analysis study measuring center of pressure metrics in cats, containing no pharmacokinetic data or mention of creatinolfosfate. |
| popPK | Miyakawa_2026 | irrelevant | 0 | 0 | The paper is a biomechanics study on lateral ankle sprains in adolescent athletes and does not involve the drug creatinolfosfate or any pharmacokinetic parameters. |
| PD | Moore_2017 | not_relevant | 0 | 0 | The paper investigates drug absorption in microfluidic device materials for bortezomib and carfilzomib, not creatinolfosfate. |
| popPK | Nascimben_2025 | irrelevant | 0 | 0 | The paper describes a bioinformatics tool for analyzing bacterial biofilm transcriptomics and does not involve creatinolfosfate or pharmacokinetics. |
| PD | Nascimben_2025 | not_relevant | 0 | 0 | The paper focuses on bacterial biofilm transcriptomics and gene expression analysis using a software tool; it does not contain any pharmacokinetic or pharmacodynamic data for creatinolfosfate. |
| popPK | Nitta_1995 | irrelevant | 0 | 0 | no_text gate: only 74 chars of text extracted (&lt; 400) |
| PD | Nitta_1995 | not_relevant | 0 | 0 | The paper discusses a method for estimating Emax in the context of cardiac assistance weaning, but does not report any pharmacodynamic or exposure-response data for creatinolfosfate. |
| PD | Panuganti_2026 | not_relevant | 2 | 1 | The paper is about recombinant human serum albumin (rHSA), not creatinolfosfate, and reports only qualitative PD equivalence (COP/HCT ratios) without numeric PD parameters or concentration-effect curves. |
| PD | Park_1996 | not_relevant | 0 | 0 | The paper studies the dose-response of crystalloid volume on hemodynamics, not the pharmacodynamics of creatinolfosfate. |
| PGx | Pavissich_2010 | not_relevant | 0 | 0 | The paper studies bacterial sulfate reduction and copper toxicity, unrelated to human pharmacogenomics or creatinolfosfate. |
| PD | Pilecki_1991 | not_relevant | 0 | 0 | The paper discusses radiobiological dose-response for radiotherapy in a single case of lymphoma and does not report any pharmacodynamic or exposure-response data for creatinolfosfate. |
| popPK | Ramesh_2026 | irrelevant | 0 | 0 | The paper describes a clinical trial simulator for Autosomal Dominant Tubulointerstitial Kidney Disease (ADTKD) and does not mention or contain pharmacokinetic data for creatinolfosfate. |
| PD | Ribeiro_2026 | not_relevant | 0 | 0 | The paper investigates the Drug Burden Index (a composite score of multiple medications) and does not report pharmacodynamic parameters for creatinolfosfate. |
| popPK | Ritschel_1975 | irrelevant | 0 | 0 | The paper describes general equations for dose determination and does not contain any pharmacokinetic data or parameters for creatinolfosfate. |
| PGx | Romanó_2026 | not_relevant | 0 | 0 | The paper discusses a sanitation program for a bacterial infection in cows and contains no information about the drug creatinolfosfate or pharmacogenomics. |
| popPK | Roy_2025 | irrelevant | 0 | 0 | The paper focuses on VDAC1 and insulin secretion mechanisms using the compound SW016789; it does not study creatinolfosfate or report its pharmacokinetic parameters. |
| PD | Roy_2025 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of SW016789 (VDAC1 target) and does not mention creatinolfosfate or report any pharmacodynamic parameters. |
| popPK | Saldanha_2023 | irrelevant | 0 | 0 | The paper is a review of in silico studies for vaccine development and does not contain pharmacokinetic data for creatinolfosfate. |
| PD | Saldanha_2023 | not_relevant | 0 | 0 | The paper is a review of in silico studies for vaccine development and does not contain any pharmacodynamic or exposure-response data for creatinolfosfate. |
| PGx | Schmidt_2022 | not_relevant | 0 | 0 | The paper concerns pharmacogenomic effects on PK/PD of creatinolfosfate, but the provided text is about a monoclonal antibody for COVID-19 (adintrevimab) and contains no mention of creatinolfosfate or pharmacogenomics. |
| PGx | Schmidt_2023 | not_relevant | 0 | 0 | The study focuses on the clinical efficacy and PK of a monoclonal antibody for COVID-19 prevention, not the pharmacogenomics of creatinolfosfate. |
| popPK | Schwab_2023 | irrelevant | 0 | 0 | The paper is a biomechanics study regarding postural control in stroke patients and contains no pharmacokinetic data or mention of creatinolfosfate. |
| PD | Seruto_2005 | not_relevant | 0 | 0 | The paper studies PAH exposure in fish and does not mention creatinolfosfate or report any pharmacodynamic parameters for it. |
| popPK | Solomonow-Avnon_2017 | irrelevant | 0 | 0 | The paper is a clinical study on gait therapy for hip osteoarthritis and does not contain any pharmacokinetic data or mention of creatinolfosfate. |
| popPK | Solomonow-Avnon_2019 | irrelevant | 0 | 0 | The paper is a biomechanical study regarding knee osteoarthritis and gait analysis, and does not involve creatinolfosfate or pharmacokinetics. |
| popPK | Su_2015 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of coptisine (a natural alkaloid), not the drug creatinolfosfate. |
| popPK | Sundaram_2025 | irrelevant | 0 | 0 | The paper investigates biomechanical pressure redistribution in manual wheelchair users and contains no pharmacokinetic data for creatinolfosfate. |
| popPK | Sørensen_2014 | irrelevant | 0 | 0 | The study investigates postural balance in knee osteoarthritis patients and contains no pharmacokinetic data for creatinolfosfate. |
| PD | Tang_2024 | not_relevant | 0 | 0 | The paper studies the biomarker IL-34 in pneumonia patients, not the pharmacodynamics of the drug creatinolfosfate. |
| PD | Urba_1990 | not_relevant | 0 | 0 | The text is a general review of lymphoma treatment and does not mention creatinolfosfate or provide any specific pharmacodynamic or exposure-response data. |
| popPK | Viola_2026 | irrelevant | 0 | 0 | The paper is a veterinary posturography study in dogs and does not involve creatinolfosfate or pharmacokinetics. |
| PD | Weidman_1994 | not_relevant | 0 | 0 | The paper discusses the mechanism of action of mastoparan and ARFp13 on Golgi transport and does not mention creatinolfosfate or report any pharmacodynamic parameters for it. |
| PGx | Wijaya_2021 | not_relevant | 0 | 0 | The paper describes a diagnostic screening method (COP-PCR) for a genetic mutation in a metabolic disease (GSDIa) and does not involve the drug creatinolfosfate or any pharmacokinetic/pharmacodynamic analysis. |
| PD | Wiwe_2026 | not_relevant | 0 | 0 | The paper analyzes the relationship between SARS-CoV-2 antibody levels and reinfection risk, not the pharmacodynamics of creatinolfosfate. |
| popPK | Wolszky_2024 | irrelevant | 0 | 0 | The study evaluates posturography reliability in dogs and does not involve creatinolfosfate or pharmacokinetics. |
| PD | Wu_2020 | not_relevant | 0 | 0 | The paper focuses on the purification, structural characterization, and antioxidant activity of a polysaccharide from Codonopsis tangshen, and does not contain any pharmacodynamic or exposure-response data for creatinolfosfate. |
| PD | Wyles_2020 | not_relevant | 0 | 0 | The paper studies cobalt and chromium ion release from hip implants and their cytotoxicity, not the pharmacodynamics of creatinolfosfate. |
| PD | Xiang_2025 | not_relevant | 0 | 0 | The paper focuses on the tissue distribution and pharmacokinetics of alkaloids in Zuojin Pill, not creatinolfosfate, and does not report any exposure-response or dose-response PD parameters. |
| popPK | Yiew_2020 | irrelevant | 0 | 0 | The paper is a review of fluid therapy and volume kinetics and does not mention creatinolfosfate or report any pharmacokinetic parameters for it. |
| PD | Yiew_2020 | not_relevant | 0 | 0 | The paper is a review of volume kinetics for intravenous fluids and does not contain any data, analysis, or parameters for creatinolfosfate. |
| popPK | Yoo_2026 | irrelevant | 0 | 0 | The paper focuses on the discovery of RORγt inhibitors (berberine and coptisine) and does not mention creatinolfosfate or report any pharmacokinetic parameters for it. |
| PD | Yoo_2026 | not_relevant | 0 | 0 | The paper focuses on the discovery of RORγt inhibitors (berberine and coptisine) and does not mention creatinolfosfate or report any pharmacodynamic parameters for it. |
| PGx | Yoshida_2006 | not_relevant | 0 | 0 | The paper focuses on the isolation and characterization of neural crest-derived stem cells in the cornea and does not mention creatinolfosfate or any pharmacokinetic/pharmacodynamic parameters. |
| PD | Zhang_2022 | not_relevant | 0 | 0 | The paper studies biomechanical dose-response of foot orthotics, not the pharmacodynamic relationship of the drug creatinolfosfate. |
| popPK | Zhang_2022_2 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of HIV monoclonal antibody VRC01, not creatinolfosfate. |
| PD | Zhang_2022_2 | not_relevant | 0 | 0 | The paper focuses on PK sampling design for HIV monoclonal antibody (VRC01) and does not mention creatinolfosfate or report any pharmacodynamic parameters. |
| PD | Zhang_2024 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of Coptis deltoidea (YL) and its constituents, not creatinolfosfate, and does not report any exposure-response or dose-response relationship for the target drug. |
| PD | Zhao_2024 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of Coptisine in ulcerative colitis and does not report any pharmacokinetic data, exposure-response relationships, or numeric PD parameters for creatinolfosfate. |
| popPK | unknown_2023 | irrelevant | 0 | 0 | no_text gate: only 16 chars of text extracted (&lt; 400) |
| PD | unknown_2023 | not_relevant | 0 | 0 | The provided text is a placeholder for a large PDF file from a conference and contains no scientific content, data, or PD parameters. |
| popPK | unknown_2024 | irrelevant | 0 | 0 | no_text gate: only 52 chars of text extracted (&lt; 400) |
| PD | unknown_2024 | not_relevant | 0 | 0 | The provided text is a placeholder for a PDF file and contains no scientific content, data, or mention of creatinolfosfate or pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
