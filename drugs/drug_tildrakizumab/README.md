<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;tildrakizumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tildrakizumab_Jauslin2019_reference&quot;,&quot;label&quot;:&quot;Jauslin_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tildrakizumab/Tildrakizumab_Jauslin2019_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tildrakizumab_RodrguezFernndez2022_reference&quot;,&quot;label&quot;:&quot;Rodr\u00edguez-Fern\u00e1ndez_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tildrakizumab/Tildrakizumab_RodrguezFernndez2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# tildrakizumab

- **generic name:** tildrakizumab
- **ATC codes:** `L04AC17`
- **DrugBank:** [DB14004](https://go.drugbank.com/drugs/DB14004) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Tildrakizumab, a monoclonal antibody that blocks an interleukin signal, is used to treat psoriasis. It is an approved medicine and is authorised in the European Union for this condition.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15708331](https://www.wikidata.org/wiki/Q15708331) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:51 | 0:14 | 2/0/0 | 1/0/0 | 0/0/0 | 19,853/2,336 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Jauslin_2019_reference](drugs/drug_tildrakizumab/Tildrakizumab_Jauslin2019_reference.md) | ▶ model + simulator | 1-compartment, oral | 6 | Jauslin P et al., Population-Pharmacokinetic Modeling of…, Clinical pharmacokinetics (2019) | [10.1007/s40262-019-00743-7](https://doi.org/10.1007/s40262-019-00743-7) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Rodríguez-Fernández_2022_reference](drugs/drug_tildrakizumab/Tildrakizumab_RodrguezFernndez2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Rodríguez-Fernández K et al., Impact of Pharmacokinetic and Pharmacod…, Pharmaceutics (2022) | [10.3390/pharmaceutics14030654](https://doi.org/10.3390/pharmaceutics14030654) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Kerbusch_2020_PASI](drugs/drug_tildrakizumab/pd_Kerbusch_2020_PASI.md) | PASI ← tildrakizumab · direct Emax (saturable) effect | — | Kerbusch T et al., Exposure-response characterisation of t…, British journal of clinical… (2020) | [10.1111/bcp.14280](https://doi.org/10.1111/bcp.14280) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kerbusch_2020_PASI_2](drugs/drug_tildrakizumab/pd_Kerbusch_2020_PASI_2.md) | PASI change ← tildrakizumab · inhibition effect | — | Kerbusch T et al., Exposure-response characterisation of t…, British journal of clinical… (2020) | [10.1111/bcp.14280](https://doi.org/10.1111/bcp.14280) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tildrakizumab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CYP4A11 (inducer), IL12B (target), IL23A (modulator), IL37 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 2  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jauslin_2019.pdf` | Jauslin P et al., Population-Pharmacokinetic Modeling of…, Clinical pharmacokinetics (2019) | popPK | 10 | [10.1007/s40262-019-00743-7](https://doi.org/10.1007/s40262-019-00743-7) | [30915660](https://pubmed.ncbi.nlm.nih.gov/30915660) | The abstract provides explicit numeric values for population PK parameters (CL, V, t1/2, ka) for tildrakizumab in humans. |

<sub>queue written 2026-10-07T00:51:33.102083+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kerbusch_2020 | irrelevant | 2 | 0 | The study is an exposure-response analysis focusing on efficacy (PASI scores) rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, Q) for tildrakizumab. |
| popPK | Rodríguez-Fernández_2022 | irrelevant | 2 | 0 | The paper is a review of mAbs in psoriasis; while it lists tildrakizumab, the extracted text provides specific PK parameter values for other drugs (e.g., adalimumab, golimumab, secukinumab) but lacks specific numeric PK values for tildrakizumab in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 00:51 UTC</sub>
