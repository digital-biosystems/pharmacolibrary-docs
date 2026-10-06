<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L02A&quot;,&quot;href&quot;:&quot;atc/L02A.md&quot;},{&quot;label&quot;:&quot;goserelin&quot;}]"></div>

# goserelin

- **generic name:** goserelin
- **ATC codes:** `L02AE03`
- **DrugBank:** [DB00014](https://go.drugbank.com/drugs/DB00014) · **PubChem:** [CID 5311128](https://pubchem.ncbi.nlm.nih.gov/compound/5311128)
- **molar mass:** 1269.4105 g/mol (C59H84N18O14) — DrugBank
- **groups:** approved, investigational

## About

Goserelin is a synthetic hormone analogue used to treat endometriosis and, as a hormonal antineoplastic agent, certain hormone-dependent cancers. It is an approved medicine, given as endocrine therapy, and is also being studied for further investigational uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1992653](https://www.wikidata.org/wiki/Q1992653) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:04 | 8:38 | 0/0/0 | 4/0/0 | 0/0/0 | 232,203/2,859 | einfracz / qwen3.8-27b | 16 | 5/2 | 16/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Goldspiel_1991_testosterone](drugs/drug_goserelin/pd_Goldspiel_1991_testosterone.md) | testosterone ← goserelin acetate · inhibition effect | — | Goldspiel BR et al., Goserelin acetate implant: a depot lute…, DICP : the annals of pharma… (1991) | [10.1177/106002809102500716](https://doi.org/10.1177/106002809102500716) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Hopefl_2025_pAUC](drugs/drug_goserelin/pd_Hopefl_2025_pAUC.md) | pAUC ← goserelin · model not identified | — | Hopefl R et al., A 2024 Update on US FDA Implementation…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3561](https://doi.org/10.1002/cpt.3561) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Yutong_2023_T](drugs/drug_goserelin/pd_Yutong_2023_T.md) | testosterone ← goserelin · inhibition effect | — | Yutong M et al., Pharmacological and toxicological studi…, Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1125255](https://doi.org/10.3389/fphar.2023.1125255) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Zhang_2014_testosterone](drugs/drug_goserelin/pd_Zhang_2014_testosterone.md) | testosterone ← goserelin · inhibition effect | — | Zhang S et al., An LC-MS/MS method for the simultaneous…, Journal of chromatography.… (2014) | [10.1016/j.jchromb.2014.06.028](https://doi.org/10.1016/j.jchromb.2014.06.028) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=goserelin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: GNRH1 (activator), GNRHR (target), LHCGR (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 62 matched, 62 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Amer_2025 | irrelevant | 0 | 0 | The paper is a general review of peptide drug delivery via the oral cavity and does not report any pharmacokinetic parameters for goserelin. |
| popPK | Bachmann_2019 | irrelevant | 0 | 0 | Goserelin is used as a tool to suppress endogenous steroids, not as the subject of a pharmacokinetic study, and no PK parameters are reported. |
| popPK | Finkelstein_2020 | irrelevant | 1 | 0 | The study uses goserelin as a gonadal suppressant to establish testosterone dose-response relationships and does not report pharmacokinetic parameters for goserelin itself. |
| popPK | Fitzgerald_1993 | irrelevant | 1 | 0 | The study focuses on reproductive efficacy (ovulation induction) and hormonal changes in mares rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, etc.) for goserelin. |
| PGx | Freitas_2026 | not_relevant | 2 | 2 | The paper reports that genetic variants (TP53, BRCA, ATM) did not significantly affect treatment response, and any mention of genetic influence is on metabolic outcomes (lipids), not the PK/PD parameters of goserelin. |
| PGx | Hutson_2008 | not_relevant | 0 | 0 | The paper reports the effect of medical castration on CYP3A4 activity, not a pharmacogenomic effect of a gene variant on the PK/PD of goserelin. |
| popPK | Janssen_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cabazitaxel and midazolam, not goserelin. |
| PGx | Levine_2007 | not_relevant | 0 | 0 | The study examines correlations between androgen receptor variants and progression-free survival (PFS), a clinical outcome, rather than the effect of gene variants on the pharmacokinetic or pharmacodynamic parameters of goserelin. |
| PGx | Reimer_2016 | not_relevant | 1 | 0 | The paper reports an association between SLCO1B1 genotype and chemotherapy-induced amenorrhea, not the pharmacokinetics or pharmacodynamics of goserelin itself. |
| PGx | Roach_2007 | not_relevant | 2 | 10 | The paper examines the association between CYP3A4 genotype and survival/progression (clinical outcomes) rather than specific pharmacokinetic (e.g., AUC, Cmax) or pharmacodynamic parameters of goserelin. |
| popPK | Snelder_2019 | irrelevant | 0 | 0 | The study focuses on leuprorelin, not goserelin, and models the pharmacodynamic relationship between testosterone and PSA rather than the PK of goserelin. |
| PGx | Thorén_2021 | not_relevant | 3 | 2 | The paper investigates CYP2D6 genotypes and mammographic density (a surrogate marker), not a pharmacokinetic or pharmacodynamic parameter of goserelin. |
| popPK | Tosca_2021 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for progesterone, not goserelin. |
| popPK | Vasović_2026 | irrelevant | 0 | 0 | This is a review of oral peptide delivery strategies and mentions goserelin only as an example of a successful peptide therapeutic, without reporting any quantitative pharmacokinetic parameters. |
| popPK | Zou_2020 | irrelevant | 0 | 0 | The study models the kinetics of PSA (a tumor biomarker) in response to leuprorelin (a different LHRH agonist) treatment, rather than the pharmacokinetics of goserelin itself. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
