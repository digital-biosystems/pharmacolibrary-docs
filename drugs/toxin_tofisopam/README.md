<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Tofisopam&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tofisopam_Klebovich1993_reference&quot;,&quot;label&quot;:&quot;Klebovich_1993_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_tofisopam/Tofisopam_Klebovich1993_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# Tofisopam

- **generic name:** Tofisopam
- **T3DB:** [T3D4572](http://www.t3db.ca/toxins/T3D4572) · **DrugBank:** [DB08811](https://go.drugbank.com/drugs/DB08811) · **PubChem:** none
- **groups:** investigational

## About

Tofisopam (marketed under brand names Emandaxin and Grandaxin) is a 2,3-benzodiazepine drug which is a benzodiazepine derivative. In contrast to classical 1,4-benzodiazepines, the compound does not bind to the benzodiazepine binding site of the gamma-aminobutyric acid receptor and its psychopharmacological profile differs from such compounds. Although Tofisopam is not approved for sale in North America, it is approved for use in various countries worldwide, including parts of Europe. …

- **Category:** Drug, Synthetic Toxin
- **Sources and uses:** For the treatment of anxiety and alcohol withdrawal.
- **Mechanism of toxicity:** Tofisopam does not bind to the benzodiazepine binding site of the gamma-aminobutyric acid receptor. One study (Rundfeldt C. et al.) has shown that tofisopam acts as an isoenzyme-selective inhibitor of phosphodiesterases (PDEs) with highest affinity to PDE-4A1 (0.42 _Мц_M) followed by PDE-10A1 (0.92 _Мц_M), PDE-3 (1.98 _Мц_M) and PDE-2A3 (2.11 _Мц_M).
- **Acute toxicity:** Oral, Rat: LD50 = 825 mg/kg.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4572">T3DB T3D4572</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 22345-47-7</small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| Tofisopam | parent | 382.46 | C22H26N2O4 | PubChem | [5502](https://pubchem.ncbi.nlm.nih.gov/compound/5502) | Klebovich_1993 |
| conjugated metabolites of tofisopam | metabolite | — (mass units only) | — | — | — | — |
| o-demethylated metabolites of tofisopam (mono-, di-, tri-, tetra-) | metabolite | — (mass units only) | — | — | — | — |

## Start here

> **Klebovich_1993_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> mice, rat, rabbit, dog, monkey and humans. [Run it in the simulator](drugs/toxin_tofisopam/Tofisopam_Klebovich1993_reference.md?tab=Simulation) · [record](drugs/toxin_tofisopam/Tofisopam_Klebovich1993_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human + animal" data-age="mixed" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span><br><sub>blocking: a value printed only as a range — the record carries its midpoint</sub> | [Klebovich_1993_reference](drugs/toxin_tofisopam/Tofisopam_Klebovich1993_reference.md) | ▶ model + simulator | retention, 1 pool | 1 | Klebovich I et al., [Pharmacokinetics and metabolism of tof…, Acta pharmaceutica Hungarica (1993) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tofisopam).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: PDE10A (inhibitor), PDE2A (inhibitor), PDE3A (inhibitor), PDE4A (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-13 04:42 | 1:12 | 1/0/0 | 0/0/0 | 0/0/0 | 24,497/6,189 | ollama / glm-5.3-flash | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 15 matched, 15 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Klebovich_1993.pdf` | Klebovich I et al., [Pharmacokinetics and metabolism of tof…, Acta pharmaceutica Hungarica (1993) | popPK | 10 |  | [8100113](https://pubmed.ncbi.nlm.nih.gov/8100113) | Reports quantitative kinetic parameters for tofisopam itself (tmax, biological half-lives of parent and radioactivity) with numeric values present in the abstract; it is a summary but includes its own study values. |
| `Drabant_2006.pdf` | Drabant S et al., Effect of tofisopam on the single-oral-…, European journal of clinica… (2006) | pgx | 7 | [10.1007/s00228-006-0160-9](https://doi.org/10.1007/s00228-006-0160-9) | [16791582](https://www.ncbi.nlm.nih.gov/pubmed/16791582) | metadata signals extractable PGX data (cyp3a4, PK/PD-context) |
| `Tóth_2008.pdf` | Tóth M et al., Tofisopam inhibits the pharmacokinetics…, European journal of clinica… (2008) | pgx | 7 | [10.1007/s00228-007-0397-y](https://doi.org/10.1007/s00228-007-0397-y) | [17989974](https://www.ncbi.nlm.nih.gov/pubmed/17989974) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-11-13 04:41 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Cameron_2007 | not_relevant | 3 | 5 | The study identifies CYP2C9/CYP3A4 as enzymes metabolizing tofisopam enantiomers, but does not report how gene variants/genotypes alter PK or PD parameters in vivo. |
| popPK | Drabant_2006 | irrelevant | 0 | 0 | no_text gate: only 117 chars of text extracted (&lt; 400) |
| PGx | Drabant_2006 | not_relevant | 0 | 0 | The paper examines tofisopam's effect on alprazolam PK/PD, not a gene variant effect on tofisopam's PK/PD parameters. |
| PGx | Niwa_2005 | not_relevant | 2 | 3 | In vitro CYP phenotyping of tofisopam metabolism (e.g., CYP3A4) with no gene variant, genotype, or phenotype effect on in vivo PK/PD parameters. |
| PGx | Tóth_2005 | not_relevant | 0 | 0 | Reports tofisopam's inhibition of CYP3A4 (a drug-drug/enzyme interaction), not a pharmacogenomic effect of a gene variant on tofisopam PK/PD. |
| popPK | Tóth_2006 | relevant | 4 | 2 | Human single-dose pharmacokinetic study of tofisopam is described but no numeric kinetic parameter values (half-life etc.) appear in the evidence. |
| popPK | Tóth_2008 | irrelevant | 0 | 0 | no_text gate: only 69 chars of text extracted (&lt; 400) |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btofisopam%5D&body=Drug%3A%20tofisopam%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_tofisopam/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-13 04:41 UTC</sub>
