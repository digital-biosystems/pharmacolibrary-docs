<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H02A&quot;,&quot;href&quot;:&quot;atc/H02A.md&quot;},{&quot;label&quot;:&quot;desoxycortone&quot;}]"></div>

# desoxycortone

- **generic name:** desoxycortone
- **ATC codes:** `H02AA03`
- **DrugBank:** [DB15972](https://go.drugbank.com/drugs/DB15972) · **PubChem:** not captured
- **groups:** experimental

## About

Desoxycortone (deoxycorticosterone) is a mineralocorticoid steroid, a corticosteroid acting on salt and water balance. It is classified as an experimental drug, so it does not appear to be in routine clinical use today.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q948846](https://www.wikidata.org/wiki/Q948846) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:32 | 1:21 | 0/0/0 | 2/1/0 | 0/0/0 | 89,627/3,405 | einfracz / qwen3.8-27b | 5 | 2/3 | 5/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span> | [Katsu_2022_fold_activation](drugs/drug_desoxycortone/pd_Katsu_2022_fold_activation.md) | transcriptional activation of full-length lungfish MR with TAT3 promoter biomarker turnover ← 11-deoxycorticosterone | — | Katsu Y et al., Aldosterone and dexamethasone activate…, The Journal of steroid bioc… (2022) | [10.1016/j.jsbmb.2021.106024](https://doi.org/10.1016/j.jsbmb.2021.106024) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span> | [Katsu_2022_fold_activation_2](drugs/drug_desoxycortone/pd_Katsu_2022_fold_activation_2.md) | transcriptional activation of truncated lungfish MR (MR-CDE) with TAT3 promoter biomarker turnover ← 11-deoxycorticosterone | — | Katsu Y et al., Aldosterone and dexamethasone activate…, The Journal of steroid bioc… (2022) | [10.1016/j.jsbmb.2021.106024](https://doi.org/10.1016/j.jsbmb.2021.106024) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Solntseva_2023_Ipeak](drugs/drug_desoxycortone/pd_Solntseva_2023_Ipeak.md) | Peak amplitude of IGly ← 11-deoxycorticosterone · direct sigmoid Emax (Hill) effect | — | Solntseva EI et al., Corticosteroids as Selective and Effect…, ACS chemical neuroscience (2023) | [10.1021/acschemneuro.3c00287](https://doi.org/10.1021/acschemneuro.3c00287) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Solntseva_2023_des](drugs/drug_desoxycortone/pd_Solntseva_2023_des.md) | Time constant of desensitization of IGly ← 11-deoxycorticosterone · direct sigmoid Emax (Hill) effect | — | Solntseva EI et al., Corticosteroids as Selective and Effect…, ACS chemical neuroscience (2023) | [10.1021/acschemneuro.3c00287](https://doi.org/10.1021/acschemneuro.3c00287) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span> | [Sturm_2005_receptor_transactivation_activity](drugs/drug_desoxycortone/pd_Sturm_2005_receptor_transactivation_activity.md) | receptor transactivation activity ← 11-deoxycorticosterone · direct sigmoid Emax (Hill) effect | — | Sturm A et al., 11-deoxycorticosterone is a potent agon…, Endocrinology (2005) | [10.1210/en.2004-0128](https://doi.org/10.1210/en.2004-0128) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=desoxycortone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: NR3C1 (target), NR3C2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Gashaw_2026 | irrelevant | 0 | 0 | The study evaluates the pharmacodynamic effects of vicadrostat on corticosteroid levels (including 11-deoxycorticosterone) but does not report pharmacokinetic parameters (CL, V, ka, etc.) for desoxycortone. |
| popPK | Katsu_2022 | irrelevant | 0 | 0 | The paper studies in vitro transcriptional activation of mineralocorticoid receptors by various steroids and does not report pharmacokinetic parameters for desoxycortone. |
| popPK | Liu_2024 | irrelevant | 0 | 0 | This is an in vitro pharmacodynamic study of mineralocorticoid receptor activity, not a pharmacokinetic study reporting disposition parameters for desoxycortone. |
| popPK | Python_1995 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on steroidogenesis in bovine adrenal cells and does not report pharmacokinetic parameters for desoxycortone. |
| popPK | Sharp_2021 | irrelevant | 0 | 0 | The study focuses on hemodynamic and functional outcomes of a heart failure model in minipigs using deoxycorticosterone (DOCA) as an inducer, without reporting any pharmacokinetic parameters (CL, V, ka, t1/2) for the drug itself. |
| popPK | Solntseva_2023 | irrelevant | 0 | 0 | The paper is a study of corticosteroids' effects on neuronal receptors (pharmacodynamics) and does not report pharmacokinetic parameters like clearance or volume for desoxycortone. |
| popPK | Sturm_2005 | irrelevant | 0 | 0 | The paper is an in vitro receptor binding/transactivation study characterizing mineralocorticoid receptor potency (EC50), not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Sze_1994 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study on glucocorticoid effects on calmodulin binding, not a pharmacokinetic study of desoxycortone. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
