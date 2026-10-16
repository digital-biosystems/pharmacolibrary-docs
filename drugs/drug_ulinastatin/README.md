<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02A&quot;,&quot;href&quot;:&quot;atc/B02A.md&quot;},{&quot;label&quot;:&quot;ulinastatin&quot;}]"></div>

# ulinastatin

- **generic name:** ulinastatin
- **ATC codes:** `B02AB05`
- **DrugBank:** [DB12038](https://go.drugbank.com/drugs/DB12038) · **PubChem:** not captured
- **groups:** investigational

## About

Ulinastatin, a protease inhibitor classified as an antifibrinolytic, has been investigated for conditions such as severe inflammation, including pancreatitis and sepsis. It is considered investigational and is not an approved medicine in the European Union.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 17:20 | 3:19 | 0/0/0 | 0/0/0 | 0/0/4 | 98,484/4,268 | ollama / qwen3.8:27b-mtp-q8_0 | 48 | 11/31 | 39/9 | 0 |

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | **MMP-2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Ling_2019](drugs/drug_ulinastatin/pgx_Ling_2019_MMP_2_Q100.md) | Ling L et al., MMP-2 and MMP-9 gene polymorphisms act…, Medicine (2019) | [10.1097/MD.0000000000015831](https://doi.org/10.1097/MD.0000000000015831) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | **MMP-9** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Ling_2019](drugs/drug_ulinastatin/pgx_Ling_2019_MMP_9_Q100.md) | Ling L et al., MMP-2 and MMP-9 gene polymorphisms act…, Medicine (2019) | [10.1097/MD.0000000000015831](https://doi.org/10.1097/MD.0000000000015831) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | **MMP-2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Zhen_2017](drugs/drug_ulinastatin/pgx_Zhen_2017_MMP_2_Q100.md) | Zhen GD et al., Associations of MMP-2 and MMP-9 gene po…, Bioscience reports (2017) | [10.1042/BSR20160612](https://doi.org/10.1042/BSR20160612) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | **MMP-9** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Zhen_2017](drugs/drug_ulinastatin/pgx_Zhen_2017_MMP_9_Q100.md) | Zhen GD et al., Associations of MMP-2 and MMP-9 gene po…, Bioscience reports (2017) | [10.1042/BSR20160612](https://doi.org/10.1042/BSR20160612) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ulinastatin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: MMP-2 (target), MMP-9 (target), PRSS1 (modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 35 matched, 35 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aarbakke_1983 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of trimethoprim-sulphadiazine, not ulinastatin. |
| PD | Ariyama_2000 | not_relevant | 0 | 0 | The paper investigates propofol and other agents for paraquat toxicity; ulinastatin is only mentioned as a non-protective control in a single-dose in vitro experiment without any dose-response analysis or PD parameters. |
| popPK | Baron_2016 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for empagliflozin, not ulinastatin. |
| popPK | Biju_2024 | irrelevant | 0 | 0 | The paper is a cross-sectional study on gestational diabetes outcomes and does not involve ulinastatin or pharmacokinetic analysis. |
| popPK | Bégué_1983 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cefoperazone, not ulinastatin. |
| popPK | Cavallero_2022 | irrelevant | 0 | 0 | The paper is a glycoproteomic analysis of the UTI-Fc fusion protein structure and does not report any quantitative pharmacokinetic parameters (CL, V, t1/2) for ulinastatin. |
| PD | Cavallero_2022 | not_relevant | 0 | 0 | The paper is a mass spectrometry method development study for glycoproteomic analysis of a fusion protein and does not report any pharmacodynamic or exposure-response data. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the anti-inflammatory effects of ulinastatin on postoperative markers (CRP, WBC, etc.) and does not report any pharmacokinetic parameters (CL, V, t1/2, etc.). |
| popPK | Choudhary_2022 | irrelevant | 0 | 0 | The paper is a clinical observational study on urinary tract infection antibiotic resistance and does not involve ulinastatin or pharmacokinetic modeling. |
| popPK | Friman_1989 | irrelevant | 0 | 0 | The study evaluates aztreonam and cefuroxime, not ulinastatin. |
| popPK | Gilbert_2021 | irrelevant | 0 | 0 | The paper is a study on Aerococcus urinae urinary tract infection in mice and does not involve the drug ulinastatin or report any pharmacokinetic parameters. |
| popPK | Gridley_2019 | irrelevant | 0 | 0 | The paper is a clinical study on uric acid nephrolithiasis treatment and does not involve ulinastatin or pharmacokinetic parameters. |
| popPK | Hang_2021 | irrelevant | 0 | 0 | The study evaluates renal perfusion using contrast-enhanced ultrasound (CEUS) parameters (e.g., peak intensity, AUC of the time-intensity curve) rather than pharmacokinetic disposition parameters (CL, V, ka) for ulinastatin. |
| popPK | Haniuda_1988 | irrelevant | 0 | 0 | The study investigates the effect of ulinastatin on plasma fibronectin levels after cardiac surgery and does not report any pharmacokinetic parameters (CL, V, t1/2) for ulinastatin. |
| popPK | Hara_2026 | irrelevant | 0 | 0 | The paper focuses on KDM5B inhibitors (JB-157/JB-161) and only mentions ulinastatin as a reagent in tissue processing, providing no pharmacokinetic data for ulinastatin. |
| PD | Hara_2026 | not_relevant | 0 | 0 | The paper studies KDM5B inhibitors (JB-157/JB-161) and does not mention ulinastatin or report any pharmacodynamic parameters for it. |
| PD | Hoogerwerf_2005 | not_relevant | 1 | 0 | The text is a review that qualitatively mentions ulinastatin and states that dose-response studies are needed, but it does not report any numeric PD parameters or concentration-effect data. |
| popPK | Horiguchi_1992 | irrelevant | 0 | 0 | The study reports renal function markers (BUN, Cr, Ccr) to assess nephrotoxicity, not the pharmacokinetic disposition parameters (CL, V, t1/2) of ulinastatin itself. |
| popPK | Hua_2026 | irrelevant | 0 | 0 | The paper is a retrospective safety study developing a risk prediction model for adverse events, not a pharmacokinetic study, and does not report quantitative PK parameters like clearance or volume. |
| popPK | Inoue_1988 | irrelevant | 0 | 0 | The study evaluates the effect of ulinastatin on reticuloendothelial system activity (carbon clearance, fibronectin) in rabbits, not the pharmacokinetic disposition parameters (CL, V, t1/2) of ulinastatin itself. |
| popPK | Jiang_2022 | irrelevant | 0 | 0 | The study is a mechanistic investigation of ulinastatin's effects on lung permeability and alveolar fluid clearance in rats, reporting no pharmacokinetic parameters (CL, V, t1/2, etc.). |
| popPK | Jortani_2004 | irrelevant | 0 | 0 | The paper is a diagnostic study evaluating urinary trypsin inhibitor (uTi) as a biomarker for infection, not a pharmacokinetic study of ulinastatin. |
| popPK | Kawamura_1992 | irrelevant | 2 | 0 | The study focuses on the pharmacodynamic effect of ulinastatin on enzyme levels during surgery and mentions half-life qualitatively but does not report quantitative PK parameters like clearance or volume. |
| popPK | Kim_2021 | irrelevant | 0 | 0 | The paper is a review on the pathophysiology of recurrent urinary tract infections and does not mention ulinastatin or report any pharmacokinetic parameters. |
| popPK | Kuiper_2020 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for fosfomycin, not ulinastatin. |
| popPK | La_2024 | irrelevant | 0 | 0 | The paper is a microbiological study on urinary catheters and does not involve ulinastatin or pharmacokinetics. |
| popPK | Lepedda_2013 | irrelevant | 0 | 0 | The paper focuses on the quantitation of urinary trypsin inhibitor (UTI/bikunin) in diabetes patients and does not report pharmacokinetic parameters for ulinastatin. |
| PGx | Li_2026 | not_relevant | 0 | 0 | The text is a retraction notice citing data irregularities and does not contain the original study results or quantitative pharmacogenomic data. |
| PD | Liu_2014_2 | not_relevant | 2 | 1 | The paper reports a qualitative effect of ulinastatin on receptor expression and a shift in vecuronium's ED50, but does not provide numeric PD parameters or an extractable concentration-effect curve for ulinastatin. |
| popPK | Liu_2024 | irrelevant | 0 | 0 | The paper is a clinical risk prediction study for aortic dissection where ulinastatin is only a comparator for therapeutic outcomes, not a pharmacokinetic subject. |
| popPK | Maurizi_2025 | irrelevant | 0 | 0 | The paper is a microbiological study on Uropathogenic E. coli virulence and persistence, containing no pharmacokinetic data for ulinastatin. |
| popPK | Mijbel_2021 | irrelevant | 0 | 0 | The paper describes a phage therapy study for urinary tract infections in mice and does not involve ulinastatin or report any pharmacokinetic parameters. |
| popPK | Morimoto_1992 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effect of ulinastatin on brain edema in cats and does not report any pharmacokinetic parameters (CL, V, t1/2, etc.). |
| popPK | Motohiro_1985 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of aztreonam, not ulinastatin. |
| popPK | Naber_1986 | irrelevant | 0 | 0 | The study focuses on aztreonam and cefotaxime, not ulinastatin. |
| popPK | Nakakuki_1996 | irrelevant | 0 | 0 | The study investigates the protective effect of ulinastatin on renal failure and reports renal function markers (creatinine clearance), but does not report pharmacokinetic parameters (CL, V, t1/2) for ulinastatin itself. |
| popPK | Noie_2001 | irrelevant | 0 | 0 | The study investigates the kinetics of endogenous urinary trypsin inhibitor (UTI) synthesis and excretion after liver surgery, not the pharmacokinetic parameters (CL, V, etc.) of the administered drug ulinastatin. |
| popPK | Ohnishi_1985 | irrelevant | 0 | 0 | The study investigates the immunological and physiological effects of MTI (urinary trypsin inhibitor) on surgical stress in mice, not the pharmacokinetic parameters (CL, V, t1/2) of ulinastatin. |
| popPK | Ohzawa_1997 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding ulinastatin pharmacokinetics. |
| popPK | Oshima_1990 | irrelevant | 0 | 0 | The study reports clinical outcomes (renal function, lactate levels) rather than pharmacokinetic parameters (CL, V, t1/2) for ulinastatin. |
| popPK | Patil_2022 | irrelevant | 0 | 0 | The paper is a urological study on kidney stone fragmentation and does not involve the drug ulinastatin or pharmacokinetic parameters. |
| popPK | Patras_2019 | irrelevant | 0 | 0 | The paper studies lactoferrin in a UTI model and does not involve ulinastatin or report any pharmacokinetic parameters. |
| popPK | Ranasinghe_2025 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of biomarkers for diabetic cardiomyopathy, and while it mentions ulinastatin in the context of a cited study, it does not report any quantitative pharmacokinetic parameters for ulinastatin. |
| PD | Ranasinghe_2025 | not_relevant | 0 | 0 | The paper is a systematic review and meta-analysis of biomarkers in diabetic cardiomyopathy and does not report any pharmacodynamic or exposure-response data for ulinastatin. |
| popPK | Rizk_2023 | irrelevant | 0 | 0 | The study is a mechanistic investigation of ulinastatin's therapeutic effects on diabetic nephropathy in rats, reporting biochemical and histological outcomes rather than pharmacokinetic parameters. |
| popPK | Rodriguez-Alvarez_2022 | irrelevant | 0 | 0 | The paper describes a photothermal nanocomposite for treating urinary tract infections and does not involve ulinastatin or pharmacokinetic parameters. |
| popPK | Rosen_2024 | irrelevant | 0 | 0 | The paper studies the host protein SLPI in urinary tract infections and does not report pharmacokinetic parameters for the drug ulinastatin. |
| popPK | Rudick_2012 | irrelevant | 0 | 0 | The paper is a study on E. coli O-antigen and pain mechanisms in mice, and does not involve the drug ulinastatin or any pharmacokinetic parameters. |
| popPK | Russell_2023 | irrelevant | 0 | 0 | The paper is a study on urothelial trained immunity and epigenetics in urinary tract infections, containing no pharmacokinetic data or parameters for ulinastatin. |
| popPK | Saitoh_1999 | irrelevant | 1 | 0 | The study investigates the interaction between ulinastatin and vecuronium on neuromuscular block, not the pharmacokinetics of ulinastatin itself; the only PK value mentioned (half-life) is a cited reference, not a result of this study. |
| popPK | Sakakibara_1989 | irrelevant | 0 | 0 | The study focuses on urokinase, t-PA, and urinary trypsin inhibitor, not ulinastatin. |
| popPK | Sakashita_1986 | irrelevant | 0 | 0 | The paper studies cefoxitin and amikacin, not ulinastatin, and reports clinical efficacy rather than pharmacokinetic parameters. |
| popPK | Setiawan_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for ceftriaxone, not ulinastatin. |
| popPK | Shan_2021 | irrelevant | 0 | 0 | The study is a clinical trial evaluating biomarkers (sICAM-1, sRAGE) for diagnosis and prognosis in acute pancreatitis, and does not report any pharmacokinetic parameters for ulinastatin. |
| PD | Shibata_1997 | not_relevant | 0 | 0 | The paper investigates nafamostat, gabexate, and NCO-700; ulinastatin was tested but showed no effect, and no numeric PD parameters (Emax, EC50, etc.) are reported for it. |
| popPK | Shrout_2008 | irrelevant | 0 | 0 | The paper is a study on gene expression biomarkers for colorectal cancer and does not involve the drug ulinastatin or pharmacokinetic parameters. |
| popPK | Singley_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and pharmacodynamics of gepotidacin, not ulinastatin. |
| popPK | Skowron_2017 | irrelevant | 0 | 0 | The study is an animal model of acute kidney injury caused by E. coli and does not involve ulinastatin or report any pharmacokinetic parameters. |
| popPK | Smith_2019 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for ertapenem, not ulinastatin. |
| popPK | Song_2013 | irrelevant | 1 | 0 | The study is a clinical trial evaluating organ function and inflammatory markers, not a pharmacokinetic study, and the only PK mention is a cited half-life value without underlying data. |
| popPK | Srirangam_2008 | irrelevant | 0 | 0 | The paper is a clinical study on percutaneous nephrolithotomy (PCNL) outcomes and contains no pharmacokinetic data for ulinastatin. |
| PD | Su_2019 | not_relevant | 0 | 0 | The paper focuses on fucoxanthin; ulinastatin is only mentioned as a positive control group in the animal study without any reported dose-response data, concentration-effect analysis, or PD parameters for ulinastatin. |
| popPK | Sugiki_1989 | irrelevant | 2 | 1 | The study investigates urinary trypsin inhibitor (UTI) in mice, which is a different protein from ulinastatin, and does not report quantitative PK parameters for ulinastatin. |
| popPK | Tien_2017 | irrelevant | 0 | 0 | The paper is a microbiology study on Enterococcus faecalis and immune modulation, containing no pharmacokinetic data for ulinastatin. |
| popPK | Ueki_1995 | irrelevant | 0 | 0 | The paper is a clinical case report on the therapeutic effect of ulinastatin on renal function and does not report any pharmacokinetic parameters. |
| popPK | Ueki_1995_2 | irrelevant | 0 | 0 | The paper is a clinical case report describing therapeutic efficacy on renal function, not a pharmacokinetic study reporting quantitative disposition parameters. |
| popPK | Wagenlehner_2020 | irrelevant | 0 | 0 | The paper is a review of urinary tract infections and does not contain any pharmacokinetic data or parameters for ulinastatin. |
| popPK | Weaver_2020 | irrelevant | 0 | 0 | The paper discusses cefiderocol, not ulinastatin, and contains no pharmacokinetic data for the target drug. |
| popPK | Wu_2014 | irrelevant | 0 | 0 | The paper is a review of tigecycline for urinary tract infections and does not study ulinastatin or report any pharmacokinetic parameters for it. |
| popPK | Wu_2026 | irrelevant | 0 | 0 | The study is a clinical trial evaluating inflammatory and clinical outcomes of ulinastatin in septic shock, not a pharmacokinetic study, and reports no PK parameters (CL, V, t1/2) for ulinastatin. |
| PD | Xiao_2026 | not_relevant | 3 | 2 | The paper is a meta-analysis that identifies a qualitative dose-response trend (optimal dose ~400,000 units) but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect curve. |
| popPK | Yamasaki_1996 | irrelevant | 0 | 0 | The provided evidence contains only library metadata and software extraction logs, with no scientific content or pharmacokinetic data for ulinastatin. |
| popPK | You_2014 | irrelevant | 0 | 0 | The paper is a genetic association study regarding Hepatitis C virus (HCV) clearance and does not involve the drug ulinastatin or any pharmacokinetic parameters. |
| popPK | Zhanel_2022 | irrelevant | 0 | 0 | The paper is a review of sulopenem, a different drug, and does not contain pharmacokinetic data for ulinastatin. |
| popPK | Zhang_2021 | irrelevant | 0 | 0 | The study is a clinical efficacy trial evaluating treatment outcomes and inflammatory markers, not a pharmacokinetic study, and reports no PK parameters. |
| popPK | Zhao_2015 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the therapeutic efficacy of ulinastatin in Kawasaki disease and does not report any pharmacokinetic parameters. |
| PGx | Zhen_2025 | not_relevant | 0 | 0 | The text is an Expression of Concern regarding data integrity issues and does not contain the study results or pharmacogenomic effect data. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
