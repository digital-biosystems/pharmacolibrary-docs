<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01D&quot;,&quot;href&quot;:&quot;atc/C01D.md&quot;},{&quot;label&quot;:&quot;pentaerithrityl tetranitrate&quot;}]"></div>

# pentaerithrityl tetranitrate

- **generic name:** pentaerithrityl tetranitrate
- **ATC codes:** `C01DA05`
- **DrugBank:** [DB06154](https://go.drugbank.com/drugs/DB06154) · **PubChem:** none
- **groups:** approved, withdrawn

## About

Pentaerithrityl tetranitrate is an organic nitrate vasodilator that was used to treat angina pectoris. It has been withdrawn and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q189334](https://www.wikidata.org/wiki/Q189334) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=pentaerithrityl_tetranitrate).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `ALDH2` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: Free radicals (target), GUCY1A2 (inducer), HBA1 (target), HBB (target), NOS3 (inducer).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 10:24 | 0:19 | 0/0/0 | 0/0/0 | 0/0/0 | 7,253/536 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/0 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `King_1986.pdf` | King SY et al., Pharmacokinetics of pentaerythritol tet…, Journal of pharmaceutical s… (1986) | popPK | 10 | [10.1002/jps.2600750308](https://doi.org/10.1002/jps.2600750308) | [3701607](https://pubmed.ncbi.nlm.nih.gov/3701607) | The study reports quantitative pharmacokinetic parameters (clearance, volume of distribution, half-life) for pentaerythritol tetranitrate in rats. |
| `Weber_1995.pdf` | Weber W et al., Pharmacokinetics and bioavailability of…, Arzneimittel-Forschung (1995) | popPK | 9 |  | [8573222](https://pubmed.ncbi.nlm.nih.gov/8573222) | The study reports quantitative pharmacokinetic parameters (Cmax, Tmax, half-life, AUC) for the metabolites of pentaerithrityl tetranitrate, which is accepted as relevant PK data for the parent drug when the parent is not measurable. |
| `Gilbert_1982.pdf` | Gilbert JD et al., A study of the plasma levels of pentaer…, Arzneimittel-Forschung (1982) | popPK | 8 |  | [7201836](https://pubmed.ncbi.nlm.nih.gov/7201836) | The study reports pharmacokinetics of pentaerythritol mononitrate (the major metabolite of PETN) in dogs, but the specific numeric parameter values are not present in the provided evidence text. |

<sub>queue written 2026-10-06 10:24 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Daiber_2010 | irrelevant | 0 | 0 | The paper focuses on the mechanistic antioxidant properties and HO-1 induction of PETN, not on quantitative pharmacokinetic parameters. |
| popPK | Gilbert_1982 | relevant | 8 | 2 | The study reports pharmacokinetics of pentaerythritol mononitrate (the major metabolite of PETN) in dogs, but the specific numeric parameter values are not present in the provided evidence text. |
| popPK | Gilbert_1984 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of meprobamate, with pentaerithrityl tetranitrate (PETN) serving only as a co-administered component in the formulation, and no quantitative PK parameters for PETN are reported. |
| popPK | Nang_2019 | irrelevant | 0 | 0 | The study focuses on polymyxin B pharmacokinetics and resistance mechanisms in Klebsiella pneumoniae, not pentaerithrityl tetranitrate. |
| popPK | Stalleicken_1997 | irrelevant | 2 | 0 | The paper describes the development and validation of a GC/MS assay for PETN and its metabolites, reporting only validation metrics (accuracy, range) and qualitative detection, without providing quantitative pharmacokinetic parameters (CL, V, t1/2) or population PK models. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpentaerithrityl_tetranitrate%5D&body=Drug%3A%20pentaerithrityl_tetranitrate%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pentaerithrityl_tetranitrate/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
