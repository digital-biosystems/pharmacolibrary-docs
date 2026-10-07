<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M05B&quot;,&quot;href&quot;:&quot;atc/M05B.md&quot;},{&quot;label&quot;:&quot;etidronic acid&quot;}]"></div>

# etidronic acid

- **generic name:** etidronic acid
- **ATC codes:** `M05BA01`, `M05BB01`
- **DrugBank:** [DB01077](https://go.drugbank.com/drugs/DB01077) · **PubChem:** [CID 3305](https://pubchem.ncbi.nlm.nih.gov/compound/3305)
- **molar mass:** 206.0282 g/mol (C2H8O7P2) — DrugBank
- **groups:** approved, investigational

## About

Etidronic acid is a bisphosphonate used to treat bone conditions such as hypercalcemia and to help conserve bone density. It is an approved medicine, available alone and in combination products for the treatment of bone diseases.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2758338](https://www.wikidata.org/wiki/Q2758338) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:39 | 1:56 | 0/0/0 | 4/0/0 | 0/0/0 | 43,756/1,115 | einfracz / qwen3.8-27b | 3 | 0/0 | 2/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Eyres_1992_spontaneous_fractures](drugs/drug_etidronic_acid/pd_Eyres_1992_spontaneous_fractures.md) | spontaneous fractures ← etidronic acid · model not identified | — | Eyres KS et al., Spontaneous fractures in a patient trea…, Drug safety (1992) | [10.2165/00002018-199207020-00008](https://doi.org/10.2165/00002018-199207020-00008) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Hosking_1990_hydroxyproline](drugs/drug_etidronic_acid/pd_Hosking_1990_hydroxyproline.md) | bone resorption ← etidronic_acid · inhibition effect | — | Hosking DJ, Advances in the management of Paget's d…, Drugs (1990) | [10.2165/00003495-199040060-00005](https://doi.org/10.2165/00003495-199040060-00005) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Lafuma_1997_Number_of_complications](drugs/drug_etidronic_acid/pd_Lafuma_1997_Number_of_complications.md) | Number of complications ← etidronic acid · inhibition effect | — | Lafuma A et al., An economic evaluation of tiludronic ac…, PharmacoEconomics (1997) | [10.2165/00019053-199712040-00004](https://doi.org/10.2165/00019053-199712040-00004) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Mallette_1989_BMD](drugs/drug_etidronic_acid/pd_Mallette_1989_BMD.md) | bone mineral density of the lumbar spine ← etidronate disodium · stimulation effect | — | Mallette LE et al., Cyclic therapy of osteoporosis with neu…, Journal of bone and mineral… (1989) | [10.1002/jbmr.5650040203](https://doi.org/10.1002/jbmr.5650040203) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=etidronic_acid) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ATP6V1A (inhibitor), Hydroxylapatite (target), PTPRS (inhibitor), SLC25A4 (inhibitor), SLC25A5 (inhibitor), SLC25A6 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 18 matched, 18 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Denk_2007 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of the radioactive tracer 41Calcium in response to risedronate treatment, not on the pharmacokinetic parameters of etidronic acid. |
| popPK | Vélez_2023 | irrelevant | 0 | 0 | The paper investigates risedronate coordination complexes, using etidronic acid only as an auxiliary ligand, and does not report any pharmacokinetic parameters for etidronic acid. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
