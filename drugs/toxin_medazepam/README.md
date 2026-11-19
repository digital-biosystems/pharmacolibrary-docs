<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Medazepam&quot;}]"></div>

# Medazepam

- **generic name:** Medazepam
- **T3DB:** [T3D4648](http://www.t3db.ca/toxins/T3D4648) · **PubChem:** [CID 4041](https://pubchem.ncbi.nlm.nih.gov/compound/4041)
- **groups:** investigational

## About

Medazepam is a drug which is a benzodiazepine derivative. It possesses anxiolytic, anticonvulsant, sedative and skeletal muscle relaxant properties.

- **Category:** Drug, Synthetic Toxin
- **Mechanism of toxicity:** Benzodiazepines bind nonspecifically to benzodiazepine receptors BNZ1, which mediates sleep, and BNZ2, which affects affects muscle relaxation, anticonvulsant activity, motor coordination, and memory. As benzodiazepine receptors are thought to be coupled to gamma-aminobutyric acid-A (GABAA) receptors, this enhances the effects of GABA by increasing GABA affinity for the GABA receptor. …
- **Treatment:** General supportive measures should be employed, along with intravenous fluids, and an adequate airway maintained. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4648">T3DB T3D4648</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 2898-12-6</small></p>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Menon_1981_myoclonic_jerks](drugs/toxin_medazepam/pd_Menon_1981_myoclonic_jerks.md) | myoclonic jerks ← medazepam · inhibition effect | — | Menon MK et al., A new method for the evaluation of benz…, Psychopharmacology (1981) | [10.1007/BF00432441](https://doi.org/10.1007/BF00432441) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-15 13:35 | 1:46 | 0/0/0 | 1/0/0 | 0/0/0 | 39,260/2,170 | einfracz / qwen3.8-flash-next | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 17 matched, 17 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dinis-Oliveira_2017 | irrelevant | 0 | 0 | The paper is a review focusing on oxazepam, mentioning medazepam only as a precursor metabolizer without providing specific quantitative kinetic parameters for medazepam itself. |
| popPK | Jochemsen_1984 | irrelevant | 1 | 0 | The paper is a general review of benzodiazepine pharmacokinetics that mentions medazepam but reports no specific quantitative kinetic parameters for it. |
| popPK | Kubota_1985 | irrelevant | 0 | 0 | The paper reports pharmacological antagonism potency (pA2) in isolated tissue, not toxicokinetic parameters like half-life or clearance. |
| popPK | Menon_1981 | irrelevant | 0 | 0 | The paper reports only pharmacodynamic potency (ED50) values for behavioral effects, not toxicokinetic parameters like clearance, half-life, or partition coefficients. |
| popPK | Moosmann_2014 | irrelevant | 0 | 0 | The paper characterizes diclazepam and its metabolites, with no mention or kinetic parameters for medazepam. |
| popPK | Provenzano_1977 | irrelevant | 0 | 0 | Medazepam appears only as a comparator drug in a study about arginine pyroglutamate, with no kinetic parameters reported for medazepam. |
| popPK | Queiroz_2003 | irrelevant | 0 | 0 | Medazepam is used only as an internal standard for an analytical method and not as the substance of interest for kinetic parameter extraction. |
| popPK | Rao_1982 | irrelevant | 0 | 0 | Medazepam is used only as an external standard in an analytical method for diazepam, with no kinetic parameters reported. |
| PGx | Vrzal_2010 | not_relevant | 0 | 0 | The paper investigates drug-drug interaction potential (CYP3A4 induction via PXR) in vitro, not pharmacogenomic effects of human gene variants on medazepam PK or PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmedazepam%5D&body=Drug%3A%20medazepam%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_medazepam/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
