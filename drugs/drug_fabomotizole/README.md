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

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 18:45 | 0:54 | 0/0/0 | 0/0/0 | 0/0/0 | 13,580/1,113 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

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


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
