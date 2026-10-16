<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;nadolol&quot;}]"></div>

# nadolol

- **generic name:** nadolol
- **ATC codes:** `C07AA12`, `C07BA12`
- **DrugBank:** [DB01203](https://go.drugbank.com/drugs/DB01203) · **PubChem:** [CID 39147](https://pubchem.ncbi.nlm.nih.gov/compound/39147)
- **molar mass:** 309.4006 g/mol (C17H27NO4) — DrugBank
- **groups:** approved, investigational

## About

Nadolol is a non-selective beta blocker used to treat high blood pressure, angina, and other heart conditions such as long QT syndrome. It is an approved medicine, used mainly in cardiovascular care, though it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q424952](https://www.wikidata.org/wiki/Q424952) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| nadolol | parent | 309.401 | C17H27NO4 | DrugBank | [39147](https://pubchem.ncbi.nlm.nih.gov/compound/39147) | Mehta_1992 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 03:32 | 0:21 | 0/1/0 | 0/0/0 | 0/0/0 | 48,373/1,032 | einfracz / qwen3.8-27b | 17 | 2/0 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed 1/2</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Mehta_1992_reference](drugs/drug_nadolol/Nadolol_Mehta1992_reference.md) | — | 1-compartment (no model) | 1 | Mehta AV et al., Pharmacokinetics of nadolol in children…, Journal of clinical pharmac… (1992) | [10.1002/j.1552-4604.1992.tb03805.x](https://doi.org/10.1002/j.1552-4604.1992.tb03805.x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=nadolol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| distribution | blood | `ORM1` binder | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `SLC47A1` substrate, `SLC47A2` substrate | DrugBank actor |
| excretion | liver | `SLC47A1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ADRB1 (target), ADRB2 (target), POU2F1 (substrate), POU2F2 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mehta_1992.pdf` | Mehta AV et al., Pharmacokinetics of nadolol in children…, Journal of clinical pharmac… (1992) | popPK | 9 | [10.1002/j.1552-4604.1992.tb03805.x](https://doi.org/10.1002/j.1552-4604.1992.tb03805.x) | [1474163](https://pubmed.ncbi.nlm.nih.gov/1474163) | The abstract reports specific half-life values for distribution and elimination phases in children, but does not explicitly list clearance (CL) or volume of distribution (V) values. |
| `Tan_2021.pdf` | Tan HJ et al., Oral epigallocatechin gallate reduces i…, Phytomedicine : internation… (2021) | popPK | 7 | [10.1016/j.phymed.2021.153623](https://doi.org/10.1016/j.phymed.2021.153623) | [34303263](https://pubmed.ncbi.nlm.nih.gov/34303263) | The study reports quantitative PK parameters (Cmax, AUC, clearance) for nadolol in rats, but the specific numeric values are not explicitly listed in the provided text. |

<sub>queue written 2026-10-15T03:32:16.619916+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdelmawla_2001_2 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of adrenoceptor subtypes using nadolol as a non-selective beta-blocker control, and it does not report any pharmacokinetic parameters (CL, V, t1/2) for nadolol. |
| popPK | Imbrogno_2006 | irrelevant | 0 | 0 | The study investigates beta3-adrenoceptor mechanisms in eel hearts using nadolol as a non-specific beta-blocker/control agent, not its pharmacokinetics. |
| popPK | Mallem_2002 | irrelevant | 0 | 0 | The study is an in vitro pharmacological investigation of receptor mechanisms in rat aortic rings where nadolol is used only as a tool compound, with no pharmacokinetic parameters reported. |
| PD | Mallem_2002 | not_relevant | 0 | 0 | The study is an in vitro pharmacology experiment on aortic rings investigating beta-adrenergic receptor mechanisms; it does not report a pharmacokinetic or exposure-response relationship for nadolol in a biological system (PK/PD). |
| popPK | Mallem_2003 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of beta-adrenergic receptors in rat aorta where nadolol is used as a functional antagonist, not a subject of pharmacokinetic analysis. |
| PD | Mallem_2003 | not_relevant | 0 | 0 | The study reports concentration-response parameters (pD2, Emax) for beta-agonists (CGP 12,177, cyanopindolol), not for nadolol; nadolol is used only as a qualitative antagonist to exclude beta-1/2 involvement. |
| popPK | Ozakca_2007 | irrelevant | 0 | 0 | Nadolol is used only as a pharmacological tool/antagonist in an in-vitro pharmacological study of rat gastric tissue, not as the subject of a pharmacokinetic study. |
| PD | Ozakca_2007 | not_relevant | 0 | 0 | The paper is a pharmacological study on beta-adrenoceptor subtypes in rat gastric fundus; nadolol is used only as a non-selective antagonist to characterize receptor involvement, not as the subject of a PD or exposure-response analysis. |
| popPK | Sauvaget_2010 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacodynamic study on aorta vasodilatation where nadolol is used only as a co-administered antagonist, not a subject of PK analysis. |
| PD | Sauvaget_2010 | not_relevant | 1 | 0 | The paper reports a qualitative inhibition of celiprolol-induced vasodilation by nadolol, but provides no numeric concentration-effect data, dose-response curve, or PD parameters for nadolol itself. |
| popPK | Tan_2021 | relevant | 7 | 2 | The study reports quantitative PK parameters (Cmax, AUC, clearance) for nadolol in rats, but the specific numeric values are not explicitly listed in the provided text. |
| popPK | Toumaniantz_2005 | irrelevant | 0 | 0 | This is a vascular physiology study using nadolol as a receptor antagonist to block beta-adrenergic receptors, not a pharmacokinetic study measuring disposition parameters. |
| PD | Toumaniantz_2005 | not_relevant | 2 | 1 | The paper reports a qualitative pharmacological effect of nadolol (blocking beta1/2 receptors to unmask beta3 response) in a transgenic rat model, but it does not provide a concentration-effect curve, dose-response relationship, or numeric PD parameters (like EC50 or Emax for nadolol itself) for nadolol. |
| popPK | Trochu_1999 | irrelevant | 0 | 0 | The study is a pharmacological investigation of beta-3 adrenoceptor-mediated vasorelaxation in rat aorta using nadolol only as a blocking agent, reporting no pharmacokinetic parameters. |
| popPK | Webster_2026 | irrelevant | 0 | 0 | The study analyzes the effect of nadolol dose on cardiopulmonary exercise performance (Vo2, heart rate) rather than pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Williamson_1994 | irrelevant | 0 | 0 | The study is a pharmacodynamic/mechanistic investigation of alpha-adrenergic receptors in rat myocardium where nadolol is used solely as a non-selective beta-blocker tool, and no pharmacokinetic parameters are reported. |
| PD | Williamson_1994 | not_relevant | 0 | 0 | The study investigates the inotropic effects of phenylephrine in the presence of nadolol as a beta-blocker, but does not report a pharmacodynamic or exposure-response relationship for nadolol itself. |
| popPK | Wolkowicz_2002 | irrelevant | 0 | 0 | Nadolol is used only as a beta-blocker control to rule out adrenergic involvement in a rat atrial contractility study, with no pharmacokinetic parameters reported. |
| PD | Wolkowicz_2002 | not_relevant | 0 | 0 | The paper investigates the mechanism of prostaglandin E2 receptor action in rat atria; nadolol is only mentioned as a negative control (beta-blocker) that did not affect the specific agonist-induced response, and no PD parameters for nadolol are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 03:32 UTC</sub>
