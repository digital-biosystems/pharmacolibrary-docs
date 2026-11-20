<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Household toxins&quot;,&quot;href&quot;:&quot;toxins/HOUS.md&quot;},{&quot;label&quot;:&quot;Nitrofural&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nitrofural_Nogueira2013_reference&quot;,&quot;label&quot;:&quot;Nogueira_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_nitrofural/Nitrofural_Nogueira2013_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

# Nitrofural

- **generic name:** Nitrofural
- **T3DB:** [T3D4752](http://www.t3db.ca/toxins/T3D4752) · **DrugBank:** [DB00336](https://go.drugbank.com/drugs/DB00336) · **PubChem:** [CID 5447130](https://pubchem.ncbi.nlm.nih.gov/compound/5447130)
- **groups:** approved, vet_approved, withdrawn

## About

A topical anti-infective agent effective against gram-negative and gram-positive bacteria. It is used for superficial wounds, burns, ulcers, and skin infections. Nitrofurazone has also been administered orally in the treatment of trypanosomiasis.

- **Category:** Drug, Household Toxin, Synthetic Toxin
- **Route of exposure:** well absorbed.
- **Sources and uses:** For the treatement of bacterial skin infections including pyodermas, infected dermatoses and infections of cuts, wounds, burns and ulcers due to susceptible organisms.
- **Mechanism of toxicity:** The exact mechanism of action is unknown. Nitrofurazone inhibits several bacterial enzymes, especially those involved in the aerobic and anaerobic degradation of glucose and pyruvate. …
- **Carcinogenicity:** IARC group 3, not classifiable as to its carcinogenicity to humans.
- **Acute toxicity:** Rat LD<sub>50</sub> = 590 mg/kg

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4752">T3DB T3D4752</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 59-87-0 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:170239">ChEBI 170239</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| Nitrofurazone (nitrofural) | parent | 198.138 | C6H6N4O4 | PubChem | [5447130](https://pubchem.ncbi.nlm.nih.gov/compound/5447130) | Nogueira_2013 |

## Start here

> **Nogueira_2013_reference** — <span class="pk-badge pk-badge--neutral">Not simulated</span> Male albino rabbits, n = 15. [Run it in the simulator](drugs/toxin_nitrofural/Nitrofural_Nogueira2013_reference.md?tab=Simulation) · [record](drugs/toxin_nitrofural/Nitrofural_Nogueira2013_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rabbit" data-age="adult" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span> | [Nogueira_2013_reference](drugs/toxin_nitrofural/Nitrofural_Nogueira2013_reference.md) | ▶ model + simulator | retention, 1 pool | 3 | Nogueira Filho MA et al., Pharmacokinetics of hydroxymethylnitrof…, Drug metabolism letters (2013) | [10.2174/18723128112069990013](https://doi.org/10.2174/18723128112069990013) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=nitrofural).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `XDH` substrate | DrugBank actor |
| metabolism | small intestine | `XDH` substrate | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-19 15:04 | 5:28 | 1/0/0 | 0/0/0 | 0/0/0 | 69,868/3,398 | einfracz / qwen3.8-flash-next | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 1  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Nogueira_2013.pdf` | Nogueira Filho MA et al., Pharmacokinetics of hydroxymethylnitrof…, Drug metabolism letters (2013) | popPK | 10 | [10.2174/18723128112069990013](https://doi.org/10.2174/18723128112069990013) | [23957951](https://pubmed.ncbi.nlm.nih.gov/23957951) | The paper reports quantitative pharmacokinetic parameters (elimination constant, half-life, AUC, MRT) for nitrofurazone in rabbits within the text. |
| `Nouws_1987.pdf` | Nouws JF et al., Some pharmacokinetic data about furalta…, The veterinary quarterly (1987) | popPK | 10 | [10.1080/01652176.1987.9694102](https://doi.org/10.1080/01652176.1987.9694102) | [3672857](https://pubmed.ncbi.nlm.nih.gov/3672857) | The paper explicitly reports quantitative toxicokinetic parameters (elimination half-life, maximum plasma concentration, urinary recovery, renal clearance) for nitrofurazone in calves. |

<sub>queue written 2026-11-19 15:04 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Findling_2000 | irrelevant | 0 | 0 | The paper reports on nefazodone, not nitrofural. |
| popPK | Kobylianskiĭ_2004 | irrelevant | 1 | 0 | The paper is a clinical study on sodium chloride and furacin for sinusitis, reporting no quantitative toxicokinetic parameters for nitrofural. |
| popPK | Mao_2026 | irrelevant | 0 | 0 | Nitrofural is mentioned only as a potential therapeutic drug candidate in molecular docking simulations, with no toxicokinetic parameters reported. |
| popPK | Muthumula_2024 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for zileuton, not nitrofural; nitrofural does not appear in the text or data. |
| PGx | PMID36049896_2023 | not_relevant | 0 | 0 | The text refers to a guideline for G6PD genotypes in general medication use and does not mention nitrofural or specific PK/PD parameters for it. |
| popPK | Serafim_2013 | irrelevant | 2 | 6 | The paper focuses on hydroxymethylnitrofurazone (NFOH), a prodrug, and reports pharmacokinetic parameters primarily for NFOH; while it compares NF parameters, the subject substance of the kinetic modeling and measurement is NFOH, not nitrofural itself as the primary subject. |
| popPK | de_2020 | irrelevant | 2 | 2 | The paper focuses on the formulation of a lipid carrier for a nitrofurazone derivative (NFOH, hydroxymethylnitrofurazone) and reports only a single plasma concentration point at 5 hours, which is insufficient to derive quantitative kinetic parameters like half-life or clearance. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnitrofural%5D&body=Drug%3A%20nitrofural%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_nitrofural/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-19 15:04 UTC</sub>
