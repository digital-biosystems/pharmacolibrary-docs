<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;butriptyline&quot;}]"></div>

# butriptyline

- **generic name:** butriptyline
- **ATC codes:** `N06AA15`
- **DrugBank:** [DB09016](https://go.drugbank.com/drugs/DB09016) · **PubChem:** [CID 21772](https://pubchem.ncbi.nlm.nih.gov/compound/21772)
- **groups:** approved, withdrawn

## About

Butriptyline is a tricyclic antidepressant used for treating depression. It is given by mouth in capsule form. It was previously used in the United Kingdom and other European countries but is no longer marketed.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q904524](https://www.wikidata.org/wiki/Q904524), [Wikipedia](https://en.wikipedia.org/wiki/Butriptyline?oldid=1378025697) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| butriptyline | parent | 293.454 | C21H27N | PubChem | [21772](https://pubchem.ncbi.nlm.nih.gov/compound/21772) | Bourgouin_1981 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Bourgouin_1981_reference](drugs/drug_butriptyline/Butriptyline_Bourgouin1981_reference.md) | — | 1-compartment (no model) | 1 | Bourgouin J et al., Butriptyline: human pharmacokinetics an…, Biopharmaceutics & drug dis… (1981) | [10.1002/bdd.2510020204](https://doi.org/10.1002/bdd.2510020204) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 17:24 | 0:06 | 1/0/0 | 0/0/0 | 0/0/0 | 4,193/163 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Randrup_1977.pdf` | Randrup A et al., Uptake inhibition of biogenic amines by…, Psychopharmacology (1977) | pd | 4 | [10.1007/BF00492370](https://doi.org/10.1007/BF00492370) | [408861](https://www.ncbi.nlm.nih.gov/pubmed/408861) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-11-23 17:24 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Amsterdam_1980 | irrelevant | 1 | 0 | This is a review article that explicitly states more definitive studies are needed for butriptyline and provides no original quantitative pharmacokinetic parameters or numeric values. |
| PGx | Amsterdam_1980 | not_relevant | 0 | 0 | The paper discusses general clinical pharmacokinetics and therapeutic ranges for tricyclic antidepressants but does not report any pharmacogenomic effects of gene variants on butriptyline PK/PD. |
| popPK | Bonnet_1984 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of dopamine uptake inhibition and release in rat synaptosomes, not a pharmacokinetic study reporting disposition parameters for butriptyline. |
| PD | Bonnet_1984 | not_relevant | 3 | 2 | The paper reports a qualitative observation of dopamine release at high concentrations (&gt;3 x 10^-6 M) for butriptyline but does not provide specific numeric PD parameters (like IC50 or Emax) or a full concentration-effect curve for this specific drug in the provided text. |
| PGx | Bonnet_1984 | not_relevant | 0 | 0 | The paper reports in-vitro synaptosomal studies of dopamine uptake/release and does not report pharmacogenomic effects on the PK or PD of butriptyline. |
| PGx | Bourgouin_1981 | not_relevant | 0 | 0 | The paper investigates formulation effects (conventional vs. sustained release) on pharmacokinetics, not genetic variants or genotypes. |
| popPK | Boyer_1980 | irrelevant | 1 | 0 | The paper is a general review of clinical efficacy and plasma level correlations without reporting original quantitative pharmacokinetic parameters (CL, V, etc.) for butriptyline. |
| PGx | Boyer_1980 | not_relevant | 0 | 0 | The paper is a general review of TCA plasma levels and efficacy, mentions butriptyline only as having limited studies, and does not report any pharmacogenomic effects (gene variants) on PK or PD. |
| popPK | Crawley_1981 | irrelevant | 0 | 0 | The paper is a behavioral pharmacology study using butriptyline as a negative control to establish specificity, with no pharmacokinetic data or disposition parameters reported. |
| PD | Crawley_1981 | not_relevant | 0 | 0 | The paper only qualitatively states that butriptyline did not produce the behavioral effect in a specific animal model, without providing any numeric dose-response data, concentration-effect curves, or PD parameters. |
| PGx | Crawley_1981 | not_relevant | 0 | 0 | The paper describes behavioral effects of benzodiazepines in animals and mentions butriptyline only as a negative control with no genetic component. |
| popPK | Guelfi_1983 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial comparing antidepressant outcomes and side effects, not a pharmacokinetic study, and reports no disposition parameters. |
| PD | Guelfi_1983 | not_relevant | 0 | 0 | The paper is a clinical trial comparing efficacy and side effects at fixed/flexible doses but does not report plasma concentrations or any quantitative exposure-response or dose-response modeling. |
| PGx | Guelfi_1983 | not_relevant | 0 | 0 | The study is a clinical trial comparing the efficacy and side effects of two drugs in a general population, with no mention of genetic variants or pharmacogenomics. |
| popPK | Kopanski_1983 | irrelevant | 0 | 0 | The study investigates pharmacodynamic effects (receptor sensitivity) in rats, not pharmacokinetic disposition parameters for butriptyline. |
| PGx | Kopanski_1983 | not_relevant | 0 | 0 | The paper studies the effects of antidepressants on rat adrenergic receptors, not the effect of human gene variants on the PK or PD of butriptyline. |
| popPK | Randrup_1977 | irrelevant | 0 | 0 | no_text gate: only 118 chars of text extracted (&lt; 400) |
| PD | Randrup_1977 | not_relevant | 0 | 0 | The paper is a theoretical review discussing the dopamine hypothesis and amine uptake inhibition, containing no experimental PK/PD data or numeric parameters for butriptyline. |
| PGx | Randrup_1977 | not_relevant | 0 | 0 | The paper discusses the mechanism of action of antidepressants regarding biogenic amine uptake and does not contain pharmacogenomic data for amitriptyline. |
| popPK | Risch_1979 | irrelevant | 0 | 0 | The paper is a review of literature regarding plasma levels and clinical efficacy, and it explicitly states that the relationship for butriptyline awaits further elucidation without providing specific quantitative PK parameters. |
| PGx | Risch_1979 | not_relevant | 0 | 0 | The paper discusses plasma levels and efficacy of tricyclic antidepressants but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters for butriptyline. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbutriptyline%5D&body=Drug%3A%20butriptyline%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_butriptyline/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 17:23 UTC</sub>
