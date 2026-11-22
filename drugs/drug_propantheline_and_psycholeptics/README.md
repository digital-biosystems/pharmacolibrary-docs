<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03C&quot;,&quot;href&quot;:&quot;atc/A03C.md&quot;},{&quot;label&quot;:&quot;propantheline and psycholeptics&quot;}]"></div>

# propantheline and psycholeptics

- **generic name:** propantheline and psycholeptics
- **ATC codes:** `A03CA34`
- **DrugBank:** none · **PubChem:** none
- **groups:** not captured

## About

This product is a combination of an anticholinergic antispasmodic and psycholeptics. It treats functional gastrointestinal disorders.

<small>⚠️ **Unverified** — written by `qwen3.8-27b` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-20 10:35 | 2:20 | 0/0/0 | 0/0/0 | 0/0/0 | 74,422/5,275 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 16 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Vose_1979.pdf` | Vose CW et al., Pharmacokinetics of propantheline bromi…, British journal of clinical… (1979) | popPK | 10 | [10.1111/j.1365-2125.1979.tb00902.x](https://doi.org/10.1111/j.1365-2125.1979.tb00902.x) | [760746](https://pubmed.ncbi.nlm.nih.gov/760746) | The study reports quantitative pharmacokinetic parameters (half-lives, clearance) for propantheline bromide in humans with explicit numeric values in the text. |

<sub>queue written 2026-11-20 10:35 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aghazadeh-Habashi_2008 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of meloxicam, with propantheline used only as a tool drug to induce vagal suppression. |
| popPK | DeVault_1987 | irrelevant | 0 | 0 | The study investigates salivary function and acid neutralization rather than reporting quantitative pharmacokinetic parameters (CL, V, etc.) for propantheline. |
| popPK | Forrest_1982 | irrelevant | 0 | 0 | The paper describes the pharmacokinetics of paracetamol, with propantheline mentioned only as a substance that delays absorption. |
| popPK | Gibiński_1979 | irrelevant | 1 | 0 | The paper studies trithiozine, with propantheline only serving as a comparator for gastric secretion properties rather than the subject of the pharmacokinetic analysis. |
| popPK | Guay_2003 | irrelevant | 3 | 2 | The paper is a review that mentions propantheline's pharmacokinetics are covered, but the provided text focuses almost exclusively on quantitative details for oxybutynin and tolterodine, leaving propantheline as a secondary subject with no specific numeric values in this excerpt. |
| popPK | Hughes_1990 | irrelevant | 0 | 0 | The study subject is the antibiotic cefpodoxime proxetil, while propantheline is only used as a gastric motility modulator/co-administered agent. |
| popPK | Joel_1995 | irrelevant | 0 | 0 | The subject drug of this study is etoposide, and propantheline is used only as a co-administered agent to modify etoposide bioavailability. |
| popPK | Marathe_2000 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of metformin, using propantheline only as a comparator agent to alter gastric emptying, rather than as the subject drug. |
| popPK | Martínez_1991 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of droxicam/piroxicam, with propantheline used only as a gastric motility modifier and not as the subject of PK parameter estimation. |
| popPK | Melvin_1990 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of zidovudine (AZT), using propantheline bromide as a probe/co-administered agent to test its effect on absorption. |
| popPK | Miyake_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of dipyridamole as a model drug, using propantheline bromide only to alter GI transit in the animal model, not as the subject of PK parameter estimation. |
| popPK | Nakade_2008 | irrelevant | 0 | 0 | The study evaluates the effect of imidafenacin on digoxin pharmacokinetics, using propantheline only as a comparator mentioned in the background. |
| popPK | Shukla_1992 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cefprozil, with propantheline used only as a co-administered agent to modify gastrointestinal motility, not as the subject drug. |
| popPK | Singh-Franco_2005 | irrelevant | 0 | 0 | The paper is a review of trospium chloride, not propantheline, and does not report quantitative PK parameters for the target drug. |
| popPK | Sánchez_1989 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of droxicam/piroxicam, with propantheline used only as a gastric emptying modifier. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpropantheline_and_psycholeptics%5D&body=Drug%3A%20propantheline_and_psycholeptics%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_propantheline_and_psycholeptics/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
