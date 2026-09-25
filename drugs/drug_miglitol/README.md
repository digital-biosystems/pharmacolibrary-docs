<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;miglitol&quot;}]"></div>

# miglitol

- **generic name:** miglitol
- **ATC codes:** `A10BF02`
- **DrugBank:** [DB00491](https://go.drugbank.com/drugs/DB00491)
- **groups:** approved

## About

**Description.** Miglitol inhibits the breakdown complex carbohydrates into glucose. It is primarily used in diabetes mellitus type 2 for establishing greater glycemic control by preventing the digestion of carbohydrates (such as disaccharides, oligosaccharides, and polysaccharides) into monosaccharides which can be absorbed by the body.

Miglitol should be taken at the start of a meal for maximal effect and the effect will depend on the amount of poly and oligosaccharides in the diet. Miglitol inhibits alpha-glucosidase, making less sugars available for digestion and reducing postprandial hyperglycemia.

Unlike other drugs of the same class, miglitol is not metabolized and the unmetabolized drug is excreted by the kidneys.

**Indication.** For use as an adjunct to diet to improve glycemic control in patients with non-insulin-dependent diabetes mellitus (NIDDM) whose hyperglycemia cannot be managed with diet alone.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 18:24 | 5:54 | 0/0/0 | 0/0/0 | 0/0/0 | 162,400/5,901 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 0/5 | 4/1 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=miglitol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>“…n man or in any animal species studied. It is eliminated by renal excretion as an unchange…”</sub> | prose |

<sub>Actors without a tissue in the table: AMY2A (inhibitor), GAA (target), GANAB (target), GANC (target), MGAM (inhibitor), MGAM (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 57 matched, 45 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mizuno-Yasuhira_2014.pdf` | Mizuno-Yasuhira A et al., A Strategy for assessing potential drug…, Drug metabolism and disposi… (2014) | pd | 5 | [10.1124/dmd.114.058305](https://doi.org/10.1124/dmd.114.058305) | [25005603](https://www.ncbi.nlm.nih.gov/pubmed/25005603) | metadata signals extractable PD data (IC50) |
| `Khalid_2022.pdf` | Khalid MF et al., Biochemical Investigation of Inhibitory…, Dose-response : a publicati… (2022) | pd | 4 | [10.1177/15593258221093275](https://doi.org/10.1177/15593258221093275) | [35574252](https://www.ncbi.nlm.nih.gov/pubmed/35574252) | metadata signals extractable PD data (IC50) |
| `Mezoughi_2021.pdf` | Mezoughi AB et al., The Lysozyme Inhibitor Thionine Acetate…, Molecules (Basel, Switzerla… (2021) | pd | 4 | [10.3390/molecules26144189](https://doi.org/10.3390/molecules26144189) | [34299465](https://www.ncbi.nlm.nih.gov/pubmed/34299465) | metadata signals extractable PD data (IC50) |
| `Padhy_2026.pdf` | Padhy I et al., Evaluation of novel topiramate-phenolic…, Journal of computer-aided m… (2026) | pd | 4 | [10.1007/s10822-026-00789-3](https://doi.org/10.1007/s10822-026-00789-3) | [41845153](https://www.ncbi.nlm.nih.gov/pubmed/41845153) | metadata signals extractable PD data (IC50) |
| `Qiao_2022.pdf` | Qiao Y et al., Inhibition of α-amylase and α-glucosida…, Journal of food science (2022) | pd | 4 | [10.1111/1750-3841.16098](https://doi.org/10.1111/1750-3841.16098) | [35397147](https://www.ncbi.nlm.nih.gov/pubmed/35397147) | metadata signals extractable PD data (IC50) |
| `Sarkar_2024.pdf` | Sarkar A et al., Parkia javanica Edible Pods Reveal Pote…, Pharmaceuticals (Basel, Swi… (2024) | pd | 4 | [10.3390/ph17070968](https://doi.org/10.3390/ph17070968) | [39065816](https://www.ncbi.nlm.nih.gov/pubmed/39065816) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-18T18:22:27.015671+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ali_2017 | irrelevant | 0 | 0 | The paper is an in-vitro medicinal chemistry study on new alpha-glucosidase inhibitors where miglitol is only mentioned as a clinical comparator, with no pharmacokinetic data reported. |
| PD | Ali_2017 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for new synthetic compounds and mentions miglitol only as a clinical context, providing no exposure-response or dose-response data for miglitol itself. |
| popPK | Ayan_2026 | irrelevant | 0 | 0 | The paper is an in-vitro medicinal chemistry study on new α-glucosidase inhibitors, and miglitol is only mentioned as a comparator drug with no pharmacokinetic parameters reported. |
| PD | Ayan_2026 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) for novel compounds, not a pharmacodynamic or exposure-response relationship for miglitol in vivo. |
| popPK | Bukhari_2021 | irrelevant | 0 | 0 | The study is an in-vitro enzyme inhibition and molecular docking study where miglitol is used only as a standard comparator, not a subject of pharmacokinetic analysis. |
| PD | Bukhari_2021 | not_relevant | 1 | 1 | The paper reports a single IC50 value for miglitol as a reference standard in an in vitro enzyme assay, which does not constitute a pharmacodynamic exposure-response or dose-response relationship analysis for the drug. |
| popPK | Chavan_2017 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study focusing on the synthesis and in-vitro biological activity (glycosidase inhibition) of new iminosugars, with miglitol serving only as a comparator for potency, and it contains no pharmacokinetic data. |
| PD | Chavan_2017 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for new compounds and compares them to miglitol, but does not report a pharmacokinetic or pharmacodynamic model, exposure-response relationship, or dose-response curve for miglitol itself. |
| popPK | Dinu_2025 | irrelevant | 0 | 0 | The paper is a review of sulfonamides and antioxidants for diabetes management and does not contain pharmacokinetic data for miglitol. |
| PD | Dinu_2025 | not_relevant | 0 | 0 | The paper is a review of sulfonamides and antioxidants for diabetes and does not mention miglitol or report any pharmacodynamic parameters. |
| popPK | Dirir_2022 | irrelevant | 0 | 0 | The paper is a review of plant-derived alpha-glucosidase inhibitors and does not report pharmacokinetic parameters for miglitol, which is only mentioned as a comparator drug. |
| PD | Dirir_2022 | not_relevant | 1 | 0 | The paper is a review of plant-derived alpha-glucosidase inhibitors and only mentions miglitol as an approved drug in the introduction and provides its chemical structure; it does not report any pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for miglitol. |
| popPK | Gao_2023 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel α-glucosidase inhibitors where miglitol is used only as a standard comparator for in-vitro enzyme inhibition, with no pharmacokinetic data reported. |
| PD | Gao_2023 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) for new compounds and compares them to miglitol, but does not provide a pharmacokinetic/pharmacodynamic (PK/PD) or exposure-response analysis for miglitol itself. |
| popPK | Gharge_2025 | irrelevant | 0 | 0 | The study focuses on novel rhodanine-thiazole hybrids and does not report pharmacokinetic parameters for miglitol. |
| PD | Gharge_2025 | not_relevant | 0 | 0 | The paper studies novel rhodanine-thiazole hybrids, not miglitol, and reports in vitro enzyme inhibition (IC50) rather than a pharmacodynamic exposure-response relationship for the target drug. |
| popPK | Gopal_2017 | irrelevant | 0 | 0 | The study focuses on lactucaxanthin as the subject drug, with miglitol serving only as a comparator in in silico binding energy analysis, and no pharmacokinetic parameters are reported. |
| PD | Gopal_2017 | not_relevant | 0 | 0 | The paper studies lactucaxanthin, not miglitol; miglitol is only mentioned as a reference compound in in silico binding energy comparisons, with no PD or exposure-response data reported for it. |
| popPK | Hatano_2017 | irrelevant | 0 | 0 | The paper is a mechanistic/in-vitro study on enzyme inhibition and synthesis, not a pharmacokinetic study, and miglitol is only used as a comparator. |
| PD | Hatano_2017 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) for novel DNJ derivatives, not in vivo pharmacodynamic or exposure-response relationships for miglitol. |
| popPK | Johnson_2024 | irrelevant | 0 | 0 | The study investigates migalastat, not miglitol, which is the target drug for this extraction task. |
| PD | Johnson_2024 | not_relevant | 2 | 1 | The paper focuses on PK and PBPK modeling to select dose regimens based on time above EC50, but does not report a PD model or provide the numeric value for the EC50 or other PD parameters. |
| popPK | Kasahara_2016 | irrelevant | 1 | 0 | Miglitol is a co-administered comparator drug in a study focused on tofogliflozin, and no quantitative PK parameters for miglitol are reported in the evidence. |
| PD | Kasahara_2016 | not_relevant | 0 | 0 | The study is a drug-drug interaction trial focusing on the PK/PD of tofogliflozin; it reports no concentration-effect or dose-response analysis for miglitol, only stating that miglitol did not affect tofogliflozin's PD. |
| popPK | Kaur_2021 | irrelevant | 0 | 0 | The paper is a review of alpha-amylase inhibitors and does not report any pharmacokinetic parameters for miglitol. |
| PD | Kaur_2021 | not_relevant | 1 | 0 | The paper is a comprehensive review of alpha-amylase inhibitors and does not report specific pharmacokinetic or pharmacodynamic modeling or numeric exposure-response parameters for miglitol. |
| popPK | Kesavanarayanan_2012 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of herbal extracts where miglitol is used only as a positive control for alpha-glucosidase inhibition, with no pharmacokinetic parameters reported. |
| PD | Kesavanarayanan_2012 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for herbal extracts and uses miglitol only as a positive control; it does not report a pharmacodynamic or exposure-response relationship for miglitol itself. |
| popPK | Khalid_2022 | irrelevant | 0 | 0 | no_text gate: only 157 chars of text extracted (&lt; 400) |
| PD | Khalid_2022 | not_relevant | 0 | 0 | The paper investigates plant-derived compounds against enzymes and does not report pharmacodynamic or exposure-response data for miglitol. |
| popPK | Khalid_2022_2 | irrelevant | 0 | 0 | The paper is an in-vitro study of new alpha-glucosidase inhibitors where miglitol is only mentioned as a comparator, with no pharmacokinetic parameters reported. |
| PD | Khalid_2022_2 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for newly synthesized compounds, not a pharmacodynamic or exposure-response analysis for miglitol. |
| popPK | Khalid_2023 | irrelevant | 0 | 0 | The study focuses on in vitro alpha-glucosidase inhibition and computational chemistry of novel compounds, with miglitol mentioned only as a commercial comparator and no pharmacokinetic parameters reported. |
| PD | Khalid_2023 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for novel benzotriazinone carboxamides, not for miglitol, and does not provide any pharmacodynamic or exposure-response data for miglitol. |
| popPK | Lo_2018 | irrelevant | 0 | 0 | This is a systematic review of clinical efficacy and safety outcomes for diabetes medications in CKD, not a pharmacokinetic study, and it does not report any PK parameters for miglitol. |
| PD | Lo_2018 | not_relevant | 0 | 0 | The paper is a systematic review of clinical trials in CKD and does not report any pharmacokinetic or pharmacodynamic modeling, nor does it provide numeric PD parameters for miglitol. |
| popPK | Mauldina_2017 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological assay of plant extracts where miglitol is used only as a reference standard, not a pharmacokinetic study. |
| PD | Mauldina_2017 | not_relevant | 3 | 3 | The paper reports an in vitro IC50 for miglitol as a standard reference, but does not report a pharmacokinetic or pharmacodynamic model, exposure-response relationship, or dose-response curve for miglitol in a biological system. |
| popPK | Mezoughi_2021 | irrelevant | 0 | 0 | no_text gate: only 126 chars of text extracted (&lt; 400) |
| PD | Mezoughi_2021 | not_relevant | 0 | 0 | The paper discusses the inhibition of bacterial enzymes (Lysozyme and Slt35) by Thionine Acetate, not the pharmacodynamics of the drug miglitol. |
| popPK | Mhaldar_2022 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on new compounds where miglitol is used only as a comparator for enzyme inhibition and docking, with no original pharmacokinetic parameters reported. |
| PD | Mhaldar_2022 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for novel synthesized compounds and compares them to miglitol, but does not report a pharmacodynamic or exposure-response relationship for miglitol itself. |
| popPK | Mizuno-Yasuhira_2014 | irrelevant | 0 | 0 | no_text gate: only 144 chars of text extracted (&lt; 400) |
| PD | Mizuno-Yasuhira_2014 | not_relevant | 0 | 0 | The paper discusses a general strategy for assessing drug-drug interactions involving intestinal transporters and does not report specific pharmacodynamic or exposure-response data for miglitol. |
| popPK | Mohd_2024 | irrelevant | 0 | 0 | The paper is an in-vitro study of new compounds with miglitol mentioned only as a mechanistic comparator, containing no pharmacokinetic parameters. |
| PD | Mohd_2024 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition data (IC50) for new synthetic compounds and mentions miglitol only as a qualitative reference for mechanism of action, without providing any PK/PD or exposure-response data for miglitol. |
| popPK | Muddather_2026 | irrelevant | 0 | 0 | The paper is a review of DPP-4 inhibitors in cancer and does not report pharmacokinetic parameters for miglitol. |
| PD | Muddather_2026 | not_relevant | 0 | 0 | The paper is a review of DPP-4 inhibitors in cancer and does not contain any pharmacokinetic or pharmacodynamic data, models, or numeric parameters for miglitol. |
| popPK | Padhy_2026 | irrelevant | 0 | 0 | no_text gate: only 130 chars of text extracted (&lt; 400) |
| PD | Padhy_2026 | not_relevant | 0 | 0 | The paper focuses on topiramate-phenolic acid conjugates as amylase inhibitors and does not report pharmacodynamic or exposure-response data for miglitol. |
| popPK | Percha_2015 | irrelevant | 0 | 0 | The paper is a bioinformatics study on text mining algorithms for drug-gene relationships and does not contain any pharmacokinetic data or parameters for miglitol. |
| PD | Percha_2015 | not_relevant | 0 | 0 | The paper describes a text mining algorithm for extracting drug-gene relationships from biomedical literature and contains no pharmacokinetic or pharmacodynamic data for miglitol. |
| popPK | Qiao_2022 | irrelevant | 0 | 0 | no_text gate: only 130 chars of text extracted (&lt; 400) |
| PD | Qiao_2022 | not_relevant | 0 | 0 | The paper investigates the inhibitory effects of Morus australis fruit extract and its components (iminosugar, anthocyanin, glucose) on enzymes, but does not report any pharmacodynamic or exposure-response data for the specific drug miglitol. |
| popPK | Rafique_2020 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on new compounds, and miglitol is only mentioned as a marketed comparator drug with no pharmacokinetic data reported. |
| PD | Rafique_2020 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) for new synthesized compounds, not a pharmacodynamic or exposure-response relationship for the drug miglitol. |
| PGx | Rong_2026 | not_relevant | 0 | 0 | The study uses Mendelian randomization to assess the causal effect of miglitol's target (lactase) on atrial fibrillation risk, not the effect of genetic variants on miglitol's pharmacokinetics or pharmacodynamics. |
| popPK | Salehi_1993 | irrelevant | 0 | 0 | The study is mechanistic/in-vitro focusing on enzyme inhibition and insulin secretion, not pharmacokinetic disposition parameters. |
| popPK | Salehi_1995 | irrelevant | 0 | 0 | The study focuses on the mechanism of action of acarbose and mentions miglitol only as a comparator in in-vitro enzyme/secretion assays, without reporting any pharmacokinetic parameters. |
| popPK | Sarkar_2024 | irrelevant | 0 | 0 | no_text gate: only 173 chars of text extracted (&lt; 400) |
| PD | Sarkar_2024 | not_relevant | 0 | 0 | The paper focuses on Parkia javanica and does not report any pharmacodynamic or exposure-response data for miglitol. |
| popPK | Seraj_2024 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on new antidiabetic compounds where miglitol is only mentioned as a comparator drug with no pharmacokinetic data reported. |
| PD | Seraj_2024 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) for new synthetic compounds, not a pharmacodynamic or exposure-response relationship for miglitol. |
| popPK | Shahzadi_2026 | irrelevant | 0 | 0 | The study investigates the antidiabetic effects of Fraxinus xanthoxyloides bark extract and does not report pharmacokinetic parameters for miglitol, which is only mentioned as a class example in the introduction. |
| PD | Shahzadi_2026 | not_relevant | 0 | 0 | The paper studies a plant extract (Fraxinus xanthoxyloides), not the drug miglitol, and does not report any pharmacodynamic parameters for miglitol. |
| popPK | Su_2025 | irrelevant | 0 | 0 | The paper is a genetic association and drug repurposing study for Alzheimer's disease where miglitol is used only as a comparator agent, with no pharmacokinetic parameters reported. |
| popPK | Su_2026 | irrelevant | 0 | 0 | The paper is a genetic association and drug repurposing study for Alzheimer's disease where miglitol is only mentioned as a comparator drug in a clinical cohort, with no pharmacokinetic parameters reported. |
| popPK | Venditti_2015 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of a plant extract, and miglitol is only mentioned as a comparator for mechanism of action, with no PK parameters reported. |
| PD | Venditti_2015 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) for a plant extract, not a pharmacodynamic or exposure-response relationship for the drug miglitol. |
| popPK | Xu_2020 | irrelevant | 1 | 0 | The paper is a validation study for an insulin assay that only mentions the application of the assay in a miglitol bioequivalence study without reporting any quantitative pharmacokinetic parameters for miglitol. |
| PD | Xu_2020 | not_relevant | 1 | 0 | The paper focuses on the validation of an insulin assay and mentions a bioequivalence study of miglitol but does not provide any numeric pharmacodynamic parameters or exposure-response data. |
| popPK | Yan_2021 | irrelevant | 1 | 0 | The study reports pharmacodynamic parameters (glucose Cmax/AUC) for bioequivalence, not pharmacokinetic disposition parameters (CL, V, ka) for miglitol. |
| PD | Yan_2021 | not_relevant | 2 | 1 | The study reports bioequivalence metrics (Cmax, AUC) for serum glucose but does not provide a concentration-effect or dose-response model with numeric PD parameters like Emax or EC50. |
| popPK | Zamoner_2019 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study reporting enzyme inhibition (IC50) values, not pharmacokinetic disposition parameters. |
| PD | Zamoner_2019 | not_relevant | 3 | 5 | The paper reports in vitro IC50 values for enzyme inhibition, which are pharmacodynamic parameters, but it is a medicinal chemistry study focusing on structure-activity relationships rather than a pharmacokinetic/pharmacodynamic modeling study or exposure-response analysis in a biological system. |
| popPK | Zhang_2017 | irrelevant | 0 | 0 | The paper is an in-vitro enzyme inhibition study where miglitol is used only as a reference compound, with no pharmacokinetic parameters reported. |
| PD | Zhang_2017 | not_relevant | 1 | 1 | The paper reports in vitro IC50 values for novel compounds and uses miglitol only as a single-point reference control, without providing an exposure-response curve or PD model for miglitol. |
| popPK | Zhao_2023 | irrelevant | 2 | 0 | The paper is a bioequivalence study that reports only relative PK parameters (AUC, Cmax) and does not provide absolute quantitative disposition parameters (CL, V, ka) for miglitol. |
| PD | Zhao_2023 | not_relevant | 2 | 1 | The paper reports bioequivalence based on PD endpoints (glucose/insulin) but does not provide a concentration-effect model or numeric PD parameters (e.g., Emax, EC50) in the abstract. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
