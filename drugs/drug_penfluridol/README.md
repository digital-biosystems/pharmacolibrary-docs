<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;penfluridol&quot;}]"></div>

# penfluridol

- **generic name:** penfluridol
- **ATC codes:** `N05AG03`
- **DrugBank:** [DB13791](https://go.drugbank.com/drugs/DB13791) · **PubChem:** not captured
- **molar mass:** 523.97 g/mol (C28H27ClF5NO) — DrugBank
- **groups:** investigational

## About

Penfluridol is an antipsychotic of the diphenylbutylpiperidine class that acts as a dopamine antagonist and was used to treat psychotic disorders such as schizophrenia. It is currently considered investigational and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2149707](https://www.wikidata.org/wiki/Q2149707) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 16:22 | 0:12 | 0/0/0 | 0/2/0 | 0/0/0 | 9,150/1,015 | ollama / glm-5.3-flash | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Enyeart_1996_cortisol_secretion](drugs/drug_penfluridol/pd_Enyeart_1996_cortisol_secretion.md) | 8-pcpt-cAMP-induced cortisol secretion ← penfluridol · inhibition effect | — | Enyeart JJ et al., Adrenocorticotropic hormone and cAMP in…, The Journal of general phys… (1996) | [10.1085/jgp.108.4.251](https://doi.org/10.1085/jgp.108.4.251) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Schettini_1983_PRL](drugs/drug_penfluridol/pd_Schettini_1983_PRL.md) | basal PRL secretion ← penfluridol · direct Emax (saturable) effect | — | Schettini G et al., In vitro studies on basal and stimulate…, Endocrinology (1983) | [10.1210/endo-112-1-64](https://doi.org/10.1210/endo-112-1-64) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Schettini_1983_PRL_2](drugs/drug_penfluridol/pd_Schettini_1983_PRL_2.md) | secretagogue-stimulated PRL secretion ← penfluridol · direct Emax (saturable) effect | — | Schettini G et al., In vitro studies on basal and stimulate…, Endocrinology (1983) | [10.1210/endo-112-1-64](https://doi.org/10.1210/endo-112-1-64) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=penfluridol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CACNA1G (blocker).</sub>

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

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Enyeart_1996 | irrelevant | 0 | 0 | This is an electrophysiology study of K+ channels in bovine adrenal cells; penfluridol is only a tool (Ca2+ channel antagonist) with an IC50, no PK disposition parameters. |
| popPK | Lafond_1986 | irrelevant | 0 | 0 | In-vitro mechanistic study of pituitary cAMP/PRL effects; penfluridol is a pharmacological tool, no PK parameters. |
| popPK | Schettini_1983 | irrelevant | 0 | 0 | In vitro mechanistic study of prolactin secretion with no PK disposition parameters for penfluridol. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
