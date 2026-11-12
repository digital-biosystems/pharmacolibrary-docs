<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Eledoisin (Eledone cirrhosa)&quot;}]"></div>

# Eledoisin (Eledone cirrhosa)

- **generic name:** Eledoisin (Eledone cirrhosa)
- **T3DB:** [T3D2549](http://www.t3db.ca/toxins/T3D2549) · **PubChem:** none

## About

Eledoisin is a tachykinin peptide found in the Curled octopus (Eledone cirrhosa).

- **Category:** Protein, Animal Toxin, Natural Toxin
- **Route of exposure:** injection (sting/bite)
- **Sources and uses:** Eledoisin is a tachykinin peptide found in the Curled octopus (Eledone cirrhosa).
- **Mechanism of toxicity:** Eledoisin is a tachykinin peptide. Tachykinins excite neurons, evoke behavioural responses, are potent vasodilators and secretagogues, and contract (directly or indirectly) many smooth muscles. …
- **Health effects:** Eledoisin is a tachykinin peptide. Tachykinins excite neurons, evoke behavioral responses, are potent vasodilators and contract (directly or indirectly) many smooth muscles.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2549">T3DB T3D2549</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 69-25-0</small></p>

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
| 2026-11-10 04:31 | 6:46 | 0/0/0 | 0/0/0 | 0/0/0 | 138,094/4,523 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 37 matched, 37 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kitsukawa_1996.pdf` | Kitsukawa Y et al., Gastric chief cells possess NK1 recepto…, Biochimica et biophysica ac… (1996) | pd | 4 | [10.1016/0167-4889(96)00026-2](https://doi.org/10.1016/0167-4889(96)00026-2) | [8672532](https://www.ncbi.nlm.nih.gov/pubmed/8672532) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-11-10 04:30 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Andrews_1989 | irrelevant | 0 | 0 | The paper is a pharmacological dose-response study measuring plasma extravasation (functional response) in rats and does not report toxicokinetic parameters (half-life, clearance, Vd, etc.) for eledoisin. |
| popPK | Bailey_1984 | irrelevant | 0 | 0 | The paper focuses on pharmacological receptor characterization of substance P analogues in rat colon, and eledoisin is used only as a control substance to test for alpha-adrenergic involvement; no kinetic parameters for eledoisin are reported. |
| popPK | Bailey_1986 | irrelevant | 0 | 0 | The paper reports pharmacological potency data (receptor agonism/antagonism) for eledoisin in isolated tissues, not toxicokinetic parameters (disposition, half-life, clearance, etc.). |
| popPK | Bergmann_1974 | irrelevant | 0 | 0 | no_text gate: only 191 chars of text extracted (&lt; 400) |
| popPK | Castellino_1991 | irrelevant | 0 | 0 | The paper reports on the mutagenicity of eledoisin synthesized by azide coupling but contains no quantitative toxicokinetic parameters (half-life, clearance, etc.). |
| popPK | Cridland_1986 | irrelevant | 0 | 0 | The paper reports pharmacodynamic effects (tail-flick reflex reaction time) and potency rankings, but provides no toxicokinetic parameters such as half-life, clearance, or rate constants for eledoisin. |
| popPK | Erspamer_1962 | irrelevant | 0 | 0 | The paper describes pharmacological effects (smooth muscle stimulation) and dose-response assays but reports no quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for eledoisin. |
| popPK | Erspamer_1963 | irrelevant | 0 | 0 | The paper describes qualitative blood pressure responses to eledoisin in various animals but does not report any quantitative toxicokinetic parameters such as half-life, clearance, or rate constants. |
| popPK | Erspamer_1972 | irrelevant | 0 | 0 | The paper investigates the hemodynamic effects of bombesin, with eledoisin mentioned only as a comparator for blood pressure effects, and contains no toxicokinetic parameters (half-life, clearance, etc.) for eledoisin. |
| popPK | Erspamer_1980 | irrelevant | 0 | 0 | The paper reports pharmacological bioassay results (pharmacodynamics) rather than quantitative toxicokinetic parameters for eledoisin. |
| popPK | Fewtrell_1982 | irrelevant | 0 | 0 | The paper studies Substance P, and eledoisin is mentioned only as an inactive comparator peptide in an in vitro mast cell assay, with no toxicokinetic parameters reported. |
| popPK | Foreman_1985 | irrelevant | 0 | 0 | The paper studies the pharmacological action of peptides on guinea-pig lung tissue and reports the degradation half-life of Substance P, not the toxicokinetic parameters (absorption, distribution, metabolism, excretion) of eledoisin in an organism. |
| popPK | Furtado_1971 | irrelevant | 0 | 0 | The paper describes the pharmacological inhibition of water permeability in toad bladders by eledoisin, which is a functional/biological activity study and does not report quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for eledoisin. |
| popPK | Gillespie_1978 | irrelevant | 0 | 0 | The paper describes pharmacological actions on muscle tissue and contains no toxicokinetic parameters such as half-life, clearance, or volume of distribution. |
| popPK | Hahne_1981 | irrelevant | 0 | 0 | The paper focuses on cholecystokinin receptor antagonists (proglumide and benzotript) in guinea pig pancreas, mentioning eledoisin only as a non-specific control secretagogue without providing any kinetic parameters for it. |
| popPK | Jackman_1990 | irrelevant | 0 | 0 | The paper describes the enzymatic deamidation of eledoisin in human platelets (mechanistic enzyme characterization) but does not report quantitative toxicokinetic parameters (such as rate constants, half-lives, or clearance) for the disposition of the substance in a biological system. |
| popPK | Jensen_1983 | irrelevant | 0 | 0 | The paper studies the binding of secretin to pancreatic acini, and eledoisin is only mentioned as a substance that does not inhibit binding (negative control/comparator), with no kinetic parameters for eledoisin provided. |
| popPK | Jensen_1984 | irrelevant | 0 | 0 | The paper is an in vitro receptor pharmacology study of Substance P analogs where eledoisin is used only as a positive control ligand, and no toxicokinetic parameters are reported. |
| popPK | Kitsukawa_1996 | irrelevant | 0 | 0 | no_text gate: only 143 chars of text extracted (&lt; 400) |
| popPK | Komori_1986 | irrelevant | 0 | 0 | The paper identifies unknown smooth muscle peptides from chicken rectum and explicitly excludes eledoisin as a candidate based on bioassay; no kinetic parameters for eledoisin are reported. |
| popPK | Mathison_1985 | irrelevant | 0 | 0 | The paper reports pharmacological potency and dose-response data for eledoisin in a rat bladder model, but contains no toxicokinetic parameters such as half-life, clearance, or volume of distribution. |
| popPK | McGiff_1975 | irrelevant | 0 | 0 | The paper studies the renal hemodynamic and excretory effects (physiology/pharmacodynamics) of eledoisin, not its toxicokinetic parameters (e.g., clearance, half-life, partition coefficients). |
| popPK | Morimoto_1992 | irrelevant | 0 | 0 | The paper investigates the receptor binding selectivity of FK 224, and eledoisin is used solely as a ligand to characterize NK3 receptors, not as the subject of a toxicokinetic study. |
| popPK | Nicholson_1988 | irrelevant | 0 | 0 | The paper studies barbiturates in rat spinal cord and mentions an eledoisin-related peptide only as a co-test neurotransmitter for electrophysiological effects, providing no toxicokinetic parameters for eledoisin. |
| popPK | Niedrich_1975 | irrelevant | 0 | 0 | The paper investigates the mechanism of action (pharmacodynamics) of eledoisin derivatives on guinea pig ileum, providing no toxicokinetic parameters such as half-life, clearance, or distribution. |
| popPK | Oleynek_1994 | irrelevant | 0 | 0 | The paper characterizes the neurokinin antagonist WIN64821, using eledoisin only as a tool ligand or agonist in functional assays, and does not report toxicokinetic parameters for eledoisin. |
| popPK | Paegelow_1975 | irrelevant | 0 | 0 | The paper focuses on the mechanism of action (latency) of bradykinin and related substances like eledoisin on smooth muscle, reporting no toxicokinetic parameters (half-life, clearance, etc.) for eledoisin. |
| popPK | Paris_1989 | irrelevant | 0 | 0 | The paper is a behavioral pharmacology study measuring locomotor activity in rats and reports no toxicokinetic or pharmacokinetic parameters for eledoisin. |
| popPK | Rivier_1978 | irrelevant | 0 | 0 | The paper is a study on the thermoregulatory pharmacological potency of peptides, using eledoisin only as a low-potency comparator substance with no kinetic parameters reported. |
| popPK | Roubini_1991 | irrelevant | 0 | 0 | The paper describes the synthesis and pharmacological activity (EC50 values) of pseudopeptide analogues of substance P and enkephalin, and mentions eledoisin only as a comparator in an assay, providing no toxicokinetic parameters (e.g., half-life, clearance) for eledoisin. |
| popPK | Share_1981 | irrelevant | 0 | 0 | The paper studies the behavioral effects of substance P and eledoisin in mice as a pharmacological assay, but does not report any quantitative toxicokinetic parameters (half-life, clearance, distribution, etc.) for eledoisin. |
| popPK | Tateishi_1989 | irrelevant | 0 | 0 | The paper reports cross-reactivity percentages for eledoisin in a radioimmunoassay validation, which are analytical/immunological parameters, not toxicokinetic parameters (half-life, clearance, etc.) for the substance's disposition in a biological system. |
| popPK | Theodorsson-Norheim_1984 | irrelevant | 0 | 0 | The paper reports immunohistochemical distribution and chromatographic characterization of eledoisin-like immunoreactivity in rat tissues, but does not provide any quantitative toxicokinetic parameters (e.g., half-life, clearance, rate constants). |
| popPK | Tousignant_1991 | irrelevant | 0 | 0 | The paper reports receptor binding affinities (Kd, Bmax) and competition potencies for eledoisin, not toxicokinetic parameters such as clearance, half-life, or distribution. |
| popPK | Watson_1983 | irrelevant | 0 | 0 | The paper reports receptor binding constants (Ka) for an antagonist and discusses eledoisin only as a reference agonist in pharmacological studies, providing no kinetic parameters (half-life, clearance, etc.) for eledoisin. |
| popPK | Webber_1984 | irrelevant | 0 | 0 | The paper reports pharmacological potency (EC50) of eledoisin on guinea-pig lung strips in vitro, which is pharmacodynamic data, not toxicokinetic parameters (e.g., half-life, clearance, partition coefficient). |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Beledoisin_eledone_cirrhosa%5D&body=Drug%3A%20eledoisin_eledone_cirrhosa%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_eledoisin_eledone_cirrhosa/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
