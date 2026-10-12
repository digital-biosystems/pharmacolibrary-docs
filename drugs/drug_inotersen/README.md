<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07X&quot;,&quot;href&quot;:&quot;atc/N07X.md&quot;},{&quot;label&quot;:&quot;inotersen&quot;}]"></div>

# inotersen

- **generic name:** inotersen
- **ATC codes:** `N07XX15`
- **DrugBank:** [DB14713](https://go.drugbank.com/drugs/DB14713) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Inotersen is a nervous system drug used to treat amyloidosis. It is authorised in the European Union.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:05 | 2:14 | 0/0/1 | 1/0/0 | 0/0/0 | 115,193/7,976 | ollama / glm-5.3-flash | 2 | 1/1 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C1_half_life_beta failed (ratio 24.0348)</sub><br><sub>route_to: `human_review`</sub> | [Yu_2020_2_reference](drugs/drug_inotersen/Inotersen_Yu2020v2_reference.md) | — | 2-compartment (no model) | 5 | Yu RZ et al., Population Pharmacokinetic-Pharmacodyna…, Nucleic acid therapeutics (2020) | [10.1089/nat.2019.0822](https://doi.org/10.1089/nat.2019.0822) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Yu_2020_2_TTR](drugs/drug_inotersen/pd_Yu_2020_2_TTR.md) | serum TTR (transthyretin) level ← inotersen · indirect response — drug inhibits the production of serum TTR (transthyretin) level | — | Yu RZ et al., Population Pharmacokinetic-Pharmacodyna…, Nucleic acid therapeutics (2020) | [10.1089/nat.2019.0822](https://doi.org/10.1089/nat.2019.0822) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Coelho_2023 | irrelevant | 0 | 0 | This is a phase 3 efficacy/safety trial of eplontersen with inotersen only as a comparator/reference group; no PK parameters (CL, V, half-life, or population-PK model) for inotersen are reported. |
| popPK | Karam_2022 | irrelevant | 0 | 0 | This is an HRQL outcomes study with no PK parameters for inotersen. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 05:04 UTC</sub>
