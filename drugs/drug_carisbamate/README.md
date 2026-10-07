<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;carisbamate&quot;}]"></div>

# carisbamate

- **generic name:** carisbamate
- **ATC codes:** `N03AX19`
- **DrugBank:** [DB12338](https://go.drugbank.com/drugs/DB12338) · **PubChem:** [CID 6918474](https://pubchem.ncbi.nlm.nih.gov/compound/6918474)
- **molar mass:** 215.63 g/mol (C9H10ClNO3) — DrugBank
- **groups:** investigational

## About

Carisbamate is an investigational antiepileptic drug that was developed for the treatment of epilepsy. It was never approved; a marketing application in the European Union was withdrawn, so it remains an investigational compound.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q76393597](https://www.wikidata.org/wiki/Q76393597) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:34 | 0:58 | 0/0/0 | 1/0/0 | 0/0/0 | 62,789/2,167 | einfracz / qwen3.8-27b | 4 | 2/4 | 4/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Hung_2023_INa_L](drugs/drug_carisbamate/pd_Hung_2023_INa_L.md) | late (sustained, INa(L)) component of the voltage-gated Na+ current ← carisbamate · direct sigmoid Emax (Hill) effect | — | Hung TY et al., Concerted suppressive effects of carisb…, Frontiers in cellular neuro… (2023) | [10.3389/fncel.2023.1159067](https://doi.org/10.3389/fncel.2023.1159067) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Hung_2023_INa_T](drugs/drug_carisbamate/pd_Hung_2023_INa_T.md) | transient peak component of the voltage-gated Na+ current (INa(T)) ← carisbamate · direct sigmoid Emax (Hill) effect | — | Hung TY et al., Concerted suppressive effects of carisb…, Frontiers in cellular neuro… (2023) | [10.3389/fncel.2023.1159067](https://doi.org/10.3389/fncel.2023.1159067) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Hung_2023_Ih](drugs/drug_carisbamate/pd_Hung_2023_Ih.md) | hyperpolarization-activated cation current (Ih) ← carisbamate · direct sigmoid Emax (Hill) effect | — | Hung TY et al., Concerted suppressive effects of carisb…, Frontiers in cellular neuro… (2023) | [10.3389/fncel.2023.1159067](https://doi.org/10.3389/fncel.2023.1159067) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 23 matched, 21 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Moore_2012.pdf` | Moore K et al., Effect of mild and moderate hepatic imp…, Journal of clinical pharmac… (2012) | popPK | 9 | [10.1177/0091270011403313](https://doi.org/10.1177/0091270011403313) | [21566203](https://pubmed.ncbi.nlm.nih.gov/21566203) | The study reports key disposition parameters for carisbamate (t(1/2), AUC ratios, CL/F trends), but specific numeric values for Clearance (CL) and Volume of Distribution (V) are not explicitly listed in the provided evidence. |
| `Zannikos_2009.pdf` | Zannikos P et al., Pharmacokinetics of carisbamate (RWJ-33…, Epilepsia (2009) | popPK | 9 | [10.1111/j.1528-1167.2009.02081.x](https://doi.org/10.1111/j.1528-1167.2009.02081.x) | [19453703](https://pubmed.ncbi.nlm.nih.gov/19453703) | The study reports quantitative pharmacokinetic parameters for carisbamate, specifically oral clearance (35.1-41.4 ml/h/kg) and half-life (11.5-12.8 h). |
| `Levy_2008.pdf` | Levy R et al., Pharmacokinetics, safety, and tolerabil…, Epilepsy research (2008) | popPK | 8 | [10.1016/j.eplepsyres.2007.12.013](https://doi.org/10.1016/j.eplepsyres.2007.12.013) | [18280116](https://pubmed.ncbi.nlm.nih.gov/18280116) | The study is a relevant pharmacokinetic evaluation of carisbamate in humans, but the provided evidence contains only qualitative descriptions of results (e.g., "higher exposure," "renal clearance decreased") without any specific numeric parameter values (CL, V, t1/2, etc.). |
| `Vashi_2026.pdf` | Vashi V et al., Carisbamate treatment of adult and pedi…, Epilepsy research (2026) | popPK | 5 | [10.1016/j.eplepsyres.2026.107869](https://doi.org/10.1016/j.eplepsyres.2026.107869) | [42431071](https://pubmed.ncbi.nlm.nih.gov/42431071) | The study reports quantitative PK parameters for carisbamate in humans, but only non-compartmental metrics (t1/2, accumulation) are provided, lacking compartmental model parameters (CL, Vd, Q) required for population PK. |

<sub>queue written 2026-10-07T07:34:27.208706+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bhamidipati_2017 | irrelevant | 1 | 0 | The paper uses carisbamate as one of nine drugs for an allometric scaling validation study focused on urinary excretion, not a detailed population-PK parameter estimation study. |
| popPK | Cady_2009 | irrelevant | 0 | 0 | This is a clinical efficacy trial for migraine prophylaxis and does not report pharmacokinetic parameters for carisbamate. |
| PD | Cady_2009 | not_relevant | 2 | 1 | The paper reports a clinical dose-response trial with no statistically significant differences between doses and placebo, and does not provide PK data or numeric PD parameters (e.g., Emax, EC50) to derive a pharmacodynamic model. |
| popPK | Choi_2026 | irrelevant | 0 | 0 | The paper is a review of the discovery of cenobamate, where carisbamate is only mentioned as a precursor/comparator, and no quantitative pharmacokinetic parameters for carisbamate are reported. |
| PD | Choi_2026 | not_relevant | 3 | 2 | The paper is a review of cenobamate (not carisbamate) and only provides qualitative context or preclinical PK/PD data for cenobamate, lacking specific numeric PD parameters for carisbamate. |
| popPK | Gonzalez_2012 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of warfarin as the subject drug, with carisbamate serving only as a co-administered agent, and no quantitative disposition parameters for carisbamate are provided. |
| PD | Gonzalez_2012 | not_relevant | 1 | 0 | The paper reports that the pharmacodynamic effect (INR) was unaltered and provides no numeric PD parameters or concentration-effect relationship. |
| popPK | Hung_2023 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study investigating the mechanism of action on ion channels, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Landmark_2008 | irrelevant | 0 | 0 | This is a review article that mentions carisbamate only as a chemical derivative of felbamate without reporting any original quantitative pharmacokinetic parameters or model data. |
| PD | Landmark_2008 | not_relevant | 1 | 0 | The paper is a review of chemical modifications of antiepileptic drugs and does not report any specific pharmacodynamic or exposure-response data for carisbamate. |
| popPK | Levy_2008 | relevant | 8 | 0 | The study is a relevant pharmacokinetic evaluation of carisbamate in humans, but the provided evidence contains only qualitative descriptions of results (e.g., "higher exposure," "renal clearance decreased") without any specific numeric parameter values (CL, V, t1/2, etc.). |
| popPK | Liu_2009 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study reporting electrophysiological parameters (IC50) rather than pharmacokinetic disposition parameters. |
| popPK | Luszczki_2009 | irrelevant | 2 | 0 | This is a review article summarizing pharmacokinetic profiles generally, but the provided evidence contains no original quantitative parameter values (CL, V, etc.) for carisbamate. |
| popPK | Mateias_2024 | irrelevant | 0 | 0 | The study investigates the in vitro cardiac safety pharmacology (ion channel inhibition) of cenobamate, not the pharmacokinetics of carisbamate. |
| popPK | Nasreddine_2010 | irrelevant | 2 | 0 | The paper is a narrative review of emerging antiepileptic drugs including carisbamate, but the provided evidence contains no quantitative pharmacokinetic parameter values (CL, V, ka, etc.). |
| popPK | Vashi_2026 | relevant | 5 | 4 | The study reports quantitative PK parameters for carisbamate in humans, but only non-compartmental metrics (t1/2, accumulation) are provided, lacking compartmental model parameters (CL, Vd, Q) required for population PK. |
| popPK | Vohora_2010 | irrelevant | 1 | 0 | This is a narrative review of third-generation antiepileptic drugs and does not contain original quantitative population-pharmacokinetic parameter values for carisbamate. |
| PGx | Zannikos_2009 | not_relevant | 0 | 0 | The study compares pharmacokinetics between Japanese and Caucasian populations but does not report on the effect of specific gene variants or genotypes on PK/PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
