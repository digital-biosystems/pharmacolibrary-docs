<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B03B&quot;,&quot;href&quot;:&quot;atc/B03B.md&quot;},{&quot;label&quot;:&quot;mecobalamin&quot;}]"></div>

# mecobalamin

- **generic name:** mecobalamin
- **ATC codes:** `B03BA05`
- **DrugBank:** [DB03614](https://go.drugbank.com/drugs/DB03614)
- **groups:** approved, investigational

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-19 00:34 | 12:41 | 0/0/0 | 1/0/0 | 0/0/0 | 290,736/5,118 | ollama / qwen3.8:27b-mtp-q8_0 | 13 | 0/11 | 12/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Mezcord_2026](drugs/drug_mecobalamin/pd_Mezcord_2026_bacterial_viable_count.md) | Mezcord V et al., Vitamin B12 promotes cefiderocol resist…, mBio (2026) | [10.1128/mbio.03760-25](https://doi.org/10.1128/mbio.03760-25) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Mezcord_2026](drugs/drug_mecobalamin/pd_Mezcord_2026_cefiderocol_MIC.md) | Mezcord V et al., Vitamin B12 promotes cefiderocol resist…, mBio (2026) | [10.1128/mbio.03760-25](https://doi.org/10.1128/mbio.03760-25) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=mecobalamin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: MTR (cofactor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 55 matched, 35 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hotta_2024.pdf` | Hotta K et al., Pharmacokinetic profiles of methylcobal…, Journal of pharmacological… (2024) | popPK | 9 | [10.1016/j.vascn.2024.107552](https://doi.org/10.1016/j.vascn.2024.107552) | [39245417](https://pubmed.ncbi.nlm.nih.gov/39245417) | The paper is a primary PK study for methylcobalamin (mecobalamin) in rats, but the provided evidence contains only qualitative descriptions (e.g., "complete bioavailability") and lacks specific numeric parameter values like CL, V, or t1/2. |

<sub>queue written 2026-09-19T00:33:10.514520+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bonato_2020 | irrelevant | 0 | 0 | The paper is a review on PFAS environmental pollution and oxidative stress, and does not contain any pharmacokinetic data for mecobalamin. |
| PD | Bonato_2020 | not_relevant | 0 | 0 | The paper is a review on PFAS environmental pollution and antioxidant responses, with no mention of mecobalamin or any pharmacodynamic modeling. |
| popPK | Csanaky_2001 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of arsenic species in rats, with methylcobalamin (mecobalamin) serving only as a mechanistic probe/inhibitor target rather than the subject drug for PK parameter estimation. |
| popPK | Cui_2025 | irrelevant | 0 | 0 | The paper is a bibliometric analysis of botanical interventions for diabetic neuropathy and does not contain any pharmacokinetic data or parameters for mecobalamin. |
| PD | Cui_2025 | not_relevant | 0 | 0 | The paper is a bibliometric analysis of botanical interventions for diabetic neuropathy and does not contain any pharmacokinetic or pharmacodynamic data for mecobalamin. |
| popPK | Devi_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cyanocobalamin (and its metabolite methylcobalamin), not mecobalamin. |
| popPK | Erickson_2024 | irrelevant | 0 | 0 | The paper focuses on AKT degraders and breast cancer signaling, with no mention of mecobalamin or pharmacokinetic parameters. |
| PD | Erickson_2024 | not_relevant | 0 | 0 | The paper focuses on AKT degraders (INY-05-040) and breast cancer cell lines, with no mention of mecobalamin or any pharmacodynamic modeling for it. |
| popPK | Gao_2026 | irrelevant | 0 | 0 | The paper is a clinical case report on nerve entrapment rehabilitation where mecobalamin is used as a co-administered injectate, with no pharmacokinetic parameters reported. |
| popPK | Gieselmann_2026 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of an HIV-1 broadly neutralizing antibody (007), not the drug mecobalamin. |
| PD | Gieselmann_2026 | not_relevant | 0 | 0 | The paper characterizes an HIV-1 broadly neutralizing antibody (007) and does not involve the drug mecobalamin or report any pharmacodynamic parameters for it. |
| popPK | Gómez-Perales_2021 | irrelevant | 0 | 0 | no_text gate: only 59 chars of text extracted (&lt; 400) |
| PD | Gómez-Perales_2021 | not_relevant | 0 | 0 | The paper discusses the concept of iodine allergy in nuclear medicine and does not contain any pharmacodynamic or exposure-response data for mecobalamin. |
| popPK | Halawani_2026 | irrelevant | 0 | 0 | The paper is a neuroscience study on axon regeneration and AhR signaling, and does not contain any pharmacokinetic data or parameters for mecobalamin. |
| PD | Halawani_2026 | not_relevant | 0 | 0 | The paper investigates the role of the aryl hydrocarbon receptor (AhR) in axon regeneration and does not involve the drug mecobalamin or report any pharmacodynamic parameters for it. |
| popPK | Hotta_2020 | irrelevant | 2 | 0 | The paper describes a bioanalytical method and mentions a PK study application, but no quantitative pharmacokinetic parameter values (CL, V, t1/2, etc.) are present in the provided evidence. |
| popPK | Hotta_2024 | relevant | 9 | 2 | The paper is a primary PK study for methylcobalamin (mecobalamin) in rats, but the provided evidence contains only qualitative descriptions (e.g., "complete bioavailability") and lacks specific numeric parameter values like CL, V, or t1/2. |
| popPK | Kashyap_2024 | irrelevant | 2 | 0 | The study investigates the bioavailability of cyanocobalamin (Vitamin B12), not mecobalamin, and while it uses a PK model, the subject drug is incorrect. |
| popPK | Koyama_1997 | irrelevant | 0 | 0 | The study investigates cyanide metabolism and vitamin B12 analogues in uraemic patients, not the pharmacokinetic disposition parameters (CL, V, etc.) of mecobalamin. |
| popPK | Liang_2024 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for lenalidomide, not mecobalamin. |
| PD | Liang_2024 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics (PPK) of lenalidomide and its association with adverse events, but it does not report a pharmacodynamic (PD) model or exposure-response relationship with numeric PD parameters (e.g., Emax, EC50). |
| popPK | Mezcord_2026 | irrelevant | 0 | 0 | The paper investigates the interaction between vitamin B12 (methylcobalamin) and cefiderocol in bacteria, focusing on resistance mechanisms and molecular docking, rather than reporting pharmacokinetic parameters for mecobalamin. |
| popPK | Msa_2026 | irrelevant | 0 | 0 | The paper is a clinical pilot study on micronutrient supplementation and biomarker shifts, not a pharmacokinetic study, and contains no PK parameters for mecobalamin. |
| PGx | Nakamura_2002 | not_relevant | 0 | 0 | The study examines the effect of MTHFR genotype on homocysteine levels and the efficacy of mecobalamin on methylmalonic acid, but does not report pharmacokinetic or pharmacodynamic parameters of mecobalamin itself (e.g., absorption, distribution, metabolism, or specific receptor response) modified by genotype. |
| popPK | Nureye_2025 | irrelevant | 0 | 0 | The paper is a review of medicinal plants for hypertension and does not mention mecobalamin or report any pharmacokinetic parameters for it. |
| PD | Nureye_2025 | not_relevant | 0 | 0 | The paper is a review of medicinal plants for hypertension in Ethiopia and does not contain any pharmacodynamic or exposure-response data for mecobalamin. |
| popPK | Papadopoulou_2025 | irrelevant | 0 | 0 | The paper is a review on marine bioactives for cosmetics and does not contain any pharmacokinetic data or mention of mecobalamin. |
| PD | Papadopoulou_2025 | not_relevant | 0 | 0 | The paper is a review on marine bioactives for cosmetics and does not contain any pharmacodynamic or exposure-response data for mecobalamin. |
| popPK | Pereira_2021 | irrelevant | 0 | 0 | The paper is a review on seaweed-derived neuroprotective agents and does not mention mecobalamin or report any pharmacokinetic parameters for it. |
| PD | Pereira_2021 | not_relevant | 0 | 0 | The paper is a review on seaweed diets and neurodegenerative diseases and does not contain any pharmacodynamic or exposure-response data for mecobalamin. |
| popPK | Sun_2015 | irrelevant | 0 | 0 | The study focuses on the population pharmacokinetics of the Qishe pill, and mecobalamin is only mentioned as a comparator drug in the background. |
| PD | Sun_2015 | not_relevant | 0 | 0 | The paper is a study protocol for population pharmacokinetics (PK) of a traditional Chinese medicine pill and does not report any pharmacodynamic (PD) or exposure-response data for mecobalamin. |
| popPK | Wang_2026 | irrelevant | 2 | 0 | The study focuses on oxcarbazepine as the primary subject for PK modeling, with mecobalamin serving only as a co-loaded agent without reported quantitative disposition parameters. |
| PD | Wang_2026 | not_relevant | 2 | 1 | The paper reports qualitative pharmacodynamic outcomes (pain threshold increase, neuropeptide normalization) and PK parameters (bioavailability, Tmax) but does not provide a concentration-effect or dose-response curve or numeric PD parameters (e.g., EC50, Emax) for mecobalamin. |
| popPK | Warita_2026 | irrelevant | 0 | 0 | The paper is a clinical practice guideline addendum that mentions mecobalamin as a therapy but does not report any quantitative pharmacokinetic parameters or models. |
| popPK | Zhang_2008 | irrelevant | 1 | 0 | The paper is a review of clinical efficacy and mechanism without original quantitative pharmacokinetic parameter values. |
| popPK | unknown_1998 | irrelevant | 2 | 0 | The text is a monograph overview/review of methylcobalamin pharmacokinetics without providing specific quantitative disposition parameters or original study data. |
| popPK | unknown_2015 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| PD | unknown_2015 | not_relevant | 0 | 0 | The provided text is only a header for a conference abstract collection and contains no specific data, analysis, or mention of mecobalamin pharmacodynamics. |
| popPK | unknown_2017 | irrelevant | 0 | 0 | no_text gate: only 20 chars of text extracted (&lt; 400) |
| PD | unknown_2017 | not_relevant | 0 | 0 | The provided text is a header for conference proceedings and contains no scientific content, data, or analysis regarding mecobalamin or any pharmacodynamic relationship. |
| popPK | unknown_2017_2 | irrelevant | 0 | 0 | no_text gate: only 71 chars of text extracted (&lt; 400) |
| PD | unknown_2017_2 | not_relevant | 0 | 0 | The provided text is only a title of a conference abstract collection and contains no data, analysis, or mention of mecobalamin pharmacodynamics. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | no_text gate: only 112 chars of text extracted (&lt; 400) |
| PD | unknown_2018 | not_relevant | 0 | 0 | The provided text is only a header for conference abstracts and contains no specific data, models, or parameters for mecobalamin. |
| popPK | unknown_2019 | irrelevant | 0 | 0 | no_text gate: only 65 chars of text extracted (&lt; 400) |
| PD | unknown_2019 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no data, analysis, or mention of mecobalamin pharmacodynamics. |
| popPK | unknown_2021 | irrelevant | 0 | 0 | no_text gate: only 85 chars of text extracted (&lt; 400) |
| PD | unknown_2021 | not_relevant | 0 | 0 | The provided text is only a header for conference abstracts and contains no specific data, models, or parameters for mecobalamin. |
| popPK | unknown_2022 | irrelevant | 0 | 0 | no_text gate: only 75 chars of text extracted (&lt; 400) |
| PD | unknown_2022 | not_relevant | 0 | 0 | The provided text is only a title of a conference abstract collection and contains no data, analysis, or mention of mecobalamin pharmacodynamics. |
| popPK | unknown_2023 | irrelevant | 0 | 0 | no_text gate: only 25 chars of text extracted (&lt; 400) |
| PD | unknown_2023 | not_relevant | 0 | 0 | The provided text is only a title/header for an abstract book and contains no data, results, or parameters regarding mecobalamin pharmacodynamics. |
| popPK | unknown_2023_2 | irrelevant | 0 | 0 | no_text gate: only 16 chars of text extracted (&lt; 400) |
| PD | unknown_2023_2 | not_relevant | 0 | 0 | The provided text is only a conference title and contains no data, analysis, or mention of mecobalamin pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
