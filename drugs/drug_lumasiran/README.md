<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;lumasiran&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lumasiran_Sten2023_model_simultaneously_fitted_to_all_data_e&quot;,&quot;label&quot;:&quot;Sten_2023_model_simultaneously_fitted_to_all_data_estimate_se&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lumasiran/Lumasiran_Sten2023_model_simultaneously_fitted_to_all_data_e.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# lumasiran

- **generic name:** lumasiran
- **ATC codes:** `A16AX18`
- **DrugBank:** [DB15935](https://go.drugbank.com/drugs/DB15935) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Lumasiran, a small interfering RNA medicine, is used to treat primary hyperoxaluria. It is authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q100692768](https://www.wikidata.org/wiki/Q100692768) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:51 | 1:34 | 1/0/1 | 0/0/0 | 0/0/0 | 151,840/7,051 | einfracz / qwen3.8-27b | 5 | 0/7 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.20).">human + animal</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Sten_2023_model_simultaneously_fitted_to_all_data_estimate_se](drugs/drug_lumasiran/Lumasiran_Sten2023_model_simultaneously_fitted_to_all_data_e.md) | ▶ model + simulator | 2-compartment, oral | 6 | Sten S et al., Plasma Pharmacokinetics of N-Acetylgala…, Clinical pharmacokinetics (2023) | [10.1007/s40262-023-01314-7](https://doi.org/10.1007/s40262-023-01314-7) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.20).">human + animal</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q49 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Sten_2023_model_fitted_to_olpasiran_data_only_estimate_se](drugs/drug_lumasiran/Lumasiran_Sten2023_model_fitted_to_olpasiran_data_only_estim.md) | — | 2-compartment (no model) | 6 | Sten S et al., Plasma Pharmacokinetics of N-Acetylgala…, Clinical pharmacokinetics (2023) | [10.1007/s40262-023-01314-7](https://doi.org/10.1007/s40262-023-01314-7) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=lumasiran) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | `CYP2C8` inhibitor | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: Hydroxyacid oxidase 1 mRNA (antisense oligonucleotide).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 25 matched, 23 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 1  ·  needs_review 1  ·  rejected 0  ·  stale 2
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abosalha_2022 | irrelevant | 0 | 0 | The paper is a general review of siRNA therapeutics and does not report specific quantitative pharmacokinetic parameters for lumasiran. |
| PD | Abosalha_2022 | not_relevant | 1 | 0 | The text is a general review of siRNA therapeutics and does not contain specific numeric PD parameters or exposure-response data for lumasiran. |
| popPK | An_2024 | irrelevant | 2 | 0 | The paper is a review article summarizing PK/PD of GalNAc-conjugated siRNAs and does not report original quantitative disposition parameters for lumasiran. |
| PD | An_2024 | not_relevant | 2 | 1 | The text is an abstract for a review article that discusses PK/PD concepts generally but does not present specific numeric PD parameters or extractable exposure-response data for lumasiran. |
| popPK | Batra_2026 | irrelevant | 0 | 0 | The paper describes in vitro studies of siRNA immunotherapy in lung cancer cells, unrelated to lumasiran pharmacokinetics. |
| PD | Batra_2026 | not_relevant | 0 | 0 | The paper studies a different drug (BioRNA/PD-L1-siRNA) and does not report any pharmacodynamic or exposure-response data for lumasiran. |
| popPK | Cronin_2025 | irrelevant | 1 | 0 | The paper is a review of oligonucleotide drugs and mentions lumasiran only as an approved siRNA in a list, without providing any specific quantitative pharmacokinetic parameters for it. |
| PD | Cronin_2025 | not_relevant | 1 | 0 | The paper is a review discussing the challenges of evaluating drug-drug interactions for RNA therapeutics and does not report specific numeric PD parameters or exposure-response models for lumasiran. |
| popPK | Fan_2026 | relevant | 6 | 0 | The paper validates a PK/PD platform using lumasiran data (Figures 4U-4W), but specific numeric parameter values for lumasiran are not listed in the provided text, being referenced only in Tables S1/S2 or within figures. |
| PD | Fan_2026 | not_relevant | 0 | 0 | The paper describes a computational platform for GalNAc-siRNA development and does not report specific pharmacodynamic or exposure-response data for lumasiran. |
| popPK | Fontana_2026 | irrelevant | 0 | 0 | The study focuses on vutrisiran, a different drug, and lumasiran is only mentioned as a comparator for immunogenicity characteristics. |
| popPK | Frishberg_2021 | irrelevant | 2 | 0 | The abstract describes a clinical trial evaluating safety and pharmacodynamics (urinary oxalate) but does not report quantitative pharmacokinetic disposition parameters (CL, V, t1/2) for lumasiran in the provided text. |
| PD | Frishberg_2021 | not_relevant | 3 | 2 | The abstract reports qualitative target engagement (glycolate increase) and a mean maximal reduction in urinary oxalate (75%), but does not provide numeric PD parameters (Emax, EC50) or a concentration-effect curve. |
| popPK | George_2026 | irrelevant | 0 | 0 | The paper focuses on single-cell transcriptomics and oncology mechanisms of siRNA targeting FXR1 in ovarian cancer, with no mention of lumasiran or its pharmacokinetics. |
| PD | George_2026 | not_relevant | 0 | 0 | The paper studies a novel siRNA (siFXR1-LNA) for ovarian cancer, not the drug lumasiran, and does not report any pharmacodynamic or exposure-response parameters for lumasiran. |
| PGx | Gupta_2022 | not_relevant | 0 | 0 | The paper discusses lumasiran's clinical efficacy in PH1 but does not report any pharmacogenomic data (gene variants affecting PK/PD) for the drug. |
| popPK | Jeon_2022 | irrelevant | 1 | 0 | The paper is a minireview discussing PK/PD modeling for siRNAs including lumasiran, but the evidence provided contains no original quantitative parameter values (CL, V, ka, etc.). |
| PD | Jeon_2022 | not_relevant | 2 | 0 | The text is a minireview abstract that discusses the general state of PK/PD modeling for siRNAs but does not present specific numeric PD parameters or extractable exposure-response data for lumasiran. |
| popPK | Loganathan_2023 | irrelevant | 0 | 0 | The paper is a review of non-coding RNAs in human health and disease and contains no pharmacokinetic data or mention of the drug lumasiran. |
| PD | Loganathan_2023 | not_relevant | 0 | 0 | The paper is a general review of non-coding RNAs as biomarkers and therapeutic targets and does not contain any pharmacokinetic or pharmacodynamic data for lumasiran. |
| popPK | McDougall_2022 | irrelevant | 2 | 0 | The paper is a review of nonclinical ADME data for GalNAc-siRNAs in general and does not report specific quantitative PK parameter values for lumasiran in the provided text. |
| PD | McDougall_2022 | not_relevant | 2 | 0 | The text is a minireview summarizing nonclinical ADME and PK/PD translation principles for GalNAc-siRNAs generally, without providing specific numeric PD parameters or extractable concentration-effect curves for lumasiran. |
| popPK | Michael_2023 | irrelevant | 2 | 0 | The paper reports pharmacodynamic outcomes (plasma oxalate reduction) rather than quantitative pharmacokinetic parameters (CL, V, t1/2) for lumasiran. |
| PD | Michael_2023 | not_relevant | 2 | 1 | The paper reports clinical efficacy outcomes (percent change in plasma oxalate) but does not provide a concentration-effect or dose-response analysis with numeric PD parameters (e.g., Emax, EC50) or a PK/PD model fit. |
| popPK | Ranasinghe_2023 | irrelevant | 0 | 0 | The paper is a general introductory review of siRNA technology and does not report specific quantitative pharmacokinetic parameters for lumasiran. |
| PD | Ranasinghe_2023 | not_relevant | 1 | 0 | The text is a general introductory review of siRNA technology and mentions lumasiran only as a licensed example without providing specific pharmacodynamic data, exposure-response curves, or numeric PD parameters. |
| PGx | Soncin_2026 | not_relevant | 2 | 3 | The study assesses the clinical response to lumasiran (reduction in oxalate) against alanine-glyoxylate aminotransferase genotype, but reports no significant association, meaning it does not demonstrate a pharmacogenomic effect on lumasiran's PK or PD parameters. |
| PD | Sten_2023 | not_relevant | 0 | 0 | The paper focuses exclusively on the pharmacokinetics (PK) of GalNAc-siRNAs, including dose-proportionality and compartmental models, but does not report any pharmacodynamic (PD) or exposure-response relationships for lumasiran. |
| popPK | Yue_2019 | irrelevant | 0 | 0 | The paper is a review of substrate reduction therapy for inborn errors of metabolism and does not report pharmacokinetic parameters for lumasiran. |
| PD | Yue_2019 | not_relevant | 0 | 0 | The text is a general review of substrate reduction therapy for inborn errors of metabolism and does not contain specific data, models, or numeric PD parameters for lumasiran. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for nedosiran, not the subject drug lumasiran. |
| PD | Zhang_2024 | not_relevant | 0 | 0 | The paper reports PK/PD modeling for nedosiran, not lumasiran. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for nedosiran, not lumasiran; lumasiran is only mentioned as a previously approved comparator therapy. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 17:50 UTC</sub>
