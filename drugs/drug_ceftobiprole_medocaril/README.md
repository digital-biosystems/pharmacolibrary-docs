<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;ceftobiprole medocaril&quot;}]"></div>

# ceftobiprole medocaril

- **generic name:** ceftobiprole medocaril
- **ATC codes:** `J01DI01`
- **DrugBank:** [DB14733](https://go.drugbank.com/drugs/DB14733) · **PubChem:** not captured
- **molar mass:** 690.66 g/mol (C26H26N8O11S2) — DrugBank
- **groups:** approved

## About

Ceftobiprole medocaril is an antibacterial drug, a cephalosporin-type beta-lactam, intended for treating bacterial infections of the skin and soft tissues. It is approved and used in some countries, but marketing authorisation was refused in the European Union, so it is not available there.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27294766](https://www.wikidata.org/wiki/Q27294766) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:44 | 0:13 | 0/0/0 | 0/0/0 | 0/0/0 | 27,733/871 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ceftobiprole_medocaril).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `SLCO1B1` inhibitor, `SLCO1B3` inhibitor | DrugBank actor |
| excretion | kidney | `ABCC2` inhibitor | DrugBank actor |
| excretion | liver | `ABCB11` inhibitor, `ABCC2` inhibitor | DrugBank actor |
| excretion | small intestine | `ABCC2` inhibitor | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ramzy_2025.pdf` | Ramzy S et al., Eco-Friendly Fluorescent Probe-Based Qu…, Luminescence : the journal… (2025) | popPK | 10 | [10.1002/bio.70393](https://doi.org/10.1002/bio.70393) | [41432924](https://pubmed.ncbi.nlm.nih.gov/41432924) | The paper reports quantitative pharmacokinetic parameters (clearance, half-life, Cmax) for ceftobiprole medocaril in rats, and these numeric values are explicitly listed in the evidence text. |

<sub>queue written 2026-10-07T10:44:02.435654+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barbour_2009 | irrelevant | 2 | 1 | The text is a general review/overview providing only qualitative descriptions and rough ranges (e.g., "approximately 3-4h", "22%") rather than specific quantitative PK parameter estimates (CL, V, Q, ka) from a compartmental or population model. |
| popPK | Torres_2016 | irrelevant | 2 | 3 | The paper is a review that summarizes pharmacokinetic parameters, but it does not report the results of a primary population pharmacokinetic study or modeling for ceftobiprole_medocaril. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
