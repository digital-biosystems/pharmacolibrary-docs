<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;apremilast&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Apremilast_Okubo2021_typical_values_rse_for_model_parameters&quot;,&quot;label&quot;:&quot;Okubo_2021_typical_values_rse_for_model_parameters_and_covariate_effects&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_apremilast/Apremilast_Okubo2021_typical_values_rse_for_model_parameters.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Apremilast_Warren2025_reference&quot;,&quot;label&quot;:&quot;Warren_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_apremilast/Apremilast_Warren2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# apremilast

- **generic name:** apremilast
- **ATC codes:** `L04AA32`
- **DrugBank:** [DB05676](https://go.drugbank.com/drugs/DB05676) · **PubChem:** [CID 11561674](https://pubchem.ncbi.nlm.nih.gov/compound/11561674)
- **molar mass:** 460.5 g/mol (C22H24N2O7S) — DrugBank
- **groups:** approved, investigational

## About

Apremilast is an immunosuppressant used to treat inflammatory conditions such as psoriasis, psoriatic arthritis, and Behçet's disease. It is an approved medicine, authorised in the European Union, and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2858961](https://www.wikidata.org/wiki/Q2858961) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| apremilast | parent | 460.5 | C22H24N2O7S | DrugBank | [11561674](https://pubchem.ncbi.nlm.nih.gov/compound/11561674) | Okubo_2021, Warren_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:40 | 1:00 | 2/2/0 | 1/0/0 | 0/0/0 | 104,172/6,532 | einfracz / qwen3.8-27b | 3 | 0/3 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Okubo_2021_typical_values_rse_for_model_parameters_and_covariate_effects](drugs/drug_apremilast/Apremilast_Okubo2021_typical_values_rse_for_model_parameters.md) | ▶ model + simulator | 1-compartment, oral | 4 | Okubo Y et al., Population pharmacokinetic and exposure…, The Journal of dermatology (2021) | [10.1111/1346-8138.16068](https://doi.org/10.1111/1346-8138.16068) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Warren_2025_reference](drugs/drug_apremilast/Apremilast_Warren2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Warren RB et al., Population Pharmacokinetic-Pharmacodyna…, Dermatology and therapy (2025) | [10.1007/s13555-025-01371-9](https://doi.org/10.1007/s13555-025-01371-9) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Okubo_2021_geometric_mean_cv_geometric_mean](drugs/drug_apremilast/Apremilast_Okubo2021_geometric_mean_cv_geometric_mean.md) | — | 1-compartment (no model) | 4 | Okubo Y et al., Population pharmacokinetic and exposure…, The Journal of dermatology (2021) | [10.1111/1346-8138.16068](https://doi.org/10.1111/1346-8138.16068) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Okubo_2021_geometric_mean_geometric_cv](drugs/drug_apremilast/Apremilast_Okubo2021_geometric_mean_geometric_cv.md) | — | 1-compartment (no model) | 0 | Okubo Y et al., Population pharmacokinetic and exposure…, The Journal of dermatology (2021) | [10.1111/1346-8138.16068](https://doi.org/10.1111/1346-8138.16068) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Okubo_2021_PASI_50](drugs/drug_apremilast/pd_Okubo_2021_PASI_50.md) | PASI-50 ← apremilast · direct Emax (saturable) effect | — | Okubo Y et al., Population pharmacokinetic and exposure…, The Journal of dermatology (2021) | [10.1111/1346-8138.16068](https://doi.org/10.1111/1346-8138.16068) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Okubo_2021_PASI_75](drugs/drug_apremilast/pd_Okubo_2021_PASI_75.md) | PASI-75 ← apremilast · direct Emax (saturable) effect | — | Okubo Y et al., Population pharmacokinetic and exposure…, The Journal of dermatology (2021) | [10.1111/1346-8138.16068](https://doi.org/10.1111/1346-8138.16068) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Okubo_2021_sPGA](drugs/drug_apremilast/pd_Okubo_2021_sPGA.md) | sPGA response (0 or 1) ← apremilast · direct Emax (saturable) effect | — | Okubo Y et al., Population pharmacokinetic and exposure…, The Journal of dermatology (2021) | [10.1111/1346-8138.16068](https://doi.org/10.1111/1346-8138.16068) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=apremilast) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2A6` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CDK4 (inhibitor), CDK6 (inhibitor), PDE4 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 4  ·  extracted 2  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Coffey_2026 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic and discovery study for a novel PDE4 inhibitor (LT-104A), with apremilast mentioned only as a comparator drug, and no PK parameters for apremilast are reported. |
| popPK | Gu_2024 | irrelevant | 0 | 0 | The study focuses on the development of new PDE4 inhibitors (DCN and 7b-1) using apremilast only as a comparator for binding mode and indication, with no PK parameters reported for apremilast. |
| popPK | Vossen_2019 | irrelevant | 0 | 0 | The paper is a randomized clinical trial evaluating efficacy and safety for hidradenitis suppurativa, and it reports no pharmacokinetic parameters for apremilast. |
| popPK | Vossen_2019_2 | irrelevant | 0 | 0 | The study is a translational pharmacodynamic evaluation of inflammatory biomarkers in skin biopsies and does not report any pharmacokinetic parameters for apremilast. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 23:40 UTC</sub>
