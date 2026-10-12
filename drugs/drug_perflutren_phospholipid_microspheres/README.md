<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08D&quot;,&quot;href&quot;:&quot;atc/V08D.md&quot;},{&quot;label&quot;:&quot;perflutren, phospholipid microspheres&quot;}]"></div>

# perflutren, phospholipid microspheres

- **generic name:** perflutren, phospholipid microspheres
- **ATC codes:** `V08DA04`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Perflutren phospholipid microspheres are an ultrasound contrast agent used to improve imaging of the heart and other structures during echocardiography. They are used in clinical practice, mainly in hospital settings for ultrasound imaging procedures.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:15 | 3:56 | 0/0/0 | 0/0/0 | 0/0/0 | 43,204/5,224 | openai / gpt-6-luna | 6 | 0/6 | 6/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fix_2018.pdf` | Fix SM et al., Accelerated Clearance of Ultrasound Con…, Ultrasound in medicine & bi… (2018) | popPK | 7 | [10.1016/j.ultrasmedbio.2018.02.006](https://doi.org/10.1016/j.ultrasmedbio.2018.02.006) | [29602540](https://pubmed.ncbi.nlm.nih.gov/29602540) | Definity microbubbles were studied for accelerated clearance, but the only numeric half-life result is for homemade PEGylated microbubbles. |

<sub>queue written 2026-10-07T19:14:46.967076+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chertok_2018 | irrelevant | 1 | 0 | The study models magnetic microbubbles in mice; Definity is only a comparator, and no numeric disposition parameters for it are reported. |
| popPK | Fix_2018 | relevant | 7 | 0 | Definity microbubbles were studied for accelerated clearance, but the only numeric half-life result is for homemade PEGylated microbubbles. |
| popPK | Kleven_2021 | irrelevant | 0 | 0 | Definity is used as a treatment agent, but no pharmacokinetic disposition parameters are reported. |
| popPK | Lapin_2020 | irrelevant | 1 | 0 | The study describes microbubble clearance indirectly but reports no quantitative pharmacokinetic disposition parameters; referenced supplementary data concern enhancement rates. |
| popPK | Li_2024 | relevant | 9 | 4 | Human PK study reports numeric AUC and half-life, but CL and Vss values are not readable in the evidence provided. |
| popPK | Miller_2010 | irrelevant | 0 | 0 | Definity is used as an ultrasound contrast agent, but no pharmacokinetic parameters are reported. |
| popPK | Nam_2024 | irrelevant | 0 | 0 | Definity is used as an imaging contrast agent, and no pharmacokinetic disposition parameters are reported. |
| popPK | Toledo_2005 | irrelevant | 0 | 0 | This is a myocardial perfusion study and reports no pharmacokinetic disposition parameters for perflutren_phospholipid_microspheres. |
| popPK | Tsivgoulis_2007 | irrelevant | 0 | 0 | This review reports clinical outcomes for perflutren-lipid microspheres but no pharmacokinetic disposition parameters or values. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
