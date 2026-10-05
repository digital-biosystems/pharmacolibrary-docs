<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;idursulfase&quot;}]"></div>

# idursulfase

- **generic name:** idursulfase
- **ATC codes:** `A16AB09`
- **DrugBank:** [DB01271](https://go.drugbank.com/drugs/DB01271) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Idursulfase is an enzyme replacement therapy used to treat mucopolysaccharidosis II (Hunter syndrome). It is authorised in the European Union and used as an approved medicine for this rare condition.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q415801](https://www.wikidata.org/wiki/Q415801) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 11:10 | 1:32 | 0/0/0 | 0/0/0 | 0/0/0 | 42,790/2,334 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 1/6 | 6/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=idursulfase) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: Dermatan sulfate (aggregation inhibitor), Dermatan sulfate (cleavage), Heparan sulfate (aggregation inhibitor), Heparan sulfate (cleavage), IDS (other).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 21 matched, 20 returned
- **screened:** 4  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Argueta_2025 | not_relevant | 2 | 5 | The paper reports associations between IDS genotype and disease biomarkers (NfL, substrate burden) and clinical outcomes, but does not report pharmacokinetic or pharmacodynamic parameters of the drug idursulfase itself. |
| PGx | Aronovich_1996 | not_relevant | 0 | 0 | The paper describes the molecular basis of a genetic disorder (MPS I/II) and enzyme activity levels, not the pharmacokinetics or pharmacodynamics of the drug idursulfase. |
| popPK | Azadeh_2018 | irrelevant | 0 | 0 | The paper describes a method for measuring iduronate-2-sulfatase (I2S) enzymatic activity, not the pharmacokinetics of the drug idursulfase, and contains no PK parameter values. |
| PD | Azadeh_2018 | not_relevant | 0 | 0 | The paper describes the development and validation of an enzymatic assay method for iduronate-2-sulfatase, not a pharmacodynamic or exposure-response analysis of idursulfase. |
| PGx | Barbier_2013 | not_relevant | 4 | 8 | The paper reports an association between genotype and PD (urinary GAGs) mediated by antibody status, but does not provide a fitted pharmacogenomic effect size (theta) for the drug's PK/PD parameters. |
| popPK | Beusterien_2012 | irrelevant | 0 | 0 | The paper is a health utility study (AHUM) for Hunter syndrome and does not report any pharmacokinetic parameters for idursulfase. |
| PGx | Chan_2019 | not_relevant | 0 | 0 | The paper describes newborn screening for mucopolysaccharidoses using enzyme activity and genotyping, but does not report pharmacokinetic or pharmacodynamic parameters of the drug idursulfase. |
| popPK | Giugliani_2017 | irrelevant | 0 | 0 | The study focuses on immunogenicity and pharmacodynamics (uGAGs) rather than pharmacokinetics, and no quantitative PK parameters (CL, V, t1/2) for idursulfase are reported. |
| PD | Giugliani_2017 | not_relevant | 2 | 1 | The study compares uGAG levels between antibody-positive and antibody-negative groups but does not report a quantitative exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50). |
| popPK | Hammon_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cerliponase alfa, not idursulfase. |
| PD | Hammon_2021 | not_relevant | 0 | 0 | The paper focuses on PK allometric scaling and dose selection for cerliponase alfa, not idursulfase, and does not report any pharmacodynamic or exposure-response parameters. |
| PGx | Huang_2026 | not_relevant | 0 | 0 | The paper investigates the structural and metabolic consequences of a novel IDS gene mutation in MPS II, but does not report any pharmacokinetic or pharmacodynamic effects of idursulfase therapy. |
| popPK | Kohn_2015 | irrelevant | 0 | 0 | The paper is a proteomic study in hapuku fish that identifies iduronate 2-sulfatase (the enzyme targeted by idursulfase) as a biomarker, but does not report pharmacokinetic parameters for the drug idursulfase. |
| popPK | Muenzer_2022 | irrelevant | 0 | 0 | The paper reports clinical efficacy outcomes (cognitive scores, GAG levels) for intrathecal idursulfase but does not report quantitative pharmacokinetic parameters (CL, V, t1/2) or a PK model. |
| PGx | Muenzer_2022_2 | not_relevant | 0 | 0 | The paper reports a post-hoc analysis of clinical efficacy (DAS-II scores) by genotype, but does not report pharmacokinetic or pharmacodynamic parameters (e.g., AUC, Cmax, biomarker levels) modified by the genotype. |
| popPK | Qi_2019 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for vestronidase alfa (MPS VII), not idursulfase (MPS II). |
| popPK | Rekowski_2025 | irrelevant | 0 | 0 | The paper is a methodological guideline for reporting clinical trials and does not contain any pharmacokinetic data for idursulfase. |
| PD | Rekowski_2025 | not_relevant | 0 | 0 | The paper is a methodological guideline (CONSORT-DEFINE) for reporting early-phase dose-finding trials and does not report specific pharmacodynamic data or parameters for idursulfase. |
| PGx | Vollebregt_2022 | not_relevant | 0 | 0 | The paper reports the effect of anti-drug antibodies (an immune response) on pharmacokinetics, not the effect of a specific gene variant or genotype on the drug's PK/PD parameters. |
| PD | Xie_2015 | not_relevant | 2 | 1 | The study reports pharmacokinetic parameters and a linear dose-exposure relationship (dose vs AUC/Cmax), but it does not report any pharmacodynamic (effect) data or exposure-response relationship. |
| popPK | Zhou_2012 | irrelevant | 0 | 0 | The study focuses on a novel IgG-iduronate 2-sulfatase fusion protein in mice, not the pharmacokinetics of the drug idursulfase. |
| PD | Zhou_2012 | not_relevant | 1 | 1 | The paper reports binding affinity (EC50) and tissue distribution data for a fusion protein, but does not report a pharmacodynamic exposure-response or dose-response relationship for idursulfase enzyme activity or clinical outcomes. |
| PGx | Zubaida_2019 | not_relevant | 0 | 0 | The paper reports genetic variants causing the disease (MPS-II) and reduced enzyme activity, but does not report pharmacogenomic effects on the PK/PD of the drug idursulfase. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
