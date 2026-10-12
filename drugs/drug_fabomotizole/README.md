<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05B&quot;,&quot;href&quot;:&quot;atc/N05B.md&quot;},{&quot;label&quot;:&quot;fabomotizole&quot;}]"></div>

# fabomotizole

- **generic name:** fabomotizole
- **ATC codes:** `N05BX04`
- **DrugBank:** [DB13623](https://go.drugbank.com/drugs/DB13623) · **PubChem:** not captured
- **molar mass:** 307.41 g/mol (C15H21N3O2S) — DrugBank
- **groups:** investigational

## About

Fabomotizole is an anxiolytic drug investigated for the treatment of anxiety disorders. It remains investigational and is not an approved medicine in the European Union or other major markets.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2090655](https://www.wikidata.org/wiki/Q2090655) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 18:45 | 0:54 | 0/0/0 | 0/0/0 | 0/0/0 | 13,580/1,113 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bastrygin_2011.pdf` | Bastrygin DV et al., [Pharmacokinetics of afobazole metaboli…, Eksperimental'naia i klinic… (2011) | popPK | 7 | not captured | [21894764](https://pubmed.ncbi.nlm.nih.gov/21894764) | PK study of afobazole's main metabolite M-11 in rats with some numeric values (bioavailability 68.3%, ~70% first-pass), but no CL/V/ka parameters reported. |
| `Seredenin_2007.pdf` | Seredenin SB et al., [Pharmacokinetics of afobazole in rats], Eksperimental'naia i klinic… (2007) | popPK | 7 | not captured | [17523455](https://pubmed.ncbi.nlm.nih.gov/17523455) | Rat PK study of afobazole (fabomotizole) with quantitative values (bioavailability 43.6%, tissue availability 0.584/0.793, excretion percentages), though no CL/V/compartmental parameters are given. |

<sub>queue written 2026-10-06T18:45:29.084474+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bochkov_2013 | irrelevant | 0 | 0 | no_text gate: only 304 chars of text extracted (&lt; 400) |
| popPK | Gribakina_2015 | irrelevant | 2 | 2 | Fabomotizole is only the interacting/inducing agent; PK parameters reported are for losartan (probe drug), and no numeric values appear in the evidence. |
| popPK | Shabelnyk_2026 | irrelevant | 0 | 0 | Fabomotizole is only a behavioral control comparator; no PK parameters are reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
