<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;idarucizumab&quot;}]"></div>

# idarucizumab

- **generic name:** idarucizumab
- **ATC codes:** `V03AB37`
- **DrugBank:** [DB09264](https://go.drugbank.com/drugs/DB09264) · **PubChem:** not captured
- **groups:** approved

## About

Idarucizumab is an antidote used to treat haemorrhage in patients taking dabigatran. It is approved and authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q17630273](https://www.wikidata.org/wiki/Q17630273) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 20:06 | 0:25 | 0/0/0 | 0/0/1 | 0/0/0 | 30,670/1,855 | ollama / glm-5.3-flash | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span> | [Eaton_2025_2_R_time](drugs/drug_idarucizumab/pd_Eaton_2025_2_R_time.md) | thromboelastometric reaction time (R-time) ← idarucizumab · direct linear effect | — | Eaton MP et al., Dabigatran pharmacokinetic-pharmacodyna…, Perfusion (2025) | [10.1177/02676591231226291](https://doi.org/10.1177/02676591231226291) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=idarucizumab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Athavale_2020 | relevant | 4 | 3 | A PK analysis of idarucizumab (single-compartment, half-life, Vd mentioned) is included, but the focus is dabigatran rebound modeling and no full numeric idarucizumab parameter set (CL, V, t½ values) is presented in the evidence. |
| popPK | Di_2015 | irrelevant | 1 | 0 | This is a narrative review on gastrointestinal bleeding management that only mentions idarucizumab qualitatively as an antidote, with no PK parameters for idarucizumab. |
| popPK | Eaton_2025 | irrelevant | 2 | 2 | Idarucizumab is the reversal agent; no idarucizumab concentrations were assayed and its PK was assumed from human literature values (CL 0.0394 L/min, V 6.47 L), while the quantitative PK model (CL, Q, V1, V2) is for dabigatran in sheep. |
| popPK | Eaton_2025_2 | irrelevant | 3 | 5 | The PK model and parameters (CL, Q, V1, V2) are for dabigatran; idarucizumab is only a co-administered reversal agent with a single effect-model rate constant (KIDA 0.0218) reported, not a full disposition model for idarucizumab. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
