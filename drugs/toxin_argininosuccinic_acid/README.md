<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Argininosuccinic acid&quot;}]"></div>

# Argininosuccinic acid

- **generic name:** Argininosuccinic acid
- **T3DB:** [T3D4294](http://www.t3db.ca/toxins/T3D4294) · **DrugBank:** [DB02267](https://go.drugbank.com/drugs/DB02267) · **PubChem:** [CID 16950](https://pubchem.ncbi.nlm.nih.gov/compound/16950)
- **groups:** experimental

## About

Arginosuccinic acid is a basic amino acid. Some cells synthesize it from citrulline, aspartic acid and use it as a precursor for arginine in the urea cycle or Citrulline-NO cycle. The enzyme that catalyzes the reaction is argininosuccinate synthetase. …

- **Category:** Animal Toxin, Food Toxin, Natural Toxin
- **Sources and uses:** This is an endogenously produced metabolite found in the human body. It is used in metabolic reactions, catabolic reactions or waste generation.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4294">T3DB T3D4294</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 2387-71-5 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:15682">ChEBI 15682</a></small></p>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=argininosuccinic_acid).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ASL (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-09 21:04 | 21:26 | 0/0/0 | 0/0/0 | 0/0/0 | 394,308/12,862 | einfracz / qwen3.8-27b | 32 | 1/31 | 32/0 | 0 |

## Coverage

- **PubMed hits:** 568 matched, 89 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Brusilow_1979.pdf` | Brusilow SW et al., Arginine therapy of argininosuccinase d…, Lancet (London, England) (1979) | popPK | 8 | [10.1016/s0140-6736(79)90518-x](https://doi.org/10.1016/s0140-6736(79)90518-x) | [84150](https://pubmed.ncbi.nlm.nih.gov/84150) | The paper provides a qualitative toxicokinetic parameter (renal clearance similar to glomerular filtration rate) for argininosuccinic acid in humans, but specific numeric values are not present in the provided evidence. |

<sub>queue written 2026-11-09 21:04 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ali_2022 | irrelevant | 0 | 0 | The paper describes a surgical procedure for renal calculi and does not contain any toxicokinetic parameters for argininosuccinic acid. |
| popPK | Banerjee_2021 | irrelevant | 0 | 0 | The paper focuses on hemodynamic changes during laparoscopic cholecystectomy and contains no data or parameters for argininosuccinic acid. |
| popPK | Bayoumy_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for thioguanine, not argininosuccinic acid. |
| popPK | Bhardwaj_2023 | irrelevant | 0 | 0 | The paper is a clinical study on percutaneous nephrolithotomy outcomes and does not contain any toxicokinetic parameters for argininosuccinic acid. |
| popPK | Bliden_2016 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of acetylsalicylic acid (aspirin), not argininosuccinic acid. |
| popPK | Bourgi_2025 | irrelevant | 0 | 0 | The paper is a systematic review of surgical outcomes for ambulatory percutaneous nephrolithotomy (PCNL) in humans and does not contain any toxicokinetic parameters for argininosuccinic acid. |
| popPK | Brusilow_1979 | relevant | 8 | 2 | The paper provides a qualitative toxicokinetic parameter (renal clearance similar to glomerular filtration rate) for argininosuccinic acid in humans, but specific numeric values are not present in the provided evidence. |
| popPK | Cai_2025 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of sulfasalazine and 5-ASA in humans, with no mention of argininosuccinic acid. |
| popPK | Caputa_2022 | irrelevant | 0 | 0 | The paper discusses the argininosuccinate shunt in the context of immune metabolism and bacterial clearance in adipocytes, but it does not provide quantitative toxicokinetic parameters (e.g., half-life, clearance, rate constants) for argininosuccinic acid. |
| popPK | Chanalet_1994 | irrelevant | 0 | 0 | The paper focuses on drugs for lens transparency (aldose reductase inhibitors, salicylates) and does not report kinetic parameters for argininosuccinic acid. |
| popPK | Chen_2012 | irrelevant | 0 | 0 | The paper studies L-arginine and ADMA, and while it mentions argininosuccinate lyase (ASL) abundance, it does not report quantitative kinetic parameters for argininosuccinic acid itself. |
| popPK | Chen_2021 | irrelevant | 0 | 0 | The paper is a clinical case-control study on unplanned reintubation risk factors and does not report any toxicokinetic parameters for argininosuccinic acid. |
| popPK | Chi_2026 | irrelevant | 0 | 0 | The paper studies urate degradation by engineered bacteria in mice, and argininosuccinic acid is mentioned only as a fecal metabolite detected in the profile, with no kinetic parameters reported for it. |
| popPK | Chuang_2024 | irrelevant | 0 | 0 | The paper is a surgical outcome study on laparoscopic cholecystectomy and contains no toxicokinetic parameters for argininosuccinic acid. |
| popPK | Collins_2026 | irrelevant | 0 | 0 | The paper is a review on the gut microbiome and ulcerative colitis pharmacotherapy, containing no toxicokinetic parameters for argininosuccinic acid. |
| popPK | Cong_2023 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for acetylsalicylic acid (aspirin) and salicylic acid, not argininosuccinic acid. |
| popPK | DAmico_2024 | irrelevant | 0 | 0 | The paper is a clinical consensus on ulcerative colitis management and contains no kinetic parameters for argininosuccinic acid. |
| popPK | Desolneux_2014 | irrelevant | 0 | 0 | The paper is a clinical study on liver surgery complications and contains no data regarding argininosuccinic acid. |
| popPK | Dooley_2012 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for rifapentine, not argininosuccinic_acid. |
| popPK | Dubovská_1995 | irrelevant | 0 | 0 | The paper reports pharmacokinetics of acetylsalicylic acid and its metabolites, not argininosuccinic acid. |
| popPK | Eker_2011 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of sedatives (midazolam, ketamine) in children on phenobarbital therapy and does not mention argininosuccinic acid. |
| popPK | Fernandez-Becker_2008 | irrelevant | 0 | 0 | The paper focuses on the delivery and clinical outcomes of 5-aminosalicylic acid for ulcerative colitis and does not contain any kinetic parameters for argininosuccinic acid. |
| popPK | Fultang_2020 | irrelevant | 0 | 0 | The paper focuses on CAR-T cell therapy and arginine metabolism dynamics but does not report any quantitative toxicokinetic parameters (such as half-life, clearance, or partition coefficients) for argininosuccinic acid. |
| popPK | Gao_2023 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for remimazolam, not argininosuccinic acid. |
| popPK | Garolla_2024 | irrelevant | 0 | 0 | The paper is a review of HPV-related diseases in males and contains no mention of argininosuccinic_acid or its toxicokinetic parameters. |
| popPK | Gault_1975 | irrelevant | 0 | 0 | The paper studies analgesic nephropathy involving aspirin and phenacetin, with no mention of argininosuccinic acid. |
| popPK | Gisbert_2007 | irrelevant | 0 | 0 | The paper is a systematic review of 5-aminosalicylates (5-ASA) and renal function, with no mention of argininosuccinic acid or its kinetic parameters. |
| popPK | Gomez-Tabales_2026 | irrelevant | 0 | 0 | The paper investigates the toxicokinetics of acetaminophen and its metabolites (NAPQI, etc.), not argininosuccinic acid. |
| popPK | Goodarzi_2023 | irrelevant | 0 | 0 | The paper studies the effects of dietary valine and isoleucine on lipid metabolism and urea cycle enzyme expression (specifically argininosuccinate lyase) in pigs, but does not report kinetic parameters for argininosuccinic acid itself. |
| popPK | Gurung_2024 | irrelevant | 0 | 0 | The paper reports concentrations of argininosuccinic acid as a biomarker in a disease model but does not provide any quantitative toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for argininosuccinic acid. |
| popPK | Han_2015 | irrelevant | 0 | 0 | The paper is a review of abiraterone acetate and contains no mention of argininosuccinic acid or any toxicokinetic parameters for it. |
| popPK | Hoymork_2005 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of propofol, not argininosuccinic acid, and contains no data for the target substance. |
| popPK | Jayanthi_2022 | irrelevant | 0 | 0 | The paper studies the efficacy of estradiol and EMLA creams for venipuncture pain and does not report any kinetic parameters for argininosuccinic acid. |
| popPK | Kagerbauer_2024 | irrelevant | 0 | 0 | The paper is a clinical agreement study regarding preoperative evaluation for surgery and contains no kinetic parameters or data for argininosuccinic acid. |
| popPK | Katoh_1993 | irrelevant | 0 | 0 | The paper investigates the effects of prostaglandin E1 on renal function and does not report any kinetic parameters for argininosuccinic acid. |
| popPK | Klotz_1985 | irrelevant | 0 | 0 | The paper discusses the pharmacokinetics of sulphasalazine and 5-aminosalicylic acid, not argininosuccinic acid. |
| popPK | Klotz_1987 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for 5-aminosalicylic acid, not argininosuccinic acid. |
| popPK | Koh_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for aspirin and salicylic acid, but does not mention or provide any data for argininosuccinic acid. |
| popPK | Kyle_1983 | irrelevant | 0 | 0 | The paper focuses on nephrotoxicity induced by mercuric chloride, and argininosuccinate lyase is only mentioned as a liver enzyme marker in a separate context, not as the subject substance for toxicokinetic parameter extraction. |
| popPK | Lauritsen_1988 | irrelevant | 0 | 0 | The paper studies olsalazine and its metabolite 5-ASA in humans, with no mention of argininosuccinic acid. |
| popPK | Lecompte_1983 | irrelevant | 0 | 0 | The paper reviews anti-platelet agents (ASA, sulfinpyrazone, dipyridamole, ticlopidine) and does not mention or provide kinetic data for argininosuccinic acid. |
| popPK | Li_2024 | irrelevant | 0 | 0 | The paper describes surgical outcomes for benign prostatic hyperplasia and bladder stones and contains no mention or data for argininosuccinic acid. |
| popPK | Li_2025 | irrelevant | 1 | 0 | The paper reports qualitative changes in gene expression and metabolite levels under stress, but provides no quantitative toxicokinetic parameters (e.g., half-life, clearance, rate constants) for argininosuccinic acid. |
| popPK | Lipping_2026 | irrelevant | 0 | 0 | The paper describes a surgical procedure for common bile duct stones and contains no kinetic data for argininosuccinic acid. |
| popPK | Luo_2025 | irrelevant | 0 | 0 | The paper reports enzyme kinetics (Km, kcat) for the enzyme ASS1 (argininosuccinate synthase 1) which *produces* argininosuccinic acid, rather than reporting toxicokinetic parameters (half-life, clearance, distribution) for argininosuccinic acid itself. |
| popPK | Masciangelo_2024 | irrelevant | 0 | 0 | The paper is a clinical study on endoscopic retrograde cholangiopancreatography (ERCP) outcomes and does not contain any toxicokinetic data for argininosuccinic_acid. |
| popPK | McBryde_2004 | irrelevant | 0 | 0 | The paper reports dialytic clearance values for other amino acids (arginine, citrulline, glutamine, glycine) but does not provide kinetic parameters for argininosuccinic acid itself. |
| popPK | McCrindle_2021 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics and safety of rivaroxaban and acetylsalicylic acid; argininosuccinic_acid is not mentioned or measured. |
| popPK | Messick_1987 | irrelevant | 0 | 0 | The paper studies cerebral blood flow and EEG changes during isoflurane anesthesia and does not contain any toxicokinetic data for argininosuccinic acid. |
| popPK | Mian_2005 | irrelevant | 0 | 0 | The paper investigates the immune response to adenoviral gene therapy vectors in mice, focusing on the transgene argininosuccinate synthetase, rather than the toxicokinetics of the small molecule argininosuccinic acid. |
| popPK | Miyaue_2022 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of levodopa and the stability of carbidopa, with no mention of argininosuccinic acid. |
| PGx | Nagamani_2012 | not_relevant | 0 | 0 | The paper describes the pathophysiology and treatment of argininosuccinate lyase deficiency, not the pharmacogenomics of the drug argininosuccinic acid. |
| popPK | Neill_2009 | irrelevant | 0 | 0 | The paper reports gene expression levels (transcripts) for urea cycle enzymes, not toxicokinetic parameters (half-life, clearance, partition coefficients) for argininosuccinic acid itself. |
| popPK | Nishida_2026 | irrelevant | 0 | 0 | The paper discusses ulcerative colitis management with 5-aminosalicylic acid and contains no kinetic parameters or data for argininosuccinic acid. |
| popPK | Norlander_1990 | irrelevant | 0 | 0 | The paper reports the pharmacokinetics of 5-aminosalicylic acid, not argininosuccinic acid. |
| popPK | Norlander_1991 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of 5-aminosalicylic acid (5-ASA/mesalazine), not argininosuccinic acid. |
| popPK | Ota_2024 | irrelevant | 0 | 0 | The paper is a clinical study on risk factors for kidney injury after colorectal surgery and contains no mention or data regarding argininosuccinic_acid. |
| popPK | Ozciftci_2022 | irrelevant | 0 | 0 | The study evaluates mucociliary clearance in humans under anesthesia and does not report any kinetic parameters for argininosuccinic acid. |
| popPK | Pacławski_2022 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for acetylsalicylic acid (ASA) and its metabolite salicylic acid, not argininosuccinic acid. |
| popPK | Petro_2015 | irrelevant | 0 | 0 | The paper is a clinical report on hernia mesh mechanical failure and contains no data on argininosuccinic acid. |
| popPK | Porta_2019 | irrelevant | 2 | 0 | The paper reports clinical outcomes and relative percentage reductions in metabolite levels following liver transplant but does not provide explicit quantitative kinetic parameters (e.g., clearance, rate constants, or half-lives) for argininosuccinic acid. |
| popPK | Reverter_2019 | irrelevant | 0 | 0 | The paper focuses on the prognostic value of hepatic venous pressure gradient in cirrhotic patients undergoing surgery and does not contain any toxicokinetic data for argininosuccinic acid. |
| popPK | Rolle_2018 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for dexmedetomidine, not argininosuccinic acid. |
| popPK | Rychen_2023 | irrelevant | 0 | 0 | The paper is a clinical study on antithrombotic management in neurosurgery and contains no data, parameters, or even mentions of argininosuccinic acid. |
| popPK | Saheki_1990 | irrelevant | 0 | 0 | The paper reports kinetic parameters for the enzyme argininosuccinate synthetase, not for the substrate argininosuccinic acid. |
| popPK | Sass_1999 | irrelevant | 0 | 0 | The paper reports kinetic parameters (clearance, concentration) for orotic acid, not for argininosuccinic acid, which is mentioned only as the enzyme deficiency condition. |
| popPK | Satoh_2008 | irrelevant | 0 | 0 | The paper reports kinetic parameters for LPS and lipid A, while argininosuccinate synthase is the enzyme responsible for the clearance, not the subject substance argininosuccinic acid. |
| PGx | Scaglia_2004 | not_relevant | 0 | 0 | The paper discusses urea cycle disorders as genetic diseases, not the pharmacokinetics or pharmacodynamics of argininosuccinic acid as a drug. |
| popPK | Seo_2014 | irrelevant | 0 | 0 | The paper investigates bronchial mucus transport velocity and does not report any toxicokinetic parameters for argininosuccinic acid. |
| popPK | Slaven_1998 | irrelevant | 0 | 0 | The paper studies the renal effects of tenoxicam and does not contain any toxicokinetic parameters for argininosuccinic_acid. |
| popPK | Smith_2013 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of phenylbutyrate formulations for treating urea cycle disorders and does not report quantitative kinetic parameters (half-life, clearance, etc.) for argininosuccinic acid itself. |
| popPK | Soria_2021 | irrelevant | 1 | 0 | The paper reports a therapeutic intervention for argininosuccinate lyase deficiency and describes qualitative/semi-quantitative changes in metabolite levels, but provides no quantitative toxicokinetic parameters (half-life, clearance, Vd, rate constants) for argininosuccinic acid. |
| popPK | Subramanian_2014 | irrelevant | 0 | 0 | The study focuses on the effect of fisetin on hyperammonemia and urea cycle enzyme expression, and does not report toxicokinetic parameters for argininosuccinic acid. |
| popPK | Sultana_2025 | irrelevant | 0 | 0 | The paper describes the morphology and immunohistochemical characteristics of humanized mice, mentioning argininosuccinate synthase 1 (ASS1) only as a marker for metabolic zonation, and contains no quantitative toxicokinetic parameters for argininosuccinic acid. |
| popPK | Tang_2017 | irrelevant | 0 | 0 | The paper studies the drug delivery of 5-aminosalicylic acid (5-ASA) and does not report any kinetic parameters for argininosuccinic acid. |
| popPK | Tang_2024 | irrelevant | 0 | 0 | The paper investigates the delivery of 5-aminosalicylic acid (5-ASA) and does not report any kinetic parameters for argininosuccinic acid. |
| popPK | Tang_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for sugammadex, not argininosuccinic acid. |
| popPK | Tavares_2022 | irrelevant | 0 | 0 | The paper is a review of 5-aminosalicylic acid (5-ASA) and does not report kinetic parameters for argininosuccinic acid. |
| popPK | Thiessen_1983 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of aspirin (acetylsalicylic acid) and does not report any quantitative kinetic parameters for argininosuccinic acid. |
| popPK | Tiainen_2024 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for dexmedetomidine, not argininosuccinic acid. |
| PGx | Trevisson_2007 | not_relevant | 0 | 0 | The paper investigates the genetic etiology of a metabolic disorder (argininosuccinic aciduria) and reports genotype-phenotype correlations for the disease itself, but does not assess the pharmacokinetic or pharmacodynamic effects of gene variants on the parameter 'argininosuccinic acid' as a drug. |
| popPK | Voelker_2012 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for acetylsalicylic acid (aspirin) and salicylic acid, not for argininosuccinic acid. |
| popPK | Wei_2025 | irrelevant | 0 | 0 | The paper discusses argininosuccinate synthase 1 (an enzyme) and arginine levels in the context of colitis treatment, but does not report quantitative toxicokinetic parameters for argininosuccinic acid as a subject substance. |
| popPK | Wong_2023 | irrelevant | 0 | 0 | The paper discusses alcohol septal ablation for cardiac procedures and contains no data regarding argininosuccinic acid. |
| popPK | Xue_2023 | irrelevant | 0 | 0 | The paper describes surgical outcomes for esophageal cancer (RAMIE vs MIE) and contains no mention of argininosuccinic acid or any toxicokinetic parameters. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The paper studies the gene RIP5 (OsAAO2) and its regulation of ascorbic acid (AsA) levels in rice, not the toxicokinetics of argininosuccinic acid. |
| popPK | Zhong_2013 | irrelevant | 0 | 0 | The paper reports on the effect of dietary fat sources on alcohol-induced liver injury in rats, mentioning argininosuccinate synthase 1 (an enzyme) but providing no quantitative toxicokinetic parameters (such as half-life, clearance, or partition coefficients) for the substance argininosuccinic acid itself. |
| popPK | van_2026 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters (half-life, clearance) for lamotrigine, not for argininosuccinic acid, which is only mentioned as the underlying metabolic deficiency in the patient. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bargininosuccinic_acid%5D&body=Drug%3A%20argininosuccinic_acid%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_argininosuccinic_acid/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
