<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;nebivolol&quot;}]"></div>

# nebivolol

- **generic name:** nebivolol
- **ATC codes:** `C07AB12`, `C07BB12`, `C07FB12`, `C09BX07`, `C09DX05`, `C10BX22`
- **DrugBank:** [DB04861](https://go.drugbank.com/drugs/DB04861) · **PubChem:** [CID 71301](https://pubchem.ncbi.nlm.nih.gov/compound/71301)
- **molar mass:** 405.435 g/mol (C22H25F2NO4) — DrugBank
- **groups:** approved, investigational

## About

Nebivolol is a selective beta blocker used to treat high blood pressure (arterial hypertension). It is an approved medicine, available alone and in fixed combinations with thiazides, calcium channel blockers, ACE inhibitors, ARBs, or lipid-lowering drugs.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418130](https://www.wikidata.org/wiki/Q418130) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| nebivolol | parent | 405.435 | C22H25F2NO4 | DrugBank | [71301](https://pubchem.ncbi.nlm.nih.gov/compound/71301) | Marques_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 03:34 | 1:37 | 0/1/0 | 1/0/0 | 0/0/0 | 142,069/7,029 | einfracz / qwen3.8-27b | 16 | 2/4 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.875), gpt-oss:120b (partly confirmed, agreement 0.941). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Marques_2022_reference](drugs/drug_nebivolol/Nebivolol_Marques2022_reference.md) | — | 2-compartment (no model) | 11 | Marques L et al., New Data for Nebivolol after In Silico…, Pharmaceutics (2022) | [10.3390/pharmaceutics14091911](https://doi.org/10.3390/pharmaceutics14091911) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Bocci_2020_CPE](drugs/drug_nebivolol/pd_Bocci_2020_CPE.md) | SARS-CoV-2 mediated cytopathic effect (CPE) ← nebivolol · direct Emax (saturable) effect | — | Bocci G et al., Virtual and, ACS pharmacology & translat… (2020) | [10.1021/acsptsci.0c00131](https://doi.org/10.1021/acsptsci.0c00131) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=nebivolol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` substrate, `CYP2D6` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ADRB1 (target), ADRB2 (target), ADRB3 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Briciu_2014.pdf` | Briciu C et al., A pharmacokinetic drug interaction stud…, Journal of clinical pharmac… (2014) | popPK | 5 | [10.1111/jcpt.12180](https://doi.org/10.1111/jcpt.12180) | [24845234](https://pubmed.ncbi.nlm.nih.gov/24845234) | The study reports non-compartmental PK parameters (AUC, Cmax, tmax) for nebivolol in a drug interaction context, but does not explicitly report compartmental parameters like Clearance (CL), Volume (V), or Half-life (t1/2) as primary numeric outputs in the provided text. |

<sub>queue written 2026-10-15T03:32:48.700884+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bocci_2020 | irrelevant | 0 | 0 | The study is an in vitro antiviral screening assay that reports EC50 values for nebivolol against SARS-CoV-2, but does not provide any pharmacokinetic disposition parameters such as clearance, volume of distribution, or half-life. |
| popPK | Bundkirchen_2001 | irrelevant | 0 | 0 | The study investigates the in vitro mechanistic effects of nebivolol on calcium sensitivity in cardiac muscle fibers and does not report any pharmacokinetic parameters. |
| PD | Bundkirchen_2001 | not_relevant | 0 | 0 | The study reports a negative result (no effect) on cardiac calcium sensitivity and does not provide a pharmacodynamic exposure-response or dose-response model for nebivolol. |
| popPK | Garbán_2004 | irrelevant | 0 | 0 | The study investigates the mechanism of action (estrogen receptor binding) of nebivolol in isolated tissues and cells, providing no pharmacokinetic disposition parameters. |
| popPK | Gschwend_2009 | irrelevant | 0 | 0 | The study is a hemodynamic and vascular function experiment in rats using nebivolol as a therapeutic agent, and it does not report any pharmacokinetic parameters (e.g., CL, V, t1/2) for the drug. |
| PD | Gschwend_2009 | not_relevant | 2 | 1 | The study reports pharmacodynamic effects (endothelial relaxation) at fixed doses but does not provide concentration-effect data, PK parameters, or a fitted PD model with numeric parameters like EC50 or slope. |
| popPK | Kannan_2012 | irrelevant | 0 | 0 | Nebivolol is used only as a positive control to compare cardiac functional effects (heart rate and blood flow) in zebrafish, not as the subject of a pharmacokinetic study. |
| PD | Kannan_2012 | not_relevant | 1 | 0 | Nebivolol is used only as a single-dose positive control for comparison; no dose-response curve or numeric PD parameters (EC50, Emax) are reported for nebivolol. |
| popPK | Okamoto_2014 | irrelevant | 0 | 0 | The study reports hemodynamic effects (blood pressure) but contains no quantitative pharmacokinetic parameters (e.g., clearance, volume, half-life) for nebivolol. |
| popPK | Rawat_2023 | relevant | 4 | 8 | The study reports quantitative PK parameters (Cmax, AUC, Tmax) for nebivolol in rabbit aqueous humor and plasma, but lacks compartmental model parameters like CL and Vd. |
| popPK | Rosenkranz_2006 | irrelevant | 0 | 0 | This is an in-vitro pharmacodynamic study measuring vasodilation in rat aorta rings, reporting EC50 values for vasorelaxation rather than pharmacokinetic disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 03:32 UTC</sub>
