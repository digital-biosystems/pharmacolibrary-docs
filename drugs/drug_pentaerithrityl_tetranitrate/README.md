<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01D&quot;,&quot;href&quot;:&quot;atc/C01D.md&quot;},{&quot;label&quot;:&quot;pentaerithrityl tetranitrate&quot;}]"></div>

# pentaerithrityl tetranitrate

- **generic name:** pentaerithrityl tetranitrate
- **ATC codes:** `C01DA05`
- **DrugBank:** [DB06154](https://go.drugbank.com/drugs/DB06154) · **PubChem:** not captured
- **groups:** approved, withdrawn

## About

Pentaerithrityl tetranitrate is an organic nitrate vasodilator that was used to treat angina pectoris. It has been withdrawn and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q189334](https://www.wikidata.org/wiki/Q189334) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 10:24 | 0:19 | 0/0/0 | 0/0/0 | 0/0/0 | 7,253/536 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/0 | 2/0 | 0 |

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
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `King_1986.pdf` | King SY et al., Pharmacokinetics of pentaerythritol tet…, Journal of pharmaceutical s… (1986) | popPK | 10 | [10.1002/jps.2600750308](https://doi.org/10.1002/jps.2600750308) | [3701607](https://pubmed.ncbi.nlm.nih.gov/3701607) | The study reports quantitative pharmacokinetic parameters (clearance, volume of distribution, half-life) for pentaerythritol tetranitrate in rats. |
| `Weber_1995.pdf` | Weber W et al., Pharmacokinetics and bioavailability of…, Arzneimittel-Forschung (1995) | popPK | 9 | not captured | [8573222](https://pubmed.ncbi.nlm.nih.gov/8573222) | The study reports quantitative pharmacokinetic parameters (Cmax, Tmax, half-life, AUC) for the metabolites of pentaerithrityl tetranitrate, which is accepted as relevant PK data for the parent drug when the parent is not measurable. |
| `Gilbert_1982.pdf` | Gilbert JD et al., A study of the plasma levels of pentaer…, Arzneimittel-Forschung (1982) | popPK | 8 | not captured | [7201836](https://pubmed.ncbi.nlm.nih.gov/7201836) | The study reports pharmacokinetics of pentaerythritol mononitrate (the major metabolite of PETN) in dogs, but the specific numeric parameter values are not present in the provided evidence text. |

<sub>queue written 2026-10-06T10:24:59.713882+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Daiber_2010 | irrelevant | 0 | 0 | The paper focuses on the mechanistic antioxidant properties and HO-1 induction of PETN, not on quantitative pharmacokinetic parameters. |
| popPK | Gilbert_1982 | relevant | 8 | 2 | The study reports pharmacokinetics of pentaerythritol mononitrate (the major metabolite of PETN) in dogs, but the specific numeric parameter values are not present in the provided evidence text. |
| popPK | Gilbert_1984 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of meprobamate, with pentaerithrityl tetranitrate (PETN) serving only as a co-administered component in the formulation, and no quantitative PK parameters for PETN are reported. |
| popPK | Nang_2019 | irrelevant | 0 | 0 | The study focuses on polymyxin B pharmacokinetics and resistance mechanisms in Klebsiella pneumoniae, not pentaerithrityl tetranitrate. |
| popPK | Stalleicken_1997 | irrelevant | 2 | 0 | The paper describes the development and validation of a GC/MS assay for PETN and its metabolites, reporting only validation metrics (accuracy, range) and qualitative detection, without providing quantitative pharmacokinetic parameters (CL, V, t1/2) or population PK models. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
