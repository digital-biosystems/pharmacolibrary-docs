<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;edetates&quot;}]"></div>

# edetates

- **generic name:** edetates
- **ATC codes:** `V03AB03`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Edetates, such as sodium calcium edetate, are chelating antidotes used to treat heavy metal poisoning, most notably lead poisoning. It is included on the WHO list of essential medicines, indicating it remains in use worldwide, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q9189390](https://www.wikidata.org/wiki/Q9189390) and the WHO ATC classification; not checked by a person.</small>

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
| 2026-10-07 19:09 | 3:04 | 0/0/0 | 0/0/0 | 0/0/0 | 20,814/1,746 | ollama / glm-5.3-flash | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 1444 matched, 18 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Peters_1994.pdf` | Peters AM et al., Measurement of the extravascular concen…, Nuclear medicine communicat… (1994) | popPK | 7 | [10.1097/00006231-199402000-00002](https://doi.org/10.1097/00006231-199402000-00002) | [8170640](https://pubmed.ncbi.nlm.nih.gov/8170640) | 51Cr-EDTA plasma clearance curves fitted with two exponentials and numeric clearance values (68 ml/min/1.73m²) are reported in the abstract, though volume/half-life parameters are not shown. |

<sub>queue written 2026-10-07T19:09:12.317622+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alestig_1984 | irrelevant | 0 | 0 | 51Cr-EDTA is only used as a GFR diagnostic probe; the study drug is ceftazidime, with no edetate PK parameters reported. |
| popPK | Batts_1989 | irrelevant | 0 | 0 | In-vitro frog palate study of mucociliary transport with EDTA as a preservative; no pharmacokinetic disposition parameters for edetates. |
| popPK | Becker_1994 | irrelevant | 0 | 0 | 51Cr-EDTA is only used as a diagnostic marker of renal function; no PK disposition parameters for edetates are reported. |
| popPK | Bouvet_2006 | irrelevant | 2 | 3 | 51Cr-EDTA is used only as a GFR diagnostic probe; the PK model is of the covariate equation for GFR, not edetate disposition parameters (no CL/V for EDTA itself). |
| popPK | Durand_2002 | irrelevant | 1 | 0 | A review of renal imaging tracers (DTPA/EDTA used only as diagnostic probes) with no PK disposition parameters or numeric values reported. |
| popPK | Francis_1983 | irrelevant | 0 | 0 | 51Cr-EDTA is used only as a GFR diagnostic probe; no edetate disposition parameters are reported. |
| popPK | Hällgren_1978 | irrelevant | 0 | 0 | Study of serum gastrin vs kidney function; 51Cr-EDTA is only a GFR marker, no edetate PK parameters reported. |
| popPK | Iwata_1998 | irrelevant | 0 | 0 | EDTA is only a permeability probe (blood-to-lumen clearance marker), not a PK study of edetate disposition; no PK parameters reported. |
| popPK | Kanwar_1994 | irrelevant | 0 | 0 | 51Cr-EDTA is only a permeability probe, not a PK study of edetates; no disposition parameters reported. |
| popPK | Messa_1994 | irrelevant | 0 | 0 | EDTA is used only as a diagnostic hypocalcemic challenge and Cr51EDTA as GFR marker; no PK disposition parameters for edetates are reported. |
| popPK | Nishiyama_2014 | irrelevant | 0 | 0 | EDTA is used only as a metal chelator in a biochemical in-vitro study of a catalytic antibody; no pharmacokinetic parameters for edetates are reported. |
| popPK | Nyberg_1987 | irrelevant | 1 | 2 | 51Cr-EDTA is used only as a GFR diagnostic marker; no PK disposition parameters (CL, V, half-life) for edetate itself are reported, and individual GFR values are in a table not fully provided. |
| popPK | Paller_1988 | irrelevant | 0 | 0 | EDTA is only used as an iron complex to probe renal injury; no PK parameters for edetates are reported. |
| popPK | Salahudeen_1989 | irrelevant | 2 | 2 | 51Cr-EDTA is used only as a GFR marker; no disposition PK parameters (CL, V, model) for edetates itself are reported. |
| popPK | Shaw_1991 | irrelevant | 1 | 2 | EDTA is only a paracellular diffusional marker in a rat placental Mg transport study, not a PK study of edetate disposition; only Kmf values are referenced without numeric parameters. |
| popPK | Skinner_1994 | irrelevant | 2 | 1 | 51Cr-EDTA is only a diagnostic GFR marker; no disposition parameters (CL, V, half-life) for the edetate itself are reported. |
| popPK | Willems_2009 | irrelevant | 0 | 0 | Cr-EDTA clearance is only used as a GFR reference marker; no edetate disposition parameters are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
