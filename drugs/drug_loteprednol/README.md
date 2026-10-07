<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01B&quot;,&quot;href&quot;:&quot;atc/S01B.md&quot;},{&quot;label&quot;:&quot;loteprednol&quot;}]"></div>

# loteprednol

- **generic name:** loteprednol
- **ATC codes:** `S01BA14`, `S01CA12`
- **DrugBank:** [DB00873](https://go.drugbank.com/drugs/DB00873) · **PubChem:** not captured
- **molar mass:** 394.889 g/mol (C21H27ClO5) — DrugBank
- **groups:** approved, withdrawn

## About

Loteprednol is a corticosteroid used as an eye drop to treat inflammation of the eye. It is approved but has been withdrawn from use in some places, so it is no longer widely available.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q72487729](https://www.wikidata.org/wiki/Q72487729) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| Delta1-cortienic acid | metabolite | — (mass units only) | — | — | — | — |
| Delta1-cortienic acid etabonate | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:35 | 1:20 | 0/1/0 | 0/0/0 | 0/0/0 | 17,771/2,047 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Wu_2008_reference](drugs/drug_loteprednol/Loteprednol_Wu2008_reference.md) | — | general linear (no model) | 3 | Wu WM et al., Pharmacokinetics of the sequential meta…, The Journal of pharmacy and… (2008) | [10.1211/jpp.60.3.0003](https://doi.org/10.1211/jpp.60.3.0003) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=loteprednol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: NR3C1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wu_2008.pdf` | Wu WM et al., Pharmacokinetics of the sequential meta…, The Journal of pharmacy and… (2008) | popPK | 10 | [10.1211/jpp.60.3.0003](https://doi.org/10.1211/jpp.60.3.0003) | [18284808](https://pubmed.ncbi.nlm.nih.gov/18284808) | The paper reports quantitative pharmacokinetic parameters (CL, t1/2, K_el) for the sequential metabolites of loteprednol etabonate in rats, with numeric values explicitly provided in the abstract. |

<sub>queue written 2026-10-07T18:35:40.176502+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cechin_2014 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assay measuring NF-κB transrepression potency and does not report pharmacokinetic disposition parameters for loteprednol. |
| PGx | Chen_2024 | not_relevant | 0 | 0 | The paper characterizes loteprednol as a CYP3A5 inhibitor for enzyme studies and does not report pharmacogenomic effects on loteprednol's own PK/PD parameters. |
| popPK | Maeng_2019 | irrelevant | 0 | 0 | The study is a clinical analysis of intraocular pressure changes associated with steroid use and does not report pharmacokinetic parameters for loteprednol. |
| PGx | Sakamuru_2025 | not_relevant | 0 | 0 | The paper reports the inhibition of CYP3A4 by loteprednol in a general chemical screen but does not report any pharmacogenomic effects (gene variant/genotype differences) on PK or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 18:35 UTC</sub>
