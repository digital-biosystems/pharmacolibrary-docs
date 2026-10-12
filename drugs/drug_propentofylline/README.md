<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06B&quot;,&quot;href&quot;:&quot;atc/N06B.md&quot;},{&quot;label&quot;:&quot;propentofylline&quot;}]"></div>

# propentofylline

- **generic name:** propentofylline
- **ATC codes:** `N06BC02`
- **DrugBank:** [DB06479](https://go.drugbank.com/drugs/DB06479) · **PubChem:** not captured
- **molar mass:** 306.3602 g/mol (C15H22N4O3) — DrugBank
- **groups:** experimental

## About

Propentofylline is a xanthine-derivative compound studied as a neuroprotective agent for nervous-system disorders. It remains experimental and is not an approved medicine; no marketing authorisation is recorded in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2888695](https://www.wikidata.org/wiki/Q2888695) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:39 | 0:20 | 0/0/0 | 0/1/0 | 0/0/0 | 8,074/408 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Si_1996_microglial_proliferation_3H_thymidine_uptake](drugs/drug_propentofylline/pd_Si_1996_microglial_proliferation_3H_thymidine_uptake.md) | microglial proliferation ([3H]thymidine uptake) ← propentofylline · direct Emax (saturable) effect | — | Si QS et al., Adenosine and propentofylline inhibit t…, Experimental neurology (1996) | [10.1006/exnr.1996.0035](https://doi.org/10.1006/exnr.1996.0035) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Borgland_1997.pdf` | Borgland SL et al., Uptake and release of [3H]formycin B vi…, The Journal of pharmacology… (1997) | pd | 4 | not captured | [9103516](https://www.ncbi.nlm.nih.gov/pubmed/9103516) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T00:39:48.457220+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Borgland_1997 | irrelevant | 0 | 0 | Propentofylline is only used as a transport inhibitor in an in vitro nucleoside transporter study; no PK parameters reported. |
| popPK | DeLeo_1988 | irrelevant | 0 | 0 | Efficacy study of propentofylline in gerbil ischemia; no PK disposition parameters reported. |
| popPK | Si_1996 | irrelevant | 0 | 0 | In-vitro mechanistic study of microglial proliferation with no PK disposition parameters for propentofylline. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
