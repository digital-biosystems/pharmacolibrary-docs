<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D06B&quot;,&quot;href&quot;:&quot;atc/D06B.md&quot;},{&quot;label&quot;:&quot;edoxudine&quot;}]"></div>

# edoxudine

- **generic name:** edoxudine
- **ATC codes:** `D06BB09`
- **DrugBank:** [DB13421](https://go.drugbank.com/drugs/DB13421) · **PubChem:** [CID 66377](https://pubchem.ncbi.nlm.nih.gov/compound/66377)
- **molar mass:** 256.258 g/mol (C11H16N2O5) — DrugBank
- **groups:** approved, withdrawn

## About

Edoxudine is an antiviral drug that was applied to the skin to treat herpes infections. It has been withdrawn and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q987691](https://www.wikidata.org/wiki/Q987691) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:15 | 4:34 | 0/0/0 | 0/2/0 | 0/0/0 | 84,054/1,041 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Halim_2017_dengue_NS_3_helicase](drugs/drug_edoxudine/pd_Halim_2017_dengue_NS_3_helicase.md) | dengue NS-3 helicase · model not identified | — | Halim SA et al., Targeting Dengue Virus NS-3 Helicase by…, Frontiers in chemistry (2017) | [10.3389/fchem.2017.00088](https://doi.org/10.3389/fchem.2017.00088) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">in vitro</span> | [Katona_2004_IC50](drugs/drug_edoxudine/pd_Katona_2004_IC50.md) | 5-FU IC50 ← edoxudine · inhibition effect | — | Katona C et al., [Potentiation of 5-fluorouracil efficac…, Magyar onkologia (2004) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=edoxudine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: TK1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 21 matched, 10 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cheraghali_1994 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for 5-ethyl-2'-deoxyuridine (EDU), not edoxudine. |
| popPK | EFSA_2023 | irrelevant | 0 | 0 | The paper is an EFSA re-evaluation of the risks of bisphenol A (BPA), a different chemical, and does not report pharmacokinetic parameters for edoxudine. |
| popPK | Halim_2017 | irrelevant | 0 | 0 | The paper is an in silico study targeting the Dengue virus NS-3 Helicase and does not involve edoxudine or report its pharmacokinetic parameters. |
| popPK | Kameneva_2022 | irrelevant | 0 | 0 | The paper is a developmental biology study on adrenal chromaffin cells and serotonin signaling in rodents, with no mention of edoxudine or pharmacokinetic parameters. |
| popPK | Kumar_2001 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro antiviral activity of uracil nucleoside analogues and does not contain any pharmacokinetic data for edoxudine. |
| popPK | Liu_2024 | irrelevant | 0 | 0 | The paper focuses on the cellular hierarchy and therapeutic targets (CDK6) of diffuse hemispheric gliomas, not the pharmacokinetics of edoxudine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
