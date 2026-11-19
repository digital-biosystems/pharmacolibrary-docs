<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Methylergonovine&quot;}]"></div>

# Methylergonovine

- **generic name:** Methylergonovine
- **T3DB:** [T3D3686](http://www.t3db.ca/toxins/T3D3686) · **DrugBank:** [DB00353](https://go.drugbank.com/drugs/DB00353) · **PubChem:** [CID 8226](https://pubchem.ncbi.nlm.nih.gov/compound/8226)
- **groups:** approved, investigational

## About

Methylergonovine is only found in individuals that have used or taken this drug. It is a homolog of ergonovine containing one more CH2 group (Merck Index, 11th ed). Methylergonovine acts directly on the smooth muscle of the uterus and increases the tone, rate, and amplitude of rhythmic contractions through binding and the resultant antagonism of the dopamine D1 receptor. …

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** ingestion. Absorption is rapid after oral (60% bioavailability) and intramuscular (78% bioavailability) administration.
- **Sources and uses:** Methylergometrine is a synthetic analogue of ergonovine, an alkaloid of the ergoline family that occurs in various species of vines of the Convolvulaceae (morning glory) family and in some species of lower fungi like other ergoline alkaloids. Methylergometrine is a blood vessel constrictor and smooth muscle agonist most commonly used to prevent or control excessive bleeding following childbirth and spontaneous or elective abortion. …
- **Mechanism of toxicity:** Ergoline alkaloids have been shown to have the significant affinity towards the 5-HT1 and 5-HT2 serotonin receptors, D1 and D2 dopamine receptors, and alpha-adrenergic receptors. This can result in a number of different effects, including vasoconstriction, convulsions, and hallucinations.
- **Health effects:** Ingestion of ergoline alkaloids is known to cause the disease ergotism. Ergotism occurs in two forms, gangrenous and convulsive, likely depending on the different kinds and amounts of ergoline alkaloids present.
- **Treatment:** Treatment for ergotism consists of vasodilators, anticoagulants and low molecular weight dextrans. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D3686">T3DB T3D3686</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 113-42-8 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:775307">ChEBI 775307</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| methylergonovine | parent | 339.439 | C20H25N3O2 | PubChem | [8226](https://pubchem.ncbi.nlm.nih.gov/compound/8226) | Mäntylä_1981 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human + animal" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Mäntylä_1977_reference](drugs/toxin_methylergonovine/Methylergonovine_Mntyl1977_reference.md) | — | 1-compartment (no model) | 0 | Mäntylä R et al., Pharmacokinetics of methylergometrine (…, Acta pharmacologica et toxi… (1977) | — |
| <span class="pk-rf" hidden data-species="human + animal" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span><br><sub>blocking: no kinetic quantity — no half-life, rate constant, volume or clearance (exposur…</sub> | [Mäntylä_1981_reference](drugs/toxin_methylergonovine/Methylergonovine_Mntyl1981_reference.md) | — | 1-compartment (no model) | 1 | Mäntylä R et al., Clinical pharmacokinetics of methylergo…, International journal of cl… (1981) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=methylergonovine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: DRD1 (target), HTR2B (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-15 07:46 | 1:35 | 0/2/0 | 0/0/0 | 0/0/0 | 88,630/5,658 | einfracz / qwen3.8-flash-next | 2 | 1/0 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 10 matched, 9 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mäntylä_1977.pdf` | Mäntylä R et al., Pharmacokinetics of methylergometrine (…, Acta pharmacologica et toxi… (1977) | popPK | 10 |  | [577369](https://pubmed.ncbi.nlm.nih.gov/577369) | The paper reports specific half-life values (T1/2alpha and T1/2beta) for methylergometrine (methylergonovine) in both humans and rabbits directly in the text. |
| `Mäntylä_1981.pdf` | Mäntylä R et al., Clinical pharmacokinetics of methylergo…, International journal of cl… (1981) | popPK | 9 |  | [7298246](https://pubmed.ncbi.nlm.nih.gov/7298246) | The paper reports quantitative pharmacokinetic parameters for methylergometrine (methylergonovine), including half-lives, Tmax, bioavailability, clearance, and volume of distribution, derived from studies in humans (puerperal mothers, male volunteers) and rabbits. |

<sub>queue written 2026-11-15 07:45 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Hung_2026 | irrelevant | 0 | 0 | The paper describes the use of methylergonovine as a provocative agent for diagnosing coronary artery spasm but reports no toxicokinetic parameters (absorption, distribution, metabolism, excretion) for methylergonovine itself. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmethylergonovine%5D&body=Drug%3A%20methylergonovine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_methylergonovine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-15 07:45 UTC</sub>
