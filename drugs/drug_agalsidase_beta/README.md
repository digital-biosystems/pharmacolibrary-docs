<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;agalsidase beta&quot;}]"></div>

# agalsidase beta

- **generic name:** agalsidase beta
- **ATC codes:** `A16AB04`
- **DrugBank:** [DB00103](https://go.drugbank.com/drugs/DB00103) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Agalsidase beta is an enzyme therapy used to treat Fabry disease, a lipid storage disorder. It is authorised in the European Union and remains in clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q20801779](https://www.wikidata.org/wiki/Q20801779) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=agalsidase_beta).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: Globotriaosylceramide (metabolizer), Globotriaosylceramide (target), M6PR (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 10:34 | 2:37 | 0/0/0 | 0/0/0 | 0/0/0 | 95,336/3,202 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 4/8 | 10/0 | 0 |

## Coverage

- **PubMed hits:** 77 matched, 71 returned
- **screened:** 4  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kim_2014.pdf` | Kim CO et al., First-in-human study with new recombina…, Journal of clinical pharmac… (2014) | popPK | 10 | [10.1002/jcph.262](https://doi.org/10.1002/jcph.262) | [24408305](https://pubmed.ncbi.nlm.nih.gov/24408305) | The study reports quantitative PK parameters (Cmax, AUC, t1/2, Cl) for agalsidase beta in healthy human subjects. |
| `Berstein_2024.pdf` | Berstein V et al., Comparative pharmacokinetics and pharma…, Molecular genetics and meta… (2024) | popPK | 8 | [10.1016/j.ymgmr.2024.101149](https://doi.org/10.1016/j.ymgmr.2024.101149) | [39435314](https://pubmed.ncbi.nlm.nih.gov/39435314) | The study reports PK parameters (Cmax, AUC) for agalsidase beta in humans, but the specific numeric values are not present in the provided abstract text. |

<sub>queue written 2026-10-05T10:34:00.290675+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Azevedo_2020 | not_relevant | 1 | 0 | The text is a general review of Fabry disease therapies and does not report specific pharmacokinetic or pharmacodynamic data, models, or numeric parameters for agalsidase beta. |
| popPK | Barbey_2004 | irrelevant | 0 | 0 | The paper is a review of clinical efficacy and disease mechanisms, containing no quantitative pharmacokinetic parameter values for agalsidase beta. |
| popPK | Barzel_2026 | irrelevant | 2 | 0 | This is a review article summarizing multiple studies without providing specific quantitative PK parameter values for agalsidase_beta in the text. |
| PD | Barzel_2026 | not_relevant | 3 | 0 | The paper is a review of population PK/PD models in lysosomal storage diseases and does not report specific numeric PD parameters (Emax, EC50, etc.) for agalsidase beta in the provided text. |
| popPK | Bazan-Socha_2007 | irrelevant | 0 | 0 | The paper is a clinical case report describing therapeutic outcomes and quality of life improvements, containing no pharmacokinetic parameters or quantitative disposition data. |
| popPK | Berstein_2024 | relevant | 8 | 2 | The study reports PK parameters (Cmax, AUC) for agalsidase beta in humans, but the specific numeric values are not present in the provided abstract text. |
| PD | Berstein_2024 | not_relevant | 1 | 0 | The text describes a PK bioequivalence study and mentions PD assessment but provides no numeric PD parameters, concentration-effect curves, or dose-response data. |
| popPK | Brussee_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of lucerastat, not agalsidase_beta. |
| PD | Brussee_2026 | not_relevant | 0 | 0 | The paper describes a population pharmacokinetic (PK) model for lucerastat, not agalsidase beta, and does not report any pharmacodynamic (PD) or exposure-response parameters. |
| popPK | Bénichou_2009 | irrelevant | 0 | 0 | The study is a retrospective analysis of immunogenicity and clinical efficacy (GL-3 levels, GFR) rather than a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| popPK | Choi_2008 | irrelevant | 0 | 0 | The study reports clinical efficacy and safety outcomes (GL-3 levels, renal function) rather than pharmacokinetic parameters (CL, V, t1/2) for agalsidase beta. |
| popPK | Clarke_2007 | irrelevant | 0 | 0 | The study investigates agalsidase alfa, not agalsidase beta, which is the required subject drug. |
| popPK | Deegan_2012 | irrelevant | 0 | 0 | The paper is a review discussing antibody responses and immunogenicity of agalsidase beta, not a pharmacokinetic study reporting quantitative disposition parameters. |
| popPK | Desnick_2006 | irrelevant | 0 | 0 | The paper is a clinical review of Fabry disease and enzyme replacement therapy (agalsidase alfa) and does not report quantitative pharmacokinetic parameters for agalsidase beta. |
| PGx | Desnick_2006 | not_relevant | 0 | 0 | The paper reviews the clinical spectrum and efficacy of agalsidase beta (Fabrazyme) in Fabry disease but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Dussol_2007 | irrelevant | 0 | 0 | The paper is a review of clinical efficacy (renal function) of enzyme replacement therapy and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for agalsidase beta. |
| PGx | Elliott_2019 | not_relevant | 0 | 0 | The paper is a methodological review on systematic literature reviews for Fabry disease and does not report specific pharmacogenomic effects on PK/PD parameters. |
| popPK | Germain_2007 | irrelevant | 0 | 0 | The paper reports long-term safety and efficacy (renal stabilization, GL-3 clearance) but does not report quantitative pharmacokinetic parameters (CL, V, t1/2) for agalsidase beta. |
| popPK | Germain_2024 | irrelevant | 0 | 0 | The paper is a review of pegunigalsidase alfa, and agalsidase beta is only mentioned as a comparator or background therapy without reporting its specific quantitative pharmacokinetic parameters. |
| PGx | Germain_2024 | not_relevant | 0 | 0 | The paper describes the clinical development and efficacy of pegunigalsidase alfa compared to agalsidase beta, but does not report pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PD | Goker-Alpan_2016 | not_relevant | 2 | 1 | The study reports time-course changes in biomarkers (lyso-GL-3) after a dose switch but does not provide concentration-effect data, PK parameters, or a fitted PD model with numeric parameters like Emax or EC50. |
| PD | Gregório_2021 | not_relevant | 3 | 2 | The paper describes a qualitative dose-dependent effect of chloroquine and a protective effect of agalsidase-beta in an in vitro cell assay, but it does not report specific numeric PD parameters (e.g., EC50, Emax) or a quantitative exposure-response model for agalsidase beta. |
| popPK | Guffon_2004 | irrelevant | 0 | 0 | The paper is a clinical case series assessing symptom improvement via questionnaires and does not report any pharmacokinetic parameters (CL, V, etc.) for agalsidase beta. |
| popPK | Gómez-Cerezo_2025 | irrelevant | 0 | 0 | The paper is a review of immunogenicity (anti-drug antibodies) in Fabry disease and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for agalsidase beta. |
| PD | Gómez-Cerezo_2025 | not_relevant | 1 | 0 | The paper is a review of immunogenicity (anti-drug antibodies) in Fabry disease and does not report any pharmacodynamic or exposure-response models or numeric PD parameters for agalsidase beta. |
| popPK | H_2012 | irrelevant | 0 | 0 | This is a clinical case report describing histological changes in Fabry disease after agalsidase beta treatment, not a pharmacokinetic study reporting quantitative disposition parameters. |
| PGx | H_2012 | not_relevant | 0 | 0 | The paper is a case report describing a novel mutation and histological response to therapy, but it does not report pharmacokinetic or pharmacodynamic parameters or their modulation by genotype. |
| popPK | Keating_2012 | irrelevant | 0 | 0 | The paper is a review of agalsidase alfa, and agalsidase beta is only mentioned as a comparator in clinical trials without reporting any quantitative pharmacokinetic parameters for it. |
| PD | Kizhner_2015 | not_relevant | 2 | 1 | The paper reports PK parameters (t1/2) and qualitative/percentage reductions in substrate (Gb3) levels, but does not provide a concentration-effect curve, Emax, EC50, or any formal PD model parameters for agalsidase beta or PRX-102. |
| popPK | Lenders_2016 | irrelevant | 0 | 0 | The study is a clinical observational trial assessing end-organ damage and clinical symptoms, not a pharmacokinetic study reporting quantitative disposition parameters. |
| popPK | Lenders_2021 | irrelevant | 0 | 0 | The paper is a clinical review of Fabry disease management and does not report original quantitative pharmacokinetic parameters for agalsidase_beta. |
| popPK | Lenders_2021_2 | irrelevant | 0 | 0 | The paper is a clinical review of Fabry disease treatments that mentions agalsidase-beta only as a comparator or standard of care, without reporting any original quantitative pharmacokinetic parameters (CL, V, etc.) for it. |
| popPK | Lenders_2023 | irrelevant | 1 | 0 | The study is an in-vitro immunological characterization of antibody effects on enzyme stability, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, t1/2) for agalsidase_beta in vivo. |
| popPK | Lenders_2024 | irrelevant | 0 | 0 | no_text gate: only 233 chars of text extracted (&lt; 400) |
| popPK | Lidove_2016 | irrelevant | 0 | 0 | The paper is a clinical review of Fabry disease treatments and does not report quantitative pharmacokinetic parameters for agalsidase beta. |
| popPK | Lubanda_2009 | irrelevant | 0 | 0 | The study evaluates histological efficacy (globotriaosylceramide clearance) rather than pharmacokinetic parameters, and no PK values are reported. |
| popPK | Matucci_2026 | irrelevant | 0 | 0 | The paper is a review discussing immunogenicity and clinical management of Fabry disease, containing no original quantitative pharmacokinetic parameter values for agalsidase_beta. |
| PD | Matucci_2026 | not_relevant | 1 | 0 | The text is a qualitative review of immunogenicity and general PK/PD differences between agalsidase-α and β, containing no numeric PD parameters or exposure-response data. |
| PD | Morimoto_2018 | not_relevant | 1 | 0 | The paper is a non-clinical biosimilar comparison that qualitatively states JR-051 and agalsidase beta have similar PK and efficacy (GL-3 reduction) but does not provide numeric PD parameters, dose-response curves, or quantitative exposure-response data. |
| popPK | Nakamura_2020 | irrelevant | 2 | 0 | The study reports only summary bioequivalence ratios (AUC/Cmax) for a biosimilar and lacks specific quantitative disposition parameters (CL, V, t1/2) for agalsidase beta. |
| PD | Nakamura_2020 | not_relevant | 2 | 1 | The paper reports PK bioequivalence and PD biomarker stability (GL-3/lyso-GL-3 ratios) but does not provide an exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50). |
| PD | Nisticò_2021 | not_relevant | 2 | 0 | The text is a review article discussing the clinical differences and general PK/PD concepts of agalsidase alpha and beta, but it does not report specific numeric PD parameters (such as Emax, EC50, or slope) or an extractable concentration-effect curve for agalsidase beta. |
| popPK | Ortiz_2016 | irrelevant | 0 | 0 | The paper is a clinical registry analysis of severe clinical events (cardiac, renal, stroke) and does not report pharmacokinetic parameters (CL, V, t1/2) for agalsidase_beta. |
| popPK | Perez_2013 | irrelevant | 0 | 0 | The paper is a general review of modeling approaches for immunogenicity in therapeutic proteins and does not report specific quantitative PK parameters for agalsidase_beta. |
| PD | Perez_2013 | not_relevant | 1 | 0 | The paper is a review of modeling approaches for immunogenicity effects on pharmacokinetics (PK) and does not report specific pharmacodynamic (PD) or exposure-response parameters for agalsidase beta. |
| popPK | Ramaswami_2019 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial reporting on substrate (GL-3) levels and clinical outcomes, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, t1/2) for agalsidase beta. |
| popPK | Rodríguez_2017 | irrelevant | 0 | 0 | The paper describes the production and characterization of recombinant alpha-galactosidase A (for Fabry disease), not the pharmacokinetics of agalsidase beta (for Pompe disease). |
| popPK | Sakamaki_2014 | irrelevant | 0 | 0 | The paper is a clinical case report regarding the diagnosis of Fabry disease and does not report any pharmacokinetic parameters for agalsidase beta. |
| PD | Seo_2019 | not_relevant | 0 | 0 | The paper focuses on analytical chemistry methods (PGC-SPE and LC/MS/MS) for glycan characterization of agalsidase beta, containing no pharmacodynamic or exposure-response data. |
| popPK | Shima_2024 | irrelevant | 0 | 0 | The paper is a clinical case report focusing on biomarkers and disease severity, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume for agalsidase_beta. |
| popPK | Skrunes_2017 | irrelevant | 0 | 0 | The study is a clinical case series reporting histological outcomes (GL3 clearance/reaccumulation) rather than quantitative pharmacokinetic parameters. |
| PD | Sohn_2013 | not_relevant | 0 | 0 | The paper describes protein engineering and in vivo efficacy in mice but does not report any pharmacokinetic data, exposure-response analysis, or numeric PD parameters for agalsidase beta. |
| popPK | Spada_2019 | irrelevant | 0 | 0 | This is a systematic review of clinical outcomes (GL-3 levels, symptoms) rather than a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for agalsidase_beta. |
| PGx | Stamerra_2021 | not_relevant | 0 | 0 | The paper reports clinical efficacy (vascular function) of agalsidase-beta in Fabry disease patients but does not investigate how specific gene variants or genotypes alter the drug's pharmacokinetics or pharmacodynamics. |
| PD | Tsukimura_2024 | not_relevant | 2 | 1 | The paper compares biochemical characteristics and tissue incorporation qualitatively but does not report numeric exposure-response or dose-response PD parameters (e.g., Emax, EC50) for agalsidase beta. |
| popPK | Tøndel_2013 | irrelevant | 0 | 0 | The study reports renal histology and morphological outcomes, not pharmacokinetic parameters. |
| popPK | Tøndel_2022 | irrelevant | 0 | 0 | The paper is a clinical review discussing the mechanism of action and clinical outcomes of agalsidase beta, but it does not report any quantitative pharmacokinetic parameters (e.g., clearance, volume, half-life). |
| popPK | Undas_2004 | irrelevant | 0 | 0 | The paper is a clinical case report on enzyme replacement therapy for Fabry disease (alpha-galactosidase A) and does not study agalsidase_beta or report any pharmacokinetic parameters. |
| popPK | Warnock_2024 | irrelevant | 0 | 0 | The paper is a response to a commentary on immunogenicity in a clinical trial where agalsidase beta is a comparator, and it does not report quantitative pharmacokinetic parameters for agalsidase beta. |
| popPK | Weidemann_2003 | irrelevant | 0 | 0 | The study reports cardiac function and structural changes (strain rate, wall thickness) in response to therapy, not pharmacokinetic parameters like clearance or volume. |
| popPK | Wilcox_2004 | irrelevant | 0 | 0 | The paper reports clinical efficacy (GL-3 clearance, renal function) and safety of agalsidase beta, but does not report pharmacokinetic parameters (CL, V, t1/2) for the drug itself. |
| popPK | Wu_2021 | irrelevant | 2 | 0 | The study focuses on migalastat PK/PD with agalsidase beta as a comparator, and no quantitative PK parameters (CL, V, etc.) for agalsidase beta are provided in the evidence. |
| PD | Wu_2021 | not_relevant | 1 | 0 | The paper focuses on PBPK modeling of tissue distribution (PK) and compares biodistribution profiles; it does not report a pharmacodynamic (exposure-response or dose-response) model or numeric PD parameters (e.g., Emax, EC50) for agalsidase beta. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
