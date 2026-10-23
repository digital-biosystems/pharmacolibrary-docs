<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09G&quot;,&quot;href&quot;:&quot;atc/V09G.md&quot;},{&quot;label&quot;:&quot;ammonia (13N)&quot;}]"></div>

# ammonia (13N)

- **generic name:** ammonia (13N)
- **ATC codes:** `V09GX05`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Ammonia labelled with a radioactive isotope of nitrogen is a diagnostic radiopharmaceutical used in imaging of the heart. It is classified as a cardiovascular diagnostic tracer, used in nuclear medicine procedures to assess blood flow to the heart muscle.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:40 | 2:16 | 0/0/0 | 0/0/0 | 0/0/0 | 19,647/4,809 | openai / gpt-6-luna | 2 | 1/1 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 32 matched, 14 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Phelps_1981.pdf` | Phelps ME et al., Cerebral extraction of N-13 ammonia: it…, Stroke (1981) | popPK | 8 | [10.1161/01.str.12.5.607](https://doi.org/10.1161/01.str.12.5.607) | [7303045](https://pubmed.ncbi.nlm.nih.gov/7303045) | The study models ammonia extraction and reports numeric extraction fractions, though specific PS estimates are not provided. |

<sub>queue written 2026-10-07T19:40:07.741791+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alessio_2010 | irrelevant | 1 | 0 | This is a review of cardiac PET imaging and provides no numeric disposition parameters for 13N-ammonia. |
| popPK | Hashimoto_1994 | irrelevant | 0 | 0 | [13N] ammonia is only used as an imaging agent, with no quantitative disposition parameters reported. |
| popPK | Litvinova_2000 | irrelevant | 0 | 0 | [N-13]-ammonia is only a perfusion tracer; the reported kinetic values are for [C-11]-acetate. |
| popPK | Nickles_1993 | irrelevant | 0 | 0 | 13N-ammonia is only a visual comparator; quantitative clearance data are for 94mTc-teboroxime. |
| popPK | Schelbert_1982 | irrelevant | 0 | 0 | N-13 ammonia is used as a blood-flow tracer, with no quantitative pharmacokinetic disposition parameters reported. |
| popPK | Schröter_1994 | irrelevant | 0 | 0 | This review mentions N-13 ammonia only as a perfusion tracer and reports no quantitative disposition parameters. |
| popPK | Schwaiger_1985 | irrelevant | 0 | 0 | N-13 ammonia is only a blood-flow tracer; no quantitative pharmacokinetic parameters are reported. |
| popPK | Torizuka_1985 | irrelevant | 0 | 0 | The supplied evidence contains no study details or numeric pharmacokinetic parameters. |
| popPK | Vanoverschelde_1992 | irrelevant | 0 | 0 | 13N-ammonia is used as a PET perfusion tracer, and no ammonia disposition parameters are reported. |
| popPK | Wu_1995 | irrelevant | 1 | 0 | Canine ammonia PET blood curves are studied, but no quantitative disposition parameters are reported. |
| popPK | Yoshida_1986 | irrelevant | 1 | 0 | The study describes tracer clearance qualitatively but reports no numeric pharmacokinetic parameters. |
| popPK | van_2000 | irrelevant | 0 | 0 | Nitrogen-13 ammonia is only a PET tracer, and no ammonia disposition parameters are reported. |
| popPK | vom_2001 | irrelevant | 0 | 0 | This is a review of ammonia-13 imaging, not a study reporting quantitative disposition parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
