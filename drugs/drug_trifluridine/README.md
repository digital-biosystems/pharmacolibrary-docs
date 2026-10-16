<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01A&quot;,&quot;href&quot;:&quot;atc/S01A.md&quot;},{&quot;label&quot;:&quot;trifluridine&quot;}]"></div>

# trifluridine

- **generic name:** trifluridine
- **ATC codes:** `S01AD02`
- **DrugBank:** [DB00432](https://go.drugbank.com/drugs/DB00432) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Trifluridine is an antiviral eye medicine used to treat herpes simplex keratitis, an eye infection caused by the herpes simplex virus. It is an approved drug used mainly as an ophthalmological antiviral, and it is also being investigated as an anticancer treatment for colorectal and related cancers.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2359590](https://www.wikidata.org/wiki/Q2359590) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:09 | 9:37 | 0/0/0 | 0/1/1 | 0/0/0 | 681,789/5,192 | einfracz / qwen3.8-27b | 42 | 0/36 | 42/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Yoshino_2020_CIN](drugs/drug_trifluridine/pd_Yoshino_2020_CIN.md) | chemotherapy-induced neutropenia (CIN) biomarker turnover ← trifluridine | — | Yoshino T et al., Neutropenia and survival outcomes in me…, Annals of oncology : offici… (2020) | [10.1016/j.annonc.2019.10.005](https://doi.org/10.1016/j.annonc.2019.10.005) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Nahata_1987_herpes_keratitis_clinical_efficacy](drugs/drug_trifluridine/pd_Nahata_1987_herpes_keratitis_clinical_efficacy.md) | herpes keratitis (clinical efficacy) ← trifluridine · inhibition effect | — | Nahata MC, Clinical use of antiviral drugs, Drug intelligence & clinica… (1987) | [10.1177/106002808702100501](https://doi.org/10.1177/106002808702100501) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=trifluridine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| distribution | blood | `ALB` binder, `SLC29A1` substrate | DrugBank actor |
| distribution | liver | `SLC29A1` substrate | DrugBank actor |
| excretion | kidney | `SLC22A6` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: DNA (other/unknown), SLC28A1 (substrate), SLC29A2 (substrate), TK1 (substrate), TYMP (substrate), TYMS (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 369 matched, 67 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ariefta_2026 | irrelevant | 0 | 0 | The study evaluates quinoline derivatives as antimalarials and does not involve trifluridine or its pharmacokinetics. |
| PGx | Bolzacchini_2019 | not_relevant | 0 | 0 | The paper discusses TAS-102 (tegafur/gimeracil/oteracil), not trifluridine. |
| popPK | Buslov_2025 | irrelevant | 0 | 0 | The paper is a biocatalysis study on the synthesis of d-amino acids and does not contain any pharmacokinetic data or mention of trifluridine. |
| PGx | Chiang_2025 | not_relevant | 0 | 0 | The study is a Phase I trial assessing dose and safety; while UGT1A1 genotypes are mentioned regarding irinotecan safety/exclusion, no pharmacogenomic effect on trifluridine PK or PD is reported. |
| PGx | Clar-Marmaneu_2023 | not_relevant | 0 | 0 | The paper is a bibliometric study analyzing trends in colorectal cancer chemotherapy publications and does not report specific pharmacokinetic or pharmacodynamic data for trifluridine. |
| PGx | Conti_2023 | not_relevant | 0 | 0 | The paper is a retrospective cohort study on the efficacy and safety of TAS-102; it mentions DPYD polymorphisms but does not report a quantified change in pharmacokinetic or pharmacodynamic parameters for trifluridine. |
| popPK | Dahleh_2025 | irrelevant | 0 | 0 | The paper is a computational study on SARMs and does not report pharmacokinetic parameters for trifluridine. |
| popPK | Dhawa_2025 | irrelevant | 0 | 0 | The paper is a synthetic chemistry study on the enantioselective construction of halogenated stereocenters, not a pharmacokinetic study of trifluridine. |
| popPK | Dziubina_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of novel compounds DSZ-13 and DSZ-19 in mice, not trifluridine. |
| popPK | Fajana_2026 | irrelevant | 0 | 0 | The paper studies the pharmacological activities of Ficus exasperata leaf extracts and does not involve trifluridine or any pharmacokinetic analysis. |
| popPK | Fernández-García_2026 | irrelevant | 0 | 0 | The paper is a synthetic chemistry study reporting the photoelectrocatalytic synthesis of trifluridine, not a pharmacokinetic study of the drug itself. |
| popPK | Frybortova_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ozanimod in mice, not trifluridine. |
| PGx | Guadagni_2019 | not_relevant | 0 | 0 | The paper evaluates the clinical efficacy and safety of a chemotherapy regimen; it does not investigate the impact of gene variants on the pharmacokinetics or pharmacodynamics of trifluridine. |
| popPK | Hamers_2022 | irrelevant | 0 | 0 | The study reports quality of life and survival outcomes, not pharmacokinetic parameters. |
| popPK | Hara_2026 | irrelevant | 0 | 0 | The study focuses on the identification and efficacy of novel KDM5B inhibitors (JB-157 and JB-161) and does not investigate the pharmacokinetics of trifluridine. |
| popPK | Higashi-Kuwata_2025 | irrelevant | 0 | 0 | The paper is an in vitro antiviral study assessing the activity of trifluridine against Monkeypox virus, containing no pharmacokinetic or disposition parameter data. |
| popPK | Iuga_2026 | irrelevant | 0 | 0 | The paper studies SARS-CoV-2 PLpro inhibitors and does not mention trifluridine or its pharmacokinetics. |
| popPK | Jena_2026 | irrelevant | 0 | 0 | The paper focuses on the computational design of peptide-ligand conjugates for Nipah virus treatment and does not involve trifluridine or report its pharmacokinetic parameters. |
| PGx | Kasi_2016 | not_relevant | 0 | 0 | The paper reports on the association between clinical toxicity (neutropenia) and overall survival; it does not investigate specific gene variants or genotypes influencing trifluridine PK/PD. |
| popPK | Kumar_2026 | irrelevant | 0 | 0 | The paper describes a computational drug repurposing pipeline for fusion proteins and does not involve trifluridine or pharmacokinetic modeling. |
| popPK | Lee_2025 | irrelevant | 0 | 0 | The paper is a synthetic chemistry study regarding the synthesis of bicyclo[1.1.1]pentane derivatives and does not involve the drug trifluridine or any pharmacokinetic analysis. |
| popPK | Lochman_2026 | irrelevant | 0 | 0 | The study focuses on the biotransformation and metabolism of obefazimod in sheep and nematodes, not the pharmacokinetics of trifluridine. |
| popPK | Luo_2026 | irrelevant | 0 | 0 | The paper describes the pharmacokinetics of SARS-CoV-2 Mpro inhibitors (nirmatrelvir, FD3-32, etc.), not trifluridine. |
| popPK | Lusardi_2026 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on the anti-inflammatory effects of IPU 3l in endothelial cells and does not report pharmacokinetic parameters for trifluridine. |
| PGx | Marin_2020 | not_relevant | 3 | 2 | The paper is a general review of colorectal cancer resistance mechanisms and mentions trifluridine only as an example of a pyrimidine analog, without reporting specific pharmacogenomic effects on its PK/PD parameters. |
| popPK | McComic_2026 | irrelevant | 0 | 0 | The paper describes the pharmacokinetics of a novel isoxazoline compound (mCMV280) and its analogs, and does not contain data for trifluridine. |
| popPK | Melnyk_2026 | irrelevant | 0 | 0 | The paper describes a synthetic chemistry protocol for the deoxyfluorination of boronates and does not contain any pharmacokinetic data for trifluridine. |
| popPK | Modest_2025 | irrelevant | 0 | 0 | The paper is a clinical trial evaluating patient-reported outcomes (quality of life) and trifluridine is used only as a comparator drug, with no pharmacokinetic data reported. |
| popPK | Nardella_2025 | irrelevant | 0 | 0 | The paper studies an antimalarial kinase inhibitor in malaria models and contains no pharmacokinetic data for trifluridine. |
| popPK | Nicolai_2024 | irrelevant | 0 | 0 | The paper is a synthetic chemistry study on Lewis acid-catalyzed annulation reactions to synthesize bicyclo[4.1.1]octanes, with no mention of trifluridine or pharmacokinetic parameters. |
| PGx | Ottaiano_2024 | not_relevant | 1 | 5 | The study reports an association between a tumor gene variant (FGFR4) and clinical outcomes (survival/response), not a pharmacogenomic effect on pharmacokinetic or pharmacodynamic parameters of trifluridine. |
| popPK | Patel_2021 | irrelevant | 0 | 0 | This is a clinical efficacy trial for trifluridine/tipiracil that reports no pharmacokinetic parameters or quantitative disposition data. |
| PGx | Ratajewski_2015 | not_relevant | 0 | 0 | The paper reports trifluridine as a PXR activator based on cell screening, but does not report pharmacogenomic effects on PK or PD parameters. |
| PGx | Schmitt_2025 | not_relevant | 0 | 0 | The paper reports that trifluridine metabolism interferes with the measurement of uracilemia (a DPD phenotyping marker), but it does not report a pharmacogenomic variant effect on the PK or PD of trifluridine. |
| popPK | Schulz_2026 | irrelevant | 0 | 0 | The paper focuses on structure-based design of tyrosine kinase inhibitors for GIST (KIT/PDGFRA) and contains no data on trifluridine pharmacokinetics. |
| popPK | Schwegler_2026 | irrelevant | 0 | 0 | The paper is a structural biology study on the interaction of fluorinated inhibitors with Trypanosoma brucei tryparedoxin, not a pharmacokinetic study of trifluridine. |
| popPK | Singh_2026 | irrelevant | 0 | 0 | The paper is a computational study on mGluR5 modulators and does not involve trifluridine or report any PK parameters for it. |
| PGx | Suenaga_2017 | not_relevant | 0 | 0 | The paper reports associations between gene variants and clinical survival outcomes (OS/PFS) rather than specific pharmacokinetic or pharmacodynamic parameters (e.g., AUC, Cmax, tumor size change) of trifluridine. |
| popPK | Taieb_2025 | irrelevant | 0 | 0 | The paper is a Phase III clinical trial analysis focusing on health-related quality of life and performance status, with no pharmacokinetic data or disposition parameters reported. |
| popPK | Wali_2026 | irrelevant | 0 | 0 | The paper is a review on natural kinase inhibitors in lung cancer and does not contain any pharmacokinetic data or mention of trifluridine. |
| popPK | Wu_2024 | irrelevant | 0 | 0 | The paper is about computational drug design (generative AI) for tuberculosis targets, not the pharmacokinetics of trifluridine. |
| popPK | Xing_2026 | irrelevant | 0 | 0 | The paper describes a deep learning platform for drug discovery and design and does not contain any pharmacokinetic data or parameters for trifluridine. |
| popPK | Yang_2026 | irrelevant | 0 | 0 | The paper describes a deep learning model for drug discovery and reports IC50 values for a YTHDC2 inhibitor, containing no pharmacokinetic data for trifluridine. |
| popPK | van_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and pharmacodynamics of polymyxin B in mice, not trifluridine. |
| popPK | Łach_2026 | irrelevant | 0 | 0 | The paper is an in vitro neuroprotection study on PaPE-1 in mouse neurons and contains no pharmacokinetic data for trifluridine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
