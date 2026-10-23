<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H02A&quot;,&quot;href&quot;:&quot;atc/H02A.md&quot;},{&quot;label&quot;:&quot;aldosterone&quot;}]"></div>

# aldosterone

- **generic name:** aldosterone
- **ATC codes:** `H02AA01`
- **DrugBank:** [DB04630](https://go.drugbank.com/drugs/DB04630) · **PubChem:** [CID 5839](https://pubchem.ncbi.nlm.nih.gov/compound/5839)
- **molar mass:** 360.444 g/mol (C21H28O5) — DrugBank
- **groups:** investigational

## About

Aldosterone is a naturally occurring mineralocorticoid hormone of the corticosteroid class. As a medicine it has only investigational status and is not an approved treatment, so it is not in routine clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q184564](https://www.wikidata.org/wiki/Q184564) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Okoshi_2004_myocyte_surface_area](drugs/drug_aldosterone/pd_Okoshi_2004_myocyte_surface_area.md) | myocyte surface area ← aldosterone · stimulation effect | — | Okoshi MP et al., Aldosterone directly stimulates cardiac…, Journal of cardiac failure (2004) | [10.1016/j.cardfail.2004.03.002](https://doi.org/10.1016/j.cardfail.2004.03.002) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Okoshi_2004_protein_incorporation](drugs/drug_aldosterone/pd_Okoshi_2004_protein_incorporation.md) | protein incorporation ← aldosterone · direct Emax (saturable) effect | — | Okoshi MP et al., Aldosterone directly stimulates cardiac…, Journal of cardiac failure (2004) | [10.1016/j.cardfail.2004.03.002](https://doi.org/10.1016/j.cardfail.2004.03.002) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=aldosterone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | `SLC22A5` inhibitor | DrugBank actor |
| absorption | skeletal muscle | `SLC22A5` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inducer/substrate, `SLC22A5` inhibitor, `SLCO1A2` inhibitor | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inducer/substrate, `SLCO1A2` inhibitor | DrugBank actor |
| distribution | placenta | `ABCB1` inducer/substrate | DrugBank actor |
| distribution | testis | `ABCB1` inducer/substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | `ABCB1` inducer/substrate | DrugBank actor |
| excretion | liver | `ABCB1` inducer/substrate | DrugBank actor |
| — | adrenal gland | `CYP11B1` substrate, `CYP17A1` inducer | DrugBank actor |
| — | testis | `CYP17A1` inducer | DrugBank actor |

<sub>Actors without a tissue in the table: CYP11B2 (substrate), NR3C1 (unknown), NR3C2 (target), SLC12A1 (blocker).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:28 | 1:24 | 0/0/0 | 1/0/0 | 0/0/0 | 118,503/3,982 | einfracz / qwen3.8-27b | 8 | 3/5 | 8/0 | 0 |

## Coverage

- **PubMed hits:** 166 matched, 20 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cortés-Ríos_2026.pdf` | Cortés-Ríos J et al., Insights Into Aldosterone Regulation Th…, Clinical pharmacology and t… (2026) | popPK | 10 | [10.1002/cpt.70114](https://doi.org/10.1002/cpt.70114) | [41190731](https://pubmed.ncbi.nlm.nih.gov/41190731) | The study develops a PK model for aldosterone, but the specific numeric parameter values are not present in the provided text, only described qualitatively. |
| `Mochel_2015.pdf` | Mochel JP et al., Pharmacokinetic/Pharmacodynamic Modelin…, Pharmaceutical research (2015) | popPK | 5 | [10.1007/s11095-014-1587-9](https://doi.org/10.1007/s11095-014-1587-9) | [25446774](https://pubmed.ncbi.nlm.nih.gov/25446774) | The paper models aldosterone as a key biomarker in a dog PK/PD study, but no specific numeric PK parameter values (CL, V, t1/2) for aldosterone itself are visible in the provided evidence. |

<sub>queue written 2026-10-07T09:28:00.895755+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cortés-Ríos_2026 | relevant | 10 | 0 | The study develops a PK model for aldosterone, but the specific numeric parameter values are not present in the provided text, only described qualitatively. |
| popPK | Gashaw_2026 | irrelevant | 1 | 0 | The study evaluates the pharmacodynamics of an aldosterone synthase inhibitor (vicadrostat) and reports percentage changes in plasma aldosterone levels, but does not model or report quantitative pharmacokinetic parameters (clearance, volume, half-life) for the endogenous hormone aldosterone itself. |
| popPK | Hirooka_2023 | irrelevant | 0 | 0 | The study investigates ocular blood flow (hemodynamics) in patients with primary aldosteronism and does not report pharmacokinetic parameters (e.g., clearance, volume of distribution) for aldosterone. |
| popPK | Huang_2005 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of irbesartan, using aldosterone only as a pharmacodynamic endpoint (effect measurement) rather than the subject drug. |
| popPK | Kalogeropoulos_2020 | irrelevant | 0 | 0 | The study analyzes outcomes (HF hospitalizations) and renal effects of spironolactone (an aldosterone antagonist) but does not report pharmacokinetic parameters for aldosterone. |
| popPK | Katsu_2022 | irrelevant | 0 | 0 | The study investigates receptor ligand binding (EC50) and transcriptional activation in lungfish, not the pharmacokinetic disposition parameters (clearance, volume, half-life) of aldosterone. |
| popPK | Katsu_2024 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of mineralocorticoid receptor variants and reports binding affinities (EC50), not pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Langlois_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for desoxycorticosterone pivalate (DOCP), not aldosterone, as the subject drug. |
| popPK | Liu_2024 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological screen measuring receptor binding potency (EC50) and cellular response, not a pharmacokinetic study reporting disposition parameters like clearance or volume of distribution. |
| popPK | Lyngsø_2022 | irrelevant | 0 | 0 | The study is a mechanistic investigation of endothelial function and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for aldosterone. |
| popPK | Mermejo_2025 | irrelevant | 0 | 0 | The paper reports on adrenal vein sampling (AVS) lateralization indices and hormonal variability for diagnostic purposes, not pharmacokinetic parameters (CL, V, ka) of aldosterone. |
| popPK | Millischer_2022 | irrelevant | 0 | 0 | The study focuses on lithium pharmacokinetics, and aldosterone is only mentioned as part of the renin-aldosterone-angiotensin system in the context of medication comedication. |
| popPK | Mochel_2015 | relevant | 5 | 2 | The paper models aldosterone as a key biomarker in a dog PK/PD study, but no specific numeric PK parameter values (CL, V, t1/2) for aldosterone itself are visible in the provided evidence. |
| popPK | Okoshi_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of aldosterone's cellular effects on myocyte hypertrophy, reporting signaling pathways and growth metrics (protein incorporation, surface area) rather than pharmacokinetic disposition parameters. |
| popPK | Reboldi_2011 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of aliskiren, a drug that inhibits the RAAS, rather than the pharmacokinetic parameters of aldosterone itself. |
| popPK | Stadt_2022 | irrelevant | 0 | 0 | The paper is a mathematical model of potassium homeostasis where aldosterone is a regulatory hormone/co-factor, not the subject drug for pharmacokinetic parameter estimation. |
| popPK | Tang_2025 | irrelevant | 0 | 0 | The paper is a secondary analysis of the TOPCAT trial focusing on frailty indices and spironolactone, with no pharmacokinetic parameters (CL, V, ka, etc.) reported for aldosterone. |
| popPK | Wang_2017 | irrelevant | 0 | 0 | The study reports the pharmacokinetics of LY2623091, a mineralocorticoid receptor antagonist, not the drug aldosterone itself. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of aldosterone synthase inhibitors (e.g., baxdrostat), not aldosterone itself. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
