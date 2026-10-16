<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;lobeglitazone&quot;}]"></div>

# lobeglitazone

- **generic name:** lobeglitazone
- **ATC codes:** `A10BD26`, `A10BG04`
- **DrugBank:** [DB09198](https://go.drugbank.com/drugs/DB09198) · **PubChem:** [CID 9826451](https://pubchem.ncbi.nlm.nih.gov/compound/9826451)
- **molar mass:** 480.54 g/mol (C24H24N4O5S) — DrugBank
- **groups:** investigational

## About

Lobeglitazone is a thiazolidinedione, a class of oral blood glucose lowering drugs used in diabetes. It is classified as investigational and has no European Union authorisation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q18350076](https://www.wikidata.org/wiki/Q18350076) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 23:51 | 1:01 | 0/0/0 | 1/0/0 | 0/0/0 | 93,186/4,000 | einfracz / qwen3.8-27b | 7 | 1/6 | 7/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Jin_2021_viability](drugs/drug_lobeglitazone/pd_Jin_2021_viability.md) | cell viability (MTT assay) ← lobeglitazone · direct sigmoid Emax (Hill) effect | — | Jin JQ et al., Lobeglitazone, A Peroxisome Proliferato…, Endocrinology and metabolis… (2021) | [10.3803/EnM.2021.1155](https://doi.org/10.3803/EnM.2021.1155) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=lobeglitazone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` unknown | DrugBank actor |
| absorption | kidney | `ABCB1` unknown | DrugBank actor |
| absorption | liver | `ABCB1` unknown | DrugBank actor |
| absorption | placenta | `ABCB1` unknown | DrugBank actor |
| absorption | small intestine | `ABCB1` unknown | DrugBank actor |
| absorption | testis | `ABCB1` unknown | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor, `CYP2C19` inhibitor, `CYP2C8` inhibitor/substrate, `CYP2C9` inhibitor, `CYP3A4` substrate, `SLCO1B1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: PPARA (target), PPARG (activator), SLCO3A1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 27 matched, 53 returned
- **screened:** 4  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_7 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kim_2011.pdf` | Kim JW et al., Tolerability and pharmacokinetics of lo…, Clinical therapeutics (2011) | popPK | 8 | [10.1016/j.clinthera.2011.09.023](https://doi.org/10.1016/j.clinthera.2011.09.023) | [22047812](https://pubmed.ncbi.nlm.nih.gov/22047812) | The study is a relevant human PK trial for lobeglitazone, but the specific quantitative parameter values (e.g., CL, V, ka, t1/2) are not present in the provided text, only qualitative trends (dose proportionality, accumulation ratio). |
| `Lee_2015.pdf` | Lee JH et al., Kinetics of the Absorption, Distributio…, Journal of pharmaceutical s… (2015) | popPK | 8 | [10.1002/jps.24378](https://doi.org/10.1002/jps.24378) | [25648999](https://pubmed.ncbi.nlm.nih.gov/25648999) | The paper reports ADME/PK parameters for lobeglitazone in rats, including bioavailability and distribution, but specific quantitative values for clearance, volume, or rate constants are not explicitly listed in the provided evidence text. |
| `Lee_2015_2.pdf` | Lee JH et al., Gender differences in the hepatic elimi…, Biopharmaceutics & drug dis… (2015) | popPK | 8 | [10.1002/bdd.1954](https://doi.org/10.1002/bdd.1954) | [25899769](https://pubmed.ncbi.nlm.nih.gov/25899769) | The study reports quantitative PK parameters including AUC, in vitro half-life, and CLint for lobeglitazone in rats, with specific numeric values provided in the evidence. |
| `Yim_2017.pdf` | Yim CS et al., Specific Inhibition of the Distribution…, Drug metabolism and disposi… (2017) | popPK | 8 | [10.1124/dmd.116.074120](https://doi.org/10.1124/dmd.116.074120) | [28069721](https://pubmed.ncbi.nlm.nih.gov/28069721) | The abstract explicitly reports numeric values for systemic clearance and volume of distribution for lobeglitazone in rats. |
| `Kim_2015.pdf` | Kim CO et al., Pharmacokinetic Interaction Between Aml…, Clinical therapeutics (2015) | popPK | 6 | [10.1016/j.clinthera.2015.06.009](https://doi.org/10.1016/j.clinthera.2015.06.009) | [26163202](https://pubmed.ncbi.nlm.nih.gov/26163202) | The study is a PK interaction trial for lobeglitazone, but the evidence only contains geometric mean ratios of PK parameters; specific quantitative values for clearance, volume, or half-life are not provided in the text. |
| `Kim_2019.pdf` | Kim SY et al., Pharmacokinetics of a Lobeglitazone/Met…, Clinical pharmacology in dr… (2019) | popPK | 5 | [10.1002/cpdd.625](https://doi.org/10.1002/cpdd.625) | [30329224](https://pubmed.ncbi.nlm.nih.gov/30329224) | The study is a PK study of lobeglitazone in humans, but the provided evidence only contains qualitative comparisons (ratios, percentages) and no specific numeric values for CL, V, t1/2, or ka. |
| `Sil_2014.pdf` | Sil Oh E et al., Effect of ketoconazole on lobeglitazone…, Clinical therapeutics (2014) | pgx | 7 | [10.1016/j.clinthera.2014.05.064](https://doi.org/10.1016/j.clinthera.2014.05.064) | [25047497](https://www.ncbi.nlm.nih.gov/pubmed/25047497) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-14T23:51:02.454242+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Choi_2018 | irrelevant | 0 | 0 | The study is a mechanistic and pharmacological investigation of targeted drug delivery and plaque reduction, reporting no quantitative pharmacokinetic disposition parameters (e.g., clearance, volume, half-life) for lobeglitazone. |
| popPK | Choung_2018 | irrelevant | 1 | 0 | The study is a mechanistic investigation of lobeglitazone's effect on hepatic steatosis and gene expression in mice, reporting no quantitative pharmacokinetic parameters. |
| popPK | Dutta_2023 | irrelevant | 0 | 0 | The paper is a clinical meta-analysis of efficacy and safety (HbA1c, lipids, AEs) and does not report pharmacokinetic parameters. |
| popPK | Dutta_2023_2 | irrelevant | 0 | 0 | The paper is a meta-analysis regarding rivoglitazone and mentions lobeglitazone only for efficacy comparison, containing no pharmacokinetic data. |
| popPK | Gunasinghe_2023 | irrelevant | 0 | 0 | The study is an in-silico docking and QSAR analysis of lobeglitazone as a potential HPV E1 inhibitor, not a pharmacokinetic study of lobeglitazone. |
| popPK | Hadi_2025 | irrelevant | 0 | 0 | The study investigates rosiglitazone in rats and does not involve lobeglitazone. |
| popPK | Han_2026 | irrelevant | 0 | 0 | The paper is a review of PPAR roles in pancreatic diseases and does not contain pharmacokinetic parameters for lobeglitazone. |
| popPK | Hong_2023 | irrelevant | 0 | 0 | The paper is a clinical trial evaluating efficacy and safety (HbA1c, body composition) of lobeglitazone, containing no pharmacokinetic or population PK data. |
| popPK | Jang_2018 | irrelevant | 0 | 0 | The paper is a structural biology study of PPARγ-ligand complexes and in vitro pharmacology, containing no pharmacokinetic disposition parameters for lobeglitazone. |
| popPK | Jang_2020 | irrelevant | 1 | 0 | This is a bioequivalence study for drug-drug interaction that only reports ratio estimates (within 80-125%) and relative changes, without providing the absolute quantitative pharmacokinetic disposition parameters (such as CL, V, or ka) for lobeglitazone. |
| popPK | Jin_2021 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on cancer cell migration and invasion, reporting no pharmacokinetic parameters for lobeglitazone. |
| popPK | Joshi_2024 | irrelevant | 0 | 0 | The paper is a Phase III efficacy/safety trial focused on HbA1c changes and does not report pharmacokinetic parameters or disposition data. |
| popPK | Jung_2015 | irrelevant | 1 | 0 | The study evaluates the effect of warfarin on lobeglitazone's pharmacokinetics (stating it was unaffected) but does not report specific quantitative parameters (CL, V, ka) for lobeglitazone, focusing instead on warfarin ratios. |
| PD | Jung_2015 | not_relevant | 0 | 0 | The study is a drug-drug interaction assessment comparing warfarin PK/PD with and without lobeglitazone; it does not report a concentration- or dose-response relationship for lobeglitazone itself, nor does it provide numeric PD parameters (e.g., Emax, EC50) for lobeglitazone. |
| popPK | Kim_2011 | relevant | 8 | 2 | The study is a relevant human PK trial for lobeglitazone, but the specific quantitative parameter values (e.g., CL, V, ka, t1/2) are not present in the provided text, only qualitative trends (dose proportionality, accumulation ratio). |
| popPK | Kim_2015 | relevant | 6 | 0 | The study is a PK interaction trial for lobeglitazone, but the evidence only contains geometric mean ratios of PK parameters; specific quantitative values for clearance, volume, or half-life are not provided in the text. |
| popPK | Kim_2019 | relevant | 5 | 0 | The study is a PK study of lobeglitazone in humans, but the provided evidence only contains qualitative comparisons (ratios, percentages) and no specific numeric values for CL, V, t1/2, or ka. |
| popPK | Kim_2020 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety trial reporting HbA1c and metabolic syndrome outcomes, containing no pharmacokinetic disposition parameters (CL, V, ka, etc.) for lobeglitazone. |
| popPK | Kim_2021 | irrelevant | 4 | 1 | The study reports PK drug-drug interaction ratios (90% CIs) for lobeglitazone but does not provide the absolute quantitative disposition parameters (CL, V, t1/2, etc.) required for extraction. |
| popPK | Kim_2022 | irrelevant | 0 | 0 | This is a real-world safety and efficacy study focusing on adverse events and HbA1c changes, with no pharmacokinetic parameters (CL, V, ka, t1/2) reported. |
| popPK | Kim_2023 | irrelevant | 4 | 3 | The study reports steady-state PK interaction ratios (GMR) for lobeglitazone, not absolute population PK parameters (CL, V, Q) or detailed monotherapy disposition metrics required for population modeling. |
| popPK | Kim_2024 | irrelevant | 0 | 0 | The study focuses on gut microbiota modulation and efficacy mechanisms in diabetic mice, reporting no pharmacokinetic parameters for lobeglitazone. |
| PD | Kim_2024 | not_relevant | 1 | 0 | The paper is a mechanistic microbiome study in mice that qualitatively mentions reducing drug doses to IC50 levels but does not report any numeric PD parameters, concentration-effect curves, or PK/PD modeling for lobeglitazone. |
| popPK | Kim_2026 | irrelevant | 0 | 0 | This is a mechanistic study focusing on vascular permeability and fluid retention, reporting no pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| popPK | Lee_2015 | relevant | 8 | 4 | The paper reports ADME/PK parameters for lobeglitazone in rats, including bioavailability and distribution, but specific quantitative values for clearance, volume, or rate constants are not explicitly listed in the provided evidence text. |
| PGx | Lee_2015 | not_relevant | 0 | 0 | The study describes preclinical pharmacokinetics in rats and does not report any human gene variants or genotypes affecting lobeglitazone. |
| popPK | Lee_2015_3 | relevant | 4 | 2 | Study characterizes lobeglitazone metabolism in rats with limited quantitative kinetic data (M1 formation rate) but lacks full PK parameters (CL, V, t1/2). |
| popPK | Lee_2017 | irrelevant | 0 | 0 | The paper is a structural biology study focusing on crystal structures and binding affinities of PPARγ with lobeglitazone, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Lee_2018 | irrelevant | 3 | 3 | The study reports non-compartmental PK parameters (AUC, Cmax) for a bioequivalence assessment but does not provide the specific disposition parameters (CL, V, Q, ka, half-life) or a compartmental/population model required for extraction. |
| popPK | Lee_2023 | irrelevant | 0 | 0 | The study is a metabolic efficacy trial in mice that does not report pharmacokinetic parameters (CL, V, T1/2) for lobeglitazone. |
| popPK | Moon_2020 | irrelevant | 3 | 0 | The study provides geometric mean ratios for Cmax and AUC to assess drug-drug interaction, but does not report absolute quantitative disposition parameters (CL, V, ka, t1/2 with V, or compartmental PK model parameters) for lobeglitazone. |
| popPK | Mudaliar_2024 | irrelevant | 0 | 0 | The paper describes an analytical chemistry method for quantifying drug concentration in bulk/tablets, not a pharmacokinetic study. |
| popPK | Nuwormegbe_2022 | irrelevant | 0 | 0 | The study is a mechanistic investigation of lobeglitazone's antifibrotic effects on corneal fibroblasts in vitro and contains no pharmacokinetic data. |
| popPK | Park_2014 | relevant | 4 | 8 | The study reports quantitative non-compartmental pharmacokinetic parameters (Cmax, AUC, tmax) for lobeglitazone in humans, though it does not explicitly report compartmental clearance, volume, or half-life. |
| popPK | Park_2020 | irrelevant | 0 | 0 | The study is a mechanistic/cell-imaging investigation of nanodrug delivery to foam cells, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, t1/2) for lobeglitazone. |
| popPK | Park_2022 | irrelevant | 3 | 2 | The study reports pharmacokinetic ratios (GMR) for lobeglitazone in hepatic impairment subjects rather than absolute quantitative disposition parameters like clearance (CL) or volume (V), and does not describe a population PK model. |
| popPK | Patel_2024 | irrelevant | 0 | 0 | The paper is a review of analytical methodologies (chromatography, spectrometry) for thiazolidinediones, not a pharmacokinetic study, and contains no PK parameters. |
| popPK | Patel_2026 | irrelevant | 0 | 0 | The paper describes an analytical method for quantification and stability testing, not a pharmacokinetic study. |
| popPK | Rocha_2020 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of PTP1B inhibition and does not report any pharmacokinetic parameters for lobeglitazone. |
| popPK | Ryang_2022 | irrelevant | 0 | 0 | This is a clinical efficacy and safety trial (REFIND study) focused on glucose-lowering effects, with no pharmacokinetic parameters reported. |
| popPK | Shin_2012 | irrelevant | 4 | 2 | The study reports standard descriptive PK metrics (Cmax, AUC) for lobeglitazone but does not provide the specific disposition parameters required, such as clearance, volume of distribution, or half-life. |
| popPK | Sil_2014 | irrelevant | 0 | 0 | no_text gate: only 77 chars of text extracted (&lt; 400) |
| PGx | Sil_2014 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (ketoconazole) rather than a pharmacogenomic effect (gene variant/genotype). |
| popPK | Sohn_2018 | irrelevant | 0 | 0 | The paper is a mechanistic/metabolic study on thermogenesis and insulin resistance in mice, lacking pharmacokinetic parameters such as clearance, volume of distribution, or half-life for lobeglitazone. |
| popPK | Song_2021 | irrelevant | 0 | 0 | This is a theranostic study focused on the anti-inflammatory efficacy of a nanodrug formulation containing lobeglitazone, and it does not report any pharmacokinetic disposition parameters (CL, V, etc.) for the drug. |
| popPK | Yang_2026 | irrelevant | 0 | 0 | The paper is a mechanistic study on transcriptomics and metabolomics (hepatic steatosis and pyruvate metabolism) in rats, and does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for lobeglitazone. |
| popPK | Zhang_2017 | irrelevant | 0 | 0 | The study is a medicinal chemistry paper reporting the design and in-vitro PPAR assays of new derivatives, with no pharmacokinetic data for lobeglitazone. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
