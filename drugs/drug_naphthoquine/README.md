<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;Naphthoquine&quot;}]"></div>

# Naphthoquine

- **generic name:** Naphthoquine
- **ATC codes:** `P01BF08`
- **DrugBank:** [DB16249](https://go.drugbank.com/drugs/DB16249) · **PubChem:** not captured
- **molar mass:** 409.96 g/mol (C24H28ClN3O) — DrugBank
- **groups:** investigational

## About

Naphthoquine is an antimalarial drug used in combination with artemisinin derivatives to treat malaria. It is considered investigational and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27290230](https://www.wikidata.org/wiki/Q27290230) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:34 | 0:51 | 0/0/2 | 0/0/0 | 0/0/0 | 40,701/2,884 | ollama / glm-5.3-flash | 2 | 0/1 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Ali_2022_reference](drugs/drug_naphthoquine/Naphthoquine_Ali2022_reference.md) | — | — (no model) | 0 | Ali AM et al., Population Pharmacokinetics of Antimala…, Antimicrobial agents and ch… (2022) | [10.1128/aac.01696-21](https://doi.org/10.1128/aac.01696-21) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q27 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Batty_2012_reference](drugs/drug_naphthoquine/Naphthoquine_Batty2012_reference.md) | — | — (no model) | 0 | Batty KT et al., Artemisinin-naphthoquine combination th…, Antimicrobial agents and ch… (2012) | [10.1128/AAC.06250-11](https://doi.org/10.1128/AAC.06250-11) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Batty_2012.pdf` | Batty KT et al., Artemisinin-naphthoquine combination th…, Antimicrobial agents and ch… (2012) | popPK | 10 | [10.1128/AAC.06250-11](https://doi.org/10.1128/AAC.06250-11) | [22330923](https://pubmed.ncbi.nlm.nih.gov/22330923) | The abstract explicitly reports quantitative population PK parameters for naphthoquine (CL/F, Vss/F, half-lives) derived from a multicompartment model in human children. |

<sub>queue written 2026-10-15T01:01:01.355554+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Karl_2016 | irrelevant | 0 | 0 | The study focuses on epidemiological risk factors for gametocyte carriage in malaria patients, not on the pharmacokinetic disposition parameters (CL, V, etc.) of naphthoquine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 01:01 UTC</sub>
