<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Malaoxon&quot;}]"></div>

# Malaoxon

- **generic name:** Malaoxon
- **T3DB:** [T3D4519](http://www.t3db.ca/toxins/T3D4519) · **PubChem:** none

## About

Malaoxon is a metabolite of malathion. Malaoxon is a chemical compound with the formula C10H19O7PS. More specifically, it is a phosphorothioate. …

- **Category:** Animal Toxin, Natural Toxin
- **Mechanism of toxicity:** Malaoxon is a cholinesterase or acetylcholinesterase (AChE) inhibitor. A cholinesterase inhibitor (or 'anticholinesterase') suppresses the action of acetylcholinesterase. …
- **Health effects:** Acute exposure to cholinesterase inhibitors can cause a cholinergic crisis characterized by severe nausea/vomiting, salivation, sweating, bradycardia, hypotension, collapse, and convulsions. Increasing muscle weakness is a possibility and may result in death if respiratory muscles are involved. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4519">T3DB T3D4519</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 1634-78-2</small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| malaoxon | parent | 314.289 | C10H19O7PS | PubChem | [15415](https://pubchem.ncbi.nlm.nih.gov/compound/15415) | Tsuda_1997 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="fish" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span><br><sub>blocking: no kinetic quantity — no half-life, rate constant, volume or clearance (exposur…</sub> | [Tsuda_1997_reference](drugs/toxin_malaoxon/Malaoxon_Tsuda1997_reference.md) | — | 1-compartment (no model) | 1 | Tsuda T et al., Acute toxicity, accumulation and excret…, Chemosphere (1997) | [10.1016/s0045-6535(97)00180-x](https://doi.org/10.1016/s0045-6535(97)00180-x) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-11 02:54 | 9:24 | 0/1/0 | 0/0/0 | 0/0/0 | 132,730/8,325 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 21 matched, 21 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Nallani_2025.pdf` | Nallani G et al., In vitro metabolic clearance of malathi…, Toxicology in vitro : an in… (2025) | popPK | 9 | [10.1016/j.tiv.2025.106080](https://doi.org/10.1016/j.tiv.2025.106080) | [40389100](https://pubmed.ncbi.nlm.nih.gov/40389100) | The paper reports metabolic clearance and formation kinetics of malaoxon (a malathion metabolite) in vitro and in vivo rat PK, but the evidence text contains only relative fold-differences rather than the specific numeric values (e.g., clearance rates in L/hr/mg protein). |
| `Tsuda_1997.pdf` | Tsuda T et al., Acute toxicity, accumulation and excret…, Chemosphere (1997) | popPK | 9 | [10.1016/s0045-6535(97)00180-x](https://doi.org/10.1016/s0045-6535(97)00180-x) | [9297785](https://pubmed.ncbi.nlm.nih.gov/9297785) | The paper reports quantitative bioconcentration factors (BCF) and partition coefficients for malaoxon, although the specific excretion rate constant was not measured. |

<sub>queue written 2026-11-11 02:50 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aker_2008 | irrelevant | 1 | 0 | The paper reports toxicity endpoints (LC50, IC50) and enzyme inhibition but lacks quantitative toxicokinetic parameters (half-life, rate constants, partition coefficients) for malaoxon. |
| popPK | Chen_2012 | irrelevant | 1 | 0 | The paper measures biomarker formation in food crops (strawberries) and discusses potential confounding in human biomonitoring, but it does not report kinetic parameters (half-life, rate constants, etc.) for malaoxon disposition in humans or animals. |
| popPK | Hwang_2014 | irrelevant | 2 | 0 | The paper reports in vitro enzymatic inhibition kinetics (IC50/IC90) of bedbug acetylcholinesterases by malaoxon, which describes the interaction of a pesticide with its molecular target rather than the toxicokinetic disposition (absorption, distribution, metabolism, excretion) of malaoxon in a whole organism. |
| popPK | Karunaratne_2000 | irrelevant | 2 | 9 | The paper reports enzyme kinetic constants for malaoxon binding to a specific esterase in mosquitoes (Culex tritaeniorhynchus), which represents a molecular interaction mechanism rather than whole-organism or standard toxicokinetic disposition parameters (half-life, clearance, partition coefficients) for the subject substance. |
| popPK | Kumar_2017 | irrelevant | 0 | 0 | The paper describes a chemical detection method for nerve agents and mimics, containing no toxicokinetic parameters. |
| popPK | Nallani_2025 | relevant | 9 | 3 | The paper reports metabolic clearance and formation kinetics of malaoxon (a malathion metabolite) in vitro and in vivo rat PK, but the evidence text contains only relative fold-differences rather than the specific numeric values (e.g., clearance rates in L/hr/mg protein). |
| popPK | Patil_2010 | irrelevant | 0 | 0 | The paper reports acute toxicity (LC50) and behavioral/morphological outcomes but provides no quantitative toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for malaoxon. |
| popPK | Picollo_1990 | irrelevant | 2 | 0 | The paper focuses on toxicity mechanisms and metabolic enzyme activities (esterases, GSTs) in insects, reporting no quantitative toxicokinetic parameters (half-life, clearance, partition coefficients) for malaoxon. |
| popPK | Pugliese_2004 | irrelevant | 0 | 0 | The paper studies pesticide residue reduction and by-product formation in nectarines, reporting no toxicokinetic parameters for malaoxon. |
| popPK | Segal_1989 | irrelevant | 2 | 0 | The study reports IC50 values for cholinesterase inhibition in an in vitro neural cell culture, which represents a biochemical potency metric rather than quantitative toxicokinetic parameters (half-life, clearance, partition coefficients) of malaoxon disposition. |
| popPK | Sun_2017 | irrelevant | 2 | 2 | The paper reports changes in LC50 values (toxicity potency) resulting from gene silencing, not quantitative toxicokinetic parameters such as half-life, rate constants, or partition coefficients. |
| PGx | Sun_2017 | not_relevant | 4 | 8 | The paper reports a change in toxicity (LC50, a PD endpoint) due to a genetic variant, but it does not report changes in pharmacokinetic parameters (e.g., AUC, Cmax, half-life) which are typically required for a strict pharmacogenomic PK/PD effect definition in this context, nor is the effect on malaoxon quantified as a fitted parameter. |
| popPK | Tong_2023 | irrelevant | 0 | 0 | The study reports residues, LD50 values, and proteomic effects but lacks any quantitative toxicokinetic parameters (such as half-life, clearance, or rate constants) for malaoxon. |
| popPK | unknown_1996 | irrelevant | 2 | 0 | The paper focuses on acute toxicity (LC50) and biochemical susceptibility correlations (AChE activity) rather than quantitative toxicokinetic parameters like half-life, clearance, or distribution volume for malaoxon in the fish. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmalaoxon%5D&body=Drug%3A%20malaoxon%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_malaoxon/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-11 02:50 UTC</sub>
