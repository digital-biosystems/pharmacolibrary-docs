<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;quizartinib&quot;}]"></div>

# quizartinib

- **generic name:** quizartinib
- **ATC codes:** `L01EX11`, `L01XE`
- **DrugBank:** [DB12874](https://go.drugbank.com/drugs/DB12874) · **PubChem:** [CID 24889392](https://pubchem.ncbi.nlm.nih.gov/compound/24889392)
- **molar mass:** 560.67 g/mol (C29H32N6O4S) — DrugBank
- **groups:** approved, investigational

## About

Quizartinib is a protein kinase inhibitor used to treat acute myeloid leukemia. It is an approved medicine, authorised in the European Union, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7272714](https://www.wikidata.org/wiki/Q7272714) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| quizartinib | parent | 560.67 | C29H32N6O4S | DrugBank | [24889392](https://pubchem.ncbi.nlm.nih.gov/compound/24889392) | Kang_2020, Solana-Altabella_2025, Vaddady_2024 |
| AC886 | metabolite | 576.67 | — | the paper | — | Vaddady_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:37 | 8:29 | 0/3/2 | 1/0/0 | 0/0/0 | 178,381/46,206 | openai / gpt-6-luna | 5 | 0/5 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q61 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Solana-Altabella_2025_mean](drugs/drug_quizartinib/Quizartinib_SolanaAltabella2025_mean.md) | — | 2-compartment (no model) | 10 | Solana-Altabella A et al., Validation of pharmacokinetic model for…, European journal of clinica… (2025) | [10.1007/s00228-025-03909-4](https://doi.org/10.1007/s00228-025-03909-4) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q31 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Vaddady_2024_final](drugs/drug_quizartinib/Quizartinib_Vaddady2024_final.md) | — | parent + metabolite (no model) | 6 (+4 cov.) | Vaddady P et al., Population pharmacokinetic analysis of…, Clinical and translational… (2024) | [10.1111/cts.70074](https://doi.org/10.1111/cts.70074) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Kang_2020_reference](drugs/drug_quizartinib/Quizartinib_Kang2020_reference.md) | — | parent + metabolite (no model) | 5 (+22 cov.) | Kang D et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2020) | [10.1002/jcph.1680](https://doi.org/10.1002/jcph.1680) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Solana-Altabella_2025_median](drugs/drug_quizartinib/Quizartinib_SolanaAltabella2025_median.md) | — | 2-compartment (no model) | 9 | Solana-Altabella A et al., Validation of pharmacokinetic model for…, European journal of clinica… (2025) | [10.1007/s00228-025-03909-4](https://doi.org/10.1007/s00228-025-03909-4) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [Vaddady_2024_final_final_quizartinib_model](drugs/drug_quizartinib/Quizartinib_Vaddady2024_final_final_quizartinib_model.md) | — | parent + metabolite (no model) | 11 (+5 cov.) | Vaddady P et al., Population pharmacokinetic analysis of…, Clinical and translational… (2024) | [10.1111/cts.70074](https://doi.org/10.1111/cts.70074) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Kang_2021_QTcF](drugs/drug_quizartinib/pd_Kang_2021_QTcF.md) | QTcF ← quizartinib and AC886 · direct sigmoid Emax (Hill) effect | — | Kang D et al., Concentration-QTc analysis of quizartin…, Cancer chemotherapy and pha… (2021) | [10.1007/s00280-020-04204-y](https://doi.org/10.1007/s00280-020-04204-y) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=quizartinib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `CYP3A5` substrate, `CYP3A7` substrate, `UGT1A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate, `UGT1A1` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: FLT3 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 5  ·  extracted 0  ·  needs_review 2  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kang_2021 | irrelevant | 1 | 0 | This is a human concentration–QTc analysis, not a disposition study, and no quizartinib PK parameter values are reported here. |
| popPK | Olíva_2026 | irrelevant | 0 | 0 | This patient-reported-outcomes trial reports no quantitative quizartinib pharmacokinetic parameters. |
| popPK | Vaddady_2024_2 | irrelevant | 2 | 0 | This human concentration–QTcF analysis reports pharmacodynamic parameters, while quizartinib disposition parameters are only referenced from another population-PK model. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 05:30 UTC</sub>
