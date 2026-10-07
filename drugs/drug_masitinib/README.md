<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;masitinib&quot;}]"></div>

# masitinib

- **generic name:** masitinib
- **ATC codes:** `L01EX06`, `L01XE`, `L01XE22`
- **DrugBank:** [DB11526](https://go.drugbank.com/drugs/DB11526) · **PubChem:** not captured
- **molar mass:** 498.65 g/mol (C28H30N6OS) — DrugBank
- **groups:** investigational, vet_approved

## About

Masitinib is a protein kinase inhibitor investigated as a cancer treatment, including for pancreatic cancer, gastrointestinal stromal tumours, mastocytosis and amyotrophic lateral sclerosis. It is not approved for human use in the European Union, where marketing applications have been refused, but it is an approved veterinary medicine and remains investigational in humans.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1907109](https://www.wikidata.org/wiki/Q1907109) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:52 | 1:11 | 0/0/0 | 1/0/0 | 0/0/0 | 26,261/3,488 | openai / gpt-6-luna | 2 | 1/1 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Drayman_2020_3CLpro](drugs/drug_masitinib/pd_Drayman_2020_3CLpro.md) | 3CLpro activity ← masitinib · inhibition effect | — | Drayman N et al., Drug repurposing screen identifies masi…, bioRxiv : the preprint serv… (2020) | [10.1101/2020.08.31.274639](https://doi.org/10.1101/2020.08.31.274639) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Drayman_2020_3CLpro_2](drugs/drug_masitinib/pd_Drayman_2020_3CLpro_2.md) | 3CLpro activity ← masitinib · direct sigmoid Emax (Hill) effect | — | Drayman N et al., Drug repurposing screen identifies masi…, bioRxiv : the preprint serv… (2020) | [10.1101/2020.08.31.274639](https://doi.org/10.1101/2020.08.31.274639) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Drayman_2020_OC43](drugs/drug_masitinib/pd_Drayman_2020_OC43.md) | OC43 infection ← masitinib · direct sigmoid Emax (Hill) effect | — | Drayman N et al., Drug repurposing screen identifies masi…, bioRxiv : the preprint serv… (2020) | [10.1101/2020.08.31.274639](https://doi.org/10.1101/2020.08.31.274639) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Drayman_2020_SARS_CoV_2](drugs/drug_masitinib/pd_Drayman_2020_SARS_CoV_2.md) | SARS-CoV-2 infection ← masitinib · inhibition effect | — | Drayman N et al., Drug repurposing screen identifies masi…, bioRxiv : the preprint serv… (2020) | [10.1101/2020.08.31.274639](https://doi.org/10.1101/2020.08.31.274639) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=masitinib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: SRC (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 2 matched, 2 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Drayman_2020 | irrelevant | 0 | 0 | This is an in-vitro antiviral and protease-inhibition study, with no quantitative masitinib pharmacokinetic parameters. |
| popPK | Tebib_2009 | irrelevant | 0 | 0 | This human efficacy and safety trial reports no quantitative masitinib disposition parameters, and no such values appear in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
