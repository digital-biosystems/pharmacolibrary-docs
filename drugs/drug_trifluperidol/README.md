<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;trifluperidol&quot;}]"></div>

# trifluperidol

- **generic name:** trifluperidol
- **ATC codes:** `N05AD02`
- **DrugBank:** [DB13552](https://go.drugbank.com/drugs/DB13552) · **PubChem:** not captured
- **molar mass:** 409.425 g/mol (C22H23F4NO2) — DrugBank
- **groups:** experimental

## About

Trifluperidol is a butyrophenone antipsychotic and dopamine antagonist used to treat psychotic disorders such as schizophrenia. It is not an approved medicine today and is considered experimental, so it is not in widespread clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4463264](https://www.wikidata.org/wiki/Q4463264) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 18:01 | 1:31 | 0/0/0 | 1/3/0 | 0/0/0 | 17,537/1,591 | ollama / glm-5.3-flash | 1 | 0/0 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Seeman_1983_Inhibition_of_3H_spiperone_binding_to_D2_dopamine_receptors](drugs/drug_trifluperidol/pd_Seeman_1983_Inhibition_of_3H_spiperone_binding_to_D2_dopamin.md) | Inhibition of [3H]spiperone binding to D2 dopamine receptors ← trifluperidol · inhibition effect | — | Seeman P et al., Neuroleptics have identical potencies i…, European journal of pharmac… (1983) | [10.1016/0014-2999(83)90452-1](https://doi.org/10.1016/0014-2999(83)90452-1) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Coughenour_1997_3H_TCP_binding](drugs/drug_trifluperidol/pd_Coughenour_1997_3H_TCP_binding.md) | Inhibition of [3H]TCP binding to NMDA receptors in rat forebrain membranes ← trifluperidol · direct sigmoid Emax (Hill) effect | — | Coughenour LL et al., Characterization of haloperidol and tri…, The Journal of pharmacology… (1997) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Coughenour_1997_3H_ifenprodil_binding](drugs/drug_trifluperidol/pd_Coughenour_1997_3H_ifenprodil_binding.md) | Inhibition of [3H]ifenprodil binding to NMDA receptors in rat forebrain membranes ← trifluperidol · direct sigmoid Emax (Hill) effect | — | Coughenour LL et al., Characterization of haloperidol and tri…, The Journal of pharmacology… (1997) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Shim_1999_125I_MK_801_binding](drugs/drug_trifluperidol/pd_Shim_1999_125I_MK_801_binding.md) | Inhibition of 125I-MK-801 binding to NMDA receptors (adult rat forebrain) ← trifluperidol · inhibition effect | — | Shim SS et al., Actions of butyrophenones and other ant…, Neurochemistry international (1999) | [10.1016/s0197-0186(98)00085-0](https://doi.org/10.1016/s0197-0186(98)00085-0) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Whittemore_1997_NMDA_receptor_current_inhibition_NR1a_NR2B](drugs/drug_trifluperidol/pd_Whittemore_1997_NMDA_receptor_current_inhibition_NR1a_NR2B.md) | NMDA receptor current inhibition (NR1a/NR2B) ← trifluperidol · direct sigmoid Emax (Hill) effect | — | Whittemore ER et al., Antagonism of N-methyl-D-aspartate rece…, The Journal of pharmacology… (1997) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=trifluperidol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CMA1 (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 18 matched, 15 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Coughenour_1997 | irrelevant | 0 | 0 | In-vitro receptor binding study with IC50 values, no pharmacokinetic disposition parameters for trifluperidol. |
| popPK | Seeman_1983 | irrelevant | 0 | 0 | In-vitro receptor binding study with IC50 values, no pharmacokinetic disposition parameters for trifluperidol. |
| popPK | Shim_1999 | irrelevant | 0 | 0 | In-vitro receptor binding study of NMDA inhibition; no pharmacokinetic parameters for trifluperidol. |
| popPK | Whittemore_1997 | irrelevant | 0 | 0 | In vitro electrophysiology study of NMDA receptor antagonism; trifluperidol is only a test ligand with IC50 values, no PK disposition parameters. |
| popPK | Wible_1997 | irrelevant | 0 | 0 | In-vitro ion channel blockade study with IC50 values only; no pharmacokinetic disposition parameters for trifluperidol. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
