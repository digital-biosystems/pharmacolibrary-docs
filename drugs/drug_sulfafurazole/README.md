<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01E&quot;,&quot;href&quot;:&quot;atc/J01E.md&quot;},{&quot;label&quot;:&quot;sulfafurazole&quot;}]"></div>

# sulfafurazole

- **generic name:** sulfafurazole
- **ATC codes:** `J01EB05`, `S01AB02`
- **DrugBank:** [DB00263](https://go.drugbank.com/drugs/DB00263) · **PubChem:** not captured
- **groups:** approved, vet_approved

## About

Sulfafurazole (sulfisoxazole) is a short-acting sulfonamide antibiotic used to treat bacterial infections such as urinary tract infections, otitis media, chlamydia infection, and nocardiosis. It is an approved antibacterial, also approved for veterinary use, and can be given systemically or as an ophthalmic anti-infective.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q372598](https://www.wikidata.org/wiki/Q372598) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:55 | 2:43 | 0/0/0 | 0/1/0 | 0/0/0 | 83,326/1,999 | einfracz / qwen3.8-27b | 6 | 0/1 | 4/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Oie_1977_free_fraction](drugs/drug_sulfafurazole/pd_Oie_1977_free_fraction.md) | nonprotein-bound fraction of bilirubin ← sulfisoxazole · stimulation effect | — | Oie S et al., Interindividual differences in the effe…, Clinical pharmacology and t… (1977) | [10.1002/cpt1977215627](https://doi.org/10.1002/cpt1977215627) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=sulfafurazole) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2C9` inhibitor | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | mammary gland | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 40 matched, 39 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Liu_2020 | not_relevant | 0 | 0 | The paper reports bacterial antibiotic resistance to sulfisoxazole (not sulfafurazole) and genomic analysis of Staphylococcus warneri, but does not report any human pharmacogenomic effects on PK or PD parameters for sulfafurazole. |
| popPK | Nagwekar_1982 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of sulfisoxazole and sulfanilamide in rats, not sulfafurazole. |
| popPK | Ronfeld_1977 | irrelevant | 1 | 0 | The study examines the pharmacokinetics of sulfisoxazole in rabbits, not sulfafurazole, and contains no specific numeric parameter values for sulfafurazole. |
| popPK | Suber_1981 | irrelevant | 0 | 0 | The paper studies sulfisoxazole, not the target drug sulfafurazole. |
| popPK | Sutton_1977 | irrelevant | 0 | 0 | The study is an in vitro dissolution/dialysis study of sulfisoxazole (not sulfafurazole) and does not report pharmacokinetic disposition parameters. |
| popPK | Zimmerman_1983 | irrelevant | 0 | 0 | The paper is a methodological study demonstrating model fitting techniques using sulfisoxazole (not sulfafurazole) as a subject drug, and does not report specific quantitative PK parameters for sulfafurazole. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
