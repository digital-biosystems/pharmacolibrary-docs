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
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Oie_1977_free_fraction](drugs/drug_sulfafurazole/pd_Oie_1977_free_fraction.md) | nonprotein-bound fraction of bilirubin ← sulfisoxazole · stimulation effect | — | Oie S et al., Interindividual differences in the effe…, Clinical pharmacology and t… (1977) | [10.1002/cpt1977215627](https://doi.org/10.1002/cpt1977215627) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
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
