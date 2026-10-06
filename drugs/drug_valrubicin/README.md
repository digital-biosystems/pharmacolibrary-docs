<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01D&quot;,&quot;href&quot;:&quot;atc/L01D.md&quot;},{&quot;label&quot;:&quot;valrubicin&quot;}]"></div>

# valrubicin

- **generic name:** valrubicin
- **ATC codes:** `L01DB09`
- **DrugBank:** [DB00385](https://go.drugbank.com/drugs/DB00385) · **PubChem:** [CID 454216](https://pubchem.ncbi.nlm.nih.gov/compound/454216)
- **molar mass:** 723.651 g/mol (C34H36F3NO13) — DrugBank
- **groups:** approved

## About

Valrubicin is an anticancer drug used to treat bladder cancer. It is an approved medicine, given as a topoisomerase inhibitor, though it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7912593](https://www.wikidata.org/wiki/Q7912593) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 19:56 | 3:50 | 0/0/0 | 1/1/0 | 0/0/0 | 92,326/6,426 | openai / gpt-6-luna | 7 | 2/0 | 7/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Sarma_2025_anti_leishmanial_activity_on_amastigotes](drugs/drug_valrubicin/pd_Sarma_2025_anti_leishmanial_activity_on_amastigotes.md) | anti-leishmanial activity on amastigotes ← valrubicin · inhibition effect | — | Sarma M et al., Identification of novel anti-leishmania…, FEBS letters (2025) | [10.1002/1873-3468.15016](https://doi.org/10.1002/1873-3468.15016) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Sarma_2025_anti_leishmanial_activity_on_promastigotes](drugs/drug_valrubicin/pd_Sarma_2025_anti_leishmanial_activity_on_promastigotes.md) | anti-leishmanial activity on promastigotes ← valrubicin · inhibition effect | — | Sarma M et al., Identification of novel anti-leishmania…, FEBS letters (2025) | [10.1002/1873-3468.15016](https://doi.org/10.1002/1873-3468.15016) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Kumar_2026_cell_viability](drugs/drug_valrubicin/pd_Kumar_2026_cell_viability.md) | cell viability ← valrubicin · inhibition effect | — | Kumar H et al., FusionTarget: Computational framework f…, iScience (2026) | [10.1016/j.isci.2026.116076](https://doi.org/10.1016/j.isci.2026.116076) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=valrubicin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: DNA (intercalation), TOP2A (inhibitor), TOP2B (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 21 matched, 19 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Islam_2022 | irrelevant | 0 | 0 | This review reports no quantitative valrubicin disposition parameters. |
| popPK | Kumar_2026 | irrelevant | 0 | 0 | This is an in-silico drug-screening and cell-assay study with no quantitative valrubicin pharmacokinetic parameters. |
| PGx | Lau_2017 | not_relevant | 0 | 0 | The paper studies Sgsh genotype effects on disease phenotypes in mice and does not report valrubicin PK or PD parameters. |
| popPK | Smith_2019 | irrelevant | 0 | 0 | This computational study reports no valrubicin-specific pharmacokinetic parameter values. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
