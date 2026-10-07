<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07B&quot;,&quot;href&quot;:&quot;atc/N07B.md&quot;},{&quot;label&quot;:&quot;acamprosate&quot;}]"></div>

# acamprosate

- **generic name:** acamprosate
- **ATC codes:** `N07BB03`
- **DrugBank:** [DB00659](https://go.drugbank.com/drugs/DB00659) · **PubChem:** [CID 71158](https://pubchem.ncbi.nlm.nih.gov/compound/71158)
- **molar mass:** 181.21 g/mol (C5H11NO4S) — DrugBank
- **groups:** approved, investigational

## About

Acamprosate is a drug used to help maintain abstinence in people with alcohol dependence. It is an approved medicine and is used in the treatment of alcohol dependence.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q337668](https://www.wikidata.org/wiki/Q337668) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:39 | 0:09 | 0/0/0 | 0/1/0 | 0/0/0 | 12,150/1,264 | ollama / glm-5.3-flash | 1 | 1/0 | 0/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Naassila_1998_14C_spermidine_binding](drugs/drug_acamprosate/pd_Naassila_1998_14C_spermidine_binding.md) | Displacement of [14C]spermidine binding by acamprosate ← acamprosate · direct sigmoid Emax (Hill) effect | — | Naassila M et al., Mechanism of action of acamprosate. Par…, Alcoholism, clinical and ex… (1998) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Naassila_1998_3H_acamprosate_binding](drugs/drug_acamprosate/pd_Naassila_1998_3H_acamprosate_binding.md) | [3H]acamprosate specific binding to rat brain membranes ← acamprosate · model not identified | — | Naassila M et al., Mechanism of action of acamprosate. Par…, Alcoholism, clinical and ex… (1998) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Naassila_1998_3H_dizocilpine_binding](drugs/drug_acamprosate/pd_Naassila_1998_3H_dizocilpine_binding.md) | [3H]dizocilpine binding modulation by acamprosate ← acamprosate · model not identified | — | Naassila M et al., Mechanism of action of acamprosate. Par…, Alcoholism, clinical and ex… (1998) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=acamprosate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A6` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: GABBR1 (inhibitor), GRIN1 (target), GRM5 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_2012 | irrelevant | 0 | 0 | Statistical trajectory analysis of drinking outcomes in acamprosate/naltrexone trials; no pharmacokinetic parameters reported. |
| popPK | Naassila_1998 | irrelevant | 0 | 0 | In-vitro receptor binding study in rat brain membranes; no pharmacokinetic disposition parameters (CL, V, t½) for acamprosate are reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
