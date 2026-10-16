<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;vorapaxar&quot;}]"></div>

# vorapaxar

- **generic name:** vorapaxar
- **ATC codes:** `B01AC26`
- **DrugBank:** [DB09030](https://go.drugbank.com/drugs/DB09030) · **PubChem:** [CID 10077130](https://pubchem.ncbi.nlm.nih.gov/compound/10077130)
- **molar mass:** 492.5817 g/mol (C29H33FN2O4) — DrugBank
- **groups:** approved

## About

Vorapaxar is a platelet aggregation inhibitor used to reduce the risk of cardiovascular events in patients who have had a myocardial infarction. It is an approved medicine, though its marketing authorisation in the European Union has been withdrawn, so its use is now limited to other regions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7941753](https://www.wikidata.org/wiki/Q7941753) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 18:50 | 1:58 | 0/0/0 | 1/0/0 | 0/0/0 | 175,263/4,344 | einfracz / qwen3.8-27b | 6 | 2/8 | 6/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Zhou_2025_FOXO1](drugs/drug_vorapaxar/pd_Zhou_2025_FOXO1.md) | FOXO1 ← vorapaxar · target-mediated drug disposition | — | Zhou Q et al., Vorapaxar enhanced mitochondria-associa…, Cell reports. Medicine (2025) | [10.1016/j.xcrm.2025.102371](https://doi.org/10.1016/j.xcrm.2025.102371) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=vorapaxar).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` unknown | DrugBank actor |
| absorption | kidney | `ABCB1` unknown | DrugBank actor |
| absorption | liver | `ABCB1` unknown | DrugBank actor |
| absorption | placenta | `ABCB1` unknown | DrugBank actor |
| absorption | small intestine | `ABCB1` unknown | DrugBank actor |
| absorption | testis | `ABCB1` unknown | DrugBank actor |
| metabolism | heart | `CYP2J2` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP2J2` substrate, `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: F2R (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 48 matched, 45 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kosoglou_2012_2.pdf` | Kosoglou T et al., Pharmacokinetics and pharmacodynamics o…, European journal of clinica… (2012) | popPK | 5 | [10.1007/s00228-012-1217-6](https://doi.org/10.1007/s00228-012-1217-6) | [22315147](https://pubmed.ncbi.nlm.nih.gov/22315147) | The paper reports key quantitative PK parameters (bioavailability, Cmax range, Tmax, half-life) for vorapaxar in humans, though it lacks explicit values for clearance or volume of distribution. |
| `Komatsu_2023.pdf` | Komatsu H et al., Identification of SARS-CoV-2 main prote…, Journal of biomolecular str… (2023) | pd | 4 | [10.1080/07391102.2021.2024260](https://doi.org/10.1080/07391102.2021.2024260) | [34984963](https://www.ncbi.nlm.nih.gov/pubmed/34984963) | metadata signals extractable PD data (EC50) |
| `Kosoglou_2013.pdf` | Kosoglou T et al., The effect of multiple doses of ketocon…, Journal of clinical pharmac… (2013) | pgx | 7 | [10.1002/jcph.20](https://doi.org/10.1002/jcph.20) | [23426761](https://www.ncbi.nlm.nih.gov/pubmed/23426761) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-14T18:49:53.741877+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alexopoulos_2018 | irrelevant | 0 | 0 | This is a clinical review of combination antiplatelet therapy efficacy and safety, containing no pharmacokinetic parameters or disposition data for vorapaxar. |
| PD | Alexopoulos_2018 | not_relevant | 1 | 0 | The text is a qualitative review of combination antiplatelet therapy and mentions vorapaxar only in the context of bleeding risk and general efficacy, without providing any numeric PD parameters, concentration-effect curves, or dose-response data. |
| popPK | Alexopoulos_2018_2 | irrelevant | 0 | 0 | The paper is a review of platelet reactivity and anti-platelet therapy during PCI that mentions vorapaxar only as a therapeutic agent, providing no pharmacokinetic data or numeric parameters. |
| PD | Alexopoulos_2018_2 | not_relevant | 1 | 0 | The text is a qualitative introduction/review discussing the role of vorapaxar in PCI without reporting any specific numeric PD parameters, concentration-effect curves, or dose-response data. |
| popPK | Chaudhary_2021 | irrelevant | 1 | 0 | The paper is a clinical review summarizing efficacy and safety outcomes, and no quantitative pharmacokinetic parameter values (CL, V, t1/2) are present in the provided evidence. |
| PD | Chaudhary_2021 | not_relevant | 2 | 0 | The text is a review summary that mentions pharmacodynamics and clinical efficacy but does not provide specific numeric PD parameters (e.g., Emax, EC50) or detailed concentration-effect data for vorapaxar. |
| popPK | Cheng_2015 | irrelevant | 1 | 0 | The paper is a review of pharmacology, efficacy, and safety of vorapaxar that discusses clinical trials and general PK/PD findings but does not provide quantitative disposition parameters (CL, V, ka, half-life, or population PK model parameters). |
| PD | Cheng_2015 | not_relevant | 1 | 0 | The text is a narrative review summarizing clinical trial outcomes and safety profiles, but it does not report specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or detailed exposure-response data for vorapaxar. |
| PGx | Chew_2012 | not_relevant | 5 | 0 | The paper is a general review mentioning vorapaxar's bleeding risk but does not report any pharmacogenomic data or genetic variants affecting its PK or PD parameters. |
| PGx | Coccheri_2012 | not_relevant | 0 | 0 | The paper is a general review of antiplatelet therapy that mentions vorapaxar only as a new drug that might overcome resistance, without reporting any specific pharmacogenomic effect on its PK or PD parameters. |
| popPK | DAmico_2026 | irrelevant | 0 | 0 | The study is a claims analysis of drug-drug interaction signals for major bleeding involving clopidogrel and anticoagulants; vorapaxar is not the subject, nor are any pharmacokinetic parameters reported. |
| PD | DAmico_2026 | not_relevant | 0 | 0 | The paper is a pharmacoepidemiological study using claims data to screen for drug-drug interaction signals (rate ratios) and does not contain any pharmacokinetic or pharmacodynamic modeling, concentration-effect data, or numeric PD parameters for vorapaxar. |
| PGx | Dash_2015 | not_relevant | 0 | 0 | The paper mentions vorapaxar only in the context of clinical trial outcomes (efficacy and bleeding) without reporting any pharmacogenomic effects on its pharmacokinetic or pharmacodynamic parameters. |
| popPK | Fan_2020 | irrelevant | 0 | 0 | The paper describes the synthesis of vorapaxar analogues (e.g., compound 3d) rather than studying vorapaxar itself, and no quantitative PK parameters for vorapaxar are reported. |
| PD | Fan_2020 | not_relevant | 3 | 2 | The paper reports IC50 values for vorapaxar and analogues in an in vitro assay, which is a potency metric, but does not provide an exposure-response or dose-response curve, Emax, or PK/PD model parameters for the drug in vivo or as a dynamic relationship. |
| popPK | Franchi_2019 | irrelevant | 0 | 0 | The study reports pharmacodynamic effects (platelet aggregation assays) of vorapaxar, not pharmacokinetic parameters (CL, V, etc.). |
| popPK | Franchi_2020 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of platelet aggregation and clotting, not a pharmacokinetic study reporting clearance, volume, or concentration-time parameters. |
| popPK | Ghosal_2011 | irrelevant | 1 | 0 | The study focuses on in vitro identification of CYP enzymes responsible for vorapaxar metabolism, reporting no quantitative disposition parameters like clearance or volume. |
| PD | Ghosal_2011 | not_relevant | 0 | 0 | The paper focuses on in vitro metabolic identification of CYP enzymes and does not report any pharmacodynamic or exposure-response data for vorapaxar. |
| PGx | Ghosal_2011 | not_relevant | 0 | 0 | The paper identifies CYP enzymes involved in vorapaxar metabolism but does not report pharmacogenomic effects (genotype-based differences) on PK or PD parameters. |
| popPK | Hrubša_2026 | irrelevant | 0 | 0 | This is a platelet function study using vorapaxar as a pharmacological challenge agent, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Jeon_2026 | irrelevant | 0 | 0 | Vorapaxar is used only as a pharmacological inhibitor/comparator to validate the mechanism of gestodene in a wound healing study, with no PK parameters reported. |
| PD | Jeon_2026 | not_relevant | 0 | 0 | The paper focuses on the pharmacology of gestodene as a PAR1 PAM; vorapaxar is used only as a qualitative pharmacological inhibitor to confirm mechanism, with no exposure-response or dose-response analysis or numeric PD parameters reported for vorapaxar. |
| popPK | Knight_2016 | irrelevant | 0 | 0 | The paper describes the synthesis and in-vitro biological potency (IC50) of vorapaxar analogues, containing no pharmacokinetic or disposition parameters. |
| PD | Knight_2016 | not_relevant | 2 | 2 | The paper reports in vitro IC50 values for analogues, which are potency metrics, but does not provide a pharmacodynamic exposure-response model, dose-effect curve, or PK/PD analysis for vorapaxar. |
| popPK | Komatsu_2023 | irrelevant | 0 | 0 | no_text gate: only 141 chars of text extracted (&lt; 400) |
| popPK | Kosoglou_2012 | irrelevant | 1 | 0 | Vorapaxar is used as a co-administered agent to assess its effect on warfarin's PK/PD, not as the subject of PK parameter estimation. |
| PD | Kosoglou_2012 | not_relevant | 0 | 0 | The study assesses the effect of vorapaxar on warfarin PK/PD (drug interaction) rather than characterizing the exposure-response relationship of vorapaxar itself, and no numeric PD parameters for vorapaxar are reported. |
| PGx | Kosoglou_2012 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (vorapaxar on warfarin PK/PD), not a pharmacogenomic effect on vorapaxar. |
| PD | Kosoglou_2012_2 | not_relevant | 0 | 0 | The text describes a Phase 1 PK study in renal impairment focusing on plasma concentration parameters (AUC, Cmax) and does not report any pharmacodynamic endpoints, exposure-response relationships, or numeric PD parameters. |
| popPK | Kosoglou_2012_3 | relevant | 3 | 0 | The abstract describes a PK study of vorapaxar but contains no quantitative disposition parameter values (CL, V, t1/2, etc.). |
| PD | Kosoglou_2012_3 | not_relevant | 3 | 1 | The abstract describes qualitative PD outcomes (complete inhibition) and dose comparisons but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect curve. |
| popPK | Kosoglou_2012_4 | irrelevant | 1 | 0 | The provided text is an abstract that reports pharmacodynamic effects (platelet aggregation inhibition) and study design but lacks specific numeric pharmacokinetic parameters (CL, V, t1/2, AUC) in the evidence block. |
| PGx | Kosoglou_2013 | not_relevant | 0 | 0 | The study investigates drug-drug interactions with ketoconazole and rifampin, not pharmacogenomic variants or genotypes. |
| popPK | Kosoglou_2013_2 | irrelevant | 1 | 0 | The study investigates the effect of vorapaxar on the pharmacokinetics of digoxin, and reports no quantitative disposition parameters (CL, V, ka) for vorapaxar itself. |
| PD | Kosoglou_2013_2 | not_relevant | 0 | 0 | The study assesses the effect of vorapaxar on digoxin pharmacokinetics and digoxin pharmacodynamics (ECG), but does not report a pharmacodynamic or exposure-response relationship for vorapaxar itself. |
| popPK | Lee_2013 | irrelevant | 0 | 0 | The paper focuses on the discovery of new PAR1 antagonist scaffolds and only mentions vorapaxar as a comparator in a platelet aggregation assay, providing no pharmacokinetic parameters for vorapaxar. |
| PD | Lee_2013 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values for novel compounds and qualitatively compares their platelet aggregation activity to vorapaxar, but it does not provide numeric PD parameters or an exposure-response curve for vorapaxar itself. |
| popPK | Moschonas_2015 | irrelevant | 1 | 0 | The paper is a review that briefly describes pharmacokinetic properties but contains no original quantitative disposition parameters or numeric values in the provided evidence. |
| PD | Moschonas_2015 | not_relevant | 2 | 1 | The text is a review article that qualitatively describes pharmacodynamic properties but does not provide specific numeric PD parameters or extractable concentration-effect curves for vorapaxar. |
| popPK | Moschonas_2017 | irrelevant | 0 | 0 | This is an in-vitro study on PAR-4 receptor mechanism and peptide analogues; vorapaxar is only mentioned as context, with no PK parameters reported. |
| PD | Moschonas_2017 | not_relevant | 0 | 0 | The paper focuses on the molecular mechanism of PAR-4 activation by peptide analogues and does not report any pharmacodynamic or exposure-response data for vorapaxar. |
| popPK | Nilsen_2023 | irrelevant | 0 | 0 | The study assesses pharmacodynamic endothelial biomarkers (e.g., Angiopoietin-2, vWF) rather than pharmacokinetic disposition parameters (CL, V, ka). |
| PD | Nilsen_2023 | not_relevant | 2 | 0 | The paper reports group-level differences in biomarker levels between vorapaxar and placebo groups but does not provide individual concentration data or fit a PK/PD model, so no numeric PD parameters (Emax, EC50, etc.) are extractable. |
| PGx | Nwadiugwu_2025 | not_relevant | 0 | 0 | The paper discusses vorapaxar only as one of several FDA-approved drugs in a molecular docking and dynamics study for drug repurposing in Alzheimer's disease, with no analysis of how specific gene variants or genotypes alter its pharmacokinetic or pharmacodynamic parameters. |
| popPK | Packard_2012 | irrelevant | 0 | 0 | This is a general review of emerging antiplatelet therapies that discusses vorapaxar qualitatively but does not report any quantitative pharmacokinetic parameters. |
| PD | Packard_2012 | not_relevant | 1 | 0 | The text is a qualitative review of emerging antiplatelet therapies and does not report any specific numeric pharmacodynamic parameters or exposure-response data for vorapaxar. |
| popPK | Paclíková_2025 | irrelevant | 0 | 0 | The study is an ex-vivo pharmacodynamic assessment of platelet aggregation resistance in diabetic patients, not a pharmacokinetic study of vorapaxar disposition. |
| popPK | Rafeedheen_2015 | irrelevant | 0 | 0 | The paper is a review of novel antiplatelet agents that mentions vorapaxar as a new class of approved drug but provides no quantitative pharmacokinetic parameters or models. |
| PD | Rafeedheen_2015 | not_relevant | 1 | 0 | The text is a general review of antiplatelet agents that mentions vorapaxar's approval and mechanism but provides no specific pharmacodynamic data, exposure-response analysis, or numeric PD parameters. |
| popPK | Ranjan_2023 | irrelevant | 0 | 0 | Vorapaxar is mentioned only as a comparator in an in-vitro anti-leishmanial screening study; no PK parameters are reported. |
| popPK | Storey_2014 | irrelevant | 0 | 0 | The study reports pharmacodynamic endpoints (platelet aggregation, biomarkers) rather than pharmacokinetic parameters (CL, V, half-life). |
| PGx | Tricoci_2018 | not_relevant | 1 | 1 | The paper investigates the association between a PAR4 gene variant and bleeding outcomes (safety) but does not report changes in any pharmacokinetic (e.g., Cmax, AUC) or direct pharmacodynamic (e.g., platelet inhibition) parameters of vorapaxar. |
| popPK | Wichaiyo_2026 | irrelevant | 0 | 0 | This is a review of antiplatelet drugs that mentions vorapaxar qualitatively but does not report specific quantitative PK parameters for it. |
| PD | Wichaiyo_2026 | not_relevant | 1 | 0 | The text is a general review that qualitatively describes vorapaxar's mechanism and pharmacokinetic properties (slow dissociation, long half-life) but does not provide any numeric PD parameters or exposure-response data. |
| PGx | Wichaiyo_2026 | not_relevant | 1 | 2 | The paper is a general review of antiplatelet drugs; it mentions vorapaxar's PK (half-life) but does not report any pharmacogenomic effects on vorapaxar. |
| popPK | Zhou_2025 | irrelevant | 0 | 0 | The study investigates vorapaxar's mechanism of action (ferroptosis induction via FOXO1/HMOX1) in cancer cells and mice, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | unknown_2015 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| PD | unknown_2015 | not_relevant | 0 | 0 | The provided text is only a header for a conference abstract collection and contains no specific data, results, or PD parameters for vorapaxar. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | no_text gate: only 101 chars of text extracted (&lt; 400) |
| PD | unknown_2018 | not_relevant | 0 | 0 | The provided text is only a header for conference abstracts and contains no specific data, analysis, or mention of vorapaxar pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
