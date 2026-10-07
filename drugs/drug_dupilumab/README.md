<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;dupilumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dupilumab_Kovalenko2020_population_estimates&quot;,&quot;label&quot;:&quot;Kovalenko_2020_population_estimates&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dupilumab/Dupilumab_Kovalenko2020_population_estimates.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dupilumab_Takechi2025_reference&quot;,&quot;label&quot;:&quot;Takechi_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dupilumab/Dupilumab_Takechi2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# dupilumab

- **generic name:** dupilumab
- **ATC codes:** `D11AH05`
- **DrugBank:** [DB12159](https://go.drugbank.com/drugs/DB12159) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Dupilumab, a monoclonal antibody, is used to treat atopic dermatitis, prurigo, esophageal disease, asthma, and sinusitis. It is approved and authorised in the European Union, and is also being investigated for additional uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5315925](https://www.wikidata.org/wiki/Q5315925) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:18 | 7:01 | 2/2/1 | 2/0/0 | 0/0/0 | 269,183/46,512 | einfracz / qwen3.8-27b | 10 | 1/9 | 10/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Kovalenko_2020_population_estimates](drugs/drug_dupilumab/Dupilumab_Kovalenko2020_population_estimates.md) | ▶ model + simulator | 1-compartment, oral | 4 (+8 cov.) | Kovalenko P et al., Base and Covariate Population Pharmacok…, Clinical pharmacology in dr… (2020) | [10.1002/cpdd.780](https://doi.org/10.1002/cpdd.780) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Takechi_2025_reference](drugs/drug_dupilumab/Dupilumab_Takechi2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Takechi T et al., Quantitative Evaluation of Nemolizumab…, Dermatology and therapy (2025) | [10.1007/s13555-025-01554-4](https://doi.org/10.1007/s13555-025-01554-4) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q61 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Kovalenko_2020_population_estimate_of_covariate_coefficient](drugs/drug_dupilumab/Dupilumab_Kovalenko2020_population_estimate_of_covariate_coe.md) | — | 1-compartment (no model) | 2 | Kovalenko P et al., Base and Covariate Population Pharmacok…, Clinical pharmacology in dr… (2020) | [10.1002/cpdd.780](https://doi.org/10.1002/cpdd.780) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Nguyen_2026_reference](drugs/drug_dupilumab/Dupilumab_Nguyen2026_reference.md) | — | 1-compartment (no model) | 0 | Nguyen JH et al., Population Pharmacokinetics of Dupiluma…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70233](https://doi.org/10.1002/cpt.70233) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Zhang_2021_reference](drugs/drug_dupilumab/Dupilumab_Zhang2021_reference.md) | — | 1-compartment (no model) | 7 (+6 cov.) | Zhang L et al., Population pharmacokinetic analysis of…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12667](https://doi.org/10.1002/psp4.12667) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Briggs_2023_EASI](drugs/drug_dupilumab/pd_Briggs_2023_EASI.md) | Eczema Area and Severity Index (EASI) ← dupilumab · indirect response — drug inhibits the production of Eczema Area and Severity Index (EASI) | model (no simulator) | Briggs E et al., Integrated Exposure-Response of Dupilum…, Pharmaceutical research (2023) | [10.1007/s11095-023-03616-8](https://doi.org/10.1007/s11095-023-03616-8) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Zhang_2025_FEV1](drugs/drug_dupilumab/pd_Zhang_2025_FEV1.md) | FEV1 ← dupilumab · direct Emax (saturable) effect | model (no simulator) | Zhang L et al., Semi-Mechanistic Population Pharmacokin…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70057](https://doi.org/10.1002/psp4.70057) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Briggs_2023_IGA](drugs/drug_dupilumab/pd_Briggs_2023_IGA.md) | Investigator’s Global Assessment (IGA) ← dupilumab · indirect response — drug inhibits the production of Investigator’s Global Assessment (IGA) | model (no simulator) | Briggs E et al., Integrated Exposure-Response of Dupilum…, Pharmaceutical research (2023) | [10.1007/s11095-023-03616-8](https://doi.org/10.1007/s11095-023-03616-8) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=dupilumab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: IL13 (antibody), IL13 (inhibitor), IL4 (antibody), IL4 (inhibitor), IL4R (antibody), IL4R (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 20 matched, 12 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 5  ·  extracted 2  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alexander_2024 | irrelevant | 0 | 0 | The study is a clinical efficacy and safety cohort analysis comparing treatment outcomes, not a pharmacokinetic study, and contains no disposition parameters. |
| popPK | Berbalk_2026 | irrelevant | 0 | 0 | The study reports on concomitant medication usage and clinical outcomes (symptom scores), not pharmacokinetic disposition parameters (CL, V, etc.) for dupilumab. |
| popPK | Briggs_2023 | irrelevant | 3 | 0 | The paper reports an integrated exposure-response (E-R) model, not a population pharmacokinetic study, and while it references prior PK models, the specific numeric PK parameters (CL, V, etc.) are stated to be in the supplementary materials which are not provided. |
| popPK | Campion_2026 | irrelevant | 0 | 0 | The paper is a clinical outcomes study of dupilumab in CRSwNP patients and does not report any pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Kamal_2022_2 | relevant | 10 | 2 | The paper describes a population PK model for dupilumab in humans, but specific numeric parameter estimates (CL, V, ka) are not provided in the text; references are made to Table S1 and Figures for these values which are not included. |
| popPK | Kovalenko_2021 | relevant | 10 | 4 | The paper is a population PK study of dupilumab, but the specific numeric parameter tables (Table 1, 2, 3, 4) are referenced but not fully included in the provided text; only qualitative trends and some specific values (e.g., beta half-life ~25 days, V change 2.18 to 1.03 L) are visible in the narrative. |
| popPK | Takechi_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of nemolizumab; dupilumab is only a comparator in an efficacy meta-analysis, not the subject of the PK modeling. |
| popPK | Zhang_2025 | relevant | 4 | 1 | The paper describes a population PK/PD model for dupilumab but focuses on PD endpoints (FEV1) and references prior studies for PK parameter values, which are not explicitly provided in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 08:14 UTC</sub>
