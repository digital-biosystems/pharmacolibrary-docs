<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Benzatropine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Benzatropine_Raje2003_reference&quot;,&quot;label&quot;:&quot;Raje_2003_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_benzatropine/Benzatropine_Raje2003_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

# Benzatropine

- **generic name:** Benzatropine
- **T3DB:** [T3D2724](http://www.t3db.ca/toxins/T3D2724) · **DrugBank:** [DB00245](https://go.drugbank.com/drugs/DB00245) · **PubChem:** [CID 6832](https://pubchem.ncbi.nlm.nih.gov/compound/6832)
- **groups:** approved, investigational

## About

Benzotropine is a centrally-acting, antimuscarinic agent used as an adjunct in the treatment of Parkinson's disease. It may also be used to treat extrapyramidal reactions, such as dystonia and Parkinsonism, caused by antipsychotics (e.g. phenothiazines). Symptoms of Parkinson's disease and extrapyramidal reactions arise from decreases in dopaminergic activity which creates an imbalance between dopaminergic and cholinergic activity. …

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** intravenous, Oral.
Onset of action is 1-2 hours following oral administration. The onset of action is within minutes when administered by IM or IV injection.
- **Sources and uses:** For use as an adjunct in the therapy of all forms of parkinsonism and also for use in the control of extrapyramidal disorders due to neuroleptic drugs.
- **Mechanism of toxicity:** Benztropine is a selective M1 muscarinic acetylcholine receptor antagonist. It is able to discriminate between the M1 (cortical or neuronal) and the peripheral muscarinic subtypes (cardiac and glandular). …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2724">T3DB T3D2724</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 86-13-5 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:3048">ChEBI 3048</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| benzatropine | parent | 307.4 | C21H25NO | PubChem | [6832](https://pubchem.ncbi.nlm.nih.gov/compound/6832) | Raje_2003 |

## Start here

> **Raje_2003_reference** — <span class="pk-badge pk-badge--neutral">Not simulated</span> Male Sprague-Dawley rats. [Run it in the simulator](drugs/toxin_benzatropine/Benzatropine_Raje2003_reference.md?tab=Simulation) · [record](drugs/toxin_benzatropine/Benzatropine_Raje2003_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Raje_2003_reference](drugs/toxin_benzatropine/Benzatropine_Raje2003_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Raje S et al., Evaluation of the blood-brain barrier t…, The Journal of pharmacology… (2003) | [10.1124/jpet.103.053504](https://doi.org/10.1124/jpet.103.053504) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=benzatropine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| distribution | blood | `ALB` binder | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| — | brain | `SLC6A4` inhibitor | DrugBank actor |
| — | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CHRM1 (target), HRH1 (target), SLC6A2 (inhibitor), SLC6A3 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-13 06:57 | 4:55 | 1/0/0 | 0/0/0 | 0/0/0 | 60,213/4,684 | einfracz / qwen3.8-flash-next | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 18 matched, 18 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 1  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Raje_2003.pdf` | Raje S et al., Evaluation of the blood-brain barrier t…, The Journal of pharmacology… (2003) | popPK | 10 | [10.1124/jpet.103.053504](https://doi.org/10.1124/jpet.103.053504) | [12966155](https://pubmed.ncbi.nlm.nih.gov/12966155) | The paper explicitly reports quantitative toxicokinetic parameters (volume of distribution and elimination half-life) for benztropine (BZT) analogs in rats. |
| `Syed_2008.pdf` | Syed SA et al., Population pharmacokinetics, brain dist…, Journal of pharmaceutical s… (2008) | popPK | 8 | [10.1002/jps.21123](https://doi.org/10.1002/jps.21123) | [17879975](https://pubmed.ncbi.nlm.nih.gov/17879975) | The paper reports quantitative toxicokinetic parameters (Vd, t1/2, brain-to-plasma partition coefficients) for benztropine (BZT) itself in the abstract text. |

<sub>queue written 2026-11-13 06:54 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Brocks_1999 | irrelevant | 2 | 1 | This is a review article summarizing general pharmacokinetic trends of a class of drugs, providing no specific quantitative numeric parameters for benzatropine. |
| popPK | Ewing_1984 | irrelevant | 0 | 0 | The paper uses benztropine as a pharmacological inhibitor to study dopamine clearance kinetics, not as the subject of toxicokinetic modeling; no kinetic parameters for benztropine itself are reported. |
| popPK | Fahy_1989 | relevant | 3 | 2 | The paper reports serial serum concentrations from a case study, but the abstract text provided does not contain specific numeric kinetic parameters like half-life or clearance, only describing them qualitatively or implying they are in data/figures not fully detailed in this text block. |
| popPK | Folick_2022 | irrelevant | 0 | 0 | Benzatropine (spelled benztropine) is only mentioned as a mislabeled container name in a case report about glipizide-induced hypoglycemia; no kinetic parameters for benzatropine are reported. |
| popPK | Fowler_1994 | irrelevant | 0 | 0 | Benztropine is mentioned only as a potential inhibitor tested against cocaine binding, with no toxicokinetic parameters reported for benztropine itself. |
| popPK | Goff_1991 | irrelevant | 0 | 0 | The paper reports clinical outcomes and haloperidol pharmacokinetics, but provides no quantitative toxicokinetic parameters for benztropine itself. |
| popPK | Greenblatt_1977 | irrelevant | 1 | 0 | The paper reports pharmacokinetic data for amantadine, not benzatropine, which is only mentioned as a comparator in the trial design. |
| popPK | Newman_2001 | irrelevant | 0 | 0 | The paper reports only in vitro binding affinities (IC50/Ki) for drug transporters and receptors, with no quantitative toxicokinetic parameters (half-life, clearance, volume, etc.). |
| popPK | Othman_2007 | irrelevant | 2 | 8 | The paper reports kinetic parameters for chloro-substituted benztropine analogs (e.g., 4'-Cl BZT), not benzatropine itself, which is only mentioned as the parent compound class. |
| popPK | Othman_2007_2 | irrelevant | 1 | 8 | The paper reports kinetic parameters for chloro-benztropine analogs (3'-Cl BZT and 4',4''-diCl BZT), not the parent substance benzatropine. |
| popPK | Othman_2008 | irrelevant | 0 | 0 | The reported kinetic parameters belong to the analog GA2-50, not to benzatropine itself. |
| popPK | Raje_2006 | irrelevant | 0 | 0 | The paper reports kinetic parameters for AHN 1-055 (a benztropine analog), not benzatropine itself. |
| popPK | Ukairo_2005 | irrelevant | 0 | 0 | The paper reports binding affinity (Ki) and potency data for a protein mutant, not quantitative toxicokinetic parameters such as half-life, clearance, or volume of distribution. |
| popPK | Zahniser_1999 | irrelevant | 0 | 0 | The paper reports dopamine clearance rates in rat striatum, using benzatropine as a pharmacological tool, but reports no toxicokinetic parameters for benzatropine itself. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbenzatropine%5D&body=Drug%3A%20benzatropine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_benzatropine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-13 06:54 UTC</sub>
