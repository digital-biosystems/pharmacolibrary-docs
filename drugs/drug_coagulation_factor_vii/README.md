<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;coagulation factor VII&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;CoagulationFactorVii_Zenklusen2024_reference&quot;,&quot;label&quot;:&quot;Zenklusen_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_coagulation_factor_vii/CoagulationFactorVii_Zenklusen2024_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# coagulation factor VII

- **generic name:** coagulation factor VII
- **ATC codes:** `B02BD01`, `B02BD05`
- **DrugBank:** [DB13150](https://go.drugbank.com/drugs/DB13150) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Coagulation factor VII is a blood clotting protein used to treat or prevent bleeding caused by a lack or defect of this factor. It is an approved medicine, given as a blood coagulation factor product, and is also being studied for further uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q412850](https://www.wikidata.org/wiki/Q412850) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 21:37 | 11:30 | 1/2/1 | 0/0/0 | 0/0/0 | 763,877/41,790 | einfracz / qwen3.8-27b | 22 | 7/22 | 22/0 | 1 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Zenklusen_2024_reference](drugs/drug_coagulation_factor_vii/CoagulationFactorVii_Zenklusen2024_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Zenklusen I et al., Effect of Daridorexant on the Pharmacok…, Drugs in R&D (2024) | [10.1007/s40268-024-00456-8](https://doi.org/10.1007/s40268-024-00456-8) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.286). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Rivard_1994_reference](drugs/drug_coagulation_factor_vii/CoagulationFactorVii_Rivard1994_reference.md) | — | 1-compartment (no model) | 2 | Rivard GE et al., Clinical study of recovery and half-lif…, Transfusion (1994) | [10.1046/j.1537-2995.1994.341195065036.x](https://doi.org/10.1046/j.1537-2995.1994.341195065036.x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Faraj_2022_reference](drugs/drug_coagulation_factor_vii/CoagulationFactorVii_Faraj2022_reference.md) | — | general linear (no model) | 0 | Faraj A et al., Phase III dose selection of marzeptacog…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12872](https://doi.org/10.1002/psp4.12872) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Klitgaard_2008_reference](drugs/drug_coagulation_factor_vii/CoagulationFactorVii_Klitgaard2008_reference.md) | — | 1-compartment (no model) | 0 | Klitgaard T et al., Overview of the human pharmacokinetics…, British journal of clinical… (2008) | [10.1111/j.1365-2125.2007.03030.x](https://doi.org/10.1111/j.1365-2125.2007.03030.x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=coagulation_factor_vii).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: F10 (activator), F3 (activator), F9 (activator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 246 matched, 57 returned
- **screened:** 13  ·  **relevant:** 8
- **records:** 4  ·  extracted 1  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_7 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lindley_1994.pdf` | Lindley CM et al., Pharmacokinetics and pharmacodynamics o…, Clinical pharmacology and t… (1994) | popPK | 10 | [10.1038/clpt.1994.80](https://doi.org/10.1038/clpt.1994.80) | [8004880](https://pubmed.ncbi.nlm.nih.gov/8004880) | The abstract provides specific numeric values for clearance, volume of distribution (relative), mean residence time, and half-life for rFVIIa in humans. |
| `Rivard_1994.pdf` | Rivard GE et al., Clinical study of recovery and half-lif…, Transfusion (1994) | popPK | 10 | [10.1046/j.1537-2995.1994.341195065036.x](https://doi.org/10.1046/j.1537-2995.1994.341195065036.x) | [7974706](https://pubmed.ncbi.nlm.nih.gov/7974706) | The paper reports quantitative pharmacokinetic parameters including half-life and recovery for Factor VII in a two-compartment model. |
| `Mariani_1978.pdf` | Mariani G et al., Treatment of congenital factor VII defi…, Thrombosis and haemostasis (1978) | popPK | 9 | not captured | [705696](https://pubmed.ncbi.nlm.nih.gov/705696) | The study reports quantitative pharmacokinetic parameters (half-life and recovery) for coagulation factor VII in humans, with specific values (205 min mean, 88% mean recovery) explicitly stated in the text. |
| `Tiede_2011.pdf` | Tiede A et al., Safety and pharmacokinetics of subcutan…, Journal of thrombosis and h… (2011) | popPK | 9 | [10.1111/j.1538-7836.2011.04293.x](https://doi.org/10.1111/j.1538-7836.2011.04293.x) | [21489128](https://pubmed.ncbi.nlm.nih.gov/21489128) | The paper reports pharmacokinetic parameters for recombinant activated factor VII (rFVIIa), including half-life (t1/2) and bioavailability, which are quantitative disposition metrics for the subject drug. |
| `Inbal_1993.pdf` | Inbal A et al., Evaluation of solvent/detergent treated…, Blood coagulation & fibrino… (1993) | popPK | 6 | [10.1097/00001721-199308000-00011](https://doi.org/10.1097/00001721-199308000-00011) | [8218857](https://pubmed.ncbi.nlm.nih.gov/8218857) | Reports half-life of Factor VII in human patients treated with plasma, but lacks detailed PK parameters like clearance or volume. |
| `Gorkom_2020.pdf` | Gorkom BL et al., Pharmacokinetics and pharmacodynamics o…, Hematology (Amsterdam, Neth… (2020) | popPK | 5 | [10.1080/16078454.2019.1700329](https://doi.org/10.1080/16078454.2019.1700329) | [31852380](https://pubmed.ncbi.nlm.nih.gov/31852380) | The study reports PK parameters (t1/2, CL) for a fusion protein (rVIIa-FP) related to Factor VII in humans, but the evidence provided only contains relative comparisons (fold changes) rather than absolute numeric values. |
| `Hellebust_1998.pdf` | Hellebust H et al., Expression of the second epidermal grow…, Journal of biotechnology (1998) | pd | 4 | [10.1016/s0168-1656(98)00165-5](https://doi.org/10.1016/s0168-1656(98)00165-5) | [9866869](https://www.ncbi.nlm.nih.gov/pubmed/9866869) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-14T21:27:57.285794+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agersø_2012 | irrelevant | 2 | 0 | This is a review article discussing animal models for rFVIIa and new agents, but it does not report specific quantitative pharmacokinetic parameter values (CL, V, t1/2) for the subject drug in the provided text. |
| popPK | Ardeshir_2025 | irrelevant | 0 | 0 | The paper describes pharmacokinetics and efficacy of AAV-delivered HIV broadly neutralizing antibodies (3BNC117) in rhesus macaques, not coagulation_factor_vii. |
| PD | Ardeshir_2025 | not_relevant | 0 | 0 | The paper focuses on AAV gene therapy for HIV prevention in macaques and does not report any pharmacodynamic or exposure-response analysis for coagulation factor VII. |
| popPK | Avvisati_1980 | irrelevant | 2 | 0 | The study is an in-vitro assay validation comparing chromogenic and clotting methods for Factor VII levels, not a pharmacokinetic study of drug disposition (CL, V, etc.), although it mentions the half-life of an invalid metabolite. |
| popPK | Bern_2020 | irrelevant | 2 | 0 | The study reports a relative 3.6-fold increase in half-life for an engineered albumin-fusion of factor VII in mice, but lacks absolute quantitative PK parameters (CL, V, ka) for the drug itself, focusing instead on the delivery mechanism and relative half-life extension. |
| popPK | Bonsall_2016 | irrelevant | 0 | 0 | The paper is a virological study investigating the detection and epidemiology of pegiviruses (HHpgV-1/HPgV) in humans, and does not contain any pharmacokinetic data or parameters for coagulation factor VII. |
| popPK | Camidge_2005 | irrelevant | 1 | 0 | The study focuses on warfarin pharmacokinetics, and factor VII is only mentioned as a baseline pharmacodynamic marker with no quantitative PK parameters reported for the drug itself. |
| popPK | Carazo_2025 | irrelevant | 0 | 0 | The study investigates the effects of direct anticoagulants (heparin, dabigatran, rivaroxaban, apixaban) on coagulation parameters in type 1 diabetes patients and does not report pharmacokinetic parameters for coagulation factor VII. |
| PD | Carazo_2025 | not_relevant | 0 | 0 | The paper investigates the effect of direct anticoagulants (heparin, dabigatran, rivaroxaban, apixaban, argatroban) on coagulation times, not coagulation factor VII, and does not report a concentration-response curve or PD parameters for Factor VII. |
| popPK | Card_2014 | irrelevant | 0 | 0 | This is a case report on difenacoum (superwarfarin) poisoning; coagulation factor VII is only mentioned as a vitamin K-dependent protein affected by the antagonist, not as the subject drug for pharmacokinetic parameter estimation. |
| popPK | Chaudhary_2024 | irrelevant | 0 | 0 | The paper investigates the immunogenicity of lipid nanoparticles (LNPs) and is unrelated to the pharmacokinetics of coagulation factor VII. |
| PD | Chaudhary_2024 | not_relevant | 0 | 0 | The paper focuses on the immunogenicity of lipid nanoparticles (LNPs) and their interaction with TLR4/CD1d, not on the pharmacokinetics or pharmacodynamics of coagulation factor VII. |
| popPK | Chung_2023 | irrelevant | 0 | 0 | The paper is a review of QSP models of the coagulation cascade and does not report population pharmacokinetic parameters for the drug coagulation_factor_vii. |
| PD | Chung_2023 | not_relevant | 1 | 0 | The paper is a review of QSP models for the coagulation cascade and does not report specific numeric PD parameters (e.g., Emax, EC50) or exposure-response relationships for coagulation factor VII. |
| popPK | Dahlman_2017 | irrelevant | 0 | 0 | The study focuses on nanoparticle biodistribution and gene silencing, not the pharmacokinetics of coagulation_factor_vii. |
| PD | Dahlman_2017 | not_relevant | 0 | 0 | The paper describes a nanoparticle delivery method and biodistribution analysis, containing no pharmacodynamic or exposure-response data for coagulation factor VII. |
| popPK | Deng_2025 | irrelevant | 0 | 0 | The paper is about a machine learning workflow for drug design (Assay2Mol) and does not contain pharmacokinetic data for coagulation factor VII. |
| PD | Deng_2025 | not_relevant | 0 | 0 | The paper describes a machine learning workflow for drug design and does not report any pharmacodynamic or exposure-response data for coagulation factor VII. |
| PD | Dunn_1999 | not_relevant | 2 | 1 | The text is a qualitative review summarizing clinical efficacy and general pharmacodynamic observations (decreased PT/aPTT) without providing specific numeric PD parameters, concentration-effect curves, or formal PK/PD modeling data. |
| popPK | Falkenhagen_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of warfarin and the pharmacodynamics of blood coagulation (including Factor VII levels), but does not report PK parameters for coagulation factor VII itself as a dosed drug. |
| PD | Faraj_2022 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model and exposure simulations for dose selection, but it does not report a pharmacodynamic (PD) model, exposure-response relationship, or numeric PD parameters (e.g., Emax, EC50) for coagulation factor VII. |
| popPK | Fazavana_2016 | irrelevant | 2 | 1 | The study is mechanistic/in-vivo binding analysis in mice reporting residence time, not a population pharmacokinetic model with quantitative CL/V parameters. |
| popPK | Ferrarese_2019 | irrelevant | 0 | 0 | The study investigates fusion proteins of coagulation factor X (FX), not the pharmacokinetics of coagulation factor VII (FVII). |
| popPK | Gandhi_2024 | irrelevant | 2 | 0 | The study characterizes a bispecific antibody (HMB-001) that modifies FVIIa pharmacokinetics, but it does not report standard quantitative disposition parameters (CL, V, ka) for coagulation_factor_vii itself; specific plasma levels for FVIIa are referenced in Supplementary Table 6 which is not included in the provided evidence. |
| popPK | Gopal_2023 | irrelevant | 0 | 0 | The study focuses on the physical immobilization and release kinetics of Factor VII from a polymer membrane, not the pharmacokinetic disposition (CL, V, etc.) of the drug in a biological system. |
| popPK | Gorkom_2020 | relevant | 5 | 2 | The study reports PK parameters (t1/2, CL) for a fusion protein (rVIIa-FP) related to Factor VII in humans, but the evidence provided only contains relative comparisons (fold changes) rather than absolute numeric values. |
| popPK | Granovski_2018 | irrelevant | 1 | 0 | The paper describes a purification method for recombinant Factor VII and does not provide population pharmacokinetic parameters for a subject drug. |
| popPK | Kahl_2024 | irrelevant | 0 | 0 | This is a systematic review on digital technologies for coagulation disorders, not a pharmacokinetic study, and contains no quantitative PK parameters for coagulation factor VII. |
| PD | Kahl_2024 | not_relevant | 0 | 0 | The paper is a systematic review of digital technologies in hereditary coagulation disorders and does not report any pharmacodynamic or exposure-response data for factor VII. |
| PD | Kavlie_2004 | not_relevant | 2 | 2 | The paper reports kinetic parameters (Km, Vmax reduction) for a mutant protein and IC50 for a synthetic peptide inhibitor, but does not report a pharmacodynamic exposure-response or dose-response relationship for the drug coagulation factor VII itself. |
| popPK | Kjaer_1989 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of oral contraceptives (levonorgestrel and gestodene) and their effects on coagulation factor VII levels, rather than characterizing the pharmacokinetic parameters of coagulation factor VII itself. |
| popPK | Kuzel_1988 | irrelevant | 2 | 0 | The paper is a clinical case report describing surgical management and dosage adjustments, lacking a pharmacokinetic model or derived quantitative disposition parameters (CL, V). |
| popPK | Lopez-Vilchez_2011 | irrelevant | 2 | 2 | The study is an in-vitro mechanistic investigation of rFVIIa redistribution into platelets, and while it cites a literature-derived half-life (2.7h) for context, it does not report original quantitative disposition parameters (CL, Vd) from a PK model. |
| popPK | Mohammed_2008 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of warfarin (and the pharmacodynamics of clotting factors), not coagulation_factor_vii. |
| PD | Nishimura_2010 | not_relevant | 0 | 0 | The paper reports IC50 values for inhibitors of PHBP autoactivation, not a pharmacodynamic exposure-response or dose-response relationship for coagulation factor VII itself. |
| popPK | Ochoa_2021 | irrelevant | 0 | 0 | The paper describes a computational docking protocol and does not report pharmacokinetic parameters for coagulation_factor_vii. |
| PD | Ochoa_2021 | not_relevant | 0 | 0 | The paper describes a computational molecular docking protocol (dockECR) for virtual screening and contains no pharmacodynamic, exposure-response, or dose-response data for coagulation factor VII or any other drug. |
| popPK | Pan_2022 | irrelevant | 0 | 0 | The paper studies a bispecific antibody (TF-TCB) targeting tissue factor for cancer immunotherapy, not the pharmacokinetics of coagulation factor VII. |
| popPK | Patrassi_1993 | irrelevant | 0 | 0 | The study uses Factor VII as a biomarker for liver function recovery, not a pharmacokinetic study of the drug coagulation_factor_vii. |
| popPK | Retout_2020 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for emicizumab, not coagulation_factor_vii. |
| PD | Retout_2020 | not_relevant | 3 | 1 | The paper focuses on population PK modeling and provides only a descriptive, qualitative assessment of the exposure-bleeding rate relationship without fitting a formal PD model or reporting numeric PD parameters (e.g., Emax, EC50). |
| popPK | Russick_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Factor VIII (FVIII) and its mRNA delivery, not Coagulation Factor VII. |
| popPK | Sarode_2020 | irrelevant | 0 | 0 | The paper models Factor X and Factor II pharmacokinetics, not Factor VII, which is the subject drug required for this screen. |
| PD | Takahashi_1993 | not_relevant | 2 | 1 | The paper describes a qualitative dose-dependent increase in procoagulant activity by LPS and a parallelism with Factor VII, but it does not report a pharmacodynamic model or numeric PD parameters (e.g., EC50, Emax) for a drug's exposure-response relationship. |
| popPK | Toon_1987 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of warfarin, using Factor VII clotting time only as a pharmacodynamic endpoint, rather than modeling the PK of coagulation_factor_vii itself. |
| popPK | Tuddenham_1982 | irrelevant | 0 | 0 | The study investigates Factor VIII pharmacokinetics, not Coagulation Factor VII. |
| PD | Wirtz_2008 | not_relevant | 0 | 0 | The study explicitly reports that melatonin levels were not significantly associated with coagulation factor VII (FVII:C) levels (P = 0.49), and no numeric PD parameters for FVII are provided. |
| popPK | Yamaguchi_2025 | irrelevant | 0 | 0 | The study investigates the oral bioavailability of an RNA drug (TY1), and Factor VII is only mentioned as the target of a control siRNA (siFVII) to test systemic delivery, not as a subject drug with PK parameters. |
| popPK | Yoneyama_2018 | irrelevant | 0 | 0 | The study is a population pharmacokinetic analysis of emicizumab (a bispecific antibody), not coagulation_factor_vii. |
| popPK | Zanon_2023 | irrelevant | 0 | 0 | The paper focuses on coagulation_factor_xiii (FXIII), not coagulation_factor_vii. |
| PD | Zanon_2023 | not_relevant | 0 | 0 | The paper focuses on Factor XIII (FXIII) pharmacokinetics and clinical outcomes, not Factor VII (FVII), and does not report any exposure-response or dose-response PD parameters. |
| popPK | Zenklusen_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of midazolam and warfarin (and the pharmacodynamics of Factor VII) to assess drug-drug interactions with daridorexant, not the pharmacokinetics of Factor VII itself. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The paper focuses on a computational QSAR modeling methodology for general drug discovery and does not contain any pharmacokinetic data for coagulation_factor_vii. |
| PD | Zhang_2024 | not_relevant | 0 | 0 | The paper describes a machine learning method (Topological Regression) for QSAR modeling on ChEMBL datasets and does not report any pharmacodynamic or exposure-response analysis for coagulation factor VII. |
| popPK | Zufferey_2025 | irrelevant | 0 | 0 | The paper is a study protocol for Tranexamic Acid (TXA), a different drug, and does not report pharmacokinetic parameters for coagulation factor VII. |
| PD | Zufferey_2025 | not_relevant | 2 | 2 | The paper is a study protocol for a future trial and does not report actual experimental data or fitted PD parameters, only citing assumed values (Emax 40%, ED50 400 mg) from a prior meta-analysis for design purposes. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 21:28 UTC</sub>
