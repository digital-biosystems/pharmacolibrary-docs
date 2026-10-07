<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M05B&quot;,&quot;href&quot;:&quot;atc/M05B.md&quot;},{&quot;label&quot;:&quot;burosumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Burosumab_Lee2022_reference&quot;,&quot;label&quot;:&quot;Lee_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_burosumab/Burosumab_Lee2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Burosumab_Mehta2025_reference&quot;,&quot;label&quot;:&quot;Mehta_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_burosumab/Burosumab_Mehta2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# burosumab

- **generic name:** burosumab
- **ATC codes:** `M05BX05`
- **DrugBank:** [DB14012](https://go.drugbank.com/drugs/DB14012) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Burosumab, a monoclonal antibody, is used to treat bone-mineralisation disorders such as familial hypophosphataemia, X-linked hypophosphataemic rickets and osteomalacia. It is an approved medicine, authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q28209068](https://www.wikidata.org/wiki/Q28209068) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:14 | 0:38 | 2/0/0 | 1/0/1 | 0/0/0 | 66,685/5,489 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Lee_2022_reference](drugs/drug_burosumab/Burosumab_Lee2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 (+2 cov.) | Lee SK et al., Population Pharmacokinetics and Pharmac…, Journal of clinical pharmac… (2022) | [10.1002/jcph.1950](https://doi.org/10.1002/jcph.1950) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Mehta_2025_reference](drugs/drug_burosumab/Burosumab_Mehta2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Mehta K et al., Pharmacodynamic Exposure-Response Analy…, Journal of clinical pharmac… (2025) | [10.1002/jcph.6140](https://doi.org/10.1002/jcph.6140) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Mehta_2025_S1](drugs/drug_burosumab/pd_Mehta_2025_S1.md) | Serum Phosphate Concentration ← burosumab · direct Emax (saturable) effect | model (no simulator) | Mehta K et al., Pharmacodynamic Exposure-Response Analy…, Journal of clinical pharmac… (2025) | [10.1002/jcph.6140](https://doi.org/10.1002/jcph.6140) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Hruska_2024_FSP](drugs/drug_burosumab/pd_Hruska_2024_FSP.md) | fasting serum phosphate biomarker turnover ← burosumab | — | Hruska MW et al., Model-Informed Approach to Recommend Bu…, Clinical pharmacology and t… (2024) | [10.1002/cpt.3468](https://doi.org/10.1002/cpt.3468) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=burosumab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: FGF23 (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 2  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hruska_2024.pdf` | Hruska MW et al., Model-Informed Approach to Recommend Bu…, Clinical pharmacology and t… (2024) | popPK | 7 | [10.1002/cpt.3468](https://doi.org/10.1002/cpt.3468) | [39446135](https://pubmed.ncbi.nlm.nih.gov/39446135) | The paper describes a population PK model for burosumab in humans but the abstract lacks specific numeric parameter values (CL, V, T1/2) which are likely in the full text or supplementary material not fully provided in the evidence snippet. |

<sub>queue written 2026-10-07T03:14:29.667383+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Hruska_2024 | relevant | 7 | 2 | The paper describes a population PK model for burosumab in humans but the abstract lacks specific numeric parameter values (CL, V, T1/2) which are likely in the full text or supplementary material not fully provided in the evidence snippet. |
| popPK | Mehta_2024 | irrelevant | 2 | 0 | The paper focuses on pharmacodynamic modeling of patient-reported outcomes (PROs) and does not report original quantitative pharmacokinetic parameter values (e.g., clearance, volume) for burosumab. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 03:14 UTC</sub>
