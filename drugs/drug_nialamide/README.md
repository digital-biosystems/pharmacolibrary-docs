<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;nialamide&quot;}]"></div>

# nialamide

- **generic name:** nialamide
- **ATC codes:** `N06AF02`
- **DrugBank:** [DB04820](https://go.drugbank.com/drugs/DB04820) · **PubChem:** [CID 4472](https://pubchem.ncbi.nlm.nih.gov/compound/4472)
- **molar mass:** 298.3397 g/mol (C16H18N4O2) — DrugBank
- **groups:** approved, withdrawn

## About

Nialamide is a non-selective monoamine oxidase inhibitor that was used as an antidepressant. It has been withdrawn and is no longer in clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2359711](https://www.wikidata.org/wiki/Q2359711) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:48 | 0:19 | 0/0/0 | 0/0/0 | 0/0/0 | 25,844/946 | einfracz / qwen3.8-27b | 2 | 1/0 | 2/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=nialamide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `COMT` unknown, `MAOA` unknown, `MAOB` unknown | DrugBank actor |
| metabolism | kidney | `COMT` unknown | DrugBank actor |
| metabolism | liver | `COMT` unknown, `MAOA` unknown | DrugBank actor |
| metabolism | platelet | `MAOB` unknown | DrugBank actor |
| metabolism | small intestine | `MAOA` unknown | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 25 matched, 25 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Purcell_1989.pdf` | Purcell WM et al., Contribution of post-secretory mechanis…, International archives of a… (1989) | pd | 4 | [10.1159/000235059](https://doi.org/10.1159/000235059) | [2482259](https://www.ncbi.nlm.nih.gov/pubmed/2482259) | metadata signals extractable PD data (concentrationeffect) |

<sub>queue written 2026-10-07T18:48:26.517705+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmad_2012 | irrelevant | 0 | 0 | The paper reports in-vitro enzyme inhibition (IC50) values for nialamide, not pharmacokinetic disposition parameters. |
| popPK | Camargo_1976 | irrelevant | 0 | 0 | The study investigates the physiological effects of catecholamines on natriuresis and kaliuresis in rats, using nialamide only as a mechanism tool (MAO inhibitor) rather than as the subject of a pharmacokinetic analysis. |
| PD | Camargo_1976 | not_relevant | 1 | 0 | The paper mentions nialamide only as a mechanism-based enhancer of norepinephrine effects (MAO inhibition) without providing any numeric dose-response or concentration-effect data for nialamide itself. |
| popPK | Corrodi_1975 | irrelevant | 0 | 0 | The study focuses on the mechanism of action of ergot drugs on 5-HT neurons in rats, using nialamide only as a co-administered agent, and reports no pharmacokinetic parameters for nialamide. |
| PD | Corrodi_1975 | not_relevant | 1 | 1 | The paper focuses on ergot drugs (ergocornine, MPME) and only mentions nialamide qualitatively as a pretreatment agent to enhance MPME effects, without providing any exposure-response or dose-response data for nialamide itself. |
| popPK | Córdoba_1990 | irrelevant | 0 | 0 | The study is a behavioral pharmacology investigation in mice using nialamide as an antidepressant, with no pharmacokinetic parameter reporting. |
| PD | Córdoba_1990 | not_relevant | 1 | 0 | The paper mentions nialamide only as one of several treatments whose effects were enhanced by gangliosides, but it does not report any specific exposure-response or dose-response data, numeric PD parameters, or concentration-effect curves for nialamide itself. |
| popPK | Datla_1990 | irrelevant | 0 | 0 | The study is a behavioral pharmacology investigation in rats using nialamide as a tool compound, with no pharmacokinetic parameter modeling or reporting. |
| PD | Datla_1990 | not_relevant | 1 | 0 | The paper describes behavioral effects of nialamide but does not provide numeric concentration-effect data, dose-response curves, or PD parameters in the provided text. |
| popPK | Goyal_1981 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of muscle contraction in rat anococcygeus tissue, not a pharmacokinetic study reporting disposition parameters for nialamide. |
| PD | Goyal_1981 | not_relevant | 3 | 2 | The paper describes a qualitative leftward shift of dose-response curves for 5HT and NA in the presence of nialamide, but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative exposure-response model for nialamide itself. |
| popPK | Kürten_2022 | irrelevant | 0 | 0 | The study is a mechanistic in vitro investigation of ubiquilin-1 expression in mouse brain slices using nialamide as a pharmacological modulator, not a pharmacokinetic study. |
| popPK | Lopez_1989 | irrelevant | 1 | 0 | The study focuses on the pharmacodynamic effects of nialamide on urea, uric acid, and creatinine clearance, not the pharmacokinetic parameters of nialamide itself. |
| popPK | Miyauchi_1981 | irrelevant | 0 | 0 | Nialamide is used only as a pretreatment drug to probe the mechanism of action; the pharmacokinetic parameters reported are for methamphetamine, not nialamide. |
| popPK | OSMAN_1961 | irrelevant | 0 | 0 | no_text gate: only 160 chars of text extracted (&lt; 400) |
| PD | OSMAN_1961 | not_relevant | 1 | 0 | The text is a qualitative review of nialamide's pharmacology and clinical premises, lacking any numeric concentration-effect data, dose-response curves, or PD parameters. |
| popPK | Purcell_1989 | irrelevant | 0 | 0 | no_text gate: only 173 chars of text extracted (&lt; 400) |
| PD | Purcell_1989 | not_relevant | 0 | 0 | The paper focuses on histamine and 5-HT secretion from mast cells in response to compound 48/80 and does not mention nialamide or report any pharmacodynamic parameters for it. |
| popPK | Shah_1986 | irrelevant | 0 | 0 | The study focuses on the hemodynamic effects of levamisole in dogs, with nialamide used only as a pretreatment agent (comparator/blocker) rather than the subject of pharmacokinetic analysis. |
| PD | Shah_1986 | not_relevant | 1 | 0 | The paper investigates levamisole, not nialamide; nialamide is only mentioned as a pretreatment agent that qualitatively shifts the levamisole dose-response curve, with no numeric PD parameters provided for nialamide itself. |
| popPK | Silva_2025 | irrelevant | 0 | 0 | no_text gate: only 140 chars of text extracted (&lt; 400) |
| PD | Silva_2025 | not_relevant | 0 | 0 | The paper focuses on virtual screening for ROCK inhibitors and does not report any pharmacodynamic or exposure-response data for nialamide. |
| popPK | Vogh_1984 | irrelevant | 0 | 0 | The study investigates the mechanism of CSF formation using nialamide as a MAO inhibitor/co-factor, not the pharmacokinetics of nialamide itself. |
| popPK | Wayment_2001 | irrelevant | 0 | 0 | The study characterizes dopamine clearance kinetics using nialamide only as a monoamine oxidase inhibitor tool drug, not as the subject drug for PK parameter estimation. |
| popPK | Yamada_1993 | irrelevant | 0 | 0 | The study investigates the neurochemical effects of nialamide on neurotransmitter levels in rat brain, not its pharmacokinetic disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
