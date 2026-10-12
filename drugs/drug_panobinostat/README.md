<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;panobinostat&quot;}]"></div>

# panobinostat

- **generic name:** panobinostat
- **ATC codes:** `L01XH03`
- **DrugBank:** [DB06603](https://go.drugbank.com/drugs/DB06603) · **PubChem:** [CID 6918837](https://pubchem.ncbi.nlm.nih.gov/compound/6918837)
- **molar mass:** 349.434 g/mol (C21H23N3O2) — DrugBank
- **groups:** approved, investigational

## About

Panobinostat is an anticancer medicine (a histone deacetylase inhibitor) used to treat multiple myeloma. It is authorised in the European Union as an antineoplastic agent, and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7131441](https://www.wikidata.org/wiki/Q7131441) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| panobinostat | parent | 349.434 | C21H23N3O2 | DrugBank | [6918837](https://pubchem.ncbi.nlm.nih.gov/compound/6918837) | Savelieva_2015 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:36 | 0:56 | 0/0/1 | 0/0/0 | 0/0/0 | 128,791/4,696 | einfracz / qwen3.8-27b | 4 | 0/4 | 3/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Savelieva_2015_reference](drugs/drug_panobinostat/Panobinostat_Savelieva2015_reference.md) | — | 1-compartment (no model) | 1 (+3 cov.) | Savelieva M et al., Population pharmacokinetics of intraven…, European journal of clinica… (2015) | [10.1007/s00228-015-1846-7](https://doi.org/10.1007/s00228-015-1846-7) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sharma_2015.pdf` | Sharma S et al., A phase I, open-label, multicenter stud…, Cancer chemotherapy and pha… (2015) | popPK | 8 | [10.1007/s00280-014-2612-8](https://doi.org/10.1007/s00280-014-2612-8) | [25377157](https://pubmed.ncbi.nlm.nih.gov/25377157) | The study is a Phase I PK study of panobinostat in humans, reporting AUC, renal clearance, and metabolite ratios, which are quantitative disposition parameters, though specific CL/F and V values are likely in the full text or tables not fully detailed here. |

<sub>queue written 2026-10-06T22:35:48.083449+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Peer_2018 | irrelevant | 0 | 0 | The study models the pharmacokinetics and pharmacodynamics of belinostat, with panobinostat mentioned only as a comparator agent. |
| popPK | Shen_2025 | irrelevant | 0 | 0 | This is a mechanistic high-throughput screening study for SIRT1 up-regulators, not a pharmacokinetic study, and does not report quantitative PK parameters for panobinostat. |
| popPK | Wei_2014 | irrelevant | 0 | 0 | This is an in vitro mechanistic study of HIV latency reversal where panobinostat is used as a comparator agent, and no pharmacokinetic parameters (CL, V, etc.) are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 22:35 UTC</sub>
