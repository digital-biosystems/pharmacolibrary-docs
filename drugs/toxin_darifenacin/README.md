<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Darifenacin&quot;}]"></div>

# Darifenacin

- **generic name:** Darifenacin
- **T3DB:** [T3D3499](http://www.t3db.ca/toxins/T3D3499) · **DrugBank:** [DB00496](https://go.drugbank.com/drugs/DB00496) · **PubChem:** [CID 444031](https://pubchem.ncbi.nlm.nih.gov/compound/444031)
- **groups:** approved, investigational

## About

Darifenacin (Enablex&#8482;, Novartis) is a medication used to treat urinary incontinence. Darifenacin works by blocking the M3 muscarinic acetylcholine receptor, which is primarily responsible for bladder muscle contractions. It thereby decreases the urgency to urinate. …

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** the mean oral bioavailability at steady state is estimated to be 15% and 19% for 7.5 mg and 15 mg tablets, respectively.
- **Sources and uses:** For the treatment of overactive bladder with symptoms of urge urinary incontinence, urgency and frequency.
- **Mechanism of toxicity:** Darifenacin selectively antagonizes the muscarinic M3 receptor. M3 receptors are involved in contraction of human bladder and gastrointestinal smooth muscle, saliva production, and iris sphincter function.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D3499">T3DB T3D3499</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 133099-04-4 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:391960">ChEBI 391960</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| Darifenacin | parent | 426.56 | C28H30N2O2 | PubChem | [444031](https://pubchem.ncbi.nlm.nih.gov/compound/444031) | Kerbusch_2003 |
| Hydroxylated metabolite of Darifenacin | metabolite | — (mass units only) | — | — | — | — |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [Kerbusch_2003_reference](drugs/toxin_darifenacin/Darifenacin_Kerbusch2003_reference.md) | — | parent + metabolite (no model) | 3 | Kerbusch T et al., Population pharmacokinetic modelling of…, British journal of clinical… (2003) | [10.1046/j.1365-2125.2003.01967.x](https://doi.org/10.1046/j.1365-2125.2003.01967.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Kerbusch_2004_SF](drugs/toxin_darifenacin/pd_Kerbusch_2004_SF.md) | salivary flow ← darifenacin · target-mediated drug disposition | — | Kerbusch T et al., Assessment of the relative in vivo pote…, British journal of clinical… (2004) | [10.1046/j.1365-2125.2003.01988.x](https://doi.org/10.1046/j.1365-2125.2003.01988.x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=darifenacin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor/substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CHRM1 (target), CHRM2 (target), CHRM3 (target), CHRM4 (target), CHRM5 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-14 08:27 | 2:50 | 0/1/0 | 1/0/0 | 0/0/0 | 81,146/3,543 | einfracz / qwen3.8-flash-next | 3 | 0/3 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 32 matched, 32 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kerbusch_2003.pdf` | Kerbusch T et al., Population pharmacokinetic modelling of…, British journal of clinical… (2003) | popPK | 10 | [10.1046/j.1365-2125.2003.01967.x](https://doi.org/10.1046/j.1365-2125.2003.01967.x) | [14616424](https://pubmed.ncbi.nlm.nih.gov/14616424) | The paper reports specific quantitative pharmacokinetic parameters (clearance, volume of distribution, bioavailability) for darifenacin in a population pharmacokinetic model. |
| `Kerbusch_2004.pdf` | Kerbusch T et al., Assessment of the relative in vivo pote…, British journal of clinical… (2004) | popPK | 8 | [10.1046/j.1365-2125.2003.01988.x](https://doi.org/10.1046/j.1365-2125.2003.01988.x) | [14748816](https://pubmed.ncbi.nlm.nih.gov/14748816) | The paper describes a population pharmacokinetic (PopPK) model of darifenacin and its metabolite in humans, which qualifies as a kinetic model; however, the specific numeric kinetic parameters (e.g., clearance, volume, rate constants) are not listed in the provided abstract evidence, only potency ratios and statistical confidence intervals are visible. |

<sub>queue written 2026-11-14 08:26 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chapple_2005 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety study (pooled analysis) reporting pharmacodynamic outcomes and adverse events, with no toxicokinetic parameters (half-life, clearance, etc.) reported. |
| PGx | Dahlinger_2017 | not_relevant | 0 | 0 | The paper reports in vitro CYP inhibition potential (DDI) of darifenacin on other substrates, not pharmacogenomic effects of gene variants on darifenacin's own PK/PD. |
| PGx | Hassan_2023 | not_relevant | 0 | 0 | The paper describes computational drug repositioning and molecular docking for Alzheimer's, mentioning "pharmacogenomics" only as a network association analysis without reporting any specific gene variant effects on darifenacin PK or PD parameters. |
| popPK | Hill_2006 | irrelevant | 1 | 0 | The paper reports clinical efficacy and safety outcomes but no quantitative toxicokinetic parameters such as half-life, clearance, or volume of distribution. |
| popPK | Kerbusch_2004 | relevant | 8 | 4 | The paper describes a population pharmacokinetic (PopPK) model of darifenacin and its metabolite in humans, which qualifies as a kinetic model; however, the specific numeric kinetic parameters (e.g., clearance, volume, rate constants) are not listed in the provided abstract evidence, only potency ratios and statistical confidence intervals are visible. |
| PGx | Michel_2006 | not_relevant | 0 | 0 | The paper is a review that mentions genotype only in a general context and explicitly states that metabolite differences for darifenacin do not influence the clinical profile, reporting no specific quantitative PK/PD effect data. |
| PGx | Michel_2009 | not_relevant | 0 | 0 | The text discusses drug-drug interactions mediated by CYP3A4 inhibitors/inducers affecting darifenacin levels, not pharmacogenomic effects of gene variants. |
| popPK | Modiri_2002 | irrelevant | 1 | 0 | The paper reports pharmacodynamic ID50 values, not pharmacokinetic parameters such as clearance, half-life, or volume of distribution. |
| PGx | Sevrioukova_2025 | not_relevant | 0 | 0 | The paper reports on the structural and biochemical binding affinity of darifenacin to the CYP3A4 enzyme (in vitro), not on human pharmacogenomic associations with PK or PD parameters. |
| popPK | Veer_2026 | irrelevant | 0 | 0 | The paper is a meta-analysis of adverse effects and discontinuation rates, reporting no toxicokinetic parameters (e.g., half-life, clearance, Vd) for darifenacin. |
| popPK | Wrzos_2004 | irrelevant | 0 | 0 | The paper is a pharmacological study on smooth muscle contraction where darifenacin is used solely as a selective M3 muscarinic receptor antagonist (a tool compound), with no toxicokinetic parameters reported. |
| popPK | Yamada_2006 | irrelevant | 2 | 0 | The study reports receptor binding affinity (Ki) and functional time-course data rather than toxicokinetic parameters (e.g., half-life, clearance, volume of distribution) for darifenacin. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdarifenacin%5D&body=Drug%3A%20darifenacin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_darifenacin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-14 08:26 UTC</sub>
