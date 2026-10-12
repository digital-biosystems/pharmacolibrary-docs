<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P02B&quot;,&quot;href&quot;:&quot;atc/P02B.md&quot;},{&quot;label&quot;:&quot;oxamniquine&quot;}]"></div>

# oxamniquine

- **generic name:** oxamniquine
- **ATC codes:** `P02BA02`
- **DrugBank:** [DB01096](https://go.drugbank.com/drugs/DB01096) · **PubChem:** [CID 4612](https://pubchem.ncbi.nlm.nih.gov/compound/4612)
- **molar mass:** 279.3348 g/mol (C14H21N3O3) — DrugBank
- **groups:** approved

## About

Oxamniquine is an anthelmintic used to treat schistosomiasis, particularly the intestinal form of the disease. It is an approved medicine and has been included on the WHO list of essential medicines, though it is used less widely than praziquantel.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q682497](https://www.wikidata.org/wiki/Q682497) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:23 | 0:13 | 0/0/0 | 0/1/0 | 0/0/0 | 13,247/422 | ollama / glm-5.3-flash | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span> | [Adewunmi_1987_contractile_response_of_chick_isolated_esophagus](drugs/drug_oxamniquine/pd_Adewunmi_1987_contractile_response_of_chick_isolated_esophag.md) | contractile response of chick isolated esophagus ← oxamniquine · direct Emax (saturable) effect | — | Adewunmi CO et al., Effects of oxamniquine on chick isolate…, Methods and findings in exp… (1987) | — |

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

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adewunmi_1987 | irrelevant | 0 | 0 | In-vitro pharmacology study of oxamniquine's contractile effects on chick esophagus, with no PK disposition parameters. |
| popPK | Fulford_1988 | irrelevant | 0 | 0 | This is a dose-response/ED50 efficacy study in mice, not a pharmacokinetic study with disposition parameters for oxamniquine. |
| popPK | González_2024 | irrelevant | 0 | 0 | This is a physicochemical property analysis of anti-schistosomal compounds; oxamniquine appears only as a comparator (cLogD value), with no PK disposition parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
