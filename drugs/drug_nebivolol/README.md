<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;nebivolol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nebivolol_Marques2022_reference&quot;,&quot;label&quot;:&quot;Marques_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nebivolol/Nebivolol_Marques2022_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

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
| 2026-10-07 00:31 | 6:08 | 1/0/0 | 0/0/0 | 0/0/0 | 156,762/12,807 | ollama / qwen3.8:27b-mtp-q8_0 | 16 | 2/4 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.875), gpt-oss:120b (partly confirmed, agreement 0.941). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Marques_2022_reference](drugs/drug_nebivolol/Nebivolol_Marques2022_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 | Marques L et al., New Data for Nebivolol after In Silico…, Pharmaceutics (2022) | [10.3390/pharmaceutics14091911](https://doi.org/10.3390/pharmaceutics14091911) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Briciu_2014.pdf` | Briciu C et al., A pharmacokinetic drug interaction stud…, Journal of clinical pharmac… (2014) | popPK | 8 | [10.1111/jcpt.12180](https://doi.org/10.1111/jcpt.12180) | [24845234](https://pubmed.ncbi.nlm.nih.gov/24845234) | The study reports quantitative non-compartmental pharmacokinetic parameters (Cmax, Tmax, AUC) for nebivolol in humans, though it lacks specific clearance or volume values. |

<sub>queue written 2026-10-07T00:26:38.941604+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bocci_2020 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral screening study that reports EC50 values for nebivolol against SARS-CoV-2, but it does not report any pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| popPK | Bundkirchen_2001 | irrelevant | 0 | 0 | The study investigates the mechanistic effects of nebivolol on cardiac calcium sensitivity in skinned fibers and isolated trabeculae, not its pharmacokinetic disposition parameters. |
| PD | Bundkirchen_2001 | not_relevant | 0 | 0 | The study reports a negative result (no effect) on cardiac calcium sensitivity and does not provide a pharmacodynamic exposure-response or dose-response model for nebivolol. |
| popPK | Garbán_2004 | irrelevant | 0 | 0 | The study investigates the mechanism of action (estrogen receptor binding and vascular response) in isolated rat aortic rings and cell lines, not pharmacokinetic disposition parameters. |
| popPK | Gschwend_2009 | irrelevant | 0 | 0 | The study is a mechanistic investigation of vascular function in rats and does not report pharmacokinetic parameters for nebivolol. |
| PD | Gschwend_2009 | not_relevant | 2 | 1 | The study reports pharmacodynamic effects (endothelial relaxation) at fixed doses but does not provide concentration-effect data, PK parameters, or a fitted PD model with numeric parameters like EC50 or slope. |
| popPK | Kannan_2012 | irrelevant | 0 | 0 | Nebivolol is used only as a positive control in a zebrafish cardiovascular toxicity assay, and no pharmacokinetic parameters (CL, V, ka, etc.) are reported. |
| PD | Kannan_2012 | not_relevant | 1 | 0 | Nebivolol is used only as a single-dose positive control for comparison; no dose-response curve or numeric PD parameters (EC50, Emax) are reported for nebivolol. |
| popPK | Okamoto_2014 | irrelevant | 0 | 0 | The study is a pharmacodynamic trial assessing blood pressure effects and mechanisms of action, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for nebivolol. |
| popPK | Rawat_2023 | relevant | 4 | 8 | The study reports ocular PK parameters (Cmax, AUC, Tmax) for nebivolol in rabbits, but lacks standard systemic disposition parameters like clearance (CL) or volume of distribution (V). |
| popPK | Rosenkranz_2006 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vasodilatory properties in rat aorta, not a pharmacokinetic study reporting disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 00:26 UTC</sub>
