<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Industrial and workplace toxins&quot;,&quot;href&quot;:&quot;toxins/IND.md&quot;},{&quot;label&quot;:&quot;Dibutyltin oxide&quot;}]"></div>

# Dibutyltin oxide

- **generic name:** Dibutyltin oxide
- **T3DB:** [T3D1259](http://www.t3db.ca/toxins/T3D1259) · **PubChem:** [CID 61221](https://pubchem.ncbi.nlm.nih.gov/compound/61221)

## About

Dibutyltin oxide is an organotin compound. It is used mainly in organic synthesis. Tin is a chemical element with the symbol Sn and atomic number 50. …

- **Category:** Industrial/Workplace Toxin, Synthetic Toxin
- **Route of exposure:** oral, inhalation, dermal
- **Sources and uses:** Dibutyltin oxide is used mainly in organic synthesis.
- **Mechanism of toxicity:** Organotin compounds produce neurotoxic and immunotoxic effects. Organotins may directly activate glial cells contributing to neuronal cell degeneration by local release of pro-inflammatory cytokines, tumor necrosis factor-_, and/or interleukins. …
- **Health effects:** Breathing or swallowing, or skin contact with organotins, can interfere with the way the brain and nervous system work, causing death in severe cases. Organic tin compounds may also damage the immune and reproductive system.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D1259">T3DB T3D1259</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 818-08-6</small></p>

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
| 2026-11-19 12:09 | 4:19 | 0/0/0 | 0/0/0 | 0/0/0 | 60,431/2,978 | einfracz / qwen3.8-flash-next | 2 | 1/1 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 3 matched, 16 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Azenha_2004.pdf` | Azenha MA et al., Estimation of the human intestinal perm…, Food and chemical toxicolog… (2004) | popPK | 6 | [10.1016/j.fct.2004.04.004](https://doi.org/10.1016/j.fct.2004.04.004) | [15234073](https://pubmed.ncbi.nlm.nih.gov/15234073) | The paper describes an in vitro study of dibutyltin's intestinal permeability using the Caco-2 model, which is relevant to absorption kinetics, but the extracted evidence contains only qualitative trends and comparisons without specific numeric Papp values. |

<sub>queue written 2026-11-19 12:09 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ali_1993 | irrelevant | 0 | 0 | The paper discusses radioiodinated estrogen derivatives; dibutyltin compounds appear only as chemical reagents (tri-n-butyltin hydride) in the synthesis, not as the subject of toxicokinetic measurement. |
| popPK | Azenha_2004 | relevant | 6 | 2 | The paper describes an in vitro study of dibutyltin's intestinal permeability using the Caco-2 model, which is relevant to absorption kinetics, but the extracted evidence contains only qualitative trends and comparisons without specific numeric Papp values. |
| popPK | Byington_1979 | irrelevant | 0 | 0 | The paper focuses on the inhibition of ligandin by organometals and the biliary excretion of sulfobromophthalein, with no quantitative kinetic parameters provided for dibutyltin oxide. |
| popPK | Evans_1979 | irrelevant | 2 | 0 | The paper reports on bis(tri-n-butyltin) oxide, not dibutyltin oxide, and provides only qualitative retention percentages and tissue distribution descriptions without specific kinetic parameters. |
| popPK | Gilpin_2021 | irrelevant | 0 | 0 | The paper focuses on a radiolabelled mercury-bispidine compound for theranostics, using tributylstannyl bispidine only as a synthetic precursor for transmetallation, with no toxicokinetic data for dibutyltin oxide. |
| popPK | Hashimoto_2021 | irrelevant | 0 | 0 | The paper describes the synthesis and evaluation of radiolabeled p38α inhibitors using tributyltin precursors for radioiodination; dibutyltin oxide is not the subject of kinetic study, nor are any kinetic parameters for it reported. |
| popPK | Hashimoto_2022 | irrelevant | 0 | 0 | The paper concerns a radiobrominated imaging probe for p38α, with dibutyltin appearing only as a reagent in radiosynthesis. |
| popPK | Oya_2007 | irrelevant | 0 | 0 | The paper discusses serotonin transporter ligands where tri-n-butyltin derivatives are mentioned only as precursors/reagents for radiolabeling, not as the subject of toxicokinetic study. |
| popPK | Sakurai_2026 | irrelevant | 0 | 0 | The paper studies the immunological effects of trimethyltin-induced neurodegeneration, not the toxicokinetics of dibutyltin_oxide, which is not mentioned. |
| popPK | Verdier_1991 | irrelevant | 1 | 0 | The paper reports on immunotoxicity endpoints and a NOEL dose, but contains no toxicokinetic parameters (such as half-lives, clearance, or partition coefficients) and specifically studies bis(tri-n-butyltin) oxide (TBTO) rather than dibutyltin oxide. |
| popPK | Vos_1984 | irrelevant | 0 | 0 | The paper reports immunological endpoints (cell counts, titers, functional assays) and does not provide any quantitative toxicokinetic parameters (e.g., half-lives, clearance, partition coefficients, or PBPK models). |
| popPK | Vos_1990 | irrelevant | 0 | 0 | The paper reports on immunotoxicity and immune function endpoints (e.g., thymus weight, NK cell activity, parasite resistance) but contains no quantitative toxicokinetic parameters such as half-lives, clearance, or partition coefficients for dibutyltin oxide. |
| popPK | Yamamoto_2020 | irrelevant | 0 | 0 | The paper reports binding affinity (Kd) for TPT and TBT to a protein, but explicitly states that dibutyltin oxide/dibutyltin compounds did not compete for binding and provides no kinetic parameters for them. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdibutyltin_oxide%5D&body=Drug%3A%20dibutyltin_oxide%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_dibutyltin_oxide/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
