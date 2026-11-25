<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;quinupramine&quot;}]"></div>

# quinupramine

- **generic name:** quinupramine
- **ATC codes:** `N06AA23`
- **DrugBank:** [DB13246](https://go.drugbank.com/drugs/DB13246) · **PubChem:** none
- **molar mass:** 304.437 g/mol (C21H24N2) — DrugBank
- **groups:** approved

## About

Quinupramine is a tricyclic antidepressant used for the treatment of depression. It is used in Europe for this purpose.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q7272541](https://www.wikidata.org/wiki/Q7272541), [Wikipedia](https://en.wikipedia.org/wiki/Quinupramine?oldid=1329177289) (CC BY-SA 4.0) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| quinupramine | parent | 304.437 | C21H24N2 | DrugBank | — | Bouquet_1982 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C7 apparent-parameter coherence violated (double correction)</sub> | [Bouquet_1982_reference](drugs/drug_quinupramine/Quinupramine_Bouquet1982_reference.md) | — | 1-compartment (no model) | 6 | Bouquet S et al., [Crossover pharmacokinetic study of qui…, L'Encephale (1982) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 03:53 | 0:03 | 0/1/0 | 0/0/0 | 0/0/0 | 3,661/180 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Shin_2007.pdf` | Shin SC et al., Development and biopharmaceutical evalu…, Pharmaceutical development… (2007) | popPK | 7 | [10.1080/10837450701555695](https://doi.org/10.1080/10837450701555695) | [17963142](https://pubmed.ncbi.nlm.nih.gov/17963142) | The study reports pharmacokinetics and bioavailability of quinupramine in rats, but the specific quantitative parameters (CL, V, ka) are not explicitly listed in the provided evidence. |

<sub>queue written 2026-11-24 03:53 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Bouquet_1982 | not_relevant | 0 | 0 | The paper reports standard PK parameters (AUC, t1/2) in healthy subjects without stratification by genotype, phenotype, or any genetic variant. |
| popPK | Sakamoto_1987 | irrelevant | 0 | 0 | The paper describes in vitro receptor binding characteristics (KD, Bmax) rather than pharmacokinetic disposition parameters like clearance or volume. |
| PD | Sakamoto_1987 | not_relevant | 0 | 0 | The paper reports in vitro receptor binding affinity (KD, Bmax) and competition data, which are pharmacological binding parameters, not pharmacodynamic exposure-response or dose-response relationships for drug effects in vivo or in a functional assay. |
| PGx | Sakamoto_1987 | not_relevant | 0 | 0 | The paper studies the in vitro binding characteristics of the drug to receptor subtypes but does not report any pharmacogenomic effects or genotype-related variations in PK/PD parameters. |
| popPK | Sakamoto_1987_2 | relevant | 9 | 0 | The study is a pharmacokinetic study of quinupramine in rats, but the abstract only provides qualitative statements and metabolite ratios, with no quantitative parameter values (CL, V, t1/2, etc.) present in the provided evidence. |
| PGx | Sakamoto_1987_2 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics and pharmacodynamics of quinupramine in rats but does not report any gene variants, genotypes, or phenotypes influencing these parameters. |
| popPK | Shin_2007 | relevant | 7 | 2 | The study reports pharmacokinetics and bioavailability of quinupramine in rats, but the specific quantitative parameters (CL, V, ka) are not explicitly listed in the provided evidence. |
| PGx | Shin_2007 | not_relevant | 0 | 0 | The paper investigates the effect of formulation and penetration enhancers on the transdermal pharmacokinetics of quinupramine in rats, and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bquinupramine%5D&body=Drug%3A%20quinupramine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_quinupramine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 03:49 UTC</sub>
