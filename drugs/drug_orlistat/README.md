<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A08A&quot;,&quot;href&quot;:&quot;atc/A08A.md&quot;},{&quot;label&quot;:&quot;orlistat&quot;}]"></div>

# orlistat

- **generic name:** orlistat
- **ATC codes:** `A08AB01`
- **DrugBank:** [DB01083](https://go.drugbank.com/drugs/DB01083)
- **groups:** approved, investigational

## About

**Description.** The global prevalence of obesity is increasing rapidly. Obesity-related complications lead to significant personal and economic burden by reducing quality of life and increasing the cost of healthcare.  In some individuals, diet and exercise are insufficient to maintain weight loss, and pharmacological or surgical intervention is required.[A229928]

Orlistat is a lipase inhibitor used in the treatment of obesity that works by inhibiting fat-metabolizing enzymes. It was approved by the FDA for use in combination with a reduced-calorie diet in 1999.[L11130] This drug is a generally well-tolerated and effective weight-loss aid and is now available in both over-the-counter[L31963] and prescription preparations, depending on the dosage quantity.[L11130]

**Indication.** Orlistat is indicated for obesity management including weight loss and weight maintenance when used in combination with calorie reduction in overweight and obese adults; this indication applies to both the prescription formulation of 120 mg[L11130] and the over-the-counter formulation of 60 mg.[L31963] Orlistat in the 120 mg prescription formulation is also indicated to reduce the risk of weight regain following weight loss.[L11130]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-12 01:43 | 17:20 | 0/0/0 | 1/1/0 | 0/0/0 | 354,088/5,826 | ollama / qwen3.8:27b-mtp-q8_0 | 21 | 0/0 | 21/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Tongluan_2017](drugs/drug_orlistat/pd_Tongluan_2017_unknown.md) | Tongluan N et al., Involvement of fatty acid synthase in d…, Virology journal (2017) | [10.1186/s12985-017-0685-9](https://doi.org/10.1186/s12985-017-0685-9) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Steketee_2021](drugs/drug_orlistat/pd_Steketee_2021_unknown.md) | Steketee PC et al., Divergent metabolism between Trypanosom…, PLoS pathogens (2021) | [10.1371/journal.ppat.1009734](https://doi.org/10.1371/journal.ppat.1009734) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=orlistat) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | `CYP3A4` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer | DrugBank actor |
| excretion | bile duct | <sub>“…olabled orlistat in both normal weight and obese volunteers fecal excretion of the unabsor…”</sub> | prose |
| excretion | kidney | <sub>“…rug was found to be the major route of elimination with &lt;2% urinary excretion.[A229743,L32…”</sub> | prose |

<sub>Actors without a tissue in the table: CNR1 (inhibitor), FASN (inhibitor), LIPF (inhibitor), PLA2G4A (inhibitor), PNLIP (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 210 matched, 55 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gras_2013.pdf` | Gras J, Cetilistat for the treatment of obesity, Drugs of today (Barcelona,… (2013) | pd | 4 | [10.1358/dot.2013.49.12.2099318](https://doi.org/10.1358/dot.2013.49.12.2099318) | [24524093](https://www.ncbi.nlm.nih.gov/pubmed/24524093) | metadata signals extractable PD data (IC50) |
| `Jin_2023.pdf` | Jin P et al., Screening and identification of lipase…, International journal of bi… (2023) | pd | 4 | [10.1016/j.ijbiomac.2023.123427](https://doi.org/10.1016/j.ijbiomac.2023.123427) | [36706882](https://www.ncbi.nlm.nih.gov/pubmed/36706882) | metadata signals extractable PD data (IC50) |
| `Yi_2021.pdf` | Yi SH et al., Anti-obesity effects of galla rhois via…, Biomedicine & pharmacothera… (2021) | pd | 4 | [10.1016/j.biopha.2021.112063](https://doi.org/10.1016/j.biopha.2021.112063) | [34463265](https://www.ncbi.nlm.nih.gov/pubmed/34463265) | metadata signals extractable PD data (EC50) |
| `Zhang_2021.pdf` | Zhang L et al., Drug-guided screening for pancreatic li…, Food & function (2021) | pd | 4 | [10.1039/d0fo03366a](https://doi.org/10.1039/d0fo03366a) | [33912875](https://www.ncbi.nlm.nih.gov/pubmed/33912875) | metadata signals extractable PD data (IC50) |
| `Hwang_2014.pdf` | Hwang IC et al., Effects of CYP3A5, CYP2C19, and CYP2B6…, Clinica chimica acta; inter… (2014) | pgx | 8 | [10.1016/j.cca.2013.11.007](https://doi.org/10.1016/j.cca.2013.11.007) | [24262967](https://www.ncbi.nlm.nih.gov/pubmed/24262967) | metadata signals extractable PGX data (CYP3A5, PK/PD-context) |

<sub>queue written 2026-09-12T01:39:05.761681+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Asberg_2003 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions between cyclosporin and lipid-lowering agents (including orlistat), but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Balusamy_2020 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of Phyllanthus emblica extract where orlistat is used only as a comparator for lipase inhibition, with no pharmacokinetic parameters reported. |
| PD | Balusamy_2020 | not_relevant | 0 | 0 | The paper studies Phyllanthus emblica extract and digallic acid; orlistat is only mentioned as a standard comparator for lipase inhibition, and no PD parameters or exposure-response relationship for orlistat are reported. |
| popPK | Bengana_2025 | irrelevant | 0 | 0 | The study is an in vitro and in silico investigation of essential oil lipase inhibition where orlistat is used only as a reference comparator, and no pharmacokinetic parameters for orlistat are reported. |
| PD | Bengana_2025 | not_relevant | 0 | 0 | The paper studies the antilipase activity of essential oils and mentions orlistat only as a qualitative comparison reference, without providing any PK/PD data, exposure-response curves, or numeric PD parameters for orlistat. |
| popPK | Blumenthal_2014 | irrelevant | 0 | 0 | The study is an electronic health records analysis of weight gain associated with antidepressants, where orlistat is used only as a comparator for assay sensitivity, and no pharmacokinetic parameters are reported. |
| popPK | Eid_2023 | irrelevant | 0 | 0 | The paper is an in-vitro study on Ocimum basilicum essential oil where orlistat is used only as a positive control for lipase inhibition, with no pharmacokinetic parameters reported. |
| PD | Eid_2023 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition assays (IC50) for a plant essential oil, using orlistat only as a positive control; it does not report a pharmacodynamic or exposure-response relationship for orlistat itself. |
| popPK | Eid_2024 | irrelevant | 0 | 0 | The study is an in-vitro formulation and enzyme inhibition assay where orlistat is used only as a positive control for lipase inhibition, with no pharmacokinetic parameters reported. |
| PD | Eid_2024 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) for pomegranate oil and uses orlistat only as a positive control reference; it does not report a pharmacodynamic or exposure-response relationship for orlistat itself. |
| popPK | Gras_2013 | irrelevant | 0 | 0 | The paper title refers to cetilistat, not orlistat, and no pharmacokinetic data for orlistat is present in the evidence. |
| PD | Gras_2013 | not_relevant | 0 | 0 | The provided text is only a title and does not contain any data, analysis, or numeric parameters regarding pharmacodynamics or exposure-response relationships. |
| popPK | Guerciolini_1997 | irrelevant | 0 | 0 | The paper describes the mechanism of action and pharmacodynamics of orlistat but does not report any quantitative pharmacokinetic parameters (e.g., clearance, volume, half-life). |
| PGx | Guzman_2014 | not_relevant | 0 | 0 | The text is a general introduction to a review article and does not report specific pharmacogenomic effects on PK/PD parameters for orlistat. |
| PGx | Hang_2026 | not_relevant | 0 | 0 | The paper is a review of plozasiran for familial chylomicronemia syndrome and does not report pharmacogenomic effects on orlistat PK/PD parameters. |
| popPK | Hirosawa_2023 | irrelevant | 1 | 0 | The study focuses on drug-drug interactions and enzyme inhibition (CES2) rather than reporting quantitative population pharmacokinetic parameters (CL, V, ka) for orlistat itself. |
| popPK | Hu_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics and mechanism of a traditional Chinese medicine formula, using orlistat only as a comparator without reporting any pharmacokinetic parameters. |
| PD | Hu_2026 | not_relevant | 0 | 0 | The paper focuses on the mechanism of action of Jiangtang Tiaozhi Formula (JTTZF) and uses orlistat only as a qualitative positive control; it does not report any exposure-response or dose-response data, PK/PD modeling, or numeric PD parameters for orlistat. |
| PGx | Hwang_2014 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of sibutramine, not orlistat. |
| popPK | Jalaja_2018 | irrelevant | 0 | 0 | The paper is a mechanistic study on pancreatic lipase inhibition where orlistat is used only as a positive control, with no pharmacokinetic parameters reported. |
| PD | Jalaja_2018 | not_relevant | 1 | 1 | The paper reports a single IC50 value for orlistat as a positive control in an in vitro enzyme assay, which does not constitute a pharmacodynamic exposure-response or dose-response relationship analysis. |
| popPK | Jaradat_2020 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study on plant extracts where orlistat is used only as a positive control for lipase inhibition, reporting no pharmacokinetic parameters. |
| PD | Jaradat_2020 | not_relevant | 2 | 1 | The paper reports in vitro enzyme inhibition IC50 values for orlistat as a positive control, but does not provide a full dose-response curve or pharmacodynamic model parameters (Emax, slope) for the drug itself. |
| popPK | Jaradat_2021 | irrelevant | 0 | 0 | The study is an in-vitro phytochemical and antimicrobial assessment where orlistat is used only as a positive control for lipase inhibition, with no pharmacokinetic parameters reported. |
| PD | Jaradat_2021 | not_relevant | 2 | 2 | The paper reports an in vitro IC50 for orlistat as a positive control but does not provide the full dose-response curve or data points required to derive a pharmacodynamic model. |
| popPK | Jaradat_2021_2 | irrelevant | 0 | 0 | The study is an in-vitro phytochemical and enzyme inhibition analysis of plant extracts where orlistat is used only as a positive control for lipase inhibition, with no pharmacokinetic parameters reported. |
| PD | Jaradat_2021_2 | not_relevant | 0 | 0 | The paper reports in-vitro enzyme inhibition (IC50) for plant extracts and mentions orlistat only as a positive control with a single IC50 value, but does not report a pharmacodynamic model, exposure-response relationship, or dose-response curve for orlistat itself. |
| popPK | Jaradat_2022 | irrelevant | 0 | 0 | The paper is an in-vitro enzyme inhibition study where orlistat is used only as a positive control, and no pharmacokinetic parameters are reported. |
| PD | Jaradat_2022 | not_relevant | 2 | 2 | The paper reports an in vitro IC50 for orlistat (25.01 µg/ml) as a positive control, but does not provide a full dose-response curve, Emax, or any pharmacokinetic/pharmacodynamic modeling for orlistat. |
| popPK | Jin_2023 | irrelevant | 0 | 0 | The paper focuses on the screening of lipase inhibitors from a plant source and does not report pharmacokinetic parameters for orlistat. |
| PD | Jin_2023 | not_relevant | 0 | 0 | The paper focuses on the screening and identification of lipase inhibitors from a plant source using analytical chemistry methods, and does not report any pharmacodynamic or exposure-response data for orlistat. |
| popPK | Kim_2025 | irrelevant | 0 | 0 | The paper is a retrospective cohort study on clinical effectiveness (weight loss) and does not report any pharmacokinetic parameters for orlistat. |
| popPK | Lakshminarayana_2023 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assay on cell lines where orlistat is used only as a positive control for cholesterol esterase activity, not as the subject of a pharmacokinetic study. |
| PD | Lakshminarayana_2023 | not_relevant | 1 | 0 | The paper reports an IC50 for orlistat as a positive control in a cell assay, but the primary focus is on a plant extract, and the text does not provide the full dose-response curve or detailed PD parameters for orlistat itself. |
| popPK | Liu_2024 | irrelevant | 0 | 0 | The paper is an in-vitro food chemistry study on yam polyphenols where orlistat is used only as a positive control for pancreatic lipase inhibition, not as a subject for pharmacokinetic analysis. |
| PD | Liu_2024 | not_relevant | 1 | 0 | The paper uses orlistat only as a positive control for pancreatic lipase inhibition in an in vitro assay and does not report any pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters for orlistat. |
| PGx | Lu_2019 | not_relevant | 0 | 0 | The paper studies the association between genetic variants and drug sensitivity (IC50) in CLL cells, not the pharmacokinetics or pharmacodynamics of orlistat in humans. |
| popPK | Lu_2022 | irrelevant | 0 | 0 | The paper is a phytochemical study on Ligustrum robustum glycosides where orlistat is used only as an in-vitro positive control for enzyme inhibition, with no pharmacokinetic parameters reported. |
| PD | Lu_2022 | not_relevant | 0 | 0 | The paper is a phytochemical study isolating compounds from Ligustrum robustum; orlistat is mentioned only as a positive control with a single IC50 value, and no exposure-response or dose-response relationship for orlistat is reported. |
| popPK | Lu_2022_2 | irrelevant | 0 | 0 | The paper is a phytochemical study on Ligustrum robustum where orlistat is used only as an in-vitro positive control for enzyme inhibition, not as a subject for pharmacokinetic analysis. |
| PD | Lu_2022_2 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for plant compounds using orlistat only as a positive control, without providing a pharmacodynamic model, exposure-response relationship, or dose-effect curve for orlistat itself. |
| popPK | Lu_2023 | irrelevant | 0 | 0 | The paper is a phytochemical study on Ligustrum robustum where orlistat is used only as an in-vitro positive control for enzyme inhibition, not as a subject for pharmacokinetic analysis. |
| PD | Lu_2023 | not_relevant | 0 | 0 | The paper is a phytochemical study isolating compounds from Ligustrum robustum; orlistat is mentioned only as a positive control for FAS inhibition, and no pharmacodynamic or exposure-response analysis for orlistat is performed. |
| popPK | Lu_2023_2 | irrelevant | 0 | 0 | The paper is a phytochemical study on Ligustrum robustum glycosides where orlistat is used only as an in-vitro positive control for FAS inhibition, with no pharmacokinetic data reported. |
| PD | Lu_2023_2 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for natural compounds using orlistat as a positive control, but does not report a pharmacokinetic or pharmacodynamic model, exposure-response relationship, or dose-response curve for orlistat itself. |
| popPK | Mba_2022 | irrelevant | 0 | 0 | The paper is an in-vitro study on plant extracts where orlistat is used only as a positive control for enzyme inhibition, reporting no pharmacokinetic parameters. |
| PD | Mba_2022 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition IC50 values for plant extracts and orlistat, but does not report a pharmacodynamic (exposure-response) relationship for orlistat in vivo or in a PK/PD context. |
| popPK | McVay_2015 | irrelevant | 0 | 0 | The study is a clinical trial analyzing weight loss outcomes and dietary composition, not a pharmacokinetic study, and contains no PK parameters for orlistat. |
| popPK | Nakai_2014 | irrelevant | 2 | 0 | The paper describes a pharmacodynamic/clinical trial simulation model for weight loss rather than a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for orlistat. |
| PGx | Novotna_2010 | not_relevant | 0 | 0 | The paper investigates the effect of orlistat on CYP3A4 expression and PXR activation in cell lines, but does not report any pharmacogenomic effects (gene variants) on orlistat's PK or PD parameters. |
| popPK | Nurkolis_2023 | irrelevant | 0 | 0 | The paper is an in-vitro study on sulfated polysaccharides from green algae, using orlistat only as a positive control for lipase inhibition, and does not report any pharmacokinetic parameters for orlistat. |
| PD | Nurkolis_2023 | not_relevant | 0 | 0 | The paper studies sulfated polysaccharides from green algae; orlistat is only mentioned as a positive control in an in vitro lipase inhibition assay, and no pharmacodynamic model or exposure-response relationship for orlistat is reported. |
| popPK | Nurkolis_2023_2 | irrelevant | 0 | 0 | The paper is an in-vitro study on algae metabolites where orlistat is used only as a positive control for lipase inhibition, with no pharmacokinetic parameters reported. |
| PD | Nurkolis_2023_2 | not_relevant | 0 | 0 | The paper reports in vitro lipase inhibition EC50 values for algae extracts and orlistat, but does not report a pharmacodynamic (exposure-response) relationship for the drug orlistat itself. |
| popPK | Pandey_2024 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of new pancreatic lipase inhibitors where orlistat serves only as a comparator for IC50 values, with no pharmacokinetic parameters reported. |
| PD | Pandey_2024 | not_relevant | 1 | 1 | The paper reports in vitro IC50 values for new analogs and orlistat, but does not provide an exposure-response or dose-response relationship (PK/PD model) for orlistat in a biological system. |
| PGx | Rege_2008 | not_relevant | 0 | 0 | The paper is a review of antipsychotic-induced weight gain and mentions orlistat only as a general obesity treatment, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Ritz_2007 | irrelevant | 0 | 0 | The study focuses on body composition assessment methods (BIA, DXA) in patients taking orlistat, rather than reporting pharmacokinetic parameters for the drug. |
| popPK | S_2022 | irrelevant | 0 | 0 | The study focuses on the synthesis and in vitro/in vivo efficacy of novel pancreatic lipase inhibitors, using orlistat only as a comparator for activity and efficacy without reporting any pharmacokinetic parameters for orlistat. |
| PD | S_2022 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values and a single in vivo dose comparison (20 mg/kg vs 10 mg/kg) for a new compound, but does not provide a concentration-effect curve, PK/PD fit, or numeric PD parameters (like Emax/EC50) for orlistat itself. |
| popPK | Singh_2023 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel FASN inhibitors where orlistat is used only as a comparator for in-vitro IC50 values, with no pharmacokinetic parameters reported. |
| PD | Singh_2023 | not_relevant | 1 | 1 | The paper reports a single IC50 value for orlistat as a reference standard for FASN inhibition, but does not provide a dose-response curve, concentration-effect data, or PK/PD model for orlistat. |
| PGx | Solas_2016 | not_relevant | 0 | 0 | The text is a general review introduction that mentions pharmacogenetic approaches for obesity but does not report specific gene variants or quantitative effects on orlistat PK/PD parameters. |
| popPK | Steketee_2021 | irrelevant | 0 | 0 | The paper is a mechanistic/metabolic study on Trypanosoma parasites where orlistat is used only as a pharmacological inhibitor to test drug sensitivity, not as a subject for pharmacokinetic parameter estimation. |
| popPK | Taviano_2022 | irrelevant | 0 | 0 | The paper is an in-vitro study on plant extracts where orlistat is used only as a reference drug for enzyme inhibition, not as the subject of pharmacokinetic analysis. |
| PD | Taviano_2022 | not_relevant | 0 | 0 | The paper investigates the pharmacological activity of plant extracts (Brassica incana) using orlistat only as a reference standard in in vitro enzyme assays, and does not report any pharmacokinetic or pharmacodynamic modeling for orlistat itself. |
| popPK | Tongluan_2017 | irrelevant | 0 | 0 | The paper is a virology study investigating the role of fatty acid synthase in Dengue virus infection, using orlistat only as a mechanistic inhibitor rather than as a subject for pharmacokinetic analysis. |
| popPK | Vashisth_2024 | irrelevant | 0 | 0 | The study is an in-vitro enzyme inhibition and in-silico study where orlistat is used only as a comparator for IC50 values, not a pharmacokinetic study. |
| PD | Vashisth_2024 | not_relevant | 1 | 1 | The paper reports a single in vitro IC50 value for orlistat as a reference standard for lipase inhibition, but does not provide a dose-response curve, concentration-effect data, or any pharmacokinetic/pharmacodynamic modeling for orlistat. |
| popPK | Xu_2024 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic (PD) bioequivalence and sample size determination, not pharmacokinetic (PK) disposition parameters, and no numeric PK values are provided. |
| popPK | Yang_2024 | irrelevant | 0 | 0 | The paper is a natural product isolation and biological activity study where orlistat is used only as a positive control for lipase inhibition, not as the subject of a pharmacokinetic study. |
| PD | Yang_2024 | not_relevant | 1 | 1 | The paper reports an IC50 for orlistat as a positive control in a lipase inhibition assay, but does not report a pharmacokinetic or pharmacodynamic model, exposure-response relationship, or dose-response curve for orlistat in a biological system. |
| popPK | Yi_2021 | irrelevant | 0 | 0 | The paper focuses on the anti-obesity effects of galla rhois and does not report pharmacokinetic parameters for orlistat. |
| PD | Yi_2021 | not_relevant | 0 | 0 | The paper focuses on the anti-obesity effects of galla rhois and does not mention orlistat or provide any pharmacodynamic data for it. |
| popPK | Zhang_2021 | irrelevant | 0 | 0 | The paper focuses on screening for pancreatic lipase inhibitors in functional foods and does not report pharmacokinetic parameters for orlistat. |
| PD | Zhang_2021 | not_relevant | 0 | 0 | The paper focuses on drug-guided screening for pancreatic lipase inhibitors in functional foods and does not report pharmacokinetic or pharmacodynamic data for orlistat. |
| popPK | Zhi_1994 | irrelevant | 0 | 0 | The study analyzes dose-response relationships for fecal fat excretion (pharmacodynamics) rather than reporting pharmacokinetic disposition parameters like clearance or volume for orlistat. |
| popPK | Zhi_1995 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of glyburide with orlistat as a co-administered agent, and does not report PK parameters for orlistat itself. |
| PD | Zhi_1995 | not_relevant | 2 | 1 | The paper mentions a qualitative correlation between blood glucose and glyburide concentration but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative model for orlistat or the interaction. |
| popPK | Zouheira_2022 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of plant extracts where orlistat is used only as a positive control for enzyme inhibition, with no pharmacokinetic parameters reported. |
| PD | Zouheira_2022 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition IC50 values for plant extracts and orlistat, which are pharmacological potency metrics, not pharmacodynamic (exposure-response) parameters for the drug orlistat in a biological system. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
