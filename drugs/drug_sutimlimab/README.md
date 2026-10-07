<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;sutimlimab&quot;}]"></div>

# sutimlimab

- **generic name:** sutimlimab
- **ATC codes:** `L04AJ04`
- **DrugBank:** [DB14996](https://go.drugbank.com/drugs/DB14996) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Sutimlimab is a monoclonal antibody that inhibits complement and is used to treat haemolysis in cold agglutinin disease, a form of autoimmune haemolytic anaemia. It is approved and authorised in the European Union, though it remains a newer, specialised treatment.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q60785670](https://www.wikidata.org/wiki/Q60785670) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:36 | 0:08 | 0/0/0 | 1/1/0 | 0/0/0 | 20,704/877 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Bartko_2018_CP_activity](drugs/drug_sutimlimab/pd_Bartko_2018_CP_activity.md) | CP activity ← sutimlimab · direct sigmoid Emax (Hill) effect | — | Bartko J et al., A Randomized, First-in-Human, Healthy V…, Clinical pharmacology and t… (2018) | [10.1002/cpt.1111](https://doi.org/10.1002/cpt.1111) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Frank_2023_Hb](drugs/drug_sutimlimab/pd_Frank_2023_Hb.md) | Hb ← sutimlimab · indirect response — drug stimulates the production of Hb | — | Frank T et al., Sutimlimab Pharmacokinetics and Pharmac…, The Journal of pharmacology… (2023) | [10.1124/jpet.122.001511](https://doi.org/10.1124/jpet.122.001511) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=sutimlimab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: C1S (antibody), C1S (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Frank_2023.pdf` | Frank T et al., Sutimlimab Pharmacokinetics and Pharmac…, The Journal of pharmacology… (2023) | popPK | 10 | [10.1124/jpet.122.001511](https://doi.org/10.1124/jpet.122.001511) | [37164370](https://pubmed.ncbi.nlm.nih.gov/37164370) | The paper describes a population PK model for sutimlimab in humans, but the extracted evidence contains only qualitative descriptions of the model structure and covariates without any specific numeric parameter values (e.g., CL, V, Q). |

<sub>queue written 2026-10-07T00:36:20.557957+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bartko_2018 | relevant | 5 | 2 | The paper reports standard non-compartmental PK parameters (Cmax, tmax, AUC, t1/2) but lacks specific quantitative disposition parameters like clearance (CL) and volume of distribution (V) required for population PK modeling; these are typically derived via compartmental analysis not provided in this evidence. |
| popPK | Frank_2023 | relevant | 10 | 0 | The paper describes a population PK model for sutimlimab in humans, but the extracted evidence contains only qualitative descriptions of the model structure and covariates without any specific numeric parameter values (e.g., CL, V, Q). |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
