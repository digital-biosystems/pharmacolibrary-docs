<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R07A&quot;,&quot;href&quot;:&quot;atc/R07A.md&quot;},{&quot;label&quot;:&quot;prethcamide&quot;}]"></div>

# prethcamide

- **generic name:** prethcamide
- **ATC codes:** `R07AB06`
- **DrugBank:** [DB13447](https://go.drugbank.com/drugs/DB13447) · **PubChem:** not captured
- **groups:** experimental

## About

Prethcamide is a respiratory stimulant drug, given as a combination of chemical entities. It is considered experimental and does not appear to be an approved medicine today.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3911267](https://www.wikidata.org/wiki/Q3911267) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| prethcamide | parent | 466.667 | C25H46N4O4 | PubChem | [6537439](https://pubchem.ncbi.nlm.nih.gov/compound/6537439) | Bryła_1985 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:12 | 0:21 | 0/1/0 | 0/0/0 | 0/0/0 | 4,956/1,324 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Bryła_1985_reference](drugs/drug_prethcamide/Prethcamide_Brya1985_reference.md) | — | 1-compartment (no model) | 4 | Bryła P et al., Pharmacokinetics of prethcamide followi…, Polish journal of pharmacol… (1985) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bryła_1985.pdf` | Bryła P et al., Pharmacokinetics of prethcamide followi…, Polish journal of pharmacol… (1985) | popPK | 10 | not captured | [3832011](https://pubmed.ncbi.nlm.nih.gov/3832011) | The study reports quantitative PK parameters (half-life, clearance, absorption rate) for prethcamide constituents in rabbits. |
| `Sams_1997.pdf` | Sams RA et al., Pharmacokinetics of intravenous and ora…, Journal of pharmaceutical a… (1997) | popPK | 8 | [10.1016/s0731-7085(96)01885-7](https://doi.org/10.1016/s0731-7085(96)01885-7) | [9127276](https://pubmed.ncbi.nlm.nih.gov/9127276) | The study is a PK study in horses, but specific numeric values (CL, V, t1/2) are not listed in the provided text, only qualitative comparisons and units are given. |

<sub>queue written 2026-10-07T18:11:58.043128+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Sams_1997 | relevant | 8 | 3 | The study is a PK study in horses, but specific numeric values (CL, V, t1/2) are not listed in the provided text, only qualitative comparisons and units are given. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 18:12 UTC</sub>
