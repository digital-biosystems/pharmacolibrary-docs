<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Viperotoxin&quot;}]"></div>

# Viperotoxin

- **generic name:** Viperotoxin
- **T3DB:** [T3D2642](http://www.t3db.ca/toxins/T3D2642) · **PubChem:** none

## About

Viperotoxin is a peptide toxin produced by the Eastern Russell's viper (Daboia russelli siamensis). It is neurotoxic.

- **Category:** Protein, Animal Toxin, Natural Toxin
- **Route of exposure:** injection (sting/bite)
- **Sources and uses:** Viperotoxin is a peptide toxin produced by the Eastern Russell's viper (Daboia russelli siamensis).
- **Mechanism of toxicity:** Viperotoxin is a presynaptic neurotoxin.
- **Health effects:** Viperotoxin is neurotoxic.
- **Acute toxicity:** LD50: 2.11 mg/kg (Intravenous, Mouse)

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2642">T3DB T3D2642</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-11 05:12 | 10:31 | 0/0/0 | 0/0/0 | 0/0/0 | 224,643/5,178 | einfracz / qwen3.8-27b | 6 | 1/5 | 6/0 | 0 |

## Coverage

- **PubMed hits:** 38 matched, 38 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Carman-Krzan_1993.pdf` | Carman-Krzan M et al., Arachidonic acid lipoxygenation may med…, Journal of neuroscience res… (1993) | pd | 4 | [10.1002/jnr.490340210](https://doi.org/10.1002/jnr.490340210) | [8450566](https://www.ncbi.nlm.nih.gov/pubmed/8450566) | metadata signals extractable PD data (IC50) |
| `Grosfils_1992.pdf` | Grosfils K et al., Inhibition by mepacrine and amylase sec…, Biochemical and biophysical… (1992) | pd | 4 | [10.1016/0006-291x(92)91208-8](https://doi.org/10.1016/0006-291x(92)91208-8) | [1373616](https://www.ncbi.nlm.nih.gov/pubmed/1373616) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-11-11 05:11 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Al_1997 | irrelevant | 0 | 0 | The paper studies the pharmacology of quinacrine (a phospholipase A2 inhibitor) and contains no data on viperotoxin toxicokinetics. |
| popPK | Albuquerque_1993 | irrelevant | 0 | 0 | The paper studies the mechanism of cocaine in piglets and does not contain any data on viperotoxin. |
| popPK | Bauersachs_1994 | irrelevant | 0 | 0 | The paper investigates endothelium-derived hyperpolarizing factor (EDHF) and bradykinin signaling in rat hearts and does not mention viperotoxin or provide any toxicokinetic parameters for it. |
| popPK | Bennett_1999 | irrelevant | 0 | 0 | The paper discusses secretory component as a PLA2 inhibitor in amniotic fluid and does not report kinetic parameters for viperotoxin. |
| popPK | Bergstrand_1984 | irrelevant | 0 | 0 | The paper studies the inhibitory effect of glucocorticosteroids on histamine release in human basophils and does not mention or measure viperotoxin. |
| popPK | Cailleaux_1999 | irrelevant | 0 | 0 | The paper investigates platelet-activating factor (PAF) in rabbit kidneys and does not involve viperotoxin or report any toxicokinetic parameters for it. |
| popPK | Carman-Krzan_1993 | irrelevant | 0 | 0 | The paper investigates the mechanism of NGF secretion in astrocytes and does not report toxicokinetic parameters for viperotoxin. |
| popPK | Coulthard_2011 | irrelevant | 0 | 0 | The paper investigates the efficacy of a phospholipase A2 inhibitor in a rat model of arthritis and does not contain any toxicokinetic parameters for viperotoxin. |
| popPK | Dave_2014 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for darapladib, not viperotoxin. |
| popPK | Delbarre_1990 | irrelevant | 0 | 0 | The paper studies the mechanism of action of indapamide in rats and does not mention viperotoxin or report any kinetic parameters for it. |
| popPK | Donowitz_1984 | irrelevant | 0 | 0 | The paper studies the mechanism of action of the laxative Senokot in rats and does not mention viperotoxin or any toxicokinetic parameters for it. |
| popPK | Fortes-Dias_1994 | irrelevant | 0 | 0 | The paper focuses on the protein structure and mechanism of action of a neutralizing factor (CNF) rather than reporting toxicokinetic parameters for viperotoxin. |
| popPK | Galettis_1990 | irrelevant | 0 | 0 | The paper studies tenebrosin-C, not viperotoxin, and reports no kinetic parameters. |
| popPK | Garnier_1998 | irrelevant | 0 | 0 | The paper studies muscarinic receptors and alphaMSH secretion in frogs and does not contain any data or kinetic parameters for viperotoxin. |
| popPK | Grosfils_1992 | irrelevant | 0 | 0 | The paper studies the effect of mepacrine on amylase secretion and does not contain kinetic parameters for viperotoxin. |
| popPK | Han_1999 | irrelevant | 0 | 0 | The paper studies ginsenosides in rabbit renal cells and contains no data or mention of viperotoxin. |
| popPK | Hayabuchi_1998 | irrelevant | 0 | 0 | The paper studies the mechanism of endothelium-derived hyperpolarizing factor (EDHF) and does not report toxicokinetic parameters for viperotoxin. |
| popPK | Hecker_1994 | irrelevant | 0 | 0 | The paper investigates endothelium-derived hyperpolarizing factor and arachidonic acid metabolites in vascular tissue, with no mention of viperotoxin or its toxicokinetics. |
| popPK | Igarashi_1999 | irrelevant | 0 | 0 | The paper investigates the toxicological mechanisms of maitotoxin (MTX), not viperotoxin, which is the target substance for extraction. |
| popPK | Iwai_1989 | irrelevant | 0 | 0 | The paper studies the effects of cysteinyl leukotrienes (LTC4 and LTD4) on rat liver perfusion and does not involve viperotoxin. |
| popPK | Lambré_2023 | irrelevant | 0 | 0 | The paper assesses the safety of a food enzyme (phospholipase A2 from Aspergillus niger) and does not report toxicokinetic parameters for viperotoxin. |
| popPK | Lambré_2023_2 | irrelevant | 0 | 0 | The paper evaluates the safety of the food enzyme phospholipase A2, not viperotoxin, and contains no kinetic parameters for the target substance. |
| popPK | Lin_1985 | irrelevant | 0 | 0 | The paper studies the mechanism of steroidogenesis in rat Leydig cells and does not contain any kinetic parameters for viperotoxin. |
| popPK | Liu_2026 | irrelevant | 0 | 0 | The paper focuses on the pathological mechanisms of acute kidney injury (inflammation, metabolism, apoptosis) rather than toxicokinetic parameters like half-life or clearance for the substance. |
| popPK | MacNaughton_1991 | irrelevant | 0 | 0 | The paper studies platelet-activating factor (PAF) and does not contain any data regarding viperotoxin. |
| popPK | MacPherson_2000 | irrelevant | 0 | 0 | The paper characterizes a phospholipase A2 activity in a horseshoe crab protein and does not report any toxicokinetic parameters for viperotoxin. |
| popPK | McPhillips_2007 | irrelevant | 0 | 0 | The paper studies the mechanism of efferocytosis in macrophages and contains no kinetic parameters for viperotoxin. |
| popPK | Ortner_2024 | irrelevant | 0 | 0 | The paper studies a cytosolic phospholipase A2 inhibitor (AVX001) for actinic keratosis and does not mention viperotoxin or any toxicokinetic parameters for it. |
| popPK | Ota_1993 | irrelevant | 0 | 0 | The paper investigates the mechanism of prostaglandin E2 release in rabbit gastric cells and does not contain any toxicokinetic data for viperotoxin. |
| popPK | Riley_2009 | irrelevant | 0 | 0 | The paper concerns the pharmacology of darapladib and does not report any toxicokinetic parameters for viperotoxin. |
| popPK | Samy_2011 | irrelevant | 0 | 0 | The paper is a review focused on the antimicrobial activity and mechanism of action of snake venom proteins against bacterial infection, containing no toxicokinetic parameters for viperotoxin. |
| popPK | Stanley-Samuelson_1991 | irrelevant | 0 | 0 | The paper investigates insect immune responses to bacterial infection and eicosanoid pathways, containing no data or parameters for viperotoxin. |
| popPK | Tajima_1984 | irrelevant | 0 | 0 | no_text gate: only 152 chars of text extracted (&lt; 400) |
| popPK | Tamaoki_1989 | irrelevant | 0 | 0 | The paper studies the effect of bradykinin on ciliary motility and does not contain any data or kinetic parameters for viperotoxin. |
| popPK | Tanaka_1992 | irrelevant | 0 | 0 | The paper reports on thielocin A1p, a PLA2 inhibitor, and does not report any toxicokinetic parameters for viperotoxin. |
| popPK | Townson_1996 | irrelevant | 0 | 0 | The paper studies the mechanism of prostaglandin production in bovine cells induced by TNF-alpha and contains no data or mention of viperotoxin toxicokinetics. |
| popPK | Yamanaka_1992 | irrelevant | 0 | 0 | The paper studies thrombin's effect on liver glycogenolysis and contains no data for viperotoxin. |
| popPK | Zorn_2025 | irrelevant | 0 | 0 | The paper concerns the safety evaluation of a food enzyme (phospholipase A2), not the toxicokinetics of viperotoxin. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bviperotoxin%5D&body=Drug%3A%20viperotoxin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_viperotoxin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
