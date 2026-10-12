<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09A&quot;,&quot;href&quot;:&quot;atc/V09A.md&quot;},{&quot;label&quot;:&quot;iodine iofetamine (123I)&quot;}]"></div>

# iodine iofetamine (123I)

- **generic name:** iodine iofetamine (123I)
- **ATC codes:** `V09AB01`
- **DrugBank:** [DB09480](https://go.drugbank.com/drugs/DB09480) · **PubChem:** not captured
- **groups:** approved

## About

Iofetamine (123I) is a radiopharmaceutical used as a diagnostic imaging agent for the central nervous system. It is an approved diagnostic radiopharmaceutical, used in nuclear medicine imaging rather than as a treatment.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15409426](https://www.wikidata.org/wiki/Q15409426) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:39 | 1:43 | 0/0/0 | 0/0/0 | 0/0/0 | 16,448/4,488 | openai / gpt-6-luna | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 25 matched, 10 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Moerlein_1994.pdf` | Moerlein SM et al., First-pass extraction fraction of iodin…, Nuclear medicine and biology (1994) | popPK | 8 | [10.1016/0969-8051(94)90164-3](https://doi.org/10.1016/0969-8051(94)90164-3) | [9234334](https://pubmed.ncbi.nlm.nih.gov/9234334) | The baboon study reports a quantitative PS′ range for [123I]IMP and two other tracers, but not an exact value for [123I]IMP. |
| `Ito_1995.pdf` | Ito H et al., Error analysis of table look-up method…, Annals of nuclear medicine (1995) | popPK | 7 | [10.1007/BF03164970](https://doi.org/10.1007/BF03164970) | [7662493](https://pubmed.ncbi.nlm.nih.gov/7662493) | The study uses a two-compartment IMP model, but numeric K1/k2 values are not shown and are obtained from a table not provided. |
| `Ishino_1994.pdf` | Ishino Y et al., [123I-IMP clearance of the lung in pneu…, Kaku igaku. The Japanese jo… (1994) | popPK | 6 | not captured | [7933680](https://pubmed.ncbi.nlm.nih.gov/7933680) | The study analyzes pulmonary 123I-IMP clearance, but numeric k1/k2 estimates are not provided. |

<sub>queue written 2026-10-07T18:39:28.713486+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ishino_1994 | relevant | 6 | 1 | The study analyzes pulmonary 123I-IMP clearance, but numeric k1/k2 estimates are not provided. |
| popPK | Ito_1995 | relevant | 7 | 0 | The study uses a two-compartment IMP model, but numeric K1/k2 values are not shown and are obtained from a table not provided. |
| popPK | Kameyama_2018 | irrelevant | 1 | 2 | This is a cerebral blood-flow quantification study, and the distribution volume around 30 is cited background information rather than a PK parameter estimated here. |
| popPK | Kawakami_1990 | irrelevant | 0 | 2 | Iofetamine-123I is only a comparator, with an aerosol-clearance half-life reported rather than qualifying PK parameters. |
| popPK | Moerlein_1994 | relevant | 8 | 4 | The baboon study reports a quantitative PS′ range for [123I]IMP and two other tracers, but not an exact value for [123I]IMP. |
| popPK | Moretti_1994 | irrelevant | 1 | 0 | Iodine-123-IMP is only a diagnostic comparator, and the reported clearance value is for technetium-99m-ECD. |
| popPK | Nagamachi_1992 | irrelevant | 1 | 0 | This is a human imaging study with no quantitative pharmacokinetic parameter values. |
| popPK | Nakajo_1990 | irrelevant | 1 | 0 | Reports age-related heart-image intensity and inferred slower clearance, but no quantitative pharmacokinetic parameters. |
| popPK | Oster_1989 | irrelevant | 1 | 0 | The paper discusses factor analysis of [123I]IMP imaging but reports no quantitative disposition parameters. |
| popPK | Susskind_1996 | irrelevant | 2 | 1 | The dog study reports tissue uptake changes but no quantitative pharmacokinetic disposition parameters for iofetamine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
