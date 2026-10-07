<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D10A&quot;,&quot;href&quot;:&quot;atc/D10A.md&quot;},{&quot;label&quot;:&quot;motretinide&quot;}]"></div>

# motretinide

- **generic name:** motretinide
- **ATC codes:** `D10AD05`
- **DrugBank:** [DB13368](https://go.drugbank.com/drugs/DB13368) · **PubChem:** not captured
- **molar mass:** 353.506 g/mol (C23H31NO2) — DrugBank
- **groups:** experimental

## About

Motretinide is a topical retinoid that was developed for the treatment of acne. It is no longer in routine use and is currently regarded as an experimental drug.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q904009](https://www.wikidata.org/wiki/Q904009) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:26 | 1:07 | 0/0/0 | 0/1/0 | 0/0/0 | 7,509/451 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Reiners_1988_chondrogenesis](drugs/drug_motretinide/pd_Reiners_1988_chondrogenesis.md) | chondrogenesis ← motretinide · inhibition effect | — | Reiners J et al., Transplacental pharmacokinetics of tera…, Reproductive toxicology (El… (1988) | [10.1016/s0890-6238(88)80005-4](https://doi.org/10.1016/s0890-6238(88)80005-4) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Reiners_1988.pdf` | Reiners J et al., Transplacental pharmacokinetics of tera…, Reproductive toxicology (El… (1988) | pd | 5 | [10.1016/s0890-6238(88)80005-4](https://doi.org/10.1016/s0890-6238(88)80005-4) | [2980988](https://www.ncbi.nlm.nih.gov/pubmed/2980988) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T07:26:28.853167+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Gollnick_1987 | not_relevant | 0 | 0 | The text is a general review of retinoid indications and pharmacology, mentioning motretinide's use in acne but reporting no pharmacogenomic data, gene variants, or specific PK/PD parameter changes based on genotype. |
| popPK | Mezick_1984 | irrelevant | 0 | 0 | The study evaluates antikeratinizing efficacy (horn-filled utriculus size) in a rhino mouse model, not pharmacokinetic disposition parameters. |
| popPK | Reiners_1988 | irrelevant | 1 | 0 | The study focuses on teratogenicity and metabolite (etretin) concentrations in mice, with no report of standard PK parameters like CL or V for motretinide itself, and no numeric values are provided. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
