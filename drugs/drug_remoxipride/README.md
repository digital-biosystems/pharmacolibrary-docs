<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;remoxipride&quot;}]"></div>

# remoxipride

- **generic name:** remoxipride
- **ATC codes:** `N05AL04`
- **DrugBank:** [DB00409](https://go.drugbank.com/drugs/DB00409) · **PubChem:** [CID 54477](https://pubchem.ncbi.nlm.nih.gov/compound/54477)
- **molar mass:** 371.269 g/mol (C16H23BrN2O3) — DrugBank
- **groups:** approved, withdrawn

## About

Remoxipride is a benzamide antipsychotic that was previously used to treat schizophrenia and acute mania. The medication was administered orally. It was withdrawn due to toxicity concerns including the risk of aplastic anemia.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q1169059](https://www.wikidata.org/wiki/Q1169059), [Wikipedia](https://en.wikipedia.org/wiki/Remoxipride?oldid=1371988915) (CC BY-SA 4.0) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| remoxipride | parent | 371.269 | C16H23BrN2O3 | DrugBank | [54477](https://pubchem.ncbi.nlm.nih.gov/compound/54477) | Widerlöv_1989 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [Widerlöv_1989_reference](drugs/drug_remoxipride/Remoxipride_Widerlv1989_reference.md) | — | 1-compartment (no model) | 3 | Widerlöv E et al., Effect of urinary pH on the plasma and…, European journal of clinica… (1989) | [10.1007/BF00558500](https://doi.org/10.1007/BF00558500) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Ma_2010_PRL](drugs/drug_remoxipride/pd_Ma_2010_PRL.md) | prolactin ← remoxipride · inhibition effect | — | Ma G et al., Comparison of the agonist-antagonist in…, British journal of clinical… (2010) | [10.1111/j.1365-2125.2010.03758.x](https://doi.org/10.1111/j.1365-2125.2010.03758.x) |
| <span class="pk-badge pk-badge--blue">Simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Taneja_2016_2_Prl](drugs/drug_remoxipride/pd_Taneja_2016_2_Prl.md) | plasma prolactin biomarker turnover ← remoxipride | — | Taneja A et al., Summary data of potency and parameter i…, Data in brief (2016) | [10.1016/j.dib.2016.07.060](https://doi.org/10.1016/j.dib.2016.07.060) |
| <span class="pk-badge pk-badge--blue">Simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Taneja_2016_2_Prl_2](drugs/drug_remoxipride/pd_Taneja_2016_2_Prl_2.md) | plasma prolactin biomarker turnover ← remoxipride | — | Taneja A et al., Summary data of potency and parameter i…, Data in brief (2016) | [10.1016/j.dib.2016.07.060](https://doi.org/10.1016/j.dib.2016.07.060) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [van_2017_2_ACTH](drugs/drug_remoxipride/pd_van_2017_2_ACTH.md) | plasma adrenocorticotrophic hormone ← remoxipride · stimulation effect | — | van den Brink WJ et al., Revealing the Neuroendocrine Response A…, The AAPS journal (2017) | [10.1208/s12248-016-0002-3](https://doi.org/10.1208/s12248-016-0002-3) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [van_2017_2_PRL](drugs/drug_remoxipride/pd_van_2017_2_PRL.md) | plasma prolactin ← remoxipride · stimulation effect | — | van den Brink WJ et al., Revealing the Neuroendocrine Response A…, The AAPS journal (2017) | [10.1208/s12248-016-0002-3](https://doi.org/10.1208/s12248-016-0002-3) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 03:55 | 0:38 | 1/0/0 | 5/0/0 | 0/0/0 | 22,483/4,513 | einfracz / qwen3.8-27b | 2 | 1/1 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Widerlöv_1989.pdf` | Widerlöv E et al., Effect of urinary pH on the plasma and…, European journal of clinica… (1989) | popPK | 10 | [10.1007/BF00558500](https://doi.org/10.1007/BF00558500) | [2574673](https://pubmed.ncbi.nlm.nih.gov/2574673) | The abstract explicitly reports quantitative PK parameters including clearance, half-life, and urinary excretion data for remoxipride in humans. |

<sub>queue written 2026-11-24 03:54 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ma_2010 | irrelevant | 1 | 0 | The study models the pharmacodynamic effect on prolactin (tolerance) rather than reporting pharmacokinetic parameters (CL, V, etc.) for remoxipride. |
| PGx | Ma_2010 | not_relevant | 0 | 0 | The paper models prolactin response kinetics (pool vs AAI model) in healthy subjects without investigating any genetic variants or pharmacogenomic factors. |
| popPK | Movin-Osswald_1995 | relevant | 8 | 0 | The paper describes a PK-PD model for remoxipride, but the extracted evidence contains only a qualitative abstract without any specific numeric PK parameter values (e.g., CL, V, t1/2). |
| PGx | Movin-Osswald_1995 | not_relevant | 0 | 0 | The paper describes a PK/PD model for remoxipride and prolactin but does not report any analysis of gene variants or genotypes affecting these parameters. |
| popPK | Rinken_1999 | irrelevant | 0 | 0 | This is an in vitro pharmacological study measuring dopamine receptor binding affinities, not a pharmacokinetic study reporting disposition parameters for remoxipride. |
| PGx | Rinken_1999 | not_relevant | 0 | 0 | The paper reports a binding affinity of remoxipride in an in vitro assay but does not investigate any gene variants, genotypes, or pharmacogenomic effects on its pharmacokinetics or pharmacodynamics. |
| popPK | Stevens_2011 | relevant | 10 | 3 | The study reports a compartmental pharmacokinetic model for remoxipride in rats, but specific numeric parameter values (CL, V, ka) are not present in the provided abstract text. |
| PGx | Stevens_2011 | not_relevant | 0 | 0 | The paper reports pharmacokinetic modeling of remoxipride in rats involving intranasal vs. intravenous administration, but does not investigate gene variants or genotypes. |
| popPK | Stevens_2012 | relevant | 7 | 1 | The paper describes a mechanism-based PK-PD model for remoxipride in rats and humans, but the specific quantitative PK parameter values are not listed in the provided text evidence. |
| PGx | Stevens_2012 | not_relevant | 0 | 0 | The paper reports a mechanistic PK-PD model for remoxipride in rats and extrapolations to humans, but contains no data on pharmacogenomic effects of genetic variants. |
| popPK | Taneja_2016 | irrelevant | 1 | 0 | The study focuses on pharmacodynamics (prolactin release and receptor occupancy) rather than reporting quantitative disposition parameters (CL, V, etc.) for remoxipride. |
| PGx | Taneja_2016 | not_relevant | 0 | 0 | The study compares pharmacokinetic-pharmacodynamic models in rats and does not investigate gene variants or pharmacogenomic effects. |
| PGx | Widerlöv_1989 | not_relevant | 0 | 0 | The study investigates the effect of urinary pH (induced by ammonium chloride/sodium hydrogen carbonate) on PK parameters, not the effect of a genetic variant, genotype, or phenotype. |
| popPK | van_2017 | irrelevant | 1 | 0 | The study focuses on pharmacodynamic metabolomics biomarkers and PKPD models for metabolites rather than quantitative pharmacokinetic disposition parameters (CL, V, ka) for remoxipride itself. |
| PGx | van_2017 | not_relevant | 0 | 0 | The paper analyzes PKPD in rats using metabolomics but does not investigate the influence of genetic variants, genotypes, or pharmacogenomic phenotypes on these parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bremoxipride%5D&body=Drug%3A%20remoxipride%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_remoxipride/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 03:54 UTC</sub>
