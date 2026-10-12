<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P02C&quot;,&quot;href&quot;:&quot;atc/P02C.md&quot;},{&quot;label&quot;:&quot;diethylcarbamazine&quot;}]"></div>

# diethylcarbamazine

- **generic name:** diethylcarbamazine
- **ATC codes:** `P02CB02`
- **DrugBank:** [DB00711](https://go.drugbank.com/drugs/DB00711) · **PubChem:** [CID 3052](https://pubchem.ncbi.nlm.nih.gov/compound/3052)
- **molar mass:** 199.2932 g/mol (C10H21N3O) — DrugBank
- **groups:** approved, investigational, vet_approved, withdrawn

## About

Diethylcarbamazine is an antinematodal drug used to treat infections caused by roundworms, such as filarial diseases. It remains in use, is included on the WHO list of essential medicines, and is also approved for veterinary use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q409267](https://www.wikidata.org/wiki/Q409267) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:18 | 0:15 | 0/0/0 | 0/0/0 | 0/0/0 | 21,220/469 | ollama / glm-5.3-flash | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bala_2021.pdf` | Bala V et al., Population Pharmacokinetics of Diethylc…, Antimicrobial agents and ch… (2021) | popPK | 10 | [10.1128/AAC.00317-21](https://doi.org/10.1128/AAC.00317-21) | [34310218](https://pubmed.ncbi.nlm.nih.gov/34310218) | A population PK model of DEC itself (one-compartment, CL/F, V/F covariates) is described, but no numeric parameter values appear in the evidence provided. |

<sub>queue written 2026-10-07T10:18:03.950097+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bach_1986 | irrelevant | 0 | 0 | In-vitro mechanistic study of enzyme inhibition by diethylcarbamazine with no pharmacokinetic disposition parameters. |
| popPK | Bala_2021 | relevant | 10 | 2 | A population PK model of DEC itself (one-compartment, CL/F, V/F covariates) is described, but no numeric parameter values appear in the evidence provided. |
| popPK | Chhonker_2023 | relevant | 6 | 3 | Human PK study of DEC co-administered with MOX/ALB/IVM, but numeric parameter values (CL/F, V/F, t½) for DEC appear mainly in Table 2/S1 Table, which are not included in the evidence; only GMR statements and MOX/IVM values are present. |
| popPK | Jovanović_1998 | irrelevant | 0 | 0 | Diethylcarbamazine is only used as a lipoxygenase blocker in an in vitro vascular pharmacology study; no PK parameters for it are reported. |
| popPK | Mahato_2026 | irrelevant | 0 | 0 | This is an epidemiological MDA impact survey with no PK parameters for diethylcarbamazine; no numeric disposition values appear anywhere. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
