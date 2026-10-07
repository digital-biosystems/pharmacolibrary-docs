<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01E&quot;,&quot;href&quot;:&quot;atc/J01E.md&quot;},{&quot;label&quot;:&quot;sulfamoxole&quot;}]"></div>

# sulfamoxole

- **generic name:** sulfamoxole
- **ATC codes:** `J01EC03`, `J01EE04`
- **DrugBank:** [DB08798](https://go.drugbank.com/drugs/DB08798) · **PubChem:** [CID 12894](https://pubchem.ncbi.nlm.nih.gov/compound/12894)
- **molar mass:** 267.304 g/mol (C11H13N3O3S) — DrugBank
- **groups:** experimental

## About

Sulfamoxole is an intermediate-acting sulfonamide antibiotic used against bacterial infections, also available in combination with trimethoprim. It is classed as experimental and has no EMA authorisation, so it appears to be little used today.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6577297](https://www.wikidata.org/wiki/Q6577297) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:13 | 0:26 | 0/0/0 | 0/1/0 | 0/0/0 | 23,254/562 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [unknown_1976_Clinical_and_bacteriological_results](drugs/drug_sulfamoxole/pd_unknown_1976_Clinical_and_bacteriological_results.md) | Clinical and bacteriological results biomarker turnover ← endogenous kinetics | — | unknown, [The effect of a new broad-spectrum ant…, Medizinische Klinik (1976) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=sulfamoxole) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2C9` inhibitor | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Lagler_1976 | irrelevant | 0 | 0 | The paper reports acute and subacute toxicity data (LD50, organ changes) but contains no quantitative pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Maier_1976 | irrelevant | 0 | 0 | The study reports toxicological/efficacy outcomes (mortality, antibody formation) in mice but contains no pharmacokinetic parameters for sulfamoxole. |
| PGx | Zweers-Zeilmaker_1997 | not_relevant | 0 | 0 | The paper is an in vitro study measuring the inhibitory effect of sulfonamides (including sulfamoxole) on CYP2C activity; it does not report on the effect of genetic variants on the PK/PD parameters of sulfamoxole itself. |
| popPK | unknown_1976 | irrelevant | 0 | 0 | The paper is a clinical efficacy study of a sulfamoxole combination reporting only clinical and bacteriological outcomes, with no pharmacokinetic parameters or values. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
