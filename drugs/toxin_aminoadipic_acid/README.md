<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Aminoadipic acid&quot;}]"></div>

# Aminoadipic acid

- **generic name:** Aminoadipic acid
- **T3DB:** [T3D4259](http://www.t3db.ca/toxins/T3D4259) · **PubChem:** [CID 469](https://pubchem.ncbi.nlm.nih.gov/compound/469)

## About

Aminoadipic acid (2-aminoadipate) is a metabolite in the principal biochemical pathway of lysine. It is an intermediate in the metabolism (i.e. breakdown or degradation) of lysine and saccharopine. It antagonizes neuroexcitatory activity modulated by the glutamate receptor, N-methyl-D-aspartate; (NMDA). …

- **Category:** Industrial/Workplace Toxin, Food Toxin, Natural Toxin, Animal Toxin
- **Sources and uses:** This is an endogenously produced metabolite found in the human body. It is used in metabolic reactions, catabolic reactions or waste generation.
- **Health effects:** Chronically high levels of aminoadipic acid are associated with at least 2 inborn errors of metabolism including: : 2-aminoadipic and 2-oxoadipic aciduria.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4259">T3DB T3D4259</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 542-32-5 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:37024">ChEBI 37024</a></small></p>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Perkins_2019_reference](drugs/toxin_aminoadipic_acid/AminoadipicAcid_Perkins2019_reference.md) | — | 1-compartment (no model) | 0 | Perkins RK et al., Experimental Hyperglycemia Alters Circu…, Nutrients (2019) | [10.3390/nu11030532](https://doi.org/10.3390/nu11030532) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-09 18:20 | 10:02 | 0/1/0 | 0/0/0 | 0/0/0 | 147,017/4,548 | einfracz / qwen3.8-27b | 17 | 0/13 | 17/0 | 0 |

## Coverage

- **PubMed hits:** 40 matched, 40 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abu-Farha_2023 | not_relevant | 0 | 0 | The paper reports metabolomic changes (including α-aminoadipic acid) associated with the ANGPTL8 variant, but aminoadipic acid is an endogenous metabolite/biomarker, not a drug, so this is not a pharmacogenomic effect on a PK/PD parameter. |
| popPK | Arneson_1982 | irrelevant | 0 | 0 | The paper focuses on hyperpipecolic acidemia and explicitly states that alpha-aminoadipic acid was not detected in the infant's plasma or urine, providing no kinetic parameters for aminoadipic_acid. |
| popPK | Chang_2024 | irrelevant | 2 | 0 | The paper describes an isotopic tracer kinetic model measuring metabolic clearance rates (MCR) for α-aminoadipic acid in humans, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Davis_2021 | irrelevant | 0 | 0 | The paper uses L-alpha-aminoadipic acid (L-AAA) as a toxic agent to ablate astrocytes in mouse brain cultures to study Alzheimer's pathology, not to measure the toxicokinetic parameters of aminoadipic acid itself. |
| PGx | Fang_2022 | not_relevant | 0 | 0 | The text is a review on glycolipid metabolism disorder and does not report pharmacokinetic or pharmacodynamic parameters for aminoadipic acid, nor does it link gene variants to its specific PK/PD properties. |
| popPK | Fiermonte_2001 | irrelevant | 1 | 0 | The paper characterizes the transport kinetics of the human mitochondrial oxodicarboxylate carrier, reporting transport characteristics for 2-aminoadipate (a related but distinct compound) and 2-oxoadipate, but provides no in vivo toxicokinetic parameters (e.g., clearance, half-life, Vd) for the substance aminoadipic_acid itself. |
| PGx | Guo_2022 | not_relevant | 0 | 0 | The paper investigates biomarkers for hypertrophic cardiomyopathy using metabolomics and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of aminoadipic acid as a drug. |
| popPK | Hasenoehrl_2019 | irrelevant | 0 | 0 | The paper studies Mycobacterium tuberculosis metabolism and persistence, and aminoadipic acid is merely a metabolic intermediate in the bacterial lysine degradation pathway, not the subject of toxicokinetic analysis. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for a PSMA-targeting radiotracer conjugate containing aminoadipic acid as a linker, not for aminoadipic acid itself as the subject substance. |
| PGx | MahmoudianDehkordi_2021 | not_relevant | 0 | 0 | The paper examines metabolomic markers (including aminoadipic acid levels) in response to citalopram/escitalopram, but does not report a pharmacokinetic or pharmacodynamic effect of the drug itself being altered by a specific gene variant or genotype. |
| popPK | Pearson_2026 | irrelevant | 0 | 0 | The paper is an observational metabolomics study of retatrutide in humans where aminoadipic acid is merely a biomarker of metabolic changes, not the subject of kinetic parameter estimation (half-life, clearance, etc.). |
| PGx | Plubell_2018 | not_relevant | 0 | 0 | The paper studies a genetic knockout affecting the natural metabolite 2-aminoadipate, not the pharmacokinetics or pharmacodynamics of a drug administered to the subject. |
| popPK | Roxin_2026 | irrelevant | 0 | 0 | The paper investigates a radiotracer compound where aminoadipic acid is a structural scaffold component, not the subject substance for toxicokinetic analysis, and reports only binding affinity (Ki) and biodistribution of the radiolabeled tracer, not TK parameters for aminoadipic acid itself. |
| popPK | Schiavon_2004 | irrelevant | 0 | 0 | The paper studies PEG-Ara-C conjugates where aminoadipic acid is used only as a synthetic spacer/reagent, not as the subject substance for kinetic characterization. |
| PGx | Sheng_2025 | not_relevant | 0 | 0 | The paper studies the role of CBP/p300 genes in regulating amino acid metabolism and gluconeogenesis, but does not report pharmacokinetic or pharmacodynamic parameters for the administration of aminoadipic acid as a drug. |
| PGx | Tapia_2021 | not_relevant | 0 | 0 | The paper studies metabolite associations with Type 1 Diabetes risk, not the pharmacokinetics or pharmacodynamics of the drug aminoadipic acid. |
| PGx | Velasco_2002 | not_relevant | 0 | 0 | The paper discusses the molecular evolution of biosynthetic pathways for lysine and does not involve human pharmacogenomics or the pharmacokinetics/pharmacodynamics of aminoadipic acid as a drug. |
| popPK | Walters_2021 | irrelevant | 0 | 0 | The study subjects are vigabatrin, and aminoadipic acid is reported only as a secondary metabolite/toxin with concentrations but no kinetic parameters for aminoadipic acid itself. |
| PGx | Wang_2021 | not_relevant | 1 | 0 | The paper investigates the role of the DHTKD1 gene in endogenous α-aminoadipic acid metabolism and mitochondrial function in disease contexts (T2D/CMD), not the pharmacokinetics or pharmacodynamics of an exogenous drug treatment. |
| popPK | Xie_2023 | irrelevant | 0 | 0 | The paper describes a mechanism study on subretinal edema (pathology/toxicology) and does not report quantitative toxicokinetic parameters (e.g., half-life, clearance, distribution) for aminoadipic acid. |
| popPK | Xu_2026 | irrelevant | 0 | 0 | The paper investigates the effects of heavy metals and sulfate on Chinese cabbage, mentioning 2-aminoadipic acid only as a potential biomarker in a list without providing any quantitative toxicokinetic parameters for the substance. |
| popPK | Yang_2014 | irrelevant | 0 | 0 | The paper reports a metabonomic analysis of TM208 toxicity where aminoadipic acid is identified as a biomarker metabolite, but no kinetic parameters (half-life, clearance, etc.) for aminoadipic acid itself are provided. |
| PGx | You_2019 | not_relevant | 0 | 0 | The paper studies plant drought stress in sesame, not human pharmacogenomics or drug pharmacokinetics. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Baminoadipic_acid%5D&body=Drug%3A%20aminoadipic_acid%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_aminoadipic_acid/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-09 18:18 UTC</sub>
