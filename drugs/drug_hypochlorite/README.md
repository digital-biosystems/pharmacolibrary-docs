<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D08A&quot;,&quot;href&quot;:&quot;atc/D08A.md&quot;},{&quot;label&quot;:&quot;Hypochlorite&quot;}]"></div>

# Hypochlorite

- **generic name:** Hypochlorite
- **ATC codes:** `D08AX07`
- **DrugBank:** [DB11123](https://go.drugbank.com/drugs/DB11123) · **PubChem:** not captured
- **groups:** approved, investigational

## About

**Description.** Hypochlorite is an ion composed of chlorine and oxygen with the chemical formula ClO−. Being unstable in the pure form, hypochlorite is most commonly used for bleaching, disinfectation, and water treatment purposes in its salt form, sodium hypochlorite. Hypochlorite is often used as a chemical reagent for chlorination and oxidation reactions.

**Indication.** Indicated for over-the-counter use as a disinfectant agent in the sodium hypochlorite form.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-29 21:28 | 40:21 | 0/0/0 | 0/1/0 | 0/0/0 | 242,644/11,995 | ollama / qwen3.8:27b-mtp-q8_0 | 17 | 7/10 | 15/2 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span> | [Gandhi_2024_FVIIa](drugs/drug_hypochlorite/pd_Gandhi_2024_FVIIa.md) | FVIIa concentration ← HMB-001 · indirect response — drug inhibits the production of FVIIa concentration | — | Gandhi PS et al., A bispecific antibody approach for the…, Nature cardiovascular resea… (2024) | [10.1038/s44161-023-00418-4](https://doi.org/10.1038/s44161-023-00418-4) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span> | [Gandhi_2024_total_FVII_a](drugs/drug_hypochlorite/pd_Gandhi_2024_total_FVII_a.md) | total FVII(a) concentration ← HMB-001 · indirect response — drug inhibits the production of total FVII(a) concentration | — | Gandhi PS et al., A bispecific antibody approach for the…, Nature cardiovascular resea… (2024) | [10.1038/s44161-023-00418-4](https://doi.org/10.1038/s44161-023-00418-4) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 147 matched, 105 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_12 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cypriani_1993.pdf` | Cypriani B et al., Antioxidant activity of micronized dios…, Biochemical pharmacology (1993) | pd | 5 | [10.1016/0006-2952(93)90056-3](https://doi.org/10.1016/0006-2952(93)90056-3) | [8385947](https://www.ncbi.nlm.nih.gov/pubmed/8385947) | metadata signals extractable PD data (IC50) |
| `Sathasivam_2016.pdf` | Sathasivam R et al., Physiological and biochemical responses…, Ecotoxicology and environme… (2016) | pd | 5 | [10.1016/j.ecoenv.2016.08.004](https://doi.org/10.1016/j.ecoenv.2016.08.004) | [27552343](https://www.ncbi.nlm.nih.gov/pubmed/27552343) | metadata signals extractable PD data (EC50) |
| `Archana_2016.pdf` | Archana A et al., Nutrient composition and antioxidant ac…, Food chemistry (2016) | pd | 4 | [10.1016/j.foodchem.2015.11.003](https://doi.org/10.1016/j.foodchem.2015.11.003) | [26616993](https://www.ncbi.nlm.nih.gov/pubmed/26616993) | metadata signals extractable PD data (IC50) |
| `Baltas_2016.pdf` | Baltas N et al., Effect of propolis in gastric disorders…, Journal of enzyme inhibitio… (2016) | pd | 4 | [10.1080/14756366.2016.1186023](https://doi.org/10.1080/14756366.2016.1186023) | [27233102](https://www.ncbi.nlm.nih.gov/pubmed/27233102) | metadata signals extractable PD data (IC50) |
| `Kimura_1998.pdf` | Kimura I et al., Effects of BX661A, a new therapeutic ag…, Arzneimittel-Forschung (1998) | pd | 4 | not captured | [9825118](https://www.ncbi.nlm.nih.gov/pubmed/9825118) | metadata signals extractable PD data (IC50) |
| `Lavorgna_2024.pdf` | Lavorgna M et al., Ethylhexyl triazone sunscreen and its d…, The Science of the total en… (2024) | pd | 4 | [10.1016/j.scitotenv.2024.177279](https://doi.org/10.1016/j.scitotenv.2024.177279) | [39481572](https://www.ncbi.nlm.nih.gov/pubmed/39481572) | metadata signals extractable PD data (EC50) |
| `Morita_2016.pdf` | Morita M et al., Inhibition of plasma lipid oxidation in…, Bioorganic & medicinal chem… (2016) | pd | 4 | [10.1016/j.bmcl.2016.10.033](https://doi.org/10.1016/j.bmcl.2016.10.033) | [27777006](https://www.ncbi.nlm.nih.gov/pubmed/27777006) | metadata signals extractable PD data (IC50) |
| `Nakamaru_1994.pdf` | Nakamaru K et al., [Effect of mesalazine, an agent for the…, Nihon yakurigaku zasshi. Fo… (1994) | pd | 4 | [10.1254/fpj.104.447](https://doi.org/10.1254/fpj.104.447) | [7851818](https://www.ncbi.nlm.nih.gov/pubmed/7851818) | metadata signals extractable PD data (IC50) |
| `Vossmann_2008.pdf` | Vossmann M et al., West Nile virus is neutralized by HOCl-…, Virology (2008) | pd | 4 | [10.1016/j.virol.2007.12.008](https://doi.org/10.1016/j.virol.2007.12.008) | [18191981](https://www.ncbi.nlm.nih.gov/pubmed/18191981) | metadata signals extractable PD data (EC50) |
| `Yan_1996.pdf` | Yan LJ et al., Efficacy of hypochlorous acid scavenger…, Archives of biochemistry an… (1996) | pd | 4 | [10.1006/abbi.1996.0130](https://doi.org/10.1006/abbi.1996.0130) | [8619623](https://www.ncbi.nlm.nih.gov/pubmed/8619623) | metadata signals extractable PD data (IC50) |
| `Zou_1996.pdf` | Zou MH et al., Peroxynitrite formed by simultaneous ge…, FEBS letters (1996) | pd | 4 | [10.1016/0014-5793(96)00160-3](https://doi.org/10.1016/0014-5793(96)00160-3) | [8612727](https://www.ncbi.nlm.nih.gov/pubmed/8612727) | metadata signals extractable PD data (IC50) |
| `de_2025.pdf` | de Brito DQ et al., Acute Toxicity of Commercial Ethanol an…, Bulletin of environmental c… (2025) | pd | 4 | [10.1007/s00128-025-04125-7](https://doi.org/10.1007/s00128-025-04125-7) | [41099801](https://www.ncbi.nlm.nih.gov/pubmed/41099801) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-29T21:20:32.791160+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Amitai_2009 | irrelevant | 0 | 0 | The paper describes the synthesis and biocidal activity of polyurethane materials that generate hypochlorite, not a pharmacokinetic study of hypochlorite as a drug. |
| popPK | Archana_2016 | irrelevant | 0 | 0 | The paper is a nutritional study on sea urchin gonads and contains no pharmacokinetic data for hypochlorite. |
| PD | Archana_2016 | not_relevant | 0 | 0 | The paper reports the nutritional composition and antioxidant activity (IC50) of sea urchin gonads, not a pharmacodynamic or exposure-response relationship for the drug Hypochlorite. |
| popPK | Ballmaier_2006 | irrelevant | 0 | 0 | The paper is a mechanistic study on DNA damage by bromate, with hypochlorite mentioned only as a comparator for cytotoxicity, and no pharmacokinetic parameters are reported. |
| PD | Ballmaier_2006 | not_relevant | 1 | 0 | The paper only qualitatively describes the dose-response shape of hypochlorite (hockey-stick-like) without providing numeric PD parameters or extractable data. |
| popPK | Baltas_2016 | irrelevant | 0 | 0 | no_text gate: only 125 chars of text extracted (&lt; 400) |
| PD | Baltas_2016 | not_relevant | 0 | 0 | The paper focuses on the effect of propolis on Helicobacter pylori, not Hypochlorite, and does not report any pharmacodynamic or exposure-response data for the target drug. |
| popPK | Barak_2003 | irrelevant | 0 | 0 | The paper is a food safety study on surface sanitization of cantaloupes using sodium hypochlorite as a disinfectant, not a pharmacokinetic study of hypochlorite as a drug. |
| popPK | Belhadj_2022 | irrelevant | 0 | 0 | The paper describes an electrochemical method for producing bleach (sodium hypochlorite) and contains no pharmacokinetic data or disposition parameters. |
| popPK | Berner_2020 | irrelevant | 0 | 0 | The paper is an in vitro study on the cytotoxicity and wound healing effects of sodium hypochlorite on fibroblasts, containing no pharmacokinetic parameters. |
| popPK | Biju_2026 | irrelevant | 0 | 0 | The paper is a review on endophyte-derived metabolites and does not report pharmacokinetic parameters for hypochlorite, which is only mentioned as a surface sterilization agent. |
| PD | Biju_2026 | not_relevant | 0 | 0 | The paper is a review on bacterial endophytic secondary metabolites and does not report any pharmacodynamic or exposure-response data for Hypochlorite. |
| popPK | Boone_2025 | irrelevant | 0 | 0 | The study focuses on vinyl chloride exposure and PBPK modeling, not hypochlorite. |
| PD | Boone_2025 | not_relevant | 0 | 0 | The paper focuses on PBPK modeling for vinyl chloride exposure in an acute incident and does not contain any pharmacodynamic or exposure-response analysis for hypochlorite. |
| popPK | Brandel-Ankrapp_2026 | irrelevant | 0 | 0 | The paper is a behavioral study on C. elegans and ethanol, where hypochlorite is used only as a reagent for egg synchronization, not as a subject drug for pharmacokinetic analysis. |
| PD | Brandel-Ankrapp_2026 | not_relevant | 0 | 0 | The paper studies the effects of ethanol (EtOH) on C. elegans behavior and gene expression, not hypochlorite, and does not report any pharmacodynamic or exposure-response parameters for hypochlorite. |
| popPK | Calabrese_2024 | irrelevant | 0 | 0 | The paper is a commentary on in-vitro cell viability assays regarding flavonoids and hypochlorite toxicity, containing no pharmacokinetic parameters or quantitative disposition data. |
| PD | Calabrese_2024 | not_relevant | 1 | 0 | The text is a commentary describing a hormetic response qualitatively but does not provide numeric PD parameters or data curves for Hypochlorite. |
| PGx | Campos_2012 | not_relevant | 0 | 0 | The study evaluates the efficacy of sodium hypochlorite on bacterial strains and characterizes bacterial resistance genes (mecA), but does not report human pharmacogenomic effects on the PK or PD of hypochlorite. |
| popPK | Carballeira_2012 | irrelevant | 0 | 0 | The study is a toxicity assessment (EC50) of sodium hypochlorite on sea urchin embryos, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Chan-Pérez_2017 | irrelevant | 0 | 0 | The paper is an in-vitro parasitology study on Haemonchus contortus susceptibility to plant extracts, where sodium hypochlorite is used only as a reagent to induce larval exsheathment, not as a subject drug for pharmacokinetic analysis. |
| popPK | Cheng_2026 | irrelevant | 0 | 0 | The paper is an analytical chemistry study tracking hypochlorite levels in a disease model, not a pharmacokinetic study of hypochlorite as a drug, and contains no PK parameters. |
| PD | Cheng_2026 | not_relevant | 0 | 0 | The paper describes an analytical method for detecting hypochlorite levels in a disease model and reports biomarker changes, but it does not analyze the pharmacodynamic response of a drug to hypochlorite exposure or dose. |
| popPK | Crow_1995 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on enzyme inactivation by hypochlorite, not a pharmacokinetic study, and contains no PK parameters. |
| popPK | Cypriani_1993 | irrelevant | 0 | 0 | no_text gate: only 94 chars of text extracted (&lt; 400) |
| PD | Cypriani_1993 | not_relevant | 0 | 0 | The paper investigates the antioxidant activity of diosmin, not hypochlorite, and does not report a pharmacodynamic or exposure-response relationship for hypochlorite. |
| popPK | Di_2026 | irrelevant | 0 | 0 | The paper focuses on the antimicrobial activity and molecular docking of menthol-based derivatives, not the pharmacokinetics of hypochlorite. |
| PD | Di_2026 | not_relevant | 2 | 2 | The paper reports MIC values and qualitative biofilm reduction percentages at specific sub-MIC concentrations, but does not provide a formal dose-response curve, Emax/EC50 parameters, or a PK/PD model for Hypochlorite. |
| popPK | EFSA_2023 | irrelevant | 0 | 0 | The paper is a risk assessment of N-nitrosamines in food and does not involve the drug hypochlorite or report any pharmacokinetic parameters. |
| PD | EFSA_2023 | not_relevant | 0 | 0 | The paper is a risk assessment of N-nitrosamines in food using a Margin of Exposure (MOE) approach and does not involve Hypochlorite or report any pharmacodynamic or exposure-response parameters. |
| popPK | EFSA_2025 | irrelevant | 0 | 0 | The paper is a toxicological risk assessment of bromide, not a pharmacokinetic study of hypochlorite. |
| PD | EFSA_2025 | not_relevant | 0 | 0 | The paper discusses bromide toxicity and risk assessment, not hypochlorite, and does not report pharmacodynamic parameters for the specified drug. |
| popPK | Ebenezer_2015 | irrelevant | 0 | 0 | The study is an ecotoxicology assessment of sodium hypochlorite on dinoflagellates, reporting biochemical responses and EC50 values rather than pharmacokinetic parameters. |
| popPK | Emmanuel_2004 | irrelevant | 0 | 0 | The paper is an environmental toxicology study on aquatic organisms and wastewater, not a pharmacokinetic study of hypochlorite in humans or animals. |
| PD | Emmanuel_2004 | not_relevant | 3 | 2 | The paper reports a linear correlation (r=0.98) between AOX concentrations and EC50 values, but does not provide the specific numeric slope/intercept or a dose-response curve for Hypochlorite itself, making PD parameters non-extractable. |
| popPK | Fawell_2006 | irrelevant | 0 | 0 | The paper discusses regulatory risk assessment for bromate (a contaminant) in the context of hypochlorite use, and does not report any pharmacokinetic parameters for hypochlorite. |
| PD | Fawell_2006 | not_relevant | 0 | 0 | The paper is a review of regulatory risk assessment for bromate (a contaminant in hypochlorite) and does not report any pharmacodynamic or exposure-response data for hypochlorite itself. |
| popPK | Gachango_2011 | irrelevant | 0 | 0 | The paper is a plant pathology study on fungal resistance, and hypochlorite is used only as a surface sterilant, not as a subject drug for pharmacokinetic analysis. |
| PD | Gachango_2011 | not_relevant | 0 | 0 | The paper reports EC50 values for fungicides (fludioxonil, etc.) against fungal isolates, not a pharmacodynamic relationship for the drug Hypochlorite, which is used only as a surface sterilant. |
| popPK | Galli_2025 | irrelevant | 0 | 0 | The paper is a high-throughput screening study for anthelmintic activity and does not involve the drug hypochlorite or report any pharmacokinetic parameters. |
| PD | Galli_2025 | not_relevant | 0 | 0 | The paper reports EC50 values for flavonoids and other compounds, but does not contain any data, analysis, or mention of Hypochlorite. |
| popPK | Gandhi_2024 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of the bispecific antibody HMB-001 and its effect on FVIIa, not the drug hypochlorite. |
| popPK | Genena_2026 | irrelevant | 0 | 0 | The paper is an in-vitro study on selenium nanoparticles as an endodontic irrigant, using sodium hypochlorite only as a comparator, and contains no pharmacokinetic parameters. |
| PGx | Gharieb_2021 | not_relevant | 0 | 0 | The study investigates the efficacy of sodium hypochlorite on bacterial biofilms and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Grippa_2000 | irrelevant | 0 | 0 | The study is an in-vitro antioxidant assay where hypochlorite is used as an oxidizing agent, not as the subject drug for pharmacokinetic evaluation. |
| popPK | Gross_2024 | irrelevant | 0 | 0 | The paper is a study on bacterial evolution and antibiotic resistance, and hypochlorite is only mentioned as a decontaminant (bleach) for the experimental equipment, not as a subject drug for pharmacokinetic analysis. |
| PD | Gross_2024 | not_relevant | 0 | 0 | The paper focuses on the evolutionary genetics of antibiotic resistance (MIC evolution) and does not report pharmacodynamic modeling or exposure-response relationships for a drug. |
| popPK | Hadi_2025 | irrelevant | 0 | 0 | The study investigates the neuroprotective effects of rosiglitazone in a Parkinson's disease model and does not involve hypochlorite or report any pharmacokinetic parameters. |
| popPK | Hamed_2026 | irrelevant | 0 | 0 | The paper is a study on fungal metabolites and their bioactivity; hypochlorite is mentioned only as a sterilization agent, not as a subject drug for pharmacokinetic analysis. |
| PD | Hamed_2026 | not_relevant | 0 | 0 | The paper is a review of marine fungal metabolites and does not report any pharmacodynamic or exposure-response data for Hypochlorite. |
| PGx | Hamilton_2024 | not_relevant | 0 | 0 | The paper studies the susceptibility of human norovirus genotypes to sodium hypochlorite disinfection, not the pharmacokinetics or pharmacodynamics of hypochlorite in humans. |
| popPK | Hamilton_2025 | irrelevant | 0 | 0 | The paper is a systematic review of sanitizer efficacy against biofilms and does not report pharmacokinetic parameters for hypochlorite. |
| popPK | Hostynek_1990 | irrelevant | 0 | 0 | The study is a dermatological patch test assessing skin irritation and pH buffering, not a pharmacokinetic study, and contains no disposition parameters for hypochlorite. |
| PD | Hostynek_1990 | not_relevant | 3 | 2 | The study describes a qualitative dose-response observation (irritation vs. NaOH concentration/volume) but does not provide numeric PD parameters (e.g., EC50, Emax) or a fitted concentration-effect curve. |
| popPK | Hu_2003 | irrelevant | 0 | 0 | The paper studies the chlorination products of estradiol and their estrogenic activity, not the pharmacokinetics of hypochlorite. |
| popPK | Hu_2022 | irrelevant | 0 | 0 | The paper is a meta-analysis of antimicrobial efficacy (log-reduction) of sanitizers on Listeria monocytogenes, not a pharmacokinetic study of hypochlorite. |
| popPK | Hutchinson_1998 | irrelevant | 0 | 0 | The study is an ecotoxicology assessment of developmental and genotoxic effects in marine polychaetes, not a pharmacokinetic study, and reports no PK parameters for hypochlorite. |
| popPK | Hyde_2020 | irrelevant | 0 | 0 | The paper is a bacteriological study of colostrum where hypochlorite is used as a cleaning agent, not a pharmacokinetic study of the drug. |
| popPK | Ishikawa_2026 | irrelevant | 0 | 0 | The study investigates the effects of 5-ALA on gut microbiota and immune markers in piglets, where hypochlorite is measured as a biomarker of oxidative stress rather than being the subject drug for pharmacokinetic analysis. |
| PD | Ishikawa_2026 | not_relevant | 0 | 0 | The study is a two-group (control vs. single dose) exploratory trial in piglets that reports group-level differences in oxidative markers (including hypochlorite) but does not provide concentration-effect data, dose-response curves, or numeric PD parameters (e.g., Emax, EC50) for hypochlorite or any other drug. |
| popPK | Jana_2026 | irrelevant | 0 | 0 | The paper describes the antifungal mechanism of a novel metabolite (SM06) and contains no pharmacokinetic data for hypochlorite. |
| PD | Jana_2026 | not_relevant | 0 | 0 | The paper describes the isolation and mechanism of action of a novel antifungal metabolite (SM06), not Hypochlorite, and does not report any pharmacodynamic or exposure-response parameters. |
| popPK | Junior_2021 | irrelevant | 0 | 0 | The study investigates the protective effects of grape juice on vascular damage induced by hypochlorite in isolated rat aortas, focusing on vascular relaxation and oxidative stress markers rather than pharmacokinetic parameters. |
| popPK | Kimura_1998 | irrelevant | 0 | 0 | no_text gate: only 165 chars of text extracted (&lt; 400) |
| PD | Kimura_1998 | not_relevant | 0 | 0 | The paper studies BX661A and sulfasalazine, not Hypochlorite, and does not report a pharmacodynamic exposure-response relationship for Hypochlorite. |
| popPK | Kumar_2021 | irrelevant | 0 | 0 | The paper is a review of Iodine-124 radiochemistry and immunoPET imaging, and does not contain any pharmacokinetic data for hypochlorite. |
| PD | Kumar_2021 | not_relevant | 0 | 0 | The paper is a review of radiochemistry and production of Iodine-124 for PET imaging and does not contain any pharmacodynamic or exposure-response data for Hypochlorite. |
| popPK | Kuruto-Niwa_2002 | irrelevant | 0 | 0 | The paper investigates the estrogenic activity of chlorinated bisphenol A using a cell-based assay, and hypochlorite is only mentioned as a bleaching agent used in wastewater, not as a subject drug for pharmacokinetic analysis. |
| popPK | Lavorgna_2024 | irrelevant | 0 | 0 | no_text gate: only 128 chars of text extracted (&lt; 400) |
| PD | Lavorgna_2024 | not_relevant | 0 | 0 | The paper focuses on the ecotoxicity of sunscreen byproducts and does not report pharmacodynamic or exposure-response relationships for hypochlorite. |
| popPK | Levine_2000 | irrelevant | 0 | 0 | The study is a toxicology/pathology investigation of fibroplasia in rats and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for hypochlorite. |
| PD | Levine_2000 | not_relevant | 3 | 1 | The text describes a qualitative dose-response relationship (threshold and accumulation) but provides no numeric PD parameters, concentration-effect curves, or quantitative data in the provided abstract. |
| popPK | Li_1991 | irrelevant | 0 | 0 | The study is an in-vitro toxicity assay using sodium hypochlorite as a test agent, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Limbocker_2019 | irrelevant | 0 | 0 | The paper studies the drug trodusquemine and its effects on Aβ42 aggregation, not the pharmacokinetics of hypochlorite. |
| PD | Limbocker_2019 | not_relevant | 0 | 0 | The paper studies the effect of trodusquemine on Aβ42 aggregation and toxicity, not hypochlorite. |
| popPK | Lu_2020 | irrelevant | 0 | 0 | The paper is an in-vitro enzyme kinetics study on urease inhibition, and hypochlorite is only mentioned as part of a detection method (phenol-hypochlorite), not as the subject drug for PK analysis. |
| PD | Lu_2020 | not_relevant | 0 | 0 | The paper investigates the enzyme inhibition kinetics of a plant extract (Zanthoxylum nitidum) on urease, not the pharmacodynamics of the drug Hypochlorite; hypochlorite is only mentioned as a reagent in the spectrophotometric assay method. |
| popPK | López-Galindo_2010 | irrelevant | 0 | 0 | The paper studies environmental degradation kinetics and ecotoxicity of sodium hypochlorite in seawater, not pharmacokinetic disposition parameters in biological systems. |
| PGx | Martínez_2017 | not_relevant | 0 | 0 | The paper studies the effect of chloramine-T (a precursor to hypochlorite) on enzyme induction in rats, not the pharmacogenomics of hypochlorite itself. |
| popPK | Marín_2011 | irrelevant | 0 | 0 | The paper studies phenolic compounds as inhibitors of protein carbonylation caused by hypochlorite, which is used as an oxidizing agent/reagent rather than the subject drug for pharmacokinetic analysis. |
| popPK | McDermott-Rouse_2021 | irrelevant | 0 | 0 | The paper focuses on behavioral phenotyping and mode-of-action prediction in C. elegans, not pharmacokinetics of hypochlorite. |
| PD | McDermott-Rouse_2021 | not_relevant | 0 | 0 | The paper focuses on machine learning classification of behavioral phenotypes to predict mode of action and does not report pharmacodynamic parameters or exposure-response relationships for Hypochlorite. |
| popPK | Morita_2016 | irrelevant | 0 | 0 | no_text gate: only 148 chars of text extracted (&lt; 400) |
| PD | Morita_2016 | not_relevant | 0 | 0 | The paper reports qualitative inhibition of lipid oxidation by hypochlorite and other agents, but does not provide numeric concentration-effect data, dose-response curves, or PD parameters for hypochlorite. |
| popPK | Muff_2010 | irrelevant | 0 | 0 | The study investigates the electrochemical degradation of PAHs where hypochlorite acts as a reactive intermediate, not as the subject drug for pharmacokinetic analysis. |
| popPK | Naicker_2020 | irrelevant | 0 | 0 | The study is an in-vitro microbiological investigation of sodium hypochlorite's antimicrobial effects, not a pharmacokinetic study, and contains no PK parameters. |
| popPK | Nakamaru_1994 | irrelevant | 0 | 0 | The study focuses on the pharmacological effects of mesalazine on reactive oxygen species, with hypochlorite serving only as a substrate for scavenging assays rather than the subject drug for PK analysis. |
| popPK | Nazir_2026 | irrelevant | 0 | 0 | The paper is a review of endophytic fungal metabolites and does not study hypochlorite or report any pharmacokinetic parameters. |
| PD | Nazir_2026 | not_relevant | 0 | 0 | The paper is a review of endophytic fungal metabolites and does not mention Hypochlorite or report any pharmacodynamic or exposure-response data. |
| popPK | Ozasir_2026 | irrelevant | 0 | 0 | The study investigates the surface morphology of dental instruments exposed to sodium hypochlorite, not the pharmacokinetics of hypochlorite in a biological system. |
| PGx | Park_2023 | not_relevant | 0 | 0 | The paper investigates in vitro antimicrobial efficacy and cytotoxicity of hypochlorite combinations, containing no pharmacogenomic data or genetic variants affecting PK/PD. |
| popPK | Pellevoisin_2025 | irrelevant | 0 | 0 | The study is an in-vitro irritation assessment using sodium hypochlorite as a test chemical, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Peters_2000 | irrelevant | 0 | 0 | The study is an in-vitro microbiological investigation of bacterial penetration in dentine, not a pharmacokinetic study of hypochlorite. |
| popPK | Peters_2001 | irrelevant | 0 | 0 | The paper is a plant pathology study on fungal resistance, and hypochlorite is used only as a surface sterilant, not as a subject drug for pharmacokinetic analysis. |
| PD | Peters_2001 | not_relevant | 0 | 0 | The paper reports EC50 values for thiabendazole against fungal isolates, not for hypochlorite, and hypochlorite is only used as a surface sterilant. |
| popPK | Pragadesh_2025 | irrelevant | 0 | 0 | The study is an in-vitro evaluation of antimicrobial efficacy and cytotoxicity, not a pharmacokinetic study, and reports no disposition parameters for hypochlorite. |
| popPK | Raghu_2009 | irrelevant | 0 | 0 | The paper is a chemical engineering study on wastewater treatment using electrochemical oxidation, not a pharmacokinetic study of hypochlorite as a drug. |
| popPK | Reshma_2020 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity and efficacy assessment of sodium hypochlorite as a dental irrigant, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Saito_2014 | irrelevant | 0 | 0 | The paper is a plant pathology study identifying a fungal species, and hypochlorite is used only as a surface disinfectant, not as a subject drug for pharmacokinetic analysis. |
| PD | Saito_2014 | not_relevant | 0 | 0 | The paper is a taxonomic report on a fungal pathogen; the mention of hypochlorite is a surface disinfection protocol, not a pharmacodynamic or exposure-response analysis. |
| popPK | Sathasivam_2016 | irrelevant | 0 | 0 | no_text gate: only 128 chars of text extracted (&lt; 400) |
| PGx | Sato_2020 | not_relevant | 0 | 0 | The paper investigates the virucidal efficacy of alcohol and hypochlorite against norovirus, not the pharmacokinetics or pharmacodynamics of hypochlorite in humans or the influence of genetic variants on these parameters. |
| popPK | Scott_2021 | irrelevant | 0 | 0 | The paper is an in-vitro toxicity study where hypochlorite is excluded from the analysis due to volatility, and no pharmacokinetic parameters are reported. |
| PD | Scott_2021 | not_relevant | 0 | 0 | The paper explicitly excludes sodium hypochlorite from the correlation analysis due to its volatility and does not report any numeric PD parameters or concentration-effect data for it. |
| PGx | Shibuya_2020 | not_relevant | 0 | 0 | The paper reports the synthesis and pharmacokinetics of K-604 metabolites, with no mention of gene variants or pharmacogenomics. |
| popPK | Shirai_2000 | irrelevant | 0 | 0 | The paper is a virology study on the virucidal activity of disinfectants (including sodium hypochlorite) and does not report pharmacokinetic parameters for hypochlorite. |
| popPK | Soomro_2025 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of apigenin's effect on hypochlorite production, not a pharmacokinetic study of hypochlorite. |
| popPK | Subpiramaniyam_2021 | irrelevant | 0 | 0 | The paper is an environmental toxicology review of disinfectants and does not report any pharmacokinetic parameters for hypochlorite. |
| PD | Subpiramaniyam_2021 | not_relevant | 1 | 0 | The paper is a systematic review calculating toxicity ratios (TC ratios) based on literature values (NOEC, LC50, etc.) rather than reporting a primary pharmacodynamic model or extractable concentration-effect curve for hypochlorite. |
| popPK | Taki_2026 | irrelevant | 0 | 0 | The paper describes a high-throughput phenotypic screen for nematocidal compounds and does not report pharmacokinetic parameters for hypochlorite. |
| PD | Taki_2026 | not_relevant | 0 | 0 | The paper reports high-throughput screening results for a library of compounds against nematodes and does not mention or provide data for Hypochlorite. |
| popPK | Tang_2025 | irrelevant | 0 | 0 | The paper is an in-vitro enzyme kinetics study on Smilax glabra inhibiting urease, where hypochlorite is only a reagent in the assay method, not the subject drug. |
| popPK | Tapia_2024 | irrelevant | 0 | 0 | The paper is a phytochemical and in-vitro antioxidant study where hypochlorite (HOCl) is used as a reagent for scavenging assays, not as a subject drug for pharmacokinetic analysis. |
| PD | Tapia_2024 | not_relevant | 0 | 0 | The paper reports phytochemical composition and general bioactivities (antioxidant, enzyme inhibition, cytotoxicity) of wine pomace extracts, but does not report a pharmacodynamic or exposure-response relationship for the drug Hypochlorite. |
| popPK | Teimoori_2025 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of taurine's effect on vascular function where sodium hypochlorite is used only as an oxidative stress agent, not as the subject drug for pharmacokinetic analysis. |
| PD | Teimoori_2025 | not_relevant | 0 | 0 | The study investigates the protective effect of taurine on vascular function; hypochlorite is used only as a fixed-concentration (200 μM) injury agent in the ischemia-reperfusion model, and no exposure-response or dose-response relationship for hypochlorite is analyzed or reported. |
| popPK | Van_2004 | irrelevant | 0 | 0 | The paper is an environmental engineering study on water treatment using electrolysis, where hypochlorite is a byproduct/oxidant, not a subject drug for pharmacokinetic analysis. |
| popPK | Vossmann_2008 | irrelevant | 0 | 0 | no_text gate: only 124 chars of text extracted (&lt; 400) |
| PD | Vossmann_2008 | not_relevant | 0 | 0 | The paper describes a structural mechanism of viral neutralization by modified albumin, not a pharmacodynamic exposure-response or dose-response analysis with numeric parameters. |
| popPK | Wesołowski_2026 | irrelevant | 0 | 0 | The paper is a review on oxidative stress in Acanthamoeba keratitis and does not report pharmacokinetic parameters for hypochlorite. |
| PD | Wesołowski_2026 | not_relevant | 0 | 0 | The paper is a review of oxidative stress mechanisms in Acanthamoeba keratitis and does not report any pharmacodynamic or exposure-response data for hypochlorite. |
| popPK | Yan_1996 | irrelevant | 0 | 0 | no_text gate: only 88 chars of text extracted (&lt; 400) |
| PD | Yan_1996 | not_relevant | 0 | 0 | The paper investigates the chemical efficacy of scavengers against hypochlorous acid-induced protein carbonylation, which is a biochemical/chemical study, not a pharmacodynamic or exposure-response analysis of a drug. |
| popPK | Yayehrad_2021 | irrelevant | 0 | 0 | The paper is a review of nanotechnology for COVID-19 and does not contain pharmacokinetic data for hypochlorite. |
| PD | Yayehrad_2021 | not_relevant | 0 | 0 | The paper is a general review of nanotechnology for COVID-19 and does not contain any pharmacodynamic or exposure-response data for hypochlorite. |
| popPK | Yi_2011 | irrelevant | 0 | 0 | The paper is an ecotoxicology study on industrial effluents using Daphnia magna, not a pharmacokinetic study of hypochlorite. |
| PD | Yi_2011 | not_relevant | 1 | 0 | The paper identifies sodium hypochlorite as a likely source of toxicity in industrial effluent but does not report a specific concentration-effect relationship or numeric PD parameters for hypochlorite itself. |
| PGx | Zeng_2022 | not_relevant | 0 | 0 | The paper describes bacterial genetic mechanisms of tolerance to hypochlorite, not human pharmacogenomics affecting PK/PD parameters. |
| popPK | Zhou_2021 | irrelevant | 0 | 0 | The paper investigates zeolite ion exchange kinetics and regeneration using sodium hypochlorite as a chemical agent, not the pharmacokinetics of hypochlorite as a drug. |
| PD | Zhou_2021 | not_relevant | 0 | 0 | The paper investigates ion exchange kinetics and inhibition by calcium on zeolite, which is a chemical engineering/environmental science study, not a pharmacodynamic study of a drug. |
| popPK | Zock_2009 | irrelevant | 0 | 0 | The paper is an epidemiological study on respiratory health outcomes associated with bleach use, not a pharmacokinetic study, and contains no PK parameters. |
| PD | Zock_2009 | not_relevant | 2 | 1 | The paper reports epidemiological associations and a qualitative dose-response trend for bleach usage frequency, but it does not provide a pharmacodynamic model or numeric PD parameters (e.g., Emax, EC50) derived from exposure concentrations. |
| popPK | Zou_1996 | irrelevant | 0 | 0 | no_text gate: only 135 chars of text extracted (&lt; 400) |
| PD | Zou_1996 | not_relevant | 0 | 0 | The paper studies Peroxynitrite, not Hypochlorite, and focuses on enzyme inhibition kinetics rather than a drug exposure-response relationship for Hypochlorite. |
| popPK | da_2021 | irrelevant | 0 | 0 | The study evaluates the wound healing efficacy of sodium hypochlorite in mice and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | de_2025 | irrelevant | 0 | 0 | no_text gate: only 153 chars of text extracted (&lt; 400) |
| popPK | de_2026 | irrelevant | 0 | 0 | The study investigates the cytotoxicity of chelators (HEDP/EDTA) in an in-vitro cell culture model, not the pharmacokinetics of hypochlorite. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
